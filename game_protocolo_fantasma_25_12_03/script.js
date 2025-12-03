// --- INICIALIZACIÓN Y FUERZA DE REINICIO ---
localStorage.clear(); 

// --- DATOS DE LOS ENIGMAS (VERSIÓN FINAL Y REVISADA) ---
// El array termina en el Nivel 7. El Nivel 8 (Reinicio) es automático.
const enigmas = [
    {
        nivel: 1,
        titulo: "Constante 1 — Matemáticas Puras (El Límite de Raoul)",
        enigma: "Evalúe el límite exacto <b>L</b> de la siguiente expresión: L = [ Límite cuando n&rarr;&infin; de (∑ k=1 hasta n de 100k/n²) ] - 25. Determine el valor de L con precisión.",
        pista: "La expresión dentro del límite es una suma de Riemann. El límite de la suma es 50.",
        respuestaCorrecta: "25",
        respuestaGuardada: "",
        resolucionNarrativa: "Cuando introduces <b>25</b>, la simetría matemática de Raoul se satisface. Las líneas de energía se alinean, aceptando el nuevo punto de convergencia en el Núcleo."
    },
    {
        nivel: 2,
        titulo: "Constante 2 — Dinámica Rotacional (El Resonador de Erik)",
        enigma: "Un rotor tiene <b>&omega;<sub>0</sub></b> = 4.0 rad/s y, después de <b>&Delta;t</b> = 2.0 s, <b>&omega;<sub>f</sub></b> = 28.0 rad/s. Determine la magnitud exacta de la aceleración angular <b>&alpha;</b> en rad/s².",
        pista: "Use la fórmula: <b>&omega;<sub>f</sub></b> = <b>&omega;<sub>0</sub></b> + <b>&alpha;</b> · <b>&Delta;t</b>.",
        respuestaCorrecta: "12",
        respuestaGuardada: "",
        resolucionNarrativa: "Tu entrada <b>12</b> hace vibrar el aire digital. La aceleración angular del resonador se estabiliza, satisfaciendo las leyes de movimiento de Erik."
    },
    {
        nivel: 3,
        titulo: "Constante 3 — Termodinámica (La Máquina de Christine)",
        enigma: "Una máquina de Carnot opera entre <b>T<sub>H</sub></b> = 600 K y <b>T<sub>C</sub></b> = 400 K. Si absorbe <b>Q<sub>H</sub></b> = 90 kJ, calcule la magnitud exacta del trabajo neto <b>W</b> (en kJ).",
        pista: "Calcule la eficiencia <b>&eta;</b> y luego <b>W</b> = <b>&eta;</b> · <b>Q<sub>H</sub></b>. (La eficiencia es 1/3).",
        respuestaCorrecta: "30",
        respuestaGuardada: "",
        resolucionNarrativa: "El <b>30</b> aparece en la consola. La transferencia de energía de la máquina se equilibra, reconociendo el principio de eficiencia máximo diseñado por Christine."
    },
    {
        nivel: 4,
        titulo: "Constante 4 — Electrónica (El Compresor RLC)",
        enigma: "Circuito RLC: <b>L</b> = 50 mH y <b>C</b> = 5.0 &micro;F. Determine la frecuencia de resonancia angular <b>&omega;<sub>0</sub></b> en rad/s usando la fórmula &omega;<sub>0</sub> = 1/√(LC).",
        pista: "Recuerde las unidades: L = 0.05 H, C = 0.000005 F.",
        respuestaCorrecta: "2000",
        respuestaGuardada: "",
        resolucionNarrativa: "Cuando ingresas <b>2000</b>, el compresor ajusta su frecuencia de resonancia, estabilizando el flujo eléctrico del Núcleo."
    },
    {
        nivel: 5,
        titulo: "Constante 5 — Mecánica Cuántica (La Degeneración de Falk)",
        enigma: "Electrón en nivel <b>n=3</b>. La degeneración (sin espín) es <b>N=n&sup2;</b>. Determine el valor de N sumado a la cantidad total de valores posibles para el número cuántico de espín m<sub>s</sub>.",
        pista: "El número cuántico de espín m<sub>s</sub> tiene dos posibles valores.",
        respuestaCorrecta: "11",
        respuestaGuardada: "",
        resolucionNarrativa: "Tu respuesta —<b>11</b>— resuena con la estructura más profunda de la Simulación, alineando sus propiedades cuánticas."
    },
    {
        nivel: 6,
        titulo: "Constante 6 — Álgebra Relacional (La Cardinalidad del Núcleo)",
        enigma: "Relaciones <b>R<sub>1</sub></b> y <b>R<sub>2</sub></b> con cardinalidades |R<sub>1</sub>| = 4 y |R<sub>2</sub>| = 8. Calcule la cardinalidad de R<sub>1</sub> x R<sub>2</sub> dividida exactamente por 16. Formato: dos dígitos.",
        pista: "La cardinalidad del Producto Cartesiano es |R<sub>1</sub>| · |R<sub>2</sub>|.",
        respuestaCorrecta: "02",
        respuestaGuardada: "",
        resolucionNarrativa: "El <b>02</b> se ilumina. La lógica de la base de datos se restablece, asegurando que las estructuras del Núcleo se mantengan fieles a su diseño."
    },
    {
        nivel: 7,
        titulo: "Constante 7 — Métodos Numéricos (El Altar RK4)",
        enigma: "Método de Runge-Kutta de orden 4 (RK4): determine el número exacto de evaluaciones de la función <b>f(t, y)</b> requeridas en cada paso de integración. Formato: dos dígitos.",
        pista: "Paso k<sub>1</sub>, k<sub>2</sub>, k<sub>3</sub>, k<sub>4</sub>.",
        respuestaCorrecta: "04",
        respuestaGuardada: "",
        resolucionNarrativa: "Al escribir <b>04</b>, los pasos de integración numérica se alinean. El sistema de Christine reconoce la precisión en el cálculo, la clave para mantener la Simulación viva."
    } 
];

