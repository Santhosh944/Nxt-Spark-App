import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
`

export const NavigationLgContainer = styled.div`
  width: 260px;
  height: calc(100vh - 60px);
  position: fixed;
  top: 60px;
  left: 0;
  background-color: ${props => props.bgColor};
  border-right: 1px solid ${props => props.borderColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavOptions = styled.ul`
  list-style: none;
  padding: 16px 0;
  margin: 0;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavLinkContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 20px;
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  margin: 4px 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.hoverBg};
  }
`

export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.color};
  margin: 0;
`

export const ContactInfo = styled.div`
  padding: 20px;
  border-top: 1px solid ${props => props.borderColor};
`

export const ContactHeading = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: 0.8px;
  color: ${props => props.color};
`

export const ContactIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`

export const ContactImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const ContactNote = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: ${props => props.color};
`

/* ---------- MOBILE BOTTOM NAV ---------- */

export const NavigationSmallContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 60px;

  background-color: ${props => props.bgColor};
  border-top: 1px solid ${props => props.borderColor};

  display: flex;
  justify-content: space-around;
  align-items: center;

  z-index: 999;

  /* ONLY MOBILE */
  @media screen and (min-width: 769px) {
    display: none;
  }
`
