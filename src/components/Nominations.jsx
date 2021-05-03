
function Nominations({movieList}) {
  const showList = movieList.map(movie => {
    return <li>{movie.Title} ({movie.Year}) Remove</li>
  });

  console.log(showList)

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
