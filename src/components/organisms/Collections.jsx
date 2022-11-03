import styled from "styled-components";
import * as colors from "@styles/colors";
import Ether from "@components/atoms/Ether";

const CollectionList = styled.ul`
  margin-top: 16px;
`;

const CollectionItem = styled.li`
  padding: 12px 16px;
  border-bottom: 1px solid ${colors.borderSecondary};
`;

const CollectionInfo = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 24px;
`;

const RankText = styled.div`
  font-family: MarkPro-Heavy;
  font-size: 14px;
  color: ${colors.textYellow};
`;

const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-left: 24px;
  background-color: ${colors.bgSecondary}; //img 작을떄 은은한 배경응로
  object-fit: contain;
`;

const CollectionName = styled.span`
  font-weight: 500;
  margin-left: 12px;
  font-size: 14px;
`;
const CollectionPriceInfo = styled.div`
  height: 60px;
  padding: 0px 28px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

const NormalText = styled.span`
  font-size: 12px;
  color: ${colors.textSecondary};
`;

const SpanDoubleWrapper = styled.div`
  /* grid-column: 2 / 4; */
  grid-column: span 2;
`;

const PriceWrapper = styled.div`
  display: flex;
`;

const NumberText = styled(NormalText)`
  color: ${colors.textGreen};
`;

const PriceText = styled.span`
  font-family: MarkPro-Heavy;
  font-size: 14px;
  margin-left: 4px;
`;

export default function Collections() {
  return (
    <CollectionList>
      {[1, 2, 3, 4, 5].map((rank) => (
        <CollectionItem key={rank}>
          <CollectionInfo>
            <RankText>{rank}</RankText>
            <Thumbnail src="https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0x209e639a0ec166ac7a1a4ba41968fa967db30221.png" />
            <CollectionName>Genuine Undead</CollectionName>
          </CollectionInfo>
          <CollectionPriceInfo>
            <NormalText>최저가</NormalText>
            <SpanDoubleWrapper>
              <PriceWrapper>
                <Ether />
                <PriceText>0.01</PriceText>
              </PriceWrapper>
            </SpanDoubleWrapper>
            <NormalText>24시간 거래량</NormalText>
            <PriceWrapper>
              <Ether />
              <PriceText>0.01</PriceText>
            </PriceWrapper>
            <NumberText>+5.7%</NumberText>
          </CollectionPriceInfo>
        </CollectionItem>
      ))}
    </CollectionList>
  );
}
