import React from 'react'
import { Navbar } from './navbar/Navbar'
import {Main} from './main/Main'
import { Details } from './details/Details'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PlatsProvider} from '../context/PlatsContext';

/* https://dummyjson.com/recipes */


export const AccueilRestaurant = () => {
  return (
      <Router>
        <PlatsProvider>
        <div>
          <Navbar/>
              <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/details' element={<Details/>}/>
              </Routes>
        </div>
        </PlatsProvider>
      </Router>
  )
}
