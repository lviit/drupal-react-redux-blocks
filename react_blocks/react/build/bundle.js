webpackJsonp([1],{

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
	
	var _list = __webpack_require__(228);
	
	var _list2 = _interopRequireDefault(_list);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function mapStateToProps(state) {
	  return {
	    messages: state.messages
	  };
	}
	
	function mapDispachToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	}
	
	var Block2 = (0, _reactRedux.connect)(mapStateToProps, mapDispachToProps)(_list2.default);
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store2.default },
	  _react2.default.createElement(Block2, null)
	), document.getElementById('block-reactblock2'));

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
	      props.messages.map(function (message, i) {
	        return _react2.default.createElement(
	          'li',
	          { key: i },
	          message
	        );
	      })
	    )
	  );
	};
	
	exports.default = list;

/***/ })

});
//# sourceMappingURL=bundle.js.map