import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupForm from "./Sup";
import BasicForm from "./login";
// import Navbar from './Navbar';
import Otp from "../pages/Otp";
import Home from "./Home";
import Forgot from "./Forgot";
import Email from "./Email";
import Card from "./Card";
import U_Profile from "./U_Profile";
const Linking = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<SignupForm />} />
          <Route path="/Login" element={<BasicForm />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/email" element={<Email/>} />
          <Route path="/card" element={<Card/>} />
          <Route path="/profile" element={<U_Profile/>} />
        </Routes>
      </Router>
    </>
  );
};
export default Linking;
