import { Component } from 'react';
import { Link } from 'react-router-dom';
import CountryCard from '../../components/CountryCard/CountryCard';

export default class Asia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asiadados: [],
    };
  }

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/region/asia')
      .then((response) => response.json())
      .then((response) => this.setState({ asiadados: response }))
      .catch((erro) => {
        console.error(erro);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Asia</h2>
        <div className="region__div">
          <p className="link__p">
            <Link className="link__a" to="/">
              Voltar para a Página Inicial
            </Link>
          </p>
        </div>
        <div className="countryList">
          {this.state.asiadados.map((asiad) => (
            <div key={asiad.name} className="countryCard">
              <CountryCard
                name={asiad.name}
                key={asiad.name}
                population={asiad.population.toLocaleString('pt-BR')}
                region={asiad.region}
                capital={asiad.capital}
                flag={asiad.flags.png}
                currencies={`${asiad.currencies[0].symbol}(${asiad.currencies[0].name})`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
