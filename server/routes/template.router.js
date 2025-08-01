const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const cloudinaryUpload = require("../modules/cloudinary.config");

/**
 * GET route template
 */
router.get('/items', (req, res) => {
  const getItemsDetails =
    `
  SELECT * FROM "Additem"
    
  `
 
  pool.query(getItemsDetails)
    .then(result => {

      res.send(result.rows);
   
    })
    .catch((err) => {
      console.log("ERROR: Get all appointments", err);
      res.sendStatus(500);
    });
})
/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
