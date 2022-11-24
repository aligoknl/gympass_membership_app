import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "../src/components/Nav/Nav";
import Home from "./pages/Home/Home";
import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Register/Register";
import Footer from "./components/Footer/Footer";
import AppWrapper from "./AppWrapper";
import CreateClub from "./pages/CreateClub/CreateClub";
import Protected from "./components/Protected/Protected";
import { ROLE_ADMIN, ROLE_MEMBER } from "../constants";
import ClubDetail from "./pages/ClubDetail/ClubDetail";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import UserCheckIns from "./pages/UserCheckIns/UserCheckIns";
import GetCredits from "./pages/GetCredits/GetCredits";
import Invoice from "./pages/Invoice/Invoice";
import MyMembership from "./pages/MyMembership/MyMembership";

const App = () => {
  return (
    <AppWrapper className="app-container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/getCredits" element={<GetCredits />} />
        <Route path="/clubDetail/:id" element={<ClubDetail />} />
        <Route
          path="/myClubs"
          element={
            <Protected role={ROLE_ADMIN}>
              <UserCheckIns />
            </Protected>
          }
        />
        <Route
          path="/myMembership"
          element={
            <Protected role={ROLE_MEMBER}>
              <MyMembership />
            </Protected>
          }
        />
        <Route
          path="/myCheckIns"
          element={
            <Protected role={ROLE_MEMBER}>
              <UserCheckIns />
            </Protected>
          }
        />
        <Route
          path="/invoice"
          element={
            <Protected role={ROLE_MEMBER}>
              <Invoice />
            </Protected>
          }
        />
        <Route
          path="/createClub"
          element={
            <Protected role={ROLE_ADMIN}>
              <CreateClub />
            </Protected>
          }
        />
        <Route path="/register" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </AppWrapper>
  );
};

export default App;
