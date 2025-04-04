import { useState, useEffect } from "react";
import { fetchSalesSummary } from "../api/sales";

export const useSalesData = () => {
  const [salesData, setSalesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSalesData = async () => {
      setLoading(true);
      const data = await fetchSalesSummary();
      setSalesData(data);
      setLoading(false);
    };

    loadSalesData();
  }, []);

  return { salesData, loading };
};
