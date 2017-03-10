'use strict';

const pageTitleHandlebars = require('../templates/page-title-index.handlebars');

const indexSuccess = function (data) {
  let pagesIndexHtml = pageTitleHandlebars({
    pages: data.pages,
  });
  $('#page-content').html(pagesIndexHtml);
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
  destroySuccess,
};
