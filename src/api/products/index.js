import axios from "axios";
import { PRODUCT_API } from "../../utils/constants";

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(PRODUCT_API);
    console.log("api response:",response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Add a new product
export const addProduct = async (productData) => {
  try {
    const response = await axios.post(PRODUCT_API, productData);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

// Update a product
export const updateProduct = async (id, updatedData) => {
  try {
    const response = await axios.put(`${PRODUCT_API}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Delete a product
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${PRODUCT_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
