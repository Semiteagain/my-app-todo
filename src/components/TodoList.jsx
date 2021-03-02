import React, { useState } from 'react'

 function TodoList(props) {
  

    const [list, setlList] = useState({
        title : '',
        content : ''
    })
     

    function handleChange(e) {
        const {name , value } = e.target

        setlList(prevList =>{
           return {
               ...prevList,
               [name] : value
           }
               
        })
    }

    function submitList(e) {
      props.onAdd(list);

        e.preventDefault();
    }



    return (
        <div>
            <form>
                <input 
                type="text"
                name= 'title'
                placeholder = 'Enter title here ...'
                value={list.title}
                onChange= {handleChange} />

                <textarea
                name = 'content'
                placeholder = 'Input content here ...' 
                value = {list.content}
                onChange = {handleChange}
                 />

                <button  onClick={submitList} >Add List</button>
            </form>
        </div>
    )
}

export default TodoList;