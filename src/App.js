import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards'
import './App.css';
import SwipeButton from './SwipeButton';
function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButton />
    </div>
  );
}

export default App;
