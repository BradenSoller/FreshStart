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
router.get('/Item', (req, res) => {
  const getItemsDetails =
    `
  SELECT * FROM "AddItem"
    
  `
 
  pool.query(getItemsDetails)
    .then(result => {

      res.send(result.rows);
      console.log("Get all appointments", result.rows);
      
   
    })
    .catch((err) => {
      console.log("ERROR: Get all appointments", err);
      res.sendStatus(500);
    });
})
/**
 * POST route template
 */
router.post('/', cloudinaryUpload.single("image"), async (req, res) => {
  try {
    // Check if the file exists
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    const fileUrl = req.file.path; // Cloudinary URL of the uploaded file
    const title = req.body.title;
    const description = req.body.description;
    const size = req.body.size;

    console.log("fileUrl", fileUrl);
    
    // Ensure the title is provided
    if (!title) {
      return res.status(400).send("Title is required.");
    }

    // SQL query for inserting the anime data
    const query = `
      INSERT INTO "AddItem" ("title","description","image","size")
      VALUES ($1, $2, $3, $4)
      RETURNING "id", "title","description","image","size";
    `;
    const values = [title, description, size, fileUrl];

    // Execute the query
    const result = await pool.query(query, values);

    // If insert is successful, return the anime details
    if (result.rows.length > 0) {
      res.status(201).json({
        message: "Item added successfully",
        anime: result.rows[0], // Include the anime details in the response
      });
    } else {
      res.status(500).send("Failed to add anime");
    }
  } catch (err) {
    console.error('POST route failed:', err);
    res.status(500).send("Server error");
  }
});


module.exports = router;
