const express = require("express");
const path = require('path');
const app = express();
const port = 1235;

app.use(express.static("dist"));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
