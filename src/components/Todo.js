import React from 'react'
import PropTypes from 'prop-types'
import ImageUpload from '../components/ImageUpload'
import {updateTodoText} from "../actions";
import {connect} from "react-redux";
//import WithStore from "../components/WithStore";

let Todo = ({ onClick, id, completed, text, file, dispatch }) => {
  let input

  console.log("Todo: firing", text, file.slice(0,40));
  //const WithStore = ({ children, state, dispatch }) => children(state, dispatch);

  //console.log( onClick, completed, text, file, dispatch );

  return <li style={{
    border: '#666 dashed 1px',
    padding: '10px',
    margin: '10px'
  }}>
    <span
      onClick={onClick}
      /*value={text}*/
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      <input value={text} onChange={(e) => {
        //console.log(e.currentTarget.value);
        //e.preventDefault()
        /*if (!e.currentTarget.value.trim()) {
          return
        }*/

        //console.log("before dispatch");
        dispatch(updateTodoText(id, e.currentTarget.value))
        //input.value = ''
      }}/>

    </span>

    <ImageUpload dispatch={dispatch} file={file} id={id}/>

  </li>
}
Todo = connect()(Todo)

// <WithStore></WithStore>

Todo.propTypes = {
  //updateTodo: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired
}




export default Todo
