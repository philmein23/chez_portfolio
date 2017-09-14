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

var _Content = require('../components/Content');

var _Content2 = _interopRequireDefault(_Content);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _cloudinaryReact = require('cloudinary-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/philnguyen/Desktop/Projects/next/chez_portfolio/pages/index.js?entry';


var Index = function Index(_ref) {
  var url = _ref.url,
      imageData = _ref.imageData;
  return _react2.default.createElement(_Layout2.default, { href: url.pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, console.log(imageData), _react2.default.createElement(_Content2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, imageData.resources.map(function (image) {
    return _react2.default.createElement('div', {
      'data-jsx': 1549449546,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, _react2.default.createElement(_cloudinaryReact.Image, {
      cloudName: 'pnguyen23',
      publicId: image.public_id,
      height: '400',
      crop: 'scale',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }));
  })), _react2.default.createElement(_style2.default, {
    styleId: 1549449546,
    css: 'div[data-jsx="1549449546"]{margin:0.2vw}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCSyxBQUdzQixhQUNmIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGlsbmd1eWVuL0Rlc2t0b3AvUHJvamVjdHMvbmV4dC9jaGV6X3BvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZW50JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjbG91ZGluYXJ5LXJlYWN0JztcblxuY29uc3QgSW5kZXggPSAoeyB1cmwsIGltYWdlRGF0YSB9KSA9PiAoXG4gIDxMYXlvdXQgaHJlZj17dXJsLnBhdGhuYW1lfT5cbiAgICB7Y29uc29sZS5sb2coaW1hZ2VEYXRhKX1cbiAgICA8Q29udGVudD5cbiAgICAgIHtpbWFnZURhdGEucmVzb3VyY2VzLm1hcChpbWFnZSA9PiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBjbG91ZE5hbWU9XCJwbmd1eWVuMjNcIlxuICAgICAgICAgICAgcHVibGljSWQ9e2ltYWdlLnB1YmxpY19pZH1cbiAgICAgICAgICAgIGhlaWdodD1cIjQwMFwiXG4gICAgICAgICAgICBjcm9wPVwic2NhbGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9Db250ZW50PlxuICAgIDxzdHlsZSBqc3g+XG4gICAge2BcbiAgICAgIGRpdiB7XG4gICAgICAgIG1hcmdpbjogMC4ydnc7XG4gICAgICB9XG4gICAgYH1cbiAgPC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIG1vZGU6ICdjb3JzJ1xuICB9O1xuXG4gIGNvbnN0IHJlc291cmNlcyA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL3BuZ3V5ZW4yMy9pbWFnZS9saXN0L2NoZXouanNvbicsXG4gICAgb3B0aW9uc1xuICApO1xuICBjb25zdCBpbWFnZURhdGEgPSBhd2FpdCByZXNvdXJjZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgaW1hZ2VEYXRhXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIkNvbnRlbnQiLCJmZXRjaCIsIkltYWdlIiwiSW5kZXgiLCJ1cmwiLCJpbWFnZURhdGEiLCJwYXRobmFtZSIsImNvbnNvbGUiLCJsb2ciLCJyZXNvdXJjZXMiLCJtYXAiLCJpbWFnZSIsInB1YmxpY19pZCIsImdldEluaXRpYWxQcm9wcyIsIm9wdGlvbnMiLCJtZXRob2QiLCJtb2RlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7Ozs7Ozs7QUFFVCxJQUFNLFFBQVEsU0FBUixBQUFRLFlBQUE7TUFBQSxBQUFHLFdBQUgsQUFBRztNQUFILEFBQVEsaUJBQVIsQUFBUTt5QkFDcEIsQUFBQyxrQ0FBTyxNQUFNLElBQWQsQUFBa0I7Z0JBQWxCO2tCQUFBLEFBQ0c7QUFESDtHQUFBLFVBQ0csQUFBUSxJQURYLEFBQ0csQUFBWSxBQUNiLDRCQUFBLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0c7QUFESDtBQUFBLGVBQ0csQUFBVSxVQUFWLEFBQW9CLElBQUksaUJBQUE7MkJBQ3ZCLGNBQUE7a0JBQUE7O2tCQUFBO29CQUFBLEFBQ0U7QUFERjtBQUFBLEtBQUEsa0JBQ0UsQUFBQztpQkFBRCxBQUNZLEFBQ1Y7Z0JBQVUsTUFGWixBQUVrQixBQUNoQjtjQUhGLEFBR1MsQUFDUDtZQUpGLEFBSU87O2tCQUpQO29CQUZxQixBQUN2QixBQUNFO0FBQUE7QUFDRTtBQU5WLEFBRUUsQUFDRzthQUhMO1NBRFksQUFDWjtBQUFBO0FBREY7O0FBeUJBLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7MEJBQUE7Z0VBQUE7Y0FBQTt1Q0FBQTthQUNoQjtBQURnQjtvQkFDTixBQUNOLEFBQ1I7a0JBSG9CLEFBQ04sQUFFUjtBQUZRLEFBQ2Q7MEJBRm9CO2lCQU1FLGlDQUFBLEFBQ3RCLDREQVBvQixBQU1FLEFBRXRCOzthQUZJO0FBTmdCLCtCQUFBOzBCQUFBO2lCQVVFLFVBVkYsQUFVRSxBQUFVOzthQUE1QjtBQVZnQiwrQkFBQTs7dUJBQUEsQUFZZjtBQUFBLEFBQ0w7O2FBYm9CO2FBQUE7MEJBQUE7O0FBQUE7Y0FBQTtBQUF4QixBQWlCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhpbG5ndXllbi9EZXNrdG9wL1Byb2plY3RzL25leHQvY2hlel9wb3J0Zm9saW8ifQ==