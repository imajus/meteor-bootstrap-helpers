import { Template } from 'meteor/templating';

import './carousel.html';

let index = 0;

Template.carousel.onCreated(function() {
	if ( this.data.id ) {
		this.id = this.data.id;
	} else {
		index++;
		this.id = `carousel-${index}`;
	}
});

Template.carousel.onRendered(function() {
	Tracker.afterFlush(() => {
		this.$('.carousel').carousel(this.data);
	});
});

Template.carousel.helpers({
	id() { return Template.instance().id; }
});