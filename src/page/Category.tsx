import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminDiv, ListDiv, PageName } from "Components/FormalForm";
/* import {
  SearchBar,
  SearchOptionSelect,
  SerchOption,
  SearchButton,
  SearchBox,
  SearchForm,
  SearchList,
} from "Components/SearchBar"; */
import { useEffect, useState } from "react";
import { categoryApi, saveCategoryApi } from "api";
import { BtnBox } from "Components/DetailForm";

const NewCategoryInput = styled.input``;
const ListBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const CategoryBox = styled.button`
  width: 100px;
  height: 100px;
  background-color: #b4b4b4;
  border-color: #999898;
  outline: none;
  margin: 10px;
`;

const Btn = styled.button`
  width: 60px;
`;

function Category() {
  const [categoryData, setCategoryData] = useState([]);
  const [search, setSearch] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setSearch(value);
  };

  const onNewCategoryNameChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const {
      currentTarget: { value },
    } = event;
    setNewCategoryName(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(search);
  };
  const saveNewCategory = async () => {
    try {
      const { data } = await saveCategoryApi.setCategory(newCategoryName);
      console.log(Response);
    } catch (e) {
      console.log(e);
    }
  };
  const getCategoryData = async () => {
    try {
      const { data } = await categoryApi.getCategoryList();
      setCategoryData(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getCategoryData();
  }, []);
  return (
    <AdminDiv>
      <ListDiv>
        <PageName>카테고리</PageName>
        {/* <SearchForm onSubmit={onSubmit}>
          <SearchBox>
            <SearchBar onChange={onChange} placeholder="Search for..." />
          </SearchBox>
          <SearchButton>
            <FontAwesomeIcon size="2x" icon={faMagnifyingGlass} />
          </SearchButton>
        </SearchForm> */}
        <ListBox>
          {categoryData.map((Data: any, idx: number) => (
            <CategoryBox key={idx}>{Data.name}</CategoryBox>
          ))}
        </ListBox>

        <BtnBox>
          <NewCategoryInput
            placeholder="만들 카테고리 이름 적는 란"
            onChange={onNewCategoryNameChange}
          ></NewCategoryInput>
          <Btn onSubmit={saveNewCategory}>저장</Btn>
          <Btn>삭제</Btn>
        </BtnBox>
      </ListDiv>
    </AdminDiv>
  );
}

export default Category;
