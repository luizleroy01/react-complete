import React from 'react'
import {useSearchParams,Link} from 'react-router-dom'
import {useEffect,useState} from 'react'


const Search = () => {
    const [product,setProduct] = useState()
    const [searchParams] = useSearchParams();
    const name = searchParams.get("q")
  
    const url = "http://localhost:3000/products"
    console.log(url)
    useEffect(()=>{
        const buscaDados = async() =>{
            const dados = await fetch(url)
            const data = await dados.json()
            console.log(data)
            const produto = data.filter(value => value.name.toLowerCase().includes(name.toLowerCase()))
            
            setProduct(produto[0])
        }
        buscaDados()
      },[url,name])
      console.log(product[0])
  return (
    <div>
        <h2>Resultados:</h2>
        {product && (
            <div key={product.id}>
                <h2>Nome:{product.name}</h2>
                <p>Preço:{product.price}</p>
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>)
        }
    </div>
  )
}

export default Search