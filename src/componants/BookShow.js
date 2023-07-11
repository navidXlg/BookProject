import { useState } from "react";
import BookEdit from "./BookEdit";
import "./BookShow.css";
import useBookContext from "../Hooks/useBookContext";

function BookShow ({value}){

    const { handelDeletBook} = useBookContext();
    const[editMode, setEditMode] = useState(false);
    // Deletign item from list
    const handelDelClick = () => {
      handelDeletBook(value);
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
              {editMode ? <BookEdit book = {value}  handelEditClose = { handelEditClick}/> : ''}
           </div>
    );
};

export default BookShow;