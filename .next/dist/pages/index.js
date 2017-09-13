'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('next/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _cloudinaryReact = require('cloudinary-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/philnguyen/Desktop/Projects/next/chez_portfolio/pages/index.js?entry';


var mainContent = {
  display: 'flex',
  flexWrap: 'wrap',
  flexFlow: 'row-wrap',
  backgroundColor: '#FFF',
  maxWidth: '980px',
  width: '100%',
  margin: '75px auto',
  padding: '10px 25px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0,0,0, 0.18)'
};

var Index = function Index(_ref) {
  var url = _ref.url,
      imageData = _ref.imageData;
  return _react2.default.createElement(_Layout2.default, { href: url.pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, console.log(imageData), _react2.default.createElement('section', { style: mainContent, 'data-jsx': 147836292,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, imageData.resources.map(function (image) {
    return _react2.default.createElement('div', {
      'data-jsx': 147836292,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, _react2.default.createElement(_cloudinaryReact.Image, {
      cloudName: 'pnguyen23',
      publicId: image.public_id,
      height: '400',
      crop: 'scale',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }));
  })), _react2.default.createElement(_style2.default, {
    styleId: 147836292,
    css: 'section[data-jsx="147836292"] div[data-jsx="147836292"]{margin:0.5vw}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDTyxBQUd3QixhQUNmIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGlsbmd1eWVuL0Rlc2t0b3AvUHJvamVjdHMvbmV4dC9jaGV6X3BvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2Nsb3VkaW5hcnktcmVhY3QnO1xuXG5jb25zdCBtYWluQ29udGVudCA9IHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4V3JhcDogJ3dyYXAnLFxuICBmbGV4RmxvdzogJ3Jvdy13cmFwJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsXG4gIG1heFdpZHRoOiAnOTgwcHgnLFxuICB3aWR0aDogJzEwMCUnLFxuICBtYXJnaW46ICc3NXB4IGF1dG8nLFxuICBwYWRkaW5nOiAnMTBweCAyNXB4JyxcbiAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgYm94U2hhZG93OiAnMCAycHggNHB4IHJnYmEoMCwwLDAsIDAuMTgpJ1xufTtcblxuY29uc3QgSW5kZXggPSAoeyB1cmwsIGltYWdlRGF0YSB9KSA9PiAoXG4gIDxMYXlvdXQgaHJlZj17dXJsLnBhdGhuYW1lfT5cbiAgICB7Y29uc29sZS5sb2coaW1hZ2VEYXRhKX1cbiAgICA8c2VjdGlvbiBzdHlsZT17bWFpbkNvbnRlbnR9PlxuICAgICAge2ltYWdlRGF0YS5yZXNvdXJjZXMubWFwKGltYWdlID0+IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGNsb3VkTmFtZT1cInBuZ3V5ZW4yM1wiXG4gICAgICAgICAgICBwdWJsaWNJZD17aW1hZ2UucHVibGljX2lkfVxuICAgICAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgICAgIGNyb3A9XCJzY2FsZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L3NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIHNlY3Rpb24gZGl2IHtcbiAgICAgICAgICBtYXJnaW46IDAuNXZ3O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBtb2RlOiAnY29ycydcbiAgfTtcblxuICBjb25zdCByZXNvdXJjZXMgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wbmd1eWVuMjMvaW1hZ2UvbGlzdC9jaGV6Lmpzb24nLFxuICAgIG9wdGlvbnNcbiAgKTtcbiAgY29uc3QgaW1hZ2VEYXRhID0gYXdhaXQgcmVzb3VyY2VzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIGltYWdlRGF0YVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var options, resources, imageData;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          options = {
            method: 'GET',
            mode: 'cors'
          };
          _context.next = 3;
          return (0, _isomorphicUnfetch2.default)('http://res.cloudinary.com/pnguyen23/image/list/chez.json', options);

        case 3:
          resources = _context.sent;
          _context.next = 6;
          return resources.json();

        case 6:
          imageData = _context.sent;
          return _context.abrupt('return', {
            imageData: imageData
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImZldGNoIiwiSW1hZ2UiLCJtYWluQ29udGVudCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImZsZXhGbG93IiwiYmFja2dyb3VuZENvbG9yIiwibWF4V2lkdGgiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJJbmRleCIsInVybCIsImltYWdlRGF0YSIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsInJlc291cmNlcyIsIm1hcCIsImltYWdlIiwicHVibGljX2lkIiwiZ2V0SW5pdGlhbFByb3BzIiwib3B0aW9ucyIsIm1ldGhvZCIsIm1vZGUiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOzs7Ozs7O0FBRVQsSUFBTTtXQUFjLEFBQ1QsQUFDVDtZQUZrQixBQUVSLEFBQ1Y7WUFIa0IsQUFHUixBQUNWO21CQUprQixBQUlELEFBQ2pCO1lBTGtCLEFBS1IsQUFDVjtTQU5rQixBQU1YLEFBQ1A7VUFQa0IsQUFPVixBQUNSO1dBUmtCLEFBUVQsQUFDVDtnQkFUa0IsQUFTSixBQUNkO2FBVkYsQUFBb0IsQUFVUDtBQVZPLEFBQ2xCOztBQVlGLElBQU0sUUFBUSxTQUFSLEFBQVEsWUFBQTtNQUFBLEFBQUcsV0FBSCxBQUFHO01BQUgsQUFBUSxpQkFBUixBQUFRO3lCQUNwQixBQUFDLGtDQUFPLE1BQU0sSUFBZCxBQUFrQjtnQkFBbEI7a0JBQUEsQUFDRztBQURIO0dBQUEsVUFDRyxBQUFRLElBRFgsQUFDRyxBQUFZLEFBQ2IsNEJBQUEsY0FBQSxhQUFTLE9BQVQsQUFBZ0IseUJBQWhCOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7ZUFDRyxBQUFVLFVBQVYsQUFBb0IsSUFBSSxpQkFBQTsyQkFDdkIsY0FBQTtrQkFBQTs7a0JBQUE7b0JBQUEsQUFDRTtBQURGO0FBQUEsS0FBQSxrQkFDRSxBQUFDO2lCQUFELEFBQ1ksQUFDVjtnQkFBVSxNQUZaLEFBRWtCLEFBQ2hCO2NBSEYsQUFHUyxBQUNQO1lBSkYsQUFJTzs7a0JBSlA7b0JBRnFCLEFBQ3ZCLEFBQ0U7QUFBQTtBQUNFO0FBTlYsQUFFRSxBQUNHO2FBSEw7U0FEWSxBQUNaO0FBQUE7QUFERjs7QUF5QkEsTUFBQSxBQUFNLDJGQUFrQixtQkFBQTswQkFBQTtnRUFBQTtjQUFBO3VDQUFBO2FBQ2hCO0FBRGdCO29CQUNOLEFBQ04sQUFDUjtrQkFIb0IsQUFDTixBQUVSO0FBRlEsQUFDZDswQkFGb0I7aUJBTUUsaUNBQUEsQUFDdEIsNERBUG9CLEFBTUUsQUFFdEI7O2FBRkk7QUFOZ0IsK0JBQUE7MEJBQUE7aUJBVUUsVUFWRixBQVVFLEFBQVU7O2FBQTVCO0FBVmdCLCtCQUFBOzt1QkFBQSxBQVlmO0FBQUEsQUFDTDs7YUFib0I7YUFBQTswQkFBQTs7QUFBQTtjQUFBO0FBQXhCLEFBaUJBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGlsbmd1eWVuL0Rlc2t0b3AvUHJvamVjdHMvbmV4dC9jaGV6X3BvcnRmb2xpbyJ9