import styled from "styled-components";
import * as colors from "@styles/colors";
import modernLionImage from "@assets/image/modern_lion_logo.png";
import Divider from "../Divider";

const Container = styled.div`
  margin-top: 100px;
  background-color: ${colors.bgBlack};
  padding: 16px;
`;

const ModernLionLogoImage = styled.img`
  height: 14px;
  margin-bottom: 14px;
`;

const FooterTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;

const FooterText = styled.span`
  color: ${colors.textSecondary};
  font-size: 14px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  margin-top: 26px;
`;

const footerData = [
  { id: 1, key: "대표이사", value: "이두희" },
  { id: 2, key: "사업자 등록번호", value: "393-86-02511" },
  { id: 3, key: "주소", value: "서울 종로구 종로3길 17 디타워 16층" },
  { id: 4, key: "이메일", value: "modernlion@modernlion.io" },
  { id: 5, key: "전화번호", value: "02-6203-3222" },
];

export default function Footer() {
  return (
    <Container>
      <ModernLionLogoImage src={modernLionImage} />
      {footerData.map((data) => (
        <FooterTextWrapper key={data.id}>
          <FooterText>{data.key}</FooterText>
          <FooterText>{data.value}</FooterText>
        </FooterTextWrapper>
      ))}
      <FooterLinks>
        <FooterText>이용약관</FooterText>
        <Divider />
        <FooterText>개인정보처리방침</FooterText>
        <Divider />
        <FooterText>자주묻는질문</FooterText>
        <Divider />
      </FooterLinks>
    </Container>
  );
}
