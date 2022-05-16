import UserDetail from "page/Detail/UserDetail";
import ItemDetail from "page/Detail/ItemDetail";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  ItemDetailState,
  PageNumber,
  selectedUserNumber,
  UserDetailState,
} from "atoms";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { userApi } from "../api/index";
import {
  ListBox,
  ListElementName,
  ListElementNameBox,
} from "../Components/List";
import {
  SearchBar,
  SearchButton,
  SearchForm,
  SearchList,
} from "Components/SearchBar";
import { AdminDiv, ElementText, ListDiv } from "Components/FormalForm";
import Paging from "Components/Paging";

function User() {
  const isUserDetail = useRecoilValue(UserDetailState);
  const isItemDetail = useRecoilValue(ItemDetailState);
  const onUserDetailState = useSetRecoilState(UserDetailState);
  const onItemDetailState = useSetRecoilState(ItemDetailState);
  const [userData, setUserData] = useState([]);
  const currentPage = useRecoilValue(PageNumber);
  const setCurrentPage = useSetRecoilState(PageNumber);
  const [totalPage, setTotalPage] = useState(0);
  const [selectedUserIdx, setSelectedUserIdx] = useState(0);

  const onUserDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onUserDetailState((pre) => !pre);
    setSelectedUserIdx(parseInt((event.target as HTMLButtonElement).value));
    console.log(selectedUserIdx + "보여");
    console.log((event.target as HTMLButtonElement).value);
  };

  const onItemDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onItemDetailState((pre) => !pre);
  };

  const getUserList = async () => {
    try {
      const { data } = await userApi.getUserList(currentPage + 1);
      setUserData(data.users);
      console.log(data.users);
      setTotalPage(data.total_page);
      console.log(totalPage);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    onUserDetailState((pre) => false);
    onItemDetailState((pre) => false);
    getUserList();
  }, [currentPage]);
  useEffect(() => {
    setCurrentPage(0);
  }, []);

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
      <ListDiv>
        <SearchForm onSubmit={onSubmit}>
          <SearchBar onChange={onChange} placeholder="Search for..." />
          <SearchButton>
            <FontAwesomeIcon size="2x" icon={faMagnifyingGlass} />
          </SearchButton>
        </SearchForm>
        <SearchList>
          <ListElementNameBox>
            <ListElementName>이메일</ListElementName>
          </ListElementNameBox>
          {userData.map((Data: any) => (
            <ListBox key={Data.email} value={Data.idx} onClick={onUserDetail}>
              <ElementText>{Data.email}</ElementText>
            </ListBox>
          ))}
          <Paging page={totalPage} />
        </SearchList>
      </ListDiv>
      {isUserDetail ? (
        <UserDetail selectedIdx={selectedUserIdx} />
      ) : (
        <div></div>
      )}
      {isItemDetail ? <ItemDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default User;
