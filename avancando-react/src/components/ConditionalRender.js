import React from 'react'
import {useState} from 'react'

const ConditionalRender = () => {
    const [x,setX] = useState(true)
    const [name,setName] = useState('Luiz')
  return (
    <div>
        {/*Condicional com operador lógico AND */}
        {x && <p>X é verdadeiro</p>}

        {!x && <p>X é falso</p>}
        <button onClick={()=>setX(false)}>Mudar X</button>

        <h2>If ternário</h2>
        {name === 'Luiz'?(
            <div>
                <p>O seu nome é Luiz </p>
            </div>
        ):(
            <div>
                <p>O seu nome não é Luiz</p>
            </div>
        )}
        <button onClick={()=>setName('Eduardo')}>Mudar Nome</button>
    </div>
  )
}

export default ConditionalRender