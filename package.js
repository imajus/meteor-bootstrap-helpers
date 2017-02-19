Package.describe({
  name: 'majus:bootstrap-helpers',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap Blaze helpers and snippets',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');
  api.use('ecmascript');
  api.use(['templating'], 'client');
  api.mainModule('bootstrap-helpers.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('majus:bootstrap-helpers', 'client');
  api.mainModule('bootstrap-helpers-tests.js', 'client');
});
