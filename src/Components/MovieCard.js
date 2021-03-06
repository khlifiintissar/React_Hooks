import React ,{useState} from 'react'
import {Card,Button} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'


function MovieCard({movie}) {
  const [show, setShow] = useState(false)
  
    return (
        <div>
            <Card style={{ width: '18rem',margin:10}}>
            <Link to={{pathname:`/description/${movie.title}`, state: {movie}}}>          
  <Card.Img style={{borederRadius:'20',width:'100%',height:'25rem'}} variant="top" src={movie.posterUrl} alt='poster'/>
  </Link>
  <Card.Body>
     <div className="body">
     <ReactStars
    count={10}
    value={movie.rate}
    edit={false}
    //onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
   />
    <section className="show">
    <Card.Title style={{color:'black'}}>{movie.title}</Card.Title>
    <Button className="button" variant="dark" onClick={()=>show?setShow(false):setShow(true)}> show more </Button>
    </section>
    </div>
    {show ?
    <Card.Text className='textb' style={{color:'black'}}>
      <h6>{movie.genre}</h6>
      {movie.synopsis}
    </Card.Text>:null }
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
