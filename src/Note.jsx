import React, { StrictMode } from 'react'
import notes from './notes';
function Note(props){
    return( <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button
        className='button'
        type='submit'
        onClick={()=>{
        props.toDelete(props.id);
          }}>Delete</button>
        </div>
    )
}

export default Note;