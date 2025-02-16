import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";

export default function Navbar() {
  return (
    <>
      <Link to="/">홈</Link>
      <div>
        {useAuthStore.getState().isLoggedIn
          ? "닉네임 님, 환영합니다!"
          : "로그인이 필요합니다"}
      </div>
      <Link to="/login">로그인하기</Link>
    </>
  );
}
