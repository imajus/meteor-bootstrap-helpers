import { Tracker } from 'meteor/tracker';
import { Template } from 'meteor/templating';

import './carousel.html';

let index = 0;

Template.carousel.onCreated(function() {
	this.index = index++;
});

Template.carousel.onRendered(function() {
	this.autorun(() => {
		const data = Template.currentData();
		Tracker.afterFlush(() => {
			this.$('.carousel').carousel(data)
				.find('.carousel-indicators > li:first-child').addClass('active').end()
				.find('.carousel-inner > div:first-child').addClass('active').end();
		});
	});
});

Template.carousel.helpers({
	id() {
		const data = Template.currentData();
		if ( data && data.id ) {
			return data.id;
		} else {
			const template = Template.instance();
			return `carousel-${template.index}`;
		}
	}
});