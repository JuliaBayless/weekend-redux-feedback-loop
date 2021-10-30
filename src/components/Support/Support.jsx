import { useHistory } from "react-router";
import { useDispatch } from "react-redux"
import { useState } from "react";

function Support() {
    const [support, setSupport] = useState('');
    //navigate to the next page with history
    const history = useHistory();
    // trigger that sends data to reducer
    const dispatch = useDispatch();


    //function that will dispatch data to reducer 
    //and use history
    const handleSubmitSupport = () => {
        event.preventDefault();
        //send info off with trigger
        dispatch({
            type: 'SUBMIT_SUPPORT',
            payload: support
        });
        history.push('/comments')
    }

    return (
        <>
            <h1>How supported do you feel?</h1>
            <p>Please rate between a 0-5</p>
            <div className="inputBox">
                <input type="number"
                    // value={feeling} -> don't need this if I want data to stay for 'back' button
                    onChange={(event) => setSupport(event.target.value)}
                />
                <button className="Submit"
                    onClick={handleSubmitSupport}>Next</button>
            </div>
        </>
    )
}//end Support

export default Support;