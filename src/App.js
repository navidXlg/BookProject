import { useEffect} from "react";
import BookCreate from "./componants/BookCreate";
import BookList from "./componants/BookList";
import useBookContext from "./Hooks/useBookContext";




export default function App(){

  const {books, fetchBook, handelDeletBook,
    handelEditBook } = useBookContext();

  // Intinal getting data from server
  useEffect(()=>{
    fetchBook();
  }, []);
 
  return(
       <div>
          <BookCreate />
          <BookList value = {books} onDelete = {handelDeletBook} onEdit = {handelEditBook}/>
        </div>
  )
};