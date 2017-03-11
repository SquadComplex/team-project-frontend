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

const showAfterUpdate = function () {
  let id = $('#update-page').data('id');
  api.showPage(id)
  .then(ui.showSuccess)
  .catch(ui.failure);
};

const onUpdatePage = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id = event.target.getAttribute('data-id');
  api.updatePage(id, data)
  .then(ui.updateSuccess)
  .then(showAfterUpdate)
  .catch(ui.failure);
};

const onDestroyPage = function (event) {
  event.preventDefault();
  let id = event.target.getAttribute('data-id');
  api.destroyPage(id)
  .then(ui.destroySuccess)
  .catch(ui.failure);
};

const pageDropdownToggle = function (event) {
  $(event.target).toggleClass('glyphicon-menu-down');
  $(event.target).toggleClass('glyphicon-menu-up');
};

const addPageHandlers = function () {
  $('#index-page').on('click', onIndexPages);
  $('#create-page').on('submit', onCreatePages);
  $('#page-show-content').on('submit', '#update-page', onUpdatePage);
  $('#page-content').on('click', '#page-header', onShowPage);
  $('#page-content').on('click', '#page-header', function () {
    $('#page-menu').hide();
    $('#page-menu-button').show();
    $('#page-content').html('');
    $('#collapseCreatePage').collapse('hide');
  });
  $('#page-show-content').on('click', '#delete-page', onDestroyPage);
  $('#page-menu-button').on('click', function () {
    $('#page-show-content').html('');
    $('#page-menu-button').hide();
    $('#page-menu').show();
  });
  $('#page-show-content').on('click', '#dropdown-page', pageDropdownToggle);
};

module.exports = {
  addPageHandlers,
};
