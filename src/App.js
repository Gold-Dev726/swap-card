import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import PublicRoutes from './store/router';
import { store, history } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <PublicRoutes history={history} />
    </Provider>
  );
}

export default App;
