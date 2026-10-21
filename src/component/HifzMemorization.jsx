
import { useEffect, useState } from 'react'

const API = 'https://api.alquran.cloud/v1'

export default function HifzMemorization() {
  const [surahs, setSurahs] = useState([])
  const [surah, setSurah] = useState(1)
  const [ayahs, setAyahs] = useState([])
  const [index, setIndex] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [statuses, setStatuses] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem('hifz-progress') || '{}'
      )
    } catch {
      return {}
    }
  })

  useEffect(() => {
    fetch(`${API}/surah`)
      .then(res => {
        if (!res.ok) throw new Error('Could not load Surahs')
        return res.json()
      })
      .then(result => setSurahs(result.data || []))
      .catch(() => setError('Unable to load Surahs. Check your internet.'))
  }, [])

  useEffect(() => {
    let active = true

    async function loadAyahs() {
      setLoading(true)
      setError('')
      setIndex(0)
      setHidden(false)
      setAyahs([])

      try {
        const [arabicRes, audioRes] = await Promise.all([
          fetch(`${API}/surah/${surah}/quran-uthmani`),
          fetch(`${API}/surah/${surah}/ar.alafasy`)
        ])

        if (!arabicRes.ok || !audioRes.ok) {
          throw new Error('Unable to load this lesson')
        }

        const arabicData = await arabicRes.json()
        const audioData = await audioRes.json()

        if (!arabicData.data?.ayahs || !audioData.data?.ayahs) {
          throw new Error('Lesson data unavailable')
        }

        if (active) {
          setAyahs(arabicData.data.ayahs.map((ayah, i) => ({
            number: ayah.numberInSurah,
            arabic: ayah.text,
            audio: audioData.data.ayahs[i]?.audio || ''
          })))
        }
      } catch {
        if (active) setError(
          'Could not load the lesson. Check your connection and try again.'
        )
      } finally {
        if (active) setLoading(false)
      }
    }

    loadAyahs()
    return () => { active = false }
  }, [surah])

  useEffect(() => {
    try {
      localStorage.setItem('hifz-progress', JSON.stringify(statuses))
    } catch {
      // Progress remains available for this session if storage is unavailable.
    }
  }, [statuses])

  const current = ayahs[index]
  const key = `${surah}-${current?.number}`
  const status = statuses[key] || 'learning'

  function setStatus(value) {
    setStatuses(previous => ({ ...previous, [key]: value }))
  }

  function playAyah() {
    const audio = document.getElementById('hifz-audio')
    if (!current?.audio || !audio) return
    audio.src = current.audio
    audio.play().catch(() => {
      setError('Audio could not start. Try pressing play again.')
    })
  }

  const memorizedCount = Object.values(statuses).filter(
    value => value === 'memorized'
  ).length

  const progress = ayahs.length
    ? Math.round(
        ayahs.filter(ayah =>
          statuses[`${surah}-${ayah.number}`] === 'memorized'
        ).length / ayahs.length * 100
      )
    : 0

  return (
    <section id="hifz" className="section-pad">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Your Hifz journey</p>
          <h2>Online Qur’an Memorization</h2>
          <p>Memorize one Ayah at a time, practise recitation
            and keep track of your revision.</p>
        </div>

        <div className="hifz-card">
          <label className="hifz-label" htmlFor="hifz-surah">
            Choose a Surah
          </label>
          <select
            id="hifz-surah"
            className="hifz-select"
            value={surah}
            onChange={e => setSurah(Number(e.target.value))}
          >
            {surahs.map(item => (
              <option key={item.number} value={item.number}>
                {item.number}. {item.englishName} ({item.name})
              </option>
            ))}
          </select>

          <div className="hifz-progress">
            <div>
              <strong>Surah progress</strong>
              <span>{progress}% memorized</span>
            </div>
            <div className="hifz-progress-track">
              <div style={{ width: `${progress}%` }} />
            </div>
            <small>
              {memorizedCount} Ayahs marked memorized across your lessons
            </small>
          </div>

          {error && <p className="reader-error">{error}</p>}

          {loading ? (
            <p className="reader-loading">Loading memorization lesson...</p>
          ) : current ? (
            <>
              <div className="hifz-ayah-heading">
                <span>Ayah {current.number}</span>
                <span>{index + 1} of {ayahs.length}</span>
              </div>

              <div className="hifz-ayah">
                {hidden ? (
                  <p className="hifz-hidden">
                    Recite this Ayah from memory before revealing it.
                  </p>
                ) : (
                  <p className="ayah-arabic" lang="ar" dir="rtl">
                    {current.arabic}
                  </p>
                )}
              </div>

              <div className="hifz-actions">
                <button
                  className="button button-primary"
                  onClick={() => setHidden(value => !value)}
                >
                  {hidden ? 'Reveal Ayah' : 'Hide Ayah'}
                </button>
                <button
                  className="button button-outline"
                  onClick={playAyah}
                  disabled={!current.audio}
                >
                  ▶ Listen
                </button>
              </div>

              <label className="hifz-label" htmlFor="hifz-status">
                Your memorization status
              </label>
              <select
                id="hifz-status"
                className="hifz-select"
                value={status}
                onChange={e => setStatus(e.target.value)}
              >
                <option value="learning">Still learning</option>
                <option value="memorized">Memorized</option>
                <option value="revision">Needs revision</option>
              </select>

              <div className="hifz-navigation">
                <button
                  className="button button-outline"
                  disabled={index === 0}
                  onClick={() => {
                    setIndex(index - 1)
                    setHidden(false)
                  }}
                >
                  Previous Ayah
                </button>
                <button
                  className="button button-primary"
                  disabled={index === ayahs.length - 1}
                  onClick={() => {
                    setIndex(index + 1)
                    setHidden(false)
                  }}
                >
                  Next Ayah →
                </button>
              </div>
            </>
          ) : (
            <p>Select a Surah when its list has loaded.</p>
          )}

          <audio id="hifz-audio" controls className="hifz-audio" />

          <p className="hifz-note">
            Listen carefully and verify your memorization with a qualified
            Qur’an teacher. This version saves progress in this browser only.
          </p>
        </div>
      </div>
    </section>
  )
}
