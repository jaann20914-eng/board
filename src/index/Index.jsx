import { useState } from "react";
import styles from "./Index.module.css";
import axios from "axios";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Login(){
      const navigate = useNavigate(); // 여기서 Hook 호출




    //사용자 입력 감지
    const [idAndPw, setIdAndPw] = useState({id:"", pw:""});
    const handleLoginChange = (e)=>{
        const {name, value} = e.target;
        console.log(name+":"+value);
        setIdAndPw(prev=>({...prev, [name]:value}) );
    }
    //로그인 버튼 누름
    const loginCheck = ()=>{
        axios.post("http://10.10.55.80/auth/login", idAndPw).then(
            resp=>
            console.log(resp.data)
        )
        ; //객체로 보내기
    }

    //회원가입 버튼 누름
    const signIn = ()=>{
        navigate("/signin");
    }

    return (
        <div className={styles.loginbox}>
            <input type="text" placeholder="아이디 입력" onChange={handleLoginChange} name="id" value={idAndPw.id}/>
            <input type="text" placeholder="패스워드 입력" onChange={handleLoginChange}  name="pw" value={idAndPw.pw}/>
            <button onClick={loginCheck}>로그인</button>
            <button onClick={signIn}>회원가입</button>
        </div>
    );
}
export default Login;