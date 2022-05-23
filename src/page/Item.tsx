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
import {
  itemApi,
  itemSearchToQueryApi,
  itemSearchToIdxApi,
} from "../api/index";
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
  const [searchItemData, setsearchItemData] = useState([]);
  const selectedNumberState = useSetRecoilState(selectedItemNumber);
  const currentPage = useRecoilValue(PageNumber);
  const setCurrentPage = useSetRecoilState(PageNumber);
  const [totalPage, setTotalPage] = useState(0);
  const [selectedOption, setSelectedOption] = useState("itemName");
  const [selectedItemIdx, setSelectedItemIdx] = useState(0);
  const onUserDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onUserDetailState((pre) => !pre);
  };

  const onItemDetail = (idx: number) => {
    onItemDetailState((pre) => !pre);
    console.log(idx);
    setSelectedItemIdx(idx);
  };

  const getItemList = async () => {
    try {
      const { data } = await itemApi.getItemList(currentPage);
      console.log(data);
      console.log(data.items);
      setItemData(data.items);
      setTotalPage(parseInt(data.total_page));
    } catch (e) {
      console.log(e);
    }
  };

  const getSearchItemToQueryList = async () => {
    try {
      const { data } = await itemSearchToQueryApi.itemSearchToQuery(
        currentPage,
        search
      );
      setItemData(data.items);
      console.log(data.items);
    } catch (e) {
      console.log(e);
    }
  };

  const getSearchItemToIdxList = async () => {
    try {
      const { data } = await itemSearchToIdxApi.itemSearchToIdx(
        currentPage,
        search
      );
      setItemData(data.items);
      console.log(data.items);
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
    {
      selectedOption == "itemName" ? (
        getSearchItemToQueryList()
      ) : selectedOption == "category" ? (
        getSearchItemToIdxList()
      ) : (
        <></>
      );
    }
    console.log(search);
  };

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    console.log("test", selectedOption);
  };

  console.log("mode: " + selectedOption);
  return (
    <AdminDiv>
      <ListDiv>
        <SearchForm onSubmit={onSubmit}>
          <SearchBox>
            <SearchBar onChange={onChange} placeholder="Search for..." />
            <SearchOptionSelect onChange={selectChange}>
              <SerchOption value="itemName">이름</SerchOption>
              <SerchOption value="category">카테고리</SerchOption>
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
            <ListBox
              key={Data.idx}
              value={Data.idx}
              onClick={() => {
                onItemDetail(Data.idx);
              }}
            >
              <ElementText>{Data.idx}</ElementText>
              <ElementText>{Data.name}</ElementText>

              <ElementText>{Data.owner.email}</ElementText>
            </ListBox>
          ))}
          <Paging page={totalPage + 1} />
        </SearchList>
      </ListDiv>
      {isUserDetail ? <UserDetail /> : <div></div>}
      {isItemDetail ? (
        <ItemDetail selectedIdx={selectedItemIdx} />
      ) : (
        <div></div>
      )}
    </AdminDiv>
  );
}

export default Item;
