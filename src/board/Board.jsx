import { BrowserRouter as Router, Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import BoardList from './boardList/BoardList';
import BoardWrite from './boardWrite/BoardWrite';
import BoardDetail from './boardDetail/BoardDetail';

function Board () {

    return(
        <div>
            <Routes>
            <Route path="/" element={<BoardList />} />
            <Route path="/write" element={<BoardWrite />} />
            <Route path="/detail/:seq" element={<BoardDetail />} />
            </Routes>
        </div>
    );
}

export default Board;