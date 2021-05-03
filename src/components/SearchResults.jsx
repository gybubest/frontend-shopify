
function SearchResults({movieList}) {
  const showList = movieList.map((movie, index) => {
    return <li key={index}>{movie.Title} ({movie.Year}) Nominate</li>
  });

  return (
    <div className="SearchResults">
      <h2>Results for "ram"</h2>
      <ul>
        {showList}
      </ul>
    </div>
  );
}

export default SearchResults;
