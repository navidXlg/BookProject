import { useState } from "react";


function BookCreate({onChange}){

    const[bookName, setBookName] = useState("");
    const handelChange = (event) => {
        setBookName(event.target.value);
    };

    const handelSubmit = (event) => {
        event.preventDefault();
        onChange(bookName);
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