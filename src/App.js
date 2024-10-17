import "./App.css";
import SearchBar from "./SearchBar";
import { useState } from "react";

function App() {

  const [data, setData] = useState({});
  const updateData = (searchParams) => {
    setData(searchParams);
  }

  return (
    <div className="App">
      <SearchBar callback={updateData} />
      <p>{ data.data }</p>
    </div>
  );
}

export default App;
