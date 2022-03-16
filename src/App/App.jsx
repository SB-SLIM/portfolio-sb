import { Routes, Route } from "react-router-dom";
import { MenuLeft, MenuTop, SideBar } from "./components";
import {
  About,
  Connect,
  DesignSystem,
  NotFound,
  Resume,
  Works,
  Home,
} from "./pages";
import "./app.scss";

function App() {
  return (
    <div className="grid grid-container__root">
      <MenuLeft />
      <SideBar />
      <MenuTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/works" element={<Works />} />
        <Route path="/designsystem" element={<DesignSystem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
