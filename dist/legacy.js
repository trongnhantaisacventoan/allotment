"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e28) { throw _e28; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e29) { didErr = true; err = _e29; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var e = require("react"),
  t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function i(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e;
}
var n,
  s = {
    exports: {}
  };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
n = s, function () {
  var e = {}.hasOwnProperty;
  function t() {
    for (var i = [], n = 0; n < arguments.length; n++) {
      var s = arguments[n];
      if (s) {
        var r = _typeof(s);
        if ("string" === r || "number" === r) i.push(s);else if (Array.isArray(s)) {
          if (s.length) {
            var o = t.apply(null, s);
            o && i.push(o);
          }
        } else if ("object" === r) {
          if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) {
            i.push(s.toString());
            continue;
          }
          for (var a in s) e.call(s, a) && s[a] && i.push(a);
        }
      }
    }
    return i.join(" ");
  }
  n.exports ? (t["default"] = t, n.exports = t) : window.classNames = t;
}();
var r = i(s.exports),
  o = NaN,
  a = "[object Symbol]",
  u = /^\s+|\s+$/g,
  l = /^[-+]0x[0-9a-f]+$/i,
  c = /^0b[01]+$/i,
  h = /^0o[0-7]+$/i,
  f = parseInt,
  d = Object.prototype.toString;
