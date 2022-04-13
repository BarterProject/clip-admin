import Admin_nav from "./Admin_nav";
import Admin_user from "./Admin_user";
import styled from "styled-components";
const AdminDiv = styled.div`
  flex-direction: row;
  display: flex;
`;
function Admin() {
  return (
    <AdminDiv>
      <Admin_nav />
      <Admin_user />
    </AdminDiv>
  );
}
export default Admin;
