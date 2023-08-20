import React from 'react'
import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(['Luiz','Eduardo','Leroy'])
    const [users,setUsers] = useState([
        {id:1,nome:'Luiz'},
        {id:2,nome:'Carlos'},
        {id:3,nome:'Alberto'},
    ])

    //função para excluir os usuários da lista dinamicamente
    const deleteUser = () =>{
        const randomId = Math.floor(Math.random() * 4)
        //prevUsers corresponde ao estado atual da lista ou o estado anterior após a mudança
        setUsers((prevUsers)=>{
            return prevUsers.filter((user)=>randomId !== user.id)
        })
    }
  return (
    <div>
        <ul>
            {/*Acessa todos os itens da lista com map,adicionado a propriedade key */}
            {list.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((item)=>(
                <li key={item.id}>{item.nome}</li>
            ))}
        </ul>
        <button onClick={deleteUser}>Excluir</button>
    </div>
  )
}

export default ListRender;