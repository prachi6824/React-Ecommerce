import React, { useState, useEffect } from "react";
import { fetchProducts, deleteProduct } from "../../api/products";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TablePagination from "./TablePagination";
import InputField from "../../components/Form/InputField";
import styles from "./DynamicTable.module.css";
import Button from "../../components/Button/Button";

const DynamicTable = ({ onEdit, filtersConfig, columns, buttonLabel, buttonClass, onButtonClick,  }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const response = await fetchProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      loadProducts();
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product) =>
    Object.entries(filters).every(([key, value]) =>
      !value || product[key]?.toString().toLowerCase().includes(value.toLowerCase())
    )
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className={styles.tableContainer}>
      <div className={styles.addProductContainer}>
      <Button label={buttonLabel} className={buttonClass} onClick={onButtonClick} />
      </div>
      <div className={styles.filters}>
        {filtersConfig.map((filter) => (
          <InputField
            key={filter.name}
            label={filter.label}
            type={filter.type || "text"}
            name={filter.name}
            value={filters[filter.name] || ""}
            onChange={handleFilterChange}
            options={filter.options || []}
          />
        ))}
      </div>

      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <>
          <table className={styles.table}>
            <TableHeader columns={columns} />
            <TableBody data={currentProducts} onEdit={onEdit} onDelete={handleDelete} />
          </table>
          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default DynamicTable;
