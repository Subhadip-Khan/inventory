import { useState } from "react";

function SearchBar(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    const searchButtonPressed = () => {
        props.callback({ data: "deta" });
    }
        
    return (
        <div>
            <form>
                <h2>Search for an item</h2>
                <label htmlFor="name-field">Name: </label>
                <input type="text" id="name-field" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor="price-field">Price: </label>
                <input type="number" id="price-field" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                <label htmlFor="type-field">Type: </label>
                <input type="text" id="type-field" value={type} onChange={(e) => setType(e.target.value)}></input>
                <label htmlFor="brand-field">Brand: </label>
                <input type="text" id="brand-field" value={brand} onChange={(e) => setBrand(e.target.value)}></input>
                <button type="button" onClick={searchButtonPressed}>Search</button>
            </form>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <p>Type: {type}</p>
            <p>Brand: {brand}</p>
        </div>
    );
}

export default SearchBar;