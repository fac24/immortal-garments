export default async function handlerRecylePoint(req, res) {
  // Grab the user input
  const postcode = req.query.abc;

  // const url =
  try {
    const result = await fetch(
      process.env.RECYCLE_API +
        `${postcode}?limit=30&radius=25&materials%5B%5D=57`
    );
    const data = await result.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "failed to load recyle points" });
  }
}
