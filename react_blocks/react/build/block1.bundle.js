webpackJsonp([0],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),u=r(o),a=n(31),i=n(169),f=r(i),l=n(194),c=n(213),s=r(c);(0,a.render)(u.default.createElement(l.Provider,{store:f.default},u.default.createElement(s.default,null)),document.getElementById("block-reactblock1"))},213:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),l=r(f),c=n(194),s=n(214),p=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addToList(this.refs.message.value),this.refs.form.reset()}},{key:"render",value:function(){var e=this;return l.default.createElement("form",{ref:"form",onSubmit:function(t){return e.handleSubmit(t)}},l.default.createElement("input",{type:"text",ref:"message",placeholder:"Send this message to another block"}),l.default.createElement("input",{type:"submit",hidden:!0}))}}]),t}(l.default.Component);t.default=(0,c.connect)(s.mapStateToProps,s.mapDispachToProps)(p)}});
//# sourceMappingURL=block1.bundle.js.map