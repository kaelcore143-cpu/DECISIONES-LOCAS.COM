/**
 * DILEMAS VIRALES - LÓGICA DEL JUEGO
 * ================================
 * Juego interactivo de dilemas con temporizador
 * y respuestas sarcásticas.
 */

// ============================================
// DATOS: 25+ DILEMAS CON HUMOR ÁCIDO
// ============================================
const dilemmas = [
    {
        id: 1,
        pregunta: "¿Prefieres que tu ex publique todas tus conversaciones de WhatsApp o que tu jefe vea tu historial de búsqueda?",
        opcionA: "Mi ex exponga nuestros chats",
        opcionB: "Mi jefe vea mi historial",
        respuestaSarcasticaA: "Bold move. Ahora todo el mundo sabrá que escribías poemas a las 3 AM.",
        respuestaSarcasticaB: "Adiós, empleo. Hola, vergüenza eterna. Espero que sepas explicar esas búsquedas de '¿es normal que...?'"
    },
    {
        id: 2,
        pregunta: "¿Te quedas sin internet para siempre o sin comida delivery para toda la vida?",
        opcionA: "Vivir sin internet",
        opcionB: "Nunca más pedir delivery",
        respuestaSarcasticaA: "Bienvenido a 1985. Espero que disfrutes los diccionarios impresos.",
        respuestaSarcasticaB: "Felicidades, ahora tendrás que hablar con humanos en restaurantes. Qué aterrador."
    },
    {
        id: 3,
        pregunta: "¿Prefieres que todos tus antiguos crush sepan que les gustaste, o saber a quién le gustas ahora mismo?",
        opcionA: "Que mis crush pasados lo sepan",
        opcionB: "Saber quién me gusta ahora",
        respuestaSarcasticaA: "Plot twist: ninguno se arrepiente. Algunos ni siquiera te recordaban.",
        respuestaSarcasticaB: "Spoiler: es tu primo segundo. La vida tiene un sentido del humor extraño."
    },
    {
        id: 4,
        pregunta: "¿Tienes que decir TODO lo que piensas en voz alta, o nunca poder volver a hablar?",
        opcionA: "Decir todo en voz alta",
        opcionB: "Perder la voz para siempre",
        respuestaSarcasticaA: "Tu lista de enemigos crecerá más rápido que tu cuenta bancaria. Que nunca crece.",
        respuestaSarcasticaB: "Al menos así no podrás explicar por qué llegaste tarde. Solo señala y llora."
    },
    {
        id: 5,
        pregunta: "¿Prefieres sudar mayonesa o tener las lágrimas reemplazadas por ketchup?",
        opcionA: "Sudar mayonesa",
        opcionB: "Llorar ketchup",
        respuestaSarcasticaA: "El gimnasio te odiará. Los sándwiches te amarán. Tu dermatólogo se jubilará.",
        respuestaSarcasticaB: "Cine romántico = baño de ketchup. Las películas tristes ahora te hacen parecer un hot dog."
    },
    {
        id: 6,
        pregunta: "¿Tienes que bailar la Macarena cada vez que escuchas tu nombre, o responder '¿Qué?' después de cada frase que te digan?",
        opcionA: "Bailar la Macarena",
        opcionB: "Decir '¿Qué?' siempre",
        respuestaSarcasticaA: "Reuniones de trabajo interesantes. Funerales incómodos. Citas memorables.",
        respuestaSarcasticaB: "¿Qué? Ah, sí. Tu vida será una conversación infinita. ¿Qué? Exacto."
    },
    {
        id: 7,
        pregunta: "¿Prefieres tener tu búsqueda de Google proyectada en tu frente, o tu historial de Spotify en tu camiseta?",
        opcionA: "Google en la frente",
        opcionB: "Spotify en la camiseta",
        respuestaSarcasticaA: "Ahora todos sabrán que buscaste '¿Por qué me pica aquí?' 47 veces.",
        respuestaSarcasticaB: "'Canciones para llorar en la ducha' en bucle. Tu gusto musical queda expuesto."
    },
    {
        id: 8,
        pregunta: "¿Te obligaran a usar tu nombre de usuario de los 12 años para toda la vida, o tu contraseña más antigua como número de teléfono?",
        opcionA: "Usuario de los 12 años",
        opcionB: "Contraseña vieja",
        respuestaSarcasticaA: "xx_DarkDragonSlayer_2009_xx, que tengas un buen día. Te llamarán en la oficina.",
        respuestaSarcasticaB: "Llámame al 123456789. Sí, soy así de creativo desde siempre."
    },
    {
        id: 9,
        pregunta: "¿Prefieres que tu madre maneje tu Tinder o que tu jefe maneje tu LinkedIn?",
        opcionA: "Mi mamá en Tinder",
        opcionB: "Mi jefe en LinkedIn",
        respuestaSarcasticaA: "'Mi hijo es un ángel que cocina bien' - tu bio. Cero matches garantizados.",
        respuestaSarcasticaB: "'Trabaja los fines de semana gratis' - tu nuevo headline. Felicidades, esclavo moderno."
    },
    {
        id: 10,
        pregunta: "¿Tienes que comer siempre con las manos, o usar cubiertos para todo (incluyendo sándwiches y frutas)?",
        opcionA: "Solo comer con las manos",
        opcionB: "Cubiertos para todo",
        respuestaSarcasticaA: "Sopa con las manos. Yogurt con las manos. Tu dignidad con las manos también.",
        respuestaSarcasticaB: "Comer una manzana con cuchillo y tenedor. Elegante, pero sospechoso."
    },
    {
        id: 11,
        pregunta: "¿Prefieres que todos sepan cuánto ganas, o cuánto pesas exactamente?",
        opcionA: "Que sepan mi salario",
        opcionB: "Que sepan mi peso",
        respuestaSarcasticaA: "Ahora tus amigos 'olvidan' la billetera siempre. Qué coincidencia.",
        respuestaSarcasticaB: "'Pero pareces más...' - lo que dirán todos. Siempre."
    },
    {
        id: 12,
        pregunta: "¿Tienes que llevar pijama a todas las reuniones importantes, o traje formal a la playa?",
        opcionA: "Pijama en reuniones",
        opcionB: "Traje en la playa",
        respuestaSarcasticaA: "Entrevista de trabajo en pantuflas. Confianza... o desesperación.",
        respuestaSarcasticaB: "Arena en el traje de 500 dólares. El sol te odia. Tu sastre te odia más."
    },
    {
        id: 13,
        pregunta: "¿Prefieres no volver a usar emojis, o usarlos en cada frase que escribas?",
        opcionA: "Nunca más emojis",
        opcionB: "Emojis en todo",
        respuestaSarcasticaA: "Ahora tus mensajes suenan enojados. O tristes. O ambos. Nadie te entiende.",
        respuestaSarcasticaB: "El funeral de tu tío será 😭🪦⚰️💐 muy emotivo 👍🔥😎"
    },
    {
        id: 14,
        pregunta: "¿Tu aliento huele siempre a ajo, o a café barato de máquina expendedora?",
        opcionA: "Aliento a ajo",
        opcionB: "Aliento a café barato",
        respuestaSarcasticaA: "Vampiros: 0. Tu vida social: también 0. Pero tu sistema inmune es una roca.",
        respuestaSarcasticaB: "Olerás a oficina triste. A lunes. A 'necesito vacaciones'."
    },
    {
        id: 15,
        pregunta: "¿Prefieres que tu jefe te vea haciendo TikToks cringe o tu crush vea tus fotos de 2012 en Facebook?",
        opcionA: "Jefe viendo TikToks",
        opcionB: "Crush viendo fotos viejas",
        respuestaSarcasticaA: "Bailando trends en horario laboral. Productividad 100%. Vergüenza 1000%.",
        respuestaSarcasticaB: "Fotos con bordes de corazón y frases de Bob Marley. Peak romance, dirías tú."
    },
    {
        id: 16,
        pregunta: "¿Tienes que terminar cada oración con 'según la NASA' o empezar cada conversación con 'fun fact:'?",
        opcionA: "Terminar con 'según la NASA'",
        opcionB: "Empezar con 'fun fact:'",
        respuestaSarcasticaA: "'Te amo, según la NASA'. La ciencia no aprueba tu relación.",
        respuestaSarcasticaB: "Fun fact: nadie te pedirá fun facts nunca."
    },
    {
        id: 17,
        pregunta: "¿Prefieres tener tu ubicación compartida permanentemente con tu ex, o con tu suegra?",
        opcionA: "Ubicación con mi ex",
        opcionB: "Ubicación con mi suegra",
        respuestaSarcasticaA: "'Veo que estás en Tinder otra vez'. Stalking nivel dios.",
        respuestaSarcasticaB: "'¿Por qué estás en el baño hace 10 minutos?'. Big Mother is watching you."
    },
    {
        id: 18,
        pregunta: "¿Te cambian el nombre legalmente a 'Bebé' o a 'Usuario de Prueba'?",
        opcionA: "Nombre: Bebé",
        opcionB: "Nombre: Usuario de Prueba",
        respuestaSarcasticaA: "'Señor Bebé, su mesa está lista'. Adulto con nombre de recién nacido.",
        respuestaSarcasticaB: "Usuario de Prueba González. Suena a que no eres definitivo en esta realidad."
    },
    {
        id: 19,
        pregunta: "¿Prefieres que tu cuenta bancaria se publique en una pantalla en Times Square, o tu historial de Netflix?",
        opcionA: "Cuenta bancaria pública",
        opcionB: "Historial Netflix público",
        respuestaSarcasticaA: "$12.47 disponibles. La fama de ser pobre. Al menos eres famoso.",
        respuestaSarcasticaB: "'Documentales de asesinos' y 'Cómo entrenar a tu dragón'. Perfil interesante."
    },
    {
        id: 20,
        pregunta: "¿Tienes que saludar a todo el mundo con un beso en los labios, o con un puñetazo suave en el hombro?",
        opcionA: "Beso en los labios",
        opcionB: "Puñetazo en el hombro",
        respuestaSarcasticaA: "Reuniones de trabajo incómodas. Tu dentista será tu mejor amigo.",
        respuestaSarcasticaB: "'Es mi forma de saludar', dirás mientras te demandan."
    },
    {
        id: 21,
        pregunta: "¿Prefieres que tu teléfono suene tu canción más escuchada a volumen máximo en lugares públicos, o que vibre con el sonido de un 'moan'?",
        opcionA: "Música en público",
        opcionB: "Vibrador incómodo",
        respuestaSarcasticaA: "'Despacito' en el funeral. En bucle. Tu tía baila.",
        respuestaSarcasticaB: "Reuniones serias de repente muy interesantes. Todos te miran raro."
    },
    {
        id: 22,
        pregunta: "¿Te obligan a contar un chiste cada vez que entras a una habitación, o a llorar cada vez que alguien te saluda?",
        opcionA: "Contar chistes siempre",
        opcionB: "Llorar al saludar",
        respuestaSarcasticaA: "Funerales. Juicios. Tu vida es un show de comedia forzado.",
        respuestaSarcasticaB: "'Hola, buenos días' *llanto intenso*. Terapia será tu segundo hogar."
    },
    {
        id: 23,
        pregunta: "¿Prefieres tener siempre 5% de batería en tu teléfono, o tener que cargarlo cada 2 horas exactas?",
        opcionA: "Siempre 5% de batería",
        opcionB: "Cargar cada 2 horas",
        respuestaSarcasticaA: "Ansiedad eterna. Modo avión es tu único amigo. Tu vida es un 'low battery'.",
        respuestaSarcasticaB: "Despertador cada 2 horas. Nunca dormirás bien. Tu cerebro te odiará."
    },
    {
        id: 24,
        pregunta: "¿Tu jefe puede leer tus pensamientos durante el trabajo, o tu pareja puede leerlos todo el tiempo excepto en el trabajo?",
        opcionA: "Jefe lee pensamientos laborales",
        opcionB: "Pareja lee pensamientos personales",
        respuestaSarcasticaA: "'Ojalá estuviera durmiendo' - pensamiento 47 del lunes. Despido inminente.",
        respuestaSarcasticaB: "'Sí se ve gorda en ese vestido'. Adiós, relación. Hola, soledad."
    },
    {
        id: 25,
        pregunta: "¿Prefieres que tus fotos de perfil sean automáticamente tus peores fotos del mes, o que tus estados de WhatsApp sean tus notas de voz guardadas?",
        opcionA: "Peores fotos de perfil",
        opcionB: "Notas de voz como estados",
        respuestaSarcasticaB: "'Eh... sí... entonces... mmm... venía a decirte...' tu estado por 24 horas.",
        respuestaSarcasticaA: "Foto con cara de asco, ojos cerrados, boca abierta. Tu mejor imagen pública."
    }
];

