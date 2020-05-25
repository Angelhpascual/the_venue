import React from 'react';
import './resources/styles.css';
import Featured from './components/Featured';

import  Header  from './components/Header';

function App() {
  return (
    <div className="App" style ={{height:"1500px", background: "red"}}>
      <Header />
      <Featured/>
    </div>
  );
}

export default App;
