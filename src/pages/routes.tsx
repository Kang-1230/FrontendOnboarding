import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./Signin";
import Signup from "./Signup";
import Login from "./Login";
import Mypage from "./Mypage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/Login
        "
          element={<Login />}
        />
        <Route path="/mypage/:id" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
