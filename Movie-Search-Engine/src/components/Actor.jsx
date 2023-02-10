import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


export default function Actor() {

    const {actorId} = useParams()

    const [data, setData]= useState()

    const url = `https://imdb-api.com/en/API/Name/k_edf5o5xd/${actorId}`

    useEffect(() => {
        async function fun1(){
            const response = await axios.get(url)
            console.log(response)
            setData(response.data)
        }
        fun1()
    }, [url])

    return(
        <div className="actor--profile"> 
            <div className='actorCircle'>
                <img src={data?.image}alt='actor' />
            </div>
            <div className='actorDetails'> 
                <h1>{data?.name}</h1> 
                <h5>{data?.role}</h5>
                <p>{data?.summary}</p>
                <h2>{data?.awards}</h2>
            </div>
            <div className='actorMovies'>
                {
                    data?.knownFor?.map((movie) => (
                        <div className='actorCard'>
                            <Link to={`/movie/${movie.id}`}>
                                <img src={movie?.image} alt='movie'className="actorCard--img"/>
                                <h3>{movie?.title}</h3>
                            </Link>
                        </div>
                    ))
                }
                
            </div>
        </div>


    )
}