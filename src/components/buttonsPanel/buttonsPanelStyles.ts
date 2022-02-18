import styled from "styled-components";

export const ButtonsPanelWrap = styled.div`
  height: 500px;
  width: 320px;
  background-color: #601313;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

export const ButtonWrap = styled.button`
  width: 250px;
  height: 60px;
  background-color: brown;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: white;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;