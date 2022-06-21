import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {  
  const [note , setNote] = useState({
    title: "" ,
    content: ""
  });

  const [design ,setDesign] = useState(false);
  
  function handleChange(e){
    const {name , value} = e.target ; 
    setNote(preNote =>{
      return {
        ...preNote ,
        [name]:value
      };

    });

  };

  function Submit(e){
    props.addNote(note);
    setNote({
      title: "" ,
      content: ""
    });
    e.preventDefault();

  };

  function handleDesign(){

    setDesign(true);
  };

  
  return (
    <div >
      <form className="create-note" >{
         design?<input name="title" onChange={handleChange} value ={note.title} placeholder="Title" />:null 
        }
        <textarea name="content" onChange={handleChange} onClick={handleDesign} value ={note.content} placeholder="Take a note..." rows={design?3:1} />
        <Zoom in={design}>
        <Fab onClick={Submit}>
          <AddIcon/> 
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
