import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";

import LandingPage from "./views/LandingPage/landingPage.js";
// import LoginPage from "./views/LoginPage/LoginPage.js";
// import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./Footer";
import Matching from "./views/Matching";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/match" component={Matching} />
          {/* <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} /> */}
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
