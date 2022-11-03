import React from 'react'
import styled from 'styled-components';
import * as colors from "@styles/colors";

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

export default function EventCard() {
  return (
    <div>
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
  )
}
