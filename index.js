const express = require('express');
const app = express();
const PORT = 5001;
// localhost:5000/

app.get('/', home);
app.post('/info', info)
function home(reg, res){
  res.send('Hello, Tatiana!')
}
function info(reg, res){
  const a = 123;
  const b = Math.random();
  const c = a + b;
  res.send('Info here! ' + c);
}
app.listen(PORT, ()=> {
console.log(`Example app listening of http://localhost:${PORT}`)
})