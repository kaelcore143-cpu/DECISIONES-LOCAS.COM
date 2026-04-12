/**
 * DILEMAS VIRALES - LÓGICA DEL JUEGO v2.0
 * Rediseño viral con pantalla psicológica y compartir
 */

// ============================================
// DATOS: 25+ DILEMAS
// ============================================
const dilemmas = [
    { id: 1, pregunta: "¿Prefieres que tu ex publique todas tus conversaciones de WhatsApp o que tu jefe vea tu historial de búsqueda?", opcionA: "Mi ex exponga nuestros chats", opcionB: "Mi jefe vea mi historial", respuestaSarcasticaA: "Bold move. Ahora todo el mundo sabrá que escribías poemas a las 3 AM.", respuestaSarcasticaB: "Adiós, empleo. Hola, vergüenza eterna. Espero que sepas explicar esas búsquedas de '¿es normal que...?'" },
    { id: 2, pregunta: "¿Te quedas sin internet para siempre o sin comida delivery para toda la vida?", opcionA: "Vivir sin internet", opcionB: "Nunca más pedir delivery", respuestaSarcasticaA: "Bienvenido a 1985. Espero que disfrutes los diccionarios impresos.", respuestaSarcasticaB: "Felicidades, ahora tendrás que hablar con humanos en restaurantes. Qué aterrador." },
    { id: 3, pregunta: "¿Prefieres que todos tus antiguos crush sepan que les gustaste, o saber a quién le gustas ahora mismo?", opcionA: "Que mis crush pasados lo sepan", opcionB: "Saber quién me gusta ahora", respuestaSarcasticaA: "Plot twist: ninguno se arrepiente. Algunos ni siquiera te recordaban.", respuestaSarcasticaB: "Spoiler: es tu primo segundo. La vida tiene un sentido del humor extraño." },
    { id: 4, pregunta: "¿Tienes que decir TODO lo que piensas en voz alta, o nunca poder volver a hablar?", opcionA: "Decir todo en voz alta", opcionB: "Perder la voz para siempre", respuestaSarcasticaA: "Tu lista de enemigos crecerá más rápido que tu cuenta bancaria.", respuestaSarcasticaB: "Al menos así no podrás explicar por qué llegaste tarde. Solo señala y llora." },
    { id: 5, pregunta: "¿Prefieres sudar mayonesa o tener las lágrimas reemplazadas por ketchup?", opcionA: "Sudar mayonesa", opcionB: "Llorar ketchup", respuestaSarcasticaA: "El gimnasio te odiará. Los sándwiches te amarán. Tu dermatólogo se jubilará.", respuestaSarcasticaB: "Cine romántico = baño de ketchup. Las películas tristes te hacen parecer un hot dog." },
    { id: 6, pregunta: "¿Tienes que bailar la Macarena cada vez que escuchas tu nombre, o responder '¿Qué?' después de cada frase?", opcionA: "Bailar la Macarena", opcionB: "Decir '¿Qué?' siempre", respuestaSarcasticaA: "Reuniones de trabajo interesantes. Funerales incómodos. Citas memorables.", respuestaSarcasticaB: "¿Qué? Ah, sí. Tu vida será una conversación infinita. ¿Qué? Exacto." },
    { id: 7, pregunta: "¿Prefieres tener tu búsqueda de Google proyectada en tu frente, o tu historial de Spotify en tu camiseta?", opcionA: "Google en la frente", opcionB: "Spotify en la camiseta", respuestaSarcasticaA: "Ahora todos sabrán que buscaste '¿Por qué me pica aquí?' 47 veces.", respuestaSarcasticaB: "'Canciones para llorar en la ducha' en bucle. Tu gusto musical queda expuesto." },
    { id: 8, pregunta: "¿Te obligan a usar tu nombre de usuario de los 12 años para toda la vida, o tu contraseña más antigua como número de teléfono?", opcionA: "Usuario de los 12 años", opcionB: "Contraseña vieja", respuestaSarcasticaA: "xx_DarkDragonSlayer_2009_xx, que tengas un buen día. Te llamarán en la oficina.", respuestaSarcasticaB: "Llámame al 123456789. Sí, soy así de creativo desde siempre." },
    { id: 9, pregunta: "¿Prefieres que tu madre maneje tu Tinder o que tu jefe maneje tu LinkedIn?", opcionA: "Mi mamá en Tinder", opcionB: "Mi jefe en LinkedIn", respuestaSarcasticaA: "'Mi hijo es un ángel que cocina bien' - tu bio. Cero matches garantizados.", respuestaSarcasticaB: "'Trabaja los fines de semana gratis' - tu nuevo headline. Felicidades, esclavo moderno." },
    { id: 10, pregunta: "¿Tienes que comer siempre con las manos, o usar cubiertos para todo (incluyendo sándwiches y frutas)?", opcionA: "Solo comer con las manos", opcionB: "Cubiertos para todo", respuestaSarcasticaA: "Sopa con las manos. Yogurt con las manos. Tu dignidad con las manos también.", respuestaSarcasticaB: "Comer una manzana con cuchillo y tenedor. Elegante, pero sospechoso." },
    { id: 11, pregunta: "¿Prefieres que todos sepan cuánto ganas, o cuánto pesas exactamente?", opcionA: "Que sepan mi salario", opcionB: "Que sepan mi peso", respuestaSarcasticaA: "Ahora tus amigos 'olvidan' la billetera siempre. Qué coincidencia.", respuestaSarcasticaB: "'Pero pareces más...' - lo que dirán todos. Siempre." },
    { id: 12, pregunta: "¿Tienes que llevar pijama a todas las reuniones importantes, o traje formal a la playa?", opcionA: "Pijama en reuniones", opcionB: "Traje en la playa", respuestaSarcasticaA: "Entrevista de trabajo en pantuflas. Confianza... o desesperación.", respuestaSarcasticaB: "Arena en el traje de 500 dólares. El sol te odia. Tu sastre te odia más." },
    { id: 13, pregunta: "¿Prefieres no volver a usar emojis, o usarlos en cada frase que escribas?", opcionA: "Nunca más emojis", opcionB: "Emojis en todo", respuestaSarcasticaA: "Ahora tus mensajes suenan enojados. O tristes. O ambos. Nadie te entiende.", respuestaSarcasticaB: "El funeral de tu tío será 😭🪦⚰️💐 muy emotivo 👍🔥😎" },
    { id: 14, pregunta: "¿Tu aliento huele siempre a ajo, o a café barato de máquina expendedora?", opcionA: "Aliento a ajo", opcionB: "Aliento a café barato", respuestaSarcasticaA: "Vampiros: 0. Tu vida social: también 0. Pero tu sistema inmune es una roca.", respuestaSarcasticaB: "Olerás a oficina triste. A lunes. A 'necesito vacaciones'." },
    { id: 15, pregunta: "¿Prefieres que tu jefe te vea haciendo TikToks cringe o tu crush vea tus fotos de 2012 en Facebook?", opcionA: "Jefe viendo TikToks", opcionB: "Crush viendo fotos viejas", respuestaSarcasticaA: "Bailando trends en horario laboral. Productividad 100%. Vergüenza 1000%.", respuestaSarcasticaB: "Fotos con bordes de corazón y frases de Bob Marley. Peak romance, dirías tú." },
    { id: 16, pregunta: "¿Tienes que terminar cada oración con 'según la NASA' o empezar cada conversación con 'fun fact:'?", opcionA: "Terminar con 'según la NASA'", opcionB: "Empezar con 'fun fact:'", respuestaSarcasticaA: "'Te amo, según la NASA'. La ciencia no aprueba tu relación.", respuestaSarcasticaB: "Fun fact: nadie te pedirá fun facts nunca." },
    { id: 17, pregunta: "¿Prefieres tener tu ubicación compartida permanentemente con tu ex, o con tu suegra?", opcionA: "Ubicación con mi ex", opcionB: "Ubicación con mi suegra", respuestaSarcasticaA: "'Veo que estás en Tinder otra vez'. Stalking nivel dios.", respuestaSarcasticaB: "'¿Por qué estás en el baño hace 10 minutos?'. Big Mother is watching you." },
    { id: 18, pregunta: "¿Te cambian el nombre legalmente a 'Bebé' o a 'Usuario de Prueba'?", opcionA: "Nombre: Bebé", opcionB: "Nombre: Usuario de Prueba", respuestaSarcasticaA: "'Señor Bebé, su mesa está lista'. Adulto con nombre de recién nacido.", respuestaSarcasticaB: "Usuario de Prueba González. Suena a que no eres definitivo en esta realidad." },
    { id: 19, pregunta: "¿Prefieres que tu cuenta bancaria se publique en una pantalla en Times Square, o tu historial de Netflix?", opcionA: "Cuenta bancaria pública", opcionB: "Historial Netflix público", respuestaSarcasticaA: "$12.47 disponibles. La fama de ser pobre. Al menos eres famoso.", respuestaSarcasticaB: "'Documentales de asesinos' y 'Cómo entrenar a tu dragón'. Perfil interesante." },
    { id: 20, pregunta: "¿Tienes que saludar a todo el mundo con un beso en los labios, o con un puñetazo suave en el hombro?", opcionA: "Beso en los labios", opcionB: "Puñetazo en el hombro", respuestaSarcasticaA: "Reuniones de trabajo incómodas. Tu dentista será tu mejor amigo.", respuestaSarcasticaB: "'Es mi forma de saludar', dirás mientras te demandan." },
    { id: 21, pregunta: "¿Prefieres que tu teléfono suene tu canción más escuchada a volumen máximo en lugares públicos, o que vibre con el sonido de un 'moan'?", opcionA: "Música en público", opcionB: "Vibrador incómodo", respuestaSarcasticaA: "'Despacito' en el funeral. En bucle. Tu tía baila.", respuestaSarcasticaB: "Reuniones serias de repente muy interesantes. Todos te miran raro." },
    { id: 22, pregunta: "¿Te obligan a contar un chiste cada vez que entras a una habitación, o a llorar cada vez que alguien te saluda?", opcionA: "Contar chistes siempre", opcionB: "Llorar al saludar", respuestaSarcasticaA: "Funerales. Juicios. Tu vida es un show de comedia forzado.", respuestaSarcasticaB: "'Hola, buenos días' *llanto intenso*. Terapia será tu segundo hogar." },
    { id: 23, pregunta: "¿Prefieres tener siempre 5% de batería en tu teléfono, o tener que cargarlo cada 2 horas exactas?", opcionA: "Siempre 5% de batería", opcionB: "Cargar cada 2 horas", respuestaSarcasticaA: "Ansiedad eterna. Modo avión es tu único amigo. Tu vida es un 'low battery'.", respuestaSarcasticaB: "Despertador cada 2 horas. Nunca dormirás bien. Tu cerebro te odiará." },
    { id: 24, pregunta: "¿Tu jefe puede leer tus pensamientos durante el trabajo, o tu pareja puede leerlos todo el tiempo excepto en el trabajo?", opcionA: "Jefe lee pensamientos laborales", opcionB: "Pareja lee pensamientos personales", respuestaSarcasticaA: "'Ojalá estuviera durmiendo' - pensamiento 47 del lunes. Despido inminente.", respuestaSarcasticaB: "'Sí se ve gorda en ese vestido'. Adiós, relación. Hola, soledad." },
    { id: 25, pregunta: "¿Prefieres que tus fotos de perfil sean automáticamente tus peores fotos del mes, o que tus estados de WhatsApp sean tus notas de voz guardadas?", opcionA: "Peores fotos de perfil", opcionB: "Notas de voz como estados", respuestaSarcasticaA: "Foto con cara de asco, ojos cerrados, boca abierta. Tu mejor imagen pública.", respuestaSarcasticaB: "'Eh... sí... entonces... mmm...' tu estado por 24 horas." }
];

