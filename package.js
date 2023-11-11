Package.describe({
  name: 'imajus:bootstrap-helpers',
  version: '0.0.8',
  summary: 'Bootstrap 3/4 Blaze snippets',
  git: 'https://github.com/imajus/meteor-bootstrap-helpers.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.8.0');
  api.use('ecmascript');
  api.use([
    'templating',
    'imajus:helpers-core',
    'imajus:common-helpers',
    'tracker',
    'blaze'
  ], 'client');
  api.addFiles([
    'example/bootstrap4.js',
  ], 'client');
  api.mainModule('index.js', 'client');
});
