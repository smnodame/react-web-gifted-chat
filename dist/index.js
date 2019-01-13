'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var uuid = _interopDefault(require('uuid'));
var moment = _interopDefault(require('moment'));
var PropTypes = _interopDefault(require('prop-types'));
var moment$1 = _interopDefault(require('moment/min/moment-with-locales.min'));
var React = require('react');
var React__default = _interopDefault(React);
var shallowequal = _interopDefault(require('shallowequal'));
var md5 = _interopDefault(require('md5'));
var ReactNative = require('react-native');
var ReactNative__default = _interopDefault(ReactNative);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

var DEPRECATION_MESSAGE = 'isSameUser and isSameDay should be imported from the utils module instead of using the props functions';
function isSameDay() {
  var currentMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var diffMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!diffMessage.createdAt) {
    return false;
  }

  var currentCreatedAt = moment(currentMessage.createdAt);
  var diffCreatedAt = moment(diffMessage.createdAt);

  if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
    return false;
  }

  return currentCreatedAt.isSame(diffCreatedAt, 'day');
}
function isSameUser() {
  var currentMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var diffMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return !!(diffMessage.user && currentMessage.user && diffMessage.user.id === currentMessage.user.id);
}
function warnDeprecated(fn) {
  return function () {
    console.warn(DEPRECATION_MESSAGE);
    return fn.apply(void 0, arguments);
  };
}

var utils = /*#__PURE__*/Object.freeze({
  isSameDay: isSameDay,
  isSameUser: isSameUser,
  warnDeprecated: warnDeprecated
});

var Actions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Actions, _React$Component);

  function Actions(props) {
    var _this;

    _classCallCheck(this, Actions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Actions).call(this, props));
    _this.onActionsPress = _this.onActionsPress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Actions, [{
    key: "onActionsPress",
    value: function onActionsPress() {
      var _this2 = this;

      var options = Object.keys(this.props.options);
      var cancelButtonIndex = Object.keys(this.props.options).length - 1;
      this.context.actionSheet().showActionSheetWithOptions({
        options: options,
        cancelButtonIndex: cancelButtonIndex,
        tintColor: this.props.optionTintColor
      }, function (buttonIndex) {
        var i = 0;

        for (var key in _this2.props.options) {
          if (_this2.props.options.hasOwnProperty(key)) {
            if (buttonIndex === i) {
              _this2.props.options[key](_this2.props);

              return;
            }

            i++;
          }
        }
      });
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      if (this.props.icon) {
        return this.props.icon();
      }

      return React__default.createElement(ReactNative.View, {
        style: [styles.wrapper, this.props.wrapperStyle]
      }, React__default.createElement(ReactNative.Text, {
        style: [styles.iconText, this.props.iconTextStyle]
      }, "+"));
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(ReactNative.TouchableOpacity, {
        style: [styles.container, this.props.containerStyle],
        onPress: this.props.onPressActionButton || this.onActionsPress
      }, this.renderIcon());
    }
  }]);

  return Actions;
}(React__default.Component);
var styles = ReactNative.StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10
  },
  wrapper: {
    borderRadius: 13,
    borderColor: '#b2b2b2',
    borderWidth: 2,
    flex: 1
  },
  iconText: {
    color: '#b2b2b2',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'transparent',
    textAlign: 'center'
  }
});
Actions.contextTypes = {
  actionSheet: PropTypes.func
};
Actions.defaultProps = {
  onSend: function onSend() {},
  options: {},
  optionTintColor: '#007AFF',
  icon: null,
  containerStyle: {},
  iconTextStyle: {}
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

// TODO
// 3 words name initials
// handle only alpha numeric chars
var GiftedAvatar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GiftedAvatar, _React$Component);

  function GiftedAvatar() {
    _classCallCheck(this, GiftedAvatar);

    return _possibleConstructorReturn(this, _getPrototypeOf(GiftedAvatar).apply(this, arguments));
  }

  _createClass(GiftedAvatar, [{
    key: "setAvatarColor",
    value: function setAvatarColor() {
      var userName = this.props.user.name || '';
      var name = userName.toUpperCase().split(' ');

      if (name.length === 1) {
        this.avatarName = "".concat(name[0].charAt(0));
      } else if (name.length > 1) {
        this.avatarName = "".concat(name[0].charAt(0)).concat(name[1].charAt(0));
      } else {
        this.avatarName = '';
      }

      var sumChars = 0;

      for (var i = 0; i < userName.length; i++) {
        sumChars += userName.charCodeAt(i);
      } // inspired by https://github.com/wbinnssmith/react-user-avatar
      // colors from https://flatuicolors.com/


      var colors = ['#e67e22', // carrot
      '#2ecc71', // emerald
      '#3498db', // peter river
      '#8e44ad', // wisteria
      '#e74c3c', // alizarin
      '#1abc9c', // turquoise
      '#2c3e50'];
      this.avatarColor = colors[sumChars % colors.length];
    }
  }, {
    key: "renderAvatar",
    value: function renderAvatar() {
      if (typeof this.props.user.avatar === 'function') {
        return this.props.user.avatar();
      } else if (typeof this.props.user.avatar === 'string') {
        return React__default.createElement(ReactNative.Image, {
          source: {
            uri: this.props.user.avatar
          },
          style: [defaultStyles.avatarStyle, this.props.avatarStyle]
        });
      } else if (typeof this.props.user.avatar === 'number') {
        return React__default.createElement(ReactNative.Image, {
          source: this.props.user.avatar,
          style: [defaultStyles.avatarStyle, this.props.avatarStyle]
        });
      }

      return null;
    }
  }, {
    key: "renderInitials",
    value: function renderInitials() {
      return React__default.createElement(ReactNative.Text, {
        style: [defaultStyles.textStyle, this.props.textStyle]
      }, this.avatarName);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      if (!this.props.user.name && !this.props.user.avatar) {
        // render placeholder
        return React__default.createElement(ReactNative.View, {
          style: [defaultStyles.avatarStyle, {
            backgroundColor: 'transparent'
          }, this.props.avatarStyle],
          accessibilityTraits: "image"
        });
      }

      if (this.props.user.avatar) {
        return React__default.createElement(ReactNative.TouchableOpacity, {
          disabled: this.props.onPress ? false : true,
          onPress: function onPress() {
            var _this$props = _this.props,
                onPress = _this$props.onPress,
                other = _objectWithoutProperties(_this$props, ["onPress"]);

            _this.props.onPress && _this.props.onPress(other);
          },
          accessibilityTraits: "image"
        }, this.renderAvatar());
      }

      if (!this.avatarColor) {
        this.setAvatarColor();
      }

      return React__default.createElement(ReactNative.TouchableOpacity, {
        disabled: this.props.onPress ? false : true,
        onPress: function onPress() {
          var _this$props2 = _this.props,
              onPress = _this$props2.onPress,
              other = _objectWithoutProperties(_this$props2, ["onPress"]);

          _this.props.onPress && _this.props.onPress(other);
        },
        style: [defaultStyles.avatarStyle, {
          backgroundColor: this.avatarColor
        }, this.props.avatarStyle],
        accessibilityTraits: "image"
      }, this.renderInitials());
    }
  }]);

  return GiftedAvatar;
}(React__default.Component);
var defaultStyles = {
  avatarStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20
  },
  textStyle: {
    color: '#fff',
    fontSize: 16,
    backgroundColor: 'transparent',
    fontWeight: '100'
  }
};
GiftedAvatar.defaultProps = {
  user: {
    name: null,
    avatar: null
  },
  onPress: null,
  avatarStyle: {},
  textStyle: {}
};

