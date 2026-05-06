const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// import routes
const router = require("./routes");

// mount routes
app.use("/api", router);

app.listen(3001, () => {
    console.log("Yo server running now, foo on port 3001");
});