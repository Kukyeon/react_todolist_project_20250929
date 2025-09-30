
import { useState , useMemo } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({todo, onUpdate, onDelete}){

    const [search, setSearch] = useState("");

    function onChangeSearch(e){
        setSearch(e.target.value);
    }

    //검색어 필터링 함수
    function getSearchResult(){
        if(search === ""){
            return todo;
        }else{
            return todo.filter(
                (it) => it.content.toLowerCase().includes(search.toLowerCase())
                //특정 단어가 있는 content만 걸러내어 배열로 반환
                //toLowerCase() 메서드는 문자열에 있는 대문자를 모두 소문자로 바꿔 줌
            );
        }
    }

    // function analyzeTodo(){
    //     //모든 할일의 갯수를 출력
    //     const totalCount = todo.length;

    //     //완료된 할일의 갯수
    //     const doneConut = todo.filter((item) => item.isDone).length

    //     //완료하지 못한 할일의 갯수
    //     const notDoneConut = totalCount - doneConut;
    //     return {totalCount, doneConut ,notDoneConut}
    // };

    const analyzeTodo = useMemo(()=>{
         //모든 할일의 갯수를 출력
        const totalCount = todo.length;

        //완료된 할일의 갯수
        const doneConut = todo.filter((item) => item.isDone).length

        //완료하지 못한 할일의 갯수
        const notDoneConut = totalCount - doneConut;
        return {totalCount, doneConut ,notDoneConut}
    }, [todo]);

    const {totalCount, doneConut, notDoneConut} = analyzeTodo;

    return(
        <div className="TodoList">
            <h4>Todo List📝</h4>
            <div>
                <div>총 갯수 : {totalCount}</div>
                <div>완료된 할일 : {doneConut}</div>
                <div>미완료 할일 : {notDoneConut}</div>
            </div>
            <input className="searchbar" value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"/>
            <div className="list_wrapper">   
                {/* todo item을 반복해서 출력 */}
                {getSearchResult().map((it) => (
                    <TodoItem key={it.id}{...it} onUpdate={onUpdate} onDelete={onDelete}/>
                ))}
            </div>
        </div>
        
    );
}

export default TodoList;