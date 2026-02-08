import styled from 'styled-components'

export const LoginBackground = styled.div`
    background-color: ${props => props.bgColor};
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Roboto";
    @media (max-width: 420px) {
    padding: 20px;
  }
`
export const LoginContainer = styled.div`
    background-color: ${props => props.bgColor};
    width: 380px;
    padding: 35px;
    border-radius: 8px;
    border: 1px solid ${props => props.borderColor};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    @media (max-width: 420px) {
        width: 300px;
        padding: 24px;
    }
`
export const LoginContainerElement = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`
export const LoginImage = styled.img`
  height: 40px;
  width: 120px;
`
export const Container = styled.div`
  margin-top: 60px;
  width: 100%;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 8px;
`
export const LoginUsername = styled.label`
  color: ${props => props.color};
  font-weight: bold;
  font-size: 13px;
  align-self: flex-start;

  @media (max-width: 420px) {
    font-size: 12px;
  }
`
export const LoginInput = styled.input`
  color: ${props => props.color};
  background-color: #ffffff;
  border: 1px solid #7e858e;
  border-radius: 2px;
  padding: 10px 15px;
  width: 100%;
  max-width: 300px;
  @media (max-width: 420px) {
    width: 100%;
    padding: 10px 25px;
    font-size: 12px;
    color: #000000;
  }
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 420px) {
    width: 100%;
    gap: 6px;
  }
`

export const Checkbox = styled.input`
  height: 14px;
  width: 14px;
  cursor: pointer;
`

export const ShowPasswordText = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: ${props => props.color};
  text-align: center;

  @media (max-width: 420px) {
    font-size: 12px;
  }
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 420px) {
    height: 42px;
    font-size: 14px;
  }
`
export const CautionText = styled.p`
  font-size: 10px;
  color: #ff0000;
  margin: 0;
  align-self: flex-start;
`
