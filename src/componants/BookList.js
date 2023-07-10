import BookShow from "./BookShow";


function BookList({value, onDelete, onEdit}){
    const renderBooks = value.map((item) => {
        return <BookShow value = {item} onDelete = {onDelete} onEdit = {onEdit} key={item.id}/>
    });

    return <div>
             {renderBooks}
         </div>
};

export default BookList;