import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import styles from "./BoardDetail.module.css";
import useAuthStore from "../../store/authStore";

function BoardDetail () {
    const navigate = useNavigate();

    const { seq } = useParams(); // url에서 파라미터 가져오기
    //작성자와 로그인한사람같은지 확인
    const user =useAuthStore((state)=>state.user);
    const [sameId, setSameId]= useState(false);


    //오리지날 객체 저장용
    const [oriBoard, setOriBoard] = useState({}); //객체로받음
    useEffect(() => {
    axios.get(`http://10.5.5.3/board/${seq}`).then((resp) => {
        user == resp.data.writer ? setSameId(true) : setSameId(false);
        setOriBoard(resp.data); //오리보드에 내용 넣기
    });
  }, []);


    //삭제하기
    const handleDel =()=>{
        axios.delete(`http://10.5.5.3/board/${seq}`).then(()=>{
            navigate("/board");
        })
    }

    //수정하기 버튼을 누르면
    const [updating, setUpdating]=useState(false);
    const handleUpdate = ()=>{// 수정하기 버튼을 눌럿을때
        setUpdating(true);// 버튼 수정취소, 수정완료 버튼이 보임
    }

    //업데이트용 객체에 넣기
    const titleRef = useRef();
    const contentRef = useRef();
    // const [updateItem, setUpdateItem] = useState({});
    
    // const handleUpdateItem =(e)=>{//div 바뀔때마다
    //     const title = titleRef.current.innerText;
    //     const content = contentRef.current.innerText;

    //     setUpdateItem({title,content});// 업데이트용 객체 만들기
    // }


    //수정취소 버튼누르면
    const handleUpdateDel = ()=>{
        if (titleRef.current) { titleRef.current.innerText = oriBoard.title;} // 타이틀, 컨텐츠 원래대로 넣고
        if (contentRef.current) { contentRef.current.innerText = oriBoard.content;} 
        setUpdating(false);
    }

    //수정완료 버튼누르면
    const handleUpdateCom = () => {
        const title = titleRef.current?.innerText || "";
        const content = contentRef.current?.innerText || "";

        axios.put(`http://10.5.5.3/board/${seq}`, {title,content,writer: user}).then(() => {
        setUpdating(false);
        navigate("/board");
        });
    };





    return(
        <div className={styles.boardDetailBox}>
 
            
            <div className={styles.header}>
                <div contentEditable={updating} ref={titleRef}> {oriBoard.title} </div>
                <div>{oriBoard.writer}</div>
                <div>{oriBoard.writedate}</div>
            </div>
                
            <div className={styles.body} contentEditable={updating} ref={contentRef}>
                {oriBoard.content}
            </div>

            <div className={styles.btns}>
                <div style={{ display: sameId &&!updating ? "block" : "none" }}>
                    <button onClick={handleDel}>삭제하기</button>
                    <button onClick={handleUpdate}>수정하기</button>
                </div>

                <div style={{ display: sameId && updating ? "block" : "none" }}>
                    <button onClick={handleUpdateDel}>수정취소</button>
                    <button onClick={handleUpdateCom}>수정완료</button>
                </div>


                <div><button onClick={()=>{navigate("/board")}}>뒤로가기</button></div>
            
            </div>

            <div className={styles.footer}>
                댓글영역
            </div>


        </div>
    )

}

export default BoardDetail;