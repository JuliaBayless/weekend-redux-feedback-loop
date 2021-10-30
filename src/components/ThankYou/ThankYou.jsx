import { useHistory } from "react-router";

function ThankYou() {
    //push to start of survey
 const history = useHistory();

 const handleSubmitStartOver = () => {
     history.push('/')
 }

return (
    <>

    <h1>Thank You!</h1>
    <p>You're feedback has been submitted!</p>
    <p>If you'd like to leave new feedback, just click the button</p>

    <button onClick={handleSubmitStartOver}>Leave New Feedback</button>
    </>
)

}//end ThankYou

export default ThankYou;