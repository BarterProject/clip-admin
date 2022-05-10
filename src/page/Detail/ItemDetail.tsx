import { activateItemApi, deactivateItemApi, oneItemApi } from "api";
import { selectedItemNumber } from "atoms";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import {
  DetailBox,
  Profile,
  ProfileImg,
  ProfileName,
  DetailBoxFrame,
  SmallDetailBox,
  DetailName,
  DetailText,
  BtnBox,
  Btn,
  SubmitBtn,
} from "../../Components/DetailForm";

function ItemDetail() {
  const selectedNumber = useRecoilValue(selectedItemNumber);
  const [oneItemData, setOneItemData] = useState();
  const [itemNameData, setItemNameData] = useState("");
  const [depositData, setDepositData] = useState("");
  const [itemCategoryData, setItemCategoryData] = useState("");
  const [ownerData, setOwner] = useState();
  const [descriptionData, setDescription] = useState("");
  const [stateData, setState] = useState("");
  const [registrantData, setRegistrant] = useState();
  const getItemInfomation = async () => {
    try {
      const { data } = await oneItemApi.getOneItemList(selectedNumber);
      setOneItemData(data);
      setItemNameData(data.name);
      setDepositData(data.deposit);
      setItemCategoryData(data.itemCategory.name);
      setOwner(data.owner.email);
      setDescription(data.description);
      setState(data.state);
      setRegistrant(data.registrant.email);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getItemInfomation();
  }, []);

  const activateItem = async () => {
    try {
      const { data } = await activateItemApi.activateItem(selectedNumber);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const deactivateItem = async () => {
    try {
      const { data } = await deactivateItemApi.deactivateItem(selectedNumber);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DetailBox>
      <Profile>
        <ProfileImg />
        <ProfileName>{itemNameData}</ProfileName>
      </Profile>
      <DetailBoxFrame>
        <SmallDetailBox>
          <DetailName>제품명</DetailName>
          <DetailText>{itemNameData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>보증금</DetailName>
          <DetailText>{depositData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>카테고리</DetailName>
          <DetailText>{itemCategoryData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>현 아이템 소유자</DetailName>
          <DetailText>{ownerData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>설명</DetailName>
          <DetailText>{descriptionData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>상태</DetailName>
          {stateData == "1" ? (
            <DetailText>활성화</DetailText>
          ) : (
            <DetailText>비활성화</DetailText>
          )}
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>실 제품 소유자</DetailName>
          <DetailName>{registrantData}</DetailName>
          <ProfileImg />
        </SmallDetailBox>
        <BtnBox>
          <SubmitBtn onClick={activateItem}>아이템 활성화</SubmitBtn>
          <Btn onClick={deactivateItem}>아이템 비활성화</Btn>
        </BtnBox>
      </DetailBoxFrame>
    </DetailBox>
  );
}

export default ItemDetail;
