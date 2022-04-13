import styled from "styled-components";
import Nav from "./Nav";

const AdminDiv = styled.div`
  flex-direction: row;
  display: flex;
`;

function Category() {
  return (
    <AdminDiv>
      <Nav />
      <div>카테고리 입니다</div>
    </AdminDiv>
  );
}

export default Category;
