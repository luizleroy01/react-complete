import React from 'react'
import './App.css';
//import Home from './components/Home'
//import Ola from './components/Ola'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'

const App = () =>{
  return(
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App;