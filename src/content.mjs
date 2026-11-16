// All copy, per language. Facts come from LinkedIn, the project READMEs and the live sites; nothing invented.
export const SITE = 'https://fracarlucci.github.io/';
export const EMAIL = 'fra.carlucci.02@gmail.com';
export const GITHUB = 'https://github.com/Fracarlucci';
export const LINKEDIN = 'https://www.linkedin.com/in/francesco-carlucci1/';

// Teseo OCR latency change, from Francesco's LinkedIn (Teseo internship entry: "Migrazione dell'OCR a MistralAI: latenza −61%").
export const TESEO_OCR = { value: -61, text: '−61%' };

export const LANGS = [
  { code: 'en', name: 'English', dir: '' },
  { code: 'it', name: 'Italiano', dir: 'it/' },
  { code: 'es', name: 'Español', dir: 'es/' },
];

// The map: each project wired to what it runs on.
export const TECH = ['Mistral AI', 'AWS', 'Payload CMS', 'PostgreSQL', 'React', 'TypeScript', 'Next.js', 'Vercel', 'Chrome extension', 'Playwright', 'Three.js'];
export const PROJECTS = [
  { id: 'teseo', name: 'Teseo', year: '2025', y: 185, stack: ['Mistral AI', 'AWS', 'Payload CMS', 'PostgreSQL', 'React', 'TypeScript'] },
  { id: 'pingopongo', name: 'PingoPongo', year: '2026', y: 338, stack: ['PostgreSQL', 'React', 'Next.js', 'TypeScript', 'Vercel'] },
  { id: 'aetas', name: 'Ætas', year: '2026', y: 486, stack: ['TypeScript', 'Vercel', 'Chrome extension', 'Playwright'] },
  { id: 'showroom', name: 'Car showroom', year: '2025', y: 614, stack: ['Three.js'] },
];

