import styled from "styled-components";
import UserDetail from "./Detail/UserDetail";
import ItemDetail from "./Detail/ItemDetail";
import {
  UserDetailState,
  ItemDetailState,
  selectedItemNumber,
  PageNumber,
} from "atoms";
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
import Paging from "Components/Paging";

function Item() {
  const isUserDetail = useRecoilValue(UserDetailState);
  const isItemDetail = useRecoilValue(ItemDetailState);
  const onUserDetailState = useSetRecoilState(UserDetailState);
  const onItemDetailState = useSetRecoilState(ItemDetailState);
  const [itemData, setItemData] = useState([]);
  const selectedNumberState = useSetRecoilState(selectedItemNumber);
  const currentPage = useRecoilValue(PageNumber);
  const setCurrentPage = useSetRecoilState(PageNumber);
  const [totalPage, setTotalPage] = useState(0);

  const onUserDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onUserDetailState((pre) => !pre);
  };

  const onItemDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onItemDetailState((pre) => !pre);
    selectedNumberState(parseInt((event.target as HTMLButtonElement).value));
    console.log(event.target);
    console.log((event.target as HTMLButtonElement).value);
  };

  const getItemList = async () => {
    try {
      const { data } = await itemApi.getItemList(currentPage + 1);
      setItemData(data.items);
      console.log(data.items);
      setTotalPage(parseInt(data.total_page));
      console.log(parseInt(data.total_page));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    onUserDetailState((pre) => false);
    onItemDetailState((pre) => false);
    getItemList();
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
          {itemData.map((Data: any) => (
            <ListBox key={Data.idx} value={Data.idx} onClick={onItemDetail}>
              <ElementText>{Data.idx}</ElementText>
              <ElementText>{Data.name}</ElementText>
              {/* 
              <ElementText>{Data.owner.email}</ElementText> */}
            </ListBox>
          ))}
          <Paging />
        </SearchList>
      </ListDiv>
      {isUserDetail ? <UserDetail /> : <div></div>}
      {isItemDetail ? <ItemDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default Item;
