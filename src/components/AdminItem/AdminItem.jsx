import axios from "axios";

function AdminItem({ feedback, fetchFeedback }) {

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


    return (
        <>
            <td>{feedback.feeling}</td>
            <td>{feedback.understanding}</td>
            <td>{feedback.support}</td>
            <td>{feedback.comments}</td>
            <td>{feedback.date}</td>
            <td><button className="deleteBtn" onClick={deleteFeedback}>Remove</button></td>
        </>
    )
}//end AdminItem

export default AdminItem;