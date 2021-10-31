import { useState, useEffect } from "react";
import AdminItem from "../AdminItem/AdminItem";
import axios from "axios";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';




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


    //material UI stuff for table and color
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

   
        return (
          <Container fixed>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Feelings</StyledTableCell>
                  <StyledTableCell align="right">Understanding</StyledTableCell>
                  <StyledTableCell align="right">Support</StyledTableCell>
                  <StyledTableCell align="right">Comments</StyledTableCell>
                  <StyledTableCell align="right">Date</StyledTableCell>
                  <StyledTableCell align="right">Remove from Table</StyledTableCell>
                  <StyledTableCell align="right">Flag for Review</StyledTableCell>
                </TableRow>
              </TableHead>
             
                {feedbackList.map((feedback) => (
                  <TableBody key={feedback.id}>
                      <AdminItem
                                feedback={feedback}
                                fetchFeedback={fetchFeedback}
                                feedbackList={feedbackList}
                            />
                  </TableBody>
                ))}
            
            </Table>
          </TableContainer>
          </Container>
        );

     
  
    //render to the DOM via table
    // return (
        // <table>
        //     <thead>
        //         <tr>
        //             <th>Feelings</th>
        //             <th>Understanding</th>
        //             <th>Support</th>
        //             <th>Comments</th>
        //             <th>Date</th>
        //         </tr>
        //     </thead>
        //     {
        //         feedbackList.map((feedback) => {
        //             return (
        //                 <tbody key={feedback.id}>
        //                     <AdminItem
        //                         feedback={feedback}
        //                         fetchFeedback={fetchFeedback}
        //                         feedbackList={feedbackList}
        //                     />
        //                 </tbody>
        //             )
        //         })
        //     }

        // </table >
    // )
                
} //end Admin

export default Admin;
