import React, { useEffect, useState } from 'react'
import "./Style.css"
import {PlatsTypes} from "../../models/PlatsTypes"
import {usePlatsContext} from "../../context/PlatsContext"
import { Link } from 'react-router-dom'



export const Main = () => {

    const {plats, setPlats} = usePlatsContext()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://dummyjson.com/recipes");
            const data = await response.json();
            console.log(data.recipes);
            setPlats(data.recipes);
            
        };
        fetchData();
    },[])

  return (
    <div className='apper'>
        <h2>Les plats</h2>
        <div className='cards'>
            {
                plats.map((plat: PlatsTypes) => (
                    <Link to={`/details/${plat.id}`}>
                    <div key={plat.id}>
                        <img src={plat.image} alt="" />
                        <p>{plat.name}</p>
                    </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}
