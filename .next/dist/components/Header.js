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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _ActiveLink = require('./ActiveLink');

var _ActiveLink2 = _interopRequireDefault(_ActiveLink);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/philnguyen/Desktop/Projects/next/chez_portfolio/components/Header.js';


var mainTitle = {
  fontFamily: 'Raleway',
  textTransform: 'uppercase',
  fontSize: 25,
  paddingLeft: 10,
  fontWeight: '800',
  cursor: 'pointer',
  color: 'rgb(0, 0, 0)'
};

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          href = _props.href,
          _props$flexDirection = _props.flexDirection,
          flexDirection = _props$flexDirection === undefined ? '' : _props$flexDirection,
          _props$height = _props.height,
          height = _props$height === undefined ? 50 : _props$height;

      var navBar = function navBar(height) {
        return { height: height };
      };
      var headerBar = function headerBar(flexDirection, height) {
        return {
          flexDirection: flexDirection,
          height: height
        };
      };

      var navigationBar = function navigationBar() {
        return [_react2.default.createElement(_ActiveLink2.default, { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, 'Portfolio'), _react2.default.createElement(_ActiveLink2.default, { href: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, 'About'), _react2.default.createElement(_ActiveLink2.default, { href: '/contact', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, 'Contact')];
      };

      return _react2.default.createElement('header', { style: headerBar(flexDirection, height), className: 'jsx-2802834948',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('div', { style: mainTitle, className: 'jsx-2802834948',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'illa Art Workz Studios')), _react2.default.createElement('nav', { style: navBar(height), className: 'jsx-2802834948',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, navigationBar()), _react2.default.createElement(_style2.default, {
        styleId: '2802834948',
        css: 'nav>li{list-style:none;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;box-shadow:0 2px 4px rgba(0,0,0,0.18);border-top:5px solid black;z-index:1000;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDVyxBQUcrQixBQU9ILEFBSUEsZ0JBVkQsWUFDQyw4Q0FNZixBQUlhLFdBQ21CLGlCQVZYLDZGQUNyQixLQVVxQiw2RkFDRyxzQkFDbUIsc0NBQ2QsMkJBQ2QsYUFDZiIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhpbG5ndXllbi9EZXNrdG9wL1Byb2plY3RzL25leHQvY2hlel9wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSAnLi9BY3RpdmVMaW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBtYWluVGl0bGUgPSB7XG4gIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gIGZvbnRTaXplOiAyNSxcbiAgcGFkZGluZ0xlZnQ6IDEwLFxuICBmb250V2VpZ2h0OiAnODAwJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGNvbG9yOiAncmdiKDAsIDAsIDApJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaHJlZiwgZmxleERpcmVjdGlvbiA9ICcnLCBoZWlnaHQgPSA1MCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IG5hdkJhciA9IGhlaWdodCA9PiAoeyBoZWlnaHQgfSk7XG4gICAgY29uc3QgaGVhZGVyQmFyID0gKGZsZXhEaXJlY3Rpb24sIGhlaWdodCkgPT4gKHtcbiAgICAgIGZsZXhEaXJlY3Rpb24sXG4gICAgICBoZWlnaHRcbiAgICB9KTtcblxuICAgIGNvbnN0IG5hdmlnYXRpb25CYXIgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL1wiPlBvcnRmb2xpbzwvQWN0aXZlTGluaz4sXG4gICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvQWN0aXZlTGluaz4sXG4gICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3Q8L0FjdGl2ZUxpbms+XG4gICAgICBdO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlciBzdHlsZT17aGVhZGVyQmFyKGZsZXhEaXJlY3Rpb24sIGhlaWdodCl9PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e21haW5UaXRsZX0+aWxsYSBBcnQgV29ya3ogU3R1ZGlvczwvZGl2PlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPG5hdiBzdHlsZT17bmF2QmFyKGhlaWdodCl9PntuYXZpZ2F0aW9uQmFyKCl9PC9uYXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIG5hdiA+IGxpIHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2hlYWRlcj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Header.js */'
      }));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIkFjdGl2ZUxpbmsiLCJSb3V0ZXIiLCJtYWluVGl0bGUiLCJmb250RmFtaWx5IiwidGV4dFRyYW5zZm9ybSIsImZvbnRTaXplIiwicGFkZGluZ0xlZnQiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiY29sb3IiLCJIZWFkZXIiLCJwcm9wcyIsImhyZWYiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwibmF2QmFyIiwiaGVhZGVyQmFyIiwibmF2aWdhdGlvbkJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBRWhCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU87Ozs7Ozs7OztBQUVQLElBQU07Y0FBWSxBQUNKLEFBQ1o7aUJBRmdCLEFBRUQsQUFDZjtZQUhnQixBQUdOLEFBQ1Y7ZUFKZ0IsQUFJSCxBQUNiO2NBTGdCLEFBS0osQUFDWjtVQU5nQixBQU1SLEFBQ1I7U0FQRixBQUFrQixBQU9UO0FBUFMsQUFDaEI7O0lBU21CLEE7Ozs7Ozs7Ozs7OzZCQUNWO21CQUMyQyxLQUQzQyxBQUNnRDtVQURoRCxBQUNDLGNBREQsQUFDQzt3Q0FERCxBQUNPO1VBRFAsQUFDTyxxREFEUCxBQUN1QixLQUR2QjtpQ0FBQSxBQUMyQjtVQUQzQixBQUMyQix1Q0FEM0IsQUFDb0MsS0FFM0M7O1VBQU0sU0FBUyxTQUFULEFBQVMsZUFBQTtlQUFXLEVBQUUsUUFBYixBQUFXO0FBQTFCLEFBQ0E7VUFBTSxZQUFZLFNBQVosQUFBWSxVQUFBLEFBQUMsZUFBRCxBQUFnQixRQUFoQjs7eUJBQTRCLEFBRTVDO2tCQUZnQixBQUE0QjtBQUFBLEFBQzVDO0FBREYsQUFLQTs7VUFBTSxnQkFBZ0IsU0FBaEIsQUFBZ0IsZ0JBQU0sQUFDMUI7ZUFBTyxpQkFDTCxBQUFDLHNDQUFXLE1BQVosQUFBaUI7c0JBQWpCO3dCQUFBO0FBQUE7U0FBQSxFQURLLEFBQ0wsOEJBQ0EsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCO3NCQUFqQjt3QkFBQTtBQUFBO1NBQUEsRUFGSyxBQUVMLDBCQUNBLEFBQUMsc0NBQVcsTUFBWixBQUFpQjtzQkFBakI7d0JBQUE7QUFBQTtTQUFBLEVBSEYsQUFBTyxBQUdMLEFBRUg7QUFORCxBQVFBOzs2QkFDRSxjQUFBLFlBQVEsT0FBTyxVQUFBLEFBQVUsZUFBekIsQUFBZSxBQUF5QixvQkFBeEM7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO29CQUFYO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZLHNCQUFaOztvQkFBQTtzQkFBQTtBQUFBO1NBRkosQUFDRSxBQUNFLEFBR0YsNENBQUEsY0FBQSxTQUFLLE9BQU8sT0FBWixBQUFZLEFBQU8sb0JBQW5COztvQkFBQTtzQkFBQSxBQUE2QjtBQUE3QjtTQUxGLEFBS0U7aUJBTEY7YUFERixBQUNFLEFBa0NIO0FBbENHOzs7OztBQW5COEIsQTs7a0JBQWYsQSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoaWxuZ3V5ZW4vRGVza3RvcC9Qcm9qZWN0cy9uZXh0L2NoZXpfcG9ydGZvbGlvIn0=