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
  $('#sign-up-message').text('Either the email is not valid or the passwords do not match.');
};

const signInSuccess = () => {
  let account = $('#account-name-signin').val();
  $('#status-box').text('Welcome, ' + account + ' !');
  $('#signUpButton').addClass('hidden');
  $('#signInButton').addClass('hidden');
  $('#changePassButton').removeClass('hidden');
  $('#sign-out').removeClass('hidden');
  $('#collapseSignUp').collapse('hide');
  $('#collapseSignIn').collapse('hide');
  $('#blog-tab').show();
  $('#page-tab').show();
  $('.signin-field').val('');
  $('#index-blog').hide();
  $('#content-all-blogs').html('Welcome to the content management system.  You can have a blog with public and private entries, and you can make your own web pages.  Please enjoy your stay!');
};

const signInFail = () => {
  $('#sign-in-message').text('The information is incorrect.');
};

const changePassSuccess = () => {
  $('#status-box').text('Password Changed Successfully');
  $('.change-pass-field').val('');
  $('#collapseChangePass').collapse('hide');
};

const changePassFail = () => {
  $('#change-pass-message').text('Please fill out the fields.');
};

const signOutSuccess = () => {
  $('#status-box').text('Sign Out Successful.  Please Sign Up or Sign In to play again.');
  $('#signUpButton').removeClass('hidden');
  $('#signInButton').removeClass('hidden');
  $('#changePassButton').addClass('hidden');
  $('#sign-out').addClass('hidden');
  $('#collapseChangePass').collapse('hide');
  $('#blog-tab').hide();
  $('#page-tab').hide();
  $('#index-blog').show();
  $('#content-all-blogs').html('');
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
