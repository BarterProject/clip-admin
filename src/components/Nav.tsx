import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LoginState } from "atoms";
import { useRecoilValue } from "recoil";
import Login from "./Login";
import styled from "styled-components";
import Category from "./Category";
import Item from "./Item";
import Report from "./Report";
import Support from "./Support";
import User from "./User";

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

const AdminImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50px;
  margin-bottom: 15px;
  align-items: center;
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
`;

const CategoryIcon = styled.img`
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
              <AdminImg src="img/icons8-user-90.png" />
              <AdminName>Admin</AdminName>
            </AdminProfile>
            <AdminCategiryList>
              <AdminCategory>
                <CategoryIcon src="img/icons8-user-48.png" />
                <CategoryName to="/admin/user">USER</CategoryName>
              </AdminCategory>
              <AdminCategory>
                <CategoryIcon src="img/icons8-barcode-50.png" />
                <CategoryName to="/admin/item">ITEM</CategoryName>
              </AdminCategory>
              <AdminCategory>
                <CategoryIcon src="src\components\img\icons8-phone-50.png" />
                <CategoryName to="/admin/support">SUPPORT</CategoryName>
              </AdminCategory>
              <AdminCategory>
                <CategoryIcon src="src\components\img\icons8-report-card-60.png" />
                <CategoryName to="/admin/report">REPORT</CategoryName>
              </AdminCategory>
              <AdminCategory>
                <CategoryIcon src="src\components\img\icons8-docket-64.png" />
                <CategoryName to="/admin/category">CATEGORY</CategoryName>
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
