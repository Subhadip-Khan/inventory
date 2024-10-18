import { useState } from "react";

function AddItem(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    
    const addItemButtonPressed = () => {
        props.addItem({
            name: name,
            price: price,
            type: type,
            brand: brand,
        });
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
    }
        
    return (
      <div className="container">
        <div className="row mt-3">
          <h2>Add an item</h2>
        </div>
        <div className="row">
          <div className="">
            <label htmlFor="name-field">Name: </label>
            <input
              type="text"
              id="name-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            ></input>
          </div>

          <div className="">
            <label htmlFor="price-field">Price: </label>
            <input
              type="number"
              id="price-field"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
            ></input>
          </div>

          <div className="">
            <label htmlFor="type-field">Type: </label>
            <input
              type="text"
              id="type-field"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="form-control"
            ></input>
          </div>

          <div className="">
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
        <div className="row mt-3">
          <div className="col-4"></div>
          <button
            type="button"
            onClick={addItemButtonPressed}
            className="btn btn-primary col-4"
          >
            Add Item
          </button>
        </div>
      </div>
    );
}

export default AddItem;