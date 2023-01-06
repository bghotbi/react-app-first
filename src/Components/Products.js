import { useEffect, useState } from "react";
import { Product } from "./Product";

const ProductList =  ({items}) => {
    console.log(items,':Items');
 return(
    <>
    {items.data.allLifts.map((item) => (
        <Product key={item.name} name={item.name} status={item.status} 
        capacity={item.capacity} elevation={item.elevationGain}/>
    ))} 
    </>
 );
}

export const Products = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const query = `
    query {
      allLifts {
        name
        status
        capacity
        elevationGain
      }
    }
    `;
  
    const opts = {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ query })
      };
  
    useEffect(() =>{
      setLoading(true)
      fetch(`https://snowtooth.moonhighway.com/`, opts)
      .then((resp) => resp.json())
      .then(setProducts)
      .then(() => setLoading(false))
      .catch(setError)
      },[]);
      
    useEffect(() =>{
       console.log(products, 'data');
    },[products])
  
    return(
        <>
            <h2>Current Products:</h2>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error: {error}</h1>}
            {products && <ProductList items={products}/>}     
        </> 
    );
}
