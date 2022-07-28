import styled from "styled-components";
import ProductList from "./Components/ProdectList";

const Wrapper = styled.div`
  .products {
    // display: grid;
    // gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

const ProductPage = () => {
  return (
    <main>
      <Wrapper className="page">
        <div className="section-center products">
          {/* <Filters /> */}
          <div>
            {/* <Sort /> */}
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default ProductPage;
