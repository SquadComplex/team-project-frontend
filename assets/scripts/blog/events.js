'use strict';

const api = require('./api.js');
const ui = require('./ui.js');



//const getFormFields = require('../../../lib/get-form-fields.js');

const onIndexBlogs = function (event) {
  event.preventDefault();
  api.indexBlogs()
  .then(ui.onIndexSuccess)
  .catch(ui.onError);
  };

const addBlogHandlers = function(){
  $("#index-blog").on('click', onIndexBlogs);

};

module.exports = {
  onIndexBlogs,
  addBlogHandlers

};
