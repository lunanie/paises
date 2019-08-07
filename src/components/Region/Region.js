import React from "react";
import { Link } from "react-router-dom";

export default function Region(props) {
  return (
    <div className="container">
      <h2>Regiões</h2>
      <div className="region">
        <div className="region__div">
          <p className="cont__names">
            <a>
              <Link to="/pages/africa">Africa</Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="cont__names">
            <a>
              <Link to="/pages/america">America</Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="cont__names">
            <a>
              <Link to="/pages/asia">Asia</Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="cont__names">
            <a>
              <Link to="/pages/europe">Europe</Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="cont__names">
            <a>
              <Link to="/pages/Oceania">Oceania</Link>
            </a>
          </p>
        </div>
        <div className="region__div">
          <p className="cont__names">
            <a>
              <Link to="/pages/Polar">Polar</Link>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
