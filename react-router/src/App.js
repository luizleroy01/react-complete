
import React from 'react'
import './App.css';
// 1 - config react router
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

//components
import Navbar from './components/NavBar';

const App = () =>{
  return(
    <div className='App'>
      <h1>React Router</h1>
      {/*contexto que permite o navegador identificar as rotas*/}
      <BrowserRouter>
        <Navbar/>
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products/:id" element={<Product/>}/>
          {/*nested route:buscar algo dentro de uma rota específica*/}
          <Route path="/products/:id/info" element={<Info/>}/>
          {/*rota de busca*/}
          <Route path="/search/:name" element={<Search/>}/>
          {/* redirecionamento de páginas */}
          <Route path="/company" element={<Navigate to="/about"/>}/>
          {/* No match route - Página 404 */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
