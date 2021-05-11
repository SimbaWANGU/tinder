import React from 'react'
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards'
import FooterButtons from './FooterButtons';

function App() {
  return (
    <div className="app">
      <Header/>
      <TinderCards/>
      <FooterButtons/>
    </div>
  );
}

export default App;
