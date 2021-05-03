
function Nominations({movieList, onRemove}) {

  const showList = movieList.map((movie, index) => {
    return (
      <li key={index}>
        {movie.title} ({movie.year}) 
        <button onClick={() => onRemove(movie.title)}>Remove</button>
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
