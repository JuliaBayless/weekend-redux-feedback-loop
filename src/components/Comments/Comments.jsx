import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";

function Comments() {
    const formData = useSelector(store => store.feedbackReducer)
    const [comment, setComment] = useState(formData.comments || '');
    //navigate to the next page with history
    const history = useHistory();
    // trigger that sends data to reducer
    const dispatch = useDispatch();


    //function that will dispatch data to reducer 
    //and use history
    const handleSubmitComment = () => {
        event.preventDefault();
        //send info off with trigger
        dispatch({
            type: 'SUBMIT_COMMENTS',
            payload: comment
        });
        history.push('/review')
    }

    //back button
    const handleSubmitBack = () => {
        history.push('/understanding')
    }

    return (
        <>
            <h1>Would you like to leave a comment?</h1>
            <div className="inputBox">
                <input type="text"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                />
                <button className="Submit"
                    onClick={handleSubmitComment}>Next</button>
                <div>
                    <button className="backBtn" onClick={handleSubmitBack}>Back</button>
                </div>
            </div>
        </>
    )


}//end Comments

export default Comments;