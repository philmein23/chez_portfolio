'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactMedia = require('react-media');

var _reactMedia2 = _interopRequireDefault(_reactMedia);

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
  return _react2.default.createElement('div', { style: layout, className: 'jsx-1409605603',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('title', {
    className: 'jsx-1409605603',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Welcome to My Porfolio'), _react2.default.createElement('meta', {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1',
    className: 'jsx-1409605603',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed',
    rel: 'stylesheet',
    className: 'jsx-1409605603',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), _react2.default.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Raleway:400,700',
    rel: 'stylesheet',
    className: 'jsx-1409605603',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  })), _react2.default.createElement(_reactMedia2.default, { query: '(max-width: 575px)', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, function (matches) {
    return matches ? _react2.default.createElement(_Header2.default, { href: href, flexDirection: 'column', height: 80, __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    }) : _react2.default.createElement(_Header2.default, { href: href, __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    });
  }), _react2.default.createElement('main', { style: main, className: 'jsx-1409605603',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, children), _react2.default.createElement('footer', { style: footer, className: 'jsx-1409605603',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: '1409605603',
    css: '*{margin:0;font-family:\'Roboto Condensed\',\'Raleway\',sans-serif}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdETyxBQUdvQixTQUM2QyxvREFDeEQiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoaWxuZ3V5ZW4vRGVza3RvcC9Qcm9qZWN0cy9uZXh0L2NoZXpfcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAncmVhY3QtbWVkaWEnO1xuXG5jb25zdCBsYXlvdXQgPSB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIG1hcmdpbjogMCxcbiAgcGFkZGluZzogMCxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2VkZWJlYicsXG4gIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xufTtcblxuY29uc3QgbWFpbiA9IHtcbiAgZmxleDogJzEnXG59O1xuXG5jb25zdCBmb290ZXIgPSB7XG4gIGhlaWdodDogNTAsXG4gIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgYm94U2hhZG93OiAnMCAtMXB4IDRweCByZ2JhKDAsMCwwLCAwLjE4KSdcbn07XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBocmVmIH0pID0+IChcbiAgPGRpdiBzdHlsZT17bGF5b3V0fT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5XZWxjb21lIHRvIE15IFBvcmZvbGlvPC90aXRsZT5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkXCJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjQwMCw3MDBcIlxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgIC8+XG4gICAgPC9IZWFkPlxuXG4gICAgPE1lZGlhIHF1ZXJ5PVwiKG1heC13aWR0aDogNTc1cHgpXCI+XG4gICAgICB7bWF0Y2hlcyA9PlxuICAgICAgICBtYXRjaGVzID8gKFxuICAgICAgICAgIDxIZWFkZXIgaHJlZj17aHJlZn0gZmxleERpcmVjdGlvbj17J2NvbHVtbid9IGhlaWdodD17ODB9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEhlYWRlciBocmVmPXtocmVmfSAvPlxuICAgICAgICApfVxuICAgIDwvTWVkaWE+XG5cbiAgICA8bWFpbiBzdHlsZT17bWFpbn0+e2NoaWxkcmVufTwvbWFpbj5cblxuICAgIDxmb290ZXIgc3R5bGU9e2Zvb3Rlcn0gLz5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICAgICoge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=components/Layout.js */'
  }));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIkhlYWQiLCJNZWRpYSIsImxheW91dCIsIndpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFpbiIsImZsZXgiLCJmb290ZXIiLCJoZWlnaHQiLCJib3hTaGFkb3ciLCJMYXlvdXQiLCJjaGlsZHJlbiIsImhyZWYiLCJtYXRjaGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBRVAsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTTtTQUFTLEFBQ04sQUFDUDtVQUZhLEFBRUwsQUFDUjtXQUhhLEFBR0osQUFDVDttQkFKYSxBQUlJLEFBQ2pCO2FBTGEsQUFLRixBQUNYO1dBTmEsQUFNSixBQUNUO2lCQVBGLEFBQWUsQUFPRTtBQVBGLEFBQ2I7O0FBU0YsSUFBTTtRQUFOLEFBQWEsQUFDTDtBQURLLEFBQ1g7O0FBR0YsSUFBTTtVQUFTLEFBQ0wsQUFDUjttQkFGYSxBQUVJLEFBQ2pCO2FBSEYsQUFBZSxBQUdGO0FBSEUsQUFDYjs7QUFLRixJQUFNLFNBQVMsU0FBVCxBQUFTLGFBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7TUFBSCxBQUFhLFlBQWIsQUFBYTt5QkFDMUIsY0FBQSxTQUFLLE9BQUwsQUFBWSxtQkFBWjs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0E7VUFBQSxBQUNPLEFBQ0w7YUFGRixBQUVVO2VBRlY7O2dCQUFBO2tCQUZGLEFBRUUsQUFJQTtBQUpBO0FBQ0U7VUFHRixBQUNPLEFBQ0w7U0FGRixBQUVNO2VBRk47O2dCQUFBO2tCQU5GLEFBTUUsQUFJQTtBQUpBO0FBQ0U7VUFHRixBQUNPLEFBQ0w7U0FGRixBQUVNO2VBRk47O2dCQUFBO2tCQVhKLEFBQ0UsQUFVRSxBQU1GO0FBTkU7QUFDRSx1QkFLSixBQUFDLHNDQUFNLE9BQVAsQUFBYTtnQkFBYjtrQkFBQSxBQUNHO0FBREg7d0JBQ0c7cUNBRUcsQUFBQyxrQ0FBTyxNQUFSLEFBQWMsTUFBTSxlQUFwQixBQUFtQyxVQUFVLFFBQTdDLEFBQXFEO2tCQUFyRDtvQkFERixBQUNFO0FBQUE7S0FBQSxDQURGLG1CQUdFLEFBQUMsa0NBQU8sTUFBUixBQUFjO2tCQUFkO29CQUpILEFBSUc7QUFBQTtLQUFBO0FBdEJSLEFBaUJFLEFBU0Esc0JBQUEsY0FBQSxVQUFNLE9BQU4sQUFBYSxpQkFBYjs7Z0JBQUE7a0JBQUEsQUFBb0I7QUFBcEI7S0ExQkYsQUEwQkUsQUFFQSxxREFBUSxPQUFSLEFBQWUsbUJBQWY7O2dCQUFBO2tCQTVCRixBQTRCRTtBQUFBOzthQTVCRjtTQURhLEFBQ2I7QUFBQTtBQURGLEFBeUNBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhpbG5ndXllbi9EZXNrdG9wL1Byb2plY3RzL25leHQvY2hlel9wb3J0Zm9saW8ifQ==