// ============================================
// ARQUETIPOS PSICOLÓGICOS (pantalla viral)
// ============================================
const arquetipos = {
    caos: {
        emoji: "😈",
        titulo: "EL CAÓTICO",
        subtitulo: "MAESTRO",
        descripcion: "Amas el desorden y tomas decisiones con estilo.",
        rasgos: [
            { icon: "🔥", texto: "El caos es tu zona de confort" },
            { icon: "♟️", texto: "Planeas... pero rompes las reglas" },
            { icon: "👻", texto: "Peligrosamente impredecible" }
        ]
    },
    logica: {
        emoji: "🧠",
        titulo: "EL ESTRATEGA",
        subtitulo: "FRÍO",
        descripcion: "Calculas antes de actuar. Las emociones no te gobiernan.",
        rasgos: [
            { icon: "⚡", texto: "Tu cerebro funciona a 3000 rpm" },
            { icon: "🎯", texto: "Siempre hay un plan detrás" },
            { icon: "🧊", texto: "Imperturbable bajo presión" }
        ]
    },
    emocional: {
        emoji: "💔",
        titulo: "EL ROMÁNTICO",
        subtitulo: "TRÁGICO",
        descripcion: "Sientes todo al máximo. Tu corazón toma las decisiones.",
        rasgos: [
            { icon: "❤️", texto: "Tu intuición rara vez falla" },
            { icon: "🌊", texto: "Las emociones son tu superpoder" },
            { icon: "🎭", texto: "Intenso. Siempre intenso." }
        ]
    },
    ego: {
        emoji: "👑",
        titulo: "EL NARCISISTA",
        subtitulo: "BRILLANTE",
        descripcion: "Sabes que eres diferente. Y quieres que todos lo sepan.",
        rasgos: [
            { icon: "💎", texto: "La imagen es todo" },
            { icon: "🔍", texto: "Consciente de tu audiencia invisible" },
            { icon: "🚀", texto: "Tu reputación va primero" }
        ]
    },
    mixto: {
        emoji: "🌀",
        titulo: "EL ENIGMA",
        subtitulo: "TOTAL",
        descripcion: "Eres un caso sin clasificar. Incluso para ti mismo.",
        rasgos: [
            { icon: "❓", texto: "Impredecible hasta para ti" },
            { icon: "🎲", texto: "Cada decisión es una sorpresa" },
            { icon: "🔮", texto: "Tu perfil psicológico tiene glitch" }
        ]
    }
};

