

export default function Todo ({todoList,completeTodo}){
    console.log("todo");
    return(
        <table>
            {todoList.map(element=>{
                return (
                <tr className="todoitem" key={element.id}>
                <td><input type="checkbox" onClick={completeTodo} data-id={element.id} checked={(element.completed) ? "checked" : ""} disabled={(element.completed) ? "disabled" : ""}/></td>
                <td className={(element.completed) ? "completed" : ""}>{element.name}</td>
            </tr>);
            })}
        </table>
    );
}