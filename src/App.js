import './App.css';
import requests from './request'
import Row from './components/Row';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <h1 style={{color:"red"}}>Netflix</h1>
      <Row isPoster={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Movie" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated Movie" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
