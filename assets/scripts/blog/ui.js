'use strict';

const blogHandlebars = require('../templates/blog-index.handlebars');
const allBlogHandlebars = require('../templates/blog-all-index.handlebars');

const indexSuccess = function (data) {
  data.blogs = data.blogs.reverse();
  for (let i = 0; i < data.blogs.length; i++) {
    let date = data.blogs[i].createdAt;
    data.blogs[i].createdAt = date.slice(0, 10);
  }

  let blogsIndexHtml = blogHandlebars({
    blogs: data.blogs,
  });
  $('#content').html(blogsIndexHtml);
};

const indexAllSuccess = function (data) {
  data.blogs = data.blogs.reverse();
  for (let i = 0; i < data.blogs.length; i++) {
    let date = data.blogs[i].createdAt;
    data.blogs[i].createdAt = date.slice(0, 10);
  }

  let blogsIndexHtml = allBlogHandlebars({
    blogs: data.blogs,
  });
  $('#content-all-blogs').html(blogsIndexHtml);
};

const indexAllPublicSuccess = function (data) {
  data.blogs = data.blogs.reverse();
  for (let i = 0; i < data.blogs.length; i++) {
    let date = data.blogs[i].createdAt;
    data.blogs[i].createdAt = date.slice(0, 10);
  }

  let blogsIndexHtml = allBlogHandlebars({
    blogs: data.blogs,
  });
  $('#content').html(blogsIndexHtml);
};

const createSuccess = () => {
  $('#blog-message').text('Blog Created.');
  $('#blog-textarea').val('');
  $('#blog-show-title').val('');
  $('#blog-author').val('');
};

const updateSuccess = () => {
  $('#blog-message').text('Blog Updated.');
};

const destroySuccess = () => {
  $('#blog-message').text('Blog Deleted.');
};

module.exports = {
  createSuccess,
  indexSuccess,
  indexAllSuccess,
  indexAllPublicSuccess,
  updateSuccess,
  destroySuccess,
};
