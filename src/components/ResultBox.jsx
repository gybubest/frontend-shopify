
function ResultBox({movie, index, onNominate}) {
  const movieInfo = 
  <li key={index}>
    {movie.Title} ({movie.Year}) 
    <button onClick={() => onNominate(movie.Title)}>Nominate</button>
  </li>

    return movieInfo;
}

export default ResultBox;
