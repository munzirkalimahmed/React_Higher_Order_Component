import React from "react"
import SearchUsers from "./UsersList"
import SearchTodos from "./TodoList"

function App() {

  return (
    <>
    <div>App <h2>Higher Order Component</h2>
      <div>
        <SearchUsers/>
        <div><SearchTodos/></div>
      </div>
    </div>
    </>
  )
}

export default App
