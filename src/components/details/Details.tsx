import React, { useEffect, useState } from 'react'
import logo from "../../logo192.png"
import "./Dstyle.css"
import {PlatsTypes} from "../../models/PlatsTypes"
import { useParams } from 'react-router-dom'
import { usePlatsContext } from '../../context/PlatsContext'





export const Details = () => {

    const {plats} = usePlatsContext();
    const {id} = useParams();


    
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
