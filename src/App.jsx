import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FormTest from './components/FormTest';
import FormWIthFieldArray from './components/FormWIthFieldArray';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FormWIthFieldArray />
      </div>
    </Provider>
  );
}

export default App;
