import React, { useEffect, useState } from 'react'
import Logo from "../../../public/logo192.png"



type Plats = {
    id: number;
    name: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

export const Details = () => {

    const [details, setDetails] = useState<Plats[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://dummyjson.com/recipes");
            const data = await response.json();
            console.log(data.recipes);
            setDetails(data.recipes);
            
        };
        fetchData();
    },[])
  return (
    <div>
        <h2>Details</h2>
        <div>
            <div className='name-imge'>
                <h4>Plat: Pizza</h4>
                <img src={Logo} alt="" />
            </div>
            <div className='ingredients'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vitae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vitae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vitae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vitae.</p>
            </div>
        </div>
        <div className='instructions'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vitae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vitae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vitae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vitae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vitae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vitae.</p>
        </div>
    </div>
  )
}
