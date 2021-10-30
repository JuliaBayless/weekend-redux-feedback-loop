const { Router } = require('express');
const express = require('express');
const { default: logger } = require('redux-logger');
const router = express.Router();
const pool = require('../modules/pool');

//GET the info for '/admin'
router.get('/', (req, res) => {
    pool
        .query('SELECT * FROM "feedback" ORDER BY "id" DESC;')
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in GET from "feedback" table');
            res.sendStatus(500);
        })
}) //end GET 


//Post to DB from FeedBack form on client side
router.post('/', (req, res) => {
    const newFeedback = req.body
    console.log('This is REQ.BODY', req.body);

    //insert these 'sanitized' values into DB
    const sqlText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    `;

    let values = [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments]

    pool
        .query(sqlText, values)
        .then((result) => {
            console.log('SUCCESS - post to DB');
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log('ERROR in POST to DB', error);
            res.sendStatus(500);
        })
}) //end POST

router.put('/:id', (req, res) => {
    let idToChange = req.params.id;
    console.log('Item to Change', idToChange);
    //toggling the T/F value with put


    const queryText = `
            UPDATE "feedback"
            SET "flagged" = NOT "flagged"
            WHERE "id" = $1
    `
    let value = [idToChange]
    pool
        .query(queryText, value)
        .then((response) => {
            res.sendStatus(204);
        })
        .catch((error) => {
            console.log('Error in DELETE', error);
            res.sendStatus(500);
        })
}) //end PUT


router.delete('/:id', (req, res) => {
    let idToDelete = req.params.id;
    console.log('Item to DELETE', idToDelete);

    const queryText = `
    DELETE from "feedback"
    WHERE "id" = $1;
    `
    let value = [idToDelete]
    pool
        .query(queryText, value)
        .then((response) => {
            res.sendStatus(204);
        })
        .catch((error) => {
            console.log('Error in DELETE', error);
            res.sendStatus(500);
        })
}) //end DELETE

module.exports = router;