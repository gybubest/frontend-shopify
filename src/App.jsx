import React, {useState} from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'
import './App.css';
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
      });
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
    <div className="App">
      <header className="App-header">
        <h1>
          The Shoppies
        </h1>
      {/* </header>
      <body> */}
        {showAlert && 
          <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
            <Alert.Heading>You've already selected 5 nominees!</Alert.Heading>
          </Alert>
        }
        <SearchBar
          handleSearch={handleSearch}
        />
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
      {/* </body> */}
      </header>
    </div>
  );
}

export default App;
