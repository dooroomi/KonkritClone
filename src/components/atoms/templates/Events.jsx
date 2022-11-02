import styled, { keyframes } from "styled-components";
import * as colors from "@styles/colors";
import SectionLayout from "@components/molecules/SectionLayout";
import HideScrollX from "@components/molecules/HideScrollX";

const EventsTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//에니메이션 효과 만들기
const shine = keyframes`
  from{
    background-position: 0%;
    /* opacity: 0; */
  }
  to{
    background-position: 200%;
    /* opacity: 1; */
  }
`;

const GradientSectionTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  background: ${colors.textGradient};

  background-clip: text;

  background-size: 200% auto;
  background-position: 200%;
  animation: ${shine} 4s linear infinite; //에니메이션: 효과 시간 속도 언제까지

  -webkit-background-clip: text;
  //배경색으로 글자 덮기
  -webkit-text-fill-color: transparent;
  //글자색 흰->투명으로
`;

const ShowAllText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${colors.textSecondary};
`;

const EventCardWrapper = styled.div`
  width: 320px;
  height: 200px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.cardGradient};
  overflow: hidden; //이미지 넣을떄 튀어나온거 가려주기
  flex-shrink: 0;
`;

const EventTitles = styled.div`
  margin-top: 16px;
`;

const CountDownWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const EachCounterWrapper = styled.div`
  display: flex;
`;

const CountText = styled.div`
  font-family: MarkPro-Heavy;
  font-size: 36px;
  line-height: 45.63px;
  align-self: flex-start; //자식들이 선택 가능
`;

const UniText = styled.div`
  font-size: 18px;
  line-height: 27px;
  align-self: flex-end; //자식들이 선택 가능
`;

const EventSubTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${colors.textSecondary};
`;

const EventTitle = styled.div`
  margin-top: 4px;
  font-weight: 700;
  font-size: 16px;
`;

function Events() {
  return (
    <SectionLayout>
      <EventsTopWrapper>
        <GradientSectionTitle>KONKRIT ORIGINALS</GradientSectionTitle>
        <ShowAllText>이벤트 전체보기</ShowAllText>
      </EventsTopWrapper>
      <HideScrollX>
        {[1, 2, 3, 4].map((num) => (
          <div key={num}>
            <EventCardWrapper>
              <CountDownWrapper>
                <EachCounterWrapper>
                  <CountText>08</CountText>
                  <UniText>일</UniText>
                </EachCounterWrapper>
                <EachCounterWrapper>
                  <CountText>07</CountText>
                  <UniText>시</UniText>
                </EachCounterWrapper>
                <EachCounterWrapper>
                  <CountText>06</CountText>
                  <UniText>분</UniText>
                </EachCounterWrapper>
                <EachCounterWrapper>
                  <CountText>05</CountText>
                  <UniText>초</UniText>
                </EachCounterWrapper>
              </CountDownWrapper>
            </EventCardWrapper>
            <EventTitles>
              <EventSubTitle>Medistock</EventSubTitle>
              <EventTitle>메디소사이어티 NFT 프로젝트</EventTitle>
            </EventTitles>
          </div>
        ))}
      </HideScrollX>
    </SectionLayout>
  );
}

export default Events;
