import { createContext, useState} from "react";
import axios from "axios";

const bookContext = createContext();

function Provider({children}){


    const [books, setBooks] = useState([]);

     /// fetch all data
    const fetchBook = async() => {
        await axios.get("http://localhost:3001/books")
        .then(response => setBooks(response.data))
        .catch(error => alert("Error : "  + error.message));
    };


      /// Creating books by their title
    const handelCreateBook = async (title) => {
    const sendBook = await axios.post("http://localhost:3001/books", {
      id : Math.floor(Math.random()*1000) , title})
      .then( response => {
        const createdBooks = [
          ...books,response.data
        ];
        setBooks(createdBooks);
      })
      .catch(error => alert(" Error : " + error.message));
      
   return sendBook
     };

      // Deleting book by its name
  const handelDeletBook = async (delBook) => {

    await axios.delete(`http://localhost:3001/books/${delBook.id}`)
    .catch(error => alert("Error : " + error.message));
    
    const afterDelet = books.filter(item => {
      return item.id !== delBook.id
    });
    
    setBooks(afterDelet);
  };

   // Edit an item by its title
   const handelEditBook = async (book, newTitle) => {
    await axios.put(`http://localhost:3001/books/${book.id}`, {
    title : newTitle})
    .catch(error => alert("Error : " + error.message));

  const afterEdit = books.map((item) => {
    if(item.title === book.title){
        item.title = newTitle
    }
    return item
  });
  
  setBooks(afterEdit);
};


    const shareValue = {
        books,
        setBooks,
        fetchBook,
        handelCreateBook,
        handelDeletBook,
        handelEditBook
    };

    return <bookContext.Provider value={shareValue}>
                {children}
           </bookContext.Provider>
};

export default Provider;
export {bookContext};