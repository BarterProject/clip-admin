import {
  activateUserApi,
  deactivateUserApi,
  oneUserApi,
  userItemSearchApi,
} from "api";
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
  Btn,
  BtnBox,
  SubmitBtn,
} from "components/DetailForm";
import { useEffect, useState } from "react";

function UserDetail(props: any) {
  const [userEmailData, setUserEmailData] = useState("");
  const [userPasswordData, setUserPasswordData] = useState("");
  const [userPhoneData, setUserPhoneData] = useState("");
  const [userAddressData, setUserAddressData] = useState("");
  const [userStateData, setUserStateData] = useState("");
  const [userBankData, setUserBankData] = useState("");
  const [userBankAccountData, setUserBankAccountData] = useState("");
  const [userOwnerItemData, setUserOwnerItemData] = useState([]);
  const [userRegistrentItemData, setUserRegistrentItemData] = useState([]);
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

  const getUserRegistrantItemList = async () => {
    try {
      const { data } = await userItemSearchApi.userItem(
        props.selectedIdx,
        "registrant"
      );
      setUserRegistrentItemData(data.items);
      console.log(data.items);
    } catch (e) {
      console.log(e);
    }
  };
  const getUserOwnerItemList = async () => {
    try {
      const { data } = await userItemSearchApi.userItem(
        props.selectedIdx,
        "owner"
      );
      setUserOwnerItemData(data.items);
      console.log(data.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserInfomation();
    getUserRegistrantItemList();
    getUserOwnerItemList();
  }, []);

  const activateUser = async () => {
    try {
      const { data } = await activateUserApi.activateUser(props.selectedIdx);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const deactivateUser = async () => {
    try {
      const { data } = await deactivateUserApi.deactivateUser(
        props.selectedIdx
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

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
        <BtnBox>
          <SubmitBtn onClick={activateUser}>유저 활성화</SubmitBtn>
          <Btn onClick={deactivateUser}>유저 비활성화</Btn>
        </BtnBox>
        <SmallDetailBox>
          <DetailName>아이템</DetailName>
          {/* {userOwnerItemData.map((Data: any) => {
            <ListBox key={Data.idx}>{Data.name}</ListBox>;
          })} */}
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>등록한 아이템</DetailName>
          <DetailText>아이템이...있다!</DetailText>
        </SmallDetailBox>
        {/* <MoreBtn>더보기</MoreBtn> */}
      </DetailBoxFrame>
    </DetailBox>
  );
}

export default UserDetail;
