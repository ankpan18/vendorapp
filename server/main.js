const express = require("express");
const cors = require("cors");
const databaseConfiguration = require('./configurations/database.js');
const banking = require("./routes/vendor.routes.js");
const dotenv = require("dotenv");
const BASE_URL=process.env.BASE_URL;

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

//Connecting to the Mongodb database
databaseConfiguration();

//Adding CORS Support
app.use(cors({origin:true, credentials:true}));

// add the middlewares
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('<h1>Server is up and running</h1>'));

//Using Banking model for our route
app.use("/api/vendorapp",banking);

// Listen
app.listen(PORT, () =>
    console.log(`Server is running on ${BASE_URL}:${PORT}`)
);