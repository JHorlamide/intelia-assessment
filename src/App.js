import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import AuthScreen from "./pages/AuthScreen/SignIn";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<AuthScreen />} />
        <Route path='/page2' element={<LandingPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
