import styled from "styled-components";
import Nav from "./Nav";
import SupportDetail from "./Detail/SupportDetail";

const AdminDiv = styled.div`
  flex-direction: row;
  display: flex;
`;

function Support() {
  return (
    <AdminDiv>
      <Nav />
      <div>서포트 입니다</div>
      <SupportDetail />
    </AdminDiv>
  );
}

export default Support;
