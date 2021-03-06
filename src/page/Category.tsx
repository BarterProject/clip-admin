import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminDiv, ListDiv, PageName } from "components/FormalForm";
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
import { categoryApi, deleteCategoryApi, saveCategoryApi } from "api";
import { BtnBox } from "components/DetailForm";

const NewCategoryInput = styled.input``;
const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CategoryBox = styled.button`
  width: 100px;
  height: 100px;
  min-width: 100px;
  min-height: 100px;
  background-color: #dacef0;
  border-color: #b0a1cf;
  border-radius: 5px;
  outline: none;
  margin: 20px;
  &:active {
    background-color: #6c4ec0;
  }
  &:focus {
    background-color: #886bcd;
  }
`;

const Btn = styled.button`
  width: 60px;
`;

const CategoryDiv = styled.div`
  flex-direction: row;
  width: 80vw;
  display: flex;
  margin-left: 350px;
`;

function Category() {
  const [selectedBtn, setSelectedBtn] = useState(0);
  const [categoryData, setCategoryData] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");

  //new category name input state
  const onNewCategoryNameChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const {
      currentTarget: { value },
    } = event;
    console.log(value);
    setNewCategoryName(value);
  };

  //save new category api
  const saveNewCategory = async () => {
    try {
      const { data } = await saveCategoryApi.setCategory(newCategoryName);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const categoryBtnOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSelectedBtn(parseInt((event.target as HTMLButtonElement).value));
    console.log(event.target);
    console.log((event.target as HTMLButtonElement).value);
  };
  //delete category
  const deleteCategory = async () => {
    try {
      const { data } = await deleteCategoryApi.delCategory(selectedBtn);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  //get category data
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
    <CategoryDiv>
      <ListDiv>
        <PageName>????????????</PageName>
        <ListBox>
          {categoryData.map((Data: any) => (
            <CategoryBox
              key={Data.idx}
              value={Data.idx}
              onClick={categoryBtnOnClick}
            >
              {Data.name}
            </CategoryBox>
          ))}
        </ListBox>

        <BtnBox>
          <NewCategoryInput
            placeholder="?????? ???????????? ?????? ?????? ???"
            onChange={onNewCategoryNameChange}
          ></NewCategoryInput>
          <Btn onClick={saveNewCategory}>??????</Btn>
          <Btn onClick={deleteCategory}>??????</Btn>
        </BtnBox>
      </ListDiv>
    </CategoryDiv>
  );
}

export default Category;
