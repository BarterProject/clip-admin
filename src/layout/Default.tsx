import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from "page/User";
import Category from "page/Category";
import Item from "page/Item";
import Report from "page/Report";
import Nav from "Components/Nav";

function Default() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="" element={<User />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/item" element={<Item />}></Route>
          <Route path="/report" element={<Report />}></Route>
          <Route path="/category" element={<Category />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Default;
