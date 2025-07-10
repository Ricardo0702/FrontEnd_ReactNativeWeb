/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  'use strict';
  var e = {
      14: (e, t) => {
        (Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e) {
            return 'string' == typeof e && n.test(e);
          }));
        var n = /-webkit-|-moz-|-ms-/;
      },
      20: (e, t) => {
        t.A = function (e, t, r) {
          if (Object.prototype.hasOwnProperty.call(n, e)) for (var o = n[e], a = 0, i = o.length; a < i; ++a) r[o[a]] = t;
        };
        var n = {
          marginBlockStart: ['WebkitMarginBefore'],
          marginBlockEnd: ['WebkitMarginAfter'],
          marginInlineStart: ['WebkitMarginStart', 'MozMarginStart'],
          marginInlineEnd: ['WebkitMarginEnd', 'MozMarginEnd'],
          paddingBlockStart: ['WebkitPaddingBefore'],
          paddingBlockEnd: ['WebkitPaddingAfter'],
          paddingInlineStart: ['WebkitPaddingStart', 'MozPaddingStart'],
          paddingInlineEnd: ['WebkitPaddingEnd', 'MozPaddingEnd'],
          borderBlockStart: ['WebkitBorderBefore'],
          borderBlockStartColor: ['WebkitBorderBeforeColor'],
          borderBlockStartStyle: ['WebkitBorderBeforeStyle'],
          borderBlockStartWidth: ['WebkitBorderBeforeWidth'],
          borderBlockEnd: ['WebkitBorderAfter'],
          borderBlockEndColor: ['WebkitBorderAfterColor'],
          borderBlockEndStyle: ['WebkitBorderAfterStyle'],
          borderBlockEndWidth: ['WebkitBorderAfterWidth'],
          borderInlineStart: ['WebkitBorderStart', 'MozBorderStart'],
          borderInlineStartColor: ['WebkitBorderStartColor', 'MozBorderStartColor'],
          borderInlineStartStyle: ['WebkitBorderStartStyle', 'MozBorderStartStyle'],
          borderInlineStartWidth: ['WebkitBorderStartWidth', 'MozBorderStartWidth'],
          borderInlineEnd: ['WebkitBorderEnd', 'MozBorderEnd'],
          borderInlineEndColor: ['WebkitBorderEndColor', 'MozBorderEndColor'],
          borderInlineEndStyle: ['WebkitBorderEndStyle', 'MozBorderEndStyle'],
          borderInlineEndWidth: ['WebkitBorderEndWidth', 'MozBorderEndWidth'],
        };
      },
      49: (e, t, n) => {
        (Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e, t, n) {
            var r = e[t];
            if (r && n.hasOwnProperty(t))
              for (var a = (0, o.default)(t), i = 0; i < r.length; ++i) {
                var l = r[i] + a;
                n[l] || (n[l] = n[t]);
              }
            return n;
          }));
        var r,
          o = (r = n(91)) && r.__esModule ? r : { default: r };
      },
      56: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      72: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, i = [], l = 0; l < e.length; l++) {
            var u = e[l],
              s = r.base ? u[0] + r.base : u[0],
              c = a[s] || 0,
              f = ''.concat(s, ' ').concat(c);
            a[s] = c + 1;
            var d = n(f),
              p = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== d) (t[d].references++, t[d].updater(p));
            else {
              var h = o(p, r);
              ((r.byIndex = l), t.splice(l, 0, { identifier: f, updater: h, references: 1 }));
            }
            i.push(f);
          }
          return i;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var l = n(a[i]);
              t[l].references--;
            }
            for (var u = r(e, o), s = 0; s < a.length; s++) {
              var c = n(a[s]);
              0 === t[c].references && (t[c].updater(), t.splice(c, 1));
            }
            a = u;
          };
        };
      },
      91: (e, t) => {
        (Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
          }));
      },
      99: (e, t) => {
        (Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e) {
            return e instanceof Object && !Array.isArray(e);
          }));
      },
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      129: (e, t) => {
        t.A = function (e, t) {
          if (r.hasOwnProperty(e) && o.hasOwnProperty(t))
            return n.map(function (e) {
              return e + t;
            });
        };
        var n = ['-webkit-', '-moz-', ''],
          r = {
            maxHeight: !0,
            maxWidth: !0,
            width: !0,
            height: !0,
            columnWidth: !0,
            minWidth: !0,
            minHeight: !0,
          },
          o = {
            'min-content': !0,
            'max-content': !0,
            'fill-available': !0,
            'fit-content': !0,
            'contain-floats': !0,
          };
      },
      159: (e) => {
        e.exports = function (e) {
          var t = document.createElement('style');
          return (e.setAttributes(t, e.attributes), e.insert(t, e.options), t);
        };
      },
      176: (e, t) => {
        t.P = void 0;
        var n = new WeakMap();
        function r(e) {
          var t, r, o;
          return (
            null != e && ((t = !0 === e.disableCache), (r = !0 === e.disableMix), (o = e.transform)),
            function () {
              for (var e = [], a = '', i = null, l = t ? null : n, u = new Array(arguments.length), s = 0; s < arguments.length; s++)
                u[s] = arguments[s];
              for (; u.length > 0; ) {
                var c = u.pop();
                if (null != c && !1 !== c)
                  if (Array.isArray(c)) for (var f = 0; f < c.length; f++) u.push(c[f]);
                  else {
                    var d = null != o ? o(c) : c;
                    if (d.$$css) {
                      var p = '';
                      if (null != l && l.has(d)) {
                        var h = l.get(d);
                        null != h && ((p = h[0]), e.push.apply(e, h[1]), (l = h[2]));
                      } else {
                        var m = [];
                        for (var y in d) {
                          var g = d[y];
                          '$$css' !== y &&
                            ('string' == typeof g || null === g
                              ? e.includes(y) || (e.push(y), null != l && m.push(y), 'string' == typeof g && (p += p ? ' ' + g : g))
                              : console.error('styleq: '.concat(y, ' typeof ').concat(String(g), ' is not "string" or "null".')));
                        }
                        if (null != l) {
                          var v = new WeakMap();
                          (l.set(d, [p, m, v]), (l = v));
                        }
                      }
                      p && (a = a ? p + ' ' + a : p);
                    } else if (r) (null == i && (i = {}), (i = Object.assign({}, d, i)));
                    else {
                      var b = null;
                      for (var w in d) {
                        var S = d[w];
                        void 0 !== S &&
                          (e.includes(w) || (null != S && (null == i && (i = {}), null == b && (b = {}), (b[w] = S)), e.push(w), (l = null)));
                      }
                      null != b && (i = Object.assign(b, i));
                    }
                  }
              }
              return [a, i];
            }
          );
        }
        var o = r();
        ((t.P = o), (o.factory = r));
      },
      221: (e, t, n) => {
        var r = n(540);
        function o(e) {
          var t = 'https://react.dev/errors/' + e;
          if (1 < arguments.length) {
            t += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
          }
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        function a() {}
        var i = {
            d: {
              f: a,
              r: function () {
                throw Error(o(522));
              },
              D: a,
              C: a,
              L: a,
              m: a,
              X: a,
              S: a,
              M: a,
            },
            p: 0,
            findDOMNode: null,
          },
          l = Symbol.for('react.portal'),
          u = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function s(e, t) {
          return 'font' === e ? '' : 'string' == typeof t ? ('use-credentials' === t ? t : '') : void 0;
        }
        ((t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
          (t.createPortal = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)) throw Error(o(299));
            return (function (e, t, n) {
              var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
              return {
                $$typeof: l,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.flushSync = function (e) {
            var t = u.T,
              n = i.p;
            try {
              if (((u.T = null), (i.p = 2), e)) return e();
            } finally {
              ((u.T = t), (i.p = n), i.d.f());
            }
          }),
          (t.preconnect = function (e, t) {
            'string' == typeof e &&
              ((t = t ? ('string' == typeof (t = t.crossOrigin) ? ('use-credentials' === t ? t : '') : void 0) : null), i.d.C(e, t));
          }),
          (t.prefetchDNS = function (e) {
            'string' == typeof e && i.d.D(e);
          }),
          (t.preinit = function (e, t) {
            if ('string' == typeof e && t && 'string' == typeof t.as) {
              var n = t.as,
                r = s(n, t.crossOrigin),
                o = 'string' == typeof t.integrity ? t.integrity : void 0,
                a = 'string' == typeof t.fetchPriority ? t.fetchPriority : void 0;
              'style' === n
                ? i.d.S(e, 'string' == typeof t.precedence ? t.precedence : void 0, {
                    crossOrigin: r,
                    integrity: o,
                    fetchPriority: a,
                  })
                : 'script' === n &&
                  i.d.X(e, {
                    crossOrigin: r,
                    integrity: o,
                    fetchPriority: a,
                    nonce: 'string' == typeof t.nonce ? t.nonce : void 0,
                  });
            }
          }),
          (t.preinitModule = function (e, t) {
            if ('string' == typeof e)
              if ('object' == typeof t && null !== t) {
                if (null == t.as || 'script' === t.as) {
                  var n = s(t.as, t.crossOrigin);
                  i.d.M(e, {
                    crossOrigin: n,
                    integrity: 'string' == typeof t.integrity ? t.integrity : void 0,
                    nonce: 'string' == typeof t.nonce ? t.nonce : void 0,
                  });
                }
              } else null == t && i.d.M(e);
          }),
          (t.preload = function (e, t) {
            if ('string' == typeof e && 'object' == typeof t && null !== t && 'string' == typeof t.as) {
              var n = t.as,
                r = s(n, t.crossOrigin);
              i.d.L(e, n, {
                crossOrigin: r,
                integrity: 'string' == typeof t.integrity ? t.integrity : void 0,
                nonce: 'string' == typeof t.nonce ? t.nonce : void 0,
                type: 'string' == typeof t.type ? t.type : void 0,
                fetchPriority: 'string' == typeof t.fetchPriority ? t.fetchPriority : void 0,
                referrerPolicy: 'string' == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                imageSrcSet: 'string' == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes: 'string' == typeof t.imageSizes ? t.imageSizes : void 0,
                media: 'string' == typeof t.media ? t.media : void 0,
              });
            }
          }),
          (t.preloadModule = function (e, t) {
            if ('string' == typeof e)
              if (t) {
                var n = s(t.as, t.crossOrigin);
                i.d.m(e, {
                  as: 'string' == typeof t.as && 'script' !== t.as ? t.as : void 0,
                  crossOrigin: n,
                  integrity: 'string' == typeof t.integrity ? t.integrity : void 0,
                });
              } else i.d.m(e);
          }),
          (t.requestFormReset = function (e) {
            i.d.r(e);
          }),
          (t.unstable_batchedUpdates = function (e, t) {
            return e(t);
          }),
          (t.useFormState = function (e, t, n) {
            return u.H.useFormState(e, t, n);
          }),
          (t.useFormStatus = function () {
            return u.H.useHostTransitionStatus();
          }),
          (t.version = '19.1.0'));
      },
      232: (e, t) => {
        Object.prototype.toString;
      },
      247: (e, t, n) => {
        var r = n(982),
          o = n(540),
          a = n(961);
        function i(e) {
          var t = 'https://react.dev/errors/' + e;
          if (1 < arguments.length) {
            t += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
          }
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        function l(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              (!!(4098 & (t = e).flags) && (n = t.return), (e = t.return));
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function u(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
          }
          return null;
        }
        function s(e) {
          if (l(e) !== e) throw Error(i(188));
        }
        function c(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = c(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var f = Object.assign,
          d = Symbol.for('react.element'),
          p = Symbol.for('react.transitional.element'),
          h = Symbol.for('react.portal'),
          m = Symbol.for('react.fragment'),
          y = Symbol.for('react.strict_mode'),
          g = Symbol.for('react.profiler'),
          v = Symbol.for('react.provider'),
          b = Symbol.for('react.consumer'),
          w = Symbol.for('react.context'),
          S = Symbol.for('react.forward_ref'),
          E = Symbol.for('react.suspense'),
          k = Symbol.for('react.suspense_list'),
          x = Symbol.for('react.memo'),
          C = Symbol.for('react.lazy');
        Symbol.for('react.scope');
        var R = Symbol.for('react.activity');
        (Symbol.for('react.legacy_hidden'), Symbol.for('react.tracing_marker'));
        var P = Symbol.for('react.memo_cache_sentinel');
        Symbol.for('react.view_transition');
        var T = Symbol.iterator;
        function O(e) {
          return null === e || 'object' != typeof e ? null : 'function' == typeof (e = (T && e[T]) || e['@@iterator']) ? e : null;
        }
        var _ = Symbol.for('react.client.reference');
        function A(e) {
          if (null == e) return null;
          if ('function' == typeof e) return e.$$typeof === _ ? null : e.displayName || e.name || null;
          if ('string' == typeof e) return e;
          switch (e) {
            case m:
              return 'Fragment';
            case g:
              return 'Profiler';
            case y:
              return 'StrictMode';
            case E:
              return 'Suspense';
            case k:
              return 'SuspenseList';
            case R:
              return 'Activity';
          }
          if ('object' == typeof e)
            switch (e.$$typeof) {
              case h:
                return 'Portal';
              case w:
                return (e.displayName || 'Context') + '.Provider';
              case b:
                return (e._context.displayName || 'Context') + '.Consumer';
              case S:
                var t = e.render;
                return ((e = e.displayName) || (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'), e);
              case x:
                return null !== (t = e.displayName || null) ? t : A(e.type) || 'Memo';
              case C:
                ((t = e._payload), (e = e._init));
                try {
                  return A(e(t));
                } catch (e) {}
            }
          return null;
        }
        var N = Array.isArray,
          L = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          D = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          z = { pending: !1, data: null, method: null, action: null },
          j = [],
          M = -1;
        function I(e) {
          return { current: e };
        }
        function F(e) {
          0 > M || ((e.current = j[M]), (j[M] = null), M--);
        }
        function B(e, t) {
          (M++, (j[M] = e.current), (e.current = t));
        }
        var U = I(null),
          W = I(null),
          $ = I(null),
          H = I(null);
        function q(e, t) {
          switch ((B($, t), B(W, e), B(U, null), t.nodeType)) {
            case 9:
            case 11:
              e = (e = t.documentElement) && (e = e.namespaceURI) ? rf(e) : 0;
              break;
            default:
              if (((e = t.tagName), (t = t.namespaceURI))) e = of((t = rf(t)), e);
              else
                switch (e) {
                  case 'svg':
                    e = 1;
                    break;
                  case 'math':
                    e = 2;
                    break;
                  default:
                    e = 0;
                }
          }
          (F(U), B(U, e));
        }
        function V() {
          (F(U), F(W), F($));
        }
        function G(e) {
          null !== e.memoizedState && B(H, e);
          var t = U.current,
            n = of(t, e.type);
          t !== n && (B(W, e), B(U, n));
        }
        function Y(e) {
          (W.current === e && (F(U), F(W)), H.current === e && (F(H), (Yf._currentValue = z)));
        }
        var K = Object.prototype.hasOwnProperty,
          X = r.unstable_scheduleCallback,
          Q = r.unstable_cancelCallback,
          J = r.unstable_shouldYield,
          Z = r.unstable_requestPaint,
          ee = r.unstable_now,
          te = r.unstable_getCurrentPriorityLevel,
          ne = r.unstable_ImmediatePriority,
          re = r.unstable_UserBlockingPriority,
          oe = r.unstable_NormalPriority,
          ae = r.unstable_LowPriority,
          ie = r.unstable_IdlePriority,
          le = r.log,
          ue = r.unstable_setDisableYieldValue,
          se = null,
          ce = null;
        function fe(e) {
          if (('function' == typeof le && ue(e), ce && 'function' == typeof ce.setStrictMode))
            try {
              ce.setStrictMode(se, e);
            } catch (e) {}
        }
        var de = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 == (e >>>= 0) ? 32 : (31 - ((pe(e) / he) | 0)) | 0;
              },
          pe = Math.log,
          he = Math.LN2,
          me = 256,
          ye = 4194304;
        function ge(e) {
          var t = 42 & e;
          if (0 !== t) return t;
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
              return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194048 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function ve(e, t, n) {
          var r = e.pendingLanes;
          if (0 === r) return 0;
          var o = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes;
          e = e.warmLanes;
          var l = 134217727 & r;
          return (
            0 !== l
              ? 0 !== (r = l & ~a)
                ? (o = ge(r))
                : 0 !== (i &= l)
                  ? (o = ge(i))
                  : n || (0 !== (n = l & ~e) && (o = ge(n)))
              : 0 !== (l = r & ~a)
                ? (o = ge(l))
                : 0 !== i
                  ? (o = ge(i))
                  : n || (0 !== (n = r & ~e) && (o = ge(n))),
            0 === o ? 0 : 0 !== t && t !== o && 0 === (t & a) && ((a = o & -o) >= (n = t & -t) || (32 === a && 4194048 & n)) ? t : o
          );
        }
        function be(e, t) {
          return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
        }
        function we(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
              return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function Se() {
          var e = me;
          return (!(4194048 & (me <<= 1)) && (me = 256), e);
        }
        function Ee() {
          var e = ye;
          return (!(62914560 & (ye <<= 1)) && (ye = 4194304), e);
        }
        function ke(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function xe(e, t) {
          ((e.pendingLanes |= t), 268435456 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
        }
        function Ce(e, t, n) {
          ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
          var r = 31 - de(t);
          ((e.entangledLanes |= t), (e.entanglements[r] = 1073741824 | e.entanglements[r] | (4194090 & n)));
        }
        function Re(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - de(n),
              o = 1 << r;
            ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
          }
        }
        function Pe(e) {
          switch (e) {
            case 2:
              e = 1;
              break;
            case 8:
              e = 4;
              break;
            case 32:
              e = 16;
              break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              e = 128;
              break;
            case 268435456:
              e = 134217728;
              break;
            default:
              e = 0;
          }
          return e;
        }
        function Te(e) {
          return 2 < (e &= -e) ? (8 < e ? (134217727 & e ? 32 : 268435456) : 8) : 2;
        }
        function Oe() {
          var e = D.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : ld(e.type);
        }
        var _e = Math.random().toString(36).slice(2),
          Ae = '__reactFiber$' + _e,
          Ne = '__reactProps$' + _e,
          Le = '__reactContainer$' + _e,
          De = '__reactEvents$' + _e,
          ze = '__reactListeners$' + _e,
          je = '__reactHandles$' + _e,
          Me = '__reactResources$' + _e,
          Ie = '__reactMarker$' + _e;
        function Fe(e) {
          (delete e[Ae], delete e[Ne], delete e[De], delete e[ze], delete e[je]);
        }
        function Be(e) {
          var t = e[Ae];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Le] || n[Ae])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = bf(e); null !== e; ) {
                  if ((n = e[Ae])) return n;
                  e = bf(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Ue(e) {
          if ((e = e[Ae] || e[Le])) {
            var t = e.tag;
            if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t) return e;
          }
          return null;
        }
        function We(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(i(33));
        }
        function $e(e) {
          var t = e[Me];
          return (t || (t = e[Me] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
        }
        function He(e) {
          e[Ie] = !0;
        }
        var qe = new Set(),
          Ve = {};
        function Ge(e, t) {
          (Ye(e, t), Ye(e + 'Capture', t));
        }
        function Ye(e, t) {
          for (Ve[e] = t, e = 0; e < t.length; e++) qe.add(t[e]);
        }
        var Ke,
          Xe,
          Qe = RegExp(
            '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
          ),
          Je = {},
          Ze = {};
        function et(e, t, n) {
          if (((o = t), K.call(Ze, o) || (!K.call(Je, o) && (Qe.test(o) ? (Ze[o] = !0) : ((Je[o] = !0), 0)))))
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case 'undefined':
                case 'function':
                case 'symbol':
                  return void e.removeAttribute(t);
                case 'boolean':
                  var r = t.toLowerCase().slice(0, 5);
                  if ('data-' !== r && 'aria-' !== r) return void e.removeAttribute(t);
              }
              e.setAttribute(t, '' + n);
            }
          var o;
        }
        function tt(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case 'undefined':
              case 'function':
              case 'symbol':
              case 'boolean':
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, '' + n);
          }
        }
        function nt(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case 'undefined':
              case 'function':
              case 'symbol':
              case 'boolean':
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, '' + r);
          }
        }
        function rt(e) {
          if (void 0 === Ke)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              ((Ke = (t && t[1]) || ''),
                (Xe = -1 < e.stack.indexOf('\n    at') ? ' (<anonymous>)' : -1 < e.stack.indexOf('@') ? '@unknown:0:0' : ''));
            }
          return '\n' + Ke + e + Xe;
        }
        var ot = !1;
        function at(e, t) {
          if (!e || ot) return '';
          ot = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, 'props', {
                        set: function () {
                          throw Error();
                        },
                      }),
                      'object' == typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (e) {
                        var r = e;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (e) {
                        r = e;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (e) {
                      r = e;
                    }
                    (n = e()) && 'function' == typeof n.catch && n.catch(function () {});
                  }
                } catch (e) {
                  if (e && r && 'string' == typeof e.stack) return [e.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
            var o = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, 'name');
            o &&
              o.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, 'name', {
                value: 'DetermineComponentFrameRoot',
              });
            var a = r.DetermineComponentFrameRoot(),
              i = a[0],
              l = a[1];
            if (i && l) {
              var u = i.split('\n'),
                s = l.split('\n');
              for (o = r = 0; r < u.length && !u[r].includes('DetermineComponentFrameRoot'); ) r++;
              for (; o < s.length && !s[o].includes('DetermineComponentFrameRoot'); ) o++;
              if (r === u.length || o === s.length) for (r = u.length - 1, o = s.length - 1; 1 <= r && 0 <= o && u[r] !== s[o]; ) o--;
              for (; 1 <= r && 0 <= o; r--, o--)
                if (u[r] !== s[o]) {
                  if (1 !== r || 1 !== o)
                    do {
                      if ((r--, 0 > --o || u[r] !== s[o])) {
                        var c = '\n' + u[r].replace(' at new ', ' at ');
                        return (e.displayName && c.includes('<anonymous>') && (c = c.replace('<anonymous>', e.displayName)), c);
                      }
                    } while (1 <= r && 0 <= o);
                  break;
                }
            }
          } finally {
            ((ot = !1), (Error.prepareStackTrace = n));
          }
          return (n = e ? e.displayName || e.name : '') ? rt(n) : '';
        }
        function it(e) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return rt(e.type);
            case 16:
              return rt('Lazy');
            case 13:
              return rt('Suspense');
            case 19:
              return rt('SuspenseList');
            case 0:
            case 15:
              return at(e.type, !1);
            case 11:
              return at(e.type.render, !1);
            case 1:
              return at(e.type, !0);
            case 31:
              return rt('Activity');
            default:
              return '';
          }
        }
        function lt(e) {
          try {
            var t = '';
            do {
              ((t += it(e)), (e = e.return));
            } while (e);
            return t;
          } catch (e) {
            return '\nError generating stack: ' + e.message + '\n' + e.stack;
          }
        }
        function ut(e) {
          switch (typeof e) {
            case 'bigint':
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e;
            default:
              return '';
          }
        }
        function st(e) {
          var t = e.type;
          return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
        }
        function ct(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = st(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
              if (!e.hasOwnProperty(t) && void 0 !== n && 'function' == typeof n.get && 'function' == typeof n.set) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      ((r = '' + e), a.call(this, e));
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      ((e._valueTracker = null), delete e[t]);
                    },
                  }
                );
              }
            })(e));
        }
        function ft(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = '';
          return (e && (r = st(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0));
        }
        function dt(e) {
          if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var pt = /[\n"\\]/g;
        function ht(e) {
          return e.replace(pt, function (e) {
            return '\\' + e.charCodeAt(0).toString(16) + ' ';
          });
        }
        function mt(e, t, n, r, o, a, i, l) {
          ((e.name = ''),
            null != i && 'function' != typeof i && 'symbol' != typeof i && 'boolean' != typeof i ? (e.type = i) : e.removeAttribute('type'),
            null != t
              ? 'number' === i
                ? ((0 === t && '' === e.value) || e.value != t) && (e.value = '' + ut(t))
                : e.value !== '' + ut(t) && (e.value = '' + ut(t))
              : ('submit' !== i && 'reset' !== i) || e.removeAttribute('value'),
            null != t ? gt(e, i, ut(t)) : null != n ? gt(e, i, ut(n)) : null != r && e.removeAttribute('value'),
            null == o && null != a && (e.defaultChecked = !!a),
            null != o && (e.checked = o && 'function' != typeof o && 'symbol' != typeof o),
            null != l && 'function' != typeof l && 'symbol' != typeof l && 'boolean' != typeof l ? (e.name = '' + ut(l)) : e.removeAttribute('name'));
        }
        function yt(e, t, n, r, o, a, i, l) {
          if ((null != a && 'function' != typeof a && 'symbol' != typeof a && 'boolean' != typeof a && (e.type = a), null != t || null != n)) {
            if (('submit' === a || 'reset' === a) && null == t) return;
            ((n = null != n ? '' + ut(n) : ''), (t = null != t ? '' + ut(t) : n), l || t === e.value || (e.value = t), (e.defaultValue = t));
          }
          ((r = 'function' != typeof (r = null != r ? r : o) && 'symbol' != typeof r && !!r),
            (e.checked = l ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != i && 'function' != typeof i && 'symbol' != typeof i && 'boolean' != typeof i && (e.name = i));
        }
        function gt(e, t, n) {
          ('number' === t && dt(e.ownerDocument) === e) || e.defaultValue === '' + n || (e.defaultValue = '' + n);
        }
        function vt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              ((o = t.hasOwnProperty('$' + e[n].value)), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0));
          } else {
            for (n = '' + ut(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n) return ((e[o].selected = !0), void (r && (e[o].defaultSelected = !0)));
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function bt(e, t, n) {
          null == t || ((t = '' + ut(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? '' + ut(n) : '')
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function wt(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(i(92));
              if (N(r)) {
                if (1 < r.length) throw Error(i(93));
                r = r[0];
              }
              n = r;
            }
            (null == n && (n = ''), (t = n));
          }
          ((n = ut(t)), (e.defaultValue = n), (r = e.textContent) === n && '' !== r && null !== r && (e.value = r));
        }
        function St(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var Et = new Set(
          'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
            ' ',
          ),
        );
        function kt(e, t, n) {
          var r = 0 === t.indexOf('--');
          null == n || 'boolean' == typeof n || '' === n
            ? r
              ? e.setProperty(t, '')
              : 'float' === t
                ? (e.cssFloat = '')
                : (e[t] = '')
            : r
              ? e.setProperty(t, n)
              : 'number' != typeof n || 0 === n || Et.has(t)
                ? 'float' === t
                  ? (e.cssFloat = n)
                  : (e[t] = ('' + n).trim())
                : (e[t] = n + 'px');
        }
        function xt(e, t, n) {
          if (null != t && 'object' != typeof t) throw Error(i(62));
          if (((e = e.style), null != n)) {
            for (var r in n)
              !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf('--') ? e.setProperty(r, '') : 'float' === r ? (e.cssFloat = '') : (e[r] = ''));
            for (var o in t) ((r = t[o]), t.hasOwnProperty(o) && n[o] !== r && kt(e, o, r));
          } else for (var a in t) t.hasOwnProperty(a) && kt(e, a, t[a]);
        }
        function Ct(e) {
          if (-1 === e.indexOf('-')) return !1;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var Rt = new Map([
            ['acceptCharset', 'accept-charset'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
            ['crossOrigin', 'crossorigin'],
            ['accentHeight', 'accent-height'],
            ['alignmentBaseline', 'alignment-baseline'],
            ['arabicForm', 'arabic-form'],
            ['baselineShift', 'baseline-shift'],
            ['capHeight', 'cap-height'],
            ['clipPath', 'clip-path'],
            ['clipRule', 'clip-rule'],
            ['colorInterpolation', 'color-interpolation'],
            ['colorInterpolationFilters', 'color-interpolation-filters'],
            ['colorProfile', 'color-profile'],
            ['colorRendering', 'color-rendering'],
            ['dominantBaseline', 'dominant-baseline'],
            ['enableBackground', 'enable-background'],
            ['fillOpacity', 'fill-opacity'],
            ['fillRule', 'fill-rule'],
            ['floodColor', 'flood-color'],
            ['floodOpacity', 'flood-opacity'],
            ['fontFamily', 'font-family'],
            ['fontSize', 'font-size'],
            ['fontSizeAdjust', 'font-size-adjust'],
            ['fontStretch', 'font-stretch'],
            ['fontStyle', 'font-style'],
            ['fontVariant', 'font-variant'],
            ['fontWeight', 'font-weight'],
            ['glyphName', 'glyph-name'],
            ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
            ['glyphOrientationVertical', 'glyph-orientation-vertical'],
            ['horizAdvX', 'horiz-adv-x'],
            ['horizOriginX', 'horiz-origin-x'],
            ['imageRendering', 'image-rendering'],
            ['letterSpacing', 'letter-spacing'],
            ['lightingColor', 'lighting-color'],
            ['markerEnd', 'marker-end'],
            ['markerMid', 'marker-mid'],
            ['markerStart', 'marker-start'],
            ['overlinePosition', 'overline-position'],
            ['overlineThickness', 'overline-thickness'],
            ['paintOrder', 'paint-order'],
            ['panose-1', 'panose-1'],
            ['pointerEvents', 'pointer-events'],
            ['renderingIntent', 'rendering-intent'],
            ['shapeRendering', 'shape-rendering'],
            ['stopColor', 'stop-color'],
            ['stopOpacity', 'stop-opacity'],
            ['strikethroughPosition', 'strikethrough-position'],
            ['strikethroughThickness', 'strikethrough-thickness'],
            ['strokeDasharray', 'stroke-dasharray'],
            ['strokeDashoffset', 'stroke-dashoffset'],
            ['strokeLinecap', 'stroke-linecap'],
            ['strokeLinejoin', 'stroke-linejoin'],
            ['strokeMiterlimit', 'stroke-miterlimit'],
            ['strokeOpacity', 'stroke-opacity'],
            ['strokeWidth', 'stroke-width'],
            ['textAnchor', 'text-anchor'],
            ['textDecoration', 'text-decoration'],
            ['textRendering', 'text-rendering'],
            ['transformOrigin', 'transform-origin'],
            ['underlinePosition', 'underline-position'],
            ['underlineThickness', 'underline-thickness'],
            ['unicodeBidi', 'unicode-bidi'],
            ['unicodeRange', 'unicode-range'],
            ['unitsPerEm', 'units-per-em'],
            ['vAlphabetic', 'v-alphabetic'],
            ['vHanging', 'v-hanging'],
            ['vIdeographic', 'v-ideographic'],
            ['vMathematical', 'v-mathematical'],
            ['vectorEffect', 'vector-effect'],
            ['vertAdvY', 'vert-adv-y'],
            ['vertOriginX', 'vert-origin-x'],
            ['vertOriginY', 'vert-origin-y'],
            ['wordSpacing', 'word-spacing'],
            ['writingMode', 'writing-mode'],
            ['xmlnsXlink', 'xmlns:xlink'],
            ['xHeight', 'x-height'],
          ]),
          Pt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Tt(e) {
          return Pt.test('' + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        var Ot = null;
        function _t(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var At = null,
          Nt = null;
        function Lt(e) {
          var t = Ue(e);
          if (t && (e = t.stateNode)) {
            var n = e[Ne] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case 'input':
                if (
                  (mt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                  (t = n.name),
                  'radio' === n.type && null != t)
                ) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (n = n.querySelectorAll('input[name="' + ht('' + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = r[Ne] || null;
                      if (!o) throw Error(i(90));
                      mt(r, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
                    }
                  }
                  for (t = 0; t < n.length; t++) (r = n[t]).form === e.form && ft(r);
                }
                break e;
              case 'textarea':
                bt(e, n.value, n.defaultValue);
                break e;
              case 'select':
                null != (t = n.value) && vt(e, !!n.multiple, t, !1);
            }
          }
        }
        var Dt = !1;
        function zt(e, t, n) {
          if (Dt) return e(t, n);
          Dt = !0;
          try {
            return e(t);
          } finally {
            if (((Dt = !1), (null !== At || null !== Nt) && (Bs(), At && ((t = At), (e = Nt), (Nt = At = null), Lt(t), e))))
              for (t = 0; t < e.length; t++) Lt(e[t]);
          }
        }
        function jt(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[Ne] || null;
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              ((r = !r.disabled) || (r = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)), (e = !r));
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && 'function' != typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Mt = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
          It = !1;
        if (Mt)
          try {
            var Ft = {};
            (Object.defineProperty(Ft, 'passive', {
              get: function () {
                It = !0;
              },
            }),
              window.addEventListener('test', Ft, Ft),
              window.removeEventListener('test', Ft, Ft));
          } catch (e) {
            It = !1;
          }
        var Bt = null,
          Ut = null,
          Wt = null;
        function $t() {
          if (Wt) return Wt;
          var e,
            t,
            n = Ut,
            r = n.length,
            o = 'value' in Bt ? Bt.value : Bt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (Wt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Ht(e) {
          var t = e.keyCode;
          return ('charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0);
        }
        function qt() {
          return !0;
        }
        function Vt() {
          return !1;
        }
        function Gt(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? qt : Vt),
              (this.isPropagationStopped = Vt),
              this
            );
          }
          return (
            f(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1), (this.isDefaultPrevented = qt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation ? e.stopPropagation() : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = qt));
              },
              persist: function () {},
              isPersistent: qt,
            }),
            t
          );
        }
        var Yt,
          Kt,
          Xt,
          Qt = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          Jt = Gt(Qt),
          Zt = f({}, Qt, { view: 0, detail: 0 }),
          en = Gt(Zt),
          tn = f({}, Zt, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: pn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== Xt &&
                    (Xt && 'mousemove' === e.type ? ((Yt = e.screenX - Xt.screenX), (Kt = e.screenY - Xt.screenY)) : (Kt = Yt = 0), (Xt = e)),
                  Yt);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : Kt;
            },
          }),
          nn = Gt(tn),
          rn = Gt(f({}, tn, { dataTransfer: 0 })),
          on = Gt(f({}, Zt, { relatedTarget: 0 })),
          an = Gt(f({}, Qt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          ln = Gt(
            f({}, Qt, {
              clipboardData: function (e) {
                return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
              },
            }),
          ),
          un = Gt(f({}, Qt, { data: 0 })),
          sn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          cn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          fn = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          };
        function dn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = fn[e]) && !!t[e];
        }
        function pn() {
          return dn;
        }
        var hn = Gt(
            f({}, Zt, {
              key: function (e) {
                if (e.key) {
                  var t = sn[e.key] || e.key;
                  if ('Unidentified' !== t) return t;
                }
                return 'keypress' === e.type
                  ? 13 === (e = Ht(e))
                    ? 'Enter'
                    : String.fromCharCode(e)
                  : 'keydown' === e.type || 'keyup' === e.type
                    ? cn[e.keyCode] || 'Unidentified'
                    : '';
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: pn,
              charCode: function (e) {
                return 'keypress' === e.type ? Ht(e) : 0;
              },
              keyCode: function (e) {
                return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
              },
              which: function (e) {
                return 'keypress' === e.type ? Ht(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
              },
            }),
          ),
          mn = Gt(
            f({}, tn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          yn = Gt(
            f({}, Zt, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: pn,
            }),
          ),
          gn = Gt(f({}, Qt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          vn = Gt(
            f({}, tn, {
              deltaX: function (e) {
                return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
              },
              deltaY: function (e) {
                return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            }),
          ),
          bn = Gt(f({}, Qt, { newState: 0, oldState: 0 })),
          wn = [9, 13, 27, 32],
          Sn = Mt && 'CompositionEvent' in window,
          En = null;
        Mt && 'documentMode' in document && (En = document.documentMode);
        var kn = Mt && 'TextEvent' in window && !En,
          xn = Mt && (!Sn || (En && 8 < En && 11 >= En)),
          Cn = String.fromCharCode(32),
          Rn = !1;
        function Pn(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== wn.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Tn(e) {
          return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
        }
        var On = !1,
          _n = {
            color: !0,
            date: !0,
            datetime: !0,
            'datetime-local': !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function An(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!_n[e.type] : 'textarea' === t;
        }
        function Nn(e, t, n, r) {
          (At ? (Nt ? Nt.push(r) : (Nt = [r])) : (At = r),
            0 < (t = $c(t, 'onChange')).length && ((n = new Jt('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
        }
        var Ln = null,
          Dn = null;
        function zn(e) {
          zc(e, 0);
        }
        function jn(e) {
          if (ft(We(e))) return e;
        }
        function Mn(e, t) {
          if ('change' === e) return t;
        }
        var In = !1;
        if (Mt) {
          var Fn;
          if (Mt) {
            var Bn = 'oninput' in document;
            if (!Bn) {
              var Un = document.createElement('div');
              (Un.setAttribute('oninput', 'return;'), (Bn = 'function' == typeof Un.oninput));
            }
            Fn = Bn;
          } else Fn = !1;
          In = Fn && (!document.documentMode || 9 < document.documentMode);
        }
        function Wn() {
          Ln && (Ln.detachEvent('onpropertychange', $n), (Dn = Ln = null));
        }
        function $n(e) {
          if ('value' === e.propertyName && jn(Dn)) {
            var t = [];
            (Nn(t, Dn, e, _t(e)), zt(zn, t));
          }
        }
        function Hn(e, t, n) {
          'focusin' === e ? (Wn(), (Dn = n), (Ln = t).attachEvent('onpropertychange', $n)) : 'focusout' === e && Wn();
        }
        function qn(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return jn(Dn);
        }
        function Vn(e, t) {
          if ('click' === e) return jn(t);
        }
        function Gn(e, t) {
          if ('input' === e || 'change' === e) return jn(t);
        }
        var Yn =
          'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              };
        function Kn(e, t) {
          if (Yn(e, t)) return !0;
          if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!K.call(t, o) || !Yn(e[o], t[o])) return !1;
          }
          return !0;
        }
        function Xn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function Qn(e, t) {
          var n,
            r = Xn(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = Xn(r);
          }
        }
        function Jn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? Jn(e, t.parentNode)
                  : 'contains' in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function Zn(e) {
          for (
            var t = dt(
              (e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window).document,
            );
            t instanceof e.HTMLIFrameElement;

          ) {
            try {
              var n = 'string' == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = dt((e = t.contentWindow).document);
          }
          return t;
        }
        function er(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t && ('text' === e.type || 'search' === e.type || 'tel' === e.type || 'url' === e.type || 'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        }
        var tr = Mt && 'documentMode' in document && 11 >= document.documentMode,
          nr = null,
          rr = null,
          or = null,
          ar = !1;
        function ir(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          ar ||
            null == nr ||
            nr !== dt(r) ||
            ((r =
              'selectionStart' in (r = nr) && er(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
            (or && Kn(or, r)) ||
              ((or = r),
              0 < (r = $c(rr, 'onSelect')).length &&
                ((t = new Jt('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = nr))));
        }
        function lr(e, t) {
          var n = {};
          return ((n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n);
        }
        var ur = {
            animationend: lr('Animation', 'AnimationEnd'),
            animationiteration: lr('Animation', 'AnimationIteration'),
            animationstart: lr('Animation', 'AnimationStart'),
            transitionrun: lr('Transition', 'TransitionRun'),
            transitionstart: lr('Transition', 'TransitionStart'),
            transitioncancel: lr('Transition', 'TransitionCancel'),
            transitionend: lr('Transition', 'TransitionEnd'),
          },
          sr = {},
          cr = {};
        function fr(e) {
          if (sr[e]) return sr[e];
          if (!ur[e]) return e;
          var t,
            n = ur[e];
          for (t in n) if (n.hasOwnProperty(t) && t in cr) return (sr[e] = n[t]);
          return e;
        }
        Mt &&
          ((cr = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete ur.animationend.animation, delete ur.animationiteration.animation, delete ur.animationstart.animation),
          'TransitionEvent' in window || delete ur.transitionend.transition);
        var dr = fr('animationend'),
          pr = fr('animationiteration'),
          hr = fr('animationstart'),
          mr = fr('transitionrun'),
          yr = fr('transitionstart'),
          gr = fr('transitioncancel'),
          vr = fr('transitionend'),
          br = new Map(),
          wr =
            'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' ',
            );
        function Sr(e, t) {
          (br.set(e, t), Ge(t, [e]));
        }
        wr.push('scrollEnd');
        var Er = new WeakMap();
        function kr(e, t) {
          if ('object' == typeof e && null !== e) {
            var n = Er.get(e);
            return void 0 !== n ? n : ((t = { value: e, source: t, stack: lt(t) }), Er.set(e, t), t);
          }
          return { value: e, source: t, stack: lt(t) };
        }
        var xr = [],
          Cr = 0,
          Rr = 0;
        function Pr() {
          for (var e = Cr, t = (Rr = Cr = 0); t < e; ) {
            var n = xr[t];
            xr[t++] = null;
            var r = xr[t];
            xr[t++] = null;
            var o = xr[t];
            xr[t++] = null;
            var a = xr[t];
            if (((xr[t++] = null), null !== r && null !== o)) {
              var i = r.pending;
              (null === i ? (o.next = o) : ((o.next = i.next), (i.next = o)), (r.pending = o));
            }
            0 !== a && Ar(n, o, a);
          }
        }
        function Tr(e, t, n, r) {
          ((xr[Cr++] = e), (xr[Cr++] = t), (xr[Cr++] = n), (xr[Cr++] = r), (Rr |= r), (e.lanes |= r), null !== (e = e.alternate) && (e.lanes |= r));
        }
        function Or(e, t, n, r) {
          return (Tr(e, t, n, r), Nr(e));
        }
        function _r(e, t) {
          return (Tr(e, null, null, t), Nr(e));
        }
        function Ar(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var o = !1, a = e.return; null !== a; )
            ((a.childLanes |= n),
              null !== (r = a.alternate) && (r.childLanes |= n),
              22 === a.tag && (null === (e = a.stateNode) || 1 & e._visibility || (o = !0)),
              (e = a),
              (a = a.return));
          return 3 === e.tag
            ? ((a = e.stateNode),
              o && null !== t && ((o = 31 - de(n)), null === (r = (e = a.hiddenUpdates)[o]) ? (e[o] = [t]) : r.push(t), (t.lane = 536870912 | n)),
              a)
            : null;
        }
        function Nr(e) {
          if (50 < As) throw ((As = 0), (Ns = null), Error(i(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Lr = {};
        function Dr(e, t, n, r) {
          ((this.tag = e),
            (this.key = n),
            (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
        }
        function zr(e, t, n, r) {
          return new Dr(e, t, n, r);
        }
        function jr(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Mr(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = zr(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
            (n.flags = 65011712 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function Ir(e, t) {
          e.flags &= 65011714;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext })),
            e
          );
        }
        function Fr(e, t, n, r, o, a) {
          var l = 0;
          if (((r = e), 'function' == typeof e)) jr(e) && (l = 1);
          else if ('string' == typeof e)
            l = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case 'meta':
                case 'title':
                  return !0;
                case 'style':
                  if ('string' != typeof t.precedence || 'string' != typeof t.href || '' === t.href) break;
                  return !0;
                case 'link':
                  if ('string' != typeof t.rel || 'string' != typeof t.href || '' === t.href || t.onLoad || t.onError) break;
                  return 'stylesheet' !== t.rel || ((e = t.disabled), 'string' == typeof t.precedence && null == e);
                case 'script':
                  if (
                    t.async &&
                    'function' != typeof t.async &&
                    'symbol' != typeof t.async &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    'string' == typeof t.src
                  )
                    return !0;
              }
              return !1;
            })(e, n, U.current)
              ? 26
              : 'html' === e || 'head' === e || 'body' === e
                ? 27
                : 5;
          else
            e: switch (e) {
              case R:
                return (((e = zr(31, n, t, o)).elementType = R), (e.lanes = a), e);
              case m:
                return Br(n.children, o, a, t);
              case y:
                ((l = 8), (o |= 24));
                break;
              case g:
                return (((e = zr(12, n, t, 2 | o)).elementType = g), (e.lanes = a), e);
              case E:
                return (((e = zr(13, n, t, o)).elementType = E), (e.lanes = a), e);
              case k:
                return (((e = zr(19, n, t, o)).elementType = k), (e.lanes = a), e);
              default:
                if ('object' == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case v:
                    case w:
                      l = 10;
                      break e;
                    case b:
                      l = 9;
                      break e;
                    case S:
                      l = 11;
                      break e;
                    case x:
                      l = 14;
                      break e;
                    case C:
                      ((l = 16), (r = null));
                      break e;
                  }
                ((l = 29), (n = Error(i(130, null === e ? 'null' : typeof e, ''))), (r = null));
            }
          return (((t = zr(l, n, t, o)).elementType = e), (t.type = r), (t.lanes = a), t);
        }
        function Br(e, t, n, r) {
          return (((e = zr(7, e, r, t)).lanes = n), e);
        }
        function Ur(e, t, n) {
          return (((e = zr(6, e, null, t)).lanes = n), e);
        }
        function Wr(e, t, n) {
          return (
            ((t = zr(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        var $r = [],
          Hr = 0,
          qr = null,
          Vr = 0,
          Gr = [],
          Yr = 0,
          Kr = null,
          Xr = 1,
          Qr = '';
        function Jr(e, t) {
          (($r[Hr++] = Vr), ($r[Hr++] = qr), (qr = e), (Vr = t));
        }
        function Zr(e, t, n) {
          ((Gr[Yr++] = Xr), (Gr[Yr++] = Qr), (Gr[Yr++] = Kr), (Kr = e));
          var r = Xr;
          e = Qr;
          var o = 32 - de(r) - 1;
          ((r &= ~(1 << o)), (n += 1));
          var a = 32 - de(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            ((a = (r & ((1 << i) - 1)).toString(32)), (r >>= i), (o -= i), (Xr = (1 << (32 - de(t) + o)) | (n << o) | r), (Qr = a + e));
          } else ((Xr = (1 << a) | (n << o) | r), (Qr = e));
        }
        function eo(e) {
          null !== e.return && (Jr(e, 1), Zr(e, 1, 0));
        }
        function to(e) {
          for (; e === qr; ) ((qr = $r[--Hr]), ($r[Hr] = null), (Vr = $r[--Hr]), ($r[Hr] = null));
          for (; e === Kr; ) ((Kr = Gr[--Yr]), (Gr[Yr] = null), (Qr = Gr[--Yr]), (Gr[Yr] = null), (Xr = Gr[--Yr]), (Gr[Yr] = null));
        }
        var no = null,
          ro = null,
          oo = !1,
          ao = null,
          io = !1,
          lo = Error(i(519));
        function uo(e) {
          throw (mo(kr(Error(i(418, '')), e)), lo);
        }
        function so(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[Ae] = e), (t[Ne] = r), n)) {
            case 'dialog':
              (jc('cancel', t), jc('close', t));
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              jc('load', t);
              break;
            case 'video':
            case 'audio':
              for (n = 0; n < Lc.length; n++) jc(Lc[n], t);
              break;
            case 'source':
              jc('error', t);
              break;
            case 'img':
            case 'image':
            case 'link':
              (jc('error', t), jc('load', t));
              break;
            case 'details':
              jc('toggle', t);
              break;
            case 'input':
              (jc('invalid', t), yt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), ct(t));
              break;
            case 'select':
              jc('invalid', t);
              break;
            case 'textarea':
              (jc('invalid', t), wt(t, r.value, r.defaultValue, r.children), ct(t));
          }
          (('string' != typeof (n = r.children) && 'number' != typeof n && 'bigint' != typeof n) ||
          t.textContent === '' + n ||
          !0 === r.suppressHydrationWarning ||
          Kc(t.textContent, n)
            ? (null != r.popover && (jc('beforetoggle', t), jc('toggle', t)),
              null != r.onScroll && jc('scroll', t),
              null != r.onScrollEnd && jc('scrollend', t),
              null != r.onClick && (t.onclick = Xc),
              (t = !0))
            : (t = !1),
            t || uo(e));
        }
        function co(e) {
          for (no = e.return; no; )
            switch (no.tag) {
              case 5:
              case 13:
                return void (io = !1);
              case 27:
              case 3:
                return void (io = !0);
              default:
                no = no.return;
            }
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!oo) return (co(e), (oo = !0), !1);
          var t,
            n = e.tag;
          if (
            ((t = 3 !== n && 27 !== n) &&
              ((t = 5 === n) && (t = !('form' !== (t = e.type) && 'button' !== t) || af(e.type, e.memoizedProps)), (t = !t)),
            t && ro && uo(e),
            co(e),
            13 === n)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType)
                  if ('/$' === (t = e.data)) {
                    if (0 === n) {
                      ro = gf(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ('$' !== t && '$!' !== t && '$?' !== t) || n++;
                e = e.nextSibling;
              }
              ro = null;
            }
          } else 27 === n ? ((n = ro), pf(e.type) ? ((e = vf), (vf = null), (ro = e)) : (ro = n)) : (ro = no ? gf(e.stateNode.nextSibling) : null);
          return !0;
        }
        function po() {
          ((ro = no = null), (oo = !1));
        }
        function ho() {
          var e = ao;
          return (null !== e && (null === vs ? (vs = e) : vs.push.apply(vs, e), (ao = null)), e);
        }
        function mo(e) {
          null === ao ? (ao = [e]) : ao.push(e);
        }
        var yo = I(null),
          go = null,
          vo = null;
        function bo(e, t, n) {
          (B(yo, t._currentValue), (t._currentValue = n));
        }
        function wo(e) {
          ((e._currentValue = yo.current), F(yo));
        }
        function So(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Eo(e, t, n, r) {
          var o = e.child;
          for (null !== o && (o.return = e); null !== o; ) {
            var a = o.dependencies;
            if (null !== a) {
              var l = o.child;
              a = a.firstContext;
              e: for (; null !== a; ) {
                var u = a;
                a = o;
                for (var s = 0; s < t.length; s++)
                  if (u.context === t[s]) {
                    ((a.lanes |= n), null !== (u = a.alternate) && (u.lanes |= n), So(a.return, n, e), r || (l = null));
                    break e;
                  }
                a = u.next;
              }
            } else if (18 === o.tag) {
              if (null === (l = o.return)) throw Error(i(341));
              ((l.lanes |= n), null !== (a = l.alternate) && (a.lanes |= n), So(l, n, e), (l = null));
            } else l = o.child;
            if (null !== l) l.return = o;
            else
              for (l = o; null !== l; ) {
                if (l === e) {
                  l = null;
                  break;
                }
                if (null !== (o = l.sibling)) {
                  ((o.return = l.return), (l = o));
                  break;
                }
                l = l.return;
              }
            o = l;
          }
        }
        function ko(e, t, n, r) {
          e = null;
          for (var o = t, a = !1; null !== o; ) {
            if (!a)
              if (524288 & o.flags) a = !0;
              else if (262144 & o.flags) break;
            if (10 === o.tag) {
              var l = o.alternate;
              if (null === l) throw Error(i(387));
              if (null !== (l = l.memoizedProps)) {
                var u = o.type;
                Yn(o.pendingProps.value, l.value) || (null !== e ? e.push(u) : (e = [u]));
              }
            } else if (o === H.current) {
              if (null === (l = o.alternate)) throw Error(i(387));
              l.memoizedState.memoizedState !== o.memoizedState.memoizedState && (null !== e ? e.push(Yf) : (e = [Yf]));
            }
            o = o.return;
          }
          (null !== e && Eo(t, e, n, r), (t.flags |= 262144));
        }
        function xo(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Yn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function Co(e) {
          ((go = e), (vo = null), null !== (e = e.dependencies) && (e.firstContext = null));
        }
        function Ro(e) {
          return To(go, e);
        }
        function Po(e, t) {
          return (null === go && Co(e), To(e, t));
        }
        function To(e, t) {
          var n = t._currentValue;
          if (((t = { context: t, memoizedValue: n, next: null }), null === vo)) {
            if (null === e) throw Error(i(308));
            ((vo = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
          } else vo = vo.next = t;
          return n;
        }
        var Oo =
            'undefined' != typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    ((t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      }));
                  };
                },
          _o = r.unstable_scheduleCallback,
          Ao = r.unstable_NormalPriority,
          No = {
            $$typeof: w,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Lo() {
          return { controller: new Oo(), data: new Map(), refCount: 0 };
        }
        function Do(e) {
          (e.refCount--,
            0 === e.refCount &&
              _o(Ao, function () {
                e.controller.abort();
              }));
        }
        var zo = null,
          jo = 0,
          Mo = 0,
          Io = null;
        function Fo() {
          if (0 === --jo && null !== zo) {
            null !== Io && (Io.status = 'fulfilled');
            var e = zo;
            ((zo = null), (Mo = 0), (Io = null));
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var Bo = L.S;
        L.S = function (e, t) {
          ('object' == typeof t &&
            null !== t &&
            'function' == typeof t.then &&
            (function (e, t) {
              if (null === zo) {
                var n = (zo = []);
                ((jo = 0),
                  (Mo = Tc()),
                  (Io = {
                    status: 'pending',
                    value: void 0,
                    then: function (e) {
                      n.push(e);
                    },
                  }));
              }
              (jo++, t.then(Fo, Fo));
            })(0, t),
            null !== Bo && Bo(e, t));
        };
        var Uo = I(null);
        function Wo() {
          var e = Uo.current;
          return null !== e ? e : ns.pooledCache;
        }
        function $o(e, t) {
          B(Uo, null === t ? Uo.current : t.pool);
        }
        function Ho() {
          var e = Wo();
          return null === e ? null : { parent: No._currentValue, pool: e };
        }
        var qo = Error(i(460)),
          Vo = Error(i(474)),
          Go = Error(i(542)),
          Yo = { then: function () {} };
        function Ko(e) {
          return 'fulfilled' === (e = e.status) || 'rejected' === e;
        }
        function Xo() {}
        function Qo(e, t, n) {
          switch ((void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Xo, Xo), (t = n)), t.status)) {
            case 'fulfilled':
              return t.value;
            case 'rejected':
              throw (ea((e = t.reason)), e);
            default:
              if ('string' == typeof t.status) t.then(Xo, Xo);
              else {
                if (null !== (e = ns) && 100 < e.shellSuspendCounter) throw Error(i(482));
                (((e = t).status = 'pending'),
                  e.then(
                    function (e) {
                      if ('pending' === t.status) {
                        var n = t;
                        ((n.status = 'fulfilled'), (n.value = e));
                      }
                    },
                    function (e) {
                      if ('pending' === t.status) {
                        var n = t;
                        ((n.status = 'rejected'), (n.reason = e));
                      }
                    },
                  ));
              }
              switch (t.status) {
                case 'fulfilled':
                  return t.value;
                case 'rejected':
                  throw (ea((e = t.reason)), e);
              }
              throw ((Jo = t), qo);
          }
        }
        var Jo = null;
        function Zo() {
          if (null === Jo) throw Error(i(459));
          var e = Jo;
          return ((Jo = null), e);
        }
        function ea(e) {
          if (e === qo || e === Go) throw Error(i(483));
        }
        var ta = !1;
        function na(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function ra(e, t) {
          ((e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              }));
        }
        function oa(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function aa(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 2 & ts)) {
            var o = r.pending;
            return (null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), (t = Nr(e)), Ar(e, null, n), t);
          }
          return (Tr(e, r, t, n), Nr(e));
        }
        function ia(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 4194048 & n)) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), Re(e, n));
          }
        }
        function la(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                (null === a ? (o = a = i) : (a = a.next = i), (n = n.next));
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          (null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t));
        }
        var ua = !1;
        function sa() {
          if (ua && null !== Io) throw Io;
        }
        function ca(e, t, n, r) {
          ua = !1;
          var o = e.updateQueue;
          ta = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var u = l,
              s = u.next;
            ((u.next = null), null === i ? (a = s) : (i.next = s), (i = u));
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = s) : (l.next = s), (c.lastBaseUpdate = u));
          }
          if (null !== a) {
            var d = o.baseState;
            for (i = 0, c = s = u = null, l = a; ; ) {
              var p = -536870913 & l.lane,
                h = p !== l.lane;
              if (h ? (os & p) === p : (r & p) === p) {
                (0 !== p && p === Mo && (ua = !0),
                  null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null,
                      }));
                e: {
                  var m = e,
                    y = l;
                  p = t;
                  var g = n;
                  switch (y.tag) {
                    case 1:
                      if ('function' == typeof (m = y.payload)) {
                        d = m.call(g, d, p);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (null == (p = 'function' == typeof (m = y.payload) ? m.call(g, d, p) : m)) break e;
                      d = f({}, d, p);
                      break e;
                    case 2:
                      ta = !0;
                  }
                }
                null !== (p = l.callback) && ((e.flags |= 64), h && (e.flags |= 8192), null === (h = o.callbacks) ? (o.callbacks = [p]) : h.push(p));
              } else
                ((h = {
                  lane: p,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((s = c = h), (u = d)) : (c = c.next = h),
                  (i |= p));
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                ((l = (h = l).next), (h.next = null), (o.lastBaseUpdate = h), (o.shared.pending = null));
              }
            }
            (null === c && (u = d),
              (o.baseState = u),
              (o.firstBaseUpdate = s),
              (o.lastBaseUpdate = c),
              null === a && (o.shared.lanes = 0),
              (ds |= i),
              (e.lanes = i),
              (e.memoizedState = d));
          }
        }
        function fa(e, t) {
          if ('function' != typeof e) throw Error(i(191, e));
          e.call(t);
        }
        function da(e, t) {
          var n = e.callbacks;
          if (null !== n) for (e.callbacks = null, e = 0; e < n.length; e++) fa(n[e], t);
        }
        var pa = I(null),
          ha = I(0);
        function ma(e, t) {
          (B(ha, (e = cs)), B(pa, t), (cs = e | t.baseLanes));
        }
        function ya() {
          (B(ha, cs), B(pa, pa.current));
        }
        function ga() {
          ((cs = ha.current), F(pa), F(ha));
        }
        var va = 0,
          ba = null,
          wa = null,
          Sa = null,
          Ea = !1,
          ka = !1,
          xa = !1,
          Ca = 0,
          Ra = 0,
          Pa = null,
          Ta = 0;
        function Oa() {
          throw Error(i(321));
        }
        function _a(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!Yn(e[n], t[n])) return !1;
          return !0;
        }
        function Aa(e, t, n, r, o, a) {
          return (
            (va = a),
            (ba = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (L.H = null === e || null === e.memoizedState ? qi : Vi),
            (xa = !1),
            (a = n(r, o)),
            (xa = !1),
            ka && (a = La(t, n, r, o)),
            Na(e),
            a
          );
        }
        function Na(e) {
          L.H = Hi;
          var t = null !== wa && null !== wa.next;
          if (((va = 0), (Sa = wa = ba = null), (Ea = !1), (Ra = 0), (Pa = null), t)) throw Error(i(300));
          null === e || Rl || (null !== (e = e.dependencies) && xo(e) && (Rl = !0));
        }
        function La(e, t, n, r) {
          ba = e;
          var o = 0;
          do {
            if ((ka && (Pa = null), (Ra = 0), (ka = !1), 25 <= o)) throw Error(i(301));
            if (((o += 1), (Sa = wa = null), null != e.updateQueue)) {
              var a = e.updateQueue;
              ((a.lastEffect = null), (a.events = null), (a.stores = null), null != a.memoCache && (a.memoCache.index = 0));
            }
            ((L.H = Gi), (a = t(n, r)));
          } while (ka);
          return a;
        }
        function Da() {
          var e = L.H,
            t = e.useState()[0];
          return (
            (t = 'function' == typeof t.then ? Ba(t) : t),
            (e = e.useState()[0]),
            (null !== wa ? wa.memoizedState : null) !== e && (ba.flags |= 1024),
            t
          );
        }
        function za() {
          var e = 0 !== Ca;
          return ((Ca = 0), e);
        }
        function ja(e, t, n) {
          ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
        }
        function Ma(e) {
          if (Ea) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              (null !== t && (t.pending = null), (e = e.next));
            }
            Ea = !1;
          }
          ((va = 0), (Sa = wa = ba = null), (ka = !1), (Ra = Ca = 0), (Pa = null));
        }
        function Ia() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (null === Sa ? (ba.memoizedState = Sa = e) : (Sa = Sa.next = e), Sa);
        }
        function Fa() {
          if (null === wa) {
            var e = ba.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = wa.next;
          var t = null === Sa ? ba.memoizedState : Sa.next;
          if (null !== t) ((Sa = t), (wa = e));
          else {
            if (null === e) {
              if (null === ba.alternate) throw Error(i(467));
              throw Error(i(310));
            }
            ((e = {
              memoizedState: (wa = e).memoizedState,
              baseState: wa.baseState,
              baseQueue: wa.baseQueue,
              queue: wa.queue,
              next: null,
            }),
              null === Sa ? (ba.memoizedState = Sa = e) : (Sa = Sa.next = e));
          }
          return Sa;
        }
        function Ba(e) {
          var t = Ra;
          return (
            (Ra += 1),
            null === Pa && (Pa = []),
            (e = Qo(Pa, e, t)),
            (t = ba),
            null === (null === Sa ? t.memoizedState : Sa.next) && ((t = t.alternate), (L.H = null === t || null === t.memoizedState ? qi : Vi)),
            e
          );
        }
        function Ua(e) {
          if (null !== e && 'object' == typeof e) {
            if ('function' == typeof e.then) return Ba(e);
            if (e.$$typeof === w) return Ro(e);
          }
          throw Error(i(438, String(e)));
        }
        function Wa(e) {
          var t = null,
            n = ba.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = ba.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t && (t = { data: [], index: 0 }),
            null === n &&
              ((n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (ba.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = P;
          return (t.index++, n);
        }
        function $a(e, t) {
          return 'function' == typeof t ? t(e) : t;
        }
        function Ha(e) {
          return qa(Fa(), wa, e);
        }
        function qa(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(i(311));
          r.lastRenderedReducer = n;
          var o = e.baseQueue,
            a = r.pending;
          if (null !== a) {
            if (null !== o) {
              var l = o.next;
              ((o.next = a.next), (a.next = l));
            }
            ((t.baseQueue = o = a), (r.pending = null));
          }
          if (((a = e.baseState), null === o)) e.memoizedState = a;
          else {
            var u = (l = null),
              s = null,
              c = (t = o.next),
              f = !1;
            do {
              var d = -536870913 & c.lane;
              if (d !== c.lane ? (os & d) === d : (va & d) === d) {
                var p = c.revertLane;
                if (0 === p)
                  (null !== s &&
                    (s = s.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    d === Mo && (f = !0));
                else {
                  if ((va & p) === p) {
                    ((c = c.next), p === Mo && (f = !0));
                    continue;
                  }
                  ((d = {
                    lane: 0,
                    revertLane: c.revertLane,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                    null === s ? ((u = s = d), (l = a)) : (s = s.next = d),
                    (ba.lanes |= p),
                    (ds |= p));
                }
                ((d = c.action), xa && n(a, d), (a = c.hasEagerState ? c.eagerState : n(a, d)));
              } else
                ((p = {
                  lane: d,
                  revertLane: c.revertLane,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === s ? ((u = s = p), (l = a)) : (s = s.next = p),
                  (ba.lanes |= d),
                  (ds |= d));
              c = c.next;
            } while (null !== c && c !== t);
            if ((null === s ? (l = a) : (s.next = u), !Yn(a, e.memoizedState) && ((Rl = !0), f && null !== (n = Io)))) throw n;
            ((e.memoizedState = a), (e.baseState = l), (e.baseQueue = s), (r.lastRenderedState = a));
          }
          return (null === o && (r.lanes = 0), [e.memoizedState, r.dispatch]);
        }
        function Va(e) {
          var t = Fa(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            a = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              ((a = e(a, l.action)), (l = l.next));
            } while (l !== o);
            (Yn(a, t.memoizedState) || (Rl = !0), (t.memoizedState = a), null === t.baseQueue && (t.baseState = a), (n.lastRenderedState = a));
          }
          return [a, r];
        }
        function Ga(e, t, n) {
          var r = ba,
            o = Fa(),
            a = oo;
          if (a) {
            if (void 0 === n) throw Error(i(407));
            n = n();
          } else n = t();
          var l = !Yn((wa || o).memoizedState, n);
          if (
            (l && ((o.memoizedState = n), (Rl = !0)),
            (o = o.queue),
            yi(2048, 8, Xa.bind(null, r, o, e), [e]),
            o.getSnapshot !== t || l || (null !== Sa && 1 & Sa.memoizedState.tag))
          ) {
            if (((r.flags |= 2048), pi(9, { destroy: void 0, resource: void 0 }, Ka.bind(null, r, o, n, t), null), null === ns)) throw Error(i(349));
            a || 124 & va || Ya(r, t, n);
          }
          return n;
        }
        function Ya(e, t, n) {
          ((e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ba.updateQueue)
              ? ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                (ba.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e));
        }
        function Ka(e, t, n, r) {
          ((t.value = n), (t.getSnapshot = r), Qa(t) && Ja(e));
        }
        function Xa(e, t, n) {
          return n(function () {
            Qa(t) && Ja(e);
          });
        }
        function Qa(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Yn(e, n);
          } catch (e) {
            return !0;
          }
        }
        function Ja(e) {
          var t = _r(e, 2);
          null !== t && zs(t, 0, 2);
        }
        function Za(e) {
          var t = Ia();
          if ('function' == typeof e) {
            var n = e;
            if (((e = n()), xa)) {
              fe(!0);
              try {
                n();
              } finally {
                fe(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: $a,
              lastRenderedState: e,
            }),
            t
          );
        }
        function ei(e, t, n, r) {
          return ((e.baseState = n), qa(e, wa, 'function' == typeof r ? r : $a));
        }
        function ti(e, t, n, r, o) {
          if (Ui(e)) throw Error(i(485));
          if (null !== (e = t.action)) {
            var a = {
              payload: o,
              action: e,
              next: null,
              isTransition: !0,
              status: 'pending',
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                a.listeners.push(e);
              },
            };
            (null !== L.T ? n(!0) : (a.isTransition = !1),
              r(a),
              null === (n = t.pending) ? ((a.next = t.pending = a), ni(t, a)) : ((a.next = n.next), (t.pending = n.next = a)));
          }
        }
        function ni(e, t) {
          var n = t.action,
            r = t.payload,
            o = e.state;
          if (t.isTransition) {
            var a = L.T,
              i = {};
            L.T = i;
            try {
              var l = n(o, r),
                u = L.S;
              (null !== u && u(i, l), ri(e, t, l));
            } catch (n) {
              ai(e, t, n);
            } finally {
              L.T = a;
            }
          } else
            try {
              ri(e, t, (a = n(o, r)));
            } catch (n) {
              ai(e, t, n);
            }
        }
        function ri(e, t, n) {
          null !== n && 'object' == typeof n && 'function' == typeof n.then
            ? n.then(
                function (n) {
                  oi(e, t, n);
                },
                function (n) {
                  return ai(e, t, n);
                },
              )
            : oi(e, t, n);
        }
        function oi(e, t, n) {
          ((t.status = 'fulfilled'),
            (t.value = n),
            ii(t),
            (e.state = n),
            null !== (t = e.pending) && ((n = t.next) === t ? (e.pending = null) : ((n = n.next), (t.next = n), ni(e, n))));
        }
        function ai(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              ((t.status = 'rejected'), (t.reason = n), ii(t), (t = t.next));
            } while (t !== r);
          }
          e.action = null;
        }
        function ii(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function li(e, t) {
          return t;
        }
        function ui(e, t) {
          if (oo) {
            var n = ns.formState;
            if (null !== n) {
              e: {
                var r = ba;
                if (oo) {
                  if (ro) {
                    t: {
                      for (var o = ro, a = io; 8 !== o.nodeType; ) {
                        if (!a) {
                          o = null;
                          break t;
                        }
                        if (null === (o = gf(o.nextSibling))) {
                          o = null;
                          break t;
                        }
                      }
                      o = 'F!' === (a = o.data) || 'F' === a ? o : null;
                    }
                    if (o) {
                      ((ro = gf(o.nextSibling)), (r = 'F!' === o.data));
                      break e;
                    }
                  }
                  uo(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = Ia()).memoizedState = n.baseState = t),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: li,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = Ii.bind(null, ba, r)),
            (r.dispatch = n),
            (r = Za(!1)),
            (a = Bi.bind(null, ba, !1, r.queue)),
            (o = { state: t, dispatch: null, action: e, pending: null }),
            ((r = Ia()).queue = o),
            (n = ti.bind(null, ba, o, a, n)),
            (o.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function si(e) {
          return ci(Fa(), wa, e);
        }
        function ci(e, t, n) {
          if (((t = qa(e, t, li)[0]), (e = Ha($a)[0]), 'object' == typeof t && null !== t && 'function' == typeof t.then))
            try {
              var r = Ba(t);
            } catch (e) {
              if (e === qo) throw Go;
              throw e;
            }
          else r = t;
          var o = (t = Fa()).queue,
            a = o.dispatch;
          return (n !== t.memoizedState && ((ba.flags |= 2048), pi(9, { destroy: void 0, resource: void 0 }, fi.bind(null, o, n), null)), [r, a, e]);
        }
        function fi(e, t) {
          e.action = t;
        }
        function di(e) {
          var t = Fa(),
            n = wa;
          if (null !== n) return ci(t, n, e);
          (Fa(), (t = t.memoizedState));
          var r = (n = Fa()).queue.dispatch;
          return ((n.memoizedState = e), [t, r, !1]);
        }
        function pi(e, t, n, r) {
          return (
            (e = { tag: e, create: n, deps: r, inst: t, next: null }),
            null === (t = ba.updateQueue) &&
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (ba.updateQueue = t)),
            null === (n = t.lastEffect) ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function hi() {
          return Fa().memoizedState;
        }
        function mi(e, t, n, r) {
          var o = Ia();
          ((r = void 0 === r ? null : r), (ba.flags |= e), (o.memoizedState = pi(1 | t, { destroy: void 0, resource: void 0 }, n, r)));
        }
        function yi(e, t, n, r) {
          var o = Fa();
          r = void 0 === r ? null : r;
          var a = o.memoizedState.inst;
          null !== wa && null !== r && _a(r, wa.memoizedState.deps)
            ? (o.memoizedState = pi(t, a, n, r))
            : ((ba.flags |= e), (o.memoizedState = pi(1 | t, a, n, r)));
        }
        function gi(e, t) {
          mi(8390656, 8, e, t);
        }
        function vi(e, t) {
          yi(2048, 8, e, t);
        }
        function bi(e, t) {
          return yi(4, 2, e, t);
        }
        function wi(e, t) {
          return yi(4, 4, e, t);
        }
        function Si(e, t) {
          if ('function' == typeof t) {
            e = e();
            var n = t(e);
            return function () {
              'function' == typeof n ? n() : t(null);
            };
          }
          if (null != t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function Ei(e, t, n) {
          ((n = null != n ? n.concat([e]) : null), yi(4, 4, Si.bind(null, t, e), n));
        }
        function ki() {}
        function xi(e, t) {
          var n = Fa();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && _a(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Ci(e, t) {
          var n = Fa();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && _a(t, r[1])) return r[0];
          if (((r = e()), xa)) {
            fe(!0);
            try {
              e();
            } finally {
              fe(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        }
        function Ri(e, t, n) {
          return void 0 === n || 1073741824 & va ? (e.memoizedState = t) : ((e.memoizedState = n), (e = Ds()), (ba.lanes |= e), (ds |= e), n);
        }
        function Pi(e, t, n, r) {
          return Yn(n, t)
            ? n
            : null !== pa.current
              ? ((e = Ri(e, n, r)), Yn(e, t) || (Rl = !0), e)
              : 42 & va
                ? ((e = Ds()), (ba.lanes |= e), (ds |= e), t)
                : ((Rl = !0), (e.memoizedState = n));
        }
        function Ti(e, t, n, r, o) {
          var a = D.p;
          D.p = 0 !== a && 8 > a ? a : 8;
          var i = L.T,
            l = {};
          ((L.T = l), Bi(e, !1, t, n));
          try {
            var u = o(),
              s = L.S;
            if ((null !== s && s(l, u), null !== u && 'object' == typeof u && 'function' == typeof u.then)) {
              var c = (function (e, t) {
                var n = [],
                  r = {
                    status: 'pending',
                    value: null,
                    reason: null,
                    then: function (e) {
                      n.push(e);
                    },
                  };
                return (
                  e.then(
                    function () {
                      ((r.status = 'fulfilled'), (r.value = t));
                      for (var e = 0; e < n.length; e++) (0, n[e])(t);
                    },
                    function (e) {
                      for (r.status = 'rejected', r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
                    },
                  ),
                  r
                );
              })(u, r);
              Fi(e, t, c, Ls());
            } else Fi(e, t, r, Ls());
          } catch (n) {
            Fi(e, t, { then: function () {}, status: 'rejected', reason: n }, Ls());
          } finally {
            ((D.p = a), (L.T = i));
          }
        }
        function Oi() {}
        function _i(e, t, n, r) {
          if (5 !== e.tag) throw Error(i(476));
          var o = Ai(e).queue;
          Ti(
            e,
            o,
            t,
            z,
            null === n
              ? Oi
              : function () {
                  return (Ni(e), n(r));
                },
          );
        }
        function Ai(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = {
              memoizedState: z,
              baseState: z,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: $a,
                lastRenderedState: z,
              },
              next: null,
            }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: $a,
                lastRenderedState: n,
              },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function Ni(e) {
          Fi(e, Ai(e).next.queue, {}, Ls());
        }
        function Li() {
          return Ro(Yf);
        }
        function Di() {
          return Fa().memoizedState;
        }
        function zi() {
          return Fa().memoizedState;
        }
        function ji(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Ls(),
                  r = aa(t, (e = oa(n)), n);
                return (null !== r && (zs(r, 0, n), ia(r, t, n)), (t = { cache: Lo() }), void (e.payload = t));
            }
            t = t.return;
          }
        }
        function Mi(e, t, n) {
          var r = Ls();
          ((n = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            Ui(e) ? Wi(t, n) : null !== (n = Or(e, t, n, r)) && (zs(n, 0, r), $i(n, t, r)));
        }
        function Ii(e, t, n) {
          Fi(e, t, n, Ls());
        }
        function Fi(e, t, n, r) {
          var o = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (Ui(e)) Wi(t, o);
          else {
            var a = e.alternate;
            if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
              try {
                var i = t.lastRenderedState,
                  l = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), Yn(l, i))) return (Tr(e, t, o, 0), null === ns && Pr(), !1);
              } catch (e) {}
            if (null !== (n = Or(e, t, o, r))) return (zs(n, 0, r), $i(n, t, r), !0);
          }
          return !1;
        }
        function Bi(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: Tc(),
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Ui(e))
          ) {
            if (t) throw Error(i(479));
          } else null !== (t = Or(e, n, r, 2)) && zs(t, 0, 2);
        }
        function Ui(e) {
          var t = e.alternate;
          return e === ba || (null !== t && t === ba);
        }
        function Wi(e, t) {
          ka = Ea = !0;
          var n = e.pending;
          (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
        }
        function $i(e, t, n) {
          if (4194048 & n) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), Re(e, n));
          }
        }
        var Hi = {
            readContext: Ro,
            use: Ua,
            useCallback: Oa,
            useContext: Oa,
            useEffect: Oa,
            useImperativeHandle: Oa,
            useLayoutEffect: Oa,
            useInsertionEffect: Oa,
            useMemo: Oa,
            useReducer: Oa,
            useRef: Oa,
            useState: Oa,
            useDebugValue: Oa,
            useDeferredValue: Oa,
            useTransition: Oa,
            useSyncExternalStore: Oa,
            useId: Oa,
            useHostTransitionStatus: Oa,
            useFormState: Oa,
            useActionState: Oa,
            useOptimistic: Oa,
            useMemoCache: Oa,
            useCacheRefresh: Oa,
          },
          qi = {
            readContext: Ro,
            use: Ua,
            useCallback: function (e, t) {
              return ((Ia().memoizedState = [e, void 0 === t ? null : t]), e);
            },
            useContext: Ro,
            useEffect: gi,
            useImperativeHandle: function (e, t, n) {
              ((n = null != n ? n.concat([e]) : null), mi(4194308, 4, Si.bind(null, t, e), n));
            },
            useLayoutEffect: function (e, t) {
              return mi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              mi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ia();
              t = void 0 === t ? null : t;
              var r = e();
              if (xa) {
                fe(!0);
                try {
                  e();
                } finally {
                  fe(!1);
                }
              }
              return ((n.memoizedState = [r, t]), r);
            },
            useReducer: function (e, t, n) {
              var r = Ia();
              if (void 0 !== n) {
                var o = n(t);
                if (xa) {
                  fe(!0);
                  try {
                    n(t);
                  } finally {
                    fe(!1);
                  }
                }
              } else o = t;
              return (
                (r.memoizedState = r.baseState = o),
                (e = {
                  pending: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: o,
                }),
                (r.queue = e),
                (e = e.dispatch = Mi.bind(null, ba, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return ((e = { current: e }), (Ia().memoizedState = e));
            },
            useState: function (e) {
              var t = (e = Za(e)).queue,
                n = Ii.bind(null, ba, t);
              return ((t.dispatch = n), [e.memoizedState, n]);
            },
            useDebugValue: ki,
            useDeferredValue: function (e, t) {
              return Ri(Ia(), e, t);
            },
            useTransition: function () {
              var e = Za(!1);
              return ((e = Ti.bind(null, ba, e.queue, !0, !1)), (Ia().memoizedState = e), [!1, e]);
            },
            useSyncExternalStore: function (e, t, n) {
              var r = ba,
                o = Ia();
              if (oo) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === ns)) throw Error(i(349));
                124 & os || Ya(r, t, n);
              }
              o.memoizedState = n;
              var a = { value: n, getSnapshot: t };
              return (
                (o.queue = a),
                gi(Xa.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                pi(9, { destroy: void 0, resource: void 0 }, Ka.bind(null, r, a, n, t), null),
                n
              );
            },
            useId: function () {
              var e = Ia(),
                t = ns.identifierPrefix;
              if (oo) {
                var n = Qr;
                ((t = '«' + t + 'R' + (n = (Xr & ~(1 << (32 - de(Xr) - 1))).toString(32) + n)),
                  0 < (n = Ca++) && (t += 'H' + n.toString(32)),
                  (t += '»'));
              } else t = '«' + t + 'r' + (n = Ta++).toString(32) + '»';
              return (e.memoizedState = t);
            },
            useHostTransitionStatus: Li,
            useFormState: ui,
            useActionState: ui,
            useOptimistic: function (e) {
              var t = Ia();
              t.memoizedState = t.baseState = e;
              var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null,
              };
              return ((t.queue = n), (t = Bi.bind(null, ba, !0, n)), (n.dispatch = t), [e, t]);
            },
            useMemoCache: Wa,
            useCacheRefresh: function () {
              return (Ia().memoizedState = ji.bind(null, ba));
            },
          },
          Vi = {
            readContext: Ro,
            use: Ua,
            useCallback: xi,
            useContext: Ro,
            useEffect: vi,
            useImperativeHandle: Ei,
            useInsertionEffect: bi,
            useLayoutEffect: wi,
            useMemo: Ci,
            useReducer: Ha,
            useRef: hi,
            useState: function () {
              return Ha($a);
            },
            useDebugValue: ki,
            useDeferredValue: function (e, t) {
              return Pi(Fa(), wa.memoizedState, e, t);
            },
            useTransition: function () {
              var e = Ha($a)[0],
                t = Fa().memoizedState;
              return ['boolean' == typeof e ? e : Ba(e), t];
            },
            useSyncExternalStore: Ga,
            useId: Di,
            useHostTransitionStatus: Li,
            useFormState: si,
            useActionState: si,
            useOptimistic: function (e, t) {
              return ei(Fa(), 0, e, t);
            },
            useMemoCache: Wa,
            useCacheRefresh: zi,
          },
          Gi = {
            readContext: Ro,
            use: Ua,
            useCallback: xi,
            useContext: Ro,
            useEffect: vi,
            useImperativeHandle: Ei,
            useInsertionEffect: bi,
            useLayoutEffect: wi,
            useMemo: Ci,
            useReducer: Va,
            useRef: hi,
            useState: function () {
              return Va($a);
            },
            useDebugValue: ki,
            useDeferredValue: function (e, t) {
              var n = Fa();
              return null === wa ? Ri(n, e, t) : Pi(n, wa.memoizedState, e, t);
            },
            useTransition: function () {
              var e = Va($a)[0],
                t = Fa().memoizedState;
              return ['boolean' == typeof e ? e : Ba(e), t];
            },
            useSyncExternalStore: Ga,
            useId: Di,
            useHostTransitionStatus: Li,
            useFormState: di,
            useActionState: di,
            useOptimistic: function (e, t) {
              var n = Fa();
              return null !== wa ? ei(n, 0, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
            },
            useMemoCache: Wa,
            useCacheRefresh: zi,
          },
          Yi = null,
          Ki = 0;
        function Xi(e) {
          var t = Ki;
          return ((Ki += 1), null === Yi && (Yi = []), Qo(Yi, e, t));
        }
        function Qi(e, t) {
          ((t = t.props.ref), (e.ref = void 0 !== t ? t : null));
        }
        function Ji(e, t) {
          if (t.$$typeof === d) throw Error(i(525));
          throw (
            (e = Object.prototype.toString.call(t)),
            Error(i(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e))
          );
        }
        function Zi(e) {
          return (0, e._init)(e._payload);
        }
        function el(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) (t(n, r), (r = r.sibling));
            return null;
          }
          function r(e) {
            for (var t = new Map(); null !== e; ) (null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling));
            return t;
          }
          function o(e, t) {
            return (((e = Mr(e, t)).index = 0), (e.sibling = null), e);
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 67108866), n)
                    : r
                  : ((t.flags |= 67108866), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return (e && null === t.alternate && (t.flags |= 67108866), t);
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag ? (((t = Ur(n, e.mode, r)).return = e), t) : (((t = o(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var a = n.type;
            return a === m
              ? f(e, t, n.props.children, r, n.key)
              : null !== t && (t.elementType === a || ('object' == typeof a && null !== a && a.$$typeof === C && Zi(a) === t.type))
                ? (Qi((t = o(t, n.props)), n), (t.return = e), t)
                : (Qi((t = Fr(n.type, n.key, n.props, null, e.mode, r)), n), (t.return = e), t);
          }
          function c(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation
              ? (((t = Wr(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag ? (((t = Br(n, e.mode, r, a)).return = e), t) : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (('string' == typeof t && '' !== t) || 'number' == typeof t || 'bigint' == typeof t)
              return (((t = Ur('' + t, e.mode, n)).return = e), t);
            if ('object' == typeof t && null !== t) {
              switch (t.$$typeof) {
                case p:
                  return (Qi((n = Fr(t.type, t.key, t.props, null, e.mode, n)), t), (n.return = e), n);
                case h:
                  return (((t = Wr(t, e.mode, n)).return = e), t);
                case C:
                  return d(e, (t = (0, t._init)(t._payload)), n);
              }
              if (N(t) || O(t)) return (((t = Br(t, e.mode, n, null)).return = e), t);
              if ('function' == typeof t.then) return d(e, Xi(t), n);
              if (t.$$typeof === w) return d(e, Po(e, t), n);
              Ji(e, t);
            }
            return null;
          }
          function y(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (('string' == typeof n && '' !== n) || 'number' == typeof n || 'bigint' == typeof n) return null !== o ? null : u(e, t, '' + n, r);
            if ('object' == typeof n && null !== n) {
              switch (n.$$typeof) {
                case p:
                  return n.key === o ? s(e, t, n, r) : null;
                case h:
                  return n.key === o ? c(e, t, n, r) : null;
                case C:
                  return y(e, t, (n = (o = n._init)(n._payload)), r);
              }
              if (N(n) || O(n)) return null !== o ? null : f(e, t, n, r, null);
              if ('function' == typeof n.then) return y(e, t, Xi(n), r);
              if (n.$$typeof === w) return y(e, t, Po(e, n), r);
              Ji(e, n);
            }
            return null;
          }
          function g(e, t, n, r, o) {
            if (('string' == typeof r && '' !== r) || 'number' == typeof r || 'bigint' == typeof r) return u(t, (e = e.get(n) || null), '' + r, o);
            if ('object' == typeof r && null !== r) {
              switch (r.$$typeof) {
                case p:
                  return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case h:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case C:
                  return g(e, t, n, (r = (0, r._init)(r._payload)), o);
              }
              if (N(r) || O(r)) return f(t, (e = e.get(n) || null), r, o, null);
              if ('function' == typeof r.then) return g(e, t, n, Xi(r), o);
              if (r.$$typeof === w) return g(e, t, n, Po(t, r), o);
              Ji(t, r);
            }
            return null;
          }
          function v(u, s, c, f) {
            if (
              ('object' == typeof c && null !== c && c.type === m && null === c.key && (c = c.props.children), 'object' == typeof c && null !== c)
            ) {
              switch (c.$$typeof) {
                case p:
                  e: {
                    for (var b = c.key; null !== s; ) {
                      if (s.key === b) {
                        if ((b = c.type) === m) {
                          if (7 === s.tag) {
                            (n(u, s.sibling), ((f = o(s, c.props.children)).return = u), (u = f));
                            break e;
                          }
                        } else if (s.elementType === b || ('object' == typeof b && null !== b && b.$$typeof === C && Zi(b) === s.type)) {
                          (n(u, s.sibling), Qi((f = o(s, c.props)), c), (f.return = u), (u = f));
                          break e;
                        }
                        n(u, s);
                        break;
                      }
                      (t(u, s), (s = s.sibling));
                    }
                    c.type === m
                      ? (((f = Br(c.props.children, u.mode, f, c.key)).return = u), (u = f))
                      : (Qi((f = Fr(c.type, c.key, c.props, null, u.mode, f)), c), (f.return = u), (u = f));
                  }
                  return l(u);
                case h:
                  e: {
                    for (b = c.key; null !== s; ) {
                      if (s.key === b) {
                        if (4 === s.tag && s.stateNode.containerInfo === c.containerInfo && s.stateNode.implementation === c.implementation) {
                          (n(u, s.sibling), ((f = o(s, c.children || [])).return = u), (u = f));
                          break e;
                        }
                        n(u, s);
                        break;
                      }
                      (t(u, s), (s = s.sibling));
                    }
                    (((f = Wr(c, u.mode, f)).return = u), (u = f));
                  }
                  return l(u);
                case C:
                  return v(u, s, (c = (b = c._init)(c._payload)), f);
              }
              if (N(c))
                return (function (o, i, l, u) {
                  for (var s = null, c = null, f = i, p = (i = 0), h = null; null !== f && p < l.length; p++) {
                    f.index > p ? ((h = f), (f = null)) : (h = f.sibling);
                    var m = y(o, f, l[p], u);
                    if (null === m) {
                      null === f && (f = h);
                      break;
                    }
                    (e && f && null === m.alternate && t(o, f), (i = a(m, i, p)), null === c ? (s = m) : (c.sibling = m), (c = m), (f = h));
                  }
                  if (p === l.length) return (n(o, f), oo && Jr(o, p), s);
                  if (null === f) {
                    for (; p < l.length; p++) null !== (f = d(o, l[p], u)) && ((i = a(f, i, p)), null === c ? (s = f) : (c.sibling = f), (c = f));
                    return (oo && Jr(o, p), s);
                  }
                  for (f = r(f); p < l.length; p++)
                    null !== (h = g(f, o, p, l[p], u)) &&
                      (e && null !== h.alternate && f.delete(null === h.key ? p : h.key),
                      (i = a(h, i, p)),
                      null === c ? (s = h) : (c.sibling = h),
                      (c = h));
                  return (
                    e &&
                      f.forEach(function (e) {
                        return t(o, e);
                      }),
                    oo && Jr(o, p),
                    s
                  );
                })(u, s, c, f);
              if (O(c)) {
                if ('function' != typeof (b = O(c))) throw Error(i(150));
                return (function (o, l, u, s) {
                  if (null == u) throw Error(i(151));
                  for (var c = null, f = null, p = l, h = (l = 0), m = null, v = u.next(); null !== p && !v.done; h++, v = u.next()) {
                    p.index > h ? ((m = p), (p = null)) : (m = p.sibling);
                    var b = y(o, p, v.value, s);
                    if (null === b) {
                      null === p && (p = m);
                      break;
                    }
                    (e && p && null === b.alternate && t(o, p), (l = a(b, l, h)), null === f ? (c = b) : (f.sibling = b), (f = b), (p = m));
                  }
                  if (v.done) return (n(o, p), oo && Jr(o, h), c);
                  if (null === p) {
                    for (; !v.done; h++, v = u.next())
                      null !== (v = d(o, v.value, s)) && ((l = a(v, l, h)), null === f ? (c = v) : (f.sibling = v), (f = v));
                    return (oo && Jr(o, h), c);
                  }
                  for (p = r(p); !v.done; h++, v = u.next())
                    null !== (v = g(p, o, h, v.value, s)) &&
                      (e && null !== v.alternate && p.delete(null === v.key ? h : v.key),
                      (l = a(v, l, h)),
                      null === f ? (c = v) : (f.sibling = v),
                      (f = v));
                  return (
                    e &&
                      p.forEach(function (e) {
                        return t(o, e);
                      }),
                    oo && Jr(o, h),
                    c
                  );
                })(u, s, (c = b.call(c)), f);
              }
              if ('function' == typeof c.then) return v(u, s, Xi(c), f);
              if (c.$$typeof === w) return v(u, s, Po(u, c), f);
              Ji(u, c);
            }
            return ('string' == typeof c && '' !== c) || 'number' == typeof c || 'bigint' == typeof c
              ? ((c = '' + c),
                null !== s && 6 === s.tag
                  ? (n(u, s.sibling), ((f = o(s, c)).return = u), (u = f))
                  : (n(u, s), ((f = Ur(c, u.mode, f)).return = u), (u = f)),
                l(u))
              : n(u, s);
          }
          return function (e, t, n, r) {
            try {
              Ki = 0;
              var o = v(e, t, n, r);
              return ((Yi = null), o);
            } catch (t) {
              if (t === qo || t === Go) throw t;
              var a = zr(29, t, null, e.mode);
              return ((a.lanes = r), (a.return = e), a);
            }
          };
        }
        var tl = el(!0),
          nl = el(!1),
          rl = I(null),
          ol = null;
        function al(e) {
          var t = e.alternate;
          (B(sl, 1 & sl.current), B(rl, e), null === ol && (null === t || null !== pa.current || null !== t.memoizedState) && (ol = e));
        }
        function il(e) {
          if (22 === e.tag) {
            if ((B(sl, sl.current), B(rl, e), null === ol)) {
              var t = e.alternate;
              null !== t && null !== t.memoizedState && (ol = e);
            }
          } else ll();
        }
        function ll() {
          (B(sl, sl.current), B(rl, rl.current));
        }
        function ul(e) {
          (F(rl), ol === e && (ol = null), F(sl));
        }
        var sl = I(0);
        function cl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || yf(n))) return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (128 & t.flags) return t;
            } else if (null !== t.child) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
          }
          return null;
        }
        function fl(e, t, n, r) {
          ((n = null == (n = n(r, (t = e.memoizedState))) ? t : f({}, t, n)), (e.memoizedState = n), 0 === e.lanes && (e.updateQueue.baseState = n));
        }
        var dl = {
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Ls(),
              o = oa(r);
            ((o.payload = t), null != n && (o.callback = n), null !== (t = aa(e, o, r)) && (zs(t, 0, r), ia(t, e, r)));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Ls(),
              o = oa(r);
            ((o.tag = 1), (o.payload = t), null != n && (o.callback = n), null !== (t = aa(e, o, r)) && (zs(t, 0, r), ia(t, e, r)));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Ls(),
              r = oa(n);
            ((r.tag = 2), null != t && (r.callback = t), null !== (t = aa(e, r, n)) && (zs(t, 0, n), ia(t, e, n)));
          },
        };
        function pl(e, t, n, r, o, a, i) {
          return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !(t.prototype && t.prototype.isPureReactComponent && Kn(n, r) && Kn(o, a));
        }
        function hl(e, t, n, r) {
          ((e = t.state),
            'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && dl.enqueueReplaceState(t, t.state, null));
        }
        function ml(e, t) {
          var n = t;
          if ('ref' in t) for (var r in ((n = {}), t)) 'ref' !== r && (n[r] = t[r]);
          if ((e = e.defaultProps)) for (var o in (n === t && (n = f({}, n)), e)) void 0 === n[o] && (n[o] = e[o]);
          return n;
        }
        var yl =
          'function' == typeof reportError
            ? reportError
            : function (e) {
                if ('object' == typeof window && 'function' == typeof window.ErrorEvent) {
                  var t = new window.ErrorEvent('error', {
                    bubbles: !0,
                    cancelable: !0,
                    message: 'object' == typeof e && null !== e && 'string' == typeof e.message ? String(e.message) : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if ('object' == typeof process && 'function' == typeof process.emit) return void process.emit('uncaughtException', e);
                console.error(e);
              };
        function gl(e) {
          yl(e);
        }
        function vl(e) {
          console.error(e);
        }
        function bl(e) {
          yl(e);
        }
        function wl(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        function Sl(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, {
              componentStack: n.stack,
              errorBoundary: 1 === t.tag ? t.stateNode : null,
            });
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        function El(e, t, n) {
          return (
            ((n = oa(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              wl(e, t);
            }),
            n
          );
        }
        function kl(e) {
          return (((e = oa(e)).tag = 3), e);
        }
        function xl(e, t, n, r) {
          var o = n.type.getDerivedStateFromError;
          if ('function' == typeof o) {
            var a = r.value;
            ((e.payload = function () {
              return o(a);
            }),
              (e.callback = function () {
                Sl(t, n, r);
              }));
          }
          var i = n.stateNode;
          null !== i &&
            'function' == typeof i.componentDidCatch &&
            (e.callback = function () {
              (Sl(t, n, r), 'function' != typeof o && (null === ks ? (ks = new Set([this])) : ks.add(this)));
              var e = r.stack;
              this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : '',
              });
            });
        }
        var Cl = Error(i(461)),
          Rl = !1;
        function Pl(e, t, n, r) {
          t.child = null === e ? nl(t, null, n, r) : tl(t, e.child, n, r);
        }
        function Tl(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          if ('ref' in r) {
            var i = {};
            for (var l in r) 'ref' !== l && (i[l] = r[l]);
          } else i = r;
          return (
            Co(t),
            (r = Aa(e, t, n, i, a, o)),
            (l = za()),
            null === e || Rl ? (oo && l && eo(t), (t.flags |= 1), Pl(e, t, r, o), t.child) : (ja(e, t, o), Yl(e, t, o))
          );
        }
        function Ol(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return 'function' != typeof a || jr(a) || void 0 !== a.defaultProps || null !== n.compare
              ? (((e = Fr(n.type, null, r, t, t.mode, o)).ref = t.ref), (e.return = t), (t.child = e))
              : ((t.tag = 15), (t.type = a), _l(e, t, a, r, o));
          }
          if (((a = e.child), !Kl(e, o))) {
            var i = a.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : Kn)(i, r) && e.ref === t.ref) return Yl(e, t, o);
          }
          return ((t.flags |= 1), ((e = Mr(a, r)).ref = t.ref), (e.return = t), (t.child = e));
        }
        function _l(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (Kn(a, r) && e.ref === t.ref) {
              if (((Rl = !1), (t.pendingProps = r = a), !Kl(e, o))) return ((t.lanes = e.lanes), Yl(e, t, o));
              131072 & e.flags && (Rl = !0);
            }
          }
          return Dl(e, t, n, r, o);
        }
        function Al(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode) {
            if (128 & t.flags) {
              if (((r = null !== a ? a.baseLanes | n : n), null !== e)) {
                for (o = t.child = e.child, a = 0; null !== o; ) ((a = a | o.lanes | o.childLanes), (o = o.sibling));
                t.childLanes = a & ~r;
              } else ((t.childLanes = 0), (t.child = null));
              return Nl(e, t, r, n);
            }
            if (!(536870912 & n)) return ((t.lanes = t.childLanes = 536870912), Nl(e, t, null !== a ? a.baseLanes | n : n, n));
            ((t.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && $o(0, null !== a ? a.cachePool : null),
              null !== a ? ma(t, a) : ya(),
              il(t));
          } else null !== a ? ($o(0, a.cachePool), ma(t, a), ll(), (t.memoizedState = null)) : (null !== e && $o(0, null), ya(), ll());
          return (Pl(e, t, o, n), t.child);
        }
        function Nl(e, t, n, r) {
          var o = Wo();
          return (
            (o = null === o ? null : { parent: No._currentValue, pool: o }),
            (t.memoizedState = { baseLanes: n, cachePool: o }),
            null !== e && $o(0, null),
            ya(),
            il(t),
            null !== e && ko(e, t, r, !0),
            null
          );
        }
        function Ll(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
          else {
            if ('function' != typeof n && 'object' != typeof n) throw Error(i(284));
            (null !== e && e.ref === n) || (t.flags |= 4194816);
          }
        }
        function Dl(e, t, n, r, o) {
          return (
            Co(t),
            (n = Aa(e, t, n, r, void 0, o)),
            (r = za()),
            null === e || Rl ? (oo && r && eo(t), (t.flags |= 1), Pl(e, t, n, o), t.child) : (ja(e, t, o), Yl(e, t, o))
          );
        }
        function zl(e, t, n, r, o, a) {
          return (
            Co(t),
            (t.updateQueue = null),
            (n = La(t, r, n, o)),
            Na(e),
            (r = za()),
            null === e || Rl ? (oo && r && eo(t), (t.flags |= 1), Pl(e, t, n, a), t.child) : (ja(e, t, a), Yl(e, t, a))
          );
        }
        function jl(e, t, n, r, o) {
          if ((Co(t), null === t.stateNode)) {
            var a = Lr,
              i = n.contextType;
            ('object' == typeof i && null !== i && (a = Ro(i)),
              (a = new n(r, a)),
              (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
              (a.updater = dl),
              (t.stateNode = a),
              (a._reactInternals = t),
              ((a = t.stateNode).props = r),
              (a.state = t.memoizedState),
              (a.refs = {}),
              na(t),
              (i = n.contextType),
              (a.context = 'object' == typeof i && null !== i ? Ro(i) : Lr),
              (a.state = t.memoizedState),
              'function' == typeof (i = n.getDerivedStateFromProps) && (fl(t, n, i, r), (a.state = t.memoizedState)),
              'function' == typeof n.getDerivedStateFromProps ||
                'function' == typeof a.getSnapshotBeforeUpdate ||
                ('function' != typeof a.UNSAFE_componentWillMount && 'function' != typeof a.componentWillMount) ||
                ((i = a.state),
                'function' == typeof a.componentWillMount && a.componentWillMount(),
                'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                i !== a.state && dl.enqueueReplaceState(a, a.state, null),
                ca(t, r, a, o),
                sa(),
                (a.state = t.memoizedState)),
              'function' == typeof a.componentDidMount && (t.flags |= 4194308),
              (r = !0));
          } else if (null === e) {
            a = t.stateNode;
            var l = t.memoizedProps,
              u = ml(n, l);
            a.props = u;
            var s = a.context,
              c = n.contextType;
            ((i = Lr), 'object' == typeof c && null !== c && (i = Ro(c)));
            var f = n.getDerivedStateFromProps;
            ((c = 'function' == typeof f || 'function' == typeof a.getSnapshotBeforeUpdate),
              (l = t.pendingProps !== l),
              c ||
                ('function' != typeof a.UNSAFE_componentWillReceiveProps && 'function' != typeof a.componentWillReceiveProps) ||
                ((l || s !== i) && hl(t, a, r, i)),
              (ta = !1));
            var d = t.memoizedState;
            ((a.state = d),
              ca(t, r, a, o),
              sa(),
              (s = t.memoizedState),
              l || d !== s || ta
                ? ('function' == typeof f && (fl(t, n, f, r), (s = t.memoizedState)),
                  (u = ta || pl(t, n, u, r, d, s, i))
                    ? (c ||
                        ('function' != typeof a.UNSAFE_componentWillMount && 'function' != typeof a.componentWillMount) ||
                        ('function' == typeof a.componentWillMount && a.componentWillMount(),
                        'function' == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                      'function' == typeof a.componentDidMount && (t.flags |= 4194308))
                    : ('function' == typeof a.componentDidMount && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = s)),
                  (a.props = r),
                  (a.state = s),
                  (a.context = i),
                  (r = u))
                : ('function' == typeof a.componentDidMount && (t.flags |= 4194308), (r = !1)));
          } else {
            ((a = t.stateNode),
              ra(e, t),
              (c = ml(n, (i = t.memoizedProps))),
              (a.props = c),
              (f = t.pendingProps),
              (d = a.context),
              (s = n.contextType),
              (u = Lr),
              'object' == typeof s && null !== s && (u = Ro(s)),
              (s = 'function' == typeof (l = n.getDerivedStateFromProps) || 'function' == typeof a.getSnapshotBeforeUpdate) ||
                ('function' != typeof a.UNSAFE_componentWillReceiveProps && 'function' != typeof a.componentWillReceiveProps) ||
                ((i !== f || d !== u) && hl(t, a, r, u)),
              (ta = !1),
              (d = t.memoizedState),
              (a.state = d),
              ca(t, r, a, o),
              sa());
            var p = t.memoizedState;
            i !== f || d !== p || ta || (null !== e && null !== e.dependencies && xo(e.dependencies))
              ? ('function' == typeof l && (fl(t, n, l, r), (p = t.memoizedState)),
                (c = ta || pl(t, n, c, r, d, p, u) || (null !== e && null !== e.dependencies && xo(e.dependencies)))
                  ? (s ||
                      ('function' != typeof a.UNSAFE_componentWillUpdate && 'function' != typeof a.componentWillUpdate) ||
                      ('function' == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, u),
                      'function' == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, u)),
                    'function' == typeof a.componentDidUpdate && (t.flags |= 4),
                    'function' == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' != typeof a.componentDidUpdate || (i === e.memoizedProps && d === e.memoizedState) || (t.flags |= 4),
                    'function' != typeof a.getSnapshotBeforeUpdate || (i === e.memoizedProps && d === e.memoizedState) || (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (a.props = r),
                (a.state = p),
                (a.context = u),
                (r = c))
              : ('function' != typeof a.componentDidUpdate || (i === e.memoizedProps && d === e.memoizedState) || (t.flags |= 4),
                'function' != typeof a.getSnapshotBeforeUpdate || (i === e.memoizedProps && d === e.memoizedState) || (t.flags |= 1024),
                (r = !1));
          }
          return (
            (a = r),
            Ll(e, t),
            (r = !!(128 & t.flags)),
            a || r
              ? ((a = t.stateNode),
                (n = r && 'function' != typeof n.getDerivedStateFromError ? null : a.render()),
                (t.flags |= 1),
                null !== e && r ? ((t.child = tl(t, e.child, null, o)), (t.child = tl(t, null, n, o))) : Pl(e, t, n, o),
                (t.memoizedState = a.state),
                (e = t.child))
              : (e = Yl(e, t, o)),
            e
          );
        }
        function Ml(e, t, n, r) {
          return (po(), (t.flags |= 256), Pl(e, t, n, r), t.child);
        }
        var Il = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
          hydrationErrors: null,
        };
        function Fl(e) {
          return { baseLanes: e, cachePool: Ho() };
        }
        function Bl(e, t, n) {
          return ((e = null !== e ? e.childLanes & ~n : 0), t && (e |= ms), e);
        }
        function Ul(e, t, n) {
          var r,
            o = t.pendingProps,
            a = !1,
            l = !!(128 & t.flags);
          if (
            ((r = l) || (r = (null === e || null !== e.memoizedState) && !!(2 & sl.current)),
            r && ((a = !0), (t.flags &= -129)),
            (r = !!(32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (oo) {
              if ((a ? al(t) : ll(), oo)) {
                var u,
                  s = ro;
                if ((u = s)) {
                  e: {
                    for (u = s, s = io; 8 !== u.nodeType; ) {
                      if (!s) {
                        s = null;
                        break e;
                      }
                      if (null === (u = gf(u.nextSibling))) {
                        s = null;
                        break e;
                      }
                    }
                    s = u;
                  }
                  null !== s
                    ? ((t.memoizedState = {
                        dehydrated: s,
                        treeContext: null !== Kr ? { id: Xr, overflow: Qr } : null,
                        retryLane: 536870912,
                        hydrationErrors: null,
                      }),
                      ((u = zr(18, null, null, 0)).stateNode = s),
                      (u.return = t),
                      (t.child = u),
                      (no = t),
                      (ro = null),
                      (u = !0))
                    : (u = !1);
                }
                u || uo(t);
              }
              if (null !== (s = t.memoizedState) && null !== (s = s.dehydrated)) return (yf(s) ? (t.lanes = 32) : (t.lanes = 536870912), null);
              ul(t);
            }
            return (
              (s = o.children),
              (o = o.fallback),
              a
                ? (ll(),
                  (s = $l({ mode: 'hidden', children: s }, (a = t.mode))),
                  (o = Br(o, a, n, null)),
                  (s.return = t),
                  (o.return = t),
                  (s.sibling = o),
                  (t.child = s),
                  ((a = t.child).memoizedState = Fl(n)),
                  (a.childLanes = Bl(e, r, n)),
                  (t.memoizedState = Il),
                  o)
                : (al(t), Wl(t, s))
            );
          }
          if (null !== (u = e.memoizedState) && null !== (s = u.dehydrated)) {
            if (l)
              256 & t.flags
                ? (al(t), (t.flags &= -257), (t = Hl(e, t, n)))
                : null !== t.memoizedState
                  ? (ll(), (t.child = e.child), (t.flags |= 128), (t = null))
                  : (ll(),
                    (a = o.fallback),
                    (s = t.mode),
                    (o = $l({ mode: 'visible', children: o.children }, s)),
                    ((a = Br(a, s, n, null)).flags |= 2),
                    (o.return = t),
                    (a.return = t),
                    (o.sibling = a),
                    (t.child = o),
                    tl(t, e.child, null, n),
                    ((o = t.child).memoizedState = Fl(n)),
                    (o.childLanes = Bl(e, r, n)),
                    (t.memoizedState = Il),
                    (t = a));
            else if ((al(t), yf(s))) {
              if ((r = s.nextSibling && s.nextSibling.dataset)) var c = r.dgst;
              ((r = c), ((o = Error(i(419))).stack = ''), (o.digest = r), mo({ value: o, source: null, stack: null }), (t = Hl(e, t, n)));
            } else if ((Rl || ko(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Rl || r)) {
              if (null !== (r = ns) && 0 !== (o = 0 !== ((o = 42 & (o = n & -n) ? 1 : Pe(o)) & (r.suspendedLanes | n)) ? 0 : o) && o !== u.retryLane)
                throw ((u.retryLane = o), _r(e, o), zs(r, 0, o), Cl);
              ('$?' === s.data || Vs(), (t = Hl(e, t, n)));
            } else
              '$?' === s.data
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = u.treeContext),
                  (ro = gf(s.nextSibling)),
                  (no = t),
                  (oo = !0),
                  (ao = null),
                  (io = !1),
                  null !== e && ((Gr[Yr++] = Xr), (Gr[Yr++] = Qr), (Gr[Yr++] = Kr), (Xr = e.id), (Qr = e.overflow), (Kr = t)),
                  ((t = Wl(t, o.children)).flags |= 4096));
            return t;
          }
          return a
            ? (ll(),
              (a = o.fallback),
              (s = t.mode),
              (c = (u = e.child).sibling),
              ((o = Mr(u, {
                mode: 'hidden',
                children: o.children,
              })).subtreeFlags = 65011712 & u.subtreeFlags),
              null !== c ? (a = Mr(c, a)) : ((a = Br(a, s, n, null)).flags |= 2),
              (a.return = t),
              (o.return = t),
              (o.sibling = a),
              (t.child = o),
              (o = a),
              (a = t.child),
              null === (s = e.child.memoizedState)
                ? (s = Fl(n))
                : (null !== (u = s.cachePool) ? ((c = No._currentValue), (u = u.parent !== c ? { parent: c, pool: c } : u)) : (u = Ho()),
                  (s = { baseLanes: s.baseLanes | n, cachePool: u })),
              (a.memoizedState = s),
              (a.childLanes = Bl(e, r, n)),
              (t.memoizedState = Il),
              o)
            : (al(t),
              (e = (n = e.child).sibling),
              ((n = Mr(n, { mode: 'visible', children: o.children })).return = t),
              (n.sibling = null),
              null !== e && (null === (r = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function Wl(e, t) {
          return (((t = $l({ mode: 'visible', children: t }, e.mode)).return = e), (e.child = t));
        }
        function $l(e, t) {
          return (
            ((e = zr(22, e, null, t)).lanes = 0),
            (e.stateNode = {
              _visibility: 1,
              _pendingMarkers: null,
              _retryCache: null,
              _transitions: null,
            }),
            e
          );
        }
        function Hl(e, t, n) {
          return (tl(t, e.child, null, n), ((e = Wl(t, t.pendingProps.children)).flags |= 2), (t.memoizedState = null), e);
        }
        function ql(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          (null !== r && (r.lanes |= t), So(e.return, t, n));
        }
        function Vl(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t), (a.rendering = null), (a.renderingStartTime = 0), (a.last = r), (a.tail = n), (a.tailMode = o));
        }
        function Gl(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((Pl(e, t, r.children, n), 2 & (r = sl.current))) ((r = (1 & r) | 2), (t.flags |= 128));
          else {
            if (null !== e && 128 & e.flags)
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && ql(e, n, t);
                else if (19 === e.tag) ql(e, n, t);
                else if (null !== e.child) {
                  ((e.child.return = e), (e = e.child));
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                ((e.sibling.return = e.return), (e = e.sibling));
              }
            r &= 1;
          }
          switch ((B(sl, r), o)) {
            case 'forwards':
              for (n = t.child, o = null; null !== n; ) (null !== (e = n.alternate) && null === cl(e) && (o = n), (n = n.sibling));
              (null === (n = o) ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)), Vl(t, !1, o, n, a));
              break;
            case 'backwards':
              for (n = null, o = t.child, t.child = null; null !== o; ) {
                if (null !== (e = o.alternate) && null === cl(e)) {
                  t.child = o;
                  break;
                }
                ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
              }
              Vl(t, !0, n, null, a);
              break;
            case 'together':
              Vl(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function Yl(e, t, n) {
          if ((null !== e && (t.dependencies = e.dependencies), (ds |= t.lanes), 0 === (n & t.childLanes))) {
            if (null === e) return null;
            if ((ko(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (n = Mr((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
              ((e = e.sibling), ((n = n.sibling = Mr(e, e.pendingProps)).return = t));
            n.sibling = null;
          }
          return t.child;
        }
        function Kl(e, t) {
          return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !xo(e));
        }
        function Xl(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Rl = !0;
            else {
              if (!(Kl(e, n) || 128 & t.flags))
                return (
                  (Rl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        (q(t, t.stateNode.containerInfo), bo(0, No, e.memoizedState.cache), po());
                        break;
                      case 27:
                      case 5:
                        G(t);
                        break;
                      case 4:
                        q(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        bo(0, t.type, t.memoizedProps.value);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (al(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Ul(e, t, n)
                              : (al(t), null !== (e = Yl(e, t, n)) ? e.sibling : null);
                        al(t);
                        break;
                      case 19:
                        var o = !!(128 & e.flags);
                        if (((r = 0 !== (n & t.childLanes)) || (ko(e, t, n, !1), (r = 0 !== (n & t.childLanes))), o)) {
                          if (r) return Gl(e, t, n);
                          t.flags |= 128;
                        }
                        if ((null !== (o = t.memoizedState) && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)), B(sl, sl.current), r))
                          break;
                        return null;
                      case 22:
                      case 23:
                        return ((t.lanes = 0), Al(e, t, n));
                      case 24:
                        bo(0, No, e.memoizedState.cache);
                    }
                    return Yl(e, t, n);
                  })(e, t, n)
                );
              Rl = !!(131072 & e.flags);
            }
          else ((Rl = !1), oo && 1048576 & t.flags && Zr(t, Vr, t.index));
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                e = t.pendingProps;
                var r = t.elementType,
                  o = r._init;
                if (((r = o(r._payload)), (t.type = r), 'function' != typeof r)) {
                  if (null != r) {
                    if ((o = r.$$typeof) === S) {
                      ((t.tag = 11), (t = Tl(null, t, r, e, n)));
                      break e;
                    }
                    if (o === x) {
                      ((t.tag = 14), (t = Ol(null, t, r, e, n)));
                      break e;
                    }
                  }
                  throw ((t = A(r) || r), Error(i(306, t, '')));
                }
                jr(r) ? ((e = ml(r, e)), (t.tag = 1), (t = jl(null, t, r, e, n))) : ((t.tag = 0), (t = Dl(null, t, r, e, n)));
              }
              return t;
            case 0:
              return Dl(e, t, t.type, t.pendingProps, n);
            case 1:
              return jl(e, t, (r = t.type), (o = ml(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((q(t, t.stateNode.containerInfo), null === e)) throw Error(i(387));
                r = t.pendingProps;
                var a = t.memoizedState;
                ((o = a.element), ra(e, t), ca(t, r, null, n));
                var l = t.memoizedState;
                if (((r = l.cache), bo(0, No, r), r !== a.cache && Eo(t, [No], n, !0), sa(), (r = l.element), a.isDehydrated)) {
                  if (((a = { element: r, isDehydrated: !1, cache: l.cache }), (t.updateQueue.baseState = a), (t.memoizedState = a), 256 & t.flags)) {
                    t = Ml(e, t, r, n);
                    break e;
                  }
                  if (r !== o) {
                    (mo((o = kr(Error(i(424)), t))), (t = Ml(e, t, r, n)));
                    break e;
                  }
                  for (
                    e = 9 === (e = t.stateNode.containerInfo).nodeType ? e.body : 'HTML' === e.nodeName ? e.ownerDocument.body : e,
                      ro = gf(e.firstChild),
                      no = t,
                      oo = !0,
                      ao = null,
                      io = !0,
                      n = nl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                  if ((po(), r === o)) {
                    t = Yl(e, t, n);
                    break e;
                  }
                  Pl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Ll(e, t),
                null === e
                  ? (n = Tf(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : oo ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = nf($.current).createElement(n))[Ae] = t),
                      (r[Ne] = e),
                      Zc(r, n, e),
                      He(r),
                      (t.stateNode = r))
                  : (t.memoizedState = Tf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
                null
              );
            case 27:
              return (
                G(t),
                null === e &&
                  oo &&
                  ((r = t.stateNode = wf(t.type, t.pendingProps, $.current)),
                  (no = t),
                  (io = !0),
                  (o = ro),
                  pf(t.type) ? ((vf = o), (ro = gf(r.firstChild))) : (ro = o)),
                Pl(e, t, t.pendingProps.children, n),
                Ll(e, t),
                null === e && (t.flags |= 4194304),
                t.child
              );
            case 5:
              return (
                null === e &&
                  oo &&
                  ((o = r = ro) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var o = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (!r && ('INPUT' !== e.nodeName || 'hidden' !== e.type)) break;
                        } else if (r) {
                          if (!e[Ie])
                            switch (t) {
                              case 'meta':
                                if (!e.hasAttribute('itemprop')) break;
                                return e;
                              case 'link':
                                if ('stylesheet' === (a = e.getAttribute('rel')) && e.hasAttribute('data-precedence')) break;
                                if (
                                  a !== o.rel ||
                                  e.getAttribute('href') !== (null == o.href || '' === o.href ? null : o.href) ||
                                  e.getAttribute('crossorigin') !== (null == o.crossOrigin ? null : o.crossOrigin) ||
                                  e.getAttribute('title') !== (null == o.title ? null : o.title)
                                )
                                  break;
                                return e;
                              case 'style':
                                if (e.hasAttribute('data-precedence')) break;
                                return e;
                              case 'script':
                                if (
                                  ((a = e.getAttribute('src')) !== (null == o.src ? null : o.src) ||
                                    e.getAttribute('type') !== (null == o.type ? null : o.type) ||
                                    e.getAttribute('crossorigin') !== (null == o.crossOrigin ? null : o.crossOrigin)) &&
                                  a &&
                                  e.hasAttribute('async') &&
                                  !e.hasAttribute('itemprop')
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ('input' !== t || 'hidden' !== e.type) return e;
                          var a = null == o.name ? null : '' + o.name;
                          if ('hidden' === o.type && e.getAttribute('name') === a) return e;
                        }
                        if (null === (e = gf(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, io))
                      ? ((t.stateNode = r), (no = t), (ro = gf(r.firstChild)), (io = !1), (o = !0))
                      : (o = !1)),
                  o || uo(t)),
                G(t),
                (o = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (r = a.children),
                af(o, a) ? (r = null) : null !== l && af(o, l) && (t.flags |= 32),
                null !== t.memoizedState && ((o = Aa(e, t, Da, null, null, n)), (Yf._currentValue = o)),
                Ll(e, t),
                Pl(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  oo &&
                  ((e = n = ro) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ('' === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if ((1 !== e.nodeType || 'INPUT' !== e.nodeName || 'hidden' !== e.type) && !n) return null;
                        if (null === (e = gf(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, io))
                      ? ((t.stateNode = n), (no = t), (ro = null), (e = !0))
                      : (e = !1)),
                  e || uo(t)),
                null
              );
            case 13:
              return Ul(e, t, n);
            case 4:
              return (q(t, t.stateNode.containerInfo), (r = t.pendingProps), null === e ? (t.child = tl(t, null, r, n)) : Pl(e, t, r, n), t.child);
            case 11:
              return Tl(e, t, t.type, t.pendingProps, n);
            case 7:
              return (Pl(e, t, t.pendingProps, n), t.child);
            case 8:
            case 12:
              return (Pl(e, t, t.pendingProps.children, n), t.child);
            case 10:
              return ((r = t.pendingProps), bo(0, t.type, r.value), Pl(e, t, r.children, n), t.child);
            case 9:
              return ((o = t.type._context), (r = t.pendingProps.children), Co(t), (r = r((o = Ro(o)))), (t.flags |= 1), Pl(e, t, r, n), t.child);
            case 14:
              return Ol(e, t, t.type, t.pendingProps, n);
            case 15:
              return _l(e, t, t.type, t.pendingProps, n);
            case 19:
              return Gl(e, t, n);
            case 31:
              return (
                (r = t.pendingProps),
                (n = t.mode),
                (r = { mode: r.mode, children: r.children }),
                null === e
                  ? (((n = $l(r, n)).ref = t.ref), (t.child = n), (n.return = t), (t = n))
                  : (((n = Mr(e.child, r)).ref = t.ref), (t.child = n), (n.return = t), (t = n)),
                t
              );
            case 22:
              return Al(e, t, n);
            case 24:
              return (
                Co(t),
                (r = Ro(No)),
                null === e
                  ? (null === (o = Wo()) &&
                      ((o = ns), (a = Lo()), (o.pooledCache = a), a.refCount++, null !== a && (o.pooledCacheLanes |= n), (o = a)),
                    (t.memoizedState = { parent: r, cache: o }),
                    na(t),
                    bo(0, No, o))
                  : (0 !== (e.lanes & n) && (ra(e, t), ca(t, null, null, n), sa()),
                    (o = e.memoizedState),
                    (a = t.memoizedState),
                    o.parent !== r
                      ? ((o = { parent: r, cache: r }),
                        (t.memoizedState = o),
                        0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = o),
                        bo(0, No, r))
                      : ((r = a.cache), bo(0, No, r), r !== o.cache && Eo(t, [No], n, !0))),
                Pl(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(i(156, t.tag));
        }
        function Ql(e) {
          e.flags |= 4;
        }
        function Jl(e, t) {
          if ('stylesheet' !== t.type || 4 & t.state.loading) e.flags &= -16777217;
          else if (((e.flags |= 16777216), !Uf(t))) {
            if (null !== (t = rl.current) && ((4194048 & os) === os ? null !== ol : ((62914560 & os) !== os && !(536870912 & os)) || t !== ol))
              throw ((Jo = Yo), Vo);
            e.flags |= 8192;
          }
        }
        function Zl(e, t) {
          (null !== t && (e.flags |= 4), 16384 & e.flags && ((t = 22 !== e.tag ? Ee() : 536870912), (e.lanes |= t), (ys |= t)));
        }
        function eu(e, t) {
          if (!oo)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; ) (null !== t.alternate && (n = t), (t = t.sibling));
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; ) (null !== n.alternate && (r = n), (n = n.sibling));
                null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
            }
        }
        function tu(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              ((n |= o.lanes | o.childLanes), (r |= 65011712 & o.subtreeFlags), (r |= 65011712 & o.flags), (o.return = e), (o = o.sibling));
          else
            for (o = e.child; null !== o; ) ((n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling));
          return ((e.subtreeFlags |= r), (e.childLanes = n), t);
        }
        function nu(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return (tu(t), null);
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                wo(No),
                V(),
                n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t) ? Ql(t) : null === e || (e.memoizedState.isDehydrated && !(256 & t.flags)) || ((t.flags |= 1024), ho())),
                tu(t),
                null
              );
            case 26:
              return (
                (n = t.memoizedState),
                null === e
                  ? (Ql(t), null !== n ? (tu(t), Jl(t, n)) : (tu(t), (t.flags &= -16777217)))
                  : n
                    ? n !== e.memoizedState
                      ? (Ql(t), tu(t), Jl(t, n))
                      : (tu(t), (t.flags &= -16777217))
                    : (e.memoizedProps !== r && Ql(t), tu(t), (t.flags &= -16777217)),
                null
              );
            case 27:
              (Y(t), (n = $.current));
              var o = t.type;
              if (null !== e && null != t.stateNode) e.memoizedProps !== r && Ql(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return (tu(t), null);
                }
                ((e = U.current), fo(t) ? so(t) : ((e = wf(o, r, n)), (t.stateNode = e), Ql(t)));
              }
              return (tu(t), null);
            case 5:
              if ((Y(t), (n = t.type), null !== e && null != t.stateNode)) e.memoizedProps !== r && Ql(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return (tu(t), null);
                }
                if (((e = U.current), fo(t))) so(t);
                else {
                  switch (((o = nf($.current)), e)) {
                    case 1:
                      e = o.createElementNS('http://www.w3.org/2000/svg', n);
                      break;
                    case 2:
                      e = o.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                      break;
                    default:
                      switch (n) {
                        case 'svg':
                          e = o.createElementNS('http://www.w3.org/2000/svg', n);
                          break;
                        case 'math':
                          e = o.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                          break;
                        case 'script':
                          (((e = o.createElement('div')).innerHTML = '<script><\/script>'), (e = e.removeChild(e.firstChild)));
                          break;
                        case 'select':
                          ((e = 'string' == typeof r.is ? o.createElement('select', { is: r.is }) : o.createElement('select')),
                            r.multiple ? (e.multiple = !0) : r.size && (e.size = r.size));
                          break;
                        default:
                          e = 'string' == typeof r.is ? o.createElement(n, { is: r.is }) : o.createElement(n);
                      }
                  }
                  ((e[Ae] = t), (e[Ne] = r));
                  e: for (o = t.child; null !== o; ) {
                    if (5 === o.tag || 6 === o.tag) e.appendChild(o.stateNode);
                    else if (4 !== o.tag && 27 !== o.tag && null !== o.child) {
                      ((o.child.return = o), (o = o.child));
                      continue;
                    }
                    if (o === t) break e;
                    for (; null === o.sibling; ) {
                      if (null === o.return || o.return === t) break e;
                      o = o.return;
                    }
                    ((o.sibling.return = o.return), (o = o.sibling));
                  }
                  t.stateNode = e;
                  e: switch ((Zc(e, n, r), n)) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      e = !!r.autoFocus;
                      break e;
                    case 'img':
                      e = !0;
                      break e;
                    default:
                      e = !1;
                  }
                  e && Ql(t);
                }
              }
              return (tu(t), (t.flags &= -16777217), null);
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && Ql(t);
              else {
                if ('string' != typeof r && null === t.stateNode) throw Error(i(166));
                if (((e = $.current), fo(t))) {
                  if (((e = t.stateNode), (n = t.memoizedProps), (r = null), null !== (o = no)))
                    switch (o.tag) {
                      case 27:
                      case 5:
                        r = o.memoizedProps;
                    }
                  ((e[Ae] = t), (e = !!(e.nodeValue === n || (null !== r && !0 === r.suppressHydrationWarning) || Kc(e.nodeValue, n))) || uo(t));
                } else (((e = nf(e).createTextNode(r))[Ae] = t), (t.stateNode = e));
              }
              return (tu(t), null);
            case 13:
              if (((r = t.memoizedState), null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))) {
                if (((o = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(i(318));
                    if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null)) throw Error(i(317));
                    o[Ae] = t;
                  } else (po(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                  (tu(t), (o = !1));
                } else ((o = ho()), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = o), (o = !0));
                if (!o) return 256 & t.flags ? (ul(t), t) : (ul(t), null);
              }
              if ((ul(t), 128 & t.flags)) return ((t.lanes = n), t);
              if (((n = null !== r), (e = null !== e && null !== e.memoizedState), n)) {
                ((o = null),
                  null !== (r = t.child).alternate &&
                    null !== r.alternate.memoizedState &&
                    null !== r.alternate.memoizedState.cachePool &&
                    (o = r.alternate.memoizedState.cachePool.pool));
                var a = null;
                (null !== r.memoizedState && null !== r.memoizedState.cachePool && (a = r.memoizedState.cachePool.pool),
                  a !== o && (r.flags |= 2048));
              }
              return (n !== e && n && (t.child.flags |= 8192), Zl(t, t.updateQueue), tu(t), null);
            case 4:
              return (V(), null === e && Fc(t.stateNode.containerInfo), tu(t), null);
            case 10:
              return (wo(t.type), tu(t), null);
            case 19:
              if ((F(sl), null === (o = t.memoizedState))) return (tu(t), null);
              if (((r = !!(128 & t.flags)), null === (a = o.rendering)))
                if (r) eu(o, !1);
                else {
                  if (0 !== fs || (null !== e && 128 & e.flags))
                    for (e = t.child; null !== e; ) {
                      if (null !== (a = cl(e))) {
                        for (
                          t.flags |= 128, eu(o, !1), e = a.updateQueue, t.updateQueue = e, Zl(t, e), t.subtreeFlags = 0, e = n, n = t.child;
                          null !== n;

                        )
                          (Ir(n, e), (n = n.sibling));
                        return (B(sl, (1 & sl.current) | 2), t.child);
                      }
                      e = e.sibling;
                    }
                  null !== o.tail && ee() > Ss && ((t.flags |= 128), (r = !0), eu(o, !1), (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = cl(a))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      Zl(t, e),
                      eu(o, !0),
                      null === o.tail && 'hidden' === o.tailMode && !a.alternate && !oo)
                    )
                      return (tu(t), null);
                  } else 2 * ee() - o.renderingStartTime > Ss && 536870912 !== n && ((t.flags |= 128), (r = !0), eu(o, !1), (t.lanes = 4194304));
                o.isBackwards ? ((a.sibling = t.child), (t.child = a)) : (null !== (e = o.last) ? (e.sibling = a) : (t.child = a), (o.last = a));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = ee()),
                  (t.sibling = null),
                  (e = sl.current),
                  B(sl, r ? (1 & e) | 2 : 1 & e),
                  t)
                : (tu(t), null);
            case 22:
            case 23:
              return (
                ul(t),
                ga(),
                (r = null !== t.memoizedState),
                null !== e ? (null !== e.memoizedState) !== r && (t.flags |= 8192) : r && (t.flags |= 8192),
                r ? !!(536870912 & n) && !(128 & t.flags) && (tu(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : tu(t),
                null !== (n = t.updateQueue) && Zl(t, n.retryQueue),
                (n = null),
                null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && F(Uo),
                null
              );
            case 24:
              return ((n = null), null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), wo(No), tu(t), null);
            case 25:
            case 30:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function ru(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 3:
              return (wo(No), V(), 65536 & (e = t.flags) && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null);
            case 26:
            case 27:
            case 5:
              return (Y(t), null);
            case 13:
              if ((ul(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(i(340));
                po();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return (F(sl), null);
            case 4:
              return (V(), null);
            case 10:
              return (wo(t.type), null);
            case 22:
            case 23:
              return (ul(t), ga(), null !== e && F(Uo), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
            case 24:
              return (wo(No), null);
            default:
              return null;
          }
        }
        function ou(e, t) {
          switch ((to(t), t.tag)) {
            case 3:
              (wo(No), V());
              break;
            case 26:
            case 27:
            case 5:
              Y(t);
              break;
            case 4:
              V();
              break;
            case 13:
              ul(t);
              break;
            case 19:
              F(sl);
              break;
            case 10:
              wo(t.type);
              break;
            case 22:
            case 23:
              (ul(t), ga(), null !== e && F(Uo));
              break;
            case 24:
              wo(No);
          }
        }
        function au(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var o = r.next;
              n = o;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var a = n.create,
                    i = n.inst;
                  ((r = a()), (i.destroy = r));
                }
                n = n.next;
              } while (n !== o);
            }
          } catch (e) {
            sc(t, t.return, e);
          }
        }
        function iu(e, t, n) {
          try {
            var r = t.updateQueue,
              o = null !== r ? r.lastEffect : null;
            if (null !== o) {
              var a = o.next;
              r = a;
              do {
                if ((r.tag & e) === e) {
                  var i = r.inst,
                    l = i.destroy;
                  if (void 0 !== l) {
                    ((i.destroy = void 0), (o = t));
                    var u = n,
                      s = l;
                    try {
                      s();
                    } catch (e) {
                      sc(o, u, e);
                    }
                  }
                }
                r = r.next;
              } while (r !== a);
            }
          } catch (e) {
            sc(t, t.return, e);
          }
        }
        function lu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              da(t, n);
            } catch (t) {
              sc(e, e.return, t);
            }
          }
        }
        function uu(e, t, n) {
          ((n.props = ml(e.type, e.memoizedProps)), (n.state = e.memoizedState));
          try {
            n.componentWillUnmount();
          } catch (n) {
            sc(e, t, n);
          }
        }
        function su(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var r = e.stateNode;
                  break;
                default:
                  r = e.stateNode;
              }
              'function' == typeof n ? (e.refCleanup = n(r)) : (n.current = r);
            }
          } catch (n) {
            sc(e, t, n);
          }
        }
        function cu(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ('function' == typeof r)
              try {
                r();
              } catch (n) {
                sc(e, t, n);
              } finally {
                ((e.refCleanup = null), null != (e = e.alternate) && (e.refCleanup = null));
              }
            else if ('function' == typeof n)
              try {
                n(null);
              } catch (n) {
                sc(e, t, n);
              }
            else n.current = null;
        }
        function fu(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                n.autoFocus && r.focus();
                break e;
              case 'img':
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (t) {
            sc(e, e.return, t);
          }
        }
        function du(e, t, n) {
          try {
            var r = e.stateNode;
            (!(function (e, t, n, r) {
              switch (t) {
                case 'div':
                case 'span':
                case 'svg':
                case 'path':
                case 'a':
                case 'g':
                case 'p':
                case 'li':
                  break;
                case 'input':
                  var o = null,
                    a = null,
                    l = null,
                    u = null,
                    s = null,
                    c = null,
                    f = null;
                  for (h in n) {
                    var d = n[h];
                    if (n.hasOwnProperty(h) && null != d)
                      switch (h) {
                        case 'checked':
                        case 'value':
                          break;
                        case 'defaultValue':
                          s = d;
                        default:
                          r.hasOwnProperty(h) || Qc(e, t, h, null, r, d);
                      }
                  }
                  for (var p in r) {
                    var h = r[p];
                    if (((d = n[p]), r.hasOwnProperty(p) && (null != h || null != d)))
                      switch (p) {
                        case 'type':
                          a = h;
                          break;
                        case 'name':
                          o = h;
                          break;
                        case 'checked':
                          c = h;
                          break;
                        case 'defaultChecked':
                          f = h;
                          break;
                        case 'value':
                          l = h;
                          break;
                        case 'defaultValue':
                          u = h;
                          break;
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                          if (null != h) throw Error(i(137, t));
                          break;
                        default:
                          h !== d && Qc(e, t, p, h, r, d);
                      }
                  }
                  return void mt(e, l, u, s, c, f, a, o);
                case 'select':
                  for (a in ((h = l = u = p = null), n))
                    if (((s = n[a]), n.hasOwnProperty(a) && null != s))
                      switch (a) {
                        case 'value':
                          break;
                        case 'multiple':
                          h = s;
                        default:
                          r.hasOwnProperty(a) || Qc(e, t, a, null, r, s);
                      }
                  for (o in r)
                    if (((a = r[o]), (s = n[o]), r.hasOwnProperty(o) && (null != a || null != s)))
                      switch (o) {
                        case 'value':
                          p = a;
                          break;
                        case 'defaultValue':
                          u = a;
                          break;
                        case 'multiple':
                          l = a;
                        default:
                          a !== s && Qc(e, t, o, a, r, s);
                      }
                  return (
                    (t = u),
                    (n = l),
                    (r = h),
                    void (null != p ? vt(e, !!n, p, !1) : !!r != !!n && (null != t ? vt(e, !!n, t, !0) : vt(e, !!n, n ? [] : '', !1)))
                  );
                case 'textarea':
                  for (u in ((h = p = null), n))
                    if (((o = n[u]), n.hasOwnProperty(u) && null != o && !r.hasOwnProperty(u)))
                      switch (u) {
                        case 'value':
                        case 'children':
                          break;
                        default:
                          Qc(e, t, u, null, r, o);
                      }
                  for (l in r)
                    if (((o = r[l]), (a = n[l]), r.hasOwnProperty(l) && (null != o || null != a)))
                      switch (l) {
                        case 'value':
                          p = o;
                          break;
                        case 'defaultValue':
                          h = o;
                          break;
                        case 'children':
                          break;
                        case 'dangerouslySetInnerHTML':
                          if (null != o) throw Error(i(91));
                          break;
                        default:
                          o !== a && Qc(e, t, l, o, r, a);
                      }
                  return void bt(e, p, h);
                case 'option':
                  for (var m in n)
                    ((p = n[m]),
                      n.hasOwnProperty(m) && null != p && !r.hasOwnProperty(m) && ('selected' === m ? (e.selected = !1) : Qc(e, t, m, null, r, p)));
                  for (s in r)
                    ((p = r[s]),
                      (h = n[s]),
                      !r.hasOwnProperty(s) ||
                        p === h ||
                        (null == p && null == h) ||
                        ('selected' === s ? (e.selected = p && 'function' != typeof p && 'symbol' != typeof p) : Qc(e, t, s, p, r, h)));
                  return;
                case 'img':
                case 'link':
                case 'area':
                case 'base':
                case 'br':
                case 'col':
                case 'embed':
                case 'hr':
                case 'keygen':
                case 'meta':
                case 'param':
                case 'source':
                case 'track':
                case 'wbr':
                case 'menuitem':
                  for (var y in n) ((p = n[y]), n.hasOwnProperty(y) && null != p && !r.hasOwnProperty(y) && Qc(e, t, y, null, r, p));
                  for (c in r)
                    if (((p = r[c]), (h = n[c]), r.hasOwnProperty(c) && p !== h && (null != p || null != h)))
                      switch (c) {
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                          if (null != p) throw Error(i(137, t));
                          break;
                        default:
                          Qc(e, t, c, p, r, h);
                      }
                  return;
                default:
                  if (Ct(t)) {
                    for (var g in n) ((p = n[g]), n.hasOwnProperty(g) && void 0 !== p && !r.hasOwnProperty(g) && Jc(e, t, g, void 0, r, p));
                    for (f in r) ((p = r[f]), (h = n[f]), !r.hasOwnProperty(f) || p === h || (void 0 === p && void 0 === h) || Jc(e, t, f, p, r, h));
                    return;
                  }
              }
              for (var v in n) ((p = n[v]), n.hasOwnProperty(v) && null != p && !r.hasOwnProperty(v) && Qc(e, t, v, null, r, p));
              for (d in r) ((p = r[d]), (h = n[d]), !r.hasOwnProperty(d) || p === h || (null == p && null == h) || Qc(e, t, d, p, r, h));
            })(r, e.type, n, t),
              (r[Ne] = t));
          } catch (t) {
            sc(e, e.return, t);
          }
        }
        function pu(e) {
          return 5 === e.tag || 3 === e.tag || 26 === e.tag || (27 === e.tag && pf(e.type)) || 4 === e.tag;
        }
        function hu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || pu(e.return)) return null;
              e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
              if (27 === e.tag && pf(e.type)) continue e;
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              ((e.child.return = e), (e = e.child));
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function mu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            ((e = e.stateNode),
              t
                ? (9 === n.nodeType ? n.body : 'HTML' === n.nodeName ? n.ownerDocument.body : n).insertBefore(e, t)
                : ((t = 9 === n.nodeType ? n.body : 'HTML' === n.nodeName ? n.ownerDocument.body : n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Xc)));
          else if (4 !== r && (27 === r && pf(e.type) && ((n = e.stateNode), (t = null)), null !== (e = e.child)))
            for (mu(e, t, n), e = e.sibling; null !== e; ) (mu(e, t, n), (e = e.sibling));
        }
        function yu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
          else if (4 !== r && (27 === r && pf(e.type) && (n = e.stateNode), null !== (e = e.child)))
            for (yu(e, t, n), e = e.sibling; null !== e; ) (yu(e, t, n), (e = e.sibling));
        }
        function gu(e) {
          var t = e.stateNode,
            n = e.memoizedProps;
          try {
            for (var r = e.type, o = t.attributes; o.length; ) t.removeAttributeNode(o[0]);
            (Zc(t, r, n), (t[Ae] = e), (t[Ne] = n));
          } catch (t) {
            sc(e, e.return, t);
          }
        }
        var vu = !1,
          bu = !1,
          wu = !1,
          Su = 'function' == typeof WeakSet ? WeakSet : Set,
          Eu = null;
        function ku(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              (ju(e, n), 4 & r && au(5, n));
              break;
            case 1:
              if ((ju(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (e) {
                    sc(n, n.return, e);
                  }
                else {
                  var o = ml(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
                  } catch (e) {
                    sc(n, n.return, e);
                  }
                }
              (64 & r && lu(n), 512 & r && su(n, n.return));
              break;
            case 3:
              if ((ju(e, n), 64 & r && null !== (e = n.updateQueue))) {
                if (((t = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      t = n.child.stateNode;
                  }
                try {
                  da(e, t);
                } catch (e) {
                  sc(n, n.return, e);
                }
              }
              break;
            case 27:
              null === t && 4 & r && gu(n);
            case 26:
            case 5:
              (ju(e, n), null === t && 4 & r && fu(n), 512 & r && su(n, n.return));
              break;
            case 12:
              ju(e, n);
              break;
            case 13:
              (ju(e, n),
                4 & r && Ou(e, n),
                64 & r &&
                  null !== (e = n.memoizedState) &&
                  null !== (e = e.dehydrated) &&
                  (function (e, t) {
                    var n = e.ownerDocument;
                    if ('$?' !== e.data || 'complete' === n.readyState) t();
                    else {
                      var r = function () {
                        (t(), n.removeEventListener('DOMContentLoaded', r));
                      };
                      (n.addEventListener('DOMContentLoaded', r), (e._reactRetry = r));
                    }
                  })(e, (n = pc.bind(null, n))));
              break;
            case 22:
              if (!(r = null !== n.memoizedState || vu)) {
                ((t = (null !== t && null !== t.memoizedState) || bu), (o = vu));
                var a = bu;
                ((vu = r), (bu = t) && !a ? Iu(e, n, !!(8772 & n.subtreeFlags)) : ju(e, n), (vu = o), (bu = a));
              }
              break;
            case 30:
              break;
            default:
              ju(e, n);
          }
        }
        function xu(e) {
          var t = e.alternate;
          (null !== t && ((e.alternate = null), xu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && Fe(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
        }
        var Cu = null,
          Ru = !1;
        function Pu(e, t, n) {
          for (n = n.child; null !== n; ) (Tu(e, t, n), (n = n.sibling));
        }
        function Tu(e, t, n) {
          if (ce && 'function' == typeof ce.onCommitFiberUnmount)
            try {
              ce.onCommitFiberUnmount(se, n);
            } catch (e) {}
          switch (n.tag) {
            case 26:
              (bu || cu(n, t), Pu(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n));
              break;
            case 27:
              bu || cu(n, t);
              var r = Cu,
                o = Ru;
              (pf(n.type) && ((Cu = n.stateNode), (Ru = !1)), Pu(e, t, n), Sf(n.stateNode), (Cu = r), (Ru = o));
              break;
            case 5:
              bu || cu(n, t);
            case 6:
              if (((r = Cu), (o = Ru), (Cu = null), Pu(e, t, n), (Ru = o), null !== (Cu = r)))
                if (Ru)
                  try {
                    (9 === Cu.nodeType ? Cu.body : 'HTML' === Cu.nodeName ? Cu.ownerDocument.body : Cu).removeChild(n.stateNode);
                  } catch (e) {
                    sc(n, t, e);
                  }
                else
                  try {
                    Cu.removeChild(n.stateNode);
                  } catch (e) {
                    sc(n, t, e);
                  }
              break;
            case 18:
              null !== Cu &&
                (Ru
                  ? (hf(9 === (e = Cu).nodeType ? e.body : 'HTML' === e.nodeName ? e.ownerDocument.body : e, n.stateNode), Cd(e))
                  : hf(Cu, n.stateNode));
              break;
            case 4:
              ((r = Cu), (o = Ru), (Cu = n.stateNode.containerInfo), (Ru = !0), Pu(e, t, n), (Cu = r), (Ru = o));
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              (bu || iu(2, n, t), bu || iu(4, n, t), Pu(e, t, n));
              break;
            case 1:
              (bu || (cu(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount && uu(n, t, r)), Pu(e, t, n));
              break;
            case 21:
              Pu(e, t, n);
              break;
            case 22:
              ((bu = (r = bu) || null !== n.memoizedState), Pu(e, t, n), (bu = r));
              break;
            default:
              Pu(e, t, n);
          }
        }
        function Ou(e, t) {
          if (null === t.memoizedState && null !== (e = t.alternate) && null !== (e = e.memoizedState) && null !== (e = e.dehydrated))
            try {
              Cd(e);
            } catch (e) {
              sc(t, t.return, e);
            }
        }
        function _u(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 13:
              case 19:
                var t = e.stateNode;
                return (null === t && (t = e.stateNode = new Su()), t);
              case 22:
                return (null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new Su()), t);
              default:
                throw Error(i(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            var r = hc.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
        }
        function Au(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r],
                a = e,
                l = t,
                u = l;
              e: for (; null !== u; ) {
                switch (u.tag) {
                  case 27:
                    if (pf(u.type)) {
                      ((Cu = u.stateNode), (Ru = !1));
                      break e;
                    }
                    break;
                  case 5:
                    ((Cu = u.stateNode), (Ru = !1));
                    break e;
                  case 3:
                  case 4:
                    ((Cu = u.stateNode.containerInfo), (Ru = !0));
                    break e;
                }
                u = u.return;
              }
              if (null === Cu) throw Error(i(160));
              (Tu(a, l, o), (Cu = null), (Ru = !1), null !== (a = o.alternate) && (a.return = null), (o.return = null));
            }
          if (13878 & t.subtreeFlags) for (t = t.child; null !== t; ) (Lu(t, e), (t = t.sibling));
        }
        var Nu = null;
        function Lu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              (Au(t, e), Du(e), 4 & r && (iu(3, e, e.return), au(3, e), iu(5, e, e.return)));
              break;
            case 1:
              (Au(t, e),
                Du(e),
                512 & r && (bu || null === n || cu(n, n.return)),
                64 & r &&
                  vu &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
              break;
            case 26:
              var o = Nu;
              if ((Au(t, e), Du(e), 512 & r && (bu || null === n || cu(n, n.return)), 4 & r)) {
                var a = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        ((r = e.type), (n = e.memoizedProps), (o = o.ownerDocument || o));
                        t: switch (r) {
                          case 'title':
                            ((!(a = o.getElementsByTagName('title')[0]) ||
                              a[Ie] ||
                              a[Ae] ||
                              'http://www.w3.org/2000/svg' === a.namespaceURI ||
                              a.hasAttribute('itemprop')) &&
                              ((a = o.createElement(r)), o.head.insertBefore(a, o.querySelector('head > title'))),
                              Zc(a, r, n),
                              (a[Ae] = e),
                              He(a),
                              (r = a));
                            break e;
                          case 'link':
                            var l = Ff('link', 'href', o).get(r + (n.href || ''));
                            if (l)
                              for (var u = 0; u < l.length; u++)
                                if (
                                  (a = l[u]).getAttribute('href') === (null == n.href || '' === n.href ? null : n.href) &&
                                  a.getAttribute('rel') === (null == n.rel ? null : n.rel) &&
                                  a.getAttribute('title') === (null == n.title ? null : n.title) &&
                                  a.getAttribute('crossorigin') === (null == n.crossOrigin ? null : n.crossOrigin)
                                ) {
                                  l.splice(u, 1);
                                  break t;
                                }
                            (Zc((a = o.createElement(r)), r, n), o.head.appendChild(a));
                            break;
                          case 'meta':
                            if ((l = Ff('meta', 'content', o).get(r + (n.content || ''))))
                              for (u = 0; u < l.length; u++)
                                if (
                                  (a = l[u]).getAttribute('content') === (null == n.content ? null : '' + n.content) &&
                                  a.getAttribute('name') === (null == n.name ? null : n.name) &&
                                  a.getAttribute('property') === (null == n.property ? null : n.property) &&
                                  a.getAttribute('http-equiv') === (null == n.httpEquiv ? null : n.httpEquiv) &&
                                  a.getAttribute('charset') === (null == n.charSet ? null : n.charSet)
                                ) {
                                  l.splice(u, 1);
                                  break t;
                                }
                            (Zc((a = o.createElement(r)), r, n), o.head.appendChild(a));
                            break;
                          default:
                            throw Error(i(468, r));
                        }
                        ((a[Ae] = e), He(a), (r = a));
                      }
                      e.stateNode = r;
                    } else Bf(o, e.type, e.stateNode);
                  else e.stateNode = Df(o, r, e.memoizedProps);
                else
                  a !== r
                    ? (null === a ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : a.count--,
                      null === r ? Bf(o, e.type, e.stateNode) : Df(o, r, e.memoizedProps))
                    : null === r && null !== e.stateNode && du(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              (Au(t, e), Du(e), 512 & r && (bu || null === n || cu(n, n.return)), null !== n && 4 & r && du(e, e.memoizedProps, n.memoizedProps));
              break;
            case 5:
              if ((Au(t, e), Du(e), 512 & r && (bu || null === n || cu(n, n.return)), 32 & e.flags)) {
                o = e.stateNode;
                try {
                  St(o, '');
                } catch (t) {
                  sc(e, e.return, t);
                }
              }
              (4 & r && null != e.stateNode && du(e, (o = e.memoizedProps), null !== n ? n.memoizedProps : o), 1024 & r && (wu = !0));
              break;
            case 6:
              if ((Au(t, e), Du(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                ((r = e.memoizedProps), (n = e.stateNode));
                try {
                  n.nodeValue = r;
                } catch (t) {
                  sc(e, e.return, t);
                }
              }
              break;
            case 3:
              if (((If = null), (o = Nu), (Nu = xf(t.containerInfo)), Au(t, e), (Nu = o), Du(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                  Cd(t.containerInfo);
                } catch (t) {
                  sc(e, e.return, t);
                }
              wu && ((wu = !1), zu(e));
              break;
            case 4:
              ((r = Nu), (Nu = xf(e.stateNode.containerInfo)), Au(t, e), Du(e), (Nu = r));
              break;
            case 12:
            default:
              (Au(t, e), Du(e));
              break;
            case 13:
              (Au(t, e),
                Du(e),
                8192 & e.child.flags && (null !== e.memoizedState) != (null !== n && null !== n.memoizedState) && (ws = ee()),
                4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), _u(e, r)));
              break;
            case 22:
              o = null !== e.memoizedState;
              var s = null !== n && null !== n.memoizedState,
                c = vu,
                f = bu;
              if (((vu = c || o), (bu = f || s), Au(t, e), (bu = f), (vu = c), Du(e), 8192 & r))
                e: for (
                  t = e.stateNode,
                    t._visibility = o ? -2 & t._visibility : 1 | t._visibility,
                    o && (null === n || s || vu || bu || Mu(e)),
                    n = null,
                    t = e;
                  ;

                ) {
                  if (5 === t.tag || 26 === t.tag) {
                    if (null === n) {
                      s = n = t;
                      try {
                        if (((a = s.stateNode), o))
                          'function' == typeof (l = a.style).setProperty ? l.setProperty('display', 'none', 'important') : (l.display = 'none');
                        else {
                          u = s.stateNode;
                          var d = s.memoizedProps.style,
                            p = null != d && d.hasOwnProperty('display') ? d.display : null;
                          u.style.display = null == p || 'boolean' == typeof p ? '' : ('' + p).trim();
                        }
                      } catch (e) {
                        sc(s, s.return, e);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      s = t;
                      try {
                        s.stateNode.nodeValue = o ? '' : s.memoizedProps;
                      } catch (e) {
                        sc(s, s.return, e);
                      }
                    }
                  } else if (((22 !== t.tag && 23 !== t.tag) || null === t.memoizedState || t === e) && null !== t.child) {
                    ((t.child.return = t), (t = t.child));
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    (n === t && (n = null), (t = t.return));
                  }
                  (n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling));
                }
              4 & r && null !== (r = e.updateQueue) && null !== (n = r.retryQueue) && ((r.retryQueue = null), _u(e, n));
              break;
            case 19:
              (Au(t, e), Du(e), 4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), _u(e, r)));
            case 30:
            case 21:
          }
        }
        function Du(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              for (var n, r = e.return; null !== r; ) {
                if (pu(r)) {
                  n = r;
                  break;
                }
                r = r.return;
              }
              if (null == n) throw Error(i(160));
              switch (n.tag) {
                case 27:
                  var o = n.stateNode;
                  yu(e, hu(e), o);
                  break;
                case 5:
                  var a = n.stateNode;
                  (32 & n.flags && (St(a, ''), (n.flags &= -33)), yu(e, hu(e), a));
                  break;
                case 3:
                case 4:
                  var l = n.stateNode.containerInfo;
                  mu(e, hu(e), l);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (t) {
              sc(e, e.return, t);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function zu(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              (zu(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), (e = e.sibling));
            }
        }
        function ju(e, t) {
          if (8772 & t.subtreeFlags) for (t = t.child; null !== t; ) (ku(e, t.alternate, t), (t = t.sibling));
        }
        function Mu(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                (iu(4, t, t.return), Mu(t));
                break;
              case 1:
                cu(t, t.return);
                var n = t.stateNode;
                ('function' == typeof n.componentWillUnmount && uu(t, t.return, n), Mu(t));
                break;
              case 27:
                Sf(t.stateNode);
              case 26:
              case 5:
                (cu(t, t.return), Mu(t));
                break;
              case 22:
                null === t.memoizedState && Mu(t);
                break;
              default:
                Mu(t);
            }
            e = e.sibling;
          }
        }
        function Iu(e, t, n) {
          for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t; ) {
            var r = t.alternate,
              o = e,
              a = t,
              i = a.flags;
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                (Iu(o, a, n), au(4, a));
                break;
              case 1:
                if ((Iu(o, a, n), 'function' == typeof (o = (r = a).stateNode).componentDidMount))
                  try {
                    o.componentDidMount();
                  } catch (e) {
                    sc(r, r.return, e);
                  }
                if (null !== (o = (r = a).updateQueue)) {
                  var l = r.stateNode;
                  try {
                    var u = o.shared.hiddenCallbacks;
                    if (null !== u) for (o.shared.hiddenCallbacks = null, o = 0; o < u.length; o++) fa(u[o], l);
                  } catch (e) {
                    sc(r, r.return, e);
                  }
                }
                (n && 64 & i && lu(a), su(a, a.return));
                break;
              case 27:
                gu(a);
              case 26:
              case 5:
                (Iu(o, a, n), n && null === r && 4 & i && fu(a), su(a, a.return));
                break;
              case 12:
                Iu(o, a, n);
                break;
              case 13:
                (Iu(o, a, n), n && 4 & i && Ou(o, a));
                break;
              case 22:
                (null === a.memoizedState && Iu(o, a, n), su(a, a.return));
                break;
              case 30:
                break;
              default:
                Iu(o, a, n);
            }
            t = t.sibling;
          }
        }
        function Fu(e, t) {
          var n = null;
          (null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Do(n)));
        }
        function Bu(e, t) {
          ((e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Do(e)));
        }
        function Uu(e, t, n, r) {
          if (10256 & t.subtreeFlags) for (t = t.child; null !== t; ) (Wu(e, t, n, r), (t = t.sibling));
        }
        function Wu(e, t, n, r) {
          var o = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              (Uu(e, t, n, r), 2048 & o && au(9, t));
              break;
            case 1:
            case 13:
            default:
              Uu(e, t, n, r);
              break;
            case 3:
              (Uu(e, t, n, r),
                2048 & o &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Do(e))));
              break;
            case 12:
              if (2048 & o) {
                (Uu(e, t, n, r), (e = t.stateNode));
                try {
                  var a = t.memoizedProps,
                    i = a.id,
                    l = a.onPostCommit;
                  'function' == typeof l && l(i, null === t.alternate ? 'mount' : 'update', e.passiveEffectDuration, -0);
                } catch (e) {
                  sc(t, t.return, e);
                }
              } else Uu(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              ((a = t.stateNode),
                (i = t.alternate),
                null !== t.memoizedState
                  ? 2 & a._visibility
                    ? Uu(e, t, n, r)
                    : Hu(e, t)
                  : 2 & a._visibility
                    ? Uu(e, t, n, r)
                    : ((a._visibility |= 2), $u(e, t, n, r, !!(10256 & t.subtreeFlags))),
                2048 & o && Fu(i, t));
              break;
            case 24:
              (Uu(e, t, n, r), 2048 & o && Bu(t.alternate, t));
          }
        }
        function $u(e, t, n, r, o) {
          for (o = o && !!(10256 & t.subtreeFlags), t = t.child; null !== t; ) {
            var a = e,
              i = t,
              l = n,
              u = r,
              s = i.flags;
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                ($u(a, i, l, u, o), au(8, i));
                break;
              case 23:
                break;
              case 22:
                var c = i.stateNode;
                (null !== i.memoizedState ? (2 & c._visibility ? $u(a, i, l, u, o) : Hu(a, i)) : ((c._visibility |= 2), $u(a, i, l, u, o)),
                  o && 2048 & s && Fu(i.alternate, i));
                break;
              case 24:
                ($u(a, i, l, u, o), o && 2048 & s && Bu(i.alternate, i));
                break;
              default:
                $u(a, i, l, u, o);
            }
            t = t.sibling;
          }
        }
        function Hu(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                o = r.flags;
              switch (r.tag) {
                case 22:
                  (Hu(n, r), 2048 & o && Fu(r.alternate, r));
                  break;
                case 24:
                  (Hu(n, r), 2048 & o && Bu(r.alternate, r));
                  break;
                default:
                  Hu(n, r);
              }
              t = t.sibling;
            }
        }
        var qu = 8192;
        function Vu(e) {
          if (e.subtreeFlags & qu) for (e = e.child; null !== e; ) (Gu(e), (e = e.sibling));
        }
        function Gu(e) {
          switch (e.tag) {
            case 26:
              (Vu(e),
                e.flags & qu &&
                  null !== e.memoizedState &&
                  (function (e, t, n) {
                    if (null === Wf) throw Error(i(475));
                    var r = Wf;
                    if (!('stylesheet' !== t.type || ('string' == typeof n.media && !1 === matchMedia(n.media).matches) || 4 & t.state.loading)) {
                      if (null === t.instance) {
                        var o = Of(n.href),
                          a = e.querySelector(_f(o));
                        if (a)
                          return (
                            null !== (e = a._p) && 'object' == typeof e && 'function' == typeof e.then && (r.count++, (r = Hf.bind(r)), e.then(r, r)),
                            (t.state.loading |= 4),
                            (t.instance = a),
                            void He(a)
                          );
                        ((a = e.ownerDocument || e), (n = Af(n)), (o = Ef.get(o)) && jf(n, o), He((a = a.createElement('link'))));
                        var l = a;
                        ((l._p = new Promise(function (e, t) {
                          ((l.onload = e), (l.onerror = t));
                        })),
                          Zc(a, 'link', n),
                          (t.instance = a));
                      }
                      (null === r.stylesheets && (r.stylesheets = new Map()),
                        r.stylesheets.set(t, e),
                        (e = t.state.preload) &&
                          !(3 & t.state.loading) &&
                          (r.count++, (t = Hf.bind(r)), e.addEventListener('load', t), e.addEventListener('error', t)));
                    }
                  })(Nu, e.memoizedState, e.memoizedProps));
              break;
            case 5:
            default:
              Vu(e);
              break;
            case 3:
            case 4:
              var t = Nu;
              ((Nu = xf(e.stateNode.containerInfo)), Vu(e), (Nu = t));
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (t = e.alternate) && null !== t.memoizedState ? ((t = qu), (qu = 16777216), Vu(e), (qu = t)) : Vu(e));
          }
        }
        function Yu(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              ((t = e.sibling), (e.sibling = null), (e = t));
            } while (null !== e);
          }
        }
        function Ku(e) {
          var t = e.deletions;
          if (16 & e.flags) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                ((Eu = r), Ju(r, e));
              }
            Yu(e);
          }
          if (10256 & e.subtreeFlags) for (e = e.child; null !== e; ) (Xu(e), (e = e.sibling));
        }
        function Xu(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              (Ku(e), 2048 & e.flags && iu(9, e, e.return));
              break;
            case 3:
            case 12:
            default:
              Ku(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag) ? ((t._visibility &= -3), Qu(e)) : Ku(e);
          }
        }
        function Qu(e) {
          var t = e.deletions;
          if (16 & e.flags) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                ((Eu = r), Ju(r, e));
              }
            Yu(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                (iu(8, t, t.return), Qu(t));
                break;
              case 22:
                2 & (n = t.stateNode)._visibility && ((n._visibility &= -3), Qu(t));
                break;
              default:
                Qu(t);
            }
            e = e.sibling;
          }
        }
        function Ju(e, t) {
          for (; null !== Eu; ) {
            var n = Eu;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                iu(8, n, t);
                break;
              case 23:
              case 22:
                if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Do(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) ((r.return = n), (Eu = r));
            else
              e: for (n = e; null !== Eu; ) {
                var o = (r = Eu).sibling,
                  a = r.return;
                if ((xu(r), r === n)) {
                  Eu = null;
                  break e;
                }
                if (null !== o) {
                  ((o.return = a), (Eu = o));
                  break e;
                }
                Eu = a;
              }
          }
        }
        var Zu = {
            getCacheForType: function (e) {
              var t = Ro(No),
                n = t.data.get(e);
              return (void 0 === n && ((n = e()), t.data.set(e, n)), n);
            },
          },
          es = 'function' == typeof WeakMap ? WeakMap : Map,
          ts = 0,
          ns = null,
          rs = null,
          os = 0,
          as = 0,
          is = null,
          ls = !1,
          us = !1,
          ss = !1,
          cs = 0,
          fs = 0,
          ds = 0,
          ps = 0,
          hs = 0,
          ms = 0,
          ys = 0,
          gs = null,
          vs = null,
          bs = !1,
          ws = 0,
          Ss = 1 / 0,
          Es = null,
          ks = null,
          xs = 0,
          Cs = null,
          Rs = null,
          Ps = 0,
          Ts = 0,
          Os = null,
          _s = null,
          As = 0,
          Ns = null;
        function Ls() {
          return 2 & ts && 0 !== os ? os & -os : null !== L.T ? (0 !== Mo ? Mo : Tc()) : Oe();
        }
        function Ds() {
          0 === ms && (ms = 536870912 & os && !oo ? 536870912 : Se());
          var e = rl.current;
          return (null !== e && (e.flags |= 32), ms);
        }
        function zs(e, t, n) {
          (((e !== ns || (2 !== as && 9 !== as)) && null === e.cancelPendingCommit) || (Ws(e, 0), Fs(e, os, ms, !1)),
            xe(e, n),
            (2 & ts && e === ns) || (e === ns && (!(2 & ts) && (ps |= n), 4 === fs && Fs(e, os, ms, !1)), Sc(e)));
        }
        function js(e, t, n) {
          if (6 & ts) throw Error(i(327));
          for (
            var r = (!n && !(124 & t) && 0 === (t & e.expiredLanes)) || be(e, t),
              o = r
                ? (function (e, t) {
                    var n = ts;
                    ts |= 2;
                    var r = Hs(),
                      o = qs();
                    ns !== e || os !== t ? ((Es = null), (Ss = ee() + 500), Ws(e, t)) : (us = be(e, t));
                    e: for (;;)
                      try {
                        if (0 !== as && null !== rs) {
                          t = rs;
                          var a = is;
                          t: switch (as) {
                            case 1:
                              ((as = 0), (is = null), Js(e, t, a, 1));
                              break;
                            case 2:
                            case 9:
                              if (Ko(a)) {
                                ((as = 0), (is = null), Qs(t));
                                break;
                              }
                              ((t = function () {
                                ((2 !== as && 9 !== as) || ns !== e || (as = 7), Sc(e));
                              }),
                                a.then(t, t));
                              break e;
                            case 3:
                              as = 7;
                              break e;
                            case 4:
                              as = 5;
                              break e;
                            case 7:
                              Ko(a) ? ((as = 0), (is = null), Qs(t)) : ((as = 0), (is = null), Js(e, t, a, 7));
                              break;
                            case 5:
                              var l = null;
                              switch (rs.tag) {
                                case 26:
                                  l = rs.memoizedState;
                                case 5:
                                case 27:
                                  var u = rs;
                                  if (!l || Uf(l)) {
                                    ((as = 0), (is = null));
                                    var s = u.sibling;
                                    if (null !== s) rs = s;
                                    else {
                                      var c = u.return;
                                      null !== c ? ((rs = c), Zs(c)) : (rs = null);
                                    }
                                    break t;
                                  }
                              }
                              ((as = 0), (is = null), Js(e, t, a, 5));
                              break;
                            case 6:
                              ((as = 0), (is = null), Js(e, t, a, 6));
                              break;
                            case 8:
                              (Us(), (fs = 6));
                              break e;
                            default:
                              throw Error(i(462));
                          }
                        }
                        Ks();
                        break;
                      } catch (t) {
                        $s(e, t);
                      }
                    return ((vo = go = null), (L.H = r), (L.A = o), (ts = n), null !== rs ? 0 : ((ns = null), (os = 0), Pr(), fs));
                  })(e, t)
                : Gs(e, t, !0),
              a = r;
            ;

          ) {
            if (0 === o) {
              us && !r && Fs(e, t, 0, !1);
              break;
            }
            if (((n = e.current.alternate), !a || Is(n))) {
              if (2 === o) {
                if (((a = t), e.errorRecoveryDisabledLanes & a)) var l = 0;
                else l = 0 != (l = -536870913 & e.pendingLanes) ? l : 536870912 & l ? 536870912 : 0;
                if (0 !== l) {
                  t = l;
                  e: {
                    var u = e;
                    o = gs;
                    var s = u.current.memoizedState.isDehydrated;
                    if ((s && (Ws(u, l).flags |= 256), 2 !== (l = Gs(u, l, !1)))) {
                      if (ss && !s) {
                        ((u.errorRecoveryDisabledLanes |= a), (ps |= a), (o = 4));
                        break e;
                      }
                      ((a = vs), (vs = o), null !== a && (null === vs ? (vs = a) : vs.push.apply(vs, a)));
                    }
                    o = l;
                  }
                  if (((a = !1), 2 !== o)) continue;
                }
              }
              if (1 === o) {
                (Ws(e, 0), Fs(e, t, 0, !0));
                break;
              }
              e: {
                switch (((r = e), (a = o))) {
                  case 0:
                  case 1:
                    throw Error(i(345));
                  case 4:
                    if ((4194048 & t) !== t) break;
                  case 6:
                    Fs(r, t, ms, !ls);
                    break e;
                  case 2:
                    vs = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(i(329));
                }
                if ((62914560 & t) === t && 10 < (o = ws + 300 - ee())) {
                  if ((Fs(r, t, ms, !ls), 0 !== ve(r, 0, !0))) break e;
                  r.timeoutHandle = uf(Ms.bind(null, r, n, vs, Es, bs, t, ms, ps, ys, ls, a, 2, -0, 0), o);
                } else Ms(r, n, vs, Es, bs, t, ms, ps, ys, ls, a, 0, -0, 0);
              }
              break;
            }
            ((o = Gs(e, t, !1)), (a = !1));
          }
          Sc(e);
        }
        function Ms(e, t, n, r, o, a, l, u, s, c, f, d, p, h) {
          if (
            ((e.timeoutHandle = -1),
            (8192 & (d = t.subtreeFlags) || !(16785408 & ~d)) &&
              ((Wf = { stylesheets: null, count: 0, unsuspend: $f }),
              Gu(t),
              null !==
                (d = (function () {
                  if (null === Wf) throw Error(i(475));
                  var e = Wf;
                  return (
                    e.stylesheets && 0 === e.count && Vf(e, e.stylesheets),
                    0 < e.count
                      ? function (t) {
                          var n = setTimeout(function () {
                            if ((e.stylesheets && Vf(e, e.stylesheets), e.unsuspend)) {
                              var t = e.unsuspend;
                              ((e.unsuspend = null), t());
                            }
                          }, 6e4);
                          return (
                            (e.unsuspend = t),
                            function () {
                              ((e.unsuspend = null), clearTimeout(n));
                            }
                          );
                        }
                      : null
                  );
                })())))
          )
            return ((e.cancelPendingCommit = d(tc.bind(null, e, t, a, n, r, o, l, u, s, f, 1, p, h))), void Fs(e, a, l, !c));
          tc(e, t, a, n, r, o, l, u, s);
        }
        function Is(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && null !== (n = t.updateQueue) && null !== (n = n.stores))
              for (var r = 0; r < n.length; r++) {
                var o = n[r],
                  a = o.getSnapshot;
                o = o.value;
                try {
                  if (!Yn(a(), o)) return !1;
                } catch (e) {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) ((n.return = t), (t = n));
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              ((t.sibling.return = t.return), (t = t.sibling));
            }
          }
          return !0;
        }
        function Fs(e, t, n, r) {
          ((t &= ~hs), (t &= ~ps), (e.suspendedLanes |= t), (e.pingedLanes &= ~t), r && (e.warmLanes |= t), (r = e.expirationTimes));
          for (var o = t; 0 < o; ) {
            var a = 31 - de(o),
              i = 1 << a;
            ((r[a] = -1), (o &= ~i));
          }
          0 !== n && Ce(e, n, t);
        }
        function Bs() {
          return !!(6 & ts) || (Ec(0, !1), !1);
        }
        function Us() {
          if (null !== rs) {
            if (0 === as) var e = rs.return;
            else ((vo = go = null), Ma((e = rs)), (Yi = null), (Ki = 0), (e = rs));
            for (; null !== e; ) (ou(e.alternate, e), (e = e.return));
            rs = null;
          }
        }
        function Ws(e, t) {
          var n = e.timeoutHandle;
          (-1 !== n && ((e.timeoutHandle = -1), sf(n)),
            null !== (n = e.cancelPendingCommit) && ((e.cancelPendingCommit = null), n()),
            Us(),
            (ns = e),
            (rs = n = Mr(e.current, null)),
            (os = t),
            (as = 0),
            (is = null),
            (ls = !1),
            (us = be(e, t)),
            (ss = !1),
            (ys = ms = hs = ps = ds = fs = 0),
            (vs = gs = null),
            (bs = !1),
            8 & t && (t |= 32 & t));
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var o = 31 - de(r),
                a = 1 << o;
              ((t |= e[o]), (r &= ~a));
            }
          return ((cs = t), Pr(), n);
        }
        function $s(e, t) {
          ((ba = null),
            (L.H = Hi),
            t === qo || t === Go
              ? ((t = Zo()), (as = 3))
              : t === Vo
                ? ((t = Zo()), (as = 4))
                : (as = t === Cl ? 8 : null !== t && 'object' == typeof t && 'function' == typeof t.then ? 6 : 1),
            (is = t),
            null === rs && ((fs = 1), wl(e, kr(t, e.current))));
        }
        function Hs() {
          var e = L.H;
          return ((L.H = Hi), null === e ? Hi : e);
        }
        function qs() {
          var e = L.A;
          return ((L.A = Zu), e);
        }
        function Vs() {
          ((fs = 4),
            ls || ((4194048 & os) !== os && null !== rl.current) || (us = !0),
            (!(134217727 & ds) && !(134217727 & ps)) || null === ns || Fs(ns, os, ms, !1));
        }
        function Gs(e, t, n) {
          var r = ts;
          ts |= 2;
          var o = Hs(),
            a = qs();
          ((ns === e && os === t) || ((Es = null), Ws(e, t)), (t = !1));
          var i = fs;
          e: for (;;)
            try {
              if (0 !== as && null !== rs) {
                var l = rs,
                  u = is;
                switch (as) {
                  case 8:
                    (Us(), (i = 6));
                    break e;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                    null === rl.current && (t = !0);
                    var s = as;
                    if (((as = 0), (is = null), Js(e, l, u, s), n && us)) {
                      i = 0;
                      break e;
                    }
                    break;
                  default:
                    ((s = as), (as = 0), (is = null), Js(e, l, u, s));
                }
              }
              (Ys(), (i = fs));
              break;
            } catch (t) {
              $s(e, t);
            }
          return (t && e.shellSuspendCounter++, (vo = go = null), (ts = r), (L.H = o), (L.A = a), null === rs && ((ns = null), (os = 0), Pr()), i);
        }
        function Ys() {
          for (; null !== rs; ) Xs(rs);
        }
        function Ks() {
          for (; null !== rs && !J(); ) Xs(rs);
        }
        function Xs(e) {
          var t = Xl(e.alternate, e, cs);
          ((e.memoizedProps = e.pendingProps), null === t ? Zs(e) : (rs = t));
        }
        function Qs(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = zl(n, t, t.pendingProps, t.type, void 0, os);
              break;
            case 11:
              t = zl(n, t, t.pendingProps, t.type.render, t.ref, os);
              break;
            case 5:
              Ma(t);
            default:
              (ou(n, t), (t = Xl(n, (t = rs = Ir(t, cs)), cs)));
          }
          ((e.memoizedProps = e.pendingProps), null === t ? Zs(e) : (rs = t));
        }
        function Js(e, t, n, r) {
          ((vo = go = null), Ma(t), (Yi = null), (Ki = 0));
          var o = t.return;
          try {
            if (
              (function (e, t, n, r, o) {
                if (((n.flags |= 32768), null !== r && 'object' == typeof r && 'function' == typeof r.then)) {
                  if ((null !== (t = n.alternate) && ko(t, n, o, !0), null !== (n = rl.current))) {
                    switch (n.tag) {
                      case 13:
                        return (
                          null === ol ? Vs() : null === n.alternate && 0 === fs && (fs = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = o),
                          r === Yo ? (n.flags |= 16384) : (null === (t = n.updateQueue) ? (n.updateQueue = new Set([r])) : t.add(r), cc(e, r, o)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === Yo
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r]),
                                  }),
                                  (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                  ? (t.retryQueue = new Set([r]))
                                  : n.add(r),
                              cc(e, r, o)),
                          !1
                        );
                    }
                    throw Error(i(435, n.tag));
                  }
                  return (cc(e, r, o), Vs(), !1);
                }
                if (oo)
                  return (
                    null !== (t = rl.current)
                      ? (!(65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = o),
                        r !== lo && mo(kr((e = Error(i(422), { cause: r })), n)))
                      : (r !== lo && mo(kr((t = Error(i(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (o &= -o),
                        (e.lanes |= o),
                        (r = kr(r, n)),
                        la(e, (o = El(e.stateNode, r, o))),
                        4 !== fs && (fs = 2)),
                    !1
                  );
                var a = Error(i(520), { cause: r });
                if (((a = kr(a, n)), null === gs ? (gs = [a]) : gs.push(a), 4 !== fs && (fs = 2), null === t)) return !0;
                ((r = kr(r, n)), (n = t));
                do {
                  switch (n.tag) {
                    case 3:
                      return ((n.flags |= 65536), (e = o & -o), (n.lanes |= e), la(n, (e = El(n.stateNode, r, e))), !1);
                    case 1:
                      if (
                        ((t = n.type),
                        (a = n.stateNode),
                        !(
                          128 & n.flags ||
                          ('function' != typeof t.getDerivedStateFromError &&
                            (null === a || 'function' != typeof a.componentDidCatch || (null !== ks && ks.has(a))))
                        ))
                      )
                        return ((n.flags |= 65536), (o &= -o), (n.lanes |= o), xl((o = kl(o)), e, n, r), la(n, o), !1);
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, o, t, n, os)
            )
              return ((fs = 1), wl(e, kr(n, e.current)), void (rs = null));
          } catch (t) {
            if (null !== o) throw ((rs = o), t);
            return ((fs = 1), wl(e, kr(n, e.current)), void (rs = null));
          }
          32768 & t.flags
            ? (oo || 1 === r
                ? (e = !0)
                : us || 536870912 & os
                  ? (e = !1)
                  : ((ls = e = !0), (2 === r || 9 === r || 3 === r || 6 === r) && null !== (r = rl.current) && 13 === r.tag && (r.flags |= 16384)),
              ec(t, e))
            : Zs(t);
        }
        function Zs(e) {
          var t = e;
          do {
            if (32768 & t.flags) return void ec(t, ls);
            e = t.return;
            var n = nu(t.alternate, t, cs);
            if (null !== n) return void (rs = n);
            if (null !== (t = t.sibling)) return void (rs = t);
            rs = t = e;
          } while (null !== t);
          0 === fs && (fs = 5);
        }
        function ec(e, t) {
          do {
            var n = ru(e.alternate, e);
            if (null !== n) return ((n.flags &= 32767), void (rs = n));
            if ((null !== (n = e.return) && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)), !t && null !== (e = e.sibling)))
              return void (rs = e);
            rs = e = n;
          } while (null !== e);
          ((fs = 6), (rs = null));
        }
        function tc(e, t, n, r, o, a, l, u, s) {
          e.cancelPendingCommit = null;
          do {
            ic();
          } while (0 !== xs);
          if (6 & ts) throw Error(i(327));
          if (null !== t) {
            if (t === e.current) throw Error(i(177));
            if (
              ((a = t.lanes | t.childLanes),
              (function (e, t, n, r, o, a) {
                var i = e.pendingLanes;
                ((e.pendingLanes = n),
                  (e.suspendedLanes = 0),
                  (e.pingedLanes = 0),
                  (e.warmLanes = 0),
                  (e.expiredLanes &= n),
                  (e.entangledLanes &= n),
                  (e.errorRecoveryDisabledLanes &= n),
                  (e.shellSuspendCounter = 0));
                var l = e.entanglements,
                  u = e.expirationTimes,
                  s = e.hiddenUpdates;
                for (n = i & ~n; 0 < n; ) {
                  var c = 31 - de(n),
                    f = 1 << c;
                  ((l[c] = 0), (u[c] = -1));
                  var d = s[c];
                  if (null !== d)
                    for (s[c] = null, c = 0; c < d.length; c++) {
                      var p = d[c];
                      null !== p && (p.lane &= -536870913);
                    }
                  n &= ~f;
                }
                (0 !== r && Ce(e, r, 0), 0 !== a && 0 === o && 0 !== e.tag && (e.suspendedLanes |= a & ~(i & ~t)));
              })(e, n, (a |= Rr), l, u, s),
              e === ns && ((rs = ns = null), (os = 0)),
              (Rs = t),
              (Cs = e),
              (Ps = n),
              (Ts = a),
              (Os = o),
              (_s = r),
              10256 & t.subtreeFlags || 10256 & t.flags
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  X(oe, function () {
                    return (lc(), null);
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
              (r = !!(13878 & t.flags)),
              13878 & t.subtreeFlags || r)
            ) {
              ((r = L.T), (L.T = null), (o = D.p), (D.p = 2), (l = ts), (ts |= 4));
              try {
                !(function (e, t) {
                  if (((e = e.containerInfo), (ef = ed), er((e = Zn(e))))) {
                    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                      e: {
                        var r = (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection && n.getSelection();
                        if (r && 0 !== r.rangeCount) {
                          n = r.anchorNode;
                          var o = r.anchorOffset,
                            a = r.focusNode;
                          r = r.focusOffset;
                          try {
                            (n.nodeType, a.nodeType);
                          } catch (e) {
                            n = null;
                            break e;
                          }
                          var l = 0,
                            u = -1,
                            s = -1,
                            c = 0,
                            f = 0,
                            d = e,
                            p = null;
                          t: for (;;) {
                            for (
                              var h;
                              d !== n || (0 !== o && 3 !== d.nodeType) || (u = l + o),
                                d !== a || (0 !== r && 3 !== d.nodeType) || (s = l + r),
                                3 === d.nodeType && (l += d.nodeValue.length),
                                null !== (h = d.firstChild);

                            )
                              ((p = d), (d = h));
                            for (;;) {
                              if (d === e) break t;
                              if ((p === n && ++c === o && (u = l), p === a && ++f === r && (s = l), null !== (h = d.nextSibling))) break;
                              p = (d = p).parentNode;
                            }
                            d = h;
                          }
                          n = -1 === u || -1 === s ? null : { start: u, end: s };
                        } else n = null;
                      }
                    n = n || { start: 0, end: 0 };
                  } else n = null;
                  for (tf = { focusedElem: e, selectionRange: n }, ed = !1, Eu = t; null !== Eu; )
                    if (((e = (t = Eu).child), 1024 & t.subtreeFlags && null !== e)) ((e.return = t), (Eu = e));
                    else
                      for (; null !== Eu; ) {
                        switch (((a = (t = Eu).alternate), (e = t.flags), t.tag)) {
                          case 0:
                          case 11:
                          case 15:
                          case 5:
                          case 26:
                          case 27:
                          case 6:
                          case 4:
                          case 17:
                            break;
                          case 1:
                            if (1024 & e && null !== a) {
                              ((e = void 0), (n = t), (o = a.memoizedProps), (a = a.memoizedState), (r = n.stateNode));
                              try {
                                var m = ml(n.type, o, (n.elementType, n.type));
                                ((e = r.getSnapshotBeforeUpdate(m, a)), (r.__reactInternalSnapshotBeforeUpdate = e));
                              } catch (e) {
                                sc(n, n.return, e);
                              }
                            }
                            break;
                          case 3:
                            if (1024 & e)
                              if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) mf(e);
                              else if (1 === n)
                                switch (e.nodeName) {
                                  case 'HEAD':
                                  case 'HTML':
                                  case 'BODY':
                                    mf(e);
                                    break;
                                  default:
                                    e.textContent = '';
                                }
                            break;
                          default:
                            if (1024 & e) throw Error(i(163));
                        }
                        if (null !== (e = t.sibling)) {
                          ((e.return = t.return), (Eu = e));
                          break;
                        }
                        Eu = t.return;
                      }
                })(e, t);
              } finally {
                ((ts = l), (D.p = o), (L.T = r));
              }
            }
            ((xs = 1), nc(), rc(), oc());
          }
        }
        function nc() {
          if (1 === xs) {
            xs = 0;
            var e = Cs,
              t = Rs,
              n = !!(13878 & t.flags);
            if (13878 & t.subtreeFlags || n) {
              ((n = L.T), (L.T = null));
              var r = D.p;
              D.p = 2;
              var o = ts;
              ts |= 4;
              try {
                Lu(t, e);
                var a = tf,
                  i = Zn(e.containerInfo),
                  l = a.focusedElem,
                  u = a.selectionRange;
                if (i !== l && l && l.ownerDocument && Jn(l.ownerDocument.documentElement, l)) {
                  if (null !== u && er(l)) {
                    var s = u.start,
                      c = u.end;
                    if ((void 0 === c && (c = s), 'selectionStart' in l)) ((l.selectionStart = s), (l.selectionEnd = Math.min(c, l.value.length)));
                    else {
                      var f = l.ownerDocument || document,
                        d = (f && f.defaultView) || window;
                      if (d.getSelection) {
                        var p = d.getSelection(),
                          h = l.textContent.length,
                          m = Math.min(u.start, h),
                          y = void 0 === u.end ? m : Math.min(u.end, h);
                        !p.extend && m > y && ((i = y), (y = m), (m = i));
                        var g = Qn(l, m),
                          v = Qn(l, y);
                        if (
                          g &&
                          v &&
                          (1 !== p.rangeCount ||
                            p.anchorNode !== g.node ||
                            p.anchorOffset !== g.offset ||
                            p.focusNode !== v.node ||
                            p.focusOffset !== v.offset)
                        ) {
                          var b = f.createRange();
                          (b.setStart(g.node, g.offset),
                            p.removeAllRanges(),
                            m > y ? (p.addRange(b), p.extend(v.node, v.offset)) : (b.setEnd(v.node, v.offset), p.addRange(b)));
                        }
                      }
                    }
                  }
                  for (f = [], p = l; (p = p.parentNode); )
                    1 === p.nodeType &&
                      f.push({
                        element: p,
                        left: p.scrollLeft,
                        top: p.scrollTop,
                      });
                  for ('function' == typeof l.focus && l.focus(), l = 0; l < f.length; l++) {
                    var w = f[l];
                    ((w.element.scrollLeft = w.left), (w.element.scrollTop = w.top));
                  }
                }
                ((ed = !!ef), (tf = ef = null));
              } finally {
                ((ts = o), (D.p = r), (L.T = n));
              }
            }
            ((e.current = t), (xs = 2));
          }
        }
        function rc() {
          if (2 === xs) {
            xs = 0;
            var e = Cs,
              t = Rs,
              n = !!(8772 & t.flags);
            if (8772 & t.subtreeFlags || n) {
              ((n = L.T), (L.T = null));
              var r = D.p;
              D.p = 2;
              var o = ts;
              ts |= 4;
              try {
                ku(e, t.alternate, t);
              } finally {
                ((ts = o), (D.p = r), (L.T = n));
              }
            }
            xs = 3;
          }
        }
        function oc() {
          if (4 === xs || 3 === xs) {
            ((xs = 0), Z());
            var e = Cs,
              t = Rs,
              n = Ps,
              r = _s;
            10256 & t.subtreeFlags || 10256 & t.flags ? (xs = 5) : ((xs = 0), (Rs = Cs = null), ac(e, e.pendingLanes));
            var o = e.pendingLanes;
            if ((0 === o && (ks = null), Te(n), (t = t.stateNode), ce && 'function' == typeof ce.onCommitFiberRoot))
              try {
                ce.onCommitFiberRoot(se, t, void 0, !(128 & ~t.current.flags));
              } catch (e) {}
            if (null !== r) {
              ((t = L.T), (o = D.p), (D.p = 2), (L.T = null));
              try {
                for (var a = e.onRecoverableError, i = 0; i < r.length; i++) {
                  var l = r[i];
                  a(l.value, { componentStack: l.stack });
                }
              } finally {
                ((L.T = t), (D.p = o));
              }
            }
            (3 & Ps && ic(), Sc(e), (o = e.pendingLanes), 4194090 & n && 42 & o ? (e === Ns ? As++ : ((As = 0), (Ns = e))) : (As = 0), Ec(0, !1));
          }
        }
        function ac(e, t) {
          0 === (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && ((e.pooledCache = null), Do(t));
        }
        function ic(e) {
          return (nc(), rc(), oc(), lc());
        }
        function lc() {
          if (5 !== xs) return !1;
          var e = Cs,
            t = Ts;
          Ts = 0;
          var n = Te(Ps),
            r = L.T,
            o = D.p;
          try {
            ((D.p = 32 > n ? 32 : n), (L.T = null), (n = Os), (Os = null));
            var a = Cs,
              l = Ps;
            if (((xs = 0), (Rs = Cs = null), (Ps = 0), 6 & ts)) throw Error(i(331));
            var u = ts;
            if (((ts |= 4), Xu(a.current), Wu(a, a.current, l, n), (ts = u), Ec(0, !1), ce && 'function' == typeof ce.onPostCommitFiberRoot))
              try {
                ce.onPostCommitFiberRoot(se, a);
              } catch (e) {}
            return !0;
          } finally {
            ((D.p = o), (L.T = r), ac(e, t));
          }
        }
        function uc(e, t, n) {
          ((t = kr(n, t)), null !== (e = aa(e, (t = El(e.stateNode, t, 2)), 2)) && (xe(e, 2), Sc(e)));
        }
        function sc(e, t, n) {
          if (3 === e.tag) uc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                uc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  'function' == typeof t.type.getDerivedStateFromError ||
                  ('function' == typeof r.componentDidCatch && (null === ks || !ks.has(r)))
                ) {
                  ((e = kr(n, e)), null !== (r = aa(t, (n = kl(2)), 2)) && (xl(n, r, t, e), xe(r, 2), Sc(r)));
                  break;
                }
              }
              t = t.return;
            }
        }
        function cc(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new es();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || ((ss = !0), o.add(n), (e = fc.bind(null, e, t, n)), t.then(e, e));
        }
        function fc(e, t, n) {
          var r = e.pingCache;
          (null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            ns === e &&
              (os & n) === n &&
              (4 === fs || (3 === fs && (62914560 & os) === os && 300 > ee() - ws) ? !(2 & ts) && Ws(e, 0) : (hs |= n), ys === os && (ys = 0)),
            Sc(e));
        }
        function dc(e, t) {
          (0 === t && (t = Ee()), null !== (e = _r(e, t)) && (xe(e, t), Sc(e)));
        }
        function pc(e) {
          var t = e.memoizedState,
            n = 0;
          (null !== t && (n = t.retryLane), dc(e, n));
        }
        function hc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(i(314));
          }
          (null !== r && r.delete(t), dc(e, n));
        }
        var mc = null,
          yc = null,
          gc = !1,
          vc = !1,
          bc = !1,
          wc = 0;
        function Sc(e) {
          (e !== yc && null === e.next && (null === yc ? (mc = yc = e) : (yc = yc.next = e)),
            (vc = !0),
            gc ||
              ((gc = !0),
              ff(function () {
                6 & ts ? X(ne, kc) : xc();
              })));
        }
        function Ec(e, t) {
          if (!bc && vc) {
            bc = !0;
            do {
              for (var n = !1, r = mc; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var o = r.pendingLanes;
                    if (0 === o) var a = 0;
                    else {
                      var i = r.suspendedLanes,
                        l = r.pingedLanes;
                      ((a = (1 << (31 - de(42 | e) + 1)) - 1), (a = 201326741 & (a &= o & ~(i & ~l)) ? (201326741 & a) | 1 : a ? 2 | a : 0));
                    }
                    0 !== a && ((n = !0), Pc(r, a));
                  } else
                    ((a = os),
                      !(3 & (a = ve(r, r === ns ? a : 0, null !== r.cancelPendingCommit || -1 !== r.timeoutHandle))) ||
                        be(r, a) ||
                        ((n = !0), Pc(r, a)));
                r = r.next;
              }
            } while (n);
            bc = !1;
          }
        }
        function kc() {
          xc();
        }
        function xc() {
          vc = gc = !1;
          var e,
            t = 0;
          0 !== wc && (((e = window.event) && 'popstate' === e.type ? e !== lf && ((lf = e), !0) : ((lf = null), !1)) && (t = wc), (wc = 0));
          for (var n = ee(), r = null, o = mc; null !== o; ) {
            var a = o.next,
              i = Cc(o, n);
            (0 === i ? ((o.next = null), null === r ? (mc = a) : (r.next = a), null === a && (yc = r)) : ((r = o), (0 !== t || 3 & i) && (vc = !0)),
              (o = a));
          }
          Ec(t, !1);
        }
        function Cc(e, t) {
          for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = -62914561 & e.pendingLanes; 0 < a; ) {
            var i = 31 - de(a),
              l = 1 << i,
              u = o[i];
            (-1 === u ? (0 !== (l & n) && 0 === (l & r)) || (o[i] = we(l, t)) : u <= t && (e.expiredLanes |= l), (a &= ~l));
          }
          if (
            ((n = os),
            (n = ve(e, e === (t = ns) ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)),
            (r = e.callbackNode),
            0 === n || (e === t && (2 === as || 9 === as)) || null !== e.cancelPendingCommit)
          )
            return (null !== r && null !== r && Q(r), (e.callbackNode = null), (e.callbackPriority = 0));
          if (!(3 & n) || be(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && Q(r), Te(n))) {
              case 2:
              case 8:
                n = re;
                break;
              case 32:
              default:
                n = oe;
                break;
              case 268435456:
                n = ie;
            }
            return ((r = Rc.bind(null, e)), (n = X(n, r)), (e.callbackPriority = t), (e.callbackNode = n), t);
          }
          return (null !== r && null !== r && Q(r), (e.callbackPriority = 2), (e.callbackNode = null), 2);
        }
        function Rc(e, t) {
          if (0 !== xs && 5 !== xs) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
          var n = e.callbackNode;
          if (ic() && e.callbackNode !== n) return null;
          var r = os;
          return 0 === (r = ve(e, e === ns ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle))
            ? null
            : (js(e, r, t), Cc(e, ee()), null != e.callbackNode && e.callbackNode === n ? Rc.bind(null, e) : null);
        }
        function Pc(e, t) {
          if (ic()) return null;
          js(e, t, !0);
        }
        function Tc() {
          return (0 === wc && (wc = Se()), wc);
        }
        function Oc(e) {
          return null == e || 'symbol' == typeof e || 'boolean' == typeof e ? null : 'function' == typeof e ? e : Tt('' + e);
        }
        function _c(e, t) {
          var n = t.ownerDocument.createElement('input');
          return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute('form', e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
          );
        }
        for (var Ac = 0; Ac < wr.length; Ac++) {
          var Nc = wr[Ac];
          Sr(Nc.toLowerCase(), 'on' + (Nc[0].toUpperCase() + Nc.slice(1)));
        }
        (Sr(dr, 'onAnimationEnd'),
          Sr(pr, 'onAnimationIteration'),
          Sr(hr, 'onAnimationStart'),
          Sr('dblclick', 'onDoubleClick'),
          Sr('focusin', 'onFocus'),
          Sr('focusout', 'onBlur'),
          Sr(mr, 'onTransitionRun'),
          Sr(yr, 'onTransitionStart'),
          Sr(gr, 'onTransitionCancel'),
          Sr(vr, 'onTransitionEnd'),
          Ye('onMouseEnter', ['mouseout', 'mouseover']),
          Ye('onMouseLeave', ['mouseout', 'mouseover']),
          Ye('onPointerEnter', ['pointerout', 'pointerover']),
          Ye('onPointerLeave', ['pointerout', 'pointerover']),
          Ge('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
          Ge('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
          Ge('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
          Ge('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
          Ge('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
          Ge('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
        var Lc =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' ',
            ),
          Dc = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Lc));
        function zc(e, t) {
          t = !!(4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== a && o.isPropagationStopped())) break e;
                  ((a = l), (o.currentTarget = s));
                  try {
                    a(o);
                  } catch (e) {
                    yl(e);
                  }
                  ((o.currentTarget = null), (a = u));
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (((u = (l = r[i]).instance), (s = l.currentTarget), (l = l.listener), u !== a && o.isPropagationStopped())) break e;
                  ((a = l), (o.currentTarget = s));
                  try {
                    a(o);
                  } catch (e) {
                    yl(e);
                  }
                  ((o.currentTarget = null), (a = u));
                }
            }
          }
        }
        function jc(e, t) {
          var n = t[De];
          void 0 === n && (n = t[De] = new Set());
          var r = e + '__bubble';
          n.has(r) || (Bc(t, e, 2, !1), n.add(r));
        }
        function Mc(e, t, n) {
          var r = 0;
          (t && (r |= 4), Bc(n, e, r, t));
        }
        var Ic = '_reactListening' + Math.random().toString(36).slice(2);
        function Fc(e) {
          if (!e[Ic]) {
            ((e[Ic] = !0),
              qe.forEach(function (t) {
                'selectionchange' !== t && (Dc.has(t) || Mc(t, !1, e), Mc(t, !0, e));
              }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ic] || ((t[Ic] = !0), Mc('selectionchange', !1, t));
          }
        }
        function Bc(e, t, n, r) {
          switch (ld(t)) {
            case 2:
              var o = td;
              break;
            case 8:
              o = nd;
              break;
            default:
              o = rd;
          }
          ((n = o.bind(null, t, n, e)),
            (o = void 0),
            !It || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
                ? e.addEventListener(t, n, { passive: o })
                : e.addEventListener(t, n, !1));
        }
        function Uc(e, t, n, r, o) {
          var a = r;
          if (!(1 & t || 2 & t || null === r))
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var u = r.stateNode.containerInfo;
                if (u === o) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if ((3 === s || 4 === s) && i.stateNode.containerInfo === o) return;
                    i = i.return;
                  }
                for (; null !== u; ) {
                  if (null === (i = Be(u))) return;
                  if (5 === (s = i.tag) || 6 === s || 26 === s || 27 === s) {
                    r = a = i;
                    continue e;
                  }
                  u = u.parentNode;
                }
              }
              r = r.return;
            }
          zt(function () {
            var r = a,
              o = _t(n),
              i = [];
            e: {
              var u = br.get(e);
              if (void 0 !== u) {
                var s = Jt,
                  c = e;
                switch (e) {
                  case 'keypress':
                    if (0 === Ht(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    s = hn;
                    break;
                  case 'focusin':
                    ((c = 'focus'), (s = on));
                    break;
                  case 'focusout':
                    ((c = 'blur'), (s = on));
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    s = on;
                    break;
                  case 'click':
                    if (2 === n.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    s = nn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    s = rn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    s = yn;
                    break;
                  case dr:
                  case pr:
                  case hr:
                    s = an;
                    break;
                  case vr:
                    s = gn;
                    break;
                  case 'scroll':
                  case 'scrollend':
                    s = en;
                    break;
                  case 'wheel':
                    s = vn;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    s = ln;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    s = mn;
                    break;
                  case 'toggle':
                  case 'beforetoggle':
                    s = bn;
                }
                var f = !!(4 & t),
                  d = !f && ('scroll' === e || 'scrollend' === e),
                  p = f ? (null !== u ? u + 'Capture' : null) : u;
                f = [];
                for (var h, m = r; null !== m; ) {
                  var y = m;
                  if (
                    ((h = y.stateNode),
                    (5 !== (y = y.tag) && 26 !== y && 27 !== y) || null === h || null === p || (null != (y = jt(m, p)) && f.push(Wc(m, y, h))),
                    d)
                  )
                    break;
                  m = m.return;
                }
                0 < f.length && ((u = new s(u, c, null, n, o)), i.push({ event: u, listeners: f }));
              }
            }
            if (!(7 & t)) {
              if (
                ((s = 'mouseout' === e || 'pointerout' === e),
                (!(u = 'mouseover' === e || 'pointerover' === e) || n === Ot || !(c = n.relatedTarget || n.fromElement) || (!Be(c) && !c[Le])) &&
                  (s || u) &&
                  ((u = o.window === o ? o : (u = o.ownerDocument) ? u.defaultView || u.parentWindow : window),
                  s
                    ? ((s = r),
                      null !== (c = (c = n.relatedTarget || n.toElement) ? Be(c) : null) &&
                        ((d = l(c)), (f = c.tag), c !== d || (5 !== f && 27 !== f && 6 !== f)) &&
                        (c = null))
                    : ((s = null), (c = r)),
                  s !== c))
              ) {
                if (
                  ((f = nn),
                  (y = 'onMouseLeave'),
                  (p = 'onMouseEnter'),
                  (m = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) || ((f = mn), (y = 'onPointerLeave'), (p = 'onPointerEnter'), (m = 'pointer')),
                  (d = null == s ? u : We(s)),
                  (h = null == c ? u : We(c)),
                  ((u = new f(y, m + 'leave', s, n, o)).target = d),
                  (u.relatedTarget = h),
                  (y = null),
                  Be(o) === r && (((f = new f(p, m + 'enter', c, n, o)).target = h), (f.relatedTarget = d), (y = f)),
                  (d = y),
                  s && c)
                )
                  e: {
                    for (p = c, m = 0, h = f = s; h; h = Hc(h)) m++;
                    for (h = 0, y = p; y; y = Hc(y)) h++;
                    for (; 0 < m - h; ) ((f = Hc(f)), m--);
                    for (; 0 < h - m; ) ((p = Hc(p)), h--);
                    for (; m--; ) {
                      if (f === p || (null !== p && f === p.alternate)) break e;
                      ((f = Hc(f)), (p = Hc(p)));
                    }
                    f = null;
                  }
                else f = null;
                (null !== s && qc(i, u, s, f, !1), null !== c && null !== d && qc(i, d, c, f, !0));
              }
              if ('select' === (s = (u = r ? We(r) : window).nodeName && u.nodeName.toLowerCase()) || ('input' === s && 'file' === u.type))
                var g = Mn;
              else if (An(u))
                if (In) g = Gn;
                else {
                  g = qn;
                  var v = Hn;
                }
              else
                !(s = u.nodeName) || 'input' !== s.toLowerCase() || ('checkbox' !== u.type && 'radio' !== u.type)
                  ? r && Ct(r.elementType) && (g = Mn)
                  : (g = Vn);
              switch (
                (g && (g = g(e, r))
                  ? Nn(i, g, n, o)
                  : (v && v(e, u, r), 'focusout' === e && r && 'number' === u.type && null != r.memoizedProps.value && gt(u, 'number', u.value)),
                (v = r ? We(r) : window),
                e)
              ) {
                case 'focusin':
                  (An(v) || 'true' === v.contentEditable) && ((nr = v), (rr = r), (or = null));
                  break;
                case 'focusout':
                  or = rr = nr = null;
                  break;
                case 'mousedown':
                  ar = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  ((ar = !1), ir(i, n, o));
                  break;
                case 'selectionchange':
                  if (tr) break;
                case 'keydown':
                case 'keyup':
                  ir(i, n, o);
              }
              var b;
              if (Sn)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var w = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      w = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      w = 'onCompositionUpdate';
                      break e;
                  }
                  w = void 0;
                }
              else On ? Pn(e, n) && (w = 'onCompositionEnd') : 'keydown' === e && 229 === n.keyCode && (w = 'onCompositionStart');
              (w &&
                (xn &&
                  'ko' !== n.locale &&
                  (On || 'onCompositionStart' !== w
                    ? 'onCompositionEnd' === w && On && (b = $t())
                    : ((Ut = 'value' in (Bt = o) ? Bt.value : Bt.textContent), (On = !0))),
                0 < (v = $c(r, w)).length &&
                  ((w = new un(w, e, null, n, o)), i.push({ event: w, listeners: v }), (b || null !== (b = Tn(n))) && (w.data = b))),
                (b = kn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Tn(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((Rn = !0), Cn);
                        case 'textInput':
                          return (e = t.data) === Cn && Rn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (On) return 'compositionend' === e || (!Sn && Pn(e, t)) ? ((e = $t()), (Wt = Ut = Bt = null), (On = !1), e) : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return xn && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (w = $c(r, 'onBeforeInput')).length &&
                  ((v = new un('onBeforeInput', 'beforeinput', null, n, o)), i.push({ event: v, listeners: w }), (v.data = b)),
                (function (e, t, n, r, o) {
                  if ('submit' === t && n && n.stateNode === o) {
                    var a = Oc((o[Ne] || null).action),
                      i = r.submitter;
                    i && null !== (t = (t = i[Ne] || null) ? Oc(t.formAction) : i.getAttribute('formAction')) && ((a = t), (i = null));
                    var l = new Jt('action', 'action', null, r, o);
                    e.push({
                      event: l,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== wc) {
                                var e = i ? _c(o, i) : new FormData(o);
                                _i(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: o.method,
                                    action: a,
                                  },
                                  null,
                                  e,
                                );
                              }
                            } else
                              'function' == typeof a &&
                                (l.preventDefault(),
                                (e = i ? _c(o, i) : new FormData(o)),
                                _i(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: o.method,
                                    action: a,
                                  },
                                  a,
                                  e,
                                ));
                          },
                          currentTarget: o,
                        },
                      ],
                    });
                  }
                })(i, e, r, n, o));
            }
            zc(i, t);
          });
        }
        function Wc(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $c(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            if (
              ((5 !== (o = o.tag) && 26 !== o && 27 !== o) ||
                null === a ||
                (null != (o = jt(e, n)) && r.unshift(Wc(e, o, a)), null != (o = jt(e, t)) && r.push(Wc(e, o, a))),
              3 === e.tag)
            )
              return r;
            e = e.return;
          }
          return [];
        }
        function Hc(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function qc(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (((l = l.tag), null !== u && u === r)) break;
            ((5 !== l && 26 !== l && 27 !== l) ||
              null === s ||
              ((u = s), o ? null != (s = jt(n, a)) && i.unshift(Wc(n, s, u)) : o || (null != (s = jt(n, a)) && i.push(Wc(n, s, u)))),
              (n = n.return));
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Vc = /\r\n?/g,
          Gc = /\u0000|\uFFFD/g;
        function Yc(e) {
          return ('string' == typeof e ? e : '' + e).replace(Vc, '\n').replace(Gc, '');
        }
        function Kc(e, t) {
          return ((t = Yc(t)), Yc(e) === t);
        }
        function Xc() {}
        function Qc(e, t, n, r, o, a) {
          switch (n) {
            case 'children':
              'string' == typeof r
                ? 'body' === t || ('textarea' === t && '' === r) || St(e, r)
                : ('number' == typeof r || 'bigint' == typeof r) && 'body' !== t && St(e, '' + r);
              break;
            case 'className':
              tt(e, 'class', r);
              break;
            case 'tabIndex':
              tt(e, 'tabindex', r);
              break;
            case 'dir':
            case 'role':
            case 'viewBox':
            case 'width':
            case 'height':
              tt(e, n, r);
              break;
            case 'style':
              xt(e, r, a);
              break;
            case 'data':
              if ('object' !== t) {
                tt(e, 'data', r);
                break;
              }
            case 'src':
            case 'href':
              if ('' === r && ('a' !== t || 'href' !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (null == r || 'function' == typeof r || 'symbol' == typeof r || 'boolean' == typeof r) {
                e.removeAttribute(n);
                break;
              }
              ((r = Tt('' + r)), e.setAttribute(n, r));
              break;
            case 'action':
            case 'formAction':
              if ('function' == typeof r) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                );
                break;
              }
              if (
                ('function' == typeof a &&
                  ('formAction' === n
                    ? ('input' !== t && Qc(e, t, 'name', o.name, o, null),
                      Qc(e, t, 'formEncType', o.formEncType, o, null),
                      Qc(e, t, 'formMethod', o.formMethod, o, null),
                      Qc(e, t, 'formTarget', o.formTarget, o, null))
                    : (Qc(e, t, 'encType', o.encType, o, null), Qc(e, t, 'method', o.method, o, null), Qc(e, t, 'target', o.target, o, null))),
                null == r || 'symbol' == typeof r || 'boolean' == typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              ((r = Tt('' + r)), e.setAttribute(n, r));
              break;
            case 'onClick':
              null != r && (e.onclick = Xc);
              break;
            case 'onScroll':
              null != r && jc('scroll', e);
              break;
            case 'onScrollEnd':
              null != r && jc('scrollend', e);
              break;
            case 'dangerouslySetInnerHTML':
              if (null != r) {
                if ('object' != typeof r || !('__html' in r)) throw Error(i(61));
                if (null != (n = r.__html)) {
                  if (null != o.children) throw Error(i(60));
                  e.innerHTML = n;
                }
              }
              break;
            case 'multiple':
              e.multiple = r && 'function' != typeof r && 'symbol' != typeof r;
              break;
            case 'muted':
              e.muted = r && 'function' != typeof r && 'symbol' != typeof r;
              break;
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'defaultValue':
            case 'defaultChecked':
            case 'innerHTML':
            case 'ref':
            case 'autoFocus':
              break;
            case 'xlinkHref':
              if (null == r || 'function' == typeof r || 'boolean' == typeof r || 'symbol' == typeof r) {
                e.removeAttribute('xlink:href');
                break;
              }
              ((n = Tt('' + r)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
              break;
            case 'contentEditable':
            case 'spellCheck':
            case 'draggable':
            case 'value':
            case 'autoReverse':
            case 'externalResourcesRequired':
            case 'focusable':
            case 'preserveAlpha':
              null != r && 'function' != typeof r && 'symbol' != typeof r ? e.setAttribute(n, '' + r) : e.removeAttribute(n);
              break;
            case 'inert':
            case 'allowFullScreen':
            case 'async':
            case 'autoPlay':
            case 'controls':
            case 'default':
            case 'defer':
            case 'disabled':
            case 'disablePictureInPicture':
            case 'disableRemotePlayback':
            case 'formNoValidate':
            case 'hidden':
            case 'loop':
            case 'noModule':
            case 'noValidate':
            case 'open':
            case 'playsInline':
            case 'readOnly':
            case 'required':
            case 'reversed':
            case 'scoped':
            case 'seamless':
            case 'itemScope':
              r && 'function' != typeof r && 'symbol' != typeof r ? e.setAttribute(n, '') : e.removeAttribute(n);
              break;
            case 'capture':
            case 'download':
              !0 === r
                ? e.setAttribute(n, '')
                : !1 !== r && null != r && 'function' != typeof r && 'symbol' != typeof r
                  ? e.setAttribute(n, r)
                  : e.removeAttribute(n);
              break;
            case 'cols':
            case 'rows':
            case 'size':
            case 'span':
              null != r && 'function' != typeof r && 'symbol' != typeof r && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
              break;
            case 'rowSpan':
            case 'start':
              null == r || 'function' == typeof r || 'symbol' == typeof r || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
              break;
            case 'popover':
              (jc('beforetoggle', e), jc('toggle', e), et(e, 'popover', r));
              break;
            case 'xlinkActuate':
              nt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', r);
              break;
            case 'xlinkArcrole':
              nt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', r);
              break;
            case 'xlinkRole':
              nt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', r);
              break;
            case 'xlinkShow':
              nt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', r);
              break;
            case 'xlinkTitle':
              nt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', r);
              break;
            case 'xlinkType':
              nt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', r);
              break;
            case 'xmlBase':
              nt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', r);
              break;
            case 'xmlLang':
              nt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', r);
              break;
            case 'xmlSpace':
              nt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', r);
              break;
            case 'is':
              et(e, 'is', r);
              break;
            case 'innerText':
            case 'textContent':
              break;
            default:
              (!(2 < n.length) || ('o' !== n[0] && 'O' !== n[0]) || ('n' !== n[1] && 'N' !== n[1])) && et(e, (n = Rt.get(n) || n), r);
          }
        }
        function Jc(e, t, n, r, o, a) {
          switch (n) {
            case 'style':
              xt(e, r, a);
              break;
            case 'dangerouslySetInnerHTML':
              if (null != r) {
                if ('object' != typeof r || !('__html' in r)) throw Error(i(61));
                if (null != (n = r.__html)) {
                  if (null != o.children) throw Error(i(60));
                  e.innerHTML = n;
                }
              }
              break;
            case 'children':
              'string' == typeof r ? St(e, r) : ('number' == typeof r || 'bigint' == typeof r) && St(e, '' + r);
              break;
            case 'onScroll':
              null != r && jc('scroll', e);
              break;
            case 'onScrollEnd':
              null != r && jc('scrollend', e);
              break;
            case 'onClick':
              null != r && (e.onclick = Xc);
              break;
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'innerHTML':
            case 'ref':
            case 'innerText':
            case 'textContent':
              break;
            default:
              Ve.hasOwnProperty(n) ||
                ('o' !== n[0] ||
                'n' !== n[1] ||
                ((o = n.endsWith('Capture')),
                (t = n.slice(2, o ? n.length - 7 : void 0)),
                'function' == typeof (a = null != (a = e[Ne] || null) ? a[n] : null) && e.removeEventListener(t, a, o),
                'function' != typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                      ? e.setAttribute(n, '')
                      : et(e, n, r)
                  : ('function' != typeof a && null !== a && (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, o)));
          }
        }
        function Zc(e, t, n) {
          switch (t) {
            case 'div':
            case 'span':
            case 'svg':
            case 'path':
            case 'a':
            case 'g':
            case 'p':
            case 'li':
              break;
            case 'img':
              (jc('error', e), jc('load', e));
              var r,
                o = !1,
                a = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var l = n[r];
                  if (null != l)
                    switch (r) {
                      case 'src':
                        o = !0;
                        break;
                      case 'srcSet':
                        a = !0;
                        break;
                      case 'children':
                      case 'dangerouslySetInnerHTML':
                        throw Error(i(137, t));
                      default:
                        Qc(e, t, r, l, n, null);
                    }
                }
              return (a && Qc(e, t, 'srcSet', n.srcSet, n, null), void (o && Qc(e, t, 'src', n.src, n, null)));
            case 'input':
              jc('invalid', e);
              var u = (r = l = a = null),
                s = null,
                c = null;
              for (o in n)
                if (n.hasOwnProperty(o)) {
                  var f = n[o];
                  if (null != f)
                    switch (o) {
                      case 'name':
                        a = f;
                        break;
                      case 'type':
                        l = f;
                        break;
                      case 'checked':
                        s = f;
                        break;
                      case 'defaultChecked':
                        c = f;
                        break;
                      case 'value':
                        r = f;
                        break;
                      case 'defaultValue':
                        u = f;
                        break;
                      case 'children':
                      case 'dangerouslySetInnerHTML':
                        if (null != f) throw Error(i(137, t));
                        break;
                      default:
                        Qc(e, t, o, f, n, null);
                    }
                }
              return (yt(e, r, u, s, c, l, a, !1), void ct(e));
            case 'select':
              for (a in (jc('invalid', e), (o = l = r = null), n))
                if (n.hasOwnProperty(a) && null != (u = n[a]))
                  switch (a) {
                    case 'value':
                      r = u;
                      break;
                    case 'defaultValue':
                      l = u;
                      break;
                    case 'multiple':
                      o = u;
                    default:
                      Qc(e, t, a, u, n, null);
                  }
              return ((t = r), (n = l), (e.multiple = !!o), void (null != t ? vt(e, !!o, t, !1) : null != n && vt(e, !!o, n, !0)));
            case 'textarea':
              for (l in (jc('invalid', e), (r = a = o = null), n))
                if (n.hasOwnProperty(l) && null != (u = n[l]))
                  switch (l) {
                    case 'value':
                      o = u;
                      break;
                    case 'defaultValue':
                      a = u;
                      break;
                    case 'children':
                      r = u;
                      break;
                    case 'dangerouslySetInnerHTML':
                      if (null != u) throw Error(i(91));
                      break;
                    default:
                      Qc(e, t, l, u, n, null);
                  }
              return (wt(e, o, a, r), void ct(e));
            case 'option':
              for (s in n)
                n.hasOwnProperty(s) &&
                  null != (o = n[s]) &&
                  ('selected' === s ? (e.selected = o && 'function' != typeof o && 'symbol' != typeof o) : Qc(e, t, s, o, n, null));
              return;
            case 'dialog':
              (jc('beforetoggle', e), jc('toggle', e), jc('cancel', e), jc('close', e));
              break;
            case 'iframe':
            case 'object':
              jc('load', e);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < Lc.length; o++) jc(Lc[o], e);
              break;
            case 'image':
              (jc('error', e), jc('load', e));
              break;
            case 'details':
              jc('toggle', e);
              break;
            case 'embed':
            case 'source':
            case 'link':
              (jc('error', e), jc('load', e));
            case 'area':
            case 'base':
            case 'br':
            case 'col':
            case 'hr':
            case 'keygen':
            case 'meta':
            case 'param':
            case 'track':
            case 'wbr':
            case 'menuitem':
              for (c in n)
                if (n.hasOwnProperty(c) && null != (o = n[c]))
                  switch (c) {
                    case 'children':
                    case 'dangerouslySetInnerHTML':
                      throw Error(i(137, t));
                    default:
                      Qc(e, t, c, o, n, null);
                  }
              return;
            default:
              if (Ct(t)) {
                for (f in n) n.hasOwnProperty(f) && void 0 !== (o = n[f]) && Jc(e, t, f, o, n, void 0);
                return;
              }
          }
          for (u in n) n.hasOwnProperty(u) && null != (o = n[u]) && Qc(e, t, u, o, n, null);
        }
        var ef = null,
          tf = null;
        function nf(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function rf(e) {
          switch (e) {
            case 'http://www.w3.org/2000/svg':
              return 1;
            case 'http://www.w3.org/1998/Math/MathML':
              return 2;
            default:
              return 0;
          }
        }
        function of(e, t) {
          if (0 === e)
            switch (t) {
              case 'svg':
                return 1;
              case 'math':
                return 2;
              default:
                return 0;
            }
          return 1 === e && 'foreignObject' === t ? 0 : e;
        }
        function af(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' == typeof t.children ||
            'number' == typeof t.children ||
            'bigint' == typeof t.children ||
            ('object' == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var lf = null,
          uf = 'function' == typeof setTimeout ? setTimeout : void 0,
          sf = 'function' == typeof clearTimeout ? clearTimeout : void 0,
          cf = 'function' == typeof Promise ? Promise : void 0,
          ff =
            'function' == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== cf
                ? function (e) {
                    return cf.resolve(null).then(e).catch(df);
                  }
                : uf;
        function df(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function pf(e) {
          return 'head' === e;
        }
        function hf(e, t) {
          var n = t,
            r = 0,
            o = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ('/$' === (n = a.data)) {
                if (0 < r && 8 > r) {
                  n = r;
                  var i = e.ownerDocument;
                  if ((1 & n && Sf(i.documentElement), 2 & n && Sf(i.body), 4 & n))
                    for (Sf((n = i.head)), i = n.firstChild; i; ) {
                      var l = i.nextSibling,
                        u = i.nodeName;
                      (i[Ie] || 'SCRIPT' === u || 'STYLE' === u || ('LINK' === u && 'stylesheet' === i.rel.toLowerCase()) || n.removeChild(i),
                        (i = l));
                    }
                }
                if (0 === o) return (e.removeChild(a), void Cd(t));
                o--;
              } else '$' === n || '$?' === n || '$!' === n ? o++ : (r = n.charCodeAt(0) - 48);
            else r = 0;
            n = a;
          } while (n);
          Cd(t);
        }
        function mf(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case 'HTML':
              case 'HEAD':
              case 'BODY':
                (mf(n), Fe(n));
                continue;
              case 'SCRIPT':
              case 'STYLE':
                continue;
              case 'LINK':
                if ('stylesheet' === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function yf(e) {
          return '$!' === e.data || ('$?' === e.data && 'complete' === e.ownerDocument.readyState);
        }
        function gf(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t || 'F!' === t || 'F' === t) break;
              if ('/$' === t) return null;
            }
          }
          return e;
        }
        var vf = null;
        function bf(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
              } else '/$' === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function wf(e, t, n) {
          switch (((t = nf(n)), e)) {
            case 'html':
              if (!(e = t.documentElement)) throw Error(i(452));
              return e;
            case 'head':
              if (!(e = t.head)) throw Error(i(453));
              return e;
            case 'body':
              if (!(e = t.body)) throw Error(i(454));
              return e;
            default:
              throw Error(i(451));
          }
        }
        function Sf(e) {
          for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
          Fe(e);
        }
        var Ef = new Map(),
          kf = new Set();
        function xf(e) {
          return 'function' == typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument;
        }
        var Cf = D.d;
        D.d = {
          f: function () {
            var e = Cf.f(),
              t = Bs();
            return e || t;
          },
          r: function (e) {
            var t = Ue(e);
            null !== t && 5 === t.tag && 'form' === t.type ? Ni(t) : Cf.r(e);
          },
          D: function (e) {
            (Cf.D(e), Pf('dns-prefetch', e, null));
          },
          C: function (e, t) {
            (Cf.C(e, t), Pf('preconnect', e, t));
          },
          L: function (e, t, n) {
            Cf.L(e, t, n);
            var r = Rf;
            if (r && e && t) {
              var o = 'link[rel="preload"][as="' + ht(t) + '"]';
              'image' === t && n && n.imageSrcSet
                ? ((o += '[imagesrcset="' + ht(n.imageSrcSet) + '"]'),
                  'string' == typeof n.imageSizes && (o += '[imagesizes="' + ht(n.imageSizes) + '"]'))
                : (o += '[href="' + ht(e) + '"]');
              var a = o;
              switch (t) {
                case 'style':
                  a = Of(e);
                  break;
                case 'script':
                  a = Nf(e);
              }
              Ef.has(a) ||
                ((e = f(
                  {
                    rel: 'preload',
                    href: 'image' === t && n && n.imageSrcSet ? void 0 : e,
                    as: t,
                  },
                  n,
                )),
                Ef.set(a, e),
                null !== r.querySelector(o) ||
                  ('style' === t && r.querySelector(_f(a))) ||
                  ('script' === t && r.querySelector(Lf(a))) ||
                  (Zc((t = r.createElement('link')), 'link', e), He(t), r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            Cf.m(e, t);
            var n = Rf;
            if (n && e) {
              var r = t && 'string' == typeof t.as ? t.as : 'script',
                o = 'link[rel="modulepreload"][as="' + ht(r) + '"][href="' + ht(e) + '"]',
                a = o;
              switch (r) {
                case 'audioworklet':
                case 'paintworklet':
                case 'serviceworker':
                case 'sharedworker':
                case 'worker':
                case 'script':
                  a = Nf(e);
              }
              if (!Ef.has(a) && ((e = f({ rel: 'modulepreload', href: e }, t)), Ef.set(a, e), null === n.querySelector(o))) {
                switch (r) {
                  case 'audioworklet':
                  case 'paintworklet':
                  case 'serviceworker':
                  case 'sharedworker':
                  case 'worker':
                  case 'script':
                    if (n.querySelector(Lf(a))) return;
                }
                (Zc((r = n.createElement('link')), 'link', e), He(r), n.head.appendChild(r));
              }
            }
          },
          X: function (e, t) {
            Cf.X(e, t);
            var n = Rf;
            if (n && e) {
              var r = $e(n).hoistableScripts,
                o = Nf(e),
                a = r.get(o);
              a ||
                ((a = n.querySelector(Lf(o))) ||
                  ((e = f({ src: e, async: !0 }, t)),
                  (t = Ef.get(o)) && Mf(e, t),
                  He((a = n.createElement('script'))),
                  Zc(a, 'link', e),
                  n.head.appendChild(a)),
                (a = { type: 'script', instance: a, count: 1, state: null }),
                r.set(o, a));
            }
          },
          S: function (e, t, n) {
            Cf.S(e, t, n);
            var r = Rf;
            if (r && e) {
              var o = $e(r).hoistableStyles,
                a = Of(e);
              t = t || 'default';
              var i = o.get(a);
              if (!i) {
                var l = { loading: 0, preload: null };
                if ((i = r.querySelector(_f(a)))) l.loading = 5;
                else {
                  ((e = f({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)), (n = Ef.get(a)) && jf(e, n));
                  var u = (i = r.createElement('link'));
                  (He(u),
                    Zc(u, 'link', e),
                    (u._p = new Promise(function (e, t) {
                      ((u.onload = e), (u.onerror = t));
                    })),
                    u.addEventListener('load', function () {
                      l.loading |= 1;
                    }),
                    u.addEventListener('error', function () {
                      l.loading |= 2;
                    }),
                    (l.loading |= 4),
                    zf(i, t, r));
                }
                ((i = { type: 'stylesheet', instance: i, count: 1, state: l }), o.set(a, i));
              }
            }
          },
          M: function (e, t) {
            Cf.M(e, t);
            var n = Rf;
            if (n && e) {
              var r = $e(n).hoistableScripts,
                o = Nf(e),
                a = r.get(o);
              a ||
                ((a = n.querySelector(Lf(o))) ||
                  ((e = f({ src: e, async: !0, type: 'module' }, t)),
                  (t = Ef.get(o)) && Mf(e, t),
                  He((a = n.createElement('script'))),
                  Zc(a, 'link', e),
                  n.head.appendChild(a)),
                (a = { type: 'script', instance: a, count: 1, state: null }),
                r.set(o, a));
            }
          },
        };
        var Rf = 'undefined' == typeof document ? null : document;
        function Pf(e, t, n) {
          var r = Rf;
          if (r && 'string' == typeof t && t) {
            var o = ht(t);
            ((o = 'link[rel="' + e + '"][href="' + o + '"]'),
              'string' == typeof n && (o += '[crossorigin="' + n + '"]'),
              kf.has(o) ||
                (kf.add(o),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(o) && (Zc((t = r.createElement('link')), 'link', e), He(t), r.head.appendChild(t))));
          }
        }
        function Tf(e, t, n, r) {
          var o,
            a,
            l,
            u,
            s = (s = $.current) ? xf(s) : null;
          if (!s) throw Error(i(446));
          switch (e) {
            case 'meta':
            case 'title':
              return null;
            case 'style':
              return 'string' == typeof n.precedence && 'string' == typeof n.href
                ? ((t = Of(n.href)),
                  (r = (n = $e(s).hoistableStyles).get(t)) ||
                    ((r = {
                      type: 'style',
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    n.set(t, r)),
                  r)
                : { type: 'void', instance: null, count: 0, state: null };
            case 'link':
              if ('stylesheet' === n.rel && 'string' == typeof n.href && 'string' == typeof n.precedence) {
                e = Of(n.href);
                var c = $e(s).hoistableStyles,
                  f = c.get(e);
                if (
                  (f ||
                    ((s = s.ownerDocument || s),
                    (f = {
                      type: 'stylesheet',
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    c.set(e, f),
                    (c = s.querySelector(_f(e))) && !c._p && ((f.instance = c), (f.state.loading = 5)),
                    Ef.has(e) ||
                      ((n = {
                        rel: 'preload',
                        as: 'style',
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      Ef.set(e, n),
                      c ||
                        ((o = s),
                        (a = e),
                        (l = n),
                        (u = f.state),
                        o.querySelector('link[rel="preload"][as="style"][' + a + ']')
                          ? (u.loading = 1)
                          : ((a = o.createElement('link')),
                            (u.preload = a),
                            a.addEventListener('load', function () {
                              return (u.loading |= 1);
                            }),
                            a.addEventListener('error', function () {
                              return (u.loading |= 2);
                            }),
                            Zc(a, 'link', l),
                            He(a),
                            o.head.appendChild(a))))),
                  t && null === r)
                )
                  throw Error(i(528, ''));
                return f;
              }
              if (t && null !== r) throw Error(i(529, ''));
              return null;
            case 'script':
              return (
                (t = n.async),
                'string' == typeof (n = n.src) && t && 'function' != typeof t && 'symbol' != typeof t
                  ? ((t = Nf(n)),
                    (r = (n = $e(s).hoistableScripts).get(t)) ||
                      ((r = {
                        type: 'script',
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      n.set(t, r)),
                    r)
                  : { type: 'void', instance: null, count: 0, state: null }
              );
            default:
              throw Error(i(444, e));
          }
        }
        function Of(e) {
          return 'href="' + ht(e) + '"';
        }
        function _f(e) {
          return 'link[rel="stylesheet"][' + e + ']';
        }
        function Af(e) {
          return f({}, e, {
            'data-precedence': e.precedence,
            precedence: null,
          });
        }
        function Nf(e) {
          return '[src="' + ht(e) + '"]';
        }
        function Lf(e) {
          return 'script[async]' + e;
        }
        function Df(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case 'style':
                var r = e.querySelector('style[data-href~="' + ht(n.href) + '"]');
                if (r) return ((t.instance = r), He(r), r);
                var o = f({}, n, {
                  'data-href': n.href,
                  'data-precedence': n.precedence,
                  href: null,
                  precedence: null,
                });
                return (He((r = (e.ownerDocument || e).createElement('style'))), Zc(r, 'style', o), zf(r, n.precedence, e), (t.instance = r));
              case 'stylesheet':
                o = Of(n.href);
                var a = e.querySelector(_f(o));
                if (a) return ((t.state.loading |= 4), (t.instance = a), He(a), a);
                ((r = Af(n)), (o = Ef.get(o)) && jf(r, o), He((a = (e.ownerDocument || e).createElement('link'))));
                var l = a;
                return (
                  (l._p = new Promise(function (e, t) {
                    ((l.onload = e), (l.onerror = t));
                  })),
                  Zc(a, 'link', r),
                  (t.state.loading |= 4),
                  zf(a, n.precedence, e),
                  (t.instance = a)
                );
              case 'script':
                return (
                  (a = Nf(n.src)),
                  (o = e.querySelector(Lf(a)))
                    ? ((t.instance = o), He(o), o)
                    : ((r = n),
                      (o = Ef.get(a)) && Mf((r = f({}, n)), o),
                      He((o = (e = e.ownerDocument || e).createElement('script'))),
                      Zc(o, 'link', r),
                      e.head.appendChild(o),
                      (t.instance = o))
                );
              case 'void':
                return null;
              default:
                throw Error(i(443, t.type));
            }
          else 'stylesheet' === t.type && !(4 & t.state.loading) && ((r = t.instance), (t.state.loading |= 4), zf(r, n.precedence, e));
          return t.instance;
        }
        function zf(e, t, n) {
          for (
            var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
              o = r.length ? r[r.length - 1] : null,
              a = o,
              i = 0;
            i < r.length;
            i++
          ) {
            var l = r[i];
            if (l.dataset.precedence === t) a = l;
            else if (a !== o) break;
          }
          a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function jf(e, t) {
          (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title));
        }
        function Mf(e, t) {
          (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity));
        }
        var If = null;
        function Ff(e, t, n) {
          if (null === If) {
            var r = new Map(),
              o = (If = new Map());
            o.set(n, r);
          } else (r = (o = If).get(n)) || ((r = new Map()), o.set(n, r));
          if (r.has(e)) return r;
          for (r.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
            var a = n[o];
            if (!(a[Ie] || a[Ae] || ('link' === e && 'stylesheet' === a.getAttribute('rel'))) && 'http://www.w3.org/2000/svg' !== a.namespaceURI) {
              var i = a.getAttribute(t) || '';
              i = e + i;
              var l = r.get(i);
              l ? l.push(a) : r.set(i, [a]);
            }
          }
          return r;
        }
        function Bf(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(n, 'title' === t ? e.querySelector('head > title') : null);
        }
        function Uf(e) {
          return !!('stylesheet' !== e.type || 3 & e.state.loading);
        }
        var Wf = null;
        function $f() {}
        function Hf() {
          if ((this.count--, 0 === this.count))
            if (this.stylesheets) Vf(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              ((this.unsuspend = null), e());
            }
        }
        var qf = null;
        function Vf(e, t) {
          ((e.stylesheets = null), null !== e.unsuspend && (e.count++, (qf = new Map()), t.forEach(Gf, e), (qf = null), Hf.call(e)));
        }
        function Gf(e, t) {
          if (!(4 & t.state.loading)) {
            var n = qf.get(e);
            if (n) var r = n.get(null);
            else {
              ((n = new Map()), qf.set(e, n));
              for (var o = e.querySelectorAll('link[data-precedence],style[data-precedence]'), a = 0; a < o.length; a++) {
                var i = o[a];
                ('LINK' !== i.nodeName && 'not all' === i.getAttribute('media')) || (n.set(i.dataset.precedence, i), (r = i));
              }
              r && n.set(null, r);
            }
            ((i = (o = t.instance).getAttribute('data-precedence')),
              (a = n.get(i) || r) === r && n.set(null, o),
              n.set(i, o),
              this.count++,
              (r = Hf.bind(this)),
              o.addEventListener('load', r),
              o.addEventListener('error', r),
              a ? a.parentNode.insertBefore(o, a.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(o, e.firstChild),
              (t.state.loading |= 4));
          }
        }
        var Yf = {
          $$typeof: w,
          Provider: null,
          Consumer: null,
          _currentValue: z,
          _currentValue2: z,
          _threadCount: 0,
        };
        function Kf(e, t, n, r, o, a, i, l) {
          ((this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
            (this.callbackPriority = 0),
            (this.expirationTimes = ke(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = ke(0)),
            (this.hiddenUpdates = ke(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = o),
            (this.onCaughtError = a),
            (this.onRecoverableError = i),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = l),
            (this.incompleteTransitions = new Map()));
        }
        function Xf(e, t, n, r, o, a) {
          ((o = (function (e) {
            return e ? (e = Lr) : Lr;
          })(o)),
            null === r.context ? (r.context = o) : (r.pendingContext = o),
            ((r = oa(t)).payload = { element: n }),
            null !== (a = void 0 === a ? null : a) && (r.callback = a),
            null !== (n = aa(e, r, t)) && (zs(n, 0, t), ia(n, e, t)));
        }
        function Qf(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Jf(e, t) {
          (Qf(e, t), (e = e.alternate) && Qf(e, t));
        }
        function Zf(e) {
          if (13 === e.tag) {
            var t = _r(e, 67108864);
            (null !== t && zs(t, 0, 67108864), Jf(e, 67108864));
          }
        }
        var ed = !0;
        function td(e, t, n, r) {
          var o = L.T;
          L.T = null;
          var a = D.p;
          try {
            ((D.p = 2), rd(e, t, n, r));
          } finally {
            ((D.p = a), (L.T = o));
          }
        }
        function nd(e, t, n, r) {
          var o = L.T;
          L.T = null;
          var a = D.p;
          try {
            ((D.p = 8), rd(e, t, n, r));
          } finally {
            ((D.p = a), (L.T = o));
          }
        }
        function rd(e, t, n, r) {
          if (ed) {
            var o = od(r);
            if (null === o) (Uc(e, t, r, ad, n), yd(e, r));
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case 'focusin':
                    return ((sd = gd(sd, e, t, n, r, o)), !0);
                  case 'dragenter':
                    return ((cd = gd(cd, e, t, n, r, o)), !0);
                  case 'mouseover':
                    return ((fd = gd(fd, e, t, n, r, o)), !0);
                  case 'pointerover':
                    var a = o.pointerId;
                    return (dd.set(a, gd(dd.get(a) || null, e, t, n, r, o)), !0);
                  case 'gotpointercapture':
                    return ((a = o.pointerId), pd.set(a, gd(pd.get(a) || null, e, t, n, r, o)), !0);
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((yd(e, r), 4 & t && -1 < md.indexOf(e))) {
              for (; null !== o; ) {
                var a = Ue(o);
                if (null !== a)
                  switch (a.tag) {
                    case 3:
                      if ((a = a.stateNode).current.memoizedState.isDehydrated) {
                        var i = ge(a.pendingLanes);
                        if (0 !== i) {
                          var l = a;
                          for (l.pendingLanes |= 2, l.entangledLanes |= 2; i; ) {
                            var u = 1 << (31 - de(i));
                            ((l.entanglements[1] |= u), (i &= ~u));
                          }
                          (Sc(a), !(6 & ts) && ((Ss = ee() + 500), Ec(0, !1)));
                        }
                      }
                      break;
                    case 13:
                      (null !== (l = _r(a, 2)) && zs(l, 0, 2), Bs(), Jf(a, 2));
                  }
                if ((null === (a = od(r)) && Uc(e, t, r, ad, n), a === o)) break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else Uc(e, t, r, null, n);
          }
        }
        function od(e) {
          return id((e = _t(e)));
        }
        var ad = null;
        function id(e) {
          if (((ad = null), null !== (e = Be(e)))) {
            var t = l(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = u(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return ((ad = e), null);
        }
        function ld(e) {
          switch (e) {
            case 'beforetoggle':
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'toggle':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 2;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 8;
            case 'message':
              switch (te()) {
                case ne:
                  return 2;
                case re:
                  return 8;
                case oe:
                case ae:
                  return 32;
                case ie:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var ud = !1,
          sd = null,
          cd = null,
          fd = null,
          dd = new Map(),
          pd = new Map(),
          hd = [],
          md =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
              ' ',
            );
        function yd(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              sd = null;
              break;
            case 'dragenter':
            case 'dragleave':
              cd = null;
              break;
            case 'mouseover':
            case 'mouseout':
              fd = null;
              break;
            case 'pointerover':
            case 'pointerout':
              dd.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              pd.delete(t.pointerId);
          }
        }
        function gd(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = Ue(t)) && Zf(t),
              e)
            : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== o && -1 === t.indexOf(o) && t.push(o), e);
        }
        function vd(e) {
          var t = Be(e.target);
          if (null !== t) {
            var n = l(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = u(n)))
                  return (
                    (e.blockedOn = t),
                    void (function (e) {
                      var t = D.p;
                      try {
                        return (
                          (D.p = e),
                          (function () {
                            if (13 === n.tag) {
                              var e = Ls();
                              e = Pe(e);
                              var t = _r(n, e);
                              (null !== t && zs(t, 0, e), Jf(n, e));
                            }
                          })()
                        );
                      } finally {
                        D.p = t;
                      }
                    })(e.priority)
                  );
              } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function bd(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = od(e.nativeEvent);
            if (null !== n) return (null !== (t = Ue(n)) && Zf(t), (e.blockedOn = n), !1);
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            ((Ot = r), n.target.dispatchEvent(r), (Ot = null), t.shift());
          }
          return !0;
        }
        function wd(e, t, n) {
          bd(e) && n.delete(t);
        }
        function Sd() {
          ((ud = !1),
            null !== sd && bd(sd) && (sd = null),
            null !== cd && bd(cd) && (cd = null),
            null !== fd && bd(fd) && (fd = null),
            dd.forEach(wd),
            pd.forEach(wd));
        }
        function Ed(e, t) {
          e.blockedOn === t && ((e.blockedOn = null), ud || ((ud = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Sd)));
        }
        var kd = null;
        function xd(e) {
          kd !== e &&
            ((kd = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              kd === e && (kd = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  o = e[t + 2];
                if ('function' != typeof r) {
                  if (null === id(r || n)) continue;
                  break;
                }
                var a = Ue(n);
                null !== a && (e.splice(t, 3), (t -= 3), _i(a, { pending: !0, data: o, method: n.method, action: r }, r, o));
              }
            }));
        }
        function Cd(e) {
          function t(t) {
            return Ed(t, e);
          }
          (null !== sd && Ed(sd, e), null !== cd && Ed(cd, e), null !== fd && Ed(fd, e), dd.forEach(t), pd.forEach(t));
          for (var n = 0; n < hd.length; n++) {
            var r = hd[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < hd.length && null === (n = hd[0]).blockedOn; ) (vd(n), null === n.blockedOn && hd.shift());
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var o = n[r],
                a = n[r + 1],
                i = o[Ne] || null;
              if ('function' == typeof a) i || xd(n);
              else if (i) {
                var l = null;
                if (a && a.hasAttribute('formAction')) {
                  if (((o = a), (i = a[Ne] || null))) l = i.formAction;
                  else if (null !== id(o)) continue;
                } else l = i.action;
                ('function' == typeof l ? (n[r + 1] = l) : (n.splice(r, 3), (r -= 3)), xd(n));
              }
            }
        }
        function Rd(e) {
          this._internalRoot = e;
        }
        function Pd(e) {
          this._internalRoot = e;
        }
        ((Pd.prototype.render = Rd.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Xf(t.current, Ls(), e, t, null, null);
          }),
          (Pd.prototype.unmount = Rd.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (Xf(e.current, 2, null, e, null, null), Bs(), (t[Le] = null));
              }
            }),
          (Pd.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Oe();
              e = { blockedOn: null, target: e, priority: t };
              for (var n = 0; n < hd.length && 0 !== t && t < hd[n].priority; n++);
              (hd.splice(n, 0, e), 0 === n && vd(e));
            }
          }));
        var Td = o.version;
        if ('19.1.0' !== Td) throw Error(i(527, Td, '19.1.0'));
        D.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ('function' == typeof e.render) throw Error(i(188));
            throw ((e = Object.keys(e).join(',')), Error(i(268, e)));
          }
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = l(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var a = o.alternate;
                if (null === a) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === a.child) {
                  for (a = o.child; a; ) {
                    if (a === n) return (s(o), e);
                    if (a === r) return (s(o), t);
                    a = a.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) ((n = o), (r = a));
                else {
                  for (var u = !1, c = o.child; c; ) {
                    if (c === n) {
                      ((u = !0), (n = o), (r = a));
                      break;
                    }
                    if (c === r) {
                      ((u = !0), (r = o), (n = a));
                      break;
                    }
                    c = c.sibling;
                  }
                  if (!u) {
                    for (c = a.child; c; ) {
                      if (c === n) {
                        ((u = !0), (n = a), (r = o));
                        break;
                      }
                      if (c === r) {
                        ((u = !0), (r = a), (n = o));
                        break;
                      }
                      c = c.sibling;
                    }
                    if (!u) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            null === (e = null !== e ? c(e) : null) ? null : e.stateNode
          );
        };
        var Od = {
          bundleType: 0,
          version: '19.1.0',
          rendererPackageName: 'react-dom',
          currentDispatcherRef: L,
          reconcilerVersion: '19.1.0',
        };
        if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var _d = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!_d.isDisabled && _d.supportsFiber)
            try {
              ((se = _d.inject(Od)), (ce = _d));
            } catch (e) {}
        }
        t.createRoot = function (e, t) {
          if (!(n = e) || (1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType)) throw Error(i(299));
          var n,
            r = !1,
            o = '',
            a = gl,
            l = vl,
            u = bl;
          return (
            null != t &&
              (!0 === t.unstable_strictMode && (r = !0),
              void 0 !== t.identifierPrefix && (o = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (a = t.onUncaughtError),
              void 0 !== t.onCaughtError && (l = t.onCaughtError),
              void 0 !== t.onRecoverableError && (u = t.onRecoverableError),
              void 0 !== t.unstable_transitionCallbacks && t.unstable_transitionCallbacks),
            (t = (function (e, t, n, r, o, a, i, l, u, s, c, f) {
              return (
                (e = new Kf(e, t, n, i, l, u, s, f)),
                (t = 1),
                !0 === a && (t |= 24),
                (a = zr(3, null, null, t)),
                (e.current = a),
                (a.stateNode = e),
                (t = Lo()).refCount++,
                (e.pooledCache = t),
                t.refCount++,
                (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
                na(a),
                e
              );
            })(e, 1, !1, null, 0, r, o, a, l, u, 0, null)),
            (e[Le] = t.current),
            Fc(e),
            new Rd(t)
          );
        };
      },
      261: (e, t, n) => {
        t.A = function (e, t) {
          if ('string' == typeof t && !(0, r.isPrefixedValue)(t) && -1 !== t.indexOf('cross-fade('))
            return a.map(function (e) {
              return t.replace(o, e + 'cross-fade(');
            });
        };
        var r = n(486),
          o = /cross-fade\(/g,
          a = ['-webkit-', ''];
      },
      283: (e, t, n) => {
        n.d(t, { A: () => l });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          e.id,
          '.container {\n  padding: 16px;\n  margin: auto;\n  max-width: 1200px;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.title {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.button {\n  background-color: #10b981; /* Verde */\n  color: white;\n  padding: 8px 16px;\n  border-radius: 8px;\n  transition: background-color 0.3s;\n}\n\n.button:hover {\n  background-color: #16a34a; /* Verde oscuro */\n}\n\n.table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.table th,\n.table td {\n  padding: 12px;\n  text-align: left;\n  border: 1px solid #e5e7eb;\n}\n\n.table th {\n  background-color: #f3f4f6; /* Gris claro */\n  font-weight: bold;\n}\n\n.table td button {\n  padding: 6px 12px;\n  border-radius: 8px;\n  transition: background-color 0.3s;\n}\n\n.table td button:hover {\n  opacity: 0.8;\n}\n\n.deleteButton {\n  background-color: #ef4444; /* Rojo */\n  color: white;\n}\n\n.deleteButton:hover {\n  background-color: #dc2626; /* Rojo oscuro */\n}\n\n.associateButton {\n  background-color: #3b82f6; /* Azul */\n  color: white;\n}\n\n.associateButton:hover {\n  background-color: #2563eb; /* Azul oscuro */\n}\n',
          '',
        ]);
        const l = i;
      },
      314: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = '',
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += '@supports ('.concat(t[4], ') {')),
                  t[2] && (n += '@media '.concat(t[2], ' {')),
                  r && (n += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
                  (n += e(t)),
                  r && (n += '}'),
                  t[2] && (n += '}'),
                  t[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (t.i = function (e, n, r, o, a) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var l = 0; l < this.length; l++) {
                  var u = this[l][0];
                  null != u && (i[u] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var c = [].concat(e[s]);
                (r && i[c[0]]) ||
                  (void 0 !== a &&
                    (void 0 === c[5] || (c[1] = '@layer'.concat(c[5].length > 0 ? ' '.concat(c[5]) : '', ' {').concat(c[1], '}')), (c[5] = a)),
                  n && (c[2] ? ((c[1] = '@media '.concat(c[2], ' {').concat(c[1], '}')), (c[2] = n)) : (c[2] = n)),
                  o && (c[4] ? ((c[1] = '@supports ('.concat(c[4], ') {').concat(c[1], '}')), (c[4] = o)) : (c[4] = ''.concat(o))),
                  t.push(c));
              }
            }),
            t
          );
        };
      },
      336: (e, t) => {
        t.n = function (e, t) {
          if (null != e[r]) {
            var a = t ? 1 : 0;
            if (n.has(e)) {
              var i = n.get(e),
                l = i[a];
              return (null == l && ((l = o(e, t)), (i[a] = l), n.set(e, i)), l);
            }
            var u = o(e, t),
              s = new Array(2);
            return ((s[a] = u), n.set(e, s), u);
          }
          return e;
        };
        var n = new WeakMap(),
          r = '$$css$localize';
        function o(e, t) {
          var n = {};
          for (var o in e)
            if (o !== r) {
              var a = e[o];
              Array.isArray(a) ? (n[o] = t ? a[1] : a[0]) : (n[o] = a);
            }
          return n;
        }
      },
      338: (e, t, n) => {
        (!(function e() {
          if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && 'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(247)));
      },
      477: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            ((e[r] = t), (e[n] = o), (n = r));
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                u = e[l],
                s = l + 1,
                c = e[s];
              if (0 > a(u, n)) s < o && 0 > a(c, u) ? ((e[r] = c), (e[s] = n), (r = s)) : ((e[r] = u), (e[l] = n), (r = l));
              else {
                if (!(s < o && 0 > a(c, n))) break e;
                ((e[r] = c), (e[s] = n), (r = s));
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (((t.unstable_now = void 0), 'object' == typeof performance && 'function' == typeof performance.now)) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          y = !1,
          g = !1,
          v = 'function' == typeof setTimeout ? setTimeout : null,
          b = 'function' == typeof clearTimeout ? clearTimeout : null,
          w = 'undefined' != typeof setImmediate ? setImmediate : null;
        function S(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              (o(c), (t.sortIndex = t.expirationTime), n(s, t));
            }
            t = r(c);
          }
        }
        function E(e) {
          if (((y = !1), S(e), !m))
            if (null !== r(s)) ((m = !0), x || ((x = !0), k()));
            else {
              var t = r(c);
              null !== t && N(E, t.startTime - e);
            }
        }
        var k,
          x = !1,
          C = -1,
          R = 5,
          P = -1;
        function T() {
          return !(!g && t.unstable_now() - P < R);
        }
        function O() {
          if (((g = !1), x)) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              e: {
                ((m = !1), y && ((y = !1), b(C), (C = -1)), (h = !0));
                var a = p;
                try {
                  t: {
                    for (S(e), d = r(s); null !== d && !(d.expirationTime > e && T()); ) {
                      var i = d.callback;
                      if ('function' == typeof i) {
                        ((d.callback = null), (p = d.priorityLevel));
                        var l = i(d.expirationTime <= e);
                        if (((e = t.unstable_now()), 'function' == typeof l)) {
                          ((d.callback = l), S(e), (n = !0));
                          break t;
                        }
                        (d === r(s) && o(s), S(e));
                      } else o(s);
                      d = r(s);
                    }
                    if (null !== d) n = !0;
                    else {
                      var u = r(c);
                      (null !== u && N(E, u.startTime - e), (n = !1));
                    }
                  }
                  break e;
                } finally {
                  ((d = null), (p = a), (h = !1));
                }
                n = void 0;
              }
            } finally {
              n ? k() : (x = !1);
            }
          }
        }
        if ('function' == typeof w)
          k = function () {
            w(O);
          };
        else if ('undefined' != typeof MessageChannel) {
          var _ = new MessageChannel(),
            A = _.port2;
          ((_.port1.onmessage = O),
            (k = function () {
              A.postMessage(null);
            }));
        } else
          k = function () {
            v(O, 0);
          };
        function N(e, n) {
          C = v(function () {
            e(t.unstable_now());
          }, n);
        }
        ((t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported')
              : (R = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_requestPaint = function () {
            g = !0;
          }),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (((a = 'object' == typeof a && null !== a && 'number' == typeof (a = a.delay) && 0 < a ? i + a : i), e)) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a), n(c, e), null === r(s) && e === r(c) && (y ? (b(C), (C = -1)) : (y = !0), N(E, a - i)))
                : ((e.sortIndex = l), n(s, e), m || h || ((m = !0), x || ((x = !0), k()))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          }));
      },
      485: (e, t, n) => {
        t.A = function (e) {
          var t = e.prefixMap,
            n = e.plugins;
          return function e(l) {
            for (var u in l) {
              var s = l[u];
              if ((0, i.default)(s)) l[u] = e(s);
              else if (Array.isArray(s)) {
                for (var c = [], f = 0, d = s.length; f < d; ++f) {
                  var p = (0, o.default)(n, u, s[f], l, t);
                  (0, a.default)(c, p || s[f]);
                }
                c.length > 0 && (l[u] = c);
              } else {
                var h = (0, o.default)(n, u, s, l, t);
                (h && (l[u] = h), (l = (0, r.default)(t, u, l)));
              }
            }
            return l;
          };
        };
        var r = l(n(49)),
          o = l(n(971)),
          a = l(n(863)),
          i = l(n(99));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      486: (e, t, n) => {
        function r(e) {
          return (
            (r =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                  }),
            r(e)
          );
        }
        function o(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function a(e) {
          return e.filter(function (t, n) {
            return e.lastIndexOf(t) === n;
          });
        }
        function i(e) {
          for (var t = 0, n = arguments.length <= 1 ? 0 : arguments.length - 1; t < n; ++t) {
            var l = t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1];
            for (var u in l) {
              var s = l[u],
                c = e[u];
              if (c && s) {
                if (Array.isArray(c)) {
                  e[u] = a(c.concat(s));
                  continue;
                }
                if (Array.isArray(s)) {
                  e[u] = a(
                    [c].concat(
                      (function (e) {
                        if (Array.isArray(e)) return o(e);
                      })((f = s)) ||
                        (function (e) {
                          if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                        })(f) ||
                        (function (e, t) {
                          if (e) {
                            if ('string' == typeof e) return o(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return (
                              'Object' === n && e.constructor && (n = e.constructor.name),
                              'Map' === n || 'Set' === n
                                ? Array.from(n)
                                : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                  ? o(e, t)
                                  : void 0
                            );
                          }
                        })(f) ||
                        (function () {
                          throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                          );
                        })(),
                    ),
                  );
                  continue;
                }
                if ('object' === r(s)) {
                  e[u] = i({}, c, s);
                  continue;
                }
              }
              e[u] = s;
            }
          }
          var f;
          return e;
        }
        (n.r(t),
          n.d(t, {
            assignStyle: () => i,
            camelCaseProperty: () => f,
            cssifyDeclaration: () => h,
            cssifyObject: () => m,
            hyphenateProperty: () => p,
            isPrefixedProperty: () => g,
            isPrefixedValue: () => b,
            isUnitlessProperty: () => _,
            normalizeProperty: () => L,
            resolveArrayValue: () => D,
            unprefixProperty: () => N,
            unprefixValue: () => j,
          }));
        var l = /-([a-z])/g,
          u = /^Ms/g,
          s = {};
        function c(e) {
          return e[1].toUpperCase();
        }
        function f(e) {
          if (s.hasOwnProperty(e)) return s[e];
          var t = e.replace(l, c).replace(u, 'ms');
          return ((s[e] = t), t);
        }
        var d = n(685);
        function p(e) {
          return (0, d.default)(e);
        }
        function h(e, t) {
          return p(e) + ':' + t;
        }
        function m(e) {
          var t = '';
          for (var n in e) {
            var r = e[n];
            ('string' != typeof r && 'number' != typeof r) || (t && (t += ';'), (t += h(n, r)));
          }
          return t;
        }
        var y = /^(Webkit|Moz|O|ms)/;
        function g(e) {
          return y.test(e);
        }
        var v = /-webkit-|-moz-|-ms-/;
        function b(e) {
          return 'string' == typeof e && v.test(e);
        }
        var w = {
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          S = [
            'animationIterationCount',
            'boxFlex',
            'boxFlexGroup',
            'boxOrdinalGroup',
            'columnCount',
            'flex',
            'flexGrow',
            'flexPositive',
            'flexShrink',
            'flexNegative',
            'flexOrder',
            'gridColumn',
            'gridColumnEnd',
            'gridColumnStart',
            'gridRow',
            'gridRowEnd',
            'gridRowStart',
            'lineClamp',
            'order',
          ],
          E = ['Webkit', 'ms', 'Moz', 'O'];
        function k(e, t) {
          return e + t.charAt(0).toUpperCase() + t.slice(1);
        }
        for (var x = 0, C = S.length; x < C; ++x) {
          var R = S[x];
          w[R] = !0;
          for (var P = 0, T = E.length; P < T; ++P) w[k(E[P], R)] = !0;
        }
        for (var O in w) w[p(O)] = !0;
        function _(e) {
          return w.hasOwnProperty(e);
        }
        var A = /^(ms|Webkit|Moz|O)/;
        function N(e) {
          var t = e.replace(A, '');
          return t.charAt(0).toLowerCase() + t.slice(1);
        }
        function L(e) {
          return N(f(e));
        }
        function D(e, t) {
          return t.join(';' + p(e) + ':');
        }
        var z = /(-ms-|-webkit-|-moz-|-o-)/g;
        function j(e) {
          return 'string' == typeof e ? e.replace(z, '') : e;
        }
      },
      508: (e, t, n) => {
        t.A = function (e, t, n, i) {
          if ('string' == typeof t && l.hasOwnProperty(e)) {
            var s = (function (e, t) {
                if ((0, o.default)(e)) return e;
                for (var n = e.split(/,(?![^()]*(?:\([^()]*\))?\))/g), a = 0, i = n.length; a < i; ++a) {
                  var l = n[a],
                    s = [l];
                  for (var c in t) {
                    var f = (0, r.default)(c);
                    if (l.indexOf(f) > -1 && 'order' !== f) for (var d = t[c], p = 0, h = d.length; p < h; ++p) s.unshift(l.replace(f, u[d[p]] + f));
                  }
                  n[a] = s.join(',');
                }
                return n.join(',');
              })(t, i),
              c = s
                .split(/,(?![^()]*(?:\([^()]*\))?\))/g)
                .filter(function (e) {
                  return !/-moz-|-ms-/.test(e);
                })
                .join(',');
            if (e.indexOf('Webkit') > -1) return c;
            var f = s
              .split(/,(?![^()]*(?:\([^()]*\))?\))/g)
              .filter(function (e) {
                return !/-webkit-|-ms-/.test(e);
              })
              .join(',');
            return e.indexOf('Moz') > -1 ? f : ((n['Webkit' + (0, a.default)(e)] = c), (n['Moz' + (0, a.default)(e)] = f), s);
          }
        };
        var r = i(n(721)),
          o = i(n(14)),
          a = i(n(91));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var l = {
            transition: !0,
            transitionProperty: !0,
            WebkitTransition: !0,
            WebkitTransitionProperty: !0,
            MozTransition: !0,
            MozTransitionProperty: !0,
          },
          u = { Webkit: '-webkit-', Moz: '-moz-', ms: '-ms-' };
      },
      515: (e) => {
        function t(e, t, n) {
          return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
          );
        }
        function n(e, n, r) {
          const o = r < 0.5 ? r * (1 + n) : r + n - r * n,
            a = 2 * r - o,
            i = t(a, o, e + 1 / 3),
            l = t(a, o, e),
            u = t(a, o, e - 1 / 3);
          return (Math.round(255 * i) << 24) | (Math.round(255 * l) << 16) | (Math.round(255 * u) << 8);
        }
        const r = '[-+]?\\d*\\.?\\d+',
          o = r + '%';
        function a(...e) {
          return '\\(\\s*(' + e.join(')\\s*,?\\s*(') + ')\\s*\\)';
        }
        function i(...e) {
          return '\\(\\s*(' + e.slice(0, e.length - 1).join(')\\s*,?\\s*(') + ')\\s*/\\s*(' + e[e.length - 1] + ')\\s*\\)';
        }
        function l(...e) {
          return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
        }
        let u;
        function s(e) {
          const t = parseInt(e, 10);
          return t < 0 ? 0 : t > 255 ? 255 : t;
        }
        function c(e) {
          return (((parseFloat(e) % 360) + 360) % 360) / 360;
        }
        function f(e) {
          const t = parseFloat(e);
          return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
        }
        function d(e) {
          const t = parseFloat(e);
          return t < 0 ? 0 : t > 100 ? 1 : t / 100;
        }
        e.exports = function (e) {
          if ('number' == typeof e) return e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null;
          if ('string' != typeof e) return null;
          const p =
            (void 0 === u &&
              (u = {
                rgb: new RegExp('rgb' + a(r, r, r)),
                rgba: new RegExp('rgba(' + l(r, r, r, r) + '|' + i(r, r, r, r) + ')'),
                hsl: new RegExp('hsl' + a(r, o, o)),
                hsla: new RegExp('hsla(' + l(r, o, o, r) + '|' + i(r, o, o, r) + ')'),
                hwb: new RegExp('hwb' + a(r, o, o)),
                hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^#([0-9a-fA-F]{6})$/,
                hex8: /^#([0-9a-fA-F]{8})$/,
              }),
            u);
          let h;
          if ((h = p.hex6.exec(e))) return parseInt(h[1] + 'ff', 16) >>> 0;
          const m = (function (e) {
            switch (e) {
              case 'transparent':
                return 0;
              case 'aliceblue':
                return 4042850303;
              case 'antiquewhite':
                return 4209760255;
              case 'aqua':
              case 'cyan':
                return 16777215;
              case 'aquamarine':
                return 2147472639;
              case 'azure':
                return 4043309055;
              case 'beige':
                return 4126530815;
              case 'bisque':
                return 4293182719;
              case 'black':
                return 255;
              case 'blanchedalmond':
                return 4293643775;
              case 'blue':
                return 65535;
              case 'blueviolet':
                return 2318131967;
              case 'brown':
                return 2771004159;
              case 'burlywood':
                return 3736635391;
              case 'burntsienna':
                return 3934150143;
              case 'cadetblue':
                return 1604231423;
              case 'chartreuse':
                return 2147418367;
              case 'chocolate':
                return 3530104575;
              case 'coral':
                return 4286533887;
              case 'cornflowerblue':
                return 1687547391;
              case 'cornsilk':
                return 4294499583;
              case 'crimson':
                return 3692313855;
              case 'darkblue':
                return 35839;
              case 'darkcyan':
                return 9145343;
              case 'darkgoldenrod':
                return 3095792639;
              case 'darkgray':
              case 'darkgrey':
                return 2846468607;
              case 'darkgreen':
                return 6553855;
              case 'darkkhaki':
                return 3182914559;
              case 'darkmagenta':
                return 2332068863;
              case 'darkolivegreen':
                return 1433087999;
              case 'darkorange':
                return 4287365375;
              case 'darkorchid':
                return 2570243327;
              case 'darkred':
                return 2332033279;
              case 'darksalmon':
                return 3918953215;
              case 'darkseagreen':
                return 2411499519;
              case 'darkslateblue':
                return 1211993087;
              case 'darkslategray':
              case 'darkslategrey':
                return 793726975;
              case 'darkturquoise':
                return 13554175;
              case 'darkviolet':
                return 2483082239;
              case 'deeppink':
                return 4279538687;
              case 'deepskyblue':
                return 12582911;
              case 'dimgray':
              case 'dimgrey':
                return 1768516095;
              case 'dodgerblue':
                return 512819199;
              case 'firebrick':
                return 2988581631;
              case 'floralwhite':
                return 4294635775;
              case 'forestgreen':
                return 579543807;
              case 'fuchsia':
              case 'magenta':
                return 4278255615;
              case 'gainsboro':
                return 3705462015;
              case 'ghostwhite':
                return 4177068031;
              case 'gold':
                return 4292280575;
              case 'goldenrod':
                return 3668254975;
              case 'gray':
              case 'grey':
                return 2155905279;
              case 'green':
                return 8388863;
              case 'greenyellow':
                return 2919182335;
              case 'honeydew':
                return 4043305215;
              case 'hotpink':
                return 4285117695;
              case 'indianred':
                return 3445382399;
              case 'indigo':
                return 1258324735;
              case 'ivory':
                return 4294963455;
              case 'khaki':
                return 4041641215;
              case 'lavender':
                return 3873897215;
              case 'lavenderblush':
                return 4293981695;
              case 'lawngreen':
                return 2096890111;
              case 'lemonchiffon':
                return 4294626815;
              case 'lightblue':
                return 2916673279;
              case 'lightcoral':
                return 4034953471;
              case 'lightcyan':
                return 3774873599;
              case 'lightgoldenrodyellow':
                return 4210742015;
              case 'lightgray':
              case 'lightgrey':
                return 3553874943;
              case 'lightgreen':
                return 2431553791;
              case 'lightpink':
                return 4290167295;
              case 'lightsalmon':
                return 4288707327;
              case 'lightseagreen':
                return 548580095;
              case 'lightskyblue':
                return 2278488831;
              case 'lightslategray':
              case 'lightslategrey':
                return 2005441023;
              case 'lightsteelblue':
                return 2965692159;
              case 'lightyellow':
                return 4294959359;
              case 'lime':
                return 16711935;
              case 'limegreen':
                return 852308735;
              case 'linen':
                return 4210091775;
              case 'maroon':
                return 2147483903;
              case 'mediumaquamarine':
                return 1724754687;
              case 'mediumblue':
                return 52735;
              case 'mediumorchid':
                return 3126187007;
              case 'mediumpurple':
                return 2473647103;
              case 'mediumseagreen':
                return 1018393087;
              case 'mediumslateblue':
                return 2070474495;
              case 'mediumspringgreen':
                return 16423679;
              case 'mediumturquoise':
                return 1221709055;
              case 'mediumvioletred':
                return 3340076543;
              case 'midnightblue':
                return 421097727;
              case 'mintcream':
                return 4127193855;
              case 'mistyrose':
                return 4293190143;
              case 'moccasin':
                return 4293178879;
              case 'navajowhite':
                return 4292783615;
              case 'navy':
                return 33023;
              case 'oldlace':
                return 4260751103;
              case 'olive':
                return 2155872511;
              case 'olivedrab':
                return 1804477439;
              case 'orange':
                return 4289003775;
              case 'orangered':
                return 4282712319;
              case 'orchid':
                return 3664828159;
              case 'palegoldenrod':
                return 4008225535;
              case 'palegreen':
                return 2566625535;
              case 'paleturquoise':
                return 2951671551;
              case 'palevioletred':
                return 3681588223;
              case 'papayawhip':
                return 4293907967;
              case 'peachpuff':
                return 4292524543;
              case 'peru':
                return 3448061951;
              case 'pink':
                return 4290825215;
              case 'plum':
                return 3718307327;
              case 'powderblue':
                return 2967529215;
              case 'purple':
                return 2147516671;
              case 'rebeccapurple':
                return 1714657791;
              case 'red':
                return 4278190335;
              case 'rosybrown':
                return 3163525119;
              case 'royalblue':
                return 1097458175;
              case 'saddlebrown':
                return 2336560127;
              case 'salmon':
                return 4202722047;
              case 'sandybrown':
                return 4104413439;
              case 'seagreen':
                return 780883967;
              case 'seashell':
                return 4294307583;
              case 'sienna':
                return 2689740287;
              case 'silver':
                return 3233857791;
              case 'skyblue':
                return 2278484991;
              case 'slateblue':
                return 1784335871;
              case 'slategray':
              case 'slategrey':
                return 1887473919;
              case 'snow':
                return 4294638335;
              case 'springgreen':
                return 16744447;
              case 'steelblue':
                return 1182971135;
              case 'tan':
                return 3535047935;
              case 'teal':
                return 8421631;
              case 'thistle':
                return 3636451583;
              case 'tomato':
                return 4284696575;
              case 'turquoise':
                return 1088475391;
              case 'violet':
                return 4001558271;
              case 'wheat':
                return 4125012991;
              case 'white':
                return 4294967295;
              case 'whitesmoke':
                return 4126537215;
              case 'yellow':
                return 4294902015;
              case 'yellowgreen':
                return 2597139199;
            }
            return null;
          })(e);
          return null != m
            ? m
            : (h = p.rgb.exec(e))
              ? ((s(h[1]) << 24) | (s(h[2]) << 16) | (s(h[3]) << 8) | 255) >>> 0
              : (h = p.rgba.exec(e))
                ? void 0 !== h[6]
                  ? ((s(h[6]) << 24) | (s(h[7]) << 16) | (s(h[8]) << 8) | f(h[9])) >>> 0
                  : ((s(h[2]) << 24) | (s(h[3]) << 16) | (s(h[4]) << 8) | f(h[5])) >>> 0
                : (h = p.hex3.exec(e))
                  ? parseInt(h[1] + h[1] + h[2] + h[2] + h[3] + h[3] + 'ff', 16) >>> 0
                  : (h = p.hex8.exec(e))
                    ? parseInt(h[1], 16) >>> 0
                    : (h = p.hex4.exec(e))
                      ? parseInt(h[1] + h[1] + h[2] + h[2] + h[3] + h[3] + h[4] + h[4], 16) >>> 0
                      : (h = p.hsl.exec(e))
                        ? (255 | n(c(h[1]), d(h[2]), d(h[3]))) >>> 0
                        : (h = p.hsla.exec(e))
                          ? void 0 !== h[6]
                            ? (n(c(h[6]), d(h[7]), d(h[8])) | f(h[9])) >>> 0
                            : (n(c(h[2]), d(h[3]), d(h[4])) | f(h[5])) >>> 0
                          : (h = p.hwb.exec(e))
                            ? (255 |
                                (function (e, n, r) {
                                  if (n + r >= 1) {
                                    const e = Math.round((255 * n) / (n + r));
                                    return (e << 24) | (e << 16) | (e << 8);
                                  }
                                  const o = t(0, 1, e + 1 / 3) * (1 - n - r) + n,
                                    a = t(0, 1, e) * (1 - n - r) + n,
                                    i = t(0, 1, e - 1 / 3) * (1 - n - r) + n;
                                  return (Math.round(255 * o) << 24) | (Math.round(255 * a) << 16) | (Math.round(255 * i) << 8);
                                })(c(h[1]), d(h[2]), d(h[3]))) >>>
                              0
                            : null;
        };
      },
      540: (e, t, n) => {
        e.exports = n(869);
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      621: (e, t, n) => {
        n.d(t, { A: () => l });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          e.id,
          ".container {\n  margin: auto;\n  padding: 10px;\n  background-color: 'transparent';\n}\n\n.title {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.button {\n  width: 100%;\n  padding: 20px;\n  border-radius: 8px;\n  font-size: 1.2rem;\n  color: white;\n  transition: background-color 0.3s ease;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.blue {\n  background-color: #3b82f6;\n}\n\n.green {\n  background-color: #22c55e;\n}\n\n.yellow {\n  background-color: #eab308;\n}\n\n.button:hover {\n  filter: brightness(0.9);\n}\n",
          '',
        ]);
        const l = i;
      },
      629: (e, t, n) => {
        n.d(t, { A: () => l });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          e.id,
          '/* DirectionsDashboard.module.css */\n.container {\n  width: 80vw; /* Siempre ocupa el 80% del ancho del viewport */\n  height: 90vh; /* Ocupa el 90% del alto del viewport */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 1rem;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 1rem;\n}\n\n.title {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n\n.button {\n  background-color: #48bb78;\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  transition: background-color 0.3s ease;\n}\n\n.button:hover {\n  background-color: #38a169;\n}\n\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 1rem;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.table th,\n.table td {\n  border: 1px solid #e2e8f0;\n  padding: 1rem;\n  text-align: left;\n}\n\n.table th {\n  background-color: #f7fafc;\n  font-weight: bold;\n}\n',
          '',
        ]);
        const l = i;
      },
      646: (e) => {
        e.exports = function (e, t) {
          for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
          if (!e) {
            var a;
            if (void 0 === t)
              a = new Error(
                'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
              );
            else {
              var i = 0;
              (a = new Error(
                t.replace(/%s/g, function () {
                  return String(r[i++]);
                }),
              )).name = 'Invariant Violation';
            }
            throw ((a.framesToPop = 1), a);
          }
        };
      },
      659: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          r.appendChild(n);
        };
      },
      685: (e, t, n) => {
        (n.r(t), n.d(t, { default: () => l }));
        var r = /[A-Z]/g,
          o = /^ms-/,
          a = {};
        function i(e) {
          return '-' + e.toLowerCase();
        }
        const l = function (e) {
          if (a.hasOwnProperty(e)) return a[e];
          var t = e.replace(r, i);
          return (a[e] = o.test(t) ? '-' + t : t);
        };
      },
      695: (e, t, n) => {
        n.d(t, { A: () => l });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          e.id,
          "/* Estilos generales del formulario */\n.formContainer {\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 2rem;\n  background-color: 'transparent';\n  border-radius: 8px;\n}\n\n/* Estilo para los inputs */\n.inputField {\n  width: 100%;\n  padding: 0.75rem;\n  margin-bottom: 1rem;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  font-size: 1rem;\n  transition: border-color 0.3s;\n}\n\n.inputField:focus {\n  border-color: #0077ff;\n  outline: none;\n}\n\n/* Botón de login */\n.submitButton {\n  width: 100%;\n  padding: 0.75rem;\n  background-color: #0077ff;\n  color: white;\n  font-size: 1.1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.submitButton:hover {\n  background-color: #005bb5;\n}\n",
          '',
        ]);
        const l = i;
      },
      721: (e, t, n) => {
        (Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e) {
            return (0, o.default)(e);
          }));
        var r,
          o = (r = n(685)) && r.__esModule ? r : { default: r };
      },
      750: (e, t, n) => {
        n.d(t, { A: () => l });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          e.id,
          '/* Navbar.module.css */\n\n.navbar {\n  background-color: #1f2937; /* Color oscuro */\n  padding: 10px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  position: fixed;  /* Fijado en la parte superior */\n  top: 0;           /* En la parte superior */\n  left: 0;          /* Alineado con el borde izquierdo */\n  right: 0;         /* Alineado con el borde derecho */\n  z-index: 1000;    /* Asegura que esté por encima del contenido */\n  max-width: 100vw; /* Garantiza que no se exceda del ancho de la pantalla */\n  box-sizing: border-box; /* Para evitar que el padding haga que se desborde */\n}\n\n\n.logo {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.navLinks {\n  display: flex;\n  gap: 15px;\n}\n\n.navLink {\n  color: white;\n  text-decoration: none;\n  font-size: 1.1rem;\n  transition: color 0.3s;\n}\n\n.navLink:hover {\n  color: #3b82f6;\n}\n',
          '',
        ]);
        const l = i;
      },
      825: (e) => {
        e.exports = function (e) {
          if ('undefined' == typeof document) return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = '';
                (n.supports && (r += '@supports ('.concat(n.supports, ') {')), n.media && (r += '@media '.concat(n.media, ' {')));
                var o = void 0 !== n.layer;
                (o && (r += '@layer'.concat(n.layer.length > 0 ? ' '.concat(n.layer) : '', ' {')),
                  (r += n.css),
                  o && (r += '}'),
                  n.media && (r += '}'),
                  n.supports && (r += '}'));
                var a = n.sourceMap;
                (a &&
                  'undefined' != typeof btoa &&
                  (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), ' */')),
                  t.styleTagTransform(r, e, t.options));
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      852: (e, t, n) => {
        t.A = function (e, t) {
          if ('string' == typeof t && !(0, o.default)(t) && t.indexOf('image-set(') > -1)
            return a.map(function (e) {
              return t.replace(/image-set\(/g, e + 'image-set(');
            });
        };
        var r,
          o = (r = n(14)) && r.__esModule ? r : { default: r },
          a = ['-webkit-', ''];
      },
      863: (e, t) => {
        function n(e, t) {
          -1 === e.indexOf(t) && e.push(t);
        }
        (Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e, t) {
            if (Array.isArray(t)) for (var r = 0, o = t.length; r < o; ++r) n(e, t[r]);
            else n(e, t);
          }));
      },
      869: (e, t) => {
        var n = Symbol.for('react.transitional.element'),
          r = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          a = Symbol.for('react.strict_mode'),
          i = Symbol.for('react.profiler'),
          l = Symbol.for('react.consumer'),
          u = Symbol.for('react.context'),
          s = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          f = Symbol.for('react.memo'),
          d = Symbol.for('react.lazy'),
          p = Symbol.iterator,
          h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          y = {};
        function g(e, t, n) {
          ((this.props = e), (this.context = t), (this.refs = y), (this.updater = n || h));
        }
        function v() {}
        function b(e, t, n) {
          ((this.props = e), (this.context = t), (this.refs = y), (this.updater = n || h));
        }
        ((g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ('object' != typeof e && 'function' != typeof e && null != e)
              throw Error('takes an object of state variables to update or a function which returns an object of state variables.');
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (v.prototype = g.prototype));
        var w = (b.prototype = new v());
        ((w.constructor = b), m(w, g.prototype), (w.isPureReactComponent = !0));
        var S = Array.isArray,
          E = { H: null, A: null, T: null, S: null, V: null },
          k = Object.prototype.hasOwnProperty;
        function x(e, t, r, o, a, i) {
          return (
            (r = i.ref),
            {
              $$typeof: n,
              type: e,
              key: t,
              ref: void 0 !== r ? r : null,
              props: i,
            }
          );
        }
        function C(e) {
          return 'object' == typeof e && null !== e && e.$$typeof === n;
        }
        var R = /\/+/g;
        function P(e, t) {
          return 'object' == typeof e && null !== e && null != e.key
            ? ((n = '' + e.key),
              (r = { '=': '=0', ':': '=2' }),
              '$' +
                n.replace(/[=:]/g, function (e) {
                  return r[e];
                }))
            : t.toString(36);
          var n, r;
        }
        function T() {}
        function O(e, t, o, a, i) {
          var l = typeof e;
          ('undefined' !== l && 'boolean' !== l) || (e = null);
          var u,
            s,
            c = !1;
          if (null === e) c = !0;
          else
            switch (l) {
              case 'bigint':
              case 'string':
              case 'number':
                c = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    c = !0;
                    break;
                  case d:
                    return O((c = e._init)(e._payload), t, o, a, i);
                }
            }
          if (c)
            return (
              (i = i(e)),
              (c = '' === a ? '.' + P(e, 0) : a),
              S(i)
                ? ((o = ''),
                  null != c && (o = c.replace(R, '$&/') + '/'),
                  O(i, t, o, '', function (e) {
                    return e;
                  }))
                : null != i &&
                  (C(i) &&
                    ((u = i),
                    (s = o + (null == i.key || (e && e.key === i.key) ? '' : ('' + i.key).replace(R, '$&/') + '/') + c),
                    (i = x(u.type, s, void 0, 0, 0, u.props))),
                  t.push(i)),
              1
            );
          c = 0;
          var f,
            h = '' === a ? '.' : a + ':';
          if (S(e)) for (var m = 0; m < e.length; m++) c += O((a = e[m]), t, o, (l = h + P(a, m)), i);
          else if (
            'function' ==
            typeof (m = null === (f = e) || 'object' != typeof f ? null : 'function' == typeof (f = (p && f[p]) || f['@@iterator']) ? f : null)
          )
            for (e = m.call(e), m = 0; !(a = e.next()).done; ) c += O((a = a.value), t, o, (l = h + P(a, m++)), i);
          else if ('object' === l) {
            if ('function' == typeof e.then)
              return O(
                (function (e) {
                  switch (e.status) {
                    case 'fulfilled':
                      return e.value;
                    case 'rejected':
                      throw e.reason;
                    default:
                      switch (
                        ('string' == typeof e.status
                          ? e.then(T, T)
                          : ((e.status = 'pending'),
                            e.then(
                              function (t) {
                                'pending' === e.status && ((e.status = 'fulfilled'), (e.value = t));
                              },
                              function (t) {
                                'pending' === e.status && ((e.status = 'rejected'), (e.reason = t));
                              },
                            )),
                        e.status)
                      ) {
                        case 'fulfilled':
                          return e.value;
                        case 'rejected':
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                o,
                a,
                i,
              );
            throw (
              (t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                  '). If you meant to render a collection of children, use an array instead.',
              )
            );
          }
          return c;
        }
        function _(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            O(e, r, '', '', function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function A(e) {
          if (-1 === e._status) {
            var t = e._result;
            ((t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t)));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var N =
          'function' == typeof reportError
            ? reportError
            : function (e) {
                if ('object' == typeof window && 'function' == typeof window.ErrorEvent) {
                  var t = new window.ErrorEvent('error', {
                    bubbles: !0,
                    cancelable: !0,
                    message: 'object' == typeof e && null !== e && 'string' == typeof e.message ? String(e.message) : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if ('object' == typeof process && 'function' == typeof process.emit) return void process.emit('uncaughtException', e);
                console.error(e);
              };
        function L() {}
        ((t.Children = {
          map: _,
          forEach: function (e, t, n) {
            _(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              _(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              _(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e)) throw Error('React.Children.only expected to receive a single React element child.');
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E),
          (t.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (e) {
              return E.H.useMemoCache(e);
            },
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cloneElement = function (e, t, n) {
            if (null == e) throw Error('The argument must be a React element, but you passed ' + e + '.');
            var r = m({}, e.props),
              o = e.key;
            if (null != t)
              for (a in (t.ref, void 0 !== t.key && (o = '' + t.key), t))
                !k.call(t, a) || 'key' === a || '__self' === a || '__source' === a || ('ref' === a && void 0 === t.ref) || (r[a] = t[a]);
            var a = arguments.length - 2;
            if (1 === a) r.children = n;
            else if (1 < a) {
              for (var i = Array(a), l = 0; l < a; l++) i[l] = arguments[l + 2];
              r.children = i;
            }
            return x(e.type, o, void 0, 0, 0, r);
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = { $$typeof: l, _context: e }),
              e
            );
          }),
          (t.createElement = function (e, t, n) {
            var r,
              o = {},
              a = null;
            if (null != t)
              for (r in (void 0 !== t.key && (a = '' + t.key), t)) k.call(t, r) && 'key' !== r && '__self' !== r && '__source' !== r && (o[r] = t[r]);
            var i = arguments.length - 2;
            if (1 === i) o.children = n;
            else if (1 < i) {
              for (var l = Array(i), u = 0; u < i; u++) l[u] = arguments[u + 2];
              o.children = l;
            }
            if (e && e.defaultProps) for (r in (i = e.defaultProps)) void 0 === o[r] && (o[r] = i[r]);
            return x(e, a, void 0, 0, 0, o);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: A,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = E.T,
              n = {};
            E.T = n;
            try {
              var r = e(),
                o = E.S;
              (null !== o && o(n, r), 'object' == typeof r && null !== r && 'function' == typeof r.then && r.then(L, N));
            } catch (e) {
              N(e);
            } finally {
              E.T = t;
            }
          }),
          (t.unstable_useCacheRefresh = function () {
            return E.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return E.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return E.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return E.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return E.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return E.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t, n) {
            var r = E.H;
            if ('function' == typeof n) throw Error('useEffect CRUD overload is not enabled in this build of React.');
            return r.useEffect(e, t);
          }),
          (t.useId = function () {
            return E.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return E.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return E.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return E.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return E.H.useMemo(e, t);
          }),
          (t.useOptimistic = function (e, t) {
            return E.H.useOptimistic(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return E.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return E.H.useRef(e);
          }),
          (t.useState = function (e) {
            return E.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return E.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return E.H.useTransition();
          }),
          (t.version = '19.1.0'));
      },
      961: (e, t, n) => {
        (!(function e() {
          if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && 'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(221)));
      },
      971: (e, t) => {
        (Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.default = function (e, t, n, r, o) {
            for (var a = 0, i = e.length; a < i; ++a) {
              var l = e[a](t, n, r, o);
              if (l) return l;
            }
          }));
      },
      982: (e, t, n) => {
        e.exports = n(477);
      },
      996: (e, t) => {
        t.A = function (e, t) {
          if ('position' === e && 'sticky' === t) return ['-webkit-sticky', 'sticky'];
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return (e[r](a, a.exports, n), a.exports);
  }
  ((n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return (n.d(t, { a: t }), t);
  }),
    (n.d = (e, t) => {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 }));
    }),
    (n.nc = void 0));
  var r = {};
  (n.r(r),
    n.d(r, {
      hasBrowserEnv: () => Yi,
      hasStandardBrowserEnv: () => Xi,
      hasStandardBrowserWebWorkerEnv: () => Qi,
      navigator: () => Ki,
      origin: () => Ji,
    }));
  var o = {};
  n.r(o);
  var a = n(540),
    i = n(338),
    l = (n(232), 'popstate');
  function u(e = {}) {
    return (function (e, t, n, r = {}) {
      let { window: o = document.defaultView, v5Compat: a = !1 } = r,
        i = o.history,
        u = 'POP',
        c = null,
        h = m();
      function m() {
        return (i.state || { idx: null }).idx;
      }
      function y() {
        u = 'POP';
        let e = m(),
          t = null == e ? null : e - h;
        ((h = e), c && c({ action: u, location: v.location, delta: t }));
      }
      function g(e) {
        return (function (e, t = !1) {
          let n = 'http://localhost';
          ('undefined' != typeof window && (n = 'null' !== window.location.origin ? window.location.origin : window.location.href),
            s(n, 'No window.location.(origin|href) available to create URL'));
          let r = 'string' == typeof e ? e : p(e);
          return ((r = r.replace(/ $/, '%20')), !t && r.startsWith('//') && (r = n + r), new URL(r, n));
        })(e);
      }
      null == h && ((h = 0), i.replaceState({ ...i.state, idx: h }, ''));
      let v = {
        get action() {
          return u;
        },
        get location() {
          return e(o, i);
        },
        listen(e) {
          if (c) throw new Error('A history only accepts one active listener');
          return (
            o.addEventListener(l, y),
            (c = e),
            () => {
              (o.removeEventListener(l, y), (c = null));
            }
          );
        },
        createHref: (e) => t(o, e),
        createURL: g,
        encodeLocation(e) {
          let t = g(e);
          return { pathname: t.pathname, search: t.search, hash: t.hash };
        },
        push: function (e, t) {
          u = 'PUSH';
          let r = d(v.location, e, t);
          (n && n(r, e), (h = m() + 1));
          let l = f(r, h),
            s = v.createHref(r);
          try {
            i.pushState(l, '', s);
          } catch (e) {
            if (e instanceof DOMException && 'DataCloneError' === e.name) throw e;
            o.location.assign(s);
          }
          a && c && c({ action: u, location: v.location, delta: 1 });
        },
        replace: function (e, t) {
          u = 'REPLACE';
          let r = d(v.location, e, t);
          (n && n(r, e), (h = m()));
          let o = f(r, h),
            l = v.createHref(r);
          (i.replaceState(o, '', l), a && c && c({ action: u, location: v.location, delta: 0 }));
        },
        go: (e) => i.go(e),
      };
      return v;
    })(
      function (e, t) {
        let { pathname: n, search: r, hash: o } = e.location;
        return d('', { pathname: n, search: r, hash: o }, (t.state && t.state.usr) || null, (t.state && t.state.key) || 'default');
      },
      function (e, t) {
        return 'string' == typeof t ? t : p(t);
      },
      null,
      e,
    );
  }
  function s(e, t) {
    if (!1 === e || null == e) throw new Error(t);
  }
  function c(e, t) {
    if (!e) {
      'undefined' != typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (e) {}
    }
  }
  function f(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function d(e, t, n = null, r) {
    return {
      pathname: 'string' == typeof e ? e : e.pathname,
      search: '',
      hash: '',
      ...('string' == typeof t ? h(t) : t),
      state: n,
      key: (t && t.key) || r || Math.random().toString(36).substring(2, 10),
    };
  }
  function p({ pathname: e = '/', search: t = '', hash: n = '' }) {
    return (t && '?' !== t && (e += '?' === t.charAt(0) ? t : '?' + t), n && '#' !== n && (e += '#' === n.charAt(0) ? n : '#' + n), e);
  }
  function h(e) {
    let t = {};
    if (e) {
      let n = e.indexOf('#');
      n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
      let r = e.indexOf('?');
      (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))), e && (t.pathname = e));
    }
    return t;
  }
  function m(e, t, n = '/') {
    return (function (e, t, n, r) {
      let o = O(('string' == typeof t ? h(t) : t).pathname || '/', n);
      if (null == o) return null;
      let a = y(e);
      !(function (e) {
        e.sort((e, t) =>
          e.score !== t.score
            ? t.score - e.score
            : (function (e, t) {
                return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
              })(
                e.routesMeta.map((e) => e.childrenIndex),
                t.routesMeta.map((e) => e.childrenIndex),
              ),
        );
      })(a);
      let i = null;
      for (let e = 0; null == i && e < a.length; ++e) {
        let t = T(o);
        i = R(a[e], t, r);
      }
      return i;
    })(e, t, n, !1);
  }
  function y(e, t = [], n = [], r = '') {
    let o = (e, o, a) => {
      let i = {
        relativePath: void 0 === a ? e.path || '' : a,
        caseSensitive: !0 === e.caseSensitive,
        childrenIndex: o,
        route: e,
      };
      i.relativePath.startsWith('/') &&
        (s(
          i.relativePath.startsWith(r),
          `Absolute route path "${i.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
        ),
        (i.relativePath = i.relativePath.slice(r.length)));
      let l = L([r, i.relativePath]),
        u = n.concat(i);
      (e.children &&
        e.children.length > 0 &&
        (s(!0 !== e.index, `Index routes must not have child routes. Please remove all child routes from route path "${l}".`),
        y(e.children, t, u, l)),
        (null != e.path || e.index) && t.push({ path: l, score: C(l, e.index), routesMeta: u }));
    };
    return (
      e.forEach((e, t) => {
        if ('' !== e.path && e.path?.includes('?')) for (let n of g(e.path)) o(e, t, n);
        else o(e, t);
      }),
      t
    );
  }
  function g(e) {
    let t = e.split('/');
    if (0 === t.length) return [];
    let [n, ...r] = t,
      o = n.endsWith('?'),
      a = n.replace(/\?$/, '');
    if (0 === r.length) return o ? [a, ''] : [a];
    let i = g(r.join('/')),
      l = [];
    return (l.push(...i.map((e) => ('' === e ? a : [a, e].join('/')))), o && l.push(...i), l.map((t) => (e.startsWith('/') && '' === t ? '/' : t)));
  }
  new WeakMap();
  var v = /^:[\w-]+$/,
    b = 3,
    w = 2,
    S = 1,
    E = 10,
    k = -2,
    x = (e) => '*' === e;
  function C(e, t) {
    let n = e.split('/'),
      r = n.length;
    return (n.some(x) && (r += k), t && (r += w), n.filter((e) => !x(e)).reduce((e, t) => e + (v.test(t) ? b : '' === t ? S : E), r));
  }
  function R(e, t, n = !1) {
    let { routesMeta: r } = e,
      o = {},
      a = '/',
      i = [];
    for (let e = 0; e < r.length; ++e) {
      let l = r[e],
        u = e === r.length - 1,
        s = '/' === a ? t : t.slice(a.length) || '/',
        c = P({ path: l.relativePath, caseSensitive: l.caseSensitive, end: u }, s),
        f = l.route;
      if ((!c && u && n && !r[r.length - 1].route.index && (c = P({ path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 }, s)), !c))
        return null;
      (Object.assign(o, c.params),
        i.push({
          params: o,
          pathname: L([a, c.pathname]),
          pathnameBase: D(L([a, c.pathnameBase])),
          route: f,
        }),
        '/' !== c.pathnameBase && (a = L([a, c.pathnameBase])));
    }
    return i;
  }
  function P(e, t) {
    'string' == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = (function (e, t = !1, n = !0) {
        c(
          '*' === e || !e.endsWith('*') || e.endsWith('/*'),
          `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, '/*')}".`,
        );
        let r = [],
          o =
            '^' +
            e
              .replace(/\/*\*?$/, '')
              .replace(/^\/*/, '/')
              .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
              .replace(/\/:([\w-]+)(\?)?/g, (e, t, n) => (r.push({ paramName: t, isOptional: null != n }), n ? '/?([^\\/]+)?' : '/([^\\/]+)'));
        return (
          e.endsWith('*')
            ? (r.push({ paramName: '*' }), (o += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
            : n
              ? (o += '\\/*$')
              : '' !== e && '/' !== e && (o += '(?:(?=\\/|$))'),
          [new RegExp(o, t ? void 0 : 'i'), r]
        );
      })(e.path, e.caseSensitive, e.end),
      o = t.match(n);
    if (!o) return null;
    let a = o[0],
      i = a.replace(/(.)\/+$/, '$1'),
      l = o.slice(1);
    return {
      params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
        if ('*' === t) {
          let e = l[r] || '';
          i = a.slice(0, a.length - e.length).replace(/(.)\/+$/, '$1');
        }
        const o = l[r];
        return ((e[t] = n && !o ? void 0 : (o || '').replace(/%2F/g, '/')), e);
      }, {}),
      pathname: a,
      pathnameBase: i,
      pattern: e,
    };
  }
  function T(e) {
    try {
      return e
        .split('/')
        .map((e) => decodeURIComponent(e).replace(/\//g, '%2F'))
        .join('/');
    } catch (t) {
      return (
        c(
          !1,
          `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
        ),
        e
      );
    }
  }
  function O(e, t) {
    if ('/' === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith('/') ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && '/' !== r ? null : e.slice(n) || '/';
  }
  function _(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function A(e) {
    let t = (function (e) {
      return e.filter((e, t) => 0 === t || (e.route.path && e.route.path.length > 0));
    })(e);
    return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
  }
  function N(e, t, n, r = !1) {
    let o;
    'string' == typeof e
      ? (o = h(e))
      : ((o = { ...e }),
        s(!o.pathname || !o.pathname.includes('?'), _('?', 'pathname', 'search', o)),
        s(!o.pathname || !o.pathname.includes('#'), _('#', 'pathname', 'hash', o)),
        s(!o.search || !o.search.includes('#'), _('#', 'search', 'hash', o)));
    let a,
      i = '' === e || '' === o.pathname,
      l = i ? '/' : o.pathname;
    if (null == l) a = n;
    else {
      let e = t.length - 1;
      if (!r && l.startsWith('..')) {
        let t = l.split('/');
        for (; '..' === t[0]; ) (t.shift(), (e -= 1));
        o.pathname = t.join('/');
      }
      a = e >= 0 ? t[e] : '/';
    }
    let u = (function (e, t = '/') {
        let { pathname: n, search: r = '', hash: o = '' } = 'string' == typeof e ? h(e) : e,
          a = n
            ? n.startsWith('/')
              ? n
              : (function (e, t) {
                  let n = t.replace(/\/+$/, '').split('/');
                  return (
                    e.split('/').forEach((e) => {
                      '..' === e ? n.length > 1 && n.pop() : '.' !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join('/') : '/'
                  );
                })(n, t)
            : t;
        return { pathname: a, search: z(r), hash: j(o) };
      })(o, a),
      c = l && '/' !== l && l.endsWith('/'),
      f = (i || '.' === l) && n.endsWith('/');
    return (u.pathname.endsWith('/') || (!c && !f) || (u.pathname += '/'), u);
  }
  var L = (e) => e.join('/').replace(/\/\/+/g, '/'),
    D = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
    z = (e) => (e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''),
    j = (e) => (e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '');
  function M(e) {
    return null != e && 'number' == typeof e.status && 'string' == typeof e.statusText && 'boolean' == typeof e.internal && 'data' in e;
  }
  var I = ['POST', 'PUT', 'PATCH', 'DELETE'],
    F = (new Set(I), ['GET', ...I]);
  (new Set(F), Symbol('ResetLoaderData'));
  var B = a.createContext(null);
  B.displayName = 'DataRouter';
  var U = a.createContext(null);
  U.displayName = 'DataRouterState';
  var W = a.createContext({ isTransitioning: !1 });
  ((W.displayName = 'ViewTransition'), (a.createContext(new Map()).displayName = 'Fetchers'), (a.createContext(null).displayName = 'Await'));
  var $ = a.createContext(null);
  $.displayName = 'Navigation';
  var H = a.createContext(null);
  H.displayName = 'Location';
  var q = a.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  q.displayName = 'Route';
  var V = a.createContext(null);
  function G() {
    return null != a.useContext(H);
  }
  function Y() {
    return (s(G(), 'useLocation() may be used only in the context of a <Router> component.'), a.useContext(H).location);
  }
  V.displayName = 'RouteError';
  var K = 'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
  function X(e) {
    a.useContext($).static || a.useLayoutEffect(e);
  }
  function Q() {
    let { isDataRoute: e } = a.useContext(q);
    return e
      ? (function () {
          let { router: e } = (function (e) {
              let t = a.useContext(B);
              return (s(t, oe(e)), t);
            })('useNavigate'),
            t = ae('useNavigate'),
            n = a.useRef(!1);
          X(() => {
            n.current = !0;
          });
          let r = a.useCallback(
            async (r, o = {}) => {
              (c(n.current, K), n.current && ('number' == typeof r ? e.navigate(r) : await e.navigate(r, { fromRouteId: t, ...o })));
            },
            [e, t],
          );
          return r;
        })()
      : (function () {
          s(G(), 'useNavigate() may be used only in the context of a <Router> component.');
          let e = a.useContext(B),
            { basename: t, navigator: n } = a.useContext($),
            { matches: r } = a.useContext(q),
            { pathname: o } = Y(),
            i = JSON.stringify(A(r)),
            l = a.useRef(!1);
          X(() => {
            l.current = !0;
          });
          let u = a.useCallback(
            (r, a = {}) => {
              if ((c(l.current, K), !l.current)) return;
              if ('number' == typeof r) return void n.go(r);
              let u = N(r, JSON.parse(i), o, 'path' === a.relative);
              (null == e && '/' !== t && (u.pathname = '/' === u.pathname ? t : L([t, u.pathname])), (a.replace ? n.replace : n.push)(u, a.state, a));
            },
            [t, n, i, o, e],
          );
          return u;
        })();
  }
  function J(e, { relative: t } = {}) {
    let { matches: n } = a.useContext(q),
      { pathname: r } = Y(),
      o = JSON.stringify(A(n));
    return a.useMemo(() => N(e, JSON.parse(o), r, 'path' === t), [e, o, r, t]);
  }
  function Z(e, t, n, r) {
    s(G(), 'useRoutes() may be used only in the context of a <Router> component.');
    let { navigator: o, static: i } = a.useContext($),
      { matches: l } = a.useContext(q),
      u = l[l.length - 1],
      f = u ? u.params : {},
      d = u ? u.pathname : '/',
      p = u ? u.pathnameBase : '/',
      y = u && u.route;
    {
      let e = (y && y.path) || '';
      le(
        d,
        !y || e.endsWith('*') || e.endsWith('*?'),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${'/' === e ? '*' : `${e}/*`}">.`,
      );
    }
    let g,
      v = Y();
    if (t) {
      let e = 'string' == typeof t ? h(t) : t;
      (s(
        '/' === p || e.pathname?.startsWith(p),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${e.pathname}" was given in the \`location\` prop.`,
      ),
        (g = e));
    } else g = v;
    let b = g.pathname || '/',
      w = b;
    if ('/' !== p) {
      let e = p.replace(/^\//, '').split('/');
      w = '/' + b.replace(/^\//, '').split('/').slice(e.length).join('/');
    }
    let S = !i && n && n.matches && n.matches.length > 0 ? n.matches : m(e, { pathname: w });
    (c(y || null != S, `No routes matched location "${g.pathname}${g.search}${g.hash}" `),
      c(
        null == S || void 0 !== S[S.length - 1].route.element || void 0 !== S[S.length - 1].route.Component || void 0 !== S[S.length - 1].route.lazy,
        `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
      ));
    let E = (function (e, t = [], n = null) {
      if (null == e) {
        if (!n) return null;
        if (n.errors) e = n.matches;
        else {
          if (0 !== t.length || n.initialized || !(n.matches.length > 0)) return null;
          e = n.matches;
        }
      }
      let r = e,
        o = n?.errors;
      if (null != o) {
        let e = r.findIndex((e) => e.route.id && void 0 !== o?.[e.route.id]);
        (s(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(',')}`),
          (r = r.slice(0, Math.min(r.length, e + 1))));
      }
      let i = !1,
        l = -1;
      if (n)
        for (let e = 0; e < r.length; e++) {
          let t = r[e];
          if (((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (l = e), t.route.id)) {
            let { loaderData: e, errors: o } = n,
              a = t.route.loader && !e.hasOwnProperty(t.route.id) && (!o || void 0 === o[t.route.id]);
            if (t.route.lazy || a) {
              ((i = !0), (r = l >= 0 ? r.slice(0, l + 1) : [r[0]]));
              break;
            }
          }
        }
      return r.reduceRight((e, u, s) => {
        let c,
          f = !1,
          d = null,
          p = null;
        n &&
          ((c = o && u.route.id ? o[u.route.id] : void 0),
          (d = u.route.errorElement || te),
          i &&
            (l < 0 && 0 === s
              ? (le('route-fallback', !1, 'No `HydrateFallback` element provided to render during initial hydration'), (f = !0), (p = null))
              : l === s && ((f = !0), (p = u.route.hydrateFallbackElement || null))));
        let h = t.concat(r.slice(0, s + 1)),
          m = () => {
            let t;
            return (
              (t = c ? d : f ? p : u.route.Component ? a.createElement(u.route.Component, null) : u.route.element ? u.route.element : e),
              a.createElement(re, {
                match: u,
                routeContext: { outlet: e, matches: h, isDataRoute: null != n },
                children: t,
              })
            );
          };
        return n && (u.route.ErrorBoundary || u.route.errorElement || 0 === s)
          ? a.createElement(ne, {
              location: n.location,
              revalidation: n.revalidation,
              component: d,
              error: c,
              children: m(),
              routeContext: { outlet: null, matches: h, isDataRoute: !0 },
            })
          : m();
      }, null);
    })(
      S &&
        S.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, f, e.params),
            pathname: L([p, o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: '/' === e.pathnameBase ? p : L([p, o.encodeLocation ? o.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]),
          }),
        ),
      l,
      n,
      r,
    );
    return t && E
      ? a.createElement(
          H.Provider,
          {
            value: {
              location: {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
                ...g,
              },
              navigationType: 'POP',
            },
          },
          E,
        )
      : E;
  }
  function ee() {
    let e = (function () {
        let e = a.useContext(V),
          t = (function (e) {
            let t = a.useContext(U);
            return (s(t, oe(e)), t);
          })('useRouteError'),
          n = ae('useRouteError');
        return void 0 !== e ? e : t.errors?.[n];
      })(),
      t = M(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = 'rgba(200,200,200, 0.5)',
      o = { padding: '0.5rem', backgroundColor: r },
      i = { padding: '2px 4px', backgroundColor: r },
      l = null;
    return (
      console.error('Error handled by React Router default ErrorBoundary:', e),
      (l = a.createElement(
        a.Fragment,
        null,
        a.createElement('p', null, '💿 Hey developer 👋'),
        a.createElement(
          'p',
          null,
          'You can provide a way better UX than this when your app throws errors by providing your own ',
          a.createElement('code', { style: i }, 'ErrorBoundary'),
          ' or',
          ' ',
          a.createElement('code', { style: i }, 'errorElement'),
          ' prop on your route.',
        ),
      )),
      a.createElement(
        a.Fragment,
        null,
        a.createElement('h2', null, 'Unexpected Application Error!'),
        a.createElement('h3', { style: { fontStyle: 'italic' } }, t),
        n ? a.createElement('pre', { style: o }, n) : null,
        l,
      )
    );
  }
  a.createContext(null);
  var te = a.createElement(ee, null),
    ne = class extends a.Component {
      constructor(e) {
        (super(e),
          (this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error,
          }));
      }
      static getDerivedStateFromError(e) {
        return { error: e };
      }
      static getDerivedStateFromProps(e, t) {
        return t.location !== e.location || ('idle' !== t.revalidation && 'idle' === e.revalidation)
          ? {
              error: e.error,
              location: e.location,
              revalidation: e.revalidation,
            }
          : {
              error: void 0 !== e.error ? e.error : t.error,
              location: t.location,
              revalidation: e.revalidation || t.revalidation,
            };
      }
      componentDidCatch(e, t) {
        console.error('React Router caught the following error during render', e, t);
      }
      render() {
        return void 0 !== this.state.error
          ? a.createElement(
              q.Provider,
              { value: this.props.routeContext },
              a.createElement(V.Provider, {
                value: this.state.error,
                children: this.props.component,
              }),
            )
          : this.props.children;
      }
    };
  function re({ routeContext: e, match: t, children: n }) {
    let r = a.useContext(B);
    return (
      r &&
        r.static &&
        r.staticContext &&
        (t.route.errorElement || t.route.ErrorBoundary) &&
        (r.staticContext._deepestRenderedBoundaryId = t.route.id),
      a.createElement(q.Provider, { value: e }, n)
    );
  }
  function oe(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function ae(e) {
    let t = (function (e) {
        let t = a.useContext(q);
        return (s(t, oe(e)), t);
      })(e),
      n = t.matches[t.matches.length - 1];
    return (s(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id);
  }
  var ie = {};
  function le(e, t, n) {
    t || ie[e] || ((ie[e] = !0), c(!1, n));
  }
  function ue({ to: e, replace: t, state: n, relative: r }) {
    s(G(), '<Navigate> may be used only in the context of a <Router> component.');
    let { static: o } = a.useContext($);
    c(
      !o,
      '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.',
    );
    let { matches: i } = a.useContext(q),
      { pathname: l } = Y(),
      u = Q(),
      f = N(e, A(i), l, 'path' === r),
      d = JSON.stringify(f);
    return (
      a.useEffect(() => {
        u(JSON.parse(d), { replace: t, state: n, relative: r });
      }, [u, d, r, t, n]),
      null
    );
  }
  function se(e) {
    s(!1, 'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.');
  }
  function ce({ basename: e = '/', children: t = null, location: n, navigationType: r = 'POP', navigator: o, static: i = !1 }) {
    s(!G(), 'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.');
    let l = e.replace(/^\/*/, '/'),
      u = a.useMemo(() => ({ basename: l, navigator: o, static: i, future: {} }), [l, o, i]);
    'string' == typeof n && (n = h(n));
    let { pathname: f = '/', search: d = '', hash: p = '', state: m = null, key: y = 'default' } = n,
      g = a.useMemo(() => {
        let e = O(f, l);
        return null == e
          ? null
          : {
              location: { pathname: e, search: d, hash: p, state: m, key: y },
              navigationType: r,
            };
      }, [l, f, d, p, m, y, r]);
    return (
      c(
        null != g,
        `<Router basename="${l}"> is not able to match the URL "${f}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`,
      ),
      null == g ? null : a.createElement($.Provider, { value: u }, a.createElement(H.Provider, { children: t, value: g }))
    );
  }
  function fe({ children: e, location: t }) {
    return Z(de(e), t);
  }
  function de(e, t = []) {
    let n = [];
    return (
      a.Children.forEach(e, (e, r) => {
        if (!a.isValidElement(e)) return;
        let o = [...t, r];
        if (e.type === a.Fragment) return void n.push.apply(n, de(e.props.children, o));
        (s(
          e.type === se,
          `[${'string' == typeof e.type ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
        ),
          s(!e.props.index || !e.props.children, 'An index route cannot have child routes.'));
        let i = {
          id: e.props.id || o.join('-'),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          loader: e.props.loader,
          action: e.props.action,
          hydrateFallbackElement: e.props.hydrateFallbackElement,
          HydrateFallback: e.props.HydrateFallback,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary: !0 === e.props.hasErrorBoundary || null != e.props.ErrorBoundary || null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        (e.props.children && (i.children = de(e.props.children, o)), n.push(i));
      }),
      n
    );
  }
  (a.memo(function ({ routes: e, future: t, state: n }) {
    return Z(e, void 0, n, t);
  }),
    a.Component);
  var pe = 'get',
    he = 'application/x-www-form-urlencoded';
  function me(e) {
    return null != e && 'string' == typeof e.tagName;
  }
  var ye = null,
    ge = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
  function ve(e) {
    return null == e || ge.has(e)
      ? e
      : (c(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${he}"`), null);
  }
  function be(e, t) {
    if (!1 === e || null == e) throw new Error(t);
  }
  function we(e) {
    return (
      null != e &&
      (null == e.href
        ? 'preload' === e.rel && 'string' == typeof e.imageSrcSet && 'string' == typeof e.imageSizes
        : 'string' == typeof e.rel && 'string' == typeof e.href)
    );
  }
  function Se(e, t, n, r, o, a) {
    let i = (e, t) => !n[t] || e.route.id !== n[t].route.id,
      l = (e, t) => n[t].pathname !== e.pathname || (n[t].route.path?.endsWith('*') && n[t].params['*'] !== e.params['*']);
    return 'assets' === a
      ? t.filter((e, t) => i(e, t) || l(e, t))
      : 'data' === a
        ? t.filter((t, a) => {
            let u = r.routes[t.route.id];
            if (!u || !u.hasLoader) return !1;
            if (i(t, a) || l(t, a)) return !0;
            if (t.route.shouldRevalidate) {
              let r = t.route.shouldRevalidate({
                currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                currentParams: n[0]?.params || {},
                nextUrl: new URL(e, window.origin),
                nextParams: t.params,
                defaultShouldRevalidate: !0,
              });
              if ('boolean' == typeof r) return r;
            }
            return !0;
          })
        : [];
  }
  function Ee(e, t, { includeHydrateFallback: n } = {}) {
    return (
      (r = e
        .map((e) => {
          let r = t.routes[e.route.id];
          if (!r) return [];
          let o = [r.module];
          return (
            r.clientActionModule && (o = o.concat(r.clientActionModule)),
            r.clientLoaderModule && (o = o.concat(r.clientLoaderModule)),
            n && r.hydrateFallbackModule && (o = o.concat(r.hydrateFallbackModule)),
            r.imports && (o = o.concat(r.imports)),
            o
          );
        })
        .flat(1)),
      [...new Set(r)]
    );
    var r;
  }
  (Object.getOwnPropertyNames(Object.prototype).sort().join('\0'),
    'undefined' != typeof window ? window : 'undefined' != typeof globalThis && globalThis,
    Symbol('SingleFetchRedirect'));
  function ke() {
    let e = a.useContext(B);
    return (be(e, 'You must render this element inside a <DataRouterContext.Provider> element'), e);
  }
  function xe() {
    let e = a.useContext(U);
    return (be(e, 'You must render this element inside a <DataRouterStateContext.Provider> element'), e);
  }
  a.Component;
  var Ce = a.createContext(void 0);
  function Re() {
    let e = a.useContext(Ce);
    return (be(e, 'You must render this element inside a <HydratedRouter> element'), e);
  }
  function Pe(e, t) {
    return (n) => {
      (e && e(n), n.defaultPrevented || t(n));
    };
  }
  function Te({ page: e, ...t }) {
    let { router: n } = ke(),
      r = a.useMemo(() => m(n.routes, e, n.basename), [n.routes, e, n.basename]);
    return r ? a.createElement(_e, { page: e, matches: r, ...t }) : null;
  }
  function Oe(e) {
    let { manifest: t, routeModules: n } = Re(),
      [r, o] = a.useState([]);
    return (
      a.useEffect(() => {
        let r = !1;
        return (
          (async function (e, t, n) {
            return (function (e, t) {
              let n = new Set(),
                r = new Set(t);
              return e.reduce((e, o) => {
                if (t && (null == (a = o) || 'string' != typeof a.page) && 'script' === o.as && o.href && r.has(o.href)) return e;
                var a;
                let i = JSON.stringify(
                  (function (e) {
                    let t = {},
                      n = Object.keys(e).sort();
                    for (let r of n) t[r] = e[r];
                    return t;
                  })(o),
                );
                return (n.has(i) || (n.add(i), e.push({ key: i, link: o })), e);
              }, []);
            })(
              (
                await Promise.all(
                  e.map(async (e) => {
                    let r = t.routes[e.route.id];
                    if (r) {
                      let e = await (async function (e, t) {
                        if (e.id in t) return t[e.id];
                        try {
                          let n = await import(e.module);
                          return ((t[e.id] = n), n);
                        } catch (t) {
                          return (
                            console.error(`Error loading route module \`${e.module}\`, reloading page...`),
                            console.error(t),
                            window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
                            window.location.reload(),
                            new Promise(() => {})
                          );
                        }
                      })(r, n);
                      return e.links ? e.links() : [];
                    }
                    return [];
                  }),
                )
              )
                .flat(1)
                .filter(we)
                .filter((e) => 'stylesheet' === e.rel || 'preload' === e.rel)
                .map((e) => ('stylesheet' === e.rel ? { ...e, rel: 'prefetch', as: 'style' } : { ...e, rel: 'prefetch' })),
            );
          })(e, t, n).then((e) => {
            r || o(e);
          }),
          () => {
            r = !0;
          }
        );
      }, [e, t, n]),
      r
    );
  }
  function _e({ page: e, matches: t, ...n }) {
    let r = Y(),
      { manifest: o, routeModules: i } = Re(),
      { basename: l } = ke(),
      { loaderData: u, matches: s } = xe(),
      c = a.useMemo(() => Se(e, t, s, o, r, 'data'), [e, t, s, o, r]),
      f = a.useMemo(() => Se(e, t, s, o, r, 'assets'), [e, t, s, o, r]),
      d = a.useMemo(() => {
        if (e === r.pathname + r.search + r.hash) return [];
        let n = new Set(),
          a = !1;
        if (
          (t.forEach((e) => {
            let t = o.routes[e.route.id];
            t &&
              t.hasLoader &&
              ((!c.some((t) => t.route.id === e.route.id) && e.route.id in u && i[e.route.id]?.shouldRevalidate) || t.hasClientLoader
                ? (a = !0)
                : n.add(e.route.id));
          }),
          0 === n.size)
        )
          return [];
        let s = (function (e, t) {
          let n = 'string' == typeof e ? new URL(e, 'undefined' == typeof window ? 'server://singlefetch/' : window.location.origin) : e;
          return (
            '/' === n.pathname
              ? (n.pathname = '_root.data')
              : t && '/' === O(n.pathname, t)
                ? (n.pathname = `${t.replace(/\/$/, '')}/_root.data`)
                : (n.pathname = `${n.pathname.replace(/\/$/, '')}.data`),
            n
          );
        })(e, l);
        return (
          a &&
            n.size > 0 &&
            s.searchParams.set(
              '_routes',
              t
                .filter((e) => n.has(e.route.id))
                .map((e) => e.route.id)
                .join(','),
            ),
          [s.pathname + s.search]
        );
      }, [l, u, r, o, c, t, e, i]),
      p = a.useMemo(() => Ee(f, o), [f, o]),
      h = Oe(f);
    return a.createElement(
      a.Fragment,
      null,
      d.map((e) =>
        a.createElement('link', {
          key: e,
          rel: 'prefetch',
          as: 'fetch',
          href: e,
          ...n,
        }),
      ),
      p.map((e) =>
        a.createElement('link', {
          key: e,
          rel: 'modulepreload',
          href: e,
          ...n,
        }),
      ),
      h.map(({ key: e, link: t }) => a.createElement('link', { key: e, ...t })),
    );
  }
  Ce.displayName = 'FrameworkContext';
  function Ae(...e) {
    return (t) => {
      e.forEach((e) => {
        'function' == typeof e ? e(t) : null != e && (e.current = t);
      });
    };
  }
  var Ne = 'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
  try {
    Ne && (window.__reactRouterVersion = '7.6.0');
  } catch (e) {}
  function Le({ basename: e, children: t, window: n }) {
    let r = a.useRef();
    null == r.current && (r.current = u({ window: n, v5Compat: !0 }));
    let o = r.current,
      [i, l] = a.useState({ action: o.action, location: o.location }),
      s = a.useCallback(
        (e) => {
          a.startTransition(() => l(e));
        },
        [l],
      );
    return (
      a.useLayoutEffect(() => o.listen(s), [o, s]),
      a.createElement(ce, {
        basename: e,
        children: t,
        location: i.location,
        navigationType: i.action,
        navigator: o,
      })
    );
  }
  var De = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    ze = a.forwardRef(function (
      {
        onClick: e,
        discover: t = 'render',
        prefetch: n = 'none',
        relative: r,
        reloadDocument: o,
        replace: i,
        state: l,
        target: u,
        to: f,
        preventScrollReset: d,
        viewTransition: h,
        ...m
      },
      y,
    ) {
      let g,
        { basename: v } = a.useContext($),
        b = 'string' == typeof f && De.test(f),
        w = !1;
      if ('string' == typeof f && b && ((g = f), Ne))
        try {
          let e = new URL(window.location.href),
            t = f.startsWith('//') ? new URL(e.protocol + f) : new URL(f),
            n = O(t.pathname, v);
          t.origin === e.origin && null != n ? (f = n + t.search + t.hash) : (w = !0);
        } catch (e) {
          c(!1, `<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
      let S = (function (e, { relative: t } = {}) {
          s(G(), 'useHref() may be used only in the context of a <Router> component.');
          let { basename: n, navigator: r } = a.useContext($),
            { hash: o, pathname: i, search: l } = J(e, { relative: t }),
            u = i;
          return ('/' !== n && (u = '/' === i ? n : L([n, i])), r.createHref({ pathname: u, search: l, hash: o }));
        })(f, { relative: r }),
        [E, k, x] = (function (e, t) {
          let n = a.useContext(Ce),
            [r, o] = a.useState(!1),
            [i, l] = a.useState(!1),
            { onFocus: u, onBlur: s, onMouseEnter: c, onMouseLeave: f, onTouchStart: d } = t,
            p = a.useRef(null);
          (a.useEffect(() => {
            if (('render' === e && l(!0), 'viewport' === e)) {
              let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    l(e.isIntersecting);
                  });
                },
                { threshold: 0.5 },
              );
              return (
                p.current && e.observe(p.current),
                () => {
                  e.disconnect();
                }
              );
            }
          }, [e]),
            a.useEffect(() => {
              if (r) {
                let e = setTimeout(() => {
                  l(!0);
                }, 100);
                return () => {
                  clearTimeout(e);
                };
              }
            }, [r]));
          let h = () => {
              o(!0);
            },
            m = () => {
              (o(!1), l(!1));
            };
          return n
            ? 'intent' !== e
              ? [i, p, {}]
              : [
                  i,
                  p,
                  {
                    onFocus: Pe(u, h),
                    onBlur: Pe(s, m),
                    onMouseEnter: Pe(c, h),
                    onMouseLeave: Pe(f, m),
                    onTouchStart: Pe(d, h),
                  },
                ]
            : [!1, p, {}];
        })(n, m),
        C = (function (e, { target: t, replace: n, state: r, preventScrollReset: o, relative: i, viewTransition: l } = {}) {
          let u = Q(),
            s = Y(),
            c = J(e, { relative: i });
          return a.useCallback(
            (a) => {
              if (
                (function (e, t) {
                  return !(
                    0 !== e.button ||
                    (t && '_self' !== t) ||
                    (function (e) {
                      return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                    })(e)
                  );
                })(a, t)
              ) {
                a.preventDefault();
                let t = void 0 !== n ? n : p(s) === p(c);
                u(e, {
                  replace: t,
                  state: r,
                  preventScrollReset: o,
                  relative: i,
                  viewTransition: l,
                });
              }
            },
            [s, u, c, n, r, t, e, o, i, l],
          );
        })(f, {
          replace: i,
          state: l,
          target: u,
          preventScrollReset: d,
          relative: r,
          viewTransition: h,
        }),
        R = a.createElement('a', {
          ...m,
          ...x,
          href: g || S,
          onClick:
            w || o
              ? e
              : function (t) {
                  (e && e(t), t.defaultPrevented || C(t));
                },
          ref: Ae(y, k),
          target: u,
          'data-discover': b || 'render' !== t ? void 0 : 'true',
        });
      return E && !b ? a.createElement(a.Fragment, null, R, a.createElement(Te, { page: S })) : R;
    });
  ((ze.displayName = 'Link'),
    (a.forwardRef(function (
      { 'aria-current': e = 'page', caseSensitive: t = !1, className: n = '', end: r = !1, style: o, to: i, viewTransition: l, children: u, ...c },
      f,
    ) {
      let d = J(i, { relative: c.relative }),
        p = Y(),
        h = a.useContext(U),
        { navigator: m, basename: y } = a.useContext($),
        g =
          null != h &&
          (function (e, t = {}) {
            let n = a.useContext(W);
            s(
              null != n,
              "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
            );
            let { basename: r } = Me('useViewTransitionState'),
              o = J(e, { relative: t.relative });
            if (!n.isTransitioning) return !1;
            let i = O(n.currentLocation.pathname, r) || n.currentLocation.pathname,
              l = O(n.nextLocation.pathname, r) || n.nextLocation.pathname;
            return null != P(o.pathname, l) || null != P(o.pathname, i);
          })(d) &&
          !0 === l,
        v = m.encodeLocation ? m.encodeLocation(d).pathname : d.pathname,
        b = p.pathname,
        w = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
      (t || ((b = b.toLowerCase()), (w = w ? w.toLowerCase() : null), (v = v.toLowerCase())), w && y && (w = O(w, y) || w));
      const S = '/' !== v && v.endsWith('/') ? v.length - 1 : v.length;
      let E,
        k = b === v || (!r && b.startsWith(v) && '/' === b.charAt(S)),
        x = null != w && (w === v || (!r && w.startsWith(v) && '/' === w.charAt(v.length))),
        C = { isActive: k, isPending: x, isTransitioning: g },
        R = k ? e : void 0;
      E = 'function' == typeof n ? n(C) : [n, k ? 'active' : null, x ? 'pending' : null, g ? 'transitioning' : null].filter(Boolean).join(' ');
      let T = 'function' == typeof o ? o(C) : o;
      return a.createElement(
        ze,
        {
          ...c,
          'aria-current': R,
          className: E,
          ref: f,
          style: T,
          to: i,
          viewTransition: l,
        },
        'function' == typeof u ? u(C) : u,
      );
    }).displayName = 'NavLink'));
  var je = a.forwardRef(
    (
      {
        discover: e = 'render',
        fetcherKey: t,
        navigate: n,
        reloadDocument: r,
        replace: o,
        state: i,
        method: l = pe,
        action: u,
        onSubmit: c,
        relative: f,
        preventScrollReset: d,
        viewTransition: h,
        ...m
      },
      y,
    ) => {
      let g = (function () {
          let { router: e } = Me('useSubmit'),
            { basename: t } = a.useContext($),
            n = ae('useRouteId');
          return a.useCallback(
            async (r, o = {}) => {
              let {
                action: a,
                method: i,
                encType: l,
                formData: u,
                body: s,
              } = (function (e, t) {
                let n, r, o, a, i;
                if (me((l = e)) && 'form' === l.tagName.toLowerCase()) {
                  let i = e.getAttribute('action');
                  ((r = i ? O(i, t) : null), (n = e.getAttribute('method') || pe), (o = ve(e.getAttribute('enctype')) || he), (a = new FormData(e)));
                } else if (
                  (function (e) {
                    return me(e) && 'button' === e.tagName.toLowerCase();
                  })(e) ||
                  ((function (e) {
                    return me(e) && 'input' === e.tagName.toLowerCase();
                  })(e) &&
                    ('submit' === e.type || 'image' === e.type))
                ) {
                  let i = e.form;
                  if (null == i) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
                  let l = e.getAttribute('formaction') || i.getAttribute('action');
                  if (
                    ((r = l ? O(l, t) : null),
                    (n = e.getAttribute('formmethod') || i.getAttribute('method') || pe),
                    (o = ve(e.getAttribute('formenctype')) || ve(i.getAttribute('enctype')) || he),
                    (a = new FormData(i, e)),
                    !(function () {
                      if (null === ye)
                        try {
                          (new FormData(document.createElement('form'), 0), (ye = !1));
                        } catch (e) {
                          ye = !0;
                        }
                      return ye;
                    })())
                  ) {
                    let { name: t, type: n, value: r } = e;
                    if ('image' === n) {
                      let e = t ? `${t}.` : '';
                      (a.append(`${e}x`, '0'), a.append(`${e}y`, '0'));
                    } else t && a.append(t, r);
                  }
                } else {
                  if (me(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
                  ((n = pe), (r = null), (o = he), (i = e));
                }
                var l;
                return (
                  a && 'text/plain' === o && ((i = a), (a = void 0)),
                  {
                    action: r,
                    method: n.toLowerCase(),
                    encType: o,
                    formData: a,
                    body: i,
                  }
                );
              })(r, t);
              if (!1 === o.navigate) {
                let t = o.fetcherKey || Fe();
                await e.fetch(t, n, o.action || a, {
                  preventScrollReset: o.preventScrollReset,
                  formData: u,
                  body: s,
                  formMethod: o.method || i,
                  formEncType: o.encType || l,
                  flushSync: o.flushSync,
                });
              } else
                await e.navigate(o.action || a, {
                  preventScrollReset: o.preventScrollReset,
                  formData: u,
                  body: s,
                  formMethod: o.method || i,
                  formEncType: o.encType || l,
                  replace: o.replace,
                  state: o.state,
                  fromRouteId: n,
                  flushSync: o.flushSync,
                  viewTransition: o.viewTransition,
                });
            },
            [e, t, n],
          );
        })(),
        v = (function (e, { relative: t } = {}) {
          let { basename: n } = a.useContext($),
            r = a.useContext(q);
          s(r, 'useFormAction must be used inside a RouteContext');
          let [o] = r.matches.slice(-1),
            i = { ...J(e || '.', { relative: t }) },
            l = Y();
          if (null == e) {
            i.search = l.search;
            let e = new URLSearchParams(i.search),
              t = e.getAll('index');
            if (t.some((e) => '' === e)) {
              (e.delete('index'), t.filter((e) => e).forEach((t) => e.append('index', t)));
              let n = e.toString();
              i.search = n ? `?${n}` : '';
            }
          }
          return (
            (e && '.' !== e) || !o.route.index || (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index'),
            '/' !== n && (i.pathname = '/' === i.pathname ? n : L([n, i.pathname])),
            p(i)
          );
        })(u, { relative: f }),
        b = 'get' === l.toLowerCase() ? 'get' : 'post',
        w = 'string' == typeof u && De.test(u);
      return a.createElement('form', {
        ref: y,
        method: b,
        action: v,
        onSubmit: r
          ? c
          : (e) => {
              if ((c && c(e), e.defaultPrevented)) return;
              e.preventDefault();
              let r = e.nativeEvent.submitter,
                a = r?.getAttribute('formmethod') || l;
              g(r || e.currentTarget, {
                fetcherKey: t,
                method: a,
                navigate: n,
                replace: o,
                state: i,
                relative: f,
                preventScrollReset: d,
                viewTransition: h,
              });
            },
        ...m,
        'data-discover': w || 'render' !== e ? void 0 : 'true',
      });
    },
  );
  function Me(e) {
    let t = a.useContext(B);
    return (
      s(
        t,
        (function (e) {
          return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
        })(e),
      ),
      t
    );
  }
  je.displayName = 'Form';
  var Ie = 0,
    Fe = () => `__${String(++Ie)}__`;
  var Be = n(72),
    Ue = n.n(Be),
    We = n(825),
    $e = n.n(We),
    He = n(659),
    qe = n.n(He),
    Ve = n(56),
    Ge = n.n(Ve),
    Ye = n(159),
    Ke = n.n(Ye),
    Xe = n(113),
    Qe = n.n(Xe),
    Je = n(750),
    Ze = {};
  ((Ze.styleTagTransform = Qe()),
    (Ze.setAttributes = Ge()),
    (Ze.insert = qe().bind(null, 'head')),
    (Ze.domAPI = $e()),
    (Ze.insertStyleElement = Ke()),
    Ue()(Je.A, Ze),
    Je.A && Je.A.locals && Je.A.locals);
  const et = function () {
    return a.createElement(
      'nav',
      { className: 'navbar' },
      a.createElement('div', { className: 'logo' }, 'My Dashboard'),
      a.createElement(
        'div',
        { className: 'navLinks' },
        a.createElement(ze, { to: '/people', className: 'navLink' }, 'Personas'),
        a.createElement(ze, { to: '/projects', className: 'navLink' }, 'Proyectos'),
        a.createElement(ze, { to: '/directions', className: 'navLink' }, 'Direcciones'),
        a.createElement(ze, { to: '/logout', className: 'navLink' }, 'Salir'),
      ),
    );
  };
  var tt = n(621),
    nt = {};
  ((nt.styleTagTransform = Qe()),
    (nt.setAttributes = Ge()),
    (nt.insert = qe().bind(null, 'head')),
    (nt.domAPI = $e()),
    (nt.insertStyleElement = Ke()),
    Ue()(tt.A, nt),
    tt.A && tt.A.locals && tt.A.locals);
  const rt = function () {
    return a.createElement(
      'div',
      { className: 'container' },
      a.createElement('h1', { className: 'title' }, 'Selecciona una categoría:'),
      a.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
        a.createElement(ze, { to: '/people' }, a.createElement('button', { className: 'button'.concat(' ', 'blue') }, 'Personas')),
        a.createElement(ze, { to: '/projects' }, a.createElement('button', { className: 'button'.concat(' ', 'green') }, 'Proyectos')),
        a.createElement(ze, { to: '/directions' }, a.createElement('button', { className: 'button'.concat(' ', 'yellow') }, 'Direcciones')),
      ),
    );
  };
  function ot() {
    return (
      (ot = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      ot.apply(null, arguments)
    );
  }
  function at(e, t) {
    if (null == e) return {};
    var n = {};
    for (var r in e)
      if ({}.hasOwnProperty.call(e, r)) {
        if (-1 !== t.indexOf(r)) continue;
        n[r] = e[r];
      }
    return n;
  }
  var it = n(961);
  const lt = !('undefined' == typeof window || !window.document || !window.document.createElement),
    ut = function (e) {
      var t = e.children,
        n = a.useRef(null);
      if (lt && !n.current) {
        var r = document.createElement('div');
        r && document.body && (document.body.appendChild(r), (n.current = r));
      }
      return (
        a.useEffect(() => {
          if (lt)
            return () => {
              document.body && n.current && (document.body.removeChild(n.current), (n.current = null));
            };
        }, []),
        n.current && lt ? it.createPortal(t, n.current) : null
      );
    };
  function st(e) {
    return (
      (st =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            }),
      st(e)
    );
  }
  function ct(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e) {
          if ('object' != st(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, 'string');
            if ('object' != st(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' == st(t) ? t : t + '';
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function ft(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r));
    }
    return n;
  }
  function dt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? ft(Object(n), !0).forEach(function (t) {
            ct(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ft(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
    }
    return e;
  }
  var pt = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      flex: !0,
      flexGrow: !0,
      flexOrder: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      fontWeight: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowGap: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnGap: !0,
      gridColumnStart: !0,
      lineClamp: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
      scale: !0,
      scaleX: !0,
      scaleY: !0,
      scaleZ: !0,
      shadowOpacity: !0,
    },
    ht = ['ms', 'Moz', 'O', 'Webkit'];
  Object.keys(pt).forEach((e) => {
    ht.forEach((t) => {
      pt[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(t, e)] = pt[e];
    });
  });
  const mt = pt;
  var yt = n(515),
    gt = n.n(yt);
  const vt = function (e, t) {
    if ((void 0 === t && (t = 1), null != e)) {
      if ('string' == typeof e && ((e) => 'currentcolor' === e || 'currentColor' === e || 'inherit' === e || 0 === e.indexOf('var('))(e)) return e;
      var n = ((e) => {
        if (null == e) return e;
        var t = gt()(e);
        return null != t ? (t = ((t << 24) | (t >>> 8)) >>> 0) : void 0;
      })(e);
      if (null != n)
        return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (255 & n) + ',' + ((((n >> 24) & 255) / 255) * t).toFixed(2) + ')';
    }
  };
  var bt = {
    backgroundColor: !0,
    borderColor: !0,
    borderTopColor: !0,
    borderRightColor: !0,
    borderBottomColor: !0,
    borderLeftColor: !0,
    color: !0,
    shadowColor: !0,
    textDecorationColor: !0,
    textShadowColor: !0,
  };
  function wt(e, t) {
    var n = e;
    return ((null != t && mt[t]) || 'number' != typeof e ? null != t && bt[t] && (n = vt(e)) : (n = e + 'px'), n);
  }
  var St = {},
    Et =
      !lt ||
      (null != window.CSS &&
        null != window.CSS.supports &&
        (window.CSS.supports('text-decoration-line', 'none') || window.CSS.supports('-webkit-text-decoration-line', 'none'))),
    kt = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
    xt = {
      borderColor: ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
      borderBlockColor: ['borderTopColor', 'borderBottomColor'],
      borderInlineColor: ['borderRightColor', 'borderLeftColor'],
      borderRadius: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
      borderStyle: ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
      borderBlockStyle: ['borderTopStyle', 'borderBottomStyle'],
      borderInlineStyle: ['borderRightStyle', 'borderLeftStyle'],
      borderWidth: ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
      borderBlockWidth: ['borderTopWidth', 'borderBottomWidth'],
      borderInlineWidth: ['borderRightWidth', 'borderLeftWidth'],
      insetBlock: ['top', 'bottom'],
      insetInline: ['left', 'right'],
      marginBlock: ['marginTop', 'marginBottom'],
      marginInline: ['marginRight', 'marginLeft'],
      paddingBlock: ['paddingTop', 'paddingBottom'],
      paddingInline: ['paddingRight', 'paddingLeft'],
      overflow: ['overflowX', 'overflowY'],
      overscrollBehavior: ['overscrollBehaviorX', 'overscrollBehaviorY'],
      borderBlockStartColor: ['borderTopColor'],
      borderBlockStartStyle: ['borderTopStyle'],
      borderBlockStartWidth: ['borderTopWidth'],
      borderBlockEndColor: ['borderBottomColor'],
      borderBlockEndStyle: ['borderBottomStyle'],
      borderBlockEndWidth: ['borderBottomWidth'],
      borderEndStartRadius: ['borderBottomLeftRadius'],
      borderEndEndRadius: ['borderBottomRightRadius'],
      borderStartStartRadius: ['borderTopLeftRadius'],
      borderStartEndRadius: ['borderTopRightRadius'],
      insetBlockEnd: ['bottom'],
      insetBlockStart: ['top'],
      marginBlockStart: ['marginTop'],
      marginBlockEnd: ['marginBottom'],
      paddingBlockStart: ['paddingTop'],
      paddingBlockEnd: ['paddingBottom'],
    };
  const Ct = (e, t) => {
    if (!e) return St;
    var n = {},
      r = function () {
        var r = e[o];
        if (null == r) return 'continue';
        if ('backgroundClip' === o) 'text' === r && ((n.backgroundClip = r), (n.WebkitBackgroundClip = r));
        else if ('flex' === o) -1 === r ? ((n.flexGrow = 0), (n.flexShrink = 1), (n.flexBasis = 'auto')) : (n.flex = r);
        else if ('font' === o) n[o] = r.replace('System', kt);
        else if ('fontFamily' === o)
          if (r.indexOf('System') > -1) {
            var a = r.split(/,\s*/);
            ((a[a.indexOf('System')] = kt), (n[o] = a.join(',')));
          } else n[o] = 'monospace' === r ? 'monospace,monospace' : r;
        else if ('textDecorationLine' === o) Et ? (n.textDecorationLine = r) : (n.textDecoration = r);
        else if ('writingDirection' === o) n.direction = r;
        else {
          var i = wt(e[o], o),
            l = xt[o];
          t && 'inset' === o
            ? (null == e.insetInline && ((n.left = i), (n.right = i)), null == e.insetBlock && ((n.top = i), (n.bottom = i)))
            : t && 'margin' === o
              ? (null == e.marginInline && ((n.marginLeft = i), (n.marginRight = i)),
                null == e.marginBlock && ((n.marginTop = i), (n.marginBottom = i)))
              : t && 'padding' === o
                ? (null == e.paddingInline && ((n.paddingLeft = i), (n.paddingRight = i)),
                  null == e.paddingBlock && ((n.paddingTop = i), (n.paddingBottom = i)))
                : l
                  ? l.forEach((t, r) => {
                      null == e[t] && (n[t] = i);
                    })
                  : (n[o] = i);
        }
      };
    for (var o in e) r();
    return n;
  };
  var Rt = /[A-Z]/g,
    Pt = /^ms-/,
    Tt = {};
  function Ot(e) {
    return '-' + e.toLowerCase();
  }
  var _t = n(485),
    At = n(261),
    Nt = n(852),
    Lt = n(20),
    Dt = n(996),
    zt = n(129),
    jt = n(508),
    Mt = ['Webkit'],
    It = ['Webkit', 'ms'];
  const Ft = {
      plugins: [At.A, Nt.A, Lt.A, Dt.A, zt.A, jt.A],
      prefixMap: {
        appearance: ['Webkit', 'Moz', 'ms'],
        userSelect: ['Webkit', 'Moz'],
        textEmphasisPosition: It,
        textEmphasis: It,
        textEmphasisStyle: It,
        textEmphasisColor: It,
        boxDecorationBreak: It,
        clipPath: Mt,
        maskImage: It,
        maskMode: It,
        maskRepeat: It,
        maskPosition: It,
        maskClip: It,
        maskOrigin: It,
        maskSize: It,
        maskComposite: It,
        mask: It,
        maskBorderSource: It,
        maskBorderMode: It,
        maskBorderSlice: It,
        maskBorderWidth: It,
        maskBorderOutset: It,
        maskBorderRepeat: It,
        maskBorder: It,
        maskType: It,
        textDecorationStyle: Mt,
        textDecorationSkip: Mt,
        textDecorationLine: Mt,
        textDecorationColor: Mt,
        filter: Mt,
        breakAfter: Mt,
        breakBefore: Mt,
        breakInside: Mt,
        columnCount: Mt,
        columnFill: Mt,
        columnGap: Mt,
        columnRule: Mt,
        columnRuleColor: Mt,
        columnRuleStyle: Mt,
        columnRuleWidth: Mt,
        columns: Mt,
        columnSpan: Mt,
        columnWidth: Mt,
        backdropFilter: Mt,
        hyphens: Mt,
        flowInto: Mt,
        flowFrom: Mt,
        regionFragment: Mt,
        textOrientation: Mt,
        tabSize: ['Moz'],
        fontKerning: Mt,
        textSizeAdjust: Mt,
      },
    },
    Bt = (0, _t.A)(Ft);
  var Ut = ['animationKeyframes'],
    Wt = new Map(),
    $t = {},
    Ht = {
      borderColor: 2,
      borderRadius: 2,
      borderStyle: 2,
      borderWidth: 2,
      display: 2,
      flex: 2,
      inset: 2,
      margin: 2,
      overflow: 2,
      overscrollBehavior: 2,
      padding: 2,
      insetBlock: 2.1,
      insetInline: 2.1,
      marginInline: 2.1,
      marginBlock: 2.1,
      paddingInline: 2.1,
      paddingBlock: 2.1,
      borderBlockStartColor: 2.2,
      borderBlockStartStyle: 2.2,
      borderBlockStartWidth: 2.2,
      borderBlockEndColor: 2.2,
      borderBlockEndStyle: 2.2,
      borderBlockEndWidth: 2.2,
      borderInlineStartColor: 2.2,
      borderInlineStartStyle: 2.2,
      borderInlineStartWidth: 2.2,
      borderInlineEndColor: 2.2,
      borderInlineEndStyle: 2.2,
      borderInlineEndWidth: 2.2,
      borderEndStartRadius: 2.2,
      borderEndEndRadius: 2.2,
      borderStartStartRadius: 2.2,
      borderStartEndRadius: 2.2,
      insetBlockEnd: 2.2,
      insetBlockStart: 2.2,
      insetInlineEnd: 2.2,
      insetInlineStart: 2.2,
      marginBlockStart: 2.2,
      marginBlockEnd: 2.2,
      marginInlineStart: 2.2,
      marginInlineEnd: 2.2,
      paddingBlockStart: 2.2,
      paddingBlockEnd: 2.2,
      paddingInlineStart: 2.2,
      paddingInlineEnd: 2.2,
    },
    qt = 'borderTopLeftRadius',
    Vt = 'borderTopRightRadius',
    Gt = 'borderBottomLeftRadius',
    Yt = 'borderBottomRightRadius',
    Kt = 'borderLeftColor',
    Xt = 'borderLeftStyle',
    Qt = 'borderLeftWidth',
    Jt = 'borderRightColor',
    Zt = 'borderRightStyle',
    en = 'borderRightWidth',
    tn = 'right',
    nn = 'marginLeft',
    rn = 'marginRight',
    on = 'paddingLeft',
    an = 'paddingRight',
    ln = 'left',
    un = {
      [qt]: Vt,
      [Vt]: qt,
      [Gt]: Yt,
      [Yt]: Gt,
      [Kt]: Jt,
      [Xt]: Zt,
      [Qt]: en,
      [Jt]: Kt,
      [Zt]: Xt,
      [en]: Qt,
      [ln]: tn,
      [nn]: rn,
      [rn]: nn,
      [on]: an,
      [an]: on,
      [tn]: ln,
    },
    sn = {
      borderStartStartRadius: qt,
      borderStartEndRadius: Vt,
      borderEndStartRadius: Gt,
      borderEndEndRadius: Yt,
      borderInlineStartColor: Kt,
      borderInlineStartStyle: Xt,
      borderInlineStartWidth: Qt,
      borderInlineEndColor: Jt,
      borderInlineEndStyle: Zt,
      borderInlineEndWidth: en,
      insetInlineEnd: tn,
      insetInlineStart: ln,
      marginInlineStart: nn,
      marginInlineEnd: rn,
      paddingInlineStart: on,
      paddingInlineEnd: an,
    },
    cn = ['clear', 'float', 'textAlign'];
  function fn(e) {
    var t = Bt(Ct(e));
    return (
      '{' +
      Object.keys(t)
        .map((e) => {
          var n = t[e],
            r = (function (e) {
              if (e in Tt) return Tt[e];
              var t = e.replace(Rt, Ot);
              return (Tt[e] = Pt.test(t) ? '-' + t : t);
            })(e);
          return Array.isArray(n) ? n.map((e) => r + ':' + e).join(';') : r + ':' + n;
        })
        .sort()
        .join(';') +
      ';}'
    );
  }
  function dn(e, t, n) {
    return (
      e +
      '-' +
      (function (e) {
        for (var t, n = e.length, r = 1 ^ n, o = 0; n >= 4; )
          ((t =
            1540483477 *
              (65535 &
                (t =
                  (255 & e.charCodeAt(o)) |
                  ((255 & e.charCodeAt(++o)) << 8) |
                  ((255 & e.charCodeAt(++o)) << 16) |
                  ((255 & e.charCodeAt(++o)) << 24))) +
            (((1540483477 * (t >>> 16)) & 65535) << 16)),
            (r =
              (1540483477 * (65535 & r) + (((1540483477 * (r >>> 16)) & 65535) << 16)) ^
              (t = 1540483477 * (65535 & (t ^= t >>> 24)) + (((1540483477 * (t >>> 16)) & 65535) << 16))),
            (n -= 4),
            ++o);
        switch (n) {
          case 3:
            r ^= (255 & e.charCodeAt(o + 2)) << 16;
          case 2:
            r ^= (255 & e.charCodeAt(o + 1)) << 8;
          case 1:
            r = 1540483477 * (65535 & (r ^= 255 & e.charCodeAt(o))) + (((1540483477 * (r >>> 16)) & 65535) << 16);
        }
        return ((r = 1540483477 * (65535 & (r ^= r >>> 13)) + (((1540483477 * (r >>> 16)) & 65535) << 16)), (r ^= r >>> 15) >>> 0);
      })(t + n).toString(36)
    );
  }
  function pn(e) {
    if ('number' == typeof e) throw new Error('Invalid CSS keyframes type: ' + typeof e);
    var t = [],
      n = [];
    return (
      (Array.isArray(e) ? e : [e]).forEach((e) => {
        if ('string' == typeof e) t.push(e);
        else {
          var r = (function (e) {
              var t = dn('r', 'animation', JSON.stringify(e)),
                n =
                  '{' +
                  Object.keys(e)
                    .map((t) => '' + t + fn(e[t]))
                    .join('') +
                  '}',
                r = ['-webkit-', ''].map((e) => '@' + e + 'keyframes ' + t + n);
              return [t, r];
            })(e),
            o = r[0],
            a = r[1];
          (t.push(o), n.push(...a));
        }
      }),
      [t, n]
    );
  }
  function hn(e, t, n) {
    if (lt) {
      var r = null != t ? t : document,
        o = r.getElementById(e);
      if (null == o)
        if (
          ((o = document.createElement('style')).setAttribute('id', e),
          'string' == typeof n && o.appendChild(document.createTextNode(n)),
          r instanceof ShadowRoot)
        )
          r.insertBefore(o, r.firstChild);
        else {
          var a = r.head;
          a && a.insertBefore(o, a.firstChild);
        }
      return o.sheet;
    }
    return null;
  }
  var mn = Array.prototype.slice;
  function yn(e) {
    var t,
      n = {},
      r = {};
    function o(e, t, r) {
      var o = vn(n),
        a = o.indexOf(t) + 1,
        i = o[a],
        l = null != i && null != n[i].start ? n[i].start : e.cssRules.length,
        u = (function (e, t, n) {
          try {
            return (e.insertRule(t, n), !0);
          } catch (e) {
            return !1;
          }
        })(e, r, l);
      if (u) {
        null == n[t].start && (n[t].start = l);
        for (var s = a; s < o.length; s += 1) {
          var c = o[s],
            f = n[c].start || 0;
          n[c].start = f + 1;
        }
      }
      return u;
    }
    null != e &&
      mn.call(e.cssRules).forEach((e, o) => {
        var a = e.cssText;
        if (a.indexOf('stylesheet-group') > -1)
          ((t = (function (e) {
            return Number(e.selectorText.split(gn)[1]);
          })(e)),
            (n[t] = { start: o, rules: [a] }));
        else {
          var i = wn(a);
          null != i && ((r[i] = !0), n[t].rules.push(a));
        }
      });
    var a = {
      getTextContent: () =>
        vn(n)
          .map((e) => {
            var t = n[e].rules,
              r = t.shift();
            return (t.sort(), t.unshift(r), t.join('\n'));
          })
          .join('\n'),
      insert(t, a) {
        var i = Number(a);
        if (null == n[i]) {
          var l = (function (e) {
            return '[stylesheet-group="' + e + '"]{}';
          })(i);
          ((n[i] = { start: null, rules: [l] }), null != e && o(e, i, l));
        }
        var u = wn(t);
        null != u && null == r[u] && ((r[u] = !0), n[i].rules.push(t), null != e && (o(e, i, t) || n[i].rules.pop()));
      },
    };
    return a;
  }
  var gn = /["']/g;
  function vn(e) {
    return Object.keys(e)
      .map(Number)
      .sort((e, t) => (e > t ? 1 : -1));
  }
  var bn = /\s*([,])\s*/g;
  function wn(e) {
    var t = e.split('{')[0].trim();
    return '' !== t ? t.replace(bn, '$1') : null;
  }
  var Sn = new WeakMap(),
    En = [],
    kn = [
      'html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}',
      'body{margin:0;}',
      'button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}',
      'input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}',
    ],
    xn = n(336);
  var Cn = {},
    Rn = { height: 0, width: 0 },
    Pn = (e) => {
      if ('string' == typeof e) return e;
      var t = wt(e.offsetX) || 0,
        n = wt(e.offsetY) || 0,
        r = wt(e.blurRadius) || 0,
        o = wt(e.spreadDistance) || 0,
        a = vt(e.color) || 'black';
      return (e.inset ? 'inset ' : '') + t + ' ' + n + ' ' + r + ' ' + o + ' ' + a;
    },
    Tn = (e) => e.map(Pn).join(', '),
    On = (e) => {
      var t = Object.keys(e)[0],
        n = e[t];
      return 'matrix' === t || 'matrix3d' === t ? t + '(' + n.join(',') + ')' : t + '(' + wt(n, t) + ')';
    },
    _n = (e) => e.map(On).join(' '),
    An = (e) => e.map((e) => wt(e)).join(' '),
    Nn = {
      borderBottomEndRadius: 'borderEndEndRadius',
      borderBottomStartRadius: 'borderEndStartRadius',
      borderTopEndRadius: 'borderStartEndRadius',
      borderTopStartRadius: 'borderStartStartRadius',
      borderEndColor: 'borderInlineEndColor',
      borderEndStyle: 'borderInlineEndStyle',
      borderEndWidth: 'borderInlineEndWidth',
      borderStartColor: 'borderInlineStartColor',
      borderStartStyle: 'borderInlineStartStyle',
      borderStartWidth: 'borderInlineStartWidth',
      end: 'insetInlineEnd',
      marginEnd: 'marginInlineEnd',
      marginHorizontal: 'marginInline',
      marginStart: 'marginInlineStart',
      marginVertical: 'marginBlock',
      paddingEnd: 'paddingInlineEnd',
      paddingHorizontal: 'paddingInline',
      paddingStart: 'paddingInlineStart',
      paddingVertical: 'paddingBlock',
      start: 'insetInlineStart',
    },
    Ln = { elevation: !0, overlayColor: !0, resizeMode: !0, tintColor: !0 },
    Dn = function (e, t) {
      void 0 === t && (t = {});
      var n = e || Cn,
        r = {};
      if ((t.shadow, null != n.shadowColor || null != n.shadowOffset || null != n.shadowOpacity || null != n.shadowRadius)) {
        var o = ((e) => {
          var t = e.shadowColor,
            n = e.shadowOffset,
            r = e.shadowOpacity,
            o = e.shadowRadius,
            a = n || Rn,
            i = a.height,
            l = wt(a.width),
            u = wt(i),
            s = wt(o || 0),
            c = vt(t || 'black', r);
          if (null != c && null != l && null != u && null != s) return l + ' ' + u + ' ' + s + ' ' + c;
        })(n);
        null != o && (r.boxShadow = o);
      }
      if ((t.textShadow, null != n.textShadowColor || null != n.textShadowOffset || null != n.textShadowRadius)) {
        var a = ((e) => {
          var t = e.textShadowColor,
            n = e.textShadowOffset,
            r = e.textShadowRadius,
            o = n || Rn,
            a = o.height,
            i = o.width,
            l = r || 0,
            u = wt(i),
            s = wt(a),
            c = wt(l),
            f = wt(t, 'textShadowColor');
          if (f && (0 !== a || 0 !== i || 0 !== l) && null != u && null != s && null != c) return u + ' ' + s + ' ' + c + ' ' + f;
        })(n);
        if (null != a && null == r.textShadow) {
          var i = n.textShadow,
            l = i ? i + ', ' + a : a;
          r.textShadow = l;
        }
      }
      for (var u in n)
        if (
          null == Ln[u] &&
          'shadowColor' !== u &&
          'shadowOffset' !== u &&
          'shadowOpacity' !== u &&
          'shadowRadius' !== u &&
          'textShadowColor' !== u &&
          'textShadowOffset' !== u &&
          'textShadowRadius' !== u
        ) {
          var s = n[u],
            c = Nn[u] || u,
            f = s;
          if (Object.prototype.hasOwnProperty.call(n, u) && (c === u || null == n[c]))
            if ('aspectRatio' === c && 'number' == typeof f) r[c] = f.toString();
            else if ('boxShadow' === c) {
              Array.isArray(f) && (f = Tn(f));
              var d = r.boxShadow;
              r.boxShadow = d ? f + ', ' + d : f;
            } else
              'fontVariant' === c
                ? (Array.isArray(f) && f.length > 0 && (f = f.join(' ')), (r[c] = f))
                : 'textAlignVertical' === c
                  ? null == n.verticalAlign && (r.verticalAlign = 'center' === f ? 'middle' : f)
                  : 'transform' === c
                    ? (Array.isArray(f) && (f = _n(f)), (r.transform = f))
                    : 'transformOrigin' === c
                      ? (Array.isArray(f) && (f = An(f)), (r.transformOrigin = f))
                      : (r[c] = f);
        }
      return r;
    },
    zn = n(176),
    jn = ['writingDirection'],
    Mn = new WeakMap(),
    In = (function (e, t) {
      var n;
      if ((void 0 === t && (t = 'react-native-stylesheet'), lt)) {
        var r = document;
        if (0 === En.length)
          ((n = yn(hn(t))),
            kn.forEach((e) => {
              n.insert(e, 0);
            }),
            Sn.set(r, En.length),
            En.push(n));
        else {
          var o = Sn.get(r);
          if (null == o) {
            var a = En[0],
              i = null != a ? a.getTextContent() : '';
            ((n = yn(hn(t, r, i))), Sn.set(r, En.length), En.push(n));
          } else n = En[o];
        }
      } else
        0 === En.length
          ? ((n = yn(hn(t))),
            kn.forEach((e) => {
              n.insert(e, 0);
            }),
            En.push(n))
          : (n = En[0]);
      return {
        getTextContent: () => n.getTextContent(),
        id: t,
        insert(e, t) {
          En.forEach((n) => {
            n.insert(e, t);
          });
        },
      };
    })(),
    Fn = { shadow: !0, textShadow: !0 };
  function Bn(e) {
    e.forEach((e) => {
      var t = e[0],
        n = e[1];
      null != In &&
        t.forEach((e) => {
          In.insert(e, n);
        });
    });
  }
  var Un = { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
    Wn = $n({ x: dt({}, Un) }).x;
  function $n(e) {
    return (
      Object.keys(e).forEach((t) => {
        var n,
          r,
          o,
          a = e[t];
        null != a &&
          !0 !== a.$$css &&
          (t.indexOf('$raw') > -1
            ? (n = (function (e, t) {
                var n = (function (e, t) {
                    var n,
                      r = { $$css: !0 },
                      o = [],
                      a = e.animationKeyframes,
                      i = at(e, Ut),
                      l = dn('css', t, JSON.stringify(e)),
                      u = '.' + l;
                    if (null != a) {
                      var s = pn(a),
                        c = s[0],
                        f = s[1];
                      ((n = c.join(',')), o.push(...f));
                    }
                    var d = fn(dt(dt({}, i), {}, { animationName: n }));
                    return (o.push('' + u + d), (r[l] = l), [r, [[o, 1]]]);
                  })(e, t),
                  r = n[0];
                return (Bn(n[1]), r);
              })(a, t.split('$raw')[0]))
            : ((r = (function (e) {
                var t = { $$css: !0 },
                  n = [];
                function r(e, t, r) {
                  var o,
                    a = (function (e, t) {
                      var n = wt(e, t);
                      return 'string' != typeof n ? JSON.stringify(n || '') : n;
                    })(r, t),
                    i = t + a,
                    l = Wt.get(i);
                  if (null != l) ((o = l[0]), n.push(l[1]));
                  else {
                    o = dn('r', e, e !== t ? i : a);
                    var u = Ht[e] || 3,
                      s = (function (e, t, n) {
                        var r = [],
                          o = '.' + e;
                        switch (t) {
                          case 'animationKeyframes':
                            var a = pn(n),
                              i = a[0],
                              l = a[1],
                              u = fn({ animationName: i.join(',') });
                            r.push('' + o + u, ...l);
                            break;
                          case 'placeholderTextColor':
                            var s = fn({ color: n, opacity: 1 });
                            r.push(
                              o + '::-webkit-input-placeholder' + s,
                              o + '::-moz-placeholder' + s,
                              o + ':-ms-input-placeholder' + s,
                              o + '::placeholder' + s,
                            );
                            break;
                          case 'pointerEvents':
                            var c = n;
                            if ('auto' === n || 'box-only' === n) {
                              if (((c = 'auto!important'), 'box-only' === n)) {
                                var f = fn({ pointerEvents: 'none' });
                                r.push(o + '>*' + f);
                              }
                            } else if (('none' === n || 'box-none' === n) && ((c = 'none!important'), 'box-none' === n)) {
                              var d = fn({ pointerEvents: 'auto' });
                              r.push(o + '>*' + d);
                            }
                            var p = fn({ pointerEvents: c });
                            r.push('' + o + p);
                            break;
                          case 'scrollbarWidth':
                            'none' === n && r.push(o + '::-webkit-scrollbar{display:none}');
                            var h = fn({ scrollbarWidth: n });
                            r.push('' + o + h);
                            break;
                          default:
                            var m = fn({ [t]: n });
                            r.push('' + o + m);
                        }
                        return r;
                      })(o, t, r),
                      c = [s, u];
                    (n.push(c), Wt.set(i, [o, c]));
                  }
                  return o;
                }
                return (
                  Object.keys(e)
                    .sort()
                    .forEach((n) => {
                      var o = e[n];
                      if (null != o) {
                        var a;
                        if (cn.indexOf(n) > -1) {
                          var i = r(n, n, 'left'),
                            l = r(n, n, 'right');
                          'start' === o ? (a = [i, l]) : 'end' === o && (a = [l, i]);
                        }
                        var u = sn[n];
                        if (null != u) {
                          var s = r(n, u, o),
                            c = r(n, un[u], o);
                          a = [s, c];
                        }
                        if ('transitionProperty' === n) {
                          for (var f = Array.isArray(o) ? o : [o], d = [], p = 0; p < f.length; p++) {
                            var h = f[p];
                            'string' == typeof h && null != sn[h] && d.push(p);
                          }
                          if (d.length > 0) {
                            var m = [...f],
                              y = [...f];
                            d.forEach((e) => {
                              var t = m[e];
                              if ('string' == typeof t) {
                                var o = sn[t],
                                  i = un[o];
                                ((m[e] = o), (y[e] = i));
                                var l = r(n, n, m),
                                  u = r(n, n, y);
                                a = [l, u];
                              }
                            });
                          }
                        }
                        (null == a ? (a = r(n, n, o)) : (t.$$css$localize = !0), (t[n] = a));
                      }
                    }),
                  [t, n]
                );
              })(Dn(a, Fn))),
              (o = r[0]),
              Bn(r[1]),
              (n = o)),
          Mn.set(a, n));
      }),
      e
    );
  }
  function Hn(e, t) {
    void 0 === t && (t = {});
    var n = 'rtl' === t.writingDirection,
      r = (function (e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.writingDirection,
          o = at(n, jn),
          a = 'rtl' === r;
        return zn.P.factory({
          transform(e) {
            var t = Mn.get(e);
            return null != t ? (0, xn.n)(t, a) : Dn(e, dt(dt({}, Fn), o));
          },
        })(e);
      })(e, t);
    return (
      Array.isArray(r) &&
        null != r[1] &&
        (r[1] = (function (e, t) {
          var n = e || $t,
            r = {},
            o = {},
            a = function () {
              var e = n[i],
                a = i,
                l = e;
              if (!Object.prototype.hasOwnProperty.call(n, i) || null == e) return 'continue';
              cn.indexOf(i) > -1 && ('start' === e ? (l = t ? 'right' : 'left') : 'end' === e && (l = t ? 'left' : 'right'));
              var u = sn[i];
              if ((null != u && (a = t ? un[u] : u), 'transitionProperty' === i)) {
                var s = Array.isArray(e) ? e : [e];
                s.forEach((e, n) => {
                  if ('string' == typeof e) {
                    var r = sn[e];
                    null != r && ((s[n] = t ? un[r] : r), (l = s.join(' ')));
                  }
                });
              }
              (r[a] || (o[a] = l), a === i && (r[a] = !0));
            };
          for (var i in n) a();
          return Ct(o, !0);
        })(r[1], n)),
      r
    );
  }
  ((Hn.absoluteFill = Wn),
    (Hn.absoluteFillObject = Un),
    (Hn.create = $n),
    (Hn.compose = function (e, t) {
      return [e, t];
    }),
    (Hn.flatten = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      for (var r = t.flat(1 / 0), o = {}, a = 0; a < r.length; a++) {
        var i = r[a];
        null != i && 'object' == typeof i && Object.assign(o, i);
      }
      return o;
    }),
    (Hn.getSheet = function () {
      return { id: In.id, textContent: In.getTextContent() };
    }),
    (Hn.hairlineWidth = 1),
    lt && window.__REACT_DEVTOOLS_GLOBAL_HOOK__ && (window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = Hn.flatten));
  const qn = Hn;
  var Vn = {
    adjustable: 'slider',
    button: 'button',
    header: 'heading',
    image: 'img',
    imagebutton: null,
    keyboardkey: null,
    label: null,
    link: 'link',
    none: 'presentation',
    search: 'search',
    summary: 'region',
    text: null,
  };
  const Gn = (e) => {
    var t = e.accessibilityRole,
      n = e.role || t;
    if (n) {
      var r = Vn[n];
      if (null !== r) return r || n;
    }
  };
  var Yn = {
      article: 'article',
      banner: 'header',
      blockquote: 'blockquote',
      button: 'button',
      code: 'code',
      complementary: 'aside',
      contentinfo: 'footer',
      deletion: 'del',
      emphasis: 'em',
      figure: 'figure',
      insertion: 'ins',
      form: 'form',
      list: 'ul',
      listitem: 'li',
      main: 'main',
      navigation: 'nav',
      paragraph: 'p',
      region: 'section',
      strong: 'strong',
    },
    Kn = {};
  const Xn = function (e) {
      if ((void 0 === e && (e = Kn), 'label' === (e.role || e.accessibilityRole))) return 'label';
      var t = Gn(e);
      if (t) {
        if ('heading' === t) {
          var n = e.accessibilityLevel || e['aria-level'];
          return null != n ? 'h' + n : 'h1';
        }
        return Yn[t];
      }
    },
    Qn = Gn;
  var Jn = [
      'aria-activedescendant',
      'accessibilityActiveDescendant',
      'aria-atomic',
      'accessibilityAtomic',
      'aria-autocomplete',
      'accessibilityAutoComplete',
      'aria-busy',
      'accessibilityBusy',
      'aria-checked',
      'accessibilityChecked',
      'aria-colcount',
      'accessibilityColumnCount',
      'aria-colindex',
      'accessibilityColumnIndex',
      'aria-colspan',
      'accessibilityColumnSpan',
      'aria-controls',
      'accessibilityControls',
      'aria-current',
      'accessibilityCurrent',
      'aria-describedby',
      'accessibilityDescribedBy',
      'aria-details',
      'accessibilityDetails',
      'aria-disabled',
      'accessibilityDisabled',
      'aria-errormessage',
      'accessibilityErrorMessage',
      'aria-expanded',
      'accessibilityExpanded',
      'aria-flowto',
      'accessibilityFlowTo',
      'aria-haspopup',
      'accessibilityHasPopup',
      'aria-hidden',
      'accessibilityHidden',
      'aria-invalid',
      'accessibilityInvalid',
      'aria-keyshortcuts',
      'accessibilityKeyShortcuts',
      'aria-label',
      'accessibilityLabel',
      'aria-labelledby',
      'accessibilityLabelledBy',
      'aria-level',
      'accessibilityLevel',
      'aria-live',
      'accessibilityLiveRegion',
      'aria-modal',
      'accessibilityModal',
      'aria-multiline',
      'accessibilityMultiline',
      'aria-multiselectable',
      'accessibilityMultiSelectable',
      'aria-orientation',
      'accessibilityOrientation',
      'aria-owns',
      'accessibilityOwns',
      'aria-placeholder',
      'accessibilityPlaceholder',
      'aria-posinset',
      'accessibilityPosInSet',
      'aria-pressed',
      'accessibilityPressed',
      'aria-readonly',
      'accessibilityReadOnly',
      'aria-required',
      'accessibilityRequired',
      'role',
      'accessibilityRole',
      'aria-roledescription',
      'accessibilityRoleDescription',
      'aria-rowcount',
      'accessibilityRowCount',
      'aria-rowindex',
      'accessibilityRowIndex',
      'aria-rowspan',
      'accessibilityRowSpan',
      'aria-selected',
      'accessibilitySelected',
      'aria-setsize',
      'accessibilitySetSize',
      'aria-sort',
      'accessibilitySort',
      'aria-valuemax',
      'accessibilityValueMax',
      'aria-valuemin',
      'accessibilityValueMin',
      'aria-valuenow',
      'accessibilityValueNow',
      'aria-valuetext',
      'accessibilityValueText',
      'dataSet',
      'focusable',
      'id',
      'nativeID',
      'pointerEvents',
      'style',
      'tabIndex',
      'testID',
    ],
    Zn = {},
    er = Object.prototype.hasOwnProperty,
    tr = Array.isArray,
    nr = /[A-Z]/g;
  function rr(e) {
    return '-' + e.toLowerCase();
  }
  function or(e) {
    return tr(e) ? e.join(' ') : e;
  }
  var ar = qn.create({
    auto: { pointerEvents: 'auto' },
    'box-none': { pointerEvents: 'box-none' },
    'box-only': { pointerEvents: 'box-only' },
    none: { pointerEvents: 'none' },
  });
  var ir = new Set(['Arab', 'Syrc', 'Samr', 'Mand', 'Thaa', 'Mend', 'Nkoo', 'Adlm', 'Rohg', 'Hebr']),
    lr = new Set([
      'ae',
      'ar',
      'arc',
      'bcc',
      'bqi',
      'ckb',
      'dv',
      'fa',
      'far',
      'glk',
      'he',
      'iw',
      'khw',
      'ks',
      'ku',
      'mzn',
      'nqo',
      'pnb',
      'ps',
      'sd',
      'ug',
      'ur',
      'yi',
    ]),
    ur = new Map(),
    sr = { direction: 'ltr', locale: 'en-US' },
    cr = (0, a.createContext)(sr);
  function fr(e) {
    return (function (e) {
      var t = ur.get(e);
      if (t) return t;
      var n = !1;
      if (Intl.Locale)
        try {
          var r = new Intl.Locale(e).maximize().script;
          n = ir.has(r);
        } catch (t) {
          var o = e.split('-')[0];
          n = lr.has(o);
        }
      else {
        var a = e.split('-')[0];
        n = lr.has(a);
      }
      return (ur.set(e, n), n);
    })(e)
      ? 'rtl'
      : 'ltr';
  }
  function dr(e) {
    var t = e.direction,
      n = e.locale,
      r = e.children;
    return t || n
      ? a.createElement(cr.Provider, {
          children: r,
          value: { direction: n ? fr(n) : t, locale: n },
        })
      : r;
  }
  function pr() {
    return (0, a.useContext)(cr);
  }
  const hr = (e, t, n) => {
    var r;
    e && e.constructor === String && (r = Xn(t));
    var o = r || e,
      i = ((e, t, n) => {
        t || (t = Zn);
        var r = t,
          o = r['aria-activedescendant'],
          a = r.accessibilityActiveDescendant,
          i = r['aria-atomic'],
          l = r.accessibilityAtomic,
          u = r['aria-autocomplete'],
          s = r.accessibilityAutoComplete,
          c = r['aria-busy'],
          f = r.accessibilityBusy,
          d = r['aria-checked'],
          p = r.accessibilityChecked,
          h = r['aria-colcount'],
          m = r.accessibilityColumnCount,
          y = r['aria-colindex'],
          g = r.accessibilityColumnIndex,
          v = r['aria-colspan'],
          b = r.accessibilityColumnSpan,
          w = r['aria-controls'],
          S = r.accessibilityControls,
          E = r['aria-current'],
          k = r.accessibilityCurrent,
          x = r['aria-describedby'],
          C = r.accessibilityDescribedBy,
          R = r['aria-details'],
          P = r.accessibilityDetails,
          T = r['aria-disabled'],
          O = r.accessibilityDisabled,
          _ = r['aria-errormessage'],
          A = r.accessibilityErrorMessage,
          N = r['aria-expanded'],
          L = r.accessibilityExpanded,
          D = r['aria-flowto'],
          z = r.accessibilityFlowTo,
          j = r['aria-haspopup'],
          M = r.accessibilityHasPopup,
          I = r['aria-hidden'],
          F = r.accessibilityHidden,
          B = r['aria-invalid'],
          U = r.accessibilityInvalid,
          W = r['aria-keyshortcuts'],
          $ = r.accessibilityKeyShortcuts,
          H = r['aria-label'],
          q = r.accessibilityLabel,
          V = r['aria-labelledby'],
          G = r.accessibilityLabelledBy,
          Y = r['aria-level'],
          K = r.accessibilityLevel,
          X = r['aria-live'],
          Q = r.accessibilityLiveRegion,
          J = r['aria-modal'],
          Z = r.accessibilityModal,
          ee = r['aria-multiline'],
          te = r.accessibilityMultiline,
          ne = r['aria-multiselectable'],
          re = r.accessibilityMultiSelectable,
          oe = r['aria-orientation'],
          ae = r.accessibilityOrientation,
          ie = r['aria-owns'],
          le = r.accessibilityOwns,
          ue = r['aria-placeholder'],
          se = r.accessibilityPlaceholder,
          ce = r['aria-posinset'],
          fe = r.accessibilityPosInSet,
          de = r['aria-pressed'],
          pe = r.accessibilityPressed,
          he = r['aria-readonly'],
          me = r.accessibilityReadOnly,
          ye = r['aria-required'],
          ge = r.accessibilityRequired,
          ve = (r.role, r.accessibilityRole, r['aria-roledescription']),
          be = r.accessibilityRoleDescription,
          we = r['aria-rowcount'],
          Se = r.accessibilityRowCount,
          Ee = r['aria-rowindex'],
          ke = r.accessibilityRowIndex,
          xe = r['aria-rowspan'],
          Ce = r.accessibilityRowSpan,
          Re = r['aria-selected'],
          Pe = r.accessibilitySelected,
          Te = r['aria-setsize'],
          Oe = r.accessibilitySetSize,
          _e = r['aria-sort'],
          Ae = r.accessibilitySort,
          Ne = r['aria-valuemax'],
          Le = r.accessibilityValueMax,
          De = r['aria-valuemin'],
          ze = r.accessibilityValueMin,
          je = r['aria-valuenow'],
          Me = r.accessibilityValueNow,
          Ie = r['aria-valuetext'],
          Fe = r.accessibilityValueText,
          Be = r.dataSet,
          Ue = r.focusable,
          We = r.id,
          $e = r.nativeID,
          He = r.pointerEvents,
          qe = r.style,
          Ve = r.tabIndex,
          Ge = r.testID,
          Ye = at(r, Jn),
          Ke = T || O,
          Xe = Qn(t),
          Qe = null != o ? o : a;
        null != Qe && (Ye['aria-activedescendant'] = Qe);
        var Je = null != i ? o : l;
        null != Je && (Ye['aria-atomic'] = Je);
        var Ze = null != u ? u : s;
        null != Ze && (Ye['aria-autocomplete'] = Ze);
        var et = null != c ? c : f;
        null != et && (Ye['aria-busy'] = et);
        var tt = null != d ? d : p;
        null != tt && (Ye['aria-checked'] = tt);
        var nt = null != h ? h : m;
        null != nt && (Ye['aria-colcount'] = nt);
        var rt = null != y ? y : g;
        null != rt && (Ye['aria-colindex'] = rt);
        var ot = null != v ? v : b;
        null != ot && (Ye['aria-colspan'] = ot);
        var it = null != w ? w : S;
        null != it && (Ye['aria-controls'] = or(it));
        var lt = null != E ? E : k;
        null != lt && (Ye['aria-current'] = lt);
        var ut = null != x ? x : C;
        null != ut && (Ye['aria-describedby'] = or(ut));
        var st = null != R ? R : P;
        (null != st && (Ye['aria-details'] = st),
          !0 === Ke &&
            ((Ye['aria-disabled'] = !0),
            ('button' !== e && 'form' !== e && 'input' !== e && 'select' !== e && 'textarea' !== e) || (Ye.disabled = !0)));
        var ct = null != _ ? _ : A;
        null != ct && (Ye['aria-errormessage'] = ct);
        var ft = null != N ? N : L;
        null != ft && (Ye['aria-expanded'] = ft);
        var pt = null != D ? D : z;
        null != pt && (Ye['aria-flowto'] = or(pt));
        var ht = null != j ? j : M;
        null != ht && (Ye['aria-haspopup'] = ht);
        var mt = null != I ? I : F;
        !0 === mt && (Ye['aria-hidden'] = mt);
        var yt = null != B ? B : U;
        null != yt && (Ye['aria-invalid'] = yt);
        var gt = null != W ? W : $;
        null != gt && (Ye['aria-keyshortcuts'] = or(gt));
        var vt = null != H ? H : q;
        null != vt && (Ye['aria-label'] = vt);
        var bt = null != V ? V : G;
        null != bt && (Ye['aria-labelledby'] = or(bt));
        var wt = null != Y ? Y : K;
        null != wt && (Ye['aria-level'] = wt);
        var St = null != X ? X : Q;
        null != St && (Ye['aria-live'] = 'none' === St ? 'off' : St);
        var Et = null != J ? J : Z;
        null != Et && (Ye['aria-modal'] = Et);
        var kt = null != ee ? ee : te;
        null != kt && (Ye['aria-multiline'] = kt);
        var xt = null != ne ? ne : re;
        null != xt && (Ye['aria-multiselectable'] = xt);
        var Ct = null != oe ? oe : ae;
        null != Ct && (Ye['aria-orientation'] = Ct);
        var Rt = null != ie ? ie : le;
        null != Rt && (Ye['aria-owns'] = or(Rt));
        var Pt = null != ue ? ue : se;
        null != Pt && (Ye['aria-placeholder'] = Pt);
        var Tt = null != ce ? ce : fe;
        null != Tt && (Ye['aria-posinset'] = Tt);
        var Ot = null != de ? de : pe;
        null != Ot && (Ye['aria-pressed'] = Ot);
        var _t = null != he ? he : me;
        null != _t && ((Ye['aria-readonly'] = _t), ('input' !== e && 'select' !== e && 'textarea' !== e) || (Ye.readOnly = !0));
        var At = null != ye ? ye : ge;
        (null != At && ((Ye['aria-required'] = At), ('input' !== e && 'select' !== e && 'textarea' !== e) || (Ye.required = ge)),
          null != Xe && (Ye.role = 'none' === Xe ? 'presentation' : Xe));
        var Nt = null != ve ? ve : be;
        null != Nt && (Ye['aria-roledescription'] = Nt);
        var Lt = null != we ? we : Se;
        null != Lt && (Ye['aria-rowcount'] = Lt);
        var Dt = null != Ee ? Ee : ke;
        null != Dt && (Ye['aria-rowindex'] = Dt);
        var zt = null != xe ? xe : Ce;
        null != zt && (Ye['aria-rowspan'] = zt);
        var jt = null != Re ? Re : Pe;
        null != jt && (Ye['aria-selected'] = jt);
        var Mt = null != Te ? Te : Oe;
        null != Mt && (Ye['aria-setsize'] = Mt);
        var It = null != _e ? _e : Ae;
        null != It && (Ye['aria-sort'] = It);
        var Ft = null != Ne ? Ne : Le;
        null != Ft && (Ye['aria-valuemax'] = Ft);
        var Bt = null != De ? De : ze;
        null != Bt && (Ye['aria-valuemin'] = Bt);
        var Ut = null != je ? je : Me;
        null != Ut && (Ye['aria-valuenow'] = Ut);
        var Wt = null != Ie ? Ie : Fe;
        if ((null != Wt && (Ye['aria-valuetext'] = Wt), null != Be))
          for (var $t in Be)
            if (er.call(Be, $t)) {
              var Ht = $t.replace(nr, rr),
                qt = Be[$t];
              null != qt && (Ye['data-' + Ht] = qt);
            }
        0 === Ve || '0' === Ve || -1 === Ve || '-1' === Ve
          ? (Ye.tabIndex = Ve)
          : (!1 === Ue && (Ye.tabIndex = '-1'),
            'a' === e || 'button' === e || 'input' === e || 'select' === e || 'textarea' === e
              ? (!1 !== Ue && !0 !== O) || (Ye.tabIndex = '-1')
              : 'button' === Xe || 'checkbox' === Xe || 'link' === Xe || 'radio' === Xe || 'textbox' === Xe || 'switch' === Xe
                ? !1 !== Ue && (Ye.tabIndex = '0')
                : !0 === Ue && (Ye.tabIndex = '0'));
        var Vt = qn([qe, He && ar[He]], dt({ writingDirection: 'ltr' }, n)),
          Gt = Vt[0],
          Yt = Vt[1];
        (Gt && (Ye.className = Gt), Yt && (Ye.style = Yt));
        var Kt = null != We ? We : $e;
        return (null != Kt && (Ye.id = Kt), null != Ge && (Ye['data-testid'] = Ge), null == Ye.type && 'button' === e && (Ye.type = 'button'), Ye);
      })(o, t, n),
      l = a.createElement(o, i);
    return i.dir ? a.createElement(dr, { children: l, direction: i.dir, locale: i.lang }) : l;
  };
  function mr(e, t) {
    return 'slide' === e ? (t ? gr : vr) : 'fade' === e ? (t ? br : wr) : t ? yr.container : yr.hidden;
  }
  var yr = qn.create({
      container: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 9999,
      },
      animatedIn: {
        animationDuration: '300ms',
        animationTimingFunction: 'ease-in',
      },
      animatedOut: {
        pointerEvents: 'none',
        animationDuration: '300ms',
        animationTimingFunction: 'ease-out',
      },
      fadeIn: {
        opacity: 1,
        animationKeyframes: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
      },
      fadeOut: {
        opacity: 0,
        animationKeyframes: { '0%': { opacity: 1 }, '100%': { opacity: 0 } },
      },
      slideIn: {
        transform: 'translateY(0%)',
        animationKeyframes: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      slideOut: {
        transform: 'translateY(100%)',
        animationKeyframes: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      hidden: { opacity: 0 },
    }),
    gr = [yr.container, yr.animatedIn, yr.slideIn],
    vr = [yr.container, yr.animatedOut, yr.slideOut],
    br = [yr.container, yr.animatedIn, yr.fadeIn],
    wr = [yr.container, yr.animatedOut, yr.fadeOut];
  const Sr = function (e) {
    var t = e.animationType,
      n = e.children,
      r = e.onDismiss,
      o = e.onShow,
      i = e.visible,
      l = a.useState(!1),
      u = l[0],
      s = l[1],
      c = a.useRef(!1),
      f = a.useRef(!1),
      d = t && 'none' !== t,
      p = a.useCallback(
        (e) => {
          (e && e.currentTarget !== e.target) || (i ? o && o() : s(!1));
        },
        [o, i],
      );
    return (
      a.useEffect(() => {
        (f.current && !u && r && r(), (f.current = u));
      }, [u, r]),
      a.useEffect(() => {
        (i && s(!0), i === c.current || d || p(), (c.current = i));
      }, [d, i, p]),
      u || i
        ? hr('div', {
            style: u ? mr(t, i) : yr.hidden,
            onAnimationEnd: p,
            children: n,
          })
        : null
    );
  };
  var Er = {
      children: !0,
      dataSet: !0,
      dir: !0,
      id: !0,
      ref: !0,
      suppressHydrationWarning: !0,
      tabIndex: !0,
      testID: !0,
      focusable: !0,
      nativeID: !0,
    },
    kr = {
      'aria-activedescendant': !0,
      'aria-atomic': !0,
      'aria-autocomplete': !0,
      'aria-busy': !0,
      'aria-checked': !0,
      'aria-colcount': !0,
      'aria-colindex': !0,
      'aria-colspan': !0,
      'aria-controls': !0,
      'aria-current': !0,
      'aria-describedby': !0,
      'aria-details': !0,
      'aria-disabled': !0,
      'aria-errormessage': !0,
      'aria-expanded': !0,
      'aria-flowto': !0,
      'aria-haspopup': !0,
      'aria-hidden': !0,
      'aria-invalid': !0,
      'aria-keyshortcuts': !0,
      'aria-label': !0,
      'aria-labelledby': !0,
      'aria-level': !0,
      'aria-live': !0,
      'aria-modal': !0,
      'aria-multiline': !0,
      'aria-multiselectable': !0,
      'aria-orientation': !0,
      'aria-owns': !0,
      'aria-placeholder': !0,
      'aria-posinset': !0,
      'aria-pressed': !0,
      'aria-readonly': !0,
      'aria-required': !0,
      role: !0,
      'aria-roledescription': !0,
      'aria-rowcount': !0,
      'aria-rowindex': !0,
      'aria-rowspan': !0,
      'aria-selected': !0,
      'aria-setsize': !0,
      'aria-sort': !0,
      'aria-valuemax': !0,
      'aria-valuemin': !0,
      'aria-valuenow': !0,
      'aria-valuetext': !0,
      accessibilityActiveDescendant: !0,
      accessibilityAtomic: !0,
      accessibilityAutoComplete: !0,
      accessibilityBusy: !0,
      accessibilityChecked: !0,
      accessibilityColumnCount: !0,
      accessibilityColumnIndex: !0,
      accessibilityColumnSpan: !0,
      accessibilityControls: !0,
      accessibilityCurrent: !0,
      accessibilityDescribedBy: !0,
      accessibilityDetails: !0,
      accessibilityDisabled: !0,
      accessibilityErrorMessage: !0,
      accessibilityExpanded: !0,
      accessibilityFlowTo: !0,
      accessibilityHasPopup: !0,
      accessibilityHidden: !0,
      accessibilityInvalid: !0,
      accessibilityKeyShortcuts: !0,
      accessibilityLabel: !0,
      accessibilityLabelledBy: !0,
      accessibilityLevel: !0,
      accessibilityLiveRegion: !0,
      accessibilityModal: !0,
      accessibilityMultiline: !0,
      accessibilityMultiSelectable: !0,
      accessibilityOrientation: !0,
      accessibilityOwns: !0,
      accessibilityPlaceholder: !0,
      accessibilityPosInSet: !0,
      accessibilityPressed: !0,
      accessibilityReadOnly: !0,
      accessibilityRequired: !0,
      accessibilityRole: !0,
      accessibilityRoleDescription: !0,
      accessibilityRowCount: !0,
      accessibilityRowIndex: !0,
      accessibilityRowSpan: !0,
      accessibilitySelected: !0,
      accessibilitySetSize: !0,
      accessibilitySort: !0,
      accessibilityValueMax: !0,
      accessibilityValueMin: !0,
      accessibilityValueNow: !0,
      accessibilityValueText: !0,
    },
    xr = {
      onClick: !0,
      onAuxClick: !0,
      onContextMenu: !0,
      onGotPointerCapture: !0,
      onLostPointerCapture: !0,
      onPointerCancel: !0,
      onPointerDown: !0,
      onPointerEnter: !0,
      onPointerMove: !0,
      onPointerLeave: !0,
      onPointerOut: !0,
      onPointerOver: !0,
      onPointerUp: !0,
    },
    Cr = { onBlur: !0, onFocus: !0 },
    Rr = {
      onKeyDown: !0,
      onKeyDownCapture: !0,
      onKeyUp: !0,
      onKeyUpCapture: !0,
    },
    Pr = {
      onMouseDown: !0,
      onMouseEnter: !0,
      onMouseLeave: !0,
      onMouseMove: !0,
      onMouseOver: !0,
      onMouseOut: !0,
      onMouseUp: !0,
    },
    Tr = {
      onTouchCancel: !0,
      onTouchCancelCapture: !0,
      onTouchEnd: !0,
      onTouchEndCapture: !0,
      onTouchMove: !0,
      onTouchMoveCapture: !0,
      onTouchStart: !0,
      onTouchStartCapture: !0,
    },
    Or = { style: !0 };
  function _r(e, t) {
    var n = {};
    for (var r in e) e.hasOwnProperty(r) && !0 === t[r] && (n[r] = e[r]);
    return n;
  }
  const Ar = lt ? a.useLayoutEffect : a.useEffect,
    Nr = (e) => {
      if (null != e && 1 === e.nodeType && 'function' == typeof e.getBoundingClientRect) return e.getBoundingClientRect();
    };
  var Lr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      flex: !0,
      flexGrow: !0,
      flexOrder: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      fontWeight: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowGap: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnGap: !0,
      gridColumnStart: !0,
      lineClamp: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
      scale: !0,
      scaleX: !0,
      scaleY: !0,
      scaleZ: !0,
      shadowOpacity: !0,
    },
    Dr = ['ms', 'Moz', 'O', 'Webkit'];
  Object.keys(Lr).forEach((e) => {
    Dr.forEach((t) => {
      Lr[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(t, e)] = Lr[e];
    });
  });
  const zr = Lr,
    jr = function (e, t, n) {
      return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (zr.hasOwnProperty(e) && zr[e])
          ? ('' + t).trim()
          : t + 'px';
    },
    Mr = function (e, t) {
      var n = e.style;
      for (var r in t)
        if (t.hasOwnProperty(r)) {
          var o = 0 === r.indexOf('--'),
            a = jr(r, t[r], o);
          ('float' === r && (r = 'cssFloat'), o ? n.setProperty(r, a) : (n[r] = a));
        }
    };
  var Ir = (e) => {
      var t = e.offsetHeight,
        n = e.offsetWidth,
        r = e.offsetLeft,
        o = e.offsetTop;
      for (e = e.offsetParent; e && 1 === e.nodeType; )
        ((r += e.offsetLeft + e.clientLeft - e.scrollLeft), (o += e.offsetTop + e.clientTop - e.scrollTop), (e = e.offsetParent));
      return {
        width: n,
        height: t,
        top: (o -= window.scrollY),
        left: (r -= window.scrollX),
      };
    },
    Fr = (e, t, n) => {
      var r = t || (e && e.parentNode);
      e &&
        r &&
        setTimeout(() => {
          if (e.isConnected && r.isConnected) {
            var t = Ir(r),
              o = Ir(e),
              a = o.height,
              i = o.left,
              l = o.top,
              u = o.width,
              s = i - t.left,
              c = l - t.top;
            n(s, c, u, a, i, l);
          }
        }, 0);
    },
    Br = { A: !0, BODY: !0, INPUT: !0, SELECT: !0, TEXTAREA: !0 },
    Ur = {
      blur(e) {
        try {
          e.blur();
        } catch (e) {}
      },
      focus(e) {
        try {
          var t = e.nodeName;
          (null == e.getAttribute('tabIndex') && !0 !== e.isContentEditable && null == Br[t] && e.setAttribute('tabIndex', '-1'), e.focus());
        } catch (e) {}
      },
      measure(e, t) {
        Fr(e, null, t);
      },
      measureInWindow(e, t) {
        e &&
          setTimeout(() => {
            var n = Nr(e),
              r = n.height,
              o = n.left,
              a = n.top,
              i = n.width;
            t(o, a, i, r);
          }, 0);
      },
      measureLayout(e, t, n, r) {
        Fr(e, t, r);
      },
      updateView(e, t) {
        for (var n in t)
          if (Object.prototype.hasOwnProperty.call(t, n)) {
            var r = t[n];
            switch (n) {
              case 'style':
                Mr(e, r);
                break;
              case 'class':
              case 'className':
                e.setAttribute('class', r);
                break;
              case 'text':
              case 'value':
                e.value = r;
                break;
              default:
                e.setAttribute(n, r);
            }
          }
      },
      configureNextLayoutAnimation(e, t) {
        t();
      },
      setLayoutAnimationEnabledExperimental() {},
    };
  const Wr = Ur;
  var $r = '__reactLayoutHandler',
    Hr = null;
  function qr(e, t) {
    var n =
      (lt &&
        void 0 !== window.ResizeObserver &&
        null == Hr &&
        (Hr = new window.ResizeObserver(function (e) {
          e.forEach((e) => {
            var t = e.target,
              n = t[$r];
            'function' == typeof n &&
              Wr.measure(t, (t, r, o, a, i, l) => {
                var u = {
                  nativeEvent: {
                    layout: {
                      x: t,
                      y: r,
                      width: o,
                      height: a,
                      left: i,
                      top: l,
                    },
                  },
                  timeStamp: Date.now(),
                };
                (Object.defineProperty(u.nativeEvent, 'target', {
                  enumerable: !0,
                  get: () => e.target,
                }),
                  n(u));
              });
          });
        })),
      Hr);
    (Ar(() => {
      var n = e.current;
      null != n && (n[$r] = t);
    }, [e, t]),
      Ar(() => {
        var t = e.current;
        return (
          null != t && null != n && ('function' == typeof t[$r] ? n.observe(t) : n.unobserve(t)),
          () => {
            null != t && null != n && n.unobserve(t);
          }
        );
      }, [e, n]));
  }
  function Vr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return a.useMemo(
      () =>
        (function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return function (e) {
            t.forEach((t) => {
              null != t &&
                ('function' != typeof t
                  ? 'object' != typeof t
                    ? console.error('mergeRefs cannot handle Refs of type boolean, number or string, received ref ' + String(t))
                    : (t.current = e)
                  : t(e));
            });
          };
        })(...t),
      [...t],
    );
  }
  var Gr = 'function' == typeof Symbol && 'symbol' == typeof Symbol() ? Symbol() : Object.freeze({});
  function Yr(e) {
    return (
      e.pointerEvents,
      e.style,
      (t = a.useRef(Gr)).current === Gr &&
        (t.current = (e) => {
          null != e &&
            ((e.measure = (t) => Wr.measure(e, t)),
            (e.measureLayout = (t, n, r) => Wr.measureLayout(e, t, r, n)),
            (e.measureInWindow = (t) => Wr.measureInWindow(e, t)));
        }),
      t.current
    );
    var t;
  }
  var Kr = () => {},
    Xr = {},
    Qr = [];
  function Jr(e) {
    return e > 20 ? e % 20 : e;
  }
  function Zr(e, t) {
    var n,
      r,
      o,
      a = !1,
      i = e.changedTouches,
      l = e.type,
      u = !0 === e.metaKey,
      s = !0 === e.shiftKey,
      c = (i && i[0].force) || 0,
      f = Jr((i && i[0].identifier) || 0),
      d = (i && i[0].clientX) || e.clientX,
      p = (i && i[0].clientY) || e.clientY,
      h = (i && i[0].pageX) || e.pageX,
      m = (i && i[0].pageY) || e.pageY,
      y = 'function' == typeof e.preventDefault ? e.preventDefault.bind(e) : Kr,
      g = e.timeStamp;
    function v(e) {
      return Array.prototype.slice.call(e).map((e) => ({
        force: e.force,
        identifier: Jr(e.identifier),
        get locationX() {
          return S(e.clientX);
        },
        get locationY() {
          return E(e.clientY);
        },
        pageX: e.pageX,
        pageY: e.pageY,
        target: e.target,
        timestamp: g,
      }));
    }
    if (null != i) ((r = v(i)), (o = v(e.touches)));
    else {
      var b = [
        {
          force: c,
          identifier: f,
          get locationX() {
            return S(d);
          },
          get locationY() {
            return E(p);
          },
          pageX: h,
          pageY: m,
          target: e.target,
          timestamp: g,
        },
      ];
      ((r = b), (o = 'mouseup' === l || 'dragstart' === l ? Qr : b));
    }
    var w = {
      bubbles: !0,
      cancelable: !0,
      currentTarget: null,
      defaultPrevented: e.defaultPrevented,
      dispatchConfig: Xr,
      eventPhase: e.eventPhase,
      isDefaultPrevented: () => e.defaultPrevented,
      isPropagationStopped: () => a,
      isTrusted: e.isTrusted,
      nativeEvent: {
        altKey: !1,
        ctrlKey: !1,
        metaKey: u,
        shiftKey: s,
        changedTouches: r,
        force: c,
        identifier: f,
        get locationX() {
          return S(d);
        },
        get locationY() {
          return E(p);
        },
        pageX: h,
        pageY: m,
        target: e.target,
        timestamp: g,
        touches: o,
        type: l,
      },
      persist: Kr,
      preventDefault: y,
      stopPropagation() {
        a = !0;
      },
      target: e.target,
      timeStamp: g,
      touchHistory: t.touchHistory,
    };
    function S(e) {
      if ((n = n || Nr(w.currentTarget))) return e - n.left;
    }
    function E(e) {
      if ((n = n || Nr(w.currentTarget))) return e - n.top;
    }
    return w;
  }
  function eo(e) {
    return 'touchstart' === e || 'mousedown' === e;
  }
  function to(e) {
    return 'touchmove' === e || 'mousemove' === e;
  }
  function no(e) {
    return 'touchend' === e || 'mouseup' === e || ro(e);
  }
  function ro(e) {
    return 'touchcancel' === e || 'dragstart' === e;
  }
  var oo = '__reactResponderId';
  function ao(e) {
    for (var t = []; null != e && e !== document.body; ) (t.push(e), (e = e.parentNode));
    return t;
  }
  function io(e) {
    return null != e ? e[oo] : null;
  }
  function lo(e) {
    return e.timeStamp || e.timestamp;
  }
  function uo(e) {
    var t = e.identifier;
    return (null == t && console.error('Touch object is missing identifier.'), t);
  }
  function so(e) {
    return JSON.stringify({
      identifier: e.identifier,
      pageX: e.pageX,
      pageY: e.pageY,
      timestamp: lo(e),
    });
  }
  function co(e) {
    var t = e.touchBank,
      n = JSON.stringify(t.slice(0, 20));
    return (t.length > 20 && (n += ' (original size: ' + t.length + ')'), n);
  }
  var fo = {},
    po = ['onStartShouldSetResponderCapture', 'onStartShouldSetResponder', { bubbles: !0 }],
    ho = ['onMoveShouldSetResponderCapture', 'onMoveShouldSetResponder', { bubbles: !0 }],
    mo = {
      touchstart: po,
      mousedown: po,
      touchmove: ho,
      mousemove: ho,
      scroll: ['onScrollShouldSetResponderCapture', 'onScrollShouldSetResponder', { bubbles: !1 }],
    },
    yo = { id: null, idPath: null, node: null },
    go = new Map(),
    vo = !1,
    bo = 0,
    wo = { id: null, node: null, idPath: null },
    So = new (class {
      constructor() {
        this._touchHistory = {
          touchBank: [],
          numberActiveTouches: 0,
          indexOfSingleActiveTouch: -1,
          mostRecentTimeStamp: 0,
        };
      }
      recordTouchTrack(e, t) {
        var n = this._touchHistory;
        if (to(e))
          t.changedTouches.forEach((e) =>
            (function (e, t) {
              var n = t.touchBank[uo(e)];
              n
                ? ((n.touchActive = !0),
                  (n.previousPageX = n.currentPageX),
                  (n.previousPageY = n.currentPageY),
                  (n.previousTimeStamp = n.currentTimeStamp),
                  (n.currentPageX = e.pageX),
                  (n.currentPageY = e.pageY),
                  (n.currentTimeStamp = lo(e)),
                  (t.mostRecentTimeStamp = lo(e)))
                : console.warn('Cannot record touch move without a touch start.\n', 'Touch Move: ' + so(e) + '\n', 'Touch Bank: ' + co(t));
            })(e, n),
          );
        else if (eo(e))
          (t.changedTouches.forEach((e) =>
            (function (e, t) {
              var n = uo(e),
                r = t.touchBank[n];
              (r
                ? (function (e, t) {
                    ((e.touchActive = !0),
                      (e.startPageX = t.pageX),
                      (e.startPageY = t.pageY),
                      (e.startTimeStamp = lo(t)),
                      (e.currentPageX = t.pageX),
                      (e.currentPageY = t.pageY),
                      (e.currentTimeStamp = lo(t)),
                      (e.previousPageX = t.pageX),
                      (e.previousPageY = t.pageY),
                      (e.previousTimeStamp = lo(t)));
                  })(r, e)
                : (t.touchBank[n] = (function (e) {
                    return {
                      touchActive: !0,
                      startPageX: e.pageX,
                      startPageY: e.pageY,
                      startTimeStamp: lo(e),
                      currentPageX: e.pageX,
                      currentPageY: e.pageY,
                      currentTimeStamp: lo(e),
                      previousPageX: e.pageX,
                      previousPageY: e.pageY,
                      previousTimeStamp: lo(e),
                    };
                  })(e)),
                (t.mostRecentTimeStamp = lo(e)));
            })(e, n),
          ),
            (n.numberActiveTouches = t.touches.length),
            1 === n.numberActiveTouches && (n.indexOfSingleActiveTouch = t.touches[0].identifier));
        else if (
          no(e) &&
          (t.changedTouches.forEach((e) =>
            (function (e, t) {
              var n = t.touchBank[uo(e)];
              n
                ? ((n.touchActive = !1),
                  (n.previousPageX = n.currentPageX),
                  (n.previousPageY = n.currentPageY),
                  (n.previousTimeStamp = n.currentTimeStamp),
                  (n.currentPageX = e.pageX),
                  (n.currentPageY = e.pageY),
                  (n.currentTimeStamp = lo(e)),
                  (t.mostRecentTimeStamp = lo(e)))
                : console.warn('Cannot record touch end without a touch start.\n', 'Touch End: ' + so(e) + '\n', 'Touch Bank: ' + co(t));
            })(e, n),
          ),
          (n.numberActiveTouches = t.touches.length),
          1 === n.numberActiveTouches)
        )
          for (var r = n.touchBank, o = 0; o < r.length; o++) {
            var a = r[o];
            if (null != a && a.touchActive) {
              n.indexOfSingleActiveTouch = o;
              break;
            }
          }
      }
      get touchHistory() {
        return this._touchHistory;
      }
    })();
  function Eo(e) {
    wo = e;
  }
  function ko(e) {
    var t = go.get(e);
    return null != t ? t : fo;
  }
  function xo(e) {
    var t = e.type,
      n = e.target;
    if (
      ('touchstart' === t && (vo = !0),
      ('touchmove' === t || bo > 1) && (vo = !1),
      !(('mousedown' === t && vo) || ('mousemove' === t && vo) || ('mousemove' === t && bo < 1)))
    )
      if (vo && 'mouseup' === t) 0 === bo && (vo = !1);
      else {
        var r =
            eo(t) &&
            (function (e) {
              var t = e.altKey,
                n = e.button,
                r = e.buttons,
                o = e.ctrlKey,
                a = e.type,
                i = !1 === t && !1 === o;
              return !!(
                'touchstart' === a ||
                'touchmove' === a ||
                ('mousedown' === a && (0 === n || 1 === r) && i) ||
                ('mousemove' === a && 1 === r && i)
              );
            })(e),
          o = to(t),
          a = no(t),
          i = (function (e) {
            return 'scroll' === e;
          })(t),
          l = (function (e) {
            return 'select' === e || 'selectionchange' === e;
          })(t),
          u = Zr(e, So);
        (r || o || a) && (e.touches ? (bo = e.touches.length) : r ? (bo = 1) : a && (bo = 0), So.recordTouchTrack(t, u.nativeEvent));
        var s,
          c = (function (e) {
            for (
              var t = [],
                n = [],
                r = (function (e) {
                  return 'selectionchange' === e.type
                    ? ao(window.getSelection().anchorNode)
                    : null != e.composedPath
                      ? e.composedPath()
                      : ao(e.target);
                })(e),
                o = 0;
              o < r.length;
              o++
            ) {
              var a = r[o],
                i = io(a);
              null != i && (t.push(i), n.push(a));
            }
            return { idPath: t, nodePath: n };
          })(e),
          f = !1;
        if (r || o || (i && bo > 0)) {
          var d = wo.idPath,
            p = c.idPath;
          if (null != d && null != p) {
            var h = (function (e, t) {
              var n = e.length,
                r = t.length;
              if (0 === n || 0 === r || e[n - 1] !== t[r - 1]) return null;
              var o = e[0],
                a = 0,
                i = t[0],
                l = 0;
              (n - r > 0 && ((o = e[(a = n - r)]), (n = r)), r - n > 0 && ((i = t[(l = r - n)]), (r = n)));
              for (var u = n; u--; ) {
                if (o === i) return o;
                ((o = e[a++]), (i = t[l++]));
              }
              return null;
            })(d, p);
            if (null != h) {
              var m = p.indexOf(h) + (h === wo.id ? 1 : 0);
              c = { idPath: p.slice(m), nodePath: c.nodePath.slice(m) };
            } else c = null;
          }
          null != c &&
            ((s = (function (e, t, n) {
              var r = mo[t.type];
              if (null != r) {
                for (
                  var o = e.idPath,
                    a = e.nodePath,
                    i = r[0],
                    l = r[1],
                    u = r[2].bubbles,
                    s = function (e, t, r) {
                      var a = ko(e)[r];
                      if (null != a && ((n.currentTarget = t), !0 === a(n)))
                        return {
                          id: e,
                          node: t,
                          idPath: o.slice(o.indexOf(e)),
                        };
                    },
                    c = o.length - 1;
                  c >= 0;
                  c--
                ) {
                  var f = s(o[c], a[c], i);
                  if (null != f) return f;
                  if (!0 === n.isPropagationStopped()) return;
                }
                if (u)
                  for (var d = 0; d < o.length; d++) {
                    var p = s(o[d], a[d], l);
                    if (null != p) return p;
                    if (!0 === n.isPropagationStopped()) return;
                  }
                else {
                  var h = o[0],
                    m = a[0];
                  if (t.target === m) return s(h, m, l);
                }
              }
            })(c, e, u)),
            null != s &&
              ((function (e, t) {
                var n = wo,
                  r = n.id,
                  o = n.node,
                  a = t.id,
                  i = t.node,
                  l = ko(a),
                  u = l.onResponderGrant,
                  s = l.onResponderReject;
                if (((e.bubbles = !1), (e.cancelable = !1), (e.currentTarget = i), null == r))
                  (null != u && ((e.currentTarget = i), (e.dispatchConfig.registrationName = 'onResponderGrant'), u(e)), Eo(t));
                else {
                  var c = ko(r),
                    f = c.onResponderTerminate,
                    d = c.onResponderTerminationRequest,
                    p = !0;
                  (null != d &&
                    ((e.currentTarget = o), (e.dispatchConfig.registrationName = 'onResponderTerminationRequest'), !1 === d(e) && (p = !1)),
                    p
                      ? (null != f && ((e.currentTarget = o), (e.dispatchConfig.registrationName = 'onResponderTerminate'), f(e)),
                        null != u && ((e.currentTarget = i), (e.dispatchConfig.registrationName = 'onResponderGrant'), u(e)),
                        Eo(t))
                      : null != s && ((e.currentTarget = i), (e.dispatchConfig.registrationName = 'onResponderReject'), s(e)));
                }
              })(u, s),
              (f = !0)));
        }
        if (null != wo.id && null != wo.node) {
          var y = wo,
            g = y.id,
            v = y.node,
            b = ko(g),
            w = b.onResponderStart,
            S = b.onResponderMove,
            E = b.onResponderEnd,
            k = b.onResponderRelease,
            x = b.onResponderTerminate,
            C = b.onResponderTerminationRequest;
          if (((u.bubbles = !1), (u.cancelable = !1), (u.currentTarget = v), r))
            null != w && ((u.dispatchConfig.registrationName = 'onResponderStart'), w(u));
          else if (o) null != S && ((u.dispatchConfig.registrationName = 'onResponderMove'), S(u));
          else {
            var R =
                ro(t) ||
                'contextmenu' === t ||
                ('blur' === t && n === window) ||
                ('blur' === t && n.contains(v) && e.relatedTarget !== v) ||
                (i && 0 === bo) ||
                (i && n.contains(v) && n !== v) ||
                (l &&
                  (function (e) {
                    return 'selectionchange' === e.type
                      ? ((n = (t = window.getSelection()).toString()),
                        (r = t.anchorNode),
                        (o = t.focusNode),
                        (a = (r && r.nodeType === window.Node.TEXT_NODE) || (o && o.nodeType === window.Node.TEXT_NODE)),
                        n.length >= 1 && '\n' !== n && a)
                      : 'select' === e.type;
                    var t, n, r, o, a;
                  })(e)),
              P =
                a &&
                !R &&
                !(function (e, t) {
                  if (!t || 0 === t.length) return !1;
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n].target;
                    if (null != r && e.contains(r)) return !0;
                  }
                  return !1;
                })(v, e.touches);
            if (
              (a && null != E && ((u.dispatchConfig.registrationName = 'onResponderEnd'), E(u)),
              P && (null != k && ((u.dispatchConfig.registrationName = 'onResponderRelease'), k(u)), Eo(yo)),
              R)
            ) {
              var T = !0;
              (('contextmenu' !== t && 'scroll' !== t && 'selectionchange' !== t) ||
                (f ? (T = !1) : null != C && ((u.dispatchConfig.registrationName = 'onResponderTerminationRequest'), !1 === C(u) && (T = !1))),
                T && (null != x && ((u.dispatchConfig.registrationName = 'onResponderTerminate'), x(u)), Eo(yo), (vo = !1), (bo = 0)));
            }
          }
        }
      }
  }
  var Co = ['blur', 'scroll'],
    Ro = [
      'mousedown',
      'mousemove',
      'mouseup',
      'dragstart',
      'touchstart',
      'touchmove',
      'touchend',
      'touchcancel',
      'contextmenu',
      'select',
      'selectionchange',
    ];
  function Po(e) {
    (wo.id === e &&
      (function () {
        var e = wo,
          t = e.id,
          n = e.node;
        if (null != t && null != n) {
          var r = ko(t).onResponderTerminate;
          if (null != r) {
            var o = Zr({}, So);
            ((o.currentTarget = n), r(o));
          }
          Eo(yo);
        }
        ((vo = !1), (bo = 0));
      })(),
      go.has(e) && go.delete(e));
  }
  var To = {},
    Oo = 0;
  function _o(e, t) {
    void 0 === t && (t = To);
    var n,
      r,
      o = ((n = () => Oo++), null == (r = a.useRef(null)).current && (r.current = n()), r.current),
      i = a.useRef(!1);
    (a.useEffect(
      () => (
        lt &&
          null == window.__reactResponderSystemActive &&
          (window.addEventListener('blur', xo),
          Ro.forEach((e) => {
            document.addEventListener(e, xo);
          }),
          Co.forEach((e) => {
            document.addEventListener(e, xo, !0);
          }),
          (window.__reactResponderSystemActive = !0)),
        () => {
          Po(o);
        }
      ),
      [o],
    ),
      a.useEffect(() => {
        var n = t,
          r = n.onMoveShouldSetResponder,
          a = n.onMoveShouldSetResponderCapture,
          l = n.onScrollShouldSetResponder,
          u = n.onScrollShouldSetResponderCapture,
          s = n.onSelectionChangeShouldSetResponder,
          c = n.onSelectionChangeShouldSetResponderCapture,
          f = n.onStartShouldSetResponder,
          d = n.onStartShouldSetResponderCapture,
          p = null != r || null != a || null != l || null != u || null != s || null != c || null != f || null != d,
          h = e.current;
        p
          ? ((function (e, t, n) {
              (!(function (e, t) {
                null != e && (e[oo] = t);
              })(t, e),
                go.set(e, n));
            })(o, h, t),
            (i.current = !0))
          : i.current && (Po(o), (i.current = !1));
      }, [t, e, o]),
      a.useDebugValue({ isResponder: e.current === wo.node }),
      a.useDebugValue(t));
  }
  const Ao = (0, a.createContext)(!1);
  var No = [
      'hrefAttrs',
      'onLayout',
      'onMoveShouldSetResponder',
      'onMoveShouldSetResponderCapture',
      'onResponderEnd',
      'onResponderGrant',
      'onResponderMove',
      'onResponderReject',
      'onResponderRelease',
      'onResponderStart',
      'onResponderTerminate',
      'onResponderTerminationRequest',
      'onScrollShouldSetResponder',
      'onScrollShouldSetResponderCapture',
      'onSelectionChangeShouldSetResponder',
      'onSelectionChangeShouldSetResponderCapture',
      'onStartShouldSetResponder',
      'onStartShouldSetResponderCapture',
    ],
    Lo = Object.assign({}, Er, kr, xr, Cr, Rr, Pr, Tr, Or, {
      href: !0,
      lang: !0,
      onScroll: !0,
      onWheel: !0,
      pointerEvents: !0,
    }),
    Do = a.forwardRef((e, t) => {
      var n = e.hrefAttrs,
        r = e.onLayout,
        o = e.onMoveShouldSetResponder,
        i = e.onMoveShouldSetResponderCapture,
        l = e.onResponderEnd,
        u = e.onResponderGrant,
        s = e.onResponderMove,
        c = e.onResponderReject,
        f = e.onResponderRelease,
        d = e.onResponderStart,
        p = e.onResponderTerminate,
        h = e.onResponderTerminationRequest,
        m = e.onScrollShouldSetResponder,
        y = e.onScrollShouldSetResponderCapture,
        g = e.onSelectionChangeShouldSetResponder,
        v = e.onSelectionChangeShouldSetResponderCapture,
        b = e.onStartShouldSetResponder,
        w = e.onStartShouldSetResponderCapture,
        S = at(e, No),
        E = a.useContext(Ao),
        k = a.useRef(null),
        x = pr().direction;
      (qr(k, r),
        _o(k, {
          onMoveShouldSetResponder: o,
          onMoveShouldSetResponderCapture: i,
          onResponderEnd: l,
          onResponderGrant: u,
          onResponderMove: s,
          onResponderReject: c,
          onResponderRelease: f,
          onResponderStart: d,
          onResponderTerminate: p,
          onResponderTerminationRequest: h,
          onScrollShouldSetResponder: m,
          onScrollShouldSetResponderCapture: y,
          onSelectionChangeShouldSetResponder: g,
          onSelectionChangeShouldSetResponderCapture: v,
          onStartShouldSetResponder: b,
          onStartShouldSetResponderCapture: w,
        }));
      var C = 'div',
        R = null != e.lang ? fr(e.lang) : null,
        P = e.dir || R,
        T = P || x,
        O = ((e) => _r(e, Lo))(S);
      if (((O.dir = P), (O.style = [zo.view$raw, E && zo.inline, e.style]), null != e.href && ((C = 'a'), null != n))) {
        var _ = n.download,
          A = n.rel,
          N = n.target;
        (null != _ && (O.download = _), null != A && (O.rel = A), 'string' == typeof N && (O.target = '_' !== N.charAt(0) ? '_' + N : N));
      }
      var L = Vr(k, Yr(O), t);
      return ((O.ref = L), hr(C, O, { writingDirection: T }));
    });
  Do.displayName = 'View';
  var zo = qn.create({
    view$raw: {
      alignContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: 'transparent',
      border: '0 solid black',
      boxSizing: 'border-box',
      display: 'flex',
      flexBasis: 'auto',
      flexDirection: 'column',
      flexShrink: 0,
      listStyle: 'none',
      margin: 0,
      minHeight: 0,
      minWidth: 0,
      padding: 0,
      position: 'relative',
      textDecoration: 'none',
      zIndex: 0,
    },
    inline: { display: 'inline-flex' },
  });
  const jo = Do;
  var Mo = ['active', 'children', 'onRequestClose', 'transparent'],
    Io = a.forwardRef((e, t) => {
      var n = e.active,
        r = e.children,
        o = e.onRequestClose,
        i = e.transparent,
        l = at(e, Mo);
      a.useEffect(() => {
        if (lt) {
          var e = (e) => {
            n && 'Escape' === e.key && (e.stopPropagation(), o && o());
          };
          return (document.addEventListener('keyup', e, !1), () => document.removeEventListener('keyup', e, !1));
        }
      }, [n, o]);
      var u = a.useMemo(() => [Fo.modal, i ? Fo.modalTransparent : Fo.modalOpaque], [i]);
      return a.createElement(
        jo,
        ot({}, l, {
          'aria-modal': !0,
          ref: t,
          role: n ? 'dialog' : null,
          style: u,
        }),
        a.createElement(jo, { style: Fo.container }, r),
      );
    }),
    Fo = qn.create({
      modal: { position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 },
      modalTransparent: { backgroundColor: 'transparent' },
      modalOpaque: { backgroundColor: 'white' },
      container: { top: 0, flex: 1 },
    });
  const Bo = Io;
  var Uo = () => hr('div', { role: 'none', tabIndex: 0, style: Vo.focusBracket });
  function Wo(e) {
    if (!lt) return !1;
    try {
      e.focus();
    } catch (e) {}
    return document.activeElement === e;
  }
  function $o(e) {
    for (var t = 0; t < e.childNodes.length; t++) {
      var n = e.childNodes[t];
      if (Wo(n) || $o(n)) return !0;
    }
    return !1;
  }
  function Ho(e) {
    for (var t = e.childNodes.length - 1; t >= 0; t--) {
      var n = e.childNodes[t];
      if (Wo(n) || Ho(n)) return !0;
    }
    return !1;
  }
  const qo = (e) => {
    var t = e.active,
      n = e.children,
      r = a.useRef(),
      o = a.useRef({ trapFocusInProgress: !1, lastFocusedElement: null });
    return (
      a.useEffect(() => {
        if (lt) {
          var e = () => {
            if (null != r.current && !o.current.trapFocusInProgress && t) {
              try {
                if (((o.current.trapFocusInProgress = !0), document.activeElement instanceof Node && !r.current.contains(document.activeElement))) {
                  var e = $o(r.current);
                  (o.current.lastFocusedElement === document.activeElement && (e = Ho(r.current)),
                    !e && null != r.current && document.activeElement && Wr.focus(r.current));
                }
              } finally {
                o.current.trapFocusInProgress = !1;
              }
              o.current.lastFocusedElement = document.activeElement;
            }
          };
          return (e(), document.addEventListener('focus', e, !0), () => document.removeEventListener('focus', e, !0));
        }
      }, [t]),
      a.useEffect(function () {
        if (lt) {
          var e = document.activeElement;
          return function () {
            e && document.contains(e) && Wr.focus(e);
          };
        }
      }, []),
      a.createElement(a.Fragment, null, a.createElement(Uo, null), a.createElement(jo, { ref: r }, n), a.createElement(Uo, null))
    );
  };
  var Vo = qn.create({ focusBracket: { outlineStyle: 'none' } }),
    Go = ['animationType', 'children', 'onDismiss', 'onRequestClose', 'onShow', 'transparent', 'visible'],
    Yo = 0,
    Ko = [],
    Xo = {};
  function Qo() {
    if (0 !== Ko.length) {
      var e = Ko[Ko.length - 1];
      Ko.forEach((t) => {
        t in Xo && Xo[t](t === e);
      });
    }
  }
  function Jo(e) {
    e in Xo && (Xo[e](!1), delete Xo[e]);
    var t = Ko.indexOf(e);
    -1 !== t && (Ko.splice(t, 1), Qo());
  }
  const Zo = a.forwardRef((e, t) => {
    var n = e.animationType,
      r = e.children,
      o = e.onDismiss,
      i = e.onRequestClose,
      l = e.onShow,
      u = e.transparent,
      s = e.visible,
      c = void 0 === s || s,
      f = at(e, Go),
      d = a.useMemo(() => Yo++, []),
      p = a.useState(!1),
      h = p[0],
      m = p[1],
      y = a.useCallback(() => {
        (Jo(d), o && o());
      }, [d, o]),
      g = a.useCallback(() => {
        (!(function (e, t) {
          (Jo(e), Ko.push(e), (Xo[e] = t), Qo());
        })(d, m),
          l && l());
      }, [d, l]);
    return (
      a.useEffect(() => () => Jo(d), [d]),
      a.createElement(
        ut,
        null,
        a.createElement(
          Sr,
          { animationType: n, onDismiss: y, onShow: g, visible: c },
          a.createElement(
            qo,
            { active: h },
            a.createElement(
              Bo,
              ot({}, f, {
                active: h,
                onRequestClose: i,
                ref: t,
                transparent: u,
              }),
              r,
            ),
          ),
        ),
      )
    );
  });
  var ea = [
      'hrefAttrs',
      'numberOfLines',
      'onClick',
      'onLayout',
      'onPress',
      'onMoveShouldSetResponder',
      'onMoveShouldSetResponderCapture',
      'onResponderEnd',
      'onResponderGrant',
      'onResponderMove',
      'onResponderReject',
      'onResponderRelease',
      'onResponderStart',
      'onResponderTerminate',
      'onResponderTerminationRequest',
      'onScrollShouldSetResponder',
      'onScrollShouldSetResponderCapture',
      'onSelectionChangeShouldSetResponder',
      'onSelectionChangeShouldSetResponderCapture',
      'onStartShouldSetResponder',
      'onStartShouldSetResponderCapture',
      'selectable',
    ],
    ta = Object.assign({}, Er, kr, xr, Cr, Rr, Pr, Tr, Or, {
      href: !0,
      lang: !0,
      pointerEvents: !0,
    }),
    na = a.forwardRef((e, t) => {
      var n = e.hrefAttrs,
        r = e.numberOfLines,
        o = e.onClick,
        i = e.onLayout,
        l = e.onPress,
        u = e.onMoveShouldSetResponder,
        s = e.onMoveShouldSetResponderCapture,
        c = e.onResponderEnd,
        f = e.onResponderGrant,
        d = e.onResponderMove,
        p = e.onResponderReject,
        h = e.onResponderRelease,
        m = e.onResponderStart,
        y = e.onResponderTerminate,
        g = e.onResponderTerminationRequest,
        v = e.onScrollShouldSetResponder,
        b = e.onScrollShouldSetResponderCapture,
        w = e.onSelectionChangeShouldSetResponder,
        S = e.onSelectionChangeShouldSetResponderCapture,
        E = e.onStartShouldSetResponder,
        k = e.onStartShouldSetResponderCapture,
        x = e.selectable,
        C = at(e, ea),
        R = a.useContext(Ao),
        P = a.useRef(null),
        T = pr().direction;
      (qr(P, i),
        _o(P, {
          onMoveShouldSetResponder: u,
          onMoveShouldSetResponderCapture: s,
          onResponderEnd: c,
          onResponderGrant: f,
          onResponderMove: d,
          onResponderReject: p,
          onResponderRelease: h,
          onResponderStart: m,
          onResponderTerminate: y,
          onResponderTerminationRequest: g,
          onScrollShouldSetResponder: v,
          onScrollShouldSetResponderCapture: b,
          onSelectionChangeShouldSetResponder: w,
          onSelectionChangeShouldSetResponderCapture: S,
          onStartShouldSetResponder: E,
          onStartShouldSetResponderCapture: k,
        }));
      var O = a.useCallback(
          (e) => {
            null != o ? o(e) : null != l && (e.stopPropagation(), l(e));
          },
          [o, l],
        ),
        _ = R ? 'span' : 'div',
        A = null != e.lang ? fr(e.lang) : null,
        N = e.dir || A,
        L = N || T,
        D = ((e) => _r(e, ta))(C);
      if (
        ((D.dir = N),
        R || (D.dir = null != N ? N : 'auto'),
        (o || l) && (D.onClick = O),
        (D.style = [
          null != r && r > 1 && { WebkitLineClamp: r },
          !0 === R ? oa.textHasAncestor$raw : oa.text$raw,
          1 === r && oa.textOneLine,
          null != r && r > 1 && oa.textMultiLine,
          e.style,
          !0 === x && oa.selectable,
          !1 === x && oa.notSelectable,
          l && oa.pressable,
        ]),
        null != e.href && ((_ = 'a'), null != n))
      ) {
        var z = n.download,
          j = n.rel,
          M = n.target;
        (null != z && (D.download = z), null != j && (D.rel = j), 'string' == typeof M && (D.target = '_' !== M.charAt(0) ? '_' + M : M));
      }
      var I = Vr(P, Yr(D), t);
      D.ref = I;
      var F = hr(_, D, { writingDirection: L });
      return R ? F : a.createElement(Ao.Provider, { value: !0 }, F);
    });
  na.displayName = 'Text';
  var ra = {
      backgroundColor: 'transparent',
      border: '0 solid black',
      boxSizing: 'border-box',
      color: 'black',
      display: 'inline',
      font: '14px System',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      position: 'relative',
      textAlign: 'start',
      textDecoration: 'none',
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word',
    },
    oa = qn.create({
      text$raw: ra,
      textHasAncestor$raw: dt(
        dt({}, ra),
        {},
        {
          color: 'inherit',
          font: 'inherit',
          textAlign: 'inherit',
          whiteSpace: 'inherit',
        },
      ),
      textOneLine: {
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
      },
      textMultiLine: {
        display: '-webkit-box',
        maxWidth: '100%',
        overflow: 'clip',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
      },
      notSelectable: { userSelect: 'none' },
      selectable: { userSelect: 'text' },
      pressable: { cursor: 'pointer' },
    });
  const aa = na;
  var ia = 'DELAY',
    la = 'ERROR',
    ua = 'LONG_PRESS_DETECTED',
    sa = 'NOT_RESPONDER',
    ca = 'RESPONDER_ACTIVE_LONG_PRESS_START',
    fa = 'RESPONDER_ACTIVE_PRESS_START',
    da = 'RESPONDER_INACTIVE_PRESS_START',
    pa = 'RESPONDER_RELEASE',
    ha = 'RESPONDER_TERMINATED',
    ma = Object.freeze({
      NOT_RESPONDER: {
        DELAY: la,
        RESPONDER_GRANT: da,
        RESPONDER_RELEASE: la,
        RESPONDER_TERMINATED: la,
        LONG_PRESS_DETECTED: la,
      },
      RESPONDER_INACTIVE_PRESS_START: {
        DELAY: fa,
        RESPONDER_GRANT: la,
        RESPONDER_RELEASE: sa,
        RESPONDER_TERMINATED: sa,
        LONG_PRESS_DETECTED: la,
      },
      RESPONDER_ACTIVE_PRESS_START: {
        DELAY: la,
        RESPONDER_GRANT: la,
        RESPONDER_RELEASE: sa,
        RESPONDER_TERMINATED: sa,
        LONG_PRESS_DETECTED: ca,
      },
      RESPONDER_ACTIVE_LONG_PRESS_START: {
        DELAY: la,
        RESPONDER_GRANT: la,
        RESPONDER_RELEASE: sa,
        RESPONDER_TERMINATED: sa,
        LONG_PRESS_DETECTED: ca,
      },
      ERROR: {
        DELAY: sa,
        RESPONDER_GRANT: da,
        RESPONDER_RELEASE: sa,
        RESPONDER_TERMINATED: sa,
        LONG_PRESS_DETECTED: sa,
      },
    }),
    ya = (e) => e.getAttribute('role'),
    ga = (e) => e.tagName.toLowerCase(),
    va = (e) => e === fa || e === ca,
    ba = (e) => 'button' === ya(e),
    wa = (e) => e === da || e === fa || e === ca,
    Sa = (e) => {
      var t = e.key,
        n = e.target,
        r = ' ' === t || 'Spacebar' === t,
        o = 'button' === ga(n) || ba(n);
      return 'Enter' === t || (r && o);
    };
  class Ea {
    constructor(e) {
      ((this._eventHandlers = null),
        (this._isPointerTouch = !1),
        (this._longPressDelayTimeout = null),
        (this._longPressDispatched = !1),
        (this._pressDelayTimeout = null),
        (this._pressOutDelayTimeout = null),
        (this._touchState = sa),
        (this._responderElement = null),
        this.configure(e));
    }
    configure(e) {
      this._config = e;
    }
    reset() {
      (this._cancelLongPressDelayTimeout(), this._cancelPressDelayTimeout(), this._cancelPressOutDelayTimeout());
    }
    getEventHandlers() {
      return (null == this._eventHandlers && (this._eventHandlers = this._createEventHandlers()), this._eventHandlers);
    }
    _createEventHandlers() {
      var e = (e, t) => {
          (e.persist(),
            this._cancelPressOutDelayTimeout(),
            (this._longPressDispatched = !1),
            (this._selectionTerminated = !1),
            (this._touchState = sa),
            (this._isPointerTouch = 'touchstart' === e.nativeEvent.type),
            this._receiveSignal('RESPONDER_GRANT', e));
          var n = ka(this._config.delayPressStart, 0, 50);
          !1 !== t && n > 0
            ? (this._pressDelayTimeout = setTimeout(() => {
                this._receiveSignal(ia, e);
              }, n))
            : this._receiveSignal(ia, e);
          var r = ka(this._config.delayLongPress, 10, 450);
          this._longPressDelayTimeout = setTimeout(() => {
            this._handleLongPress(e);
          }, r + n);
        },
        t = (e) => {
          this._receiveSignal(pa, e);
        },
        n = (e) => {
          var r = this._config.onPress,
            o = e.target;
          if (this._touchState !== sa && Sa(e)) {
            (t(e), document.removeEventListener('keyup', n));
            var a = o.getAttribute('role'),
              i = ga(o),
              l = 'link' === a || 'a' === i || 'button' === i || 'input' === i || 'select' === i || 'textarea' === i,
              u = this._responderElement === o;
            (null != r && !l && u && r(e), (this._responderElement = null));
          }
        };
      return {
        onStartShouldSetResponder: (e) => {
          var t = this._config.disabled;
          return (t && ba(e.currentTarget) && e.stopPropagation(), null == t || !t);
        },
        onKeyDown: (t) => {
          var r = this._config.disabled,
            o = t.key,
            a = t.target;
          if (!r && Sa(t)) {
            this._touchState === sa && (e(t, !1), (this._responderElement = a), document.addEventListener('keyup', n));
            var i = ' ' === o || 'Spacebar' === o,
              l = ya(a);
            (i && ('button' === l || 'menuitem' === l) && 'button' !== ga(a) && t.preventDefault(), t.stopPropagation());
          }
        },
        onResponderGrant: (t) => e(t),
        onResponderMove: (e) => {
          null != this._config.onPressMove && this._config.onPressMove(e);
          var t = xa(e);
          if (null != this._touchActivatePosition) {
            var n = this._touchActivatePosition.pageX - t.pageX,
              r = this._touchActivatePosition.pageY - t.pageY;
            Math.hypot(n, r) > 10 && this._cancelLongPressDelayTimeout();
          }
        },
        onResponderRelease: (e) => t(e),
        onResponderTerminate: (e) => {
          ('selectionchange' === e.nativeEvent.type && (this._selectionTerminated = !0), this._receiveSignal(ha, e));
        },
        onResponderTerminationRequest: (e) => {
          var t = this._config,
            n = t.cancelable,
            r = t.disabled,
            o = t.onLongPress;
          return !(!r && null != o && this._isPointerTouch && 'contextmenu' === e.nativeEvent.type) && (null == n || n);
        },
        onClick: (e) => {
          var t = this._config,
            n = t.disabled,
            r = t.onPress;
          n
            ? ba(e.currentTarget) && e.stopPropagation()
            : (e.stopPropagation(),
              this._longPressDispatched || this._selectionTerminated ? e.preventDefault() : null != r && !1 === e.altKey && r(e));
        },
        onContextMenu: (e) => {
          var t = this._config,
            n = t.disabled,
            r = t.onLongPress;
          n
            ? ba(e.currentTarget) && e.stopPropagation()
            : null != r && this._isPointerTouch && !e.defaultPrevented && (e.preventDefault(), e.stopPropagation());
        },
      };
    }
    _receiveSignal(e, t) {
      var n = this._touchState,
        r = null;
      (null != ma[n] && (r = ma[n][e]),
        (this._touchState === sa && e === pa) ||
          (null == r || r === la
            ? console.error('PressResponder: Invalid signal ' + e + ' for state ' + n + ' on responder')
            : n !== r && (this._performTransitionSideEffects(n, r, e, t), (this._touchState = r))));
    }
    _performTransitionSideEffects(e, t, n, r) {
      if (
        (((e) => e === ha || e === pa)(n) &&
          (setTimeout(() => {
            this._isPointerTouch = !1;
          }, 0),
          (this._touchActivatePosition = null),
          this._cancelLongPressDelayTimeout()),
        wa(e) && n === ua)
      ) {
        var o = this._config.onLongPress;
        null != o && null == r.nativeEvent.key && (o(r), (this._longPressDispatched = !0));
      }
      var a = va(e),
        i = va(t);
      if ((!a && i ? this._activate(r) : a && !i && this._deactivate(r), wa(e) && n === pa)) {
        var l = this._config,
          u = l.onLongPress;
        null != l.onPress && ((null != u && e === ca) || i || a || (this._activate(r), this._deactivate(r)));
      }
      this._cancelPressDelayTimeout();
    }
    _activate(e) {
      var t = this._config,
        n = t.onPressChange,
        r = t.onPressStart,
        o = xa(e);
      ((this._touchActivatePosition = { pageX: o.pageX, pageY: o.pageY }), null != r && r(e), null != n && n(!0));
    }
    _deactivate(e) {
      var t = this._config,
        n = t.onPressChange,
        r = t.onPressEnd;
      function o() {
        (null != r && r(e), null != n && n(!1));
      }
      var a = ka(this._config.delayPressEnd);
      a > 0
        ? (this._pressOutDelayTimeout = setTimeout(() => {
            o();
          }, a))
        : o();
    }
    _handleLongPress(e) {
      (this._touchState !== fa && this._touchState !== ca) || this._receiveSignal(ua, e);
    }
    _cancelLongPressDelayTimeout() {
      null != this._longPressDelayTimeout && (clearTimeout(this._longPressDelayTimeout), (this._longPressDelayTimeout = null));
    }
    _cancelPressDelayTimeout() {
      null != this._pressDelayTimeout && (clearTimeout(this._pressDelayTimeout), (this._pressDelayTimeout = null));
    }
    _cancelPressOutDelayTimeout() {
      null != this._pressOutDelayTimeout && (clearTimeout(this._pressOutDelayTimeout), (this._pressOutDelayTimeout = null));
    }
  }
  function ka(e, t, n) {
    return (void 0 === t && (t = 0), void 0 === n && (n = 0), Math.max(t, null != e ? e : n));
  }
  function xa(e) {
    var t = e.nativeEvent,
      n = t.changedTouches,
      r = t.touches;
    return null != r && r.length > 0 ? r[0] : null != n && n.length > 0 ? n[0] : e.nativeEvent;
  }
  var Ca = [
    'activeOpacity',
    'delayPressIn',
    'delayPressOut',
    'delayLongPress',
    'disabled',
    'focusable',
    'onLongPress',
    'onPress',
    'onPressIn',
    'onPressOut',
    'rejectResponderTermination',
    'style',
  ];
  function Ra(e, t) {
    var n = e.activeOpacity,
      r = e.delayPressIn,
      o = e.delayPressOut,
      i = e.delayLongPress,
      l = e.disabled,
      u = e.focusable,
      s = e.onLongPress,
      c = e.onPress,
      f = e.onPressIn,
      d = e.onPressOut,
      p = e.rejectResponderTermination,
      h = e.style,
      m = at(e, Ca),
      y = Vr(t, (0, a.useRef)(null)),
      g = (0, a.useState)('0s'),
      v = g[0],
      b = g[1],
      w = (0, a.useState)(null),
      S = w[0],
      E = w[1],
      k = (0, a.useCallback)(
        (e, t) => {
          (E(e), b(t ? t / 1e3 + 's' : '0s'));
        },
        [E, b],
      ),
      x = (0, a.useCallback)(
        (e) => {
          k(null != n ? n : 0.2, e);
        },
        [n, k],
      ),
      C = (0, a.useCallback)(
        (e) => {
          k(null, e);
        },
        [k],
      ),
      R = (function (e, t) {
        var n = (0, a.useRef)(null);
        null == n.current && (n.current = new Ea(t));
        var r = n.current;
        return (
          (0, a.useEffect)(() => {
            r.configure(t);
          }, [t, r]),
          (0, a.useEffect)(
            () => () => {
              r.reset();
            },
            [r],
          ),
          (0, a.useDebugValue)(t),
          r.getEventHandlers()
        );
      })(
        0,
        (0, a.useMemo)(
          () => ({
            cancelable: !p,
            disabled: l,
            delayLongPress: i,
            delayPressStart: r,
            delayPressEnd: o,
            onLongPress: s,
            onPress: c,
            onPressStart(e) {
              var t = null != e.dispatchConfig ? 'onResponderGrant' === e.dispatchConfig.registrationName : 'keydown' === e.type;
              (x(t ? 0 : 150), null != f && f(e));
            },
            onPressEnd(e) {
              (C(250), null != d && d(e));
            },
          }),
          [i, r, o, l, s, c, f, d, p, x, C],
        ),
      );
    return a.createElement(
      jo,
      ot({}, m, R, {
        accessibilityDisabled: l,
        focusable: !l && !1 !== u,
        pointerEvents: l ? 'box-none' : void 0,
        ref: y,
        style: [Pa.root, !l && Pa.actionable, h, null != S && { opacity: S }, { transitionDuration: v }],
      }),
    );
  }
  var Pa = qn.create({
      root: {
        transitionProperty: 'opacity',
        transitionDuration: '0.15s',
        userSelect: 'none',
      },
      actionable: { cursor: 'pointer', touchAction: 'manipulation' },
    }),
    Ta = a.memo(a.forwardRef(Ra));
  Ta.displayName = 'TouchableOpacity';
  const Oa = Ta;
  var _a = n(646),
    Aa = n.n(_a),
    Na = {
      window: { fontScale: 1, height: 0, scale: 1, width: 0 },
      screen: { fontScale: 1, height: 0, scale: 1, width: 0 },
    },
    La = {},
    Da = lt;
  function za() {
    if (lt) {
      var e,
        t,
        n = window;
      if (n.visualViewport) {
        var r = n.visualViewport;
        ((e = Math.round(r.height * r.scale)), (t = Math.round(r.width * r.scale)));
      } else {
        var o = n.document.documentElement;
        ((e = o.clientHeight), (t = o.clientWidth));
      }
      ((Na.window = {
        fontScale: 1,
        height: e,
        scale: n.devicePixelRatio || 1,
        width: t,
      }),
        (Na.screen = {
          fontScale: 1,
          height: n.screen.height,
          scale: n.devicePixelRatio || 1,
          width: n.screen.width,
        }));
    }
  }
  function ja() {
    (za(), Array.isArray(La.change) && La.change.forEach((e) => e(Na)));
  }
  class Ma {
    static get(e) {
      return (Da && ((Da = !1), za()), Aa()(Na[e], 'No dimension set for key ' + e), Na[e]);
    }
    static set(e) {
      e &&
        (lt
          ? Aa()(!1, 'Dimensions cannot be set in the browser')
          : (null != e.screen && (Na.screen = e.screen), null != e.window && (Na.window = e.window)));
    }
    static addEventListener(e, t) {
      return (
        (La[e] = La[e] || []),
        La[e].push(t),
        {
          remove: () => {
            this.removeEventListener(e, t);
          },
        }
      );
    }
    static removeEventListener(e, t) {
      Array.isArray(La[e]) && (La[e] = La[e].filter((e) => e !== t));
    }
  }
  function Ia() {
    var e = (0, a.useState)(() => Ma.get('window')),
      t = e[0],
      n = e[1];
    return (
      (0, a.useEffect)(() => {
        function e(e) {
          var t = e.window;
          null != t && n(t);
        }
        return (
          Ma.addEventListener('change', e),
          n(Ma.get('window')),
          () => {
            Ma.removeEventListener('change', e);
          }
        );
      }, []),
      t
    );
  }
  lt && (window.visualViewport ? window.visualViewport.addEventListener('resize', ja, !1) : window.addEventListener('resize', ja, !1));
  var Fa = qn.create({
    overlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    modalContainer: {
      backgroundColor: 'white',
      borderRadius: 10,
      overflow: 'hidden',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    title: { fontSize: 18, fontWeight: 'bold' },
    closeButton: { fontSize: 18, color: '#ff5c5c' },
    content: { padding: 15 },
  });
  const Ba = function (e) {
    var t = e.title,
      n = e.visible,
      r = e.onClose,
      o = e.children,
      i = e.size,
      l = void 0 === i ? 'm' : i,
      u = e.position,
      s = void 0 === u ? 'center' : u;
    return n
      ? a.createElement(
          Zo,
          { transparent: !0, visible: n, animationType: 'slide' },
          a.createElement(
            jo,
            {
              style: [
                Fa.overlay,
                'top' === s
                  ? { justifyContent: 'flex-start', marginTop: 50 }
                  : 'bottom' === s
                    ? { justifyContent: 'flex-end', marginBottom: 50 }
                    : { justifyContent: 'center', alignItems: 'center' },
              ],
            },
            a.createElement(
              jo,
              {
                style: [
                  Fa.modalContainer,
                  (function () {
                    switch (l) {
                      case 'xs':
                        return {
                          width: 0.5 * (e = Ia()).width,
                          height: 0.4 * e.height,
                        };
                      case 'm':
                      default:
                        return (function () {
                          var e = Ia();
                          return {
                            width: 0.7 * e.width,
                            height: 0.5 * e.height,
                          };
                        })();
                      case 'xl':
                        return (function () {
                          var e = Ia();
                          return {
                            width: 0.9 * e.width,
                            height: 0.8 * e.height,
                          };
                        })();
                    }
                    var e;
                  })(),
                ],
              },
              a.createElement(
                jo,
                { style: Fa.header },
                a.createElement(aa, { style: Fa.title }, t),
                a.createElement(Oa, { onPress: r }, a.createElement(aa, { style: Fa.closeButton }, '✕')),
              ),
              a.createElement(jo, { style: Fa.content }, o),
            ),
          ),
        )
      : null;
  };
  function Ua(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: Wa } = Object.prototype,
    { getPrototypeOf: $a } = Object,
    { iterator: Ha, toStringTag: qa } = Symbol,
    Va = ((e) => (t) => {
      const n = Wa.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    Ga = (e) => ((e = e.toLowerCase()), (t) => Va(t) === e),
    Ya = (e) => (t) => typeof t === e,
    { isArray: Ka } = Array,
    Xa = Ya('undefined'),
    Qa = Ga('ArrayBuffer'),
    Ja = Ya('string'),
    Za = Ya('function'),
    ei = Ya('number'),
    ti = (e) => null !== e && 'object' == typeof e,
    ni = (e) => {
      if ('object' !== Va(e)) return !1;
      const t = $a(e);
      return !((null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t)) || qa in e || Ha in e);
    },
    ri = Ga('Date'),
    oi = Ga('File'),
    ai = Ga('Blob'),
    ii = Ga('FileList'),
    li = Ga('URLSearchParams'),
    [ui, si, ci, fi] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(Ga);
  function di(e, t, { allOwnKeys: n = !1 } = {}) {
    if (null == e) return;
    let r, o;
    if (('object' != typeof e && (e = [e]), Ka(e))) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
    else {
      const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
        a = o.length;
      let i;
      for (r = 0; r < a; r++) ((i = o[r]), t.call(null, e[i], i, e));
    }
  }
  function pi(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r,
      o = n.length;
    for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
    return null;
  }
  const hi = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : global,
    mi = (e) => !Xa(e) && e !== hi,
    yi = ((gi = 'undefined' != typeof Uint8Array && $a(Uint8Array)), (e) => gi && e instanceof gi);
  var gi;
  const vi = Ga('HTMLFormElement'),
    bi = (
      ({ hasOwnProperty: e }) =>
      (t, n) =>
        e.call(t, n)
    )(Object.prototype),
    wi = Ga('RegExp'),
    Si = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      (di(n, (n, o) => {
        let a;
        !1 !== (a = t(n, o, e)) && (r[o] = a || n);
      }),
        Object.defineProperties(e, r));
    },
    Ei = Ga('AsyncFunction'),
    ki =
      ((xi = 'function' == typeof setImmediate),
      (Ci = Za(hi.postMessage)),
      xi
        ? setImmediate
        : Ci
          ? ((Ri = `axios@${Math.random()}`),
            (Pi = []),
            hi.addEventListener(
              'message',
              ({ source: e, data: t }) => {
                e === hi && t === Ri && Pi.length && Pi.shift()();
              },
              !1,
            ),
            (e) => {
              (Pi.push(e), hi.postMessage(Ri, '*'));
            })
          : (e) => setTimeout(e));
  var xi, Ci, Ri, Pi;
  const Ti = 'undefined' != typeof queueMicrotask ? queueMicrotask.bind(hi) : ('undefined' != typeof process && process.nextTick) || ki,
    Oi = {
      isArray: Ka,
      isArrayBuffer: Qa,
      isBuffer: function (e) {
        return null !== e && !Xa(e) && null !== e.constructor && !Xa(e.constructor) && Za(e.constructor.isBuffer) && e.constructor.isBuffer(e);
      },
      isFormData: (e) => {
        let t;
        return (
          e &&
          (('function' == typeof FormData && e instanceof FormData) ||
            (Za(e.append) && ('formdata' === (t = Va(e)) || ('object' === t && Za(e.toString) && '[object FormData]' === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        let t;
        return ((t = 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Qa(e.buffer)), t);
      },
      isString: Ja,
      isNumber: ei,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: ti,
      isPlainObject: ni,
      isReadableStream: ui,
      isRequest: si,
      isResponse: ci,
      isHeaders: fi,
      isUndefined: Xa,
      isDate: ri,
      isFile: oi,
      isBlob: ai,
      isRegExp: wi,
      isFunction: Za,
      isStream: (e) => ti(e) && Za(e.pipe),
      isURLSearchParams: li,
      isTypedArray: yi,
      isFileList: ii,
      forEach: di,
      merge: function e() {
        const { caseless: t } = (mi(this) && this) || {},
          n = {},
          r = (r, o) => {
            const a = (t && pi(n, o)) || o;
            ni(n[a]) && ni(r) ? (n[a] = e(n[a], r)) : ni(r) ? (n[a] = e({}, r)) : Ka(r) ? (n[a] = r.slice()) : (n[a] = r);
          };
        for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && di(arguments[e], r);
        return n;
      },
      extend: (e, t, n, { allOwnKeys: r } = {}) => (
        di(
          t,
          (t, r) => {
            n && Za(t) ? (e[r] = Ua(t, n)) : (e[r] = t);
          },
          { allOwnKeys: r },
        ),
        e
      ),
      trim: (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')),
      stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, n, r) => {
        ((e.prototype = Object.create(t.prototype, r)),
          (e.prototype.constructor = e),
          Object.defineProperty(e, 'super', { value: t.prototype }),
          n && Object.assign(e.prototype, n));
      },
      toFlatObject: (e, t, n, r) => {
        let o, a, i;
        const l = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; ) ((i = o[a]), (r && !r(i, e, t)) || l[i] || ((t[i] = e[i]), (l[i] = !0)));
          e = !1 !== n && $a(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: Va,
      kindOfTest: Ga,
      endsWith: (e, t, n) => {
        ((e = String(e)), (void 0 === n || n > e.length) && (n = e.length), (n -= t.length));
        const r = e.indexOf(t, n);
        return -1 !== r && r === n;
      },
      toArray: (e) => {
        if (!e) return null;
        if (Ka(e)) return e;
        let t = e.length;
        if (!ei(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
      },
      forEachEntry: (e, t) => {
        const n = (e && e[Ha]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
          const n = r.value;
          t.call(e, n[0], n[1]);
        }
      },
      matchAll: (e, t) => {
        let n;
        const r = [];
        for (; null !== (n = e.exec(t)); ) r.push(n);
        return r;
      },
      isHTMLForm: vi,
      hasOwnProperty: bi,
      hasOwnProp: bi,
      reduceDescriptors: Si,
      freezeMethods: (e) => {
        Si(e, (t, n) => {
          if (Za(e) && -1 !== ['arguments', 'caller', 'callee'].indexOf(n)) return !1;
          const r = e[n];
          Za(r) &&
            ((t.enumerable = !1),
            'writable' in t
              ? (t.writable = !1)
              : t.set ||
                (t.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                }));
        });
      },
      toObjectSet: (e, t) => {
        const n = {},
          r = (e) => {
            e.forEach((e) => {
              n[e] = !0;
            });
          };
        return (Ka(e) ? r(e) : r(String(e).split(t)), n);
      },
      toCamelCase: (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
          return t.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (e, t) => (null != e && Number.isFinite((e = +e)) ? e : t),
      findKey: pi,
      global: hi,
      isContextDefined: mi,
      isSpecCompliantForm: function (e) {
        return !!(e && Za(e.append) && 'FormData' === e[qa] && e[Ha]);
      },
      toJSONObject: (e) => {
        const t = new Array(10),
          n = (e, r) => {
            if (ti(e)) {
              if (t.indexOf(e) >= 0) return;
              if (!('toJSON' in e)) {
                t[r] = e;
                const o = Ka(e) ? [] : {};
                return (
                  di(e, (e, t) => {
                    const a = n(e, r + 1);
                    !Xa(a) && (o[t] = a);
                  }),
                  (t[r] = void 0),
                  o
                );
              }
            }
            return e;
          };
        return n(e, 0);
      },
      isAsyncFn: Ei,
      isThenable: (e) => e && (ti(e) || Za(e)) && Za(e.then) && Za(e.catch),
      setImmediate: ki,
      asap: Ti,
      isIterable: (e) => null != e && Za(e[Ha]),
    };
  function _i(e, t, n, r, o) {
    (Error.call(this),
      Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = 'AxiosError'),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      o && ((this.response = o), (this.status = o.status ? o.status : null)));
  }
  Oi.inherits(_i, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: Oi.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    },
  });
  const Ai = _i.prototype,
    Ni = {};
  ([
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL',
  ].forEach((e) => {
    Ni[e] = { value: e };
  }),
    Object.defineProperties(_i, Ni),
    Object.defineProperty(Ai, 'isAxiosError', { value: !0 }),
    (_i.from = (e, t, n, r, o, a) => {
      const i = Object.create(Ai);
      return (
        Oi.toFlatObject(
          e,
          i,
          function (e) {
            return e !== Error.prototype;
          },
          (e) => 'isAxiosError' !== e,
        ),
        _i.call(i, e.message, t, n, r, o),
        (i.cause = e),
        (i.name = e.name),
        a && Object.assign(i, a),
        i
      );
    }));
  const Li = _i;
  function Di(e) {
    return Oi.isPlainObject(e) || Oi.isArray(e);
  }
  function zi(e) {
    return Oi.endsWith(e, '[]') ? e.slice(0, -2) : e;
  }
  function ji(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return ((e = zi(e)), !n && t ? '[' + e + ']' : e);
          })
          .join(n ? '.' : '')
      : t;
  }
  const Mi = Oi.toFlatObject(Oi, {}, null, function (e) {
      return /^is[A-Z]/.test(e);
    }),
    Ii = function (e, t, n) {
      if (!Oi.isObject(e)) throw new TypeError('target must be an object');
      t = t || new FormData();
      const r = (n = Oi.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (e, t) {
          return !Oi.isUndefined(t[e]);
        })).metaTokens,
        o = n.visitor || s,
        a = n.dots,
        i = n.indexes,
        l = (n.Blob || ('undefined' != typeof Blob && Blob)) && Oi.isSpecCompliantForm(t);
      if (!Oi.isFunction(o)) throw new TypeError('visitor must be a function');
      function u(e) {
        if (null === e) return '';
        if (Oi.isDate(e)) return e.toISOString();
        if (!l && Oi.isBlob(e)) throw new Li('Blob is not supported. Use a Buffer instead.');
        return Oi.isArrayBuffer(e) || Oi.isTypedArray(e) ? (l && 'function' == typeof Blob ? new Blob([e]) : Buffer.from(e)) : e;
      }
      function s(e, n, o) {
        let l = e;
        if (e && !o && 'object' == typeof e)
          if (Oi.endsWith(n, '{}')) ((n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e)));
          else if (
            (Oi.isArray(e) &&
              (function (e) {
                return Oi.isArray(e) && !e.some(Di);
              })(e)) ||
            ((Oi.isFileList(e) || Oi.endsWith(n, '[]')) && (l = Oi.toArray(e)))
          )
            return (
              (n = zi(n)),
              l.forEach(function (e, r) {
                !Oi.isUndefined(e) && null !== e && t.append(!0 === i ? ji([n], r, a) : null === i ? n : n + '[]', u(e));
              }),
              !1
            );
        return !!Di(e) || (t.append(ji(o, n, a), u(e)), !1);
      }
      const c = [],
        f = Object.assign(Mi, {
          defaultVisitor: s,
          convertValue: u,
          isVisitable: Di,
        });
      if (!Oi.isObject(e)) throw new TypeError('data must be an object');
      return (
        (function e(n, r) {
          if (!Oi.isUndefined(n)) {
            if (-1 !== c.indexOf(n)) throw Error('Circular reference detected in ' + r.join('.'));
            (c.push(n),
              Oi.forEach(n, function (n, a) {
                !0 === (!(Oi.isUndefined(n) || null === n) && o.call(t, n, Oi.isString(a) ? a.trim() : a, r, f)) && e(n, r ? r.concat(a) : [a]);
              }),
              c.pop());
          }
        })(e),
        t
      );
    };
  function Fi(e) {
    const t = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\0',
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function Bi(e, t) {
    ((this._pairs = []), e && Ii(e, this, t));
  }
  const Ui = Bi.prototype;
  ((Ui.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (Ui.toString = function (e) {
      const t = e
        ? function (t) {
            return e.call(this, t, Fi);
          }
        : Fi;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + '=' + t(e[1]);
        }, '')
        .join('&');
    }));
  const Wi = Bi;
  function $i(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }
  function Hi(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || $i;
    Oi.isFunction(n) && (n = { serialize: n });
    const o = n && n.serialize;
    let a;
    if (((a = o ? o(t, n) : Oi.isURLSearchParams(t) ? t.toString() : new Wi(t, n).toString(r)), a)) {
      const t = e.indexOf('#');
      (-1 !== t && (e = e.slice(0, t)), (e += (-1 === e.indexOf('?') ? '?' : '&') + a));
    }
    return e;
  }
  const qi = class {
      constructor() {
        this.handlers = [];
      }
      use(e, t, n) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(e) {
        Oi.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }
    },
    Vi = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    Gi = {
      isBrowser: !0,
      classes: {
        URLSearchParams: 'undefined' != typeof URLSearchParams ? URLSearchParams : Wi,
        FormData: 'undefined' != typeof FormData ? FormData : null,
        Blob: 'undefined' != typeof Blob ? Blob : null,
      },
      protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
    },
    Yi = 'undefined' != typeof window && 'undefined' != typeof document,
    Ki = ('object' == typeof navigator && navigator) || void 0,
    Xi = Yi && (!Ki || ['ReactNative', 'NativeScript', 'NS'].indexOf(Ki.product) < 0),
    Qi = 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && 'function' == typeof self.importScripts,
    Ji = (Yi && window.location.href) || 'http://localhost',
    Zi = { ...r, ...Gi },
    el = function (e) {
      function t(e, n, r, o) {
        let a = e[o++];
        if ('__proto__' === a) return !0;
        const i = Number.isFinite(+a),
          l = o >= e.length;
        return (
          (a = !a && Oi.isArray(r) ? r.length : a),
          l
            ? (Oi.hasOwnProp(r, a) ? (r[a] = [r[a], n]) : (r[a] = n), !i)
            : ((r[a] && Oi.isObject(r[a])) || (r[a] = []),
              t(e, n, r[a], o) &&
                Oi.isArray(r[a]) &&
                (r[a] = (function (e) {
                  const t = {},
                    n = Object.keys(e);
                  let r;
                  const o = n.length;
                  let a;
                  for (r = 0; r < o; r++) ((a = n[r]), (t[a] = e[a]));
                  return t;
                })(r[a])),
              !i)
        );
      }
      if (Oi.isFormData(e) && Oi.isFunction(e.entries)) {
        const n = {};
        return (
          Oi.forEachEntry(e, (e, r) => {
            t(
              (function (e) {
                return Oi.matchAll(/\w+|\[(\w*)]/g, e).map((e) => ('[]' === e[0] ? '' : e[1] || e[0]));
              })(e),
              r,
              n,
              0,
            );
          }),
          n
        );
      }
      return null;
    },
    tl = {
      transitional: Vi,
      adapter: ['xhr', 'http', 'fetch'],
      transformRequest: [
        function (e, t) {
          const n = t.getContentType() || '',
            r = n.indexOf('application/json') > -1,
            o = Oi.isObject(e);
          if ((o && Oi.isHTMLForm(e) && (e = new FormData(e)), Oi.isFormData(e))) return r ? JSON.stringify(el(e)) : e;
          if (Oi.isArrayBuffer(e) || Oi.isBuffer(e) || Oi.isStream(e) || Oi.isFile(e) || Oi.isBlob(e) || Oi.isReadableStream(e)) return e;
          if (Oi.isArrayBufferView(e)) return e.buffer;
          if (Oi.isURLSearchParams(e)) return (t.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), e.toString());
          let a;
          if (o) {
            if (n.indexOf('application/x-www-form-urlencoded') > -1)
              return (function (e, t) {
                return Ii(
                  e,
                  new Zi.classes.URLSearchParams(),
                  Object.assign(
                    {
                      visitor: function (e, t, n, r) {
                        return Zi.isNode && Oi.isBuffer(e) ? (this.append(t, e.toString('base64')), !1) : r.defaultVisitor.apply(this, arguments);
                      },
                    },
                    t,
                  ),
                );
              })(e, this.formSerializer).toString();
            if ((a = Oi.isFileList(e)) || n.indexOf('multipart/form-data') > -1) {
              const t = this.env && this.env.FormData;
              return Ii(a ? { 'files[]': e } : e, t && new t(), this.formSerializer);
            }
          }
          return o || r
            ? (t.setContentType('application/json', !1),
              (function (e) {
                if (Oi.isString(e))
                  try {
                    return ((0, JSON.parse)(e), Oi.trim(e));
                  } catch (e) {
                    if ('SyntaxError' !== e.name) throw e;
                  }
                return (0, JSON.stringify)(e);
              })(e))
            : e;
        },
      ],
      transformResponse: [
        function (e) {
          const t = this.transitional || tl.transitional,
            n = t && t.forcedJSONParsing,
            r = 'json' === this.responseType;
          if (Oi.isResponse(e) || Oi.isReadableStream(e)) return e;
          if (e && Oi.isString(e) && ((n && !this.responseType) || r)) {
            const n = !(t && t.silentJSONParsing) && r;
            try {
              return JSON.parse(e);
            } catch (e) {
              if (n) {
                if ('SyntaxError' === e.name) throw Li.from(e, Li.ERR_BAD_RESPONSE, this, null, this.response);
                throw e;
              }
            }
          }
          return e;
        },
      ],
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
      env: { FormData: Zi.classes.FormData, Blob: Zi.classes.Blob },
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      },
      headers: {
        common: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': void 0,
        },
      },
    };
  Oi.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
    tl.headers[e] = {};
  });
  const nl = tl,
    rl = Oi.toObjectSet([
      'age',
      'authorization',
      'content-length',
      'content-type',
      'etag',
      'expires',
      'from',
      'host',
      'if-modified-since',
      'if-unmodified-since',
      'last-modified',
      'location',
      'max-forwards',
      'proxy-authorization',
      'referer',
      'retry-after',
      'user-agent',
    ]),
    ol = Symbol('internals');
  function al(e) {
    return e && String(e).trim().toLowerCase();
  }
  function il(e) {
    return !1 === e || null == e ? e : Oi.isArray(e) ? e.map(il) : String(e);
  }
  function ll(e, t, n, r, o) {
    return Oi.isFunction(r)
      ? r.call(this, t, n)
      : (o && (t = n), Oi.isString(t) ? (Oi.isString(r) ? -1 !== t.indexOf(r) : Oi.isRegExp(r) ? r.test(t) : void 0) : void 0);
  }
  class ul {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, n) {
      const r = this;
      function o(e, t, n) {
        const o = al(t);
        if (!o) throw new Error('header name must be a non-empty string');
        const a = Oi.findKey(r, o);
        (!a || void 0 === r[a] || !0 === n || (void 0 === n && !1 !== r[a])) && (r[a || t] = il(e));
      }
      const a = (e, t) => Oi.forEach(e, (e, n) => o(e, n, t));
      if (Oi.isPlainObject(e) || e instanceof this.constructor) a(e, t);
      else if (Oi.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))
        a(
          ((e) => {
            const t = {};
            let n, r, o;
            return (
              e &&
                e.split('\n').forEach(function (e) {
                  ((o = e.indexOf(':')),
                    (n = e.substring(0, o).trim().toLowerCase()),
                    (r = e.substring(o + 1).trim()),
                    !n || (t[n] && rl[n]) || ('set-cookie' === n ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ', ' + r : r)));
                }),
              t
            );
          })(e),
          t,
        );
      else if (Oi.isObject(e) && Oi.isIterable(e)) {
        let n,
          r,
          o = {};
        for (const t of e) {
          if (!Oi.isArray(t)) throw TypeError('Object iterator must return a key-value pair');
          o[(r = t[0])] = (n = o[r]) ? (Oi.isArray(n) ? [...n, t[1]] : [n, t[1]]) : t[1];
        }
        a(o, t);
      } else null != e && o(t, e, n);
      return this;
    }
    get(e, t) {
      if ((e = al(e))) {
        const n = Oi.findKey(this, e);
        if (n) {
          const e = this[n];
          if (!t) return e;
          if (!0 === t)
            return (function (e) {
              const t = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let r;
              for (; (r = n.exec(e)); ) t[r[1]] = r[2];
              return t;
            })(e);
          if (Oi.isFunction(t)) return t.call(this, e, n);
          if (Oi.isRegExp(t)) return t.exec(e);
          throw new TypeError('parser must be boolean|regexp|function');
        }
      }
    }
    has(e, t) {
      if ((e = al(e))) {
        const n = Oi.findKey(this, e);
        return !(!n || void 0 === this[n] || (t && !ll(0, this[n], n, t)));
      }
      return !1;
    }
    delete(e, t) {
      const n = this;
      let r = !1;
      function o(e) {
        if ((e = al(e))) {
          const o = Oi.findKey(n, e);
          !o || (t && !ll(0, n[o], o, t)) || (delete n[o], (r = !0));
        }
      }
      return (Oi.isArray(e) ? e.forEach(o) : o(e), r);
    }
    clear(e) {
      const t = Object.keys(this);
      let n = t.length,
        r = !1;
      for (; n--; ) {
        const o = t[n];
        (e && !ll(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
      }
      return r;
    }
    normalize(e) {
      const t = this,
        n = {};
      return (
        Oi.forEach(this, (r, o) => {
          const a = Oi.findKey(n, o);
          if (a) return ((t[a] = il(r)), void delete t[o]);
          const i = e
            ? (function (e) {
                return e
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
              })(o)
            : String(o).trim();
          (i !== o && delete t[o], (t[i] = il(r)), (n[i] = !0));
        }),
        this
      );
    }
    concat(...e) {
      return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
      const t = Object.create(null);
      return (
        Oi.forEach(this, (n, r) => {
          null != n && !1 !== n && (t[r] = e && Oi.isArray(n) ? n.join(', ') : n);
        }),
        t
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map(([e, t]) => e + ': ' + t)
        .join('\n');
    }
    getSetCookie() {
      return this.get('set-cookie') || [];
    }
    get [Symbol.toStringTag]() {
      return 'AxiosHeaders';
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e, ...t) {
      const n = new this(e);
      return (t.forEach((e) => n.set(e)), n);
    }
    static accessor(e) {
      const t = (this[ol] = this[ol] = { accessors: {} }).accessors,
        n = this.prototype;
      function r(e) {
        const r = al(e);
        t[r] ||
          ((function (e, t) {
            const n = Oi.toCamelCase(' ' + t);
            ['get', 'set', 'has'].forEach((r) => {
              Object.defineProperty(e, r + n, {
                value: function (e, n, o) {
                  return this[r].call(this, t, e, n, o);
                },
                configurable: !0,
              });
            });
          })(n, e),
          (t[r] = !0));
      }
      return (Oi.isArray(e) ? e.forEach(r) : r(e), this);
    }
  }
  (ul.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']),
    Oi.reduceDescriptors(ul.prototype, ({ value: e }, t) => {
      let n = t[0].toUpperCase() + t.slice(1);
      return {
        get: () => e,
        set(e) {
          this[n] = e;
        },
      };
    }),
    Oi.freezeMethods(ul));
  const sl = ul;
  function cl(e, t) {
    const n = this || nl,
      r = t || n,
      o = sl.from(r.headers);
    let a = r.data;
    return (
      Oi.forEach(e, function (e) {
        a = e.call(n, a, o.normalize(), t ? t.status : void 0);
      }),
      o.normalize(),
      a
    );
  }
  function fl(e) {
    return !(!e || !e.__CANCEL__);
  }
  function dl(e, t, n) {
    (Li.call(this, null == e ? 'canceled' : e, Li.ERR_CANCELED, t, n), (this.name = 'CanceledError'));
  }
  Oi.inherits(dl, Li, { __CANCEL__: !0 });
  const pl = dl;
  function hl(e, t, n) {
    const r = n.config.validateStatus;
    n.status && r && !r(n.status)
      ? t(
          new Li(
            'Request failed with status code ' + n.status,
            [Li.ERR_BAD_REQUEST, Li.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
            n.config,
            n.request,
            n,
          ),
        )
      : e(n);
  }
  const ml = (e, t, n = 3) => {
      let r = 0;
      const o = (function (e, t) {
        e = e || 10;
        const n = new Array(e),
          r = new Array(e);
        let o,
          a = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (l) {
            const u = Date.now(),
              s = r[i];
            (o || (o = u), (n[a] = l), (r[a] = u));
            let c = i,
              f = 0;
            for (; c !== a; ) ((f += n[c++]), (c %= e));
            if (((a = (a + 1) % e), a === i && (i = (i + 1) % e), u - o < t)) return;
            const d = s && u - s;
            return d ? Math.round((1e3 * f) / d) : void 0;
          }
        );
      })(50, 250);
      return (function (e, t) {
        let n,
          r,
          o = 0,
          a = 1e3 / t;
        const i = (t, a = Date.now()) => {
          ((o = a), (n = null), r && (clearTimeout(r), (r = null)), e.apply(null, t));
        };
        return [
          (...e) => {
            const t = Date.now(),
              l = t - o;
            l >= a
              ? i(e, t)
              : ((n = e),
                r ||
                  (r = setTimeout(() => {
                    ((r = null), i(n));
                  }, a - l)));
          },
          () => n && i(n),
        ];
      })((n) => {
        const a = n.loaded,
          i = n.lengthComputable ? n.total : void 0,
          l = a - r,
          u = o(l);
        ((r = a),
          e({
            loaded: a,
            total: i,
            progress: i ? a / i : void 0,
            bytes: l,
            rate: u || void 0,
            estimated: u && i && a <= i ? (i - a) / u : void 0,
            event: n,
            lengthComputable: null != i,
            [t ? 'download' : 'upload']: !0,
          }));
      }, n);
    },
    yl = (e, t) => {
      const n = null != e;
      return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
    },
    gl =
      (e) =>
      (...t) =>
        Oi.asap(() => e(...t)),
    vl = Zi.hasStandardBrowserEnv
      ? ((e, t) => (n) => ((n = new URL(n, Zi.origin)), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
          new URL(Zi.origin),
          Zi.navigator && /(msie|trident)/i.test(Zi.navigator.userAgent),
        )
      : () => !0,
    bl = Zi.hasStandardBrowserEnv
      ? {
          write(e, t, n, r, o, a) {
            const i = [e + '=' + encodeURIComponent(t)];
            (Oi.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
              Oi.isString(r) && i.push('path=' + r),
              Oi.isString(o) && i.push('domain=' + o),
              !0 === a && i.push('secure'),
              (document.cookie = i.join('; ')));
          },
          read(e) {
            const t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
            this.write(e, '', Date.now() - 864e5);
          },
        }
      : { write() {}, read: () => null, remove() {} };
  function wl(e, t, n) {
    let r = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
    return e && (r || 0 == n)
      ? (function (e, t) {
          return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
        })(e, t)
      : t;
  }
  const Sl = (e) => (e instanceof sl ? { ...e } : e);
  function El(e, t) {
    t = t || {};
    const n = {};
    function r(e, t, n, r) {
      return Oi.isPlainObject(e) && Oi.isPlainObject(t)
        ? Oi.merge.call({ caseless: r }, e, t)
        : Oi.isPlainObject(t)
          ? Oi.merge({}, t)
          : Oi.isArray(t)
            ? t.slice()
            : t;
    }
    function o(e, t, n, o) {
      return Oi.isUndefined(t) ? (Oi.isUndefined(e) ? void 0 : r(void 0, e, 0, o)) : r(e, t, 0, o);
    }
    function a(e, t) {
      if (!Oi.isUndefined(t)) return r(void 0, t);
    }
    function i(e, t) {
      return Oi.isUndefined(t) ? (Oi.isUndefined(e) ? void 0 : r(void 0, e)) : r(void 0, t);
    }
    function l(n, o, a) {
      return a in t ? r(n, o) : a in e ? r(void 0, n) : void 0;
    }
    const u = {
      url: a,
      method: a,
      data: a,
      baseURL: i,
      transformRequest: i,
      transformResponse: i,
      paramsSerializer: i,
      timeout: i,
      timeoutMessage: i,
      withCredentials: i,
      withXSRFToken: i,
      adapter: i,
      responseType: i,
      xsrfCookieName: i,
      xsrfHeaderName: i,
      onUploadProgress: i,
      onDownloadProgress: i,
      decompress: i,
      maxContentLength: i,
      maxBodyLength: i,
      beforeRedirect: i,
      transport: i,
      httpAgent: i,
      httpsAgent: i,
      cancelToken: i,
      socketPath: i,
      responseEncoding: i,
      validateStatus: l,
      headers: (e, t, n) => o(Sl(e), Sl(t), 0, !0),
    };
    return (
      Oi.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
        const a = u[r] || o,
          i = a(e[r], t[r], r);
        (Oi.isUndefined(i) && a !== l) || (n[r] = i);
      }),
      n
    );
  }
  const kl = (e) => {
      const t = El({}, e);
      let n,
        { data: r, withXSRFToken: o, xsrfHeaderName: a, xsrfCookieName: i, headers: l, auth: u } = t;
      if (
        ((t.headers = l = sl.from(l)),
        (t.url = Hi(wl(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer)),
        u && l.set('Authorization', 'Basic ' + btoa((u.username || '') + ':' + (u.password ? unescape(encodeURIComponent(u.password)) : ''))),
        Oi.isFormData(r))
      )
        if (Zi.hasStandardBrowserEnv || Zi.hasStandardBrowserWebWorkerEnv) l.setContentType(void 0);
        else if (!1 !== (n = l.getContentType())) {
          const [e, ...t] = n
            ? n
                .split(';')
                .map((e) => e.trim())
                .filter(Boolean)
            : [];
          l.setContentType([e || 'multipart/form-data', ...t].join('; '));
        }
      if (Zi.hasStandardBrowserEnv && (o && Oi.isFunction(o) && (o = o(t)), o || (!1 !== o && vl(t.url)))) {
        const e = a && i && bl.read(i);
        e && l.set(a, e);
      }
      return t;
    },
    xl =
      'undefined' != typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, n) {
          const r = kl(e);
          let o = r.data;
          const a = sl.from(r.headers).normalize();
          let i,
            l,
            u,
            s,
            c,
            { responseType: f, onUploadProgress: d, onDownloadProgress: p } = r;
          function h() {
            (s && s(), c && c(), r.cancelToken && r.cancelToken.unsubscribe(i), r.signal && r.signal.removeEventListener('abort', i));
          }
          let m = new XMLHttpRequest();
          function y() {
            if (!m) return;
            const r = sl.from('getAllResponseHeaders' in m && m.getAllResponseHeaders());
            (hl(
              function (e) {
                (t(e), h());
              },
              function (e) {
                (n(e), h());
              },
              {
                data: f && 'text' !== f && 'json' !== f ? m.response : m.responseText,
                status: m.status,
                statusText: m.statusText,
                headers: r,
                config: e,
                request: m,
              },
            ),
              (m = null));
          }
          (m.open(r.method.toUpperCase(), r.url, !0),
            (m.timeout = r.timeout),
            'onloadend' in m
              ? (m.onloadend = y)
              : (m.onreadystatechange = function () {
                  m && 4 === m.readyState && (0 !== m.status || (m.responseURL && 0 === m.responseURL.indexOf('file:'))) && setTimeout(y);
                }),
            (m.onabort = function () {
              m && (n(new Li('Request aborted', Li.ECONNABORTED, e, m)), (m = null));
            }),
            (m.onerror = function () {
              (n(new Li('Network Error', Li.ERR_NETWORK, e, m)), (m = null));
            }),
            (m.ontimeout = function () {
              let t = r.timeout ? 'timeout of ' + r.timeout + 'ms exceeded' : 'timeout exceeded';
              const o = r.transitional || Vi;
              (r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                n(new Li(t, o.clarifyTimeoutError ? Li.ETIMEDOUT : Li.ECONNABORTED, e, m)),
                (m = null));
            }),
            void 0 === o && a.setContentType(null),
            'setRequestHeader' in m &&
              Oi.forEach(a.toJSON(), function (e, t) {
                m.setRequestHeader(t, e);
              }),
            Oi.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials),
            f && 'json' !== f && (m.responseType = r.responseType),
            p && (([u, c] = ml(p, !0)), m.addEventListener('progress', u)),
            d && m.upload && (([l, s] = ml(d)), m.upload.addEventListener('progress', l), m.upload.addEventListener('loadend', s)),
            (r.cancelToken || r.signal) &&
              ((i = (t) => {
                m && (n(!t || t.type ? new pl(null, e, m) : t), m.abort(), (m = null));
              }),
              r.cancelToken && r.cancelToken.subscribe(i),
              r.signal && (r.signal.aborted ? i() : r.signal.addEventListener('abort', i))));
          const g = (function (e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || '';
          })(r.url);
          g && -1 === Zi.protocols.indexOf(g) ? n(new Li('Unsupported protocol ' + g + ':', Li.ERR_BAD_REQUEST, e)) : m.send(o || null);
        });
      },
    Cl = (e, t) => {
      const { length: n } = (e = e ? e.filter(Boolean) : []);
      if (t || n) {
        let n,
          r = new AbortController();
        const o = function (e) {
          if (!n) {
            ((n = !0), i());
            const t = e instanceof Error ? e : this.reason;
            r.abort(t instanceof Li ? t : new pl(t instanceof Error ? t.message : t));
          }
        };
        let a =
          t &&
          setTimeout(() => {
            ((a = null), o(new Li(`timeout ${t} of ms exceeded`, Li.ETIMEDOUT)));
          }, t);
        const i = () => {
          e &&
            (a && clearTimeout(a),
            (a = null),
            e.forEach((e) => {
              e.unsubscribe ? e.unsubscribe(o) : e.removeEventListener('abort', o);
            }),
            (e = null));
        };
        e.forEach((e) => e.addEventListener('abort', o));
        const { signal: l } = r;
        return ((l.unsubscribe = () => Oi.asap(i)), l);
      }
    },
    Rl = function* (e, t) {
      let n = e.byteLength;
      if (!t || n < t) return void (yield e);
      let r,
        o = 0;
      for (; o < n; ) ((r = o + t), yield e.slice(o, r), (o = r));
    },
    Pl = (e, t, n, r) => {
      const o = (async function* (e, t) {
        for await (const n of (async function* (e) {
          if (e[Symbol.asyncIterator]) return void (yield* e);
          const t = e.getReader();
          try {
            for (;;) {
              const { done: e, value: n } = await t.read();
              if (e) break;
              yield n;
            }
          } finally {
            await t.cancel();
          }
        })(e))
          yield* Rl(n, t);
      })(e, t);
      let a,
        i = 0,
        l = (e) => {
          a || ((a = !0), r && r(e));
        };
      return new ReadableStream(
        {
          async pull(e) {
            try {
              const { done: t, value: r } = await o.next();
              if (t) return (l(), void e.close());
              let a = r.byteLength;
              if (n) {
                let e = (i += a);
                n(e);
              }
              e.enqueue(new Uint8Array(r));
            } catch (e) {
              throw (l(e), e);
            }
          },
          cancel: (e) => (l(e), o.return()),
        },
        { highWaterMark: 2 },
      );
    },
    Tl = 'function' == typeof fetch && 'function' == typeof Request && 'function' == typeof Response,
    Ol = Tl && 'function' == typeof ReadableStream,
    _l =
      Tl &&
      ('function' == typeof TextEncoder
        ? ((zl = new TextEncoder()), (e) => zl.encode(e))
        : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
    Al = (e, ...t) => {
      try {
        return !!e(...t);
      } catch (e) {
        return !1;
      }
    },
    Nl =
      Ol &&
      Al(() => {
        let e = !1;
        const t = new Request(Zi.origin, {
          body: new ReadableStream(),
          method: 'POST',
          get duplex() {
            return ((e = !0), 'half');
          },
        }).headers.has('Content-Type');
        return e && !t;
      }),
    Ll = Ol && Al(() => Oi.isReadableStream(new Response('').body)),
    Dl = { stream: Ll && ((e) => e.body) };
  var zl, jl;
  Tl &&
    ((jl = new Response()),
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((e) => {
      !Dl[e] &&
        (Dl[e] = Oi.isFunction(jl[e])
          ? (t) => t[e]()
          : (t, n) => {
              throw new Li(`Response type '${e}' is not supported`, Li.ERR_NOT_SUPPORT, n);
            });
    }));
  const Ml =
      Tl &&
      (async (e) => {
        let {
          url: t,
          method: n,
          data: r,
          signal: o,
          cancelToken: a,
          timeout: i,
          onDownloadProgress: l,
          onUploadProgress: u,
          responseType: s,
          headers: c,
          withCredentials: f = 'same-origin',
          fetchOptions: d,
        } = kl(e);
        s = s ? (s + '').toLowerCase() : 'text';
        let p,
          h = Cl([o, a && a.toAbortSignal()], i);
        const m =
          h &&
          h.unsubscribe &&
          (() => {
            h.unsubscribe();
          });
        let y;
        try {
          if (
            u &&
            Nl &&
            'get' !== n &&
            'head' !== n &&
            0 !==
              (y = await (async (e, t) => {
                const n = Oi.toFiniteNumber(e.getContentLength());
                return null == n
                  ? (async (e) => {
                      if (null == e) return 0;
                      if (Oi.isBlob(e)) return e.size;
                      if (Oi.isSpecCompliantForm(e)) {
                        const t = new Request(Zi.origin, {
                          method: 'POST',
                          body: e,
                        });
                        return (await t.arrayBuffer()).byteLength;
                      }
                      return Oi.isArrayBufferView(e) || Oi.isArrayBuffer(e)
                        ? e.byteLength
                        : (Oi.isURLSearchParams(e) && (e += ''), Oi.isString(e) ? (await _l(e)).byteLength : void 0);
                    })(t)
                  : n;
              })(c, r))
          ) {
            let e,
              n = new Request(t, { method: 'POST', body: r, duplex: 'half' });
            if ((Oi.isFormData(r) && (e = n.headers.get('content-type')) && c.setContentType(e), n.body)) {
              const [e, t] = yl(y, ml(gl(u)));
              r = Pl(n.body, 65536, e, t);
            }
          }
          Oi.isString(f) || (f = f ? 'include' : 'omit');
          const o = 'credentials' in Request.prototype;
          p = new Request(t, {
            ...d,
            signal: h,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: 'half',
            credentials: o ? f : void 0,
          });
          let a = await fetch(p);
          const i = Ll && ('stream' === s || 'response' === s);
          if (Ll && (l || (i && m))) {
            const e = {};
            ['status', 'statusText', 'headers'].forEach((t) => {
              e[t] = a[t];
            });
            const t = Oi.toFiniteNumber(a.headers.get('content-length')),
              [n, r] = (l && yl(t, ml(gl(l), !0))) || [];
            a = new Response(
              Pl(a.body, 65536, n, () => {
                (r && r(), m && m());
              }),
              e,
            );
          }
          s = s || 'text';
          let g = await Dl[Oi.findKey(Dl, s) || 'text'](a, e);
          return (
            !i && m && m(),
            await new Promise((t, n) => {
              hl(t, n, {
                data: g,
                headers: sl.from(a.headers),
                status: a.status,
                statusText: a.statusText,
                config: e,
                request: p,
              });
            })
          );
        } catch (t) {
          if ((m && m(), t && 'TypeError' === t.name && /Load failed|fetch/i.test(t.message)))
            throw Object.assign(new Li('Network Error', Li.ERR_NETWORK, e, p), {
              cause: t.cause || t,
            });
          throw Li.from(t, t && t.code, e, p);
        }
      }),
    Il = { http: null, xhr: xl, fetch: Ml };
  Oi.forEach(Il, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, 'name', { value: t });
      } catch (e) {}
      Object.defineProperty(e, 'adapterName', { value: t });
    }
  });
  const Fl = (e) => `- ${e}`,
    Bl = (e) => Oi.isFunction(e) || null === e || !1 === e,
    Ul = (e) => {
      e = Oi.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let a = 0; a < t; a++) {
        let t;
        if (((n = e[a]), (r = n), !Bl(n) && ((r = Il[(t = String(n)).toLowerCase()]), void 0 === r))) throw new Li(`Unknown adapter '${t}'`);
        if (r) break;
        o[t || '#' + a] = r;
      }
      if (!r) {
        const e = Object.entries(o).map(
          ([e, t]) => `adapter ${e} ` + (!1 === t ? 'is not supported by the environment' : 'is not available in the build'),
        );
        let n = t ? (e.length > 1 ? 'since :\n' + e.map(Fl).join('\n') : ' ' + Fl(e[0])) : 'as no adapter specified';
        throw new Li('There is no suitable adapter to dispatch the request ' + n, 'ERR_NOT_SUPPORT');
      }
      return r;
    };
  function Wl(e) {
    if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new pl(null, e);
  }
  function $l(e) {
    return (
      Wl(e),
      (e.headers = sl.from(e.headers)),
      (e.data = cl.call(e, e.transformRequest)),
      -1 !== ['post', 'put', 'patch'].indexOf(e.method) && e.headers.setContentType('application/x-www-form-urlencoded', !1),
      Ul(e.adapter || nl.adapter)(e).then(
        function (t) {
          return (Wl(e), (t.data = cl.call(e, e.transformResponse, t)), (t.headers = sl.from(t.headers)), t);
        },
        function (t) {
          return (
            fl(t) ||
              (Wl(e),
              t &&
                t.response &&
                ((t.response.data = cl.call(e, e.transformResponse, t.response)), (t.response.headers = sl.from(t.response.headers)))),
            Promise.reject(t)
          );
        },
      )
    );
  }
  const Hl = {};
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
    Hl[e] = function (n) {
      return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  });
  const ql = {};
  ((Hl.transitional = function (e, t, n) {
    function r(e, t) {
      return "[Axios v1.9.0] Transitional option '" + e + "'" + t + (n ? '. ' + n : '');
    }
    return (n, o, a) => {
      if (!1 === e) throw new Li(r(o, ' has been removed' + (t ? ' in ' + t : '')), Li.ERR_DEPRECATED);
      return (
        t && !ql[o] && ((ql[o] = !0), console.warn(r(o, ' has been deprecated since v' + t + ' and will be removed in the near future'))),
        !e || e(n, o, a)
      );
    };
  }),
    (Hl.spelling = function (e) {
      return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
    }));
  const Vl = {
      assertOptions: function (e, t, n) {
        if ('object' != typeof e) throw new Li('options must be an object', Li.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let o = r.length;
        for (; o-- > 0; ) {
          const a = r[o],
            i = t[a];
          if (i) {
            const t = e[a],
              n = void 0 === t || i(t, a, e);
            if (!0 !== n) throw new Li('option ' + a + ' must be ' + n, Li.ERR_BAD_OPTION_VALUE);
          } else if (!0 !== n) throw new Li('Unknown option ' + a, Li.ERR_BAD_OPTION);
        }
      },
      validators: Hl,
    },
    Gl = Vl.validators;
  class Yl {
    constructor(e) {
      ((this.defaults = e || {}), (this.interceptors = { request: new qi(), response: new qi() }));
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (e) {
        if (e instanceof Error) {
          let t = {};
          Error.captureStackTrace ? Error.captureStackTrace(t) : (t = new Error());
          const n = t.stack ? t.stack.replace(/^.+\n/, '') : '';
          try {
            e.stack ? n && !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, '')) && (e.stack += '\n' + n) : (e.stack = n);
          } catch (e) {}
        }
        throw e;
      }
    }
    _request(e, t) {
      ('string' == typeof e ? ((t = t || {}).url = e) : (t = e || {}), (t = El(this.defaults, t)));
      const { transitional: n, paramsSerializer: r, headers: o } = t;
      (void 0 !== n &&
        Vl.assertOptions(
          n,
          {
            silentJSONParsing: Gl.transitional(Gl.boolean),
            forcedJSONParsing: Gl.transitional(Gl.boolean),
            clarifyTimeoutError: Gl.transitional(Gl.boolean),
          },
          !1,
        ),
        null != r &&
          (Oi.isFunction(r) ? (t.paramsSerializer = { serialize: r }) : Vl.assertOptions(r, { encode: Gl.function, serialize: Gl.function }, !0)),
        void 0 !== t.allowAbsoluteUrls ||
          (void 0 !== this.defaults.allowAbsoluteUrls ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls) : (t.allowAbsoluteUrls = !0)),
        Vl.assertOptions(
          t,
          {
            baseUrl: Gl.spelling('baseURL'),
            withXsrfToken: Gl.spelling('withXSRFToken'),
          },
          !0,
        ),
        (t.method = (t.method || this.defaults.method || 'get').toLowerCase()));
      let a = o && Oi.merge(o.common, o[t.method]);
      (o &&
        Oi.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (e) => {
          delete o[e];
        }),
        (t.headers = sl.concat(a, o)));
      const i = [];
      let l = !0;
      this.interceptors.request.forEach(function (e) {
        ('function' == typeof e.runWhen && !1 === e.runWhen(t)) || ((l = l && e.synchronous), i.unshift(e.fulfilled, e.rejected));
      });
      const u = [];
      let s;
      this.interceptors.response.forEach(function (e) {
        u.push(e.fulfilled, e.rejected);
      });
      let c,
        f = 0;
      if (!l) {
        const e = [$l.bind(this), void 0];
        for (e.unshift.apply(e, i), e.push.apply(e, u), c = e.length, s = Promise.resolve(t); f < c; ) s = s.then(e[f++], e[f++]);
        return s;
      }
      c = i.length;
      let d = t;
      for (f = 0; f < c; ) {
        const e = i[f++],
          t = i[f++];
        try {
          d = e(d);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        s = $l.call(this, d);
      } catch (e) {
        return Promise.reject(e);
      }
      for (f = 0, c = u.length; f < c; ) s = s.then(u[f++], u[f++]);
      return s;
    }
    getUri(e) {
      return Hi(wl((e = El(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls), e.params, e.paramsSerializer);
    }
  }
  (Oi.forEach(['delete', 'get', 'head', 'options'], function (e) {
    Yl.prototype[e] = function (t, n) {
      return this.request(El(n || {}, { method: e, url: t, data: (n || {}).data }));
    };
  }),
    Oi.forEach(['post', 'put', 'patch'], function (e) {
      function t(t) {
        return function (n, r, o) {
          return this.request(
            El(o || {}, {
              method: e,
              headers: t ? { 'Content-Type': 'multipart/form-data' } : {},
              url: n,
              data: r,
            }),
          );
        };
      }
      ((Yl.prototype[e] = t()), (Yl.prototype[e + 'Form'] = t(!0)));
    }));
  const Kl = Yl;
  class Xl {
    constructor(e) {
      if ('function' != typeof e) throw new TypeError('executor must be a function.');
      let t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      const n = this;
      (this.promise.then((e) => {
        if (!n._listeners) return;
        let t = n._listeners.length;
        for (; t-- > 0; ) n._listeners[t](e);
        n._listeners = null;
      }),
        (this.promise.then = (e) => {
          let t;
          const r = new Promise((e) => {
            (n.subscribe(e), (t = e));
          }).then(e);
          return (
            (r.cancel = function () {
              n.unsubscribe(t);
            }),
            r
          );
        }),
        e(function (e, r, o) {
          n.reason || ((n.reason = new pl(e, r, o)), t(n.reason));
        }));
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
    }
    toAbortSignal() {
      const e = new AbortController(),
        t = (t) => {
          e.abort(t);
        };
      return (this.subscribe(t), (e.signal.unsubscribe = () => this.unsubscribe(t)), e.signal);
    }
    static source() {
      let e;
      return {
        token: new Xl(function (t) {
          e = t;
        }),
        cancel: e,
      };
    }
  }
  const Ql = Xl,
    Jl = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511,
    };
  Object.entries(Jl).forEach(([e, t]) => {
    Jl[t] = e;
  });
  const Zl = Jl,
    eu = (function e(t) {
      const n = new Kl(t),
        r = Ua(Kl.prototype.request, n);
      return (
        Oi.extend(r, Kl.prototype, n, { allOwnKeys: !0 }),
        Oi.extend(r, n, null, { allOwnKeys: !0 }),
        (r.create = function (n) {
          return e(El(t, n));
        }),
        r
      );
    })(nl);
  ((eu.Axios = Kl),
    (eu.CanceledError = pl),
    (eu.CancelToken = Ql),
    (eu.isCancel = fl),
    (eu.VERSION = '1.9.0'),
    (eu.toFormData = Ii),
    (eu.AxiosError = Li),
    (eu.Cancel = eu.CanceledError),
    (eu.all = function (e) {
      return Promise.all(e);
    }),
    (eu.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (eu.isAxiosError = function (e) {
      return Oi.isObject(e) && !0 === e.isAxiosError;
    }),
    (eu.mergeConfig = El),
    (eu.AxiosHeaders = sl),
    (eu.formToJSON = (e) => el(Oi.isHTMLForm(e) ? new FormData(e) : e)),
    (eu.getAdapter = Ul),
    (eu.HttpStatusCode = Zl),
    (eu.default = eu));
  const tu = eu;
  function nu(e) {
    return (
      (nu =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            }),
      nu(e)
    );
  }
  function ru() {
    ru = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o = 'function' == typeof Symbol ? Symbol : {},
      a = o.iterator || '@@iterator',
      i = o.asyncIterator || '@@asyncIterator',
      l = o.toStringTag || '@@toStringTag';
    function u(e, t, n, r) {
      return Object.defineProperty(e, t, {
        value: n,
        enumerable: !r,
        configurable: !r,
        writable: !r,
      });
    }
    try {
      u({}, '');
    } catch (e) {
      u = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function s(t, n, r, o) {
      var a = n && n.prototype instanceof d ? n : d,
        i = Object.create(a.prototype);
      return (
        u(
          i,
          '_invoke',
          (function (t, n, r) {
            var o = 1;
            return function (a, i) {
              if (3 === o) throw Error('Generator is already running');
              if (4 === o) {
                if ('throw' === a) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = a, r.arg = i; ; ) {
                var l = r.delegate;
                if (l) {
                  var u = S(l, r);
                  if (u) {
                    if (u === f) continue;
                    return u;
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg;
                else if ('throw' === r.method) {
                  if (1 === o) throw ((o = 4), r.arg);
                  r.dispatchException(r.arg);
                } else 'return' === r.method && r.abrupt('return', r.arg);
                o = 3;
                var s = c(t, n, r);
                if ('normal' === s.type) {
                  if (((o = r.done ? 4 : 2), s.arg === f)) continue;
                  return { value: s.arg, done: r.done };
                }
                'throw' === s.type && ((o = 4), (r.method = 'throw'), (r.arg = s.arg));
              }
            };
          })(t, r, new x(o || [])),
          !0,
        ),
        i
      );
    }
    function c(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }
    t.wrap = s;
    var f = {};
    function d() {}
    function p() {}
    function h() {}
    var m = {};
    u(m, a, function () {
      return this;
    });
    var y = Object.getPrototypeOf,
      g = y && y(y(C([])));
    g && g !== n && r.call(g, a) && (m = g);
    var v = (h.prototype = d.prototype = Object.create(m));
    function b(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function w(e, t) {
      function n(o, a, i, l) {
        var u = c(e[o], e, a);
        if ('throw' !== u.type) {
          var s = u.arg,
            f = s.value;
          return f && 'object' == nu(f) && r.call(f, '__await')
            ? t.resolve(f.__await).then(
                function (e) {
                  n('next', e, i, l);
                },
                function (e) {
                  n('throw', e, i, l);
                },
              )
            : t.resolve(f).then(
                function (e) {
                  ((s.value = e), i(s));
                },
                function (e) {
                  return n('throw', e, i, l);
                },
              );
        }
        l(u.arg);
      }
      var o;
      u(
        this,
        '_invoke',
        function (e, r) {
          function a() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return (o = o ? o.then(a, a) : a());
        },
        !0,
      );
    }
    function S(t, n) {
      var r = n.method,
        o = t.i[r];
      if (o === e)
        return (
          (n.delegate = null),
          ('throw' === r && t.i.return && ((n.method = 'return'), (n.arg = e), S(t, n), 'throw' === n.method)) ||
            ('return' !== r && ((n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          f
        );
      var a = c(o, t.i, n.arg);
      if ('throw' === a.type) return ((n.method = 'throw'), (n.arg = a.arg), (n.delegate = null), f);
      var i = a.arg;
      return i
        ? i.done
          ? ((n[t.r] = i.value), (n.next = t.n), 'return' !== n.method && ((n.method = 'next'), (n.arg = e)), (n.delegate = null), f)
          : i
        : ((n.method = 'throw'), (n.arg = new TypeError('iterator result is not an object')), (n.delegate = null), f);
    }
    function E(e) {
      this.tryEntries.push(e);
    }
    function k(t) {
      var n = t[4] || {};
      ((n.type = 'normal'), (n.arg = e), (t[4] = n));
    }
    function x(e) {
      ((this.tryEntries = [[-1]]), e.forEach(E, this), this.reset(!0));
    }
    function C(t) {
      if (null != t) {
        var n = t[a];
        if (n) return n.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < t.length; ) if (r.call(t, o)) return ((n.value = t[o]), (n.done = !1), n);
              return ((n.value = e), (n.done = !0), n);
            };
          return (i.next = i);
        }
      }
      throw new TypeError(nu(t) + ' is not iterable');
    }
    return (
      (p.prototype = h),
      u(v, 'constructor', h),
      u(h, 'constructor', p),
      (p.displayName = u(h, l, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return !!t && (t === p || 'GeneratorFunction' === (t.displayName || t.name));
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : ((e.__proto__ = h), u(e, l, 'GeneratorFunction')),
          (e.prototype = Object.create(v)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      b(w.prototype),
      u(w.prototype, i, function () {
        return this;
      }),
      (t.AsyncIterator = w),
      (t.async = function (e, n, r, o, a) {
        void 0 === a && (a = Promise);
        var i = new w(s(e, n, r, o), a);
        return t.isGeneratorFunction(n)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next();
            });
      }),
      b(v),
      u(v, l, 'Generator'),
      u(v, a, function () {
        return this;
      }),
      u(v, 'toString', function () {
        return '[object Generator]';
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.unshift(r);
        return function e() {
          for (; n.length; ) if ((r = n.pop()) in t) return ((e.value = r), (e.done = !1), e);
          return ((e.done = !0), e);
        };
      }),
      (t.values = C),
      (x.prototype = {
        constructor: x,
        reset: function (t) {
          if (
            ((this.prev = this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(k),
            !t)
          )
            for (var n in this) 't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0][4];
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function r(e) {
            ((i.type = 'throw'), (i.arg = t), (n.next = e));
          }
          for (var o = n.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              i = a[4],
              l = this.prev,
              u = a[1],
              s = a[2];
            if (-1 === a[0]) return (r('end'), !1);
            if (!u && !s) throw Error('try statement without catch or finally');
            if (null != a[0] && a[0] <= l) {
              if (l < u) return ((this.method = 'next'), (this.arg = e), r(u), !0);
              if (l < s) return (r(s), !1);
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];
            if (r[0] > -1 && r[0] <= this.prev && this.prev < r[2]) {
              var o = r;
              break;
            }
          }
          o && ('break' === e || 'continue' === e) && o[0] <= t && t <= o[2] && (o = null);
          var a = o ? o[4] : {};
          return ((a.type = e), (a.arg = t), o ? ((this.method = 'next'), (this.next = o[2]), f) : this.complete(a));
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
            f
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[2] === e) return (this.complete(n[4], n[3]), k(n), f);
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[0] === e) {
              var r = n[4];
              if ('throw' === r.type) {
                var o = r.arg;
                k(n);
              }
              return o;
            }
          }
          throw Error('illegal catch attempt');
        },
        delegateYield: function (t, n, r) {
          return ((this.delegate = { i: C(t), r: n, n: r }), 'next' === this.method && (this.arg = e), f);
        },
      }),
      t
    );
  }
  function ou(e, t, n, r, o, a, i) {
    try {
      var l = e[a](i),
        u = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  var au = (function () {
      var e,
        t =
          ((e = ru().mark(function e(t, n) {
            var r, o;
            return ru().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      tu.post(''.concat('http://localhost:8080/auth', '/login'), {
                        username: t,
                        password: n,
                      })
                    );
                  case 2:
                    return ((r = e.sent), (o = r.data.token), sessionStorage.setItem('token', o), e.abrupt('return', o));
                  case 6:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })),
          function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, o) {
              var a = e.apply(t, n);
              function i(e) {
                ou(a, r, o, i, l, 'next', e);
              }
              function l(e) {
                ou(a, r, o, i, l, 'throw', e);
              }
              i(void 0);
            });
          });
      return function (e, n) {
        return t.apply(this, arguments);
      };
    })(),
    iu = function () {
      return sessionStorage.getItem('token');
    };
  function lu(e) {
    return (
      (lu =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            }),
      lu(e)
    );
  }
  function uu() {
    uu = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o = 'function' == typeof Symbol ? Symbol : {},
      a = o.iterator || '@@iterator',
      i = o.asyncIterator || '@@asyncIterator',
      l = o.toStringTag || '@@toStringTag';
    function u(e, t, n, r) {
      return Object.defineProperty(e, t, {
        value: n,
        enumerable: !r,
        configurable: !r,
        writable: !r,
      });
    }
    try {
      u({}, '');
    } catch (e) {
      u = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function s(t, n, r, o) {
      var a = n && n.prototype instanceof d ? n : d,
        i = Object.create(a.prototype);
      return (
        u(
          i,
          '_invoke',
          (function (t, n, r) {
            var o = 1;
            return function (a, i) {
              if (3 === o) throw Error('Generator is already running');
              if (4 === o) {
                if ('throw' === a) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = a, r.arg = i; ; ) {
                var l = r.delegate;
                if (l) {
                  var u = S(l, r);
                  if (u) {
                    if (u === f) continue;
                    return u;
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg;
                else if ('throw' === r.method) {
                  if (1 === o) throw ((o = 4), r.arg);
                  r.dispatchException(r.arg);
                } else 'return' === r.method && r.abrupt('return', r.arg);
                o = 3;
                var s = c(t, n, r);
                if ('normal' === s.type) {
                  if (((o = r.done ? 4 : 2), s.arg === f)) continue;
                  return { value: s.arg, done: r.done };
                }
                'throw' === s.type && ((o = 4), (r.method = 'throw'), (r.arg = s.arg));
              }
            };
          })(t, r, new x(o || [])),
          !0,
        ),
        i
      );
    }
    function c(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }
    t.wrap = s;
    var f = {};
    function d() {}
    function p() {}
    function h() {}
    var m = {};
    u(m, a, function () {
      return this;
    });
    var y = Object.getPrototypeOf,
      g = y && y(y(C([])));
    g && g !== n && r.call(g, a) && (m = g);
    var v = (h.prototype = d.prototype = Object.create(m));
    function b(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function w(e, t) {
      function n(o, a, i, l) {
        var u = c(e[o], e, a);
        if ('throw' !== u.type) {
          var s = u.arg,
            f = s.value;
          return f && 'object' == lu(f) && r.call(f, '__await')
            ? t.resolve(f.__await).then(
                function (e) {
                  n('next', e, i, l);
                },
                function (e) {
                  n('throw', e, i, l);
                },
              )
            : t.resolve(f).then(
                function (e) {
                  ((s.value = e), i(s));
                },
                function (e) {
                  return n('throw', e, i, l);
                },
              );
        }
        l(u.arg);
      }
      var o;
      u(
        this,
        '_invoke',
        function (e, r) {
          function a() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return (o = o ? o.then(a, a) : a());
        },
        !0,
      );
    }
    function S(t, n) {
      var r = n.method,
        o = t.i[r];
      if (o === e)
        return (
          (n.delegate = null),
          ('throw' === r && t.i.return && ((n.method = 'return'), (n.arg = e), S(t, n), 'throw' === n.method)) ||
            ('return' !== r && ((n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          f
        );
      var a = c(o, t.i, n.arg);
      if ('throw' === a.type) return ((n.method = 'throw'), (n.arg = a.arg), (n.delegate = null), f);
      var i = a.arg;
      return i
        ? i.done
          ? ((n[t.r] = i.value), (n.next = t.n), 'return' !== n.method && ((n.method = 'next'), (n.arg = e)), (n.delegate = null), f)
          : i
        : ((n.method = 'throw'), (n.arg = new TypeError('iterator result is not an object')), (n.delegate = null), f);
    }
    function E(e) {
      this.tryEntries.push(e);
    }
    function k(t) {
      var n = t[4] || {};
      ((n.type = 'normal'), (n.arg = e), (t[4] = n));
    }
    function x(e) {
      ((this.tryEntries = [[-1]]), e.forEach(E, this), this.reset(!0));
    }
    function C(t) {
      if (null != t) {
        var n = t[a];
        if (n) return n.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < t.length; ) if (r.call(t, o)) return ((n.value = t[o]), (n.done = !1), n);
              return ((n.value = e), (n.done = !0), n);
            };
          return (i.next = i);
        }
      }
      throw new TypeError(lu(t) + ' is not iterable');
    }
    return (
      (p.prototype = h),
      u(v, 'constructor', h),
      u(h, 'constructor', p),
      (p.displayName = u(h, l, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return !!t && (t === p || 'GeneratorFunction' === (t.displayName || t.name));
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : ((e.__proto__ = h), u(e, l, 'GeneratorFunction')),
          (e.prototype = Object.create(v)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      b(w.prototype),
      u(w.prototype, i, function () {
        return this;
      }),
      (t.AsyncIterator = w),
      (t.async = function (e, n, r, o, a) {
        void 0 === a && (a = Promise);
        var i = new w(s(e, n, r, o), a);
        return t.isGeneratorFunction(n)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next();
            });
      }),
      b(v),
      u(v, l, 'Generator'),
      u(v, a, function () {
        return this;
      }),
      u(v, 'toString', function () {
        return '[object Generator]';
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.unshift(r);
        return function e() {
          for (; n.length; ) if ((r = n.pop()) in t) return ((e.value = r), (e.done = !1), e);
          return ((e.done = !0), e);
        };
      }),
      (t.values = C),
      (x.prototype = {
        constructor: x,
        reset: function (t) {
          if (
            ((this.prev = this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(k),
            !t)
          )
            for (var n in this) 't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0][4];
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function r(e) {
            ((i.type = 'throw'), (i.arg = t), (n.next = e));
          }
          for (var o = n.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              i = a[4],
              l = this.prev,
              u = a[1],
              s = a[2];
            if (-1 === a[0]) return (r('end'), !1);
            if (!u && !s) throw Error('try statement without catch or finally');
            if (null != a[0] && a[0] <= l) {
              if (l < u) return ((this.method = 'next'), (this.arg = e), r(u), !0);
              if (l < s) return (r(s), !1);
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];
            if (r[0] > -1 && r[0] <= this.prev && this.prev < r[2]) {
              var o = r;
              break;
            }
          }
          o && ('break' === e || 'continue' === e) && o[0] <= t && t <= o[2] && (o = null);
          var a = o ? o[4] : {};
          return ((a.type = e), (a.arg = t), o ? ((this.method = 'next'), (this.next = o[2]), f) : this.complete(a));
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
            f
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[2] === e) return (this.complete(n[4], n[3]), k(n), f);
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[0] === e) {
              var r = n[4];
              if ('throw' === r.type) {
                var o = r.arg;
                k(n);
              }
              return o;
            }
          }
          throw Error('illegal catch attempt');
        },
        delegateYield: function (t, n, r) {
          return ((this.delegate = { i: C(t), r: n, n: r }), 'next' === this.method && (this.arg = e), f);
        },
      }),
      t
    );
  }
  function su(e, t, n, r, o, a, i) {
    try {
      var l = e[a](i),
        u = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function cu(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var a = e.apply(t, n);
        function i(e) {
          su(a, r, o, i, l, 'next', e);
        }
        function l(e) {
          su(a, r, o, i, l, 'throw', e);
        }
        i(void 0);
      });
    };
  }
  var fu = 'http://localhost:8080/auth',
    du = (function () {
      var e = cu(
        uu().mark(function e() {
          var t, n;
          return uu().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if ((t = iu())) {
                    e.next = 3;
                    break;
                  }
                  throw new Error('Token no disponible. Usuario no autenticado.');
                case 3:
                  return (
                    (e.next = 5),
                    tu.get(''.concat(fu, '/people'), {
                      headers: { Authorization: 'Bearer '.concat(t) },
                    })
                  );
                case 5:
                  return ((n = e.sent), e.abrupt('return', n.data));
                case 7:
                case 'end':
                  return e.stop();
              }
          }, e);
        }),
      );
      return function () {
        return e.apply(this, arguments);
      };
    })(),
    pu = (function () {
      var e = cu(
        uu().mark(function e(t, n) {
          var r, o;
          return uu().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if ((r = iu())) {
                    e.next = 3;
                    break;
                  }
                  throw new Error('Token no disponible. Usuario no autenticado.');
                case 3:
                  return (
                    (e.next = 5),
                    tu.post(
                      ''.concat(fu, '/person'),
                      { name: t, age: n },
                      {
                        headers: {
                          Authorization: 'Bearer '.concat(r),
                          'Content-Type': 'application/json',
                        },
                      },
                    )
                  );
                case 5:
                  return ((o = e.sent), e.abrupt('return', o.data));
                case 7:
                case 'end':
                  return e.stop();
              }
          }, e);
        }),
      );
      return function (t, n) {
        return e.apply(this, arguments);
      };
    })(),
    hu = (function () {
      var e = cu(
        uu().mark(function e(t) {
          var n;
          return uu().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if ((n = iu())) {
                    e.next = 3;
                    break;
                  }
                  throw new Error('Token no disponible. Usuario no autenticado.');
                case 3:
                  return (
                    (e.next = 5),
                    tu.delete(''.concat(fu, '/person/').concat(t), {
                      headers: { Authorization: 'Bearer '.concat(n) },
                    })
                  );
                case 5:
                case 'end':
                  return e.stop();
              }
          }, e);
        }),
      );
      return function (t) {
        return e.apply(this, arguments);
      };
    })(),
    mu = (function () {
      var e = cu(
        uu().mark(function e(t, n) {
          var r, o;
          return uu().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if ((r = iu())) {
                    e.next = 3;
                    break;
                  }
                  throw new Error('Token no disponible. Usuario no autenticado.');
                case 3:
                  return (
                    (e.next = 5),
                    tu.put(
                      ''.concat(fu, '/person/').concat(t, '/associate/').concat(n),
                      {},
                      {
                        headers: {
                          Authorization: 'Bearer '.concat(r),
                          'Content-Type': 'application/json',
                        },
                      },
                    )
                  );
                case 5:
                  return ((o = e.sent), e.abrupt('return', o.data));
                case 7:
                case 'end':
                  return e.stop();
              }
          }, e);
        }),
      );
      return function (t, n) {
        return e.apply(this, arguments);
      };
    })();
  function yu(e) {
    return (
      (yu =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            }),
      yu(e)
    );
  }
  function gu() {
    gu = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o = 'function' == typeof Symbol ? Symbol : {},
      a = o.iterator || '@@iterator',
      i = o.asyncIterator || '@@asyncIterator',
      l = o.toStringTag || '@@toStringTag';
    function u(e, t, n, r) {
      return Object.defineProperty(e, t, {
        value: n,
        enumerable: !r,
        configurable: !r,
        writable: !r,
      });
    }
    try {
      u({}, '');
    } catch (e) {
      u = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function s(t, n, r, o) {
      var a = n && n.prototype instanceof d ? n : d,
        i = Object.create(a.prototype);
      return (
        u(
          i,
          '_invoke',
          (function (t, n, r) {
            var o = 1;
            return function (a, i) {
              if (3 === o) throw Error('Generator is already running');
              if (4 === o) {
                if ('throw' === a) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = a, r.arg = i; ; ) {
                var l = r.delegate;
                if (l) {
                  var u = S(l, r);
                  if (u) {
                    if (u === f) continue;
                    return u;
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg;
                else if ('throw' === r.method) {
                  if (1 === o) throw ((o = 4), r.arg);
                  r.dispatchException(r.arg);
                } else 'return' === r.method && r.abrupt('return', r.arg);
                o = 3;
                var s = c(t, n, r);
                if ('normal' === s.type) {
                  if (((o = r.done ? 4 : 2), s.arg === f)) continue;
                  return { value: s.arg, done: r.done };
                }
                'throw' === s.type && ((o = 4), (r.method = 'throw'), (r.arg = s.arg));
              }
            };
          })(t, r, new x(o || [])),
          !0,
        ),
        i
      );
    }
    function c(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }
    t.wrap = s;
    var f = {};
    function d() {}
    function p() {}
    function h() {}
    var m = {};
    u(m, a, function () {
      return this;
    });
    var y = Object.getPrototypeOf,
      g = y && y(y(C([])));
    g && g !== n && r.call(g, a) && (m = g);
    var v = (h.prototype = d.prototype = Object.create(m));
    function b(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function w(e, t) {
      function n(o, a, i, l) {
        var u = c(e[o], e, a);
        if ('throw' !== u.type) {
          var s = u.arg,
            f = s.value;
          return f && 'object' == yu(f) && r.call(f, '__await')
            ? t.resolve(f.__await).then(
                function (e) {
                  n('next', e, i, l);
                },
                function (e) {
                  n('throw', e, i, l);
                },
              )
            : t.resolve(f).then(
                function (e) {
                  ((s.value = e), i(s));
                },
                function (e) {
                  return n('throw', e, i, l);
                },
              );
        }
        l(u.arg);
      }
      var o;
      u(
        this,
        '_invoke',
        function (e, r) {
          function a() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return (o = o ? o.then(a, a) : a());
        },
        !0,
      );
    }
    function S(t, n) {
      var r = n.method,
        o = t.i[r];
      if (o === e)
        return (
          (n.delegate = null),
          ('throw' === r && t.i.return && ((n.method = 'return'), (n.arg = e), S(t, n), 'throw' === n.method)) ||
            ('return' !== r && ((n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          f
        );
      var a = c(o, t.i, n.arg);
      if ('throw' === a.type) return ((n.method = 'throw'), (n.arg = a.arg), (n.delegate = null), f);
      var i = a.arg;
      return i
        ? i.done
          ? ((n[t.r] = i.value), (n.next = t.n), 'return' !== n.method && ((n.method = 'next'), (n.arg = e)), (n.delegate = null), f)
          : i
        : ((n.method = 'throw'), (n.arg = new TypeError('iterator result is not an object')), (n.delegate = null), f);
    }
    function E(e) {
      this.tryEntries.push(e);
    }
    function k(t) {
      var n = t[4] || {};
      ((n.type = 'normal'), (n.arg = e), (t[4] = n));
    }
    function x(e) {
      ((this.tryEntries = [[-1]]), e.forEach(E, this), this.reset(!0));
    }
    function C(t) {
      if (null != t) {
        var n = t[a];
        if (n) return n.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < t.length; ) if (r.call(t, o)) return ((n.value = t[o]), (n.done = !1), n);
              return ((n.value = e), (n.done = !0), n);
            };
          return (i.next = i);
        }
      }
      throw new TypeError(yu(t) + ' is not iterable');
    }
    return (
      (p.prototype = h),
      u(v, 'constructor', h),
      u(h, 'constructor', p),
      (p.displayName = u(h, l, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return !!t && (t === p || 'GeneratorFunction' === (t.displayName || t.name));
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : ((e.__proto__ = h), u(e, l, 'GeneratorFunction')),
          (e.prototype = Object.create(v)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      b(w.prototype),
      u(w.prototype, i, function () {
        return this;
      }),
      (t.AsyncIterator = w),
      (t.async = function (e, n, r, o, a) {
        void 0 === a && (a = Promise);
        var i = new w(s(e, n, r, o), a);
        return t.isGeneratorFunction(n)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next();
            });
      }),
      b(v),
      u(v, l, 'Generator'),
      u(v, a, function () {
        return this;
      }),
      u(v, 'toString', function () {
        return '[object Generator]';
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.unshift(r);
        return function e() {
          for (; n.length; ) if ((r = n.pop()) in t) return ((e.value = r), (e.done = !1), e);
          return ((e.done = !0), e);
        };
      }),
      (t.values = C),
      (x.prototype = {
        constructor: x,
        reset: function (t) {
          if (
            ((this.prev = this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(k),
            !t)
          )
            for (var n in this) 't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0][4];
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function r(e) {
            ((i.type = 'throw'), (i.arg = t), (n.next = e));
          }
          for (var o = n.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              i = a[4],
              l = this.prev,
              u = a[1],
              s = a[2];
            if (-1 === a[0]) return (r('end'), !1);
            if (!u && !s) throw Error('try statement without catch or finally');
            if (null != a[0] && a[0] <= l) {
              if (l < u) return ((this.method = 'next'), (this.arg = e), r(u), !0);
              if (l < s) return (r(s), !1);
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];
            if (r[0] > -1 && r[0] <= this.prev && this.prev < r[2]) {
              var o = r;
              break;
            }
          }
          o && ('break' === e || 'continue' === e) && o[0] <= t && t <= o[2] && (o = null);
          var a = o ? o[4] : {};
          return ((a.type = e), (a.arg = t), o ? ((this.method = 'next'), (this.next = o[2]), f) : this.complete(a));
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
            f
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[2] === e) return (this.complete(n[4], n[3]), k(n), f);
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[0] === e) {
              var r = n[4];
              if ('throw' === r.type) {
                var o = r.arg;
                k(n);
              }
              return o;
            }
          }
          throw Error('illegal catch attempt');
        },
        delegateYield: function (t, n, r) {
          return ((this.delegate = { i: C(t), r: n, n: r }), 'next' === this.method && (this.arg = e), f);
        },
      }),
      t
    );
  }
  function vu(e, t, n, r, o, a, i) {
    try {
      var l = e[a](i),
        u = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function bu(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var a = e.apply(t, n);
        function i(e) {
          vu(a, r, o, i, l, 'next', e);
        }
        function l(e) {
          vu(a, r, o, i, l, 'throw', e);
        }
        i(void 0);
      });
    };
  }
  var wu = 'http://localhost:8080/auth/projects',
    Su = (function () {
      var e = bu(
        gu().mark(function e() {
          var t;
          return gu().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    tu.get(wu, {
                      headers: { Authorization: 'Bearer '.concat(iu()) },
                    })
                  );
                case 2:
                  return ((t = e.sent), e.abrupt('return', t.data));
                case 4:
                case 'end':
                  return e.stop();
              }
          }, e);
        }),
      );
      return function () {
        return e.apply(this, arguments);
      };
    })(),
    Eu = (function () {
      var e = bu(
        gu().mark(function e(t) {
          var n, r;
          return gu().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if ((n = iu())) {
                    e.next = 3;
                    break;
                  }
                  throw new Error('Token no disponible. Usuario no autenticado.');
                case 3:
                  return (
                    (e.next = 5),
                    tu.post(
                      wu,
                      { name: t },
                      {
                        headers: {
                          Authorization: 'Bearer '.concat(n),
                          'Content-Type': 'application/json',
                        },
                      },
                    )
                  );
                case 5:
                  return ((r = e.sent), e.abrupt('return', r.data));
                case 7:
                case 'end':
                  return e.stop();
              }
          }, e);
        }),
      );
      return function (t) {
        return e.apply(this, arguments);
      };
    })(),
    ku = n(283),
    xu = {};
  function Cu(e) {
    return (
      (Cu =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            }),
      Cu(e)
    );
  }
  function Ru() {
    Ru = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o = 'function' == typeof Symbol ? Symbol : {},
      a = o.iterator || '@@iterator',
      i = o.asyncIterator || '@@asyncIterator',
      l = o.toStringTag || '@@toStringTag';
    function u(e, t, n, r) {
      return Object.defineProperty(e, t, {
        value: n,
        enumerable: !r,
        configurable: !r,
        writable: !r,
      });
    }
    try {
      u({}, '');
    } catch (e) {
      u = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function s(t, n, r, o) {
      var a = n && n.prototype instanceof d ? n : d,
        i = Object.create(a.prototype);
      return (
        u(
          i,
          '_invoke',
          (function (t, n, r) {
            var o = 1;
            return function (a, i) {
              if (3 === o) throw Error('Generator is already running');
              if (4 === o) {
                if ('throw' === a) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = a, r.arg = i; ; ) {
                var l = r.delegate;
                if (l) {
                  var u = S(l, r);
                  if (u) {
                    if (u === f) continue;
                    return u;
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg;
                else if ('throw' === r.method) {
                  if (1 === o) throw ((o = 4), r.arg);
                  r.dispatchException(r.arg);
                } else 'return' === r.method && r.abrupt('return', r.arg);
                o = 3;
                var s = c(t, n, r);
                if ('normal' === s.type) {
                  if (((o = r.done ? 4 : 2), s.arg === f)) continue;
                  return { value: s.arg, done: r.done };
                }
                'throw' === s.type && ((o = 4), (r.method = 'throw'), (r.arg = s.arg));
              }
            };
          })(t, r, new x(o || [])),
          !0,
        ),
        i
      );
    }
    function c(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }
    t.wrap = s;
    var f = {};
    function d() {}
    function p() {}
    function h() {}
    var m = {};
    u(m, a, function () {
      return this;
    });
    var y = Object.getPrototypeOf,
      g = y && y(y(C([])));
    g && g !== n && r.call(g, a) && (m = g);
    var v = (h.prototype = d.prototype = Object.create(m));
    function b(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function w(e, t) {
      function n(o, a, i, l) {
        var u = c(e[o], e, a);
        if ('throw' !== u.type) {
          var s = u.arg,
            f = s.value;
          return f && 'object' == Cu(f) && r.call(f, '__await')
            ? t.resolve(f.__await).then(
                function (e) {
                  n('next', e, i, l);
                },
                function (e) {
                  n('throw', e, i, l);
                },
              )
            : t.resolve(f).then(
                function (e) {
                  ((s.value = e), i(s));
                },
                function (e) {
                  return n('throw', e, i, l);
                },
              );
        }
        l(u.arg);
      }
      var o;
      u(
        this,
        '_invoke',
        function (e, r) {
          function a() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return (o = o ? o.then(a, a) : a());
        },
        !0,
      );
    }
    function S(t, n) {
      var r = n.method,
        o = t.i[r];
      if (o === e)
        return (
          (n.delegate = null),
          ('throw' === r && t.i.return && ((n.method = 'return'), (n.arg = e), S(t, n), 'throw' === n.method)) ||
            ('return' !== r && ((n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          f
        );
      var a = c(o, t.i, n.arg);
      if ('throw' === a.type) return ((n.method = 'throw'), (n.arg = a.arg), (n.delegate = null), f);
      var i = a.arg;
      return i
        ? i.done
          ? ((n[t.r] = i.value), (n.next = t.n), 'return' !== n.method && ((n.method = 'next'), (n.arg = e)), (n.delegate = null), f)
          : i
        : ((n.method = 'throw'), (n.arg = new TypeError('iterator result is not an object')), (n.delegate = null), f);
    }
    function E(e) {
      this.tryEntries.push(e);
    }
    function k(t) {
      var n = t[4] || {};
      ((n.type = 'normal'), (n.arg = e), (t[4] = n));
    }
    function x(e) {
      ((this.tryEntries = [[-1]]), e.forEach(E, this), this.reset(!0));
    }
    function C(t) {
      if (null != t) {
        var n = t[a];
        if (n) return n.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < t.length; ) if (r.call(t, o)) return ((n.value = t[o]), (n.done = !1), n);
              return ((n.value = e), (n.done = !0), n);
            };
          return (i.next = i);
        }
      }
      throw new TypeError(Cu(t) + ' is not iterable');
    }
    return (
      (p.prototype = h),
      u(v, 'constructor', h),
      u(h, 'constructor', p),
      (p.displayName = u(h, l, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return !!t && (t === p || 'GeneratorFunction' === (t.displayName || t.name));
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : ((e.__proto__ = h), u(e, l, 'GeneratorFunction')),
          (e.prototype = Object.create(v)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      b(w.prototype),
      u(w.prototype, i, function () {
        return this;
      }),
      (t.AsyncIterator = w),
      (t.async = function (e, n, r, o, a) {
        void 0 === a && (a = Promise);
        var i = new w(s(e, n, r, o), a);
        return t.isGeneratorFunction(n)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next();
            });
      }),
      b(v),
      u(v, l, 'Generator'),
      u(v, a, function () {
        return this;
      }),
      u(v, 'toString', function () {
        return '[object Generator]';
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.unshift(r);
        return function e() {
          for (; n.length; ) if ((r = n.pop()) in t) return ((e.value = r), (e.done = !1), e);
          return ((e.done = !0), e);
        };
      }),
      (t.values = C),
      (x.prototype = {
        constructor: x,
        reset: function (t) {
          if (
            ((this.prev = this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(k),
            !t)
          )
            for (var n in this) 't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0][4];
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function r(e) {
            ((i.type = 'throw'), (i.arg = t), (n.next = e));
          }
          for (var o = n.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              i = a[4],
              l = this.prev,
              u = a[1],
              s = a[2];
            if (-1 === a[0]) return (r('end'), !1);
            if (!u && !s) throw Error('try statement without catch or finally');
            if (null != a[0] && a[0] <= l) {
              if (l < u) return ((this.method = 'next'), (this.arg = e), r(u), !0);
              if (l < s) return (r(s), !1);
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];
            if (r[0] > -1 && r[0] <= this.prev && this.prev < r[2]) {
              var o = r;
              break;
            }
          }
          o && ('break' === e || 'continue' === e) && o[0] <= t && t <= o[2] && (o = null);
          var a = o ? o[4] : {};
          return ((a.type = e), (a.arg = t), o ? ((this.method = 'next'), (this.next = o[2]), f) : this.complete(a));
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
            f
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[2] === e) return (this.complete(n[4], n[3]), k(n), f);
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[0] === e) {
              var r = n[4];
              if ('throw' === r.type) {
                var o = r.arg;
                k(n);
              }
              return o;
            }
          }
          throw Error('illegal catch attempt');
        },
        delegateYield: function (t, n, r) {
          return ((this.delegate = { i: C(t), r: n, n: r }), 'next' === this.method && (this.arg = e), f);
        },
      }),
      t
    );
  }
  function Pu(e, t, n, r, o, a, i) {
    try {
      var l = e[a](i),
        u = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function Tu(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var a = e.apply(t, n);
        function i(e) {
          Pu(a, r, o, i, l, 'next', e);
        }
        function l(e) {
          Pu(a, r, o, i, l, 'throw', e);
        }
        i(void 0);
      });
    };
  }
  function Ou(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            o,
            a,
            i,
            l = [],
            u = !0,
            s = !1;
          try {
            if (((a = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              u = !1;
            } else for (; !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
          } catch (e) {
            ((s = !0), (o = e));
          } finally {
            try {
              if (!u && null != n.return && ((i = n.return()), Object(i) !== i)) return;
            } finally {
              if (s) throw o;
            }
          }
          return l;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ('string' == typeof e) return _u(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _u(e, t) : void 0
          );
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      })()
    );
  }
  function _u(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  ((xu.styleTagTransform = Qe()),
    (xu.setAttributes = Ge()),
    (xu.insert = qe().bind(null, 'head')),
    (xu.domAPI = $e()),
    (xu.insertStyleElement = Ke()),
    Ue()(ku.A, xu),
    ku.A && ku.A.locals && ku.A.locals);
  const Au = function () {
    var e = Ou((0, a.useState)([]), 2),
      t = e[0],
      n = e[1],
      r = Ou((0, a.useState)([]), 2),
      o = r[0],
      i = r[1],
      l = Ou((0, a.useState)(!1), 2),
      u = l[0],
      s = l[1],
      c = Ou((0, a.useState)(!1), 2),
      f = c[0],
      d = c[1],
      p = Ou((0, a.useState)(''), 2),
      h = p[0],
      m = p[1],
      y = Ou((0, a.useState)(0), 2),
      g = y[0],
      v = y[1],
      b = Ou((0, a.useState)(null), 2),
      w = b[0],
      S = b[1],
      E = Ou((0, a.useState)(null), 2),
      k = E[0],
      x = E[1],
      C = (function () {
        var e = Tu(
          Ru().mark(function e() {
            var t, r, o, a;
            return Ru().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return ((e.prev = 0), (e.next = 3), Promise.all([du(), Su()]));
                    case 3:
                      ((t = e.sent), (r = Ou(t, 2)), (o = r[0]), (a = r[1]), n(o), i(a), (e.next = 14));
                      break;
                    case 11:
                      ((e.prev = 11), (e.t0 = e.catch(0)), console.error('Error al cargar los datos: ', e.t0));
                    case 14:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 11]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    (0, a.useEffect)(function () {
      C();
    }, []);
    var R = (function () {
        var e = Tu(
          Ru().mark(function e(t) {
            return Ru().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return ((e.prev = 0), (e.next = 3), hu(t));
                    case 3:
                      (n(function (e) {
                        return e.filter(function (e) {
                          return e.id !== t;
                        });
                      }),
                        (e.next = 9));
                      break;
                    case 6:
                      ((e.prev = 6), (e.t0 = e.catch(0)), console.error('Error al eliminar la persona: ', e.t0));
                    case 9:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      P = (function () {
        var e = Tu(
          Ru().mark(function e() {
            return Ru().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return ((e.prev = 0), (e.next = 3), pu(h, g));
                    case 3:
                      (C(), s(!1), m(''), v(0), (e.next = 12));
                      break;
                    case 9:
                      ((e.prev = 9), (e.t0 = e.catch(0)), console.error('Error al crear la persona:', e.t0));
                    case 12:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 9]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      T = (function () {
        var e = Tu(
          Ru().mark(function e() {
            return Ru().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (null === w || null === k) {
                        e.next = 11;
                        break;
                      }
                      return ((e.prev = 1), (e.next = 4), mu(w, k));
                    case 4:
                      (C(), d(!1), (e.next = 11));
                      break;
                    case 8:
                      ((e.prev = 8), (e.t0 = e.catch(1)), console.error('Error al asociar el proyecto: ', e.t0));
                    case 11:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 8]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    return a.createElement(
      'div',
      { className: 'container' },
      a.createElement(
        'div',
        { className: 'header' },
        a.createElement('h1', { className: 'title' }, 'Personas Registradas'),
        a.createElement(
          'button',
          {
            className: 'button',
            onClick: function () {
              return s(!0);
            },
          },
          'Añadir Persona',
        ),
      ),
      a.createElement(
        'table',
        { className: 'table' },
        a.createElement(
          'thead',
          null,
          a.createElement(
            'tr',
            null,
            a.createElement('th', null, 'Id'),
            a.createElement('th', null, 'Nombre'),
            a.createElement('th', null, 'Edad'),
            a.createElement('th', null, 'Direcciones'),
            a.createElement('th', null, 'Proyectos'),
            a.createElement('th', { colSpan: 2 }, 'Acciones'),
          ),
        ),
        a.createElement(
          'tbody',
          null,
          t.map(function (e) {
            var t, n;
            return a.createElement(
              'tr',
              { key: e.id },
              a.createElement('td', null, e.id),
              a.createElement('td', null, e.name),
              a.createElement('td', null, e.age),
              a.createElement(
                'td',
                null,
                (null === (t = e.streets) || void 0 === t ? void 0 : t.length) > 0 ? e.streets.join(', ') : 'No disponible',
              ),
              a.createElement(
                'td',
                null,
                (null === (n = e.projectNames) || void 0 === n ? void 0 : n.length) > 0 ? e.projectNames.join(', ') : 'No disponible',
              ),
              a.createElement(
                'td',
                null,
                a.createElement(
                  'button',
                  {
                    className: 'deleteButton'.concat(' ', 'button'),
                    onClick: function () {
                      return R(e.id);
                    },
                  },
                  'Eliminar',
                ),
              ),
              a.createElement(
                'td',
                null,
                a.createElement(
                  'button',
                  {
                    className: 'associateButton'.concat(' ', 'button'),
                    onClick: function () {
                      (S(e.id), d(!0));
                    },
                  },
                  'Asociar Proyecto',
                ),
              ),
            );
          }),
        ),
      ),
      a.createElement(
        Ba,
        {
          title: 'Añadir Persona',
          visible: u,
          onClose: function () {
            return s(!1);
          },
          position: 'center',
          size: 'xs',
        },
        a.createElement(
          'form',
          {
            onSubmit: function (e) {
              (e.preventDefault(), P());
            },
          },
          a.createElement(
            'div',
            null,
            a.createElement('label', null, 'Nombre:'),
            a.createElement('input', {
              type: 'text',
              value: h,
              onChange: function (e) {
                return m(e.target.value);
              },
              required: !0,
            }),
          ),
          a.createElement(
            'div',
            null,
            a.createElement('label', null, 'Edad:'),
            a.createElement('input', {
              type: 'number',
              value: g,
              onChange: function (e) {
                return v(Number(e.target.value));
              },
              required: !0,
            }),
          ),
          a.createElement('button', { type: 'submit', className: 'button' }, 'Guardar'),
        ),
      ),
      a.createElement(
        Ba,
        {
          title: 'Asociar Proyecto',
          visible: f,
          onClose: function () {
            return d(!1);
          },
          position: 'center',
          size: 'xs',
        },
        a.createElement(
          'select',
          {
            onChange: function (e) {
              return x(Number(e.target.value));
            },
            className: 'select',
          },
          a.createElement('option', { value: '' }, 'Selecciona un Proyecto'),
          o.map(function (e) {
            return a.createElement('option', { key: e.id, value: e.id }, e.name);
          }),
        ),
        a.createElement('button', { className: 'button', onClick: T, disabled: !k }, 'Asociar'),
      ),
    );
  };
  qn.create({
    container: { flexGrow: 0 },
    table: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5 },
    row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ccc' },
    cell: {
      padding: 10,
      borderRightWidth: 1,
      borderColor: '#ccc',
      justifyContent: 'center',
    },
    headerText: { fontWeight: 'bold' },
    cellText: { color: '#333' },
  });
  var Nu = qn.create({
    container: { marginVertical: 10 },
    title: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  });
  const Lu = function (e) {
    var t = e.projects;
    return a.createElement(
      jo,
      { style: Nu.container },
      a.createElement(aa, { style: Nu.title }, 'Proyectos Registrados'),
      a.createElement(o.default, {
        columns: [
          { header: 'ID', accessor: 'id' },
          { header: 'Nombre del Proyecto', accessor: 'name' },
        ],
        data: t,
        size: 'm',
      }),
    );
  };
  var Du = a.forwardRef((e, t) => {
    var n = e.accessibilityLabel,
      r = e.color,
      o = e.disabled,
      i = e.onPress,
      l = e.testID,
      u = e.title;
    return a.createElement(
      Oa,
      {
        accessibilityLabel: n,
        accessibilityRole: 'button',
        disabled: o,
        focusable: !o,
        onPress: i,
        ref: t,
        style: [zu.button, r && { backgroundColor: r }, o && zu.buttonDisabled],
        testID: l,
      },
      a.createElement(aa, { style: [zu.text, o && zu.textDisabled] }, u),
    );
  });
  Du.displayName = 'Button';
  var zu = qn.create({
    button: { backgroundColor: '#2196F3', borderRadius: 2 },
    text: {
      color: '#fff',
      fontWeight: '500',
      padding: 8,
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    buttonDisabled: { backgroundColor: '#dfdfdf' },
    textDisabled: { color: '#a1a1a1' },
  });
  const ju = Du;
  function Mu(e) {
    return (
      (Mu =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            }),
      Mu(e)
    );
  }
  function Iu() {
    Iu = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o = 'function' == typeof Symbol ? Symbol : {},
      a = o.iterator || '@@iterator',
      i = o.asyncIterator || '@@asyncIterator',
      l = o.toStringTag || '@@toStringTag';
    function u(e, t, n, r) {
      return Object.defineProperty(e, t, {
        value: n,
        enumerable: !r,
        configurable: !r,
        writable: !r,
      });
    }
    try {
      u({}, '');
    } catch (e) {
      u = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function s(t, n, r, o) {
      var a = n && n.prototype instanceof d ? n : d,
        i = Object.create(a.prototype);
      return (
        u(
          i,
          '_invoke',
          (function (t, n, r) {
            var o = 1;
            return function (a, i) {
              if (3 === o) throw Error('Generator is already running');
              if (4 === o) {
                if ('throw' === a) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = a, r.arg = i; ; ) {
                var l = r.delegate;
                if (l) {
                  var u = S(l, r);
                  if (u) {
                    if (u === f) continue;
                    return u;
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg;
                else if ('throw' === r.method) {
                  if (1 === o) throw ((o = 4), r.arg);
                  r.dispatchException(r.arg);
                } else 'return' === r.method && r.abrupt('return', r.arg);
                o = 3;
                var s = c(t, n, r);
                if ('normal' === s.type) {
                  if (((o = r.done ? 4 : 2), s.arg === f)) continue;
                  return { value: s.arg, done: r.done };
                }
                'throw' === s.type && ((o = 4), (r.method = 'throw'), (r.arg = s.arg));
              }
            };
          })(t, r, new x(o || [])),
          !0,
        ),
        i
      );
    }
    function c(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }
    t.wrap = s;
    var f = {};
    function d() {}
    function p() {}
    function h() {}
    var m = {};
    u(m, a, function () {
      return this;
    });
    var y = Object.getPrototypeOf,
      g = y && y(y(C([])));
    g && g !== n && r.call(g, a) && (m = g);
    var v = (h.prototype = d.prototype = Object.create(m));
    function b(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function w(e, t) {
      function n(o, a, i, l) {
        var u = c(e[o], e, a);
        if ('throw' !== u.type) {
          var s = u.arg,
            f = s.value;
          return f && 'object' == Mu(f) && r.call(f, '__await')
            ? t.resolve(f.__await).then(
                function (e) {
                  n('next', e, i, l);
                },
                function (e) {
                  n('throw', e, i, l);
                },
              )
            : t.resolve(f).then(
                function (e) {
                  ((s.value = e), i(s));
                },
                function (e) {
                  return n('throw', e, i, l);
                },
              );
        }
        l(u.arg);
      }
      var o;
      u(
        this,
        '_invoke',
        function (e, r) {
          function a() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return (o = o ? o.then(a, a) : a());
        },
        !0,
      );
    }
    function S(t, n) {
      var r = n.method,
        o = t.i[r];
      if (o === e)
        return (
          (n.delegate = null),
          ('throw' === r && t.i.return && ((n.method = 'return'), (n.arg = e), S(t, n), 'throw' === n.method)) ||
            ('return' !== r && ((n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          f
        );
      var a = c(o, t.i, n.arg);
      if ('throw' === a.type) return ((n.method = 'throw'), (n.arg = a.arg), (n.delegate = null), f);
      var i = a.arg;
      return i
        ? i.done
          ? ((n[t.r] = i.value), (n.next = t.n), 'return' !== n.method && ((n.method = 'next'), (n.arg = e)), (n.delegate = null), f)
          : i
        : ((n.method = 'throw'), (n.arg = new TypeError('iterator result is not an object')), (n.delegate = null), f);
    }
    function E(e) {
      this.tryEntries.push(e);
    }
    function k(t) {
      var n = t[4] || {};
      ((n.type = 'normal'), (n.arg = e), (t[4] = n));
    }
    function x(e) {
      ((this.tryEntries = [[-1]]), e.forEach(E, this), this.reset(!0));
    }
    function C(t) {
      if (null != t) {
        var n = t[a];
        if (n) return n.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < t.length; ) if (r.call(t, o)) return ((n.value = t[o]), (n.done = !1), n);
              return ((n.value = e), (n.done = !0), n);
            };
          return (i.next = i);
        }
      }
      throw new TypeError(Mu(t) + ' is not iterable');
    }
    return (
      (p.prototype = h),
      u(v, 'constructor', h),
      u(h, 'constructor', p),
      (p.displayName = u(h, l, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return !!t && (t === p || 'GeneratorFunction' === (t.displayName || t.name));
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : ((e.__proto__ = h), u(e, l, 'GeneratorFunction')),
          (e.prototype = Object.create(v)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      b(w.prototype),
      u(w.prototype, i, function () {
        return this;
      }),
      (t.AsyncIterator = w),
      (t.async = function (e, n, r, o, a) {
        void 0 === a && (a = Promise);
        var i = new w(s(e, n, r, o), a);
        return t.isGeneratorFunction(n)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next();
            });
      }),
      b(v),
      u(v, l, 'Generator'),
      u(v, a, function () {
        return this;
      }),
      u(v, 'toString', function () {
        return '[object Generator]';
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.unshift(r);
        return function e() {
          for (; n.length; ) if ((r = n.pop()) in t) return ((e.value = r), (e.done = !1), e);
          return ((e.done = !0), e);
        };
      }),
      (t.values = C),
      (x.prototype = {
        constructor: x,
        reset: function (t) {
          if (
            ((this.prev = this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(k),
            !t)
          )
            for (var n in this) 't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0][4];
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function r(e) {
            ((i.type = 'throw'), (i.arg = t), (n.next = e));
          }
          for (var o = n.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              i = a[4],
              l = this.prev,
              u = a[1],
              s = a[2];
            if (-1 === a[0]) return (r('end'), !1);
            if (!u && !s) throw Error('try statement without catch or finally');
            if (null != a[0] && a[0] <= l) {
              if (l < u) return ((this.method = 'next'), (this.arg = e), r(u), !0);
              if (l < s) return (r(s), !1);
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];
            if (r[0] > -1 && r[0] <= this.prev && this.prev < r[2]) {
              var o = r;
              break;
            }
          }
          o && ('break' === e || 'continue' === e) && o[0] <= t && t <= o[2] && (o = null);
          var a = o ? o[4] : {};
          return ((a.type = e), (a.arg = t), o ? ((this.method = 'next'), (this.next = o[2]), f) : this.complete(a));
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
            f
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[2] === e) return (this.complete(n[4], n[3]), k(n), f);
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[0] === e) {
              var r = n[4];
              if ('throw' === r.type) {
                var o = r.arg;
                k(n);
              }
              return o;
            }
          }
          throw Error('illegal catch attempt');
        },
        delegateYield: function (t, n, r) {
          return ((this.delegate = { i: C(t), r: n, n: r }), 'next' === this.method && (this.arg = e), f);
        },
      }),
      t
    );
  }
  function Fu(e, t, n, r, o, a, i) {
    try {
      var l = e[a](i),
        u = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function Bu(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var a = e.apply(t, n);
        function i(e) {
          Fu(a, r, o, i, l, 'next', e);
        }
        function l(e) {
          Fu(a, r, o, i, l, 'throw', e);
        }
        i(void 0);
      });
    };
  }
  function Uu(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            o,
            a,
            i,
            l = [],
            u = !0,
            s = !1;
          try {
            if (((a = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              u = !1;
            } else for (; !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
          } catch (e) {
            ((s = !0), (o = e));
          } finally {
            try {
              if (!u && null != n.return && ((i = n.return()), Object(i) !== i)) return;
            } finally {
              if (s) throw o;
            }
          }
          return l;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ('string' == typeof e) return Wu(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Wu(e, t) : void 0
          );
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      })()
    );
  }
  function Wu(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var $u = qn.create({
    container: { padding: 10 },
    header: {
      marginBottom: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: { fontSize: 20, fontWeight: 'bold' },
    label: { marginBottom: 5 },
    input: {
      marginBottom: 10,
      padding: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      width: '100%',
    },
  });
  const Hu = function () {
    var e = Uu((0, a.useState)([]), 2),
      t = e[0],
      n = e[1],
      r = Uu((0, a.useState)(!1), 2),
      o = r[0],
      i = r[1],
      l = Uu((0, a.useState)(''), 2),
      u = l[0],
      s = l[1],
      c = (function () {
        var e = Bu(
          Iu().mark(function e() {
            var t;
            return Iu().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return ((e.prev = 0), (e.next = 3), Su());
                    case 3:
                      ((t = e.sent), n(t), (e.next = 10));
                      break;
                    case 7:
                      ((e.prev = 7), (e.t0 = e.catch(0)), console.error('Error al cargar los proyectos: ', e.t0));
                    case 10:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    (0, a.useEffect)(function () {
      c();
    }, []);
    var f = (function () {
      var e = Bu(
        Iu().mark(function e() {
          return Iu().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return ((e.prev = 0), (e.next = 3), Eu(u));
                  case 3:
                    (c(), i(!1), s(''), (e.next = 11));
                    break;
                  case 8:
                    ((e.prev = 8), (e.t0 = e.catch(0)), console.error('Error al crear el proyecto:', e.t0));
                  case 11:
                  case 'end':
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 8]],
          );
        }),
      );
      return function () {
        return e.apply(this, arguments);
      };
    })();
    return a.createElement(
      jo,
      { style: $u.container },
      a.createElement(
        jo,
        { style: $u.header },
        a.createElement(aa, { style: $u.title }, 'Proyectos Registrados'),
        a.createElement(ju, {
          title: 'Añadir Proyecto',
          onPress: function () {
            return i(!0);
          },
          color: '#4CAF50',
        }),
      ),
      a.createElement(Lu, { projects: t }),
      a.createElement(
        Ba,
        {
          title: 'Añadir Proyecto',
          visible: o,
          onClose: function () {
            return i(!1);
          },
          size: 'xs',
        },
        a.createElement(
          jo,
          null,
          a.createElement(aa, { style: $u.label }, 'Nombre:'),
          a.createElement('input', {
            type: 'text',
            value: u,
            onChange: function (e) {
              return s(e.target.value);
            },
            style: $u.input,
            required: !0,
          }),
          a.createElement(ju, {
            title: 'Guardar',
            onPress: f,
            color: '#2196F3',
          }),
        ),
      ),
    );
  };
  function qu(e) {
    return (
      (qu =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            }),
      qu(e)
    );
  }
  function Vu() {
    Vu = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o = 'function' == typeof Symbol ? Symbol : {},
      a = o.iterator || '@@iterator',
      i = o.asyncIterator || '@@asyncIterator',
      l = o.toStringTag || '@@toStringTag';
    function u(e, t, n, r) {
      return Object.defineProperty(e, t, {
        value: n,
        enumerable: !r,
        configurable: !r,
        writable: !r,
      });
    }
    try {
      u({}, '');
    } catch (e) {
      u = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function s(t, n, r, o) {
      var a = n && n.prototype instanceof d ? n : d,
        i = Object.create(a.prototype);
      return (
        u(
          i,
          '_invoke',
          (function (t, n, r) {
            var o = 1;
            return function (a, i) {
              if (3 === o) throw Error('Generator is already running');
              if (4 === o) {
                if ('throw' === a) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = a, r.arg = i; ; ) {
                var l = r.delegate;
                if (l) {
                  var u = S(l, r);
                  if (u) {
                    if (u === f) continue;
                    return u;
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg;
                else if ('throw' === r.method) {
                  if (1 === o) throw ((o = 4), r.arg);
                  r.dispatchException(r.arg);
                } else 'return' === r.method && r.abrupt('return', r.arg);
                o = 3;
                var s = c(t, n, r);
                if ('normal' === s.type) {
                  if (((o = r.done ? 4 : 2), s.arg === f)) continue;
                  return { value: s.arg, done: r.done };
                }
                'throw' === s.type && ((o = 4), (r.method = 'throw'), (r.arg = s.arg));
              }
            };
          })(t, r, new x(o || [])),
          !0,
        ),
        i
      );
    }
    function c(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }
    t.wrap = s;
    var f = {};
    function d() {}
    function p() {}
    function h() {}
    var m = {};
    u(m, a, function () {
      return this;
    });
    var y = Object.getPrototypeOf,
      g = y && y(y(C([])));
    g && g !== n && r.call(g, a) && (m = g);
    var v = (h.prototype = d.prototype = Object.create(m));
    function b(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function w(e, t) {
      function n(o, a, i, l) {
        var u = c(e[o], e, a);
        if ('throw' !== u.type) {
          var s = u.arg,
            f = s.value;
          return f && 'object' == qu(f) && r.call(f, '__await')
            ? t.resolve(f.__await).then(
                function (e) {
                  n('next', e, i, l);
                },
                function (e) {
                  n('throw', e, i, l);
                },
              )
            : t.resolve(f).then(
                function (e) {
                  ((s.value = e), i(s));
                },
                function (e) {
                  return n('throw', e, i, l);
                },
              );
        }
        l(u.arg);
      }
      var o;
      u(
        this,
        '_invoke',
        function (e, r) {
          function a() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return (o = o ? o.then(a, a) : a());
        },
        !0,
      );
    }
    function S(t, n) {
      var r = n.method,
        o = t.i[r];
      if (o === e)
        return (
          (n.delegate = null),
          ('throw' === r && t.i.return && ((n.method = 'return'), (n.arg = e), S(t, n), 'throw' === n.method)) ||
            ('return' !== r && ((n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          f
        );
      var a = c(o, t.i, n.arg);
      if ('throw' === a.type) return ((n.method = 'throw'), (n.arg = a.arg), (n.delegate = null), f);
      var i = a.arg;
      return i
        ? i.done
          ? ((n[t.r] = i.value), (n.next = t.n), 'return' !== n.method && ((n.method = 'next'), (n.arg = e)), (n.delegate = null), f)
          : i
        : ((n.method = 'throw'), (n.arg = new TypeError('iterator result is not an object')), (n.delegate = null), f);
    }
    function E(e) {
      this.tryEntries.push(e);
    }
    function k(t) {
      var n = t[4] || {};
      ((n.type = 'normal'), (n.arg = e), (t[4] = n));
    }
    function x(e) {
      ((this.tryEntries = [[-1]]), e.forEach(E, this), this.reset(!0));
    }
    function C(t) {
      if (null != t) {
        var n = t[a];
        if (n) return n.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < t.length; ) if (r.call(t, o)) return ((n.value = t[o]), (n.done = !1), n);
              return ((n.value = e), (n.done = !0), n);
            };
          return (i.next = i);
        }
      }
      throw new TypeError(qu(t) + ' is not iterable');
    }
    return (
      (p.prototype = h),
      u(v, 'constructor', h),
      u(h, 'constructor', p),
      (p.displayName = u(h, l, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return !!t && (t === p || 'GeneratorFunction' === (t.displayName || t.name));
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : ((e.__proto__ = h), u(e, l, 'GeneratorFunction')),
          (e.prototype = Object.create(v)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      b(w.prototype),
      u(w.prototype, i, function () {
        return this;
      }),
      (t.AsyncIterator = w),
      (t.async = function (e, n, r, o, a) {
        void 0 === a && (a = Promise);
        var i = new w(s(e, n, r, o), a);
        return t.isGeneratorFunction(n)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next();
            });
      }),
      b(v),
      u(v, l, 'Generator'),
      u(v, a, function () {
        return this;
      }),
      u(v, 'toString', function () {
        return '[object Generator]';
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.unshift(r);
        return function e() {
          for (; n.length; ) if ((r = n.pop()) in t) return ((e.value = r), (e.done = !1), e);
          return ((e.done = !0), e);
        };
      }),
      (t.values = C),
      (x.prototype = {
        constructor: x,
        reset: function (t) {
          if (
            ((this.prev = this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(k),
            !t)
          )
            for (var n in this) 't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0][4];
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function r(e) {
            ((i.type = 'throw'), (i.arg = t), (n.next = e));
          }
          for (var o = n.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              i = a[4],
              l = this.prev,
              u = a[1],
              s = a[2];
            if (-1 === a[0]) return (r('end'), !1);
            if (!u && !s) throw Error('try statement without catch or finally');
            if (null != a[0] && a[0] <= l) {
              if (l < u) return ((this.method = 'next'), (this.arg = e), r(u), !0);
              if (l < s) return (r(s), !1);
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];
            if (r[0] > -1 && r[0] <= this.prev && this.prev < r[2]) {
              var o = r;
              break;
            }
          }
          o && ('break' === e || 'continue' === e) && o[0] <= t && t <= o[2] && (o = null);
          var a = o ? o[4] : {};
          return ((a.type = e), (a.arg = t), o ? ((this.method = 'next'), (this.next = o[2]), f) : this.complete(a));
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
            f
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[2] === e) return (this.complete(n[4], n[3]), k(n), f);
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[0] === e) {
              var r = n[4];
              if ('throw' === r.type) {
                var o = r.arg;
                k(n);
              }
              return o;
            }
          }
          throw Error('illegal catch attempt');
        },
        delegateYield: function (t, n, r) {
          return ((this.delegate = { i: C(t), r: n, n: r }), 'next' === this.method && (this.arg = e), f);
        },
      }),
      t
    );
  }
  function Gu(e, t, n, r, o, a, i) {
    try {
      var l = e[a](i),
        u = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function Yu(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var a = e.apply(t, n);
        function i(e) {
          Gu(a, r, o, i, l, 'next', e);
        }
        function l(e) {
          Gu(a, r, o, i, l, 'throw', e);
        }
        i(void 0);
      });
    };
  }
  var Ku = 'http://localhost:8080/auth/directions',
    Xu = (function () {
      var e = Yu(
        Vu().mark(function e() {
          var t;
          return Vu().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    tu.get(Ku, {
                      headers: { Authorization: 'Bearer '.concat(iu()) },
                    })
                  );
                case 2:
                  return ((t = e.sent), e.abrupt('return', t.data));
                case 4:
                case 'end':
                  return e.stop();
              }
          }, e);
        }),
      );
      return function () {
        return e.apply(this, arguments);
      };
    })(),
    Qu = (function () {
      var e = Yu(
        Vu().mark(function e(t, n) {
          var r, o;
          return Vu().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if ((r = iu())) {
                    e.next = 3;
                    break;
                  }
                  throw new Error('Token no disponible. Usuario no autenticado.');
                case 3:
                  return (
                    (e.next = 5),
                    tu.post(
                      Ku,
                      { street: t, city: n },
                      {
                        headers: {
                          Authorization: 'Bearer '.concat(r),
                          'Content-Type': 'application/json',
                        },
                      },
                    )
                  );
                case 5:
                  return ((o = e.sent), e.abrupt('return', o.data));
                case 7:
                case 'end':
                  return e.stop();
              }
          }, e);
        }),
      );
      return function (t, n) {
        return e.apply(this, arguments);
      };
    })(),
    Ju = n(629),
    Zu = {};
  function es(e) {
    return (
      (es =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            }),
      es(e)
    );
  }
  function ts() {
    ts = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o = 'function' == typeof Symbol ? Symbol : {},
      a = o.iterator || '@@iterator',
      i = o.asyncIterator || '@@asyncIterator',
      l = o.toStringTag || '@@toStringTag';
    function u(e, t, n, r) {
      return Object.defineProperty(e, t, {
        value: n,
        enumerable: !r,
        configurable: !r,
        writable: !r,
      });
    }
    try {
      u({}, '');
    } catch (e) {
      u = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function s(t, n, r, o) {
      var a = n && n.prototype instanceof d ? n : d,
        i = Object.create(a.prototype);
      return (
        u(
          i,
          '_invoke',
          (function (t, n, r) {
            var o = 1;
            return function (a, i) {
              if (3 === o) throw Error('Generator is already running');
              if (4 === o) {
                if ('throw' === a) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = a, r.arg = i; ; ) {
                var l = r.delegate;
                if (l) {
                  var u = S(l, r);
                  if (u) {
                    if (u === f) continue;
                    return u;
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg;
                else if ('throw' === r.method) {
                  if (1 === o) throw ((o = 4), r.arg);
                  r.dispatchException(r.arg);
                } else 'return' === r.method && r.abrupt('return', r.arg);
                o = 3;
                var s = c(t, n, r);
                if ('normal' === s.type) {
                  if (((o = r.done ? 4 : 2), s.arg === f)) continue;
                  return { value: s.arg, done: r.done };
                }
                'throw' === s.type && ((o = 4), (r.method = 'throw'), (r.arg = s.arg));
              }
            };
          })(t, r, new x(o || [])),
          !0,
        ),
        i
      );
    }
    function c(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }
    t.wrap = s;
    var f = {};
    function d() {}
    function p() {}
    function h() {}
    var m = {};
    u(m, a, function () {
      return this;
    });
    var y = Object.getPrototypeOf,
      g = y && y(y(C([])));
    g && g !== n && r.call(g, a) && (m = g);
    var v = (h.prototype = d.prototype = Object.create(m));
    function b(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function w(e, t) {
      function n(o, a, i, l) {
        var u = c(e[o], e, a);
        if ('throw' !== u.type) {
          var s = u.arg,
            f = s.value;
          return f && 'object' == es(f) && r.call(f, '__await')
            ? t.resolve(f.__await).then(
                function (e) {
                  n('next', e, i, l);
                },
                function (e) {
                  n('throw', e, i, l);
                },
              )
            : t.resolve(f).then(
                function (e) {
                  ((s.value = e), i(s));
                },
                function (e) {
                  return n('throw', e, i, l);
                },
              );
        }
        l(u.arg);
      }
      var o;
      u(
        this,
        '_invoke',
        function (e, r) {
          function a() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return (o = o ? o.then(a, a) : a());
        },
        !0,
      );
    }
    function S(t, n) {
      var r = n.method,
        o = t.i[r];
      if (o === e)
        return (
          (n.delegate = null),
          ('throw' === r && t.i.return && ((n.method = 'return'), (n.arg = e), S(t, n), 'throw' === n.method)) ||
            ('return' !== r && ((n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          f
        );
      var a = c(o, t.i, n.arg);
      if ('throw' === a.type) return ((n.method = 'throw'), (n.arg = a.arg), (n.delegate = null), f);
      var i = a.arg;
      return i
        ? i.done
          ? ((n[t.r] = i.value), (n.next = t.n), 'return' !== n.method && ((n.method = 'next'), (n.arg = e)), (n.delegate = null), f)
          : i
        : ((n.method = 'throw'), (n.arg = new TypeError('iterator result is not an object')), (n.delegate = null), f);
    }
    function E(e) {
      this.tryEntries.push(e);
    }
    function k(t) {
      var n = t[4] || {};
      ((n.type = 'normal'), (n.arg = e), (t[4] = n));
    }
    function x(e) {
      ((this.tryEntries = [[-1]]), e.forEach(E, this), this.reset(!0));
    }
    function C(t) {
      if (null != t) {
        var n = t[a];
        if (n) return n.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < t.length; ) if (r.call(t, o)) return ((n.value = t[o]), (n.done = !1), n);
              return ((n.value = e), (n.done = !0), n);
            };
          return (i.next = i);
        }
      }
      throw new TypeError(es(t) + ' is not iterable');
    }
    return (
      (p.prototype = h),
      u(v, 'constructor', h),
      u(h, 'constructor', p),
      (p.displayName = u(h, l, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return !!t && (t === p || 'GeneratorFunction' === (t.displayName || t.name));
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : ((e.__proto__ = h), u(e, l, 'GeneratorFunction')),
          (e.prototype = Object.create(v)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      b(w.prototype),
      u(w.prototype, i, function () {
        return this;
      }),
      (t.AsyncIterator = w),
      (t.async = function (e, n, r, o, a) {
        void 0 === a && (a = Promise);
        var i = new w(s(e, n, r, o), a);
        return t.isGeneratorFunction(n)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next();
            });
      }),
      b(v),
      u(v, l, 'Generator'),
      u(v, a, function () {
        return this;
      }),
      u(v, 'toString', function () {
        return '[object Generator]';
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.unshift(r);
        return function e() {
          for (; n.length; ) if ((r = n.pop()) in t) return ((e.value = r), (e.done = !1), e);
          return ((e.done = !0), e);
        };
      }),
      (t.values = C),
      (x.prototype = {
        constructor: x,
        reset: function (t) {
          if (
            ((this.prev = this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(k),
            !t)
          )
            for (var n in this) 't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0][4];
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function r(e) {
            ((i.type = 'throw'), (i.arg = t), (n.next = e));
          }
          for (var o = n.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              i = a[4],
              l = this.prev,
              u = a[1],
              s = a[2];
            if (-1 === a[0]) return (r('end'), !1);
            if (!u && !s) throw Error('try statement without catch or finally');
            if (null != a[0] && a[0] <= l) {
              if (l < u) return ((this.method = 'next'), (this.arg = e), r(u), !0);
              if (l < s) return (r(s), !1);
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];
            if (r[0] > -1 && r[0] <= this.prev && this.prev < r[2]) {
              var o = r;
              break;
            }
          }
          o && ('break' === e || 'continue' === e) && o[0] <= t && t <= o[2] && (o = null);
          var a = o ? o[4] : {};
          return ((a.type = e), (a.arg = t), o ? ((this.method = 'next'), (this.next = o[2]), f) : this.complete(a));
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
            f
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[2] === e) return (this.complete(n[4], n[3]), k(n), f);
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[0] === e) {
              var r = n[4];
              if ('throw' === r.type) {
                var o = r.arg;
                k(n);
              }
              return o;
            }
          }
          throw Error('illegal catch attempt');
        },
        delegateYield: function (t, n, r) {
          return ((this.delegate = { i: C(t), r: n, n: r }), 'next' === this.method && (this.arg = e), f);
        },
      }),
      t
    );
  }
  function ns(e, t, n, r, o, a, i) {
    try {
      var l = e[a](i),
        u = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function rs(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var a = e.apply(t, n);
        function i(e) {
          ns(a, r, o, i, l, 'next', e);
        }
        function l(e) {
          ns(a, r, o, i, l, 'throw', e);
        }
        i(void 0);
      });
    };
  }
  function os(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            o,
            a,
            i,
            l = [],
            u = !0,
            s = !1;
          try {
            if (((a = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              u = !1;
            } else for (; !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
          } catch (e) {
            ((s = !0), (o = e));
          } finally {
            try {
              if (!u && null != n.return && ((i = n.return()), Object(i) !== i)) return;
            } finally {
              if (s) throw o;
            }
          }
          return l;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ('string' == typeof e) return as(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? as(e, t) : void 0
          );
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      })()
    );
  }
  function as(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  ((Zu.styleTagTransform = Qe()),
    (Zu.setAttributes = Ge()),
    (Zu.insert = qe().bind(null, 'head')),
    (Zu.domAPI = $e()),
    (Zu.insertStyleElement = Ke()),
    Ue()(Ju.A, Zu),
    Ju.A && Ju.A.locals && Ju.A.locals);
  const is = function () {
    var e = os((0, a.useState)([]), 2),
      t = e[0],
      n = e[1],
      r = os((0, a.useState)(!1), 2),
      o = r[0],
      i = r[1],
      l = os((0, a.useState)(''), 2),
      u = l[0],
      s = l[1],
      c = os((0, a.useState)(''), 2),
      f = c[0],
      d = c[1],
      p = (function () {
        var e = rs(
          ts().mark(function e() {
            var t;
            return ts().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return ((e.prev = 0), (e.next = 3), Xu());
                    case 3:
                      ((t = e.sent), n(t), (e.next = 10));
                      break;
                    case 7:
                      ((e.prev = 7), (e.t0 = e.catch(0)), console.error('Error al cargar las direcciones: ', e.t0));
                    case 10:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    (0, a.useEffect)(function () {
      p();
    }, []);
    var h = (function () {
      var e = rs(
        ts().mark(function e() {
          return ts().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return ((e.prev = 0), (e.next = 3), Qu(u, f));
                  case 3:
                    (p(), i(!1), s(''), d(''), (e.next = 12));
                    break;
                  case 9:
                    ((e.prev = 9), (e.t0 = e.catch(0)), console.error('Error al crear la dirección:', e.t0));
                  case 12:
                  case 'end':
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 9]],
          );
        }),
      );
      return function () {
        return e.apply(this, arguments);
      };
    })();
    return a.createElement(
      'div',
      { className: 'container' },
      a.createElement('h1', { className: 'title' }, 'Direcciones Registradas'),
      a.createElement(
        'div',
        { className: 'header' },
        a.createElement('h2', { className: 'text-xl' }, 'Lista de Direcciones'),
        a.createElement(
          'button',
          {
            className: 'button',
            onClick: function () {
              return i(!0);
            },
          },
          'Añadir Dirección',
        ),
      ),
      a.createElement(
        'table',
        { className: 'table' },
        a.createElement(
          'thead',
          null,
          a.createElement('tr', null, a.createElement('th', null, 'ID'), a.createElement('th', null, 'Calle'), a.createElement('th', null, 'Ciudad')),
        ),
        a.createElement(
          'tbody',
          null,
          t.map(function (e) {
            return a.createElement(
              'tr',
              { key: e.id },
              a.createElement('td', null, e.id),
              a.createElement('td', null, e.street),
              a.createElement('td', null, e.city),
            );
          }),
        ),
      ),
      o &&
        a.createElement(
          Ba,
          {
            title: 'Añadir Dirección',
            visible: o,
            onClose: function () {
              return i(!1);
            },
            position: 'center',
            size: 'xs',
          },
          a.createElement(
            'form',
            {
              onSubmit: function (e) {
                (e.preventDefault(), h());
              },
            },
            a.createElement(
              'div',
              null,
              a.createElement('label', null, 'Calle:'),
              a.createElement('input', {
                type: 'text',
                value: u,
                onChange: function (e) {
                  return s(e.target.value);
                },
                required: !0,
              }),
            ),
            a.createElement(
              'div',
              null,
              a.createElement('label', null, 'Ciudad:'),
              a.createElement('input', {
                type: 'text',
                value: f,
                onChange: function (e) {
                  return d(e.target.value);
                },
                required: !0,
              }),
            ),
            a.createElement('button', { type: 'submit', className: 'button' }, 'Guardar'),
          ),
        ),
    );
  };
  var ls = n(695),
    us = {};
  function ss(e) {
    return (
      (ss =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            }),
      ss(e)
    );
  }
  function cs() {
    cs = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o = 'function' == typeof Symbol ? Symbol : {},
      a = o.iterator || '@@iterator',
      i = o.asyncIterator || '@@asyncIterator',
      l = o.toStringTag || '@@toStringTag';
    function u(e, t, n, r) {
      return Object.defineProperty(e, t, {
        value: n,
        enumerable: !r,
        configurable: !r,
        writable: !r,
      });
    }
    try {
      u({}, '');
    } catch (e) {
      u = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function s(t, n, r, o) {
      var a = n && n.prototype instanceof d ? n : d,
        i = Object.create(a.prototype);
      return (
        u(
          i,
          '_invoke',
          (function (t, n, r) {
            var o = 1;
            return function (a, i) {
              if (3 === o) throw Error('Generator is already running');
              if (4 === o) {
                if ('throw' === a) throw i;
                return { value: e, done: !0 };
              }
              for (r.method = a, r.arg = i; ; ) {
                var l = r.delegate;
                if (l) {
                  var u = S(l, r);
                  if (u) {
                    if (u === f) continue;
                    return u;
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg;
                else if ('throw' === r.method) {
                  if (1 === o) throw ((o = 4), r.arg);
                  r.dispatchException(r.arg);
                } else 'return' === r.method && r.abrupt('return', r.arg);
                o = 3;
                var s = c(t, n, r);
                if ('normal' === s.type) {
                  if (((o = r.done ? 4 : 2), s.arg === f)) continue;
                  return { value: s.arg, done: r.done };
                }
                'throw' === s.type && ((o = 4), (r.method = 'throw'), (r.arg = s.arg));
              }
            };
          })(t, r, new x(o || [])),
          !0,
        ),
        i
      );
    }
    function c(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }
    t.wrap = s;
    var f = {};
    function d() {}
    function p() {}
    function h() {}
    var m = {};
    u(m, a, function () {
      return this;
    });
    var y = Object.getPrototypeOf,
      g = y && y(y(C([])));
    g && g !== n && r.call(g, a) && (m = g);
    var v = (h.prototype = d.prototype = Object.create(m));
    function b(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function w(e, t) {
      function n(o, a, i, l) {
        var u = c(e[o], e, a);
        if ('throw' !== u.type) {
          var s = u.arg,
            f = s.value;
          return f && 'object' == ss(f) && r.call(f, '__await')
            ? t.resolve(f.__await).then(
                function (e) {
                  n('next', e, i, l);
                },
                function (e) {
                  n('throw', e, i, l);
                },
              )
            : t.resolve(f).then(
                function (e) {
                  ((s.value = e), i(s));
                },
                function (e) {
                  return n('throw', e, i, l);
                },
              );
        }
        l(u.arg);
      }
      var o;
      u(
        this,
        '_invoke',
        function (e, r) {
          function a() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return (o = o ? o.then(a, a) : a());
        },
        !0,
      );
    }
    function S(t, n) {
      var r = n.method,
        o = t.i[r];
      if (o === e)
        return (
          (n.delegate = null),
          ('throw' === r && t.i.return && ((n.method = 'return'), (n.arg = e), S(t, n), 'throw' === n.method)) ||
            ('return' !== r && ((n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
          f
        );
      var a = c(o, t.i, n.arg);
      if ('throw' === a.type) return ((n.method = 'throw'), (n.arg = a.arg), (n.delegate = null), f);
      var i = a.arg;
      return i
        ? i.done
          ? ((n[t.r] = i.value), (n.next = t.n), 'return' !== n.method && ((n.method = 'next'), (n.arg = e)), (n.delegate = null), f)
          : i
        : ((n.method = 'throw'), (n.arg = new TypeError('iterator result is not an object')), (n.delegate = null), f);
    }
    function E(e) {
      this.tryEntries.push(e);
    }
    function k(t) {
      var n = t[4] || {};
      ((n.type = 'normal'), (n.arg = e), (t[4] = n));
    }
    function x(e) {
      ((this.tryEntries = [[-1]]), e.forEach(E, this), this.reset(!0));
    }
    function C(t) {
      if (null != t) {
        var n = t[a];
        if (n) return n.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < t.length; ) if (r.call(t, o)) return ((n.value = t[o]), (n.done = !1), n);
              return ((n.value = e), (n.done = !0), n);
            };
          return (i.next = i);
        }
      }
      throw new TypeError(ss(t) + ' is not iterable');
    }
    return (
      (p.prototype = h),
      u(v, 'constructor', h),
      u(h, 'constructor', p),
      (p.displayName = u(h, l, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return !!t && (t === p || 'GeneratorFunction' === (t.displayName || t.name));
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : ((e.__proto__ = h), u(e, l, 'GeneratorFunction')),
          (e.prototype = Object.create(v)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      b(w.prototype),
      u(w.prototype, i, function () {
        return this;
      }),
      (t.AsyncIterator = w),
      (t.async = function (e, n, r, o, a) {
        void 0 === a && (a = Promise);
        var i = new w(s(e, n, r, o), a);
        return t.isGeneratorFunction(n)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next();
            });
      }),
      b(v),
      u(v, l, 'Generator'),
      u(v, a, function () {
        return this;
      }),
      u(v, 'toString', function () {
        return '[object Generator]';
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.unshift(r);
        return function e() {
          for (; n.length; ) if ((r = n.pop()) in t) return ((e.value = r), (e.done = !1), e);
          return ((e.done = !0), e);
        };
      }),
      (t.values = C),
      (x.prototype = {
        constructor: x,
        reset: function (t) {
          if (
            ((this.prev = this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(k),
            !t)
          )
            for (var n in this) 't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0][4];
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function r(e) {
            ((i.type = 'throw'), (i.arg = t), (n.next = e));
          }
          for (var o = n.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              i = a[4],
              l = this.prev,
              u = a[1],
              s = a[2];
            if (-1 === a[0]) return (r('end'), !1);
            if (!u && !s) throw Error('try statement without catch or finally');
            if (null != a[0] && a[0] <= l) {
              if (l < u) return ((this.method = 'next'), (this.arg = e), r(u), !0);
              if (l < s) return (r(s), !1);
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];
            if (r[0] > -1 && r[0] <= this.prev && this.prev < r[2]) {
              var o = r;
              break;
            }
          }
          o && ('break' === e || 'continue' === e) && o[0] <= t && t <= o[2] && (o = null);
          var a = o ? o[4] : {};
          return ((a.type = e), (a.arg = t), o ? ((this.method = 'next'), (this.next = o[2]), f) : this.complete(a));
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
            f
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[2] === e) return (this.complete(n[4], n[3]), k(n), f);
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n[0] === e) {
              var r = n[4];
              if ('throw' === r.type) {
                var o = r.arg;
                k(n);
              }
              return o;
            }
          }
          throw Error('illegal catch attempt');
        },
        delegateYield: function (t, n, r) {
          return ((this.delegate = { i: C(t), r: n, n: r }), 'next' === this.method && (this.arg = e), f);
        },
      }),
      t
    );
  }
  function fs(e, t, n, r, o, a, i) {
    try {
      var l = e[a](i),
        u = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function ds(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != n) {
          var r,
            o,
            a,
            i,
            l = [],
            u = !0,
            s = !1;
          try {
            if (((a = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              u = !1;
            } else for (; !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
          } catch (e) {
            ((s = !0), (o = e));
          } finally {
            try {
              if (!u && null != n.return && ((i = n.return()), Object(i) !== i)) return;
            } finally {
              if (s) throw o;
            }
          }
          return l;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ('string' == typeof e) return ps(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ps(e, t) : void 0
          );
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      })()
    );
  }
  function ps(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  ((us.styleTagTransform = Qe()),
    (us.setAttributes = Ge()),
    (us.insert = qe().bind(null, 'head')),
    (us.domAPI = $e()),
    (us.insertStyleElement = Ke()),
    Ue()(ls.A, us),
    ls.A && ls.A.locals && ls.A.locals);
  const hs = function (e) {
    var t = e.onLoginSuccess,
      n = ds((0, a.useState)(''), 2),
      r = n[0],
      o = n[1],
      i = ds((0, a.useState)(''), 2),
      l = i[0],
      u = i[1],
      s = ds((0, a.useState)(!0), 2),
      c = s[0],
      f = s[1],
      d = (function () {
        var e,
          n =
            ((e = cs().mark(function e(n) {
              return cs().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (n.preventDefault(), (e.prev = 1), (e.next = 4), au(r, l));
                      case 4:
                        (f(!1), t(), (e.next = 11));
                        break;
                      case 8:
                        ((e.prev = 8), (e.t0 = e.catch(1)), console.error('Error al iniciar sesión:', e.t0));
                      case 11:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]],
              );
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, o) {
                var a = e.apply(t, n);
                function i(e) {
                  fs(a, r, o, i, l, 'next', e);
                }
                function l(e) {
                  fs(a, r, o, i, l, 'throw', e);
                }
                i(void 0);
              });
            });
        return function (e) {
          return n.apply(this, arguments);
        };
      })();
    return a.createElement(
      Ba,
      {
        title: 'Iniciar Sesión',
        visible: c,
        onClose: function () {
          return f(!1);
        },
        position: 'center',
        size: 'xs',
      },
      a.createElement(
        'form',
        { onSubmit: d, className: 'formContainer' },
        a.createElement(
          'div',
          null,
          a.createElement('input', {
            type: 'text',
            placeholder: 'Usuario',
            value: r,
            onChange: function (e) {
              return o(e.target.value);
            },
            className: 'inputField',
          }),
        ),
        a.createElement(
          'div',
          null,
          a.createElement('input', {
            type: 'password',
            placeholder: 'Contraseña',
            value: l,
            onChange: function (e) {
              return u(e.target.value);
            },
            className: 'inputField',
          }),
        ),
        a.createElement('button', { type: 'submit', className: 'submitButton' }, 'Iniciar Sesión'),
      ),
    );
  };
  function ms(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  const ys = function () {
    var e,
      t,
      n =
        ((e = (0, a.useState)(!!iu())),
        (t = 2),
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
          (function (e, t) {
            var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
            if (null != n) {
              var r,
                o,
                a,
                i,
                l = [],
                u = !0,
                s = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else for (; !(u = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
              } catch (e) {
                ((s = !0), (o = e));
              } finally {
                try {
                  if (!u && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                } finally {
                  if (s) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return ms(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ms(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()),
      r = n[0],
      o = n[1];
    return a.createElement(
      Le,
      null,
      a.createElement(
        'div',
        { className: 'min-h-screen bg-gray-100' },
        a.createElement(et, null),
        a.createElement(
          fe,
          null,
          a.createElement(se, {
            path: '/',
            element: r
              ? a.createElement(ue, { to: '/dashboard' })
              : a.createElement(hs, {
                  onLoginSuccess: function () {
                    o(!0);
                  },
                }),
          }),
          a.createElement(se, {
            path: '/dashboard',
            element: r ? a.createElement(rt, null) : a.createElement(ue, { to: '/' }),
          }),
          a.createElement(se, {
            path: '/people',
            element: r ? a.createElement(Au, null) : a.createElement(ue, { to: '/' }),
          }),
          a.createElement(se, {
            path: '/projects',
            element: r ? a.createElement(Hu, null) : a.createElement(ue, { to: '/' }),
          }),
          a.createElement(se, {
            path: '/directions',
            element: r ? a.createElement(is, null) : a.createElement(ue, { to: '/' }),
          }),
        ),
      ),
    );
  };
  var gs = document.getElementById('root');
  (0, i.createRoot)(gs).render(a.createElement(ys, null));
})();
