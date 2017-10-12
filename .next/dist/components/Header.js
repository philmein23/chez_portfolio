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
        return { flexDirection: flexDirection, height: height };
      };

      var navigationBar = function navigationBar() {
        return [_react2.default.createElement(_ActiveLink2.default, { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, 'Portfolio'), _react2.default.createElement(_ActiveLink2.default, { href: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, 'About'), _react2.default.createElement(_ActiveLink2.default, { href: '/contact', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, 'Contact')];
      };

      return _react2.default.createElement('header', { style: headerBar(flexDirection, height), className: 'jsx-3513162728',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('div', { style: mainTitle, className: 'jsx-3513162728',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'illa Art Workz Studios')), _react2.default.createElement('nav', { style: navBar(height), className: 'jsx-3513162728',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, navigationBar()), _react2.default.createElement(_style2.default, {
        styleId: '3513162728',
        css: 'nav>li{list-style:none;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;box-shadow:0 2px 4px rgba(0,0,0,0.18);border-top:5px solid black;position:fixed;z-index:1000}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDVyxBQUcrQixBQU9ILEFBSUEsZ0JBVkQsWUFDQyw4Q0FNZixBQUlhLFdBQ21CLGlCQVZYLDZGQUNyQixLQVVxQiw2RkFDRyxzQkFDbUIsc0NBQ2QsMkJBQ1osZUFDRixhQUNmIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGlsbmd1eWVuL0Rlc2t0b3AvUHJvamVjdHMvbmV4dC9jaGV6X3BvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQWN0aXZlTGluayBmcm9tICcuL0FjdGl2ZUxpbmsnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IG1haW5UaXRsZSA9IHtcbiAgZm9udEZhbWlseTogJ1JhbGV3YXknLFxuICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgZm9udFNpemU6IDI1LFxuICBwYWRkaW5nTGVmdDogMTAsXG4gIGZvbnRXZWlnaHQ6ICc4MDAnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgY29sb3I6ICdyZ2IoMCwgMCwgMCknXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBocmVmLCBmbGV4RGlyZWN0aW9uID0gJycsIGhlaWdodCA9IDUwIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgbmF2QmFyID0gKCBoZWlnaHQgKSA9PiAoeyBoZWlnaHQgfSk7XG4gICAgY29uc3QgaGVhZGVyQmFyID0gKCBmbGV4RGlyZWN0aW9uLCBoZWlnaHQgKSA9PiAoeyBmbGV4RGlyZWN0aW9uLCBoZWlnaHQgfSk7XG5cbiAgICBjb25zdCBuYXZpZ2F0aW9uQmFyID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9cIj5Qb3J0Zm9saW88L0FjdGl2ZUxpbms+LFxuICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L0FjdGl2ZUxpbms+LFxuICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0PC9BY3RpdmVMaW5rPlxuICAgICAgXTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkZXIgc3R5bGU9e2hlYWRlckJhciggZmxleERpcmVjdGlvbiwgaGVpZ2h0ICl9PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e21haW5UaXRsZX0+aWxsYSBBcnQgV29ya3ogU3R1ZGlvczwvZGl2PlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPG5hdiBzdHlsZT17bmF2QmFyKCBoZWlnaHQgKX0+e25hdmlnYXRpb25CYXIoKX08L25hdj5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgbmF2ID4gbGkge1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Header.js */'
      }));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIkFjdGl2ZUxpbmsiLCJSb3V0ZXIiLCJtYWluVGl0bGUiLCJmb250RmFtaWx5IiwidGV4dFRyYW5zZm9ybSIsImZvbnRTaXplIiwicGFkZGluZ0xlZnQiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiY29sb3IiLCJIZWFkZXIiLCJwcm9wcyIsImhyZWYiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwibmF2QmFyIiwiaGVhZGVyQmFyIiwibmF2aWdhdGlvbkJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBRWhCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU87Ozs7Ozs7OztBQUVQLElBQU07Y0FBWSxBQUNKLEFBQ1o7aUJBRmdCLEFBRUQsQUFDZjtZQUhnQixBQUdOLEFBQ1Y7ZUFKZ0IsQUFJSCxBQUNiO2NBTGdCLEFBS0osQUFDWjtVQU5nQixBQU1SLEFBQ1I7U0FQRixBQUFrQixBQU9UO0FBUFMsQUFDaEI7O0lBU21CLEE7Ozs7Ozs7Ozs7OzZCQUNWO21CQUMyQyxLQUQzQyxBQUNnRDtVQURoRCxBQUNDLGNBREQsQUFDQzt3Q0FERCxBQUNPO1VBRFAsQUFDTyxxREFEUCxBQUN1QixLQUR2QjtpQ0FBQSxBQUMyQjtVQUQzQixBQUMyQix1Q0FEM0IsQUFDb0MsS0FFM0M7O1VBQU0sU0FBUyxTQUFULEFBQVMsT0FBQSxBQUFFLFFBQUY7ZUFBZSxFQUFFLFFBQWpCLEFBQWU7QUFBOUIsQUFDQTtVQUFNLFlBQVksU0FBWixBQUFZLFVBQUEsQUFBRSxlQUFGLEFBQWlCLFFBQWpCO2VBQThCLEVBQUUsZUFBRixlQUFpQixRQUEvQyxBQUE4QjtBQUFoRCxBQUVBOztVQUFNLGdCQUFnQixTQUFoQixBQUFnQixnQkFBTSxBQUMxQjtlQUFPLGlCQUNMLEFBQUMsc0NBQVcsTUFBWixBQUFpQjtzQkFBakI7d0JBQUE7QUFBQTtTQUFBLEVBREssQUFDTCw4QkFDQSxBQUFDLHNDQUFXLE1BQVosQUFBaUI7c0JBQWpCO3dCQUFBO0FBQUE7U0FBQSxFQUZLLEFBRUwsMEJBQ0EsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCO3NCQUFqQjt3QkFBQTtBQUFBO1NBQUEsRUFIRixBQUFPLEFBR0wsQUFFSDtBQU5ELEFBUUE7OzZCQUNFLGNBQUEsWUFBUSxPQUFPLFVBQUEsQUFBVyxlQUExQixBQUFlLEFBQTBCLG9CQUF6Qzs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxPQUFMLEFBQVksc0JBQVo7O29CQUFBO3NCQUFBO0FBQUE7U0FGSixBQUNFLEFBQ0UsQUFHRiw0Q0FBQSxjQUFBLFNBQUssT0FBTyxPQUFaLEFBQVksQUFBUSxvQkFBcEI7O29CQUFBO3NCQUFBLEFBQStCO0FBQS9CO1NBTEYsQUFLRTtpQkFMRjthQURGLEFBQ0UsQUFtQ0g7QUFuQ0c7Ozs7O0FBaEI4QixBOztrQkFBZixBIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhpbG5ndXllbi9EZXNrdG9wL1Byb2plY3RzL25leHQvY2hlel9wb3J0Zm9saW8ifQ==