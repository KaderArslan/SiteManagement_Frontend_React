import "./styles.css";
import Dashboard from "./Component/Dashboard";
import SignIn from "./Signin";
import SignUp from "./Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  if (!JSON.parse(localStorage.getItem("loginData"))) {
    localStorage.setItem(
      "loginData",
      JSON.stringify([{ id: "demo", password: "demo" }])
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/home" element={<Dashboard />} />

        <Route path="/apartment/list" element={<Dashboard />} />
        <Route path="/apartment/create" element={<Dashboard />} />
        <Route path="/apartment/update" element={<Dashboard />} />

        <Route path="/bill/list" element={<Dashboard />} />
        <Route path="/bill/create" element={<Dashboard />} />
        <Route path="/bill/update" element={<Dashboard />} />

        <Route path="/message" element={<Dashboard />} />
        <Route path="/payment" element={<Dashboard />} />
        
        <Route path="/formdialog" element={<Dashboard />} />

        <Route path="/user/list" element={<Dashboard />} />
        <Route path="/user/create" element={<Dashboard />} />
        <Route path="/user/update" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
