import logo from "./logo.svg";
import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h1>React form</h1>
      <MyForm user={{ name: "Luiz", email: "luiz@gmail.com" }} />
    </div>
  );
}

export default App;