export const T = {
  en: {
    title: 'Francesco Carlucci, Software Engineer in Bologna',
    description: 'Francesco Carlucci, software engineer at MemorAIz in Bologna. Full-stack web apps with LLMs: Teseo, PingoPongo, Ætas and more.',
    ogLocale: 'en_US',
    ogAlt: 'Francesco Carlucci, software engineer, with a map of his projects and the technologies they run on',
    skip: 'Skip to content',
    langLabel: 'Language',
    nav: { teseo: 'Teseo', projects: 'Projects', experience: 'Experience' },
    h1: 'Francesco Carlucci, software engineer',
    lede: 'Full-stack web apps with language models inside, built at MemorAIz in Bologna.',
    write: 'Write to me',
    mapLabel: 'Map of four projects and the technologies each one runs on',
    mapCaption: 'Point at a project to trace its stack.',
    mapHead: ['Projects', 'Runs on'],
    mapFacts: { teseo: '100,000+ users', pingopongo: 'Our office ping pong ladder', aetas: 'Your life as a clock', showroom: 'A 3D showroom in the browser' },
    teseo: {
      h2: 'Teseo, rebuilt for my thesis',
      body: 'Teseo helps high school students translate and analyse Latin and Ancient Greek. As an intern at MemorAIz I moved it to TypeScript, Payload CMS and PostgreSQL on AWS, with translation and analysis now streaming in parallel.',
      readingLabel: 'OCR latency after the move to Mistral AI',
      rows: [
        ['Built by', 'Me, intern then engineer', 'person'],
        ['When', 'Sep 2025 to Mar 2026', 'time'],
        ['Registered users', '100,000+', 'time'],
      ],
      cta: 'Try Teseo',
      alt: 'Teseo, a Latin passage from Caesar typed into the translation box',
    },
    projects: {
      h2: 'Projects I build on my own',
      stack: 'Built with',
      private: 'Code private for now',
      code: 'Read the code',
      items: {
        pingopongo: { what: 'Our office ping pong ladder: Glicko ratings, yearly seasons, rivalries and push notifications, installed like an app.', live: 'Open the ladder', alt: 'PingoPongo leaderboard with ratings, recent form and a year of league activity; player names replaced for privacy' },
        aetas: { what: 'If your life were a clock, what time would it be? One hour is one year. A website and a Chrome extension with eleven dials.', live: 'Open Ætas', alt: 'Ætas, a gold watch face beside the birth date form' },
        showroom: { what: 'A 3D showroom in the browser: switch the car, set the lights, play the video wall.', live: 'Open the showroom', alt: 'A red Ferrari 488 under spotlights, with the video screen behind it' },
      },
    },
    experience: {
      h2: 'Where I have worked and studied',
      items: [
        ['Apr 2026 to now', 'Software Engineer, MemorAIz', 'Full-stack web apps in Bologna: frontend, backend, databases and generative AI features.'],
        ['Sep 2025 to Mar 2026', 'Software Engineer intern, MemorAIz', 'Redesigned Teseo, the subject of my master’s thesis.'],
        ['Sep 2023 to Mar 2026', 'MSc Computer Engineering, University of Bologna', 'Graduated 110 cum laude.'],
        ['Feb 2025 to Jun 2025', 'Erasmus+, Universitat Politècnica de València', ''],
        ['Sep 2020 to Nov 2023', 'BSc Computer Engineering, University of Bologna', ''],
      ],
    },
    skills: {
      h2: 'I take language models to production',
      panels: [
        ['AI in production', ['Streaming LLM output as it is written', 'Choosing models by quality, latency and cost', 'OCR with Mistral AI']],
        ['Shipping', ['AWS with CI/CD', 'Vercel', 'Tests with Vitest and Playwright']],
        ['Languages', ['Italian, native', 'English, full professional', 'Spanish, professional']],
      ],
    },
    close: 'Have a role or a project in mind? Write to me.',
    legal: '© 2026 Francesco Carlucci',
  },

  it: {
    title: 'Francesco Carlucci, Software Engineer a Bologna',
    description: 'Francesco Carlucci, software engineer presso MemorAIz a Bologna. Web app full-stack basate su LLM: Teseo, PingoPongo, Ætas e altri progetti.',
    ogLocale: 'it_IT',
    ogAlt: 'Francesco Carlucci, software engineer, con la mappa dei suoi progetti e delle tecnologie usate',
    skip: 'Vai al contenuto',
    langLabel: 'Lingua',
    nav: { teseo: 'Teseo', projects: 'Progetti', experience: 'Esperienza' },
    h1: 'Francesco Carlucci, software engineer',
    lede: 'Sviluppo web app full-stack basate su LLM, presso MemorAIz a Bologna.',
    write: 'Scrivimi',
    mapLabel: 'Mappa dei miei progetti e delle tecnologie usate in ciascuno',
    mapCaption: 'Passa il mouse su un progetto per vedere con cosa è fatto.',
    mapHead: ['Progetti', 'Tecnologie'],
    mapFacts: { teseo: '100.000+ utenti', pingopongo: 'Il ping pong dell’ufficio', aetas: 'La tua vita su un quadrante', showroom: 'Uno showroom 3D nel browser' },
    teseo: {
      h2: 'Teseo, il progetto della mia tesi',
      body: 'Teseo aiuta gli studenti del liceo a tradurre e analizzare versioni di latino e greco. Durante il tirocinio presso MemorAIz l’ho migrato a TypeScript, Payload CMS e PostgreSQL su AWS, e ho reso traduzione e analisi parallele e in streaming.',
      readingLabel: 'Latenza dell’OCR dopo la migrazione a Mistral AI',
      rows: [
        ['Chi', 'Io, durante il mio tirocinio presso MemorAIz', 'person'],
        ['Quando', 'Da set 2025 a mar 2026', 'time'],
        ['Utenti registrati', 'Oltre 100.000', 'time'],
      ],
      cta: 'Prova Teseo',
      alt: 'Teseo con un passo del De bello Gallico nel riquadro di traduzione',
    },
    projects: {
      h2: 'Progetti personali',
      stack: 'Tecnologie',
      private: 'Codice privato, per ora',
      code: 'Vedi il codice',
      items: {
        pingopongo: { what: 'La classifica di ping pong del nostro ufficio, con rating Glicko, stagioni, rivalità e notifiche push.', live: 'Apri la classifica', alt: 'La classifica di PingoPongo con rating, ultimi risultati e un anno di partite; nomi dei giocatori sostituiti per privacy' },
        aetas: { what: 'Se la tua vita fosse un orologio, che ore segnerebbe? Ogni ora vale un anno. Un sito e un’estensione per Chrome con undici quadranti.', live: 'Apri Ætas', alt: 'Il quadrante dorato di Ætas accanto al campo per la data di nascita' },
        showroom: { what: 'Uno showroom 3D nel browser: scegli l’auto, regola le luci e fai partire i video sulla parete.', live: 'Apri lo showroom', alt: 'Una Ferrari 488 rossa sotto i riflettori, con lo schermo dei video alle spalle' },
      },
    },
    experience: {
      h2: 'Esperienza e formazione',
      items: [
        ['Da apr 2026', 'Software Engineer, MemorAIz', 'Sviluppo full-stack: frontend, backend, database e funzionalità di AI generativa.'],
        ['Da set 2025 a mar 2026', 'Tirocinio da Software Engineer, MemorAIz', 'Ho riprogettato Teseo, che è diventato la mia tesi magistrale.'],
        ['Da set 2023 a mar 2026', 'Laurea magistrale in Ingegneria e Scienze Informatiche, Università di Bologna', '110 e lode.'],
        ['Da feb a giu 2025', 'Erasmus+ alla Universitat Politècnica de València', ''],
        ['Da set 2020 a nov 2023', 'Laurea triennale in Ingegneria e Scienze Informatiche, Università di Bologna', ''],
      ],
    },
    skills: {
      h2: 'Porto gli LLM in produzione',
      panels: [
        ['AI in produzione', ['Risposte degli LLM in streaming', 'Scelta dei modelli bilanciando qualità, latenza e costi', 'OCR con Mistral AI']],
        ['Deploy', ['AWS con CI/CD', 'Vercel', 'Test con Vitest e Playwright']],
        ['Lingue', ['Italiano, madrelingua', 'Inglese, livello professionale avanzato', 'Spagnolo, livello professionale']],
      ],
    },
    close: 'Hai una posizione aperta o un progetto in mente? Scrivimi.',
    legal: '© 2026 Francesco Carlucci',
  },

  es: {
    title: 'Francesco Carlucci, ingeniero de software en Bolonia',
    description: 'Francesco Carlucci, ingeniero de software en MemorAIz, en Bolonia. Aplicaciones web full-stack con LLM: Teseo, PingoPongo, Ætas y más.',
    ogLocale: 'es_ES',
    ogAlt: 'Francesco Carlucci, ingeniero de software, con el mapa de sus proyectos y las tecnologías que usan',
    skip: 'Ir al contenido',
    langLabel: 'Idioma',
    nav: { teseo: 'Teseo', projects: 'Proyectos', experience: 'Experiencia' },
    h1: 'Francesco Carlucci, ingeniero de software',
    lede: 'Desarrollo aplicaciones web full‑stack con LLM en MemorAIz, en Bolonia.',
    write: 'Escríbeme',
    mapLabel: 'Mapa de mis proyectos y de las tecnologías que usa cada uno',
    mapCaption: 'Pasa el ratón por un proyecto para ver con qué está hecho.',
    mapHead: ['Proyectos', 'Tecnologías'],
    mapFacts: { teseo: '100.000+ usuarios', pingopongo: 'El ping pong de la oficina', aetas: 'Tu vida en un reloj', showroom: 'Un concesionario 3D en la web' },
    teseo: {
      h2: 'Teseo, el proyecto de mi tesis',
      body: 'Teseo ayuda a estudiantes de bachillerato a traducir y analizar latín y griego. Durante mis prácticas en MemorAIz lo migré a TypeScript, Payload CMS y PostgreSQL en AWS, con traducción y análisis en paralelo y en streaming.',
      readingLabel: 'Latencia del OCR tras migrar a Mistral AI',
      rows: [
        ['Quién', 'Yo, primero en prácticas y luego en plantilla', 'person'],
        ['Cuándo', 'De sep. 2025 a mar. 2026', 'time'],
        ['Usuarios registrados', 'Más de 100.000', 'time'],
      ],
      cta: 'Prueba Teseo',
      alt: 'Teseo con un fragmento de La guerra de las Galias en el cuadro de traducción',
    },
    projects: {
      h2: 'Proyectos personales',
      stack: 'Tecnologías',
      private: 'Código privado, de momento',
      code: 'Ver el código',
      items: {
        pingopongo: { what: 'La liga de ping pong de nuestra oficina, con ranking Glicko, temporadas, rivalidades y notificaciones push.', live: 'Abrir la liga', alt: 'Clasificación de PingoPongo con puntuaciones, últimos resultados y un año de partidas; nombres de los jugadores cambiados por privacidad' },
        aetas: { what: 'Si tu vida fuera un reloj, ¿qué hora marcaría? Cada hora es un año. Una web y una extensión de Chrome con once esferas.', live: 'Abrir Ætas', alt: 'La esfera dorada de Ætas junto al campo de fecha de nacimiento' },
        showroom: { what: 'Un concesionario 3D en el navegador: elige el coche, ajusta las luces y pon los vídeos de la pantalla.', live: 'Abrir el concesionario', alt: 'Un Ferrari 488 rojo bajo los focos, con la pantalla de vídeo detrás' },
      },
    },
    experience: {
      h2: 'Experiencia y formación',
      items: [
        ['Desde abr. 2026', 'Software Engineer, MemorAIz', 'Desarrollo full-stack: frontend, backend, bases de datos y funcionalidades de IA generativa.'],
        ['De sep. 2025 a mar. 2026', 'Prácticas como Software Engineer, MemorAIz', 'Rediseñé Teseo, que acabó siendo mi tesis de máster.'],
        ['De sep. 2023 a mar. 2026', 'Máster en Ingeniería Informática, Universidad de Bolonia', 'Nota final: 110 cum laude.'],
        ['De feb. a jun. 2025', 'Erasmus+ en la Universitat Politècnica de València', ''],
        ['De sep. 2020 a nov. 2023', 'Grado en Ingeniería Informática, Universidad de Bolonia', ''],
      ],
    },
    skills: {
      h2: 'Llevo los LLM a producción',
      panels: [
        ['IA en producción', ['Respuestas de LLM en streaming', 'Elección de modelos según calidad, latencia y coste', 'OCR con Mistral AI']],
        ['Despliegue', ['AWS con CI/CD', 'Vercel', 'Tests con Vitest y Playwright']],
        ['Idiomas', ['Italiano, nativo', 'Inglés, nivel profesional alto', 'Español, nivel profesional']],
      ],
    },
    close: '¿Tienes una vacante o un proyecto en mente? Escríbeme.',
    legal: '© 2026 Francesco Carlucci',
  },
};

export const LINKS = {
  teseo: 'https://teseo.memoraiz.com',
  pingopongo: { live: 'https://pingo-pongo-memo.vercel.app' },
  aetas: { live: 'https://aetas.vercel.app' },
  showroom: { live: 'https://fracarlucci.github.io/car-showroom/', code: 'https://github.com/Fracarlucci/car-showroom' },
};

export const STACKS = {
  pingopongo: ['Next.js 16', 'TypeScript', 'Neon Postgres', 'Drizzle', 'Tailwind CSS'],
  aetas: ['TypeScript', 'Vite', 'Chrome extension', 'Vitest', 'Playwright'],
  showroom: ['Three.js', 'JavaScript', 'GLTF models'],
};
