import { oneReportApi, replyPostApi, reportApi } from "api";
import { selectedReportNumber } from "atoms";
import {
  DetailBox,
  DetailBoxFrame,
  SmallDetailBox,
  DetailName,
  DetailText,
  SubmitBtn,
  Btn,
} from "components/DetailForm";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const ReplyInput = styled.input``;

function BoardDetail(props: any) {
  const [replyData, setReplyData] = useState("");

  //new category name input state
  const replyInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    console.log(value);
    setReplyData(value);
  };
  //reply api
  const replyBoard = async () => {
    try {
      const { data } = await replyPostApi.replyPost(props.idx, replyData);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
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
          <DetailText>
            {props.reply == null ? "답장되지 않음" : props.reply}
          </DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <ReplyInput
            placeholder="답장할 내용을 적으세요"
            onChange={replyInputChange}
          />
          <SubmitBtn onClick={replyBoard}>답장하기</SubmitBtn>
        </SmallDetailBox>
      </DetailBoxFrame>
    </DetailBox>
  );
}

export default BoardDetail;
