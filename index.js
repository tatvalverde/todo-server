const express = require('express');
const app = express();
const PORT = 5000;

// localhost:5000/
app.get('/', home);
app.post('/info', info)

function home (req, res){
  res.send('Hello, Tati!')
}
function info (req, res){
  res.send('INFO HERE')
}


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})