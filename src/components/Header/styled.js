import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MainContainer } from '@/globalcss/globalStyle'

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 14px 0 10px 0;
  z-index: 3;
  white-space: nowrap;
  position: relative;
  text-decoration: none;
  color: ${props => props.theme.colors[props.color]};
`
const NavItem = styled.div`
  font-size: 1.4rem;
  text-align: center;
  flex: 1 1 auto;
  line-height: 1;
  color: #fff;
  font-family: ${props => props.theme.fonts.foo};
`

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  max-height: 60px;
  @media screen and (min-width: 992px) {
    background: repeating-linear-gradient(45deg, #262626, #262626 10px, #141414 10px, #141414 20px);
  }
`

const HeaderWrapper = styled(MainContainer)`
  margin: 0 auto;
`

export { StyledLink, NavItem, StyledHeader, HeaderWrapper }
