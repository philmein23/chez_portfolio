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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactHeadroom = require('react-headroom');

var _reactHeadroom2 = _interopRequireDefault(_reactHeadroom);

var _reactMedia = require('react-media');

var _reactMedia2 = _interopRequireDefault(_reactMedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/philnguyen/Desktop/Projects/next/chez_portfolio/components/Layout.js';


var layout = {
  width: '100%',
  margin: 0,
  padding: 0,
  backgroundColor: '#edebeb',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
};

var main = {
  flex: '1'
};

var footer = {
  height: 50,
  backgroundColor: 'white',
  boxShadow: '0 -1px 4px rgba(0,0,0, 0.18)'
};

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.mediaQueryList = null, _this.state = {
      flexDirection: '',
      height: 50,
      maxWidth: '950px',
      imageWidth: 200,
      margin: '40px auto',
      justifyContent: ''
    }, _this.setMediaUpdate = function () {
      _this.mediaQueryList = window.matchMedia('(min-width: 576px)');

      _this.mediaQueryList.addListener(_this.updateHeaderSettings);
    }, _this.updateHeaderSettings = function (e) {
      if (e.matches) {
        _this.setState({
          flexDirection: '',
          height: 50,
          maxWidth: '950px',
          imageWidth: 200
        });
      } else {
        _this.setState({
          flexDirection: 'column',
          height: 80,
          maxWidth: '350px',
          imageWidth: 300
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setMediaUpdate();

      this.mediaQueryList.matches ? this.setState({ height: 50, flexDirection: '', maxWidth: '950px', imageWidth: 200 }) : this.setState({ height: 80, flexDirection: 'column', maxWidth: '350px', imageWidth: 300 });
    }
  }, {
    key: 'render',
    value: function render() {
      var href = this.props.href;
      var _state = this.state,
          flexDirection = _state.flexDirection,
          height = _state.height,
          maxWidth = _state.maxWidth,
          imageWidth = _state.imageWidth,
          margin = _state.margin,
          justifyContent = _state.justifyContent;

      return _react2.default.createElement('div', { style: layout, className: _style2.default.dynamic([['3666180481', [maxWidth, justifyContent, margin]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('title', {
        className: _style2.default.dynamic([['3666180481', [maxWidth, justifyContent, margin]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Welcome to My Porfolio'), _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
        className: _style2.default.dynamic([['3666180481', [maxWidth, justifyContent, margin]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement('link', {
        href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed',
        rel: 'stylesheet',
        className: _style2.default.dynamic([['3666180481', [maxWidth, justifyContent, margin]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), _react2.default.createElement('link', {
        href: 'https://fonts.googleapis.com/css?family=Raleway:400,700',
        rel: 'stylesheet',
        className: _style2.default.dynamic([['3666180481', [maxWidth, justifyContent, margin]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      })), _react2.default.createElement(_reactHeadroom2.default, { style: { transition: 'all .5s ease-in-out' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_Header2.default, {
        href: href,
        flexDirection: flexDirection,
        height: height,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      })), _react2.default.createElement('main', { style: main, className: _style2.default.dynamic([['3666180481', [maxWidth, justifyContent, margin]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement('section', {
        className: _style2.default.dynamic([['3666180481', [maxWidth, justifyContent, margin]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, this.props.render({ flexDirection: flexDirection, height: height, maxWidth: maxWidth, imageWidth: imageWidth }))), _react2.default.createElement('footer', { style: footer, className: _style2.default.dynamic([['3666180481', [maxWidth, justifyContent, margin]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3666180481',
        css: '*{margin:0;font-family:\'Roboto Condensed\',\'Raleway\',sans-serif;}section{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;background-color:#fff;width:100%;padding:10px 15px;border-radius:5px;box-shadow:0 2px 4px rgba(0,0,0,0.18);max-width:' + maxWidth + ';-webkit-box-pack:' + justifyContent + ';-webkit-justify-content:' + justifyContent + ';-ms-flex-pack:' + justifyContent + ';justify-content:' + justifyContent + ';margin:' + margin + ';}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStHVyxBQUd3QixBQUtJLFNBSnlDLG9EQUN4RCxhQUlpQix5REFDSSxxRUFDRyxzQkFDWCxXQUNPLGtCQUNBLGtCQUN1QixzQ0FDRix1Q0FDTSwyTEFDVCxvQ0FDdEMiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoaWxuZ3V5ZW4vRGVza3RvcC9Qcm9qZWN0cy9uZXh0L2NoZXpfcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkcm9vbSBmcm9tICdyZWFjdC1oZWFkcm9vbSc7XG5cbmltcG9ydCBNZWRpYSBmcm9tICdyZWFjdC1tZWRpYSc7XG5cbmNvbnN0IGxheW91dCA9IHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nOiAwLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWRlYmViJyxcbiAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG59O1xuXG5jb25zdCBtYWluID0ge1xuICBmbGV4OiAnMSdcbn07XG5cblxuY29uc3QgZm9vdGVyID0ge1xuICBoZWlnaHQ6IDUwLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gIGJveFNoYWRvdzogJzAgLTFweCA0cHggcmdiYSgwLDAsMCwgMC4xOCknXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBtZWRpYVF1ZXJ5TGlzdCA9IG51bGw7XG5cbiAgc3RhdGUgPSB7XG4gICAgZmxleERpcmVjdGlvbjogJycsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICBtYXhXaWR0aDogJzk1MHB4JyxcbiAgICBpbWFnZVdpZHRoOiAyMDAsXG4gICAgbWFyZ2luOiAnNDBweCBhdXRvJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJydcbiAgfTtcblxuICBzZXRNZWRpYVVwZGF0ZSA9ICgpID0+IHtcbiAgICB0aGlzLm1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDU3NnB4KScpO1xuXG4gICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcih0aGlzLnVwZGF0ZUhlYWRlclNldHRpbmdzKTtcbiAgfTtcblxuICB1cGRhdGVIZWFkZXJTZXR0aW5ncyA9IGUgPT4ge1xuICAgIGlmIChlLm1hdGNoZXMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnJyxcbiAgICAgICAgaGVpZ2h0OiA1MCxcbiAgICAgICAgbWF4V2lkdGg6ICc5NTBweCcsXG4gICAgICAgIGltYWdlV2lkdGg6IDIwMFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgaGVpZ2h0OiA4MCxcbiAgICAgICAgbWF4V2lkdGg6ICczNTBweCcsXG4gICAgICAgIGltYWdlV2lkdGg6IDMwMFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0TWVkaWFVcGRhdGUoKTtcblxuICAgIHRoaXMubWVkaWFRdWVyeUxpc3QubWF0Y2hlc1xuICAgICAgPyB0aGlzLnNldFN0YXRlKHsgaGVpZ2h0OiA1MCwgZmxleERpcmVjdGlvbjogJycsIG1heFdpZHRoOiAnOTUwcHgnLCBpbWFnZVdpZHRoOiAyMDAgfSlcbiAgICAgIDogdGhpcy5zZXRTdGF0ZSh7IGhlaWdodDogODAsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXhXaWR0aDogJzM1MHB4JywgaW1hZ2VXaWR0aDogMzAwIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGZsZXhEaXJlY3Rpb24sIGhlaWdodCwgbWF4V2lkdGgsIGltYWdlV2lkdGgsIG1hcmdpbiwganVzdGlmeUNvbnRlbnQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17bGF5b3V0fT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPldlbGNvbWUgdG8gTXkgUG9yZm9saW88L3RpdGxlPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6NDAwLDcwMFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPEhlYWRyb29tIHN0eWxlPXt7IHRyYW5zaXRpb246ICdhbGwgLjVzIGVhc2UtaW4tb3V0JyB9fT5cbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj17ZmxleERpcmVjdGlvbn1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZHJvb20+XG5cbiAgICAgICAgPG1haW4gc3R5bGU9e21haW59PlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAge3RoaXMucHJvcHMucmVuZGVyKHsgZmxleERpcmVjdGlvbiwgaGVpZ2h0LCBtYXhXaWR0aCwgaW1hZ2VXaWR0aCB9KX1cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvbWFpbj5cblxuICAgICAgICA8Zm9vdGVyIHN0eWxlPXtmb290ZXJ9IC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogJHttYXhXaWR0aH07XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogJHtqdXN0aWZ5Q29udGVudH07XG4gICAgICAgICAgICAgIG1hcmdpbjogJHttYXJnaW59O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Layout.js */',
        dynamic: [maxWidth, justifyContent, margin]
      }));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZGVyIiwiSGVhZCIsIkhlYWRyb29tIiwiTWVkaWEiLCJsYXlvdXQiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1haW4iLCJmbGV4IiwiZm9vdGVyIiwiaGVpZ2h0IiwiYm94U2hhZG93IiwiTGF5b3V0IiwibWVkaWFRdWVyeUxpc3QiLCJzdGF0ZSIsIm1heFdpZHRoIiwiaW1hZ2VXaWR0aCIsImp1c3RpZnlDb250ZW50Iiwic2V0TWVkaWFVcGRhdGUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJ1cGRhdGVIZWFkZXJTZXR0aW5ncyIsImUiLCJtYXRjaGVzIiwic2V0U3RhdGUiLCJocmVmIiwicHJvcHMiLCJ0cmFuc2l0aW9uIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTTtTQUFTLEFBQ04sQUFDUDtVQUZhLEFBRUwsQUFDUjtXQUhhLEFBR0osQUFDVDttQkFKYSxBQUlJLEFBQ2pCO2FBTGEsQUFLRixBQUNYO1dBTmEsQUFNSixBQUNUO2lCQVBGLEFBQWUsQUFPRTtBQVBGLEFBQ2I7O0FBU0YsSUFBTTtRQUFOLEFBQWEsQUFDTDtBQURLLEFBQ1g7O0FBSUYsSUFBTTtVQUFTLEFBQ0wsQUFDUjttQkFGYSxBQUVJLEFBQ2pCO2FBSEYsQUFBZSxBQUdGO0FBSEUsQUFDYjs7SUFLbUIsQTs7Ozs7Ozs7Ozs7Ozs7NE1BQ25CLEEsaUJBQWlCLEEsWSxBQUVqQjtxQkFBUSxBQUNTLEFBQ2Y7Y0FGTSxBQUVFLEFBQ1I7Z0JBSE0sQUFHSSxBQUNWO2tCQUpNLEFBSU0sQUFDWjtjQUxNLEFBS0UsQUFDUjtzQixBQU5NLEFBTVU7QUFOVixBQUNOLGFBUUYsQSxpQkFBaUIsWUFBTSxBQUNyQjtZQUFBLEFBQUssaUJBQWlCLE9BQUEsQUFBTyxXQUE3QixBQUFzQixBQUFrQixBQUV4Qzs7WUFBQSxBQUFLLGVBQUwsQUFBb0IsWUFBWSxNQUFoQyxBQUFxQyxBQUN0QztBLGEsQUFFRCx1QkFBdUIsYUFBSyxBQUMxQjtVQUFJLEVBQUosQUFBTSxTQUFTLEFBQ2I7Y0FBQSxBQUFLO3lCQUFTLEFBQ0csQUFDZjtrQkFGWSxBQUVKLEFBQ1I7b0JBSFksQUFHRixBQUNWO3NCQUpGLEFBQWMsQUFJQSxBQUVmO0FBTmUsQUFDWjtBQUZKLGFBT08sQUFDTDtjQUFBLEFBQUs7eUJBQVMsQUFDRyxBQUNmO2tCQUZZLEFBRUosQUFDUjtvQkFIWSxBQUdGLEFBQ1Y7c0JBSkYsQUFBYyxBQUlBLEFBRWY7QUFOZSxBQUNaO0FBTUw7QTs7Ozs7d0NBRW1CLEFBQ2xCO1dBQUEsQUFBSyxBQUVMOztXQUFBLEFBQUssZUFBTCxBQUFvQixVQUNoQixLQUFBLEFBQUssU0FBUyxFQUFFLFFBQUYsQUFBVSxJQUFJLGVBQWQsQUFBNkIsSUFBSSxVQUFqQyxBQUEyQyxTQUFTLFlBRHRFLEFBQ0ksQUFBYyxBQUFnRSxTQUM5RSxLQUFBLEFBQUssU0FBUyxFQUFFLFFBQUYsQUFBVSxJQUFJLGVBQWQsQUFBNkIsVUFBVSxVQUF2QyxBQUFpRCxTQUFTLFlBRjVFLEFBRUksQUFBYyxBQUFzRSxBQUN6Rjs7Ozs2QkFFUTtVQUFBLEFBQ0MsT0FBUyxLQURWLEFBQ2UsTUFEZixBQUNDO21CQUN3RSxLQUZ6RSxBQUU4RTtVQUY5RSxBQUVDLHVCQUZELEFBRUM7VUFGRCxBQUVnQixnQkFGaEIsQUFFZ0I7VUFGaEIsQUFFd0Isa0JBRnhCLEFBRXdCO1VBRnhCLEFBRWtDLG9CQUZsQyxBQUVrQztVQUZsQyxBQUU4QyxnQkFGOUMsQUFFOEM7VUFGOUMsQUFFc0Qsd0JBRnRELEFBRXNELEFBRTdEOzs2QkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZLDREQUFaLEFBaURxQixVQWpEckIsQUFrRDJCLGdCQWxEM0IsQUFtRGtCOztvQkFuRGxCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NERBQUEsQUErQ2lCLFVBL0NqQixBQWdEdUIsZ0JBaER2QixBQWlEYzs7b0JBakRkO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQTtjQUFBLEFBQ08sQUFDTDtpQkFGRixBQUVVOzREQUZWLEFBOENpQixVQTlDakIsQUErQ3VCLGdCQS9DdkIsQUFnRGM7O29CQWhEZDtzQkFGRixBQUVFLEFBS0E7QUFMQTtBQUNFO2NBSUYsQUFDTyxBQUNMO2FBRkYsQUFFTTs0REFGTixBQXlDaUIsVUF6Q2pCLEFBMEN1QixnQkExQ3ZCLEFBMkNjOztvQkEzQ2Q7c0JBUEYsQUFPRSxBQUlBO0FBSkE7QUFDRTtjQUdGLEFBQ08sQUFDTDthQUZGLEFBRU07NERBRk4sQUFxQ2lCLFVBckNqQixBQXNDdUIsZ0JBdEN2QixBQXVDYzs7b0JBdkNkO3NCQVpKLEFBQ0UsQUFXRSxBQU1GO0FBTkU7QUFDRSwyQkFLSixBQUFDLHlDQUFTLE9BQU8sRUFBRSxZQUFuQixBQUFpQixBQUFjO29CQUEvQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztjQUFELEFBQ1EsQUFDTjt1QkFGRixBQUVpQixBQUNmO2dCQUhGLEFBR1U7O29CQUhWO3NCQW5CSixBQWtCRSxBQUNFLEFBT0Y7QUFQRTtBQUNFLDJCQU1KLGNBQUEsVUFBTSxPQUFOLEFBQWEsMERBQWIsQUF1Qm1CLFVBdkJuQixBQXdCeUIsZ0JBeEJ6QixBQXlCZ0I7O29CQXpCaEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7NERBQUEsQUFzQmlCLFVBdEJqQixBQXVCdUIsZ0JBdkJ2QixBQXdCYzs7b0JBeEJkO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQUFMLEFBQVcsT0FBTyxFQUFFLGVBQUYsZUFBaUIsUUFBakIsUUFBeUIsVUFBekIsVUFBbUMsWUE1QjVELEFBMEJFLEFBQ0UsQUFDRyxBQUFrQixBQUl2QiwyREFBUSxPQUFSLEFBQWUsNERBQWYsQUFpQm1CLFVBakJuQixBQWtCeUIsZ0JBbEJ6QixBQW1CZ0I7O29CQW5CaEI7c0JBaENGLEFBZ0NFO0FBQUE7O2lCQWhDRjsyWkFBQSxBQWlEcUIsa0NBakRyQixBQWtEMkIsK0NBbEQzQixBQWtEMkIscUNBbEQzQixBQWtEMkIsdUNBbEQzQixBQWtEMkIsOEJBbEQzQixBQW1Ea0IsU0FuRGxCO2tCQUFBLEFBaURxQixVQWpEckIsQUFrRDJCLGdCQW5EN0IsQUFDRSxBQW1Ea0IsQUFNckI7QUF6REc7Ozs7O0FBakQ4QixBOztrQkFBZixBIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhpbG5ndXllbi9EZXNrdG9wL1Byb2plY3RzL25leHQvY2hlel9wb3J0Zm9saW8ifQ==