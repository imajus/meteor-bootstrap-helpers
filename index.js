import { Template } from 'meteor/templating';

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
import './components/bootstrap4/breadcrumbs';
import './components/bootstrap4/card';
import './components/bootstrap4/modal';
import './components/bootstrap4/carousel';
import './components/bootstrap4/collapse';
import './components/bootstrap4/page-header';
export { showToast, showError } from './components/bootstrap4/toast';

const commonHelpers = ['breadcrumbs', 'modal', 'carousel', 'collapse', 'pageHeader'];

commonHelpers.forEach(helper => 
  Template.registerHelper(helper, () => {
    const suffix = BootstrapHelpers.forBootstrap4 ? '4' : '3';
    return Template[`${helper}${suffix}`];
  })
);

export const BootstrapHelpers = {
  forBootstrap4: false,
};
