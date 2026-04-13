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
    { id: 25, pregunta: "¿Prefieres que tus fotos de perfil sean automáticamente tus peores fotos del mes, o que tus estados de WhatsApp sean tus notas de voz guardadas?", opcionA: "Peores fotos de perfil", opcionB: "Notas de voz como estados", respuestaSarcasticaA: "Foto con cara de asco, ojos cerrados, boca abierta. Tu mejor imagen pública.", respuestaSarcasticaB: "'Eh... sí... entonces... mmm...' tu estado por 24 horas." },

    // --- OSCUROS / INCÓMODOS ---
    { id: 26, pregunta: "¿Prefieres saber exactamente cuándo vas a morir, o saber exactamente cómo?", opcionA: "Saber la fecha exacta", opcionB: "Saber cómo sucederá", respuestaSarcasticaA: "Cada cumpleaños con cuenta regresiva existencial. Feliz año nuevo, supongo.", respuestaSarcasticaB: "Nunca más subirás escaleras, nadarás ni comerás ese filete mal cocido. Por si acaso." },
    { id: 27, pregunta: "¿Prefieres que todos puedan ver tus inseguridades más profundas, o que nadie te tome en serio jamás?", opcionA: "Mis inseguridades visibles", opcionB: "Nadie me toma en serio", respuestaSarcasticaA: "Tus miedos más oscuros en la frente. Al menos la gente finalmente te entenderá.", respuestaSarcasticaB: "Dices algo brillante y todos se ríen. Dices algo estúpido y todos se ríen. Igual." },
    { id: 28, pregunta: "¿Prefieres perder todos tus recuerdos de los últimos 5 años, o no poder hacer nuevos recuerdos por los próximos 2?", opcionA: "Borrar los últimos 5 años", opcionB: "Sin nuevos recuerdos por 2 años", respuestaSarcasticaA: "Despiertas sin saber quién eres ahora. Hay algo liberador en eso. Y aterrador.", respuestaSarcasticaB: "Vives experiencias increíbles que al día siguiente desaparecen. Como un sueño eterno." },
    { id: 29, pregunta: "¿Preferirías haber nacido 50 años antes o 50 años después?", opcionA: "50 años antes", opcionB: "50 años después", respuestaSarcasticaA: "Sin internet, sin redes, sin delivery. Pero tampoco con tu jefe enviando mensajes a las 11 PM.", respuestaSarcasticaB: "Puede que seas esclavo de una IA o inmortal con suscripción mensual. Lotería existencial." },
    { id: 30, pregunta: "¿Prefieres que cada mentira que dices te haga crecer un centímetro, o que cada verdad incómoda que dices te quite uno?", opcionA: "Crecer con cada mentira", opcionB: "Encoger con cada verdad", respuestaSarcasticaA: "Llevas 30 años mintiendo. Ahora mides 2 metros y nadie sabe por qué.", respuestaSarcasticaB: "Eres brutal y sincero. Y también extremadamente bajito." },

    // --- RELACIONES / CRUSH / EX ---
    { id: 31, pregunta: "¿Prefieres que tu ex te vea en el mejor momento de tu vida, o que nunca más sepas nada de él/ella?", opcionA: "Que me vea brillar", opcionB: "Desaparecer de su radar para siempre", respuestaSarcasticaA: "Llevas semanas preparando ese encuentro casual. Fingido pero perfecto.", respuestaSarcasticaB: "El closure que nunca pediste pero que tu salud mental necesitaba." },
    { id: 32, pregunta: "¿Prefieres tener una relación perfecta con alguien que nadie en tu vida soporta, o una mediocre con alguien que todos adoran?", opcionA: "Relación perfecta, familia en contra", opcionB: "Relación mediocre, todos la aprueban", respuestaSarcasticaA: "Navidades en guerra. Pero en casa, paz absoluta. Dicen que vale la pena.", respuestaSarcasticaB: "Tus amigos organizan el cumpleaños de tu pareja con más emoción que tú." },
    { id: 33, pregunta: "¿Prefieres saber si tu crush actual te ha ignorado a propósito alguna vez, o saber qué piensan realmente de ti?", opcionA: "Saber si me ha ignorado", opcionB: "Saber qué piensa realmente de mí", respuestaSarcasticaA: "Spoiler: sí. Dos veces. El martes. Y el otro martes.", respuestaSarcasticaB: "Puede ser maravilloso o devastador. Sin término medio. ¿Te arriesgas?" },
    { id: 34, pregunta: "¿Prefieres que tu pareja sepa exactamente cuánto ganas, o exactamente cuántas personas te han gustado en el último año?", opcionA: "Saber mi salario exacto", opcionB: "Saber cuántos me han gustado", respuestaSarcasticaA: "De ahora en adelante cada cena es una negociación salarial.", respuestaSarcasticaB: "El número es mayor de lo que crees que crees. Conversación difícil garantizada." },
    { id: 35, pregunta: "¿Prefieres que tu ex sepa todo lo que pensabas de él/ella cuando terminaron, o que sepa todo lo que piensas ahora?", opcionA: "Lo que pensaba al terminar", opcionB: "Lo que pienso ahora", respuestaSarcasticaA: "'En ese momento te odiaba con cada célula de mi ser'. Terapia compartida.", respuestaSarcasticaB: "Podría ser 'te extraño' o 'qué alivio'. Solo tú sabes cuál es más peligrosa." },
    { id: 36, pregunta: "¿Prefieres que tu próxima relación dure 3 meses increíbles o 3 años mediocres?", opcionA: "3 meses increíbles", opcionB: "3 años mediocres", respuestaSarcasticaA: "Intenso, apasionado y luego vacío. Como las series de Netflix de una temporada.", respuestaSarcasticaB: "Te acostumbras tanto que no sabes si es amor o comodidad. Como los calcetines viejos." },
    { id: 37, pregunta: "¿Prefieres que tu crush vea todos tus mensajes enviados de madrugada, o todos tus búsquedas de Google sobre él/ella?", opcionA: "Los mensajes de madrugada", opcionB: "Las búsquedas de Google", respuestaSarcasticaA: "'¿Sigues despierto/a?' a las 2:47 AM. Clásico. No tiene defensa.", respuestaSarcasticaB: "'¿Es normal querer saber dónde vive alguien que conocí hace dos días?' — búsqueda #47." },

    // --- TRABAJO / REDES SOCIALES ---
    { id: 38, pregunta: "¿Prefieres que tu jefe vea tu actividad en Instagram durante horas de trabajo, o que tus seguidores vean tus DMs más vergonzosos?", opcionA: "Jefe ve mi Instagram laboral", opcionB: "Seguidores ven mis DMs", respuestaSarcasticaA: "3 horas de reels de gatos en martes laboral. Productividad redefinida.", respuestaSarcasticaB: "Ese DM que nunca enviaste casi. Y el que sí enviaste y ojalá no hubieras." },
    { id: 39, pregunta: "¿Prefieres tener un trabajo que odias con un salario increíble, o un trabajo que amas con un salario miserable?", opcionA: "Odio + dinero", opcionB: "Amor + pobreza", respuestaSarcasticaA: "Domingo a las 9 PM con ansiedad y una cuenta bancaria envidiable. El sueño moderno.", respuestaSarcasticaB: "Feliz pero preocupado. Motivado pero con el refrigerador vacío. Arte puro." },
    { id: 40, pregunta: "¿Prefieres que todas tus quejas de trabajo se publiquen automáticamente en LinkedIn, o que tus logros reales nunca puedan aparecer ahí?", opcionA: "Quejas en LinkedIn", opcionB: "Sin logros en LinkedIn", respuestaSarcasticaA: "'Mi jefe es un completo idiota' — Me gusta esto. 47 personas. Incluido tu jefe.", respuestaSarcasticaB: "Cinco años de trabajo invisible. Pero al menos eres honesto contigo mismo." },
    { id: 41, pregunta: "¿Prefieres recibir un mensaje de tu jefe a las 11 PM cada noche, o nunca recibir retroalimentación de nadie en tu trabajo?", opcionA: "Mensaje del jefe cada noche", opcionB: "Cero retroalimentación para siempre", respuestaSarcasticaA: "'Oye, ¿viste el correo?' a las 11:03 PM. Cada. Noche.", respuestaSarcasticaB: "Trabajas en el vacío. ¿Lo hiciste bien? ¿Mal? El universo no dice nada." },
    { id: 42, pregunta: "¿Prefieres que tu cuenta de TikTok sea hackeada y todos tus borradores publicados, o que tu correo profesional quede expuesto?", opcionA: "Borradores de TikTok públicos", opcionB: "Correo profesional expuesto", respuestaSarcasticaA: "Ese video que grabaste bailando a las 2 AM. Público. Con tu cara. Para siempre.", respuestaSarcasticaB: "Veinte correos con 'esto es una estupidez' sobre proyectos de tus clientes. Chau carrera." },

    // --- HUMOR ABSURDO ---
    { id: 43, pregunta: "¿Prefieres que cada vez que alguien te llame tu teléfono suene con tu peor karaoke, o que tu ringtone sea el llanto de un bebé pero MUY realista?", opcionA: "Mi peor karaoke como ringtone", opcionB: "Llanto de bebé hiperrealista", respuestaSarcasticaA: "Tu versión de 'My Heart Will Go On' en el funeral de tu abuelo. Inapelable.", respuestaSarcasticaB: "Reunión de trabajo. Silencio absoluto. AAAAHHHH. Todos te miran." },
    { id: 44, pregunta: "¿Prefieres que tu sombra haga movimientos completamente distintos a los tuyos, o que tu reflejo siempre vaya con dos segundos de retraso?", opcionA: "Sombra independiente", opcionB: "Reflejo con retraso", respuestaSarcasticaA: "Tu sombra baila mientras haces una presentación seria. Entretenido para todos menos tú.", respuestaSarcasticaB: "Cada mañana te lavas los dientes y tu reflejo todavía sigue dormido. Terror puro." },
    { id: 45, pregunta: "¿Prefieres que cada vez que entras a un lugar suene una fanfarria, o que cada vez que te vas suene música de derrota?", opcionA: "Fanfarria al entrar", opcionB: "Música de derrota al salir", respuestaSarcasticaA: "Entras al baño de la oficina. TARARÁN TARAAAAN. Todos te miran.", respuestaSarcasticaB: "Sales de una cita. Wah wah waaah. El taxi llega con la música puesta." },
    { id: 46, pregunta: "¿Prefieres que tu estornudo suene exactamente como un perro ladrando, o como alguien diciendo 'atchís' con acento exagerado?", opcionA: "Estornudo = ladrido de perro", opcionB: "Estornudo = 'ATCHÍS' dramático", respuestaSarcasticaA: "Alergia en reunión de trabajo. GUAU. Silencio. GUAU GUAU. Nadie sabe qué hacer.", respuestaSarcasticaB: "Teatro en cada estornudo. Todos esperan que te cures o te metas a actuar." },
    { id: 47, pregunta: "¿Prefieres que siempre que alguien diga tu nombre aparezca un pequeño globo de color encima de tu cabeza, o que cada vez que pienses en comida te salive públicamente?", opcionA: "Globo al escuchar mi nombre", opcionB: "Salivar al pensar en comida", respuestaSarcasticaA: "Tu jefe te llama en reunión. Globo rosa aparece. Nadie puede concentrarse en lo tuyo.", respuestaSarcasticaB: "Pasas por una pizzería. Baba. Alguien menciona sushi. Baba. Siempre en público." },
    { id: 48, pregunta: "¿Prefieres hablar como Yoda para siempre, o en rima forzada todo lo que digas?", opcionA: "Hablar como Yoda", opcionB: "Todo en rima", respuestaSarcasticaA: "'El informe listo está, señor. El cliente satisfecho quedará.' Reunión de ventas, nivel avanzado.", respuestaSarcasticaB: "'Buenos días señora, ¿cómo le va? Yo vengo a presentar lo que usted querrá.' Entrevista de trabajo." },
    { id: 49, pregunta: "¿Prefieres que tu cara haga exactamente la expresión opuesta a lo que sientes, o que tus manos aplaudan solas cada vez que alguien dice algo estúpido?", opcionA: "Cara al revés de mis emociones", opcionB: "Manos que aplauden solas", respuestaSarcasticaA: "Alguien muere en una película. Sonríes como el Joker. Nadie quiere ir al cine contigo.", respuestaSarcasticaB: "Tu jefe presenta su 'brillante' idea. Aplauso espontáneo. Incómodo para todos." },
    { id: 50, pregunta: "¿Prefieres que cada vez que mientes te crezca el pelo 5 cm, o que cada vez que dices la verdad se te caiga un diente?", opcionA: "Pelo crece con cada mentira", opcionB: "Pierdo un diente con cada verdad", respuestaSarcasticaA: "Llevas semanas sin mentir. Melena espectacular. Tus últimas 48 horas: rapunzel total.", respuestaSarcasticaB: "Eres honesto y sin dientes. Al menos tienes integridad. Y un dentista muy ocupado." },

    // --- MÁS OSCUROS/FILOSÓFICOS ---
    { id: 51, pregunta: "¿Prefieres ser increíblemente talentoso en algo que nadie valora, o mediocre en algo que el mundo ama?", opcionA: "Talento invisible", opcionB: "Mediocridad amada", respuestaSarcasticaA: "El mejor del mundo tocando el triángulo. Genio sin público. Arte puro e ignorado.", respuestaSarcasticaB: "Cantante mediocre con millones de fans. La injusticia hecha persona." },
    { id: 52, pregunta: "¿Prefieres que la gente sepa exactamente lo que sientes por ellos, o que nunca nadie pueda saber lo que piensas?", opcionA: "Todos saben lo que siento", opcionB: "Nadie sabe lo que pienso", respuestaSarcasticaA: "Tu cara cuando ves a tu jefe los lunes dice todo. Y ahora él también lo sabe.", respuestaSarcasticaB: "Eres un enigma absoluto. Nadie sabe si los amas o los toleras. Poder puro." },
    { id: 53, pregunta: "¿Prefieres tener una vida emocionante llena de errores, o una vida tranquila y perfectamente aburrida?", opcionA: "Caos emocionante", opcionB: "Calma perfecta", respuestaSarcasticaA: "Historias increíbles, deudas ocasionales, ex que te bloquean. Material de libro.", respuestaSarcasticaB: "Todo bajo control. Nada interesante. Vives y nadie nota la diferencia." },
    { id: 54, pregunta: "¿Prefieres saber que una persona cercana te miente habitualmente pero no saber quién, o saber quién pero no sobre qué?", opcionA: "Sé que hay un mentiroso pero no sé quién", opcionB: "Sé quién es pero no sobre qué miente", respuestaSarcasticaA: "Miras a todos con sospecha en la cena familiar. Paranoia navideña garantizada.", respuestaSarcasticaB: "Tu mejor amigo. Sabes que miente. Sobre algo. La duda te consumirá lentamente." },
    { id: 55, pregunta: "¿Prefieres que todo el mundo te vea como más inteligente de lo que eres, o más atractivo de lo que eres?", opcionA: "Me ven más inteligente", opcionB: "Me ven más atractivo", respuestaSarcasticaA: "Te contrataron creyendo que eras brillante. Ahora tienes que fingir. Para siempre.", respuestaSarcasticaB: "La barra de expectativas sube. La realidad no. Cada primer encuentro es una decepción." },
    { id: 56, pregunta: "¿Prefieres poder leer la mente de las personas pero no poder apagar esa habilidad, o nunca entender lo que nadie realmente quiere decir?", opcionA: "Leer mentes sin control", opcionB: "No entender nunca el subtexto", respuestaSarcasticaA: "Escuchas lo que todos piensan. De ti. De todo. En bucle. Bienvenido al infierno.", respuestaSarcasticaB: "'Ya estoy bien' — crees que está bien. Error. Siempre el mismo error." },
    { id: 57, pregunta: "¿Prefieres que cada decisión importante de tu vida sea tomada por un dado, o que la tome la persona que menos te conoce?", opcionA: "El dado decide todo", opcionB: "El desconocido decide", respuestaSarcasticaA: "¿Acepto el trabajo? *lanza dado* 4. No. ¿Me caso? *lanza dado* 2. Tampoco. Suerte.", respuestaSarcasticaB: "El señor de la panadería decide tu carrera. Dice que deberías ser marinero. Por qué no." },
    { id: 58, pregunta: "¿Prefieres tener acceso a todo el conocimiento del mundo pero nunca poder compartirlo, o poder compartir todo pero no recordar nada?", opcionA: "Saber todo en silencio", opcionB: "Compartir todo sin recordar nada", respuestaSarcasticaA: "Sabes la respuesta a todo. Nadie te cree. No puedes demostrarlo. Frustración eterna.", respuestaSarcasticaB: "Explicas el universo brillantemente. Al día siguiente no sabes ni tu nombre." },
    { id: 59, pregunta: "¿Prefieres vivir en un mundo donde todo el mundo es brutalmente honesto, o donde todo el mundo miente piadosamente siempre?", opcionA: "Honestidad brutal universal", opcionB: "Mentiras piadosas eternas", respuestaSarcasticaA: "'Ese vestido no te favorece nada.' 'Tu presentación fue aburrida.' 'Te soporto, no te quiero.' Bienvenido.", respuestaSarcasticaB: "Cada 'estás bien' es mentira. Cada 'te queda perfecto' también. Todo es ficción consensuada." },
    { id: 60, pregunta: "¿Prefieres que la gente recuerde todo lo bueno de ti cuando ya no estés, o que lo viva contigo ahora pero lo olvide después?", opcionA: "Recordado bien para siempre", opcionB: "Vivido intensamente y olvidado", respuestaSarcasticaA: "Tu funeral será espectacular. Lástima que no estés para verlo.", respuestaSarcasticaB: "Presencia total ahora. Olvido total después. Como los fuegos artificiales." }
];

