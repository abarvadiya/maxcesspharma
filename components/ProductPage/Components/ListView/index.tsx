//component
import styled from "styled-components";

//utils
import { formatPrice } from "../../../../utils/helpers";

// Next
import Link from "next/link";
import { useEffect, useState } from "react";

export interface Fields {
  product_link: string;
  image_link: string;
  brand_name: string;
  status: string;
  description: string;
  generic_name: string;
}

export interface ProductI {
  id: string;
  createdTime: string;
  fields: Fields;
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

const ListView = ({ products }: any) => {
  // const [products, setProducts] = useState<Array<ProductI>>([]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("products") as any);
  //   items && setProducts(items);
  // }, []);

  return (
    <Wrapper>
      {products.map(({ id, fields }: ProductI) => {
        const { image_link, generic_name, status, description } = fields;
        return (
          <article key={id}>
            <img
              src={`https://gateway.pinata.cloud/ipfs/${image_link}`}
              alt={generic_name}
            />
            <div>
              <h4>{generic_name}</h4>
              <h5>{status}</h5>
              {/* <h5 className="price">{formatPrice(price)}</h5> */}
              <p>{description.substring(0, 150)}...</p>
              <Link href={`/products/${id}`}>
                <span className="btn">BUY NOW</span>
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

export default ListView;