// ============================================
// VARIABLES DEL ESTADO DEL JUEGO
// ============================================
let currentDilemma = null;
let usedDilemmas = [];
let streak = 0;
let timerInterval = null;
let timerStartTime = null;

// ============================================
// ELEMENTOS DEL DOM
// ============================================
const screens = {
    start: document.getElementById('startScreen'),
    dilemma: document.getElementById('dilemmaScreen'),
    result: document.getElementById('resultScreen')
};

const elements = {
    streak: document.getElementById('streak'),
    startBtn: document.getElementById('startBtn'),
    timerBar: document.getElementById('timerBar'),
    dilemmaQuestion: document.getElementById('dilemmaQuestion'),
    optionA: document.getElementById('optionA'),
    optionB: document.getElementById('optionB'),
    textA: document.getElementById('textA'),
    textB: document.getElementById('textB'),
    percentageDisplay: document.getElementById('percentageDisplay'),
    resultText: document.getElementById('resultText'),
    sarcasticResponse: document.getElementById('sarcasticResponse'),
    nextBtn: document.getElementById('nextBtn'),
    optionsContainer: document.getElementById('optionsContainer')
};

// ============================================
// FUNCIONES DEL JUEGO
// ============================================

/**
 * Inicializa el juego y event listeners
 */
