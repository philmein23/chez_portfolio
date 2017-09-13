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
      lineNumber: 32
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement('div', { style: mainTitle, 'data-jsx': 1876639314,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, 'IAW Studios/ illa Art Workz')), _react2.default.createElement('nav', { style: navBar, 'data-jsx': 1876639314,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement(_ActiveLink2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, 'Portfolio'), _react2.default.createElement(_ActiveLink2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, 'About'), _react2.default.createElement(_ActiveLink2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, 'Contact')), _react2.default.createElement(_style2.default, {
    styleId: 1876639314,
    css: 'nav>li{list-style:none;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDUyxBQUc2QixnQkFDSixZQUNDLDBFQUNNLDZGQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhpbG5ndXllbi9EZXNrdG9wL1Byb2plY3RzL25leHQvY2hlel9wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSAnLi9BY3RpdmVMaW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBoZWFkZXJCYXIgPSB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgaGVpZ2h0OiA1MCxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgYm94U2hhZG93OiAnMCAycHggNHB4IHJnYmEoMCwwLDAsIDAuMTgpJyxcbiAgYm9yZGVyVG9wOiAnNXB4IHNvbGlkIGJsYWNrJyxcbiAgcG9zaXRpb246ICdmaXhlZCdcbn07XG5cbmNvbnN0IG5hdkJhciA9IHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBoZWlnaHQ6IDUwXG59O1xuXG5jb25zdCBtYWluVGl0bGUgPSB7XG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICBmb250U2l6ZTogMjUsXG4gIHBhZGRpbmdMZWZ0OiAxMCxcbiAgZm9udFdlaWdodDogJzgwMCcsXG4gIGN1cnNvcjogJ3BvaW50ZXInXG59O1xuXG5jb25zdCBIZWFkZXIgPSAoeyBocmVmIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIHN0eWxlPXtoZWFkZXJCYXJ9PlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGRpdiBzdHlsZT17bWFpblRpdGxlfT5JQVcgU3R1ZGlvcy8gaWxsYSBBcnQgV29ya3o8L2Rpdj5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPG5hdiBzdHlsZT17bmF2QmFyfT5cbiAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9cIj5Qb3J0Zm9saW88L0FjdGl2ZUxpbms+XG4gICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvQWN0aXZlTGluaz5cbiAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvQWN0aXZlTGluaz5cbiAgICAgIDwvbmF2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgbmF2ID4gbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=components/Header.js */'
  }));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJBY3RpdmVMaW5rIiwiUm91dGVyIiwiaGVhZGVyQmFyIiwiZGlzcGxheSIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwiYm9yZGVyVG9wIiwicG9zaXRpb24iLCJuYXZCYXIiLCJtYWluVGl0bGUiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJwYWRkaW5nTGVmdCIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJIZWFkZXIiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTTtXQUFZLEFBQ1AsQUFDVDtTQUZnQixBQUVULEFBQ1A7a0JBSGdCLEFBR0EsQUFDaEI7VUFKZ0IsQUFJUixBQUNSO2NBTGdCLEFBS0osQUFDWjttQkFOZ0IsQUFNQyxBQUNqQjthQVBnQixBQU9MLEFBQ1g7YUFSZ0IsQUFRTCxBQUNYO1lBVEYsQUFBa0IsQUFTTjtBQVRNLEFBQ2hCOztBQVdGLElBQU07V0FBUyxBQUNKLEFBQ1Q7VUFGRixBQUFlLEFBRUw7QUFGSyxBQUNiOztBQUlGLElBQU07aUJBQVksQUFDRCxBQUNmO1lBRmdCLEFBRU4sQUFDVjtlQUhnQixBQUdILEFBQ2I7Y0FKZ0IsQUFJSixBQUNaO1VBTEYsQUFBa0IsQUFLUjtBQUxRLEFBQ2hCOztBQU9GLElBQU0sU0FBUyxTQUFULEFBQVMsYUFBYztNQUFYLEFBQVcsWUFBWCxBQUFXLEFBQzNCOzt5QkFDRSxjQUFBLFlBQVEsT0FBUixBQUFlLHVCQUFmOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLE9BQUwsQUFBWSx1QkFBWjs7Z0JBQUE7a0JBQUE7QUFBQTtLQUZKLEFBQ0UsQUFDRSxBQUdGLGlEQUFBLGNBQUEsU0FBSyxPQUFMLEFBQVksb0JBQVo7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLHNDQUFXLE1BQVosQUFBaUI7Z0JBQWpCO2tCQUFBO0FBQUE7S0FERixBQUNFLEFBQ0EsOEJBQUEsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCO2dCQUFqQjtrQkFBQTtBQUFBO0tBRkYsQUFFRSxBQUNBLDBCQUFBLEFBQUMsc0NBQVcsTUFBWixBQUFpQjtnQkFBakI7a0JBQUE7QUFBQTtLQVJKLEFBS0UsQUFHRTthQVJKO1NBREYsQUFDRSxBQXNCSDtBQXRCRztBQUZKLEFBMEJBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhpbG5ndXllbi9EZXNrdG9wL1Byb2plY3RzL25leHQvY2hlel9wb3J0Zm9saW8ifQ==