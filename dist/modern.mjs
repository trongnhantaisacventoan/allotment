function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import e, { useRef as t, useState as i, useEffect as n, useCallback as r, useMemo as s, useLayoutEffect as o, forwardRef as a, useImperativeHandle as u } from "react";
var l = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function h(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var c,
  d = {
    exports: {}
  };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
c = d, function () {
  var e = {}.hasOwnProperty;
  function t() {
    for (var i = [], n = 0; n < arguments.length; n++) {
      var r = arguments[n];
      if (r) {
        var s = typeof r;
        if ("string" === s || "number" === s) i.push(r);else if (Array.isArray(r)) {
          if (r.length) {
            var o = t.apply(null, r);
            o && i.push(o);
          }
        } else if ("object" === s) {
          if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
            i.push(r.toString());
            continue;
          }
          for (var a in r) e.call(r, a) && r[a] && i.push(a);
        }
      }
    }
    return i.join(" ");
  }
  c.exports ? (t.default = t, c.exports = t) : window.classNames = t;
}();
var f = h(d.exports),
  v = NaN,
  m = "[object Symbol]",
  p = /^\s+|\s+$/g,
  y = /^[-+]0x[0-9a-f]+$/i,
  g = /^0b[01]+$/i,
  b = /^0o[0-7]+$/i,
  z = parseInt,
  w = Object.prototype.toString;
