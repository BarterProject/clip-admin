import styled from "styled-components";

export const DetailBox = styled.div`
  width: 35%;
  display: flex;
  min-width: 300px;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Profile = styled.div`
  display: flex;
  max-width: 400px;
  margin: 30px 0 30px 30px;
`;
export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
`;
export const ProfileName = styled.span`
  text-align: center;
  align-self: center;
  font-size: 30px;
  margin-left: 20px;
`;
export const SmallDetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 13px 0 13px 0;
`;
export const DetailName = styled.span`
  margin-left: 15px;
  font-size: 18px;
`;
export const DetailText = styled.div`
  width: 200px;
  background-color: #e6edf4;
  border-radius: 5px;
  margin-right: 15px;
`;
export const DetailBoxFrame = styled.div`
  flex-direction: column;
  display: flex;
`;
export const Btn = styled.button`
  width: 120px;
  height: 40px;
  margin-top: 30px;
  margin: 5px;
  align-self: flex-end;
  background-color: #ff4343;
  color: white;
  border: none;
  outline-color: aliceblue;
  border-radius: 5px;
`;
export const SubmitBtn = styled(Btn)`
  background-color: #5196ff;
`;
export const MoreBtn = styled.button`
  width: 100px;
  height: 40px;
  align-self: flex-end;
  margin-top: 30px;
`;

export const BtnBox = styled.div`
  align-self: flex-end;
  margin-right: 15px;
`;
