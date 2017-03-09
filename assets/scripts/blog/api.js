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

module.exports = {
  createBlog,
  indexBlogs,
};
