import React from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';


function App() {


 function addList(list) {
   console.log(list)
 }

 

  return (
    <div className="App">
     <h1>TodoList</h1>
       <TodoList 
       onAdd = {addList} />

       <CreateTodo 
       title = 'This is the title' 
       content = 'This is for content'
       />
    </div>
  );
}

export default App;
