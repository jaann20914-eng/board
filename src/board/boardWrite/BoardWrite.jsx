import { useRef, useState } from "react";
import styles from "./BoardWrite.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import useAuthStore from "../../store/authStore";
import axios from "axios";


function BoardWrite () {
    const navigate = useNavigate(); // 여기서 Hook 호출
    const titleRef = useRef();
    const contentRef = useRef();

    const user = useAuthStore((state) => state.user);

    // 작성자+타이틀+내용 넣은 상태변수로 객체만들기
    const [writing, setWritings] = useState({
        title:"", content:"", writer:""
    });

    //작성완료 버튼 누르면
    const handleWriting = ()=>{
        const title = titleRef.current.innerText;
        const content = contentRef.current.innerText;
        const writer = user;

        const newWriting = { title, content, writer };
        setWritings(newWriting); // 상태는 유지하되
        axios.post("http://10.5.5.3/board", newWriting)// 최신 값으로 바로 전달
        .then(()=>{
            navigate("/board");//보드로이동
        })
        ; 

    }



    return(
        <div className={styles.writeBox}>
            
        <div className={styles.title} contentEditable ref={titleRef}></div>
        <div className={styles.content} contentEditable ref={contentRef}></div>

        <div className={styles.btns} >
            <button onClick={()=>{navigate("/board")}}>뒤로가기</button>
            <button onClick={handleWriting}>작성완료</button>
        </div>


        
        </div>

        
    )

}

export default BoardWrite;