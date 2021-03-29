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
import { v4 as uuidv4 } from 'uuid';

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

function AddBookPopUp({ openPopUp, closePopUp }) {
    const classes = useStyles();
    const { dispatch } = useContext(BookListProvider);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const addBook = () => {
        // Set the book object based on the inputted name, price, category, and description
        const book = {
            id: uuidv4(),
            name: name,
            price: price,
            category: category,
            description: description
        };
        
        // Update the book list by adding the new book
        dispatch({type: 'bookList/addBook', payload: book})
    }

    return (
        <Dialog
            classes={{paper: classes.dialogContainer}}
            open={openPopUp}
            onClose={closePopUp}
        >
            <form className={classes.form} onSubmit={addBook}>
                <DialogContent className={classes.inputs}>
                    <Typography variant="h5">Add a Book</Typography>
                    <TextField 
                        className={classes.input} 
                        label="Enter the book name" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <TextField 
                        className={classes.input} 
                        label="Book price" 
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        inputProps={{
                            maxLength: 5
                        }}
                        required
                    />
                    <TextField 
                        className={classes.input} 
                        label="Book category" 
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        required
                    />
                    <TextField 
                        className={classes.input} 
                        label="Book description" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        inputProps={{
                            maxLength: 50
                        }}
                        helperText={`${description.length}/50`}
                        required
                    />   
                </DialogContent>
                <DialogActions className={classes.actions}>
                    <Button 
                        type="submit"
                        className={classes.button} 
                        variant="contained"
                    >Add Book</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default AddBookPopUp
