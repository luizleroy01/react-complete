import React from 'react'

const CarDetails = ({marca,km,cor,isNew}) => {
    //usando desestruturação para acessar as props dentro do objeto passado pelo pai
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <p>Marca:{marca}</p>
        <p>Km:{km}</p>
        <p>Cor:{cor}</p>
        {isNew && <p>O carro é novo</p>}
    </div>
  )
}

export default CarDetails