// --- VARIABLES DE ESTADO ---
let nivelActual = 0; // Índice (0 a 6)

// --- FUNCIONES DE ESTADO Y PERSISTENCIA ---

function guardarEstado() {
    localStorage.setItem('nivelActual', nivelActual);
    localStorage.setItem('enigmasGuardados', JSON.stringify(enigmas.map(e => e.respuestaGuardada)));
}

function cargarEstado() {
    const nivelGuardado = localStorage.getItem('nivelActual');
    const respuestasGuardadas = localStorage.getItem('enigmasGuardados');

    if (nivelGuardado !== null) {
        nivelActual = parseInt(nivelGuardado, 10);
    }
    
    if (respuestasGuardadas) {
        const respuestas = JSON.parse(respuestasGuardadas);
        enigmas.forEach((e, index) => {
            e.respuestaGuardada = respuestas[index] || "";
        });
    }
}

// --- FUNCIONES DE INTERFAZ ---

document.addEventListener('DOMContentLoaded', () => {
    cargarEstado();
    // Aseguramos que el estado inicial sea el primer nivel si no hay nada guardado
    if (nivelActual === 0 && enigmas[0].respuestaGuardada === "") {
        nivelActual = 0;
    }
    cargarNivel();
});

window.cargarNivel = function() {
    document.getElementById('juego-contenedor').style.display = 'block';
    
    // Si el nivel actual es igual al número total de enigmas (7), vamos a la pantalla final.
    if (nivelActual >= enigmas.length) {
        mostrarFinal();
        return;
    }

    const enigmaData = enigmas[nivelActual];
    
    // Ocultar la narrativa de resolución al cargar nuevo nivel
    document.getElementById('mensaje-area').innerHTML = '';
    document.getElementById('mensaje-area').className = '';

    // Actualizar progreso
    document.getElementById('progreso-area').textContent = `Constante [${nivelActual + 1} de ${enigmas.length}]`;

    // Actualizar HTML con el enigma actual
    document.getElementById('juego-contenedor').querySelector('h1').textContent = `PROTOCOLO: ${enigmaData.titulo}`;
    document.getElementById('enigma-texto').innerHTML = enigmaData.enigma;
    
    // CORRECCIÓN: Usamos .innerHTML para que las etiquetas HTML se rendericen.
    document.querySelector('.pista').innerHTML = `(Pista: ${enigmaData.pista})`;
    
    // Limpiar campo de respuesta (crucial para no ver la clave)
    document.getElementById('respuesta').value = '';
    document.getElementById('respuesta').focus();

    // Si el nivel está resuelto, cargamos la narrativa de resolución para revisión
    if (enigmaData.respuestaGuardada !== "") {
        document.getElementById('mensaje-area').innerHTML = `
            <div class="mensaje-constante-resuelto">
                <p><b>CLAVE ENCONTRADA: ${enigmaData.respuestaGuardada}</b></p>
                <hr style="border-top: 1px dashed var(--color-primary-neon); margin: 15px 0;">
                <p style="font-size: 0.9em;">${enigmaData.resolucionNarrativa}</p>
            </div>
        `;
        document.getElementById('mensaje-area').className = 'correcto';
    }

    actualizarControles();
}

function actualizarControles() {
    const botonAnt = document.getElementById('boton-anterior');
    const botonSig = document.getElementById('boton-siguiente');
    const botonVerificar = document.querySelector('#interaccion-area button');
    const resuelta = enigmas[nivelActual].respuestaGuardada !== "";
    const respuestaInput = document.getElementById('respuesta');

    // Botón Anterior
    botonAnt.disabled = (nivelActual === 0);

    // Botón Siguiente
    botonSig.disabled = !resuelta;
    
    // Botón Verificar/Resuelto y Campo de Respuesta
    botonVerificar.textContent = resuelta ? 'Resuelto' : 'Verificar';
    botonVerificar.disabled = resuelta;
    respuestaInput.disabled = resuelta;

    // Si estamos en el último enigma (índice 6, longitud 7) y está resuelto
    if (nivelActual === enigmas.length - 1 && resuelta) {
        botonSig.textContent = 'Secuencia Final →';
    } else if (nivelActual < enigmas.length - 1 && resuelta) {
        botonSig.textContent = 'Siguiente →';
    } else {
        botonSig.textContent = 'Siguiente →'; // Estado por defecto
    }
}

