const { Router } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET the info for '/admin'
router.get('/', (req, res) => {
    pool.query('SELECT * FROM "feedback" ORDER BY "id" DESC;')
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
    
})


module.exports = router;