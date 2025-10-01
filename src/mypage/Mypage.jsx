import axios from "axios";
import useAuthStore from "../store/authStore";
import styles from "./Mypage.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Mypage = () => {
  
  const [complete, setComplete] = useState(false); // 버튼의 상태변수
  // ----------------------------------------------------------처음 가져오는객체 / getAll
  const user = useAuthStore((state) => state.user);
  const [editItem, setEditItem] = useState({
    id: "",
    pw: "",
    name: "",
    email: "",
  });
  // 상태변수를 배열안에 넣을 경우 상태변수가 변할때 리랜더링을 해줘서 값이 다시 바뀌도록 출력이된다.
  // useEffect -> 한번만 실행되고 끝내게 하는 함수 / 상태변수가 바뀔때 다시 실행되게 할려면 밑에 처럼 작성.
  useEffect(() => {
    axios.get(`http://10.10.55.80/auth?id=${user}`).then((resp) => {
      const { id, pw, name, email } = resp.data;
      setEditItem({ id, pw, name, email }); //오리지날 보존용
      setUpdateItem({ id, pw, name, email }); // 업데이트용 (수정가능)
    });
  }, [complete]);


// ----------------------------------------------------------업데이트용 객체 / update (수정)
  const [updateItem, setUpdateItem] = useState({
    id: "",
    pw: "",
    name: "",
    email: "",
  });
const handleInputChange = (e)=>{
  const {name, value} = e.target;
   setUpdateItem(prev=>({ ...prev, [name]: value }) );
};


// ---------------------------------------------------------업데이트 취소용
  const [editing, setEditing] = useState(false); 
  const handleUpdateDel = ()=>{
    setUpdateItem(editItem); // 오리지날 값이 들어가도록
    setEditing(false); //수정 불가
  }


  //---------------------------------------------------------업데이트 완료용

  const handleUpdateCom = ()=>{
    setComplete(true);
    setUpdateItem(prev=>({...prev, id:editItem.id}));
    axios.put(`http://10.10.55.80/auth?id=${user}`, updateItem);
    setEditing(false); //수정 불가
  }

  return (
    <div className={styles.container}>
      <div>마이페이지</div>
      <div className={styles.edit}>
        <table border={1} align="center">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>eamil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" value={updateItem.id} name="id"disabled onChange={handleInputChange}/>
              </td>
              <td>
                <input type="text" value={updateItem.name} name="name" disabled={!editing} onChange={handleInputChange}/>
              </td>
              <td>
                <input type="text" value={updateItem.email} name="email" disabled={!editing} onChange={handleInputChange}/>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={editing ? styles.unseen : styles.seen}>
          <button onClick={()=> setEditing(true)}>수정</button>
          <button>뒤로가기</button>
        </div>

        <div className={editing ? styles.seen : styles.unseen}>
          <button onClick={handleUpdateDel}>취소</button>
          <button onClick={handleUpdateCom}>완료</button>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
