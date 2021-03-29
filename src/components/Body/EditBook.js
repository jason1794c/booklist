import React, { useState, useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    TextField,
  } from "@material-ui/core";
import { BookListProvider } from '../../contexts/BookListContext';

const useStyles = makeStyles(() => ({
    dialogContainer: {
        display: "flex",
        flexDirection: "column",
        width: "50vw",
        height: "70vh",
        padding: "20px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%"
    },
    inputs: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },
    input: {
        width: "35vw"
    },
    actions: {
        display: "flex",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "#7acbcd",
        margin: "40px"
    }
}))

function EditBook({ openEdit, closeEdit, bookId, name, price, category, description }) {
    const classes = useStyles();
    const { dispatch } = useContext(BookListProvider);
    const [newName, setNewName] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const updateBook = () => {
        // Create an updated book object based on the inputted name, price, category, and/or description
        // If any of the updates is blank, set the values of the respective categories to the original values
        const updatedBook = {
            id: bookId,
            name: newName ? newName : name,
            price: newPrice ? newPrice : price,
            category: newCategory ? newCategory : category,
            description: newDescription ? newDescription : description
        }

        // Update the book list
        dispatch({type: 'bookList/updateBook', payload: updatedBook})
    }

    return (
        <Dialog
            classes={{paper: classes.dialogContainer}}
            open={openEdit}
            onClose={closeEdit}
        >
            <form className={classes.form} onSubmit={updateBook}>
                <DialogContent className={classes.inputs}>
                    <Typography variant="h5">Update Book</Typography>
                    <TextField 
                        className={classes.input} 
                        label="Update book name" 
                        value={newName}
                        onChange={e => setNewName(e.target.value)}
                    />
                    <TextField 
                        className={classes.input} 
                        label="Update book price" 
                        value={newPrice}
                        onChange={e => setNewPrice(e.target.value)}
                    />
                    <TextField 
                        className={classes.input} 
                        label="Update book category" 
                        value={newCategory}
                        onChange={e => setNewCategory(e.target.value)}
                    />
                    <TextField 
                        className={classes.input} 
                        label="Update book description" 
                        value={newDescription}
                        onChange={e => setNewDescription(e.target.value)}
                    />
                </DialogContent>   
                <DialogActions className={classes.actions}>
                    <Button 
                        className={classes.button} 
                        variant="contained"
                        type="submit"
                    >Update Book</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default EditBook
