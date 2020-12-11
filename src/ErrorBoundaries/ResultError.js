import React from 'react';

export default class ResultError extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>
            Oops, it looks like something went wrong...please refresh the page
            and try again
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
