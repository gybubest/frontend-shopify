import React, {useState, useEffect} from 'react';
import { debounce } from 'lodash';

import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Nominations from './components/Nominations';

function App() {

  const [result, setResult] = useState(null);

  const movieList = [
    {"Title":"Citizen","Year":"2001","Rated":"Not Rated","Released":"08 Jun 2001","Runtime":"172 min","Genre":"Action, Drama, Mystery, Thriller","Director":"Saravana Subaiya","Writer":"N/A","Actors":"Vasundhara Das, Devan, Cochin Hanifa, Ajith Kumar","Plot":"Antony assumes several identities and kidnaps three government officials in order to succeed in his secret mission. However, a CBI officer sets out to find the real identity of the kidnapper.","Language":"Tamil","Country":"India","Awards":"1 win.","Poster":"https://m.media-amazon.com/images/M/MV5BNDY0M2RjNDYtYjRhMC00MWNmLTllNmQtMDMzMDUwZWQwMjg3XkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"78%"}],"Metascore":"N/A","imdbRating":"7.1","imdbVotes":"2,651","imdbID":"tt1039952","Type":"movie","DVD":"06 Jan 2018","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Titanic","Year":"1997","Rated":"PG-13","Released":"19 Dec 1997","Runtime":"194 min","Genre":"Drama, Romance","Director":"James Cameron","Writer":"James Cameron","Actors":"Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates","Plot":"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.","Language":"English, Swedish, Italian, French","Country":"USA, Mexico, Australia, Canada","Awards":"Won 11 Oscars. Another 114 wins & 83 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"75/100"}],"Metascore":"75","imdbRating":"7.8","imdbVotes":"1,060,049","imdbID":"tt0120338","Type":"movie","DVD":"01 Jun 2014","BoxOffice":"$659,363,944","Production":"20th Century Fox, Lightstorm Entertainment, Paramount Pictures","Website":"N/A","Response":"True"},
    {"Title":"Blade Runner","Year":"1982","Rated":"R","Released":"25 Jun 1982","Runtime":"117 min","Genre":"Action, Sci-Fi, Thriller","Director":"Ridley Scott","Writer":"Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)","Actors":"Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos","Plot":"A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.","Language":"English, German, Cantonese, Japanese, Hungarian, Arabic, Korean","Country":"USA","Awards":"Nominated for 2 Oscars. Another 12 wins & 17 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"84/100"}],"Metascore":"84","imdbRating":"8.1","imdbVotes":"701,986","imdbID":"tt0083658","Type":"movie","DVD":"15 Nov 2016","BoxOffice":"$32,868,943","Production":"Blade Runner Partnership, Ladd Company","Website":"N/A","Response":"True"}
  ]

  const handleSearch = input => {
    const i = input.trim();
    if (i) {
      console.log(i);
      setResult(movieList.filter(movie => movie.Title.toLowerCase().includes(i)));
    }
  };

  console.log(result)

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          The Shoppies
        </h1>
        <SearchBar
          handleSearch={handleSearch}
          movieList={movieList}
        />
        <SearchResults
          movieList={movieList}
        />
        <Nominations
          movieList={movieList}
        />
      </header>
    </div>
  );
}

export default App;
