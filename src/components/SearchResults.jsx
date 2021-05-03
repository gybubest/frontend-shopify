
function SearchResults({movieList}) {
  const showList = movieList.map(movie => {
    return <li>{movie.Title} ({movie.Year}) Nominate</li>
  });

  console.log(showList)

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
