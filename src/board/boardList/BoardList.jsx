import { useEffect, useState } from "react";
import useAuthStore from "../../store/authStore";
import styles from "./BoardList.module.css"
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function BoardList () {
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user); // 유저 아이디
    const [boardList, setBoardList] = useState([]);




    // 보드 전체 리스트 가져오기
    useEffect(() => {
    axios.get(`http://10.5.5.3/board`).then((resp) => {
        setBoardList(resp.data);// boardDTO형 배열 
    });
  }, []);// 한번만 가져오는 상태
    
    return(
        
        <div className={styles.boardListBox}>
            <div className={styles.header}>게시판</div>

            <div className={styles.body}>
                {boardList.map((e, i) => (
                    <div key={i} className={styles.row}>
                        <div className={styles.seq}>{e.seq}</div>
                        <Link to={`/board/detail/${e.seq}`}><div className={styles.title}>{e.title}</div></Link>
                        <div className={styles.writer}>{e.writer}</div>
                        <div className={styles.writedate}>{e.writedate}</div>
                    </div>
                ))}
            </div>
            

            <div className={styles.btns}>
                <button onClick={()=>{navigate("/board/write")}}>글 작성하기</button>
            </div>


            <div className={styles.footer}>
                네비바영역
            </div>
        </div>




    );

}

export default BoardList;