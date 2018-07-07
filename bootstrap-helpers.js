import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

// Common
import './components/icon';
// Bootstrap 3
import './components/bootstrap3/breadcrumbs';
import './components/bootstrap3/carousel';
import './components/bootstrap3/collapse';
import './components/bootstrap3/modal';
import './components/bootstrap3/page-header';
import './components/bootstrap3/panel';
// Bootstrap 4
import './components/bootstrap4/modal';

const helpers = [
  'breadcrumbs',
  'carousel',
  'collapse',
  'modal'
];

helpers.forEach(helper => 
  Template.registerHelper(helper, () => {
    const suffix = BootstrapHelpers.forBootstrap4 ? '4' : '3';
    return Template[`${helper}${suffix}`];
  })
);

export const BootstrapHelpers = {
  forBootstrap4: false
};