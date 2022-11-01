import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import * as colors from "@styles/colors"; //colors안에 모든 변수를 불러오는데 colors라는 오브젝트안에 불러온다

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video{
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto;
    color: ${colors.textPrimary};
    font-weight: 400;
  }  

  body {
    background-color: ${colors.bgPrimary};
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
