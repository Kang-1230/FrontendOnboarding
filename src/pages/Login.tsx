import { Link } from "react-router-dom";

export default function Login() {
  return (
    <form>
      <div>
        <Link to="/">홈</Link>
        <div>로그인 페이지</div>
      </div>
      <div>
        <input placeholder="이메일" />
        <input placeholder="비밀번호" />
      </div>
      <button>로그인</button>
    </form>
  );
}
