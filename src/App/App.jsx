import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav, SideBar, Toggle } from "./components";
import { About, Connect, NotFound, Resume, Works } from "./pages";
import "./app.scss";
import { useState } from "react";

function App() {
  const [isAtive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isAtive);
  };

  return (
    <div className="grid">
      <BrowserRouter>
        <Nav />
        <div className="toggle p-2-3">
          <Toggle handleClick={handleClick} />
        </div>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
