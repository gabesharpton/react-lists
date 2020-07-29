import React from 'react';

import Widget1 from './components/widget1.js'
import Widget2 from './components/widget2.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello there</h1>
      <h2>We are going to make some lists.</h2>
      <h3>Where shall we begin?</h3>
      <Widget1/>
      <Widget2/>

    </div>
  );
}

export default App;
