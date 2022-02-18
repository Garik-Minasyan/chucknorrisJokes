import styled from "styled-components";

export const FavoritePanel = styled.div`
  min-height: 500px;
  width: 700px;
  background-color: brown;
  display: flex;
  justify-content: center;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 8px;
`;

export const FavoriteListUl = styled.ul`
  padding: 2px 8px;
  width: 80%;
`;

export const FavoriteItemtPanel = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

export const FavoriteItemtP = styled.p`
  margin-top: 20px;
  padding: 2px 8px;
  font-size: 18px;
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 600;
  padding-bottom: 5px;
`;

export const DeleteButton = styled.button`
  color: white;
  background-color: brown;
  border: 1px solid white;
  padding: 5px 15px;
  cursor: pointer;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 600;
`;