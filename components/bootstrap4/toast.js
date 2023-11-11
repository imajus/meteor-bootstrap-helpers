import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import './toast.html';

Template.toast.onRendered(function() {
  this.$('.toast').toast({
    delay: 10000,
    ...this.data,
  }).toast('show');
});

export function showToast(data) {
  const parent = document.getElementById('toast-container');
  const view = Blaze.renderWithData(Template.toast, data, parent);
  // eslint-disable-next-line no-underscore-dangle
  const toast = view._domrange.$('.toast');
  toast.on('hidden.bs.toast', () => {
    Blaze.remove(view);
  });
  return toast;
}

export function showError(err, extra) {
  return showToast({
    message: err.message,
    brand: 'danger',
    ...extra,
  });
}
