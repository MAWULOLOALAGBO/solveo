// -----------------------------------------
// SEARCH.JS — Recherche intelligente Solveo
// -----------------------------------------

function launchSearch() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const suggestionsBox = document.getElementById("searchSuggestions");

    // Dictionnaire des mots-clés → pages
    const routes = {
        "salaire": "/tools/salaire.html",
        "calcul salaire": "/tools/salaire.html",
        "salaire net": "/tools/salaire.html",

        "budget": "/tools/budget.html",
        "gestion budget": "/tools/budget.html",

        "convertir": "/tools/convertisseur.html",
        "conversion": "/tools/convertisseur.html",
        "convertisseur": "/tools/convertisseur.html",

        "texte": "/tools/generateur.html",
        "générateur": "/tools/generateur.html",
        "generateur": "/tools/generateur.html"
    };

    // Si le mot correspond à un outil → redirection
    if (routes[input]) {
        window.location.href = routes[input];
        return;
    }

    // Sinon → suggestions
    suggestionsBox.innerHTML = `
        Aucun résultat. Essaie :
        <br>• salaire
        <br>• budget
        <br>• convertir
        <br>• générateur texte
    `;
}
