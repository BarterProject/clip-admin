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

function BoardDetail(props: any) {
  return (
    <DetailBox>
      <DetailBoxFrame>
        <SmallDetailBox>
          <DetailName>제목</DetailName>
          <DetailText>{props.title}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>작성자</DetailName>
          <DetailText>{props.user}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>작성 날짜</DetailName>
          <DetailText>{props.create}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>내용</DetailName>
          <DetailText>{props.content}</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>답장</DetailName>
          <DetailText>{props.reply}</DetailText>
        </SmallDetailBox>
        <SubmitBtn>답장하기</SubmitBtn>
      </DetailBoxFrame>
    </DetailBox>
  );
}

export default BoardDetail;
