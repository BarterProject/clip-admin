import styled from "styled-components";
import ReportDetail from "./Detail/ReportDetail";
import { DetailState } from "atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import List from "Components/List";
import { AdminDiv, ListDiv, PageName } from "Components/FormalForm";
import { SearchList } from "Components/SearchBar";
import { useEffect } from "react";

function Report() {
  const isDetail = useRecoilValue(DetailState);
  const onDetailState = useSetRecoilState(DetailState);
  useEffect(() => {
    onDetailState((pre) => false);
  }, []);

  return (
    <AdminDiv>
      <ListDiv>
        <SearchList>
          <PageName>문의사항</PageName>
          <List currentName="report" />
        </SearchList>
      </ListDiv>
      {isDetail ? <ReportDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default Report;
