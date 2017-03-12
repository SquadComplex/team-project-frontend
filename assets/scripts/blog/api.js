'use strict';

const config = require('../config');

const store = require('../store');

const indexBlogs = function () {
  if (store.user) {
    return $.ajax({
      url: config.apiOrigin + '/blogs',
      method: 'GET',
      headers: {
        Authorization: `Token token=${store.user.token}`,
      },
    });
  } else {
    return $.ajax({
      url: config.apiOrigin + '/blogs',
      method: 'GET',
    });
  }
};

const indexPublicBlogs = function () {
    return $.ajax({
      url: config.apiOrigin + '/blogs',
      method: 'GET',
    });
};

const createBlog = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/blogs',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const updateBlog = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/blogs/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const destroyBlog = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/blogs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

module.exports = {
  indexBlogs,
  indexPublicBlogs,
  createBlog,
  updateBlog,
  destroyBlog,
};
