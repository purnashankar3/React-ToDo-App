import React from "react";

import toDoApp from "./toDoApp.css"

class ToDoApp extends React.Component{

    constructor(){
        super()
        this.state={
            newItem:"",
            list:[]
        }
    }
    addtoDo=(todo)=>{
        if(todo===""){alert("Enter Something")}
        else{ 
            
       const item={
            id:Date.now(),
            value:todo,
        }
        const list=[...this.state.list]
        list.push(item)
        this.setState({list:list,newItem:""})

    }
    }

    
    

    onChangeHandler(e){
        this.setState({newItem:e})

    }

    deleteItem(id){
        const list=[...this.state.list]
        const updatedList=list.filter(item=>item.id!==id)
        this.setState({list:updatedList})
    }

    render(){
        return(
            <div>
                <h1>ToDo List App</h1>
                <input type="text" 
                placeholder="Enter the todo thing" 
                value={this.state.newItem} 
                name="todos" 
                onChange={e=>this.onChangeHandler(e.target.value)}>
               
                 
                </input>
                <button type="submit" onClick={()=>this.addtoDo(this.state.newItem)}>Add</button>
                
                
                <div>
                    <ul>
                    {
                    this.state.list.map(l=>(<div key={l.id}><input type="checkbox" />{l.value}<button onClick={()=>this.deleteItem(l.id)}>Delete</button></div>))
                    
                    }
                    </ul>
                </div>
            </div>
        )
    }
}
export default ToDoApp;