import React from "react";
import { Link } from "react-router-dom";

export default function Region(props) {
  return (
    <div className="container">
      <h2>Regiões</h2>
      <div className="region">
        <div className="region__div">
          <p className="cont__names">
            <Link to="/pages/africa">Africa</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="cont__names">
            <Link to="/pages/america">America</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="cont__names">
            <Link to="/pages/asia">Asia</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="cont__names">
            <Link to="/pages/europe">Europe</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="cont__names">
            <Link to="/pages/Oceania">Oceania</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="cont__names">
            <Link to="/pages/Polar">Polar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
