'use strict';

const pageTitleHandlebars = require('../templates/page-title-index.handlebars');
const pageShowHandlebars = require('../templates/page-show.handlebars');

const indexSuccess = function (data) {
  let pagesIndexHtml = pageTitleHandlebars({
    pages: data.pages,
  });
  $('#page-content').html(pagesIndexHtml);
};

const showSuccess = function (data) {
  let pageShowHtml = pageShowHandlebars({
    page: data.page,
  });
  $('#page-show-content').html(pageShowHtml);
};

const createSuccess = () => {
  $('#page-message').text('Page Created.');
  $('#page-textarea').val('');
  $('#page-show-header').val('');
  $('#page-footer').val('');
  $('#collapseCreatePage').collapse('hide');
};

const updateSuccess = (id) => {
  return id;
};

const destroySuccess = () => {
  $('#page-show-content').html('');
};

module.exports = {
  createSuccess,
  indexSuccess,
  showSuccess,
  updateSuccess,
  destroySuccess,
};
