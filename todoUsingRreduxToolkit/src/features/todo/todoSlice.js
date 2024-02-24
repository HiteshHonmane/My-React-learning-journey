import { createSlice, nanoid } from "@reduxjs/toolkit";

//Firsetly We declear the initilal state.

const initialState= {
    todos:[{id:1 , text:"hello Brother"}]

}

//Now we create slice where we add reducers

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo :(state, action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload )
        },
        updateTodo:(state, action)=>{
            const {id, newText}= action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo){
                existingTodo.text = newText
            }
        }
    }
})

export const{ addTodo , removeTodo }= todoSlice.actions