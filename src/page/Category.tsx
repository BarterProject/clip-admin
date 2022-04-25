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
import { useState } from "react";

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
  return (
    <AdminDiv>
      <PageName>카테고리</PageName>
      <SearchForm onSubmit={onSubmit}>
        <SearchBox>
          <SearchBar onChange={onChange} placeholder="Search for..." />
          <SearchOptionSelect>
            <SerchOption>전자기기</SerchOption>
            <SerchOption>잡화</SerchOption>
            <SerchOption>식품</SerchOption>
          </SearchOptionSelect>
        </SearchBox>
        <SearchButton>
          <FontAwesomeIcon size="2x" icon={faMagnifyingGlass} />
        </SearchButton>
      </SearchForm>
    </AdminDiv>
  );
}

export default Category;
