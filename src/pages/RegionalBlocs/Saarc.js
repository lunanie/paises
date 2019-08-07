import React, { Component } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../../components/CountryCard/CountryCard";

export default class Saarc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regionalblocdata: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/regionalbloc/saarc")
      .then(response => response.json())
      .then(response => this.setState({ regionalblocdata: response }))
      .catch(erro => {
        alert(erro);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>SAARC (South Asian Association for Regional Cooperation)</h2>
        <div className="region__div">
          <p className="link__p">
            <a className="link__a">
              <Link to="/">Voltar para a Página Inicial</Link>
            </a>
          </p>
        </div>
        <div className="countryList">
          {this.state.regionalblocdata.map(regionalbloccard => (
            <div className="countryCard">
              <CountryCard
                name={regionalbloccard.name}
                key={regionalbloccard.name}
                population={regionalbloccard.population.toLocaleString("pt-BR")}
                region={regionalbloccard.region}
                capital={regionalbloccard.capital}
                flag={regionalbloccard.flag}
                currencies={
                  regionalbloccard.currencies[0]["symbol"] +
                  "(" +
                  regionalbloccard.currencies[0]["name"] +
                  ")"
                }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
