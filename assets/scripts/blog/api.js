'use strict'

const config = require('../config');

const store = require('../store');

const indexBlogs = function () {
  return $.ajax({
    url: config.apiOrigin + '/blogs',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

module.exports = {
  indexBlogs
};
