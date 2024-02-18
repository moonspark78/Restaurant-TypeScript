import React, { useEffect, useState } from 'react'



type Plats = {
    id: number;
    name: string;
    image: string;
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
            <div className='imga'>
                <h4></h4>
            </div>
            <div className='ingre'></div>
        </div>
        <div className='instru'></div>
    </div>
  )
}
