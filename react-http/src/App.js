import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
//import {useFetch} from "./hooks/useFetch"

const App = () =>{

  const url = "http://localhost:3000/products/"
  const [products,setProducts] = useState([]);
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState("")

  //custom hook
  //const { data : items } = useFetch(url);

  
  useEffect(()=>{
    async function fetchData(){
      //tratamento de erros
      setLoading(true)
      try{
        
        const res = await fetch(url)
        const data = await res.json()
        setProducts(data)
        setLoading(false)
      }catch(error){
        setError("Houve algum problema ... Tente novamente mais tarde")
      }
      
    }
    fetchData()
    // o segundo arqgumento é um array vazio pois corresponde a um array que será
    // atualizado
  },[])
  
  //adição de produtos
  const handleSubmit = async(e) =>{
    e.preventDefault()
    //quando as chaves tem os mesmos nomes das variáveis, não necessita aplicar as 
    //variáveis
    const product = {
      name,
      price
    }
    //paar enviar os dados para o servidor via post
    //heders indica o formato dos dados que será enviado
    //JSON.stringfy transforma objeto javascript em json
    const res = await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(product),
    })

    //carregamento dinâmico de dados
     const addProduct = await res.json()
     //adiciona o novo produt à lista de produtos no sucesso da requisição
     setProducts((prevProducts)=>[...prevProducts,addProduct])
    setName("")
    setPrice("")
  }

  console.log(products)
  return(
    <div className="App">
      <h1>Produtos</h1>
      <ul>
        {loading && <p>carregando dados ...</p>}
        {error && <p>{error}</p>}
        {!error && products.map((prod)=>(
          <li key={prod.id}>nome: {prod.name}, valor: {prod.price}</li>
        ))}
      </ul>
      <div className='add_product'>
        <form onSubmit={handleSubmit}>
          <label>
            nome:
            <input 
            type="text" 
            value={name} 
            name="nome" 
            onChange={(e)=>setName(e.target.value)}
            placeholder="Digite seu nome"/>
          </label>

          <label>
            preço:
            <input 
        Criar    value={price} 
            onChange={(e)=>setPrice(e.target.value)} 
            placeholder="Digite seu preço"/>
          </label>
          {!loading &&  <input type="submit" value="Criar"/>}
          {loading && <input type="submit" disabled={true} value="Aguarde"/>}
        </form>
      </div>
    </div>
  )
}

export default App;
