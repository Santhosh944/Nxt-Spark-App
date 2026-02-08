import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderBackground = styled.header`
  height: 64px;
  padding: 0 20px;
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const LogoImage = styled.img`
  height: 32px;
`

export const NavProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`

export const ProfileImage = styled.img`
  height: 32px;
  cursor: pointer;

  @media (max-width: 767px) {
    display: none;
  }
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export const LogoutButton = styled.button`
  padding: 6px 14px;
  background: transparent;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 767px) {
    display: none;
  }
`

export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

/* ================= LOGOUT MODAL ================= */

export const LogoutModal = styled.div`
  width: 280px;
  padding: 24px;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    width: 360px;
  }
`

export const LogoutText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  text-align: center;
  margin: 0;
`

export const LogoutButtons = styled.div`
  display: flex;
  gap: 16px;
`

export const CancelButton = styled.button`
  flex: 1;
  padding: 10px 0;
  background: transparent;
  border: 1px solid #94a3b8;
  color: #64748b;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f1f5f9;
  }
`

export const ConfirmButton = styled.button`
  flex: 1;
  padding: 10px 0;
  background-color: #3b82f6;
  border: none;
  color: #ffffff;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`
