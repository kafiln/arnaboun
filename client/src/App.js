import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => console.log(res.data))
      .catch((err) => console.log("no"));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Do we ?
      </header>
    </div>
  );
}

export default App;
