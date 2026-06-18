import { useState } from 'react';
import "./App.css";
import { useFetch } from './Hooks/useFetch';

function App() {
  let [url, setUrl] = useState("https://dummyjson.com/products");
  let { products } = useFetch(url);

  return (
    <div>
      <h1>Products</h1>
      <div className='categories'>
        <button className='categories-btn' 
          onClick={() => setUrl("https://dummyjson.com/products")}> All
        </button>
        <button className='categories-btn' 
          onClick={() => setUrl("https://dummyjson.com/products/category/beauty")}> Beauty
        </button>
        <button className='categories-btn' 
          onClick={() => setUrl("https://dummyjson.com/products/category/fragrances")}> Fragrances
        </button>
        <button className='categories-btn' 
          onClick={() => setUrl("https://dummyjson.com/products/category/furniture")}>  Furniture
        </button>
        <button className='categories-btn' 
          onClick={() => setUrl("https://dummyjson.com/products/category/groceries")}>  Groceries
        </button>
      </div>
      <div className='products'>
        {products.map((item) => {
          return (
            <div className='product-card' key={item.id}>
              <img className='product-img' src={item.thumbnail} alt="" />
              <h3>{item.title}</h3>
              <span>{item.description}</span>
              <b>${item.price}</b>
              <button className='product-btn'>Add</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App;