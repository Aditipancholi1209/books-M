import AddBookForm from './Addbookform';
import './App.css';
import React, { useState } from 'react';
import BooksTable from './BooksTable';
function App() {
const [books,setBooks]=useState([]);
const [updateDetails,setUpdateDetails]=useState(null);
const [bookIndex,setBookIndex]=useState(null);
const handleSubmit=(bookDetail)=>{
  
  let data=books;
  if(bookIndex==0 || bookIndex)
  {
    data.splice(bookIndex,1,bookDetail)
  }  
  else{
    data=[...books,bookDetail];
  }
  setBooks([...data]);
  setBookIndex(null);
  setUpdateDetails(null);
}
const handleDelete=(index)=>{
  let data=books;
  data.splice(index,1)
  setBooks([...data])
}
const handleUpdate=(item,index)=>{
  setUpdateDetails(item);
  setBookIndex(index);
}
console.log(books);
  return (
    <div className="App">
<AddBookForm handleSubmit={handleSubmit} updateDetails={updateDetails}/>
<BooksTable handleDelete= {handleDelete} handleUpdate={handleUpdate} books={books}/>
    </div>
  );
}

export default App;
