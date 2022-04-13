import styled from "styled-components";
import Nav from "./Nav";
import ReportDetail from "./Detail/ReportDetail";
import { DetailState } from "atoms";
import { useRecoilValue } from "recoil";

const AdminDiv = styled.div`
  flex-direction: row;
  display: flex;
`;
const ReportList = styled.div`
  width: 55%;
  display: flex;
  min-width: 500px;
  background-color: #8093f0;
`;
function Report() {
  const isDetail = useRecoilValue(DetailState);
  return (
    <AdminDiv>
      <Nav />
      <ReportList>리포트 입니다</ReportList>
      {isDetail ? <ReportDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default Report;
