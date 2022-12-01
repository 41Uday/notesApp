import styled from 'styled-components'

export const ListItem = styled.li`
  border: 1px solid #aab8c8;
  height: 150px;
  width: 300px;
  border-radius: 7px;
  padding: 20px;
  margin: 20px;
  @media screen and (max-width: 768px) {
    width: 360px;
    margin: 20px;
    margin-left: -10px;
  }
`
export const ParaItemOne = styled.h1`
  color: #1e293b;
  font-size: 22px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const ParaItemTwo = styled.p`
  color: #334155;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Roboto';
`
