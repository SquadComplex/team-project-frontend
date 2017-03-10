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
  $('#page-content').html(pageShowHtml);
};

const createSuccess = () => {
  $('#status-box').text('Page Created.');
};

const destroySuccess = () => {
  $('#status-box').text('Page Deleted.');
};

module.exports = {
  createSuccess,
  indexSuccess,
  showSuccess,
  destroySuccess,
};
