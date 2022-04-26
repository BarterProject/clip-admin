import { UserDetailState, ItemDetailState, DetailState } from "atoms";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

interface IProps {
  currentName: String;
}
const ListBox = styled.button`
  width: 90%;
  border: none;
  outline: none;
  height: 30px;
  background-color: #e6edf4;
  margin: 8px;
  min-width: 400px;
  max-width: 600px;
  border-radius: 15px;
`;
const ListElementName = styled.span`
  margin: 0 90px 0 30px;
  height: 30px;
`;
const ListElementNameBox = styled.div`
  display: flex;
`;

function List({ currentName }: IProps) {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const onUserDetailState = useSetRecoilState(UserDetailState);
  const onItemDetailState = useSetRecoilState(ItemDetailState);
  const onDetailState = useSetRecoilState(DetailState);

  const onUserDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onUserDetailState((pre) => !pre);
  };

  const onItemDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onItemDetailState((pre) => !pre);
  };

  const onDetail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onDetailState((pre) => !pre);
  };

  return (
    <>
      {currentName == "user" ? (
        <>
          <ListElementNameBox>
            <ListElementName>ID</ListElementName>
            <ListElementName>닉네임</ListElementName>
          </ListElementNameBox>
          {array.map((ele) => (
            <ListBox onClick={onUserDetail} key={ele}>
              {ele}
            </ListBox>
          ))}
        </>
      ) : currentName == "item" ? (
        <>
          <ListElementNameBox>
            <ListElementName>ID</ListElementName>
            <ListElementName>제품명</ListElementName>
            <ListElementName>현소유자</ListElementName>
          </ListElementNameBox>
          {array.map((ele) => (
            <ListBox onClick={onItemDetail} key={ele}>
              {ele}
            </ListBox>
          ))}
        </>
      ) : currentName == "support" ? (
        <>
          <ListElementNameBox>
            <ListElementName>제목</ListElementName>
            <ListElementName>작성자</ListElementName>
            <ListElementName>신고자</ListElementName>
          </ListElementNameBox>
          {array.map((ele) => (
            <ListBox onClick={onDetail} key={ele}>
              {ele}
            </ListBox>
          ))}
        </>
      ) : currentName == "report" ? (
        <>
          <ListElementNameBox>
            <ListElementName>제목</ListElementName>
            <ListElementName>작성자</ListElementName>
          </ListElementNameBox>
          {array.map((ele) => (
            <ListBox onClick={onUserDetail} key={ele}>
              {ele}
            </ListBox>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default List;
