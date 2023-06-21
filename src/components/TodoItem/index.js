// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, key} = props
  console.log(key)
  const {id, title} = todoDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="listItems">
      <p>{title}</p>
      <button type="button" className="deleteBtn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
