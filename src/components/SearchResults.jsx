
function SearchResults({keyWord, movieList, onNominate}) {

    const showList = movieList.map((movie) => {
      return (
        <li key={movie.imdbID}>
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
