export default function Tailors() {

    const url = 'https://api.yelp.com/v3/businesses/search?latitude=51.5552&longitude=-0.14544&categories=sewingalterations&sort_by=distance';
    const header = {
      headers: {
        'Authorization': 'Bearer WV7hH1ykcn-jX5FFyoy3y5NKhZj6Y171UYimFZVmJJd0FsUsha1sTs9KeCugAZS8sEFBBSb_Ur1pakHS85RmFygzgtLJNyp93lMiceeCmjX6ZAXS_s5GiqgLLHO9YnYx',
        'Content-Type': 'application/json'
      }
    }
    function fetchAPI() {
        const result = fetch(url, header);
        if (!result.ok) {
  console.error(result.error)
          return;
        }
console.log(result)
      }

      fetchAPI();
    return (<p>test</p>);
}