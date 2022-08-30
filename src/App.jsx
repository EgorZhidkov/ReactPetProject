import React from "react";
import Calculator from "./pages/Calculator";
import "./index.css";

import SideBar from "./components/sideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import Notifications from "./pages/Notifications.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SideBar />}>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/test" element={<Notifications />} />
      </Route>
    </Routes>
  );
}

export default App;
