import { useRef, useState } from 'react';
import Editor from './component/Editor';
import List from './component/List';
import './Appcopy.css';
import TestComp from './component/TestComp';

function App() {

  const [todo, setTodo] = useState([]);
  const idRef = useRef(0);
  function onCreate(name,math,eng,sci){
    if (!name || !math || !eng || !sci) { //참이면 4개의 입력값중 1개라도 공백 발생
      alert("이름과 모든 과목의 점수는 필수입력사항 입니다.");
      return;
    }
    const avg = ((Number(math)+Number(eng)+Number(sci))/3).toFixed(2);
    const newItem = {
      id : idRef.current,
      name,
      math: math, 
      eng: eng,
      sci: sci,
      avg: avg,
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
      <Editor onCreate={onCreate}/>
      <List todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
      <hr></hr>
      <TestComp />
    </div>
  );
}

export default App;
