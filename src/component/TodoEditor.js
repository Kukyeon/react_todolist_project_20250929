import { useContext, useRef, useState } from "react";
import "./TodoEditor.css";
import { TodoDispatchContext } from "../App2";

function TodoEditor(){

    const {onCreate} = useContext(TodoDispatchContext);

    const[content , setContent] = useState("");
    const inputRef = useRef();

    function onChangeContent(e){
       setContent(e.target.value) // 유저가 입력한 할 일 테스트
    }
    
    function onSubmit(){
        if(content === ""){
            alert("빈칸으로 입력은 불가능합니다.");
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent(""); //입력창 초기화
    }

    function onKeyDown(e){
        if(e.keyCode === 13){// 언테키 코드 -> 13
            onSubmit();
        } 
    }

    return(
        <div className="TodoEditor">
            <h4>새로운 TO DO 작성하기 ✏️</h4>
            <div className="editor_wrapper">
                <input ref={inputRef} value={content} onKeyDown={onKeyDown} onChange={onChangeContent} placeholder="새로운 TODO..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default TodoEditor;