const TemplateExpressions = ()=>{
    const nome = "Luiz Eduardo";
    const data = {
        age:21,
        role:"Software Engineer",
    }
    return(
        <div>
            <h1>Dados da pessoa</h1>
            <h2>Nome: {nome}</h2>
            <p>Idade: {data.age}</p>
            <p>Função: {data.role}</p>
            <p>{console.log("Isso é jsx")}</p>
        </div>
    );
}

export default TemplateExpressions;