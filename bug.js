const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing crucial error handling for missing or malformed data
  console.log(user.name); //Error if name is missing
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));