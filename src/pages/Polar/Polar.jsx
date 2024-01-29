import React, { Component } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../../components/CountryCard/CountryCard";

export default class Polar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polardados: [],
    };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/region/polar")
      .then((response) => response.json())
      .then((response) => this.setState({ polardados: response }))
      .catch((erro) => {
        alert(erro);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Polar</h2>
        <div className="region__div">
          <p className="link__p">
            <Link className="link__a" to="/">
              Voltar para a Página Inicial
            </Link>
          </p>
        </div>
        <div className="countryList">
          {this.state.polardados.map((polarc) => (
            <div key={polarc.name} className="countryCard">
              <CountryCard
                name={polarc.name}
                key={polarc.name}
                population={polarc.population.toLocaleString("pt-BR")}
                region={polarc.region}
                capital={polarc.capital}
                flag={polarc.flags.png}
                currencies={
                  polarc.currencies[0]["symbol"] +
                  "(" +
                  polarc.currencies[0]["name"] +
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
