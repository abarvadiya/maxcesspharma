//component
import styled from "styled-components";

import { FaSearch } from "react-icons/fa";

//utils
import { formatPrice } from "../../../../utils/helpers";

// Next
import Link from "next/link";

const Product = ({ image_link, generic_name, brand_name, id }: any) => {
  return (
    <Wrapper>
      <div className="container">
        <img
          src={`https://i0.wp.com/gateway.pinata.cloud/ipfs/${image_link}`}
          alt={generic_name}
        />
        <Link href={`/products/${id}`}>
          <FaSearch className="link" />
        </Link>
      </div>
      <footer>
        <h5>{generic_name}</h5>
        <p>{formatPrice(brand_name)}</p>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
export default Product;
