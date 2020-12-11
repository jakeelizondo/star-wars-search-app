import React from 'react';
import AppContext from '../AppContext';

class SearchBar extends React.Component {
  state = { searchTerm: '', searchCategory: 'none', touched: false };
  static contextType = AppContext;

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.getSearchResults(
      this.state.searchTerm,
      this.state.searchCategory
    );
  };

  validateEntry = () => {
    if (this.state.searchTerm === '' || this.state.searchCategory === 'none') {
      return true;
    }
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Search the API</h2>
        <div>
          <label htmlFor="category">Search for: </label>
          <select
            id="categories"
            onChange={(event) =>
              this.setState({ searchCategory: event.target.value })
            }
          >
            <option value="none">Select a category...</option>
            <option>films</option>
            <option>people</option>
            <option>planets</option>
            <option>species</option>
            <option>starships</option>
            <option>vehicles</option>
          </select>
          {this.state.searchCategory === 'none' && this.state.touched && (
            <p style={{ color: 'red' }}>Please select a category.</p>
          )}
        </div>
        <br />
        <div>
          <label htmlFor="search">that include the term: </label>
          <input
            type="text"
            id="search"
            onChange={(event) =>
              this.setState({ searchTerm: event.target.value, touched: true })
            }
          ></input>
          {this.state.touched && this.state.searchTerm === '' && (
            <p style={{ color: 'red' }}>This field cannot be left blank</p>
          )}
          <button type="submit" disabled={this.validateEntry()}>
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
