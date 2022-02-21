import classes from"./App.module.css";
import Row from "./Row.js";
import Banner from './Banner.js'
import request from "./Request";
import Navbar from './Navbar.js'
function App() {
  return (
    <div className={classes.app}>
      <Navbar/>
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Action Movies" fetchUrl={request.fetchActionsMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries " fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
