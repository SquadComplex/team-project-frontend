'use strict';

const pageHandlebars = require('../templates/page-index.handlebars');

const indexSuccess = function (data) {
  for (let i = 0; i < data.pages.length; i++) {
    let date = data.pages[i].createdAt;
    data.pages[i].createdAt = date.slice(0, 10);
  }

  let pagesIndexHtml = pageHandlebars({
    pages: data.pages,
  });
  $('#content').html(pagesIndexHtml);
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
