import React, { Component } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../../components/CountryCard/CountryCard";

export default class Oceania extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oceaniadados: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/region/oceania")
      .then(response => response.json())
      .then(response => this.setState({ oceaniadados: response }))
      .catch(erro => {
        alert(erro);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Oceania</h2>
        <div className="region__div">
        <p className="link__p">
            <a className="link__a">
              <Link to="/">Voltar para a Página Inicial</Link>
            </a>
          </p>
        </div>
        <div className="countryList">
          {this.state.oceaniadados.map(oceaniac => (
            <div className="countryCard">
              <CountryCard
                name={oceaniac.name}
                key={oceaniac.name}
                population={oceaniac.population.toLocaleString("pt-BR")}
                region={oceaniac.region}
                capital={oceaniac.capital}
                flag={oceaniac.flag}
                currencies={
                  oceaniac.currencies[0]["symbol"] +
                  "(" +
                  oceaniac.currencies[0]["name"] +
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
