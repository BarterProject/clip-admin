import styled from "styled-components";
import UserDetail from "./Detail/UserDetail";
import ItemDetail from "./Detail/ItemDetail";
import { useRecoilValue } from "recoil";
import { ItemDetailState, UserDetailState } from "atoms";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const AdminDiv = styled.div`
  width: 100vw;
  flex-direction: row;
  display: flex;
`;

const UserList = styled.div`
  width: 75%;
  display: flex;
  min-width: 500px;
  flex-direction: column;
`;

const UserSearch = styled.form`
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
const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  background-color: white;
`;

function User() {
  const isUserDetail = useRecoilValue(UserDetailState);
  const isItemDetail = useRecoilValue(ItemDetailState);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  /* function pageAlgo(
    total: number,
    bottomSize: number,
    listSize: number,
    cursor: number
  ) {
    //total = 총 갯수
    //bottomSize = 하단크기
    //listSize = 화면에서 보여줄 크기
    //cursor = 현재 나의 페이지

    let totalPageSize = Math.ceil(total / listSize); //한 화면에 보여줄 갯수에서 구한 하단 총 갯수

    let firstBottomNumber = cursor - (cursor % bottomSize) + 1; //하단 최초 숫자
    let lastBottomNumber = cursor - (cursor % bottomSize) + bottomSize; //하단 마지막 숫자

    if (lastBottomNumber > totalPageSize) lastBottomNumber = totalPageSize; //총 갯수보다 큰 경우 방지

    return {
      firstBottomNumber,
      lastBottomNumber,
      totalPageSize,
      total,
      bottomSize,
      listSize,
      cursor,
    };
  }

  let info = pageAlgo(array.length, 3, 10, 1); */

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
      <UserList>
        <UserSearch onSubmit={onSubmit}>
          <SearchBar onChange={onChange} placeholder="Search for..." />
          <SearchButton>
            <FontAwesomeIcon size="2x" icon={faMagnifyingGlass} />
          </SearchButton>
        </UserSearch>
        <SearchList>
          <ListElementNameBox>
            <ListElementName>ID</ListElementName>
            <ListElementName>닉네임</ListElementName>
          </ListElementNameBox>
          {array.map((ele) => (
            <ListElement>{ele}</ListElement>
          ))}
        </SearchList>
      </UserList>
      {isUserDetail ? <UserDetail /> : <div></div>}
      {isItemDetail ? <ItemDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default User;
