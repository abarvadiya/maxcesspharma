import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProductI } from "../ListView";
import Product from "../Product";

const GridView = () => {
  const [products, setProducts] = useState<Array<ProductI>>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("products") as any);
    items && setProducts(items);
  }, []);

  if (products.length < 1) {
    return <h5 style={{ textTransform: "none" }}>Sorry, no products found.</h5>;
  }

  return (
    <Wrapper>
      <div className="products-container">
        {products.map(({ id, fields }: any) => {
          return <Product key={id} {...fields} id={id} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 5rem 5.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
