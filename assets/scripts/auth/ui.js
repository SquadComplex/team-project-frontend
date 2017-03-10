'use strict';

const success = () => {
  $('#status-box').text('Action Successful');
};

const failure = () => {
  $('#status-box').text('Theres seems to have been an error');
};

const signUpSuccess = () => {
  $('#status-box').text('Account Created');
};

const signUpFail = () => {
  $('#sign-up-message').text('Either the email is not valid or the passwords do not match.');
};

// On sign in, un-hide game board elements
const signInSuccess = () => {
  $('#status-box').text('Sign In Successful');
  $('#signUpButton').addClass('hidden');
  $('#signInButton').addClass('hidden');
  $('#changePassButton').removeClass('hidden');
  $('#sign-out').removeClass('hidden');
  $('#collapseSignUp').collapse('hide');
  $('#collapseSignIn').collapse('hide');
  $('#blog-tab').show();
  $('#page-tab').show();
};

const signInFail = () => {
  $('#sign-in-message').text('The information is incorrect.');
};

const changePassSuccess = () => {
  $('#status-box').text('Password Changed Successfully');
};

const changePassFail = () => {
  $('#change-pass-message').text('Please fill out the fields.');
};

// On sign out, hide game board elements
const signOutSuccess = () => {
  $('#status-box').text('Sign Out Successful.  Please Sign Up or Sign In to play again.');
  $('#signUpButton').removeClass('hidden');
  $('#signInButton').removeClass('hidden');
  $('#changePassButton').addClass('hidden');
  $('#sign-out').addClass('hidden');
  $('#collapseChangePass').collapse('hide');
  $('#blog-tab').hide();
  $('#page-tab').hide();
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
