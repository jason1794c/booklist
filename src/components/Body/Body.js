import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import BookList from './BookList';
import AddBookPopUp from './AddBookPopUp';

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: "#363636",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px 0",
    },
    button: {
        color: "white",
        backgroundColor: "#7acbcd"
    }
}))

function Body() {
    const classes = useStyles();
    const [openPopUp, setOpenPopUp] = useState(false);

    // Close the add book popup when the user clicks outside of the popup
    const closePopUp = () => {
        setOpenPopUp(false);
    }

    return (
        <div className={classes.container}>
            <Button
                className={classes.button}
                variant='contained'
                size='large'
                onClick={() => setOpenPopUp(true)}
            >Add a Book</Button>
            <BookList />
            {openPopUp && <AddBookPopUp {...{openPopUp, closePopUp}}/>}
        </div>
    )
}

export default Body
