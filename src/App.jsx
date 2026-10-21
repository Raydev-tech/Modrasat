import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight, BookOpen, Headphones, GraduationCap, CalendarDays, Users,
  ShieldCheck, Search, Menu, X, PlayCircle, Heart, Leaf, BookMarked,
  MoonStar, Mail, Phone, MapPin, Instagram, Youtube, Facebook, CheckCircle2,
  Sparkles, Compass, ScrollText, Star, Clock3, ChevronDown, Quote, Landmark,
  HandHeart, Languages, BookCopy, Sunrise, Send, Play, Pause, Repeat2, Volume2, ChevronLeft, ChevronRight, Bookmark, ListMusic
} from 'lucide-react'

const navItems = [
  ['Home', '#home'], ['Qur’an', '#quran-reader'], ['Prophets', '#prophets'],
  ['Learning', '#learning'], ['Daily Deen', '#daily-deen'], ['About', '#about'], ['Contact', '#contact'],
]

const features = [
  { icon: BookOpen, title: 'Qur’an Reader', text: 'Explore the Qur’an with Arabic text, translations and reading notes.', label: 'Read & reflect', href: '#quran' },
  { icon: Headphones, title: 'Audio Recitations', text: 'Listen to beautiful recitations and follow along at your own pace.', label: 'Listen & learn', href: '#learning' },
  { icon: GraduationCap, title: 'Islamic Courses', text: 'Discover Tajweed, Aqeedah, Fiqh, Seerah and Arabic learning paths.', label: 'Build knowledge', href: '#learning' },
  { icon: ScrollText, title: 'Stories of the Prophets', text: 'Learn lessons of patience, trust, courage and mercy from the Prophets.', label: 'Learn from history', href: '#prophets' },
  { icon: CalendarDays, title: 'Daily Islamic Tools', text: 'Daily reminders, Duas, Hadith reflections and prayer-time links.', label: 'Practice daily', href: '#daily-deen' },
  { icon: Compass, title: 'Qibla & Prayer', text: 'A space for prayer-time and Qibla tools when connected to reliable services.', label: 'Prepare for salah', href: '#daily-deen' },
  { icon: Users, title: 'Community & Support', text: 'Find learning encouragement and discover ways to connect with the institute.', label: 'Grow together', href: '#about' },
  { icon: ShieldCheck, title: 'Thoughtful & Safe', text: 'A calm learning experience designed around respect, clarity and privacy.', label: 'Learn with care', href: '#about' },
]

const prophets = [
  {
    name: 'Prophet Muhammad ﷺ',
    subtitle: 'The final Messenger',
    period: 'Makkah and Madinah',
    reference: 'Qur’an 21:107 · 33:21',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80',
    summary: 'The Qur’an describes Prophet Muhammad ﷺ as a mercy to the worlds and presents his character as an example for believers.',
    lesson: 'Mercy, honesty, patience and beautiful character.',
    detail: 'Learn about the Prophet’s mission, his patience in Makkah, the Hijrah to Madinah, his care for the vulnerable and the example of his character. Study the Seerah through reliable books and qualified teachers.',
  },
  {
    name: 'Prophet Ibrahim عليه السلام',
    subtitle: 'A model of faith',
    period: 'Ancient times',
    reference: 'Qur’an 37:100–107 · 2:124–132',
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=900&q=80',
    summary: 'Prophet Ibrahim is remembered for sincere worship, trust in Allah and his willingness to obey divine guidance.',
    lesson: 'Faith, devotion and reliance upon Allah.',
    detail: 'The Qur’an recounts Ibrahim’s call to pure worship, his supplications and the trials through which his trust in Allah was shown.',
  },
  {
    name: 'Prophet Musa عليه السلام',
    subtitle: 'Courage through hardship',
    period: 'Egypt and the Exodus',
    reference: 'Qur’an 20:9–36 · 28:3–35',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80',
    summary: 'Prophet Musa was sent to confront Pharaoh and guide the Children of Israel, relying on Allah through great trials.',
    lesson: 'Courage, justice and trust during difficulty.',
    detail: 'Read about Musa’s calling, his conversation with Allah, his mission to Pharaoh and the lessons of perseverance found throughout his story.',
  },
  {
    name: 'Prophet Yusuf عليه السلام',
    subtitle: 'Patience and forgiveness',
    period: 'Canaan and Egypt',
    reference: 'Qur’an, Surah Yusuf 12:4–101',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    summary: 'Surah Yusuf tells a story of hardship, steadfastness, integrity and forgiveness after years of separation and difficulty.',
    lesson: 'Patience, chastity, wisdom and forgiveness.',
    detail: 'The Qur’an tells Yusuf’s story from his childhood dream through trials and eventual reunion with his family, showing how hardship can be met with faith and integrity.',
  },
  {
    name: 'Prophet Nuh عليه السلام',
    subtitle: 'Steadfast in his mission',
    period: 'Ancient times',
    reference: 'Qur’an, Surah Nuh 71:1–28',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80',
    summary: 'Prophet Nuh called his people to worship Allah with remarkable perseverance despite long years of rejection.',
    lesson: 'Steadfastness, sincere advice and patience.',
    detail: 'Explore the Qur’anic account of Nuh’s call to his people and the importance of remaining sincere and patient when facing opposition.',
  },
  {
    name: 'Prophet Isa عليه السلام',
    subtitle: 'A sign and a messenger',
    period: 'Children of Israel',
    reference: 'Qur’an 3:45–51 · 19:16–36',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
    summary: 'The Qur’an honours Isa as the Messiah and a messenger of Allah, born miraculously to Maryam.',
    lesson: 'Devotion, humility and remembrance of Allah.',
    detail: 'Read the Qur’anic passages about Maryam, the birth of Isa and his message to the Children of Israel, using trusted tafsir for deeper study.',
  },
]

