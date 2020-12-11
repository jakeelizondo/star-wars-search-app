import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ResultList from './ResultList/ResultList';
import AppContext from './AppContext';
import ResultError from './ErrorBoundaries/ResultError';
import './App.css';

class App extends React.Component {
  state = { results: [], loading: false, noResults: false };

  getSearchResults = (searchTerm, searchCategory) => {
    this.setState({ loading: true });
    console.log(searchTerm);
    const baseUrl = `https://swapi-thinkful.herokuapp.com/api/${searchCategory}/?search=${searchTerm}`;
    console.log(baseUrl);

    fetch(baseUrl)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((event) => Promise.reject(event));
        } else {
          return response.json();
        }
      })
      .then((responseJson) => {
        console.log(responseJson.count);
        if (responseJson.count < 1) {
          this.setState({ noResults: true, loading: false });
        } else {
          this.setState({
            results: responseJson.results,
            loading: false,
            noResults: false,
          });
        }
      })
      .catch(() => alert('Something went wrong! please refresh and try again'));
  };

  render() {
    return (
      <main className="App">
        <header>
          <h1>Search the Star Wars API!</h1>
        </header>
        <section className="main-window">
          <AppContext.Provider
            value={{
              results: this.state.results,
              getSearchResults: this.getSearchResults,
              noResults: this.state.noResults,
            }}
          >
            <SearchBar />
            <ResultError>
              <ResultList />
              {this.state.results.length < 1 &&
                !this.state.loading &&
                !this.state.noResults && <p>Search something</p>}
              {this.state.loading && <p>Finding your results...</p>}
            </ResultError>
          </AppContext.Provider>
        </section>
      </main>
    );
  }
}

export default App;
