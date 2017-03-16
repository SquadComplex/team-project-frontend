'use strict';

const success = () => {
  $('#status-box').text('Action Successful');
};

const failure = () => {
  $('#status-box').text('Theres seems to have been an error');
};

const signUpSuccess = () => {
  let account = $('#account-name').val();
  $('#status-box').text('Account Created: ' + account);
  $('.signup-field').val('');
  $('#collapseSignUp').collapse('hide');
};

const signUpFail = () => {
  $('#status-box').text('Either the email is not valid or the passwords do not match.');
};

const signInSuccess = () => {
  let account = $('#account-name-signin').val();
  $('#status-box').text('Welcome, ' + account + ' !');
  $('#guestBlogMessage').hide();
  $('#signUpButton').addClass('hidden');
  $('#signInButton').addClass('hidden');
  $('#changePassButton').removeClass('hidden');
  $('#sign-out').removeClass('hidden');
  $('#collapseSignUp').collapse('hide');
  $('#collapseSignIn').collapse('hide');
  $('#blog-tab').show();
  $('#page-tab').show();
  $('.signin-field').val('');
  $('.signup-field').val('');
  $('#index-blog').hide();
  $('#welcome-message').html('Welcome to the content management system. You can have a blog with public and private entries, and you can make your own web pages.  Please enjoy your stay!');
  $('#content-all-blogs').html('');
};

const signInFail = () => {
  $('#status-box').text('The information is incorrect.');
};

const changePassSuccess = () => {
  $('#status-box').text('Password Changed Successfully');
  $('.change-pass-field').val('');
  $('#collapseChangePass').collapse('hide');
};

const changePassFail = () => {
  $('#status-box').text('Please fill out the fields.');
};

const signOutSuccess = () => {
  $('#status-box').text('Sign Out Successful.');
  $('#guestBlogMessage').show();
  $('#signUpButton').removeClass('hidden');
  $('#signInButton').removeClass('hidden');
  $('#changePassButton').addClass('hidden');
  $('#sign-out').addClass('hidden');
  $('#collapseChangePass').collapse('hide');
  $('#blog-tab').hide();
  $('#page-tab').hide();
  $('#index-blog').show();
  $('#content-all-blogs').html('');
  $('#welcome-message').html('');
  $('#home-footer').show();
};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePassSuccess,
  changePassFail,
  signOutSuccess,
};