function v(e) {
  var t = _typeof(e);
  return !!e && ("object" == t || "function" == t);
}
function m(e) {
  if ("number" == typeof e) return e;
  if (function (e) {
    return "symbol" == _typeof(e) || function (e) {
      return !!e && "object" == _typeof(e);
    }(e) && d.call(e) == a;
  }(e)) return o;
  if (v(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = v(t) ? t + "" : t;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(u, "");
  var i = c.test(e);
  return i || h.test(e) ? f(e.slice(2), i ? 2 : 8) : l.test(e) ? o : +e;
}
var p = i(function (e, t, i) {
    return void 0 === i && (i = t, t = void 0), void 0 !== i && (i = (i = m(i)) == i ? i : 0), void 0 !== t && (t = (t = m(t)) == t ? t : 0), function (e, t, i) {
      return e == e && (void 0 !== i && (e = e <= i ? e : i), void 0 !== t && (e = e >= t ? e : t)), e;
    }(m(e), t, i);
  }),
  y = {
    exports: {}
  };
!function (e, i) {
  var n = "__lodash_hash_undefined__",
    s = 1,
    r = 2,
    o = 9007199254740991,
    a = "[object Arguments]",
    u = "[object Array]",
    l = "[object AsyncFunction]",
    c = "[object Boolean]",
    h = "[object Date]",
    f = "[object Error]",
    d = "[object Function]",
    v = "[object GeneratorFunction]",
    m = "[object Map]",
    p = "[object Number]",
    y = "[object Null]",
    b = "[object Object]",
    g = "[object Promise]",
    z = "[object Proxy]",
    w = "[object RegExp]",
    S = "[object Set]",
    _ = "[object String]",
    I = "[object Symbol]",
    x = "[object Undefined]",
    E = "[object WeakMap]",
    V = "[object ArrayBuffer]",
    j = "[object DataView]",
    D = /^\[object .+?Constructor\]$/,
    L = /^(?:0|[1-9]\d*)$/,
    O = {};
  O["[object Float32Array]"] = O["[object Float64Array]"] = O["[object Int8Array]"] = O["[object Int16Array]"] = O["[object Int32Array]"] = O["[object Uint8Array]"] = O["[object Uint8ClampedArray]"] = O["[object Uint16Array]"] = O["[object Uint32Array]"] = !0, O[a] = O[u] = O[V] = O[c] = O[j] = O[h] = O[f] = O[d] = O[m] = O[p] = O[b] = O[w] = O[S] = O[_] = O[E] = !1;
  var N = "object" == _typeof(t) && t && t.Object === Object && t,
    M = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
    P = N || M || Function("return this")(),
    A = i && !i.nodeType && i,
    C = A && e && !e.nodeType && e,
    T = C && C.exports === A,
    F = T && N.process,
    R = function () {
      try {
        return F && F.binding && F.binding("util");
      } catch (e) {}
    }(),
    k = R && R.isTypedArray;
  function H(e, t) {
    for (var i = -1, n = null == e ? 0 : e.length; ++i < n;) if (t(e[i], i, e)) return !0;
    return !1;
  }
  function $(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (e, n) {
      i[++t] = [n, e];
    }), i;
  }
  function Y(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (e) {
      i[++t] = e;
    }), i;
  }
  var B,
    W,
    G,
    U = Array.prototype,
    X = Function.prototype,
    J = Object.prototype,
    K = P["__core-js_shared__"],
    Z = X.toString,
    q = J.hasOwnProperty,
    Q = (B = /[^.]+$/.exec(K && K.keys && K.keys.IE_PROTO || "")) ? "Symbol(src)_1." + B : "",
    ee = J.toString,
    te = RegExp("^" + Z.call(q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    ie = T ? P.Buffer : void 0,
    ne = P.Symbol,
    se = P.Uint8Array,
    re = J.propertyIsEnumerable,
    oe = U.splice,
    ae = ne ? ne.toStringTag : void 0,
    ue = Object.getOwnPropertySymbols,
    le = ie ? ie.isBuffer : void 0,
    ce = (W = Object.keys, G = Object, function (e) {
      return W(G(e));
    }),
    he = Re(P, "DataView"),
    fe = Re(P, "Map"),
    de = Re(P, "Promise"),
    ve = Re(P, "Set"),
    me = Re(P, "WeakMap"),
    pe = Re(Object, "create"),
    ye = Ye(he),
    be = Ye(fe),
    ge = Ye(de),
    ze = Ye(ve),
    we = Ye(me),
    Se = ne ? ne.prototype : void 0,
    _e = Se ? Se.valueOf : void 0;
  function Ie(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  function xe(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  function Ee(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  function Ve(e) {
    var t = -1,
      i = null == e ? 0 : e.length;
    for (this.__data__ = new Ee(); ++t < i;) this.add(e[t]);
  }
  function je(e) {
    var t = this.__data__ = new xe(e);
    this.size = t.size;
  }
  function De(e, t) {
    var i = Ge(e),
      n = !i && We(e),
      s = !i && !n && Ue(e),
      r = !i && !n && !s && qe(e),
      o = i || n || s || r,
      a = o ? function (e, t) {
        for (var i = -1, n = Array(e); ++i < e;) n[i] = t(i);
        return n;
      }(e.length, String) : [],
      u = a.length;
    for (var l in e) !t && !q.call(e, l) || o && ("length" == l || s && ("offset" == l || "parent" == l) || r && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || $e(l, u)) || a.push(l);
    return a;
  }
  function Le(e, t) {
    for (var i = e.length; i--;) if (Be(e[i][0], t)) return i;
    return -1;
  }
  function Oe(e) {
    return null == e ? void 0 === e ? x : y : ae && ae in Object(e) ? function (e) {
      var t = q.call(e, ae),
        i = e[ae];
      try {
        e[ae] = void 0;
        var n = !0;
      } catch (e) {}
      var s = ee.call(e);
      n && (t ? e[ae] = i : delete e[ae]);
      return s;
    }(e) : function (e) {
      return ee.call(e);
    }(e);
  }
  function Ne(e) {
    return Ze(e) && Oe(e) == a;
  }
  function Me(e, t, i, n, o) {
    return e === t || (null == e || null == t || !Ze(e) && !Ze(t) ? e != e && t != t : function (e, t, i, n, o, l) {
      var d = Ge(e),
        v = Ge(t),
        y = d ? u : He(e),
        g = v ? u : He(t),
        z = (y = y == a ? b : y) == b,
        x = (g = g == a ? b : g) == b,
        E = y == g;
      if (E && Ue(e)) {
        if (!Ue(t)) return !1;
        d = !0, z = !1;
      }
      if (E && !z) return l || (l = new je()), d || qe(e) ? Ce(e, t, i, n, o, l) : function (e, t, i, n, o, a, u) {
        switch (i) {
          case j:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
          case V:
            return !(e.byteLength != t.byteLength || !a(new se(e), new se(t)));
          case c:
          case h:
          case p:
            return Be(+e, +t);
          case f:
            return e.name == t.name && e.message == t.message;
          case w:
          case _:
            return e == t + "";
          case m:
            var l = $;
          case S:
            var d = n & s;
            if (l || (l = Y), e.size != t.size && !d) return !1;
            var v = u.get(e);
            if (v) return v == t;
            n |= r, u.set(e, t);
            var y = Ce(l(e), l(t), n, o, a, u);
            return u["delete"](e), y;
          case I:
            if (_e) return _e.call(e) == _e.call(t);
        }
        return !1;
      }(e, t, y, i, n, o, l);
      if (!(i & s)) {
        var D = z && q.call(e, "__wrapped__"),
          L = x && q.call(t, "__wrapped__");
        if (D || L) {
          var O = D ? e.value() : e,
            N = L ? t.value() : t;
          return l || (l = new je()), o(O, N, i, n, l);
        }
      }
      if (!E) return !1;
      return l || (l = new je()), function (e, t, i, n, r, o) {
        var a = i & s,
          u = Te(e),
          l = u.length,
          c = Te(t),
          h = c.length;
        if (l != h && !a) return !1;
        var f = l;
        for (; f--;) {
          var d = u[f];
          if (!(a ? d in t : q.call(t, d))) return !1;
        }
        var v = o.get(e);
        if (v && o.get(t)) return v == t;
        var m = !0;
        o.set(e, t), o.set(t, e);
        var p = a;
        for (; ++f < l;) {
          var y = e[d = u[f]],
            b = t[d];
          if (n) var g = a ? n(b, y, d, t, e, o) : n(y, b, d, e, t, o);
          if (!(void 0 === g ? y === b || r(y, b, i, n, o) : g)) {
            m = !1;
            break;
          }
          p || (p = "constructor" == d);
        }
        if (m && !p) {
          var z = e.constructor,
            w = t.constructor;
          z == w || !("constructor" in e) || !("constructor" in t) || "function" == typeof z && z instanceof z && "function" == typeof w && w instanceof w || (m = !1);
        }
        return o["delete"](e), o["delete"](t), m;
      }(e, t, i, n, o, l);
    }(e, t, i, n, Me, o));
  }
  function Pe(e) {
    return !(!Ke(e) || function (e) {
      return !!Q && Q in e;
    }(e)) && (Xe(e) ? te : D).test(Ye(e));
  }
  function Ae(e) {
    if (i = (t = e) && t.constructor, n = "function" == typeof i && i.prototype || J, t !== n) return ce(e);
    var t,
      i,
      n,
      s = [];
    for (var r in Object(e)) q.call(e, r) && "constructor" != r && s.push(r);
    return s;
  }
  function Ce(e, t, i, n, o, a) {
    var u = i & s,
      l = e.length,
      c = t.length;
    if (l != c && !(u && c > l)) return !1;
    var h = a.get(e);
    if (h && a.get(t)) return h == t;
    var f = -1,
      d = !0,
      v = i & r ? new Ve() : void 0;
    for (a.set(e, t), a.set(t, e); ++f < l;) {
      var m = e[f],
        p = t[f];
      if (n) var y = u ? n(p, m, f, t, e, a) : n(m, p, f, e, t, a);
      if (void 0 !== y) {
        if (y) continue;
        d = !1;
        break;
      }
      if (v) {
        if (!H(t, function (e, t) {
          if (s = t, !v.has(s) && (m === e || o(m, e, i, n, a))) return v.push(t);
          var s;
        })) {
          d = !1;
          break;
        }
      } else if (m !== p && !o(m, p, i, n, a)) {
        d = !1;
        break;
      }
    }
    return a["delete"](e), a["delete"](t), d;
  }
  function Te(e) {
    return function (e, t, i) {
      var n = t(e);
      return Ge(e) ? n : function (e, t) {
        for (var i = -1, n = t.length, s = e.length; ++i < n;) e[s + i] = t[i];
        return e;
      }(n, i(e));
    }(e, Qe, ke);
  }
  function Fe(e, t) {
    var i,
      n,
      s = e.__data__;
    return ("string" == (n = _typeof(i = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? s["string" == typeof t ? "string" : "hash"] : s.map;
  }
  function Re(e, t) {
    var i = function (e, t) {
      return null == e ? void 0 : e[t];
    }(e, t);
    return Pe(i) ? i : void 0;
  }
  Ie.prototype.clear = function () {
    this.__data__ = pe ? pe(null) : {}, this.size = 0;
  }, Ie.prototype["delete"] = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }, Ie.prototype.get = function (e) {
    var t = this.__data__;
    if (pe) {
      var i = t[e];
      return i === n ? void 0 : i;
    }
    return q.call(t, e) ? t[e] : void 0;
  }, Ie.prototype.has = function (e) {
    var t = this.__data__;
    return pe ? void 0 !== t[e] : q.call(t, e);
  }, Ie.prototype.set = function (e, t) {
    var i = this.__data__;
    return this.size += this.has(e) ? 0 : 1, i[e] = pe && void 0 === t ? n : t, this;
  }, xe.prototype.clear = function () {
    this.__data__ = [], this.size = 0;
  }, xe.prototype["delete"] = function (e) {
    var t = this.__data__,
      i = Le(t, e);
    return !(i < 0) && (i == t.length - 1 ? t.pop() : oe.call(t, i, 1), --this.size, !0);
  }, xe.prototype.get = function (e) {
    var t = this.__data__,
      i = Le(t, e);
    return i < 0 ? void 0 : t[i][1];
  }, xe.prototype.has = function (e) {
    return Le(this.__data__, e) > -1;
  }, xe.prototype.set = function (e, t) {
    var i = this.__data__,
      n = Le(i, e);
    return n < 0 ? (++this.size, i.push([e, t])) : i[n][1] = t, this;
  }, Ee.prototype.clear = function () {
    this.size = 0, this.__data__ = {
      hash: new Ie(),
      map: new (fe || xe)(),
      string: new Ie()
    };
  }, Ee.prototype["delete"] = function (e) {
    var t = Fe(this, e)["delete"](e);
    return this.size -= t ? 1 : 0, t;
  }, Ee.prototype.get = function (e) {
    return Fe(this, e).get(e);
  }, Ee.prototype.has = function (e) {
    return Fe(this, e).has(e);
  }, Ee.prototype.set = function (e, t) {
    var i = Fe(this, e),
      n = i.size;
    return i.set(e, t), this.size += i.size == n ? 0 : 1, this;
  }, Ve.prototype.add = Ve.prototype.push = function (e) {
    return this.__data__.set(e, n), this;
  }, Ve.prototype.has = function (e) {
    return this.__data__.has(e);
  }, je.prototype.clear = function () {
    this.__data__ = new xe(), this.size = 0;
  }, je.prototype["delete"] = function (e) {
    var t = this.__data__,
      i = t["delete"](e);
    return this.size = t.size, i;
  }, je.prototype.get = function (e) {
    return this.__data__.get(e);
  }, je.prototype.has = function (e) {
    return this.__data__.has(e);
  }, je.prototype.set = function (e, t) {
    var i = this.__data__;
    if (i instanceof xe) {
      var n = i.__data__;
      if (!fe || n.length < 199) return n.push([e, t]), this.size = ++i.size, this;
      i = this.__data__ = new Ee(n);
    }
    return i.set(e, t), this.size = i.size, this;
  };
  var ke = ue ? function (e) {
      return null == e ? [] : (e = Object(e), function (e, t) {
        for (var i = -1, n = null == e ? 0 : e.length, s = 0, r = []; ++i < n;) {
          var o = e[i];
          t(o, i, e) && (r[s++] = o);
        }
        return r;
      }(ue(e), function (t) {
        return re.call(e, t);
      }));
    } : function () {
      return [];
    },
    He = Oe;
  function $e(e, t) {
    return !!(t = null == t ? o : t) && ("number" == typeof e || L.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  function Ye(e) {
    if (null != e) {
      try {
        return Z.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  }
  function Be(e, t) {
    return e === t || e != e && t != t;
  }
  (he && He(new he(new ArrayBuffer(1))) != j || fe && He(new fe()) != m || de && He(de.resolve()) != g || ve && He(new ve()) != S || me && He(new me()) != E) && (He = function He(e) {
    var t = Oe(e),
      i = t == b ? e.constructor : void 0,
      n = i ? Ye(i) : "";
    if (n) switch (n) {
      case ye:
        return j;
      case be:
        return m;
      case ge:
        return g;
      case ze:
        return S;
      case we:
        return E;
    }
    return t;
  });
  var We = Ne(function () {
      return arguments;
    }()) ? Ne : function (e) {
      return Ze(e) && q.call(e, "callee") && !re.call(e, "callee");
    },
    Ge = Array.isArray;
  var Ue = le || function () {
    return !1;
  };
  function Xe(e) {
    if (!Ke(e)) return !1;
    var t = Oe(e);
    return t == d || t == v || t == l || t == z;
  }
  function Je(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o;
  }
  function Ke(e) {
    var t = _typeof(e);
    return null != e && ("object" == t || "function" == t);
  }
  function Ze(e) {
    return null != e && "object" == _typeof(e);
  }
  var qe = k ? function (e) {
    return function (t) {
      return e(t);
    };
  }(k) : function (e) {
    return Ze(e) && Je(e.length) && !!O[Oe(e)];
  };
  function Qe(e) {
    return null != (t = e) && Je(t.length) && !Xe(t) ? De(e) : Ae(e);
    var t;
  }
  e.exports = function (e, t) {
    return Me(e, t);
  };
}(y, y.exports);
var b = i(y.exports);
function g(e, t, i) {
  return e[t] ? e[t][0] ? e[t][0][i] : e[t][i] : "contentBoxSize" === t ? e.contentRect["inlineSize" === i ? "width" : "height"] : void 0;
}
function z(t) {
  void 0 === t && (t = {});
  var i = t.onResize,
    n = e.useRef(void 0);
  n.current = i;
  var s = t.round || Math.round,
    r = e.useRef(),
    o = e.useState({
      width: void 0,
      height: void 0
    }),
    a = o[0],
    u = o[1],
    l = e.useRef(!1);
  e.useEffect(function () {
    return l.current = !1, function () {
      l.current = !0;
    };
  }, []);
  var c = e.useRef({
      width: void 0,
      height: void 0
    }),
    h = function (t, i) {
      var n = e.useRef(null),
        s = e.useRef(null);
      s.current = i;
      var r = e.useRef(null);
      e.useEffect(function () {
        o();
      });
      var o = e.useCallback(function () {
        var e = r.current,
          i = s.current,
          o = e || (i ? i instanceof Element ? i : i.current : null);
        n.current && n.current.element === o && n.current.subscriber === t || (n.current && n.current.cleanup && n.current.cleanup(), n.current = {
          element: o,
          subscriber: t,
          cleanup: o ? t(o) : void 0
        });
      }, [t]);
      return e.useEffect(function () {
        return function () {
          n.current && n.current.cleanup && (n.current.cleanup(), n.current = null);
        };
      }, []), e.useCallback(function (e) {
        r.current = e, o();
      }, [o]);
    }(e.useCallback(function (e) {
      return r.current && r.current.box === t.box && r.current.round === s || (r.current = {
        box: t.box,
        round: s,
        instance: new ResizeObserver(function (e) {
          var i = e[0],
            r = "border-box" === t.box ? "borderBoxSize" : "device-pixel-content-box" === t.box ? "devicePixelContentBoxSize" : "contentBoxSize",
            o = g(i, r, "inlineSize"),
            a = g(i, r, "blockSize"),
            h = o ? s(o) : void 0,
            f = a ? s(a) : void 0;
          if (c.current.width !== h || c.current.height !== f) {
            var d = {
              width: h,
              height: f
            };
            c.current.width = h, c.current.height = f, n.current ? n.current(d) : l.current || u(d);
          }
        })
      }), r.current.instance.observe(e, {
        box: t.box
      }), function () {
        r.current && r.current.instance.unobserve(e);
      };
    }, [t.box, s]), t.ref);
  return e.useMemo(function () {
    return {
      ref: h,
      width: a.width,
      height: a.height
    };
  }, [h, a.width, a.height]);
}
var w = "allotment-module_splitView__L-yRc",
  S = "allotment-module_sashContainer__fzwJF",
  _ = "allotment-module_splitViewContainer__rQnVa",
  I = "allotment-module_splitViewView__MGZ6O",
  x = "allotment-module_vertical__WSwwa",
  E = "allotment-module_horizontal__7doS8",
  V = "allotment-module_separatorBorder__x-rDS";
var j,
  D = !1,
  L = !1;
"object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && (j = navigator.userAgent, L = j.indexOf("Macintosh") >= 0, D = (j.indexOf("Macintosh") >= 0 || j.indexOf("iPad") >= 0 || j.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
var O = D,
  N = L,
  M = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? e.useLayoutEffect : e.useEffect;
var P = /*#__PURE__*/function () {
  function P() {
    _classCallCheck(this, P);
    this._size = void 0;
  }
  _createClass(P, [{
    key: "getSize",
    value: function getSize() {
      return this._size;
    }
  }, {
    key: "setSize",
    value: function setSize(e) {
      this._size = e;
    }
  }]);
  return P;
}();
function A(e, t) {
  var i = e.length,
    n = i - t.length;
  return n >= 0 && e.slice(n, i) === t;
}
var C = {
  exports: {}
};
!function (e) {
  var t = Object.prototype.hasOwnProperty,
    i = "~";
  function n() {}
  function s(e, t, i) {
    this.fn = e, this.context = t, this.once = i || !1;
  }
  function r(e, t, n, r, o) {
    if ("function" != typeof n) throw new TypeError("The listener must be a function");
    var a = new s(n, r || e, o),
      u = i ? i + t : t;
    return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], a] : e._events[u].push(a) : (e._events[u] = a, e._eventsCount++), e;
  }
  function o(e, t) {
    0 == --e._eventsCount ? e._events = new n() : delete e._events[t];
  }
  function a() {
    this._events = new n(), this._eventsCount = 0;
  }
  Object.create && (n.prototype = Object.create(null), new n().__proto__ || (i = !1)), a.prototype.eventNames = function () {
    var e,
      n,
      s = [];
    if (0 === this._eventsCount) return s;
    for (n in e = this._events) t.call(e, n) && s.push(i ? n.slice(1) : n);
    return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(e)) : s;
  }, a.prototype.listeners = function (e) {
    var t = i ? i + e : e,
      n = this._events[t];
    if (!n) return [];
    if (n.fn) return [n.fn];
    for (var s = 0, r = n.length, o = new Array(r); s < r; s++) o[s] = n[s].fn;
    return o;
  }, a.prototype.listenerCount = function (e) {
    var t = i ? i + e : e,
      n = this._events[t];
    return n ? n.fn ? 1 : n.length : 0;
  }, a.prototype.emit = function (e, t, n, s, r, o) {
    var a = i ? i + e : e;
    if (!this._events[a]) return !1;
    var u,
      l,
      c = this._events[a],
      h = arguments.length;
    if (c.fn) {
      switch (c.once && this.removeListener(e, c.fn, void 0, !0), h) {
        case 1:
          return c.fn.call(c.context), !0;
        case 2:
          return c.fn.call(c.context, t), !0;
        case 3:
          return c.fn.call(c.context, t, n), !0;
        case 4:
          return c.fn.call(c.context, t, n, s), !0;
        case 5:
          return c.fn.call(c.context, t, n, s, r), !0;
        case 6:
          return c.fn.call(c.context, t, n, s, r, o), !0;
      }
      for (l = 1, u = new Array(h - 1); l < h; l++) u[l - 1] = arguments[l];
      c.fn.apply(c.context, u);
    } else {
      var f,
        d = c.length;
      for (l = 0; l < d; l++) switch (c[l].once && this.removeListener(e, c[l].fn, void 0, !0), h) {
        case 1:
          c[l].fn.call(c[l].context);
          break;
        case 2:
          c[l].fn.call(c[l].context, t);
          break;
        case 3:
          c[l].fn.call(c[l].context, t, n);
          break;
        case 4:
          c[l].fn.call(c[l].context, t, n, s);
          break;
        default:
          if (!u) for (f = 1, u = new Array(h - 1); f < h; f++) u[f - 1] = arguments[f];
          c[l].fn.apply(c[l].context, u);
      }
    }
    return !0;
  }, a.prototype.on = function (e, t, i) {
    return r(this, e, t, i, !1);
  }, a.prototype.once = function (e, t, i) {
    return r(this, e, t, i, !0);
  }, a.prototype.removeListener = function (e, t, n, s) {
    var r = i ? i + e : e;
    if (!this._events[r]) return this;
    if (!t) return o(this, r), this;
    var a = this._events[r];
    if (a.fn) a.fn !== t || s && !a.once || n && a.context !== n || o(this, r);else {
      for (var u = 0, l = [], c = a.length; u < c; u++) (a[u].fn !== t || s && !a[u].once || n && a[u].context !== n) && l.push(a[u]);
      l.length ? this._events[r] = 1 === l.length ? l[0] : l : o(this, r);
    }
    return this;
  }, a.prototype.removeAllListeners = function (e) {
    var t;
    return e ? (t = i ? i + e : e, this._events[t] && o(this, t)) : (this._events = new n(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = i, a.EventEmitter = a, e.exports = a;
}(C);
var T = i(C.exports);
function F(e, t) {
  var i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.unshift(t));
}
function R(e, t) {
  var i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.push(t));
}
function k(e, t) {
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var n = Math.max(0, Math.ceil((t - e) / i)),
    s = new Array(n);
  var r = -1;
  for (; ++r < n;) s[r] = e + r * i;
  return s;
}
var H = NaN,
  $ = "[object Symbol]",
  Y = /^\s+|\s+$/g,
  B = /^[-+]0x[0-9a-f]+$/i,
  W = /^0b[01]+$/i,
  G = /^0o[0-7]+$/i,
  U = parseInt,
  X = "object" == _typeof(t) && t && t.Object === Object && t,
  J = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
  K = X || J || Function("return this")(),
  Z = Object.prototype.toString,
  q = Math.max,
  Q = Math.min,
  ee = function ee() {
    return K.Date.now();
  };
function te(e) {
  var t = _typeof(e);
  return !!e && ("object" == t || "function" == t);
}
function ie(e) {
  if ("number" == typeof e) return e;
  if (function (e) {
    return "symbol" == _typeof(e) || function (e) {
      return !!e && "object" == _typeof(e);
    }(e) && Z.call(e) == $;
  }(e)) return H;
  if (te(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = te(t) ? t + "" : t;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(Y, "");
  var i = W.test(e);
  return i || G.test(e) ? U(e.slice(2), i ? 2 : 8) : B.test(e) ? H : +e;
}
var ne = i(function (e, t, i) {
    var n,
      s,
      r,
      o,
      a,
      u,
      l = 0,
      c = !1,
      h = !1,
      f = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    function d(t) {
      var i = n,
        r = s;
      return n = s = void 0, l = t, o = e.apply(r, i);
    }
    function v(e) {
      var i = e - u;
      return void 0 === u || i >= t || i < 0 || h && e - l >= r;
    }
    function m() {
      var e = ee();
      if (v(e)) return p(e);
      a = setTimeout(m, function (e) {
        var i = t - (e - u);
        return h ? Q(i, r - (e - l)) : i;
      }(e));
    }
    function p(e) {
      return a = void 0, f && n ? d(e) : (n = s = void 0, o);
    }
    function y() {
      var e = ee(),
        i = v(e);
      if (n = arguments, s = this, u = e, i) {
        if (void 0 === a) return function (e) {
          return l = e, a = setTimeout(m, t), c ? d(e) : o;
        }(u);
        if (h) return a = setTimeout(m, t), d(u);
      }
      return void 0 === a && (a = setTimeout(m, t)), o;
    }
    return t = ie(t) || 0, te(i) && (c = !!i.leading, r = (h = "maxWait" in i) ? q(ie(i.maxWait) || 0, t) : r, f = "trailing" in i ? !!i.trailing : f), y.cancel = function () {
      void 0 !== a && clearTimeout(a), l = 0, n = u = s = a = void 0;
    }, y.flush = function () {
      return void 0 === a ? o : p(ee());
    }, y;
  }),
  se = "sash-module_sash__K-9lB",
  re = "sash-module_disabled__Hm-wx",
  oe = "sash-module_mac__Jf6OJ",
  ae = "sash-module_vertical__pB-rs",
  ue = "sash-module_minimum__-UKxp",
  le = "sash-module_maximum__TCWxD",
  ce = "sash-module_horizontal__kFbiw",
  he = "sash-module_hover__80W6I",
  fe = "sash-module_active__bJspD";
var de = function (e) {
    return e.Vertical = "VERTICAL", e.Horizontal = "HORIZONTAL", e;
  }({}),
  ve = function (e) {
    return e.Disabled = "DISABLED", e.Minimum = "MINIMUM", e.Maximum = "MAXIMUM", e.Enabled = "ENABLED", e;
  }({}),
  me = O ? 20 : 8;
var pe = new T();
var ye = /*#__PURE__*/function (_T) {
  _inherits(ye, _T);
  var _super = _createSuper(ye);
  function ye(e, t, i, n) {
    var _i$orientation;
    var _this;
    _classCallCheck(this, ye);
    _this = _super.call(this), _this.el = void 0, _this.layoutProvider = void 0, _this.orientation = void 0, _this.size = void 0, _this.hoverDelay = 300, _this.hoverDelayer = ne(function (e) {
      return e.classList.add("sash-hover", he);
    }, _this.hoverDelay), _this._state = ve.Enabled, _this.onPointerStart = function (e) {
      var t = e.pageX,
        i = e.pageY,
        n = {
          startX: t,
          currentX: t,
          startY: i,
          currentY: i
        };
      _this.el.classList.add("sash-active", fe), _this.emit("start", n), _this.el.setPointerCapture(e.pointerId);
      var s = function s(e) {
          e.preventDefault();
          var n = {
            startX: t,
            currentX: e.pageX,
            startY: i,
            currentY: e.pageY
          };
          _this.emit("change", n);
        },
        r = function r(e) {
          e.preventDefault(), _this.el.classList.remove("sash-active", fe), _this.hoverDelayer.cancel(), _this.emit("end"), _this.el.releasePointerCapture(e.pointerId), window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", r);
        };
      window.addEventListener("pointermove", s), window.addEventListener("pointerup", r);
    }, _this.onPointerDoublePress = function () {
      _this.emit("reset");
    }, _this.onMouseEnter = function () {
      _this.el.classList.contains(fe) ? (_this.hoverDelayer.cancel(), _this.el.classList.add("sash-hover", he)) : _this.hoverDelayer(_this.el);
    }, _this.onMouseLeave = function () {
      _this.hoverDelayer.cancel(), _this.el.classList.remove("sash-hover", he);
    }, _this.el = n.createElement("div"), _this.el.classList.add("sash", se), _this.el.dataset.testid = "sash", e.append(_this.el), N && _this.el.classList.add("sash-mac", oe), _this.el.addEventListener("pointerdown", _this.onPointerStart), _this.el.addEventListener("dblclick", _this.onPointerDoublePress), _this.el.addEventListener("mouseenter", _this.onMouseEnter), _this.el.addEventListener("mouseleave", _this.onMouseLeave), "number" == typeof i.size ? (_this.size = i.size, i.orientation === de.Vertical ? _this.el.style.width = "".concat(_this.size, "px") : _this.el.style.height = "".concat(_this.size, "px")) : (_this.size = me, pe.on("onDidChangeGlobalSize", function (e) {
      _this.size = e, _this.layout();
    })), _this.layoutProvider = t, _this.orientation = (_i$orientation = i.orientation) !== null && _i$orientation !== void 0 ? _i$orientation : de.Vertical, _this.orientation === de.Horizontal ? (_this.el.classList.add("sash-horizontal", ce), _this.el.classList.remove("sash-vertical", ae)) : (_this.el.classList.remove("sash-horizontal", ce), _this.el.classList.add("sash-vertical", ae)), _this.layout();
    return _this;
  }
  _createClass(ye, [{
    key: "state",
    get: function get() {
      return this._state;
    },
    set: function set(e) {
      this._state !== e && (this.el.classList.toggle(re, e === ve.Disabled), this.el.classList.toggle("dash-disabled", e === ve.Disabled), this.el.classList.toggle(ue, e === ve.Minimum), this.el.classList.toggle("sash-minimum", e === ve.Minimum), this.el.classList.toggle(le, e === ve.Maximum), this.el.classList.toggle("sash-maximum", e === ve.Maximum), this._state = e, this.emit("enablementChange", e));
    }
  }, {
    key: "layout",
    value: function layout() {
      if (this.orientation === de.Vertical) {
        var _e2 = this.layoutProvider;
        this.el.style.left = _e2.getVerticalSashLeft(this) - this.size / 2 + "px", _e2.getVerticalSashTop && (this.el.style.top = _e2.getVerticalSashTop(this) + "px"), _e2.getVerticalSashHeight && (this.el.style.height = _e2.getVerticalSashHeight(this) + "px");
      } else {
        var _e3 = this.layoutProvider;
        this.el.style.top = _e3.getHorizontalSashTop(this) - this.size / 2 + "px", _e3.getHorizontalSashLeft && (this.el.style.left = _e3.getHorizontalSashLeft(this) + "px"), _e3.getHorizontalSashWidth && (this.el.style.width = _e3.getHorizontalSashWidth(this) + "px");
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _this2 = this;
      this.el.removeEventListener("pointerdown", this.onPointerStart), this.el.removeEventListener("dblclick", this.onPointerDoublePress), this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("mouseleave", function () {
        return _this2.onMouseLeave;
      }), this.el.remove();
    }
  }]);
  return ye;
}(T);
var be;
var ge;
(ge = be || (be = {})).Distribute = {
  type: "distribute"
}, ge.Split = function (e) {
  return {
    type: "split",
    index: e
  };
}, ge.Invisible = function (e) {
  return {
    type: "invisible",
    cachedVisibleSize: e
  };
};
var ze = function (e) {
  return e.Normal = "NORMAL", e.Low = "LOW", e.High = "HIGH", e;
}({});
var we = /*#__PURE__*/function () {
  function we(e, t, i) {
    _classCallCheck(this, we);
    this.container = void 0, this.view = void 0, this._size = void 0, this._cachedVisibleSize = void 0, this.container = e, this.view = t, this.container.classList.add("split-view-view", I), this.container.dataset.testid = "split-view-view", "number" == typeof i ? (this._size = i, this._cachedVisibleSize = void 0, e.classList.add("split-view-view-visible")) : (this._size = 0, this._cachedVisibleSize = i.cachedVisibleSize);
  }
  _createClass(we, [{
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(e) {
      this._size = e;
    }
  }, {
    key: "priority",
    get: function get() {
      return this.view.priority;
    }
  }, {
    key: "snap",
    get: function get() {
      return !!this.view.snap;
    }
  }, {
    key: "cachedVisibleSize",
    get: function get() {
      return this._cachedVisibleSize;
    }
  }, {
    key: "visible",
    get: function get() {
      return void 0 === this._cachedVisibleSize;
    }
  }, {
    key: "setVisible",
    value: function setVisible(e, t) {
      e !== this.visible && (e ? (this.size = p(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = "number" == typeof t ? t : this.size, this.size = 0), this.container.classList.toggle("split-view-view-visible", e), this.view.setVisible && this.view.setVisible(e));
    }
  }, {
    key: "minimumSize",
    get: function get() {
      return this.visible ? this.view.minimumSize : 0;
    }
  }, {
    key: "viewMinimumSize",
    get: function get() {
      return this.view.minimumSize;
    }
  }, {
    key: "maximumSize",
    get: function get() {
      return this.visible ? this.view.maximumSize : 0;
    }
  }, {
    key: "viewMaximumSize",
    get: function get() {
      return this.view.maximumSize;
    }
  }, {
    key: "enabled",
    set: function set(e) {
      this.container.style.pointerEvents = e ? "" : "none";
    }
  }, {
    key: "layout",
    value: function layout(e) {
      this.layoutContainer(e), this.view.layout(this.size, e);
    }
  }]);
  return we;
}();
var Se = /*#__PURE__*/function (_we) {
  _inherits(Se, _we);
  var _super2 = _createSuper(Se);
  function Se() {
    _classCallCheck(this, Se);
    return _super2.apply(this, arguments);
  }
  _createClass(Se, [{
    key: "layoutContainer",
    value: function layoutContainer(e) {
      this.container.style.left = "".concat(e, "px"), this.container.style.width = "".concat(this.size, "px");
    }
  }]);
  return Se;
}(we);
var _e = /*#__PURE__*/function (_we2) {
  _inherits(_e, _we2);
  var _super3 = _createSuper(_e);
  function _e() {
    _classCallCheck(this, _e);
    return _super3.apply(this, arguments);
  }
  _createClass(_e, [{
    key: "layoutContainer",
    value: function layoutContainer(e) {
      this.container.style.top = "".concat(e, "px"), this.container.style.height = "".concat(this.size, "px");
    }
  }]);
  return _e;
}(we);
var Ie = /*#__PURE__*/function (_T2) {
  _inherits(Ie, _T2);
  var _super4 = _createSuper(Ie);
  function Ie(e) {
    var _t$orientation, _t$proportionalLayout;
    var _this3;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var i = arguments.length > 2 ? arguments[2] : undefined;
    var n = arguments.length > 3 ? arguments[3] : undefined;
    var s = arguments.length > 4 ? arguments[4] : undefined;
    var r = arguments.length > 5 ? arguments[5] : undefined;
    _classCallCheck(this, Ie);
    if (_this3 = _super4.call(this), _this3.onDidChange = void 0, _this3.onDidDragStart = void 0, _this3.onDidDragEnd = void 0, _this3.orientation = void 0, _this3.sashContainer = void 0, _this3.size = 0, _this3.contentSize = 0, _this3.proportions = void 0, _this3.viewItems = [], _this3.sashItems = [], _this3.sashDragState = void 0, _this3.proportionalLayout = void 0, _this3.getSashOrthogonalSize = void 0, _this3._startSnappingEnabled = !0, _this3._endSnappingEnabled = !0, _this3.shadowDocument = void 0, _this3.onSashEnd = function (e) {
      _this3.emit("sashchange", e), _this3.saveProportions();
      var _iterator = _createForOfIteratorHelper(_this3.viewItems),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _e4 = _step.value;
          _e4.enabled = !0;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }, _this3.shadowDocument = i, _this3.orientation = (_t$orientation = t.orientation) !== null && _t$orientation !== void 0 ? _t$orientation : de.Vertical, _this3.proportionalLayout = (_t$proportionalLayout = t.proportionalLayout) !== null && _t$proportionalLayout !== void 0 ? _t$proportionalLayout : !0, _this3.getSashOrthogonalSize = t.getSashOrthogonalSize, n && (_this3.onDidChange = n), s && (_this3.onDidDragStart = s), r && (_this3.onDidDragEnd = r), _this3.sashContainer = i.createElement("div"), _this3.sashContainer.classList.add("sash-container", S), e.prepend(_this3.sashContainer), t.descriptor) {
      _this3.size = t.descriptor.size;
      var _iterator2 = _createForOfIteratorHelper(t.descriptor.views.entries()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            _e5 = _step2$value[0],
            _i2 = _step2$value[1];
          var _t = _i2.size,
            _n2 = _i2.container,
            _s2 = _i2.view;
          _this3.addView(_n2, _s2, _t, _e5, !0);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      _this3.contentSize = _this3.viewItems.reduce(function (e, t) {
        return e + t.size;
      }, 0), _this3.saveProportions();
    }
    return _possibleConstructorReturn(_this3);
  }
  _createClass(Ie, [{
    key: "startSnappingEnabled",
    get: function get() {
      return this._startSnappingEnabled;
    },
    set: function set(e) {
      this._startSnappingEnabled !== e && (this._startSnappingEnabled = e, this.updateSashEnablement());
    }
  }, {
    key: "endSnappingEnabled",
    get: function get() {
      return this._endSnappingEnabled;
    },
    set: function set(e) {
      this._endSnappingEnabled !== e && (this._endSnappingEnabled = e, this.updateSashEnablement());
    }
  }, {
    key: "addView",
    value: function addView(e, t, i) {
      var _this4 = this;
      var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.viewItems.length;
      var s = arguments.length > 4 ? arguments[4] : undefined;
      var r;
      r = "number" == typeof i ? i : "split" === i.type ? this.getViewSize(i.index) / 2 : "invisible" === i.type ? {
        cachedVisibleSize: i.cachedVisibleSize
      } : t.minimumSize;
      var o = this.orientation === de.Vertical ? new _e(e, t, r) : new Se(e, t, r);
      if (this.viewItems.splice(n, 0, o), this.viewItems.length > 1) {
        var _e6 = this.orientation === de.Vertical ? new ye(this.sashContainer, {
            getHorizontalSashTop: function getHorizontalSashTop(e) {
              return _this4.getSashPosition(e);
            },
            getHorizontalSashWidth: this.getSashOrthogonalSize
          }, {
            orientation: de.Horizontal
          }, this.shadowDocument) : new ye(this.sashContainer, {
            getVerticalSashLeft: function getVerticalSashLeft(e) {
              return _this4.getSashPosition(e);
            },
            getVerticalSashHeight: this.getSashOrthogonalSize
          }, {
            orientation: de.Vertical
          }, this.shadowDocument),
          _t2 = this.orientation === de.Vertical ? function (t) {
            return {
              sash: _e6,
              start: t.startY,
              current: t.currentY
            };
          } : function (t) {
            return {
              sash: _e6,
              start: t.startX,
              current: t.currentX
            };
          };
        _e6.on("start", function (e) {
          var i;
          _this4.emit("sashDragStart"), _this4.onSashStart(_t2(e));
          var n = _this4.viewItems.map(function (e) {
            return e.size;
          });
          null === (i = _this4.onDidDragStart) || void 0 === i || i.call(_this4, n);
        }), _e6.on("change", function (e) {
          return _this4.onSashChange(_t2(e));
        }), _e6.on("end", function () {
          var t;
          _this4.emit("sashDragEnd"), _this4.onSashEnd(_this4.sashItems.findIndex(function (t) {
            return t.sash === _e6;
          }));
          var i = _this4.viewItems.map(function (e) {
            return e.size;
          });
          null === (t = _this4.onDidDragEnd) || void 0 === t || t.call(_this4, i);
        }), _e6.on("reset", function () {
          var t = _this4.sashItems.findIndex(function (t) {
              return t.sash === _e6;
            }),
            i = k(t, -1, -1),
            n = k(t + 1, _this4.viewItems.length),
            s = _this4.findFirstSnapIndex(i),
            r = _this4.findFirstSnapIndex(n);
          ("number" != typeof s || _this4.viewItems[s].visible) && ("number" != typeof r || _this4.viewItems[r].visible) && _this4.emit("sashreset", t);
        });
        var _i3 = {
          sash: _e6
        };
        this.sashItems.splice(n - 1, 0, _i3);
      }
      s || this.relayout(), s || "number" == typeof i || "distribute" !== i.type || this.distributeViewSizes();
    }
  }, {
    key: "removeView",
    value: function removeView(e, t) {
      if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
      var i = this.viewItems.splice(e, 1)[0].view;
      if (this.viewItems.length >= 1) {
        var _t3 = Math.max(e - 1, 0);
        this.sashItems.splice(_t3, 1)[0].sash.dispose();
      }
      return this.relayout(), t && "distribute" === t.type && this.distributeViewSizes(), i;
    }
  }, {
    key: "moveView",
    value: function moveView(e, t, i) {
      var n = this.getViewCachedVisibleSize(t),
        s = void 0 === n ? this.getViewSize(t) : be.Invisible(n),
        r = this.removeView(t);
      this.addView(e, r, s, i);
    }
  }, {
    key: "getViewCachedVisibleSize",
    value: function getViewCachedVisibleSize(e) {
      if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
      return this.viewItems[e].cachedVisibleSize;
    }
  }, {
    key: "layout",
    value: function layout() {
      var _this5 = this;
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.size;
      var t = Math.max(this.size, this.contentSize);
      if (this.size = e, this.proportions) for (var _t4 = 0; _t4 < this.viewItems.length; _t4++) {
        var _i4 = this.viewItems[_t4];
        _i4.size = p(Math.round(this.proportions[_t4] * e), _i4.minimumSize, _i4.maximumSize);
      } else {
        var _i5 = k(0, this.viewItems.length),
          _n3 = _i5.filter(function (e) {
            return _this5.viewItems[e].priority === ze.Low;
          }),
          _s3 = _i5.filter(function (e) {
            return _this5.viewItems[e].priority === ze.High;
          });
        this.resize(this.viewItems.length - 1, e - t, void 0, _n3, _s3);
      }
      this.distributeEmptySpace(), this.layoutViews();
    }
  }, {
    key: "resizeView",
    value: function resizeView(e, t) {
      var _this6 = this;
      if (e < 0 || e >= this.viewItems.length) return;
      var i = k(0, this.viewItems.length).filter(function (t) {
          return t !== e;
        }),
        n = [].concat(_toConsumableArray(i.filter(function (e) {
          return _this6.viewItems[e].priority === ze.Low;
        })), [e]),
        s = i.filter(function (e) {
          return _this6.viewItems[e].priority === ze.High;
        }),
        r = this.viewItems[e];
      t = Math.round(t), t = p(t, r.minimumSize, Math.min(r.maximumSize, this.size)), r.size = t, this.relayout(n, s);
    }
  }, {
    key: "resizeViews",
    value: function resizeViews(e) {
      for (var _t5 = 0; _t5 < e.length; _t5++) {
        var _i6 = this.viewItems[_t5];
        var _n4 = e[_t5];
        _n4 = Math.round(_n4), _n4 = p(_n4, _i6.minimumSize, Math.min(_i6.maximumSize, this.size)), _i6.size = _n4;
      }
      this.contentSize = this.viewItems.reduce(function (e, t) {
        return e + t.size;
      }, 0), this.saveProportions(), this.layout(this.size);
    }
  }, {
    key: "getViewSize",
    value: function getViewSize(e) {
      return e < 0 || e >= this.viewItems.length ? -1 : this.viewItems[e].size;
    }
  }, {
    key: "isViewVisible",
    value: function isViewVisible(e) {
      if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
      return this.viewItems[e].visible;
    }
  }, {
    key: "setViewVisible",
    value: function setViewVisible(e, t) {
      if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
      this.viewItems[e].setVisible(t), this.distributeEmptySpace(e), this.layoutViews(), this.saveProportions();
    }
  }, {
    key: "distributeViewSizes",
    value: function distributeViewSizes() {
      var _this7 = this;
      var e = [];
      var t = 0;
      var _iterator3 = _createForOfIteratorHelper(this.viewItems),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _i8 = _step3.value;
          _i8.maximumSize - _i8.minimumSize > 0 && (e.push(_i8), t += _i8.size);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var i = Math.floor(t / e.length);
      for (var _i7 = 0, _e7 = e; _i7 < _e7.length; _i7++) {
        var _t6 = _e7[_i7];
        _t6.size = p(i, _t6.minimumSize, _t6.maximumSize);
      }
      var n = k(0, this.viewItems.length),
        s = n.filter(function (e) {
          return _this7.viewItems[e].priority === ze.Low;
        }),
        r = n.filter(function (e) {
          return _this7.viewItems[e].priority === ze.High;
        });
      this.relayout(s, r);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.sashItems.forEach(function (e) {
        return e.sash.dispose();
      }), this.sashItems = [], this.sashContainer.remove();
    }
  }, {
    key: "relayout",
    value: function relayout(e, t) {
      var i = this.viewItems.reduce(function (e, t) {
        return e + t.size;
      }, 0);
      this.resize(this.viewItems.length - 1, this.size - i, void 0, e, t), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
    }
  }, {
    key: "onSashStart",
    value: function onSashStart(_ref) {
      var _this8 = this;
      var e = _ref.sash,
        t = _ref.start;
      var i = this.sashItems.findIndex(function (t) {
        return t.sash === e;
      });
      (function (e) {
        var t = _this8.viewItems.map(function (e) {
          return e.size;
        });
        var n,
          s,
          r = Number.NEGATIVE_INFINITY,
          o = Number.POSITIVE_INFINITY;
        var a = k(i, -1, -1),
          u = k(i + 1, _this8.viewItems.length),
          l = a.reduce(function (e, i) {
            return e + (_this8.viewItems[i].minimumSize - t[i]);
          }, 0),
          c = a.reduce(function (e, i) {
            return e + (_this8.viewItems[i].viewMaximumSize - t[i]);
          }, 0),
          h = 0 === u.length ? Number.POSITIVE_INFINITY : u.reduce(function (e, i) {
            return e + (t[i] - _this8.viewItems[i].minimumSize);
          }, 0),
          f = 0 === u.length ? Number.NEGATIVE_INFINITY : u.reduce(function (e, i) {
            return e + (t[i] - _this8.viewItems[i].viewMaximumSize);
          }, 0);
        r = Math.max(l, f), o = Math.min(h, c);
        var d = _this8.findFirstSnapIndex(a),
          v = _this8.findFirstSnapIndex(u);
        if ("number" == typeof d) {
          var _e8 = _this8.viewItems[d],
            _t7 = Math.floor(_e8.viewMinimumSize / 2);
          n = {
            index: d,
            limitDelta: _e8.visible ? r - _t7 : r + _t7,
            size: _e8.size
          };
        }
        if ("number" == typeof v) {
          var _e9 = _this8.viewItems[v],
            _t8 = Math.floor(_e9.viewMinimumSize / 2);
          s = {
            index: v,
            limitDelta: _e9.visible ? o + _t8 : o - _t8,
            size: _e9.size
          };
        }
        _this8.sashDragState = {
          start: e,
          current: e,
          index: i,
          sizes: t,
          minDelta: r,
          maxDelta: o,
          snapBefore: n,
          snapAfter: s
        };
      })(t);
    }
  }, {
    key: "onSashChange",
    value: function onSashChange(_ref2) {
      var e = _ref2.current;
      var _this$sashDragState = this.sashDragState,
        t = _this$sashDragState.index,
        i = _this$sashDragState.start,
        n = _this$sashDragState.sizes,
        s = _this$sashDragState.minDelta,
        r = _this$sashDragState.maxDelta,
        o = _this$sashDragState.snapBefore,
        a = _this$sashDragState.snapAfter;
      this.sashDragState.current = e;
      var u = e - i;
      this.resize(t, u, n, void 0, void 0, s, r, o, a), this.distributeEmptySpace(), this.layoutViews();
    }
  }, {
    key: "getSashPosition",
    value: function getSashPosition(e) {
      var t = 0;
      for (var _i9 = 0; _i9 < this.sashItems.length; _i9++) if (t += this.viewItems[_i9].size, this.sashItems[_i9].sash === e) return t;
      return 0;
    }
  }, {
    key: "resize",
    value: function resize(e, t) {
      var _this9 = this;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.viewItems.map(function (e) {
        return e.size;
      });
      var n = arguments.length > 3 ? arguments[3] : undefined;
      var s = arguments.length > 4 ? arguments[4] : undefined;
      var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Number.NEGATIVE_INFINITY;
      var o = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : Number.POSITIVE_INFINITY;
      var a = arguments.length > 7 ? arguments[7] : undefined;
      var u = arguments.length > 8 ? arguments[8] : undefined;
      if (e < 0 || e >= this.viewItems.length) return 0;
      var l = k(e, -1, -1),
        c = k(e + 1, this.viewItems.length);
      if (s) {
        var _iterator4 = _createForOfIteratorHelper(s),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _e10 = _step4.value;
            F(l, _e10), F(c, _e10);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      if (n) {
        var _iterator5 = _createForOfIteratorHelper(n),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _e11 = _step5.value;
            R(l, _e11), R(c, _e11);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
      var h = l.map(function (e) {
          return _this9.viewItems[e];
        }),
        f = l.map(function (e) {
          return i[e];
        }),
        d = c.map(function (e) {
          return _this9.viewItems[e];
        }),
        v = c.map(function (e) {
          return i[e];
        }),
        m = l.reduce(function (e, t) {
          return e + (_this9.viewItems[t].minimumSize - i[t]);
        }, 0),
        y = l.reduce(function (e, t) {
          return e + (_this9.viewItems[t].maximumSize - i[t]);
        }, 0),
        b = 0 === c.length ? Number.POSITIVE_INFINITY : c.reduce(function (e, t) {
          return e + (i[t] - _this9.viewItems[t].minimumSize);
        }, 0),
        g = 0 === c.length ? Number.NEGATIVE_INFINITY : c.reduce(function (e, t) {
          return e + (i[t] - _this9.viewItems[t].maximumSize);
        }, 0),
        z = Math.max(m, g, r),
        w = Math.min(b, y, o);
      var S = !1;
      if (a) {
        var _e12 = this.viewItems[a.index],
          _i10 = t >= a.limitDelta;
        S = _i10 !== _e12.visible, _e12.setVisible(_i10, a.size);
      }
      if (!S && u) {
        var _e13 = this.viewItems[u.index],
          _i11 = t < u.limitDelta;
        S = _i11 !== _e13.visible, _e13.setVisible(_i11, u.size);
      }
      if (S) return this.resize(e, t, i, n, s, r, o);
      for (var _e14 = 0, _i12 = t = p(t, z, w); _e14 < h.length; _e14++) {
        var _t9 = h[_e14],
          _n5 = p(f[_e14] + _i12, _t9.minimumSize, _t9.maximumSize);
        _i12 -= _n5 - f[_e14], _t9.size = _n5;
      }
      for (var _e15 = 0, _i13 = t; _e15 < d.length; _e15++) {
        var _t10 = d[_e15],
          _n6 = p(v[_e15] - _i13, _t10.minimumSize, _t10.maximumSize);
        _i13 += _n6 - v[_e15], _t10.size = _n6;
      }
      return t;
    }
  }, {
    key: "distributeEmptySpace",
    value: function distributeEmptySpace(e) {
      var t = this.viewItems.reduce(function (e, t) {
        return e + t.size;
      }, 0);
      var i = this.size - t;
      var n = k(this.viewItems.length - 1, -1, -1);
      "number" == typeof e && R(n, e);
      for (var _e16 = 0; 0 !== i && _e16 < n.length; _e16++) {
        var _t11 = this.viewItems[n[_e16]],
          _s4 = p(_t11.size + i, _t11.minimumSize, _t11.maximumSize);
        i -= _s4 - _t11.size, _t11.size = _s4;
      }
    }
  }, {
    key: "layoutViews",
    value: function layoutViews() {
      var e;
      this.contentSize = this.viewItems.reduce(function (e, t) {
        return e + t.size;
      }, 0);
      var t = 0;
      var _iterator6 = _createForOfIteratorHelper(this.viewItems),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _e17 = _step6.value;
          _e17.layout(t), t += _e17.size;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      null === (e = this.onDidChange) || void 0 === e || e.call(this, this.viewItems.map(function (e) {
        return e.size;
      })), this.sashItems.forEach(function (e) {
        return e.sash.layout();
      }), this.updateSashEnablement();
    }
  }, {
    key: "saveProportions",
    value: function saveProportions() {
      var _this10 = this;
      this.proportionalLayout && this.contentSize > 0 && (this.proportions = this.viewItems.map(function (e) {
        return e.size / _this10.contentSize;
      }));
    }
  }, {
    key: "updateSashEnablement",
    value: function updateSashEnablement() {
      var e = !1;
      var t = this.viewItems.map(function (t) {
        return e = t.size - t.minimumSize > 0 || e;
      });
      e = !1;
      var i = this.viewItems.map(function (t) {
          return e = t.maximumSize - t.size > 0 || e;
        }),
        n = _toConsumableArray(this.viewItems).reverse();
      e = !1;
      var s = n.map(function (t) {
        return e = t.size - t.minimumSize > 0 || e;
      }).reverse();
      e = !1;
      var r = n.map(function (t) {
        return e = t.maximumSize - t.size > 0 || e;
      }).reverse();
      var o = 0;
      for (var _e18 = 0; _e18 < this.sashItems.length; _e18++) {
        var _n7 = this.sashItems[_e18].sash;
        o += this.viewItems[_e18].size;
        var _a = !(t[_e18] && r[_e18 + 1]),
          _u = !(i[_e18] && s[_e18 + 1]);
        if (_a && _u) {
          var _i14 = k(_e18, -1, -1),
            _r2 = k(_e18 + 1, this.viewItems.length),
            _a2 = this.findFirstSnapIndex(_i14),
            _u2 = this.findFirstSnapIndex(_r2),
            _l = "number" == typeof _a2 && !this.viewItems[_a2].visible,
            _c = "number" == typeof _u2 && !this.viewItems[_u2].visible;
          _l && s[_e18] && (o > 0 || this.startSnappingEnabled) ? _n7.state = ve.Minimum : _c && t[_e18] && (o < this.contentSize || this.endSnappingEnabled) ? _n7.state = ve.Maximum : _n7.state = ve.Disabled;
        } else _n7.state = _a && !_u ? ve.Minimum : !_a && _u ? ve.Maximum : ve.Enabled;
      }
    }
  }, {
    key: "findFirstSnapIndex",
    value: function findFirstSnapIndex(e) {
      var _iterator7 = _createForOfIteratorHelper(e),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _t12 = _step7.value;
          var _e19 = this.viewItems[_t12];
          if (_e19.visible && _e19.snap) return _t12;
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = _createForOfIteratorHelper(e),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _t13 = _step8.value;
          var _e20 = this.viewItems[_t13];
          if (_e20.visible && _e20.maximumSize - _e20.minimumSize > 0) return;
          if (!_e20.visible && _e20.snap) return _t13;
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  }]);
  return Ie;
}(T);
var xe = /*#__PURE__*/function () {
  function xe(e) {
    _classCallCheck(this, xe);
    this.size = void 0, this.size = e;
  }
  _createClass(xe, [{
    key: "getPreferredSize",
    value: function getPreferredSize() {
      return this.size;
    }
  }]);
  return xe;
}();
var Ee = /*#__PURE__*/function () {
  function Ee(e, t) {
    _classCallCheck(this, Ee);
    this.proportion = void 0, this.layoutService = void 0, this.proportion = e, this.layoutService = t;
  }
  _createClass(Ee, [{
    key: "getPreferredSize",
    value: function getPreferredSize() {
      return this.proportion * this.layoutService.getSize();
    }
  }]);
  return Ee;
}();
var Ve = /*#__PURE__*/function () {
  function Ve() {
    _classCallCheck(this, Ve);
  }
  _createClass(Ve, [{
    key: "getPreferredSize",
    value: function getPreferredSize() {}
  }]);
  return Ve;
}();
var je = /*#__PURE__*/function () {
  function je(e, t) {
    var _t$priority;
    _classCallCheck(this, je);
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = e, this.element = t.element, this.minimumSize = "number" == typeof t.minimumSize ? t.minimumSize : 30, this.maximumSize = "number" == typeof t.maximumSize ? t.maximumSize : Number.POSITIVE_INFINITY, "number" == typeof t.preferredSize) this.layoutStrategy = new xe(t.preferredSize);else if ("string" == typeof t.preferredSize) {
      var _e21 = t.preferredSize.trim();
      if (A(_e21, "%")) {
        var _t14 = Number(_e21.slice(0, -1)) / 100;
        this.layoutStrategy = new Ee(_t14, this.layoutService);
      } else if (A(_e21, "px")) {
        var _t15 = Number(_e21.slice(0, -2));
        this.layoutStrategy = new xe(_t15);
      } else if ("number" == typeof Number.parseFloat(_e21)) {
        var _t16 = Number.parseFloat(_e21);
        this.layoutStrategy = new xe(_t16);
      } else this.layoutStrategy = new Ve();
    } else this.layoutStrategy = new Ve();
    this.priority = (_t$priority = t.priority) !== null && _t$priority !== void 0 ? _t$priority : ze.Normal, this.snap = "boolean" == typeof t.snap && t.snap;
  }
  _createClass(je, [{
    key: "preferredSize",
    get: function get() {
      return this.layoutStrategy.getPreferredSize();
    },
    set: function set(e) {
      if ("number" == typeof e) this.layoutStrategy = new xe(e);else if ("string" == typeof e) {
        var _t17 = e.trim();
        if (A(_t17, "%")) {
          var _e22 = Number(_t17.slice(0, -1)) / 100;
          this.layoutStrategy = new Ee(_e22, this.layoutService);
        } else if (A(_t17, "px")) {
          var _e23 = Number(_t17.slice(0, -2)) / 100;
          this.layoutStrategy = new xe(_e23);
        } else if ("number" == typeof Number.parseFloat(_t17)) {
          var _e24 = Number.parseFloat(_t17);
          this.layoutStrategy = new xe(_e24);
        } else this.layoutStrategy = new Ve();
      } else this.layoutStrategy = new Ve();
    }
  }, {
    key: "layout",
    value: function layout(e) {}
  }]);
  return je;
}();
function De(e) {
  return void 0 !== e.minSize || void 0 !== e.maxSize || void 0 !== e.preferredSize || void 0 !== e.priority || void 0 !== e.visible;
}
var Le = e.forwardRef(function (_ref3, n) {
  var t = _ref3.className,
    i = _ref3.children;
  return e.createElement("div", {
    ref: n,
    className: r("split-view-view", I, t)
  }, i);
});
Le.displayName = "Allotment.Pane";
var Oe = e.forwardRef(function (_ref4, g) {
  var t = _ref4.children,
    i = _ref4.className,
    _ref4$maxSize = _ref4.maxSize,
    n = _ref4$maxSize === void 0 ? 1 / 0 : _ref4$maxSize,
    _ref4$minSize = _ref4.minSize,
    s = _ref4$minSize === void 0 ? 30 : _ref4$minSize,
    _ref4$proportionalLay = _ref4.proportionalLayout,
    o = _ref4$proportionalLay === void 0 ? !0 : _ref4$proportionalLay,
    _ref4$separator = _ref4.separator,
    a = _ref4$separator === void 0 ? !0 : _ref4$separator,
    u = _ref4.sizes,
    _ref4$defaultSizes = _ref4.defaultSizes,
    l = _ref4$defaultSizes === void 0 ? u : _ref4$defaultSizes,
    _ref4$snap = _ref4.snap,
    c = _ref4$snap === void 0 ? !1 : _ref4$snap,
    _ref4$vertical = _ref4.vertical,
    h = _ref4$vertical === void 0 ? !1 : _ref4$vertical,
    _ref4$shadownDocument = _ref4.shadownDocument,
    f = _ref4$shadownDocument === void 0 ? document : _ref4$shadownDocument,
    d = _ref4.onChange,
    v = _ref4.onReset,
    m = _ref4.onVisibleChange,
    p = _ref4.onDragStart,
    y = _ref4.onDragEnd;
  var S = e.useRef(null),
    I = e.useRef([]),
    j = e.useRef(new Map()),
    D = e.useRef(null),
    L = e.useRef(new Map()),
    N = e.useRef(new P()),
    A = e.useRef([]),
    _e$useState = e.useState(!1),
    _e$useState2 = _slicedToArray(_e$useState, 2),
    C = _e$useState2[0],
    T = _e$useState2[1];
  "production" !== process.env.NODE_ENV && u && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  var F = e.useMemo(function () {
      return e.Children.toArray(t).filter(e.isValidElement);
    }, [t]),
    R = e.useCallback(function (e) {
      var t, i;
      var n = null === (t = A.current) || void 0 === t ? void 0 : t[e];
      return "number" == typeof (null == n ? void 0 : n.preferredSize) && (null === (i = D.current) || void 0 === i || i.resizeView(e, Math.round(n.preferredSize)), !0);
    }, []);
  return e.useImperativeHandle(g, function () {
    return {
      reset: function reset() {
        if (v) v();else {
          var e;
          null === (e = D.current) || void 0 === e || e.distributeViewSizes();
          for (var _e25 = 0; _e25 < A.current.length; _e25++) R(_e25);
        }
      },
      resize: function resize(e) {
        var t;
        null === (t = D.current) || void 0 === t || t.resizeViews(e);
      }
    };
  }), M(function () {
    var e = !0;
    l && L.current.size !== l.length && (e = !1, console.warn("Expected ".concat(l.length, " children based on defaultSizes but found ").concat(L.current.size))), e && l && (I.current = F.map(function (e) {
      return e.key;
    }));
    var t = _objectSpread({
      orientation: h ? de.Vertical : de.Horizontal,
      proportionalLayout: o
    }, e && l && {
      descriptor: {
        size: l.reduce(function (e, t) {
          return e + t;
        }, 0),
        views: l.map(function (e, t) {
          var _ref5, _ref6, _ref7, _ref8;
          var i = j.current.get(I.current[t]),
            r = new je(N.current, _objectSpread(_objectSpread({
              element: f.createElement("div"),
              minimumSize: (_ref5 = null == i ? void 0 : i.minSize) !== null && _ref5 !== void 0 ? _ref5 : s,
              maximumSize: (_ref6 = null == i ? void 0 : i.maxSize) !== null && _ref6 !== void 0 ? _ref6 : n,
              priority: (_ref7 = null == i ? void 0 : i.priority) !== null && _ref7 !== void 0 ? _ref7 : ze.Normal
            }, (null == i ? void 0 : i.preferredSize) && {
              preferredSize: null == i ? void 0 : i.preferredSize
            }), {}, {
              snap: (_ref8 = null == i ? void 0 : i.snap) !== null && _ref8 !== void 0 ? _ref8 : c
            }));
          return A.current.push(r), {
            container: _toConsumableArray(L.current.values())[t],
            size: e,
            view: r
          };
        })
      }
    });
    D.current = new Ie(S.current, t, f, d, p, y), D.current.on("sashDragStart", function () {
      var e;
      null === (e = S.current) || void 0 === e || e.classList.add("split-view-sash-dragging");
    }), D.current.on("sashDragEnd", function () {
      var e;
      null === (e = S.current) || void 0 === e || e.classList.remove("split-view-sash-dragging");
    }), D.current.on("sashchange", function (e) {
      if (m && D.current) {
        var _e26 = F.map(function (e) {
          return e.key;
        });
        for (var _t18 = 0; _t18 < _e26.length; _t18++) {
          var _i15 = j.current.get(_e26[_t18]);
          void 0 !== (null == _i15 ? void 0 : _i15.visible) && _i15.visible !== D.current.isViewVisible(_t18) && m(_t18, D.current.isViewVisible(_t18));
        }
      }
    }), D.current.on("sashreset", function (e) {
      if (v) v();else {
        var t;
        if (R(e)) return;
        if (R(e + 1)) return;
        null === (t = D.current) || void 0 === t || t.distributeViewSizes();
      }
    });
    var i = D.current;
    return function () {
      i.dispose();
    };
  }, []), M(function () {
    if (C) {
      var _l2 = F.map(function (e) {
          return e.key;
        }),
        _h = _toConsumableArray(I.current),
        _d2 = _l2.filter(function (e) {
          return !I.current.includes(e);
        }),
        _v = _l2.filter(function (e) {
          return I.current.includes(e);
        }),
        _m = I.current.map(function (e) {
          return !_l2.includes(e);
        });
      for (var _t19 = _m.length - 1; _t19 >= 0; _t19--) {
        var e;
        if (_m[_t19]) null === (e = D.current) || void 0 === e || e.removeView(_t19), _h.splice(_t19, 1), A.current.splice(_t19, 1);
      }
      var _iterator9 = _createForOfIteratorHelper(_d2),
        _step9;
      try {
        var _loop3 = function _loop3() {
            var _ref9, _ref10, _ref11, _ref12;
            var e = _step9.value;
            var i = j.current.get(e),
              r = new je(N.current, _objectSpread(_objectSpread({
                element: f.createElement("div"),
                minimumSize: (_ref9 = null == i ? void 0 : i.minSize) !== null && _ref9 !== void 0 ? _ref9 : s,
                maximumSize: (_ref10 = null == i ? void 0 : i.maxSize) !== null && _ref10 !== void 0 ? _ref10 : n,
                priority: (_ref11 = null == i ? void 0 : i.priority) !== null && _ref11 !== void 0 ? _ref11 : ze.Normal
              }, (null == i ? void 0 : i.preferredSize) && {
                preferredSize: null == i ? void 0 : i.preferredSize
              }), {}, {
                snap: (_ref12 = null == i ? void 0 : i.snap) !== null && _ref12 !== void 0 ? _ref12 : c
              }));
            null === (t = D.current) || void 0 === t || t.addView(L.current.get(e), r, be.Distribute, _l2.findIndex(function (t) {
              return t === e;
            })), _h.splice(_l2.findIndex(function (t) {
              return t === e;
            }), 0, e), A.current.splice(_l2.findIndex(function (t) {
              return t === e;
            }), 0, r);
          },
          t;
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          _loop3();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      for (; !b(_l2, _h);) {
        var _iterator10 = _createForOfIteratorHelper(_l2.entries()),
          _step10;
        try {
          var _loop = function _loop() {
              var _step10$value = _slicedToArray(_step10.value, 2),
                e = _step10$value[0],
                t = _step10$value[1];
              var n = _h.findIndex(function (e) {
                return e === t;
              });
              if (n !== e) {
                null === (i = D.current) || void 0 === i || i.moveView(L.current.get(t), n, e);
                var _s5 = _h[n];
                _h.splice(n, 1), _h.splice(e, 0, _s5);
                return 1; // break
              }
            },
            i;
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            if (_loop()) break;
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
      var _iterator11 = _createForOfIteratorHelper(_d2),
        _step11;
      try {
        var _loop4 = function _loop4() {
            var e = _step11.value;
            var t = _l2.findIndex(function (t) {
                return t === e;
              }),
              i = A.current[t].preferredSize;
            if (void 0 !== i) null === (r = D.current) || void 0 === r || r.resizeView(t, i);
          },
          r;
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          _loop4();
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      var _loop2 = function _loop2() {
          var e = _arr2[_i16];
          var t = j.current.get(e),
            i = _l2.findIndex(function (t) {
              return t === e;
            });
          if (t && De(t)) if (void 0 !== t.visible) if ((null === (o = D.current) || void 0 === o ? void 0 : o.isViewVisible(i)) !== t.visible) null === (a = D.current) || void 0 === a || a.setViewVisible(i, t.visible);
        },
        o,
        a;
      for (var _i16 = 0, _arr2 = [].concat(_toConsumableArray(_d2), _toConsumableArray(_v)); _i16 < _arr2.length; _i16++) {
        _loop2();
      }
      var _iterator12 = _createForOfIteratorHelper(_v),
        _step12;
      try {
        var _loop5 = function _loop5() {
            var e = _step12.value;
            var t = j.current.get(e),
              i = _l2.findIndex(function (t) {
                return t === e;
              });
            if (t && De(t)) {
              void 0 !== t.preferredSize && A.current[i].preferredSize !== t.preferredSize && (A.current[i].preferredSize = t.preferredSize);
              var _e27 = !1;
              if (void 0 !== t.minSize && A.current[i].minimumSize !== t.minSize && (A.current[i].minimumSize = t.minSize, _e27 = !0), void 0 !== t.maxSize && A.current[i].maximumSize !== t.maxSize && (A.current[i].maximumSize = t.maxSize, _e27 = !0), _e27) null === (u = D.current) || void 0 === u || u.layout();
            }
          },
          u;
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          _loop5();
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      (_d2.length > 0 || _m.length > 0) && (I.current = _l2);
    }
  }, [F, C, n, s, c]), e.useEffect(function () {
    D.current && (D.current.onDidChange = d);
  }, [d]), e.useEffect(function () {
    D.current && (D.current.onDidDragStart = p);
  }, [p]), e.useEffect(function () {
    D.current && (D.current.onDidDragEnd = y);
  }, [y]), z({
    ref: S,
    onResize: function onResize(_ref13) {
      var e = _ref13.width,
        t = _ref13.height;
      var i;
      e && t && (null === (i = D.current) || void 0 === i || i.layout(h ? t : e), N.current.setSize(h ? t : e), T(!0));
    }
  }), M(function () {
    if (!C) {
      var e;
      var _S$current$getBoundin = S.current.getBoundingClientRect(),
        _t20 = _S$current$getBoundin.height,
        _i17 = _S$current$getBoundin.width;
      null === (e = D.current) || void 0 === e || e.layout(h ? _t20 : _i17), N.current.setSize(h ? _t20 : _i17), T(!0);
    }
  }, [C, h]), e.useEffect(function () {
    O && Ne(f, 20);
  }, [f]), e.createElement("div", {
    ref: S,
    className: r("split-view", h ? "split-view-vertical" : "split-view-horizontal", {
      "split-view-separator-border": a
    }, w, h ? x : E, _defineProperty({}, V, a), i)
  }, e.createElement("div", {
    className: r("split-view-container", _)
  }, e.Children.toArray(t).map(function (t) {
    if (!e.isValidElement(t)) return null;
    var i = t.key;
    return "Allotment.Pane" === t.type.displayName ? (j.current.set(i, t.props), e.cloneElement(t, {
      key: i,
      ref: function ref(e) {
        var n = t.ref;
        n && (n.current = e), e ? L.current.set(i, e) : L.current["delete"](i);
      }
    })) : e.createElement(Le, {
      key: i,
      ref: function ref(e) {
        e ? L.current.set(i, e) : L.current["delete"](i);
      }
    }, t);
  })));
});
function Ne(e, t) {
  var i = p(t, 4, 20),
    n = p(t, 1, 8);
  e.documentElement.style.setProperty("--sash-size", i + "px"), e.documentElement.style.setProperty("--sash-hover-size", n + "px"), function (e) {
    me = e, pe.emit("onDidChangeGlobalSize", e);
  }(i);
}
Oe.displayName = "Allotment";
var Me = Object.assign(Oe, {
  Pane: Le
});
exports.Allotment = Me, exports.LayoutPriority = ze, exports.setSashSize = Ne;
