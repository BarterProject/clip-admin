import styled from "styled-components";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authApi } from "api";
import { LoginState } from "atoms";

const BodyStyle = styled.div`
  background-color: #373966;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;
const LoginBox = styled.div`
  background-color: #f4f1f1;
  width: 20%;
  min-width: 300px;
  height: 50vh;
  min-height: 350px;
  justify-items: center;
  align-items: center;
  text-align: center;
  border-radius: 25px;
  padding-top: 50px;
`;
const TitleText = styled.span`
  font-size: 50px;
`;
const LoginForm = styled.form`
  height: 350px;
  flex-direction: column;
  display: flex;
  justify-items: center;
  align-items: center;
`;
const InputText = styled.input`
  width: 200px;
  height: 40px;
  margin-top: 35px;
  margin-bottom: -10px;
  background-color: #c4c4c4;
  border-radius: 20px;
  border: none;
  padding-left: 10px;
  outline: none;
`;
const SubmitButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 40px;
  background-color: #665cd2;
  color: white;
  border-radius: 20px;
  border: none;
`;

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState(""); /* useCallback */
  const onChangeID = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setId(value);
  };
  const onChangePW = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setPw(value);
  };
  const isLogined = useSetRecoilState(LoginState);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { data } = await authApi.login(id, pw);
      window.localStorage.setItem("jwt", data.jwt);
      isLogined((pre: boolean) => !pre);
    } catch (e) {
      console.log(e);
    }

    /*     console.log(id);
    console.log(pw);
    console.log(data); */
  };
  return (
    <BodyStyle>
      <LoginBox>
        <TitleText>CLIP</TitleText>
        <LoginForm onSubmit={onSubmit}>
          <InputText onChange={onChangeID} value={id} placeholder="ID" />
          <InputText onChange={onChangePW} value={pw} placeholder="PASSWORD" />
          <SubmitButton>Login</SubmitButton>
        </LoginForm>
      </LoginBox>
    </BodyStyle>
  );
}

export default Login;
