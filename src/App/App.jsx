import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuLeft, MenuTop, NavBar, SideBar } from "./components";
import { About, Connect, NotFound, Resume, Works } from "./pages";
import "./app.scss";
import { useState } from "react";
import clsx from "clsx";
import { useNavContext } from "./context/nav.context";

function App() {
  const { sideIsOpen } = useNavContext();

  return (
    <BrowserRouter>
      <MenuLeft />
      <div className={clsx("grid", sideIsOpen && "active")}>
        <MenuTop />
        <SideBar />
        <main className="p-2-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/works" element={<Works />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
