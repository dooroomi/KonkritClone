import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;

  //자식이 부모보다 길어지면 가로로 스크롤 생김
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none; //스크롤 안보이게
  }
  //밑에는 크롬말고에도 적용..?
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default function HideScrollX({children}) {
  return (
    <Container>{children}</Container>
  )
}
