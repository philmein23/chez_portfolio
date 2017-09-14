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
  borderTop: '5px solid black',
  position: 'fixed'
};

var navBar = {
  display: 'flex',
  height: 50
};

var mainTitle = {
  fontFamily: 'Raleway',
  textTransform: 'uppercase',
  fontSize: 25,
  paddingLeft: 10,
  fontWeight: '800',
  cursor: 'pointer',
  color: 'rgb(0, 0, 0)'
};

var Header = function Header(_ref) {
  var href = _ref.href;

  return _react2.default.createElement('header', { style: headerBar, 'data-jsx': 1876639314,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('div', { style: mainTitle, 'data-jsx': 1876639314,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, 'illa Art Workz Studios')), _react2.default.createElement('nav', { style: navBar, 'data-jsx': 1876639314,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement(_ActiveLink2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, 'Portfolio'), _react2.default.createElement(_ActiveLink2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, 'About'), _react2.default.createElement(_ActiveLink2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, 'Contact')), _react2.default.createElement(_style2.default, {
    styleId: 1876639314,
    css: 'nav>li{list-style:none;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDUyxBQUc2QixnQkFDSixZQUNDLDBFQUNNLDZGQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhpbG5ndXllbi9EZXNrdG9wL1Byb2plY3RzL25leHQvY2hlel9wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSAnLi9BY3RpdmVMaW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBoZWFkZXJCYXIgPSB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgaGVpZ2h0OiA1MCxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgYm94U2hhZG93OiAnMCAycHggNHB4IHJnYmEoMCwwLDAsIDAuMTgpJyxcbiAgYm9yZGVyVG9wOiAnNXB4IHNvbGlkIGJsYWNrJyxcbiAgcG9zaXRpb246ICdmaXhlZCdcbn07XG5cbmNvbnN0IG5hdkJhciA9IHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBoZWlnaHQ6IDUwXG59O1xuXG5jb25zdCBtYWluVGl0bGUgPSB7XG4gIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gIGZvbnRTaXplOiAyNSxcbiAgcGFkZGluZ0xlZnQ6IDEwLFxuICBmb250V2VpZ2h0OiAnODAwJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGNvbG9yOiAncmdiKDAsIDAsIDApJ1xufTtcblxuY29uc3QgSGVhZGVyID0gKHsgaHJlZiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBzdHlsZT17aGVhZGVyQmFyfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e21haW5UaXRsZX0+aWxsYSBBcnQgV29ya3ogU3R1ZGlvczwvZGl2PlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8bmF2IHN0eWxlPXtuYXZCYXJ9PlxuICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL1wiPlBvcnRmb2xpbzwvQWN0aXZlTGluaz5cbiAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9BY3RpdmVMaW5rPlxuICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0PC9BY3RpdmVMaW5rPlxuICAgICAgPC9uYXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBuYXYgPiBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=components/Header.js */'
  }));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJBY3RpdmVMaW5rIiwiUm91dGVyIiwiaGVhZGVyQmFyIiwiZGlzcGxheSIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiYm9yZGVyVG9wIiwicG9zaXRpb24iLCJuYXZCYXIiLCJtYWluVGl0bGUiLCJmb250RmFtaWx5IiwidGV4dFRyYW5zZm9ybSIsImZvbnRTaXplIiwicGFkZGluZ0xlZnQiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiY29sb3IiLCJIZWFkZXIiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTTtXQUFZLEFBQ1AsQUFDVDtTQUZnQixBQUVULEFBQ1A7a0JBSGdCLEFBR0EsQUFDaEI7VUFKZ0IsQUFJUixBQUNSO2NBTGdCLEFBS0osQUFDWjttQkFOZ0IsQUFNQyxBQUNqQjthQVBnQixBQU9MLEFBQ1g7YUFSZ0IsQUFRTCxBQUNYO1lBVEYsQUFBa0IsQUFTTjtBQVRNLEFBQ2hCOztBQVdGLElBQU07V0FBUyxBQUNKLEFBQ1Q7VUFGRixBQUFlLEFBRUw7QUFGSyxBQUNiOztBQUlGLElBQU07Y0FBWSxBQUNKLEFBQ1o7aUJBRmdCLEFBRUQsQUFDZjtZQUhnQixBQUdOLEFBQ1Y7ZUFKZ0IsQUFJSCxBQUNiO2NBTGdCLEFBS0osQUFDWjtVQU5nQixBQU1SLEFBQ1I7U0FQRixBQUFrQixBQU9UO0FBUFMsQUFDaEI7O0FBU0YsSUFBTSxTQUFTLFNBQVQsQUFBUyxhQUFjO01BQVgsQUFBVyxZQUFYLEFBQVcsQUFDM0I7O3lCQUNFLGNBQUEsWUFBUSxPQUFSLEFBQWUsdUJBQWY7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO2dCQUFYO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZLHVCQUFaOztnQkFBQTtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBR0YsNENBQUEsY0FBQSxTQUFLLE9BQUwsQUFBWSxvQkFBWjs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsc0NBQVcsTUFBWixBQUFpQjtnQkFBakI7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFDQSw4QkFBQSxBQUFDLHNDQUFXLE1BQVosQUFBaUI7Z0JBQWpCO2tCQUFBO0FBQUE7S0FGRixBQUVFLEFBQ0EsMEJBQUEsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCO2dCQUFqQjtrQkFBQTtBQUFBO0tBUkosQUFLRSxBQUdFO2FBUko7U0FERixBQUNFLEFBc0JIO0FBdEJHO0FBRkosQUEwQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGlsbmd1eWVuL0Rlc2t0b3AvUHJvamVjdHMvbmV4dC9jaGV6X3BvcnRmb2xpbyJ9