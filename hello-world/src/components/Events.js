const Events = () =>{
    let palavra = "Computador";
    function handleSubmit(){
        console.log(palavra)
    }
    //criando uma função que retorn jsx
    const returnSomething = (x) =>{
        if(x){
            return <h1>É verdade</h1>
        }else{
            return <h1>É mentira</h1>
        }
    }
    return(
        <div>
            <button onClick={handleSubmit}>Clique</button>
            {/* botão com função a ser executada inline*/}
            <button onClick={()=>console.log("funciona também")}>Clique também</button>
            <h2 id="p1">{palavra}</h2>
            {returnSomething(true)}
            {returnSomething(false)}
        </div>
    );
}
export default Events;