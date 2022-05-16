import { UserDetailState, ItemDetailState, DetailState } from "atoms";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

interface IProps {
  currentName: String;
}
export const ListBox = styled.button`
  width: 90%;
  border: none;
  outline: none;
  height: 30px;
  background-color: #e6edf4;
  margin: 8px;
  min-width: 400px;
  max-width: 600px;
  border-radius: 15px;
  text-align: left;
  display: flex;
`;
export const ListElementName = styled.span`
  margin: 0 90px 0 30px;
  display: flex;
  height: 30px;
`;
export const ListElementNameBox = styled.div`
  display: flex;
`;

function List() {}

export default List;
