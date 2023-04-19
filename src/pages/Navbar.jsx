import React, { useEffect, useState } from "react";
import News from "./News";
import { Link } from "react-router-dom";
import Trends from "./Trends";
import axios from "axios";
const Navbar = () => {

  return (
    <div>
      <ul>
    <Link to='/trends'>
      Trend
    </Link>

      </ul>
    </div>
  );
};

export default Navbar;