function S(e) {
  var t = typeof e;
  return !!e && ("object" == t || "function" == t);
}
function _(e) {
  if ("number" == typeof e) return e;
  if (function (e) {
    return "symbol" == typeof e || function (e) {
      return !!e && "object" == typeof e;
    }(e) && w.call(e) == m;
  }(e)) return v;
  if (S(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = S(t) ? t + "" : t;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(p, "");
  var i = g.test(e);
  return i || b.test(e) ? z(e.slice(2), i ? 2 : 8) : y.test(e) ? v : +e;
}
var I = h(function (e, t, i) {
    return void 0 === i && (i = t, t = void 0), void 0 !== i && (i = (i = _(i)) == i ? i : 0), void 0 !== t && (t = (t = _(t)) == t ? t : 0), function (e, t, i) {
      return e == e && (void 0 !== i && (e = e <= i ? e : i), void 0 !== t && (e = e >= t ? e : t)), e;
    }(_(e), t, i);
  }),
  x = {
    exports: {}
  };
!function (e, t) {
  var i = "__lodash_hash_undefined__",
    n = 1,
    r = 2,
    s = 9007199254740991,
    o = "[object Arguments]",
    a = "[object Array]",
    u = "[object AsyncFunction]",
    h = "[object Boolean]",
    c = "[object Date]",
    d = "[object Error]",
    f = "[object Function]",
    v = "[object GeneratorFunction]",
    m = "[object Map]",
    p = "[object Number]",
    y = "[object Null]",
    g = "[object Object]",
    b = "[object Promise]",
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
  O["[object Float32Array]"] = O["[object Float64Array]"] = O["[object Int8Array]"] = O["[object Int16Array]"] = O["[object Int32Array]"] = O["[object Uint8Array]"] = O["[object Uint8ClampedArray]"] = O["[object Uint16Array]"] = O["[object Uint32Array]"] = !0, O[o] = O[a] = O[V] = O[h] = O[j] = O[c] = O[d] = O[f] = O[m] = O[p] = O[g] = O[w] = O[S] = O[_] = O[E] = !1;
  var N = "object" == typeof l && l && l.Object === Object && l,
    M = "object" == typeof self && self && self.Object === Object && self,
    P = N || M || Function("return this")(),
    A = t && !t.nodeType && t,
    T = A && e && !e.nodeType && e,
    C = T && T.exports === A,
    F = C && N.process,
    k = function () {
      try {
        return F && F.binding && F.binding("util");
      } catch (e) {}
    }(),
    $ = k && k.isTypedArray;
  function H(e, t) {
    for (var i = -1, n = null == e ? 0 : e.length; ++i < n;) if (t(e[i], i, e)) return !0;
    return !1;
  }
  function Y(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (e, n) {
      i[++t] = [n, e];
    }), i;
  }
  function B(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (e) {
      i[++t] = e;
    }), i;
  }
  var R,
    W,
    G,
    U = Array.prototype,
    X = Function.prototype,
    J = Object.prototype,
    K = P["__core-js_shared__"],
    Z = X.toString,
    Q = J.hasOwnProperty,
    q = (R = /[^.]+$/.exec(K && K.keys && K.keys.IE_PROTO || "")) ? "Symbol(src)_1." + R : "",
    ee = J.toString,
    te = RegExp("^" + Z.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    ie = C ? P.Buffer : void 0,
    ne = P.Symbol,
    re = P.Uint8Array,
    se = J.propertyIsEnumerable,
    oe = U.splice,
    ae = ne ? ne.toStringTag : void 0,
    ue = Object.getOwnPropertySymbols,
    le = ie ? ie.isBuffer : void 0,
    he = (W = Object.keys, G = Object, function (e) {
      return W(G(e));
    }),
    ce = ke(P, "DataView"),
    de = ke(P, "Map"),
    fe = ke(P, "Promise"),
    ve = ke(P, "Set"),
    me = ke(P, "WeakMap"),
    pe = ke(Object, "create"),
    ye = Be(ce),
    ge = Be(de),
    be = Be(fe),
    ze = Be(ve),
    we = Be(me),
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
      r = !i && !n && Ue(e),
      s = !i && !n && !r && Qe(e),
      o = i || n || r || s,
      a = o ? function (e, t) {
        for (var i = -1, n = Array(e); ++i < e;) n[i] = t(i);
        return n;
      }(e.length, String) : [],
      u = a.length;
    for (var l in e) !t && !Q.call(e, l) || o && ("length" == l || r && ("offset" == l || "parent" == l) || s && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Ye(l, u)) || a.push(l);
    return a;
  }
  function Le(e, t) {
    for (var i = e.length; i--;) if (Re(e[i][0], t)) return i;
    return -1;
  }
  function Oe(e) {
    return null == e ? void 0 === e ? x : y : ae && ae in Object(e) ? function (e) {
      var t = Q.call(e, ae),
        i = e[ae];
      try {
        e[ae] = void 0;
        var n = !0;
      } catch (e) {}
      var r = ee.call(e);
      n && (t ? e[ae] = i : delete e[ae]);
      return r;
    }(e) : function (e) {
      return ee.call(e);
    }(e);
  }
  function Ne(e) {
    return Ze(e) && Oe(e) == o;
  }
  function Me(e, t, i, s, u) {
    return e === t || (null == e || null == t || !Ze(e) && !Ze(t) ? e != e && t != t : function (e, t, i, s, u, l) {
      var f = Ge(e),
        v = Ge(t),
        y = f ? a : He(e),
        b = v ? a : He(t),
        z = (y = y == o ? g : y) == g,
        x = (b = b == o ? g : b) == g,
        E = y == b;
      if (E && Ue(e)) {
        if (!Ue(t)) return !1;
        f = !0, z = !1;
      }
      if (E && !z) return l || (l = new je()), f || Qe(e) ? Te(e, t, i, s, u, l) : function (e, t, i, s, o, a, u) {
        switch (i) {
          case j:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
          case V:
            return !(e.byteLength != t.byteLength || !a(new re(e), new re(t)));
          case h:
          case c:
          case p:
            return Re(+e, +t);
          case d:
            return e.name == t.name && e.message == t.message;
          case w:
          case _:
            return e == t + "";
          case m:
            var l = Y;
          case S:
            var f = s & n;
            if (l || (l = B), e.size != t.size && !f) return !1;
            var v = u.get(e);
            if (v) return v == t;
            s |= r, u.set(e, t);
            var y = Te(l(e), l(t), s, o, a, u);
            return u.delete(e), y;
          case I:
            if (_e) return _e.call(e) == _e.call(t);
        }
        return !1;
      }(e, t, y, i, s, u, l);
      if (!(i & n)) {
        var D = z && Q.call(e, "__wrapped__"),
          L = x && Q.call(t, "__wrapped__");
        if (D || L) {
          var O = D ? e.value() : e,
            N = L ? t.value() : t;
          return l || (l = new je()), u(O, N, i, s, l);
        }
      }
      if (!E) return !1;
      return l || (l = new je()), function (e, t, i, r, s, o) {
        var a = i & n,
          u = Ce(e),
          l = u.length,
          h = Ce(t),
          c = h.length;
        if (l != c && !a) return !1;
        var d = l;
        for (; d--;) {
          var f = u[d];
          if (!(a ? f in t : Q.call(t, f))) return !1;
        }
        var v = o.get(e);
        if (v && o.get(t)) return v == t;
        var m = !0;
        o.set(e, t), o.set(t, e);
        var p = a;
        for (; ++d < l;) {
          var y = e[f = u[d]],
            g = t[f];
          if (r) var b = a ? r(g, y, f, t, e, o) : r(y, g, f, e, t, o);
          if (!(void 0 === b ? y === g || s(y, g, i, r, o) : b)) {
            m = !1;
            break;
          }
          p || (p = "constructor" == f);
        }
        if (m && !p) {
          var z = e.constructor,
            w = t.constructor;
          z == w || !("constructor" in e) || !("constructor" in t) || "function" == typeof z && z instanceof z && "function" == typeof w && w instanceof w || (m = !1);
        }
        return o.delete(e), o.delete(t), m;
      }(e, t, i, s, u, l);
    }(e, t, i, s, Me, u));
  }
  function Pe(e) {
    return !(!Ke(e) || function (e) {
      return !!q && q in e;
    }(e)) && (Xe(e) ? te : D).test(Be(e));
  }
  function Ae(e) {
    if (i = (t = e) && t.constructor, n = "function" == typeof i && i.prototype || J, t !== n) return he(e);
    var t,
      i,
      n,
      r = [];
    for (var s in Object(e)) Q.call(e, s) && "constructor" != s && r.push(s);
    return r;
  }
  function Te(e, t, i, s, o, a) {
    var u = i & n,
      l = e.length,
      h = t.length;
    if (l != h && !(u && h > l)) return !1;
    var c = a.get(e);
    if (c && a.get(t)) return c == t;
    var d = -1,
      f = !0,
      v = i & r ? new Ve() : void 0;
    for (a.set(e, t), a.set(t, e); ++d < l;) {
      var m = e[d],
        p = t[d];
      if (s) var y = u ? s(p, m, d, t, e, a) : s(m, p, d, e, t, a);
      if (void 0 !== y) {
        if (y) continue;
        f = !1;
        break;
      }
      if (v) {
        if (!H(t, function (e, t) {
          if (n = t, !v.has(n) && (m === e || o(m, e, i, s, a))) return v.push(t);
          var n;
        })) {
          f = !1;
          break;
        }
      } else if (m !== p && !o(m, p, i, s, a)) {
        f = !1;
        break;
      }
    }
    return a.delete(e), a.delete(t), f;
  }
  function Ce(e) {
    return function (e, t, i) {
      var n = t(e);
      return Ge(e) ? n : function (e, t) {
        for (var i = -1, n = t.length, r = e.length; ++i < n;) e[r + i] = t[i];
        return e;
      }(n, i(e));
    }(e, qe, $e);
  }
  function Fe(e, t) {
    var i,
      n,
      r = e.__data__;
    return ("string" == (n = typeof (i = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== i : null === i) ? r["string" == typeof t ? "string" : "hash"] : r.map;
  }
  function ke(e, t) {
    var i = function (e, t) {
      return null == e ? void 0 : e[t];
    }(e, t);
    return Pe(i) ? i : void 0;
  }
  Ie.prototype.clear = function () {
    this.__data__ = pe ? pe(null) : {}, this.size = 0;
  }, Ie.prototype.delete = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }, Ie.prototype.get = function (e) {
    var t = this.__data__;
    if (pe) {
      var n = t[e];
      return n === i ? void 0 : n;
    }
    return Q.call(t, e) ? t[e] : void 0;
  }, Ie.prototype.has = function (e) {
    var t = this.__data__;
    return pe ? void 0 !== t[e] : Q.call(t, e);
  }, Ie.prototype.set = function (e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = pe && void 0 === t ? i : t, this;
  }, xe.prototype.clear = function () {
    this.__data__ = [], this.size = 0;
  }, xe.prototype.delete = function (e) {
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
      map: new (de || xe)(),
      string: new Ie()
    };
  }, Ee.prototype.delete = function (e) {
    var t = Fe(this, e).delete(e);
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
    return this.__data__.set(e, i), this;
  }, Ve.prototype.has = function (e) {
    return this.__data__.has(e);
  }, je.prototype.clear = function () {
    this.__data__ = new xe(), this.size = 0;
  }, je.prototype.delete = function (e) {
    var t = this.__data__,
      i = t.delete(e);
    return this.size = t.size, i;
  }, je.prototype.get = function (e) {
    return this.__data__.get(e);
  }, je.prototype.has = function (e) {
    return this.__data__.has(e);
  }, je.prototype.set = function (e, t) {
    var i = this.__data__;
    if (i instanceof xe) {
      var n = i.__data__;
      if (!de || n.length < 199) return n.push([e, t]), this.size = ++i.size, this;
      i = this.__data__ = new Ee(n);
    }
    return i.set(e, t), this.size = i.size, this;
  };
  var $e = ue ? function (e) {
      return null == e ? [] : (e = Object(e), function (e, t) {
        for (var i = -1, n = null == e ? 0 : e.length, r = 0, s = []; ++i < n;) {
          var o = e[i];
          t(o, i, e) && (s[r++] = o);
        }
        return s;
      }(ue(e), function (t) {
        return se.call(e, t);
      }));
    } : function () {
      return [];
    },
    He = Oe;
  function Ye(e, t) {
    return !!(t = null == t ? s : t) && ("number" == typeof e || L.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  function Be(e) {
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
  function Re(e, t) {
    return e === t || e != e && t != t;
  }
  (ce && He(new ce(new ArrayBuffer(1))) != j || de && He(new de()) != m || fe && He(fe.resolve()) != b || ve && He(new ve()) != S || me && He(new me()) != E) && (He = function (e) {
    var t = Oe(e),
      i = t == g ? e.constructor : void 0,
      n = i ? Be(i) : "";
    if (n) switch (n) {
      case ye:
        return j;
      case ge:
        return m;
      case be:
        return b;
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
      return Ze(e) && Q.call(e, "callee") && !se.call(e, "callee");
    },
    Ge = Array.isArray;
  var Ue = le || function () {
    return !1;
  };
  function Xe(e) {
    if (!Ke(e)) return !1;
    var t = Oe(e);
    return t == f || t == v || t == u || t == z;
  }
  function Je(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= s;
  }
  function Ke(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t);
  }
  function Ze(e) {
    return null != e && "object" == typeof e;
  }
  var Qe = $ ? function (e) {
    return function (t) {
      return e(t);
    };
  }($) : function (e) {
    return Ze(e) && Je(e.length) && !!O[Oe(e)];
  };
  function qe(e) {
    return null != (t = e) && Je(t.length) && !Xe(t) ? De(e) : Ae(e);
    var t;
  }
  e.exports = function (e, t) {
    return Me(e, t);
  };
}(x, x.exports);
var E = h(x.exports);
function V(e, t, i) {
  return e[t] ? e[t][0] ? e[t][0][i] : e[t][i] : "contentBoxSize" === t ? e.contentRect["inlineSize" === i ? "width" : "height"] : void 0;
}
function j(e) {
  void 0 === e && (e = {});
  var o = e.onResize,
    a = t(void 0);
  a.current = o;
  var u = e.round || Math.round,
    l = t(),
    h = i({
      width: void 0,
      height: void 0
    }),
    c = h[0],
    d = h[1],
    f = t(!1);
  n(function () {
    return f.current = !1, function () {
      f.current = !0;
    };
  }, []);
  var v = t({
      width: void 0,
      height: void 0
    }),
    m = function (e, i) {
      var s = t(null),
        o = t(null);
      o.current = i;
      var a = t(null);
      n(function () {
        u();
      });
      var u = r(function () {
        var t = a.current,
          i = o.current,
          n = t || (i ? i instanceof Element ? i : i.current : null);
        s.current && s.current.element === n && s.current.subscriber === e || (s.current && s.current.cleanup && s.current.cleanup(), s.current = {
          element: n,
          subscriber: e,
          cleanup: n ? e(n) : void 0
        });
      }, [e]);
      return n(function () {
        return function () {
          s.current && s.current.cleanup && (s.current.cleanup(), s.current = null);
        };
      }, []), r(function (e) {
        a.current = e, u();
      }, [u]);
    }(r(function (t) {
      return l.current && l.current.box === e.box && l.current.round === u || (l.current = {
        box: e.box,
        round: u,
        instance: new ResizeObserver(function (t) {
          var i = t[0],
            n = "border-box" === e.box ? "borderBoxSize" : "device-pixel-content-box" === e.box ? "devicePixelContentBoxSize" : "contentBoxSize",
            r = V(i, n, "inlineSize"),
            s = V(i, n, "blockSize"),
            o = r ? u(r) : void 0,
            l = s ? u(s) : void 0;
          if (v.current.width !== o || v.current.height !== l) {
            var h = {
              width: o,
              height: l
            };
            v.current.width = o, v.current.height = l, a.current ? a.current(h) : f.current || d(h);
          }
        })
      }), l.current.instance.observe(t, {
        box: e.box
      }), function () {
        l.current && l.current.instance.unobserve(t);
      };
    }, [e.box, u]), e.ref);
  return s(function () {
    return {
      ref: m,
      width: c.width,
      height: c.height
    };
  }, [m, c.width, c.height]);
}
var D = "allotment-module_splitView__L-yRc",
  L = "allotment-module_sashContainer__fzwJF",
  O = "allotment-module_splitViewContainer__rQnVa",
  N = "allotment-module_splitViewView__MGZ6O",
  M = "allotment-module_vertical__WSwwa",
  P = "allotment-module_horizontal__7doS8",
  A = "allotment-module_separatorBorder__x-rDS";
let T,
  C = !1,
  F = !1;
"object" == typeof navigator && (T = navigator.userAgent, F = T.indexOf("Macintosh") >= 0, C = (T.indexOf("Macintosh") >= 0 || T.indexOf("iPad") >= 0 || T.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
const k = C,
  $ = F,
  H = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? o : n;
class Y {
  constructor() {
    this._size = void 0;
  }
  getSize() {
    return this._size;
  }
  setSize(e) {
    this._size = e;
  }
}
function B(e, t) {
  const i = e.length,
    n = i - t.length;
  return n >= 0 && e.slice(n, i) === t;
}
var R = {
  exports: {}
};
!function (e) {
  var t = Object.prototype.hasOwnProperty,
    i = "~";
  function n() {}
  function r(e, t, i) {
    this.fn = e, this.context = t, this.once = i || !1;
  }
  function s(e, t, n, s, o) {
    if ("function" != typeof n) throw new TypeError("The listener must be a function");
    var a = new r(n, s || e, o),
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
      r = [];
    if (0 === this._eventsCount) return r;
    for (n in e = this._events) t.call(e, n) && r.push(i ? n.slice(1) : n);
    return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r;
  }, a.prototype.listeners = function (e) {
    var t = i ? i + e : e,
      n = this._events[t];
    if (!n) return [];
    if (n.fn) return [n.fn];
    for (var r = 0, s = n.length, o = new Array(s); r < s; r++) o[r] = n[r].fn;
    return o;
  }, a.prototype.listenerCount = function (e) {
    var t = i ? i + e : e,
      n = this._events[t];
    return n ? n.fn ? 1 : n.length : 0;
  }, a.prototype.emit = function (e, t, n, r, s, o) {
    var a = i ? i + e : e;
    if (!this._events[a]) return !1;
    var u,
      l,
      h = this._events[a],
      c = arguments.length;
    if (h.fn) {
      switch (h.once && this.removeListener(e, h.fn, void 0, !0), c) {
        case 1:
          return h.fn.call(h.context), !0;
        case 2:
          return h.fn.call(h.context, t), !0;
        case 3:
          return h.fn.call(h.context, t, n), !0;
        case 4:
          return h.fn.call(h.context, t, n, r), !0;
        case 5:
          return h.fn.call(h.context, t, n, r, s), !0;
        case 6:
          return h.fn.call(h.context, t, n, r, s, o), !0;
      }
      for (l = 1, u = new Array(c - 1); l < c; l++) u[l - 1] = arguments[l];
      h.fn.apply(h.context, u);
    } else {
      var d,
        f = h.length;
      for (l = 0; l < f; l++) switch (h[l].once && this.removeListener(e, h[l].fn, void 0, !0), c) {
        case 1:
          h[l].fn.call(h[l].context);
          break;
        case 2:
          h[l].fn.call(h[l].context, t);
          break;
        case 3:
          h[l].fn.call(h[l].context, t, n);
          break;
        case 4:
          h[l].fn.call(h[l].context, t, n, r);
          break;
        default:
          if (!u) for (d = 1, u = new Array(c - 1); d < c; d++) u[d - 1] = arguments[d];
          h[l].fn.apply(h[l].context, u);
      }
    }
    return !0;
  }, a.prototype.on = function (e, t, i) {
    return s(this, e, t, i, !1);
  }, a.prototype.once = function (e, t, i) {
    return s(this, e, t, i, !0);
  }, a.prototype.removeListener = function (e, t, n, r) {
    var s = i ? i + e : e;
    if (!this._events[s]) return this;
    if (!t) return o(this, s), this;
    var a = this._events[s];
    if (a.fn) a.fn !== t || r && !a.once || n && a.context !== n || o(this, s);else {
      for (var u = 0, l = [], h = a.length; u < h; u++) (a[u].fn !== t || r && !a[u].once || n && a[u].context !== n) && l.push(a[u]);
      l.length ? this._events[s] = 1 === l.length ? l[0] : l : o(this, s);
    }
    return this;
  }, a.prototype.removeAllListeners = function (e) {
    var t;
    return e ? (t = i ? i + e : e, this._events[t] && o(this, t)) : (this._events = new n(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = i, a.EventEmitter = a, e.exports = a;
}(R);
var W = h(R.exports);
function G(e, t) {
  const i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.unshift(t));
}
function U(e, t) {
  const i = e.indexOf(t);
  i > -1 && (e.splice(i, 1), e.push(t));
}
function X(e, t, i = 1) {
  const n = Math.max(0, Math.ceil((t - e) / i)),
    r = new Array(n);
  let s = -1;
  for (; ++s < n;) r[s] = e + s * i;
  return r;
}
var J = NaN,
  K = "[object Symbol]",
  Z = /^\s+|\s+$/g,
  Q = /^[-+]0x[0-9a-f]+$/i,
  q = /^0b[01]+$/i,
  ee = /^0o[0-7]+$/i,
  te = parseInt,
  ie = "object" == typeof l && l && l.Object === Object && l,
  ne = "object" == typeof self && self && self.Object === Object && self,
  re = ie || ne || Function("return this")(),
  se = Object.prototype.toString,
  oe = Math.max,
  ae = Math.min,
  ue = function ue() {
    return re.Date.now();
  };
function le(e) {
  var t = typeof e;
  return !!e && ("object" == t || "function" == t);
}
function he(e) {
  if ("number" == typeof e) return e;
  if (function (e) {
    return "symbol" == typeof e || function (e) {
      return !!e && "object" == typeof e;
    }(e) && se.call(e) == K;
  }(e)) return J;
  if (le(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = le(t) ? t + "" : t;
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = e.replace(Z, "");
  var i = q.test(e);
  return i || ee.test(e) ? te(e.slice(2), i ? 2 : 8) : Q.test(e) ? J : +e;
}
var ce = h(function (e, t, i) {
    var n,
      r,
      s,
      o,
      a,
      u,
      l = 0,
      h = !1,
      c = !1,
      d = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    function f(t) {
      var i = n,
        s = r;
      return n = r = void 0, l = t, o = e.apply(s, i);
    }
    function v(e) {
      var i = e - u;
      return void 0 === u || i >= t || i < 0 || c && e - l >= s;
    }
    function m() {
      var e = ue();
      if (v(e)) return p(e);
      a = setTimeout(m, function (e) {
        var i = t - (e - u);
        return c ? ae(i, s - (e - l)) : i;
      }(e));
    }
    function p(e) {
      return a = void 0, d && n ? f(e) : (n = r = void 0, o);
    }
    function y() {
      var e = ue(),
        i = v(e);
      if (n = arguments, r = this, u = e, i) {
        if (void 0 === a) return function (e) {
          return l = e, a = setTimeout(m, t), h ? f(e) : o;
        }(u);
        if (c) return a = setTimeout(m, t), f(u);
      }
      return void 0 === a && (a = setTimeout(m, t)), o;
    }
    return t = he(t) || 0, le(i) && (h = !!i.leading, s = (c = "maxWait" in i) ? oe(he(i.maxWait) || 0, t) : s, d = "trailing" in i ? !!i.trailing : d), y.cancel = function () {
      void 0 !== a && clearTimeout(a), l = 0, n = u = r = a = void 0;
    }, y.flush = function () {
      return void 0 === a ? o : p(ue());
    }, y;
  }),
  de = "sash-module_sash__K-9lB",
  fe = "sash-module_disabled__Hm-wx",
  ve = "sash-module_mac__Jf6OJ",
  me = "sash-module_vertical__pB-rs",
  pe = "sash-module_minimum__-UKxp",
  ye = "sash-module_maximum__TCWxD",
  ge = "sash-module_horizontal__kFbiw",
  be = "sash-module_hover__80W6I",
  ze = "sash-module_active__bJspD";
let we = function (e) {
    return e.Vertical = "VERTICAL", e.Horizontal = "HORIZONTAL", e;
  }({}),
  Se = function (e) {
    return e.Disabled = "DISABLED", e.Minimum = "MINIMUM", e.Maximum = "MAXIMUM", e.Enabled = "ENABLED", e;
  }({}),
  _e = k ? 20 : 8;
const Ie = new W();
class xe extends W {
  get state() {
    return this._state;
  }
  set state(e) {
    this._state !== e && (this.el.classList.toggle(fe, e === Se.Disabled), this.el.classList.toggle("dash-disabled", e === Se.Disabled), this.el.classList.toggle(pe, e === Se.Minimum), this.el.classList.toggle("sash-minimum", e === Se.Minimum), this.el.classList.toggle(ye, e === Se.Maximum), this.el.classList.toggle("sash-maximum", e === Se.Maximum), this._state = e, this.emit("enablementChange", e));
  }
  constructor(e, t, i, n) {
    var _i$orientation;
    super(), this.el = void 0, this.layoutProvider = void 0, this.orientation = void 0, this.size = void 0, this.hoverDelay = 300, this.hoverDelayer = ce(e => e.classList.add("sash-hover", be), this.hoverDelay), this._state = Se.Enabled, this.onPointerStart = e => {
      const t = e.pageX,
        i = e.pageY,
        n = {
          startX: t,
          currentX: t,
          startY: i,
          currentY: i
        };
      this.el.classList.add("sash-active", ze), this.emit("start", n), this.el.setPointerCapture(e.pointerId);
      const r = e => {
          e.preventDefault();
          const n = {
            startX: t,
            currentX: e.pageX,
            startY: i,
            currentY: e.pageY
          };
          this.emit("change", n);
        },
        s = e => {
          e.preventDefault(), this.el.classList.remove("sash-active", ze), this.hoverDelayer.cancel(), this.emit("end"), this.el.releasePointerCapture(e.pointerId), window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", s);
        };
      window.addEventListener("pointermove", r), window.addEventListener("pointerup", s);
    }, this.onPointerDoublePress = () => {
      this.emit("reset");
    }, this.onMouseEnter = () => {
      this.el.classList.contains(ze) ? (this.hoverDelayer.cancel(), this.el.classList.add("sash-hover", be)) : this.hoverDelayer(this.el);
    }, this.onMouseLeave = () => {
      this.hoverDelayer.cancel(), this.el.classList.remove("sash-hover", be);
    }, this.el = n.createElement("div"), this.el.classList.add("sash", de), this.el.dataset.testid = "sash", e.append(this.el), $ && this.el.classList.add("sash-mac", ve), this.el.addEventListener("pointerdown", this.onPointerStart), this.el.addEventListener("dblclick", this.onPointerDoublePress), this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("mouseleave", this.onMouseLeave), "number" == typeof i.size ? (this.size = i.size, i.orientation === we.Vertical ? this.el.style.width = `${this.size}px` : this.el.style.height = `${this.size}px`) : (this.size = _e, Ie.on("onDidChangeGlobalSize", e => {
      this.size = e, this.layout();
    })), this.layoutProvider = t, this.orientation = (_i$orientation = i.orientation) != null ? _i$orientation : we.Vertical, this.orientation === we.Horizontal ? (this.el.classList.add("sash-horizontal", ge), this.el.classList.remove("sash-vertical", me)) : (this.el.classList.remove("sash-horizontal", ge), this.el.classList.add("sash-vertical", me)), this.layout();
  }
  layout() {
    if (this.orientation === we.Vertical) {
      const e = this.layoutProvider;
      this.el.style.left = e.getVerticalSashLeft(this) - this.size / 2 + "px", e.getVerticalSashTop && (this.el.style.top = e.getVerticalSashTop(this) + "px"), e.getVerticalSashHeight && (this.el.style.height = e.getVerticalSashHeight(this) + "px");
    } else {
      const e = this.layoutProvider;
      this.el.style.top = e.getHorizontalSashTop(this) - this.size / 2 + "px", e.getHorizontalSashLeft && (this.el.style.left = e.getHorizontalSashLeft(this) + "px"), e.getHorizontalSashWidth && (this.el.style.width = e.getHorizontalSashWidth(this) + "px");
    }
  }
  dispose() {
    this.el.removeEventListener("pointerdown", this.onPointerStart), this.el.removeEventListener("dblclick", this.onPointerDoublePress), this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("mouseleave", () => this.onMouseLeave), this.el.remove();
  }
}
let Ee;
var Ve;
(Ve = Ee || (Ee = {})).Distribute = {
  type: "distribute"
}, Ve.Split = function (e) {
  return {
    type: "split",
    index: e
  };
}, Ve.Invisible = function (e) {
  return {
    type: "invisible",
    cachedVisibleSize: e
  };
};
let je = function (e) {
  return e.Normal = "NORMAL", e.Low = "LOW", e.High = "HIGH", e;
}({});
class De {
  constructor(e, t, i) {
    this.container = void 0, this.view = void 0, this._size = void 0, this._cachedVisibleSize = void 0, this.container = e, this.view = t, this.container.classList.add("split-view-view", N), this.container.dataset.testid = "split-view-view", "number" == typeof i ? (this._size = i, this._cachedVisibleSize = void 0, e.classList.add("split-view-view-visible")) : (this._size = 0, this._cachedVisibleSize = i.cachedVisibleSize);
  }
  set size(e) {
    this._size = e;
  }
  get size() {
    return this._size;
  }
  get priority() {
    return this.view.priority;
  }
  get snap() {
    return !!this.view.snap;
  }
  get cachedVisibleSize() {
    return this._cachedVisibleSize;
  }
  get visible() {
    return void 0 === this._cachedVisibleSize;
  }
  setVisible(e, t) {
    e !== this.visible && (e ? (this.size = I(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = "number" == typeof t ? t : this.size, this.size = 0), this.container.classList.toggle("split-view-view-visible", e), this.view.setVisible && this.view.setVisible(e));
  }
  get minimumSize() {
    return this.visible ? this.view.minimumSize : 0;
  }
  get viewMinimumSize() {
    return this.view.minimumSize;
  }
  get maximumSize() {
    return this.visible ? this.view.maximumSize : 0;
  }
  get viewMaximumSize() {
    return this.view.maximumSize;
  }
  set enabled(e) {
    this.container.style.pointerEvents = e ? "" : "none";
  }
  layout(e) {
    this.layoutContainer(e), this.view.layout(this.size, e);
  }
}
class Le extends De {
  layoutContainer(e) {
    this.container.style.left = `${e}px`, this.container.style.width = `${this.size}px`;
  }
}
class Oe extends De {
  layoutContainer(e) {
    this.container.style.top = `${e}px`, this.container.style.height = `${this.size}px`;
  }
}
class Ne extends W {
  get startSnappingEnabled() {
    return this._startSnappingEnabled;
  }
  set startSnappingEnabled(e) {
    this._startSnappingEnabled !== e && (this._startSnappingEnabled = e, this.updateSashEnablement());
  }
  get endSnappingEnabled() {
    return this._endSnappingEnabled;
  }
  set endSnappingEnabled(e) {
    this._endSnappingEnabled !== e && (this._endSnappingEnabled = e, this.updateSashEnablement());
  }
  constructor(e, t = {}, i, n, r, s) {
    var _t$orientation, _t$proportionalLayout;
    if (super(), this.onDidChange = void 0, this.onDidDragStart = void 0, this.onDidDragEnd = void 0, this.orientation = void 0, this.sashContainer = void 0, this.size = 0, this.contentSize = 0, this.proportions = void 0, this.viewItems = [], this.sashItems = [], this.sashDragState = void 0, this.proportionalLayout = void 0, this.getSashOrthogonalSize = void 0, this._startSnappingEnabled = !0, this._endSnappingEnabled = !0, this.shadowDocument = void 0, this.onSashEnd = e => {
      this.emit("sashchange", e), this.saveProportions();
      for (const _e2 of this.viewItems) _e2.enabled = !0;
    }, this.shadowDocument = i, this.orientation = (_t$orientation = t.orientation) != null ? _t$orientation : we.Vertical, this.proportionalLayout = (_t$proportionalLayout = t.proportionalLayout) != null ? _t$proportionalLayout : !0, this.getSashOrthogonalSize = t.getSashOrthogonalSize, n && (this.onDidChange = n), r && (this.onDidDragStart = r), s && (this.onDidDragEnd = s), this.sashContainer = i.createElement("div"), this.sashContainer.classList.add("sash-container", L), e.prepend(this.sashContainer), t.descriptor) {
      this.size = t.descriptor.size;
      for (const [_e3, _i] of t.descriptor.views.entries()) {
        const _t = _i.size,
          _n = _i.container,
          _r = _i.view;
        this.addView(_n, _r, _t, _e3, !0);
      }
      this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0), this.saveProportions();
    }
  }
  addView(e, t, i, n = this.viewItems.length, r) {
    let s;
    s = "number" == typeof i ? i : "split" === i.type ? this.getViewSize(i.index) / 2 : "invisible" === i.type ? {
      cachedVisibleSize: i.cachedVisibleSize
    } : t.minimumSize;
    const o = this.orientation === we.Vertical ? new Oe(e, t, s) : new Le(e, t, s);
    if (this.viewItems.splice(n, 0, o), this.viewItems.length > 1) {
      const _e4 = this.orientation === we.Vertical ? new xe(this.sashContainer, {
          getHorizontalSashTop: e => this.getSashPosition(e),
          getHorizontalSashWidth: this.getSashOrthogonalSize
        }, {
          orientation: we.Horizontal
        }, this.shadowDocument) : new xe(this.sashContainer, {
          getVerticalSashLeft: e => this.getSashPosition(e),
          getVerticalSashHeight: this.getSashOrthogonalSize
        }, {
          orientation: we.Vertical
        }, this.shadowDocument),
        _t2 = this.orientation === we.Vertical ? t => ({
          sash: _e4,
          start: t.startY,
          current: t.currentY
        }) : t => ({
          sash: _e4,
          start: t.startX,
          current: t.currentX
        });
      _e4.on("start", e => {
        var i;
        this.emit("sashDragStart"), this.onSashStart(_t2(e));
        const n = this.viewItems.map(e => e.size);
        null === (i = this.onDidDragStart) || void 0 === i || i.call(this, n);
      }), _e4.on("change", e => this.onSashChange(_t2(e))), _e4.on("end", () => {
        var t;
        this.emit("sashDragEnd"), this.onSashEnd(this.sashItems.findIndex(t => t.sash === _e4));
        const i = this.viewItems.map(e => e.size);
        null === (t = this.onDidDragEnd) || void 0 === t || t.call(this, i);
      }), _e4.on("reset", () => {
        const t = this.sashItems.findIndex(t => t.sash === _e4),
          i = X(t, -1, -1),
          n = X(t + 1, this.viewItems.length),
          r = this.findFirstSnapIndex(i),
          s = this.findFirstSnapIndex(n);
        ("number" != typeof r || this.viewItems[r].visible) && ("number" != typeof s || this.viewItems[s].visible) && this.emit("sashreset", t);
      });
      const _i2 = {
        sash: _e4
      };
      this.sashItems.splice(n - 1, 0, _i2);
    }
    r || this.relayout(), r || "number" == typeof i || "distribute" !== i.type || this.distributeViewSizes();
  }
  removeView(e, t) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    const i = this.viewItems.splice(e, 1)[0].view;
    if (this.viewItems.length >= 1) {
      const _t3 = Math.max(e - 1, 0);
      this.sashItems.splice(_t3, 1)[0].sash.dispose();
    }
    return this.relayout(), t && "distribute" === t.type && this.distributeViewSizes(), i;
  }
  moveView(e, t, i) {
    const n = this.getViewCachedVisibleSize(t),
      r = void 0 === n ? this.getViewSize(t) : Ee.Invisible(n),
      s = this.removeView(t);
    this.addView(e, s, r, i);
  }
  getViewCachedVisibleSize(e) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[e].cachedVisibleSize;
  }
  layout(e = this.size) {
    const t = Math.max(this.size, this.contentSize);
    if (this.size = e, this.proportions) for (let _t4 = 0; _t4 < this.viewItems.length; _t4++) {
      const i = this.viewItems[_t4];
      i.size = I(Math.round(this.proportions[_t4] * e), i.minimumSize, i.maximumSize);
    } else {
      const i = X(0, this.viewItems.length),
        n = i.filter(e => this.viewItems[e].priority === je.Low),
        r = i.filter(e => this.viewItems[e].priority === je.High);
      this.resize(this.viewItems.length - 1, e - t, void 0, n, r);
    }
    this.distributeEmptySpace(), this.layoutViews();
  }
  resizeView(e, t) {
    if (e < 0 || e >= this.viewItems.length) return;
    const i = X(0, this.viewItems.length).filter(t => t !== e),
      n = [...i.filter(e => this.viewItems[e].priority === je.Low), e],
      r = i.filter(e => this.viewItems[e].priority === je.High),
      s = this.viewItems[e];
    t = Math.round(t), t = I(t, s.minimumSize, Math.min(s.maximumSize, this.size)), s.size = t, this.relayout(n, r);
  }
  resizeViews(e) {
    for (let t = 0; t < e.length; t++) {
      const i = this.viewItems[t];
      let n = e[t];
      n = Math.round(n), n = I(n, i.minimumSize, Math.min(i.maximumSize, this.size)), i.size = n;
    }
    this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0), this.saveProportions(), this.layout(this.size);
  }
  getViewSize(e) {
    return e < 0 || e >= this.viewItems.length ? -1 : this.viewItems[e].size;
  }
  isViewVisible(e) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[e].visible;
  }
  setViewVisible(e, t) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    this.viewItems[e].setVisible(t), this.distributeEmptySpace(e), this.layoutViews(), this.saveProportions();
  }
  distributeViewSizes() {
    const e = [];
    let t = 0;
    for (const _i3 of this.viewItems) _i3.maximumSize - _i3.minimumSize > 0 && (e.push(_i3), t += _i3.size);
    const i = Math.floor(t / e.length);
    for (const _t5 of e) _t5.size = I(i, _t5.minimumSize, _t5.maximumSize);
    const n = X(0, this.viewItems.length),
      r = n.filter(e => this.viewItems[e].priority === je.Low),
      s = n.filter(e => this.viewItems[e].priority === je.High);
    this.relayout(r, s);
  }
  dispose() {
    this.sashItems.forEach(e => e.sash.dispose()), this.sashItems = [], this.sashContainer.remove();
  }
  relayout(e, t) {
    const i = this.viewItems.reduce((e, t) => e + t.size, 0);
    this.resize(this.viewItems.length - 1, this.size - i, void 0, e, t), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
  }
  onSashStart({
    sash: e,
    start: t
  }) {
    const i = this.sashItems.findIndex(t => t.sash === e);
    (e => {
      const t = this.viewItems.map(e => e.size);
      let n,
        r,
        s = Number.NEGATIVE_INFINITY,
        o = Number.POSITIVE_INFINITY;
      const a = X(i, -1, -1),
        u = X(i + 1, this.viewItems.length),
        l = a.reduce((e, i) => e + (this.viewItems[i].minimumSize - t[i]), 0),
        h = a.reduce((e, i) => e + (this.viewItems[i].viewMaximumSize - t[i]), 0),
        c = 0 === u.length ? Number.POSITIVE_INFINITY : u.reduce((e, i) => e + (t[i] - this.viewItems[i].minimumSize), 0),
        d = 0 === u.length ? Number.NEGATIVE_INFINITY : u.reduce((e, i) => e + (t[i] - this.viewItems[i].viewMaximumSize), 0);
      s = Math.max(l, d), o = Math.min(c, h);
      const f = this.findFirstSnapIndex(a),
        v = this.findFirstSnapIndex(u);
      if ("number" == typeof f) {
        const _e5 = this.viewItems[f],
          _t6 = Math.floor(_e5.viewMinimumSize / 2);
        n = {
          index: f,
          limitDelta: _e5.visible ? s - _t6 : s + _t6,
          size: _e5.size
        };
      }
      if ("number" == typeof v) {
        const _e6 = this.viewItems[v],
          _t7 = Math.floor(_e6.viewMinimumSize / 2);
        r = {
          index: v,
          limitDelta: _e6.visible ? o + _t7 : o - _t7,
          size: _e6.size
        };
      }
      this.sashDragState = {
        start: e,
        current: e,
        index: i,
        sizes: t,
        minDelta: s,
        maxDelta: o,
        snapBefore: n,
        snapAfter: r
      };
    })(t);
  }
  onSashChange({
    current: e
  }) {
    const {
      index: t,
      start: i,
      sizes: n,
      minDelta: r,
      maxDelta: s,
      snapBefore: o,
      snapAfter: a
    } = this.sashDragState;
    this.sashDragState.current = e;
    const u = e - i;
    this.resize(t, u, n, void 0, void 0, r, s, o, a), this.distributeEmptySpace(), this.layoutViews();
  }
  getSashPosition(e) {
    let t = 0;
    for (let i = 0; i < this.sashItems.length; i++) if (t += this.viewItems[i].size, this.sashItems[i].sash === e) return t;
    return 0;
  }
  resize(e, t, i = this.viewItems.map(e => e.size), n, r, s = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY, a, u) {
    if (e < 0 || e >= this.viewItems.length) return 0;
    const l = X(e, -1, -1),
      h = X(e + 1, this.viewItems.length);
    if (r) for (const _e7 of r) G(l, _e7), G(h, _e7);
    if (n) for (const _e8 of n) U(l, _e8), U(h, _e8);
    const c = l.map(e => this.viewItems[e]),
      d = l.map(e => i[e]),
      f = h.map(e => this.viewItems[e]),
      v = h.map(e => i[e]),
      m = l.reduce((e, t) => e + (this.viewItems[t].minimumSize - i[t]), 0),
      p = l.reduce((e, t) => e + (this.viewItems[t].maximumSize - i[t]), 0),
      y = 0 === h.length ? Number.POSITIVE_INFINITY : h.reduce((e, t) => e + (i[t] - this.viewItems[t].minimumSize), 0),
      g = 0 === h.length ? Number.NEGATIVE_INFINITY : h.reduce((e, t) => e + (i[t] - this.viewItems[t].maximumSize), 0),
      b = Math.max(m, g, s),
      z = Math.min(y, p, o);
    let w = !1;
    if (a) {
      const _e9 = this.viewItems[a.index],
        _i4 = t >= a.limitDelta;
      w = _i4 !== _e9.visible, _e9.setVisible(_i4, a.size);
    }
    if (!w && u) {
      const _e10 = this.viewItems[u.index],
        _i5 = t < u.limitDelta;
      w = _i5 !== _e10.visible, _e10.setVisible(_i5, u.size);
    }
    if (w) return this.resize(e, t, i, n, r, s, o);
    for (let _e11 = 0, _i6 = t = I(t, b, z); _e11 < c.length; _e11++) {
      const _t8 = c[_e11],
        _n2 = I(d[_e11] + _i6, _t8.minimumSize, _t8.maximumSize);
      _i6 -= _n2 - d[_e11], _t8.size = _n2;
    }
    for (let _e12 = 0, _i7 = t; _e12 < f.length; _e12++) {
      const _t9 = f[_e12],
        _n3 = I(v[_e12] - _i7, _t9.minimumSize, _t9.maximumSize);
      _i7 += _n3 - v[_e12], _t9.size = _n3;
    }
    return t;
  }
  distributeEmptySpace(e) {
    const t = this.viewItems.reduce((e, t) => e + t.size, 0);
    let i = this.size - t;
    const n = X(this.viewItems.length - 1, -1, -1);
    "number" == typeof e && U(n, e);
    for (let _e13 = 0; 0 !== i && _e13 < n.length; _e13++) {
      const _t10 = this.viewItems[n[_e13]],
        r = I(_t10.size + i, _t10.minimumSize, _t10.maximumSize);
      i -= r - _t10.size, _t10.size = r;
    }
  }
  layoutViews() {
    var e;
    this.contentSize = this.viewItems.reduce((e, t) => e + t.size, 0);
    let t = 0;
    for (const _e14 of this.viewItems) _e14.layout(t), t += _e14.size;
    null === (e = this.onDidChange) || void 0 === e || e.call(this, this.viewItems.map(e => e.size)), this.sashItems.forEach(e => e.sash.layout()), this.updateSashEnablement();
  }
  saveProportions() {
    this.proportionalLayout && this.contentSize > 0 && (this.proportions = this.viewItems.map(e => e.size / this.contentSize));
  }
  updateSashEnablement() {
    let e = !1;
    const t = this.viewItems.map(t => e = t.size - t.minimumSize > 0 || e);
    e = !1;
    const i = this.viewItems.map(t => e = t.maximumSize - t.size > 0 || e),
      n = [...this.viewItems].reverse();
    e = !1;
    const r = n.map(t => e = t.size - t.minimumSize > 0 || e).reverse();
    e = !1;
    const s = n.map(t => e = t.maximumSize - t.size > 0 || e).reverse();
    let o = 0;
    for (let _e15 = 0; _e15 < this.sashItems.length; _e15++) {
      const {
        sash: _n4
      } = this.sashItems[_e15];
      o += this.viewItems[_e15].size;
      const a = !(t[_e15] && s[_e15 + 1]),
        u = !(i[_e15] && r[_e15 + 1]);
      if (a && u) {
        const _i8 = X(_e15, -1, -1),
          _s = X(_e15 + 1, this.viewItems.length),
          _a = this.findFirstSnapIndex(_i8),
          _u = this.findFirstSnapIndex(_s),
          l = "number" == typeof _a && !this.viewItems[_a].visible,
          h = "number" == typeof _u && !this.viewItems[_u].visible;
        l && r[_e15] && (o > 0 || this.startSnappingEnabled) ? _n4.state = Se.Minimum : h && t[_e15] && (o < this.contentSize || this.endSnappingEnabled) ? _n4.state = Se.Maximum : _n4.state = Se.Disabled;
      } else _n4.state = a && !u ? Se.Minimum : !a && u ? Se.Maximum : Se.Enabled;
    }
  }
  findFirstSnapIndex(e) {
    for (const t of e) {
      const _e16 = this.viewItems[t];
      if (_e16.visible && _e16.snap) return t;
    }
    for (const t of e) {
      const _e17 = this.viewItems[t];
      if (_e17.visible && _e17.maximumSize - _e17.minimumSize > 0) return;
      if (!_e17.visible && _e17.snap) return t;
    }
  }
}
class Me {
  constructor(e) {
    this.size = void 0, this.size = e;
  }
  getPreferredSize() {
    return this.size;
  }
}
class Pe {
  constructor(e, t) {
    this.proportion = void 0, this.layoutService = void 0, this.proportion = e, this.layoutService = t;
  }
  getPreferredSize() {
    return this.proportion * this.layoutService.getSize();
  }
}
class Ae {
  getPreferredSize() {}
}
class Te {
  get preferredSize() {
    return this.layoutStrategy.getPreferredSize();
  }
  set preferredSize(e) {
    if ("number" == typeof e) this.layoutStrategy = new Me(e);else if ("string" == typeof e) {
      const t = e.trim();
      if (B(t, "%")) {
        const _e18 = Number(t.slice(0, -1)) / 100;
        this.layoutStrategy = new Pe(_e18, this.layoutService);
      } else if (B(t, "px")) {
        const _e19 = Number(t.slice(0, -2)) / 100;
        this.layoutStrategy = new Me(_e19);
      } else if ("number" == typeof Number.parseFloat(t)) {
        const _e20 = Number.parseFloat(t);
        this.layoutStrategy = new Me(_e20);
      } else this.layoutStrategy = new Ae();
    } else this.layoutStrategy = new Ae();
  }
  constructor(e, t) {
    var _t$priority;
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = e, this.element = t.element, this.minimumSize = "number" == typeof t.minimumSize ? t.minimumSize : 30, this.maximumSize = "number" == typeof t.maximumSize ? t.maximumSize : Number.POSITIVE_INFINITY, "number" == typeof t.preferredSize) this.layoutStrategy = new Me(t.preferredSize);else if ("string" == typeof t.preferredSize) {
      const _e21 = t.preferredSize.trim();
      if (B(_e21, "%")) {
        const _t11 = Number(_e21.slice(0, -1)) / 100;
        this.layoutStrategy = new Pe(_t11, this.layoutService);
      } else if (B(_e21, "px")) {
        const _t12 = Number(_e21.slice(0, -2));
        this.layoutStrategy = new Me(_t12);
      } else if ("number" == typeof Number.parseFloat(_e21)) {
        const _t13 = Number.parseFloat(_e21);
        this.layoutStrategy = new Me(_t13);
      } else this.layoutStrategy = new Ae();
    } else this.layoutStrategy = new Ae();
    this.priority = (_t$priority = t.priority) != null ? _t$priority : je.Normal, this.snap = "boolean" == typeof t.snap && t.snap;
  }
  layout(e) {}
}
function Ce(e) {
  return void 0 !== e.minSize || void 0 !== e.maxSize || void 0 !== e.preferredSize || void 0 !== e.priority || void 0 !== e.visible;
}
const Fe = a(({
  className: t,
  children: i
}, n) => e.createElement("div", {
  ref: n,
  className: f("split-view-view", N, t)
}, i));
Fe.displayName = "Allotment.Pane";
const ke = a(({
  children: o,
  className: a,
  maxSize: l = 1 / 0,
  minSize: h = 30,
  proportionalLayout: c = !0,
  separator: d = !0,
  sizes: v,
  defaultSizes: m = v,
  snap: p = !1,
  vertical: y = !1,
  shadownDocument: g = document,
  onChange: b,
  onReset: z,
  onVisibleChange: w,
  onDragStart: S,
  onDragEnd: _
}, I) => {
  const x = t(null),
    V = t([]),
    L = t(new Map()),
    N = t(null),
    T = t(new Map()),
    C = t(new Y()),
    F = t([]),
    [$, B] = i(!1);
  "production" !== process.env.NODE_ENV && v && console.warn("Prop sizes is deprecated. Please use defaultSizes instead.");
  const R = s(() => e.Children.toArray(o).filter(e.isValidElement), [o]),
    W = r(e => {
      var t, i;
      const n = null === (t = F.current) || void 0 === t ? void 0 : t[e];
      return "number" == typeof (null == n ? void 0 : n.preferredSize) && (null === (i = N.current) || void 0 === i || i.resizeView(e, Math.round(n.preferredSize)), !0);
    }, []);
  return u(I, () => ({
    reset: () => {
      if (z) z();else {
        var e;
        null === (e = N.current) || void 0 === e || e.distributeViewSizes();
        for (let _e22 = 0; _e22 < F.current.length; _e22++) W(_e22);
      }
    },
    resize: e => {
      var t;
      null === (t = N.current) || void 0 === t || t.resizeViews(e);
    }
  })), H(() => {
    let e = !0;
    m && T.current.size !== m.length && (e = !1, console.warn(`Expected ${m.length} children based on defaultSizes but found ${T.current.size}`)), e && m && (V.current = R.map(e => e.key));
    const t = _extends({
      orientation: y ? we.Vertical : we.Horizontal,
      proportionalLayout: c
    }, e && m && {
      descriptor: {
        size: m.reduce((e, t) => e + t, 0),
        views: m.map((e, t) => {
          var _ref, _ref2, _ref3, _ref4;
          const i = L.current.get(V.current[t]),
            n = new Te(C.current, _extends({
              element: g.createElement("div"),
              minimumSize: (_ref = null == i ? void 0 : i.minSize) != null ? _ref : h,
              maximumSize: (_ref2 = null == i ? void 0 : i.maxSize) != null ? _ref2 : l,
              priority: (_ref3 = null == i ? void 0 : i.priority) != null ? _ref3 : je.Normal
            }, (null == i ? void 0 : i.preferredSize) && {
              preferredSize: null == i ? void 0 : i.preferredSize
            }, {
              snap: (_ref4 = null == i ? void 0 : i.snap) != null ? _ref4 : p
            }));
          return F.current.push(n), {
            container: [...T.current.values()][t],
            size: e,
            view: n
          };
        })
      }
    });
    N.current = new Ne(x.current, t, g, b, S, _), N.current.on("sashDragStart", () => {
      var e;
      null === (e = x.current) || void 0 === e || e.classList.add("split-view-sash-dragging");
    }), N.current.on("sashDragEnd", () => {
      var e;
      null === (e = x.current) || void 0 === e || e.classList.remove("split-view-sash-dragging");
    }), N.current.on("sashchange", e => {
      if (w && N.current) {
        const _e23 = R.map(e => e.key);
        for (let t = 0; t < _e23.length; t++) {
          const i = L.current.get(_e23[t]);
          void 0 !== (null == i ? void 0 : i.visible) && i.visible !== N.current.isViewVisible(t) && w(t, N.current.isViewVisible(t));
        }
      }
    }), N.current.on("sashreset", e => {
      if (z) z();else {
        var t;
        if (W(e)) return;
        if (W(e + 1)) return;
        null === (t = N.current) || void 0 === t || t.distributeViewSizes();
      }
    });
    const i = N.current;
    return () => {
      i.dispose();
    };
  }, []), H(() => {
    if ($) {
      const a = R.map(e => e.key),
        u = [...V.current],
        c = a.filter(e => !V.current.includes(e)),
        d = a.filter(e => V.current.includes(e)),
        f = V.current.map(e => !a.includes(e));
      for (let _t14 = f.length - 1; _t14 >= 0; _t14--) {
        var e;
        if (f[_t14]) null === (e = N.current) || void 0 === e || e.removeView(_t14), u.splice(_t14, 1), F.current.splice(_t14, 1);
      }
      for (const _e24 of c) {
        var _ref5, _ref6, _ref7, _ref8;
        var t;
        const _i9 = L.current.get(_e24),
          _n5 = new Te(C.current, _extends({
            element: g.createElement("div"),
            minimumSize: (_ref5 = null == _i9 ? void 0 : _i9.minSize) != null ? _ref5 : h,
            maximumSize: (_ref6 = null == _i9 ? void 0 : _i9.maxSize) != null ? _ref6 : l,
            priority: (_ref7 = null == _i9 ? void 0 : _i9.priority) != null ? _ref7 : je.Normal
          }, (null == _i9 ? void 0 : _i9.preferredSize) && {
            preferredSize: null == _i9 ? void 0 : _i9.preferredSize
          }, {
            snap: (_ref8 = null == _i9 ? void 0 : _i9.snap) != null ? _ref8 : p
          }));
        null === (t = N.current) || void 0 === t || t.addView(T.current.get(_e24), _n5, Ee.Distribute, a.findIndex(t => t === _e24)), u.splice(a.findIndex(t => t === _e24), 0, _e24), F.current.splice(a.findIndex(t => t === _e24), 0, _n5);
      }
      for (; !E(a, u);) for (const [_e25, _t15] of a.entries()) {
        const _n6 = u.findIndex(e => e === _t15);
        if (_n6 !== _e25) {
          var i;
          null === (i = N.current) || void 0 === i || i.moveView(T.current.get(_t15), _n6, _e25);
          const _r2 = u[_n6];
          u.splice(_n6, 1), u.splice(_e25, 0, _r2);
          break;
        }
      }
      for (const _e26 of c) {
        const _t16 = a.findIndex(t => t === _e26),
          _i10 = F.current[_t16].preferredSize;
        var n;
        if (void 0 !== _i10) null === (n = N.current) || void 0 === n || n.resizeView(_t16, _i10);
      }
      for (const _e27 of [...c, ...d]) {
        const _t17 = L.current.get(_e27),
          _i11 = a.findIndex(t => t === _e27);
        var r, s;
        if (_t17 && Ce(_t17)) if (void 0 !== _t17.visible) if ((null === (r = N.current) || void 0 === r ? void 0 : r.isViewVisible(_i11)) !== _t17.visible) null === (s = N.current) || void 0 === s || s.setViewVisible(_i11, _t17.visible);
      }
      for (const _e28 of d) {
        const _t18 = L.current.get(_e28),
          _i12 = a.findIndex(t => t === _e28);
        if (_t18 && Ce(_t18)) {
          void 0 !== _t18.preferredSize && F.current[_i12].preferredSize !== _t18.preferredSize && (F.current[_i12].preferredSize = _t18.preferredSize);
          let _e29 = !1;
          var o;
          if (void 0 !== _t18.minSize && F.current[_i12].minimumSize !== _t18.minSize && (F.current[_i12].minimumSize = _t18.minSize, _e29 = !0), void 0 !== _t18.maxSize && F.current[_i12].maximumSize !== _t18.maxSize && (F.current[_i12].maximumSize = _t18.maxSize, _e29 = !0), _e29) null === (o = N.current) || void 0 === o || o.layout();
        }
      }
      (c.length > 0 || f.length > 0) && (V.current = a);
    }
  }, [R, $, l, h, p]), n(() => {
    N.current && (N.current.onDidChange = b);
  }, [b]), n(() => {
    N.current && (N.current.onDidDragStart = S);
  }, [S]), n(() => {
    N.current && (N.current.onDidDragEnd = _);
  }, [_]), j({
    ref: x,
    onResize: ({
      width: e,
      height: t
    }) => {
      var i;
      e && t && (null === (i = N.current) || void 0 === i || i.layout(y ? t : e), C.current.setSize(y ? t : e), B(!0));
    }
  }), H(() => {
    if (!$) {
      var e;
      const {
        height: t,
        width: i
      } = x.current.getBoundingClientRect();
      null === (e = N.current) || void 0 === e || e.layout(y ? t : i), C.current.setSize(y ? t : i), B(!0);
    }
  }, [$, y]), n(() => {
    k && $e(g, 20);
  }, [g]), e.createElement("div", {
    ref: x,
    className: f("split-view", y ? "split-view-vertical" : "split-view-horizontal", {
      "split-view-separator-border": d
    }, D, y ? M : P, {
      [A]: d
    }, a)
  }, e.createElement("div", {
    className: f("split-view-container", O)
  }, e.Children.toArray(o).map(t => {
    if (!e.isValidElement(t)) return null;
    const i = t.key;
    return "Allotment.Pane" === t.type.displayName ? (L.current.set(i, t.props), e.cloneElement(t, {
      key: i,
      ref: e => {
        const n = t.ref;
        n && (n.current = e), e ? T.current.set(i, e) : T.current.delete(i);
      }
    })) : e.createElement(Fe, {
      key: i,
      ref: e => {
        e ? T.current.set(i, e) : T.current.delete(i);
      }
    }, t);
  })));
});
function $e(e, t) {
  const i = I(t, 4, 20),
    n = I(t, 1, 8);
  e.documentElement.style.setProperty("--sash-size", i + "px"), e.documentElement.style.setProperty("--sash-hover-size", n + "px"), function (e) {
    _e = e, Ie.emit("onDidChangeGlobalSize", e);
  }(i);
}
ke.displayName = "Allotment";
var He = Object.assign(ke, {
  Pane: Fe
});
export { He as Allotment, je as LayoutPriority, $e as setSashSize };
