import styled from "styled-components";

const AdminDiv = styled.div`
  flex-direction: row;
  width: 100vw;
  display: flex;
`;

function Category() {
  return (
    <AdminDiv>
      <div>카테고리 입니다</div>
    </AdminDiv>
  );
}

export default Category;