function init() {
    elements.startBtn.addEventListener('click', startGame);
    elements.optionA.addEventListener('click', () => handleChoice('A'));
    elements.optionB.addEventListener('click', () => handleChoice('B'));
    elements.nextBtn.addEventListener('click', nextDilemma);
}

/**
 * Comienza el juego desde la pantalla de inicio
 */
function startGame() {
    hideAllScreens();
    screens.dilemma.classList.remove('hidden');
    streak = 0;
    usedDilemmas = [];
    updateStreak();
    loadRandomDilemma();
}

/**
 * Oculta todas las pantallas del juego
 */
function hideAllScreens() {
    Object.values(screens).forEach(screen => screen.classList.add('hidden'));
}

/**
 * Carga un dilema aleatorio que no se haya usado recientemente
 */
function loadRandomDilemma() {
    // Si usamos todos, reiniciamos el historial (excepto el último)
    if (usedDilemmas.length >= dilemmas.length) {
        const lastDilemma = usedDilemmas[usedDilemmas.length - 1];
        usedDilemmas = lastDilemma ? [lastDilemma] : [];
    }

    // Filtrar dilemas disponibles
    const availableDilemmas = dilemmas.filter(d => !usedDilemmas.includes(d.id));
    
    // Seleccionar aleatorio
    const randomIndex = Math.floor(Math.random() * availableDilemmas.length);
    currentDilemma = availableDilemmas[randomIndex];
    
    // Marcar como usado
    usedDilemmas.push(currentDilemma.id);

    // Mostrar en pantalla
    displayDilemma();
    
    // Iniciar temporizador
    startTimer();
}

