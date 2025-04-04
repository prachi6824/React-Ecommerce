import axios from "axios";

export const fetchSalesSummary = async () => {
  try {
    const response = await axios.get("http://localhost:5000/sales-summary");
    return response.data;
  } catch (error) {
    console.error("Error fetching sales summary:", error);
    return null;
  }
};