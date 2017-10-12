'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Content = require('../components/Content');

var _Content2 = _interopRequireDefault(_Content);

var _Modal = require('../components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _constants = require('../constants/constants');

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _Images = require('../components/Images');

var _Images2 = _interopRequireDefault(_Images);

var _reactMedia = require('react-media');

var _reactMedia2 = _interopRequireDefault(_reactMedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/philnguyen/Desktop/Projects/next/chez_portfolio/pages/index.js?entry';


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          url = _props.url,
          imageData = _props.imageData;

      var belowMaxWidth = function belowMaxWidth() {
        return _react2.default.createElement(_Content2.default, { maxWidth: 300, margin: '120px auto', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, _react2.default.createElement(_Images2.default, { imageData: imageData, width: 300, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }));
      };

      var aboveMaxWidth = function aboveMaxWidth() {
        return _react2.default.createElement(_Content2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, _react2.default.createElement(_Images2.default, { imageData: imageData, width: 200, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }));
      };

      return _react2.default.createElement(_Layout2.default, { href: url.pathname, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_reactMedia2.default, { query: '(max-width: 575px)', render: belowMaxWidth, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement(_reactMedia2.default, { query: '(min-width: 574px)', render: aboveMaxWidth, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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
                return (0, _isomorphicUnfetch2.default)((0, _constants.CLOUDINARY)('chez').URL, options);

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

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ29udGVudCIsIk1vZGFsIiwiQ0xPVURJTkFSWSIsImZldGNoIiwiSW1hZ2VzIiwiTWVkaWEiLCJJbmRleCIsInByb3BzIiwidXJsIiwiaW1hZ2VEYXRhIiwiYmVsb3dNYXhXaWR0aCIsImFib3ZlTWF4V2lkdGgiLCJwYXRobmFtZSIsIm9wdGlvbnMiLCJtZXRob2QiLCJtb2RlIiwiVVJMIiwicmVzb3VyY2VzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFTLEFBQWtCOztBQUUzQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7Ozs7OztJLEFBRWM7Ozs7Ozs7Ozs7OzZCQWVWO21CQUNvQixLQURwQixBQUN5QjtVQUR6QixBQUNDLGFBREQsQUFDQztVQURELEFBQ00sbUJBRE4sQUFDTSxBQUViOztVQUFNLGdCQUFnQixTQUFoQixBQUFnQixnQkFBTSxBQUMxQjsrQkFDRSxBQUFDLG1DQUFRLFVBQVQsQUFBbUIsS0FBSyxRQUF4QixBQUFnQztzQkFBaEM7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsQUFBQyxrQ0FBTyxXQUFSLEFBQW1CLFdBQVcsT0FBOUIsQUFBcUM7c0JBQXJDO3dCQUZKLEFBQ0UsQUFDRSxBQUdMO0FBSEs7O0FBSE4sQUFRQTs7VUFBTSxnQkFBZ0IsU0FBaEIsQUFBZ0IsZ0JBQU0sQUFDMUI7K0JBQ0UsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDRTtBQURGO0FBQUEsU0FBQSxrQkFDRSxBQUFDLGtDQUFPLFdBQVIsQUFBbUIsV0FBVyxPQUE5QixBQUFxQztzQkFBckM7d0JBRkosQUFDRSxBQUNFLEFBR0w7QUFISzs7QUFITixBQVFBOzs2QkFDRSxBQUFDLGtDQUFPLE1BQU0sSUFBZCxBQUFrQjtvQkFBbEI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyxzQ0FBTSxPQUFQLEFBQWEsc0JBQXFCLFFBQWxDLEFBQTBDO29CQUExQztzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHNDQUFNLE9BQVAsQUFBYSxzQkFBcUIsUUFBbEMsQUFBMEM7b0JBQTFDO3NCQUhKLEFBQ0UsQUFFRSxBQUdMO0FBSEs7Ozs7Ozs7Ozs7O21CQW5DRTtBOzBCQUFVLEFBQ04sQUFDUjt3QkFGYyxBQUVSLEE7QUFGUSxBQUNkOzt1QkFJc0IsaUNBQU0sMkJBQUEsQUFBVyxRQUFqQixBQUF5QixLQUF6QixBLEFBQThCOzttQkFBaEQ7QTs7dUJBQ2tCLFVBQVUsQSxBQUFWOzttQkFBbEI7QTs7NkJBRUMsQTtBQUFBLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFYNkIsQTs7a0JBQWQsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhpbG5ndXllbi9EZXNrdG9wL1Byb2plY3RzL25leHQvY2hlel9wb3J0Zm9saW8ifQ==