// ============================================
// COMENTARIOS DINÁMICOS
// ============================================
const comentarios = {
    sarcastico: [
        "Interesante… claramente te gusta complicarte la vida",
        "No es mala decisión… pero tampoco buena 😏",
        "Esa opción grita 'tengo problemas no resueltos'",
        "Fascinante. Realmente pensaste eso, ¿verdad?",
        "Tu futuro yo acaba de suspirar profundamente",
        "Elegiste el caos. Respeto. O lástima, no sé",
        "Las consecuencias de esto… *chef's kiss*",
        "Valiente. O imprudente. La línea es delgada",
        "Esto va a volver a ti en 3… 2… 1…",
        "Tu terapeuta va a tener material por años"
    ],
    psicologico: [
        "Tu psicólogo estaría tomando notas ahora mismo",
        "Esto dice mucho de tu relación con tu madre",
        "El subconsciente habla… y habló alto",
        "Esa respuesta huele a trauma no procesado",
        "Tu yo del pasado está orgulloso. O horrorizado",
        "¿Siempre evitas el conflicto así o es nuevo?"
    ],
    provocador: [
        "¿Seguro? Porque el 68% de los genios eligió lo contrario",
        "Esa respuesta es de gente que come pizza con tenedor",
        "Tu ex estaría de acuerdo con esta elección. Preocupante",
        "Los aliens que te observan acaban de perder la apuesta",
        "Eso explica por qué estás aquí a las 3 AM",
        "¿Y si te digo que la otra opción tenía un bonus secreto?"
    ],
    humorAcido: [
        "Bienvenido al club de los que se arrepienten mañana",
        "Felicidades, acabas de decepcionar a una versión tuya en otro universo",
        "Tu dignidad acaba de presentar su renuncia",
        "Tu ángel de la guarda acaba de pedir vacaciones",
        "Básicamente elegiste el equivalente de responder 'tú' a 'te amo'",
        "Si las decisiones fueran olores, la tuya sería queso olvidado"
    ],
    analisis: [
        "He analizado 10,000 respuestas como esta. 9,999 fueron… interesantes",
        "Algoritmo dice: 73% probabilidad de arrepentimiento",
        "Detecto un patrón: eliges lo que da menos vergüenza explicar",
        "Análisis completo: necesitas terapia y un abrazo",
        "He visto 847 respuestas como la tuya. Todas terminaron en meme"
    ]
};

