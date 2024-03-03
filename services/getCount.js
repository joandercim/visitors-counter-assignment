const fs = require('fs').promises;

exports.getCount = async () => {
  const data = await fs.readFile('./count.json', 'utf-8');
  return JSON.parse(data);
};
