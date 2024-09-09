console.log("exo-7");

console.log(jsonDatas);

// PARTIE 1.
jsonDatas.forEach((article) => {
    console.log(`Article : ${article.name}, Type : ${article.type}, Prix : ${article.price}`);
});

//PARTIE 2.

// Objet de traduction des types
const typeTranslations = {
    videoGame: "Jeux Vidéos",
    car: "Voiture",
    house: "Maison",
    game: "Jeu",
    show: "Spectacle"
};

//affichage
jsonDatas.forEach(article => {
    article.translatedType = typeTranslations[article.type]
    console.log(article.name + " - " + article.translatedType);
});



// PARTIE 3. Ajouter de la clé "translatedType"
jsonDatas.forEach((article) => {
    article.translatedType = typeTranslations[article.type] || article.type;
    console.log(`Article : ${article.name}, Type traduit : ${article.translatedType}, Prix : ${article.price}`);
});

// PARTIE 4.

// 1 : Sélectionne le div où on va afficher les articles
const articlesList = document.getElementById("articles-list");

// 2 : Parcourir chaque article dans jsonDatas
// et je crée une structure HTML pour chaque article
jsonDatas.forEach(article => {
    let articleHTML = `
    <div class="article">
      <h2>${article.name}</h2>
      <p><strong>Type :</strong> ${article.translatedType || article.type}</p>
      <p><strong>Description :</strong> ${article.description}</p>
      <p><strong>Prix :</strong> ${article.price} €</p>
      <p><strong>Quantité :</strong> ${article.quantity}</p>
    </div>
    <hr>
  `;

    // 4 : Ajout du HTML à l'intérieur du div articles-list
    articlesList.innerHTML += articleHTML;
});

// PARTIE 5.

// Sélectionne le bouton et le champ texte dans l'HTML
const filterButton = document.getElementById('filterButton');
const typeInput = document.getElementById('typeInput');

// Ajouter un écouteur d'événement sur le bouton pour détecter les clics
filterButton.addEventListener('click', () => {
    // Récupérer la valeur du champ texte (type d'article saisi)
    const enteredType = typeInput.value.toLowerCase();  // On convertit en minuscule pour être sûr

    // Sélectionner l'élément où les articles seront affichés
    const articlesList = document.getElementById('articles-list');
    articlesList.innerHTML = '';  // Vider la liste avant d'afficher les résultats

    // Parcourir les articles et filtrer ceux qui correspondent au type saisi
    jsonDatas.forEach(article => {
        // On récupère à la fois le type original et le type traduit
        const originalType = article.type.toLowerCase();
        const translatedType = typeTranslations[article.type]?.toLowerCase() || originalType;

        // Vérifier si l'utilisateur a entré soit le type traduit, soit le type original
        if (enteredType === originalType || enteredType === translatedType) {
            // Créer un bloc HTML pour chaque article filtré
            const articleHTML = `
        <div class="article">
          <h2>${article.name}</h2>
          <p><strong>Type :</strong> ${article.translatedType || article.type}</p>
          <p><strong>Description :</strong> ${article.description}</p>
          <p><strong>Prix :</strong> ${article.price} €</p>
          <p><strong>Quantité :</strong> ${article.quantity}</p>
        </div>
        <hr>
      `;

            // Ajouter l'article filtré à la liste
            articlesList.innerHTML += articleHTML;
        }
    });
});

// PARTIE 6.

//récupérer la checkbox
const showOutOfStockCheckbox = document.getElementById('showOutOfStockCheckbox');

//Mettre à jour l'affichage des articles quand la checkbox change

showOutOfStockCheckbox.addEventListener('change', () => {
    displayArticles();
});

// Fonction qui affiche les articles
const displayArticles = () => {
    const articlesList = document.getElementById('articles-list');
    articleList.innerHTML = ''; //vide la liste pour la réinitialiser

    jsonDatas.forEach(article => {
        //si checkbox pas cochée et article en rupture, on le saute
        if (!showOutOfStockCheckbox.checked && article.quantity === 0); {
        return;
    }

    const articleHTML = `
        <li>
            <h3>${article.name} (${article.translatedType || article.type})</h3>
            <p>${article.description}</p>
            <p>Prix: ${article.price} €</p>
            <p>Quantité: ${article.quantity}</p>
        </li>
            `;
        articlesList.innerHTML += articleHTML;
    });
};

// Appeler la fonction au chargement initial pour afficher les articles
displayArticles();