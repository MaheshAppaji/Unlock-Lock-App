// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
`

export const LockImg = styled.img`
  height: 130px;
  width: 130px;
`

export const StatusTxt = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #e2e8f0;
  font-weight: 400;
  margin-bottom: 150px;
`

export const LockBtn = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  font-family: 'Roboto';
  height: 45px;
  width: 130px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
`
