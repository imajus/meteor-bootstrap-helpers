import { Tempalte } from 'meteor/templating';

import './modal.html';

Template.modal.onRendered(function() {
	// Initially hidden if not set otherwise
	const options = _.extend({ show: false }, this.data.options);
	this.$('.modal').modal(options);
});

Template.modal.onDestroyed(function() {
  this.$('.modal').modal('destroy');
});