import {
  activateUserApi,
  deactivateUserApi,
  getImageApi,
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
import styled from "styled-components";
import { userType } from "types";

const ItemList = styled.div``;
const UserItemBox = styled.div`
  width: 150px;
  height: 30px;
  margin: 0 0 5px 0;
  padding: 0 2px 0 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: #eef0ff;
  border-radius: 50px;
`;

function UserDetail(props: any) {
  const [oneUserData, setOneUserData] = useState<userType>();
  const [userEmailData, setUserEmailData] = useState("");
  const [userImageData, setUserImageData] = useState("");
  const [userPasswordData, setUserPasswordData] = useState("");
  const [userPhoneData, setUserPhoneData] = useState("");
  const [userAddressData, setUserAddressData] = useState("");
  const [userStateData, setUserStateData] = useState();
  const [userBankData, setUserBankData] = useState("");
  const [userBankAccountData, setUserBankAccountData] = useState("");
  const [userOwnerItemData, setUserOwnerItemData] = useState([]);
  const [userRegistrentItemData, setUserRegistrentItemData] = useState([]);
  const [onBtn, setOnBtn] = useState(true);

  const getUserInfomation = async () => {
    try {
      const { data } = await oneUserApi.getOneUserList(props.selectedIdx);
      console.log(data);
      setOneUserData(data);
      setUserImageData(data.image?.name);
      setUserEmailData(data.email);
      setUserPasswordData(data.password);
      setUserPhoneData(data.phone);
      setUserAddressData(data.address);
      setUserStateData(data.activated);
      setUserBankData(data.bankKind);
      setUserBankAccountData(data.bankAccount);
      //console.log(data.images[0].name);
      //setUserImgName(data.images[0].name);
      console.log("????????????????????????:" + userImageData);
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
      //console.log(data.items);
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
      //console.log(data.items);
    } catch (e) {
      console.log(e);
    }
  };
  /* 
  const getUserImg = async () => {
    try {
      const { data } = await getImageApi.getImg(userImgName);
      console.log(data + "dasd");
      setUserImg(data);
    } catch (e) {
      console.log(e);
    }
  }; */

  useEffect(() => {
    getUserInfomation();
    getUserRegistrantItemList();
    getUserOwnerItemList();
    //getUserImg();
  }, [onBtn]);

  const activateUser = async () => {
    try {
      const { data } = await activateUserApi.activateUser(props.selectedIdx);
      console.log(data);
      setOnBtn(!onBtn);
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
      setOnBtn(!onBtn);
    } catch (e) {
      console.log(e);
    }
  };

  //console.log("??? ?????? ?????????" + userStateData);

  return (
    <DetailBox>
      <Profile>
        <ProfileImg
          src={`${process.env.REACT_APP_BASE_URL}/api/v2/user/image/${userImageData}`}
        />
        <ProfileName>{userEmailData}</ProfileName>
      </Profile>
      <DetailBoxFrame>
        <SmallDetailBox>
          <DetailName>?????????</DetailName>
          <DetailText>{userEmailData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>????????????</DetailName>
          <DetailText>{userPasswordData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>?????????</DetailName>
          <DetailText>{userPhoneData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>??????</DetailName>
          <DetailText>{userAddressData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>??????</DetailName>
          {userStateData == true ? (
            <DetailText>????????????</DetailText>
          ) : userStateData == false ? (
            <DetailText>???????????????</DetailText>
          ) : (
            <></>
          )}
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>??????</DetailName>
          <DetailText>{userBankData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>??????</DetailName>
          <DetailText>{userBankAccountData}</DetailText>
        </SmallDetailBox>
        <BtnBox>
          {userStateData == false ? (
            <SubmitBtn onClick={activateUser}>?????? ?????????</SubmitBtn>
          ) : userStateData == true ? (
            <Btn onClick={deactivateUser}>?????? ????????????</Btn>
          ) : (
            <></>
          )}
        </BtnBox>
        <SmallDetailBox>
          <DetailName>?????????</DetailName>
          <ItemList>
            {userOwnerItemData.map((Data: any) => (
              <UserItemBox>{Data.name}</UserItemBox>
            ))}
          </ItemList>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>????????? ?????????</DetailName>
          <ItemList>
            {userRegistrentItemData.map((Data: any) => {
              return <UserItemBox>{Data.name}</UserItemBox>;
            })}
          </ItemList>
        </SmallDetailBox>
        {/* <MoreBtn>?????????</MoreBtn> */}
      </DetailBoxFrame>
    </DetailBox>
  );
}

export default UserDetail;
