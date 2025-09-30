


function Item({id, onDelete, to}){


    function onClickDelete(){
        onDelete(id);
    }

    return(
        
        <tr className="Item">
            <td>{to.name}</td>
            <td>{to.math}</td>
            <td>{to.eng}</td>
            <td>{to.sci}</td>
            <td>{to.avg}</td>
            <td><button onClick={onClickDelete}>삭제</button></td>
        </tr>
       
    );
}

export default Item;