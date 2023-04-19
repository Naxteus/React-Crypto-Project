import React from "react";
import Cryptos from "./Cryptos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleCoin from "./components/SingleCoin";

import News from "./pages/News";
import Trends from "./pages/Trends";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cryptos />} />
        <Route path="/:coinId" element={<SingleCoin />} />
        <Route path="/news" element={<News />} />
        <Route path="/trends" element={<Trends />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
