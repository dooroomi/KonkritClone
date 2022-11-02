import styled from "styled-components";
import * as colors from "@styles/colors";
import React from "react";

const SectionTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const ShowAllText = styled.span`
  font-size: 14px;
  color: ${colors.textSecondary};
  margin-right: 4px;
`;

function SectionTop({ title, showAll }) {
  return (
    <SectionTopWrapper>
      <SectionTitle>{title}</SectionTitle>
      <ShowAllText>{showAll}</ShowAllText>
    </SectionTopWrapper>
  );
}

export default SectionTop;
