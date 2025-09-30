import { useState } from "react";
import "./Editor.css";


function Editor({onCreate}){

    const[name , setName] = useState("");
    const[math, setMath] = useState("");
    const[eng , setEng] = useState("");
    const[sci , setSci] = useState("");
    
    

    function onChangeName(e){
        setName(e.target.value);
    }
    function onChangeMath(e){
        setMath(e.target.value);
    }
    function onChangeEng(e){
        setEng(e.target.value);
    }
    function onChangeSci(e){
        setSci(e.target.value);
    }

    function onSubmit(){
        
        onCreate(name,math,eng,sci);
        setName("");
        setMath("");
        setEng("");
        setSci("");
        }

    function onKeyDown(e){
        if(e.keyCode === 13){// 언테키 코드 -> 13
            onSubmit();
        } 
    }

    return(
        <div className="Editor">
            <h2> 📊 학생 성적 관리 </h2>
            <div className="editor_wrapper">
                <input type="text" value={name} onKeyDown={onKeyDown} onChange={onChangeName} placeholder="이름"></input>
                <input type="number" value={math} onKeyDown={onKeyDown} onChange={onChangeMath} placeholder="수학"></input>
                <input type="number" value={eng} onKeyDown={onKeyDown} onChange={onChangeEng} placeholder="영어"></input>
                <input type="number" value={sci} onKeyDown={onKeyDown} onChange={onChangeSci} placeholder="과학"></input>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}
export default Editor;