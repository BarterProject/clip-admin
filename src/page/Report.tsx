import styled from "styled-components";
import ReportDetail from "./Detail/ReportDetail";
import {
  DetailState,
  PageNumber,
  ReportDataState,
  selectedReportNumber,
} from "atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import List, {
  ListBox,
  ListElementName,
  ListElementNameBox,
} from "Components/List";
import {
  AdminDiv,
  ElementText,
  ListDiv,
  PageName,
} from "Components/FormalForm";
import { SearchList } from "Components/SearchBar";
import { useEffect, useState } from "react";
import { reportApi } from "api";
import Paging from "Components/Paging";

function Report() {
  const isDetail = useRecoilValue(DetailState);
  const onDetailState = useSetRecoilState(DetailState);
  const [reportData, setReportData] = useState([]);
  const selectedNumberState = useSetRecoilState(selectedReportNumber);
  const reportDataState = useSetRecoilState(ReportDataState);
  const currentPage = useRecoilValue(PageNumber);
  const setCurrentPage = useSetRecoilState(PageNumber);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    onDetailState((pre) => false);
    getReportList();
  }, [currentPage]);
  useEffect(() => {
    setCurrentPage(0);
  }, []);

  const getReportList = async () => {
    try {
      const { data } = await reportApi.getReportList(currentPage);
      setReportData(data.reports);
      reportDataState(data.reports);
      console.log(data.reports);
      setTotalPage(parseInt(data.total_page));
      console.log(parseInt(data.total_page));
    } catch (e) {
      console.log(e);
    }
  };

  const onDetail = (idx: number) => {
    onDetailState((pre) => !pre);
    console.log(idx);
    selectedNumberState(idx);
  };

  return (
    <AdminDiv>
      <ListDiv>
        <SearchList>
          <PageName>신고</PageName>
          <ListElementNameBox>
            <ListElementName>제목</ListElementName>
            {/* 
            <ListElementName>작성자</ListElementName> */}
          </ListElementNameBox>

          {reportData.map((Data: any) => (
            <ListBox
              onClick={() => {
                onDetail(Data.idx);
              }}
              key={Data.idx}
              value={Data.idx}
            >
              <ElementText>{Data.title}</ElementText>
              {/* 
              <ElementText>{Data.user.email}</ElementText> */}
            </ListBox>
          ))}

          <Paging page={totalPage + 1} />
        </SearchList>
      </ListDiv>
      {isDetail ? <ReportDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default Report;
