// -----------------------------------------
// TOOLS.JS — Logique des outils Solveo
// -----------------------------------------

// --- CALCUL SALAIRE NET ---
function calculSalaire() {
    const brutInput = document.getElementById("brut");
    const statutInput = document.getElementById("statut");
    const resultBox = document.getElementById("result");

    if (!brutInput || !statutInput || !resultBox) return;

    const brut = parseFloat(brutInput.value);
    const statut = statutInput.value;

    // Sécurité : si brut vide ou invalide
    if (isNaN(brut) || brut <= 0) {
        resultBox.innerHTML = `<p class="error">Entre un salaire brut valide.</p>`;
        return;
    }

    // Taux de cotisations
    let taux = 0.23; // salarié standard
    if (statut === "cadre") taux = 0.25;

    // Calcul net
    const net = brut * (1 - taux);

    // Affichage propre
    resultBox.innerHTML = `
        <h3>Résultat</h3>
        <p>Salaire brut : <strong>${brut.toFixed(2)} €</strong></p>
        <p>Salaire net estimé : <strong>${net.toFixed(2)} €</strong></p>
        <p class="info">Estimation basée sur un taux moyen de cotisations (${taux * 100}%).</p>
    `;
}
