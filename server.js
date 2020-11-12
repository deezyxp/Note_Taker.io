// Required modules to start
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Processing of Json Files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})