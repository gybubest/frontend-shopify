import styled from 'styled-components'

function Nominations({movieList, onRemove}) {

  const showList = movieList.map((movie) => {
    return (
      <Movie key={movie.imdbID}>
      <li className="movie-box" key={movie.imdbID}>
        <div className="movie-info">
          <h3 className="movie-title">
            {movie.Title} ({movie.Year})
          </h3> 
        <button className="remove-btn" disabled={movie.nominated} onClick={() => onRemove(movie.imdbID)}>Remove</button>
        </div>
        {movie.Poster !== 'N/A' && <div>
          <img className="movie-poster" alt="poster" src={movie.Poster}/>
        </div>}
      </li>
    </Movie>
    )
  });

  return (
    <Wrapper>
      <h2>Nominations</h2>
      <ul>
        {showList}
      </ul>
    </Wrapper>
  );
}

export default Nominations;

const Wrapper = styled.div`
  background-color: #282c34;
  color: #f5f5f7;
  width: 45%;
  border-radius: 3px;
  padding: 2%;
`;

const Movie = styled.div`
  margin-bottom: 4vh;

  .movie-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 5vh;

    .movie-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-right: 1vh;
    }
  }

  .remove-btn {
    height: 5vh;
    width: 8vw;
    font-size: 1.3vw;
    background-color: #f5f5f7;
    border: solid;
    border-width: thin;
    border-radius: 3px;
    border-color: #C0C0C0;
  }

  .movie-poster {
    width: 100%;
    margin-top: 2vh;
  }

`;