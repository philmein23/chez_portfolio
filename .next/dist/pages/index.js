'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ29udGVudCIsIk1vZGFsIiwiQ0xPVURJTkFSWSIsImZldGNoIiwiSW1hZ2VzIiwiTWVkaWEiLCJJbmRleCIsInByb3BzIiwidXJsIiwiaW1hZ2VEYXRhIiwiYmVsb3dNYXhXaWR0aCIsImFib3ZlTWF4V2lkdGgiLCJwYXRobmFtZSIsIm9wdGlvbnMiLCJtZXRob2QiLCJtb2RlIiwiVVJMIiwicmVzb3VyY2VzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUVULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0lBRWMsQTs7Ozs7Ozs7Ozs7NkJBZVY7bUJBQ29CLEtBRHBCLEFBQ3lCO1VBRHpCLEFBQ0MsYUFERCxBQUNDO1VBREQsQUFDTSxtQkFETixBQUNNLEFBRWI7O1VBQU0sZ0JBQWdCLFNBQWhCLEFBQWdCLGdCQUFNLEFBQzFCOytCQUNFLEFBQUMsbUNBQVEsVUFBVCxBQUFtQixLQUFLLFFBQXhCLEFBQWdDO3NCQUFoQzt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRSxBQUFDLGtDQUFPLFdBQVIsQUFBbUIsV0FBVyxPQUE5QixBQUFxQztzQkFBckM7d0JBRkosQUFDRSxBQUNFLEFBR0w7QUFISzs7QUFITixBQVFBOztVQUFNLGdCQUFnQixTQUFoQixBQUFnQixnQkFBTSxBQUMxQjsrQkFDRSxBQUFDOztzQkFBRDt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGtCQUNFLEFBQUMsa0NBQU8sV0FBUixBQUFtQixXQUFXLE9BQTlCLEFBQXFDO3NCQUFyQzt3QkFGSixBQUNFLEFBQ0UsQUFHTDtBQUhLOztBQUhOLEFBUUE7OzZCQUNFLEFBQUMsa0NBQU8sTUFBTSxJQUFkLEFBQWtCO29CQUFsQjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDLHNDQUFNLE9BQVAsQUFBYSxzQkFBcUIsUUFBbEMsQUFBMEM7b0JBQTFDO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUMsc0NBQU0sT0FBUCxBQUFhLHNCQUFxQixRQUFsQyxBQUEwQztvQkFBMUM7c0JBSEosQUFDRSxBQUVFLEFBR0w7QUFISzs7Ozs7Ozs7Ozs7bUJBbkNFO0E7MEJBQVUsQUFDTixBQUNSO3dCQUZjLEFBRVIsQTtBQUZRLEFBQ2Q7O3VCQUlzQixpQ0FBTSwyQkFBQSxBQUFXLFFBQWpCLEFBQXlCLEtBQXpCLEFBQThCLEE7O21CQUFoRDtBOzt1QkFDa0IsVSxBQUFBLEFBQVU7O21CQUE1QjtBOzs2QixBQUVDO0FBQUEsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVg2QixBOztrQkFBZCxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGlsbmd1eWVuL0Rlc2t0b3AvUHJvamVjdHMvbmV4dC9jaGV6X3BvcnRmb2xpbyJ9