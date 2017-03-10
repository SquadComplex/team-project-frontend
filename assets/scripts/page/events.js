'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api.js');
const ui = require('./ui.js');

//const getFormFields = require('../../../lib/get-form-fields.js');

const onIndexPages = function (event) {
  event.preventDefault();
  api.indexPages()
    .then(ui.indexSuccess)
    .catch(ui.onError);
};

const onShowPage = function (event) {
  event.preventDefault();
  let id = event.target.getAttribute('data-id');
  api.showPage(id)
    .then(ui.showSuccess)
    .catch(ui.onError);
};

const onCreatePages = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.createPage(data)
  .then(ui.createSuccess)
  .then(api.indexPages)
  .then(ui.indexSuccess)
  .catch(ui.failure);
};

const onUpdatePage = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id = event.target.getAttribute('data-id');
  api.updatePage(id, data)
  .then(ui.createSuccess)
  .then(api.indexPages)
  .then(ui.indexSuccess)
  .catch(ui.failure);
};

const onDestroyPage = function (event) {
  event.preventDefault();
  let id = event.target.getAttribute('data-id');
  api.destroyPage(id)
  .then(ui.destroySuccess)
  .then(api.indexPages)
  .then(ui.indexSuccess)
  .catch(ui.failure);
};

const addPageHandlers = function () {
  $('#index-page').on('click', onIndexPages);
  $('#create-page').on('submit', onCreatePages);
  $('#content').on('submit', '#update-page', onUpdatePage);
  $('#page-content').on('click', '#page-header', onShowPage);
  $('#content').on('click', '#delete-page', onDestroyPage);
};

module.exports = {
  addPageHandlers,
};
