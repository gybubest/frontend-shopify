
function SearchResults({keyWord, movieList, onNominate}) {

    const showList = movieList.map((movie, index) => {
      return (
        <li key={index}>
          {movie.title} ({movie.year}) 
          <button disabled={movie.nominated} onClick={() => onNominate(movie.title)}>Nominate</button>
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
