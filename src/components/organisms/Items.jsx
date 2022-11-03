import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import * as colors from "@styles/colors";
import HideScrollX from "@components/molecules/HideScrollX";
import Ether from "@components/atoms/Ether";

const CardWrapper = styled.div`
  border-radius: 16px;
  flex-shrink: 0;
  overflow: hidden; //CardWrapper 벗어나는 부분 가림
`;

const CardImage = styled.img`
  //img태그는 display가 inlineblock이라 밑에 살짝 줄이 생김 => block으로 바꿔주자
  width: 150px;
  height: 150px;
  object-fit: contain; //https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
  //cover 가로세로 큰곳에 맞춰 사진 잘림
  //contain 가로세로 작은곳에 맞춰 답 보임
  display: block;
`;

const InfoBox = styled.div`
  width: 150px;
  height: 73px;
  padding: 16px;
  background-color: ${colors.bgSecondary};
`;

const PriceBox = styled.div`
  padding: 8px 16px 16px 16px;
  width: 150px;
  height: 50px;
  background-color: ${colors.bgSecondary};
`;

const CollectionTitle = styled.div`
  font-size: 12px;
  color: ${colors.textSecondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; //뒤쪽에 띄어쓰기가 있어도 내려가지 않는다
`;

const Title = styled.div`
  font-family: MarkPro-Heavy;
  font-size: 14px;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PriceTitle = styled.div`
  font-size: 10px;
  color: ${colors.textSecondary};
  font-weight: 700;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
`;

const PriceText = styled.div`
  font-family: MarkPro-Heavy;
  font-size: 14px;
`;

export default function Items() {
  const [items, setItems] = useState({ items: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      setIsLoading(true);
      setIsError(false);
      try {
        const results = await axios("http://localhost:3000/api/items");
        setItems(results.data);
        setIsLoading(false);
      } catch {
        setIsError(true);
        setIsLoading(false);
      }
    }
    fetchItems();
  }, []);
  if (isLoading) return <div>로딩중</div>;
  if (isError) return <div>에러</div>;
  return (
    <HideScrollX>
      {items.items.map((item) => (
        <CardWrapper key={item.id}>
          <CardImage src={item.mediaUrl}></CardImage>
          <InfoBox>
            <CollectionTitle>{item.collectionTitle}</CollectionTitle>
            <Title>{item.title}</Title>
          </InfoBox>
          <PriceBox>
            <PriceTitle>판매가</PriceTitle>
            <PriceWrapper>
              <Ether />
              <PriceText>{item.price}</PriceText>
            </PriceWrapper>
          </PriceBox>
        </CardWrapper>
      ))}
    </HideScrollX>
  );
}
