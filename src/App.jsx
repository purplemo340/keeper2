import React, { StrictMode, useState } from 'react'
//import notes from './notes'
import Note from './Note';
import Add from './Add'
function App(){
    
  var [notes, setNotes]= useState([]);

  function addNote(note) {
        
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
    
   
  }
  function deleteNote(id) {
        
    setNotes((prevValue)=>{
      return prevValue.filter(
        (item, index) =>{
          return index!=id;
        }
      )
    })
    
   
  }
    return( 
    <div className="add">
       
        <Add key={1} toAdd={addNote}/>
        {notes.map((noteItem, index) =>
             <Note 
             key={index}
             title={noteItem.title}
             content={noteItem.content}
             id={index}
             toDelete={deleteNote}
             
             />
        )}
        </div>
    )
}

export default App;