import styled from "styled-components";

export const SearchList = styled.ul`
  padding-left: 0;
  justify-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: right;
  align-content: space-around;
  list-style: none;
  align-items: center;
  margin-top: 40px;
`;

export const SearchForm = styled.form`
  width: 100%;
  justify-items: center;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const SearchBar = styled.input`
  width: 80%;
  max-width: 500px;
  background-color: #efefef;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 20px;
  padding-left: 10px;
  margin-right: 10px;
`;
export const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  background-color: white;
`;
export const SearchOptionSelect = styled.select`
  height: 30px;
  border: none;
  outline: none;
  border-radius: 20px;
  background-color: #efefef;
  margin-right: 10px;
`;
export const SearchBox = styled.div`
  background-color: #efefef;
  border-radius: 20px;
  width: 60%;
  height: 32px;
  display: flex;
`;
export const SerchOption = styled.option``;
