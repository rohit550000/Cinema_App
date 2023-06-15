import React, {useEffect, useState} from "react"
import "./style.css"
import { useParams } from "react-router-dom"
import MoviCard from "../movicard/MoviCard"

const ListOfMovi = () => {
  const [listOfMovies, setListOfMovies] = useState([]);
    const {type} = useParams()
    useEffect(() => {
        GetData()
    }, [type])

    const GetData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=7ef003ad6dfa43f0bb5b48cfb572065a`)
        .then(res => res.json())
        .then(data => setListOfMovies(data.results))
    }

    return (
        <div className="ListOfMovi">
            <h2 className="listTitle">{(type ? type : "LIST OF MOVIES").toUpperCase()}</h2>
            <div className="listOfcards">
                {
                    listOfMovies.map(movie => (
                        <MoviCard movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default ListOfMovi