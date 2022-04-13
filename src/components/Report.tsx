import styled from "styled-components";
import Nav from "./Nav";
import ReportDetail from "./Detail/ReportDetail";

const AdminDiv = styled.div`
  flex-direction: row;
  display: flex;
`;

function Report() {
  return (
    <AdminDiv>
      <Nav />
      <div>리포트 입니다</div>
      <ReportDetail />
    </AdminDiv>
  );
}

export default Report;
