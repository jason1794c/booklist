import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import BookCard from './BookCard';
import { BookListProvider } from "../../contexts/BookListContext";

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '50px'
    }
}))

function BookList() {
    const classes = useStyles();
    const { bookList } = useContext(BookListProvider);

    return (
        <div className={classes.container}>
            {bookList.map(book => (
                <BookCard
                    key={book.id}
                    id={book.id}
                    name={book.name}
                    price={book.price}
                    category={book.category}
                    description={book.description}
                />
            ))}
        </div>
    )
}

export default BookList
