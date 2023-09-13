import {useState,useEffect} from 'react'

const useFetch = (url) =>{
    const [data,setData] = useState(null);

    //refatorando o post
    const [config,setConfig] = useState(null)
    const [method,setMethod] = useState(null)
    const [callFetch,setCallFetch] = useState(false)

    const httpConfig = (data,method) =>{
        if(method === "POST"){
            setConfig({
                method,
                headers:{
                 "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })

            setMethod(method)
        }
    }

    useEffect(async()=>{
        const fetchData = async() =>{
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
        }
        fetchData();

    },[url,callFetch]);

    //refatorando o post
    useEffect(async()=>{
        if(method === "POST"){
            let fetchOptions = [url,config]
            const res = await fetch(...fetchOptions);
            const json = await res.json()
            setCallFetch(json)  
        }
    },[config])

    return { data }
};

export default useFetch;