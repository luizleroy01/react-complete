import React from "react";
import styles from "./MyForm.module.css";
import { useState } from "react";

const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState();
  const [role, setRole] = useState();
  // e contém todas as informações do input
  const handleName = (e) => {
    //toda vez que a variável alterar seta um novo valor
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role);
    //limpar formulário
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            onChange={handleName}
            type="text"
            name="name"
            placeholder="Digite seu nome"
            value={name}
          />
        </div>
        {/*label envolvendo o input*/}
        <label>
          <span>Email:</span>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={email}
          />
        </label>
        {/*adicionando textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder="Digite sua bio"
          ></textarea>
        </label>
        <label>
          <span>Função:</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="usuario">Usuário</option>
            <option value="admin">Administrador</option>
            <option value="convidado">Convidado</option>
          </select>
        </label>
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default MyForm;
