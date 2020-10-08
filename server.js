const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const router = require("./src/routes/router");

app.use(bodyParser());
app.use("/api/v1/", router);

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
