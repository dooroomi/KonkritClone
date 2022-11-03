import styled, { keyframes } from "styled-components";
import * as colors from "@styles/colors";
import SectionLayout from "@components/molecules/SectionLayout";
import HideScrollX from "@components/molecules/HideScrollX";
import EventCard from "@components/molecules/EventCard";

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

function Events() {
  return (
    <SectionLayout>
      <EventsTopWrapper>
        <GradientSectionTitle>KONKRIT ORIGINALS</GradientSectionTitle>
        <ShowAllText>이벤트 전체보기</ShowAllText>
      </EventsTopWrapper>
      <HideScrollX>
        {[1, 2, 3, 4].map((num) => (
          <EventCard key={num} />
        ))}
      </HideScrollX>
    </SectionLayout>
  );
}

export default Events;
