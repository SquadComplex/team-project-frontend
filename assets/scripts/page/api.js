'use strict';

const config = require('../config');

const store = require('../store');

const indexPages = function () {
  if (store.user) {
    return $.ajax({
      url: config.apiOrigin + '/pages',
      method: 'GET',
      headers: {
        Authorization: `Token token=${store.user.token}`,
      },
    });
  } else {
    return $.ajax({
      url: config.apiOrigin + '/pages',
      method: 'GET',
    });
  }
};

const createPage = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/pages',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const updatePage = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/pages/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const destroyPage = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/pages/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

module.exports = {
  indexPages,
  createPage,
  updatePage,
  destroyPage,
};
