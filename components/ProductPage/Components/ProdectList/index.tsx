import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useProductsContext } from "../../../../context/products_context";
import GridView from "../GridView";
import ListView from "../ListView";
import Sort from "../Sort";
const ProductList = () => {
  // const { filtered_products, grid_view } = useFilterContext();
  // const data = useProductsContext();

  const [products, setproducts] = useState<Array<any>>([]);
  const [gridView, setGridView] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const fetchProducts = async () => {
    let data = localStorage.getItem("data");
    if (!data) {
      try {
        const response = await axios.get(
          "https://api.airtable.com/v0/appq48Qe8LgxSLCoc/product",
          {
            headers: {
              Authorization: "Bearer keyMymW7eT0XyeEbE",
            },
          }
        );
        if (response) {
          setIsLoading(false);
          setproducts(response.data.records);
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchProducts();
  }, []);

  return (
    <section>
      <Sort
        productLength={products.length}
        setGridView={() => setGridView(!gridView)}
        gridView={gridView}
      />
      {isLoading ? (
        <h1 className="loading" />
      ) : gridView ? (
        <GridView />
      ) : (
        <ListView />
      )}
    </section>
  );
};

export default ProductList;
