// Utilisez la syntaxe async/await pour traiter de manière asynchrone la requête fetch
const response = await fetch(
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=keywords_fr%3A%22concert%22&refine=location_countrycode%3A%22FR%22&refine=lastdate_begin%3A%222024%22"
  );

  /*
  // Vérifiez si la requête a réussi (status 200-299)
  if (!response.ok) {
    throw new Error(`Erreur HTTP! Statut: ${response.status}`);
  }*/

  // Utilisez la fonction json() pour extraire les données JSON
  const data = await response.json();

  const totalCount = data.total_count;
  const totalCountElement = document.createElement("h2");
  totalCountElement.innerText = totalCount;
  const sectionFiches = document.querySelector(".fiches")
  sectionFiches.appendChild(totalCountElement);
  console.log(totalCountElement)

  for (let i = 0; i < data.results.length; i++) {
    const ficheEvenement = document.createElement("article")
    sectionFiches.appendChild(ficheEvenement);

    const titreEvenement = document.createElement("h2")
    titreEvenement.innerText = data.results[i].title_fr;
    ficheEvenement.appendChild(titreEvenement);

    const imageEvenement = document.createElement("img")
    imageEvenement.src = data.results[i].originalimage;
    ficheEvenement.appendChild(imageEvenement);
    console.log("image", data.results[i].originalimage);


    const descriptionEvenement = document.createElement("p")
    descriptionEvenement.innerText = data.results[i].description_fr;
    ficheEvenement.appendChild(descriptionEvenement);

    const dateHeure = document.createElement("p")
    dateHeure.innerText = data.results[i].daterange_fr;
    ficheEvenement.appendChild(dateHeure);

    const keyWords = document.createElement("p")
    keyWords.innerText = data.results[i].keywords_fr;
    ficheEvenement.appendChild(keyWords);

    const locationAdress = document.createElement("p")
    locationAdress.innerText = data.results[i].location_address;
    ficheEvenement.appendChild(locationAdress);

    const locationRegion = document.createElement("p")
    locationRegion.innerText = data.results[i].location_region;
    ficheEvenement.appendChild(locationRegion);
  }