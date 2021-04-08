import css from "styled-jsx/css";
import theme from "./theme";

const { colors } = theme;
export default css.global`
  * {
    box-sizing: border-box;
  }
  *,
  *:focus {
    outline: none;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: "Open Sans", sans-serif;
    background-color: ${colors.background};
  }
  p {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
  }
  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 65px;
    letter-spacing: 0.4px;
    color: ${colors.text};
  }
  .h2 {
    font-weight: 700;
    font-size: 60px;
  }
  .h3 {
    font-weight: 700;
    font-size: 54px;
  }
  .h4 {
    font-weight: 700;
    font-size: 44px;
  }
  .h5 {
    font-weight: 600;
    font-size: 34px;
  }
  .button-text {
    font-weight: 700;
    font-size: 22px;
  }
  .caption-1 {
    font-weight: 600;
    font-size: 28px;
  }
  .caption-2 {
    font-weight: 600;
    font-size: 24px;
  }
  .caption-3 {
    font-weight: 600;
    font-size: 20px;
  }
  .small-text {
    font-size: 18px;
  }
  .footer-text-medium {
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    font-size: 18px;
  }
  .footer-text-regular {
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
  .color-text {
    color: ${colors.text};
  }
  .color-subtitle {
    color: ${colors.subtitle};
  }
  .green {
    color: ${colors.green};
  }
  .blue {
    color: ${colors.blue};
  }
  .text-center {
    text-align: center;
  }
  .page-layout {
    position: relative;
    width: 100%;
  }
  .m-0 {
    margin: 0;
  }
`;
