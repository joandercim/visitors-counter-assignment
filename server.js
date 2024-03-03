const express = require('express');
const { getCount } = require('./services/getCount');
const fs = require('fs').promises;

const app = express();

app.get('/', async (req, res, next) => {
  const { count } = await getCount();
  let currentCount = { count: count + 1 };
  fs.writeFile('./count.json', JSON.stringify(currentCount, null, 2));
  next();
});

app.get('/count', async (req, res) => {
  const { count } = await getCount();
  res.status(200).json({ success: true, currentCount: count });
});

app.use(express.static('public'));

app.listen(3000, () => console.log('Server running.'));
