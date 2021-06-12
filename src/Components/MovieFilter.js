import React from 'react'
import ReactStars from "react-rating-stars-component";

function MovieFilter({filterText,filterRate}) {
    return (
        <div className="the">
            <h2>The World Of Movies</h2>
        <div className="rate">
            <section>
            <label>Search </label> <input placeholder="movie's title or genre..." onChange={(e)=>filterText(e.target.value)}></input>
            </section>
            <ReactStars
    count={10}
    onChange={(newRating)=>filterRate(newRating)}
    size={24}
    activeColor="#ffd700"
       />
        </div>
        </div>
    )
}

export default MovieFilter
