import { useState } from "react"
import TodoItem from "../../Classes/TodoItem"
import PropTypes from 'prop-types';

const AddForm = ({data,setdata}) => {
  const [todo,setTodo]=useState({title:''})
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <label htmlFor="">Todo Title</label>
          <input className="form-control" value={todo.title} onChange={(e)=>{setTodo({...todo,title:e.target.value})}} type="text" />
          <button onClick={()=>{
             const newTodo = new TodoItem({ title: todo.title });
             setdata([...data, newTodo]);
             setTodo({title:''});
          }}>Add Todo</button>
        </div>
      </div>
    </div>
    </>
  )
}
AddForm.propTypes = {
  data: PropTypes.array,
  setdata: PropTypes.func
}
export default AddForm