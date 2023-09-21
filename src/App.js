import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar';
import ChatAlternativo from './componentes/ChatAlternativo';
import './App.css'




function App() {
  return (

    <div>
      <NavBar/>
      <h1 className='center'>ChatBot</h1>
      <br></br>
      <ChatAlternativo/>
      

    </div>

  );
}

export default App;
