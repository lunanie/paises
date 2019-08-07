import React from "react";

export default function CountryCard(props) {
  return (
    <div className="countrycard">
      <div className="countrycard__div--flag">
        <img className="countrycard__flag" src={props.flag} />
      </div>
      <div className="countrycard__txt">
        <div>
          <p className="countrycard__name">{props.name}</p>
        </div>
        <div className="countrycard__div--det">
          <div className="countrycard__div--cat">
            <p className="countrycard__cat">Population:</p>
            <p>{props.population}</p>
          </div>
          <div className="countrycard__div--cat">
            <p className="countrycard__cat">Region:</p>
            <p>{props.region}</p>
          </div>
          <div className="countrycard__div--cat">
            <p className="countrycard__cat">Capital:</p>
            <p>{props.capital}</p>
          </div>
          <div className="countrycard__div--cat">
            <p className="countrycard__cat">Currencies:</p>
            <p>{props.currencies}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
