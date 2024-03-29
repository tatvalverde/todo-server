import express from 'express';
import errorHandler from './modules/core/errorHandler';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import cors from './modules/core/cors';
import routes from './modules/core/routes';

const app = express();
const PORT = 5000;// localhost:5000/

logger(app);
parseResponse(app);
cors(app);
routes(app);

// app.get('/',home); // GET localhost:5000/
// app.post('/info', info);// POST localhost:5000/info

errorHandler(app);

app.listen(PORT, ()=> {
  console.log(`Example app listening of http://localhost:${PORT}`);
});
