import { useState } from 'react'
import Navbar from '../src/components/Navbar'
import { v4 as uuidv4 } from 'uuid'; // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
console.log(todos)
  const handleEdit = () => {

  }
  
  const handleDelete = () => {

  }

  const handleAdd = () => {
    settodos([...todos, {id: uuidv4() , todo, iscompleted:false}])
    settodo('')
  }
  
  const handleChange = (e) => {
    settodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(e=>{
      return e.id === id
      console.log(id)
    
    })
    let newtodos = todos;
    newtodos[index].iscompleted = !newtodos[index].iscompleted;
    settodos([newtodos])
  }
  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <div className='todo'>
          <div className="addtodo">
            <p>Add Todo</p>
            <input onChange={handleChange} value={todo} className='input' type="text" placeholder="Add a todo" />
            <button className='button' onClick={handleAdd}>Add</button>
          </div>
          <div className="p"><p>Your Todo</p></div>
            {/* <div className="todos"> */}
            {todos.map(lists=>{
              return <div key={lists.id} className="todoflex">
                <input name ={lists.id} className='checkbox' onChange={handleCheckbox}  type="checkbox" value={todo.iscompleted} id="" />
                  <div className="text">{lists.todo}</div>
               
                  <div className="buttons">
                    <button className='button edit' onClick={handleEdit} >Edit</button>
                    <button className='button edit' onClick={handleDelete}>Delete</button>
                  </div>
              </div>
               })}
            {/* </div> */}
          </div>
        </div>
        </div>
    </>
  )
}

export default App
