const Challenge = () =>{

    let n1 = 5;
    let n2 = 3;

    const calculaSoma = ()=>{
        console.log("Soma: "+(n1+n2))
        document.getElementById("res1").innerHTML = "Resultado: "+(n1+n2)
    }
    return(
        <div>
            <h2>Soma de números</h2>
            <p>Numero 1 : {n1}</p>
            <p>Numero 2 : {n2}</p>
            <p id="res1"></p>
            <button onClick={calculaSoma}>calcular</button>
        </div>
    );
}
export default Challenge;