import styled from "styled-components";
import { useForm, useFormState } from "react-hook-form";
import { Link, Route } from "react-router-dom";

const UserList = styled.div`
  width: 55%;
  display: flex;
  min-width: 600px;
  background-color: lightcoral;
`;

const UserSearch = styled.form`
  width: 100%;
  justify-items: center;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
const SearchBar = styled.input`
  width: 80%;
  max-width: 500px;
  background-color: #efefef;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 20px;
  padding-left: 10px;
`;
const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: white;
  border: none;
  outline: none;
`;

function Admin_user() {
  const { register, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <UserList>
      <UserSearch onSubmit={handleSubmit(onValid)}>
        <SearchBar {...register("USER")} placeholder="Search for..." />
        <SearchButton>🔍</SearchButton>
      </UserSearch>
    </UserList>
  );
}
export default Admin_user;
