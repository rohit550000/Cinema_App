import React, { useEffect, useState } from "react"
import "./style.css"
import { useParams } from "react-router-dom"

const MoviDetail = () => {
    const [singleMoviDetails, setMovie] = useState()
    const { id } = useParams()
    useEffect(() => {
        GetData()
        window.scrollTo(0, 0)
    }, [])

    const GetData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }

    return (
        <div className="movieContainer">

            <div className="BackImageContainer">
                <img className="BackImage" src={`https://image.tmdb.org/t/p/original${singleMoviDetails ? singleMoviDetails.backdrop_path : ""}`} />
            </div>


            <div className="moviDetail">
                <div className="movieLeft">
                    <img className="insideImg" src={`https://image.tmdb.org/t/p/original${singleMoviDetails ? singleMoviDetails.poster_path : ""}`} />
                </div>

                <div className="rightDetail">
                    <div className="movie__detailRightTop">
                        <div className="mName">{singleMoviDetails ? singleMoviDetails.original_title : ""}</div>
                        <div className="mtagline">{singleMoviDetails ? singleMoviDetails.tagline : ""}</div>
                        <div className="mrating">
                            {singleMoviDetails ? singleMoviDetails.vote_average : ""} <i class="fas fa-star" />
                            <span className="voteCount">{singleMoviDetails ? "(" + singleMoviDetails.vote_count + ") votes" : ""}</span>
                        </div>
                        <div className="mRuntime">{singleMoviDetails ? singleMoviDetails.runtime + " mins" : ""}</div>
                        <div className="mReleaseDate">{singleMoviDetails ? "Release date: " + singleMoviDetails.release_date : ""}</div>
                        <div className="mgenresContent">
                            {
                                singleMoviDetails && singleMoviDetails.genres
                                    ?
                                    singleMoviDetails.genres.map(genre => (
                                        <><span className="mGenre" id={genre.id}>{genre.name}</span></>
                                    ))
                                    :
                                    ""
                            }
                        </div>
                    </div>
                    <div className="synopsisDetail">
                        <div className="synopText">SYNOPSIS</div>
                        <div className="sysDescrip">{singleMoviDetails ? singleMoviDetails.overview : ""}</div>
                    </div>

                </div>

            </div>
    
        </div>
    )
}

export default MoviDetail