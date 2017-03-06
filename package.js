Package.describe({
  name: 'imajus:bootstrap-helpers',
  version: '0.0.6',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap Blaze helpers and snippets',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/imajus/meteor-bootstrap-helpers.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null//'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');
  api.use('ecmascript@0.6.3');
  api.use(['templating@1.3.0', 'imajus:helpers-core@0.0.1', 'tracker'], 'client');
  api.mainModule('bootstrap-helpers.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript@0.6.3');
  api.use('tinytest@1.0.12');
  api.use('imajus:bootstrap-helpers', 'client');
  api.mainModule('bootstrap-helpers-tests.js', 'client');
});
