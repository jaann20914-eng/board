import axios from "axios";
import { useState } from "react";
import styles from "./SignIn.module.css";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();
  const [membersignin, setmembersignin] = useState({
    id: "",
    pw: "",
    name: "",
    email: "",
  });

  const handlemembersignin = (e) => {
    const { name, value } = e.target;

    setmembersignin((prev) => ({ ...prev, [name]: value }));
  };

  const handleclicked = () => {
    console.log(membersignin.id + " : " + membersignin.pw);
    axios.post(`http://10.10.55.80/auth`, membersignin);
  };
const handleback = ()=>{
    navigate("/");
}
  
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h3>회원가입</h3>
      </div>
      <div className={styles.body}>
        <input
          type="text"
          placeholder="Id"
          name="id"
          value={membersignin.id}
          onChange={handlemembersignin}
        />
        <br />
        <input
          type="text"
          placeholder="pw"
          name="pw"
          value={membersignin.pw}
          onChange={handlemembersignin}
        />
        <br />
        <input
          type="text"
          placeholder="name"
          name="name"
          value={membersignin.name}
          onChange={handlemembersignin}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={membersignin.email}
          onChange={handlemembersignin}
        />
        <br />
        <button onClick={handleclicked}>회원가입</button>
        
        <button onClick={handleback}>취소</button>
      </div>
    </div>
  );
}

export default SignIn;
