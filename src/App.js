import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ProjectList from './components/ProjectList';
import './App.css';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <ProjectList></ProjectList>
      </main>
    </div>
  );
}

export default App;