// ============================================
// ARQUETIPOS PSICOLÓGICOS (pantalla viral)
// ============================================
// 💣 TOP 10 RESULTADOS VIRALES
const arquetipos = {
    // 1. 😈 El Caótico Inteligente (caos > 7 && logica > 5)
    caotico_inteligente: {
        emoji: "😈",
        titulo: "EL CAÓTICO",
        subtitulo: "INTELIGENTE",
        rareza: 12,
        descripcion: "Rompes reglas… pero sabes exactamente cuándo hacerlo.",
        rasgos: [
            { icon: "🔥", texto: "El caos es tu zona de confort" },
            { icon: "♟️", texto: "Planeas... pero rompes las reglas" },
            { icon: "👻", texto: "Peligrosamente impredecible" }
        ]
    },
    // 2. 🧠 El Estratega Frío (logica > 8)
    estratega_frio: {
        emoji: "🧠",
        titulo: "EL ESTRATEGA",
        subtitulo: "FRÍO",
        rareza: 8,
        descripcion: "No decides con emociones. Y eso asusta un poco.",
        rasgos: [
            { icon: "🧊", texto: "Imperturbable bajo presión" },
            { icon: "🎯", texto: "Siempre hay un plan detrás" },
            { icon: "⚡", texto: "Tu cerebro funciona a 3000 rpm" }
        ]
    },
    // 3. 🔥 El Impredecible (por defecto o caos > 6 && emocional > 5)
    impredecible: {
        emoji: "🔥",
        titulo: "EL IMPREVISIBLE",
        subtitulo: "",
        rareza: 18,
        descripcion: "Ni tú sabes qué harás… y eso es tu ventaja.",
        rasgos: [
            { icon: "⚡", texto: "Las normas son sugerencias para ti" },
            { icon: "🎲", texto: "Las decisiones te sorprenden a ti también" },
            { icon: "🌪️", texto: "Dejas un rastro de caos memorable" }
        ]
    },
    // 4. 👑 El Dominante (ego > 7)
    dominante: {
        emoji: "👑",
        titulo: "EL DOMINANTE",
        subtitulo: "",
        rareza: 10,
        descripcion: "No sigues el juego… lo controlas.",
        rasgos: [
            { icon: "🎭", texto: "Cada conversación es un tablero de ajedrez" },
            { icon: "🎯", texto: "Actúas antes de pensar. Siempre." },
            { icon: "💎", texto: "La imagen es todo" }
        ]
    },
    // 5. 🎭 El Doble Cara (ego > 5 && logica > 5)
    doble_cara: {
        emoji: "🎭",
        titulo: "EL DOBLE CARA",
        subtitulo: "",
        rareza: 15,
        descripcion: "Sabes adaptarte. Demasiado bien.",
        rasgos: [
            { icon: "🎩", texto: "La lógica al servicio del ego" },
            { icon: "🔮", texto: "Ves los movimientos 3 pasos adelante" },
            { icon: "🎤", texto: "El escenario siempre está donde tú estás" }
        ]
    },
    // 6. 🧨 El Caos Puro (caos > 8)
    caos_puro: {
        emoji: "🧨",
        titulo: "EL CAOS PURO",
        subtitulo: "",
        rareza: 9,
        descripcion: "No buscas problemas… pero siempre te encuentran.",
        rasgos: [
            { icon: "💣", texto: "Primero actúas, después piensas" },
            { icon: "💥", texto: "De 0 a 100 en segundos" },
            { icon: "🔪", texto: "Tu instinto es tu única brújula" }
        ]
    },
    // 7. 🧩 El Analista (logica > 6)
    analista: {
        emoji: "🧩",
        titulo: "EL ANALISTA",
        subtitulo: "",
        rareza: 14,
        descripcion: "Piensas demasiado… pero casi nunca te equivocas.",
        rasgos: [
            { icon: "👁️", texto: "Procesas más de lo que expresas" },
            { icon: "🧬", texto: "Razón y emoción en equilibrio tenso" },
            { icon: "🔍", texto: "Consciente de tu audiencia invisible" }
        ]
    },
    // 8. 🫀 El Emocional Intenso (emocional > 8)
    emocional_intenso: {
        emoji: "🫀",
        titulo: "EL EMOCIONAL",
        subtitulo: "INTENSO",
        rareza: 11,
        descripcion: "Sientes todo… al máximo.",
        rasgos: [
            { icon: "❤️", texto: "Tu intuición rara vez falla" },
            { icon: "🌊", texto: "Las emociones son tu superpoder" },
            { icon: "❤️‍🔥", texto: "Todo o nada, nunca el medio" }
        ]
    },
    // 9. 😶‍🌫️ El Neutral Peligroso (balance)
    neutral_peligroso: {
        emoji: "😶‍🌫️",
        titulo: "EL NEUTRAL",
        subtitulo: "PELIGROSO",
        rareza: 7,
        descripcion: "Pareces tranquilo… pero no lo eres.",
        rasgos: [
            { icon: "🌙", texto: "Tu profundidad intimida a la gente" },
            { icon: "🎲", texto: "Impredecible hasta para ti mismo" },
            { icon: "🔮", texto: "Tu perfil psicológico tiene glitch" }
        ]
    },
    // 10. ⚡ El Rápido (caos > 6 && emocional > 4)
    rapido: {
        emoji: "⚡",
        titulo: "EL RÁPIDO",
        subtitulo: "",
        rareza: 16,
        descripcion: "No piensas… reaccionas. Y muchas veces ganas.",
        rasgos: [
            { icon: "⚡", texto: "Actúas antes de pensar. Siempre." },
            { icon: "🎯", texto: "El caos es tu zona de confort" },
            { icon: "🚀", texto: "Tu reputación va primero" }
        ]
    },
    // Fallback: El Impredecible
    mixto: {
        emoji: "🌀",
        titulo: "EL IMPOSIBLE",
        subtitulo: "ÚNICO",
        rareza: 3,
        descripcion: "Ni los algoritmos ni los psicólogos te tienen claro. Incluido tú.",
        rasgos: [
            { icon: "❓", texto: "Impredecible hasta para ti mismo" },
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
    25: { A: { ego: 2, caos: 1 }, B: { logica: 2, emocional: 1 } },
    // Oscuros
    26: { A: { logica: 3, ego: 1 }, B: { caos: 2, emocional: 2 } },
    27: { A: { emocional: 3, caos: 1 }, B: { ego: 2, caos: 1 } },
    28: { A: { caos: 2, emocional: 1 }, B: { logica: 2, emocional: 2 } },
    29: { A: { logica: 2, ego: 1 }, B: { caos: 2, ego: 2 } },
    30: { A: { caos: 3, ego: 1 }, B: { logica: 2, emocional: 2 } },
    // Relaciones
    31: { A: { ego: 3, caos: 1 }, B: { logica: 2, emocional: 1 } },
    32: { A: { emocional: 2, caos: 2 }, B: { logica: 2, ego: 1 } },
    33: { A: { caos: 2, emocional: 1 }, B: { logica: 2, ego: 2 } },
    34: { A: { logica: 2, ego: 1 }, B: { caos: 2, emocional: 1 } },
    35: { A: { emocional: 3, caos: 1 }, B: { ego: 2, logica: 1 } },
    36: { A: { caos: 3, emocional: 1 }, B: { logica: 2, ego: 1 } },
    37: { A: { emocional: 2, caos: 1 }, B: { ego: 2, caos: 2 } },
    // Trabajo / redes
    38: { A: { caos: 2, logica: 1 }, B: { ego: 2, emocional: 1 } },
    39: { A: { logica: 2, ego: 2 }, B: { emocional: 3, caos: 1 } },
    40: { A: { caos: 3, emocional: 1 }, B: { logica: 2, ego: 1 } },
    41: { A: { logica: 2, caos: 1 }, B: { emocional: 2, ego: 1 } },
    42: { A: { caos: 2, emocional: 1 }, B: { logica: 2, ego: 2 } },
    // Humor absurdo
    43: { A: { ego: 2, caos: 1 }, B: { caos: 3, emocional: 1 } },
    44: { A: { caos: 2, ego: 1 }, B: { logica: 2, emocional: 1 } },
    45: { A: { ego: 3, caos: 1 }, B: { emocional: 2, caos: 1 } },
    46: { A: { caos: 3 }, B: { ego: 2, caos: 1 } },
    47: { A: { ego: 2, logica: 1 }, B: { caos: 2, emocional: 2 } },
    48: { A: { logica: 2, caos: 1 }, B: { caos: 2, emocional: 1 } },
    49: { A: { emocional: 2, caos: 2 }, B: { caos: 3, logica: 1 } },
    50: { A: { caos: 3, ego: 1 }, B: { logica: 2, emocional: 2 } },
    // Filosóficos
    51: { A: { emocional: 2, caos: 1 }, B: { ego: 3, logica: 1 } },
    52: { A: { emocional: 3, caos: 1 }, B: { logica: 2, ego: 2 } },
    53: { A: { caos: 3, emocional: 1 }, B: { logica: 3, ego: 1 } },
    54: { A: { caos: 2, emocional: 1 }, B: { logica: 2, ego: 1 } },
    55: { A: { logica: 2, ego: 1 }, B: { ego: 3, caos: 1 } },
    56: { A: { caos: 2, emocional: 2 }, B: { logica: 3, ego: 1 } },
    57: { A: { caos: 3 }, B: { emocional: 2, caos: 1 } },
    58: { A: { logica: 3, ego: 1 }, B: { emocional: 2, caos: 2 } },
    59: { A: { logica: 2, caos: 1 }, B: { emocional: 2, ego: 1 } },
    60: { A: { ego: 2, logica: 1 }, B: { emocional: 3, caos: 1 } }
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
            color: Math.random() > 0.7 ? '#ff6a00' : (Math.random() > 0.5 ? '#ffd60a' : '#f5ede0')
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
    analyzing: document.getElementById('analyzingScreen'),
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
    compareBtn: document.getElementById('compareBtn'),
    downloadBtn: document.getElementById('downloadBtn'),
    continueBtn: document.getElementById('continueBtn'),
    toast: document.getElementById('toast'),
    optionsContainer: document.getElementById('optionsContainer'),
    revealCountdown: document.getElementById('revealCountdown'),
    // Social proof elements
    rarityPct: document.getElementById('rarityPct'),
    comparisonText: document.getElementById('comparisonText'),
    // Canvas
    shareCanvas: document.getElementById('shareCanvas')
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
    elements.shareBtn?.addEventListener('click', shareResult);
    elements.compareBtn?.addEventListener('click', compareWithFriends);
    elements.downloadBtn?.addEventListener('click', downloadResultImage);
    elements.continueBtn?.addEventListener('click', continueAfterPsych);
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

let revealTimeout = null;

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
    // No iniciar timer todavía — primero revelamos la pregunta sola
    startRevealSequence();
}

function displayDilemma() {
    elements.dilemmaNum.textContent = `DILEMA #${totalDecisions + 1}`;
    elements.dilemmaQuestion.textContent = currentDilemma.pregunta;
    elements.textA.textContent = currentDilemma.opcionA;
    elements.textB.textContent = currentDilemma.opcionB;
    elements.optionA.classList.remove('selected', 'unselected');
    elements.optionB.classList.remove('selected', 'unselected');
    elements.optionA.disabled = true; // Deshabilitados hasta revelar
    elements.optionB.disabled = true;
    // Ocultar opciones, mostrar countdown
    elements.optionsContainer.classList.add('hidden');
    elements.revealCountdown.classList.remove('hidden');
    // Timer bar en pausa hasta revelar
    elements.timerBar.classList.remove('active');
    elements.timerBar.style.transform = 'scaleX(1)';
    if (elements.timerCountdown) elements.timerCountdown.textContent = '5';
}

function startRevealSequence() {
    // 2.5 segundos de suspense con la pregunta sola
    revealTimeout = setTimeout(() => {
        revealOptions();
    }, 2500);
}

function revealOptions() {
    // Ocultar countdown, mostrar opciones con animación
    elements.revealCountdown.classList.add('hidden');
    elements.optionsContainer.classList.remove('hidden');
    // Habilitar botones
    elements.optionA.disabled = false;
    elements.optionB.disabled = false;
    // Ahora sí iniciar el timer de 5 segundos
    startTimer();
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
    clearTimeout(revealTimeout); // Por si acaso
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
    
    // ¿Mostrar pantalla psicológica cada 10 decisiones (bloqueante)?
    const showPsychScreen = totalDecisions > 0 && totalDecisions % 10 === 0;
    // Cada 5 decisiones (pero no cada 10) mostrar resultado normal
    const showNormalMilestone = totalDecisions > 0 && totalDecisions % 5 === 0 && !showPsychScreen;
    
    setTimeout(() => {
        if (showPsychScreen) {
            // Flujo viral: análisis dramático → resultado psicológico
            showAnalyzingScreen();
        } else {
            showResult(choice, isTimeout);
        }
    }, 350);
}

// ---- PANTALLA DE ANÁLISIS DRAMÁTICO ----
function showAnalyzingScreen() {
    hideAllScreens();
    screens.analyzing.classList.remove('hidden');
    
    // 1 segundo de suspense antes de revelar resultado
    setTimeout(() => {
        showPsychResult();
    }, 1000);
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
    
    const { caos, logica, emocional, ego } = psychologicalProfile;
    const total = caos + logica + emocional + ego;
    
    // 🎯 LÓGICA TOP 10 RESULTADOS (percepción > precisión)
    let dominant = 'mixto';
    if (total > 0) {
        // 1. 😈 El Caótico Inteligente (caos > 7 && logica > 5)
        if (caos >= 7 && logica >= 5) {
            dominant = 'caotico_inteligente';
        }
        // 2. 🧠 El Estratega Frío (logica > 8)
        else if (logica >= 8) {
            dominant = 'estratega_frio';
        }
        // 3. 👑 El Dominante (ego > 7)
        else if (ego >= 7) {
            dominant = 'dominante';
        }
        // 4. 🧨 El Caos Puro (caos > 8)
        else if (caos >= 8) {
            dominant = 'caos_puro';
        }
        // 5. 🫀 El Emocional Intenso (emocional > 8)
        else if (emocional >= 8) {
            dominant = 'emocional_intenso';
        }
        // 6. 🎭 El Doble Cara (ego > 5 && logica > 5)
        else if (ego >= 5 && logica >= 5) {
            dominant = 'doble_cara';
        }
        // 7. 🧩 El Analista (logica > 6)
        else if (logica >= 6) {
            dominant = 'analista';
        }
        // 8. ⚡ El Rápido (caos > 6 && emocional > 4)
        else if (caos >= 6 && emocional >= 4) {
            dominant = 'rapido';
        }
        // 9. 😶‍🌫️ El Neutral Peligroso (balance: diferencias menores a 2)
        else if (Math.abs(caos - logica) <= 2 && Math.abs(ego - emocional) <= 2) {
            dominant = 'neutral_peligroso';
        }
        // 10. 🔥 El Impredecible (por defecto)
        else {
            dominant = 'impredecible';
        }
    }
    
    const archetype = arquetipos[dominant] || arquetipos.mixto;
    
    elements.psychEmoji.textContent = archetype.emoji;
    elements.psychArchetype.textContent = archetype.titulo;
    elements.psychArchetypeSub.textContent = archetype.subtitulo;
    elements.psychDescription.textContent = archetype.descripcion;
    
    elements.psychTraits.innerHTML = archetype.rasgos.map(r =>
        `<div class="psych-trait"><span>${r.icon}</span><span>${r.texto}</span></div>`
    ).join('');
    
    const pcts = total > 0 ? {
        caos: Math.round((caos / total) * 100),
        ego: Math.round((ego / total) * 100),
        logica: Math.round((logica / total) * 100),
        emocional: Math.round((emocional / total) * 100)
    } : { caos: 25, ego: 25, logica: 25, emocional: 25 };
    
    ['barCaos', 'barEgo', 'barLogica', 'barEmocional'].forEach(id => {
        elements[id].style.width = '0%';
    });
    
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
    
    // Presión social: mostrar rareza del resultado
    if (elements.rarityPct && elements.comparisonText) {
        const rarity = archetype.rareza || 10;
        elements.rarityPct.textContent = rarity + '%';
        const comparisons = [
            "La mayoría no responde como tú",
            "Eres más único de lo que crees",
            "Pocos tienen este perfil psicológico",
            "Tu forma de decidir es rara",
            "No encajas en el promedio"
        ];
        elements.comparisonText.textContent = comparisons[Math.floor(Math.random() * comparisons.length)];
    }
    
    // Guardar resultado para compartir
    window._currentResult = {
        archetype: archetype.titulo + ' ' + archetype.subtitulo,
        pcts,
        dominant,
        rareza: archetype.rareza || 10,
        emoji: archetype.emoji
    };
    
    // Generar imagen automáticamente para tenerla lista
    generateResultImage();
}

function generateResultImage() {
    const canvas = elements.shareCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const result = window._currentResult;
    if (!result) return;
    
    const w = canvas.width;
    const h = canvas.height;
    
    // Fondo oscuro degradado
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#080604');
    grad.addColorStop(1, '#141008');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    
    // Línea de acento superior
    ctx.fillStyle = '#ff6a00';
    ctx.fillRect(0, 0, w, 8);
    
    // Título principal
    ctx.fillStyle = '#f5ede0';
    ctx.font = 'bold 80px "Bebas Neue", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('DILEMAS VIRALES', w/2, 140);
    
    // Emoji grande
    ctx.font = '200px serif';
    ctx.fillText(result.emoji, w/2, 380);
    
    // "ERES:"
    ctx.fillStyle = '#7a6a55';
    ctx.font = '40px "Rajdhani", sans-serif';
    ctx.fillText('ERES:', w/2, 440);
    
    // Título del arquetipo
    ctx.fillStyle = '#ff6a00';
    ctx.font = 'bold 100px "Bebas Neue", sans-serif';
    ctx.fillText(result.archetype.split(' ')[0] || 'EL', w/2, 540);
    ctx.fillText(result.archetype.split(' ').slice(1).join(' ') || 'CAÓTICO', w/2, 640);
    
    // Rareza
    ctx.fillStyle = '#ffd60a';
    ctx.font = 'bold 60px "Rajdhani", sans-serif';
    ctx.fillText(`SOLO EL ${result.rareza}% LO OBTIENE`, w/2, 720);
    
    // Stats
    const stats = [
        { label: 'CAOS', pct: result.pcts.caos, color: '#e74c3c' },
        { label: 'EGO', pct: result.pcts.ego, color: '#9b59b6' },
        { label: 'LÓGICA', pct: result.pcts.logica, color: '#00cfff' },
        { label: 'EMOCIÓN', pct: result.pcts.emocional, color: '#00ff88' }
    ];
    
    let y = 850;
    stats.forEach(stat => {
        // Label
        ctx.fillStyle = '#f5ede0';
        ctx.font = 'bold 36px "Rajdhani", sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(stat.label, 100, y);
        
        // Barra de fondo
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        ctx.fillRect(320, y - 30, 600, 40);
        
        // Barra de valor
        ctx.fillStyle = stat.color;
        ctx.fillRect(320, y - 30, 600 * (stat.pct / 100), 40);
        
        // Porcentaje
        ctx.fillStyle = '#f5ede0';
        ctx.textAlign = 'right';
        ctx.fillText(stat.pct + '%', 960, y);
        
        y += 90;
    });
    
    // CTA
    ctx.textAlign = 'center';
    ctx.fillStyle = '#7a6a55';
    ctx.font = '40px "Rajdhani", sans-serif';
    ctx.fillText('¿Quién más es como tú?', w/2, h - 120);
    
    // URL
    ctx.fillStyle = '#ff6a00';
    ctx.font = 'bold 52px "Share Tech Mono", monospace';
    ctx.fillText('decisiones-locas.com', w/2, h - 55);
}

function shareResult() {
    const result = window._currentResult;
    if (!result) return;
    
    const text = `🔥 DILEMAS VIRALES\n\n` +
        `¡Soy ${result.archetype} ${result.emoji}!\n` +
        `Solo el ${result.rareza}% obtiene este resultado.\n\n` +
        `🔴 Caos: ${result.pcts.caos}% | 🟣 Ego: ${result.pcts.ego}%\n` +
        `🔵 Lógica: ${result.pcts.logica}% | 🟢 Emoción: ${result.pcts.emocional}%\n\n` +
        `¿Y tú? 👉 decisiones-locas.com`;
    
    // Intentar compartir imagen si existe
    const canvas = elements.shareCanvas;
    if (canvas && navigator.share && navigator.canShare) {
        canvas.toBlob(blob => {
            if (blob) {
                const file = new File([blob], 'mi-resultado-dilemas-virales.png', { type: 'image/png' });
                const shareData = { 
                    title: 'Soy ' + result.archetype, 
                    text: text,
                    files: [file]
                };
                if (navigator.canShare(shareData)) {
                    navigator.share(shareData).catch(() => copyToClipboard(text));
                    return;
                }
            }
            copyToClipboard(text);
        });
    } else {
        copyToClipboard(text);
    }
}

function compareWithFriends() {
    // Primero mostrar botón de descarga, luego permitir continuar
    if (elements.downloadBtn) {
        elements.downloadBtn.classList.remove('hidden');
    }
    shareResult();
}

function downloadResultImage() {
    const canvas = elements.shareCanvas;
    if (!canvas) return;
    
    const link = document.createElement('a');
    link.download = 'dilemas-virales-resultado.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    showToastCustom('¡Imagen descargada! 🔥');
}

function showToastCustom(message) {
    const toast = elements.toast;
    if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
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
    clearTimeout(revealTimeout); // Limpiar por si hay reveal pendiente
    // Clean psych insight
    if (elements.milestoneMessage) elements.milestoneMessage.classList.add('hidden');
    loadRandomDilemma();
}

function nextDilemma() {
    hideAllScreens();
    screens.dilemma.classList.remove('hidden');
    clearTimeout(revealTimeout); // Limpiar por si hay reveal pendiente
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