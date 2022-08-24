// Components
import { TitleColor } from "../shared/StyledComponents";
import * as S from "./StyledComponent";
import * as MS from "../ProductPage/StyledComponents";
import Image from "../shared/NewImage";

const GlobalPresencePage = () => {
  const countyList = [
    { region: "Africa", country: "Kenya", totalProducts: 10 },
    { region: "Africa", country: "Uganda", totalProducts: 23 },
    { region: "Africa", country: "Mauritius", totalProducts: 10 },
    { region: "Africa", country: "Rwanda", totalProducts: 4 },
    { region: "Africa", country: "Tanzania", totalProducts: 10 },
    { region: "Africa", country: "Ghana", totalProducts: 6 },
    { region: "Africa", country: "Zimbabwe", totalProducts: 7 },
    { region: "Africa", country: "Zambia", totalProducts: 8 },
    { region: "Africa", country: "Malawi", totalProducts: 9 },
    { region: "Asia", country: "Singapore", totalProducts: 10 },
    { region: "Asia", country: "Cambodia", totalProducts: 11 },
    { region: "Asia", country: "Myanmar", totalProducts: 10 },
    { region: "Asia", country: "Nepal", totalProducts: 23 },
    { region: "Asia", country: "Philippines", totalProducts: 10 },
    { region: "Asia", country: "Vietnam", totalProducts: 4 },
    { region: "Asia", country: "Malaysia", totalProducts: 10 },
    { region: "CIS", country: "Ukraine", totalProducts: 6 },
    { region: "Europe", country: "Germany", totalProducts: 7 },
  ];

  return (
    <>
      <S.DetailsWrapper>
        <S.MainTitle>
          Our Global Presence<TitleColor>.</TitleColor>
        </S.MainTitle>
        <S.Text>
          Global Economy is expanding, increasing opportunities and opening
          doors to new markets that have never explored before. With
          opportunity, the increased chances of facing the competition increase.
        </S.Text>
        <S.Text>
          To make more impact on the global economy, we are striving hard to
          expand more with a clear intention to grow and improve world&apos;s
          economy. Want to know more about our global presence? Mail us at
          &nbsp;
          <a href="mailto:maxcesspharma@gmail.com">maxcesspharma@gmail.com</a>
        </S.Text>
      </S.DetailsWrapper>
      <S.ImageWrapper>
        <Image
          src="/imgs/map_expand.png"
          objectPosition="center"
          alt="maxcess pharma global presence"
          height={40}
        />
      </S.ImageWrapper>

      <S.CountyTable>
        <MS.Table>
          <tbody>
            <tr>
              <MS.Th>No</MS.Th>
              <MS.Th>Region</MS.Th>
              <MS.Th>Country</MS.Th>
              <MS.Th>
                Total number of Products Registered and under Registration
              </MS.Th>
            </tr>
            {countyList.map(
              ({ region, country, totalProducts }: any, index: number) => (
                <MS.Tr key={country}>
                  <MS.Td>{index + 1}</MS.Td>
                  <MS.Td>{region}</MS.Td>
                  <MS.Td>{country}</MS.Td>
                  <MS.Td>{totalProducts}</MS.Td>
                </MS.Tr>
              )
            )}
          </tbody>
        </MS.Table>
      </S.CountyTable>
    </>
  );
};

export default GlobalPresencePage;
