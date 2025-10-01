import axios from "axios";
import useAuthStore from "../store/authStore";
import styles from "./Home.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

function Home() {
  const user = useAuthStore((state) => state.user);
  const logoutS = useAuthStore((state) => state.logout);
  const deleteUser = useAuthStore((state) => state.deleteUser);

  const navigate = useNavigate(); // 여기서 Hook 호출

  //로그아웃 버튼 클릭
  const logout = () => {
    logoutS();
    // navigate("/");
  };

  //회원탈퇴 버튼 클릭
  const signout = () => {
    axios.delete(`http://10.10.55.80/auth/${user}`).then(() => {
      deleteUser();
    });
  };



  return (
    <div className={styles.homebox}>
      <table border={1}>
        <thead>
          <tr>
            <th colSpan={4}>{user}님 환영합니다</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              {" "}
              <button onClick={() => navigate("/board")}>게시판</button>{" "}
            </td>
            <td>
              {" "}
              <button onClick={() => navigate("/mypage")}>
                마이페이지
              </button>{" "}
            </td>
            <td>
              {" "}
              <button onClick={logout}>로그아웃</button>{" "}
            </td>
            <td>
              {" "}
              <button onClick={signout}>회원탈퇴</button>{" "}
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default Home;