import styled from "styled-components";
const DetailBox = styled.div`
  width: 35%;
  display: flex;
  min-width: 400px;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Profile = styled.div`
  display: flex;
  margin: 30px 0 30px 30px;
`;
const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
`;
const ProfileName = styled.span`
  text-align: center;
  align-self: center;
  font-size: 30px;
  margin-left: 20px;
`;
const SmallDetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 13px 0 13px 0;
`;
const DetailName = styled.span`
  margin-left: 15px;
  font-size: 18px;
`;
const DetailText = styled.div`
  width: 200px;
  background-color: #e6edf4;
  border-radius: 5px;
  margin-right: 15px;
`;
const DetailBoxFrame = styled.div`
  flex-direction: column;
  display: flex;
`;
const MoreBtn = styled.button`
  width: 100px;
  height: 40px;
  align-self: flex-end;
  margin-top: 30px;
`;

function UserDetail() {
  return (
    <DetailBox>
      <Profile>
        <ProfileImg />
        <ProfileName>거래가조아</ProfileName>
      </Profile>
      <DetailBoxFrame>
        <SmallDetailBox>
          <DetailName>아이디</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>비밀번호</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>연락처</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>주소</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>상태</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>총 보증금</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>아이템</DetailName>
          <DetailText>아이템이...있다!</DetailText>
        </SmallDetailBox>
        <MoreBtn>더보기</MoreBtn>
      </DetailBoxFrame>
    </DetailBox>
  );
}

export default UserDetail;
