import styled from "styled-components";
const DetailBox = styled.div`
  width: 35%;
  display: flex;
  min-width: 400px;
  background-color: #b83232;
`;
function UserDetail() {
  return <DetailBox>여기는 유저디테일컴포넌트</DetailBox>;
}

export default UserDetail;