/**
 * Muestra el dilema actual en la interfaz
 */
function displayDilemma() {
    elements.dilemmaQuestion.textContent = currentDilemma.pregunta;
    elements.textA.textContent = currentDilemma.opcionA;
    elements.textB.textContent = currentDilemma.opcionB;
    
    // Resetear estado de botones
    elements.optionA.classList.remove('selected', 'unselected');
    elements.optionB.classList.remove('selected', 'unselected');
    elements.optionA.disabled = false;
    elements.optionB.disabled = false;
}

/**
 * Inicia el temporizador de 5 segundos
 */
function startTimer() {
    // Resetear barra
    elements.timerBar.classList.remove('active');
    elements.timerBar.style.transform = 'scaleX(1)';
    
    // Forzar reflow para reiniciar animación
    void elements.timerBar.offsetWidth;
    
    // Iniciar animación
    elements.timerBar.classList.add('active');
    
    // Timer de respaldo para navegación automática
    clearTimeout(timerInterval);
    timerInterval = setTimeout(() => {
        handleTimeout();
    }, 5000);
}

/**
 * Maneja cuando el tiempo se agota sin respuesta
 */
function handleTimeout() {
    if (!screens.dilemma.classList.contains('hidden')) {
        // Selección aleatoria cuando se acaba el tiempo
        const randomChoice = Math.random() > 0.5 ? 'A' : 'B';
        handleChoice(randomChoice, true);
    }
}

