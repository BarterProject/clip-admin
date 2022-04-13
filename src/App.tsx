import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Login from "Components/Login";
import Nav from "Components/Nav";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoginState } from "atoms";
import User from "Components/User";
import Category from "Components/Category";
import Item from "Components/Item";
import Report from "Components/Report";
import Support from "Components/Support";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;
const AdminDiv = styled.div`
  flex-direction: row;
  display: flex;
`;

function App() {
  const isLogin = useRecoilValue(LoginState);
  return (
    <>
      <Router>
        <Routes>
          {isLogin ? (
            <Route path="/" element={<User />}></Route>
          ) : (
            <Route path="/" element={<Login />}></Route>
          )}
          {isLogin ? (
            <Route path="/admin" element={<User />}></Route>
          ) : (
            <Route path="/" element={<Login />}></Route>
          )}
          {isLogin ? (
            <Route path="/admin/user" element={<User />}></Route>
          ) : (
            <Route path="/" element={<Login />}></Route>
          )}
          {isLogin ? (
            <Route path="/admin/item" element={<Item />}></Route>
          ) : (
            <Route path="/" element={<Login />}></Route>
          )}
          {isLogin ? (
            <Route path="/admin/support" element={<Support />}></Route>
          ) : (
            <Route path="/" element={<Login />}></Route>
          )}
          {isLogin ? (
            <Route path="/admin/report" element={<Report />}></Route>
          ) : (
            <Route path="/" element={<Login />}></Route>
          )}
          {isLogin ? (
            <Route path="/admin/category" element={<Category />}></Route>
          ) : (
            <Route path="/" element={<Login />}></Route>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
