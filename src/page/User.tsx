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
import { userApi, userSearchApi } from "../api/index";
import {
  ListBox,
  ListElementName,
  ListElementNameBox,
} from "../components/List";
import {
  SearchBar,
  SearchButton,
  SearchForm,
  SearchList,
} from "components/SearchBar";
import { AdminDiv, ElementText, ListDiv } from "components/FormalForm";
import Paging from "components/Paging";

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

  const onUserDetail = (idx: number) => {
    onUserDetailState((pre) => !pre);
    console.log(idx);
    setSelectedUserIdx(idx);
  };

  const onItemDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onItemDetailState((pre) => !pre);
  };

  const getUserList = async () => {
    try {
      const { data } = await userApi.getUserList(currentPage);
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

  const getUserSearchToEmail = async () => {
    try {
      const { data } = await userSearchApi.userSearch(currentPage, search);
      setUserData(data.users);
      console.log(data.users);
    } catch (e) {
      console.log(e);
    }
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setSearch(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getUserSearchToEmail();
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
            <ListBox
              key={Data.email}
              value={Data.idx}
              onClick={() => {
                onUserDetail(Data.idx);
              }}
            >
              <ElementText>{Data.email}</ElementText>
            </ListBox>
          ))}
          <Paging page={totalPage + 1} />
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