const learningPaths = [
  { icon: BookOpen, level: 'START HERE', title: 'Qur’an Reading', text: 'Build a regular reading habit and explore meanings of selected passages.', duration: 'Self-paced' },
  { icon: Headphones, level: 'FOUNDATIONS', title: 'Tajweed & Recitation', text: 'Learn the foundations of clear and careful Qur’an recitation with a teacher.', duration: 'Guided learning' },
  { icon: Languages, level: 'BEGINNER', title: 'Arabic Basics', text: 'Start learning Arabic letters, common words and reading foundations.', duration: 'Step by step' },
  { icon: Landmark, level: 'ISLAMIC STUDIES', title: 'Aqeedah, Fiqh & Seerah', text: 'Explore core Islamic knowledge with a structured learning plan.', duration: 'Topic-based' },
]

const faqs = [
  { q: 'Is the website free to explore?', a: 'This landing page is free to browse. Any future paid classes, donations or membership options should be clearly explained by the institute before launch.' },
  { q: 'Can I learn the stories of the Prophets here?', a: 'Yes. The stories section provides short introductions and Qur’anic references to help you begin. For detailed study, use reliable tafsir and Seerah sources and learn with qualified teachers.' },
  { q: 'Does the website include live prayer times?', a: 'The current version shows a preview area for daily tools. Accurate prayer times and Qibla direction need a location-aware service and should be configured before publication.' },
  { q: 'How do I contact the institute?', a: 'Use the contact section below. Replace the sample contact details and social links with the institute’s official information before publishing.' },
]

