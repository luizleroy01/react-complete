import { useContext } from "react";
import { CounterContext } from "../context/ConterContext";
import React from 'react'

const Home = () => {
    const {counter} = useContext(CounterContext)
  return (
    <div>
        <h1>Home</h1>
        <p>Valor do contador : {counter}</p>
    </div>
  )
}

export default Home