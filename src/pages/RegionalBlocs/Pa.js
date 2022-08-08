import React, { Component } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../../components/CountryCard/CountryCard";

export default class Pa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regionalblocdata: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/regionalbloc/pa")
      .then(response => response.json())
      .then(response => this.setState({ regionalblocdata: response }))
      .catch(erro => {
        alert(erro);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>PA (Pacific Alliance)</h2>
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
                flag={regionalbloccard.flags.png}
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
