import styled from "styled-components";
import ReportDetail from "./Detail/ReportDetail";
import { DetailState } from "atoms";
import { useRecoilValue } from "recoil";

const AdminDiv = styled.div`
  width: 100vw;
  flex-direction: row;
  display: flex;
`;
const ReportName = styled.span`
  font-size: 30px;
  padding: 0 0 30px 20px;
`;

const SearchList = styled.ul`
  padding-left: 0;
  justify-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: right;
  align-content: space-around;
  list-style: none;
  margin-top: 40px;
`;
const ListElementName = styled.span`
  margin: 0 90px 0 30px;
  height: 30px;
`;
const ListElementNameBox = styled.div`
  display: flex;
`;

const ListElement = styled.li`
  width: 90%;
  height: 30px;
  background-color: #e6edf4;
  margin: 8px;
  min-width: 400px;
  max-width: 600px;
  border-radius: 15px;
`;

const ReportList = styled.div`
  width: 75%;
  display: flex;
  min-width: 500px;
  flex-direction: column;
`;
function Report() {
  const isDetail = useRecoilValue(DetailState);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <AdminDiv>
      <ReportList>
        <SearchList>
          <ReportName>문의사항</ReportName>
          <ListElementNameBox>
            <ListElementName>제목</ListElementName>
            <ListElementName>작성자</ListElementName>
          </ListElementNameBox>
          {array.map((ele) => (
            <ListElement>{ele}</ListElement>
          ))}
        </SearchList>
      </ReportList>
      {isDetail ? <ReportDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default Report;
