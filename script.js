document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        { question: "Me gusta ser el centro de atención.", dimension: "Extroversión" },
        { question: "Suelo hablar mucho en reuniones.", dimension: "Extroversión" },
        { question: "Me cuesta ponerme en el lugar de los demás.", dimension: "Amabilidad - invertida" },
        { question: "Siempre cumplo con mis tareas a tiempo.", dimension: "Responsabilidad" },
        { question: "Me siento nervioso(a) fácilmente.", dimension: "Neuroticismo" },
        { question: "Me gusta explorar nuevas ideas y conceptos.", dimension: "Apertura a la experiencia" },
        { question: "Disfruto ayudar a los demás.", dimension: "Amabilidad" },
        { question: "Dejo mis cosas desordenadas con frecuencia.", dimension: "Responsabilidad - invertida" },
        { question: "Me mantengo tranquilo(a) en situaciones estresantes.", dimension: "Neuroticismo - invertida" },
        { question: "Me interesa el arte y la creatividad.", dimension: "Apertura a la experiencia" },
        { question: "Prefiero estar solo(a) en lugar de con mucha gente.", dimension: "Extroversión - invertida" },
        { question: "A veces procrastino y dejo las cosas sin hacer.", dimension: "Responsabilidad - invertida" },
        { question: "Rara vez me altero por problemas pequeños.", dimension: "Neuroticismo - invertida" },
        { question: "A menudo critico a los demás sin motivo.", dimension: "Amabilidad - invertida" },
        { question: "Aprecio las ideas originales y poco convencionales.", dimension: "Apertura a la experiencia" },
        { question: "Soy considerado(a) con los sentimientos de los demás.", dimension: "Amabilidad" },
        { question: "A veces me distraigo fácilmente.", dimension: "Responsabilidad - invertida" },
        { question: "Siento que mis emociones me abruman.", dimension: "Neuroticismo" },
        { question: "No me considero una persona creativa.", dimension: "Apertura a la experiencia - invertida" },
        { question: "Disfruto estar rodeado(a) de gente.", dimension: "Extroversión" }
    ];

    const feedback = {
        "Extroversión": {
            "Alto": "Su puntuación alta en extroversión significa que usted es extrovertido y tiende a ser sociable. Disfruta de la interacción con los demás y puede ser una influencia positiva en el equipo, fomentando un ambiente de trabajo colaborativo y dinámico.",
            "Medio": "Su puntuación media en extroversión indica que tiene un equilibrio en su tendencia a socializar. Disfruta de las interacciones sociales, pero también valora su tiempo a solas. Esta flexibilidad le permite adaptarse bien a diversas situaciones en el entorno laboral.",
            "Bajo": "Su puntuación baja en extroversión indica que tiende a ser más reservado y prefiere trabajar en entornos tranquilos. Aunque puede ser menos sociable, esto le permite enfocarse en tareas que requieren concentración. Sería beneficioso fomentar interacciones sociales para desarrollar habilidades comunicativas."
        },
        "Amabilidad": {
            "Alto": "Su alta puntuación en amabilidad indica que es una persona comprensiva y empática. Esto le permite establecer relaciones sólidas con sus compañeros y contribuir a un ambiente de trabajo armonioso, lo cual es fundamental en nuestra práctica.",
            "Medio": "Con una puntuación media en amabilidad, muestra que es comprensivo y empático, pero también puede ser crítico cuando es necesario. Su capacidad para encontrar un equilibrio entre la cooperación y la objetividad le convierte en un colaborador valioso en la resolución de conflictos.",
            "Bajo": "Su puntuación baja en amabilidad sugiere que puede ser más crítico y directo en su comunicación. Si bien esto puede ser útil en la toma de decisiones objetivas, es importante ser consciente de cómo sus palabras pueden afectar a los demás. Desarrollar empatía puede mejorar sus relaciones laborales."
        },
        "Responsabilidad": {
            "Alto": "Con una alta puntuación en responsabilidad, se destaca por ser organizado y confiable. Su dedicación a cumplir con sus tareas y su atención al detalle son activos valiosos para el éxito de nuestros proyectos y el bienestar del equipo.",
            "Medio": "Su puntuación media en responsabilidad sugiere que es competente y puede cumplir con sus tareas, aunque no siempre con la máxima organización. Esto le permite adaptarse a un entorno dinámico, siendo efectivo en su trabajo sin ser excesivamente rígido.",
            "Bajo": "Su puntuación baja en responsabilidad indica que podría ser propenso a la desorganización y a la procrastinación. Esto puede dificultar el cumplimiento de plazos y tareas. Sería beneficioso implementar estrategias de gestión del tiempo y organización para mejorar su desempeño."
        },
        "Neuroticismo": {
            "Alto": "Su puntuación alta en neuroticismo sugiere que puede experimentar emociones negativas con frecuencia y sentirse abrumado por el estrés. Es importante buscar apoyo y desarrollar técnicas de manejo del estrés para mantener un bienestar emocional en el trabajo.",
            "Medio": "Su puntuación media en neuroticismo indica que tiene un equilibrio emocional. A veces puede experimentar estrés, pero generalmente es capaz de manejar sus emociones de manera efectiva. Este equilibrio le ayuda a mantener un enfoque positivo en su trabajo.",
            "Bajo": "Su puntuación baja indica que tiende a ser emocionalmente estable y maneja bien el estrés. Esta capacidad para mantener la calma en situaciones desafiantes le permite ser un referente de estabilidad dentro del equipo."
        },
        "Apertura a la experiencia": {
            "Alto": "Su alta puntuación en apertura a la experiencia refleja su curiosidad y creatividad. Esto le permite abordar los desafíos de manera innovadora y estar dispuesto a explorar nuevas ideas y métodos en su trabajo.",
            "Medio": "Su puntuación media en apertura a la experiencia refleja una receptividad a nuevas ideas, aunque también aprecia la estructura y la tradición. Esta dualidad le permite navegar tanto en entornos creativos como en aquellos más establecidos, contribuyendo a un enfoque equilibrado en su trabajo.",
            "Bajo": "Su puntuación baja en apertura a la experiencia indica que puede ser resistente al cambio y preferir rutinas establecidas. Si bien esto puede ofrecer estabilidad, es recomendable trabajar en la receptividad hacia nuevas ideas y enfoques para adaptarse mejor a un entorno en constante evolución."
        }
    };

    const questionsContainer = document.getElementById("questionsContainer");
    questions.forEach((q, index) => {
        const questionHtml = `
            <div>
                <label>${q.question}</label>
                <select id="q${index}">
                    <option value="1">Totalmente en desacuerdo</option>
                    <option value="2">En desacuerdo</option>
                    <option value="3">Neutral</option>
                    <option value="4">De acuerdo</option>
                    <option value="5">Totalmente de acuerdo</option>
                </select>
            </div>
        `;
        questionsContainer.insertAdjacentHTML('beforeend', questionHtml);
    });

    document.getElementById("registrationForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        alert(`Gracias por registrarte, ${name}! Ahora puedes completar el test.`);
        
        document.getElementById("registrationForm").reset();
        document.getElementById("registrationForm").classList.add("hidden");
        document.getElementById("registrationTitle").classList.add("hidden"); // Oculta el título
        document.getElementById("testContainer").classList.remove("hidden");
    });

    document.getElementById("testForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const scores = {};
        questions.forEach((q, index) => {
            const value = parseInt(document.getElementById(`q${index}`).value);
            const dimension = q.dimension.replace(" - invertida", "");
            if (!scores[dimension]) scores[dimension] = 0;
            scores[dimension] += (q.dimension.includes("invertida")) ? (6 - value) : value;
        });

        let resultsHtml = "<h3>Mi estimado colaborador de PsicoInnovate, usted ha obtenido los siguientes resultados</h3>";
        for (const [dimension, score] of Object.entries(scores)) {
            let level;
            if (score >= 15) level = "Alto";
            else if (score >= 9) level = "Medio";
            else level = "Bajo";

            resultsHtml += `<p>${dimension}: ${level} (Puntuación: ${score})</p>`;
            resultsHtml += `<p>${feedback[dimension][level]}</p>`;
        }

        document.getElementById("results").innerHTML = resultsHtml;
        document.getElementById("results").classList.remove("hidden");
        
        document.getElementById("testContainer").classList.add("hidden");
    });
});
