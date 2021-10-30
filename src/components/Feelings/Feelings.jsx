import { useHistory } from "react-router";
import { useDispatch } from "react-redux"
import { useState } from "react";

function Feelings() {
    const [feeling, setFeeling] = useState('');
    //navigate to the next page with history
    const history = useHistory();
    // trigger that sends data to reducer
    const dispatch = useDispatch();


    //function that will dispatch data to reducer 
    //and use history
    const handleSubmitFeelings = () => {
        event.preventDefault();
        //send info off with trigger
        dispatch({
            type: 'SUBMIT_FEELING',
            payload: feeling
        });
        history.push('/understanding')
    }

    return (
        <>
            <h1>How are you feeling today?</h1>
            <p>Please rate between a 0-5</p>
            <div className="inputBox">
                <input type="number"
                    max="5"
                    min="0"
                    // value={feeling} -> don't need this if I want data to stay for 'back' button
                    onChange={(event) => setFeeling(event.target.value)}
                />
                <button className="Submit"
                    onClick={handleSubmitFeelings}>Next</button>
            </div>
        </>
    )

}//end Feelings

export default Feelings;