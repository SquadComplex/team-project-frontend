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
  $('#status-box').text('Page Created.');
  $('#page-textarea').val('');
  $('#page-show-header').val('');
  $('#page-footer').val('');
};

const updateSuccess = (id) => {
  $('#status-box').text('Page Updated.');
  return id;
};

const destroySuccess = () => {
  $('#status-box').text('Page Deleted.');
  $('#page-show-content').html('')
};

module.exports = {
  createSuccess,
  indexSuccess,
  showSuccess,
  updateSuccess,
  destroySuccess,
};
