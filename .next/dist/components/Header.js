'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _style = require('next/node_modules/styled-jsx/style.js');

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

      return _react2.default.createElement('header', { style: headerBar(flexDirection, height), 'data-jsx': 1801173671,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('div', { style: mainTitle, 'data-jsx': 1801173671,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'illa Art Workz Studios')), _react2.default.createElement('nav', { style: navBar(height), 'data-jsx': 1801173671,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, navigationBar()), _react2.default.createElement(_style2.default, {
        styleId: 1801173671,
        css: 'nav>li{list-style:none;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;box-shadow:0 2px 4px rgba(0,0,0,0.18);border-top:5px solid black;position:fixed;z-index:1000}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDVyxBQUcrQixBQU9ILEFBSUEsZ0JBVkQsWUFDQyw4Q0FNZixBQUlhLFdBQ21CLGlCQVZYLDZGQUNyQixpQkFVcUIsNkZBQ0csc0JBQ21CLHNDQUNkLDJCQUNaLGVBQ0YsYUFDZiIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhpbG5ndXllbi9EZXNrdG9wL1Byb2plY3RzL25leHQvY2hlel9wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSAnLi9BY3RpdmVMaW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBtYWluVGl0bGUgPSB7XG4gIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gIGZvbnRTaXplOiAyNSxcbiAgcGFkZGluZ0xlZnQ6IDEwLFxuICBmb250V2VpZ2h0OiAnODAwJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGNvbG9yOiAncmdiKDAsIDAsIDApJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaHJlZiwgZmxleERpcmVjdGlvbiA9ICcnLCBoZWlnaHQgPSA1MCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IG5hdkJhciA9ICggaGVpZ2h0ICkgPT4gKHsgaGVpZ2h0IH0pO1xuICAgIGNvbnN0IGhlYWRlckJhciA9ICggZmxleERpcmVjdGlvbiwgaGVpZ2h0ICkgPT4gKHsgZmxleERpcmVjdGlvbiwgaGVpZ2h0IH0pO1xuXG4gICAgY29uc3QgbmF2aWdhdGlvbkJhciA9ICgpID0+IHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvXCI+UG9ydGZvbGlvPC9BY3RpdmVMaW5rPixcbiAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9BY3RpdmVMaW5rPixcbiAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvQWN0aXZlTGluaz5cbiAgICAgIF07XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8aGVhZGVyIHN0eWxlPXtoZWFkZXJCYXIoIGZsZXhEaXJlY3Rpb24sIGhlaWdodCApfT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXttYWluVGl0bGV9PmlsbGEgQXJ0IFdvcmt6IFN0dWRpb3M8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxuYXYgc3R5bGU9e25hdkJhciggaGVpZ2h0ICl9PntuYXZpZ2F0aW9uQmFyKCl9PC9uYXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIG5hdiA+IGxpIHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvaGVhZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Header.js */'
      }));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIkFjdGl2ZUxpbmsiLCJSb3V0ZXIiLCJtYWluVGl0bGUiLCJmb250RmFtaWx5IiwidGV4dFRyYW5zZm9ybSIsImZvbnRTaXplIiwicGFkZGluZ0xlZnQiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiY29sb3IiLCJIZWFkZXIiLCJwcm9wcyIsImhyZWYiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwibmF2QmFyIiwiaGVhZGVyQmFyIiwibmF2aWdhdGlvbkJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBRWhCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTTtjQUFZLEFBQ0osQUFDWjtpQkFGZ0IsQUFFRCxBQUNmO1lBSGdCLEFBR04sQUFDVjtlQUpnQixBQUlILEFBQ2I7Y0FMZ0IsQUFLSixBQUNaO1VBTmdCLEFBTVIsQUFDUjtTQVBGLEFBQWtCLEFBT1Q7QUFQUyxBQUNoQjs7SUFTbUIsQTs7Ozs7Ozs7Ozs7NkJBQ1Y7bUJBQzJDLEtBRDNDLEFBQ2dEO1VBRGhELEFBQ0MsY0FERCxBQUNDO3dDQURELEFBQ087VUFEUCxBQUNPLHFEQURQLEFBQ3VCLEtBRHZCO2lDQUFBLEFBQzJCO1VBRDNCLEFBQzJCLHVDQUQzQixBQUNvQyxLQUUzQzs7VUFBTSxTQUFTLFNBQVQsQUFBUyxPQUFBLEFBQUUsUUFBRjtlQUFlLEVBQUUsUUFBakIsQUFBZTtBQUE5QixBQUNBO1VBQU0sWUFBWSxTQUFaLEFBQVksVUFBQSxBQUFFLGVBQUYsQUFBaUIsUUFBakI7ZUFBOEIsRUFBRSxlQUFGLGVBQWlCLFFBQS9DLEFBQThCO0FBQWhELEFBRUE7O1VBQU0sZ0JBQWdCLFNBQWhCLEFBQWdCLGdCQUFNLEFBQzFCO2VBQU8saUJBQ0wsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCO3NCQUFqQjt3QkFBQTtBQUFBO1NBQUEsRUFESyxBQUNMLDhCQUNBLEFBQUMsc0NBQVcsTUFBWixBQUFpQjtzQkFBakI7d0JBQUE7QUFBQTtTQUFBLEVBRkssQUFFTCwwQkFDQSxBQUFDLHNDQUFXLE1BQVosQUFBaUI7c0JBQWpCO3dCQUFBO0FBQUE7U0FBQSxFQUhGLEFBQU8sQUFHTCxBQUVIO0FBTkQsQUFRQTs7NkJBQ0UsY0FBQSxZQUFRLE9BQU8sVUFBQSxBQUFXLGVBQTFCLEFBQWUsQUFBMEIscUJBQXpDOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLE9BQUwsQUFBWSx1QkFBWjs7b0JBQUE7c0JBQUE7QUFBQTtTQUZKLEFBQ0UsQUFDRSxBQUdGLDRDQUFBLGNBQUEsU0FBSyxPQUFPLE9BQVosQUFBWSxBQUFRLHFCQUFwQjs7b0JBQUE7c0JBQUEsQUFBK0I7QUFBL0I7U0FMRixBQUtFO2lCQUxGO2FBREYsQUFDRSxBQW1DSDtBQW5DRzs7Ozs7QUFoQjhCLEE7O2tCQUFmLEEiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGlsbmd1eWVuL0Rlc2t0b3AvUHJvamVjdHMvbmV4dC9jaGV6X3BvcnRmb2xpbyJ9