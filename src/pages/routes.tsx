import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./SignUp";
import Login from "./Login";
import Mypage from "./Mypage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage/:id" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
