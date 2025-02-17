import { useState } from "react";
import supabase from "../utils/supabase";
import { useNavigate } from "react-router-dom";
import { insertUsers } from "../api/authApi";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    insertUsers(email, nickname);

    if (error) {
      alert(error);
    } else {
      alert("회원가입 성공");
      navigate("/");
    }
  };

  return (
    <>
      <form onSubmit={handleSignup}>
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
        <input
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <button>회원가입</button>
      </form>
    </>
  );
}