var Avatar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Avatar, _React$Component);

  function Avatar() {
    _classCallCheck(this, Avatar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Avatar).apply(this, arguments));
  }

  _createClass(Avatar, [{
    key: "renderAvatar",
    value: function renderAvatar() {
      var _this = this;

      if (this.props.renderAvatar) {
        var _this$props = this.props,
            renderAvatar = _this$props.renderAvatar,
            avatarProps = _objectWithoutProperties(_this$props, ["renderAvatar"]);

        return this.props.renderAvatar(avatarProps);
      }

      return React__default.createElement(GiftedAvatar, {
        avatarStyle: ReactNative.StyleSheet.flatten([styles$1[this.props.position].image, this.props.imageStyle[this.props.position]]),
        user: this.props.currentMessage.user,
        onPress: function onPress() {
          return _this.props.onPressAvatar && _this.props.onPressAvatar(_this.props.currentMessage.user);
        },
        onClick: function onClick() {
          return _this.props.onPressAvatar && _this.props.onPressAvatar(_this.props.currentMessage.user);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var renderAvatarOnTop = this.props.renderAvatarOnTop;
      var messageToCompare = renderAvatarOnTop ? this.props.previousMessage : this.props.nextMessage;
      var computedStyle = renderAvatarOnTop ? "onTop" : "onBottom";

      if (this.props.renderAvatar === null) {
        return null;
      }

      if (isSameUser(this.props.currentMessage, messageToCompare) && isSameDay(this.props.currentMessage, messageToCompare)) {
        return React__default.createElement(ReactNative.View, {
          style: [styles$1[this.props.position].container, this.props.containerStyle[this.props.position]]
        }, React__default.createElement(GiftedAvatar, {
          avatarStyle: ReactNative.StyleSheet.flatten([styles$1[this.props.position].image, this.props.imageStyle[this.props.position]])
        }));
      }

      return React__default.createElement(ReactNative.View, {
        style: [styles$1[this.props.position].container, styles$1[this.props.position][computedStyle], this.props.containerStyle[this.props.position]]
      }, this.renderAvatar());
    }
  }]);

  return Avatar;
}(React__default.Component);
var styles$1 = {
  left: ReactNative.StyleSheet.create({
    container: {
      marginRight: 8
    },
    onTop: {
      alignSelf: "flex-start"
    },
    onBottom: {},
    image: {
      height: 36,
      width: 36,
      borderRadius: 18
    }
  }),
  right: ReactNative.StyleSheet.create({
    container: {
      marginLeft: 8
    },
    onTop: {
      alignSelf: "flex-start"
    },
    onBottom: {},
    image: {
      height: 36,
      width: 36,
      borderRadius: 18
    }
  })
};
Avatar.defaultProps = {
  renderAvatarOnTop: false,
  position: 'left',
  currentMessage: {
    user: null
  },
  nextMessage: {},
  containerStyle: {},
  imageStyle: {},
  //TODO: remove in next major release
  isSameDay: warnDeprecated(isSameDay),
  isSameUser: warnDeprecated(isSameUser)
};

var TextExtraction =
/*#__PURE__*/
function () {
  /**
   * @param {String} text - Text to be parsed
   * @param {Object[]} patterns - Patterns to be used when parsed
   *                              other options than pattern would be added to the parsed content
   * @param {RegExp} patterns[].pattern - RegExp to be used for parsing
   */
  function TextExtraction(text, patterns) {
    _classCallCheck(this, TextExtraction);

    this.text = text;
    this.patterns = patterns || [];
  }
  /**
   * Returns parts of the text with their own props
   * @return {Object[]} - props for all the parts of the text
   */


  _createClass(TextExtraction, [{
    key: "parse",
    value: function parse() {
      var _this = this;

      var parsedTexts = [{
        children: this.text
      }];
      this.patterns.forEach(function (pattern) {
        var newParts = [];
        parsedTexts.forEach(function (parsedText) {
          // Only allow for now one parsing
          if (parsedText._matched) {
            newParts.push(parsedText);
            return;
          }

          var parts = [];
          var textLeft = parsedText.children;

          while (textLeft) {
            var matches = pattern.pattern.exec(textLeft);

            if (!matches) {
              break;
            }

            var previousText = textLeft.substr(0, matches.index);
            parts.push({
              children: previousText
            });
            parts.push(_this.getMatchedPart(pattern, matches[0], matches));
            textLeft = textLeft.substr(matches.index + matches[0].length);
          }

          parts.push({
            children: textLeft
          });
          newParts.push.apply(newParts, parts);
        });
        parsedTexts = newParts;
      }); // Remove _matched key.

      parsedTexts.forEach(function (parsedText) {
        return delete parsedText._matched;
      });
      return parsedTexts.filter(function (t) {
        return !!t.children;
      });
    } // private

    /**
     * @param {Object} matchedPattern - pattern configuration of the pattern used to match the text
     * @param {RegExp} matchedPattern.pattern - pattern used to match the text
     * @param {String} text - Text matching the pattern
     * @param {String[]} text - Result of the RegExp.exec
     * @return {Object} props for the matched text
     */

  }, {
    key: "getMatchedPart",
    value: function getMatchedPart(matchedPattern, text, matches) {
      var props = {};
      Object.keys(matchedPattern).forEach(function (key) {
        if (key === 'pattern' || key === 'renderText') {
          return;
        }

        if (typeof matchedPattern[key] === 'function') {
          props[key] = function () {
            return matchedPattern[key](text);
          };
        } else {
          props[key] = matchedPattern[key];
        }
      });
      var children = text;

      if (matchedPattern.renderText && typeof matchedPattern.renderText === 'function') {
        children = matchedPattern.renderText(text, matches);
      }

      return _objectSpread({}, props, {
        children: children,
        _matched: true
      });
    }
  }]);

  return TextExtraction;
}();

var PATTERNS = {
  url: /(https?:\/\/|www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/i,
  phone: /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/,
  email: /\S+@\S+\.\S+/
};

var ParsedText =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ParsedText, _React$Component);

  function ParsedText() {
    _classCallCheck(this, ParsedText);

    return _possibleConstructorReturn(this, _getPrototypeOf(ParsedText).apply(this, arguments));
  }

  _createClass(ParsedText, [{
    key: "setNativeProps",
    value: function setNativeProps(nativeProps) {
      this._root.setNativeProps(nativeProps);
    }
  }, {
    key: "getPatterns",
    value: function getPatterns() {
      return this.props.parse.map(function (option) {
        var type = option.type,
            patternOption = _objectWithoutProperties(option, ["type"]);

        if (type) {
          if (!PATTERNS[type]) {
            throw new Error("".concat(option.type, " is not a supported type"));
          }

          patternOption.pattern = PATTERNS[type];
        }

        return patternOption;
      });
    }
  }, {
    key: "getParsedText",
    value: function getParsedText() {
      if (!this.props.parse) {
        return this.props.children;
      }

      if (typeof this.props.children !== 'string') {
        return this.props.children;
      }

      var textExtraction = new TextExtraction(this.props.children, this.getPatterns());
      var childrenProps = this.props.childrenProps || {};
      return textExtraction.parse().map(function (props, index) {
        return React__default.createElement(ReactNative__default.Text, Object.assign({
          key: "parsedText-".concat(index)
        }, childrenProps, props));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return React__default.createElement(ReactNative__default.Text, Object.assign({
        ref: function ref(_ref) {
          return _this._root = _ref;
        }
      }, this.props), this.getParsedText());
    }
  }]);

  return ParsedText;
}(React__default.Component);

ParsedText.displayName = 'ParsedText';
ParsedText.defaultProps = {
  parse: null
};

var MessageText =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MessageText, _React$Component);

  function MessageText(props) {
    var _this;

    _classCallCheck(this, MessageText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageText).call(this, props));
    _this.onUrlPress = _this.onUrlPress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onPhonePress = _this.onPhonePress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onEmailPress = _this.onEmailPress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MessageText, [{
    key: "onUrlPress",
    value: function onUrlPress(url) {
      ReactNative.Linking.openURL(url);
    }
  }, {
    key: "onPhonePress",
    value: function onPhonePress(phone) {
      var options = ['Text', 'Call', 'Cancel'];
      var cancelButtonIndex = options.length - 1;
      this.context.actionSheet().showActionSheetWithOptions({
        options: options,
        cancelButtonIndex: cancelButtonIndex
      }, function (buttonIndex) {// switch (buttonIndex) {
        //   case 0:
        //     Communications.phonecall(phone, true);
        //     break;
        //   case 1:
        //     Communications.text(phone);
        //     break;
        // }
      });
    }
  }, {
    key: "onEmailPress",
    value: function onEmailPress(email) {// Communications.email(email, null, null, null, null);
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(ReactNative.View, {
        style: [styles$2[this.props.position].container, this.props.containerStyle[this.props.position]]
      }, React__default.createElement(ParsedText, {
        style: [styles$2[this.props.position].text, this.props.textStyle[this.props.position]],
        parse: [{
          type: 'url',
          style: ReactNative.StyleSheet.flatten([styles$2[this.props.position].link, this.props.linkStyle[this.props.position]]),
          onPress: this.onUrlPress
        }, {
          type: 'phone',
          style: ReactNative.StyleSheet.flatten([styles$2[this.props.position].link, this.props.linkStyle[this.props.position]]),
          onPress: this.onPhonePress
        }, {
          type: 'email',
          style: ReactNative.StyleSheet.flatten([styles$2[this.props.position].link, this.props.linkStyle[this.props.position]]),
          onPress: this.onEmailPress
        }]
      }, this.props.currentMessage.text));
    }
  }]);

  return MessageText;
}(React__default.Component);
var textStyle = {
  fontSize: 16,
  lineHeight: 20,
  marginTop: 5,
  marginBottom: 5,
  marginLeft: 10,
  marginRight: 10
};
var styles$2 = {
  left: ReactNative.StyleSheet.create({
    container: {},
    text: _objectSpread({
      color: 'black'
    }, textStyle),
    link: {
      color: 'black',
      textDecorationLine: 'underline'
    }
  }),
  right: ReactNative.StyleSheet.create({
    container: {},
    text: _objectSpread({
      color: 'white'
    }, textStyle),
    link: {
      color: 'white',
      textDecorationLine: 'underline'
    }
  })
};
MessageText.contextTypes = {
  actionSheet: PropTypes.func
};
MessageText.defaultProps = {
  position: 'left',
  currentMessage: {
    text: ''
  },
  containerStyle: {},
  textStyle: {},
  linkStyle: {}
};

