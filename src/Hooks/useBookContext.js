import { useContext } from "react";
import { bookContext } from "../Context/BookContext";

function useBookContext(){

    return useContext(bookContext)
};

export default useBookContext;