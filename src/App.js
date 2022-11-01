import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Header from "@components/atoms/templates/Header";
import TopBanner from "@components/atoms/templates/TopBanner";
import Events from "@components/atoms/templates/Events";

const ItemsOnSale = styled.div`
  width: 100%;
  height: 394px;
  background-color: skyblue;
`;

const OpenseaTopCollections = styled.div`
  width: 100%;
  height: 648px;
  background-color: grey;
`;

const OnBoarding = styled.div`
  width: 100%;
  height: 415px;
  background-color: yellow;
`;

const Footer = styled.footer`
  width: 100%;
  height: 240px;
  background-color: floralwhite;
  margin-top: 100px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TopBanner />
      <Events />
      <ItemsOnSale>판매중인 아이템</ItemsOnSale>
      <OpenseaTopCollections>많이 거래된 컬렉션</OpenseaTopCollections>
      <OnBoarding>온보딩</OnBoarding>
      <Footer>푸터</Footer>
    </>
  );
}

export default App;
