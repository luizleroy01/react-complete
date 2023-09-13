
import React from 'react'
import './App.css';
// 1 - config react router
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About/About'
import Product from './pages/Product'

//components
import Navbar from './components/NavBar';

const App = () =>{
  return(
    <div className='App'>
      <h1>React Router</h1>
      {/*contexto que permite o navegador identificar as rotas*/}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products/:id" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
