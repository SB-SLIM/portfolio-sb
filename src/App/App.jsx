import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { MenuLeft, MenuTop, SideBar } from "./components";
import {
  Connect,
  DesignSystem,
  NotFound,
  Resume,
  Home,
  About,
  Works,
} from "./pages";
import "./app.scss";
// todo: const About = React.lazy(() => import("./pages/About/About"));
// todo: const Works = React.lazy(() => import("./pages/Works"));

function App() {
  return (
    <div className="grid grid-container__root">
      <MenuLeft />
      <SideBar />
      <MenuTop />
      {/* <Suspense fallback={<div>SB is loading</div>}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/works" element={<Works />} />
        <Route path="/designsystem" element={<DesignSystem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
