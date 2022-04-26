import styled from "styled-components";
import UserDetail from "./Detail/UserDetail";
import ItemDetail from "./Detail/ItemDetail";
import { UserDetailState, ItemDetailState } from "atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  SearchBar,
  SearchBox,
  SearchButton,
  SearchList,
  SearchOptionSelect,
  SerchOption,
  SearchForm,
} from "Components/SearchBar";
import List from "Components/List";
import { AdminDiv, ListDiv } from "Components/FormalForm";

function Item() {
  const isUserDetail = useRecoilValue(UserDetailState);
  const isItemDetail = useRecoilValue(ItemDetailState);
  const onUserDetailState = useSetRecoilState(UserDetailState);
  const onItemDetailState = useSetRecoilState(ItemDetailState);
  useEffect(() => {
    onUserDetailState((pre) => false);
    onItemDetailState((pre) => false);
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
        </SearchForm>
        <SearchList>
          <List currentName="item" />
        </SearchList>
      </ListDiv>
      {isUserDetail ? <UserDetail /> : <div></div>}
      {isItemDetail ? <ItemDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default Item;
