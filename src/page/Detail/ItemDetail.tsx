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
  return (
    <DetailBox>
      <Profile>
        <ProfileImg />
        <ProfileName>아이폰12</ProfileName>
      </Profile>
      <DetailBoxFrame>
        <SmallDetailBox>
          <DetailName>제품명</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>보증금</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>카테고리</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>현 아이템 소유자</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>설명</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>상태</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>실 제품 소유자</DetailName>
          <DetailName>거래가조아</DetailName>
          <ProfileImg />
        </SmallDetailBox>
        <BtnBox>
          <SubmitBtn>내용 수정</SubmitBtn>
          <Btn>제품 삭제</Btn>
        </BtnBox>
      </DetailBoxFrame>
    </DetailBox>
  );
}

export default ItemDetail;
