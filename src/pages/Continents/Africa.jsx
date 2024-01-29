import { Component } from 'react';
import { Link } from 'react-router-dom';
import CountryCard from '../../components/CountryCard/CountryCard';

export default class Africa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      africadados: []
    };
  }

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/region/africa')
      .then((response) => response.json())
      .then((response) => this.setState({ africadados: response }))
      .catch((erro) => {
        console.error(erro);
      });
  }

  render() {
    return (
      <div className='container'>
        <h2>Africa</h2>
        <div className='region__div'>
          <p className='link__p'>
            <Link className='link__a' to='/'>
              Voltar para a Página Inicial
            </Link>
          </p>
        </div>
        <div className='countryList'>
          {this.state.africadados.map((africac) => (
            <div key={africac.name} className='countryCard'>
              <CountryCard
                name={africac.name}
                key={africac.name}
                population={africac.population.toLocaleString('pt-BR')}
                region={africac.region}
                capital={africac.capital}
                flag={africac.flags?.png}
                currencies={`${africac.currencies[0].symbol}(${africac.currencies[0].name})`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
