const express = require('express');
const app = express();

app.use(express.static('./'));
app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

const router = express.Router();

const port = process.env.PORT || 3000;

router.get('/', (req, res) => {
  res.json({ message: 'API Initialized!' });
});

router.route('/bingo')
  .get((req, res) => {
    console.log('get', req, res);
  })
  .post((req, res) => {
    console.log('le post', req, res);
  });

app.listen(port, () => {
  console.log('app listening on', port);
});
