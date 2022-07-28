import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  gap: 5rem 5.5rem;

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

export const Img = styled.img`
  height: 175px;
`;
