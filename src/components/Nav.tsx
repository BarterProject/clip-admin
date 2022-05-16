import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGear,
  faUser,
  faBarcode,
  faAddressCard,
  faFolder,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";
import { LoginState } from "atoms";
import { useSetRecoilState } from "recoil";

const NavStyle = styled.div`
  width: 20%;
  height: 100vh;
  background-color: #373351;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  min-width: 250px;
  min-height: 500px;
  align-items: center;
`;
const AdminProfile = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  margin-bottom: 50px;
  width: 250px;
`;

const AdminImg = styled.div`
  background-color: white;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: auto;
`;

const TransformImg = styled.div`
  transform: translate(3%, 15%);
`;

const AdminName = styled.span`
  color: white;
  font-size: 22px;
`;

const AdminCategiryList = styled.div`
  display: flex;
  justify-content: left;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;
const AdminCategory = styled.div`
  margin-top: 35px;
`;
const CategoryName = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: white;
  font-size: 25px;
  margin-left: 10px;
`;

const CategoryIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50px;
`;

const LogoutBtn = styled.button`
  border: none;
  outline: none;
  //background-color: #373351;
  color: #373351;
  margin-top: 50px;
  height: 30px;
  width: 100px;
  font-size: 14px;
  border-radius: 10px;
`;
function Nav() {
  const isLogined = useSetRecoilState(LoginState);
  const Logout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    isLogined(false);
    window.localStorage.removeItem("jwt");
    window.localStorage.removeItem("recoil-persist");

    //window.localStorage.clear();
  };
  return (
    <NavStyle>
      <AdminProfile>
        <AdminImg>
          <TransformImg>
            <FontAwesomeIcon size="3x" icon={faUserGear} />
          </TransformImg>
        </AdminImg>
        <AdminName>Admin</AdminName>
      </AdminProfile>
      <AdminCategiryList>
        <AdminCategory>
          <FontAwesomeIcon size="2x" icon={faUser} color="#fff" />
          <CategoryName to="/user">USER</CategoryName>
        </AdminCategory>
        <AdminCategory>
          <FontAwesomeIcon size="2x" icon={faBarcode} color="#fff" />
          <CategoryName to="/item">ITEM</CategoryName>
        </AdminCategory>
        <AdminCategory>
          <FontAwesomeIcon size="2x" icon={faAddressCard} color="#fff" />
          <CategoryName to="/report">REPORT</CategoryName>
        </AdminCategory>
        <AdminCategory>
          <FontAwesomeIcon size="2x" icon={faChalkboardUser} color="#fff" />
          <CategoryName to="/board">BOARD</CategoryName>
        </AdminCategory>
        <AdminCategory>
          <FontAwesomeIcon size="2x" icon={faFolder} color="#fff" />
          <CategoryName to="/category">CATEGORY</CategoryName>
        </AdminCategory>
      </AdminCategiryList>
      <LogoutBtn onClick={Logout}>로그아웃</LogoutBtn>
    </NavStyle>
  );
}

export default Nav;
