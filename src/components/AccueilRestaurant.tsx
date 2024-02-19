import React from 'react'
import { Navbar } from './navbar/Navbar'
import {Main} from './main/Main'
import { Details } from './details/Details'
/* https://dummyjson.com/recipes */


export const AccueilRestaurant = () => {
  return (
      <>
          <Navbar/>
         {/*  <Main/> */}
          <Details/>
      </>
  )
}
