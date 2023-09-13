import React from 'react'
import {useState,useEffect} from 'react'
import './style.css'
import {Link} from 'react-router-dom'

const Home = () => {
  const [data,setData] = useState([])
  const url = "http://localhost:3000/products"
  useEffect(()=>{
    const buscaDados = async() =>{
        const dados = await fetch(url)
        const data = await dados.json()
        setData(data)
    }
    buscaDados()
  },[url])
  return (
    <div>
        <h1>Home</h1>
        <ul className='products'>
            {data && data.map((prod)=>(
                
                <li key={prod.key}>
                    <h2>{prod.name}</h2>
                    {/* Rota dinâmica */}
                    <Link to={`/products/${prod.id}`}>Detalhes</Link>
                </li>
            ))}
        </ul>
    </div>

  )
}

export default Home