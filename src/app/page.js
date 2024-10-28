'use client'
import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';


const page = () => {
let [data , setData] = useState([]);

useEffect(()=>{

  ( async ()=>{

    let res = await fetch('https://dummyjson.com/products')
    let json = await res.json()

    setData(json['products'])

  })()

},[])

  return (
    <div>
      <Menu/>

      {
        data.map((item , index)=>{
          return<div key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                    <img src={item.image} alt="..." />
                  </div>
        })
      }
    </div>
  );
};

export default page;