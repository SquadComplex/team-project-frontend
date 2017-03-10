'use strict';

const blogHandlebars = require('../templates/blog-index.handlebars');

const indexSuccess = function (data) {
  for (let i = 0; i < data.blogs.length; i++) {
    let date = data.blogs[i].createdAt;
    data.blogs[i].createdAt = date.slice(0, 10);
  }

  let blogsIndexHtml = blogHandlebars({
    blogs: data.blogs,
  });
  $('#content').html(blogsIndexHtml);
};

const createSuccess = () => {
  $('#status-box').text('Blog Created.');
};

const updateSuccess = () => {
  $('#status-box').text('Page Updated.');
};

const destroySuccess = () => {
  $('#status-box').text('Blog Deleted.');
};

module.exports = {
  createSuccess,
  indexSuccess,
  updateSuccess,
  destroySuccess,
};
