const express = require('express');
const app = express();
const PORT = 5000;

// localhost:5000/

function home (req, res){
  res.send('Hello, Tati!')
}

app.get('/', home);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})