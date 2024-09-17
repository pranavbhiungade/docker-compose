const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
  };
app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



