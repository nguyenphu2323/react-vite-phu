const TodoData = (props) => {
    //props là một object
    //cách 1
    // const { name, age, data } = props;
    //cách 2
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;
    const { todoList, deleteTodo } = props;

    const handleClick = (id) => {
        deleteTodo(id)

    }
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log(">> check map: ", item, index);

                return (
                    <div className={`todo-item ${index}`} key={index.id}>
                        <div>
                            {item.name}
                        </div>
                        <button style={{ cursor: "pointer" }}
                            onClick={() => handleClick(item.id)}>Delete</button>
                    </div>
                )
            })}


        </div>
    )

}
export default TodoData;