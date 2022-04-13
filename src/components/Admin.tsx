import Nav from "./Nav";
import User from "./User";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Category from "./Category";
import Item from "./Item";
import Report from "./Report";
import Support from "./Support";

const AdminDiv = styled.div`
  flex-direction: row;
  display: flex;
`;

function Admin() {
  return <User />;
}

export default Admin;
