import BookShow from "./BookShow";
import useBookContext from "../Hooks/useBookContext";


function BookList(){

    const {books} = useBookContext();
    const renderBooks = books.map((item) => {
        return <BookShow value = {item}  key={item.id}/>
    });

    return <div>
             {renderBooks}
         </div>
};

export default BookList;