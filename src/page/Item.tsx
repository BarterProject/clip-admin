import styled from "styled-components";
import UserDetail from "./Detail/UserDetail";
import ItemDetail from "./Detail/ItemDetail";
import { UserDetailState, ItemDetailState } from "atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { itemApi } from "../api/index";
import {
  SearchBar,
  SearchBox,
  SearchButton,
  SearchList,
  SearchOptionSelect,
  SerchOption,
  SearchForm,
} from "Components/SearchBar";
import List, {
  ListBox,
  ListElementName,
  ListElementNameBox,
} from "Components/List";
import { AdminDiv, ElementText, ListDiv } from "Components/FormalForm";

function Item() {
  const isUserDetail = useRecoilValue(UserDetailState);
  const isItemDetail = useRecoilValue(ItemDetailState);
  const onUserDetailState = useSetRecoilState(UserDetailState);
  const onItemDetailState = useSetRecoilState(ItemDetailState);

  const [itemData, setItemData] = useState([]);

  const onUserDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onUserDetailState((pre) => !pre);
  };

  const onItemDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onItemDetailState((pre) => !pre);
  };

  const getItemList = async () => {
    try {
      const { data } = await itemApi.getItemList();
      setItemData(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    onUserDetailState((pre) => false);
    onItemDetailState((pre) => false);
    getItemList();
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
          <ListElementNameBox>
            <ListElementName>ID</ListElementName>
            <ListElementName>제품명</ListElementName>
            <ListElementName>현소유자</ListElementName>
          </ListElementNameBox>
          {itemData.map((Data: any, idx: number) => (
            <ListBox key={idx} onClick={onItemDetail}>
              <ElementText>{Data.idx}</ElementText>
              <ElementText>{Data.name}</ElementText>
              <ElementText>{Data.owner.email}</ElementText>
            </ListBox>
          ))}
        </SearchList>
      </ListDiv>
      {isUserDetail ? <UserDetail /> : <div></div>}
      {isItemDetail ? <ItemDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default Item;
