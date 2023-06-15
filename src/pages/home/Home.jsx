import React, { useEffect, useState } from "react"
import "./style.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import ListOfMovi from "../../components/listOfMovi/ListOfMovi";

const Home = () => {
    const [popMovies, setPopMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7ef003ad6dfa43f0bb5b48cfb572065a")
            .then(res => res.json())
            .then(data => setPopMovies(data.results))
    }, [])
    return (
        <>
            <div className="mainPoster">
                <Carousel
                    showThumbs={true}
                    transitionTime={2}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                >
                    {
                        popMovies.map(myallMovies => (
                            <Link to={`/movie/${myallMovies.id}`} >


                                <div className="posterImg">
                                    <img src={`https://image.tmdb.org/t/p/original${myallMovies && myallMovies.backdrop_path}`} />
                                </div>
                                <div className="opacity-layerr"></div>

                                <div className="opacity-layer"></div>


                                <div className="posterImgDetail">
                                    <div className="posterImg__title">
                                        <h1>{myallMovies ? myallMovies.original_title : ""}</h1>
                                    </div>

                                    <div className="posterImg__runtime">
                                        <h2>release date {myallMovies ? myallMovies.release_date : ""}</h2>

                                        <span className="posterImg__ratings">
                                            <span>{myallMovies ? myallMovies.vote_average : ""}</span>
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>

                                    <div className="posterImage__description">
                                        {myallMovies ? myallMovies.overview : ""}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <ListOfMovi />
            </div>

            <div>home</div>
        </>
    )
}

export default Home