var MessageImage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MessageImage, _React$Component);

  function MessageImage() {
    _classCallCheck(this, MessageImage);

    return _possibleConstructorReturn(this, _getPrototypeOf(MessageImage).apply(this, arguments));
  }

  _createClass(MessageImage, [{
    key: "render",
    value: function render() {
      var _Dimensions$get = ReactNative.Dimensions.get('window'),
          width = _Dimensions$get.width,
          height = _Dimensions$get.height;

      return React__default.createElement(ReactNative.View, {
        style: [styles$3.container, this.props.containerStyle]
      }, React__default.createElement(ReactNative.Image, Object.assign({}, this.props.imageProps, {
        style: [styles$3.image, this.props.imageStyle],
        source: {
          uri: this.props.currentMessage.image
        }
      })));
    }
  }]);

  return MessageImage;
}(React__default.Component);
var styles$3 = ReactNative.StyleSheet.create({
  container: {},
  image: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover'
  },
  imageActive: {
    resizeMode: 'contain'
  }
});
MessageImage.defaultProps = {
  currentMessage: {
    image: null
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
  lightboxProps: {}
};

var Time =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Time, _React$Component);

  function Time() {
    _classCallCheck(this, Time);

    return _possibleConstructorReturn(this, _getPrototypeOf(Time).apply(this, arguments));
  }

  _createClass(Time, [{
    key: "render",
    value: function render() {
      var locale = window.navigator.userLanguage || window.navigator.language;
      return React__default.createElement(ReactNative.View, {
        style: [styles$4[this.props.position].container, this.props.containerStyle[this.props.position]]
      }, React__default.createElement(ReactNative.Text, {
        style: [styles$4[this.props.position].text, this.props.textStyle[this.props.position]]
      }, moment$1(this.props.currentMessage.createdAt).locale(locale).format('LT')));
    }
  }]);

  return Time;
}(React__default.Component);
var containerStyle = {
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 5
};
var textStyle$1 = {
  fontSize: 10,
  backgroundColor: 'transparent',
  textAlign: 'right'
};
var styles$4 = {
  left: ReactNative.StyleSheet.create({
    container: _objectSpread({}, containerStyle),
    text: _objectSpread({
      color: '#aaa'
    }, textStyle$1)
  }),
  right: ReactNative.StyleSheet.create({
    container: _objectSpread({}, containerStyle),
    text: _objectSpread({
      color: '#fff'
    }, textStyle$1)
  })
};
Time.contextTypes = {
  getLocale: PropTypes.func
};
Time.defaultProps = {
  position: 'left',
  currentMessage: {
    createdAt: null
  },
  containerStyle: {},
  textStyle: {}
};

