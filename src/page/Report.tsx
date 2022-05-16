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
      const { data } = await reportApi.getReportList(currentPage + 1);
      setReportData(data.reports);
      reportDataState(data.reports);
      console.log(data.reports);
      setTotalPage(parseInt(data.total_page));
      console.log(parseInt(data.total_page));
    } catch (e) {
      console.log(e);
    }
  };

  const onDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onDetailState((pre) => !pre);
    selectedNumberState(parseInt((event.target as HTMLButtonElement).value));
    console.log(event.target);
    console.log((event.target as HTMLButtonElement).value);
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
            <ListBox onClick={onDetail} key={Data.idx} value={Data.idx}>
              <ElementText>{Data.title}</ElementText>
              {/* 
              <ElementText>{Data.user.email}</ElementText> */}
            </ListBox>
          ))}

          <Paging page={totalPage} />
        </SearchList>
      </ListDiv>
      {isDetail ? <ReportDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default Report;
