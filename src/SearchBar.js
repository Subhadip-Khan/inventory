import { useState } from "react";

function SearchBar(props) {
    const [name, setName] = useState("");
    const [maxPrice, setMaxPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    
    const searchButtonPressed = () => {
        props.updateSearchParams({
            name: name,
            maxPrice: maxPrice,
            type: type,
            brand: brand,
        });
        
    }
    const reset = () => {
        setName("");
        setMaxPrice(0);
        setType("");
        setBrand("");
        searchButtonPressed();
    }
        
    return (
      <div className="container">
        <div>
          <h2 className="">Search for an item</h2>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="name-field">Name: </label>
            <input
              type="text"
              id="name-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            ></input>
          </div>
          <div className="col">
            <label htmlFor="maxprice-field">Max Price: </label>
            <input
              type="number"
              id="maxprice-field"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="form-control"
            ></input>
          </div>
          <div className="col">
            <label htmlFor="type-field">Type: </label>
            <input
              type="text"
              id="type-field"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="form-control"
            ></input>
          </div>
          <div className="col">
            <label htmlFor="brand-field">Brand: </label>
            <input
              type="text"
              id="brand-field"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="form-control"
            ></input>
          </div>
        </div>
        <br />

        <div className="row mt-3">
          <div className="col-3"></div>
          <button
            type="button"
            onClick={searchButtonPressed}
            className="btn btn-primary col-4"
          >
            Search
          </button>
          <div className="col-1"></div>
          <button
            type="button"
            onClick={reset}
            className="btn btn-primary col-4"
          >
            Reset
          </button>
        </div>
      </div>
    );
}

export default SearchBar;