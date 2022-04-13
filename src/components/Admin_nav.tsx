import styled from "styled-components";
import { Link, Route, HashRouter as Router } from "react-router-dom";
import User from "./Admin_user";

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
const CategoryName = styled.span`
  color: white;
  font-size: 25px;
`;
const CategoryIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
`;

function Admin_nav() {
  return (
    <Router>
      <NavStyle>
        <AdminProfile>
          <AdminImg src="img/icons8-user-90.png" />
          {/* <Route path="/User" exact component={User}/> */}
          <AdminName>Admin</AdminName>
        </AdminProfile>
        <AdminCategiryList>
          <AdminCategory>
            <CategoryIcon src="img/icons8-user-48.png" />
            <CategoryName>USER</CategoryName>
          </AdminCategory>
          <AdminCategory>
            <CategoryIcon src="img/icons8-barcode-50.png" />
            <CategoryName>ITEM</CategoryName>
          </AdminCategory>
          <AdminCategory>
            <CategoryIcon src="src\components\img\icons8-phone-50.png" />
            <CategoryName>SUPPORT</CategoryName>
          </AdminCategory>
          <AdminCategory>
            <CategoryIcon src="src\components\img\icons8-report-card-60.png" />
            <CategoryName>REPORT</CategoryName>
          </AdminCategory>
          <AdminCategory>
            <CategoryIcon src="src\components\img\icons8-docket-64.png" />
            <CategoryName>CATEGORY</CategoryName>
          </AdminCategory>
        </AdminCategiryList>
      </NavStyle>
    </Router>
  );
}

export default Admin_nav;
