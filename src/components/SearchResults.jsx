
function SearchResults({keyWord, movieList, onNominate}) {
    console.log(movieList)
    const showList = movieList.map((movie) => {
      return (
        <li key={movie.imdbID}>
          <img src={movie.Poster}/>
          {movie.Title} ({movie.Year}) 
          <button disabled={movie.nominated} onClick={() => onNominate(movie.imdbID)}>Nominate</button>
        </li>
      )
    });
  
    return (
      <div className="SearchResults">
        <h2>Results for "{keyWord}"</h2>
        <ul>
          {showList}
        </ul>
      </div>
    );
}

export default SearchResults;
