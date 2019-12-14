import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "FOO";
  src: url("/fonts/foo.woff2");
}
@font-face {
  font-family: "Overpass";
  src: url("/fonts/Overpass_Bold.woff.ttf");
}
@font-face {
  font-family: "splatoon";
  src: url("/fonts/splatoon.woff2");
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  height: 100%;
  font-size: 16px;
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  line-height: 1.3;
  margin: 0;
  background: url("/images/bg/splatoon-one-blob-black20.png") repeat top left;
  height: 100%;
}
`

const HidenSm = styled.div`
  @media screen and (max-width: 991px) {
    display: none !important;
  }
`

const MainContainer = styled.div`
  @media screen and (min-width: 992px) {
    width: 970px;
  }
  @media screen and (min-width: 1200px) {
    width: 1140px;
  }
`

export { GlobalStyle, HidenSm, MainContainer }
