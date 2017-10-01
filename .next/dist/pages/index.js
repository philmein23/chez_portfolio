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

      return _react2.default.createElement(_Layout2.default, { href: url.pathname, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_reactMedia2.default, { query: '(max-width: 768px)', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, function (matches) {
        return matches ? _react2.default.createElement(_Content2.default, { maxWidth: 450, justifyContent: 'center', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, _react2.default.createElement(_Images2.default, { imageData: imageData, width: 400, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        })) : _react2.default.createElement(_Content2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, _react2.default.createElement(_Images2.default, { imageData: imageData, width: 300, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ29udGVudCIsIk1vZGFsIiwiQ0xPVURJTkFSWSIsImZldGNoIiwiSW1hZ2VzIiwiTWVkaWEiLCJJbmRleCIsInByb3BzIiwidXJsIiwiaW1hZ2VEYXRhIiwicGF0aG5hbWUiLCJtYXRjaGVzIiwib3B0aW9ucyIsIm1ldGhvZCIsIm1vZGUiLCJVUkwiLCJyZXNvdXJjZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBRVQsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SSxBQUVjOzs7Ozs7Ozs7Ozs2QkFlVjttQkFDb0IsS0FEcEIsQUFDeUI7VUFEekIsQUFDQyxhQURELEFBQ0M7VUFERCxBQUNNLG1CQUROLEFBQ00sQUFDYjs7NkJBQ0UsQUFBQyxrQ0FBTyxNQUFNLElBQWQsQUFBa0I7b0JBQWxCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUMsc0NBQU0sT0FBUCxBQUFhO29CQUFiO3NCQUFBLEFBQ0c7QUFESDs0QkFDRzt5Q0FFRyxBQUFDLG1DQUFRLFVBQVQsQUFBbUIsS0FBSyxnQkFBeEIsQUFBd0M7c0JBQXhDO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLEFBQUMsa0NBQU8sV0FBUixBQUFtQixXQUFXLE9BQTlCLEFBQXFDO3NCQUFyQzt3QkFGSixBQUNFLEFBQ0U7QUFBQTtXQUZKLG1CQUtFLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0U7QUFERjtBQUFBLFNBQUEsa0JBQ0UsQUFBQyxrQ0FBTyxXQUFSLEFBQW1CLFdBQVcsT0FBOUIsQUFBcUM7c0JBQXJDO3dCQVBMLEFBTUcsQUFDRTtBQUFBOztBQVZaLEFBQ0UsQUFDRSxBQWNMOzs7Ozs7Ozs7O21CQS9CTztBOzBCQUFVLEFBQ04sQUFDUjt3QkFGYyxBQUVSLEE7QUFGUSxBQUNkOzt1QkFJc0IsaUNBQU0sMkJBQUEsQUFBVyxRQUFqQixBQUF5QixLQUFLLEEsQUFBOUI7O21CQUFsQjtBOzt1QkFDa0IsVUFBQSxBQUFVLEE7O21CQUE1QjtBOzs2QkFFQyxBO0FBQUEsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVg2QixBOztrQkFBZCxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGlsbmd1eWVuL0Rlc2t0b3AvUHJvamVjdHMvbmV4dC9jaGV6X3BvcnRmb2xpbyJ9