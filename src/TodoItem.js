import React from 'react'

function TodoItem(props) {

    const buttonStyle = {
        width: "60px",
        height: "30px",
        marginTop: "25px"
    };

    return (
            <div className="card shadow p-4 mb-4 bg-white rounded">
                <h4>{props.todo.title}</h4>
                <h5 className="fw-light">{props.todo.desc}</h5>
                <button
                    type="button"
                    className="btn btn-sm btn-danger"
                style={buttonStyle}
                onClick={()=>props.onDelete(props.todo)}
                >
                    Delete
                </button>
            </div>

    );
}

export default TodoItem