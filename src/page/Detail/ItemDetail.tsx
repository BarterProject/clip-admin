import {
  activateItemApi,
  deactivateItemApi,
  oneItemApi,
  refundItemApi,
  returnDepositItemApi,
} from "api";
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
} from "../../components/DetailForm";

function ItemDetail(props: any) {
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
      const { data } = await oneItemApi.getOneItemList(props.selectedIdx);
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
      const { data } = await activateItemApi.activateItem(props.selectedIdx);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const deactivateItem = async () => {
    try {
      const { data } = await deactivateItemApi.deactivateItem(
        props.selectedIdx
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const refundItem = async () => {
    try {
      const { data } = await refundItemApi.refundItem(props.selectedIdx);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const returnDepositItem = async () => {
    try {
      const { data } = await returnDepositItemApi.returnDepositItem(
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
          {stateData == "0" ? (
            <DetailText>비활성화</DetailText>
          ) : stateData == "1" ? (
            <DetailText>활성화</DetailText>
          ) : stateData == "2" ? (
            <DetailText>교환중</DetailText>
          ) : stateData == "3" ? (
            <DetailText>종료</DetailText>
          ) : stateData == "4" ? (
            <DetailText>등록 대기</DetailText>
          ) : stateData == "5" ? (
            <DetailText>환불 요청</DetailText>
          ) : stateData == "6" ? (
            <DetailText>환불 완료</DetailText>
          ) : stateData == "7" ? (
            <DetailText>보증금 반환 요청</DetailText>
          ) : (
            <></>
          )}
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>실 제품 소유자</DetailName>
          <DetailName>{registrantData}</DetailName>
          <ProfileImg />
        </SmallDetailBox>
        <BtnBox>
          {stateData == "0" ? (
            <SubmitBtn onClick={activateItem}>아이템 활성화</SubmitBtn>
          ) : (
            <></>
          )}
          {stateData == "1" ? (
            <Btn onClick={deactivateItem}>아이템 비활성화</Btn>
          ) : (
            <></>
          )}
          {stateData == "4" ? (
            <SubmitBtn onClick={activateItem}>아이템 활성화</SubmitBtn>
          ) : (
            <></>
          )}
          {stateData == "5" ? (
            <SubmitBtn onClick={refundItem}>환불</SubmitBtn>
          ) : (
            <></>
          )}
          {stateData == "7" ? (
            <SubmitBtn onClick={returnDepositItem}>보증금 반환</SubmitBtn>
          ) : (
            <></>
          )}
        </BtnBox>
      </DetailBoxFrame>
    </DetailBox>
  );
}

export default ItemDetail;
