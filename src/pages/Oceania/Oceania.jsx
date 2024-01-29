import React, { Component } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../../components/CountryCard/CountryCard";

export default class Oceania extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oceaniadados: [],
    };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/region/oceania")
      .then((response) => response.json())
      .then((response) => this.setState({ oceaniadados: response }))
      .catch((erro) => {
        alert(erro);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Oceania</h2>
        <div className="region__div">
          <p className="link__p">
            <Link className="link__a" to="/">
              Voltar para a Página Inicial
            </Link>
          </p>
        </div>
        <div className="countryList">
          {this.state.oceaniadados.map((oceaniac) => (
            <div key={oceaniac.name} className="countryCard">
              <CountryCard
                name={oceaniac.name}
                key={oceaniac.name}
                population={oceaniac.population.toLocaleString("pt-BR")}
                region={oceaniac.region}
                capital={oceaniac.capital}
                flag={oceaniac.flags.png}
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
