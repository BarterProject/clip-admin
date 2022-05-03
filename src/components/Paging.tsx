import { PageNumber } from "atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

const PagingBox = styled.div``;

const PagingBtn = styled.button``;

const LeftBtn = styled.button``;
const FirstBtn = styled.button``;
const RightBtn = styled.button``;
const LastBtn = styled.button``;

function Paging() {
  const currentPage = useRecoilValue(PageNumber);
  const setCurrentPage = useSetRecoilState(PageNumber);

  const onFirst = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log((event.target as HTMLButtonElement).value);
    setCurrentPage(parseInt((event.target as HTMLButtonElement).value) - 1);
  };
  const onSecond = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log((event.target as HTMLButtonElement).value);
    setCurrentPage(parseInt((event.target as HTMLButtonElement).value) - 1);
  };
  const onThird = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log((event.target as HTMLButtonElement).value);
    setCurrentPage(parseInt((event.target as HTMLButtonElement).value) - 1);
  };

  return (
    <PagingBox>
      {currentPage > 1 ? (
        <>
          <FirstBtn onClick={() => setCurrentPage(0)}>{"<<"}</FirstBtn>
          <LeftBtn onClick={() => setCurrentPage(currentPage - 1)}>
            {"<"}
          </LeftBtn>
        </>
      ) : (
        <></>
      )}
      {currentPage > 0 ? (
        <PagingBtn onClick={onFirst} value={currentPage}>
          {currentPage}
        </PagingBtn>
      ) : (
        <></>
      )}
      <PagingBtn onClick={onSecond} value={currentPage + 1}>
        {currentPage + 1}
      </PagingBtn>
      <PagingBtn onClick={onThird} value={currentPage + 2}>
        {currentPage + 2}
      </PagingBtn>
      <RightBtn onClick={() => setCurrentPage(currentPage + 1)}>{">"}</RightBtn>
      <LastBtn onClick={() => setCurrentPage(0)}>{">>"}</LastBtn>
    </PagingBox>
  );
}

export default Paging;
