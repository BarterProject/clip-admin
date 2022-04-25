import styled from "styled-components";
import ReportDetail from "./Detail/ReportDetail";
import { DetailState } from "atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ListElementNameBox, ListElementName, ListBox } from "Components/List";
import { AdminDiv, ListDiv, PageName } from "Components/FormalForm";
import { SearchList } from "Components/SearchBar";
import { useEffect } from "react";

function Report() {
  const isDetail = useRecoilValue(DetailState);
  const onDetailState = useSetRecoilState(DetailState);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  useEffect(() => {
    onDetailState((pre) => false);
  }, []);
  const onDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onDetailState((pre) => !pre);
  };
  return (
    <AdminDiv>
      <ListDiv>
        <SearchList>
          <PageName>문의사항</PageName>
          <ListElementNameBox>
            <ListElementName>제목</ListElementName>
            <ListElementName>작성자</ListElementName>
          </ListElementNameBox>
          {array.map((ele) => (
            <ListBox onClick={onDetail}>{ele}</ListBox>
          ))}
        </SearchList>
      </ListDiv>
      {isDetail ? <ReportDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default Report;
