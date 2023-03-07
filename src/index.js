import express from 'express';
const app = express();
const PORT = 5001;
// localhost:5000/

app.get('/',home); // GET localhost:5000/
app.post('/info', info);// POST localhost:5000/info
app.use(home);

function apiNotFound(req, res) {
  res.send('API not found');
}

function home(reg,res){
  res.send('Hello, Tanusha!');
}

function info(reg,res){
  const a = 123;
  const b = Math.random();
  const c = a + b;
  res.send('Info here! ' + c);
}

app.listen(PORT, ()=> {
  console.log(`Example app listening of http://localhost:${PORT}`);
});