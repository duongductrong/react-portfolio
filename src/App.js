import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
// import Loading from "./components/Dumb/Loading/Loading";
import Navbar from "./components/Dumb/Navbar/Navbar";
import RouterRoot from "./router";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Navbar />
        <RouterRoot />
      </div>

      {/* <Loading /> */}
    </BrowserRouter>
  );
}

export default App;
