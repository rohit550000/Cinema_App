import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from './components/head/Head';
import Home from './pages/home/Home';
import ListOfMovi from './components/listOfMovi/ListOfMovi';
import MoviDetail from './pages/detailOfMovies/MoviDetail';

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
          <Head />
            <Routes>
               <Route path='/' element={<Home />}></Route>
                <Route path="movie/:id" element={<MoviDetail />}></Route>
                <Route path="movies/:type" element={<ListOfMovi />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route> 
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App