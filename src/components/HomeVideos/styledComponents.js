import styled from 'styled-components'

export const ContextSpace = styled.div`
  padding: 30px;
  background-color: ${props => props.bgColor};
`

export const SearchBox = styled.div`
  display: flex;
  max-width: 500px;
  margin: 20px 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`

export const SearchInput = styled.input`
  flex: 1;
  height: 40px;
  padding: 0 14px;
  border: none;
  outline: none;
  font-size: 15px;

  &::placeholder {
    color: #94a3b8;
  }
`

export const SearchButton = styled.button`
  width: 20%;
  background-color: #e2e8f0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;

  svg {
    color: #ffffff; 
  }
`
export const LowerBar = styled.div`
  padding: clamp(12px, 2vw, 24px);
  
`

export const VideoGrid = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(clamp(220px, 23vw, 320px), 1fr)
  );
  gap: clamp(20px, 3vw, 32px);
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  li {
    list-style-type: none;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
