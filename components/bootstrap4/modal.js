import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';

import './modal.html';

Template.modal4.onRendered(function() {
	// Initially hidden if not set otherwise
	const options = _.extend({ show: false }, this.data.options);
	this.$('.modal').modal(options);
});