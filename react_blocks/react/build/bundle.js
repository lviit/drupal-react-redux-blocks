webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(36);
	
	var _store = __webpack_require__(182);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reactRedux = __webpack_require__(207);
	
	var _redux = __webpack_require__(183);
	
	var _actionCreators = __webpack_require__(226);
	
	var actionCreators = _interopRequireWildcard(_actionCreators);
	
	var _form = __webpack_require__(227);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _list = __webpack_require__(228);
	
	var _list2 = _interopRequireDefault(_list);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function mapStateToProps(state) {
	  return {
	    posts: state.posts,
	    comments: state.comments
	  };
	}
	
	function mapDispachToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	}
	
	var Block1 = (0, _reactRedux.connect)(mapStateToProps, mapDispachToProps)(_form2.default);
	var Block2 = (0, _reactRedux.connect)(mapStateToProps, mapDispachToProps)(_list2.default);
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store2.default },
	  _react2.default.createElement(Block1, null)
	), document.getElementById('block-reactblock1'));
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store2.default },
	  _react2.default.createElement(Block2, null)
	), document.getElementById('block-reactblock2'));

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(183);
	
	var _index = __webpack_require__(204);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// create an object for the default data
	var defaultState = {
	  posts: [],
	  comments: []
	};
	
	// redux dev tools
	
	
	// root reducer
	var enhancers = (0, _redux.compose)(window.devToolsExtension ? window.devToolsExtension() : function (f) {
	  return f;
	});
	
	var store = (0, _redux.createStore)(_index2.default, defaultState, enhancers);
	
	exports.default = store;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(183);
	
	var _posts = __webpack_require__(205);
	
	var _posts2 = _interopRequireDefault(_posts);
	
	var _comments = __webpack_require__(206);
	
	var _comments2 = _interopRequireDefault(_comments);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rootReducer = (0, _redux.combineReducers)({ posts: _posts2.default, comments: _comments2.default });
	
	exports.default = rootReducer;

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function posts() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var action = arguments[1];
	
	  //add another reducer
	  return state;
	}
	
	exports.default = posts;

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function comments() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var action = arguments[1];
	
	  console.log('dispatch to postcommetns reducer');;
	  console.log(action.comment);
	  switch (action.type) {
	    case 'ADD_COMMENT':
	      // return existing state with the new comment
	      return [].concat(_toConsumableArray(state), [action.comment]);
	    default:
	      return state;
	  }
	  return state;
	}
	
	exports.default = comments;

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addComment = addComment;
	// add comment
	function addComment(comment) {
	  return {
	    type: 'ADD_COMMENT',
	    comment: comment
	  };
	}

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var form = function (_React$Component) {
	  _inherits(form, _React$Component);
	
	  function form() {
	    _classCallCheck(this, form);
	
	    return _possibleConstructorReturn(this, (form.__proto__ || Object.getPrototypeOf(form)).apply(this, arguments));
	  }
	
	  _createClass(form, [{
	    key: "handleSubmit",
	    value: function handleSubmit(e) {
	      e.preventDefault();
	      this.props.addComment(this.refs.message.value);
	      this.refs.form.reset();
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        "form",
	        { ref: "form", onSubmit: function onSubmit(e) {
	            return _this2.handleSubmit(e);
	          } },
	        _react2.default.createElement("input", { type: "text", ref: "message", placeholder: "Send this message to another block" }),
	        _react2.default.createElement("input", { type: "submit", hidden: true })
	      );
	    }
	  }]);
	
	  return form;
	}(_react2.default.Component);
	
	exports.default = form;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var list = function list(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h1',
	      null,
	      'list in a block'
	    ),
	    _react2.default.createElement(
	      'ul',
	      null,
	      props.comments.map(function (comment, i) {
	        return _react2.default.createElement(
	          'li',
	          { key: i },
	          comment
	        );
	      })
	    )
	  );
	};
	
	exports.default = list;

/***/ })

});
//# sourceMappingURL=bundle.js.map