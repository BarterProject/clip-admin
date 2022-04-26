import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminDiv, PageName } from "Components/FormalForm";
import {
  SearchBar,
  SearchOptionSelect,
  SerchOption,
  SearchButton,
  SearchBox,
  SearchForm,
} from "Components/SearchBar";
import { useEffect, useState } from "react";
import { categoryApi } from "api";

function Category() {
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

  const getCategoryData = async () => {
    try {
      const { data } = await categoryApi.getCategoryList();
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
      <PageName>카테고리</PageName>
      <SearchForm onSubmit={onSubmit}>
        <SearchBox>
          <SearchBar onChange={onChange} placeholder="Search for..." />
        </SearchBox>
        <SearchButton>
          <FontAwesomeIcon size="2x" icon={faMagnifyingGlass} />
        </SearchButton>
        {/* {catData.map((cat: any) => (
          <span key="catname">{cat}</span>
        ))} */}
      </SearchForm>
    </AdminDiv>
  );
}

export default Category;
