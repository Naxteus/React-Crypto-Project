import React from "react";
import "../../src/Coin.css";
import { Link } from "react-router-dom";
const Coins = ({
  id,
  image,
  symbol,
  current_price,
  name,
  market_cap,
  price_change_percentage_24h,
  total_volume,
  market_cap_rank
}) => {
  return (
    
    <Link to={`/${id}`}>
    <div className="coin-container">
      <div className="coin-row">
        <p className="cap-rank">#{market_cap_rank}</p>
        <div className="coin">
          <img src={image} alt={id} />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{current_price}</p>
          <p className="coin-volume">{total_volume.toLocaleString()}</p>
          {price_change_percentage_24h < 0 ? (
            <p className="coin-percent red">
              {price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              {price_change_percentage_24h.toFixed(2)}%
            </p>
          )}

          <p className="coin-marketcap">
            Mkt Cap: ${market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
    </Link>

  );
};

export default Coins;
