import React from 'react'
import { useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'

const Product = () => {
    const {id} = useParams();
    const url = 'http://localhost:3000/products/'+id

    const [product,setProduct] = useState(null)

    useEffect(()=>{
        const fetchData = async() =>{
            const dados = await fetch(url)
            const data = await dados.json()
            setProduct(data)
        }
        fetchData();
    },[url])
  return (
    <div>
        {product && <div key={id}>
                <h2>Nome:{product.name}</h2>
                <p>Preço:{product.price}</p>
            </div>
        }
    </div>
  )
}

export default Product