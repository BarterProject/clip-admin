import {
  activateItemApi,
  deactivateItemApi,
  getImageApi,
  oneItemApi,
  refundItemApi,
  returnDepositItemApi,
} from "api";
import { selectedItemNumber } from "atoms";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { isConstructSignatureDeclaration } from "typescript";

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

import { itemType, deliveryType } from "../../types";

function ItemDetail(props: any) {
  const [oneItemData, setOneItemData] = useState<itemType>();
  const [itemNameData, setItemNameData] = useState("");
  const [depositData, setDepositData] = useState("");
  const [itemCategoryData, setItemCategoryData] = useState("");
  const [ownerData, setOwner] = useState();
  const [descriptionData, setDescription] = useState("");
  const [stateData, setState] = useState("");
  const [deliveryData, setDeliveryData] = useState(0);
  const [registrantData, setRegistrant] = useState();
  const [onBtn, setOnBtn] = useState(true);

  const getItemInfomation = async () => {
    try {
      const { data } = await oneItemApi.getOneItemList(props.selectedIdx);
      setOneItemData(data);
      console.log(data);
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
  }, [onBtn]);

  const activateItem = async () => {
    try {
      const { data } = await activateItemApi.activateItem(props.selectedIdx);
      console.log(data);
      setOnBtn(!onBtn);
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
      setOnBtn(!onBtn);
    } catch (e) {
      console.log(e);
    }
  };

  const refundItem = async () => {
    try {
      const { data } = await refundItemApi.refundItem(props.selectedIdx);
      console.log(data);
      setOnBtn(!onBtn);
    } catch (e) {
      console.log(e);
    }
  };

  const returnDepositItem = async () => {
    try {
      const { data } = await returnDepositItemApi.returnDepositem(
        props.selectedIdx
      );
      console.log(data);
      setOnBtn(!onBtn);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DetailBox>
      <Profile>
        <ProfileImg
          src={`${process.env.REACT_APP_BASE_URL}/api/v2/items/images/${oneItemData?.images[0].name}`}
        />
        <ProfileName>{itemNameData}</ProfileName>
      </Profile>
      <DetailBoxFrame>
        <SmallDetailBox>
          <DetailName>?????????</DetailName>
          <DetailText>{itemNameData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>?????????</DetailName>
          <DetailText>{depositData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>????????????</DetailName>
          <DetailText>{itemCategoryData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>??? ????????? ?????????</DetailName>
          <DetailText>{ownerData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>??????</DetailName>
          <DetailText>{descriptionData}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>??????</DetailName>
          {stateData == "0" ? (
            <DetailText>????????????</DetailText>
          ) : stateData == "1" ? (
            <DetailText>?????????</DetailText>
          ) : stateData == "2" ? (
            <DetailText>?????????</DetailText>
          ) : stateData == "3" ? (
            <DetailText>??????</DetailText>
          ) : stateData == "4" ? (
            <DetailText>?????? ??????</DetailText>
          ) : stateData == "5" ? (
            <DetailText>?????? ??????</DetailText>
          ) : stateData == "6" ? (
            <DetailText>?????? ??????</DetailText>
          ) : stateData == "7" ? (
            <DetailText>????????? ?????? ??????</DetailText>
          ) : (
            <></>
          )}
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>??? ?????? ?????????</DetailName>
          <DetailName>{registrantData}</DetailName>
          {/* 
          <ProfileImg /> */}
        </SmallDetailBox>
        <BtnBox>
          {stateData == "0" ? (
            <SubmitBtn onClick={activateItem}>????????? ?????????</SubmitBtn>
          ) : (
            <></>
          )}
          {stateData == "1" ? (
            <Btn onClick={deactivateItem}>????????? ????????????</Btn>
          ) : (
            <></>
          )}
          {stateData == "4" ? (
            <SubmitBtn onClick={activateItem}>????????? ?????????</SubmitBtn>
          ) : (
            <></>
          )}
          {stateData == "5" ? (
            <SubmitBtn onClick={refundItem}>??????</SubmitBtn>
          ) : (
            <></>
          )}
          {stateData == "7" ? (
            <SubmitBtn onClick={returnDepositItem}>????????? ??????</SubmitBtn>
          ) : (
            <></>
          )}
        </BtnBox>
      </DetailBoxFrame>
    </DetailBox>
  );
}

export default ItemDetail;
