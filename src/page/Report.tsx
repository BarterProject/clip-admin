import styled from "styled-components";
import ReportDetail from "./Detail/ReportDetail";
import { DetailState } from "atoms";
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

function Report() {
  const isDetail = useRecoilValue(DetailState);
  const onDetailState = useSetRecoilState(DetailState);
  const [reportData, setReportData] = useState([]);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const getReportList = async () => {
    try {
      const { data } = await reportApi.getReportList();
      setReportData(data.reports);
      console.log(reportData);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    onDetailState((pre) => false);
    getReportList();
  }, []);

  const onDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onDetailState((pre) => !pre);
  };

  useEffect(() => {
    onDetailState((pre) => false);
  }, []);

  return (
    <AdminDiv>
      <ListDiv>
        <SearchList>
          <PageName>문의사항</PageName>
          <ListElementNameBox>
            <ListElementName>제목</ListElementName>
            <ListElementName>작성자</ListElementName>
          </ListElementNameBox>
          {reportData.map((Data: any) => (
            <ListBox onClick={onDetail} key="idx">
              <ElementText>{Data.title}</ElementText>
              <ElementText>{Data.user.email}</ElementText>
            </ListBox>
          ))}
        </SearchList>
      </ListDiv>
      {isDetail ? <ReportDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default Report;
