import styled from 'styled-components'

export const WrapperCards = styled.section`
  display: flex;
`

export const Card = styled.section`
  border: 1px solid #ededed;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  transition: box-shadow 0.4s ease-in-out;
  width: 250px;

  &:hover {
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
  }
`