// ============================================
// ESTADO DEL JUEGO
// ============================================
let currentDilemma = null;
let usedDilemmas = [];
let streak = 0;
let totalDecisions = 0;
let shownMilestones = [];
let timerInterval = null;
let timerCountdownInterval = null;

// Perfil psicológico
const dilemmaTraits = {
    1: { A: { emocional: 2, caos: 1 }, B: { logica: 2, ego: 1 } },
    2: { A: { logica: 2, ego: 1 }, B: { emocional: 2, caos: 1 } },
    3: { A: { ego: 2, caos: 1 }, B: { logica: 2, emocional: 1 } },
    4: { A: { caos: 3 }, B: { logica: 2, emocional: 1 } },
    5: { A: { caos: 2, ego: 1 }, B: { emocional: 2, caos: 1 } },
    6: { A: { caos: 3, ego: 1 }, B: { logica: 2, caos: 1 } },
    7: { A: { ego: 2, logica: 1 }, B: { emocional: 2, caos: 1 } },
    8: { A: { emocional: 2, ego: 1 }, B: { logica: 2, caos: 1 } },
    9: { A: { caos: 2, emocional: 1 }, B: { logica: 2, ego: 1 } },
    10: { A: { caos: 2 }, B: { logica: 3, ego: 1 } },
    11: { A: { ego: 2, caos: 1 }, B: { emocional: 2, logica: 1 } },
    12: { A: { caos: 3, emocional: 1 }, B: { logica: 2, ego: 2 } },
    13: { A: { logica: 2 }, B: { caos: 2, emocional: 1 } },
    14: { A: { caos: 2, logica: 1 }, B: { emocional: 2, ego: 1 } },
    15: { A: { ego: 2, caos: 1 }, B: { emocional: 2, logica: 1 } },
    16: { A: { logica: 2, ego: 1 }, B: { caos: 2, emocional: 1 } },
    17: { A: { caos: 2, emocional: 1 }, B: { logica: 2, ego: 1 } },
    18: { A: { emocional: 2, caos: 1 }, B: { logica: 2, ego: 1 } },
    19: { A: { ego: 2, caos: 1 }, B: { emocional: 2, logica: 1 } },
    20: { A: { caos: 3, emocional: 1 }, B: { logica: 2, ego: 1 } },
    21: { A: { ego: 2, caos: 1 }, B: { emocional: 2, caos: 1 } },
    22: { A: { caos: 2, ego: 1 }, B: { emocional: 3, logica: 1 } },
    23: { A: { emocional: 2, caos: 1 }, B: { logica: 3 } },
    24: { A: { logica: 2, ego: 1 }, B: { emocional: 2, caos: 1 } },
    25: { A: { ego: 2, caos: 1 }, B: { logica: 2, emocional: 1 } }
};

