import styled from "styled-components";
import UserDetail from "page/Detail/UserDetail";
import ItemDetail from "page/Detail/ItemDetail";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ItemDetailState, UserDetailState } from "atoms";
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
import { AdminDiv, ListDiv } from "Components/FormalForm";

function User() {
  const isUserDetail = useRecoilValue(UserDetailState);
  const isItemDetail = useRecoilValue(ItemDetailState);
  const onUserDetailState = useSetRecoilState(UserDetailState);
  const onItemDetailState = useSetRecoilState(ItemDetailState);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const getUserList = async () => {
    try {
      const { data } = await userApi.getUserList();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    onUserDetailState((pre) => false);
    onItemDetailState((pre) => false);
    //getUserList();
  }, []);
  const [search, setSearch] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setSearch(value); //<?
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(search);
  };
  const onDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onUserDetailState((pre) => !pre);
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
            <ListElementName>ID</ListElementName>
            <ListElementName>닉네임</ListElementName>
          </ListElementNameBox>
          {array.map((ele) => (
            <ListBox onClick={onDetail} key={ele}>
              {ele}
            </ListBox>
          ))}
        </SearchList>
      </ListDiv>
      {isUserDetail ? <UserDetail /> : <div></div>}
      {isItemDetail ? <ItemDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default User;
