import axios from "axios";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { green, rose } from "../../styles/colors";
import { MainTitle } from "../GlobalPresencePage/StyledComponent";
import { TitleColor } from "../shared/StyledComponents";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px 20px;
`;

const Th = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: ${green};
  color: white;

  border: 1px solid #ddd;
  padding: 8px;
`;

const Tr = styled.tr`
  &:hover {
    background-color: #ddd;
  }
`;

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 13px 0px;
  text-transform: capitalize;
`;

const Chip = styled.p`
  padding: 1px 15px;
  border-radius: 300px;
  cursor: pointer;
  font-size: 13px;
  border: solid 2px ${rose};

  &:hover {
    background-color: #d6004a;
  }

  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const Spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.h1`
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: ${rose};
  animation: ${Spinner};
  animation-iteration-count: infinite;
`;

const ProductList = () => {
  const [topic, setTopic] = useState<string>("Anti Ulcerant");
  const [products, setproducts] = useState<Array<any>>([]);
  const [topicList, setTopicList] = useState<Array<string>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    let data = localStorage.getItem("data");
    if (!data) {
      try {
        const response = await axios.get(
          "https://api.airtable.com/v0/apphIEQTHkqMh8MRI/products",
          {
            headers: {
              Authorization: "Bearer keyMymW7eT0XyeEbE",
            },
          }
        );
        if (response) {
          setproducts(
            response.data.records.map((product: any) => product.fields)
          );
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

  useEffect(() => {
    let itemContainer: Array<string> = [];

    products &&
      products.forEach(({ type }) => {
        !itemContainer.includes(type) && itemContainer.push(type);
      });
    setTopicList(itemContainer);
    setIsLoading(false);
  }, [products]);

  return isLoading ? (
    <Loader />
  ) : (
    topicList.length > 0 && (
      <section>
        <MainTitle>
          Our Global Presence<TitleColor>.</TitleColor>
        </MainTitle>
        <ChipContainer>
          {topicList.sort().map((item: string) => (
            <Chip
              style={{
                backgroundColor: `${item === topic ? green : "transparent"}`,
              }}
              onClick={() => setTopic(item)}
            >
              {item}
            </Chip>
          ))}
        </ChipContainer>

        <Table>
          <Th>No</Th>
          <Th>Name</Th>
          <Th>Contents</Th>
          <Th>Packing</Th>

          {products
            .filter((item: any) => item.type === topic)
            .map(({ name, contents, packing }: any, index: number) => (
              <Tr key={name + index}>
                <Td>{index + 1}</Td>
                <Td>{name}</Td>
                <Td>{contents}</Td>
                <Td>{packing}</Td>
              </Tr>
            ))}
        </Table>
      </section>
    )
  );
};

export default ProductList;
