const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('../public')); // put your HTML/JS in the 'public' folder

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
