import styled from "styled-components";
import Nav from "./Nav";
import ItemDetail from "./Detail/ItemDetail";

const AdminDiv = styled.div`
  flex-direction: row;
  display: flex;
`;

function Item() {
  return (
    <AdminDiv>
      <Nav />
      <div>아이템 입니다</div>
      <ItemDetail />
    </AdminDiv>
  );
}

export default Item;
