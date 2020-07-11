import React from "react";

import Row from "./Row/Row";
import requests from "./requests";
import Banner from "./Row/Banner/Banner";
import Navbar from "./navbar/Navbar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Vinnie Original
        "
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title=" Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title=" Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title=" Action Movie" fetchUrl={requests.fetchActionMovie} />
      <Row title=" Comedy Movie" fetchUrl={requests.fetchComedyMovie} />
      <Row title=" Horror Movie " fetchUrl={requests.fetchHorroMovie} />
      <Row title=" Romance Movie " fetchUrl={requests.fetchRomanceMovie} />
      <Row title=" Documenteries " fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
