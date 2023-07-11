import { useState } from "react";
import useBookContext from "../Hooks/useBookContext";


function BookCreate(){

    const {handelCreateBook} = useBookContext()
    const[bookName, setBookName] = useState("");
    const handelChange = (event) => {
        setBookName(event.target.value);
    };

    const handelSubmit = (event) => {
        event.preventDefault();
        handelCreateBook(bookName);
        setBookName('');
    };

    return(
          <form onSubmit={handelSubmit}>
            <label>Add Book</label>
            <input value={bookName} onChange={handelChange} ></input>
            <button type="submit">Submit</button>
          </form>
    );
};

export default BookCreate;