var Bubble =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Bubble, _React$Component);

  function Bubble(props) {
    var _this;

    _classCallCheck(this, Bubble);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bubble).call(this, props));
    _this.onLongPress = _this.onLongPress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Bubble, [{
    key: "handleBubbleToNext",
    value: function handleBubbleToNext() {
      if (isSameUser(this.props.currentMessage, this.props.nextMessage) && isSameDay(this.props.currentMessage, this.props.nextMessage)) {
        return ReactNative.StyleSheet.flatten([styles$5[this.props.position].containerToNext, this.props.containerToNextStyle[this.props.position]]);
      }

      return null;
    }
  }, {
    key: "handleBubbleToPrevious",
    value: function handleBubbleToPrevious() {
      if (isSameUser(this.props.currentMessage, this.props.previousMessage) && isSameDay(this.props.currentMessage, this.props.previousMessage)) {
        return ReactNative.StyleSheet.flatten([styles$5[this.props.position].containerToPrevious, this.props.containerToPreviousStyle[this.props.position]]);
      }

      return null;
    }
  }, {
    key: "renderMessageText",
    value: function renderMessageText() {
      if (this.props.currentMessage.text) {
        var _this$props = this.props,
            containerStyle = _this$props.containerStyle,
            wrapperStyle = _this$props.wrapperStyle,
            messageTextProps = _objectWithoutProperties(_this$props, ["containerStyle", "wrapperStyle"]);

        if (this.props.renderMessageText) {
          return this.props.renderMessageText(messageTextProps);
        }

        return React__default.createElement(MessageText, messageTextProps);
      }

      return null;
    }
  }, {
    key: "renderMessageImage",
    value: function renderMessageImage() {
      if (this.props.currentMessage.image) {
        var _this$props2 = this.props,
            containerStyle = _this$props2.containerStyle,
            wrapperStyle = _this$props2.wrapperStyle,
            messageImageProps = _objectWithoutProperties(_this$props2, ["containerStyle", "wrapperStyle"]);

        if (this.props.renderMessageImage) {
          return this.props.renderMessageImage(messageImageProps);
        }

        return React__default.createElement(MessageImage, messageImageProps);
      }

      return null;
    }
  }, {
    key: "renderTicks",
    value: function renderTicks() {
      var currentMessage = this.props.currentMessage;

      if (this.props.renderTicks) {
        return this.props.renderTicks(currentMessage);
      }

      if (currentMessage.user.id !== this.props.user.id) {
        return;
      }

      if (currentMessage.sent || currentMessage.received) {
        return React__default.createElement(ReactNative.View, {
          style: styles$5.tickView
        }, currentMessage.sent && React__default.createElement(ReactNative.Text, {
          style: [styles$5.tick, this.props.tickStyle]
        }, "\u2713"), currentMessage.received && React__default.createElement(ReactNative.Text, {
          style: [styles$5.tick, this.props.tickStyle]
        }, "\u2713"));
      }
    }
  }, {
    key: "renderTime",
    value: function renderTime() {
      if (this.props.currentMessage.createdAt) {
        var _this$props3 = this.props,
            containerStyle = _this$props3.containerStyle,
            wrapperStyle = _this$props3.wrapperStyle,
            timeProps = _objectWithoutProperties(_this$props3, ["containerStyle", "wrapperStyle"]);

        if (this.props.renderTime) {
          return this.props.renderTime(timeProps);
        }

        return React__default.createElement(Time, timeProps);
      }

      return null;
    }
  }, {
    key: "renderCustomView",
    value: function renderCustomView() {
      if (this.props.renderCustomView) {
        return this.props.renderCustomView(this.props);
      }

      return null;
    }
  }, {
    key: "onLongPress",
    value: function onLongPress() {
      var _this2 = this;

      if (this.props.onLongPress) {
        this.props.onLongPress(this.context, this.props.currentMessage);
      } else {
        if (this.props.currentMessage.text) {
          var options = ['Copy Text', 'Cancel'];
          var cancelButtonIndex = options.length - 1;
          this.context.actionSheet().showActionSheetWithOptions({
            options: options,
            cancelButtonIndex: cancelButtonIndex
          }, function (buttonIndex) {
            switch (buttonIndex) {
              case 0:
                ReactNative.Clipboard.setString(_this2.props.currentMessage.text);
                break;
            }
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(ReactNative.View, {
        style: [styles$5[this.props.position].container, this.props.containerStyle[this.props.position]]
      }, React__default.createElement(ReactNative.View, {
        style: [styles$5[this.props.position].wrapper, this.props.wrapperStyle[this.props.position], this.handleBubbleToNext(), this.handleBubbleToPrevious()]
      }, React__default.createElement(ReactNative.TouchableWithoutFeedback, Object.assign({
        onLongPress: this.onLongPress,
        accessibilityTraits: "text"
      }, this.props.touchableProps), React__default.createElement(ReactNative.View, null, this.renderCustomView(), this.renderMessageImage(), this.renderMessageText(), React__default.createElement(ReactNative.View, {
        style: [styles$5.bottom, this.props.bottomContainerStyle[this.props.position]]
      }, this.renderTime(), this.renderTicks())))));
    }
  }]);

  return Bubble;
}(React__default.Component);
var styles$5 = {
  left: ReactNative.StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start'
    },
    wrapper: {
      borderRadius: 15,
      backgroundColor: '#f0f0f0',
      marginRight: 60,
      minHeight: 20,
      justifyContent: 'flex-end'
    },
    containerToNext: {
      borderBottomLeftRadius: 3
    },
    containerToPrevious: {
      borderTopLeftRadius: 3
    }
  }),
  right: ReactNative.StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-end'
    },
    wrapper: {
      borderRadius: 15,
      backgroundColor: '#0084ff',
      marginLeft: 60,
      minHeight: 20,
      justifyContent: 'flex-end'
    },
    containerToNext: {
      borderBottomRightRadius: 3
    },
    containerToPrevious: {
      borderTopRightRadius: 3
    }
  }),
  bottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  tick: {
    fontSize: 10,
    backgroundColor: 'transparent',
    color: 'white'
  },
  tickView: {
    flexDirection: 'row',
    marginRight: 10
  }
};
Bubble.contextTypes = {
  actionSheet: PropTypes.func
};
Bubble.defaultProps = {
  touchableProps: {},
  onLongPress: null,
  renderMessageImage: null,
  renderMessageText: null,
  renderCustomView: null,
  renderTime: null,
  position: 'left',
  currentMessage: {
    text: null,
    createdAt: null,
    image: null
  },
  nextMessage: {},
  previousMessage: {},
  containerStyle: {},
  wrapperStyle: {},
  bottomContainerStyle: {},
  tickStyle: {},
  containerToNextStyle: {},
  containerToPreviousStyle: {},
  //TODO: remove in next major release
  isSameDay: warnDeprecated(isSameDay),
  isSameUser: warnDeprecated(isSameUser)
};

var Composer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Composer, _React$Component);

  function Composer() {
    _classCallCheck(this, Composer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Composer).apply(this, arguments));
  }

  _createClass(Composer, [{
    key: "onChange",
    value: function onChange(e) {
      var contentSize = e.nativeEvent.contentSize;

      if (!this.contentSize) {
        this.contentSize = contentSize;
        this.props.onInputSizeChanged(this.contentSize);
      } else if (this.contentSize.width !== contentSize.width || this.contentSize.height !== contentSize.height) {
        this.contentSize = contentSize;
        this.props.onInputSizeChanged(this.contentSize);
      }
    }
  }, {
    key: "onChangeText",
    value: function onChangeText(text) {
      this.props.onTextChanged(text);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return React__default.createElement(ReactNative.TextInput, Object.assign({
        placeholder: this.props.placeholder,
        placeholderTextColor: this.props.placeholderTextColor,
        multiline: this.props.multiline,
        onContentSizeChange: function onContentSizeChange(e) {
          return _this.onChange(e);
        },
        onChangeText: function onChangeText(text) {
          return _this.onChangeText(text);
        },
        style: [styles$6.textInput, this.props.textInputStyle, {
          height: this.props.composerHeight
        }],
        value: this.props.text,
        accessibilityLabel: this.props.text || this.props.placeholder,
        enablesReturnKeyAutomatically: true,
        underlineColorAndroid: "transparent"
      }, this.props.textInputProps));
    }
  }]);

  return Composer;
}(React__default.Component);
var styles$6 = ReactNative.StyleSheet.create({
  textInput: {
    flex: 1,
    minHeight: 40,
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 16,
    marginTop: 3,
    marginBottom: 3,
    outline: 'none'
  }
});
Composer.defaultProps = {
  onChange: function onChange() {},
  composerHeight: ReactNative.Platform.select({
    ios: 33,
    android: 41
  }),
  // TODO SHARE with GiftedChat.js and tests
  text: '',
  placeholder: 'Type a message...',
  placeholderTextColor: '#b2b2b2',
  textInputProps: null,
  multiline: true,
  textInputStyle: {},
  onTextChanged: function onTextChanged() {},
  onInputSizeChanged: function onInputSizeChanged() {}
};

var Day =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Day, _React$Component);

  function Day() {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, _getPrototypeOf(Day).apply(this, arguments));
  }

  _createClass(Day, [{
    key: "render",
    value: function render() {
      var locale = window.navigator.userLanguage || window.navigator.language;

      if (!isSameDay(this.props.currentMessage, this.props.previousMessage)) {
        return React__default.createElement(ReactNative.View, {
          style: [styles$7.container, this.props.containerStyle]
        }, React__default.createElement(ReactNative.View, {
          style: [styles$7.wrapper, this.props.wrapperStyle]
        }, React__default.createElement(ReactNative.Text, {
          style: [styles$7.text, this.props.textStyle]
        }, moment$1(this.props.currentMessage.createdAt).locale(locale).format('ll').toUpperCase())));
      }

      return null;
    }
  }]);

  return Day;
}(React__default.Component);
var styles$7 = ReactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  wrapper: {// backgroundColor: '#ccc',
    // borderRadius: 10,
    // paddingLeft: 10,
    // paddingRight: 10,
    // paddingTop: 5,
    // paddingBottom: 5,
  },
  text: {
    backgroundColor: 'transparent',
    color: '#b2b2b2',
    fontSize: 12,
    fontWeight: '600'
  }
});
Day.contextTypes = {
  getLocale: PropTypes.func
};
Day.defaultProps = {
  currentMessage: {
    // TODO test if crash when createdAt === null
    createdAt: null
  },
  previousMessage: {},
  containerStyle: {},
  wrapperStyle: {},
  textStyle: {},
  //TODO: remove in next major release
  isSameDay: warnDeprecated(isSameDay),
  isSameUser: warnDeprecated(isSameUser)
};

