import axios from "axios";
import './AdminItem.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button'
import * as React from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function AdminItem({ feedback, fetchFeedback }) {
    //holds boolean for toggle of row
    let flag = feedback.flagged

    //toggle function
    const toggleFlag = () => {
        console.log('Changing this color', flag, feedback.id);
        axios
            .put(`/feedback/${feedback.id}`)
            .then(response => {
                fetchFeedback();
            })
            .catch(err => {
                console.log('Error in PUT w Flagged', err);
            })
    }

    //delete row
    const deleteFeedback = () => {
        console.log('In deleteFeedback', feedback.id);
        axios
            .delete(`/feedback/${feedback.id}`)
            .then((response) => {
                //call GET to reset the page
                fetchFeedback();
            })
            .catch((err) => {
                console.log(`ERROR in DELETE`, err);
            });
    } //end deleteFeedback

    //test boolean value
    console.log('This is flag', flag);
    return (
        <>
            <TableRow className={flag ? "highlight" : ""}>
                <TableCell component="th" scope="row">
                    {feedback.feeling}
                </TableCell>
                <TableCell align="right">{feedback.understanding}</TableCell>
                <TableCell align="right">{feedback.support}</TableCell>
                <TableCell align="right">{feedback.comments}</TableCell>
                <TableCell align="right">{feedback.date}</TableCell>
                <TableCell align="right">
                    <Button
                        color="error"
                        variant="outlined"
                        onClick={deleteFeedback}>Remove<DeleteIcon />
                    </Button>
                </TableCell>
                <TableCell align="right">
                    {flag ? <Button
                        color="warning"
                        variant="outlined"
                        onClick={toggleFlag}>Unflag</Button>
                        : <Button
                            color="warning"
                            variant="outlined"
                            onClick={toggleFlag}> Add Flag</Button>}
                </TableCell>
            </TableRow>
        </>
    )
}//end AdminItem

export default AdminItem;