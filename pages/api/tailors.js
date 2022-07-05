export default async function handlerTailors(req, res) {
  // Grab the user input
  const postcode = req.query.input;

  const url = `https://api.yelp.com/v3/businesses/search?location=${postcode
    .replace(/ /g, "")
    .toLowerCase()}&categories=sewingalterations&sort_by=distance`;

  // Set the headers to be able to access the Yelp API
  const options = {
    headers: {
      Authorization: process.env.API_KEY,
    },
  };

  // Try fetch data, if fails send error
  try {
    const result = await fetch(url, options);
    const data = await result.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
