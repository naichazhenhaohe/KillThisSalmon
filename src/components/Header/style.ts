import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  max-height: 60px;
  @media screen and (min-width: 992px) {
    background: repeating-linear-gradient(
      45deg,
      #262626,
      #262626 10px,
      #141414 10px,
      #141414 20px
    );
  }
`

const HeaderWrapper = styled.div`
  margin: 0 auto;
  ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
    color: #fff;
    li {
      font-family: 'Foo', 'Helvetica', sans-serif;
      font-size: 1.4rem;
      text-align: center;
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      line-height: 1;
      a {
        display: block;
        padding: 14px 0 10px 0;
        z-index: 3;
        white-space: nowrap;
        position: relative;
        text-decoration: none;
        color: #fff;
      }
      .font-origin {
        color: #ff5600;
      }
      .font-green {
        color: #18d618;
      }
      .font-purple {
        color: #a51de1;
      }
      .font-pink {
        color: #ef2d7c;
      }
      .font-yellow {
        color: #ffcd00;
      }
    }
  }
`

const Nav = styled.nav`
  position: fixed;
  top: 35px;
  right: 30px;
`

const StyledLink = styled(Link)<any>`
  display: block;
  padding: 14px 0 10px 0;
  z-index: 3;
  white-space: nowrap;
  position: relative;
  text-decoration: none;
  color: ${props => {
    console.log(props)
    return '#fff'
  }};
`
const MobileLink = styled(Link)``

export { HeaderBox, HeaderWrapper, Nav, StyledLink }
