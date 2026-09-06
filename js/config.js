// Configuration for VIS Museum of Arts, Humanities & World Mythology
const STORAGE_KEY = 'vis_humanities_positions';

const TECH_CATEGORIES = [
    {
        "id": "all",
        "label": "Semua Koleksi",
        "icon": "✨"
    },
    {
        "id": "F1",
        "label": "Seni Rupa & Estetika",
        "icon": "🏛️",
        "title": "History & Philosophy of the Visual Arts"
    },
    {
        "id": "F2",
        "label": "Musik & Teori Suara",
        "icon": "🎵",
        "title": "Music: Theory, Eras, Instruments & Science"
    },
    {
        "id": "F3",
        "label": "Sinema & Perfilman",
        "icon": "🎬",
        "title": "Film & Cinema Studies"
    },
    {
        "id": "F4",
        "label": "Arsitektur & Tata Ruang",
        "icon": "📐",
        "title": "Architecture & Spatial Design"
    },
    {
        "id": "F5",
        "label": "Desain, Tipografi & UX",
        "icon": "🎨",
        "title": "Design, UX & Visual Communication"
    },
    {
        "id": "F6",
        "label": "Fotografi & Komposisi",
        "icon": "📷",
        "title": "Photography & Visual Documentation"
    },
    {
        "id": "F7",
        "label": "Sastra & Penulisan",
        "icon": "📚",
        "title": "Literature & Creative Writing"
    },
    {
        "id": "F8",
        "label": "Bahasa & Linguistik",
        "icon": "🗣️",
        "title": "Language & Linguistics"
    },
    {
        "id": "F9",
        "label": "Retorika & Oratori",
        "icon": "🎙️",
        "title": "Rhetoric & Public Speaking"
    },
    {
        "id": "F10",
        "label": "Mitologi & Legenda",
        "icon": "⚡",
        "title": "World Mythology & Folklore"
    }
];

