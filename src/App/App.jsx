import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, NavTop, SideBar, Toggle } from "./components";
import { About, Connect, NotFound, Resume, Works } from "./pages";
import "./app.scss";
import { useState } from "react";
import clsx from "clsx";

function App() {
  const [isAtive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isAtive);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <div className={clsx("grid", isAtive && "active")}>
        <NavTop handleClick={handleClick} show={isAtive} />
        <SideBar show={isAtive} setIsActive={setIsActive} />
        <main className="p-2-3">
          <Routes>
            <Route path="/" element={<About />} />
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
