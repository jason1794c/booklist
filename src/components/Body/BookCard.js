import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from "@material-ui/core";
import EditBook from './EditBook';
import { BookListProvider } from '../../contexts/BookListContext';

const useStyles = makeStyles(() => ({
    cardContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "10px",
        width: "250px"
    },
    cardText: {
        display: "flex",
        flexWrap: "wrap"
    },
    deleteButton: {
        marginTop: "10px",
        marginBottom: "30px",
        backgroundColor: "#e4301b",
        color: "white"
    }
}))

function BookCard({ id, name, price, category, description }) {
    const classes = useStyles();
    const [openEdit, setOpenEdit] = useState(false);
    const { dispatch } = useContext(BookListProvider)

    // Close the edit popup when the user clicks outside of the popup
    const closeEdit = () => {
        setOpenEdit(false);
    }

    const deleteBook = () => {
        // Update the book list
        dispatch({type: 'bookList/deleteBook', payload: id});
    }

    return (
        <>
        <Card className={classes.cardContainer}>
            <CardActionArea  
                onClick={() => setOpenEdit(true)}
            >
                <CardContent>
                    <Typography 
                        className={classes.cardText} 
                        variant="h6"
                    >
                        <span><strong>Name: </strong>{name}</span>
                    </Typography>
                    <Typography 
                        className={classes.cardText} 
                        variant="h6"
                    >
                        <span><strong>Price: </strong>{price.includes("$") ? null : '$'}{price}</span>
                    </Typography>
                    <Typography 
                        className={classes.cardText} 
                        variant="h6"
                    >
                        <span><strong>Category: </strong>{category}</span>
                    </Typography>
                    <Typography 
                        className={classes.cardText} 
                        variant="h6"
                    >
                        <span><strong>Description: </strong>{description}</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Button 
                className={classes.deleteButton}
                variant="contained" 
                onClick={deleteBook}
            >Delete Book</Button>
        </Card>
        {openEdit && 
            <EditBook  
                openEdit={openEdit}
                closeEdit={closeEdit}
                bookId={id}
                name={name}
                price={price}
                category={category}
                description={description}
            />}
        </>
    )
}

export default BookCard
