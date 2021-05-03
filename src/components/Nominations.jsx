
function Nominations({movieList}) {
  const showList = movieList.map((movie, index) => {
    return <li key={index}>{movie.Title} ({movie.Year}) Remove</li>
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
