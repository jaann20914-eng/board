import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

function Login() {
  const navigate = useNavigate(); // 여기서 Hook 호출

  //사용자 입력 감지
  const [idAndPw, setIdAndPw] = useState({ id: "", pw: "" });
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    console.log(name + ":" + value);
    setIdAndPw((prev) => ({ ...prev, [name]: value }));
  };

  const login = useAuthStore((state) => state.login);

    //로그인 버튼 누름
    const loginCheck = ()=>{
        axios.post("http://10.10.55.80/auth/login", idAndPw).then(
            resp=>{
            login(resp.data.loginId);
            
            console.log(resp);
            sessionStorage.setItem("loginId",resp.data.loginId); // 로그인을 유지
            }
        )  //객체로 보내기
        .catch(resp=>{console.log(resp)})
    
    }

  //회원가입 버튼 누름
  const signIn = () => {
    navigate("/signin");
  };

    //테스트 버튼
    const test = ()=>{
        axios.get("http://10.10.55.80/auth/test")
    }
        

  return (
    <div className={styles.loginbox}>
      <input
        type="text"
        placeholder="아이디 입력"
        onChange={handleLoginChange}
        name="id"
        value={idAndPw.id}
      />
      <input
        type="text"
        placeholder="패스워드 입력"
        onChange={handleLoginChange}
        name="pw"
        value={idAndPw.pw}
      />
      <button onClick={loginCheck}>로그인</button>
      <button onClick={signIn}>회원가입</button>
      <button onClick={test}>test</button>
    </div>
  );
}

export default Login;
