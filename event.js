// Récupération des pièces depuis le fichier JSON
const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json());
 
// Fonction qui génère toute la page web
function genererPieces(pieces) {
for (let i = 0; i < pieces.length; i++) {
    // Création des balises
    const article = pieces[i];
    const sectionFiches = document.querySelector(".fiches");
    // Création d'une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
  
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${
      article.prix < 35 ? "€" : "€€€"
    })`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "";
    const disponibiliteElement = document.createElement("p");
    disponibiliteElement.innerText = article.disponibilite
      ? "En stock"
      : "Rupture de stock";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "";
  
    sectionFiches.appendChild(pieceElement);
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
  
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(disponibiliteElement);
    pieceElement.appendChild(descriptionElement);
}
}
 
// Premier affichage de la page
genererPieces(pieces);
 
// Ajout du listener pour trier les pièces par ordre de prix croissant
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
   const piecesOrdonnees = Array.from(pieces)
   piecesOrdonnees.sort(function (a, b) {
       return a.prix - b.prix;
   });
  // Effacement de l'écran et regénération de la page
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesOrdonnees);
});

const boutonOrdonner = document.querySelector(".btn-ordonner");
boutonOrdonner.addEventListener("click", function () {
    const piecesOrdonnees1 = Array.from(pieces)
    piecesOrdonnees1.sort(function (a, b) {
      return b.prix - a.prix;
    });
  // Effacement de l'écran et regénération de la page
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesOrdonnees1);
  });
 
// Ajout du listener pour filtrer les pièces non abordables
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {
       return piece.disponibilite;
   });
   // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
  document.querySelector(".fiches").innerHTML = "";
  genererPieces(piecesFiltrees);
});
