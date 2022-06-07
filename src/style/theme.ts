import { css, IColors, IFonts } from "styled-components";

const colors: IColors = {
  Gray900: "#17191c",
  Gray800: "#32353a",
  Gray700: "#515459",
  Gray600: "#747880",
  Gray500: "#8b929c",
  Gray400: "#aaaeb6",
  Gray300: "#c9ced4",
  Gray200: "#eceff2",
  Gray100: "#f5f7f8",
};

const fonts: IFonts = {
  Head1: css`
    font-size: 20px;
    line-height: 30px;
    font-weight: 700;
    color: ${({ theme: { colors } }) => colors.Gray900};
  `,
  Head2: css`
    font-size: 18px;
    line-height: 27px;
    font-weight: 700;
    color: ${({ theme: { colors } }) => colors.Gray900};
  `,
  SubHead1: css`
    font-size: 18px;
    line-height: 29px;
    font-weight: 600;
    color: ${({ theme: { colors } }) => colors.Gray900};
  `,
  SubHead2: css`
    font-size: 16px;
    line-height: 26px;
    font-weight: 600;
    color: ${({ theme: { colors } }) => colors.Gray900};
  `,
  Body1: css`
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
    color: ${({ theme: { colors } }) => colors.Gray900};
  `,
  Body2: css`
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
    color: ${({ theme: { colors } }) => colors.Gray900};
  `,
  Body3: css`
    font-size: 12px;
    line-height: 19px;
    font-weight: 500;
    color: ${({ theme: { colors } }) => colors.Gray900};
  `,
};

export const theme = {
  colors,
  fonts,
};
