import React, { useEffect, useState } from 'react'
import "./Style.css"
import {PlatsTypes} from "../../models/PlatsTypes"



export const Main = () => {

    const [plats, setPlats] = useState<PlatsTypes[]>([])

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
                    <div key={plat.id}>
                        <img src={plat.image} alt="" />
                        <p>{plat.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
