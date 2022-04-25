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
const SaveBtn = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 30px;
`;
const BtnBox = styled.div`
  align-self: flex-end;
  margin-right: 15px;
`;

function ItemDetail() {
  return (
    <DetailBox>
      <Profile>
        <ProfileImg />
        <ProfileName>아이폰12</ProfileName>
      </Profile>
      <DetailBoxFrame>
        <SmallDetailBox>
          <DetailName>제품명</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>보증금</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>카테고리</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>현 아이템 소유자</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>설명</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>상태</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>실 제품 소유자</DetailName>
          <DetailName>거래가조아</DetailName>
          <ProfileImg />
        </SmallDetailBox>
        <BtnBox>
          <SaveBtn>내용 수정</SaveBtn>
          <SaveBtn>제품 삭제</SaveBtn>
        </BtnBox>
      </DetailBoxFrame>
    </DetailBox>
  );
}

export default ItemDetail;
