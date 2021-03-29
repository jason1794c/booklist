import React, { useReducer, createContext } from 'react';

export const BookListProvider = createContext();

// The initial book list state
const initialBookList = JSON.parse(localStorage.getItem('bookList')) || [];

// Book list reducer
function reducer(bookList=initialBookList, action) {
    switch(action.type) {
        case 'bookList/addBook':
            localStorage.setItem('bookList', JSON.stringify([...bookList, action.payload]))
            return [...bookList, action.payload]
        case 'bookList/deleteBook':
            localStorage.setItem('bookList', JSON.stringify(bookList.filter(book => book.id !== action.payload)))
            return bookList.filter(book => book.id !== action.payload)
        case 'bookList/updateBook':
            // Find the book we're trying to update's index
            const bookIndex = bookList.findIndex(book => book.id === action.payload.id);
            let newBookList = bookList;
            newBookList[bookIndex] = action.payload;
            localStorage.setItem('bookList', JSON.stringify([...newBookList]));
            return [...newBookList]
        default:
            return bookList;
    }
}

function BookListContext({ children }) {
    const [bookList, dispatch] = useReducer(reducer, initialBookList);
    const bookContext = {
        bookList: bookList,
        dispatch: dispatch
    }

    return (
        <BookListProvider.Provider value={bookContext}>
            {children}
        </BookListProvider.Provider>
    )
}

export default BookListContext