window.cambiarNivel = function(direccion) {
    if (nivelActual + direccion >= 0 && nivelActual + direccion < enigmas.length) {
        nivelActual += direccion;
        cargarNivel();
        guardarEstado(); // Guardar el nuevo nivel
    } else if (nivelActual + direccion === enigmas.length) {
        mostrarFinal(); // Ir a la pantalla final
    }
}

window.verificarRespuesta = function() {
    const respuestaInput = document.getElementById('respuesta');
    // Normalizamos la respuesta del usuario para ignorar espacios, mayúsculas, etc.
    const respuestaUsuario = respuestaInput.value.trim().toUpperCase();
    const enigmaData = enigmas[nivelActual];
    const mensajeArea = document.getElementById('mensaje-area');

    if (respuestaUsuario === enigmaData.respuestaCorrecta.toUpperCase()) {
        
        // Guardar la respuesta y el estado
        enigmaData.respuestaGuardada = enigmaData.respuestaCorrecta; // Guardamos la versión formateada (ej. "04")
        guardarEstado();
        
        // Limpiamos el campo de respuesta (punto clave)
        respuestaInput.value = '';

        // INYECCIÓN NARRATIVA
        mensajeArea.innerHTML = `
            <div class="mensaje-constante-resuelto">
                <p>¡CLAVE CORRECTA! CONSTANTE ALINEADA.</p>
                <hr style="border-top: 1px dashed var(--color-primary-neon); margin: 15px 0;">
                <p style="font-size: 0.9em;">${enigmaData.resolucionNarrativa}</p>
            </div>
        `;
        mensajeArea.className = 'correcto';

        // Actualizamos los controles para habilitar el botón "Siguiente"
        actualizarControles();
        

    } else {
        mensajeArea.textContent = 'Clave incorrecta. ¡Error en la matriz!';
        mensajeArea.className = 'incorrecto';
    }
}

window.mostrarFinal = function() {
    // 1. Ocultar todos los elementos de juego
    document.getElementById('navegacion-area').style.display = 'none';
    document.getElementById('progreso-area').style.display = 'none';
    document.getElementById('interaccion-area').style.display = 'none';
    
    const contenedor = document.getElementById('juego-contenedor');
    
    // 2. Recolectar las 7 constantes (como array y como string final)
    const componentes = enigmas.map(e => e.respuestaGuardada);
    const claveFinal = componentes.join('');
    
    contenedor.querySelector('h1').textContent = 'PROTOCOLO FANTASMA COMPLETADO';
    
    // 3. Generar el contenido final con la narrativa
    let contenidoFinal = '<h2>[SECUENCIA DE REINICIO MAESTRO]</h2>';
    contenidoFinal += '<p>Has descifrado las <b>siete constantes</b> necesarias para alinear la lógica de Raoul con la evolución de Erik. El Núcleo ha aceptado tu comando.</p>';
    
    contenidoFinal += '<p class="resaltado">La <b>Clave de Reinicio de 16 dígitos</b> ha sido autocompletada:</p>';
    
    // 4. Mostrar la clave con la animación de los 7 componentes secuenciales
    let htmlComponentes = '<div class="clave-final-display">';
    
    // Itera sobre los componentes (25, 12, 30, etc.) y aplica un retraso a cada uno.
    componentes.forEach((componente, index) => {
        // Retraso de 0.6s entre la aparición de cada constante. Usamos margin-right para separarlos.
        htmlComponentes += `<span style="animation-delay:${index * 0.6}s; margin-right: 15px;">${componente}</span>`;
    });
    
    htmlComponentes += '</div>';

    contenidoFinal += htmlComponentes;
    
    contenidoFinal += '<p style="margin-top: 30px;"><b>¡Falk, has logrado lo imposible!</b> El equilibrio del sistema ha sido restaurado. Introduce la Secuencia Maestra generada en el Puerto de Salida para regresar a las coordenadas del mundo real.</p>';
    
    // 5. Botón de Enlace
    contenidoFinal += `<a href="https://sites.google.com/view/engranaje-cero" id="enlace-final" class="boton-caratula" target="_blank" style="margin-top: 30px; display: block; text-decoration: none;">ACCEDER AL PUERTO DE SALIDA (${claveFinal.length} DÍGITOS)</a>`;

    document.getElementById('enigma-area').innerHTML = contenidoFinal;
    document.getElementById('mensaje-area').innerHTML = ''; // Limpiar mensajes de error
}