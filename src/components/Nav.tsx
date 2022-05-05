import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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

function Nav() {
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
          <FontAwesomeIcon size="2x" icon={faFolder} color="#fff" />
          <CategoryName to="/category">CATEGORY</CategoryName>
        </AdminCategory>
      </AdminCategiryList>
    </NavStyle>
  );
}

export default Nav;
