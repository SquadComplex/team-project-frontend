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

const onIndexAllBlogs = function (event) {
  event.preventDefault();
  api.indexBlogs()
    .then(ui.indexAllSuccess)
    .catch(ui.onError);
};

const onIndexAllPublicBlogs = function (event) {
  event.preventDefault();
  api.indexPublicBlogs()
    .then(ui.indexAllPublicSuccess)
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

const onUpdateBlog = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id = event.target.getAttribute('data-id');
  api.updateBlog(id, data)
  .then(ui.updateSuccess)
  .then(api.indexBlogs)
  .then(ui.indexSuccess)
  .catch(ui.failure);
};

const onDestroyBlog = function (event) {
  event.preventDefault();
  let id = event.target.getAttribute('data-id');
  api.destroyBlog(id)
  .then(ui.destroySuccess)
  .then(api.indexBlogs)
  .then(ui.indexSuccess)
  .catch(ui.failure);
};

const blogDropdownToggle = function (event) {
  $(event.target).toggleClass('glyphicon-menu-down');
  $(event.target).toggleClass('glyphicon-menu-up');
};

const addBlogHandlers = function () {
  $('#index-blog').on('click', onIndexAllBlogs);
  $('#index-public-blog').on('click', onIndexAllPublicBlogs);
  $('#index-my-blog').on('click', onIndexBlogs);
  $('#create-blog').on('submit', onCreateBlogs);
  $('#content').on('submit', '#update-blog', onUpdateBlog);
  $('#content').on('click', '#delete-blog', onDestroyBlog);
  $('#content').on('click', '#dropdown-blog', blogDropdownToggle);
};

module.exports = {
  onCreateBlogs,
  onIndexBlogs,
  onUpdateBlog,
  addBlogHandlers,
};
