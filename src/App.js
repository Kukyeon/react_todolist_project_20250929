
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useRef, useState } from 'react';


function App() {

  const mockTodo = [
    {
      id : 0,
      isDone : false,
      content : "리액트 공부하기",
      createDate : new Date().getTime(),
    },
    {
      id : 1,
      isDone : false,
      content : "빨래 널기",
      createDate : new Date().getTime(),
    },
    {
      id : 2,
      isDone : false,
      content : "노래연습하기",
      createDate : new Date().getTime(),
    }
  ];

  const [todo, setTodo] = useState(mockTodo);

  const idRef = useRef(3); // 초기값이 3인 ref 객체 생성하여 idRef에 저장

  function onCreate(content){
    const newItem = {
      id : idRef.current, // idRef가 현재 저장하고 있는 값을 불러옴
      content, 
      isDone : false ,
      createDate : new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    //newItem -> 할일 객체를 생성한 후 idRef값을 1증가
    idRef.current += 1;

  }

  function onUpdate(targetId){
    setTodo(
    todo.map((it) =>{
      
      if(it.id === targetId){ 
  // 할일 아이템을 반복하다가 들어온 targetId와 현재 읽고있는 글의 아이템의 id와 일치하면 참
        return{
          ...it, isDone: !it.isDone
        };
      }else{
        return it;
      }
    }));
  }

  function onDelete(targetId){
    setTodo(todo.filter((it) => it.id !== targetId))
    //삭제를 클릭한 id 아이템을 제외한 나머지 할일 리스트를 투두에 저장
  }

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
