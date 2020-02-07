const express = require('express');
const {rejectUnauthenticated} = require('../modules/authentication-middleware')
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log(req.user);
    
    
    let queryText = `SELECT * FROM "item"`
    pool.query(queryText)
    .then(result => {
        // console.log(result);
        
        res.send(result.rows)
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(500)
        
    })
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    let description = req.body.description;
    let image_url = req.body.image_url;
    let user_id = req.user.id;
    console.log(req.user);
    

    let queryText = `
    INSERT INTO "item" ("description", "image_url", "user_id")
    VALUES ($1, $2, $3);
    `
    pool.query(queryText, [description, image_url, user_id])
    .then((result) => {
        res.sendStatus(200)
        // console.log(result);
        
    })
    .catch((err) => {
        console.log(`there's an error:`, err);
        res.sendStatus(500);
    })
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    res.sendStatus(200)
    let queryText = `
    DELETE FROM "item" 
    WHERE id=$1;
    `
    pool.query(queryText,[req.params.id])
    .then((result) => {
        res.sendStatus(200)
    }).catch((err) => {
        res.sendStatus(500)
    })
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;