let psychologicalProfile = { caos: 0, logica: 0, emocional: 0, ego: 0 };

const milestones = {
    3: { message: "Ok… se está poniendo interesante 😏", icon: "🔥" },
    5: { message: "¡Tu perfil psicológico está tomando forma…!", icon: "🧠" },
    10: { message: "No todos llegan hasta aquí…", icon: "🎯" },
    15: { message: "Empiezo a entender cómo piensas", icon: "🧠" },
    20: { message: "Eres un caso de estudio en potencia", icon: "📊" },
    25: { message: "¿Eres consciente de lo que estás revelando?", icon: "👁️" },
    30: { message: "Leyenda. Simplemente leyenda.", icon: "👑" }
};

// ============================================
// PARTICLE BACKGROUND
// ============================================
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    const particles = [];
    const count = Math.min(60, Math.floor(window.innerWidth / 20));
    
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.4 + 0.1,
            color: Math.random() > 0.7 ? '#e8233a' : (Math.random() > 0.5 ? '#00cfff' : '#ffffff')
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.fill();
        });
        ctx.globalAlpha = 1;
        requestAnimationFrame(draw);
    }
    draw();
}

// ============================================
// ELEMENTOS DOM
// ============================================
const screens = {
    start: document.getElementById('startScreen'),
    dilemma: document.getElementById('dilemmaScreen'),
    result: document.getElementById('resultScreen'),
    psychResult: document.getElementById('psychResultScreen')
};

