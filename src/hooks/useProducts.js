import { useState, useEffect } from "react";
import { fetchProducts, addProduct, updateProduct, deleteProduct } from "../api/products";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (product) => {
    try {
      await addProduct(product);
      loadProducts();
    } catch (err) {
      console.error(err);
    }
  };

  const editProduct = async (id, product) => {
    try {
      await updateProduct(id, product);
      loadProducts();
    } catch (err) {
      console.error(err);
    }
  };

  const removeProduct = async (id) => {
    try {
      await deleteProduct(id);
      loadProducts();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return { products, loading, error, createProduct, editProduct, removeProduct };
};

export default useProducts;
