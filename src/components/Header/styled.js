import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  display: block;
  padding: 14px 0 10px 0;
  z-index: 3;
  white-space: nowrap;
  position: relative;
  text-decoration: none;
  color: #fff;
  color: ${props =>
    props.color ? props.theme.colors[props.color] : '#ffffff'};
`
const NavItem = styled.li`
  font-size: 1.4rem;
  text-align: center;
  flex: 1 1 auto;
  line-height: 1;
  font-family: ${props => props.theme.fonts.foo};
`

export { StyledLink, NavItem }
