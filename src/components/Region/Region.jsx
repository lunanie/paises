import React from "react";
import { Link } from "react-router-dom";

export default function Region(props) {
  return (
    <div className="container">
      <h2>Regiões</h2>
      <div className="region">
        <div className="region__div">
          <p className="cont__names">
            <Link to="africa">Africa</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="cont__names">
            <Link to="america">America</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="cont__names">
            <Link to="asia">Asia</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="cont__names">
            <Link to="europe">Europe</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="cont__names">
            <Link to="oceania">Oceania</Link>
          </p>
        </div>
        <div className="region__div">
          <p className="cont__names">
            <Link to="polar">Polar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
