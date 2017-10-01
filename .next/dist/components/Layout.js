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
  return _react2.default.createElement('div', { style: layout, 'data-jsx': 2266230733,
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
    'data-jsx': 2266230733,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Welcome to My Porfolio'), _react2.default.createElement('meta', {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1',
    'data-jsx': 2266230733,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed',
    rel: 'stylesheet',
    'data-jsx': 2266230733,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), _react2.default.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Raleway:400,700',
    rel: 'stylesheet',
    'data-jsx': 2266230733,
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
        lineNumber: 46
      }
    }) : _react2.default.createElement(_Header2.default, { href: href, __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      }
    });
  }), _react2.default.createElement('main', { style: main, 'data-jsx': 2266230733,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, children), _react2.default.createElement('footer', { style: footer, 'data-jsx': 2266230733,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 2266230733,
    css: '*{margin:0;font-family:\'Roboto Condensed\',\'Raleway\',sans-serif}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9ETyxBQUdvQixTQUM2QyxvREFDeEQiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoaWxuZ3V5ZW4vRGVza3RvcC9Qcm9qZWN0cy9uZXh0L2NoZXpfcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAncmVhY3QtbWVkaWEnO1xuXG5jb25zdCBsYXlvdXQgPSB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIG1hcmdpbjogMCxcbiAgcGFkZGluZzogMCxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2VkZWJlYicsXG4gIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xufTtcblxuY29uc3QgbWFpbiA9IHtcbiAgZmxleDogJzEnXG59O1xuXG5jb25zdCBmb290ZXIgPSB7XG4gIGhlaWdodDogNTAsXG4gIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgYm94U2hhZG93OiAnMCAtMXB4IDRweCByZ2JhKDAsMCwwLCAwLjE4KSdcbn07XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBocmVmIH0pID0+IChcbiAgPGRpdiBzdHlsZT17bGF5b3V0fT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5XZWxjb21lIHRvIE15IFBvcmZvbGlvPC90aXRsZT5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkXCJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjQwMCw3MDBcIlxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgIC8+XG4gICAgPC9IZWFkPlxuXG4gICAgPE1lZGlhIHF1ZXJ5PVwiKG1heC13aWR0aDogNTc1cHgpXCI+XG4gICAgICB7bWF0Y2hlcyA9PlxuICAgICAgICBtYXRjaGVzID8gPEhlYWRlciBocmVmPXtocmVmfSBmbGV4RGlyZWN0aW9uPXsnY29sdW1uJ30gaGVpZ2h0PXs4MH0vPiA6IDxIZWFkZXIgaHJlZj17aHJlZn0gLz59XG4gICAgPC9NZWRpYT5cblxuICAgIDxtYWluIHN0eWxlPXttYWlufT57Y2hpbGRyZW59PC9tYWluPlxuXG4gICAgPGZvb3RlciBzdHlsZT17Zm9vdGVyfSAvPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=components/Layout.js */'
  }));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIkhlYWQiLCJNZWRpYSIsImxheW91dCIsIndpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFpbiIsImZsZXgiLCJmb290ZXIiLCJoZWlnaHQiLCJib3hTaGFkb3ciLCJMYXlvdXQiLCJjaGlsZHJlbiIsImhyZWYiLCJtYXRjaGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTTtTQUFTLEFBQ04sQUFDUDtVQUZhLEFBRUwsQUFDUjtXQUhhLEFBR0osQUFDVDttQkFKYSxBQUlJLEFBQ2pCO2FBTGEsQUFLRixBQUNYO1dBTmEsQUFNSixBQUNUO2lCQVBGLEFBQWUsQUFPRTtBQVBGLEFBQ2I7O0FBU0YsSUFBTTtRQUFOLEFBQWEsQUFDTDtBQURLLEFBQ1g7O0FBR0YsSUFBTTtVQUFTLEFBQ0wsQUFDUjttQkFGYSxBQUVJLEFBQ2pCO2FBSEYsQUFBZSxBQUdGO0FBSEUsQUFDYjs7QUFLRixJQUFNLFNBQVMsU0FBVCxBQUFTLGFBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7TUFBSCxBQUFhLFlBQWIsQUFBYTt5QkFDMUIsY0FBQSxTQUFLLE9BQUwsQUFBWSxvQkFBWjs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTtnQkFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBO1VBQUEsQUFDTyxBQUNMO2FBRkYsQUFFVTtnQkFGVjs7Z0JBQUE7a0JBRkYsQUFFRSxBQUlBO0FBSkE7QUFDRTtVQUdGLEFBQ08sQUFDTDtTQUZGLEFBRU07Z0JBRk47O2dCQUFBO2tCQU5GLEFBTUUsQUFJQTtBQUpBO0FBQ0U7VUFHRixBQUNPLEFBQ0w7U0FGRixBQUVNO2dCQUZOOztnQkFBQTtrQkFYSixBQUNFLEFBVUUsQUFNRjtBQU5FO0FBQ0UsdUJBS0osQUFBQyxzQ0FBTSxPQUFQLEFBQWE7Z0JBQWI7a0JBQUEsQUFDRztBQURIO3dCQUNHO3FDQUNXLEFBQUMsa0NBQU8sTUFBUixBQUFjLE1BQU0sZUFBcEIsQUFBbUMsVUFBVSxRQUE3QyxBQUFxRDtrQkFBckQ7b0JBQVYsQUFBVTtBQUFBO0tBQUEsQ0FBVixtQkFBdUUsQUFBQyxrQ0FBTyxNQUFSLEFBQWM7a0JBQWQ7b0JBRHhFLEFBQ3dFO0FBQUE7S0FBQTtBQW5CN0UsQUFpQkUsQUFLQSxzQkFBQSxjQUFBLFVBQU0sT0FBTixBQUFhLGtCQUFiOztnQkFBQTtrQkFBQSxBQUFvQjtBQUFwQjtLQXRCRixBQXNCRSxBQUVBLHFEQUFRLE9BQVIsQUFBZSxvQkFBZjs7Z0JBQUE7a0JBeEJGLEFBd0JFO0FBQUE7O2FBeEJGO1NBRGEsQUFDYjtBQUFBO0FBREYsQUFxQ0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGlsbmd1eWVuL0Rlc2t0b3AvUHJvamVjdHMvbmV4dC9jaGV6X3BvcnRmb2xpbyJ9