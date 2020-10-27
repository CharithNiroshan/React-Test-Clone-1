import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";

// key=======a734b462bbf147bd5ac9089ad53215dd
// Example API Request===========
//https://api.themoviedb.org/3/movie/550?api_key=a734b462bbf147bd5ac9089ad53215dd

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixoriginals}
        islargerow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
