import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";

function Support() {
    const formData = useSelector(store => store.feedbackReducer)
    const [support, setSupport] = useState(formData.support || '');
    //navigate to the next page with history
    const history = useHistory();
    // trigger that sends data to reducer
    const dispatch = useDispatch();


    //function that will dispatch data to reducer 
    //and use history
    const handleSubmitSupport = () => {
        event.preventDefault();
        //send info off with trigger
        if (support === '') {
            alert('Please fill in field')
        } else if (support > 5 || support < 0) {
            alert('Please fill in field with numbers between 0 - 5')
        } else {
            dispatch({
                type: 'SUBMIT_SUPPORT',
                payload: support
            });
            history.push('/comments')
        }
    } //end handleSubmit

    //back button
    const handleSubmitBack = () => {
        history.push('/understanding')
    }

    return (
        <>
            <h1>How supported do you feel?</h1>
            <p>Please rate between a 0-5</p>
            <div className="inputBox">
                <input type="number"
                    max="5"
                    min="0"
                    value={support}
                    onChange={(event) => setSupport(event.target.value)}
                />
                <button className="Submit"
                    onClick={handleSubmitSupport}>Next</button>
                <div>
                    <button className="backBtn" onClick={handleSubmitBack}>Back</button>
                </div>
            </div>
        </>
    )
}//end Support

export default Support;