'use strict';

const blogHandlebars = require('../templates/blog-index.handlebars');

const onIndexSuccess = function(data){
  if (data) {
  console.log(data);
}
let blogsIndexHtml = blogHandlebars({ blogs: data.blogs});
$('#container').html(blogsIndexHtml);
};

module.exports = {
  onIndexSuccess
};
