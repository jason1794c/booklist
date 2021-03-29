import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ImageSource from '../../images/Book-list.png';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        justifyContent: "center",
        padding: "10px"
    },
}))

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img src={ImageSource} alt='Book List' />
        </div>
    )
}

export default Header