function Brand({ footer = false }) {
  return (
    <a href="#home" className={`brand ${footer ? 'brand-footer' : ''}`} aria-label="Rawdatul Huffadh home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 72 78" fill="none">
          <path d="M36 4C29 18 10 18 10 39V57L36 43L62 57V39C62 18 43 18 36 4Z" stroke="currentColor" strokeWidth="3.4" strokeLinejoin="round"/>
          <path d="M13 57L36 68L59 57" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round"/>
          <path d="M20 46L36 56L52 46L36 63L20 46Z" fill="currentColor"/>
          <path d="M40 17C32 24 38 35 48 31C43 39 29 34 30 24C31 20 35 17 40 17Z" fill="#bd8b3b"/>
          <path d="M36 33V45M32 39H40" stroke="#bd8b3b" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
      <span className="brand-copy">
        <strong>RAWDATUL HUFFADH</strong>
        <span><i /> ISLAMIC INSTITUTE <i /></span>
      </span>
    </a>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading" data-aos="fade-up">
      <p className="eyebrow centered"><span /> {eyebrow} <span /></p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}


const surahs = [
  { n: 1, name: 'Al-Fatihah', arabic: 'الفاتحة', meaning: 'The Opening', ayahs: 7, revelation: 'Makkah', sample: [
    { n: 1, ar: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', tr: 'Bismillāhi r-raḥmāni r-raḥīm', en: 'In the name of Allah—the Most Compassionate, Most Merciful.' },
    { n: 2, ar: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', tr: 'Al-ḥamdu lillāhi rabbi l-ʿālamīn', en: 'All praise is for Allah—Lord of all worlds.' },
    { n: 3, ar: 'الرَّحْمَٰنِ الرَّحِيمِ', tr: 'Ar-raḥmāni r-raḥīm', en: 'The Most Compassionate, Most Merciful.' },
    { n: 4, ar: 'مَالِكِ يَوْمِ الدِّينِ', tr: 'Māliki yawmi d-dīn', en: 'Master of the Day of Judgment.' },
    { n: 5, ar: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', tr: 'Iyyāka naʿbudu wa iyyāka nastaʿīn', en: 'You alone we worship and You alone we ask for help.' },
    { n: 6, ar: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', tr: 'Ihdinā ṣ-ṣirāṭa l-mustaqīm', en: 'Guide us along the Straight Path.' },
    { n: 7, ar: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', tr: 'Ṣirāṭa lladhīna anʿamta ʿalayhim ghayri l-maghḍūbi ʿalayhim wa la ḍ-ḍāllīn', en: 'The Path of those You have blessed—not those You are displeased with, or those who are astray.' },
  ]},
  { n: 2, name: 'Al-Baqarah', arabic: 'البقرة', meaning: 'The Cow', ayahs: 286, revelation: 'Madinah', sample: [
    { n: 1, ar: 'الم', tr: 'Alif-Lām-Mīm', en: 'Alif-Lām-Mīm.' },
    { n: 2, ar: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ هُدًى لِلْمُتَّقِينَ', tr: 'Dhālika l-kitābu lā rayba fīhi hudan lil-muttaqīn', en: 'This is the Book! There is no doubt about it—a guide for those mindful of Allah.' },
    { n: 3, ar: 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ', tr: 'Alladhīna yuʾminūna bil-ghaybi wa yuqīmūna ṣ-ṣalāta wa mimmā razaqnāhum yunfiqūn', en: 'Those who believe in the unseen, establish prayer, and donate from what We have provided for them.' },
  ]},
  { n: 3, name: 'Ali Imran', arabic: 'آل عمران', meaning: 'The Family of Imran', ayahs: 200, revelation: 'Madinah', sample: [{ n: 1, ar: 'الم', tr: 'Alif-Lām-Mīm', en: 'Alif-Lām-Mīm.' }] },
  { n: 18, name: 'Al-Kahf', arabic: 'الكهف', meaning: 'The Cave', ayahs: 110, revelation: 'Makkah', sample: [{ n: 1, ar: 'الْحَمْدُ لِلَّهِ الَّذِي أَنْزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ', tr: 'Al-ḥamdu lillāhi lladhī anzala ʿalā ʿabdihi l-kitāb', en: 'All praise is for Allah Who has revealed the Book to His servant.' }] },
  { n: 36, name: 'Ya-Sin', arabic: 'يس', meaning: 'Ya-Sin', ayahs: 83, revelation: 'Makkah', sample: [{ n: 1, ar: 'يس', tr: 'Yā-Sīn', en: 'Ya-Sin.' }] },
  { n: 55, name: 'Ar-Rahman', arabic: 'الرحمن', meaning: 'The Most Compassionate', ayahs: 78, revelation: 'Madinah', sample: [{ n: 1, ar: 'الرَّحْمَٰنُ', tr: 'Ar-Raḥmān', en: 'The Most Compassionate.' }] },
  { n: 112, name: 'Al-Ikhlas', arabic: 'الإخلاص', meaning: 'Sincerity', ayahs: 4, revelation: 'Makkah', sample: [
    { n: 1, ar: 'قُلْ هُوَ اللَّهُ أَحَدٌ', tr: 'Qul huwa Allāhu aḥad', en: 'Say, “He is Allah—One and Indivisible.”' },
    { n: 2, ar: 'اللَّهُ الصَّمَدُ', tr: 'Allāhu ṣ-ṣamad', en: 'Allah—the Sustainer needed by all.' },
    { n: 3, ar: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', tr: 'Lam yalid wa lam yūlad', en: 'He has never had offspring, nor was He born.' },
    { n: 4, ar: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', tr: 'Wa lam yakun lahu kufuwan aḥad', en: 'And there is none comparable to Him.' },
  ]},
  { n: 113, name: 'Al-Falaq', arabic: 'الفلق', meaning: 'The Daybreak', ayahs: 5, revelation: 'Madinah', sample: [{ n: 1, ar: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ', tr: 'Qul aʿūdhu bi-rabbi l-falaq', en: 'Say, “I seek refuge in the Lord of the daybreak.”' }] },
  { n: 114, name: 'An-Nas', arabic: 'الناس', meaning: 'Mankind', ayahs: 6, revelation: 'Madinah', sample: [{ n: 1, ar: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', tr: 'Qul aʿūdhu bi-rabbi n-nās', en: 'Say, “I seek refuge in the Lord of mankind.”' }] },
]

const readerReciters = [
  { name: 'Mishary Rashid Alafasy', id: 'ar.alafasy' },
  { name: 'Abdul Basit (Murattal)', id: 'ar.abdulbasitmurattal' },
  { name: 'Mahmoud Khalil Al-Husary', id: 'ar.husary' },
  { name: 'Abdur-Rahman as-Sudais', id: 'ar.abdurrahmaansudais' },
]

function QuranReader() {
  const [surahNumber, setSurahNumber] = useState(1)
  const [query, setQuery] = useState('')
  const [reciter, setReciter] = useState(readerReciters[0].id)
  const [showTranslation, setShowTranslation] = useState(true)
  const [showTransliteration, setShowTransliteration] = useState(true)
  const [repeatAyah, setRepeatAyah] = useState(null)
  const [playing, setPlaying] = useState(false)
  const [audioUrl, setAudioUrl] = useState('')
  const [audioError, setAudioError] = useState('')
  const [loadingAudio, setLoadingAudio] = useState(false)
  const [loadingSurah, setLoadingSurah] = useState(true)
  const [surahs, setSurahs] = useState([])
  const [ayahs, setAyahs] = useState([])
  const [currentAyahIndex, setCurrentAyahIndex] = useState(0)
  const [repeatCurrent, setRepeatCurrent] = useState(false)
  const [dataError, setDataError] = useState('')
  const currentSurah = surahs.find(s => s.number === surahNumber)
  const shownSurahs = surahs.filter(s => `${s.englishName} ${s.name} ${s.englishNameTranslation} ${s.number}`.toLowerCase().includes(query.toLowerCase()))

  useEffect(() => {
    let active = true
    fetch('https://api.alquran.cloud/v1/surah').then(response => {
      if (!response.ok) throw new Error('Could not load the Surah index.')
      return response.json()
    }).then(result => {
      if (active && result.data) setSurahs(result.data)
    }).catch(() => active && setDataError('The Surah index could not load. Check your internet connection and refresh this page.'))
    return () => { active = false }
  }, [])

  useEffect(() => {
    if (!surahs.length) return
    let active = true
    setLoadingSurah(true); setDataError(''); setAyahs([]); setAudioUrl(''); setPlaying(false)
    setRepeatAyah(null); setCurrentAyahIndex(0)
    const load = async () => {
      try {
        const endpoints = [
          `https://api.alquran.cloud/v1/surah/${surahNumber}/quran-uthmani`,
          `https://api.alquran.cloud/v1/surah/${surahNumber}/en.sahih`,
          `https://api.alquran.cloud/v1/surah/${surahNumber}/en.transliteration`,
          `https://api.alquran.cloud/v1/surah/${surahNumber}/${reciter}`,
        ]
        const results = await Promise.all(endpoints.map(async url => {
          const response = await fetch(url)
          if (!response.ok) throw new Error('Unable to load Qur’an data.')
          const json = await response.json()
          if (json.code !== 200 || !json.data?.ayahs) throw new Error('Qur’an data unavailable.')
          return json.data.ayahs
        }))
        if (!active) return
        const [arabic, translation, transliteration, recitation] = results
        setAyahs(arabic.map((ayah, index) => ({
          number: ayah.numberInSurah, arabic: ayah.text,
          translation: translation[index]?.text || '',
          transliteration: transliteration[index]?.text || '',
          audio: recitation[index]?.audio || '', globalNumber: ayah.number,
        })))
      } catch {
        if (active) setDataError('We could not load this Surah’s text and recitation. Check your connection and try again.')
      } finally { if (active) setLoadingSurah(false) }
    }
    load()
    return () => { active = false }
  }, [surahNumber, reciter, surahs.length])

  function stopAudio() {
    const audio = document.getElementById('quran-audio')
    if (audio) { audio.pause(); audio.loop = false }
    setPlaying(false)
  }
  async function playAyah(index, shouldRepeat = false) {
    const ayah = ayahs[index], audio = document.getElementById('quran-audio')
    if (!ayah?.audio || !audio) return
    setAudioError(''); setLoadingAudio(true); setRepeatCurrent(shouldRepeat)
    setRepeatAyah(ayah.number); setCurrentAyahIndex(index)
    try {
      audio.loop = shouldRepeat
      if (audio.src !== ayah.audio) audio.src = ayah.audio
      await audio.play(); setAudioUrl(ayah.audio); setPlaying(true)
    } catch { setAudioError('Audio could not start. Press play again or check your browser audio settings.') }
    finally { setLoadingAudio(false) }
  }
  async function playSurah() {
    if (playing) { stopAudio(); return }
    if (ayahs.length) await playAyah(currentAyahIndex, false)
  }
  function handleAudioEnded() {
    if (repeatCurrent) return
    const next = currentAyahIndex + 1
    if (next < ayahs.length) playAyah(next, false)
    else { setPlaying(false); setRepeatAyah(null); setCurrentAyahIndex(0) }
  }
  function selectSurah(number) {
    stopAudio(); setSurahNumber(number); setRepeatAyah(null); setRepeatCurrent(false)
    setCurrentAyahIndex(0); setAudioError('')
  }

  return <section id="quran-reader" className="reader-section section-pad">
    <div className="container">
      <SectionHeading eyebrow="Read, listen & reflect" title="The Complete Holy Qur’an" description="Browse all 114 Surahs and load every Ayah with Arabic text, English translation, beginner-friendly transliteration and recitation."/>
      <div className="reader-layout">
        <aside className="reader-sidebar">
          <div className="reader-search"><Search size={17}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Find a Surah..." aria-label="Find a Surah"/></div>
          <div className="surah-list-heading"><span>All 114 Surahs</span><span>{shownSurahs.length} shown</span></div>
          <div className="surah-list">
            {shownSurahs.map(s => <button key={s.number} onClick={() => selectSurah(s.number)} className={`surah-option ${surahNumber === s.number ? 'selected' : ''}`}>
              <span className="surah-number">{s.number}</span><span className="surah-option-copy"><strong>{s.englishName}</strong><small>{s.englishNameTranslation} · {s.numberOfAyahs} Ayahs</small></span><span className="surah-arabic">{s.name}</span>
            </button>)}
            {!shownSurahs.length && <p className="reader-list-note">No Surah matches that search.</p>}
          </div>
        </aside>
        <div className="reader-main">
          <div className="reader-topline"><div><p className="eyebrow">The Noble Qur’an</p><h3>{currentSurah?.englishName || 'Loading Surah…'} <span>({currentSurah?.name || '...'})</span></h3><p>{currentSurah?.englishNameTranslation || ''} · {currentSurah?.revelationType || ''} · {currentSurah?.numberOfAyahs || '—'} Ayahs</p></div><span className="reader-badge"><BookMarked size={15}/> Surah {surahNumber}</span></div>
          <div className="reader-controls">
            <label>Reciter<select value={reciter} onChange={e => {stopAudio();setReciter(e.target.value);setAudioUrl('')}}>{readerReciters.map(r => <option value={r.id} key={r.id}>{r.name}</option>)}</select></label>
            <label className="reader-toggle"><input type="checkbox" checked={showTranslation} onChange={e => setShowTranslation(e.target.checked)}/> English</label>
            <label className="reader-toggle"><input type="checkbox" checked={showTransliteration} onChange={e => setShowTransliteration(e.target.checked)}/> Transliteration</label>
          </div>
          {dataError && <p className="reader-error" role="status">{dataError}</p>}
          {loadingSurah ? <div className="reader-loading"><span className="player-spinner"/> Loading every Ayah for this Surah…</div> : <div className="ayah-list">
            {ayahs.map((ayah, index) => <article className={`ayah-card ${repeatAyah === ayah.number ? 'ayah-playing' : ''}`} key={`${surahNumber}-${ayah.number}`}>
              <div className="ayah-card-top"><span className="ayah-number">{ayah.number}</span><div className="ayah-actions"><button onClick={() => playAyah(index, true)} title="Repeat this Ayah" aria-label={`Repeat Ayah ${ayah.number}`}><Repeat2 size={16}/></button><button onClick={() => playAyah(index, false)} title="Play this Ayah" aria-label={`Play Ayah ${ayah.number}`}><Play size={15}/></button></div></div>
              <p className="ayah-arabic" lang="ar" dir="rtl">{ayah.arabic}</p>
              {showTransliteration && <p className="ayah-transliteration">{ayah.transliteration}</p>}
              {showTranslation && <p className="ayah-translation">{ayah.translation}</p>}
            </article>)}
          </div>}
          <div className="reader-player">
            <div className="player-disc"><Volume2 size={21}/></div>
            <div className="player-copy"><strong>{playing ? `Playing Ayah ${currentAyahIndex + 1}` : 'Listen to recitation'}</strong><span>{readerReciters.find(r => r.id === reciter)?.name}</span></div>
            <button className="player-button" onClick={playSurah} disabled={loadingAudio || loadingSurah || !ayahs.length} aria-label={playing ? 'Pause recitation' : 'Play recitation'}>{loadingAudio ? <span className="player-spinner"/> : playing ? <Pause size={19}/> : <Play size={19}/>}</button>
            <audio id="quran-audio" src={audioUrl || undefined} onEnded={handleAudioEnded} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} controls className="reader-audio-native"/>
          </div>
          {audioError && <p className="reader-error" role="status">{audioError}</p>}
          <p className="reader-disclaimer">The reader loads Qur’an text, English translation, transliteration and audio from AlQuran Cloud when online. Translations and transliterations are learning aids and cannot replace the Arabic Qur’an. Please verify recitation and meanings with trusted Qur’an editions and qualified teachers.</p>
        </div>
      </div>
    </div>
  </section>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProphet, setSelectedProphet] = useState(null)
  const [introOpen, setIntroOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const visibleFeatures = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    return features.filter(item => !query || `${item.title} ${item.text} ${item.label}`.toLowerCase().includes(query))
  }, [searchTerm])

  function subscribe(event) {
    event.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, href], index) => <a key={label} className={index === 0 ? 'nav-link active' : 'nav-link'} href={href}>{label}</a>)}
          </nav>
          <div className="header-actions">
            <button className="icon-button search-button" onClick={() => setSearchOpen(v => !v)} aria-label="Toggle search">{searchOpen ? <X size={19}/> : <Search size={19}/>}</button>
            <a className="button button-primary header-cta" href="#learning">Explore Learning <ArrowRight size={15}/></a>
            <button className="icon-button mobile-menu-button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X size={23}/> : <Menu size={23}/>}</button>
          </div>
        </div>
        {searchOpen && <div className="search-panel container"><Search size={18}/><input value={searchTerm} onChange={e => { setSearchTerm(e.target.value); document.querySelector('#features')?.scrollIntoView({behavior:'smooth', block:'start'}) }} placeholder="Search features..." aria-label="Search features" autoFocus/><button onClick={() => {setSearchTerm(''); setSearchOpen(false)}}>Clear</button></div>}
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowRight size={15}/></a>)}<a href="#learning" className="mobile-nav-cta" onClick={() => setMenuOpen(false)}>Explore Learning <ArrowRight size={15}/></a></nav>}
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-photo" aria-hidden="true"/>
          <div className="hero-wash" aria-hidden="true"/>
          <div className="container hero-inner">
            <div className="hero-copy" data-aos="fade-up">
              <p className="eyebrow"><span/> Welcome to Rawdatul Huffadh Islamic Institute</p>
              <h1>Read. Learn. Grow.<br/><em>Closer to Allah.</em></h1>
              <p className="hero-description">A welcoming Islamic platform to read the Qur’an, explore the lives of the Prophets, listen to recitations and strengthen your deen — all in one place.</p>
              <div className="hero-buttons">
                <a className="button button-primary button-large" href="#quran"><BookOpen size={19}/> Start Reading Qur’an <ArrowRight size={16}/></a>
                <a className="button button-outline button-large" href="#prophets"><ScrollText size={19}/> Explore Prophet Stories</a>
              </div>
              <div className="hero-trust-row">
                <span><CheckCircle2 size={16}/> Meaningful learning</span>
                <span><CheckCircle2 size={16}/> Qur’an-inspired</span>
                <span><CheckCircle2 size={16}/> For the whole family</span>
              </div>
            </div>
            <div className="hero-verse" data-aos="fade-left" data-aos-delay="200">
              <Sparkles size={17}/>
              <p>“And We have not sent you<br/>except as a mercy to the worlds.”</p>
              <span>— Qur’an 21:107</span>
            </div>
            <div className="hero-bottom-links">
              <a href="#quran"><BookOpen/> Qur’an Reader</a>
              <a href="#learning"><Headphones/> Audio Recitations</a>
              <a href="#learning"><GraduationCap/> Islamic Courses</a>
              <a href="#daily-deen"><CalendarDays/> Daily Islamic Tools</a>
            </div>
          </div>
        </section>

        <section id="features" className="features-section section-pad">
          <div className="container">
            <SectionHeading eyebrow="Explore the platform" title="A Place to Learn, Reflect & Grow" description="Useful features for a more connected and thoughtful Islamic learning journey."/>
            {searchTerm && <div className="search-result-note">Showing {visibleFeatures.length} feature(s) for “{searchTerm}” <button onClick={() => setSearchTerm('')}>Clear search</button></div>}
            <div className="feature-grid">
              {visibleFeatures.map(({icon: Icon, title, text, label, href}, i) => <a href={href} key={title} className="feature-card" data-aos="fade-up" data-aos-delay={(i % 4) * 70}>
                <span className="feature-icon"><Icon size={25} strokeWidth={1.8}/></span>
                <h3>{title}</h3><p>{text}</p><span className="feature-tag">{label}<ArrowRight size={13}/></span>
              </a>)}
            </div>
          </div>
        </section>

        <QuranReader />

        <section id="quran" className="quran-section container" data-aos="fade-up">
          <div className="quran-emblem"><BookOpen size={38}/><MoonStar size={18}/></div>
          <div className="quran-message">
            <p className="eyebrow">The Noble Qur’an</p>
            <h2>Guidance for a Better Life</h2>
            <p className="quran-quote">“Indeed, in the remembrance of Allah do hearts find rest.”</p>
            <span className="quran-reference">— Qur’an 13:28</span>
          </div>
          <div className="quran-pillars">
            <div><BookMarked/><strong>Read</strong><span>Reflect on the words</span></div>
            <div><Headphones/><strong>Listen</strong><span>Enjoy recitation</span></div>
            <div><Heart/><strong>Learn</strong><span>Build understanding</span></div>
            <div><Leaf/><strong>Grow</strong><span>Live the values</span></div>
          </div>
        </section>

        <section id="prophets" className="prophets-section section-pad">
          <div className="container">
            <SectionHeading eyebrow="Lessons from revelation" title="Stories of the Prophets" description="Short introductions to Qur’anic stories, with references to guide your further reading."/>
            <div className="prophet-grid">
              {prophets.map((prophet, i) => <article className="prophet-card" key={prophet.name} data-aos="fade-up" data-aos-delay={(i % 3) * 90}>
                <div className="prophet-image-wrap"><img src={prophet.image} alt="" loading="lazy"/><span className="prophet-period">{prophet.period}</span></div>
                <div className="prophet-card-content">
                  <p className="prophet-subtitle">{prophet.subtitle}</p>
                  <h3>{prophet.name}</h3>
                  <p className="prophet-summary">{prophet.summary}</p>
                  <div className="prophet-lesson"><Star size={15}/><span>{prophet.lesson}</span></div>
                  <p className="prophet-reference">Read: {prophet.reference}</p>
                  <button className="text-link" onClick={() => setSelectedProphet(prophet)}>Read story overview <ArrowRight size={15}/></button>
                </div>
              </article>)}
            </div>
            <p className="prophets-note"><BookOpen size={16}/> These are brief educational summaries, not a substitute for Qur’an, authentic Seerah, tafsir or guidance from qualified teachers.</p>
          </div>
        </section>

        <section id="learning" className="learning-section section-pad">
          <div className="container">
            <SectionHeading eyebrow="Your learning journey" title="Learning Paths for Every Stage" description="Start where you are and build knowledge step by step."/>
            <div className="learning-grid">
              {learningPaths.map(({icon: Icon, level, title, text, duration}, i) => <article className="learning-card" key={title} data-aos="fade-up" data-aos-delay={i*80}>
                <div className="learning-card-top"><span className="learning-icon"><Icon size={23}/></span><span className="learning-level">{level}</span></div>
                <h3>{title}</h3><p>{text}</p>
                <div className="learning-card-bottom"><span><Clock3 size={14}/>{duration}</span><a href="#contact" aria-label={`Ask about ${title}`}><ArrowRight size={18}/></a></div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="daily-deen" className="daily-section section-pad">
          <div className="container daily-inner">
            <div data-aos="fade-right">
              <p className="eyebrow"><span/> A gentle daily reminder</p>
              <h2>Make space for what matters.</h2>
              <p className="daily-description">Build a meaningful routine with beneficial learning, sincere reflection and small steps taken consistently.</p>
              <div className="daily-tools">
                <a href="#quran"><BookOpen/> Daily Ayah</a>
                <a href="#learning"><HandHeart/> Duas & Adhkar</a>
                <a href="#contact"><Compass/> Prayer & Qibla tools</a>
              </div>
              <p className="small-note">Prayer times and Qibla tools require a configured location-aware service before launch.</p>
            </div>
            <div className="daily-card" data-aos="zoom-in" data-aos-delay="150">
              <span className="daily-card-icon"><MoonStar size={24}/></span>
              <p className="arabic-text" lang="ar" dir="rtl">فَاذْكُرُونِي أَذْكُرْكُمْ</p>
              <p className="translation">“So remember Me; I will remember you.”</p>
              <span className="quran-reference">— Qur’an 2:152</span>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container values-inner">
            <div className="values-heading"><p className="eyebrow">Our values</p><h2>Knowledge with character.</h2><p>Learning is most beautiful when it shapes how we worship, speak and care for others.</p></div>
            <div className="value-item"><span><Heart/></span><h3>Mercy</h3><p>Meet people with kindness and care.</p></div>
            <div className="value-item"><span><BookOpen/></span><h3>Knowledge</h3><p>Seek beneficial knowledge with humility.</p></div>
            <div className="value-item"><span><HandHeart/></span><h3>Service</h3><p>Let faith inspire good deeds.</p></div>
          </div>
        </section>

        <section id="about" className="about-section section-pad">
          <div className="container about-inner" data-aos="fade-up">
            <div className="about-icon"><Users size={29}/></div>
            <div className="about-copy"><p className="eyebrow">About the institute</p><h2>Knowledge. Faith. Character.</h2><p>Rawdatul Huffadh Islamic Institute aims to make Islamic learning approachable, inspiring and accessible. Join us in a journey of reflection, understanding and steady growth.</p></div>
            <a href="#contact" className="button button-primary">Connect with us <ArrowRight size={16}/></a>
          </div>
        </section>

        <section className="faq-section section-pad">
          <div className="container faq-layout">
            <div><p className="eyebrow"><span/> Frequently asked questions</p><h2>Good questions.<br/>Clear answers.</h2><p className="faq-intro">A few helpful notes for visitors exploring the institute website.</p></div>
            <div className="faq-list">
              {faqs.map((faq, i) => <div className={`faq-item ${openFaq === i ? 'is-open' : ''}`} key={faq.q}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{faq.q}</span><ChevronDown size={18}/></button>
                {openFaq === i && <p>{faq.a}</p>}
              </div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="newsletter-section">
          <div className="container newsletter-inner">
            <div><p className="eyebrow">Stay connected</p><h2>Let beneficial knowledge find its way to you.</h2><p>Sign up for institute news and learning updates.</p></div>
            {subscribed ? <div className="subscribe-success"><CheckCircle2 size={22}/> Thank you! This demo has recorded your email in the current page only.</div> :
              <form className="newsletter-form" onSubmit={subscribe}><label className="sr-only" htmlFor="newsletter-email">Email address</label><Mail size={18}/><input id="newsletter-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address" required/><button className="button button-gold" type="submit">Subscribe <Send size={15}/></button></form>}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-col"><Brand footer/><p>Growing hearts through the light of knowledge.</p><p className="footer-motto">Knowledge <b>✦</b> Faith <b>✦</b> Character</p></div>
          <div className="footer-links"><h3>Explore</h3>{navItems.slice(0,5).map(([label,href]) => <a key={label} href={href}>{label}</a>)}</div>
          <div className="footer-links"><h3>Contact</h3><a href="mailto:info@your-institute.org"><Mail size={15}/> Email the institute</a><a href="#contact"><Phone size={15}/> Contact information</a><a href="#about"><MapPin size={15}/> About our institute</a></div>
          <div className="footer-connect"><h3>Stay connected</h3><p>Follow along for reminders and updates.</p><div className="social-links"><a href="#contact" aria-label="Facebook"><Facebook size={17}/></a><a href="#contact" aria-label="Instagram"><Instagram size={17}/></a><a href="#contact" aria-label="YouTube"><Youtube size={17}/></a></div><a className="footer-contact-link" href="mailto:info@your-institute.org">Send us a message <ArrowRight size={14}/></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Rawdatul Huffadh Islamic Institute. All rights reserved.</span><span>Made for meaningful learning.</span><a href="#home">Back to top ↑</a></div>
      </footer>

      {(selectedProphet || introOpen) && <div className="modal-backdrop" role="presentation" onClick={() => {setSelectedProphet(null);setIntroOpen(false)}}>
        <div className="content-modal" role="dialog" aria-modal="true" aria-labelledby="content-modal-title" onClick={e => e.stopPropagation()}>
          <button className="modal-close icon-button" onClick={() => {setSelectedProphet(null);setIntroOpen(false)}} aria-label="Close"><X size={22}/></button>
          {selectedProphet ? <>
            <p className="eyebrow">Prophet story overview</p>
            <h2 id="content-modal-title">{selectedProphet.name}</h2>
            <p className="modal-reference">{selectedProphet.reference}</p>
            <p>{selectedProphet.detail}</p>
            <div className="modal-lesson"><Star size={17}/><span><strong>Key lesson:</strong> {selectedProphet.lesson}</span></div>
            <p className="small-note">For deeper study, consult the cited Qur’anic passages with trusted tafsir and qualified teachers.</p>
            <button className="button button-primary" onClick={() => setSelectedProphet(null)}>Continue exploring <ArrowRight size={15}/></button>
          </> : <>
            <span className="modal-play"><PlayCircle size={42}/></span><p className="eyebrow centered">Welcome</p><h2 id="content-modal-title">Welcome to Rawdatul Huffadh</h2><p>This area is ready for your institute’s introduction video. Add your own video URL when available, or use it to explain the institute’s mission and programmes.</p><a href="#about" className="button button-primary" onClick={() => setIntroOpen(false)}>Learn about us <ArrowRight size={15}/></a>
          </>}
        </div>
      </div>}
    </div>
  )
}

export default App