const elements = {
    streak: document.getElementById('streak'),
    decisionCount: document.getElementById('decisionCount'),
    startBtn: document.getElementById('startBtn'),
    timerBar: document.getElementById('timerBar'),
    timerCountdown: document.getElementById('timerCountdown'),
    dilemmaNum: document.getElementById('dilemmaNum'),
    dilemmaQuestion: document.getElementById('dilemmaQuestion'),
    optionA: document.getElementById('optionA'),
    optionB: document.getElementById('optionB'),
    textA: document.getElementById('textA'),
    textB: document.getElementById('textB'),
    percentageDisplay: document.getElementById('percentageDisplay'),
    resultText: document.getElementById('resultText'),
    sarcasticResponse: document.getElementById('sarcasticResponse'),
    psychologicalInsight: document.getElementById('psychologicalInsight'),
    milestoneMessage: document.getElementById('milestoneMessage'),
    nextBtn: document.getElementById('nextBtn'),
    // Psych result screen
    psychEmoji: document.getElementById('psychEmoji'),
    psychArchetype: document.getElementById('psychArchetype'),
    psychArchetypeSub: document.getElementById('psychArchetypeSub'),
    psychDescription: document.getElementById('psychDescription'),
    psychTraits: document.getElementById('psychTraits'),
    barCaos: document.getElementById('barCaos'),
    barEgo: document.getElementById('barEgo'),
    barLogica: document.getElementById('barLogica'),
    barEmocional: document.getElementById('barEmocional'),
    pctCaos: document.getElementById('pctCaos'),
    pctEgo: document.getElementById('pctEgo'),
    pctLogica: document.getElementById('pctLogica'),
    pctEmocional: document.getElementById('pctEmocional'),
    shareBtn: document.getElementById('shareBtn'),
    continueBtn: document.getElementById('continueBtn'),
    toast: document.getElementById('toast')
};

// ============================================
// FUNCIONES DEL JUEGO
// ============================================
function init() {
    initParticles();
    elements.startBtn.addEventListener('click', startGame);
    elements.optionA.addEventListener('click', () => handleChoice('A'));
    elements.optionB.addEventListener('click', () => handleChoice('B'));
    elements.nextBtn.addEventListener('click', nextDilemma);
    elements.shareBtn.addEventListener('click', shareResult);
    elements.continueBtn.addEventListener('click', continueAfterPsych);
}

function startGame() {
    hideAllScreens();
    screens.dilemma.classList.remove('hidden');
    streak = 0;
    totalDecisions = 0;
    usedDilemmas = [];
    shownMilestones = [];
    psychologicalProfile = { caos: 0, logica: 0, emocional: 0, ego: 0 };
    updateUI();
    loadRandomDilemma();
}

function hideAllScreens() {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
}

function loadRandomDilemma() {
    if (usedDilemmas.length >= dilemmas.length) {
        const last = usedDilemmas[usedDilemmas.length - 1];
        usedDilemmas = last ? [last] : [];
    }
    const available = dilemmas.filter(d => !usedDilemmas.includes(d.id));
    const rand = Math.floor(Math.random() * available.length);
    currentDilemma = available[rand];
    usedDilemmas.push(currentDilemma.id);
    displayDilemma();
    startTimer();
}

function displayDilemma() {
    elements.dilemmaNum.textContent = `DILEMA #${totalDecisions + 1}`;
    elements.dilemmaQuestion.textContent = currentDilemma.pregunta;
    elements.textA.textContent = currentDilemma.opcionA;
    elements.textB.textContent = currentDilemma.opcionB;
    elements.optionA.classList.remove('selected', 'unselected');
    elements.optionB.classList.remove('selected', 'unselected');
    elements.optionA.disabled = false;
    elements.optionB.disabled = false;
}

