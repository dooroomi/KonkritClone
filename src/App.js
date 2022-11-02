import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Header from "@components/atoms/templates/Header";
import TopBanner from "@components/atoms/templates/TopBanner";
import Events from "@components/atoms/templates/Events";
import ItemsOnSale from "@components/atoms/templates/ItemsOnSale";
import OpenseaTopCollections from "@components/atoms/templates/OpenseaTopCollections";

const OnBoarding = styled.div`
  width: 100%;
  height: 415px;
  background-color: gray;
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
      <ItemsOnSale />
      <OpenseaTopCollections />
      <OnBoarding>온보딩</OnBoarding>
      <Footer>푸터</Footer>
    </>
  );
}

export default App;
