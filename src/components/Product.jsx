// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { AppContext } from "../App";
// export default function Product() {
//   const API_URL = import.meta.env.VITE_API_URL;
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState();
//   const { user, cart, setCart } = useContext(AppContext);
//   const fetchProducts = async () => {
//     try {
//       const url = `${API_URL}/api/products/all`;
//       const result = await axios.get(url);
//       setProducts(result.data.products);
//     } catch (err) {
//       console.log(err);
//       setError("Something went wrong");
//     }
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const addToCart = (product) => {
//     const found = cart.find((item) => item._id === product._id);
//     if (!found) {
//       product.qty = 1;
//       setCart([...cart, product]);
//     }
//   };
//   return (
//     <div>
//       {products &&
//         products.map((product) => (
//           <div key={product._id}>
//             <img src={product.imgUrl} width={100}/>
//             <h3>{product.productName}</h3>
//             <p>{product.description}</p>
//             <h4>{product.price}</h4>
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//     </div>
//   );
// }



import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import "../styles/Product.css"; // ✅ LINK THE CSS

export default function Product() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const { user, cart, setCart } = useContext(AppContext);

  const fetchProducts = async () => {
    try {
      const url = `${API_URL}/api/products/all`;
      const result = await axios.get(url);
      setProducts(result.data.products);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const found = cart.find((item) => item._id === product._id);
    if (!found) {
      product.qty = 1;
      setCart([...cart, product]);
    }
  };

  return (
    <div className="product-page">
      <h2 className="product-title">Our Products</h2>
      {error && <p className="error">{error}</p>}

      <div className="product-grid">
        {products &&
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.imgUrl} alt={product.productName} />
              <h3>{product.productName}</h3>
              <p>{product.description}</p>
              <h4>${product.price}</h4>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
}
