import styled from "styled-components";
import Nav from "./Nav";
import UserDetail from "./Detail/UserDetail";
import ItemDetail from "./Detail/ItemDetail";
import { UserDetailState, ItemDetailState } from "atoms";
import { useRecoilValue } from "recoil";

const AdminDiv = styled.div`
  flex-direction: row;
  display: flex;
`;
const ItemList = styled.div`
  width: 55%;
  display: flex;
  min-width: 500px;
  background-color: #80f0af;
`;
function Item() {
  const isUserDetail = useRecoilValue(UserDetailState);
  const isItemDetail = useRecoilValue(ItemDetailState);
  return (
    <AdminDiv>
      <Nav />
      <ItemList>아이템 입니다</ItemList>
      {isUserDetail ? <UserDetail /> : <div></div>}
      {isItemDetail ? <ItemDetail /> : <div></div>}
    </AdminDiv>
  );
}

export default Item;
