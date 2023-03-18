import express from 'express';
import home from './home';
import info  from './info';
import errorHandler from './errorHandler';
import logger from './logger';
import parseResponse from './parseResponse';

const app = express();
const PORT = 5000;
// localhost:5000/
logger(app);
parseResponse(app);

app.get('/',home); // GET localhost:5000/
app.post('/info', info);// POST localhost:5000/info
errorHandler(app);

app.listen(PORT, ()=> {
  console.log(`Example app listening of http://localhost:${PORT}`);
});
