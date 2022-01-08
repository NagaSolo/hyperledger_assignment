'use strict'
require("dotenv").config();
const express = require("express")
require("./db/mongoose")
const Edu = require("./models/edu")
const cors = require("cors");

/**
 * @constants
 * @setHostAt "0.0.0.0" instead or localhost
 */
const HOST = "0.0.0.0";
const PORT = 8445;

const app = express();
app.use(express.json())
const bodyParser = require("body-parser")
var corsOptions = {
    origin: process.env.CLIENT_ORIGIN || "http://localhost:3000"
  };
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * @getEdu endpoint - fetch data from our mongoDB 
 */
app.get('/', async (req, res) => {
    try {
        const edu = await Edu.find()
        res.json(edu)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

/**
 * @createEdu endpoint - creates and appends the mongoDB
*/
app.post('/', async (req, res) => {
    const edu = new Edu({
        name: req.body.name,
        location: req.body.location,
        field: req.body.field
    })
    try {
      await edu.save()
      res.status(201).send({edu});
    } catch (error) {
      res.status(400).send(error)
    }
  }
);

/** 
* @listen 
*/
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});