import styled from "styled-components";
import Nav from "./Nav";
import SupportDetail from "./Detail/SupportDetail";
import { DetailState } from "atoms";
import { useRecoilValue } from "recoil";

const AdminDiv = styled.div`
  flex-direction: row;
  display: flex;
`;
const SupportList = styled.div`
  width: 55%;
  display: flex;
  min-width: 500px;
  background-color: #f080c5;
`;
function Support() {
  const isDetail = useRecoilValue(DetailState);
  return (
    <AdminDiv>
      <Nav />
      <SupportList>서포트 입니다</SupportList>
      {isDetail ? <SupportDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default Support;
