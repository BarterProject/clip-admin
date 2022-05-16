import { oneUserApi } from "api";
import { selectedItemNumber } from "atoms";
import {
  DetailBox,
  Profile,
  ProfileImg,
  ProfileName,
  DetailBoxFrame,
  SmallDetailBox,
  DetailName,
  DetailText,
  MoreBtn,
} from "Components/DetailForm";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

function UserDetail(props: any) {
  const [userEmailData, setUserEmailData] = useState("");
  const [userPasswordData, setUserPasswordData] = useState("");
  const [userPhoneData, setUserPhoneData] = useState("");
  const [userAddressData, setUserAddressData] = useState("");
  const [userStateData, setUserStateData] = useState("");
  const [userBankData, setUserBankData] = useState("");
  const [userBankAccountData, setUserBankAccountData] = useState("");

  const getUserInfomation = async () => {
    try {
      const { data } = await oneUserApi.getOneUserList(props.selectedIdx);
      console.log(data);
      setUserEmailData(data.email);
      setUserPasswordData(data.password);
      setUserPhoneData(data.phone);
      setUserAddressData(data.address);
      setUserStateData(data.auth);
      setUserBankData(data.bankKind);
      setUserBankAccountData(data.bankAccount);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUserInfomation();
  }, []);
  return (
    <DetailBox>
      <Profile>
        <ProfileImg />
        <ProfileName>{userEmailData}</ProfileName>
      </Profile>
      <DetailBoxFrame>
        <SmallDetailBox>
          <DetailName>아이디</DetailName>
          <DetailText>{userEmailData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>비밀번호</DetailName>
          <DetailText>{userPasswordData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>연락처</DetailName>
          <DetailText>{userPhoneData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>주소</DetailName>
          <DetailText>{userAddressData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>상태</DetailName>
          <DetailText>{userStateData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>은행</DetailName>
          <DetailText>{userBankData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>계좌</DetailName>
          <DetailText>{userBankAccountData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>아이템</DetailName>
          <DetailText>아이템이...있다!</DetailText>
        </SmallDetailBox>
        <MoreBtn>더보기</MoreBtn>
      </DetailBoxFrame>
    </DetailBox>
  );
}

export default UserDetail;
