import { useState } from "react";
import "./BookEdit.css";

function BookEdit({book, onEdit, handelEditClose}){

    const[edited, setEdit] = useState(book.title);

    const handelChange = (event) => {
        setEdit(event.target.value);
    };

    // Pervent the deafult behavior of site
    const handelSubmit = (event) => {
        event.preventDefault();
        onEdit(book , edited);
        handelEditClose();
    };


    return <form className="editForm" onSubmit={handelSubmit}>
             <label>Title</label>
             <input value={edited} onChange={handelChange} className="editForm__input"></input>
             <button>Save</button>
           </form>
};
export default BookEdit;