import { oneReportApi, reportApi } from "api";
import { selectedReportNumber } from "atoms";
import {
  DetailBox,
  DetailBoxFrame,
  SmallDetailBox,
  DetailName,
  DetailText,
  SubmitBtn,
  Btn,
} from "Components/DetailForm";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

function BoardDetail() {
  return (
    <DetailBox>
      {/* <DetailBoxFrame>
    <SmallDetailBox>
      <DetailName>제목</DetailName>
      <DetailText>{reportTitleData}</DetailText>
    </SmallDetailBox>
    <SmallDetailBox>
      <DetailName>작성자</DetailName>
      <DetailText>{reportUserData}</DetailText>
    </SmallDetailBox>
    <SmallDetailBox>
      <DetailName>내용</DetailName>
      <DetailText>{reportContentData}</DetailText>
    </SmallDetailBox>
    <SmallDetailBox>
      <DetailName>답장</DetailName>
      <DetailText>웅냐</DetailText>
    </SmallDetailBox>
    <SubmitBtn>답장하기</SubmitBtn>
    <SmallDetailBox>
      <DetailName>상태</DetailName>
      {reportStateData == "1" ? <Btn>처리중</Btn> : <Btn>처리완료</Btn>}
    </SmallDetailBox>
  </DetailBoxFrame> */}
    </DetailBox>
  );
}

export default BoardDetail;
