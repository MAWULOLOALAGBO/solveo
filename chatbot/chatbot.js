// -----------------------------------------
// CHATBOT.JS — Chatbot simple, stable, rapide
// -----------------------------------------

let responses = {};

// Charger les réponses depuis responses.json
fetch("/chatbot/responses.json")
    .then(res => res.json())
    .then(data => responses = data)
    .catch(() => {
        console.error("Erreur chargement responses.json");
        responses = { "default": "Je peux t’aider à trouver un outil." };
    });

// Fonction appelée depuis main.js
function chatbotRespond(text) {
    const msgBox = document.getElementById("chatbotMessages");
    if (!msgBox) return;

    const input = text.toLowerCase().trim();
    let reply = responses[input];

    // Si aucune réponse → réponse par défaut
    if (!reply) reply = responses["default"];

    // Affichage réponse bot
    msgBox.innerHTML += `<div class="msg bot">${reply}</div>`;
    msgBox.scrollTop = msgBox.scrollHeight;
}
