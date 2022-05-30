import { completeReportApi, oneReportApi, reportApi } from "api";
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

function ReportDetail() {
  const selectedNumber = useRecoilValue(selectedReportNumber);
  const [reportData, setReportData] = useState();
  const [reportTitleData, setReportTitleData] = useState("");
  const [reportUserData, setReportUserData] = useState("");
  const [reportContentData, setReportContentData] = useState("");
  const [reportStateData, setReportStateData] = useState("");

  const [onBtn, setOnBtn] = useState(true);
  const getReportList = async () => {
    try {
      const { data } = await oneReportApi.getOneReport(selectedNumber);
      setReportData(data);
      setReportTitleData(data.title);
      setReportUserData(data.user.email);
      setReportContentData(data.content);
      setReportStateData(data.state);
      console.log(data);
      console.log(reportTitleData);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getReportList();
  }, [onBtn]);

  const completeReport = async () => {
    try {
      const { data } = await completeReportApi.completeReport(selectedNumber);
      console.log(data);
      setOnBtn(!onBtn);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DetailBox>
      <DetailBoxFrame>
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
          <DetailName>상태</DetailName>
          {reportStateData == "1" ? (
            <>
              <DetailText>처리중</DetailText>
              <SubmitBtn onClick={completeReport}>완료하기</SubmitBtn>
            </>
          ) : (
            <DetailText>처리완료</DetailText>
          )}
        </SmallDetailBox>
      </DetailBoxFrame>
    </DetailBox>
  );
}

export default ReportDetail;
