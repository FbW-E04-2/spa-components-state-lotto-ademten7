import "./App.scss";
import React from "react";
import Lotto from "./Lotto";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Lotto header="Lotto 6/49" para="Generating lucky numbers" />
    </div>
  );
}

export default App;
