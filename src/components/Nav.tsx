import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LoginState } from "atoms";
import { useRecoilValue } from "recoil";
import Login from "../page/Login";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGear,
  faUser,
  faBarcode,
  faPhone,
  faAddressCard,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

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
  width: 100px;
  height: 100px;
  border-radius: 50px;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: auto;
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

function Nav() {
  const isLogin = useRecoilValue(LoginState);
  return (
    <div>
      {isLogin ? (
        <div>
          <NavStyle>
            <AdminProfile>
              <AdminImg>
                <FontAwesomeIcon size="4x" icon={faUserGear} />
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
                <FontAwesomeIcon size="2x" icon={faPhone} color="#fff" />
                <CategoryName to="/support">SUPPORT</CategoryName>
              </AdminCategory>
              <AdminCategory>
                <FontAwesomeIcon size="2x" icon={faAddressCard} color="#fff" />
                <CategoryName to="/report">REPORT</CategoryName>
              </AdminCategory>
              <AdminCategory>
                <FontAwesomeIcon size="2x" icon={faFolder} color="#fff" />
                <CategoryName to="/category">CATEGORY</CategoryName>
              </AdminCategory>
            </AdminCategiryList>
          </NavStyle>
        </div>
      ) : (
        <Route path="/" element={<Login />}></Route>
      )}
    </div>
  );
}

export default Nav;
