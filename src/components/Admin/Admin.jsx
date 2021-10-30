import { useState, useEffect } from "react";
import AdminItem from "../AdminItem/AdminItem";
import axios from "axios";



function Admin() {
    //where the feedback list will live in local state
    const [feedbackList, setFeedbackList] = useState([])

    //call fetchFeedback on DOM load
    useEffect(() => {
        fetchFeedback()
    }, [])

    //get the feedback from the data
    const fetchFeedback = () => {
        axios({
            method: `GET`,
            url: `/feedback`,
        })
            .then((response) => {
                console.log(`GET feedback response`, response.data);
                setFeedbackList(response.data)
            })
            .catch((error) => {
                console.log(`GET feedback ERROR`, error);
            });
    } //end FetchFeedback

//render to the DOM via table
    return (
        <table>
            <tr>
                <th>Feelings</th>
                <th>Understanding</th>
                <th>Support</th>
                <th>Comments</th>
                <th>Date</th>
            </tr>
            {feedbackList.map((feedback) => {
                return (
                    <tr key={feedback.id}>
                        <AdminItem
                            feedback={feedback}
                            fetchFeedback={fetchFeedback}
                        />
                    </tr>
                )
            })}

        </table>
    )
} //end Admin

export default Admin;
