import styled from "styled-components";
import UserDetail from "./Detail/UserDetail";
import ItemDetail from "./Detail/ItemDetail";
import { UserDetailState, ItemDetailState } from "atoms";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const AdminDiv = styled.div`
  width: 100vw;
  flex-direction: row;
  display: flex;
`;

const ItemList = styled.div`
  width: 75%;
  display: flex;
  min-width: 500px;
  flex-direction: column;
`;

const ItemSearch = styled.form`
  width: 100%;
  justify-items: center;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
const SearchList = styled.ul`
  padding-left: 0;
  justify-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: right;
  align-content: space-around;
  list-style: none;
  margin-top: 40px;
`;
const ListElementName = styled.span`
  margin: 0 90px 0 30px;
  height: 30px;
`;
const ListElementNameBox = styled.div`
  display: flex;
`;

const ListElement = styled.li`
  width: 90%;
  height: 30px;
  background-color: #e6edf4;
  margin: 8px;
  min-width: 400px;
  max-width: 600px;
  border-radius: 15px;
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
function Item() {
  const isUserDetail = useRecoilValue(UserDetailState);
  const isItemDetail = useRecoilValue(ItemDetailState);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
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
      <ItemList>
        <ItemSearch onSubmit={onSubmit}>
          <SearchBox>
            <SearchBar onChange={onChange} placeholder="Search for..." />
            <SearchOptionSelect>
              <SerchOption>카테고리</SerchOption>
              <SerchOption>이름</SerchOption>
              <SerchOption>소유자</SerchOption>
              <SerchOption>실소유자</SerchOption>
            </SearchOptionSelect>
          </SearchBox>
          <SearchButton>
            <FontAwesomeIcon size="2x" icon={faMagnifyingGlass} />
          </SearchButton>
        </ItemSearch>
        <SearchList>
          <ListElementNameBox>
            <ListElementName>ID</ListElementName>
            <ListElementName>제품명</ListElementName>
            <ListElementName>현소유자</ListElementName>
          </ListElementNameBox>
          {array.map((ele) => (
            <ListElement>{ele}</ListElement>
          ))}
        </SearchList>
      </ItemList>
      {isUserDetail ? <UserDetail /> : <div></div>}
      {isItemDetail ? <ItemDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default Item;
