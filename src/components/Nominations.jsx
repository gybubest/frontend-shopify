
function Nominations({movieList, onRemove}) {

  const showList = movieList.map((movie) => {
    return (
      <li key={movie.imdbID}>
        {movie.Title} ({movie.Year}) 
        <button onClick={() => onRemove(movie.imdbID)}>Remove</button>
      </li>
    )
  });

  return (
    <div className="Nominations">
      <h2>Nominations</h2>
      <ul>
        {showList}
      </ul>
    </div>
  );
}

export default Nominations;
