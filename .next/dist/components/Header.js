'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('next/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _ActiveLink = require('./ActiveLink');

var _ActiveLink2 = _interopRequireDefault(_ActiveLink);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/philnguyen/Desktop/Projects/next/chez_portfolio/components/Header.js';


var headerBar = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  height: 50,
  alignItems: 'center',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0, 0.18)',
  borderTop: '5px solid black'
};

var navBar = {
  display: 'flex',
  height: 50
};

var mainTitle = {
  textTransform: 'uppercase',
  fontSize: 25,
  paddingLeft: 10,
  fontWeight: '800',
  cursor: 'pointer'
};

var Header = function Header(_ref) {
  var href = _ref.href;

  return _react2.default.createElement('header', { style: headerBar, 'data-jsx': 1876639314,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('div', { style: mainTitle, 'data-jsx': 1876639314,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, 'IAW Studios/ illa Art Workz')), _react2.default.createElement('nav', { style: navBar, 'data-jsx': 1876639314,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(_ActiveLink2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, 'Portfolio'), _react2.default.createElement(_ActiveLink2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, 'About'), _react2.default.createElement(_ActiveLink2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, 'Contact')), _react2.default.createElement(_style2.default, {
    styleId: 1876639314,
    css: 'nav>li{list-style:none;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDUyxBQUc2QixnQkFDSixZQUNDLDBFQUNNLDZGQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhpbG5ndXllbi9EZXNrdG9wL1Byb2plY3RzL25leHQvY2hlel9wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSAnLi9BY3RpdmVMaW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBoZWFkZXJCYXIgPSB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgaGVpZ2h0OiA1MCxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgYm94U2hhZG93OiAnMCAycHggNHB4IHJnYmEoMCwwLDAsIDAuMTgpJyxcbiAgYm9yZGVyVG9wOiAnNXB4IHNvbGlkIGJsYWNrJ1xufTtcblxuY29uc3QgbmF2QmFyID0ge1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGhlaWdodDogNTBcbn07XG5cbmNvbnN0IG1haW5UaXRsZSA9IHtcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gIGZvbnRTaXplOiAyNSxcbiAgcGFkZGluZ0xlZnQ6IDEwLFxuICBmb250V2VpZ2h0OiAnODAwJyxcbiAgY3Vyc29yOiAncG9pbnRlcidcbn07XG5cbmNvbnN0IEhlYWRlciA9ICh7IGhyZWYgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgc3R5bGU9e2hlYWRlckJhcn0+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8ZGl2IHN0eWxlPXttYWluVGl0bGV9PklBVyBTdHVkaW9zLyBpbGxhIEFydCBXb3JrejwvZGl2PlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8bmF2IHN0eWxlPXtuYXZCYXJ9PlxuICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL1wiPlBvcnRmb2xpbzwvQWN0aXZlTGluaz5cbiAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9BY3RpdmVMaW5rPlxuICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0PC9BY3RpdmVMaW5rPlxuICAgICAgPC9uYXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBuYXYgPiBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=components/Header.js */'
  }));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJBY3RpdmVMaW5rIiwiUm91dGVyIiwiaGVhZGVyQmFyIiwiZGlzcGxheSIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiYm9yZGVyVG9wIiwibmF2QmFyIiwibWFpblRpdGxlIiwidGV4dFRyYW5zZm9ybSIsImZvbnRTaXplIiwicGFkZGluZ0xlZnQiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiSGVhZGVyIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU07V0FBWSxBQUNQLEFBQ1Q7U0FGZ0IsQUFFVCxBQUNQO2tCQUhnQixBQUdBLEFBQ2hCO1VBSmdCLEFBSVIsQUFDUjtjQUxnQixBQUtKLEFBQ1o7bUJBTmdCLEFBTUMsQUFDakI7YUFQZ0IsQUFPTCxBQUNYO2FBUkYsQUFBa0IsQUFRTDtBQVJLLEFBQ2hCOztBQVVGLElBQU07V0FBUyxBQUNKLEFBQ1Q7VUFGRixBQUFlLEFBRUw7QUFGSyxBQUNiOztBQUlGLElBQU07aUJBQVksQUFDRCxBQUNmO1lBRmdCLEFBRU4sQUFDVjtlQUhnQixBQUdILEFBQ2I7Y0FKZ0IsQUFJSixBQUNaO1VBTEYsQUFBa0IsQUFLUjtBQUxRLEFBQ2hCOztBQU9GLElBQU0sU0FBUyxTQUFULEFBQVMsYUFBYztNQUFYLEFBQVcsWUFBWCxBQUFXLEFBQzNCOzt5QkFDRSxjQUFBLFlBQVEsT0FBUixBQUFlLHVCQUFmOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLE9BQUwsQUFBWSx1QkFBWjs7Z0JBQUE7a0JBQUE7QUFBQTtLQUZKLEFBQ0UsQUFDRSxBQUdGLGlEQUFBLGNBQUEsU0FBSyxPQUFMLEFBQVksb0JBQVo7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLHNDQUFXLE1BQVosQUFBaUI7Z0JBQWpCO2tCQUFBO0FBQUE7S0FERixBQUNFLEFBQ0EsOEJBQUEsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCO2dCQUFqQjtrQkFBQTtBQUFBO0tBRkYsQUFFRSxBQUNBLDBCQUFBLEFBQUMsc0NBQVcsTUFBWixBQUFpQjtnQkFBakI7a0JBQUE7QUFBQTtLQVJKLEFBS0UsQUFHRTthQVJKO1NBREYsQUFDRSxBQXNCSDtBQXRCRztBQUZKLEFBMEJBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhpbG5ndXllbi9EZXNrdG9wL1Byb2plY3RzL25leHQvY2hlel9wb3J0Zm9saW8ifQ==