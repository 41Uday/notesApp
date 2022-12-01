import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 45px;
  text-align: center;
  font-family: 'Bree Serif';
  color: #4c63b6;
  font-weight: 500;
`
export const CardOne = styled.form`
  box-shadow: 0px 8px 40px rgba(5, 5, 6, 0.3);
  height: 300px;
  width: 40%;
  border-radius: 12px;
  padding: 20px;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 250px;
  }
`
export const Input = styled.input`
  border: none;
  color: #47556;
  font-weight: 600;
  height: 40px;
  width: 90%;
  padding-left: 20px;
  outline: none;
`
export const MainCardOne = styled.div`
  display: flex;
  justify-content: center;
`
export const TextArea = styled.textarea`
  color: #334155;
  margin-top: 30px;
  outline: none;
  border: none;
  padding-left: 20px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
export const Button = styled.button`
  background-color: #4c63b6;
  height: 40px;
  width: 80px;
  color: white;
  border-radius: 7px;
  border: none;
  margin-right: 20px;
  margin-top: 20px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin-top: 2px;
  }
`
export const ButtonContainer = styled.div`
  text-align: right;
`
export const Img = styled.img`
  height: 100px;
  widows: 100px;
`
export const CardTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`
export const ParaOne = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
`
export const ParaTwo = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
`
export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`
