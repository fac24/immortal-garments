const url =
"https://api.yelp.com/v3/businesses/search?latitude=51.5552&longitude=-0.14544&categories=sewingalterations&sort_by=distance";
const options = {
headers: {
  Authorization:
    "Bearer WV7hH1ykcn-jX5FFyoy3y5NKhZj6Y171UYimFZVmJJd0FsUsha1sTs9KeCugAZS8sEFBBSb_Ur1pakHS85RmFygzgtLJNyp93lMiceeCmjX6ZAXS_s5GiqgLLHO9YnYx",
},
};


export default async function handlerTailors(req, res) {
    
  const result =  await fetch(url, options);
  if (!result.ok) {
    console.error(result.error);
    return;
  }
  res.status(200).json(result)

  }
