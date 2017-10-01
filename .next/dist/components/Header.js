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

var _reactMedia = require('react-media');

var _reactMedia2 = _interopRequireDefault(_reactMedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/philnguyen/Desktop/Projects/next/chez_portfolio/components/Header.js';


var headerBar = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  height: 50,
  alignItems: 'center',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0, 0.18)',
  borderTop: '5px solid black',
  position: 'fixed'
};

var navBar = {
  display: 'flex',
  height: 50
};

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
      var href = this.props.href;

      var navigationBar = function navigationBar() {
        return [_react2.default.createElement(_ActiveLink2.default, { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, 'Portfolio'), _react2.default.createElement(_ActiveLink2.default, { href: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, 'About'), _react2.default.createElement(_ActiveLink2.default, { href: '/contact', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, 'Contact')];
      };

      return _react2.default.createElement('header', { style: headerBar, 'data-jsx': 2513838434,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('div', { style: mainTitle, 'data-jsx': 2513838434,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'illa Art Workz Studios')), _react2.default.createElement('nav', { style: navBar, 'data-jsx': 2513838434,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, navigationBar()), _react2.default.createElement(_style2.default, {
        styleId: 2513838434,
        css: 'nav>li{list-style:none;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}header{z-index:1000}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEVyxBQUcrQixBQU9ILGFBQ2YsR0FQYyxZQUNDLDBFQUNNLDZGQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhpbG5ndXllbi9EZXNrdG9wL1Byb2plY3RzL25leHQvY2hlel9wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSAnLi9BY3RpdmVMaW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAncmVhY3QtbWVkaWEnO1xuXG5jb25zdCBoZWFkZXJCYXIgPSB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgaGVpZ2h0OiA1MCxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgYm94U2hhZG93OiAnMCAycHggNHB4IHJnYmEoMCwwLDAsIDAuMTgpJyxcbiAgYm9yZGVyVG9wOiAnNXB4IHNvbGlkIGJsYWNrJyxcbiAgcG9zaXRpb246ICdmaXhlZCdcbn07XG5cbmNvbnN0IG5hdkJhciA9IHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBoZWlnaHQ6IDUwXG59O1xuXG5jb25zdCBtYWluVGl0bGUgPSB7XG4gIGZvbnRGYW1pbHk6ICdSYWxld2F5JyxcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gIGZvbnRTaXplOiAyNSxcbiAgcGFkZGluZ0xlZnQ6IDEwLFxuICBmb250V2VpZ2h0OiAnODAwJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGNvbG9yOiAncmdiKDAsIDAsIDApJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IG5hdmlnYXRpb25CYXIgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICA8QWN0aXZlTGluayBocmVmPVwiL1wiPlBvcnRmb2xpbzwvQWN0aXZlTGluaz4sXG4gICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvQWN0aXZlTGluaz4sXG4gICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3Q8L0FjdGl2ZUxpbms+XG4gICAgICBdO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlciBzdHlsZT17aGVhZGVyQmFyfT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXttYWluVGl0bGV9PmlsbGEgQXJ0IFdvcmt6IFN0dWRpb3M8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxuYXYgc3R5bGU9e25hdkJhcn0+e25hdmlnYXRpb25CYXIoKX08L25hdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIG5hdiA+IGxpIHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2hlYWRlcj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Header.js */'
      }));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIkFjdGl2ZUxpbmsiLCJSb3V0ZXIiLCJNZWRpYSIsImhlYWRlckJhciIsImRpc3BsYXkiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsImJvcmRlclRvcCIsInBvc2l0aW9uIiwibmF2QmFyIiwibWFpblRpdGxlIiwiZm9udEZhbWlseSIsInRleHRUcmFuc2Zvcm0iLCJmb250U2l6ZSIsInBhZGRpbmdMZWZ0IiwiZm9udFdlaWdodCIsImN1cnNvciIsImNvbG9yIiwiSGVhZGVyIiwiaHJlZiIsInByb3BzIiwibmF2aWdhdGlvbkJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBRWhCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU07V0FBWSxBQUNQLEFBQ1Q7U0FGZ0IsQUFFVCxBQUNQO2tCQUhnQixBQUdBLEFBQ2hCO1VBSmdCLEFBSVIsQUFDUjtjQUxnQixBQUtKLEFBQ1o7bUJBTmdCLEFBTUMsQUFDakI7YUFQZ0IsQUFPTCxBQUNYO2FBUmdCLEFBUUwsQUFDWDtZQVRGLEFBQWtCLEFBU047QUFUTSxBQUNoQjs7QUFXRixJQUFNO1dBQVMsQUFDSixBQUNUO1VBRkYsQUFBZSxBQUVMO0FBRkssQUFDYjs7QUFJRixJQUFNO2NBQVksQUFDSixBQUNaO2lCQUZnQixBQUVELEFBQ2Y7WUFIZ0IsQUFHTixBQUNWO2VBSmdCLEFBSUgsQUFDYjtjQUxnQixBQUtKLEFBQ1o7VUFOZ0IsQUFNUixBQUNSO1NBUEYsQUFBa0IsQUFPVDtBQVBTLEFBQ2hCOztJLEFBU21COzs7Ozs7Ozs7Ozs2QkFDVjtVQUFBLEFBQ0MsT0FBUyxLQURWLEFBQ2UsTUFEZixBQUNDLEFBRVI7O1VBQU0sZ0JBQWdCLFNBQWhCLEFBQWdCLGdCQUFNLEFBQzFCO2VBQU8saUJBQ0wsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCO3NCQUFqQjt3QkFBQTtBQUFBO1NBQUEsRUFESyxBQUNMLDhCQUNBLEFBQUMsc0NBQVcsTUFBWixBQUFpQjtzQkFBakI7d0JBQUE7QUFBQTtTQUFBLEVBRkssQUFFTCwwQkFDQSxBQUFDLHNDQUFXLE1BQVosQUFBaUI7c0JBQWpCO3dCQUFBO0FBQUE7U0FBQSxFQUhGLEFBQU8sQUFHTCxBQUVIO0FBTkQsQUFRQTs7NkJBQ0UsY0FBQSxZQUFRLE9BQVIsQUFBZSx1QkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxPQUFMLEFBQVksdUJBQVo7O29CQUFBO3NCQUFBO0FBQUE7U0FGSixBQUNFLEFBQ0UsQUFHRiw0Q0FBQSxjQUFBLFNBQUssT0FBTCxBQUFZLG9CQUFaOztvQkFBQTtzQkFBQSxBQUFxQjtBQUFyQjtTQUxGLEFBS0U7aUJBTEY7YUFERixBQUNFLEFBc0JIO0FBdEJHOzs7OztBQWI4QixBOztrQkFBZixBIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhpbG5ndXllbi9EZXNrdG9wL1Byb2plY3RzL25leHQvY2hlel9wb3J0Zm9saW8ifQ==