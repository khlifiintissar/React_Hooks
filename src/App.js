import './App.css';
import React ,{useState} from "react";
import MovieList from './Components/MovieList';
import MovieAdd from './Components/MovieAdd';

  
  function App() {
    let [movies, setMovies] = useState([
      {
        title:"Me before you (2016)",
        genre:"Romance Drama",
        synopsis:"Louisa Clark is a small town girl who knows a lot about the people around her. Will is a quadriplegic man who hates everyone around him. Louisa is hired by Will's mum to take care of him for six months. Although they have a rocky start, their relationship grows over time, going for hate, to like, to love.",
        posterUrl:"https://images-na.ssl-images-amazon.com/images/I/91I3nMaJb-L._RI_.jpg",
        rate:7.4,
      },
      {
        title:"Parasite (2019)",
        genre:"Drama,Black comedy",
        synopsis:"Ki-taek's entire family is unemployed, and takes a strong interest in the lifestyle of the wealthy Park family. One day, their son managed to get recommended to give private English lessons with the Parks. This is the start of an uncontrollable spiral, from which no one will escape truly unscathed ...",
        posterUrl:"https://www.themoviedb.org/t/p/original/ymudsyFGuaCdpoLlWkdpxqBlBdv.jpg",
        rate:8.6,
       },
       {
         title:"News of the world (2020)",
         genre:"Action,Adventure,Drama",
         synopsis:"A Civil War veteran agrees to deliver a girl, taken by the Kiowa people years ago, to her aunt and uncle, against her will. They travel hundreds of miles and face grave dangers as they search for a place that either can call home.",
        posterUrl:"https://m.media-amazon.com/images/M/MV5BMDNlNmVlNDItMjE3Yi00ZTA3LWIyOTktNDhhMGFlZjk5ZDQ0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        rate:6.8,
       },
      {
        title:"The theory of everything (2014)",
        genre:"Biography,Drama,Romance",
        synopsis:"A look at the relationship between the famous physicist Stephen Hawking and his wife.",
        posterUrl:"https://www.onmyscreen.net/uploads/articles/gallery/the-theory-of-everything-5e2de0d9b150c.jpeg",
        rate:7.7,
      },
      {
        title:"The call of the wild (2020)",
        genre:"Adventure,Drama",
        synopsis:"A sled dog struggles for survival in the wilds of the Yukon.",
        posterUrl:"https://m.media-amazon.com/images/M/MV5BZDA1ZmQ2OGMtZDhkMC00ZjRkLWE3ZTMtMzA5ZTk0YjM1OGRmXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
        rate:6.8,
      },
      {
        title:"The fault in our stars (2014)",
        genre:"Drama,Romance",
        synopsis:"Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.",
        posterUrl:"https://m.media-amazon.com/images/M/MV5BNTVkMTFiZWItOTFkOC00YTc3LWFhYzQtZTg3NzAxZjJlNTAyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        rate:7.7,
      },
      {
        title:"Get out (2017)",
        genre:"Horror,Mystery" ,
        synopsis:"A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
        posterUrl:"https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
        rate:7.7,
      },
      {
        title:"Midnight in Paris (2011)",
        genre:"Comedy,Romance",
        synopsis:"While on a trip to Paris with his fiancée's family, a nostalgic screenwriter finds himself mysteriously going back to the 1920s every day at midnight.",
        posterUrl:"https://images-na.ssl-images-amazon.com/images/I/91n1dXALrML._AC_SL1500_.jpg",
        rate:7.7,
      },
      {
        title:"I care a lot (2020)",
        genre:"Comedy,Crime",
        synopsis:"A crooked legal guardian who drains the savings of her elderly wards meets her match when a woman she tries to swindle turns out to be more than she first appears.",
        posterUrl:"https://m.media-amazon.com/images/M/MV5BYWU2ZTRhNDMtMWYxMC00ZTVkLThjZmItZGY4MGU0YmZlMjJlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        rate:6.3,
      },
      {
        title:"Legend (2015)",
        genre:"Crime,Drama",
        synopsis:"Identical twin gangsters Ronald and Reginald Kray terrorize London during the 1960s.",
        posterUrl:"https://fr.web.img3.acsta.net/pictures/15/10/05/16/41/267143.jpg",
        rate:6.9,
      },
      {
        title:"Mamma Mia! Here we go again (2018)",
        genre:"Comedy,Romance",
        synopsis:"Five years after the events of Mamma Mia! (2008), Sophie prepares for the grand reopening of the Hotel Bella Donna as she learns more about her mother's past.",
        posterUrl:"https://m.media-amazon.com/images/M/MV5BMjEwMTM3OTI1NV5BMl5BanBnXkFtZTgwNDk5NTY0NTM@._V1_.jpg",
        rate:6.6,
      },
      {
        title:"ElizabethTown (2005)",
        genre:"Comdey,Drama,Romance",
        synopsis:"During a hometown memorial for his Kentucky-born father, a young man begins an unexpected romance with a too-good-to-be-true stewardess.",
        posterUrl:"https://images-na.ssl-images-amazon.com/images/I/819rgPwlXyL._AC_SY679_.jpg",
        rate:"6.4",
      },
      {
        title:"A star is born (2018)",
        genre:"Drama,Music,Romance",
        synopsis:"A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.",
        posterUrl:"https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        rate:"7.6",
      },
      {
        title:"Pride and Prejudice (2005)",
        genre:"Drama,Romance",
        synopsis:"Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?",
        posterUrl:"https://img.kytary.com/eshop_ie/velky_v2/na/637243951095170000/51ad5a49/64744151/ms-pride-and-prejudice-music-from-the-motion-picture-soundtrack.jpg",
        rate:"7.8",
      },
      {
        title:"The art of racing in the rain (2019)",
        genre:"Comedy,Drama,Romance",
        synopsis:"Through his bond with his owner, aspiring Formula One race car driver Denny, golden retriever Enzo learns that the techniques needed on the racetrack can also be used to successfully navigate the journey of life.",
        posterUrl:"https://upload.wikimedia.org/wikipedia/en/f/f0/The_Art_of_Racing_in_the_Rain.jpg",
        rate:"7.6",
      },
      {
        title:"Scent of a woman (1992)",
        genre:"Drama",
        synopsis:"A prep school student needing money agrees to 'babysit' a blind man, but the job is not at all what he anticipated.",
        posterUrl:"https://upload.wikimedia.org/wikipedia/en/9/91/Scent_of_a_Woman.jpg",
        rate:"8",
      },
      {
        title:"Life of Pi (2012)",
        genre:"Adventure,Drama,Fantasy",
        synopsis:"A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger.",
        posterUrl:"https://miro.medium.com/max/270/1*56gmJ_0H7LhakAadbt-25Q.jpeg",
        rate:"7.9",
      },
      {
        title:"Léon (1994)",
        genre:"Action,Crime,Drama",
        synopsis:"Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
        posterUrl:"https://img-4.linternaute.com/J0-okZ5gvbPqOnRgQERlckdxwRg=/1240x/ab0ba114d66f41a1953f982f86b5b1e0/ccmcms-linternaute/73927.jpg",
        rate:"8.5",
      },
      {
        title:"Love Happens (2009)",
        genre:"Drama,Romance",
        synopsis:"A widower whose book about coping with loss turns him into a best-selling self-help guru, falls for the hotel florist where his seminar is given, only to learn that he hasn't yet truly confronted his wife's passing.",
        posterUrl:"https://static.metacritic.com/images/products/movies/8/4276057c14fc41d10fd35cfe404c7700.jpg",
        rate:"5.7",
      },
      {
        title:"A walk to remember (2002)",
        genre:"Drama,Romance",
        synopsis:"The story of two North Carolina teens, Landon Carter and Jamie Sullivan, who are thrown together after Landon gets into trouble and is made to do community service.",
        posterUrl:"https://i-mom.unimedias.fr/2020/09/16/a-walk-to-remember.jpg",
        rate:"7.3",
      },
      {
        title:"The invisible man (2020)",
        genre:"Drama,Horror",
        synopsis:"When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
        posterUrl:"https://upload.wikimedia.org/wikipedia/en/3/3a/The_Invisible_Man_%282020_film%29_-_release_poster.jpg",
        rate:"7.1",
      },
      {
        title:"The Shawshenk Redemption (1994)",
        genre:"Drama",
        synopsis:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        posterUrl:"https://cdn.hmv.com/r/w-1280/hmv/files/ff/ff154dab-a882-4ee2-a3e6-b8fde1339c5a.jpg",
        rate:"9.3",
      },
      {
        title:"The sound of music (1965)",
        genre:"Biography,Drama,Family",
        synopsis:"A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower.",
        posterUrl:"http://prodimage.images-bn.com/pimages/0024543029311_p0_v4_s1200x630.jpg",
        rate:"8",

      },
      {
        title:"The green mile (1999)",
        genre:"Crime,Drama,Fantasy",
        synopsis:"The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
        posterUrl:"https://i.pinimg.com/736x/bc/4c/4c/bc4c4c82be0850dacb63f51ced59ef69.jpg",
        rate:"8.6",
      }

    ]);
    const add=(newAdd)=>{
   setMovies([...movies,newAdd])
    };
    
   
    return (
      <div className="App">
        <header className="appHeader">
          <MovieList  movies={movies}/>
          <MovieAdd add={add}/>
        </header>
      </div>
    );
   }

    
  
    

export default App;
