const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/example/index.html");
});

const listener = app.listen(// process.env.PORT,
  3001, function() {
  console.log("Your app is listening on port " + listener.address().port);
});