const express = require('express');
const app = express();

app.use(express.static('./'));
app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/bingo', (req, res) => {
  const numbersCalled = req.numbersCalled
  const boardNumbers = req.boardNumbers
  const response = {
    numbers: numbersCalled,
    bN:  boardNumbers
  }
  res.json(response)
  console.log('get balllll', req, res);
})

// const router = express.Router();

const port = process.env.PORT || 3000;

// router.get('/', (req, res) => {
//   res.json({ message: 'API Initialized!' });
// });

// router.route('/bingo')
//   .get((req, res) => {
//     const numbersCalled = req.numbersCalled
//     const boardNumbers = req.boardNumbers
//     const response = {
//       numbers: numbersCalled,
//       bN:  boardNumbers
//     }
//     res.json(response)
//     console.log('get ballll', req, res);
//   })
//   .post((req, res) => {
//     console.log('le post', req, res);
//   });

app.listen(port, () => {
  console.log('app listening on', port);
});
