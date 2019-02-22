import express from 'express';
import cors from 'cors';
import path from 'path';
import superagent from 'superagent';

const app = express();

// enable Access-Control-Allow-Origin across all headers
app.use(cors());

// serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// an api endpoint that returns a list of dog breeds
app.get('/api/breeds', (request, response) => {
  superagent
    .get('https://dog.ceo/api/breeds/list')
    .end((err, res) => {
      if (err) {
        throw err;
      }
        
      response.json(res);
    });
});

// an api endpoint that returns a random dog
app.get('/api/dog', (request, response) => {
  superagent
    .get('https://dog.ceo/api/breeds/image/random')
    .end((err, res) => {
      if (err) {
        throw err;
      }
        
      response.json(res);
   });
});

// an api endpoint that returns a random dog for a specific breed
app.get('/api/dog/:breed', (request, response) => {
  superagent
    .get(`https://dog.ceo/api/breed/${request.params.breed}/images/random`)
    .end((err, res) => {
       if (err) {
         throw err;
       }
        
       response.json(res);
    });
});

// handles any requests that don't match the ones above
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);

