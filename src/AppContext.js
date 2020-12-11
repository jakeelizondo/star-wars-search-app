import React from 'react';

const AppContext = React.createContext({
  results: [],
  getSearchResults: () => {},
  noResults: false,
});

AppContext.displayName = 'AppContext';

export default AppContext;
