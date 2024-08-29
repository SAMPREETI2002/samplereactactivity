import React, { useState } from 'react';
import './App.css';

function App() {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (itemName && price && quantity) {
      const newItem = {
        itemName,
        price: parseFloat(price),
        quantity: parseInt(quantity),
      };
      setItems([...items, newItem]);
      setItemName('');
      setPrice('');
      setQuantity('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="App">
      <h1>Item List</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div className="item-list">
        <h2>Items</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.itemName} - ${item.price.toFixed(2)} x {item.quantity} = $
              {(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