var Send =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Send, _React$Component);

  function Send() {
    _classCallCheck(this, Send);

    return _possibleConstructorReturn(this, _getPrototypeOf(Send).apply(this, arguments));
  }

  _createClass(Send, [{
    key: "render",
    // shouldComponentUpdate(nextProps, nextState) {
    //   if (this.props.text.trim().length === 0 && nextProps.text.trim().length > 0 || this.props.text.trim().length > 0 && nextProps.text.trim().length === 0) {
    //     return true;
    //   }
    //   return false;
    // }
    value: function render() {
      var _this = this;

      if (this.props.text.trim().length > 0) {
        return React__default.createElement(ReactNative.TouchableOpacity, {
          style: [styles$8.container, this.props.containerStyle],
          onPress: function onPress() {
            _this.props.onSend({
              text: _this.props.text.trim()
            }, true);
          },
          onClick: function onClick() {
            _this.props.onSend({
              text: _this.props.text.trim()
            }, true);
          },
          accessibilityTraits: "button"
        }, React__default.createElement(ReactNative.Text, {
          style: [styles$8.text, this.props.textStyle]
        }, this.props.label));
      }

      return React__default.createElement(ReactNative.View, null);
    }
  }]);

  return Send;
}(React__default.Component);
var styles$8 = ReactNative.StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'flex-end'
  },
  text: {
    color: '#0084ff',
    fontWeight: '600',
    fontSize: 17,
    backgroundColor: 'transparent',
    marginBottom: 12,
    marginLeft: 10,
    marginRight: 10
  }
});
Send.defaultProps = {
  text: '',
  onSend: function onSend() {},
  label: 'Send',
  containerStyle: {},
  textStyle: {}
};

var InputToolbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputToolbar, _React$Component);

  function InputToolbar() {
    _classCallCheck(this, InputToolbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputToolbar).apply(this, arguments));
  }

  _createClass(InputToolbar, [{
    key: "renderActions",
    value: function renderActions() {
      if (this.props.renderActions) {
        return this.props.renderActions(this.props);
      } else if (this.props.onPressActionButton) {
        return React__default.createElement(Actions, this.props);
      }

      return null;
    }
  }, {
    key: "renderSend",
    value: function renderSend() {
      if (this.props.renderSend) {
        return this.props.renderSend(this.props);
      }

      return React__default.createElement(Send, this.props);
    }
  }, {
    key: "renderComposer",
    value: function renderComposer() {
      if (this.props.renderComposer) {
        return this.props.renderComposer(this.props);
      }

      return React__default.createElement(Composer, this.props);
    }
  }, {
    key: "renderAccessory",
    value: function renderAccessory() {
      if (this.props.renderAccessory) {
        return React__default.createElement(ReactNative.View, {
          style: [styles$9.accessory, this.props.accessoryStyle]
        }, this.props.renderAccessory(this.props));
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(ReactNative.View, {
        style: [styles$9.container, this.props.containerStyle]
      }, React__default.createElement(ReactNative.View, {
        style: [styles$9.primary, this.props.primaryStyle]
      }, this.renderActions(), this.renderComposer(), this.renderSend()), this.renderAccessory());
    }
  }]);

  return InputToolbar;
}(React__default.Component);
var styles$9 = ReactNative.StyleSheet.create({
  container: {
    borderTopWidth: ReactNative.StyleSheet.hairlineWidth,
    borderTopColor: '#b2b2b2',
    backgroundColor: '#FFFFFF'
  },
  primary: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  accessory: {
    height: 44
  }
});
InputToolbar.defaultProps = {
  renderAccessory: null,
  renderActions: null,
  renderSend: null,
  renderComposer: null,
  containerStyle: {},
  primaryStyle: {},
  accessoryStyle: {}
};

var LoadEarlier =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoadEarlier, _React$Component);

  function LoadEarlier() {
    _classCallCheck(this, LoadEarlier);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadEarlier).apply(this, arguments));
  }

  _createClass(LoadEarlier, [{
    key: "renderLoading",
    value: function renderLoading() {
      if (this.props.isLoadingEarlier === false) {
        return React__default.createElement(ReactNative.Text, {
          style: [styles$a.text, this.props.textStyle]
        }, this.props.label);
      }

      return React__default.createElement(ReactNative.View, null, React__default.createElement(ReactNative.Text, {
        style: [styles$a.text, this.props.textStyle, {
          opacity: 0
        }]
      }, this.props.label), React__default.createElement(ReactNative.ActivityIndicator, {
        color: "white",
        size: "small",
        style: [styles$a.activityIndicator, this.props.activityIndicatorStyle]
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return React__default.createElement(ReactNative.TouchableOpacity, {
        style: [styles$a.container, this.props.containerStyle],
        onPress: function onPress() {
          if (_this.props.onLoadEarlier) {
            _this.props.onLoadEarlier();
          }
        },
        disabled: this.props.isLoadingEarlier === true,
        accessibilityTraits: "button"
      }, React__default.createElement(ReactNative.View, {
        style: [styles$a.wrapper, this.props.wrapperStyle]
      }, this.renderLoading()));
    }
  }]);

  return LoadEarlier;
}(React__default.Component);
var styles$a = ReactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b2b2b2',
    borderRadius: 15,
    height: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  text: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 12
  },
  activityIndicator: {
    marginTop: ReactNative.Platform.select({
      ios: -14,
      android: -16
    })
  }
});
LoadEarlier.defaultProps = {
  onLoadEarlier: function onLoadEarlier() {},
  isLoadingEarlier: false,
  label: 'Load earlier messages',
  containerStyle: {},
  wrapperStyle: {},
  textStyle: {},
  activityIndicatorStyle: {}
};

var Color = {
  defaultColor: '#b2b2b2',
  backgroundTransparent: 'transparent',
  defaultBlue: '#0084ff',
  leftBubbleBackground: '#f0f0f0',
  white: '#fff',
  carrot: '#e67e22',
  emerald: '#2ecc71',
  peterRiver: '#3498db',
  wisteria: '#8e44ad',
  alizarin: '#e74c3c',
  turquoise: '#1abc9c',
  midnightBlue: '#2c3e50',
  optionTintColor: '#007AFF',
  timeTextColor: '#aaa'
};

/* eslint no-use-before-define: ["error", { "variables": false }] */
function SystemMessage(_ref) {
  var currentMessage = _ref.currentMessage,
      containerStyle = _ref.containerStyle,
      wrapperStyle = _ref.wrapperStyle,
      textStyle = _ref.textStyle;
  return React__default.createElement(ReactNative.View, {
    style: [styles$b.container, containerStyle]
  }, React__default.createElement(ReactNative.View, {
    style: [styles$b.wrapper, wrapperStyle]
  }, React__default.createElement(ReactNative.Text, {
    style: [styles$b.text, textStyle]
  }, currentMessage.text)));
}
var styles$b = ReactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 5,
    marginBottom: 10
  },
  text: {
    backgroundColor: Color.backgroundTransparent,
    color: Color.defaultColor,
    fontSize: 12,
    fontWeight: '300'
  }
});
SystemMessage.defaultProps = {
  currentMessage: {
    system: false
  },
  containerStyle: {},
  wrapperStyle: {},
  textStyle: {}
};

