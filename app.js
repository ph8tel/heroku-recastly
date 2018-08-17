const express = require('express');
const PORT = process.env.PORT || 4000;
const app = new express()
  .use(express.static('public'))
  .set('view engine', 'ejs')
  .listen(PORT, () => console.log(`Running on ${PORT}`));
// comment