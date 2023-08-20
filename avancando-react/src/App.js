import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Paisagem from "./assets/paisagem2.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";
import MyTitle from "./components/MyTitle";
function App() {
  function showMessage() {
    console.log("Mensagem componente pai");
  }
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };
  const name = "Luiz Eduardo Leroy Souza";
  const carList = [
    { id: 1, marca: "m1", km: 1000, cor: "amarelo", isNew: true },
    { id: 2, marca: "m2", km: 7655, cor: "verde", isNew: false },
    { id: 3, marca: "m3", km: 87798, cor: "vermelho", isNew: true },
  ];
  //variavel para condicional

  const [n, setN] = useState(5);
  let control = false;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Avançando com react</h1>
          <img src="/paisagem.jpg" alt="imagem" />
        </div>
        <div>
          {/*Importando a imagem da pasta assets */}
          <img src={Paisagem} alt="imagem" />
        </div>
        <ManageData />
        <ListRender />
        <ConditionalRender />
        <ShowUserName name={name} />
        <CarDetails marca="Fiat" km={1000} cor="preto" />
        {carList.map((car) => (
          <CarDetails
            key={car.id}
            marca={car.marca}
            km={car.km}
            cor={car.cor}
            isNew={car.isNew}
          />
        ))}
        <Container>
          <p>Texto dentro do container</p>
        </Container>
        <ExecuteFunction myFunction={showMessage} />
        {/*realizando o state lift */}
        <Message msg={message} />
        <ChangeMessage handleMessage={handleMessage} />
        {/* uso do css inline */}
        <p style={{ backgroundColor: "blue", color: "white", padding: "10px" }}>
          Esse é o texto do parágrafo
        </p>
        {/*condicional com estilo*/}
        <p style={n < 10 ? { color: "red" } : { color: "blue" }}>{n}</p>
        <button onClick={() => setN(10)}>Mudar N</button>
        <h2 className={control ? "red-title" : "green-title"}>Css dinâmico</h2>

        <MyTitle />
      </header>
    </div>
  );
}

export default App;
