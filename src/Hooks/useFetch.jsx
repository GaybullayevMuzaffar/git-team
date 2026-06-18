import { useEffect, useState } from 'react';

function useFetch(url) {
  let [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [products]);
  
  
  return { products };
}

export { useFetch };