import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

export default function SearchResult(){

    const {movie} = useParams();
    const url = `https://imdb-api.com/en/API/Search/k_edf5o5xd/${movie}`
    
const [data, setData] = useState();

useEffect(() => {
    async function fun1(){
        const responsive = await axios.get(url)
        setData(responsive.data.results)
        // console.log(setData)

    }
    fun1();
},[url])

    return(
    
        <div className="movieCards">

            {
            data?.map((card)=> (

            <div className="movieCard">
                <Link className="movieCardLink" to={`/movie/${card.id}`}>
                <img src={card.image} alt="movie img"  className="moiveCardImg"/>
                <h1 className="moiveCardtitle">{card.title}</h1>
                </Link>
            </div>

            ))}
        </div>
    )
}