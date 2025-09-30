import React, { useContext } from "react";
import "./TodoItem.css";
import { TodoDispatchContext } from "../App2";


function TodoItem({id, content, isDone , createDate}){

    const {onDelete, onUpdate} = useContext(TodoDispatchContext);

    

    function onChangeCheckbox(){
        onUpdate(id);
    }

    function onClickDelete(){
        onDelete(id);
    }


    return(
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" onChange={onChangeCheckbox} checked={isDone}/>
            </div>
            <div className="title_col">{isDone === false ? content:content + " 완료!"}</div>
            <div className="date_col">{new Date().toDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
}

export default React.memo(TodoItem);