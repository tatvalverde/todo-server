import bodyParser from 'body-parser';

export default function parseResponse(app){
  app.use(bodyParser.urlencoded({extended: false})); // suport encoded bodies
  app.use(bodyParser.json()); // suport json encoded bodies
}
