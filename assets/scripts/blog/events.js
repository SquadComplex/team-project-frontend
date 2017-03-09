'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api.js');
const ui = require('./ui.js');

//const getFormFields = require('../../../lib/get-form-fields.js');

const onIndexBlogs = function (event) {
  event.preventDefault();
  api.indexBlogs()
    .then(ui.indexSuccess)
    .catch(ui.onError);
};

const onCreateBlogs = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.createBlog(data)
  .then(ui.createSuccess)
  .then(api.indexBlogs)
  .then(ui.indexSuccess)
  .catch(ui.failure);
};

const addBlogHandlers = function () {
  $('#index-blog').on('click', onIndexBlogs);
  $('#create-blog').on('submit', onCreateBlogs);
};

module.exports = {
  onCreateBlogs,
  onIndexBlogs,
  addBlogHandlers,
};
