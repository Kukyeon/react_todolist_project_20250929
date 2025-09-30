import Item from "./Item";


function List({todo,onUpdate, onDelete}){

   
      

    return(
        <div className="List">
            <thead>
                <tr>
                    <th>이름</th>
                    <th>수학</th>
                    <th>영어</th>
                    <th>과학</th>
                    <th>평균</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {todo.map((to) => (
                    <Item key={to.id} id={to.id} to={to} onUpdate={onUpdate} onDelete={onDelete}/>
                ))}
            </tbody>
        </div>
    );
}

export default List;