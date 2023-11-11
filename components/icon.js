import { Template } from 'meteor/templating';
import './icon.html';

Template.i.helpers({
  faAtts() {
    const { fa, fixed, size, spin, pulse, border, pull, rotate, flip, extra } = Template.currentData();
    return {
      class: [
        `fa fa-${fa}`,
        fixed && 'fw',
        size && `fa-${size}`,
        spin && 'fa-spin',
        pulse && 'fa-pulse',
        border && 'fa-border',
        pull && `fa-pull-${pull}`,
        rotate && `fa-rotate-${rotate}`,
        flip && `fa-flip-${flip}`,
        extra,
      ].filter(Boolean).join(' '),
    };
  },
});