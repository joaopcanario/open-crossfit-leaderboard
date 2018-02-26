import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import logo from './logo.png';

class App extends Component {
  render() {
    const boostrap = {
      rel: 'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
      integrity: 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
      crossorigin: 'anonymous',
    };

    return (
      <div className="App">
        <Helmet
          defaultTitle="2018 Open Crossfit Leaderboard - Bahia"
          meta={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            { name: 'description', content: '2018 Open Crossfit Leaderboard Bahia' },
          ]}
          link={[ boostrap ]}
        />

        <div className="container">
          <div className="py-5 text-center">
            <img className="d-block mx-auto mb-4" src={logo} alt="Open Crossfit Bahia" />
            <h2>2018 Open Crossfit Leaderboard - Bahia</h2>
            <p className="lead">Acompanhe o leaderboard dos atletas baianos</p>

            <div className="row justify-content-md-center">
              <div className="col-md-auto col-lg-4">

                <div className="btn-group">
                  <button class="btn btn-primary active">MASCULINO</button>
                  <button class="btn btn-primary">FEMININO</button>
                </div>

              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table id="menLeaderboardTable" className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Box</th>
                  <th scope="col">18.1</th>
                  <th scope="col">18.2</th>
                  <th scope="col">18.3</th>
                  <th scope="col">18.4</th>
                  <th scope="col">18.5</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>

              <tbody id="menLeaderboardBody">
              </tbody>

            </table>

            <table id="womenLeaderboardTable" className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Box</th>
                  <th scope="col">18.1</th>
                  <th scope="col">18.2</th>
                  <th scope="col">18.3</th>
                  <th scope="col">18.4</th>
                  <th scope="col">18.5</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>

              <tbody id="womenLeaderboardBody">
              </tbody>

            </table>
          </div>

          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">&copy; 2018 Open Crossfit Games Leaderboard Bahia</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://github.com/cristianossd" target="_blank" rel="noopener noreferrer">
                  Cristiano Santos
                </a>
              </li>

              <li className="list-inline-item">
                <a href="https://github.com/joaopcanario" target="_blank" rel="noopener noreferrer">
                  João Paulo Canário
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
