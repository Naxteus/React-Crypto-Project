import React, { useEffect, useState } from "react";
import "../styles/Trends.css";
const Trends = () => {
  const [trends, setTrends] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    const getTrends = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setTrends(data);
        // console.log(data)
        // console.log(data.coins[0])
      } catch (error) {
        console.log(error);
      }
    };

    getTrends();
  }, []);

  return (
    <div>
      {trends.coins.map((trend) => (
        <div className="container">
          <div className="content">
            <div className="info-top">
              <p>{trend.item.market_cap_rank}</p>
              <img src={trend.item.small} alt="" />
              <p>{trend.item.id}</p>
            </div>
            <div className="info">
              <p>{trend.item.price_btc}</p>
            </div>
          </div>
        </div>
      ))}

      {/* {!trends ? <h1>Failed</h1> : trends.map((trend)=>(
  <p>{trends.coins[0].item.id}</p>
))} */}
    </div>
  );
};

export default Trends;
