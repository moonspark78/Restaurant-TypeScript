import React from 'react'
import { Navbar } from './navbar/Navbar'
import {Main} from './main/Main'
import { Details } from './details/Details'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/* https://dummyjson.com/recipes */


export const AccueilRestaurant = () => {
  return (
      <Router>
        <div>
          <Navbar/>
              <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/details' element={<Details/>}/>
              </Routes>
        </div>
      </Router>
  )
}
