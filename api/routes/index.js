const bodyParser = require('body-parser');
const video = require('./video.js');

module.exports = (app) => {
  app.use(
    bodyParser.json(),
    video
  );
};