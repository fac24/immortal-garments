export default async function handlerTailors(req, res) {
  const postcode = req.query.input;

  const url = `https://api.yelp.com/v3/businesses/search?location=${postcode
    .replace(/ /g, "")
    .toLowerCase()}&categories=sewingalterations&sort_by=distance`;

  const options = {
    headers: {
      Authorization:
        "Bearer WV7hH1ykcn-jX5FFyoy3y5NKhZj6Y171UYimFZVmJJd0FsUsha1sTs9KeCugAZS8sEFBBSb_Ur1pakHS85RmFygzgtLJNyp93lMiceeCmjX6ZAXS_s5GiqgLLHO9YnYx",
    },
  };

  try {
    const result = await fetch(url, options);
    const data = await result.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
