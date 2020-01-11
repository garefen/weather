import React from 'react';
import './App.css';

import Dashboard from './dashboard'
import Header from './header'
import Information from './information'

function App() {
  return (
    <div className="App">
      <Header />
      <section>
          <Dashboard />
          <Information />
      </section>
    </div>
  );
}

export default App;
