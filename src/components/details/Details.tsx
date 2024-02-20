import React, { useEffect, useState } from 'react'
import logo from "../../logo192.png"
import "./Dstyle.css"
import {PlatsTypes} from "../../models/PlatsTypes"
import { useParams } from 'react-router-dom'
import { usePlatsContext } from '../../context/PlatsContext'





export const Details = () => {

    const {plats} = usePlatsContext();
    const {id} = useParams();

     // Recherche du plat correspondant à l'ID dans le contexte
     const plat = plats.find(plat => plat.id.toString() === id?.toString());


     // Si le plat n'est pas trouvé, retourner un message d'erreur ou une redirection
     if (!plat) {
         return <div>Plat non trouvé</div>;
     }
 



    
  return (
    <div>
        <h2 style={{textDecoration: "underline"}}>Details</h2>
        <div className='wrapper'>
            <div className='name-imge'>
                <h4 style={{textDecoration: "underline"}}>Plat: Pizza</h4>
                <img src={plat.image} alt="" />
            </div>
            <div className='ingredients'>
                    <ul>
                        {plat.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
            </div>
        </div>
        <div className='instructions'>
                    <ul>
                        {plat.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>
        </div>
    </div>
  )
}
