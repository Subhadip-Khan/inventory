import "./App.css";
import SearchBar from "./SearchBar";
import { useState } from "react";
import AddItem from "./AddItem"
import ItemsDisplay from "./ItemsDisplay";

function App() {

  const [filter, setFilter] = useState({});
  const updateFilter = (searchParams) => {
    setFilter(searchParams);
  }

  const [data, setData] = useState({ items: [] });
  const addItemToData = (item) => {
    let items = data["items"];
    items.id = items.length;
    items.push(item);
    setData({ items: items });
    console.log(data);
  }

  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilter} />
      <ItemsDisplay items={data["items"]} />
      <AddItem addItem={addItemToData} />
    </div>
  );
}

export default App;