var Message =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Message, _React$Component);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, _getPrototypeOf(Message).apply(this, arguments));
  }

  _createClass(Message, [{
    key: "getInnerComponentProps",
    value: function getInnerComponentProps() {
      var _this$props = this.props,
          containerStyle = _this$props.containerStyle,
          props = _objectWithoutProperties(_this$props, ["containerStyle"]);

      return _objectSpread({}, props, {
        isSameUser: isSameUser,
        isSameDay: isSameDay
      });
    }
  }, {
    key: "renderDay",
    value: function renderDay() {
      if (this.props.currentMessage.createdAt) {
        var dayProps = this.getInnerComponentProps();

        if (this.props.renderDay) {
          return this.props.renderDay(dayProps);
        }

        return React__default.createElement(Day, dayProps);
      }

      return null;
    }
  }, {
    key: "renderBubble",
    value: function renderBubble() {
      var bubbleProps = this.getInnerComponentProps();

      if (this.props.renderBubble) {
        return this.props.renderBubble(bubbleProps);
      }

      return React__default.createElement(Bubble, bubbleProps);
    }
  }, {
    key: "renderSystemMessage",
    value: function renderSystemMessage() {
      var systemMessageProps = this.getInnerComponentProps();

      if (this.props.renderSystemMessage) {
        return this.props.renderSystemMessage(systemMessageProps);
      }

      return React__default.createElement(SystemMessage, systemMessageProps);
    }
  }, {
    key: "renderAvatar",
    value: function renderAvatar() {
      if (this.props.user.id !== this.props.currentMessage.user.id) {
        var avatarProps = this.getInnerComponentProps();
        return React__default.createElement(Avatar, avatarProps);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(ReactNative.View, null, this.renderDay(), this.props.currentMessage.system ? this.renderSystemMessage() : React__default.createElement(ReactNative.View, {
        style: [styles$c[this.props.position].container, {
          marginBottom: isSameUser(this.props.currentMessage, this.props.nextMessage) ? 2 : 10
        }, this.props.containerStyle[this.props.position]]
      }, this.props.position === 'left' ? this.renderAvatar() : null, this.renderBubble(), this.props.position === 'right' ? this.renderAvatar() : null));
    }
  }]);

  return Message;
}(React__default.Component);
var styles$c = {
  left: ReactNative.StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      marginLeft: 8,
      marginRight: 0
    }
  }),
  right: ReactNative.StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      marginLeft: 0,
      marginRight: 8
    }
  })
};
Message.defaultProps = {
  renderAvatar: undefined,
  renderBubble: null,
  renderDay: null,
  position: 'left',
  currentMessage: {},
  nextMessage: {},
  previousMessage: {},
  user: {},
  containerStyle: {}
};

var MessageContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MessageContainer, _React$Component);

  function MessageContainer(props) {
    var _this;

    _classCallCheck(this, MessageContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageContainer).call(this, props));
    _this.renderRow = _this.renderRow.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderFooter = _this.renderFooter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderLoadEarlier = _this.renderLoadEarlier.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderScrollComponent = _this.renderScrollComponent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.flatListRef = React.createRef();

    var messagesData = _this.prepareMessages(props.messages);

    return _this;
  }

  _createClass(MessageContainer, [{
    key: "prepareMessages",
    value: function prepareMessages(messages) {
      return {
        keys: messages.map(function (m) {
          return m.id;
        }),
        blob: messages.reduce(function (o, m, i) {
          var previousMessage = messages[i + 1] || {};
          var nextMessage = messages[i - 1] || {}; // add next and previous messages to hash to ensure updates

          var toHash = JSON.stringify(m) + previousMessage.id + nextMessage.id;
          o[m.id] = _objectSpread({}, m, {
            previousMessage: previousMessage,
            nextMessage: nextMessage,
            hash: md5(toHash)
          });
          return o;
        }, {})
      };
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (!shallowequal(this.props, nextProps)) {
        return true;
      }

      if (!shallowequal(this.state, nextState)) {
        return true;
      }

      return false;
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      if (this.props.renderFooter) {
        var footerProps = _objectSpread({}, this.props);

        return this.props.renderFooter(footerProps);
      }

      return null;
    }
  }, {
    key: "renderLoadEarlier",
    value: function renderLoadEarlier() {
      if (this.props.loadEarlier === true) {
        var loadEarlierProps = _objectSpread({}, this.props);

        if (this.props.renderLoadEarlier) {
          return this.props.renderLoadEarlier(loadEarlierProps);
        }

        return React__default.createElement(LoadEarlier, loadEarlierProps);
      }

      return null;
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(options) {// this._invertibleScrollViewRef.scrollTo(options);
    }
  }, {
    key: "renderRow",
    value: function renderRow(_ref) {
      var item = _ref.item,
          index = _ref.index;
      var message = item;

      if (!message.id && message.id !== 0) {
        console.warn('GiftedChat: `id` is missing for message', JSON.stringify(message));
      }

      if (!message.user) {
        console.warn('GiftedChat: `user` is missing for message', JSON.stringify(message));
        message.user = {};
      }

      var messageProps = _objectSpread({}, this.props, {
        key: message.id,
        currentMessage: message,
        previousMessage: message.previousMessage,
        nextMessage: message.nextMessage,
        position: message.user.id === this.props.user.id ? 'right' : 'left'
      });

      if (this.props.renderMessage) {
        return this.props.renderMessage(messageProps);
      }

      return React__default.createElement(Message, messageProps);
    }
  }, {
    key: "renderScrollComponent",
    value: function renderScrollComponent(props) {
      var invertibleScrollViewProps = this.props.invertibleScrollViewProps;
      return React__default.createElement(ReactNative.ScrollView, Object.assign({}, props, invertibleScrollViewProps));
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(ReactNative.View, {
        style: {
          flex: 1
        },
        onLayout: function onLayout() {//this.flatListRef.current.scrollTo({x: 0, y: 0, animated: true});
        }
      }, React__default.createElement(ReactNative.FlatList, Object.assign({
        ref: this.flatListRef,
        keyExtractor: function keyExtractor(item) {
          return "".concat(item.id);
        },
        enableEmptySections: true,
        automaticallyAdjustContentInsets: false,
        inverted: this.props.inverted,
        data: this.props.messages,
        style: styles$d.listStyle,
        contentContainerStyle: styles$d.contentContainerStyle,
        renderItem: this.renderRow
      }, this.props.invertibleScrollViewProps, {
        ListFooterComponent: this.renderHeaderWrapper,
        ListHeaderComponent: this.renderFooter
      }, this.props.listViewProps)));
    }
  }]);

  return MessageContainer;
}(React__default.Component);
var styles$d = ReactNative.StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainerStyle: {
    justifyContent: 'flex-end'
  },
  headerWrapper: {
    flex: 1
  },
  listStyle: {
    flex: 1
  }
});
MessageContainer.defaultProps = {
  messages: [],
  user: {},
  renderFooter: null,
  renderMessage: null,
  listViewProps: {},
  onLoadEarlier: function onLoadEarlier() {}
};

_objectSpread({}, ReactNative.InteractionManager, {
  runAfterInteractions: function runAfterInteractions(f) {
    // ensure f get called, timeout at 500ms
    // @gre workaround https://github.com/facebook/react-native/issues/8624
    var called = false;
    var timeout = setTimeout(function () {
      called = true;
      f();
    }, 500);
    ReactNative.InteractionManager.runAfterInteractions(function () {
      if (called) return;
      clearTimeout(timeout);
      f();
    });
  }
});

// Needed for Composer auto grow and ScrollView animation
// TODO move these values to Constants.js (also with used colors #b2b2b2)