function startTimer() {
    // Reset bar
    elements.timerBar.classList.remove('active', 'paused');
    elements.timerBar.style.transform = 'scaleX(1)';
    void elements.timerBar.offsetWidth;
    elements.timerBar.classList.add('active');
    
    // Countdown visual
    let count = 5;
    if (elements.timerCountdown) elements.timerCountdown.textContent = count;
    clearInterval(timerCountdownInterval);
    timerCountdownInterval = setInterval(() => {
        count--;
        if (elements.timerCountdown) elements.timerCountdown.textContent = Math.max(0, count);
        if (count <= 0) clearInterval(timerCountdownInterval);
    }, 1000);
    
    clearTimeout(timerInterval);
    timerInterval = setTimeout(handleTimeout, 5000);
}

function handleTimeout() {
    if (!screens.dilemma.classList.contains('hidden')) {
        const randomChoice = Math.random() > 0.5 ? 'A' : 'B';
        handleChoice(randomChoice, true);
    }
}

function handleChoice(choice, isTimeout = false) {
    clearTimeout(timerInterval);
    clearInterval(timerCountdownInterval);
    elements.timerBar.classList.remove('active');
    elements.timerBar.classList.add('paused');
    
    if (navigator.vibrate && !isTimeout) navigator.vibrate(40);
    
    streak++;
    totalDecisions++;
    updateUI();
    
    if (currentDilemma) updatePsychologicalProfile(currentDilemma.id, choice);
    
    const selectedBtn = choice === 'A' ? elements.optionA : elements.optionB;
    const unselectedBtn = choice === 'A' ? elements.optionB : elements.optionA;
    
    setTimeout(() => {
        selectedBtn.classList.add('selected');
        unselectedBtn.classList.add('unselected');
    }, 80);
    
    elements.optionA.disabled = true;
    elements.optionB.disabled = true;
    
    // ¿Mostrar pantalla psicológica cada 5 decisiones?
    const showPsychScreen = totalDecisions > 0 && totalDecisions % 5 === 0;
    
    setTimeout(() => {
        if (showPsychScreen) {
            showPsychResult();
        } else {
            showResult(choice, isTimeout);
        }
    }, 350);
}

function getRandomComment() {
    const cats = Object.keys(comentarios);
    const cat = cats[Math.floor(Math.random() * cats.length)];
    const list = comentarios[cat];
    return { texto: list[Math.floor(Math.random() * list.length)], categoria: cat };
}

function showResult(choice, isTimeout) {
    hideAllScreens();
    screens.result.classList.remove('hidden');
    
    const percentage = Math.floor(Math.random() * 45) + 40;
    elements.percentageDisplay.textContent = `${percentage}%`;
    elements.resultText.textContent = isTimeout
        ? `⏰ Se acabó el tiempo. El azar eligió por ti.`
        : `${percentage}% de personas eligió lo mismo`;
    
    const comentario = getRandomComment();
    elements.sarcasticResponse.textContent = comentario.texto;
    elements.sarcasticResponse.setAttribute('data-categoria', comentario.categoria);
    
    // Insight / milestone
    const milestone = checkMilestone();
    if (milestone && elements.milestoneMessage) {
        elements.milestoneMessage.innerHTML = `<span>${milestone.icon}</span> ${milestone.message}`;
        elements.milestoneMessage.classList.remove('hidden');
        elements.milestoneMessage.classList.add('milestone-animate');
    } else if (elements.milestoneMessage) {
        elements.milestoneMessage.classList.add('hidden');
    }
    
    if (elements.psychologicalInsight) elements.psychologicalInsight.classList.add('hidden');
}