const SYNONYMS = {
    // F1: Seni Rupa & Estetika
    "seni rupa": ["visual arts", "fine arts", "painting", "sculpture", "estetika", "lukisan", "patung"],
    "patung": ["sculpture", "kouros", "kore", "marmer", "perunggu", "statue", "pahat"],
    "lukisan": ["painting", "kanvas", "fresco", "cat minyak", "oil painting", "mural"],
    "yunani": ["greek", "hellenistic", "archaic", "athena", "parthenon", "klasik"],
    "renaissance": ["quattrocento", "leonardo", "michelangelo", "raphael", "renaisans", "florence"],
    "barok": ["baroque", "caravaggio", "bernini", "rembrandt", "chiaroscuro", "tenebrosum"],
    "impresionisme": ["impressionism", "monet", "renoir", "degas", "cahaya", "en plein air"],
    "estetika": ["aesthetics", "keindahan", "kanon", "proporsi", "filsafat seni"],
    
    // F2: Musik & Akustik
    "musik": ["music", "nada", "harmoni", "melodi", "irama", "komposisi"],
    "teori musik": ["music theory", "solfege", "tangga nada", "skala", "akor", "chord", "interval"],
    "harmoni": ["harmony", "kontrapung", "counterpoint", "polifoni", "kadens"],
    "komposer": ["composer", "bach", "mozart", "beethoven", "chopin", "brahms", "tchaikovsky"],
    "instrumen": ["instrument", "piano", "biola", "violin", "cello", "flute", "gitar", "orkestra"],
    "ritme": ["rhythm", "tempo", "birama", "meter", "sinkopasi", "poliritme"],
    
    // F3: Sinema & Film
    "film": ["cinema", "sinema", "movie", "film language", "motion picture"],
    "sinematografi": ["cinematography", "pencahayaan", "kamera", "framing", "lensa", "shot"],
    "sutradara": ["director", "auteur", "hitchcock", "kubrick", "kurosawa", "fellini", "tarkovsky"],
    "montase": ["montage", "editing", "kuleshov", "eisenstein", "cut", "kontinuitas"],
    "genre": ["noir", "western", "sci fi", "horor", "dokumenter", "drama", "neorealisme"],
    
    // F4: Arsitektur & Tata Ruang
    "arsitektur": ["architecture", "bangunan", "struktur", "spasial", "denah", "fasad"],
    "gotik": ["gothic", "flying buttress", "katedral", "pointed arch", "stained glass"],
    "modernisme": ["modernism", "bauhaus", "le corbusier", "mies van der rohe", "frank lloyd wright"],
    "urban": ["urban planning", "tata kota", "zonasi", "ruang publik", "pedestrian"],
    "struktur": ["structure", "beton bertulang", "baja", "kubah", "vault", "pilar", "kolom"],
    
    // F5: Desain Grafis & UX
    "desain": ["design", "rancang", "grafis", "visual", "layout"],
    "tipografi": ["typography", "font", "typeface", "serif", "sans serif", "kerning", "leading"],
    "gestalt": ["proximity", "similarity", "closure", "continuity", "figure ground", "persepsi"],
    "ux": ["user experience", "interaksi", "usability", "fitts law", "hick law", "affordance"],
    "warna": ["colour", "color theory", "palet", "kontras", "saturasi", "hue"],
    
    // F6: Fotografi
    "fotografi": ["photography", "kamera", "foto", "lensa", "shutter"],
    "komposisi": ["composition", "rule of thirds", "golden ratio", "leading lines", "framing"],
    "fotografer": ["photographer", "ansel adams", "bresson", "capa", "dorothea lange", "salgado"],
    "eksposur": ["exposure", "aperture", "diafragma", "iso", "shutter speed", "depth of field"],
    
    // F7: Sastra & Penulisan
    "sastra": ["literature", "prosa", "puisi", "novel", "naskah", "sastrawan"],
    "penulis": ["author", "writer", "shakespeare", "dante", "kafka", "goethe", "pramoedya", "dickens"],
    "naratif": ["narrative", "plot", "alur", "tokoh", "karakter", "konflik", "sudut pandang"],
    "majas": ["figure of speech", "metafora", "simile", "ironi", "alegori", "personifikasi"],
    "puisi": ["poetry", "sajak", "rima", "bait", "soneta", "haiku"],
    
    // F8: Bahasa & Linguistik
    "linguistik": ["linguistics", "tata bahasa", "bahasa", "gramatika", "fonologi"],
    "fonetik": ["phonetics", "fonem", "bunyi", "artikulasi", "akustik"],
    "sintaksis": ["syntax", "struktur kalimat", "chomsky", "generatif", "frasa"],
    "semantik": ["semantics", "pragmatik", "makna", "saussure", "petanda", "penanda"],
    "etimologi": ["etymology", "akar kata", "evolusi bahasa", "indoeropa", "rumpun bahasa"],
    
    // F9: Retorika & Oratori
    "retorika": ["rhetoric", "oratori", "pidato", "persuasi", "public speaking"],
    "orator": ["speaker", "cicero", "demosthenes", "churchill", "martin luther king", "sukarno"],
    "argumen": ["argument", "silogisme", "logika", "ethos", "pathos", "logos", "premis"],
    "pidato": ["speech", "orasi", "vokal", "artikulasi", "gesture", "intonasi"],
    
    // F10: Mitologi & Legenda Dunia
    "mitologi": ["mythology", "mitos", "legenda", "cerita rakyat", "folklor", "pantheon"],
    "yunani romawi": ["greek roman", "zeus", "jupiter", "poseidon", "apollo", "ares", "hades"],
    "nordik": ["norse", "odin", "thor", "loki", "valhalla", "ragnarok", "yggdrasil"],
    "mesir": ["egyptian", "ra", "osiris", "isis", "anubis", "horus", "piramida"],
    "nusantara": ["folklore", "dewi sri", "batara guru", "semar", "garuda", "sangkuriang", "malin kundang"],
    "hindu": ["brahma", "wisnu", "siwa", "trimurti", "ramayana", "mahabharata", "ganesha"],
    "timur": ["china", "japan", "sun wukong", "amaterasu", "naga", "dragon", "susanoo"]
};