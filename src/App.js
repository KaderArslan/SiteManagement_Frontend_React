
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Component/Dashboard";
import AdminLogin from "./Component/Login/AdminLogin";
import UserLogin from "./Component/Login/UserLogin";
import Deneme from "./Component/Apartment/Deneme";

function App() {

  // if (!JSON.parse(localStorage.getItem("loginData"))) {
  //   localStorage.setItem(
  //     "loginData",
  //     JSON.stringify([{ id: "demo", password: "demo" }])
  //   );
  // }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/user" element={<UserLogin />} />

        <Route path="/home" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/apartment/list" element={<Dashboard />} />
        <Route path="/apartment/create" element={<Dashboard />} />
        
        <Route path="/deneme" element={<Deneme />} />

        <Route path="/bill/list" element={<Dashboard />} />
        <Route path="/bill/create" element={<Dashboard />} />

        <Route path="/message" element={<Dashboard />} />
        <Route path="/payment" element={<Dashboard />} />
        
        <Route path="/formdialog" element={<Dashboard />} />

        <Route path="/user/list" element={<Dashboard />} />
        <Route path="/user/create" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
