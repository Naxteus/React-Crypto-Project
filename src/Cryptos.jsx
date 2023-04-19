import { useEffect, useState } from "react";
import Coins from "./components/Coins";
import { Link } from "react-router-dom";
import Navbar from "./pages/Navbar";

function Cryptos() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  // https://api.coingecko.com/api/v3/search/trending

  useEffect(() => {
    const getCoins = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const data = await res.json();
        setCoins(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCoins();
  }, []);

  const filteredCoins = coins.filter((coin)=>{
    return coin.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  })
  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            value={search}
            onChange={handleChange}
            className="coin-input"
            placeholder="Search Coin"
          />
        </form>
      </div>
      <Navbar />
      {filteredCoins.map((coin) => (
        <Coins key={coin.id} {...coin} />
      ))}
    </div>
  );
}

export default Cryptos;
