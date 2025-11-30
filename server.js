require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const profileRoutes = require('./routes/profile');

const app = express();

app.use(bodyParser.json());

app.use('/api', profileRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
