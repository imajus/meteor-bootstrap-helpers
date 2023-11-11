import { Template } from 'meteor/templating';
import './bootstrap4.html';

Template.exampleOfBootstrap4.helpers({
  breadcrumbItems() {
    return [
      { href: '/', label: 'Home' },
      { label: 'Category' },
      { label: 'Page' },
    ];
  },
  carouselItems() {
    return [
      { id: '1', src: 'https://dummyimage.com/1200x400?text=Slide1' },
      { id: '2', src: 'https://dummyimage.com/1200x400?text=Slide2' },
      { id: '3', src: 'https://dummyimage.com/1200x400?text=Slide3' },
    ];
  },
});
