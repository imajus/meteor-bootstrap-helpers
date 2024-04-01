# Overview

Some Meteor Blaze templates to speed up layout development for Bootstrap3 & Bootstrap4 UI frameworks.

# Installation

```sh
meteor add imajus:bootstrap-helpers
```

# Related packages

* [imajus:common-helpers](https://github.com/imajus/meteor-common-helpers)
* [imajus:html-helpers](https://github.com/imajus/meteor-html-helpers)
* [imajus:string-helpers](https://github.com/imajus/meteor-string-helpers)

# Contents

Package provide different sets of templates for Bootstrap3 and Bootstrap4 UI frameworks.

# Bootstrap 3

Following helpers are provided for Bootstrap 3:

* `{{>breadcrumbs items=Array}}` – Renders breadcrumbs component. Expects `items` array of objects with following structure:
  ```js
  {
    // Item text
    label: String,
    // (optional) <li> attributes
    liAtts: Object,
    // (optional) <a> src attribute value, if not provided a label will be displayed as static text
    href: String,
    // (optional) Additional anchor attributes, skipped if href is not provided
    anchorAtts: Object,
  }
  ```
* `{{#carousel items=Array}}...{{/carousel}}` - Renders carousel component.
* `{{>i bs=String fa=String}}` - Renders Bootstrap3 or FontAwesome4 icon. Supports various appeareance modifiers (FontAwesome4 only):
  ```handlebars
  {{>i fa='cog' spin=true size="4x" border=true pull="right"}}
  ```
* `{{#collapse id=String active=Boolean title=String}}...{{/collapse}}` - Renders collapse component.
  ```handlebars
  {{#collapse id="myContent" title='Click to see'}}
    Some initially hidden content goes here.
  {{/collapse}}
  ```
* `{{#modal id=String title=String close=String submit=String options=Object}}...{{/modal}}` - Renders modal component. Initially, modal is hidden and you're supposed to call `$('#myModal').modal('show')` in order to display it.
  ```handlebars
  {{#modal id="myModal" title="My modal" close="Dismiss" submit="OK" options=modalOptions}}
    <p>Custom modal content goes here.</p>
    <p>"modalOptions" must be an object or Template helper which returns an object</p>
  {{/modal}}
  ```
  Note: The `options` object is passed to Bootstrap modal initialization function as is, e.g. passing variable which contains object `{ show: true }` will make the modal to appear right after rendering.
* `{{#pageHeader heading=String}}...{{/pageHeader}}` - Renders page header component.
* `{{#panel id=String type=String title=String badge=String}}...{{/panel}}` - Renders panel component.

# Bootstrap 4

By default, the package works with Bootstrap3 layout. If you need to switch to Bootstrap4, put this somewhere in your client initialization logic (before it starts rendering any templates):
```js
import { BootstrapHelpers } from 'meteor/imajus:bootstrap-helpers';
BootstrapHelpers.forBootstrap4 = true;
```

Following components are provided for Bootstrap4:

* `{{>breadcrumbs ...}}` - Same as for Bootstrap3.
* `{{#carousel ...}}...{{/carousel}}` - Same as for Bootstrap3.
* `{{>i fa=String}}` - Renders FontAwesome4 icon. Supports same icon modifiers as for Bootstrap3.
* `{{#collapse ...}}...{{/collapse}}` - Same as for Bootstrap3.
* `{{#modal id=String title=String modalClass=String closeBtnLabel=String clostBtnType=String submitBtnLabel=String submitBtnType=String noHeader=Boolean noHeaderClose=Boolean noFooter=Boolean options=Object}}...{{/modal}}` - Renders modal component. Parameters `closeBtnLabel`, `closeBtnType`, `submitBtnLabel`, `submitBtnType`, `noHeader`, `noHeaderClose`, `noFooter` are all optional and allows to tune modal appearence for your needs. You can adjust modal dialog classes using `dialogClasses` parameter.
Initially, modal is hidden and you suppose to call `$('#myModal').modal('show')` in order to display it.
  ```handlebars
  {{#modal id='myModal' title='My modal' closeBtnLabel='Dismiss' submitBtnLabel='OK' options=modalOptions}}
    <p>Custom modal content goes here.</p>
    <p>"modalOptions" must be an object or Template helper which returns an object</p>
  {{/modal}}
  ```
  Note: The `options` object is passed to Bootstrap modal initialization function as is, e.g. passing variable which contains object `{ show: true }` will make the modal to appear right after rendering.
* `{{#pageHeader heading=String}}...{{/pageHeader}}` - Same as for Bootstrap3.
* `{{>card title=String loading=Boolean}}...{{/card}}` - Renders card component, which is a direct successor of the Bootstrap3 panel component. Additionally, allows to render a loading animation when the data is not yet ready for displaying.
* `{{>toast message=String heading=String brand=String}}...{{/toast}}` - Renders Toast component. The most useful when used via JavaScript API:
  ```handlebars
  {{!-- Put this in your layout template --}}
  <div class="position-relative mt-3">
    {{>toastContainer}}
  </div>
  ```
  ```js
  import { showToast, showError } from 'meteor/imajus:bootstrap-helpers';
  showToast({
    heading: 'Greeting',
    message: 'Hello, world!',
    brand: 'success',
  });
  showError(new Error('Something went wrong!'));
  ```
* `{{>navbar title=String root=String items=Array theme=('light'|'dark') expand=('sm'|'md'|'lg'|'xl') align=(null|'center'|'right') active=(Boolean|Function)}}` — Renders [Navbar](https://getbootstrap.com/docs/4.6/components/navbar/) component. The `items` value needs to be built with JavaScript:
  ```js
  import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
  Template.Layout.helpers({
    navbarItems: () => [
      {
        label: 'Events',
        link: FlowRouter.path('Events.browse'),
        active: () => ['Events.browse', 'Events.create', 'Events.edit'].includes(FlowRouter.getRouteName()),
      },
      {
        label: 'Registrations',
        link: FlowRouter.path('Registrations.browse'),
        active: () => FlowRouter.getRouteName() === 'Registrations.browse',
      },
    ],
  });
  ```