import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Header from "@components/atoms/templates/Header";
import TopBanner from "@components/atoms/templates/TopBanner";
import Events from "@components/atoms/templates/Events";
import ItemsOnSale from "@components/atoms/templates/ItemsOnSale";
import OpenseaTopCollections from "@components/atoms/templates/OpenseaTopCollections";
import OnBoarding from "@components/atoms/templates/OnBoarding";
import Footer from "@components/atoms/templates/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TopBanner />
      <Events />
      <ItemsOnSale />
      <OpenseaTopCollections />
      <OnBoarding />
      <Footer />
      </>
  );
}

export default App;
