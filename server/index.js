import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('The server is running on PORT 5000');
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});