var MIN_COMPOSER_HEIGHT = 41;
var MAX_COMPOSER_HEIGHT = 100;

var GiftedChat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GiftedChat, _React$Component);

  function GiftedChat(props) {
    var _this;

    _classCallCheck(this, GiftedChat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GiftedChat).call(this, props)); // default values

    _this._isMounted = false;
    _this._keyboardHeight = 0;
    _this._bottomOffset = 0;
    _this._maxHeight = null;
    _this._isFirstLayout = true;
    _this._locale = 'en';
    _this._messages = [];
    _this.state = {
      isInitialized: false,
      // initialization will calculate maxHeight before rendering the chat
      composerHeight: MIN_COMPOSER_HEIGHT,
      messagesContainerHeight: null,
      typingDisabled: false
    };
    _this.onKeyboardWillShow = _this.onKeyboardWillShow.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onKeyboardWillHide = _this.onKeyboardWillHide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onKeyboardDidShow = _this.onKeyboardDidShow.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onKeyboardDidHide = _this.onKeyboardDidHide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSend = _this.onSend.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getLocale = _this.getLocale.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onInputSizeChanged = _this.onInputSizeChanged.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onInputTextChanged = _this.onInputTextChanged.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onMainViewLayout = _this.onMainViewLayout.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onInitialLayoutViewLayout = _this.onInitialLayoutViewLayout.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.invertibleScrollViewProps = {
      inverted: true,
      keyboardShouldPersistTaps: _this.props.keyboardShouldPersistTaps,
      onKeyboardWillShow: _this.onKeyboardWillShow,
      onKeyboardWillHide: _this.onKeyboardWillHide,
      onKeyboardDidShow: _this.onKeyboardDidShow,
      onKeyboardDidHide: _this.onKeyboardDidHide
    };
    return _this;
  }

  _createClass(GiftedChat, [{
    key: "componentWillMount",
    // getChildContext() {
    //   return {
    //     actionSheet: () => this._actionSheetRef,
    //     getLocale: this.getLocale,
    //   };
    // }
    value: function componentWillMount() {
      this.setIsMounted(true);
      this.initLocale();
      this.initMessages(this.props.messages);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setIsMounted(false);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.initMessages(nextProps.messages);
    }
  }, {
    key: "initLocale",
    value: function initLocale() {
      if (this.props.locale === null || moment$1.locales().indexOf(this.props.locale) === -1) {
        this.setLocale('en');
      } else {
        this.setLocale(this.props.locale);
      }
    }
  }, {
    key: "initMessages",
    value: function initMessages() {
      var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.setMessages(messages);
    }
  }, {
    key: "setLocale",
    value: function setLocale(locale) {
      this._locale = locale;
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this._locale;
    }
  }, {
    key: "setMessages",
    value: function setMessages(messages) {
      this._messages = messages;
    }
  }, {
    key: "getMessages",
    value: function getMessages() {
      return this._messages;
    }
  }, {
    key: "setMaxHeight",
    value: function setMaxHeight(height) {
      this._maxHeight = height;
    }
  }, {
    key: "getMaxHeight",
    value: function getMaxHeight() {
      return this._maxHeight;
    }
  }, {
    key: "setKeyboardHeight",
    value: function setKeyboardHeight(height) {
      this._keyboardHeight = 0;
    }
  }, {
    key: "getKeyboardHeight",
    value: function getKeyboardHeight() {
      return 0;
    }
  }, {
    key: "setBottomOffset",
    value: function setBottomOffset(value) {
      this._bottomOffset = value;
    }
  }, {
    key: "getBottomOffset",
    value: function getBottomOffset() {
      return this._bottomOffset;
    }
  }, {
    key: "setIsFirstLayout",
    value: function setIsFirstLayout(value) {
      this._isFirstLayout = value;
    }
  }, {
    key: "getIsFirstLayout",
    value: function getIsFirstLayout() {
      return this._isFirstLayout;
    }
  }, {
    key: "setIsTypingDisabled",
    value: function setIsTypingDisabled(value) {
      this.setState({
        typingDisabled: value
      });
    }
  }, {
    key: "getIsTypingDisabled",
    value: function getIsTypingDisabled() {
      return this.state.typingDisabled;
    }
  }, {
    key: "setIsMounted",
    value: function setIsMounted(value) {
      this._isMounted = value;
    }
  }, {
    key: "getIsMounted",
    value: function getIsMounted() {
      return this._isMounted;
    } // TODO
    // setMinInputToolbarHeight

  }, {
    key: "getMinInputToolbarHeight",
    value: function getMinInputToolbarHeight() {
      return this.props.renderAccessory ? this.props.minInputToolbarHeight * 2 : this.props.minInputToolbarHeight;
    }
  }, {
    key: "calculateInputToolbarHeight",
    value: function calculateInputToolbarHeight(composerHeight) {
      return composerHeight + (this.getMinInputToolbarHeight() - MIN_COMPOSER_HEIGHT);
    }
    /**
     * Returns the height, based on current window size, without taking the keyboard into account.
     */

  }, {
    key: "getBasicMessagesContainerHeight",
    value: function getBasicMessagesContainerHeight() {
      var composerHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.composerHeight;
      return this.getMaxHeight() - this.calculateInputToolbarHeight(composerHeight);
    }
    /**
     * Returns the height, based on current window size, taking the keyboard into account.
     */

  }, {
    key: "getMessagesContainerHeightWithKeyboard",
    value: function getMessagesContainerHeightWithKeyboard() {
      var composerHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.composerHeight;
      return this.getBasicMessagesContainerHeight(composerHeight) - this.getKeyboardHeight() + this.getBottomOffset();
    }
  }, {
    key: "prepareMessagesContainerHeight",
    value: function prepareMessagesContainerHeight(value) {
      if (this.props.isAnimated === true) {
        return new ReactNative.Animated.Value(value);
      }

      return value;
    }
  }, {
    key: "onKeyboardWillShow",
    value: function onKeyboardWillShow(e) {
      this.setIsTypingDisabled(true);
      this.setKeyboardHeight(e.endCoordinates ? e.endCoordinates.height : e.end.height);
      this.setBottomOffset(this.props.bottomOffset);
      var newMessagesContainerHeight = this.getMessagesContainerHeightWithKeyboard();

      if (this.props.isAnimated === true) {
        ReactNative.Animated.timing(this.state.messagesContainerHeight, {
          toValue: newMessagesContainerHeight,
          duration: 210
        }).start();
      } else {
        this.setState({
          messagesContainerHeight: newMessagesContainerHeight
        });
      }
    }
  }, {
    key: "onKeyboardWillHide",
    value: function onKeyboardWillHide() {
      this.setIsTypingDisabled(true);
      this.setKeyboardHeight(0);
      this.setBottomOffset(0);
      var newMessagesContainerHeight = this.getBasicMessagesContainerHeight();

      if (this.props.isAnimated === true) {
        ReactNative.Animated.timing(this.state.messagesContainerHeight, {
          toValue: newMessagesContainerHeight,
          duration: 210
        }).start();
      } else {
        this.setState({
          messagesContainerHeight: newMessagesContainerHeight
        });
      }
    }
  }, {
    key: "onKeyboardDidShow",
    value: function onKeyboardDidShow(e) {
      if (Platform.OS === 'android') {
        this.onKeyboardWillShow(e);
      }

      this.setIsTypingDisabled(false);
    }
  }, {
    key: "onKeyboardDidHide",
    value: function onKeyboardDidHide(e) {
      if (Platform.OS === 'android') {
        this.onKeyboardWillHide(e);
      }

      this.setIsTypingDisabled(false);
    }
  }, {
    key: "scrollToBottom",
    value: function scrollToBottom() {
      var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this._messageContainerRef === null) {
        return;
      }

      this._messageContainerRef.scrollTo({
        y: 0,
        animated: animated
      });
    }
  }, {
    key: "renderMessages",
    value: function renderMessages() {
      var _this2 = this;

      return React__default.createElement("div", {
        style: {
          height: this.state.messagesContainerHeight,
          display: 'flex'
        }
      }, React__default.createElement(MessageContainer, Object.assign({}, this.props, {
        invertibleScrollViewProps: this.invertibleScrollViewProps,
        messages: this.getMessages(),
        ref: function ref(component) {
          return _this2._messageContainerRef = component;
        }
      })), this.renderChatFooter());
    }
  }, {
    key: "onSend",
    value: function onSend() {
      var _this3 = this;

      var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var shouldResetInputToolbar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!Array.isArray(messages)) {
        messages = [messages];
      }

      messages = messages.map(function (message) {
        return _objectSpread({}, message, {
          user: _this3.props.user,
          createdAt: new Date(),
          id: _this3.props.messageIdGenerator()
        });
      });

      if (shouldResetInputToolbar === true) {
        this.setIsTypingDisabled(true);
        this.resetInputToolbar();
      }

      this.props.onSend(messages);
      this.scrollToBottom();

      if (shouldResetInputToolbar === true) {
        setTimeout(function () {
          if (_this3.getIsMounted() === true) {
            _this3.setIsTypingDisabled(false);
          }
        }, 100);
      }
    }
  }, {
    key: "resetInputToolbar",
    value: function resetInputToolbar() {
      if (this.textInput) {
        this.textInput.clear();
      }

      var newComposerHeight = MIN_COMPOSER_HEIGHT;
      var newMessagesContainerHeight = this.getMessagesContainerHeightWithKeyboard(newComposerHeight);
      this.setState({
        text: '',
        composerHeight: newComposerHeight,
        messagesContainerHeight: this.prepareMessagesContainerHeight(newMessagesContainerHeight)
      });
    }
  }, {
    key: "onInputSizeChanged",
    value: function onInputSizeChanged(size) {
      var newComposerHeight = Math.max(MIN_COMPOSER_HEIGHT, Math.min(MAX_COMPOSER_HEIGHT, size.height));
      var newMessagesContainerHeight = this.getMessagesContainerHeightWithKeyboard(newComposerHeight);
      this.setState({
        composerHeight: newComposerHeight,
        messagesContainerHeight: this.prepareMessagesContainerHeight(newMessagesContainerHeight)
      });
    }
  }, {
    key: "onInputTextChanged",
    value: function onInputTextChanged(text) {
      if (this.getIsTypingDisabled()) {
        return;
      }

      if (this.props.onInputTextChanged) {
        this.props.onInputTextChanged(text);
      }

      this.setState({
        text: text
      });
    }
  }, {
    key: "onInitialLayoutViewLayout",
    value: function onInitialLayoutViewLayout(e) {
      var layout = e.nativeEvent.layout;

      if (layout.height <= 0) {
        return;
      }

      this.setMaxHeight(1000);
      var newComposerHeight = '100%';
      var newMessagesContainerHeight = newComposerHeight; // this.getMessagesContainerHeightWithKeyboard(newComposerHeight);

      this.setState({
        isInitialized: true,
        text: '',
        composerHeight: newComposerHeight,
        messagesContainerHeight: this.prepareMessagesContainerHeight(newMessagesContainerHeight)
      });
    }
  }, {
    key: "onMainViewLayout",
    value: function onMainViewLayout(e) {// // fix an issue when keyboard is dismissing during the initialization
      // const layout = e.nativeEvent.layout;
      // if (this.getMaxHeight() !== layout.height || this.getIsFirstLayout() === true) {
      //   this.setMaxHeight(layout.height);
      //   this.setState({
      //     messagesContainerHeight: this.prepareMessagesContainerHeight(this.getBasicMessagesContainerHeight()),
      //   });
      // }
      // if (this.getIsFirstLayout() === true) {
      //   this.setIsFirstLayout(false);
      // }
    }
  }, {
    key: "renderInputToolbar",
    value: function renderInputToolbar() {
      var _this4 = this;

      var inputToolbarProps = _objectSpread({}, this.props, {
        text: this.state.text,
        onSend: this.onSend,
        onInputSizeChanged: this.onInputSizeChanged,
        onTextChanged: this.onInputTextChanged,
        textInputProps: _objectSpread({}, this.props.textInputProps, {
          ref: function ref(textInput) {
            return _this4.textInput = textInput;
          },
          maxLength: this.getIsTypingDisabled() ? 0 : this.props.maxInputLength
        })
      });

      if (this.getIsTypingDisabled()) {
        inputToolbarProps.textInputProps.maxLength = 0;
      }

      if (this.props.renderInputToolbar) {
        return this.props.renderInputToolbar(inputToolbarProps);
      }

      return React__default.createElement(InputToolbar, inputToolbarProps);
    }
  }, {
    key: "renderChatFooter",
    value: function renderChatFooter() {
      if (this.props.renderChatFooter) {
        var footerProps = _objectSpread({}, this.props);

        return this.props.renderChatFooter(footerProps);
      }

      return null;
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      if (this.props.renderLoading) {
        return this.props.renderLoading();
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isInitialized === true) {
        return React__default.createElement(ReactNative.View, {
          style: styles$e.container,
          onLayout: this.onMainViewLayout
        }, this.renderMessages(), this.renderInputToolbar());
      }

      return React__default.createElement(ReactNative.View, {
        style: styles$e.container,
        onLayout: this.onInitialLayoutViewLayout
      }, this.renderLoading());
    }
  }], [{
    key: "append",
    value: function append() {
      var currentMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var messages = arguments.length > 1 ? arguments[1] : undefined;

      if (!Array.isArray(messages)) {
        messages = [messages];
      }

      return messages.concat(currentMessages);
    }
  }, {
    key: "prepend",
    value: function prepend() {
      var currentMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var messages = arguments.length > 1 ? arguments[1] : undefined;

      if (!Array.isArray(messages)) {
        messages = [messages];
      }

      return currentMessages.concat(messages);
    }
  }]);

  return GiftedChat;
}(React__default.Component);

