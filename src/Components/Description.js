import { Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'

function Description(props) {
    console.log(props)
    return (
        <div className="desc">
            <nav className="tit">
            <h2>{props.location.state.movie.title}</h2>
            <ReactStars
                count={10}
                value={props.location.state.movie.rate}
                edit={false}
                //onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
            />
            </nav>
             <body className="bod">
              <img width="400" height="500" src={props.location.state.movie.posterUrl}/><br></br>
               <p>
                <h4>Genre:</h4>{props.location.state.movie.genre}
                    <h4>Synopsis:</h4>
                    {props.location.state.movie.synopsis}
                </p>
            </body>
            <br></br>
            <br></br>
            <iframe width="560" height="360" src={props.location.state.movie.trailerUrl} title="Official trailer"></iframe><br></br>
            <h4>{props.location.state.movie.title}</h4>
            <div className="back">
           <Link to='/'> <Button  variant="warning">Back to home</Button></Link>
           </div>
           <br></br>
        </div>
    )
}

export default Description
