import React, { useEffect, useState } from 'react'
import "./Style.css"


type Plats = {
    id: number;
    name: string;
    image: string;
}
export const Main = () => {

    const [plats, setPlats] = useState<Plats[]>([])

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
    <div className='wrapper'>
        <h2>Les plats</h2>
        <div className='cards'>
            {
                plats.map((plat) => (
                    <div>
                        <img src={plat.image} alt="" />
                        <p>{plat.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
