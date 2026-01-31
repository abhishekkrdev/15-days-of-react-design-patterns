import { useState, useEffect } from "react";
import axios from "axios";
import ProductListPresenter from "./ProductListPresenter";

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/products/`,
      );
      setProducts(response.data);
    } catch (err) {
      setError("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <ProductListPresenter products={products} loading={loading} error={error} />
  );
};

export default ProductListContainer;
