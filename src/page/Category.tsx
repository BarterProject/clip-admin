import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const AdminDiv = styled.div`
  flex-direction: row;
  width: 100vw;
  display: flex;
`;
const CatName = styled.span`
  font-size: 30px;
  width: 300px;
  padding: 30px 60px 30px 30px;
`;
const CatSearch = styled.form`
  width: 100%;
  justify-items: center;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
const SearchBar = styled.input`
  width: 100%;
  max-width: 500px;
  background-color: #efefef;
  border: none;
  outline: none;
  border-radius: 20px;
  padding-left: 10px;
  margin-right: 10px;
`;
const SearchBox = styled.div`
  background-color: #efefef;
  border-radius: 20px;
  width: 60%;
  height: 30px;
  display: flex;
`;

const SearchOptionSelect = styled.select`
  height: 30px;
  border: none;
  outline: none;
  border-radius: 20px;
  background-color: #efefef;
  margin-right: 10px;
`;
const SerchOption = styled.option``;

const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  background-color: white;
`;
function Category() {
  const [search, setSearch] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setSearch(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(search);
  };
  return (
    <AdminDiv>
      <CatName>카테고리</CatName>
      <CatSearch onSubmit={onSubmit}>
        <SearchBox>
          <SearchBar onChange={onChange} placeholder="Search for..." />
          <SearchOptionSelect>
            <SerchOption>전자기기</SerchOption>
            <SerchOption>잡화</SerchOption>
            <SerchOption>식품</SerchOption>
          </SearchOptionSelect>
        </SearchBox>
        <SearchButton>
          <FontAwesomeIcon size="2x" icon={faMagnifyingGlass} />
        </SearchButton>
      </CatSearch>
    </AdminDiv>
  );
}

export default Category;
