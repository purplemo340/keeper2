import React, { StrictMode, useState } from 'react'
//import notes from './notes'
import Note from './Note';

function Add(props){
    
    
    var [note, setNote]= useState({
        title:'',
        content:''
    });
   
    function changeTitle(event){
        const { value, name } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]:value
            };
          });
        
    }
    function changeContent(event){
        const { value, name } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]:value
            };
          });
        
    }
    
    return( 
    <div className="add">
    <div className='input'>
        <input 
        name='title'
        className='input_title'
        onChange={changeTitle}
        placeholder='Title' 
        value={note.title}></input>
        <div className='input_content'>
        <textarea 
        name='content'
       
        onChange={changeContent}
        placeholder='Take a note'
        value={note.content}></textarea>
        </div>
        </div>
        <button className='button'
        onClick={()=>{
        props.toAdd(note);
        setNote({
            title:'',
            content:''
        })
          }}>Add</button>
       
       
        </div>
    )
}

export default Add;