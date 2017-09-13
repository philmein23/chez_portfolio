'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('next/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next/dist/lib/router/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/philnguyen/Desktop/Projects/next/chez_portfolio/components/ActiveLink.js';


var ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href;

  var active = {
    borderBottom: router.pathname === href ? '2px solid black' : '0px'
  };

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return _react2.default.createElement('li', { style: active, 'data-jsx': 1830225705,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('a', { href: href, onClick: handleClick, 'data-jsx': 1830225705,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, children), _react2.default.createElement(_style2.default, {
    styleId: 1830225705,
    css: 'a[data-jsx="1830225705"]{display:inline-block;padding-left:15px;text-decoration:none;color:black;font-weight:600;cursor:pointer}li[data-jsx="1830225705"] a[data-jsx="1830225705"]:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}a[data-jsx="1830225705"]:last-child{padding-right:10px}a[data-jsx="1830225705"]:hover{color:#a9a9a9}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWN0aXZlTGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQlMsQUFJOEIsQUFTSyxBQUlQLEFBSUwsY0FDaEIsS0FKQSxFQWJvQixrQkFDRyxxQkFDVCxZQUNJLGdCQUNELEVBS2pCLGFBSkEiLCJmaWxlIjoiY29tcG9uZW50cy9BY3RpdmVMaW5rLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGlsbmd1eWVuL0Rlc2t0b3AvUHJvamVjdHMvbmV4dC9jaGV6X3BvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IEFjdGl2ZUxpbmsgPSAoeyBjaGlsZHJlbiwgcm91dGVyLCBocmVmIH0pID0+IHtcbiAgY29uc3QgYWN0aXZlID0ge1xuICAgIGJvcmRlckJvdHRvbTogcm91dGVyLnBhdGhuYW1lID09PSBocmVmID8gJzJweCBzb2xpZCBibGFjaycgOiAnMHB4J1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJvdXRlci5wdXNoKGhyZWYpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGxpIHN0eWxlPXthY3RpdmV9PlxuICAgICAgPGEgaHJlZj17aHJlZn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuXG4gICAgICBhIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGxpIGE6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gICAgICB9XG5cbiAgICAgIGE6bGFzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2E5YTlhOTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWN0aXZlTGluayk7XG4iXX0= */\n/*@ sourceURL=components/ActiveLink.js */'
  }));
};

exports.default = (0, _index.withRouter)(ActiveLink);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWN0aXZlTGluay5qcyJdLCJuYW1lcyI6WyJ3aXRoUm91dGVyIiwiQWN0aXZlTGluayIsImNoaWxkcmVuIiwicm91dGVyIiwiaHJlZiIsImFjdGl2ZSIsImJvcmRlckJvdHRvbSIsInBhdGhuYW1lIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7Ozs7QUFFVCxJQUFNLGFBQWEsU0FBYixBQUFhLGlCQUFnQztNQUE3QixBQUE2QixnQkFBN0IsQUFBNkI7TUFBbkIsQUFBbUIsY0FBbkIsQUFBbUI7TUFBWCxBQUFXLFlBQVgsQUFBVyxBQUNqRDs7TUFBTTtrQkFDVSxPQUFBLEFBQU8sYUFBUCxBQUFvQixPQUFwQixBQUEyQixvQkFEM0MsQUFBZSxBQUNnRCxBQUcvRDtBQUplLEFBQ2I7O01BR0ksY0FBYyxTQUFkLEFBQWMsZUFBSyxBQUN2QjtNQUFBLEFBQUUsQUFDRjtXQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ2I7QUFIRCxBQUtBOzt5QkFDRSxjQUFBLFFBQUksT0FBSixBQUFXLG9CQUFYOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxjQUFBLE9BQUcsTUFBSCxBQUFTLE1BQU0sU0FBZixBQUF3Qix5QkFBeEI7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtLQURGLEFBQ0U7YUFERjtTQURGLEFBQ0UsQUFnQ0g7QUFoQ0c7QUFYSixBQTZDQTs7a0JBQWUsdUJBQWYsQUFBZSxBQUFXIiwiZmlsZSI6IkFjdGl2ZUxpbmsuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoaWxuZ3V5ZW4vRGVza3RvcC9Qcm9qZWN0cy9uZXh0L2NoZXpfcG9ydGZvbGlvIn0=