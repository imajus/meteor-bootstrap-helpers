Package.describe({
  name: 'imajus:bootstrap-helpers',
  version: '0.0.9',
  summary: 'Bootstrap 3/4 Blaze snippets',
  git: 'https://github.com/imajus/meteor-bootstrap-helpers.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.8.0');
  api.use('ecmascript');
  api.use([
    'templating@1.4.2',
    'imajus:helpers-core@0.0.2',
    'imajus:common-helpers@0.0.3',
    'tracker',
    'blaze@2.7.1'
  ], 'client');
  api.addFiles([
    'example/bootstrap4.js',
  ], 'client');
  api.mainModule('index.js', 'client');
});
