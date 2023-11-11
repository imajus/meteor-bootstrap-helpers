import { Template } from 'meteor/templating';
import './breadcrumbs.html';

Template.breadcrumbs4.helpers({
  liAttr() {
    const { liAttr: { atts, class: className = '' } = {} } = Template.currentData();
    return {
      class: `breadcrumb-item ${className}`.trim(),
      ...atts,
    };
  },
});