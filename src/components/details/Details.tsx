import React, { useEffect, useState } from 'react'
import logo from "../../logo192.png"
import "./Style.css"



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
        <h2 style={{textDecoration: "underline"}}>Details</h2>
        <div className='wrapper'>
            <div className='name-imge'>
                <h4 style={{textDecoration: "underline"}}>Plat: Pizza</h4>
                <img src={logo} alt="" />
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
