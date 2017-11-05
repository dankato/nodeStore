const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // res.send('Hey! It works!');
  // const person = {name: 'json', age: 23, cool: true}
  // res.json(person)
  // url -> http://localhost:7777/?name=kate&age=100
  // res.send(req.query.name)
  // res.json(req.query)
  res.render('hello')
});

router.get('/reverse/:name', (req,res) => {
  const reverse = [...req.params.name].reverse().join('')
  res.send(reverse)
})

module.exports = router;
