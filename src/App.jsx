import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Alert from 'react-bootstrap/Alert';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Nominations from './components/Nominations';

function App() {
  const apikey = process.env.REACT_APP_APIKEY;
  const [result, setResult] = useState({keyWord: '', movieList: []});
  const [nominations, setNominations] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleSearch = input => {
    
    const nominatedTitles = nominations.map(item => item.Title);
    const i = input.trim();

    if (i) {
      axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${i}&type=movie`)
      .then(res => {
        console.log(res.data)
        if (res.data.Response) {
          const filtered = res.data.Search.map(item => {
            return ({
              ...item,
              'nominated': nominatedTitles.includes(item.Title) ? true : false
            })
          });
    
          setResult({ keyWord: i, movieList: filtered });  
        }
      })
      .catch(error => console.log(error));
    }
  }; 

  const onNominate = id => {
    if (nominations.length < 5) {
      const newMovieList = result.movieList.map(item => {
        if (item.imdbID === id) {
          return {...item, 'nominated': true};
        }
        return item;
      });
  
      setResult({...result, movieList: newMovieList});
  
      const newNomination = result.movieList.filter(item => item.imdbID === id)[0];
      setNominations([...nominations, newNomination]);
    } else {
      setShowAlert(true);
    }

  };

  const onRemove = id => {
    const newNominationList = nominations.filter(item => item.imdbID !== id);
    setNominations(newNominationList);

    const newMovieList = result.movieList.map(item => {
      if (item.imdbID === id) {
        return {...item, 'nominated': false};
      }
      return item;
    });

    setResult({...result, movieList: newMovieList});
  };

  return (
    <Wrapper>
      <Header>
          <h1>
            The Shoppies
          </h1>
          <SearchBar
            handleSearch={handleSearch}
          />
      </Header>
      <Main>
          {showAlert && 
            <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
              <Alert.Heading>You've already selected 5 nominees!</Alert.Heading>
            </Alert>
          }
        <MovieContainer>
          {result.movieList.length > 0 && 
            <SearchResults
              keyWord={result.keyWord}
              movieList={result.movieList}
              onNominate={onNominate}
            />
          }
          {nominations.length > 0 &&
            <Nominations
              movieList={nominations}
              onRemove={onRemove}
            />
          }
        </MovieContainer>
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  margin: 5%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4vh;
`;


const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;