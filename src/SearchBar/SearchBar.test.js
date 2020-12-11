import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import renderer from 'react-test-renderer';

describe('SearchBar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
