import { useState } from "react";
import BookEdit from "./BookEdit";
import "./BookShow.css";

function BookShow ({value, onDelete, onEdit}){

    const[editMode, setEditMode] = useState(false);
    // Deletign item from list
    const handelDelClick = () => {
        onDelete(value);
    };

    const handelEditClick = () => {
      setEditMode(!editMode);
    };


    return ( <div className="bookCard">
              <div>
                <button onClick={handelDelClick}>del</button>
                <button onClick={handelEditClick} >Edit</button>
              </div>
              <p className="bookCard__heading">{value.title}</p>
              <p className="BookCard__description"> Esse praesentium aut amet, quidem alias dolorem earum velit suscipit harum nisi?</p>
              {editMode ? <BookEdit book = {value} onEdit = {onEdit} handelEditClose = { handelEditClick}/> : ''}
           </div>
    );
};

export default BookShow;