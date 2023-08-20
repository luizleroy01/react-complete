import {useState} from 'react'
const ManageData = () =>{
    //Utilizando useStatepara mudar o estado de uma variável e renderizar novamente o componente
    //com o novo valor
    const [number,setNumber] = useState(0);
    return(
        <div>
            <p>Valor:{number}</p>
            <button onClick={()=>setNumber(30)}>Mudar numero</button>
        </div>
    );
}
export default ManageData;