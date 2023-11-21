// Utilisez la syntaxe async/await pour traiter de manière asynchrone la requête fetch
try {
  const response = await fetch(
    "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=keywords_fr%3A%22concert%22&refine=location_countrycode%3A%22FR%22&refine=lastdate_begin%3A%222024%22"
  );

  // Vérifiez si la requête a réussi (status 200-299)
  if (!response.ok) {
    throw new Error(`Erreur HTTP! Statut: ${response.status}`);
  }

  // Utilisez la fonction json() pour extraire les données JSON
  const data = await response.json();

  // Affichez les données
  console.log("data", data);

  // Accédez à la propriété 'results' dans les données
  const results = data.results;
  console.log("results", results);
} catch (error) {
  // Gérez les erreurs ici
  console.error("Erreur de fetch:", error);
}
