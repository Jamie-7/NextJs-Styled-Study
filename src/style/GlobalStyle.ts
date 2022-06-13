import { createGlobalStyle } from "styled-components";

import { reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
   @font-face {
      font-family: "InkLipquid";
      font-weight: 200;
      src: url("/fonts/InkLipquidFonts.ttf") format("truetype");
   }
   ${reset}
   #__next {
      /* max-width: 1200px; */
      margin: 0 auto;
      position: relative;
   }
`;
