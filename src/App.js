import React, {useState}  from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';



function App() {
  
   const [lists, setLists] = useState([])
  

 function addList(newlist) {
   setLists(prevList =>{
     return [...prevList, newlist]
   })
 }
 function deleteList(id) {
   setLists(prevList =>{
     return prevList.filter((newlist, index) =>{
       return index !== id
     })
   })
 }
 

  return (
    <div className="App">
     <h1>TodoList</h1>
       <TodoList 
       onAdd = {addList} />
      
      {lists.map((addNewList, index) =>{
        return <CreateTodo
        key = {index}
        id = {index}
        title = {addNewList.title}
        content = {addNewList.content}
        onDelete = {deleteList}


        />
      })}
     
    </div>
  );
}

export default App;
