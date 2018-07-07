# Overview

Some Meteor Blaze templates to speed up layout development for Bootstrap 3 & Bootstrap 4.

# Installation

```sh
meteor add imajus:bootstrap-helpers
```

# Related packages

* [imajus:common-helpers](https://github.com/imajus/meteor-common-helpers)
* [imajus:html-helpers](https://github.com/imajus/meteor-html-helpers)
* [imajus:string-helpers](https://github.com/imajus/meteor-string-helpers)

# Contents

Package provide different sets of templates for Bootstrap 3 and Bootstrap 4.

# Bootstrap 3

Following helpers are provided for Bootstrap 3:

* `{{> breadcrumbs items=Array}}` – Outputs breadcrumbs component. Expects `items` array of objects with following structure:
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
* `{{> carousel items=Array}}` - Outputs carousel component.
* `{{> icon bs=String fa=String}}` - Outputs Bootstrap 3 or FontAwesome icon.
* `{{#collapse id=String active=Boolean title=String}}...{{/collapse}}` - Outputs collapse component.
* `{{#modal id=String title=String close=String submit=String options=Object}}...{{/modal}}` - Outputs modal component. Initially, modal is hidden and you suppose to call `$('#myModal').modal('show')` in order to display it. `options` are passed to Bootstrap modal initialization method as is, e.g. passing variable which contains object `{ show: true }` will make modal to appear right after rendering.
```html
{{> modal id='myModal' title='My modal' close='Dismiss' submit='OK' options=modalOptions}}
  <p>Custom modal content goes here.</p>
  <p>"modalOptions" must be an object or Template helper which returns an object</p>
{{/modal}}
```
* `{{#pageHeader}}...{{/pageHeader}}` - Outputs page header component.
* `{{#panel id=String type=String title=String badge=String}}...{{/panel}}` - Outputs panel component.

# Bootstrap 4

By default, the package works with Bootstrap 3 layout. If you need to switch to Bootstrap 4, put this somewhere in your client initialization logic (before it starts rendering any templates):
```js
import { BootstrapHelpers } from 'meteor/imajus:bootstrap-helpers';
BootstrapHelpers.forBootstrap4 = true;
```

Following helpers are provided for Bootstrap 4:

* `{{#modal id=String title=String modalClass=String closeBtnLabel=String clostBtnType=String submitBtnLabel=String submitBtnType=String noHeader=Boolean noHeaderClose=Boolean noFooter=Boolean options=Object}}...{{/modal}}` - Outputs modal component. Parameters `closeBtnLabel`, `closeBtnType`, `submitBtnLabel`, `submitBtnType`, `noHeader`, `noHeaderClose`, `noFooter` are all optional and allows to tune modal appearence for your needs. You can adjust modal dialog classed using `dialogClasses` parameter.
Initially, modal is hidden and you suppose to call `$('#myModal').modal('show')` in order to display it. `options` are passed to Bootstrap modal initialization method as is, e.g. passing variable which contains object `{ show: true }` will make modal to appear right after rendering.
```html
{{> modal id='myModal' title='My modal' closeBtnLabel='Dismiss' submitBtnLabel='OK' options=modalOptions}}
  <p>Custom modal content goes here.</p>
  <p>"modalOptions" must be an object or Template helper which returns an object</p>
{{/modal}}
```