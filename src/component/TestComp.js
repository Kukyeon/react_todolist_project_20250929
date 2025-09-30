import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";

function reducer(state, action) { // 상태 변화 함수
    //(state, action) -> state는 현재 state 변수의 값,
    //action -> 촉발함수 dispatch에서 보내준 action 객체가 저장

    switch (action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;    
    
        default:
           return state;
    }

}   

function TestComp(){
    const [count, dispatch] = useReducer(reducer, 0);
    
    
    
    return(
        <div>
            <h3>테스트 컴포넌트</h3>
            <h2>{count}</h2>
            <div>
                <button onClick={()=>dispatch({type:"INCREASE", data:1})}>증가</button>
                <button onClick={()=>dispatch({type:"DECREASE", data:2})}>감소</button>
            </div>
        </div>
    );
}

export default TestComp;