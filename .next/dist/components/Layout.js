'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('next/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/philnguyen/Desktop/Projects/next/chez_portfolio/components/Layout.js';


var layout = {
  width: '100%',
  margin: 0,
  padding: 0,
  backgroundColor: '#edebeb',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
};

var main = {
  flex: '1'
};

var footer = {
  height: 50,
  backgroundColor: 'white',
  boxShadow: '0 -1px 4px rgba(0,0,0, 0.18)'
};

var Layout = function Layout(_ref) {
  var children = _ref.children,
      href = _ref.href;
  return _react2.default.createElement('div', { style: layout, 'data-jsx': 4107323380,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('title', {
    'data-jsx': 4107323380,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, 'Welcome to My Porfolio'), _react2.default.createElement('meta', {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1',
    'data-jsx': 4107323380,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), _react2.default.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed',
    rel: 'stylesheet',
    'data-jsx': 4107323380,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })), _react2.default.createElement(_Header2.default, { href: href, __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), _react2.default.createElement('main', { style: main, 'data-jsx': 4107323380,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, children), _react2.default.createElement('footer', { style: footer, 'data-jsx': 4107323380,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 4107323380,
    css: '*{margin:0;font-family:\'Roboto Condensed\',sans-serif}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDTyxBQUdvQixTQUNrQywwQ0FDN0MiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoaWxuZ3V5ZW4vRGVza3RvcC9Qcm9qZWN0cy9uZXh0L2NoZXpfcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBsYXlvdXQgPSB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIG1hcmdpbjogMCxcbiAgcGFkZGluZzogMCxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2VkZWJlYicsXG4gIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xufTtcblxuY29uc3QgbWFpbiA9IHtcbiAgZmxleDogJzEnXG59XG5cbmNvbnN0IGZvb3RlciA9IHtcbiAgaGVpZ2h0OiA1MCxcbiAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICBib3hTaGFkb3c6ICcwIC0xcHggNHB4IHJnYmEoMCwwLDAsIDAuMTgpJ1xufTtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIGhyZWYgfSkgPT4gKFxuICA8ZGl2IHN0eWxlPXtsYXlvdXR9PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPldlbGNvbWUgdG8gTXkgUG9yZm9saW88L3RpdGxlPlxuICAgICAgPG1ldGFcbiAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytDb25kZW5zZWRcIlxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgIC8+XG4gICAgPC9IZWFkPlxuICAgIDxIZWFkZXIgaHJlZj17aHJlZn0gLz5cbiAgICA8bWFpbiBzdHlsZT17bWFpbn0+e2NoaWxkcmVufTwvbWFpbj5cblxuICAgIDxmb290ZXIgc3R5bGU9e2Zvb3Rlcn0gLz5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICAgICoge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=components/Layout.js */'
  }));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIkhlYWQiLCJsYXlvdXQiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1haW4iLCJmbGV4IiwiZm9vdGVyIiwiaGVpZ2h0IiwiYm94U2hhZG93IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNO1NBQVMsQUFDTixBQUNQO1VBRmEsQUFFTCxBQUNSO1dBSGEsQUFHSixBQUNUO21CQUphLEFBSUksQUFDakI7YUFMYSxBQUtGLEFBQ1g7V0FOYSxBQU1KLEFBQ1Q7aUJBUEYsQUFBZSxBQU9FO0FBUEYsQUFDYjs7QUFTRixJQUFNO1FBQU4sQUFBYSxBQUNMO0FBREssQUFDWDs7QUFHRixJQUFNO1VBQVMsQUFDTCxBQUNSO21CQUZhLEFBRUksQUFDakI7YUFIRixBQUFlLEFBR0Y7QUFIRSxBQUNiOztBQUtGLElBQU0sU0FBUyxTQUFULEFBQVMsYUFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRztNQUFILEFBQWEsWUFBYixBQUFhO3lCQUMxQixjQUFBLFNBQUssT0FBTCxBQUFZLG9CQUFaOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO2dCQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0E7VUFBQSxBQUNPLEFBQ0w7YUFGRixBQUVVO2dCQUZWOztnQkFBQTtrQkFGRixBQUVFLEFBSUE7QUFKQTtBQUNFO1VBR0YsQUFDTyxBQUNMO1NBRkYsQUFFTTtnQkFGTjs7Z0JBQUE7a0JBUEosQUFDRSxBQU1FLEFBS0Y7QUFMRTtBQUNFLHVCQUlKLEFBQUMsa0NBQU8sTUFBUixBQUFjO2dCQUFkO2tCQVpGLEFBWUUsQUFDQTtBQURBO3NCQUNBLGNBQUEsVUFBTSxPQUFOLEFBQWEsa0JBQWI7O2dCQUFBO2tCQUFBLEFBQW9CO0FBQXBCO0tBYkYsQUFhRSxBQUVBLHFEQUFRLE9BQVIsQUFBZSxvQkFBZjs7Z0JBQUE7a0JBZkYsQUFlRTtBQUFBOzthQWZGO1NBRGEsQUFDYjtBQUFBO0FBREYsQUE0QkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGlsbmd1eWVuL0Rlc2t0b3AvUHJvamVjdHMvbmV4dC9jaGV6X3BvcnRmb2xpbyJ9