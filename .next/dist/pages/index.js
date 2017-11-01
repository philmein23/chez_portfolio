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

var _constants = require('../constants/constants');

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _Images = require('../components/Images');

var _Images2 = _interopRequireDefault(_Images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/philnguyen/Desktop/Projects/next/chez_portfolio/pages/index.js?entry';


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      width: 200,
      contentMaxWidth: '950px'
    }, _this.setMediaUpdate = function () {
      _this.mediaQueryList = window.matchMedia('(min-width: 576px)');

      _this.mediaQueryList.addListener(_this.updateWidth);
    }, _this.updateWidth = function (e) {
      if (e.matches) {
        _this.setState({
          width: 200,
          contentMaxWidth: '950px'
        });
      } else {
        _this.setState({
          width: 300,
          contentMaxWidth: '350px'
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mediaQueryList.removeListener(this.updateWidth);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setMediaUpdate();

      this.mediaQueryList.matches ? this.setState({ width: 200, contentMaxWidth: '950px' }) : this.setState({ width: 300, contentMaxWidth: '350px' });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          url = _props.url,
          imageData = _props.imageData;
      var _state = this.state,
          width = _state.width,
          contentMaxWidth = _state.contentMaxWidth;

      console.log(imageData);
      return _react2.default.createElement(_Layout2.default, { href: url.pathname, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_Content2.default, { maxWidth: contentMaxWidth, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_Images2.default, { imageData: imageData, width: width, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ29udGVudCIsIkNMT1VESU5BUlkiLCJmZXRjaCIsIkltYWdlcyIsIkluZGV4Iiwic3RhdGUiLCJ3aWR0aCIsImNvbnRlbnRNYXhXaWR0aCIsInNldE1lZGlhVXBkYXRlIiwibWVkaWFRdWVyeUxpc3QiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJ1cGRhdGVXaWR0aCIsImUiLCJtYXRjaGVzIiwic2V0U3RhdGUiLCJyZW1vdmVMaXN0ZW5lciIsInByb3BzIiwidXJsIiwiaW1hZ2VEYXRhIiwiY29uc29sZSIsImxvZyIsInBhdGhuYW1lIiwib3B0aW9ucyIsIm1ldGhvZCIsIm1vZGUiLCJVUkwiLCJyZXNvdXJjZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBRWhCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFrQjs7QUFFM0IsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRUUsQTs7Ozs7Ozs7Ozs7Ozs7ME1BZW5CLEE7YUFBUSxBQUNDLEFBQ1A7dUJBRk0sQSxBQUVXO0FBRlgsQUFDTixhQUlGLEEsaUJBQWlCLFlBQU0sQUFDckI7WUFBQSxBQUFLLGlCQUFpQixPQUFBLEFBQU8sV0FBN0IsQUFBc0IsQUFBa0IsQUFFeEM7O1lBQUEsQUFBSyxlQUFMLEFBQW9CLFlBQVksTUFBaEMsQUFBcUMsQUFDdEM7QSxhQUVELEEsY0FBYyxhQUFLLEFBQ2pCO1VBQUksRUFBSixBQUFNLFNBQVMsQUFDYjtjQUFBLEFBQUs7aUJBQVMsQUFDTCxBQUNQOzJCQUZGLEFBQWMsQUFFSyxBQUVwQjtBQUplLEFBQ1o7QUFGSixhQUtPLEFBQ0w7Y0FBQSxBQUFLO2lCQUFTLEFBQ0wsQUFDUDsyQkFGRixBQUFjLEFBRUssQUFFcEI7QUFKZSxBQUNaO0FBSUw7QTs7Ozs7MkNBRXNCLEFBQ3JCO1dBQUEsQUFBSyxlQUFMLEFBQW9CLGVBQWUsS0FBbkMsQUFBd0MsQUFDekM7Ozs7d0NBRW1CLEFBQ2xCO1dBQUEsQUFBSyxBQUVMOztXQUFBLEFBQUssZUFBTCxBQUFvQixVQUNoQixLQUFBLEFBQUssU0FBUyxFQUFFLE9BQUYsQUFBUyxLQUFLLGlCQURoQyxBQUNJLEFBQWMsQUFBK0IsYUFDN0MsS0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFGLEFBQVMsS0FBSyxpQkFGaEMsQUFFSSxBQUFjLEFBQStCLEFBQ2xEOzs7OzZCQUVRO21CQUNvQixLQURwQixBQUN5QjtVQUR6QixBQUNDLGFBREQsQUFDQztVQURELEFBQ00sbUJBRE4sQUFDTTttQkFDc0IsS0FGNUIsQUFFaUM7VUFGakMsQUFFQyxlQUZELEFBRUM7VUFGRCxBQUVRLHlCQUZSLEFBRVEsQUFDZjs7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaOzZCQUNFLEFBQUMsa0NBQU8sTUFBTSxJQUFkLEFBQWtCO29CQUFsQjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDLG1DQUFRLFVBQVQsQUFBbUI7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLGtDQUFPLFdBQVIsQUFBbUIsV0FBVyxPQUE5QixBQUFxQztvQkFBckM7c0JBSE4sQUFDRSxBQUNFLEFBQ0UsQUFJUDtBQUpPOzs7Ozs7Ozs7OzttQkF6REE7QTswQkFBVSxBQUNOLEFBQ1I7d0JBRmMsQUFFUixBO0FBRlEsQUFDZDs7dUJBSXNCLGlDQUFNLDJCQUFBLEFBQVcsUUFBakIsQUFBeUIsS0FBekIsQUFBOEIsQTs7bUJBQWhEO0E7O3VCQUNrQixVQUFBLEFBQVUsQTs7bUJBQTVCO0E7OzZCLEFBRUM7QUFBQSxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWDZCLEE7O2tCQUFkLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoaWxuZ3V5ZW4vRGVza3RvcC9Qcm9qZWN0cy9uZXh0L2NoZXpfcG9ydGZvbGlvIn0=