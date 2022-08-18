import axios from "axios";
import React, { useEffect, useState } from "react";
import { green } from "../../styles/colors";
import { MainTitle } from "../GlobalPresencePage/StyledComponent";
import { TitleColor } from "../shared/StyledComponents";
import * as S from "./StyledComponents";

const ProductPage = () => {
  const [topic, setTopic] = useState<string>("Anti Ulcerant");
  const [products, setproducts] = useState<Array<any>>([]);
  const [topicList, setTopicList] = useState<Array<string>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
          // setTopic(response.data.records[0]["fields"]["type"]);
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
    itemContainer.length && setIsLoading(false);
  }, [products]);

  if (isLoading)
    return (
      <S.SpinnerWrapper>
        <S.Spinner />
      </S.SpinnerWrapper>
    );

  return (
    <main>
      <div className="section-center">
        <section>
          {!isLoading && topicList.length > 0 && (
            <div>
              <MainTitle>
                Our Products<TitleColor>.</TitleColor>
              </MainTitle>
              <S.ChipContainer>
                <span>
                  <b>Categoty :</b>
                </span>{" "}
                {topicList.sort().map((item: string) => (
                  <S.Chip
                    key={item}
                    style={{
                      backgroundColor: `${
                        item === topic ? green : "transparent"
                      }`,
                      color: `${item === topic ? "#fff" : "#000"}`,
                    }}
                    onClick={() => setTopic(item)}
                  >
                    {item}
                  </S.Chip>
                ))}
              </S.ChipContainer>

              <hr />

              <S.Table>
                <S.Th>No</S.Th>
                <S.Th>Name</S.Th>
                <S.Th>Contents</S.Th>
                <S.Th>Packing</S.Th>

                {products
                  .filter((item: any) => item.type === topic)
                  .map(({ name, contents, packing }: any, index: number) => (
                    <S.Tr key={name + index}>
                      <S.Td>{index + 1}</S.Td>
                      <S.Td style={{ textAlign: "center" }}>{name}</S.Td>
                      <S.Td>{contents}</S.Td>
                      <S.Td>{packing}</S.Td>
                    </S.Tr>
                  ))}
              </S.Table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ProductPage;
