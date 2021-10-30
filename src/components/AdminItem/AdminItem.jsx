import axios from "axios";
import { useState } from "react";
import './AdminItem.css'

function AdminItem({ feedback, fetchFeedback }) {

    let flag = feedback.flagged

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

    console.log('This is flag', flag);

    return (
        <>
        
            <tr className={flag ? "highlight" : ""}>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td>{feedback.date}</td>
                <td><button className="deleteBtn" onClick={deleteFeedback}>Remove</button></td>
                <td><button className="flagBtn" onClick={toggleFlag}>Flag</button></td>
            </tr>
        </>
    )
}//end AdminItem

export default AdminItem;