import React,{useState} from 'react'
import MovieCard from './MovieCard'
import MovieFilter from './MovieFilter'

function MovieList({movies}) {
    const [text, setText] = useState('');
    const [rate, setRate] = useState('');
    const filterText=(text)=>{
        setText(text)
    };
    const filterRate=(rate)=>{
        setRate(rate)
    };
    return (
      
        <div className="filter">
         <MovieFilter filterText={filterText} filterRate={filterRate} />
        <div className="dflex">
            {
                movies.filter(el=>(el.title.toLowerCase().includes(text.toLowerCase())||el.genre.toLowerCase().includes(text.toLowerCase()))&& el.rate>=rate).map(x=><MovieCard movie={x}/>)
            }
            
        </div>
        </div>
    )
}

export default MovieList
