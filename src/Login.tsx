import styled from "styled-components";
import { useForm, useFormState } from "react-hook-form";
import { useRecoilState } from "recoil";
import { IDState, PASSState } from "./atoms";
import React from "react";

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
  interface IForm {
    ID: string;
    PASSWORD: String;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <BodyStyle>
      <LoginBox>
        <TitleText>CLIP</TitleText>
        <LoginForm onSubmit={handleSubmit(onValid)}>
          <InputText
            {...register("ID", { required: "ID를 입력해주세요" })}
            placeholder="ID"
          />
          <span>{errors?.ID?.message}</span>
          <InputText
            {...register("PASSWORD", {
              required: "비밀번호를 입력해주세요",
            })}
            placeholder="PASSWORD"
          />
          {/* <span>{errors?.PASSWORD?.message}</span> */}
          <SubmitButton>Login</SubmitButton>
        </LoginForm>
      </LoginBox>
    </BodyStyle>
  );
}

export default Login;
