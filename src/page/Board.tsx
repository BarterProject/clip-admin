import {
  DetailState,
  onBtn,
  PageNumber,
  ReportDataState,
  selectedReportNumber,
} from "atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import List, {
  ListBox,
  ListElementName,
  ListElementNameBox,
} from "components/List";
import {
  AdminDiv,
  ElementText,
  ListDiv,
  PageName,
} from "components/FormalForm";
import { SearchList } from "components/SearchBar";
import { useEffect, useState } from "react";
import { boardApi, postBoardApi, replyPostApi, reportApi } from "api";
import Paging from "components/Paging";
import ReportDetail from "./Detail/ReportDetail";
import BoardDetail from "./Detail/BoardDetail";
import styled from "styled-components";
import { SubmitBtn } from "components/DetailForm";

const PostInput = styled.input``;

function Board() {
  const onDetailState = useSetRecoilState(DetailState);
  const currentPage = useRecoilValue(PageNumber);
  const setCurrentPage = useSetRecoilState(PageNumber);
  const [totalPage, setTotalPage] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const isDetail = useRecoilValue(DetailState);
  const [boardData, setBoardData] = useState([]);
  const [boardTitleData, setBoardTitleData] = useState("");
  const [boardContentData, setBoardContentData] = useState("");
  const [boardCreatedAtData, setBoardCreatedAtData] = useState("");
  const [boardUserEmailData, setBoardUserEmailData] = useState("");
  const [boardReplyData, setBoardReplyData] = useState("");
  const [postTitleData, setPostTitleData] = useState("");
  const [postContextData, setPostContextData] = useState("");
  const setOnBtn = useSetRecoilState(onBtn);
  const isOnBtn = useRecoilValue(onBtn);
  useEffect(() => {
    onDetailState((pre) => false);
    getBoardList();
  }, [currentPage, isOnBtn]);
  useEffect(() => {
    setCurrentPage(0);
  }, []);
  const getBoardList = async () => {
    try {
      const { data } = await boardApi.getBoardList(currentPage);
      console.log(data.contents);
      setBoardData(data.contents);

      //setSortedBoardData(sorted());
    } catch (e) {
      console.log(e);
    }
  };
  const onDetail = (
    idx: number,
    title: string,
    createdAt: string,
    content: string,
    email: string,
    reply: string
  ) => {
    onDetailState((pre) => !pre);
    console.log(idx);
    setSelectedNumber(idx);
    setBoardTitleData(title);
    setBoardContentData(content);
    setBoardCreatedAtData(createdAt);
    setBoardUserEmailData(email);
    setBoardReplyData(reply);
  };

  //new post create
  const postTitleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    console.log(value);
    setPostTitleData(value);
  };
  const postContextInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    console.log(value);
    setPostContextData(value);
  };
  //post board api
  const postBoard = async () => {
    try {
      const { data } = await postBoardApi.postBoard(
        postTitleData,
        postContextData
      );
      console.log(data);

      setOnBtn(!isOnBtn);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AdminDiv>
      <ListDiv>
        <SearchList>
          <PageName>게시판</PageName>
          <ListElementNameBox>
            <ListElementName>제목</ListElementName>
            <ListElementName>작성자</ListElementName>
          </ListElementNameBox>
          {boardData.map((Data: any) => (
            <ListBox
              onClick={() => {
                onDetail(
                  Data.idx,
                  Data.title,
                  Data.createdAt,
                  Data.content,
                  Data.user.email,
                  Data.reply
                );
              }}
              key={Data.idx}
              value={Data.idx}
            >
              <ElementText>{Data.title}</ElementText>
              <ElementText>{Data.user.email}</ElementText>
            </ListBox>
          ))}

          <Paging page={totalPage + 1} />
          <PostInput placeholder="제목" onChange={postTitleInputChange} />
          <PostInput placeholder="내용" onChange={postContextInputChange} />
          <SubmitBtn onClick={postBoard}>작성하기</SubmitBtn>
        </SearchList>
      </ListDiv>
      {isDetail ? (
        <BoardDetail
          title={boardTitleData}
          content={boardContentData}
          user={boardUserEmailData}
          create={boardCreatedAtData}
          reply={boardReplyData}
          idx={selectedNumber}
        />
      ) : (
        <div></div>
      )}
    </AdminDiv>
  );
}

export default Board;
