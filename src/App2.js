
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useRef, useState , useReducer } from 'react';

function reducer(state, action){
  
  switch (action.type) {
    case "CREATE":
      {return [action.newItem, ...state]}
      
  
    default:
      return state;
  }
};

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

 // const [todo, setTodo] = useState(mockTodo);
  const [todo, dispatch] = useReducer(reducer, mockTodo);

  const idRef = useRef(3); // 초기값이 3인 ref 객체 생성하여 idRef에 저장

  function onCreate(content){
    
    dispatch(
      {type:"CREATE" , newItem:{
      id : idRef.current, // idRef가 현재 저장하고 있는 값을 불러옴
      content, 
      isDone : false ,
      createDate : new Date().getTime(),
    }}
    );
    idRef.current += 1;

  };

  function onUpdate(targetId){
   
  }

  function onDelete(targetId){
    
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
