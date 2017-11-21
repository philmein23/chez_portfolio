'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _CloudinaryImage = require('../components/CloudinaryImage');

var _CloudinaryImage2 = _interopRequireDefault(_CloudinaryImage);

var _Images = require('../components/Images');

var _Images2 = _interopRequireDefault(_Images);

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
      var url = this.props.url;

      return _react2.default.createElement(_Layout2.default, {
        href: url.pathname,
        render: function render(_ref) {
          var imageWidth = _ref.imageWidth;
          return _react2.default.createElement(_CloudinaryImage2.default, {
            render: function render(_ref2) {
              var imageData = _ref2.imageData,
                  error = _ref2.error;
              return error ? _react2.default.createElement('div', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                }
              }, 'Error at ', error) : imageData ? _react2.default.createElement(_Images2.default, { imageData: imageData, width: imageWidth, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              }) : _react2.default.createElement('div', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                }
              }, 'Loading...');
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      });
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2xvdWRpbmFyeUltYWdlIiwiSW1hZ2VzIiwiSW5kZXgiLCJ1cmwiLCJwcm9wcyIsInBhdGhuYW1lIiwiaW1hZ2VXaWR0aCIsImltYWdlRGF0YSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUVoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFPLEFBQVk7Ozs7Ozs7OztJQUVFLEE7Ozs7Ozs7Ozs7OzZCQUNWO1VBQUEsQUFDQyxNQUFRLEtBRFQsQUFDYyxNQURkLEFBQ0MsQUFDUjs7NkJBQ0UsQUFBQztjQUNPLElBRFIsQUFDWSxBQUNWO2dCQUFRLHNCQUFBO2NBQUEsQUFBRyxrQkFBSCxBQUFHO2lDQUNULEFBQUM7b0JBQ1MsdUJBQUE7a0JBQUEsQUFBRyxrQkFBSCxBQUFHO2tCQUFILEFBQWMsY0FBZCxBQUFjO3FCQUNwQix3QkFDRSxjQUFBOzs0QkFBQTs4QkFBQTtBQUFBO0FBQUEsZUFBQSxFQUFlLGFBRGpCLEFBQ0UscUNBRUEsQUFBQyxrQ0FBTyxXQUFSLEFBQW1CLFdBQVcsT0FBOUIsQUFBcUM7NEJBQXJDOzhCQURFLEFBQ0Y7QUFBQTtlQUFBLENBREUsbUJBR0YsY0FBQTs7NEJBQUE7OEJBQUE7QUFBQTtBQUFBLGVBQUEsRUFOSSxBQU1KO0FBUE47O3dCQUFBOzBCQURNLEFBQ047QUFBQTtBQUNFLFdBREY7QUFISjs7b0JBQUE7c0JBREYsQUFDRSxBQWdCSDtBQWhCRztBQUNFLE9BREY7Ozs7O0FBSjZCLEE7O2tCQUFkLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoaWxuZ3V5ZW4vRGVza3RvcC9Qcm9qZWN0cy9uZXh0L2NoZXpfcG9ydGZvbGlvIn0=