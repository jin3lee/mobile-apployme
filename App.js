import React from 'react';

// navigation
import PageContainer from './navigation/PageContainer.js';

// state management
import { Provider } from 'react-redux';
import store from './redux/store.js';

export default function App() {
  return (
    <Provider store={ store }>
      <PageContainer />
    </Provider>
  );
}