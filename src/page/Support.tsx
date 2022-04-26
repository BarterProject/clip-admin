import styled from "styled-components";
import SupportDetail from "page/Detail/SupportDetail";
import { DetailState } from "atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import List from "Components/List";
import { AdminDiv, ListDiv, PageName } from "Components/FormalForm";
import { SearchList } from "Components/SearchBar";
import { useEffect } from "react";

function Support() {
  const isDetail = useRecoilValue(DetailState);
  const onDetailState = useSetRecoilState(DetailState);
  useEffect(() => {
    onDetailState((pre) => false);
  }, []);
  return (
    <AdminDiv>
      <ListDiv>
        <SearchList>
          <PageName>신고</PageName>
          <List currentName="support" />
        </SearchList>
      </ListDiv>
      {isDetail ? <SupportDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default Support;
