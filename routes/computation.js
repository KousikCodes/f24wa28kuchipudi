const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Check for query parameter 'x'; use a random number if not provided
  let x = req.query.x ? parseFloat(req.query.x) : Math.random();

  // Apply Math.atan() since the last digit is '8'
  let fn = "Math.atan";
  let y = Math.atan(x);

  // Format the response
  res.send(`${fn} applied to ${x} is ${y}`);
});

module.exports = router;
