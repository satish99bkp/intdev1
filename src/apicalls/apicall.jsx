import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import style from "./style.module.scss"; 
// import axios from './axios';

const APIurl="https://jsonplaceholder.typicode.com";
const  Apicall=()=>{  
const [todos, settodos]=useState([]);
const [error, setError]=useState("");
// useEffect(()=>{
//     // fetch("https://jsonplaceholder.typicode.com/posts")
//     // .then(respone => respone).then((e)=>e.json())
//     // .then(e=> settodos(e));

//     axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>settodos(res.data) )
//     .catch((error)=> setError(error.message));

//  }, [])

const getApiData=async(url)=>{

    try{
        const res=await axios.get(url);
         settodos(res.data);
    }catch(error){
        setError(error.message);
    }
 
}

useEffect(()=>{
   getApiData(`${APIurl}/posts`);
    // getApiData();
}, []);


    return (
    <div className={style.api}>
        {error!==""  && <h2>{error}</h2>}
      {
        todos.map(todos => <div className={style.post} key={todos.id}>
            <p>{todos.title.slice(0,25).toUpperCase()}</p>
            <p>{todos.body.slice(0,300)}</p>
        </div>)
      }
     
    </div>
  )
}

export default Apicall;
