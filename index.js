const express = require('express');
const app = express();
const PORT = 5000;
// localhost:5000/

app.get('/', home);
function home(reg, res){
  res.send('Hello, Tatiana!')
}
app.listen(PORT, ()=> {
console.log(`Example app listening of http://localhost:${PORT}`)
})