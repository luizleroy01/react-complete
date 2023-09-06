import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'

const App = () =>{

  const url = "http://localhost:3000/products/"
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }
    fetchData()
    // o segundo arqgumento é um array vazio pois corresponde a um array que será
    // atualizado
  },[])

  console.log(products)
  return(
    <div className="App">
      <h1>Produtos</h1>
      <ul>
        {products.map((prod)=>(
          <li key={prod.id}>nome: {prod.name}, valor: {prod.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
