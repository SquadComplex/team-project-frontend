'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

const authEvents = require('./auth/events.js');
const blogEvents = require('./blog/events.js');
const pageEvents = require('./page/events.js');

$(() => {
  authEvents.addHandlers();
  blogEvents.addBlogHandlers();
  pageEvents.addPageHandlers();
  $('#authButtonGroup').on('show.bs.collapse','.collapse',function () {
    $('#authButtonGroup').find('.collapse.in').collapse('hide');
  });
  $('#blog-tab').hide();
  $('#page-tab').hide();
  $('#page-tab').on('click', function () {
    $('#content').html('');
  });
  $('#home-tab').on('click', function () {
    $('#content').html('');
    $('#collapseCreatePage').collapse('hide');
    $('#page-content').html('');
  });
  $('#blog-tab').on('click', function () {
    $('#collapseCreatePage').collapse('hide');
    $('#page-content').html('');
  });
  $('#page-menu-button').hide();
});

// use require without a reference to ensure a file is bundled
require('./example');
