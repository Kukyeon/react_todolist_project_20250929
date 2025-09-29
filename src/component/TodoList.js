
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({todo}){
    return(
        <div className="TodoList">
            <h4>Todo List📝</h4>
            <input className="searchbar" placeholder="검색어를 입력하세요"/>
            <div className="list_wrapper">   
                {/* todo item을 반복해서 출력 */}
                {todo.map((it) => (
                    <TodoItem {...it}/>
                ))}
            </div>
        </div>
        
    );
}

export default TodoList;