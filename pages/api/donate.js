export default async function handlerTailors(req, res) {
  // Grab the user input
  // const postcode = req.query.input;
  let postcode = "n42rb";

  const url = `https://api.yelp.com/v3/businesses/search?sort_by=distance&location=${postcode
    .replace(/ /g, "")
    .toLowerCase()}&term=clothes+donation`;

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
