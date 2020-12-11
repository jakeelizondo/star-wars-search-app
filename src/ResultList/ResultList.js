import React from 'react';
import AppContext from '../AppContext';

class ResultList extends React.Component {
  static contextType = AppContext;
  getResults = () => {
    if (this.context.noResults) {
      return (
        <h3>
          Looks like there were no results for that term. Please try again!
        </h3>
      );
    }
    let results = this.context.results.map((result) => {
      return (
        <li key={result.name}>
          <h4>{result.name}</h4>
        </li>
      );
    });

    return results;
  };

  render() {
    return (
      <div>
        {this.context.results.length > 0 && (
          <h2 className="results-header">Results</h2>
        )}
        <ul>{this.getResults()}</ul>
      </div>
    );
  }
}

export default ResultList;
