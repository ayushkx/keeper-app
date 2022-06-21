import React ,{useState} from 'react';
import "./App.css"
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import CreateArea from './components/CreateArea';

function App() {
   
  const [notes , setNotes] = useState([]);

  function addNote(note){
     setNotes(preitems => {
       return [...preitems , note];
     });
  };
  function deleteNote(id){
    setNotes(preitems => {
      return preitems.filter((items , index) => {
        return index !== id ;
      });
    });

  }; 

  return (
    <div>
      <Header/>
      <CreateArea addNote={addNote}/>
      {notes.map((notesItem , index) =>{
        return <Note key ={index} id={index} title = {notesItem.title} content={notesItem.content} deleteNote={deleteNote}/>
      })
    }
      <Footer/>

    </div>
  );
}

export default App;
