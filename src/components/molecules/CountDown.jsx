import React from "react";
import styled from "styled-components";

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

export default function CountDown() {
  return (
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
  );
}
