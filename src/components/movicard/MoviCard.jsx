import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./style.css"
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom"

const MoviCard = ({movie}) => {
    const [loding, setLoding] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoding(false)
        }, 1000)
    }, [])
     
  return (
    <>
    {
        loding
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#04152d">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`}>
            <div className="card">
                <img className="cardsimg" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cardsDetails">
                    <div className="cardTitle">{movie?movie.original_title:""}</div>
                    <div className="cardRuntime">
                        {movie?movie.release_date:""}
                        <span className="cardRating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="cardDescription">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
  )
}

export default MoviCard