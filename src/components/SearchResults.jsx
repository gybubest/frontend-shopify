import styled from 'styled-components'

function SearchResults({keyWord, movieList, onNominate}) {
    console.log(movieList)
    const showList = movieList.map((movie) => {
      return (
        <Movie>
          <li className="movie-box" key={movie.imdbID}>
            <div className="movie-info">
              <div className="movie-title">
                {movie.Title} ({movie.Year})
              </div> 
            <button className="nominate-btn" disabled={movie.nominated} onClick={() => onNominate(movie.imdbID)}>Nominate</button>
            </div>
            <div>
              <img className="movie-poster" src={movie.Poster}/>
            </div>
          </li>
        </Movie>
      )
    });
  
    return (
      <Wrapper>
        <h3>Results for "{keyWord}"</h3>
        <ul>
          {showList}
        </ul>
      </Wrapper>
    );
}

export default SearchResults;

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

  .nominate-btn {
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
