import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    console.log("이메일", email);
    console.log("비밀번호", password);

    if (error) {
      console.error("error message", error.message);
      alert(error);
    } else {
      alert("로그인 성공");
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <Link to="/">홈</Link>
        <div>로그인 페이지</div>
      </div>
      <div>
        <input
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">로그인</button>
      <button type="button">
        <Link to="/signup">회원가입</Link>
      </button>
    </form>
  );
}
