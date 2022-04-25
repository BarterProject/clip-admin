import {
  Btn,
  DetailBox,
  DetailBoxFrame,
  DetailName,
  DetailText,
  SmallDetailBox,
  SubmitBtn,
} from "Components/DetailForm";
import styled from "styled-components";

function SupportDetail() {
  return (
    <DetailBox>
      <DetailBoxFrame>
        <SmallDetailBox>
          <DetailName>제목</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>작성자</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>신고자</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>내용</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>답장</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SubmitBtn>답장하기</SubmitBtn>
        <SmallDetailBox>
          <DetailName>상태</DetailName>
          <Btn>처리중</Btn>
          <Btn>처리완료</Btn>
        </SmallDetailBox>
      </DetailBoxFrame>
    </DetailBox>
  );
}

export default SupportDetail;