/**
 * Maneja la selección de una opción por el usuario
 */
function handleChoice(choice, isTimeout = false) {
    // Detener timer
    clearTimeout(timerInterval);
    elements.timerBar.classList.remove('active');
    elements.timerBar.classList.add('paused');
    
    // Actualizar racha
    streak++;
    updateStreak();
    
    // Marcar opciones visualmente
    const selectedBtn = choice === 'A' ? elements.optionA : elements.optionB;
    const unselectedBtn = choice === 'A' ? elements.optionB : elements.optionA;
    
    selectedBtn.classList.add('selected');
    unselectedBtn.classList.add('unselected');
    
    // Deshabilitar botones
    elements.optionA.disabled = true;
    elements.optionB.disabled = true;
    
    // Mostrar resultado con pequeña demora para feedback visual
    setTimeout(() => {
        showResult(choice, isTimeout);
    }, 600);
}

/**
 * Muestra la pantalla de resultado con porcentaje y respuesta sarcástica
 */
function showResult(choice, isTimeout) {
    hideAllScreens();
    screens.result.classList.remove('hidden');
    
    // Generar porcentaje aleatorio realista (40-85%)
    const percentage = Math.floor(Math.random() * 45) + 40;
    elements.percentageDisplay.textContent = `${percentage}%`;
    
    // Texto de resultado
    elements.resultText.textContent = isTimeout 
        ? `⏰ Se acabó el tiempo. Elegimos por ti.` 
        : `Elegiste la opción ${choice}`;
    
    // Respuesta sarcástica según opción
    const sarcasticText = choice === 'A' 
        ? currentDilemma.respuestaSarcasticaA 
        : currentDilemma.respuestaSarcasticaB;
    
    elements.sarcasticResponse.textContent = sarcasticText;
}

/**
 * Carga el siguiente dilema
 */
function nextDilemma() {
    hideAllScreens();
    screens.dilemma.classList.remove('hidden');
    loadRandomDilemma();
}

/**
 * Actualiza el contador de racha en la UI
 */
function updateStreak() {
    elements.streak.textContent = `Racha: ${streak}`;
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', init);
