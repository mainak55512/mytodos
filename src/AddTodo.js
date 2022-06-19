import React,{useState} from 'react'

function AddTodo(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submitTodo = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or description can not be blank");
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    const buttonStyle = {
        width: "100px",
        height: "40px",
        position: "relative",
        left: "100%",
        transform: "translate(-100%)"
    };
  return (
      <form className="card shadow p-4 mb-5 rounded" style={{
          background:"#FFFFE0"
      }} onSubmit={submitTodo}>
          <h5 className='mb-4'>New Todo</h5>
          <input className="form-control mb-3" type="text" value={title} placeholder="Todo Title" onChange={(e) => {
              setTitle(e.target.value)
          }}/>
          <textarea className="form-control mb-4" id="exampleFormControlTextarea1" rows="3" value={desc} placeholder="Todo Description" onChange={(e) => {
              setDesc(e.target.value)
          }}></textarea>
          <button
              type="submit"
              className="btn btn-sm btn-success"
              style={buttonStyle}
          >
              Done
          </button>
      </form>
  )
}

export default AddTodo