var styles$e = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  }
});
GiftedChat.defaultProps = {
  messages: [],
  onSend: function onSend() {},
  loadEarlier: false,
  onLoadEarlier: function onLoadEarlier() {},
  locale: null,
  isAnimated: false,
  keyboardShouldPersistTaps: 'never',
  renderAccessory: null,
  renderActions: null,
  renderAvatar: undefined,
  renderBubble: null,
  renderFooter: null,
  renderChatFooter: null,
  renderMessageText: null,
  renderMessageImage: null,
  renderComposer: null,
  renderCustomView: null,
  renderDay: null,
  renderInputToolbar: null,
  renderLoadEarlier: null,
  renderLoading: null,
  renderMessage: null,
  renderSend: null,
  renderTime: null,
  user: {},
  bottomOffset: 0,
  minInputToolbarHeight: 44,
  isLoadingEarlier: false,
  messageIdGenerator: function messageIdGenerator() {
    return uuid.v4();
  },
  maxInputLength: null
};

exports.GiftedChat = GiftedChat;
exports.Actions = Actions;
exports.Avatar = Avatar;
exports.Bubble = Bubble;
exports.MessageImage = MessageImage;
exports.MessageText = MessageText;
exports.Composer = Composer;
exports.Day = Day;
exports.InputToolbar = InputToolbar;
exports.LoadEarlier = LoadEarlier;
exports.Message = Message;
exports.MessageContainer = MessageContainer;
exports.Send = Send;
exports.Time = Time;
exports.GiftedAvatar = GiftedAvatar;
exports.utils = utils;
