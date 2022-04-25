import styled from "styled-components";
const DetailBox = styled.div`
  width: 35%;
  display: flex;
  min-width: 400px;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
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
  align-items: flex-end;
`;
const SaveBtn = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 30px;
`;
const SubmitBtn = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 30px;
  justify-self: flex-end;
`;

const SmallDetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 13px 0 13px 0;
`;
function SupportDetail() {
  return (
    <DetailBox>
      <DetailBoxFrame>
        <SmallDetailBox>
          <DetailName>제목</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>작성자</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>신고자</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>내용</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SmallDetailBox>
          <DetailName>답장</DetailName>
          <DetailText>웅냐</DetailText>
        </SmallDetailBox>
        <SubmitBtn>답장하기</SubmitBtn>
        <SmallDetailBox>
          <DetailName>상태</DetailName>
          <SaveBtn>처리중</SaveBtn>
          <SaveBtn>처리완료</SaveBtn>
        </SmallDetailBox>
      </DetailBoxFrame>
    </DetailBox>
  );
}

export default SupportDetail;
