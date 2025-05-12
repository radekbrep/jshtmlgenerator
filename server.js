const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Serve static files (e.g. scratchpad/index.html and JS)
app.use(express.static('./source'));

// Optional: fallback route
 app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, 'scratchpad/index.html'));
});

app.listen(PORT, () => {
  console.log(`Dev server running at http://localhost:${PORT}`);
});