// ---- PANTALLA PSICOLÓGICA VIRAL ----
function showPsychResult() {
    hideAllScreens();
    screens.psychResult.classList.remove('hidden');
    
    // Calcular archetype
    const { caos, logica, emocional, ego } = psychologicalProfile;
    const total = caos + logica + emocional + ego;
    
    let dominant = 'mixto';
    if (total > 0) {
        const scores = { caos, logica, emocional, ego };
        const dom = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        if (scores[dom] / total > 0.3) dominant = dom;
    }
    
    const archetype = arquetipos[dominant];
    
    // Rellenar datos
    elements.psychEmoji.textContent = archetype.emoji;
    elements.psychArchetype.textContent = archetype.titulo;
    elements.psychArchetypeSub.textContent = archetype.subtitulo;
    elements.psychDescription.textContent = archetype.descripcion;
    
    // Traits
    elements.psychTraits.innerHTML = archetype.rasgos.map(r =>
        `<div class="psych-trait"><span>${r.icon}</span><span>${r.texto}</span></div>`
    ).join('');
    
    // Barras animadas
    const pcts = total > 0 ? {
        caos: Math.round((caos / total) * 100),
        ego: Math.round((ego / total) * 100),
        logica: Math.round((logica / total) * 100),
        emocional: Math.round((emocional / total) * 100)
    } : { caos: 25, ego: 25, logica: 25, emocional: 25 };
    
    // Reset bars first
    ['barCaos', 'barEgo', 'barLogica', 'barEmocional'].forEach(id => {
        elements[id].style.width = '0%';
    });
    
    // Animate after brief delay
    setTimeout(() => {
        elements.barCaos.style.width = pcts.caos + '%';
        elements.barEgo.style.width = pcts.ego + '%';
        elements.barLogica.style.width = pcts.logica + '%';
        elements.barEmocional.style.width = pcts.emocional + '%';
        elements.pctCaos.textContent = pcts.caos + '%';
        elements.pctEgo.textContent = pcts.ego + '%';
        elements.pctLogica.textContent = pcts.logica + '%';
        elements.pctEmocional.textContent = pcts.emocional + '%';
    }, 300);
    
    // Store result for sharing
    window._currentResult = {
        archetype: archetype.titulo + ' ' + archetype.subtitulo,
        pcts,
        dominant
    };
}

function shareResult() {
    const result = window._currentResult;
    if (!result) return;
    
    const text = `🔥 DILEMAS VIRALES\n\n¡Hice el test y soy: ${result.archetype}!\n\n` +
        `🔴 CAOS: ${result.pcts.caos}%\n` +
        `🟣 EGO: ${result.pcts.ego}%\n` +
        `🔵 LÓGICA: ${result.pcts.logica}%\n` +
        `🟢 EMOCIÓN: ${result.pcts.emocional}%\n\n` +
        `¿Y tú? 👉 decisiones-locas.com`;
    
    if (navigator.share) {
        navigator.share({ title: 'Dilemas Virales', text }).catch(() => copyToClipboard(text));
    } else {
        copyToClipboard(text);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast();
    }).catch(() => {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast();
    });
}

function showToast() {
    const toast = elements.toast;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function continueAfterPsych() {
    hideAllScreens();
    screens.dilemma.classList.remove('hidden');
    // Clean psych insight
    if (elements.milestoneMessage) elements.milestoneMessage.classList.add('hidden');
    loadRandomDilemma();
}

function nextDilemma() {
    hideAllScreens();
    screens.dilemma.classList.remove('hidden');
    if (elements.milestoneMessage) {
        elements.milestoneMessage.classList.add('hidden');
        elements.milestoneMessage.classList.remove('milestone-animate');
    }
    if (elements.psychologicalInsight) {
        elements.psychologicalInsight.classList.add('hidden');
    }
    loadRandomDilemma();
}

function updateUI() {
    if (elements.decisionCount) elements.decisionCount.textContent = totalDecisions;
    if (elements.streak) elements.streak.textContent = streak;
}

function checkMilestone() {
    if (milestones[totalDecisions] && !shownMilestones.includes(totalDecisions)) {
        shownMilestones.push(totalDecisions);
        return milestones[totalDecisions];
    }
    return null;
}

function updatePsychologicalProfile(dilemmaId, choice) {
    const traits = dilemmaTraits[dilemmaId];
    if (!traits) return;
    const selected = traits[choice];
    if (!selected) return;
    Object.keys(selected).forEach(trait => {
        if (psychologicalProfile.hasOwnProperty(trait)) {
            psychologicalProfile[trait] += selected[trait];
        }
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', init);