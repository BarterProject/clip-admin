import { PageNumber } from "atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

const PagingBox = styled.div``;

const PagingBtn = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 50px;
  font-size: 16px;
  color: white;
  margin: 5px;
`;

const BtnOne = styled(PagingBtn)`
  background-color: #6a76e3;
`;

const BtnTwo = styled(PagingBtn)`
  background-color: #5f6ace;
`;

const BtnThree = styled(PagingBtn)`
  background-color: #4f58ab;
`;

const ArrowBtn = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  background-color: white;
  font-weight: bold;
  font-size: 20px;
`;

const LeftBtn = styled(ArrowBtn)`
  color: #6a76e3;
`;
const RightBtn = styled(ArrowBtn)`
  color: #4f58ab;
`;

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
          <LeftBtn onClick={() => setCurrentPage(0)}>{"<<"}</LeftBtn>
          <LeftBtn onClick={() => setCurrentPage(currentPage - 1)}>
            {"<"}
          </LeftBtn>
        </>
      ) : (
        <></>
      )}
      {currentPage > 0 ? (
        <BtnOne onClick={onFirst} value={currentPage}>
          {currentPage}
        </BtnOne>
      ) : (
        <></>
      )}
      <BtnTwo onClick={onSecond} value={currentPage + 1}>
        {currentPage + 1}
      </BtnTwo>
      <BtnThree onClick={onThird} value={currentPage + 2}>
        {currentPage + 2}
      </BtnThree>
      <RightBtn onClick={() => setCurrentPage(currentPage + 1)}>{">"}</RightBtn>
      <RightBtn onClick={() => setCurrentPage(0)}>{">>"}</RightBtn>
    </PagingBox>
  );
}

export default Paging;
