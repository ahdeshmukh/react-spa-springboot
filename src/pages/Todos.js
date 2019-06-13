import React from 'react'

function Todos(props) {
    const todos = (props.todos) ? props.todos : []
    return (
        <div className="container">
            <h1>List Todos</h1>
            {todos.length > 0 && (<table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Is Completed?</th>
                        <th>Target Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.todos.map(todo => 
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>)}
        </div>
    )
}


export default Todos;