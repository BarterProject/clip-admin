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
import { boardApi, reportApi } from "api";
import Paging from "Components/Paging";

function Board() {
  const onDetailState = useSetRecoilState(DetailState);
  const currentPage = useRecoilValue(PageNumber);
  const setCurrentPage = useSetRecoilState(PageNumber);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    onDetailState((pre) => false);
    getBoardList();
  }, [currentPage]);
  useEffect(() => {
    setCurrentPage(0);
  }, []);
  const getBoardList = async () => {
    try {
      const { data } = await boardApi.getBoardList(currentPage);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return <div></div>;
}

export default Board;
