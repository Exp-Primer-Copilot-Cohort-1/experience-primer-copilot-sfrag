// Create web server
// 1. Create web server
// 2. Create router
// 3. Create routes
// 4. Listen to port
// 5. Connect to database
// 6. Start server

// 1. Create web server
const express = require('express');
const app = express();

// 2. Create router
const router = require('./routes');

// 3. Create routes
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/api/comments', router);

// 4. Listen to port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// 5. Connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 6. Start server