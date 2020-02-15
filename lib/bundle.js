'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
var react__default = _interopDefault(react);
var core = require('@emotion/core');

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1gi04m8-btnStyle",
  styles: "padding:10px 20px;font-size:4rem;border:none;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.1);;label:btnStyle;"
} : {
  name: "1gi04m8-btnStyle",
  styles: "padding:10px 20px;font-size:4rem;border:none;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.1);;label:btnStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZc0IiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmZ1bmN0aW9uIEJ1dHRvbigpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U3RhdGUoIXN0YXRlKVxuICAgIH0sIDEwMDApXG4gIH0pXG5cbiAgY29uc3QgYnRuU3R5bGUgPSBjc3NgXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgICR7YnRuU3R5bGV9O1xuICAgICAgICBjb2xvcjogJHtzdGF0ZSA/ICdyb3lhbGJsdWUnIDogJ2hvdHBpbmsnfTtcbiAgICAgIGB9XG4gICAgPlxuICAgICAgQnV0dG9uXG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

function Button() {
  var _useState = react.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  react.useEffect(function () {
    setTimeout(function () {
      setState(!state);
    }, 1000);
  });
  var btnStyle = _ref;
  return core.jsx("button", {
    css:
    /*#__PURE__*/
    core.css(btnStyle, ";color:", state ? 'royalblue' : 'hotpink', ";;label:Button;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmMiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmZ1bmN0aW9uIEJ1dHRvbigpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U3RhdGUoIXN0YXRlKVxuICAgIH0sIDEwMDApXG4gIH0pXG5cbiAgY29uc3QgYnRuU3R5bGUgPSBjc3NgXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgICR7YnRuU3R5bGV9O1xuICAgICAgICBjb2xvcjogJHtzdGF0ZSA/ICdyb3lhbGJsdWUnIDogJ2hvdHBpbmsnfTtcbiAgICAgIGB9XG4gICAgPlxuICAgICAgQnV0dG9uXG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iXX0= */"))
  }, "Button");
}

exports.Button = Button;
