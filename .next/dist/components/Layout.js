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
      height: 50
    }, _this.setMediaUpdate = function () {
      _this.mediaQueryList = window.matchMedia('(min-width: 576px)');

      _this.mediaQueryList.addListener(_this.updateHeaderSettings);
    }, _this.updateHeaderSettings = function (e) {
      if (e.matches) {
        _this.setState({
          flexDirection: '',
          height: 50
        });
      } else {
        _this.setState({
          flexDirection: 'column',
          height: 80
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setMediaUpdate();

      this.mediaQueryList.matches ? this.setState({ height: 50, flexDirection: '' }) : this.setState({ height: 80, flexDirection: 'column' });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          href = _props.href;

      console.log(this.props);
      var _state = this.state,
          flexDirection = _state.flexDirection,
          height = _state.height;

      return _react2.default.createElement('div', { style: layout, className: 'jsx-3086762021',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('title', {
        className: 'jsx-3086762021',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Welcome to My Porfolio'), _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
        className: 'jsx-3086762021',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement('link', {
        href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed',
        rel: 'stylesheet',
        className: 'jsx-3086762021',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react2.default.createElement('link', {
        href: 'https://fonts.googleapis.com/css?family=Raleway:400,700',
        rel: 'stylesheet',
        className: 'jsx-3086762021',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      })), _react2.default.createElement(_reactHeadroom2.default, { style: { transition: 'all .5s ease-in-out' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_Header2.default, {
        href: href,
        flexDirection: flexDirection,
        height: height,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      })), _react2.default.createElement('main', { style: main, className: 'jsx-3086762021',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, children), _react2.default.createElement('footer', { style: footer, className: 'jsx-3086762021',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3086762021',
        css: '*{margin:0;font-family:\'Roboto Condensed\',\'Raleway\',sans-serif;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1HVyxBQUd3QixTQUM2QyxvREFDeEQiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoaWxuZ3V5ZW4vRGVza3RvcC9Qcm9qZWN0cy9uZXh0L2NoZXpfcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkcm9vbSBmcm9tICdyZWFjdC1oZWFkcm9vbSc7XG5cbmltcG9ydCBNZWRpYSBmcm9tICdyZWFjdC1tZWRpYSc7XG5cbmNvbnN0IGxheW91dCA9IHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nOiAwLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWRlYmViJyxcbiAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG59O1xuXG5jb25zdCBtYWluID0ge1xuICBmbGV4OiAnMSdcbn07XG5cbmNvbnN0IGZvb3RlciA9IHtcbiAgaGVpZ2h0OiA1MCxcbiAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICBib3hTaGFkb3c6ICcwIC0xcHggNHB4IHJnYmEoMCwwLDAsIDAuMTgpJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgbWVkaWFRdWVyeUxpc3QgPSBudWxsO1xuXG4gIHN0YXRlID0ge1xuICAgIGZsZXhEaXJlY3Rpb246ICcnLFxuICAgIGhlaWdodDogNTBcbiAgfTtcblxuICBzZXRNZWRpYVVwZGF0ZSA9ICgpID0+IHtcbiAgICB0aGlzLm1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDU3NnB4KScpO1xuXG4gICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcih0aGlzLnVwZGF0ZUhlYWRlclNldHRpbmdzKTtcbiAgfTtcblxuICB1cGRhdGVIZWFkZXJTZXR0aW5ncyA9IGUgPT4ge1xuICAgIGlmIChlLm1hdGNoZXMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnJyxcbiAgICAgICAgaGVpZ2h0OiA1MFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgaGVpZ2h0OiA4MFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0TWVkaWFVcGRhdGUoKTtcblxuICAgIHRoaXMubWVkaWFRdWVyeUxpc3QubWF0Y2hlc1xuICAgICAgPyB0aGlzLnNldFN0YXRlKHsgaGVpZ2h0OiA1MCwgZmxleERpcmVjdGlvbjogJycgfSlcbiAgICAgIDogdGhpcy5zZXRTdGF0ZSh7IGhlaWdodDogODAsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGhyZWYgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gICAgY29uc3QgeyBmbGV4RGlyZWN0aW9uLCBoZWlnaHQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17bGF5b3V0fT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPldlbGNvbWUgdG8gTXkgUG9yZm9saW88L3RpdGxlPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6NDAwLDcwMFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPEhlYWRyb29tIHN0eWxlPXt7IHRyYW5zaXRpb246ICdhbGwgLjVzIGVhc2UtaW4tb3V0JyB9fT5cbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj17ZmxleERpcmVjdGlvbn1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZHJvb20+XG5cbiAgICAgICAgPG1haW4gc3R5bGU9e21haW59PntjaGlsZHJlbn08L21haW4+XG5cbiAgICAgICAgPGZvb3RlciBzdHlsZT17Zm9vdGVyfSAvPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Layout.js */'
      }));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZGVyIiwiSGVhZCIsIkhlYWRyb29tIiwiTWVkaWEiLCJsYXlvdXQiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1haW4iLCJmbGV4IiwiZm9vdGVyIiwiaGVpZ2h0IiwiYm94U2hhZG93IiwiTGF5b3V0IiwibWVkaWFRdWVyeUxpc3QiLCJzdGF0ZSIsInNldE1lZGlhVXBkYXRlIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwidXBkYXRlSGVhZGVyU2V0dGluZ3MiLCJlIiwibWF0Y2hlcyIsInNldFN0YXRlIiwicHJvcHMiLCJjaGlsZHJlbiIsImhyZWYiLCJjb25zb2xlIiwibG9nIiwidHJhbnNpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU07U0FBUyxBQUNOLEFBQ1A7VUFGYSxBQUVMLEFBQ1I7V0FIYSxBQUdKLEFBQ1Q7bUJBSmEsQUFJSSxBQUNqQjthQUxhLEFBS0YsQUFDWDtXQU5hLEFBTUosQUFDVDtpQkFQRixBQUFlLEFBT0U7QUFQRixBQUNiOztBQVNGLElBQU07UUFBTixBQUFhLEFBQ0w7QUFESyxBQUNYOztBQUdGLElBQU07VUFBUyxBQUNMLEFBQ1I7bUJBRmEsQUFFSSxBQUNqQjthQUhGLEFBQWUsQUFHRjtBQUhFLEFBQ2I7O0lBS21CLEE7Ozs7Ozs7Ozs7Ozs7OzRNQUNuQixBLGlCQUFpQixBLFlBRWpCLEE7cUJBQVEsQUFDUyxBQUNmO2NBRk0sQUFFRSxBO0FBRkYsQUFDTixhQUlGLEEsaUJBQWlCLFlBQU0sQUFDckI7WUFBQSxBQUFLLGlCQUFpQixPQUFBLEFBQU8sV0FBN0IsQUFBc0IsQUFBa0IsQUFFeEM7O1lBQUEsQUFBSyxlQUFMLEFBQW9CLFlBQVksTUFBaEMsQUFBcUMsQUFDdEM7QSxhQUVELEEsdUJBQXVCLGFBQUssQUFDMUI7VUFBSSxFQUFKLEFBQU0sU0FBUyxBQUNiO2NBQUEsQUFBSzt5QkFBUyxBQUNHLEFBQ2Y7a0JBRkYsQUFBYyxBQUVKLEFBRVg7QUFKZSxBQUNaO0FBRkosYUFLTyxBQUNMO2NBQUEsQUFBSzt5QkFBUyxBQUNHLEFBQ2Y7a0JBRkYsQUFBYyxBQUVKLEFBRVg7QUFKZSxBQUNaO0FBSUw7QTs7Ozs7d0NBRW1CLEFBQ2xCO1dBQUEsQUFBSyxBQUVMOztXQUFBLEFBQUssZUFBTCxBQUFvQixVQUNoQixLQUFBLEFBQUssU0FBUyxFQUFFLFFBQUYsQUFBVSxJQUFJLGVBRGhDLEFBQ0ksQUFBYyxBQUE2QixRQUMzQyxLQUFBLEFBQUssU0FBUyxFQUFFLFFBQUYsQUFBVSxJQUFJLGVBRmhDLEFBRUksQUFBYyxBQUE2QixBQUNoRDs7Ozs2QkFFUTttQkFDb0IsS0FEcEIsQUFDeUI7VUFEekIsQUFDQyxrQkFERCxBQUNDO1VBREQsQUFDVyxjQURYLEFBQ1csQUFDbEI7O2NBQUEsQUFBUSxJQUFJLEtBRkwsQUFFUCxBQUFpQjttQkFDaUIsS0FIM0IsQUFHZ0M7VUFIaEMsQUFHQyx1QkFIRCxBQUdDO1VBSEQsQUFHZ0IsZ0JBSGhCLEFBR2dCLEFBRXZCOzs2QkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZLG1CQUFaOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7Y0FBQSxBQUNPLEFBQ0w7aUJBRkYsQUFFVTttQkFGVjs7b0JBQUE7c0JBRkYsQUFFRSxBQUtBO0FBTEE7QUFDRTtjQUlGLEFBQ08sQUFDTDthQUZGLEFBRU07bUJBRk47O29CQUFBO3NCQVBGLEFBT0UsQUFJQTtBQUpBO0FBQ0U7Y0FHRixBQUNPLEFBQ0w7YUFGRixBQUVNO21CQUZOOztvQkFBQTtzQkFaSixBQUNFLEFBV0UsQUFNRjtBQU5FO0FBQ0UsMkJBS0osQUFBQyx5Q0FBUyxPQUFPLEVBQUUsWUFBbkIsQUFBaUIsQUFBYztvQkFBL0I7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7Y0FBRCxBQUNRLEFBQ047dUJBRkYsQUFFaUIsQUFDZjtnQkFIRixBQUdVOztvQkFIVjtzQkFuQkosQUFrQkUsQUFDRSxBQU9GO0FBUEU7QUFDRSwyQkFNSixjQUFBLFVBQU0sT0FBTixBQUFhLGlCQUFiOztvQkFBQTtzQkFBQSxBQUFvQjtBQUFwQjtTQTFCRixBQTBCRSxBQUVBLHFEQUFRLE9BQVIsQUFBZSxtQkFBZjs7b0JBQUE7c0JBNUJGLEFBNEJFO0FBQUE7O2lCQTVCRjthQURGLEFBQ0UsQUF1Q0g7QUF2Q0c7Ozs7O0FBMUM4QixBOztrQkFBZixBIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhpbG5ndXllbi9EZXNrdG9wL1Byb2plY3RzL25leHQvY2hlel9wb3J0Zm9saW8ifQ==