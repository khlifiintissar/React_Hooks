import React from 'react'
import ReactStars from "react-rating-stars-component";

function MovieFilter({filterText,filterRate}) {
    return (
        <div className="rate">
            <input onChange={(e)=>filterText(e.target.value)}></input>
            <ReactStars
    count={10}
    onChange={(newRating)=>filterRate(newRating)}
    size={24}
    activeColor="#ffd700"
       />
        </div>
    )
}

export default MovieFilter
