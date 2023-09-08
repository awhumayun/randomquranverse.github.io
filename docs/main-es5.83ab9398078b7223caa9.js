!(function () {
  function e(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null == n) return;
        var r,
          i,
          o = [],
          s = !0,
          a = !1;
        try {
          for (
            n = n.call(e);
            !(s = (r = n.next()).done) &&
            (o.push(r.value), !t || o.length !== t);
            s = !0
          );
        } catch (u) {
          (a = !0), (i = u);
        } finally {
          try {
            s || null == n.return || n.return();
          } finally {
            if (a) throw i;
          }
        }
        return o;
      })(e, t) ||
      r(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function t(e, t) {
    var n =
      ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!n) {
      if (
        Array.isArray(e) ||
        (n = r(e)) ||
        (t && e && "number" == typeof e.length)
      ) {
        n && (e = n);
        var i = 0,
          o = function () {};
        return {
          s: o,
          n: function () {
            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
          },
          e: function (e) {
            throw e;
          },
          f: o,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    }
    var s,
      a = !0,
      u = !1;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        return (a = e.done), e;
      },
      e: function (e) {
        (u = !0), (s = e);
      },
      f: function () {
        try {
          a || null == n.return || n.return();
        } finally {
          if (u) throw s;
        }
      },
    };
  }
  function n(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return i(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      r(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function r(e, t) {
    if (e) {
      if ("string" == typeof e) return i(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(e)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? i(e, t)
          : void 0
      );
    }
  }
  function i(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function o(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (o = function (e) {
      if (
        null === e ||
        ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
      )
        return e;
      var n;
      if ("function" != typeof e)
        throw new TypeError(
          "Super expression must either be null or a function",
        );
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, r);
      }
      function r() {
        return s(e, arguments, v(this).constructor);
      }
      return (
        (r.prototype = Object.create(e.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        l(r, e)
      );
    })(e);
  }
  function s(e, t, n) {
    return (s = d()
      ? Reflect.construct
      : function (e, t, n) {
          var r = [null];
          r.push.apply(r, t);
          var i = new (Function.bind.apply(e, r))();
          return n && l(i, n.prototype), i;
        }).apply(null, arguments);
  }
  function a(e, t, n) {
    return (a =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (e, t, n) {
            var r = (function (e, t) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(e, t) &&
                null !== (e = v(e));

              );
              return e;
            })(e, t);
            if (r) {
              var i = Object.getOwnPropertyDescriptor(r, t);
              return i.get ? i.get.call(n) : i.value;
            }
          })(e, t, n || e);
  }
  function u(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      t && l(e, t);
  }
  function l(e, t) {
    return (l =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function c(e) {
    var t = d();
    return function () {
      var n,
        r = v(e);
      if (t) {
        var i = v(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return h(this, n);
    };
  }
  function h(e, t) {
    return !t || ("object" != typeof t && "function" != typeof t) ? f(e) : t;
  }
  function f(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return e;
  }
  function d() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function v(e) {
    return (v = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function p(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function y(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function m(e, t, n) {
    return t && y(e.prototype, t), n && y(e, n), e;
  }
  (self.webpackChunkrandomquranverse =
    self.webpackChunkrandomquranverse || []).push([
    [179],
    {
      8255: function (e) {
        function t(e) {
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        }
        (t.keys = function () {
          return [];
        }),
          (t.resolve = t),
          (t.id = 8255),
          (e.exports = t);
      },
      4541: function (r, i, l) {
        "use strict";
        function h(e) {
          return "function" == typeof e;
        }
        var d = !1,
          y = {
            Promise: void 0,
            set useDeprecatedSynchronousErrorHandling(e) {
              if (e) {
                var t = new Error();
                console.warn(
                  "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                    t.stack,
                );
              } else
                d &&
                  console.log(
                    "RxJS: Back to a better error behavior. Thank you. <3",
                  );
              d = e;
            },
            get useDeprecatedSynchronousErrorHandling() {
              return d;
            },
          };
        function g(e) {
          setTimeout(function () {
            throw e;
          }, 0);
        }
        var _ = {
            closed: !0,
            next: function (e) {},
            error: function (e) {
              if (y.useDeprecatedSynchronousErrorHandling) throw e;
              g(e);
            },
            complete: function () {},
          },
          k =
            Array.isArray ||
            function (e) {
              return e && "number" == typeof e.length;
            };
        function b(e) {
          return null !== e && "object" == typeof e;
        }
        var w = (function () {
            function e(e) {
              return (
                Error.call(this),
                (this.message = e
                  ? ""
                      .concat(
                        e.length,
                        " errors occurred during unsubscription:\n",
                      )
                      .concat(
                        e
                          .map(function (e, t) {
                            return "".concat(t + 1, ") ").concat(e.toString());
                          })
                          .join("\n  "),
                      )
                  : ""),
                (this.name = "UnsubscriptionError"),
                (this.errors = e),
                this
              );
            }
            return (e.prototype = Object.create(Error.prototype)), e;
          })(),
          E = (function () {
            var e = (function () {
              function e(t) {
                p(this, e),
                  (this.closed = !1),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
              }
              return (
                m(e, [
                  {
                    key: "unsubscribe",
                    value: function () {
                      var t;
                      if (!this.closed) {
                        var n = this._parentOrParents,
                          r = this._ctorUnsubscribe,
                          i = this._unsubscribe,
                          o = this._subscriptions;
                        if (
                          ((this.closed = !0),
                          (this._parentOrParents = null),
                          (this._subscriptions = null),
                          n instanceof e)
                        )
                          n.remove(this);
                        else if (null !== n)
                          for (var s = 0; s < n.length; ++s) n[s].remove(this);
                        if (h(i)) {
                          r && (this._unsubscribe = void 0);
                          try {
                            i.call(this);
                          } catch (c) {
                            t = c instanceof w ? S(c.errors) : [c];
                          }
                        }
                        if (k(o))
                          for (var a = -1, u = o.length; ++a < u; ) {
                            var l = o[a];
                            if (b(l))
                              try {
                                l.unsubscribe();
                              } catch (c) {
                                (t = t || []),
                                  c instanceof w
                                    ? (t = t.concat(S(c.errors)))
                                    : t.push(c);
                              }
                          }
                        if (t) throw new w(t);
                      }
                    },
                  },
                  {
                    key: "add",
                    value: function (t) {
                      var n = t;
                      if (!t) return e.EMPTY;
                      switch (typeof t) {
                        case "function":
                          n = new e(t);
                        case "object":
                          if (
                            n === this ||
                            n.closed ||
                            "function" != typeof n.unsubscribe
                          )
                            return n;
                          if (this.closed) return n.unsubscribe(), n;
                          if (!(n instanceof e)) {
                            var r = n;
                            (n = new e())._subscriptions = [r];
                          }
                          break;
                        default:
                          throw new Error(
                            "unrecognized teardown " +
                              t +
                              " added to Subscription.",
                          );
                      }
                      var i = n._parentOrParents;
                      if (null === i) n._parentOrParents = this;
                      else if (i instanceof e) {
                        if (i === this) return n;
                        n._parentOrParents = [i, this];
                      } else {
                        if (-1 !== i.indexOf(this)) return n;
                        i.push(this);
                      }
                      var o = this._subscriptions;
                      return (
                        null === o ? (this._subscriptions = [n]) : o.push(n), n
                      );
                    },
                  },
                  {
                    key: "remove",
                    value: function (e) {
                      var t = this._subscriptions;
                      if (t) {
                        var n = t.indexOf(e);
                        -1 !== n && t.splice(n, 1);
                      }
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.EMPTY = (function (e) {
                return (e.closed = !0), e;
              })(new e())),
              e
            );
          })();
        function S(e) {
          return e.reduce(function (e, t) {
            return e.concat(t instanceof w ? t.errors : t);
          }, []);
        }
        var T =
            "function" == typeof Symbol
              ? Symbol("rxSubscriber")
              : "@@rxSubscriber_" + Math.random(),
          C = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r, i) {
              var o;
              switch (
                (p(this, n),
                ((o = t.call(this)).syncErrorValue = null),
                (o.syncErrorThrown = !1),
                (o.syncErrorThrowable = !1),
                (o.isStopped = !1),
                arguments.length)
              ) {
                case 0:
                  o.destination = _;
                  break;
                case 1:
                  if (!e) {
                    o.destination = _;
                    break;
                  }
                  if ("object" == typeof e) {
                    e instanceof n
                      ? ((o.syncErrorThrowable = e.syncErrorThrowable),
                        (o.destination = e),
                        e.add(f(o)))
                      : ((o.syncErrorThrowable = !0),
                        (o.destination = new x(f(o), e)));
                    break;
                  }
                default:
                  (o.syncErrorThrowable = !0),
                    (o.destination = new x(f(o), e, r, i));
              }
              return o;
            }
            return (
              m(
                n,
                [
                  {
                    key: T,
                    value: function () {
                      return this;
                    },
                  },
                  {
                    key: "next",
                    value: function (e) {
                      this.isStopped || this._next(e);
                    },
                  },
                  {
                    key: "error",
                    value: function (e) {
                      this.isStopped || ((this.isStopped = !0), this._error(e));
                    },
                  },
                  {
                    key: "complete",
                    value: function () {
                      this.isStopped ||
                        ((this.isStopped = !0), this._complete());
                    },
                  },
                  {
                    key: "unsubscribe",
                    value: function () {
                      this.closed ||
                        ((this.isStopped = !0),
                        a(v(n.prototype), "unsubscribe", this).call(this));
                    },
                  },
                  {
                    key: "_next",
                    value: function (e) {
                      this.destination.next(e);
                    },
                  },
                  {
                    key: "_error",
                    value: function (e) {
                      this.destination.error(e), this.unsubscribe();
                    },
                  },
                  {
                    key: "_complete",
                    value: function () {
                      this.destination.complete(), this.unsubscribe();
                    },
                  },
                  {
                    key: "_unsubscribeAndRecycle",
                    value: function () {
                      var e = this._parentOrParents;
                      return (
                        (this._parentOrParents = null),
                        this.unsubscribe(),
                        (this.closed = !1),
                        (this.isStopped = !1),
                        (this._parentOrParents = e),
                        this
                      );
                    },
                  },
                ],
                [
                  {
                    key: "create",
                    value: function (e, t, r) {
                      var i = new n(e, t, r);
                      return (i.syncErrorThrowable = !1), i;
                    },
                  },
                ],
              ),
              n
            );
          })(E),
          x = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r, i, o) {
              var s, a;
              p(this, n), ((s = t.call(this))._parentSubscriber = e);
              var u = f(s);
              return (
                h(r)
                  ? (a = r)
                  : r &&
                    ((a = r.next),
                    (i = r.error),
                    (o = r.complete),
                    r !== _ &&
                      (h((u = Object.create(r)).unsubscribe) &&
                        s.add(u.unsubscribe.bind(u)),
                      (u.unsubscribe = s.unsubscribe.bind(f(s))))),
                (s._context = u),
                (s._next = a),
                (s._error = i),
                (s._complete = o),
                s
              );
            }
            return (
              m(n, [
                {
                  key: "next",
                  value: function (e) {
                    if (!this.isStopped && this._next) {
                      var t = this._parentSubscriber;
                      y.useDeprecatedSynchronousErrorHandling &&
                      t.syncErrorThrowable
                        ? this.__tryOrSetError(t, this._next, e) &&
                          this.unsubscribe()
                        : this.__tryOrUnsub(this._next, e);
                    }
                  },
                },
                {
                  key: "error",
                  value: function (e) {
                    if (!this.isStopped) {
                      var t = this._parentSubscriber,
                        n = y.useDeprecatedSynchronousErrorHandling;
                      if (this._error)
                        n && t.syncErrorThrowable
                          ? (this.__tryOrSetError(t, this._error, e),
                            this.unsubscribe())
                          : (this.__tryOrUnsub(this._error, e),
                            this.unsubscribe());
                      else if (t.syncErrorThrowable)
                        n
                          ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0))
                          : g(e),
                          this.unsubscribe();
                      else {
                        if ((this.unsubscribe(), n)) throw e;
                        g(e);
                      }
                    }
                  },
                },
                {
                  key: "complete",
                  value: function () {
                    var e = this;
                    if (!this.isStopped) {
                      var t = this._parentSubscriber;
                      if (this._complete) {
                        var n = function () {
                          return e._complete.call(e._context);
                        };
                        y.useDeprecatedSynchronousErrorHandling &&
                        t.syncErrorThrowable
                          ? (this.__tryOrSetError(t, n), this.unsubscribe())
                          : (this.__tryOrUnsub(n), this.unsubscribe());
                      } else this.unsubscribe();
                    }
                  },
                },
                {
                  key: "__tryOrUnsub",
                  value: function (e, t) {
                    try {
                      e.call(this._context, t);
                    } catch (n) {
                      if (
                        (this.unsubscribe(),
                        y.useDeprecatedSynchronousErrorHandling)
                      )
                        throw n;
                      g(n);
                    }
                  },
                },
                {
                  key: "__tryOrSetError",
                  value: function (e, t, n) {
                    if (!y.useDeprecatedSynchronousErrorHandling)
                      throw new Error("bad call");
                    try {
                      t.call(this._context, n);
                    } catch (r) {
                      return y.useDeprecatedSynchronousErrorHandling
                        ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
                        : (g(r), !0);
                    }
                    return !1;
                  },
                },
                {
                  key: "_unsubscribe",
                  value: function () {
                    var e = this._parentSubscriber;
                    (this._context = null),
                      (this._parentSubscriber = null),
                      e.unsubscribe();
                  },
                },
              ]),
              n
            );
          })(C),
          A =
            ("function" == typeof Symbol && Symbol.observable) ||
            "@@observable";
        function P(e) {
          return e;
        }
        var O,
          I =
            (((O = (function () {
              function e(t) {
                p(this, e), (this._isScalar = !1), t && (this._subscribe = t);
              }
              return (
                m(e, [
                  {
                    key: "lift",
                    value: function (t) {
                      var n = new e();
                      return (n.source = this), (n.operator = t), n;
                    },
                  },
                  {
                    key: "subscribe",
                    value: function (e, t, n) {
                      var r = this.operator,
                        i = (function (e, t, n) {
                          if (e) {
                            if (e instanceof C) return e;
                            if (e[T]) return e[T]();
                          }
                          return e || t || n ? new C(e, t, n) : new C(_);
                        })(e, t, n);
                      if (
                        (i.add(
                          r
                            ? r.call(i, this.source)
                            : this.source ||
                              (y.useDeprecatedSynchronousErrorHandling &&
                                !i.syncErrorThrowable)
                            ? this._subscribe(i)
                            : this._trySubscribe(i),
                        ),
                        y.useDeprecatedSynchronousErrorHandling &&
                          i.syncErrorThrowable &&
                          ((i.syncErrorThrowable = !1), i.syncErrorThrown))
                      )
                        throw i.syncErrorValue;
                      return i;
                    },
                  },
                  {
                    key: "_trySubscribe",
                    value: function (e) {
                      try {
                        return this._subscribe(e);
                      } catch (t) {
                        y.useDeprecatedSynchronousErrorHandling &&
                          ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                          (function (e) {
                            for (; e; ) {
                              var t = e,
                                n = t.closed,
                                r = t.destination,
                                i = t.isStopped;
                              if (n || i) return !1;
                              e = r && r instanceof C ? r : null;
                            }
                            return !0;
                          })(e)
                            ? e.error(t)
                            : console.warn(t);
                      }
                    },
                  },
                  {
                    key: "forEach",
                    value: function (e, t) {
                      var n = this;
                      return new (t = D(t))(function (t, r) {
                        var i;
                        i = n.subscribe(
                          function (t) {
                            try {
                              e(t);
                            } catch (n) {
                              r(n), i && i.unsubscribe();
                            }
                          },
                          r,
                          t,
                        );
                      });
                    },
                  },
                  {
                    key: "_subscribe",
                    value: function (e) {
                      var t = this.source;
                      return t && t.subscribe(e);
                    },
                  },
                  {
                    key: A,
                    value: function () {
                      return this;
                    },
                  },
                  {
                    key: "pipe",
                    value: function () {
                      for (
                        var e = arguments.length, t = new Array(e), n = 0;
                        n < e;
                        n++
                      )
                        t[n] = arguments[n];
                      return 0 === t.length
                        ? this
                        : (0 === (r = t).length
                            ? P
                            : 1 === r.length
                            ? r[0]
                            : function (e) {
                                return r.reduce(function (e, t) {
                                  return t(e);
                                }, e);
                              })(this);
                      var r;
                    },
                  },
                  {
                    key: "toPromise",
                    value: function (e) {
                      var t = this;
                      return new (e = D(e))(function (e, n) {
                        var r;
                        t.subscribe(
                          function (e) {
                            return (r = e);
                          },
                          function (e) {
                            return n(e);
                          },
                          function () {
                            return e(r);
                          },
                        );
                      });
                    },
                  },
                ]),
                e
              );
            })()).create = function (e) {
              return new O(e);
            }),
            O);
        function D(e) {
          if ((e || (e = y.Promise || Promise), !e))
            throw new Error("no Promise impl found");
          return e;
        }
        var N = (function () {
            function e() {
              return (
                Error.call(this),
                (this.message = "object unsubscribed"),
                (this.name = "ObjectUnsubscribedError"),
                this
              );
            }
            return (e.prototype = Object.create(Error.prototype)), e;
          })(),
          R = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r) {
              var i;
              return (
                p(this, n),
                ((i = t.call(this)).subject = e),
                (i.subscriber = r),
                (i.closed = !1),
                i
              );
            }
            return (
              m(n, [
                {
                  key: "unsubscribe",
                  value: function () {
                    if (!this.closed) {
                      this.closed = !0;
                      var e = this.subject,
                        t = e.observers;
                      if (
                        ((this.subject = null),
                        t && 0 !== t.length && !e.isStopped && !e.closed)
                      ) {
                        var n = t.indexOf(this.subscriber);
                        -1 !== n && t.splice(n, 1);
                      }
                    }
                  },
                },
              ]),
              n
            );
          })(E),
          F = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e) {
              var r;
              return p(this, n), ((r = t.call(this, e)).destination = e), r;
            }
            return n;
          })(C),
          M = (function () {
            var e = (function (e) {
              u(n, e);
              var t = c(n);
              function n() {
                var e;
                return (
                  p(this, n),
                  ((e = t.call(this)).observers = []),
                  (e.closed = !1),
                  (e.isStopped = !1),
                  (e.hasError = !1),
                  (e.thrownError = null),
                  e
                );
              }
              return (
                m(n, [
                  {
                    key: T,
                    value: function () {
                      return new F(this);
                    },
                  },
                  {
                    key: "lift",
                    value: function (e) {
                      var t = new j(this, this);
                      return (t.operator = e), t;
                    },
                  },
                  {
                    key: "next",
                    value: function (e) {
                      if (this.closed) throw new N();
                      if (!this.isStopped)
                        for (
                          var t = this.observers,
                            n = t.length,
                            r = t.slice(),
                            i = 0;
                          i < n;
                          i++
                        )
                          r[i].next(e);
                    },
                  },
                  {
                    key: "error",
                    value: function (e) {
                      if (this.closed) throw new N();
                      (this.hasError = !0),
                        (this.thrownError = e),
                        (this.isStopped = !0);
                      for (
                        var t = this.observers,
                          n = t.length,
                          r = t.slice(),
                          i = 0;
                        i < n;
                        i++
                      )
                        r[i].error(e);
                      this.observers.length = 0;
                    },
                  },
                  {
                    key: "complete",
                    value: function () {
                      if (this.closed) throw new N();
                      this.isStopped = !0;
                      for (
                        var e = this.observers,
                          t = e.length,
                          n = e.slice(),
                          r = 0;
                        r < t;
                        r++
                      )
                        n[r].complete();
                      this.observers.length = 0;
                    },
                  },
                  {
                    key: "unsubscribe",
                    value: function () {
                      (this.isStopped = !0),
                        (this.closed = !0),
                        (this.observers = null);
                    },
                  },
                  {
                    key: "_trySubscribe",
                    value: function (e) {
                      if (this.closed) throw new N();
                      return a(v(n.prototype), "_trySubscribe", this).call(
                        this,
                        e,
                      );
                    },
                  },
                  {
                    key: "_subscribe",
                    value: function (e) {
                      if (this.closed) throw new N();
                      return this.hasError
                        ? (e.error(this.thrownError), E.EMPTY)
                        : this.isStopped
                        ? (e.complete(), E.EMPTY)
                        : (this.observers.push(e), new R(this, e));
                    },
                  },
                  {
                    key: "asObservable",
                    value: function () {
                      var e = new I();
                      return (e.source = this), e;
                    },
                  },
                ]),
                n
              );
            })(I);
            return (
              (e.create = function (e, t) {
                return new j(e, t);
              }),
              e
            );
          })(),
          j = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r) {
              var i;
              return (
                p(this, n),
                ((i = t.call(this)).destination = e),
                (i.source = r),
                i
              );
            }
            return (
              m(n, [
                {
                  key: "next",
                  value: function (e) {
                    var t = this.destination;
                    t && t.next && t.next(e);
                  },
                },
                {
                  key: "error",
                  value: function (e) {
                    var t = this.destination;
                    t && t.error && this.destination.error(e);
                  },
                },
                {
                  key: "complete",
                  value: function () {
                    var e = this.destination;
                    e && e.complete && this.destination.complete();
                  },
                },
                {
                  key: "_subscribe",
                  value: function (e) {
                    return this.source ? this.source.subscribe(e) : E.EMPTY;
                  },
                },
              ]),
              n
            );
          })(M);
        function H(e) {
          return e && "function" == typeof e.schedule;
        }
        function V(e, t) {
          return function (n) {
            if ("function" != typeof e)
              throw new TypeError(
                "argument is not a function. Are you looking for `mapTo()`?",
              );
            return n.lift(new L(e, t));
          };
        }
        var L = (function () {
            function e(t, n) {
              p(this, e), (this.project = t), (this.thisArg = n);
            }
            return (
              m(e, [
                {
                  key: "call",
                  value: function (e, t) {
                    return t.subscribe(new B(e, this.project, this.thisArg));
                  },
                },
              ]),
              e
            );
          })(),
          B = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r, i) {
              var o;
              return (
                p(this, n),
                ((o = t.call(this, e)).project = r),
                (o.count = 0),
                (o.thisArg = i || f(o)),
                o
              );
            }
            return (
              m(n, [
                {
                  key: "_next",
                  value: function (e) {
                    var t;
                    try {
                      t = this.project.call(this.thisArg, e, this.count++);
                    } catch (n) {
                      return void this.destination.error(n);
                    }
                    this.destination.next(t);
                  },
                },
              ]),
              n
            );
          })(C),
          z = function (e) {
            return function (t) {
              for (var n = 0, r = e.length; n < r && !t.closed; n++)
                t.next(e[n]);
              t.complete();
            };
          };
        var q =
            "function" == typeof Symbol && Symbol.iterator
              ? Symbol.iterator
              : "@@iterator",
          K = function (e) {
            if (e && "function" == typeof e[A])
              return (
                (i = e),
                function (e) {
                  var t = i[A]();
                  if ("function" != typeof t.subscribe)
                    throw new TypeError(
                      "Provided object does not correctly implement Symbol.observable",
                    );
                  return t.subscribe(e);
                }
              );
            if (
              (t = e) &&
              "number" == typeof t.length &&
              "function" != typeof t
            )
              return z(e);
            var t, n, r, i;
            if (
              (n = e) &&
              "function" != typeof n.subscribe &&
              "function" == typeof n.then
            )
              return (function (e) {
                return function (t) {
                  return (
                    e
                      .then(
                        function (e) {
                          t.closed || (t.next(e), t.complete());
                        },
                        function (e) {
                          return t.error(e);
                        },
                      )
                      .then(null, g),
                    t
                  );
                };
              })(e);
            if (e && "function" == typeof e[q])
              return (
                (r = e),
                function (e) {
                  for (var t = r[q](); ; ) {
                    var n = void 0;
                    try {
                      n = t.next();
                    } catch (i) {
                      return e.error(i), e;
                    }
                    if (n.done) {
                      e.complete();
                      break;
                    }
                    if ((e.next(n.value), e.closed)) break;
                  }
                  return (
                    "function" == typeof t.return &&
                      e.add(function () {
                        t.return && t.return();
                      }),
                    e
                  );
                }
              );
            var o = b(e) ? "an invalid object" : "'".concat(e, "'");
            throw new TypeError(
              "You provided ".concat(
                o,
                " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.",
              ),
            );
          };
        function Q(e, t) {
          return new I(function (n) {
            var r = new E(),
              i = 0;
            return (
              r.add(
                t.schedule(function () {
                  i !== e.length
                    ? (n.next(e[i++]), n.closed || r.add(this.schedule()))
                    : n.complete();
                }),
              ),
              r
            );
          });
        }
        var U = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e) {
              var r;
              return p(this, n), ((r = t.call(this)).parent = e), r;
            }
            return (
              m(n, [
                {
                  key: "_next",
                  value: function (e) {
                    this.parent.notifyNext(e);
                  },
                },
                {
                  key: "_error",
                  value: function (e) {
                    this.parent.notifyError(e), this.unsubscribe();
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    this.parent.notifyComplete(), this.unsubscribe();
                  },
                },
              ]),
              n
            );
          })(C),
          Z = (function (e) {
            u(n, e);
            var t = c(n);
            function n() {
              return p(this, n), t.apply(this, arguments);
            }
            return (
              m(n, [
                {
                  key: "notifyNext",
                  value: function (e) {
                    this.destination.next(e);
                  },
                },
                {
                  key: "notifyError",
                  value: function (e) {
                    this.destination.error(e);
                  },
                },
                {
                  key: "notifyComplete",
                  value: function () {
                    this.destination.complete();
                  },
                },
              ]),
              n
            );
          })(C);
        function W(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : Number.POSITIVE_INFINITY;
          return "function" == typeof t
            ? function (r) {
                return r.pipe(
                  W(function (n, r) {
                    return ((i = e(n, r)),
                    i instanceof I ? i : new I(K(i))).pipe(
                      V(function (e, i) {
                        return t(n, e, r, i);
                      }),
                    );
                    var i;
                  }, n),
                );
              }
            : ("number" == typeof t && (n = t),
              function (t) {
                return t.lift(new G(e, n));
              });
        }
        var G = (function () {
            function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Number.POSITIVE_INFINITY;
              p(this, e), (this.project = t), (this.concurrent = n);
            }
            return (
              m(e, [
                {
                  key: "call",
                  value: function (e, t) {
                    return t.subscribe(new $(e, this.project, this.concurrent));
                  },
                },
              ]),
              e
            );
          })(),
          $ = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r) {
              var i,
                o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : Number.POSITIVE_INFINITY;
              return (
                p(this, n),
                ((i = t.call(this, e)).project = r),
                (i.concurrent = o),
                (i.hasCompleted = !1),
                (i.buffer = []),
                (i.active = 0),
                (i.index = 0),
                i
              );
            }
            return (
              m(n, [
                {
                  key: "_next",
                  value: function (e) {
                    this.active < this.concurrent
                      ? this._tryNext(e)
                      : this.buffer.push(e);
                  },
                },
                {
                  key: "_tryNext",
                  value: function (e) {
                    var t,
                      n = this.index++;
                    try {
                      t = this.project(e, n);
                    } catch (r) {
                      return void this.destination.error(r);
                    }
                    this.active++, this._innerSub(t);
                  },
                },
                {
                  key: "_innerSub",
                  value: function (e) {
                    var t = new U(this),
                      n = this.destination;
                    n.add(t);
                    var r = (function (e, t) {
                      if (!t.closed) {
                        if (e instanceof I) return e.subscribe(t);
                        var n;
                        try {
                          n = K(e)(t);
                        } catch (r) {
                          t.error(r);
                        }
                        return n;
                      }
                    })(e, t);
                    r !== t && n.add(r);
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    (this.hasCompleted = !0),
                      0 === this.active &&
                        0 === this.buffer.length &&
                        this.destination.complete(),
                      this.unsubscribe();
                  },
                },
                {
                  key: "notifyNext",
                  value: function (e) {
                    this.destination.next(e);
                  },
                },
                {
                  key: "notifyComplete",
                  value: function () {
                    var e = this.buffer;
                    this.active--,
                      e.length > 0
                        ? this._next(e.shift())
                        : 0 === this.active &&
                          this.hasCompleted &&
                          this.destination.complete();
                  },
                },
              ]),
              n
            );
          })(Z);
        function J(e, t) {
          return t ? Q(e, t) : new I(z(e));
        }
        function Y() {
          return function (e) {
            return e.lift(new ee(e));
          };
        }
        var X,
          ee = (function () {
            function e(t) {
              p(this, e), (this.connectable = t);
            }
            return (
              m(e, [
                {
                  key: "call",
                  value: function (e, t) {
                    var n = this.connectable;
                    n._refCount++;
                    var r = new te(e, n),
                      i = t.subscribe(r);
                    return r.closed || (r.connection = n.connect()), i;
                  },
                },
              ]),
              e
            );
          })(),
          te = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r) {
              var i;
              return p(this, n), ((i = t.call(this, e)).connectable = r), i;
            }
            return (
              m(n, [
                {
                  key: "_unsubscribe",
                  value: function () {
                    var e = this.connectable;
                    if (e) {
                      this.connectable = null;
                      var t = e._refCount;
                      if (t <= 0) this.connection = null;
                      else if (((e._refCount = t - 1), t > 1))
                        this.connection = null;
                      else {
                        var n = this.connection,
                          r = e._connection;
                        (this.connection = null),
                          !r || (n && r !== n) || r.unsubscribe();
                      }
                    } else this.connection = null;
                  },
                },
              ]),
              n
            );
          })(C),
          ne = {
            operator: { value: null },
            _refCount: { value: 0, writable: !0 },
            _subject: { value: null, writable: !0 },
            _connection: { value: null, writable: !0 },
            _subscribe: {
              value: (X = (function (e) {
                u(n, e);
                var t = c(n);
                function n(e, r) {
                  var i;
                  return (
                    p(this, n),
                    ((i = t.call(this)).source = e),
                    (i.subjectFactory = r),
                    (i._refCount = 0),
                    (i._isComplete = !1),
                    i
                  );
                }
                return (
                  m(n, [
                    {
                      key: "_subscribe",
                      value: function (e) {
                        return this.getSubject().subscribe(e);
                      },
                    },
                    {
                      key: "getSubject",
                      value: function () {
                        var e = this._subject;
                        return (
                          (e && !e.isStopped) ||
                            (this._subject = this.subjectFactory()),
                          this._subject
                        );
                      },
                    },
                    {
                      key: "connect",
                      value: function () {
                        var e = this._connection;
                        return (
                          e ||
                            ((this._isComplete = !1),
                            (e = this._connection = new E()).add(
                              this.source.subscribe(
                                new re(this.getSubject(), this),
                              ),
                            ),
                            e.closed &&
                              ((this._connection = null), (e = E.EMPTY))),
                          e
                        );
                      },
                    },
                    {
                      key: "refCount",
                      value: function () {
                        return Y()(this);
                      },
                    },
                  ]),
                  n
                );
              })(I).prototype)._subscribe,
            },
            _isComplete: { value: X._isComplete, writable: !0 },
            getSubject: { value: X.getSubject },
            connect: { value: X.connect },
            refCount: { value: X.refCount },
          },
          re = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r) {
              var i;
              return p(this, n), ((i = t.call(this, e)).connectable = r), i;
            }
            return (
              m(n, [
                {
                  key: "_error",
                  value: function (e) {
                    this._unsubscribe(),
                      a(v(n.prototype), "_error", this).call(this, e);
                  },
                },
                {
                  key: "_complete",
                  value: function () {
                    (this.connectable._isComplete = !0),
                      this._unsubscribe(),
                      a(v(n.prototype), "_complete", this).call(this);
                  },
                },
                {
                  key: "_unsubscribe",
                  value: function () {
                    var e = this.connectable;
                    if (e) {
                      this.connectable = null;
                      var t = e._connection;
                      (e._refCount = 0),
                        (e._subject = null),
                        (e._connection = null),
                        t && t.unsubscribe();
                    }
                  },
                },
              ]),
              n
            );
          })(F);
        function ie() {
          return new M();
        }
        function oe(e) {
          for (var t in e) if (e[t] === oe) return t;
          throw Error("Could not find renamed property on target object.");
        }
        function se(e) {
          if ("string" == typeof e) return e;
          if (Array.isArray(e)) return "[" + e.map(se).join(", ") + "]";
          if (null == e) return "" + e;
          if (e.overriddenName) return "".concat(e.overriddenName);
          if (e.name) return "".concat(e.name);
          var t = e.toString();
          if (null == t) return "" + t;
          var n = t.indexOf("\n");
          return -1 === n ? t : t.substring(0, n);
        }
        function ae(e, t) {
          return null == e || "" === e
            ? null === t
              ? ""
              : t
            : null == t || "" === t
            ? e
            : e + " " + t;
        }
        var ue = oe({ __forward_ref__: oe });
        function le(e) {
          return (
            (e.__forward_ref__ = le),
            (e.toString = function () {
              return se(this());
            }),
            e
          );
        }
        function ce(e) {
          return "function" == typeof (t = e) &&
            t.hasOwnProperty(ue) &&
            t.__forward_ref__ === le
            ? e()
            : e;
          var t;
        }
        var he = (function (e) {
          u(n, e);
          var t = c(n);
          function n(e, r) {
            var i;
            return (
              p(this, n),
              ((i = t.call(
                this,
                (function (e, t) {
                  return "".concat(e ? "NG0".concat(e, ": ") : "").concat(t);
                })(e, r),
              )).code = e),
              i
            );
          }
          return n;
        })(o(Error));
        function fe(e) {
          return "string" == typeof e ? e : null == e ? "" : String(e);
        }
        function de(e) {
          return "function" == typeof e
            ? e.name || e.toString()
            : "object" == typeof e && null != e && "function" == typeof e.type
            ? e.type.name || e.type.toString()
            : fe(e);
        }
        function ve(e, t) {
          var n = t ? " in ".concat(t) : "";
          throw new he(
            "201",
            "No provider for ".concat(de(e), " found").concat(n),
          );
        }
        function pe(e) {
          return {
            token: e.token,
            providedIn: e.providedIn || null,
            factory: e.factory,
            value: void 0,
          };
        }
        function ye(e) {
          return { providers: e.providers || [], imports: e.imports || [] };
        }
        function me(e) {
          return ge(e, be) || ge(e, Ee);
        }
        function ge(e, t) {
          return e.hasOwnProperty(t) ? e[t] : null;
        }
        function _e(e) {
          return e && (e.hasOwnProperty(we) || e.hasOwnProperty(Se))
            ? e[we]
            : null;
        }
        var ke,
          be = oe({ "\u0275prov": oe }),
          we = oe({ "\u0275inj": oe }),
          Ee = oe({ ngInjectableDef: oe }),
          Se = oe({ ngInjectorDef: oe }),
          Te = (function (e) {
            return (
              (e[(e.Default = 0)] = "Default"),
              (e[(e.Host = 1)] = "Host"),
              (e[(e.Self = 2)] = "Self"),
              (e[(e.SkipSelf = 4)] = "SkipSelf"),
              (e[(e.Optional = 8)] = "Optional"),
              e
            );
          })({});
        function Ce(e) {
          var t = ke;
          return (ke = e), t;
        }
        function xe(e, t, n) {
          var r = me(e);
          return r && "root" == r.providedIn
            ? void 0 === r.value
              ? (r.value = r.factory())
              : r.value
            : n & Te.Optional
            ? null
            : void 0 !== t
            ? t
            : void ve(se(e), "Injector");
        }
        function Ae(e) {
          return { toString: e }.toString();
        }
        var Pe = (function (e) {
            return (
              (e[(e.OnPush = 0)] = "OnPush"),
              (e[(e.Default = 1)] = "Default"),
              e
            );
          })({}),
          Oe = (function (e) {
            return (
              (e[(e.Emulated = 0)] = "Emulated"),
              (e[(e.None = 2)] = "None"),
              (e[(e.ShadowDom = 3)] = "ShadowDom"),
              e
            );
          })({}),
          Ie = "undefined" != typeof globalThis && globalThis,
          De = "undefined" != typeof window && window,
          Ne =
            "undefined" != typeof self &&
            "undefined" != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            self,
          Re = "undefined" != typeof global && global,
          Fe = Ie || Re || De || Ne,
          Me = {},
          je = [],
          He = oe({ "\u0275cmp": oe }),
          Ve = oe({ "\u0275dir": oe }),
          Le = oe({ "\u0275pipe": oe }),
          Be = oe({ "\u0275mod": oe }),
          ze = oe({ "\u0275loc": oe }),
          qe = oe({ "\u0275fac": oe }),
          Ke = oe({ __NG_ELEMENT_ID__: oe }),
          Qe = 0;
        function Ue(e) {
          return Ae(function () {
            var t = {},
              n = {
                type: e.type,
                providersResolver: null,
                decls: e.decls,
                vars: e.vars,
                factory: null,
                template: e.template || null,
                consts: e.consts || null,
                ngContentSelectors: e.ngContentSelectors,
                hostBindings: e.hostBindings || null,
                hostVars: e.hostVars || 0,
                hostAttrs: e.hostAttrs || null,
                contentQueries: e.contentQueries || null,
                declaredInputs: t,
                inputs: null,
                outputs: null,
                exportAs: e.exportAs || null,
                onPush: e.changeDetection === Pe.OnPush,
                directiveDefs: null,
                pipeDefs: null,
                selectors: e.selectors || je,
                viewQuery: e.viewQuery || null,
                features: e.features || null,
                data: e.data || {},
                encapsulation: e.encapsulation || Oe.Emulated,
                id: "c",
                styles: e.styles || je,
                _: null,
                setInput: null,
                schemas: e.schemas || null,
                tView: null,
              },
              r = e.directives,
              i = e.features,
              o = e.pipes;
            return (
              (n.id += Qe++),
              (n.inputs = Je(e.inputs, t)),
              (n.outputs = Je(e.outputs)),
              i &&
                i.forEach(function (e) {
                  return e(n);
                }),
              (n.directiveDefs = r
                ? function () {
                    return ("function" == typeof r ? r() : r).map(Ze);
                  }
                : null),
              (n.pipeDefs = o
                ? function () {
                    return ("function" == typeof o ? o() : o).map(We);
                  }
                : null),
              n
            );
          });
        }
        function Ze(e) {
          return (
            Xe(e) ||
            (function (e) {
              return e[Ve] || null;
            })(e)
          );
        }
        function We(e) {
          return (function (e) {
            return e[Le] || null;
          })(e);
        }
        var Ge = {};
        function $e(e) {
          return Ae(function () {
            var t = {
              type: e.type,
              bootstrap: e.bootstrap || je,
              declarations: e.declarations || je,
              imports: e.imports || je,
              exports: e.exports || je,
              transitiveCompileScopes: null,
              schemas: e.schemas || null,
              id: e.id || null,
            };
            return null != e.id && (Ge[e.id] = e.type), t;
          });
        }
        function Je(e, t) {
          if (null == e) return Me;
          var n = {};
          for (var r in e)
            if (e.hasOwnProperty(r)) {
              var i = e[r],
                o = i;
              Array.isArray(i) && ((o = i[1]), (i = i[0])),
                (n[i] = r),
                t && (t[i] = o);
            }
          return n;
        }
        var Ye = Ue;
        function Xe(e) {
          return e[He] || null;
        }
        function et(e, t) {
          var n = e[Be] || null;
          if (!n && !0 === t)
            throw new Error(
              "Type ".concat(se(e), " does not have '\u0275mod' property."),
            );
          return n;
        }
        function tt(e) {
          return Array.isArray(e) && "object" == typeof e[1];
        }
        function nt(e) {
          return Array.isArray(e) && !0 === e[1];
        }
        function rt(e) {
          return 0 != (8 & e.flags);
        }
        function it(e) {
          return 2 == (2 & e.flags);
        }
        function ot(e) {
          return 1 == (1 & e.flags);
        }
        function st(e) {
          return null !== e.template;
        }
        function at(e, t) {
          return e.hasOwnProperty(qe) ? e[qe] : null;
        }
        var ut,
          lt = (function () {
            function e(t, n, r) {
              p(this, e),
                (this.previousValue = t),
                (this.currentValue = n),
                (this.firstChange = r);
            }
            return (
              m(e, [
                {
                  key: "isFirstChange",
                  value: function () {
                    return this.firstChange;
                  },
                },
              ]),
              e
            );
          })();
        function ct() {
          var e = ft(this),
            t = null == e ? void 0 : e.current;
          if (t) {
            var n = e.previous;
            if (n === Me) e.previous = t;
            else for (var r in t) n[r] = t[r];
            (e.current = null), this.ngOnChanges(t);
          }
        }
        function ht(e, t, n, r) {
          var i =
              ft(e) ||
              (function (e, t) {
                return (e.__ngSimpleChanges__ = t);
              })(e, { previous: Me, current: null }),
            o = i.current || (i.current = {}),
            s = i.previous,
            a = this.declaredInputs[n],
            u = s[a];
          (o[a] = new lt(u && u.currentValue, t, s === Me)), (e[r] = t);
        }
        function ft(e) {
          return e.__ngSimpleChanges__ || null;
        }
        function dt(e) {
          return !!e.listen;
        }
        var vt = {
          createRenderer: function (e, t) {
            return void 0 !== ut
              ? ut
              : "undefined" != typeof document
              ? document
              : void 0;
          },
        };
        function pt(e) {
          for (; Array.isArray(e); ) e = e[0];
          return e;
        }
        function yt(e, t) {
          return pt(t[e.index]);
        }
        function mt(e, t) {
          return e.data[t];
        }
        function gt(e, t) {
          var n = t[e];
          return tt(n) ? n : n[0];
        }
        function _t(e) {
          return 128 == (128 & e[2]);
        }
        function kt(e, t) {
          return null == t ? null : e[t];
        }
        function bt(e) {
          e[18] = 0;
        }
        function wt(e, t) {
          e[5] += t;
          for (
            var n = e, r = e[3];
            null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

          )
            (r[5] += t), (n = r), (r = r[3]);
        }
        var Et = {
          lFrame: Lt(null),
          bindingsEnabled: !0,
          isInCheckNoChangesMode: !1,
        };
        function St() {
          return Et.bindingsEnabled;
        }
        function Tt() {
          return Et.lFrame.lView;
        }
        function Ct() {
          return Et.lFrame.tView;
        }
        function xt() {
          for (var e = At(); null !== e && 64 === e.type; ) e = e.parent;
          return e;
        }
        function At() {
          return Et.lFrame.currentTNode;
        }
        function Pt(e, t) {
          var n = Et.lFrame;
          (n.currentTNode = e), (n.isParent = t);
        }
        function Ot() {
          return Et.lFrame.isParent;
        }
        function It() {
          return Et.isInCheckNoChangesMode;
        }
        function Dt(e) {
          Et.isInCheckNoChangesMode = e;
        }
        function Nt() {
          return Et.lFrame.bindingIndex++;
        }
        function Rt(e) {
          Et.lFrame.currentDirectiveIndex = e;
        }
        function Ft(e) {
          Et.lFrame.currentQueryIndex = e;
        }
        function Mt(e) {
          var t = e[1];
          return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
        }
        function jt(e, t, n) {
          if (n & Te.SkipSelf) {
            for (
              var r = t, i = e;
              !(
                null !== (r = r.parent) ||
                n & Te.Host ||
                ((r = Mt(i)), null === r) ||
                ((i = i[15]), 10 & r.type)
              );

            );
            if (null === r) return !1;
            (t = r), (e = i);
          }
          var o = (Et.lFrame = Vt());
          return (o.currentTNode = t), (o.lView = e), !0;
        }
        function Ht(e) {
          var t = Vt(),
            n = e[1];
          (Et.lFrame = t),
            (t.currentTNode = n.firstChild),
            (t.lView = e),
            (t.tView = n),
            (t.contextLView = e),
            (t.bindingIndex = n.bindingStartIndex),
            (t.inI18n = !1);
        }
        function Vt() {
          var e = Et.lFrame,
            t = null === e ? null : e.child;
          return null === t ? Lt(e) : t;
        }
        function Lt(e) {
          var t = {
            currentTNode: null,
            isParent: !0,
            lView: null,
            tView: null,
            selectedIndex: -1,
            contextLView: null,
            elementDepthCount: 0,
            currentNamespace: null,
            currentDirectiveIndex: -1,
            bindingRootIndex: -1,
            bindingIndex: -1,
            currentQueryIndex: 0,
            parent: e,
            child: null,
            inI18n: !1,
          };
          return null !== e && (e.child = t), t;
        }
        function Bt() {
          var e = Et.lFrame;
          return (
            (Et.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
          );
        }
        var zt = Bt;
        function qt() {
          var e = Bt();
          (e.isParent = !0),
            (e.tView = null),
            (e.selectedIndex = -1),
            (e.contextLView = null),
            (e.elementDepthCount = 0),
            (e.currentDirectiveIndex = -1),
            (e.currentNamespace = null),
            (e.bindingRootIndex = -1),
            (e.bindingIndex = -1),
            (e.currentQueryIndex = 0);
        }
        function Kt() {
          return Et.lFrame.selectedIndex;
        }
        function Qt(e) {
          Et.lFrame.selectedIndex = e;
        }
        function Ut(e, t) {
          for (var n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
            var i = e.data[n].type.prototype,
              o = i.ngAfterContentInit,
              s = i.ngAfterContentChecked,
              a = i.ngAfterViewInit,
              u = i.ngAfterViewChecked,
              l = i.ngOnDestroy;
            o && (e.contentHooks || (e.contentHooks = [])).push(-n, o),
              s &&
                ((e.contentHooks || (e.contentHooks = [])).push(n, s),
                (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, s)),
              a && (e.viewHooks || (e.viewHooks = [])).push(-n, a),
              u &&
                ((e.viewHooks || (e.viewHooks = [])).push(n, u),
                (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, u)),
              null != l && (e.destroyHooks || (e.destroyHooks = [])).push(n, l);
          }
        }
        function Zt(e, t, n) {
          $t(e, t, 3, n);
        }
        function Wt(e, t, n, r) {
          (3 & e[2]) === n && $t(e, t, n, r);
        }
        function Gt(e, t) {
          var n = e[2];
          (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
        }
        function $t(e, t, n, r) {
          for (
            var i = null != r ? r : -1,
              o = t.length - 1,
              s = 0,
              a = void 0 !== r ? 65535 & e[18] : 0;
            a < o;
            a++
          )
            if ("number" == typeof t[a + 1]) {
              if (((s = t[a]), null != r && s >= r)) break;
            } else
              t[a] < 0 && (e[18] += 65536),
                (s < i || -1 == i) &&
                  (Jt(e, n, t, a), (e[18] = (4294901760 & e[18]) + a + 2)),
                a++;
        }
        function Jt(e, t, n, r) {
          var i = n[r] < 0,
            o = n[r + 1],
            s = e[i ? -n[r] : n[r]];
          if (i) {
            if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
              e[2] += 2048;
              try {
                o.call(s);
              } finally {
              }
            }
          } else
            try {
              o.call(s);
            } finally {
            }
        }
        var Yt = function e(t, n, r) {
          p(this, e),
            (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        };
        function Xt(e, t, n) {
          for (var r = dt(e), i = 0; i < n.length; ) {
            var o = n[i];
            if ("number" == typeof o) {
              if (0 !== o) break;
              i++;
              var s = n[i++],
                a = n[i++],
                u = n[i++];
              r ? e.setAttribute(t, a, u, s) : t.setAttributeNS(s, a, u);
            } else {
              var l = o,
                c = n[++i];
              en(l)
                ? r && e.setProperty(t, l, c)
                : r
                ? e.setAttribute(t, l, c)
                : t.setAttribute(l, c),
                i++;
            }
          }
          return i;
        }
        function en(e) {
          return 64 === e.charCodeAt(0);
        }
        function tn(e, t) {
          if (null === t || 0 === t.length);
          else if (null === e || 0 === e.length) e = t.slice();
          else
            for (var n = -1, r = 0; r < t.length; r++) {
              var i = t[r];
              "number" == typeof i
                ? (n = i)
                : 0 === n ||
                  nn(e, n, i, null, -1 === n || 2 === n ? t[++r] : null);
            }
          return e;
        }
        function nn(e, t, n, r, i) {
          var o = 0,
            s = e.length;
          if (-1 === t) s = -1;
          else
            for (; o < e.length; ) {
              var a = e[o++];
              if ("number" == typeof a) {
                if (a === t) {
                  s = -1;
                  break;
                }
                if (a > t) {
                  s = o - 1;
                  break;
                }
              }
            }
          for (; o < e.length; ) {
            var u = e[o];
            if ("number" == typeof u) break;
            if (u === n) {
              if (null === r) return void (null !== i && (e[o + 1] = i));
              if (r === e[o + 1]) return void (e[o + 2] = i);
            }
            o++, null !== r && o++, null !== i && o++;
          }
          -1 !== s && (e.splice(s, 0, t), (o = s + 1)),
            e.splice(o++, 0, n),
            null !== r && e.splice(o++, 0, r),
            null !== i && e.splice(o++, 0, i);
        }
        function rn(e) {
          return -1 !== e;
        }
        function on(e) {
          return 32767 & e;
        }
        function sn(e, t) {
          for (var n = e >> 16, r = t; n > 0; ) (r = r[15]), n--;
          return r;
        }
        var an = !0;
        function un(e) {
          var t = an;
          return (an = e), t;
        }
        var ln = 0;
        function cn(e, t) {
          var n = fn(e, t);
          if (-1 !== n) return n;
          var r = t[1];
          r.firstCreatePass &&
            ((e.injectorIndex = t.length),
            hn(r.data, e),
            hn(t, null),
            hn(r.blueprint, null));
          var i = dn(e, t),
            o = e.injectorIndex;
          if (rn(i))
            for (var s = on(i), a = sn(i, t), u = a[1].data, l = 0; l < 8; l++)
              t[o + l] = a[s + l] | u[s + l];
          return (t[o + 8] = i), o;
        }
        function hn(e, t) {
          e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
        }
        function fn(e, t) {
          return -1 === e.injectorIndex ||
            (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
            null === t[e.injectorIndex + 8]
            ? -1
            : e.injectorIndex;
        }
        function dn(e, t) {
          if (e.parent && -1 !== e.parent.injectorIndex)
            return e.parent.injectorIndex;
          for (var n = 0, r = null, i = t; null !== i; ) {
            var o = i[1],
              s = o.type;
            if (null === (r = 2 === s ? o.declTNode : 1 === s ? i[6] : null))
              return -1;
            if ((n++, (i = i[15]), -1 !== r.injectorIndex))
              return r.injectorIndex | (n << 16);
          }
          return -1;
        }
        function vn(e, t, n) {
          !(function (e, t, n) {
            var r;
            "string" == typeof n
              ? (r = n.charCodeAt(0) || 0)
              : n.hasOwnProperty(Ke) && (r = n[Ke]),
              null == r && (r = n[Ke] = ln++);
            var i = 255 & r;
            t.data[e + (i >> 5)] |= 1 << i;
          })(e, t, n);
        }
        function pn(e, t, n) {
          if (n & Te.Optional) return e;
          ve(t, "NodeInjector");
        }
        function yn(e, t, n, r) {
          if (
            (n & Te.Optional && void 0 === r && (r = null),
            0 == (n & (Te.Self | Te.Host)))
          ) {
            var i = e[9],
              o = Ce(void 0);
            try {
              return i
                ? i.get(t, r, n & Te.Optional)
                : xe(t, r, n & Te.Optional);
            } finally {
              Ce(o);
            }
          }
          return pn(r, t, n);
        }
        function mn(e, t, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : Te.Default,
            i = arguments.length > 4 ? arguments[4] : void 0;
          if (null !== e) {
            var o = (function (e) {
              if ("string" == typeof e) return e.charCodeAt(0) || 0;
              var t = e.hasOwnProperty(Ke) ? e[Ke] : void 0;
              return "number" == typeof t ? (t >= 0 ? 255 & t : _n) : t;
            })(n);
            if ("function" == typeof o) {
              if (!jt(t, e, r))
                return r & Te.Host ? pn(i, n, r) : yn(t, n, r, i);
              try {
                var s = o(r);
                if (null != s || r & Te.Optional) return s;
                ve(n);
              } finally {
                zt();
              }
            } else if ("number" == typeof o) {
              var a = null,
                u = fn(e, t),
                l = -1,
                c = r & Te.Host ? t[16][6] : null;
              for (
                (-1 === u || r & Te.SkipSelf) &&
                (-1 !== (l = -1 === u ? dn(e, t) : t[u + 8]) && En(r, !1)
                  ? ((a = t[1]), (u = on(l)), (t = sn(l, t)))
                  : (u = -1));
                -1 !== u;

              ) {
                var h = t[1];
                if (wn(o, u, h.data)) {
                  var f = kn(u, t, n, a, r, c);
                  if (f !== gn) return f;
                }
                -1 !== (l = t[u + 8]) &&
                En(r, t[1].data[u + 8] === c) &&
                wn(o, u, t)
                  ? ((a = h), (u = on(l)), (t = sn(l, t)))
                  : (u = -1);
              }
            }
          }
          return yn(t, n, r, i);
        }
        var gn = {};
        function _n() {
          return new Sn(xt(), Tt());
        }
        function kn(e, t, n, r, i, o) {
          var s = t[1],
            a = s.data[e + 8],
            u = (function (e, t, n, r, i) {
              for (
                var o = e.providerIndexes,
                  s = t.data,
                  a = 1048575 & o,
                  u = e.directiveStart,
                  l = o >> 20,
                  c = i ? a + l : e.directiveEnd,
                  h = r ? a : a + l;
                h < c;
                h++
              ) {
                var f = s[h];
                if ((h < u && n === f) || (h >= u && f.type === n)) return h;
              }
              if (i) {
                var d = s[u];
                if (d && st(d) && d.type === n) return u;
              }
              return null;
            })(
              a,
              s,
              n,
              null == r ? it(a) && an : r != s && 0 != (3 & a.type),
              i & Te.Host && o === a,
            );
          return null !== u ? bn(t, s, u, a) : gn;
        }
        function bn(e, t, n, r) {
          var i = e[n],
            o = t.data;
          if (i instanceof Yt) {
            var s = i;
            s.resolving &&
              (function (e, t) {
                throw new he(
                  "200",
                  "Circular dependency in DI detected for ".concat(e),
                );
              })(de(o[n]));
            var a = un(s.canSeeViewProviders);
            s.resolving = !0;
            var u = s.injectImpl ? Ce(s.injectImpl) : null;
            jt(e, r, Te.Default);
            try {
              (i = e[n] = s.factory(void 0, o, e, r)),
                t.firstCreatePass &&
                  n >= r.directiveStart &&
                  (function (e, t, n) {
                    var r,
                      i = t.type.prototype,
                      o = i.ngOnChanges,
                      s = i.ngOnInit,
                      a = i.ngDoCheck;
                    if (o) {
                      var u =
                        ((r = t).type.prototype.ngOnChanges &&
                          (r.setInput = ht),
                        ct);
                      (n.preOrderHooks || (n.preOrderHooks = [])).push(e, u),
                        (
                          n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                        ).push(e, u);
                    }
                    s &&
                      (n.preOrderHooks || (n.preOrderHooks = [])).push(
                        0 - e,
                        s,
                      ),
                      a &&
                        ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, a),
                        (
                          n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                        ).push(e, a));
                  })(n, o[n], t);
            } finally {
              null !== u && Ce(u), un(a), (s.resolving = !1), zt();
            }
          }
          return i;
        }
        function wn(e, t, n) {
          return !!(n[t + (e >> 5)] & (1 << e));
        }
        function En(e, t) {
          return !(e & Te.Self || (e & Te.Host && t));
        }
        var Sn = (function () {
          function e(t, n) {
            p(this, e), (this._tNode = t), (this._lView = n);
          }
          return (
            m(e, [
              {
                key: "get",
                value: function (e, t) {
                  return mn(this._tNode, this._lView, e, void 0, t);
                },
              },
            ]),
            e
          );
        })();
        function Tn(e, t, n) {
          return Ae(function () {
            var r = (function (e) {
              return function () {
                if (e) {
                  var t = e.apply(void 0, arguments);
                  for (var n in t) this[n] = t[n];
                }
              };
            })(t);
            function i() {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              if (this instanceof i) return r.apply(this, t), this;
              var o = s(i, t);
              return (a.annotation = o), a;
              function a(e, t, n) {
                for (
                  var r = e.hasOwnProperty("__parameters__")
                    ? e.__parameters__
                    : Object.defineProperty(e, "__parameters__", { value: [] })
                        .__parameters__;
                  r.length <= n;

                )
                  r.push(null);
                return (r[n] = r[n] || []).push(o), e;
              }
            }
            return (
              n && (i.prototype = Object.create(n.prototype)),
              (i.prototype.ngMetadataName = e),
              (i.annotationCls = i),
              i
            );
          });
        }
        var Cn = (function () {
          function e(t, n) {
            p(this, e),
              (this._desc = t),
              (this.ngMetadataName = "InjectionToken"),
              (this.ɵprov = void 0),
              "number" == typeof n
                ? (this.__NG_ELEMENT_ID__ = n)
                : void 0 !== n &&
                  (this.ɵprov = pe({
                    token: this,
                    providedIn: n.providedIn || "root",
                    factory: n.factory,
                  }));
          }
          return (
            m(e, [
              {
                key: "toString",
                value: function () {
                  return "InjectionToken ".concat(this._desc);
                },
              },
            ]),
            e
          );
        })();
        function xn(e, t) {
          e.forEach(function (e) {
            return Array.isArray(e) ? xn(e, t) : t(e);
          });
        }
        function An(e, t, n) {
          t >= e.length ? e.push(n) : e.splice(t, 0, n);
        }
        function Pn(e, t) {
          return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
        }
        var On,
          In = {},
          Dn = /\n/gm,
          Nn = oe({ provide: String, useValue: oe });
        function Rn(e) {
          var t = On;
          return (On = e), t;
        }
        function Fn(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Te.Default;
          if (void 0 === On)
            throw new Error(
              "inject() must be called from an injection context",
            );
          return null === On
            ? xe(e, void 0, t)
            : On.get(e, t & Te.Optional ? null : void 0, t);
        }
        function Mn(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Te.Default;
          return (ke || Fn)(ce(e), t);
        }
        function jn(e) {
          for (var t = [], n = 0; n < e.length; n++) {
            var r = ce(e[n]);
            if (Array.isArray(r)) {
              if (0 === r.length)
                throw new Error("Arguments array must have arguments.");
              for (var i = void 0, o = Te.Default, s = 0; s < r.length; s++) {
                var a = r[s],
                  u = a.__NG_DI_FLAG__;
                "number" == typeof u
                  ? -1 === u
                    ? (i = a.token)
                    : (o |= u)
                  : (i = a);
              }
              t.push(Mn(i, o));
            } else t.push(Mn(r));
          }
          return t;
        }
        function Hn(e, t) {
          return (e.__NG_DI_FLAG__ = t), (e.prototype.__NG_DI_FLAG__ = t), e;
        }
        var Vn = Hn(
            Tn("Inject", function (e) {
              return { token: e };
            }),
            -1,
          ),
          Ln = Hn(Tn("Optional"), 8),
          Bn = Hn(Tn("SkipSelf"), 4);
        function zn(e, t) {
          e.__ngContext__ = t;
        }
        function qn(e) {
          var t = (function (e) {
            return e.__ngContext__ || null;
          })(e);
          return t ? (Array.isArray(t) ? t : t.lView) : null;
        }
        function Kn(e) {
          return e.ngDebugContext;
        }
        function Qn(e) {
          return e.ngOriginalError;
        }
        function Un(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          e.error.apply(e, n);
        }
        var Zn = (function () {
            function e() {
              p(this, e), (this._console = console);
            }
            return (
              m(e, [
                {
                  key: "handleError",
                  value: function (e) {
                    var t = this._findOriginalError(e),
                      n = this._findContext(e),
                      r = (function (e) {
                        return e.ngErrorLogger || Un;
                      })(e);
                    r(this._console, "ERROR", e),
                      t && r(this._console, "ORIGINAL ERROR", t),
                      n && r(this._console, "ERROR CONTEXT", n);
                  },
                },
                {
                  key: "_findContext",
                  value: function (e) {
                    return e
                      ? Kn(e)
                        ? Kn(e)
                        : this._findContext(Qn(e))
                      : null;
                  },
                },
                {
                  key: "_findOriginalError",
                  value: function (e) {
                    for (var t = Qn(e); t && Qn(t); ) t = Qn(t);
                    return t;
                  },
                },
              ]),
              e
            );
          })(),
          Wn = (
            ("undefined" != typeof requestAnimationFrame &&
              requestAnimationFrame) ||
            setTimeout
          ).bind(Fe);
        function Gn(e) {
          return e instanceof Function ? e() : e;
        }
        var $n = (function (e) {
          return (
            (e[(e.Important = 1)] = "Important"),
            (e[(e.DashCase = 2)] = "DashCase"),
            e
          );
        })({});
        function Jn(e, t) {
          return (void 0)(e, t);
        }
        function Yn(e) {
          var t = e[3];
          return nt(t) ? t[3] : t;
        }
        function Xn(e) {
          return tr(e[13]);
        }
        function er(e) {
          return tr(e[4]);
        }
        function tr(e) {
          for (; null !== e && !nt(e); ) e = e[4];
          return e;
        }
        function nr(e, t, n, r, i) {
          if (null != r) {
            var o,
              s = !1;
            nt(r) ? (o = r) : tt(r) && ((s = !0), (r = r[0]));
            var a = pt(r);
            0 === e && null !== n
              ? null == i
                ? lr(t, n, a)
                : ur(t, n, a, i || null, !0)
              : 1 === e && null !== n
              ? ur(t, n, a, i || null, !0)
              : 2 === e
              ? (function (e, t, n) {
                  var r = hr(e, t);
                  r &&
                    (function (e, t, n, r) {
                      dt(e) ? e.removeChild(t, n, r) : t.removeChild(n);
                    })(e, r, t, n);
                })(t, a, s)
              : 3 === e && t.destroyNode(a),
              null != o &&
                (function (e, t, n, r, i) {
                  var o = n[7];
                  o !== pt(n) && nr(t, e, r, o, i);
                  for (var s = 10; s < n.length; s++) {
                    var a = n[s];
                    mr(a[1], a, e, t, r, o);
                  }
                })(t, e, o, n, i);
          }
        }
        function rr(e, t, n) {
          return dt(e)
            ? e.createElement(t, n)
            : null === n
            ? e.createElement(t)
            : e.createElementNS(n, t);
        }
        function ir(e, t) {
          var n = e[9],
            r = n.indexOf(t),
            i = t[3];
          1024 & t[2] && ((t[2] &= -1025), wt(i, -1)), n.splice(r, 1);
        }
        function or(e, t) {
          if (!(e.length <= 10)) {
            var n,
              r = 10 + t,
              i = e[r];
            if (i) {
              var o = i[17];
              null !== o && o !== e && ir(o, i), t > 0 && (e[r - 1][4] = i[4]);
              var s = Pn(e, 10 + t);
              mr(i[1], (n = i), n[11], 2, null, null),
                (n[0] = null),
                (n[6] = null);
              var a = s[19];
              null !== a && a.detachView(s[1]),
                (i[3] = null),
                (i[4] = null),
                (i[2] &= -129);
            }
            return i;
          }
        }
        function sr(e, t) {
          if (!(256 & t[2])) {
            var n = t[11];
            dt(n) && n.destroyNode && mr(e, t, n, 3, null, null),
              (function (e) {
                var t = e[13];
                if (!t) return ar(e[1], e);
                for (; t; ) {
                  var n = null;
                  if (tt(t)) n = t[13];
                  else {
                    var r = t[10];
                    r && (n = r);
                  }
                  if (!n) {
                    for (; t && !t[4] && t !== e; )
                      tt(t) && ar(t[1], t), (t = t[3]);
                    null === t && (t = e),
                      tt(t) && ar(t[1], t),
                      (n = t && t[4]);
                  }
                  t = n;
                }
              })(t);
          }
        }
        function ar(e, t) {
          if (!(256 & t[2])) {
            (t[2] &= -129),
              (t[2] |= 256),
              (function (e, t) {
                var n;
                if (null != e && null != (n = e.destroyHooks))
                  for (var r = 0; r < n.length; r += 2) {
                    var i = t[n[r]];
                    if (!(i instanceof Yt)) {
                      var o = n[r + 1];
                      if (Array.isArray(o))
                        for (var s = 0; s < o.length; s += 2) {
                          var a = i[o[s]],
                            u = o[s + 1];
                          try {
                            u.call(a);
                          } finally {
                          }
                        }
                      else
                        try {
                          o.call(i);
                        } finally {
                        }
                    }
                  }
              })(e, t),
              (function (e, t) {
                var n = e.cleanup,
                  r = t[7],
                  i = -1;
                if (null !== n)
                  for (var o = 0; o < n.length - 1; o += 2)
                    if ("string" == typeof n[o]) {
                      var s = n[o + 1],
                        a = "function" == typeof s ? s(t) : pt(t[s]),
                        u = r[(i = n[o + 2])],
                        l = n[o + 3];
                      "boolean" == typeof l
                        ? a.removeEventListener(n[o], u, l)
                        : l >= 0
                        ? r[(i = l)]()
                        : r[(i = -l)].unsubscribe(),
                        (o += 2);
                    } else {
                      var c = r[(i = n[o + 1])];
                      n[o].call(c);
                    }
                if (null !== r) {
                  for (var h = i + 1; h < r.length; h++) (0, r[h])();
                  t[7] = null;
                }
              })(e, t),
              1 === t[1].type && dt(t[11]) && t[11].destroy();
            var n = t[17];
            if (null !== n && nt(t[3])) {
              n !== t[3] && ir(n, t);
              var r = t[19];
              null !== r && r.detachView(e);
            }
          }
        }
        function ur(e, t, n, r, i) {
          dt(e) ? e.insertBefore(t, n, r, i) : t.insertBefore(n, r, i);
        }
        function lr(e, t, n) {
          dt(e) ? e.appendChild(t, n) : t.appendChild(n);
        }
        function cr(e, t, n, r, i) {
          null !== r ? ur(e, t, n, r, i) : lr(e, t, n);
        }
        function hr(e, t) {
          return dt(e) ? e.parentNode(t) : t.parentNode;
        }
        function fr(e, t, n, r) {
          var i = (function (e, t, n) {
              return (function (e, t, n) {
                for (var r = t; null !== r && 40 & r.type; ) r = (t = r).parent;
                if (null === r) return n[0];
                if (2 & r.flags) {
                  var i = e.data[r.directiveStart].encapsulation;
                  if (i === Oe.None || i === Oe.Emulated) return null;
                }
                return yt(r, n);
              })(e, t.parent, n);
            })(e, r, t),
            o = t[11],
            s = (function (e, t, n) {
              return (function (e, t, n) {
                return 40 & e.type ? yt(e, n) : null;
              })(e, 0, n);
            })(r.parent || t[6], 0, t);
          if (null != i)
            if (Array.isArray(n))
              for (var a = 0; a < n.length; a++) cr(o, i, n[a], s, !1);
            else cr(o, i, n, s, !1);
        }
        function dr(e, t) {
          if (null !== t) {
            var n = t.type;
            if (3 & n) return yt(t, e);
            if (4 & n) return pr(-1, e[t.index]);
            if (8 & n) {
              var r = t.child;
              if (null !== r) return dr(e, r);
              var i = e[t.index];
              return nt(i) ? pr(-1, i) : pt(i);
            }
            if (32 & n) return Jn(t, e)() || pt(e[t.index]);
            var o = vr(e, t);
            return null !== o
              ? Array.isArray(o)
                ? o[0]
                : dr(Yn(e[16]), o)
              : dr(e, t.next);
          }
          return null;
        }
        function vr(e, t) {
          return null !== t ? e[16][6].projection[t.projection] : null;
        }
        function pr(e, t) {
          var n = 10 + e + 1;
          if (n < t.length) {
            var r = t[n],
              i = r[1].firstChild;
            if (null !== i) return dr(r, i);
          }
          return t[7];
        }
        function yr(e, t, n, r, i, o, s) {
          for (; null != n; ) {
            var a = r[n.index],
              u = n.type;
            if (
              (s && 0 === t && (a && zn(pt(a), r), (n.flags |= 4)),
              64 != (64 & n.flags))
            )
              if (8 & u) yr(e, t, n.child, r, i, o, !1), nr(t, e, i, a, o);
              else if (32 & u) {
                for (var l = Jn(n, r), c = void 0; (c = l()); )
                  nr(t, e, i, c, o);
                nr(t, e, i, a, o);
              } else 16 & u ? gr(e, t, r, n, i, o) : nr(t, e, i, a, o);
            n = s ? n.projectionNext : n.next;
          }
        }
        function mr(e, t, n, r, i, o) {
          yr(n, r, e.firstChild, t, i, o, !1);
        }
        function gr(e, t, n, r, i, o) {
          var s = n[16],
            a = s[6].projection[r.projection];
          if (Array.isArray(a))
            for (var u = 0; u < a.length; u++) nr(t, e, i, a[u], o);
          else yr(e, t, a, s[3], i, o, !0);
        }
        function _r(e, t, n) {
          dt(e) ? e.setAttribute(t, "style", n) : (t.style.cssText = n);
        }
        function kr(e, t, n) {
          dt(e)
            ? "" === n
              ? e.removeAttribute(t, "class")
              : e.setAttribute(t, "class", n)
            : (t.className = n);
        }
        function br(e, t, n) {
          for (var r = e.length; ; ) {
            var i = e.indexOf(t, n);
            if (-1 === i) return i;
            if (0 === i || e.charCodeAt(i - 1) <= 32) {
              var o = t.length;
              if (i + o === r || e.charCodeAt(i + o) <= 32) return i;
            }
            n = i + 1;
          }
        }
        function wr(e, t, n) {
          for (var r = 0; r < e.length; ) {
            var i = e[r++];
            if (n && "class" === i) {
              if (-1 !== br((i = e[r]).toLowerCase(), t, 0)) return !0;
            } else if (1 === i) {
              for (; r < e.length && "string" == typeof (i = e[r++]); )
                if (i.toLowerCase() === t) return !0;
              return !1;
            }
          }
          return !1;
        }
        function Er(e) {
          return 4 === e.type && "ng-template" !== e.value;
        }
        function Sr(e, t, n) {
          return t === (4 !== e.type || n ? e.value : "ng-template");
        }
        function Tr(e, t, n) {
          for (
            var r = 4,
              i = e.attrs || [],
              o = (function (e) {
                for (var t = 0; t < e.length; t++)
                  if (3 === (n = e[t]) || 4 === n || 6 === n) return t;
                var n;
                return e.length;
              })(i),
              s = !1,
              a = 0;
            a < t.length;
            a++
          ) {
            var u = t[a];
            if ("number" != typeof u) {
              if (!s)
                if (4 & r) {
                  if (
                    ((r = 2 | (1 & r)),
                    ("" !== u && !Sr(e, u, n)) || ("" === u && 1 === t.length))
                  ) {
                    if (Cr(r)) return !1;
                    s = !0;
                  }
                } else {
                  var l = 8 & r ? u : t[++a];
                  if (8 & r && null !== e.attrs) {
                    if (!wr(e.attrs, l, n)) {
                      if (Cr(r)) return !1;
                      s = !0;
                    }
                    continue;
                  }
                  var c = xr(8 & r ? "class" : u, i, Er(e), n);
                  if (-1 === c) {
                    if (Cr(r)) return !1;
                    s = !0;
                    continue;
                  }
                  if ("" !== l) {
                    var h;
                    h = c > o ? "" : i[c + 1].toLowerCase();
                    var f = 8 & r ? h : null;
                    if ((f && -1 !== br(f, l, 0)) || (2 & r && l !== h)) {
                      if (Cr(r)) return !1;
                      s = !0;
                    }
                  }
                }
            } else {
              if (!s && !Cr(r) && !Cr(u)) return !1;
              if (s && Cr(u)) continue;
              (s = !1), (r = u | (1 & r));
            }
          }
          return Cr(r) || s;
        }
        function Cr(e) {
          return 0 == (1 & e);
        }
        function xr(e, t, n, r) {
          if (null === t) return -1;
          var i = 0;
          if (r || !n) {
            for (var o = !1; i < t.length; ) {
              var s = t[i];
              if (s === e) return i;
              if (3 === s || 6 === s) o = !0;
              else {
                if (1 === s || 2 === s) {
                  for (var a = t[++i]; "string" == typeof a; ) a = t[++i];
                  continue;
                }
                if (4 === s) break;
                if (0 === s) {
                  i += 4;
                  continue;
                }
              }
              i += o ? 1 : 2;
            }
            return -1;
          }
          return (function (e, t) {
            var n = e.indexOf(4);
            if (n > -1)
              for (n++; n < e.length; ) {
                var r = e[n];
                if ("number" == typeof r) return -1;
                if (r === t) return n;
                n++;
              }
            return -1;
          })(t, e);
        }
        function Ar(e, t) {
          for (
            var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = 0;
            r < t.length;
            r++
          )
            if (Tr(e, t[r], n)) return !0;
          return !1;
        }
        function Pr(e, t) {
          return e ? ":not(" + t.trim() + ")" : t;
        }
        function Or(e) {
          for (var t = e[0], n = 1, r = 2, i = "", o = !1; n < e.length; ) {
            var s = e[n];
            if ("string" == typeof s)
              if (2 & r) {
                var a = e[++n];
                i += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
              } else 8 & r ? (i += "." + s) : 4 & r && (i += " " + s);
            else
              "" === i || Cr(s) || ((t += Pr(o, i)), (i = "")),
                (r = s),
                (o = o || !Cr(r));
            n++;
          }
          return "" !== i && (t += Pr(o, i)), t;
        }
        var Ir = {};
        function Dr(e) {
          Nr(Ct(), Tt(), Kt() + e, It());
        }
        function Nr(e, t, n, r) {
          if (!r)
            if (3 == (3 & t[2])) {
              var i = e.preOrderCheckHooks;
              null !== i && Zt(t, i, n);
            } else {
              var o = e.preOrderHooks;
              null !== o && Wt(t, o, 0, n);
            }
          Qt(n);
        }
        function Rr(e, t) {
          var n = e.contentQueries;
          if (null !== n)
            for (var r = 0; r < n.length; r += 2) {
              var i = n[r],
                o = n[r + 1];
              if (-1 !== o) {
                var s = e.data[o];
                Ft(i), s.contentQueries(2, t[o], o);
              }
            }
        }
        function Fr(e, t, n, r, i, o, s, a, u, l) {
          var c = t.blueprint.slice();
          return (
            (c[0] = i),
            (c[2] = 140 | r),
            bt(c),
            (c[3] = c[15] = e),
            (c[8] = n),
            (c[10] = s || (e && e[10])),
            (c[11] = a || (e && e[11])),
            (c[12] = u || (e && e[12]) || null),
            (c[9] = l || (e && e[9]) || null),
            (c[6] = o),
            (c[16] = 2 == t.type ? e[16] : c),
            c
          );
        }
        function Mr(e, t, n, r, i) {
          var o,
            s,
            a = e.data[t];
          if (null === a)
            (a = (function (e, t, n, r, i) {
              var o = At(),
                s = Ot(),
                a = (e.data[t] = (function (e, t, n, r, i, o) {
                  return {
                    type: n,
                    index: r,
                    insertBeforeIndex: null,
                    injectorIndex: t ? t.injectorIndex : -1,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    propertyBindings: null,
                    flags: 0,
                    providerIndexes: 0,
                    value: i,
                    attrs: o,
                    mergedAttrs: null,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: null,
                    outputs: null,
                    tViews: null,
                    next: null,
                    projectionNext: null,
                    child: null,
                    parent: t,
                    projection: null,
                    styles: null,
                    stylesWithoutHost: null,
                    residualStyles: void 0,
                    classes: null,
                    classesWithoutHost: null,
                    residualClasses: void 0,
                    classBindings: 0,
                    styleBindings: 0,
                  };
                })(0, s ? o : o && o.parent, n, t, r, i));
              return (
                null === e.firstChild && (e.firstChild = a),
                null !== o &&
                  (s
                    ? null == o.child && null !== a.parent && (o.child = a)
                    : null === o.next && (o.next = a)),
                a
              );
            })(e, t, n, r, i)),
              Et.lFrame.inI18n && (a.flags |= 64);
          else if (64 & a.type) {
            (a.type = n), (a.value = r), (a.attrs = i);
            var u =
              ((o = Et.lFrame),
              (s = o.currentTNode),
              o.isParent ? s : s.parent);
            a.injectorIndex = null === u ? -1 : u.injectorIndex;
          }
          return Pt(a, !0), a;
        }
        function jr(e, t, n, r) {
          if (0 === n) return -1;
          for (var i = t.length, o = 0; o < n; o++)
            t.push(r), e.blueprint.push(r), e.data.push(null);
          return i;
        }
        function Hr(e, t, n) {
          Ht(t);
          try {
            var r = e.viewQuery;
            null !== r && ci(1, r, n);
            var i = e.template;
            null !== i && Br(e, t, i, 1, n),
              e.firstCreatePass && (e.firstCreatePass = !1),
              e.staticContentQueries && Rr(e, t),
              e.staticViewQueries && ci(2, e.viewQuery, n);
            var o = e.components;
            null !== o &&
              (function (e, t) {
                for (var n = 0; n < t.length; n++) oi(e, t[n]);
              })(t, o);
          } catch (s) {
            throw (e.firstCreatePass && (e.incompleteFirstPass = !0), s);
          } finally {
            (t[2] &= -5), qt();
          }
        }
        function Vr(e, t, n, r) {
          var i = t[2];
          if (256 != (256 & i)) {
            Ht(t);
            var o = It();
            try {
              bt(t),
                (Et.lFrame.bindingIndex = e.bindingStartIndex),
                null !== n && Br(e, t, n, 2, r);
              var s = 3 == (3 & i);
              if (!o)
                if (s) {
                  var a = e.preOrderCheckHooks;
                  null !== a && Zt(t, a, null);
                } else {
                  var u = e.preOrderHooks;
                  null !== u && Wt(t, u, 0, null), Gt(t, 0);
                }
              if (
                ((function (e) {
                  for (var t = Xn(e); null !== t; t = er(t))
                    if (t[2])
                      for (var n = t[9], r = 0; r < n.length; r++) {
                        var i = n[r],
                          o = i[3];
                        0 == (1024 & i[2]) && wt(o, 1), (i[2] |= 1024);
                      }
                })(t),
                (function (e) {
                  for (var t = Xn(e); null !== t; t = er(t))
                    for (var n = 10; n < t.length; n++) {
                      var r = t[n],
                        i = r[1];
                      _t(r) && Vr(i, r, i.template, r[8]);
                    }
                })(t),
                null !== e.contentQueries && Rr(e, t),
                !o)
              )
                if (s) {
                  var l = e.contentCheckHooks;
                  null !== l && Zt(t, l);
                } else {
                  var c = e.contentHooks;
                  null !== c && Wt(t, c, 1), Gt(t, 1);
                }
              !(function (e, t) {
                var n,
                  r,
                  i,
                  o = e.hostBindingOpCodes;
                if (null !== o)
                  try {
                    for (var s = 0; s < o.length; s++) {
                      var a = o[s];
                      if (a < 0) Qt(~a);
                      else {
                        var u = a,
                          l = o[++s],
                          c = o[++s];
                        (n = l),
                          (r = u),
                          (i = void 0),
                          ((i = Et.lFrame).bindingIndex = i.bindingRootIndex =
                            n),
                          Rt(r),
                          c(2, t[u]);
                      }
                    }
                  } finally {
                    Qt(-1);
                  }
              })(e, t);
              var h = e.components;
              null !== h &&
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) ri(e, t[n]);
                })(t, h);
              var f = e.viewQuery;
              if ((null !== f && ci(2, f, r), !o))
                if (s) {
                  var d = e.viewCheckHooks;
                  null !== d && Zt(t, d);
                } else {
                  var v = e.viewHooks;
                  null !== v && Wt(t, v, 2), Gt(t, 2);
                }
              !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
                o || (t[2] &= -73),
                1024 & t[2] && ((t[2] &= -1025), wt(t[3], -1));
            } finally {
              qt();
            }
          }
        }
        function Lr(e, t, n, r) {
          var i = t[10],
            o = !It(),
            s = 4 == (4 & t[2]);
          try {
            o && !s && i.begin && i.begin(), s && Hr(e, t, r), Vr(e, t, n, r);
          } finally {
            o && !s && i.end && i.end();
          }
        }
        function Br(e, t, n, r, i) {
          var o = Kt(),
            s = 2 & r;
          try {
            Qt(-1), s && t.length > 20 && Nr(e, t, 20, It()), n(r, i);
          } finally {
            Qt(o);
          }
        }
        function zr(e, t, n) {
          St() &&
            ((function (e, t, n, r) {
              var i = n.directiveStart,
                o = n.directiveEnd;
              e.firstCreatePass || cn(n, t), zn(r, t);
              for (var s = n.initialInputs, a = i; a < o; a++) {
                var u = e.data[a],
                  l = st(u);
                l && Xr(t, n, u);
                var c = bn(t, e, a, n);
                zn(c, t),
                  null !== s && ei(0, a - i, c, u, 0, s),
                  l && (gt(n.index, t)[8] = c);
              }
            })(e, t, n, yt(n, t)),
            128 == (128 & n.flags) &&
              (function (e, t, n) {
                var r = n.directiveStart,
                  i = n.directiveEnd,
                  o = n.index,
                  s = Et.lFrame.currentDirectiveIndex;
                try {
                  Qt(o);
                  for (var a = r; a < i; a++) {
                    var u = e.data[a],
                      l = t[a];
                    Rt(a),
                      (null === u.hostBindings &&
                        0 === u.hostVars &&
                        null === u.hostAttrs) ||
                        Wr(u, l);
                  }
                } finally {
                  Qt(-1), Rt(s);
                }
              })(e, t, n));
        }
        function qr(e) {
          var t = e.tView;
          return null === t || t.incompleteFirstPass
            ? (e.tView = Kr(
                1,
                null,
                e.template,
                e.decls,
                e.vars,
                e.directiveDefs,
                e.pipeDefs,
                e.viewQuery,
                e.schemas,
                e.consts,
              ))
            : t;
        }
        function Kr(e, t, n, r, i, o, s, a, u, l) {
          var c = 20 + r,
            h = c + i,
            f = (function (e, t) {
              for (var n = [], r = 0; r < t; r++) n.push(r < e ? null : Ir);
              return n;
            })(c, h),
            d = "function" == typeof l ? l() : l;
          return (f[1] = {
            type: e,
            blueprint: f,
            template: n,
            queries: null,
            viewQuery: a,
            declTNode: t,
            data: f.slice().fill(null, c),
            bindingStartIndex: c,
            expandoStartIndex: h,
            hostBindingOpCodes: null,
            firstCreatePass: !0,
            firstUpdatePass: !0,
            staticViewQueries: !1,
            staticContentQueries: !1,
            preOrderHooks: null,
            preOrderCheckHooks: null,
            contentHooks: null,
            contentCheckHooks: null,
            viewHooks: null,
            viewCheckHooks: null,
            destroyHooks: null,
            cleanup: null,
            contentQueries: null,
            components: null,
            directiveRegistry: "function" == typeof o ? o() : o,
            pipeRegistry: "function" == typeof s ? s() : s,
            firstChild: null,
            schemas: u,
            consts: d,
            incompleteFirstPass: !1,
          });
        }
        function Qr(e, t, n) {
          for (var r in e)
            if (e.hasOwnProperty(r)) {
              var i = e[r];
              (n = null === n ? {} : n).hasOwnProperty(r)
                ? n[r].push(t, i)
                : (n[r] = [t, i]);
            }
          return n;
        }
        function Ur(e, t, n, r) {
          var i = !1;
          if (St()) {
            var o = (function (e, t, n) {
                var r = e.directiveRegistry,
                  i = null;
                if (r)
                  for (var o = 0; o < r.length; o++) {
                    var s = r[o];
                    Ar(n, s.selectors, !1) &&
                      (i || (i = []),
                      vn(cn(n, t), e, s.type),
                      st(s) ? (Gr(e, n), i.unshift(s)) : i.push(s));
                  }
                return i;
              })(e, t, n),
              s = null === r ? null : { "": -1 };
            if (null !== o) {
              (i = !0), Jr(n, e.data.length, o.length);
              for (var a = 0; a < o.length; a++) {
                var u = o[a];
                u.providersResolver && u.providersResolver(u);
              }
              for (
                var l = !1, c = !1, h = jr(e, t, o.length, null), f = 0;
                f < o.length;
                f++
              ) {
                var d = o[f];
                (n.mergedAttrs = tn(n.mergedAttrs, d.hostAttrs)),
                  Yr(e, n, t, h, d),
                  $r(h, d, s),
                  null !== d.contentQueries && (n.flags |= 8),
                  (null === d.hostBindings &&
                    null === d.hostAttrs &&
                    0 === d.hostVars) ||
                    (n.flags |= 128);
                var v = d.type.prototype;
                !l &&
                  (v.ngOnChanges || v.ngOnInit || v.ngDoCheck) &&
                  ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
                  (l = !0)),
                  c ||
                    (!v.ngOnChanges && !v.ngDoCheck) ||
                    ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                      n.index,
                    ),
                    (c = !0)),
                  h++;
              }
              !(function (e, t) {
                for (
                  var n = t.directiveEnd,
                    r = e.data,
                    i = t.attrs,
                    o = [],
                    s = null,
                    a = null,
                    u = t.directiveStart;
                  u < n;
                  u++
                ) {
                  var l = r[u],
                    c = l.inputs,
                    h = null === i || Er(t) ? null : ti(c, i);
                  o.push(h), (s = Qr(c, u, s)), (a = Qr(l.outputs, u, a));
                }
                null !== s &&
                  (s.hasOwnProperty("class") && (t.flags |= 16),
                  s.hasOwnProperty("style") && (t.flags |= 32)),
                  (t.initialInputs = o),
                  (t.inputs = s),
                  (t.outputs = a);
              })(e, n);
            }
            s &&
              (function (e, t, n) {
                if (t)
                  for (
                    var r = (e.localNames = []), i = 0;
                    i < t.length;
                    i += 2
                  ) {
                    var o = n[t[i + 1]];
                    if (null == o)
                      throw new he(
                        "301",
                        "Export of name '".concat(t[i + 1], "' not found!"),
                      );
                    r.push(t[i], o);
                  }
              })(n, r, s);
          }
          return (n.mergedAttrs = tn(n.mergedAttrs, n.attrs)), i;
        }
        function Zr(e, t, n, r, i, o) {
          var s = o.hostBindings;
          if (s) {
            var a = e.hostBindingOpCodes;
            null === a && (a = e.hostBindingOpCodes = []);
            var u = ~t.index;
            (function (e) {
              for (var t = e.length; t > 0; ) {
                var n = e[--t];
                if ("number" == typeof n && n < 0) return n;
              }
              return 0;
            })(a) != u && a.push(u),
              a.push(r, i, s);
          }
        }
        function Wr(e, t) {
          null !== e.hostBindings && e.hostBindings(1, t);
        }
        function Gr(e, t) {
          (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
        }
        function $r(e, t, n) {
          if (n) {
            if (t.exportAs)
              for (var r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
            st(t) && (n[""] = e);
          }
        }
        function Jr(e, t, n) {
          (e.flags |= 1),
            (e.directiveStart = t),
            (e.directiveEnd = t + n),
            (e.providerIndexes = t);
        }
        function Yr(e, t, n, r, i) {
          e.data[r] = i;
          var o = i.factory || (i.factory = at(i.type)),
            s = new Yt(o, st(i), null);
          (e.blueprint[r] = s),
            (n[r] = s),
            Zr(e, t, 0, r, jr(e, n, i.hostVars, Ir), i);
        }
        function Xr(e, t, n) {
          var r = yt(t, e),
            i = qr(n),
            o = e[10],
            s = si(
              e,
              Fr(
                e,
                i,
                null,
                n.onPush ? 64 : 16,
                r,
                t,
                o,
                o.createRenderer(r, n),
                null,
                null,
              ),
            );
          e[t.index] = s;
        }
        function ei(e, t, n, r, i, o) {
          var s = o[t];
          if (null !== s)
            for (var a = r.setInput, u = 0; u < s.length; ) {
              var l = s[u++],
                c = s[u++],
                h = s[u++];
              null !== a ? r.setInput(n, h, l, c) : (n[c] = h);
            }
        }
        function ti(e, t) {
          for (var n = null, r = 0; r < t.length; ) {
            var i = t[r];
            if (0 !== i)
              if (5 !== i) {
                if ("number" == typeof i) break;
                e.hasOwnProperty(i) &&
                  (null === n && (n = []), n.push(i, e[i], t[r + 1])),
                  (r += 2);
              } else r += 2;
            else r += 4;
          }
          return n;
        }
        function ni(e, t, n, r) {
          return new Array(e, !0, !1, t, null, 0, r, n, null, null);
        }
        function ri(e, t) {
          var n = gt(t, e);
          if (_t(n)) {
            var r = n[1];
            80 & n[2] ? Vr(r, n, r.template, n[8]) : n[5] > 0 && ii(n);
          }
        }
        function ii(e) {
          for (var t = Xn(e); null !== t; t = er(t))
            for (var n = 10; n < t.length; n++) {
              var r = t[n];
              if (1024 & r[2]) {
                var i = r[1];
                Vr(i, r, i.template, r[8]);
              } else r[5] > 0 && ii(r);
            }
          var o = e[1].components;
          if (null !== o)
            for (var s = 0; s < o.length; s++) {
              var a = gt(o[s], e);
              _t(a) && a[5] > 0 && ii(a);
            }
        }
        function oi(e, t) {
          var n = gt(t, e),
            r = n[1];
          !(function (e, t) {
            for (var n = t.length; n < e.blueprint.length; n++)
              t.push(e.blueprint[n]);
          })(r, n),
            Hr(r, n, n[8]);
        }
        function si(e, t) {
          return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
        }
        function ai(e) {
          for (; e; ) {
            e[2] |= 64;
            var t = Yn(e);
            if (0 != (512 & e[2]) && !t) return e;
            e = t;
          }
          return null;
        }
        function ui(e, t, n) {
          var r = t[10];
          r.begin && r.begin();
          try {
            Vr(e, t, e.template, n);
          } catch (i) {
            throw (di(t, i), i);
          } finally {
            r.end && r.end();
          }
        }
        function li(e) {
          !(function (e) {
            for (var t = 0; t < e.components.length; t++) {
              var n = e.components[t],
                r = qn(n),
                i = r[1];
              Lr(i, r, i.template, n);
            }
          })(e[8]);
        }
        function ci(e, t, n) {
          Ft(0), t(e, n);
        }
        var hi = Promise.resolve(null);
        function fi(e) {
          return e[7] || (e[7] = []);
        }
        function di(e, t) {
          var n = e[9],
            r = n ? n.get(Zn, null) : null;
          r && r.handleError(t);
        }
        function vi(e, t, n, r, i) {
          for (var o = 0; o < n.length; ) {
            var s = n[o++],
              a = n[o++],
              u = t[s],
              l = e.data[s];
            null !== l.setInput ? l.setInput(u, i, r, a) : (u[a] = i);
          }
        }
        function pi(e, t, n) {
          var r = n ? e.styles : null,
            i = n ? e.classes : null,
            o = 0;
          if (null !== t)
            for (var s = 0; s < t.length; s++) {
              var a = t[s];
              "number" == typeof a
                ? (o = a)
                : 1 == o
                ? (i = ae(i, a))
                : 2 == o && (r = ae(r, a + ": " + t[++s] + ";"));
            }
          n ? (e.styles = r) : (e.stylesWithoutHost = r),
            n ? (e.classes = i) : (e.classesWithoutHost = i);
        }
        var yi,
          mi = new Cn("INJECTOR", -1),
          gi = (function () {
            function e() {
              p(this, e);
            }
            return (
              m(e, [
                {
                  key: "get",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : In;
                    if (t === In) {
                      var n = new Error(
                        "NullInjectorError: No provider for ".concat(
                          se(e),
                          "!",
                        ),
                      );
                      throw ((n.name = "NullInjectorError"), n);
                    }
                    return t;
                  },
                },
              ]),
              e
            );
          })(),
          _i = new Cn("Set Injector scope."),
          ki = {},
          bi = {};
        function wi() {
          return void 0 === yi && (yi = new gi()), yi;
        }
        function Ei(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            r = arguments.length > 3 ? arguments[3] : void 0;
          return new Si(e, n, t || wi(), r);
        }
        var Si = (function () {
          function e(t, n, r) {
            var i = this,
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
            p(this, e),
              (this.parent = r),
              (this.records = new Map()),
              (this.injectorDefTypes = new Set()),
              (this.onDestroy = new Set()),
              (this._destroyed = !1);
            var s = [];
            n &&
              xn(n, function (e) {
                return i.processProvider(e, t, n);
              }),
              xn([t], function (e) {
                return i.processInjectorType(e, [], s);
              }),
              this.records.set(mi, Ci(void 0, this));
            var a = this.records.get(_i);
            (this.scope = null != a ? a.value : null),
              (this.source = o || ("object" == typeof t ? null : se(t)));
          }
          return (
            m(e, [
              {
                key: "destroyed",
                get: function () {
                  return this._destroyed;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.assertNotDestroyed(), (this._destroyed = !0);
                  try {
                    this.onDestroy.forEach(function (e) {
                      return e.ngOnDestroy();
                    });
                  } finally {
                    this.records.clear(),
                      this.onDestroy.clear(),
                      this.injectorDefTypes.clear();
                  }
                },
              },
              {
                key: "get",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : In,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : Te.Default;
                  this.assertNotDestroyed();
                  var r,
                    i = Rn(this);
                  try {
                    if (!(n & Te.SkipSelf)) {
                      var o = this.records.get(e);
                      if (void 0 === o) {
                        var s =
                          ("function" == typeof (r = e) ||
                            ("object" == typeof r && r instanceof Cn)) &&
                          me(e);
                        (o =
                          s && this.injectableDefInScope(s)
                            ? Ci(Ti(e), ki)
                            : null),
                          this.records.set(e, o);
                      }
                      if (null != o) return this.hydrate(e, o);
                    }
                    return (n & Te.Self ? wi() : this.parent).get(
                      e,
                      (t = n & Te.Optional && t === In ? null : t),
                    );
                  } catch (a) {
                    if ("NullInjectorError" === a.name) {
                      if (
                        ((a.ngTempTokenPath = a.ngTempTokenPath || []).unshift(
                          se(e),
                        ),
                        i)
                      )
                        throw a;
                      return (function (e, t, n, r) {
                        var i = e.ngTempTokenPath;
                        throw (
                          (t.__source && i.unshift(t.__source),
                          (e.message = (function (e, t, n) {
                            var r =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : null;
                            e =
                              e &&
                              "\n" === e.charAt(0) &&
                              "\u0275" == e.charAt(1)
                                ? e.substr(2)
                                : e;
                            var i = se(t);
                            if (Array.isArray(t)) i = t.map(se).join(" -> ");
                            else if ("object" == typeof t) {
                              var o = [];
                              for (var s in t)
                                if (t.hasOwnProperty(s)) {
                                  var a = t[s];
                                  o.push(
                                    s +
                                      ":" +
                                      ("string" == typeof a
                                        ? JSON.stringify(a)
                                        : se(a)),
                                  );
                                }
                              i = "{".concat(o.join(", "), "}");
                            }
                            return ""
                              .concat(n)
                              .concat(r ? "(" + r + ")" : "", "[")
                              .concat(i, "]: ")
                              .concat(e.replace(Dn, "\n  "));
                          })("\n" + e.message, i, "R3InjectorError", r)),
                          (e.ngTokenPath = i),
                          (e.ngTempTokenPath = null),
                          e)
                        );
                      })(a, e, 0, this.source);
                    }
                    throw a;
                  } finally {
                    Rn(i);
                  }
                },
              },
              {
                key: "_resolveInjectorDefTypes",
                value: function () {
                  var e = this;
                  this.injectorDefTypes.forEach(function (t) {
                    return e.get(t);
                  });
                },
              },
              {
                key: "toString",
                value: function () {
                  var e = [];
                  return (
                    this.records.forEach(function (t, n) {
                      return e.push(se(n));
                    }),
                    "R3Injector[".concat(e.join(", "), "]")
                  );
                },
              },
              {
                key: "assertNotDestroyed",
                value: function () {
                  if (this._destroyed)
                    throw new Error("Injector has already been destroyed.");
                },
              },
              {
                key: "processInjectorType",
                value: function (e, t, n) {
                  var r = this;
                  if (!(e = ce(e))) return !1;
                  var i = _e(e),
                    o = (null == i && e.ngModule) || void 0,
                    s = void 0 === o ? e : o,
                    a = -1 !== n.indexOf(s);
                  if ((void 0 !== o && (i = _e(o)), null == i)) return !1;
                  if (null != i.imports && !a) {
                    var u;
                    n.push(s);
                    try {
                      xn(i.imports, function (e) {
                        r.processInjectorType(e, t, n) &&
                          (void 0 === u && (u = []), u.push(e));
                      });
                    } finally {
                    }
                    if (void 0 !== u)
                      for (
                        var l = function (e) {
                            var t = u[e],
                              n = t.ngModule,
                              i = t.providers;
                            xn(i, function (e) {
                              return r.processProvider(e, n, i || je);
                            });
                          },
                          c = 0;
                        c < u.length;
                        c++
                      )
                        l(c);
                  }
                  this.injectorDefTypes.add(s);
                  var h =
                    at(s) ||
                    function () {
                      return new s();
                    };
                  this.records.set(s, Ci(h, ki));
                  var f = i.providers;
                  if (null != f && !a) {
                    var d = e;
                    xn(f, function (e) {
                      return r.processProvider(e, d, f);
                    });
                  }
                  return void 0 !== o && void 0 !== e.providers;
                },
              },
              {
                key: "processProvider",
                value: function (e, t, r) {
                  var i = Ai((e = ce(e))) ? e : ce(e && e.provide),
                    o = (function (e, t, r) {
                      return xi(e)
                        ? Ci(void 0, e.useValue)
                        : Ci(
                            (function (e, t, r) {
                              var i, o;
                              if (Ai(e)) {
                                var a = ce(e);
                                return at(a) || Ti(a);
                              }
                              if (xi(e))
                                i = function () {
                                  return ce(e.useValue);
                                };
                              else if ((o = e) && o.useFactory)
                                i = function () {
                                  return e.useFactory.apply(
                                    e,
                                    n(jn(e.deps || [])),
                                  );
                                };
                              else if (
                                (function (e) {
                                  return !(!e || !e.useExisting);
                                })(e)
                              )
                                i = function () {
                                  return Mn(ce(e.useExisting));
                                };
                              else {
                                var u = ce(e && (e.useClass || e.provide));
                                if (
                                  !(function (e) {
                                    return !!e.deps;
                                  })(e)
                                )
                                  return at(u) || Ti(u);
                                i = function () {
                                  return s(u, n(jn(e.deps)));
                                };
                              }
                              return i;
                            })(e),
                            ki,
                          );
                    })(e);
                  if (Ai(e) || !0 !== e.multi) this.records.get(i);
                  else {
                    var a = this.records.get(i);
                    a ||
                      (((a = Ci(void 0, ki, !0)).factory = function () {
                        return jn(a.multi);
                      }),
                      this.records.set(i, a)),
                      (i = e),
                      a.multi.push(e);
                  }
                  this.records.set(i, o);
                },
              },
              {
                key: "hydrate",
                value: function (e, t) {
                  var n;
                  return (
                    t.value === ki && ((t.value = bi), (t.value = t.factory())),
                    "object" == typeof t.value &&
                      t.value &&
                      null !== (n = t.value) &&
                      "object" == typeof n &&
                      "function" == typeof n.ngOnDestroy &&
                      this.onDestroy.add(t.value),
                    t.value
                  );
                },
              },
              {
                key: "injectableDefInScope",
                value: function (e) {
                  if (!e.providedIn) return !1;
                  var t = ce(e.providedIn);
                  return "string" == typeof t
                    ? "any" === t || t === this.scope
                    : this.injectorDefTypes.has(t);
                },
              },
            ]),
            e
          );
        })();
        function Ti(e) {
          var t = me(e),
            n = null !== t ? t.factory : at(e);
          if (null !== n) return n;
          if (e instanceof Cn)
            throw new Error(
              "Token ".concat(se(e), " is missing a \u0275prov definition."),
            );
          if (e instanceof Function)
            return (function (e) {
              var t = e.length;
              if (t > 0) {
                var n = (function (e, t) {
                  for (var n = [], r = 0; r < e; r++) n.push("?");
                  return n;
                })(t);
                throw new Error(
                  "Can't resolve all parameters for "
                    .concat(se(e), ": (")
                    .concat(n.join(", "), ")."),
                );
              }
              var r = (function (e) {
                var t = e && (e[be] || e[Ee]);
                if (t) {
                  var n = (function (e) {
                    if (e.hasOwnProperty("name")) return e.name;
                    var t = ("" + e).match(/^function\s*([^\s(]+)/);
                    return null === t ? "" : t[1];
                  })(e);
                  return (
                    console.warn(
                      'DEPRECATED: DI is instantiating a token "'
                        .concat(
                          n,
                          '" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "',
                        )
                        .concat(n, '" class.'),
                    ),
                    t
                  );
                }
                return null;
              })(e);
              return null !== r
                ? function () {
                    return r.factory(e);
                  }
                : function () {
                    return new e();
                  };
            })(e);
          throw new Error("unreachable");
        }
        function Ci(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return { factory: e, value: t, multi: n ? [] : void 0 };
        }
        function xi(e) {
          return null !== e && "object" == typeof e && Nn in e;
        }
        function Ai(e) {
          return "function" == typeof e;
        }
        var Pi = function (e, t, n) {
            return (function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null,
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = Ei(e, t, n, r);
              return i._resolveInjectorDefTypes(), i;
            })({ name: n }, t, e, n);
          },
          Oi = (function () {
            var e = (function () {
              function e() {
                p(this, e);
              }
              return (
                m(e, null, [
                  {
                    key: "create",
                    value: function (e, t) {
                      return Array.isArray(e)
                        ? Pi(e, t, "")
                        : Pi(e.providers, e.parent, e.name || "");
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.THROW_IF_NOT_FOUND = In),
              (e.NULL = new gi()),
              (e.ɵprov = pe({
                token: e,
                providedIn: "any",
                factory: function () {
                  return Mn(mi);
                },
              })),
              (e.__NG_ELEMENT_ID__ = -1),
              e
            );
          })();
        function Ii(e, t) {
          Ut(qn(e)[1], xt());
        }
        var Di = null;
        function Ni() {
          if (!Di) {
            var e = Fe.Symbol;
            if (e && e.iterator) Di = e.iterator;
            else
              for (
                var t = Object.getOwnPropertyNames(Map.prototype), n = 0;
                n < t.length;
                ++n
              ) {
                var r = t[n];
                "entries" !== r &&
                  "size" !== r &&
                  Map.prototype[r] === Map.prototype.entries &&
                  (Di = r);
              }
          }
          return Di;
        }
        var Ri = (function () {
          function e(t) {
            p(this, e), (this.wrapped = t);
          }
          return (
            m(e, null, [
              {
                key: "wrap",
                value: function (t) {
                  return new e(t);
                },
              },
              {
                key: "unwrap",
                value: function (t) {
                  return e.isWrapped(t) ? t.wrapped : t;
                },
              },
              {
                key: "isWrapped",
                value: function (t) {
                  return t instanceof e;
                },
              },
            ]),
            e
          );
        })();
        function Fi(e) {
          return (
            !!Mi(e) && (Array.isArray(e) || (!(e instanceof Map) && Ni() in e))
          );
        }
        function Mi(e) {
          return null !== e && ("function" == typeof e || "object" == typeof e);
        }
        function ji(e, t, n) {
          return !Object.is(e[t], n) && ((e[t] = n), !0);
        }
        function Hi(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Te.Default,
            n = Tt();
          return null === n ? Mn(e, t) : mn(xt(), n, ce(e), t);
        }
        function Vi(e, t, n) {
          var r,
            i = Tt();
          return (
            ji(i, Nt(), t) &&
              (function (e, t, n, r, i, o, s, a) {
                var u,
                  l,
                  c = yt(t, n),
                  h = t.inputs;
                null != h && (u = h[r])
                  ? (vi(e, n, u, r, i),
                    it(t) &&
                      (function (e, t) {
                        var n = gt(t, e);
                        16 & n[2] || (n[2] |= 64);
                      })(n, t.index))
                  : 3 & t.type &&
                    ((r =
                      "class" === (l = r)
                        ? "className"
                        : "for" === l
                        ? "htmlFor"
                        : "formaction" === l
                        ? "formAction"
                        : "innerHtml" === l
                        ? "innerHTML"
                        : "readonly" === l
                        ? "readOnly"
                        : "tabindex" === l
                        ? "tabIndex"
                        : l),
                    (i = null != s ? s(i, t.value || "", r) : i),
                    dt(o)
                      ? o.setProperty(c, r, i)
                      : en(r) ||
                        (c.setProperty ? c.setProperty(r, i) : (c[r] = i)));
              })(
                Ct(),
                mt((r = Et.lFrame).tView, r.selectedIndex),
                i,
                e,
                t,
                i[11],
                n,
              ),
            Vi
          );
        }
        function Li(e, t, n, r, i) {
          var o = i ? "class" : "style";
          vi(e, n, t.inputs[o], o, r);
        }
        function Bi(e, t, n, r) {
          var i = Tt(),
            o = Ct(),
            s = 20 + e,
            a = i[11],
            u = (i[s] = rr(a, t, Et.lFrame.currentNamespace)),
            l = o.firstCreatePass
              ? (function (e, t, n, r, i, o, s) {
                  var a = t.consts,
                    u = Mr(t, e, 2, i, kt(a, o));
                  return (
                    Ur(t, n, u, kt(a, s)),
                    null !== u.attrs && pi(u, u.attrs, !1),
                    null !== u.mergedAttrs && pi(u, u.mergedAttrs, !0),
                    null !== t.queries && t.queries.elementStart(t, u),
                    u
                  );
                })(s, o, i, 0, t, n, r)
              : o.data[s];
          Pt(l, !0);
          var c = l.mergedAttrs;
          null !== c && Xt(a, u, c);
          var h = l.classes;
          null !== h && kr(a, u, h);
          var f = l.styles;
          null !== f && _r(a, u, f),
            64 != (64 & l.flags) && fr(o, i, u, l),
            0 === Et.lFrame.elementDepthCount && zn(u, i),
            Et.lFrame.elementDepthCount++,
            ot(l) &&
              (zr(o, i, l),
              (function (e, t, n) {
                if (rt(t))
                  for (
                    var r = t.directiveEnd, i = t.directiveStart;
                    i < r;
                    i++
                  ) {
                    var o = e.data[i];
                    o.contentQueries && o.contentQueries(1, n[i], i);
                  }
              })(o, l, i)),
            null !== r &&
              (function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : yt,
                  r = t.localNames;
                if (null !== r)
                  for (var i = t.index + 1, o = 0; o < r.length; o += 2) {
                    var s = r[o + 1],
                      a = -1 === s ? n(t, e) : e[s];
                    e[i++] = a;
                  }
              })(i, l);
        }
        function zi() {
          var e = xt();
          Ot() ? (Et.lFrame.isParent = !1) : Pt((e = e.parent), !1);
          var t = e;
          Et.lFrame.elementDepthCount--;
          var n = Ct();
          n.firstCreatePass && (Ut(n, e), rt(e) && n.queries.elementEnd(e)),
            null != t.classesWithoutHost &&
              (function (e) {
                return 0 != (16 & e.flags);
              })(t) &&
              Li(n, t, Tt(), t.classesWithoutHost, !0),
            null != t.stylesWithoutHost &&
              (function (e) {
                return 0 != (32 & e.flags);
              })(t) &&
              Li(n, t, Tt(), t.stylesWithoutHost, !1);
        }
        function qi(e, t, n, r) {
          Bi(e, t, n, r), zi();
        }
        function Ki(e) {
          return !!e && "function" == typeof e.then;
        }
        function Qi(e) {
          return !!e && "function" == typeof e.subscribe;
        }
        var Ui = Qi;
        function Zi(e, t, n, r) {
          var i = Tt(),
            o = Ct(),
            s = xt();
          return (
            (function (e, t, n, r, i, o, s, a) {
              var u = ot(r),
                l =
                  e.firstCreatePass &&
                  (function (e) {
                    return e.cleanup || (e.cleanup = []);
                  })(e),
                c = fi(t),
                h = !0;
              if (3 & r.type || a) {
                var f = yt(r, t),
                  d = a ? a(f) : f,
                  v = c.length,
                  p = a
                    ? function (e) {
                        return a(pt(e[r.index]));
                      }
                    : r.index;
                if (dt(n)) {
                  var y = null;
                  if (
                    (!a &&
                      u &&
                      (y = (function (e, t, n, r) {
                        var i = e.cleanup;
                        if (null != i)
                          for (var o = 0; o < i.length - 1; o += 2) {
                            var s = i[o];
                            if (s === n && i[o + 1] === r) {
                              var a = t[7],
                                u = i[o + 2];
                              return a.length > u ? a[u] : null;
                            }
                            "string" == typeof s && (o += 2);
                          }
                        return null;
                      })(e, t, i, r.index)),
                    null !== y)
                  )
                    ((y.__ngLastListenerFn__ || y).__ngNextListenerFn__ = o),
                      (y.__ngLastListenerFn__ = o),
                      (h = !1);
                  else {
                    o = Gi(r, t, 0, o, !1);
                    var m = n.listen(d, i, o);
                    c.push(o, m), l && l.push(i, p, v, v + 1);
                  }
                } else
                  (o = Gi(r, t, 0, o, !0)),
                    d.addEventListener(i, o, s),
                    c.push(o),
                    l && l.push(i, p, v, s);
              } else o = Gi(r, t, 0, o, !1);
              var g,
                _ = r.outputs;
              if (h && null !== _ && (g = _[i])) {
                var k = g.length;
                if (k)
                  for (var b = 0; b < k; b += 2) {
                    var w = t[g[b]][g[b + 1]].subscribe(o),
                      E = c.length;
                    c.push(o, w), l && l.push(i, r.index, E, -(E + 1));
                  }
              }
            })(o, i, i[11], s, e, t, !!n, r),
            Zi
          );
        }
        function Wi(e, t, n, r) {
          try {
            return !1 !== n(r);
          } catch (i) {
            return di(e, i), !1;
          }
        }
        function Gi(e, t, n, r, i) {
          return function n(o) {
            if (o === Function) return r;
            var s = 2 & e.flags ? gt(e.index, t) : t;
            0 == (32 & t[2]) && ai(s);
            for (var a = Wi(t, 0, r, o), u = n.__ngNextListenerFn__; u; )
              (a = Wi(t, 0, u, o) && a), (u = u.__ngNextListenerFn__);
            return (
              i && !1 === a && (o.preventDefault(), (o.returnValue = !1)), a
            );
          };
        }
        function $i(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = Tt(),
            r = Ct(),
            i = e + 20,
            o = r.firstCreatePass ? Mr(r, i, 1, t, null) : r.data[i],
            s = (n[i] = (function (e, t) {
              return dt(e) ? e.createText(t) : e.createTextNode(t);
            })(n[11], t));
          fr(r, n, s, o), Pt(o, !1);
        }
        function Ji(e) {
          return Yi("", e, ""), Ji;
        }
        function Yi(e, t, n) {
          var r = Tt(),
            i = (function (e, t, n, r) {
              return ji(e, Nt(), n) ? t + fe(n) + r : Ir;
            })(r, e, t, n);
          return (
            i !== Ir &&
              (function (e, t, n) {
                var r = (function (e, t) {
                  return pt(t[e]);
                })(t, e);
                !(function (e, t, n) {
                  dt(e) ? e.setValue(t, n) : (t.textContent = n);
                })(e[11], r, n);
              })(r, Kt(), i),
            Yi
          );
        }
        var Xi = void 0,
          eo = [
            "en",
            [["a", "p"], ["AM", "PM"], Xi],
            [["AM", "PM"], Xi, Xi],
            [
              ["S", "M", "T", "W", "T", "F", "S"],
              ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            ],
            Xi,
            [
              ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
              [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
            ],
            Xi,
            [
              ["B", "A"],
              ["BC", "AD"],
              ["Before Christ", "Anno Domini"],
            ],
            0,
            [6, 0],
            ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
            ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
            ["{1}, {0}", Xi, "{1} 'at' {0}", Xi],
            [
              ".",
              ",",
              ";",
              "%",
              "+",
              "-",
              "E",
              "\xd7",
              "\u2030",
              "\u221e",
              "NaN",
              ":",
            ],
            ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
            "USD",
            "$",
            "US Dollar",
            {},
            "ltr",
            function (e) {
              var t = Math.floor(Math.abs(e)),
                n = e.toString().replace(/^[^.]*\.?/, "").length;
              return 1 === t && 0 === n ? 1 : 5;
            },
          ],
          to = {};
        function no(e) {
          return (
            e in to ||
              (to[e] =
                Fe.ng &&
                Fe.ng.common &&
                Fe.ng.common.locales &&
                Fe.ng.common.locales[e]),
            to[e]
          );
        }
        var ro = (function (e) {
          return (
            (e[(e.LocaleId = 0)] = "LocaleId"),
            (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
            (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
            (e[(e.DaysFormat = 3)] = "DaysFormat"),
            (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
            (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
            (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
            (e[(e.Eras = 7)] = "Eras"),
            (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
            (e[(e.WeekendRange = 9)] = "WeekendRange"),
            (e[(e.DateFormat = 10)] = "DateFormat"),
            (e[(e.TimeFormat = 11)] = "TimeFormat"),
            (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
            (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
            (e[(e.NumberFormats = 14)] = "NumberFormats"),
            (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
            (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
            (e[(e.CurrencyName = 17)] = "CurrencyName"),
            (e[(e.Currencies = 18)] = "Currencies"),
            (e[(e.Directionality = 19)] = "Directionality"),
            (e[(e.PluralCase = 20)] = "PluralCase"),
            (e[(e.ExtraData = 21)] = "ExtraData"),
            e
          );
        })({});
        function io(e) {
          var t;
          null == (t = e) &&
            (function (e, t, n, r) {
              throw new Error(
                "ASSERTION ERROR: "
                  .concat(
                    "Expected localeId to be defined",
                    " [Expected=> null != ",
                  )
                  .concat(t, " <=Actual]"),
              );
            })(0, t),
            "string" == typeof e && e.toLowerCase().replace(/_/g, "-");
        }
        var oo = function e() {
            p(this, e);
          },
          so = (function () {
            function e() {
              p(this, e);
            }
            return (
              m(e, [
                {
                  key: "resolveComponentFactory",
                  value: function (e) {
                    throw (function (e) {
                      var t = Error(
                        "No component factory found for ".concat(
                          se(e),
                          ". Did you add it to @NgModule.entryComponents?",
                        ),
                      );
                      return (t.ngComponent = e), t;
                    })(e);
                  },
                },
              ]),
              e
            );
          })(),
          ao = (function () {
            var e = function e() {
              p(this, e);
            };
            return (e.NULL = new so()), e;
          })();
        function uo() {}
        function lo(e, t) {
          return new ho(yt(e, t));
        }
        var co = function () {
            return lo(xt(), Tt());
          },
          ho = (function () {
            var e = function e(t) {
              p(this, e), (this.nativeElement = t);
            };
            return (e.__NG_ELEMENT_ID__ = co), e;
          })(),
          fo = function e() {
            p(this, e);
          },
          vo = (function () {
            var e = function e() {
              p(this, e);
            };
            return (
              (e.ɵprov = pe({
                token: e,
                providedIn: "root",
                factory: function () {
                  return null;
                },
              })),
              e
            );
          })(),
          po = new (function e(t) {
            p(this, e),
              (this.full = t),
              (this.major = t.split(".")[0]),
              (this.minor = t.split(".")[1]),
              (this.patch = t.split(".").slice(2).join("."));
          })("12.0.5"),
          yo = (function () {
            function e() {
              p(this, e);
            }
            return (
              m(e, [
                {
                  key: "supports",
                  value: function (e) {
                    return Fi(e);
                  },
                },
                {
                  key: "create",
                  value: function (e) {
                    return new go(e);
                  },
                },
              ]),
              e
            );
          })(),
          mo = function (e, t) {
            return t;
          },
          go = (function () {
            function e(t) {
              p(this, e),
                (this.length = 0),
                (this._linkedRecords = null),
                (this._unlinkedRecords = null),
                (this._previousItHead = null),
                (this._itHead = null),
                (this._itTail = null),
                (this._additionsHead = null),
                (this._additionsTail = null),
                (this._movesHead = null),
                (this._movesTail = null),
                (this._removalsHead = null),
                (this._removalsTail = null),
                (this._identityChangesHead = null),
                (this._identityChangesTail = null),
                (this._trackByFn = t || mo);
            }
            return (
              m(e, [
                {
                  key: "forEachItem",
                  value: function (e) {
                    var t;
                    for (t = this._itHead; null !== t; t = t._next) e(t);
                  },
                },
                {
                  key: "forEachOperation",
                  value: function (e) {
                    for (
                      var t = this._itHead,
                        n = this._removalsHead,
                        r = 0,
                        i = null;
                      t || n;

                    ) {
                      var o = !n || (t && t.currentIndex < wo(n, r, i)) ? t : n,
                        s = wo(o, r, i),
                        a = o.currentIndex;
                      if (o === n) r--, (n = n._nextRemoved);
                      else if (((t = t._next), null == o.previousIndex)) r++;
                      else {
                        i || (i = []);
                        var u = s - r,
                          l = a - r;
                        if (u != l) {
                          for (var c = 0; c < u; c++) {
                            var h = c < i.length ? i[c] : (i[c] = 0),
                              f = h + c;
                            l <= f && f < u && (i[c] = h + 1);
                          }
                          i[o.previousIndex] = l - u;
                        }
                      }
                      s !== a && e(o, s, a);
                    }
                  },
                },
                {
                  key: "forEachPreviousItem",
                  value: function (e) {
                    var t;
                    for (
                      t = this._previousItHead;
                      null !== t;
                      t = t._nextPrevious
                    )
                      e(t);
                  },
                },
                {
                  key: "forEachAddedItem",
                  value: function (e) {
                    var t;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded)
                      e(t);
                  },
                },
                {
                  key: "forEachMovedItem",
                  value: function (e) {
                    var t;
                    for (t = this._movesHead; null !== t; t = t._nextMoved)
                      e(t);
                  },
                },
                {
                  key: "forEachRemovedItem",
                  value: function (e) {
                    var t;
                    for (t = this._removalsHead; null !== t; t = t._nextRemoved)
                      e(t);
                  },
                },
                {
                  key: "forEachIdentityChange",
                  value: function (e) {
                    var t;
                    for (
                      t = this._identityChangesHead;
                      null !== t;
                      t = t._nextIdentityChange
                    )
                      e(t);
                  },
                },
                {
                  key: "diff",
                  value: function (e) {
                    if ((null == e && (e = []), !Fi(e)))
                      throw new Error(
                        "Error trying to diff '".concat(
                          se(e),
                          "'. Only arrays and iterables are allowed",
                        ),
                      );
                    return this.check(e) ? this : null;
                  },
                },
                { key: "onDestroy", value: function () {} },
                {
                  key: "check",
                  value: function (e) {
                    var t = this;
                    this._reset();
                    var n,
                      r,
                      i,
                      o = this._itHead,
                      s = !1;
                    if (Array.isArray(e)) {
                      this.length = e.length;
                      for (var a = 0; a < this.length; a++)
                        (r = e[a]),
                          (i = this._trackByFn(a, r)),
                          null !== o && Object.is(o.trackById, i)
                            ? (s && (o = this._verifyReinsertion(o, r, i, a)),
                              Object.is(o.item, r) ||
                                this._addIdentityChange(o, r))
                            : ((o = this._mismatch(o, r, i, a)), (s = !0)),
                          (o = o._next);
                    } else
                      (n = 0),
                        (function (e, t) {
                          if (Array.isArray(e))
                            for (var n = 0; n < e.length; n++) t(e[n]);
                          else
                            for (var r, i = e[Ni()](); !(r = i.next()).done; )
                              t(r.value);
                        })(e, function (e) {
                          (i = t._trackByFn(n, e)),
                            null !== o && Object.is(o.trackById, i)
                              ? (s && (o = t._verifyReinsertion(o, e, i, n)),
                                Object.is(o.item, e) ||
                                  t._addIdentityChange(o, e))
                              : ((o = t._mismatch(o, e, i, n)), (s = !0)),
                            (o = o._next),
                            n++;
                        }),
                        (this.length = n);
                    return (
                      this._truncate(o), (this.collection = e), this.isDirty
                    );
                  },
                },
                {
                  key: "isDirty",
                  get: function () {
                    return (
                      null !== this._additionsHead ||
                      null !== this._movesHead ||
                      null !== this._removalsHead ||
                      null !== this._identityChangesHead
                    );
                  },
                },
                {
                  key: "_reset",
                  value: function () {
                    if (this.isDirty) {
                      var e;
                      for (
                        e = this._previousItHead = this._itHead;
                        null !== e;
                        e = e._next
                      )
                        e._nextPrevious = e._next;
                      for (
                        e = this._additionsHead;
                        null !== e;
                        e = e._nextAdded
                      )
                        e.previousIndex = e.currentIndex;
                      for (
                        this._additionsHead = this._additionsTail = null,
                          e = this._movesHead;
                        null !== e;
                        e = e._nextMoved
                      )
                        e.previousIndex = e.currentIndex;
                      (this._movesHead = this._movesTail = null),
                        (this._removalsHead = this._removalsTail = null),
                        (this._identityChangesHead = this._identityChangesTail =
                          null);
                    }
                  },
                },
                {
                  key: "_mismatch",
                  value: function (e, t, n, r) {
                    var i;
                    return (
                      null === e
                        ? (i = this._itTail)
                        : ((i = e._prev), this._remove(e)),
                      null !==
                      (e =
                        null === this._unlinkedRecords
                          ? null
                          : this._unlinkedRecords.get(n, null))
                        ? (Object.is(e.item, t) ||
                            this._addIdentityChange(e, t),
                          this._reinsertAfter(e, i, r))
                        : null !==
                          (e =
                            null === this._linkedRecords
                              ? null
                              : this._linkedRecords.get(n, r))
                        ? (Object.is(e.item, t) ||
                            this._addIdentityChange(e, t),
                          this._moveAfter(e, i, r))
                        : (e = this._addAfter(new _o(t, n), i, r)),
                      e
                    );
                  },
                },
                {
                  key: "_verifyReinsertion",
                  value: function (e, t, n, r) {
                    var i =
                      null === this._unlinkedRecords
                        ? null
                        : this._unlinkedRecords.get(n, null);
                    return (
                      null !== i
                        ? (e = this._reinsertAfter(i, e._prev, r))
                        : e.currentIndex != r &&
                          ((e.currentIndex = r), this._addToMoves(e, r)),
                      e
                    );
                  },
                },
                {
                  key: "_truncate",
                  value: function (e) {
                    for (; null !== e; ) {
                      var t = e._next;
                      this._addToRemovals(this._unlink(e)), (e = t);
                    }
                    null !== this._unlinkedRecords &&
                      this._unlinkedRecords.clear(),
                      null !== this._additionsTail &&
                        (this._additionsTail._nextAdded = null),
                      null !== this._movesTail &&
                        (this._movesTail._nextMoved = null),
                      null !== this._itTail && (this._itTail._next = null),
                      null !== this._removalsTail &&
                        (this._removalsTail._nextRemoved = null),
                      null !== this._identityChangesTail &&
                        (this._identityChangesTail._nextIdentityChange = null);
                  },
                },
                {
                  key: "_reinsertAfter",
                  value: function (e, t, n) {
                    null !== this._unlinkedRecords &&
                      this._unlinkedRecords.remove(e);
                    var r = e._prevRemoved,
                      i = e._nextRemoved;
                    return (
                      null === r
                        ? (this._removalsHead = i)
                        : (r._nextRemoved = i),
                      null === i
                        ? (this._removalsTail = r)
                        : (i._prevRemoved = r),
                      this._insertAfter(e, t, n),
                      this._addToMoves(e, n),
                      e
                    );
                  },
                },
                {
                  key: "_moveAfter",
                  value: function (e, t, n) {
                    return (
                      this._unlink(e),
                      this._insertAfter(e, t, n),
                      this._addToMoves(e, n),
                      e
                    );
                  },
                },
                {
                  key: "_addAfter",
                  value: function (e, t, n) {
                    return (
                      this._insertAfter(e, t, n),
                      (this._additionsTail =
                        null === this._additionsTail
                          ? (this._additionsHead = e)
                          : (this._additionsTail._nextAdded = e)),
                      e
                    );
                  },
                },
                {
                  key: "_insertAfter",
                  value: function (e, t, n) {
                    var r = null === t ? this._itHead : t._next;
                    return (
                      (e._next = r),
                      (e._prev = t),
                      null === r ? (this._itTail = e) : (r._prev = e),
                      null === t ? (this._itHead = e) : (t._next = e),
                      null === this._linkedRecords &&
                        (this._linkedRecords = new bo()),
                      this._linkedRecords.put(e),
                      (e.currentIndex = n),
                      e
                    );
                  },
                },
                {
                  key: "_remove",
                  value: function (e) {
                    return this._addToRemovals(this._unlink(e));
                  },
                },
                {
                  key: "_unlink",
                  value: function (e) {
                    null !== this._linkedRecords &&
                      this._linkedRecords.remove(e);
                    var t = e._prev,
                      n = e._next;
                    return (
                      null === t ? (this._itHead = n) : (t._next = n),
                      null === n ? (this._itTail = t) : (n._prev = t),
                      e
                    );
                  },
                },
                {
                  key: "_addToMoves",
                  value: function (e, t) {
                    return (
                      e.previousIndex === t ||
                        (this._movesTail =
                          null === this._movesTail
                            ? (this._movesHead = e)
                            : (this._movesTail._nextMoved = e)),
                      e
                    );
                  },
                },
                {
                  key: "_addToRemovals",
                  value: function (e) {
                    return (
                      null === this._unlinkedRecords &&
                        (this._unlinkedRecords = new bo()),
                      this._unlinkedRecords.put(e),
                      (e.currentIndex = null),
                      (e._nextRemoved = null),
                      null === this._removalsTail
                        ? ((this._removalsTail = this._removalsHead = e),
                          (e._prevRemoved = null))
                        : ((e._prevRemoved = this._removalsTail),
                          (this._removalsTail =
                            this._removalsTail._nextRemoved =
                              e)),
                      e
                    );
                  },
                },
                {
                  key: "_addIdentityChange",
                  value: function (e, t) {
                    return (
                      (e.item = t),
                      (this._identityChangesTail =
                        null === this._identityChangesTail
                          ? (this._identityChangesHead = e)
                          : (this._identityChangesTail._nextIdentityChange =
                              e)),
                      e
                    );
                  },
                },
              ]),
              e
            );
          })(),
          _o = function e(t, n) {
            p(this, e),
              (this.item = t),
              (this.trackById = n),
              (this.currentIndex = null),
              (this.previousIndex = null),
              (this._nextPrevious = null),
              (this._prev = null),
              (this._next = null),
              (this._prevDup = null),
              (this._nextDup = null),
              (this._prevRemoved = null),
              (this._nextRemoved = null),
              (this._nextAdded = null),
              (this._nextMoved = null),
              (this._nextIdentityChange = null);
          },
          ko = (function () {
            function e() {
              p(this, e), (this._head = null), (this._tail = null);
            }
            return (
              m(e, [
                {
                  key: "add",
                  value: function (e) {
                    null === this._head
                      ? ((this._head = this._tail = e),
                        (e._nextDup = null),
                        (e._prevDup = null))
                      : ((this._tail._nextDup = e),
                        (e._prevDup = this._tail),
                        (e._nextDup = null),
                        (this._tail = e));
                  },
                },
                {
                  key: "get",
                  value: function (e, t) {
                    var n;
                    for (n = this._head; null !== n; n = n._nextDup)
                      if (
                        (null === t || t <= n.currentIndex) &&
                        Object.is(n.trackById, e)
                      )
                        return n;
                    return null;
                  },
                },
                {
                  key: "remove",
                  value: function (e) {
                    var t = e._prevDup,
                      n = e._nextDup;
                    return (
                      null === t ? (this._head = n) : (t._nextDup = n),
                      null === n ? (this._tail = t) : (n._prevDup = t),
                      null === this._head
                    );
                  },
                },
              ]),
              e
            );
          })(),
          bo = (function () {
            function e() {
              p(this, e), (this.map = new Map());
            }
            return (
              m(e, [
                {
                  key: "put",
                  value: function (e) {
                    var t = e.trackById,
                      n = this.map.get(t);
                    n || ((n = new ko()), this.map.set(t, n)), n.add(e);
                  },
                },
                {
                  key: "get",
                  value: function (e, t) {
                    var n = this.map.get(e);
                    return n ? n.get(e, t) : null;
                  },
                },
                {
                  key: "remove",
                  value: function (e) {
                    var t = e.trackById;
                    return this.map.get(t).remove(e) && this.map.delete(t), e;
                  },
                },
                {
                  key: "isEmpty",
                  get: function () {
                    return 0 === this.map.size;
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    this.map.clear();
                  },
                },
              ]),
              e
            );
          })();
        function wo(e, t, n) {
          var r = e.previousIndex;
          if (null === r) return r;
          var i = 0;
          return n && r < n.length && (i = n[r]), r + t + i;
        }
        var Eo = (function () {
            function e() {
              p(this, e);
            }
            return (
              m(e, [
                {
                  key: "supports",
                  value: function (e) {
                    return e instanceof Map || Mi(e);
                  },
                },
                {
                  key: "create",
                  value: function () {
                    return new So();
                  },
                },
              ]),
              e
            );
          })(),
          So = (function () {
            function e() {
              p(this, e),
                (this._records = new Map()),
                (this._mapHead = null),
                (this._appendAfter = null),
                (this._previousMapHead = null),
                (this._changesHead = null),
                (this._changesTail = null),
                (this._additionsHead = null),
                (this._additionsTail = null),
                (this._removalsHead = null),
                (this._removalsTail = null);
            }
            return (
              m(e, [
                {
                  key: "isDirty",
                  get: function () {
                    return (
                      null !== this._additionsHead ||
                      null !== this._changesHead ||
                      null !== this._removalsHead
                    );
                  },
                },
                {
                  key: "forEachItem",
                  value: function (e) {
                    var t;
                    for (t = this._mapHead; null !== t; t = t._next) e(t);
                  },
                },
                {
                  key: "forEachPreviousItem",
                  value: function (e) {
                    var t;
                    for (
                      t = this._previousMapHead;
                      null !== t;
                      t = t._nextPrevious
                    )
                      e(t);
                  },
                },
                {
                  key: "forEachChangedItem",
                  value: function (e) {
                    var t;
                    for (t = this._changesHead; null !== t; t = t._nextChanged)
                      e(t);
                  },
                },
                {
                  key: "forEachAddedItem",
                  value: function (e) {
                    var t;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded)
                      e(t);
                  },
                },
                {
                  key: "forEachRemovedItem",
                  value: function (e) {
                    var t;
                    for (t = this._removalsHead; null !== t; t = t._nextRemoved)
                      e(t);
                  },
                },
                {
                  key: "diff",
                  value: function (e) {
                    if (e) {
                      if (!(e instanceof Map || Mi(e)))
                        throw new Error(
                          "Error trying to diff '".concat(
                            se(e),
                            "'. Only maps and objects are allowed",
                          ),
                        );
                    } else e = new Map();
                    return this.check(e) ? this : null;
                  },
                },
                { key: "onDestroy", value: function () {} },
                {
                  key: "check",
                  value: function (e) {
                    var t = this;
                    this._reset();
                    var n = this._mapHead;
                    if (
                      ((this._appendAfter = null),
                      this._forEach(e, function (e, r) {
                        if (n && n.key === r)
                          t._maybeAddToChanges(n, e),
                            (t._appendAfter = n),
                            (n = n._next);
                        else {
                          var i = t._getOrCreateRecordForKey(r, e);
                          n = t._insertBeforeOrAppend(n, i);
                        }
                      }),
                      n)
                    ) {
                      n._prev && (n._prev._next = null),
                        (this._removalsHead = n);
                      for (var r = n; null !== r; r = r._nextRemoved)
                        r === this._mapHead && (this._mapHead = null),
                          this._records.delete(r.key),
                          (r._nextRemoved = r._next),
                          (r.previousValue = r.currentValue),
                          (r.currentValue = null),
                          (r._prev = null),
                          (r._next = null);
                    }
                    return (
                      this._changesTail &&
                        (this._changesTail._nextChanged = null),
                      this._additionsTail &&
                        (this._additionsTail._nextAdded = null),
                      this.isDirty
                    );
                  },
                },
                {
                  key: "_insertBeforeOrAppend",
                  value: function (e, t) {
                    if (e) {
                      var n = e._prev;
                      return (
                        (t._next = e),
                        (t._prev = n),
                        (e._prev = t),
                        n && (n._next = t),
                        e === this._mapHead && (this._mapHead = t),
                        (this._appendAfter = e),
                        e
                      );
                    }
                    return (
                      this._appendAfter
                        ? ((this._appendAfter._next = t),
                          (t._prev = this._appendAfter))
                        : (this._mapHead = t),
                      (this._appendAfter = t),
                      null
                    );
                  },
                },
                {
                  key: "_getOrCreateRecordForKey",
                  value: function (e, t) {
                    if (this._records.has(e)) {
                      var n = this._records.get(e);
                      this._maybeAddToChanges(n, t);
                      var r = n._prev,
                        i = n._next;
                      return (
                        r && (r._next = i),
                        i && (i._prev = r),
                        (n._next = null),
                        (n._prev = null),
                        n
                      );
                    }
                    var o = new To(e);
                    return (
                      this._records.set(e, o),
                      (o.currentValue = t),
                      this._addToAdditions(o),
                      o
                    );
                  },
                },
                {
                  key: "_reset",
                  value: function () {
                    if (this.isDirty) {
                      var e;
                      for (
                        this._previousMapHead = this._mapHead,
                          e = this._previousMapHead;
                        null !== e;
                        e = e._next
                      )
                        e._nextPrevious = e._next;
                      for (
                        e = this._changesHead;
                        null !== e;
                        e = e._nextChanged
                      )
                        e.previousValue = e.currentValue;
                      for (e = this._additionsHead; null != e; e = e._nextAdded)
                        e.previousValue = e.currentValue;
                      (this._changesHead = this._changesTail = null),
                        (this._additionsHead = this._additionsTail = null),
                        (this._removalsHead = null);
                    }
                  },
                },
                {
                  key: "_maybeAddToChanges",
                  value: function (e, t) {
                    Object.is(t, e.currentValue) ||
                      ((e.previousValue = e.currentValue),
                      (e.currentValue = t),
                      this._addToChanges(e));
                  },
                },
                {
                  key: "_addToAdditions",
                  value: function (e) {
                    null === this._additionsHead
                      ? (this._additionsHead = this._additionsTail = e)
                      : ((this._additionsTail._nextAdded = e),
                        (this._additionsTail = e));
                  },
                },
                {
                  key: "_addToChanges",
                  value: function (e) {
                    null === this._changesHead
                      ? (this._changesHead = this._changesTail = e)
                      : ((this._changesTail._nextChanged = e),
                        (this._changesTail = e));
                  },
                },
                {
                  key: "_forEach",
                  value: function (e, t) {
                    e instanceof Map
                      ? e.forEach(t)
                      : Object.keys(e).forEach(function (n) {
                          return t(e[n], n);
                        });
                  },
                },
              ]),
              e
            );
          })(),
          To = function e(t) {
            p(this, e),
              (this.key = t),
              (this.previousValue = null),
              (this.currentValue = null),
              (this._nextPrevious = null),
              (this._next = null),
              (this._prev = null),
              (this._nextAdded = null),
              (this._nextRemoved = null),
              (this._nextChanged = null);
          };
        function Co() {
          return new xo([new yo()]);
        }
        var xo = (function () {
          var e = (function () {
            function e(t) {
              p(this, e), (this.factories = t);
            }
            return (
              m(
                e,
                [
                  {
                    key: "find",
                    value: function (e) {
                      var t,
                        n = this.factories.find(function (t) {
                          return t.supports(e);
                        });
                      if (null != n) return n;
                      throw new Error(
                        "Cannot find a differ supporting object '"
                          .concat(e, "' of type '")
                          .concat((t = e).name || typeof t, "'"),
                      );
                    },
                  },
                ],
                [
                  {
                    key: "create",
                    value: function (t, n) {
                      if (null != n) {
                        var r = n.factories.slice();
                        t = t.concat(r);
                      }
                      return new e(t);
                    },
                  },
                  {
                    key: "extend",
                    value: function (t) {
                      return {
                        provide: e,
                        useFactory: function (n) {
                          return e.create(t, n || Co());
                        },
                        deps: [[e, new Bn(), new Ln()]],
                      };
                    },
                  },
                ],
              ),
              e
            );
          })();
          return (
            (e.ɵprov = pe({ token: e, providedIn: "root", factory: Co })), e
          );
        })();
        function Ao() {
          return new Po([new Eo()]);
        }
        var Po = (function () {
          var e = (function () {
            function e(t) {
              p(this, e), (this.factories = t);
            }
            return (
              m(
                e,
                [
                  {
                    key: "find",
                    value: function (e) {
                      var t = this.factories.find(function (t) {
                        return t.supports(e);
                      });
                      if (t) return t;
                      throw new Error(
                        "Cannot find a differ supporting object '".concat(
                          e,
                          "'",
                        ),
                      );
                    },
                  },
                ],
                [
                  {
                    key: "create",
                    value: function (t, n) {
                      if (n) {
                        var r = n.factories.slice();
                        t = t.concat(r);
                      }
                      return new e(t);
                    },
                  },
                  {
                    key: "extend",
                    value: function (t) {
                      return {
                        provide: e,
                        useFactory: function (n) {
                          return e.create(t, n || Ao());
                        },
                        deps: [[e, new Bn(), new Ln()]],
                      };
                    },
                  },
                ],
              ),
              e
            );
          })();
          return (
            (e.ɵprov = pe({ token: e, providedIn: "root", factory: Ao })), e
          );
        })();
        function Oo(e, t, r, i) {
          for (
            var o =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            null !== r;

          ) {
            var s = t[r.index];
            if ((null !== s && i.push(pt(s)), nt(s)))
              for (var a = 10; a < s.length; a++) {
                var u = s[a],
                  l = u[1].firstChild;
                null !== l && Oo(u[1], u, l, i);
              }
            var c = r.type;
            if (8 & c) Oo(e, t, r.child, i);
            else if (32 & c)
              for (var h = Jn(r, t), f = void 0; (f = h()); ) i.push(f);
            else if (16 & c) {
              var d = vr(t, r);
              if (Array.isArray(d)) i.push.apply(i, n(d));
              else {
                var v = Yn(t[16]);
                Oo(v[1], v, d, i, !0);
              }
            }
            r = o ? r.projectionNext : r.next;
          }
          return i;
        }
        var Io = (function () {
            function e(t, n) {
              p(this, e),
                (this._lView = t),
                (this._cdRefInjectingView = n),
                (this._appRef = null),
                (this._attachedToViewContainer = !1);
            }
            return (
              m(e, [
                {
                  key: "rootNodes",
                  get: function () {
                    var e = this._lView,
                      t = e[1];
                    return Oo(t, e, t.firstChild, []);
                  },
                },
                {
                  key: "context",
                  get: function () {
                    return this._lView[8];
                  },
                  set: function (e) {
                    this._lView[8] = e;
                  },
                },
                {
                  key: "destroyed",
                  get: function () {
                    return 256 == (256 & this._lView[2]);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    if (this._appRef) this._appRef.detachView(this);
                    else if (this._attachedToViewContainer) {
                      var e = this._lView[3];
                      if (nt(e)) {
                        var t = e[8],
                          n = t ? t.indexOf(this) : -1;
                        n > -1 && (or(e, n), Pn(t, n));
                      }
                      this._attachedToViewContainer = !1;
                    }
                    sr(this._lView[1], this._lView);
                  },
                },
                {
                  key: "onDestroy",
                  value: function (e) {
                    var t, n;
                    (t = this._lView), (n = e), fi(t).push(n);
                  },
                },
                {
                  key: "markForCheck",
                  value: function () {
                    ai(this._cdRefInjectingView || this._lView);
                  },
                },
                {
                  key: "detach",
                  value: function () {
                    this._lView[2] &= -129;
                  },
                },
                {
                  key: "reattach",
                  value: function () {
                    this._lView[2] |= 128;
                  },
                },
                {
                  key: "detectChanges",
                  value: function () {
                    ui(this._lView[1], this._lView, this.context);
                  },
                },
                {
                  key: "checkNoChanges",
                  value: function () {
                    !(function (e, t, n) {
                      Dt(!0);
                      try {
                        ui(e, t, n);
                      } finally {
                        Dt(!1);
                      }
                    })(this._lView[1], this._lView, this.context);
                  },
                },
                {
                  key: "attachToViewContainerRef",
                  value: function () {
                    if (this._appRef)
                      throw new Error(
                        "This view is already attached directly to the ApplicationRef!",
                      );
                    this._attachedToViewContainer = !0;
                  },
                },
                {
                  key: "detachFromAppRef",
                  value: function () {
                    var e;
                    (this._appRef = null),
                      mr(
                        this._lView[1],
                        (e = this._lView),
                        e[11],
                        2,
                        null,
                        null,
                      );
                  },
                },
                {
                  key: "attachToAppRef",
                  value: function (e) {
                    if (this._attachedToViewContainer)
                      throw new Error(
                        "This view is already attached to a ViewContainer!",
                      );
                    this._appRef = e;
                  },
                },
              ]),
              e
            );
          })(),
          Do = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e) {
              var r;
              return p(this, n), ((r = t.call(this, e))._view = e), r;
            }
            return (
              m(n, [
                {
                  key: "detectChanges",
                  value: function () {
                    li(this._view);
                  },
                },
                {
                  key: "checkNoChanges",
                  value: function () {
                    !(function (e) {
                      Dt(!0);
                      try {
                        li(e);
                      } finally {
                        Dt(!1);
                      }
                    })(this._view);
                  },
                },
                {
                  key: "context",
                  get: function () {
                    return null;
                  },
                },
              ]),
              n
            );
          })(Io),
          No = function (e) {
            return (function (e, t, n) {
              if (it(e) && !n) {
                var r = gt(e.index, t);
                return new Io(r, r);
              }
              return 47 & e.type ? new Io(t[16], t) : null;
            })(xt(), Tt(), 16 == (16 & e));
          },
          Ro = (function () {
            var e = function e() {
              p(this, e);
            };
            return (e.__NG_ELEMENT_ID__ = No), e;
          })(),
          Fo = [new Eo()],
          Mo = new xo([new yo()]),
          jo = new Po(Fo),
          Ho = function () {
            return (
              (e = xt()), (t = Tt()), 4 & e.type ? new Lo(t, e, lo(e, t)) : null
            );
            var e, t;
          },
          Vo = (function () {
            var e = function e() {
              p(this, e);
            };
            return (e.__NG_ELEMENT_ID__ = Ho), e;
          })(),
          Lo = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r, i) {
              var o;
              return (
                p(this, n),
                ((o = t.call(this))._declarationLView = e),
                (o._declarationTContainer = r),
                (o.elementRef = i),
                o
              );
            }
            return (
              m(n, [
                {
                  key: "createEmbeddedView",
                  value: function (e) {
                    var t = this._declarationTContainer.tViews,
                      n = Fr(
                        this._declarationLView,
                        t,
                        e,
                        16,
                        null,
                        t.declTNode,
                        null,
                        null,
                        null,
                        null,
                      );
                    n[17] =
                      this._declarationLView[this._declarationTContainer.index];
                    var r = this._declarationLView[19];
                    return (
                      null !== r && (n[19] = r.createEmbeddedView(t)),
                      Hr(t, n, e),
                      new Io(n)
                    );
                  },
                },
              ]),
              n
            );
          })(Vo),
          Bo = function e() {
            p(this, e);
          },
          zo = function () {
            return (function (e, t) {
              var n,
                r = t[e.index];
              if (nt(r)) n = r;
              else {
                var i;
                if (8 & e.type) i = pt(r);
                else {
                  var o = t[11];
                  i = o.createComment("");
                  var s = yt(e, t);
                  ur(
                    o,
                    hr(o, s),
                    i,
                    (function (e, t) {
                      return dt(e) ? e.nextSibling(t) : t.nextSibling;
                    })(o, s),
                    !1,
                  );
                }
                (t[e.index] = n = ni(r, t, i, e)), si(t, n);
              }
              return new Ko(n, e, t);
            })(xt(), Tt());
          },
          qo = (function () {
            var e = function e() {
              p(this, e);
            };
            return (e.__NG_ELEMENT_ID__ = zo), e;
          })(),
          Ko = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r, i) {
              var o;
              return (
                p(this, n),
                ((o = t.call(this))._lContainer = e),
                (o._hostTNode = r),
                (o._hostLView = i),
                o
              );
            }
            return (
              m(n, [
                {
                  key: "element",
                  get: function () {
                    return lo(this._hostTNode, this._hostLView);
                  },
                },
                {
                  key: "injector",
                  get: function () {
                    return new Sn(this._hostTNode, this._hostLView);
                  },
                },
                {
                  key: "parentInjector",
                  get: function () {
                    var e = dn(this._hostTNode, this._hostLView);
                    if (rn(e)) {
                      var t = sn(e, this._hostLView),
                        n = on(e);
                      return new Sn(t[1].data[n + 8], t);
                    }
                    return new Sn(null, this._hostLView);
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    for (; this.length > 0; ) this.remove(this.length - 1);
                  },
                },
                {
                  key: "get",
                  value: function (e) {
                    var t = Qo(this._lContainer);
                    return (null !== t && t[e]) || null;
                  },
                },
                {
                  key: "length",
                  get: function () {
                    return this._lContainer.length - 10;
                  },
                },
                {
                  key: "createEmbeddedView",
                  value: function (e, t, n) {
                    var r = e.createEmbeddedView(t || {});
                    return this.insert(r, n), r;
                  },
                },
                {
                  key: "createComponent",
                  value: function (e, t, n, r, i) {
                    var o = n || this.parentInjector;
                    if (!i && null == e.ngModule && o) {
                      var s = o.get(Bo, null);
                      s && (i = s);
                    }
                    var a = e.create(o, r, void 0, i);
                    return this.insert(a.hostView, t), a;
                  },
                },
                {
                  key: "insert",
                  value: function (e, t) {
                    var r = e._lView,
                      i = r[1];
                    if (nt(r[3])) {
                      var o = this.indexOf(e);
                      if (-1 !== o) this.detach(o);
                      else {
                        var s = r[3],
                          a = new n(s, s[6], s[3]);
                        a.detach(a.indexOf(e));
                      }
                    }
                    var u = this._adjustIndex(t),
                      l = this._lContainer;
                    !(function (e, t, n, r) {
                      var i = 10 + r,
                        o = n.length;
                      r > 0 && (n[i - 1][4] = t),
                        r < o - 10
                          ? ((t[4] = n[i]), An(n, 10 + r, t))
                          : (n.push(t), (t[4] = null)),
                        (t[3] = n);
                      var s = t[17];
                      null !== s &&
                        n !== s &&
                        (function (e, t) {
                          var n = e[9];
                          t[16] !== t[3][3][16] && (e[2] = !0),
                            null === n ? (e[9] = [t]) : n.push(t);
                        })(s, t);
                      var a = t[19];
                      null !== a && a.insertView(e), (t[2] |= 128);
                    })(i, r, l, u);
                    var c = pr(u, l),
                      h = r[11],
                      f = hr(h, l[7]);
                    return (
                      null !== f &&
                        (function (e, t, n, r, i, o) {
                          (r[0] = i), (r[6] = t), mr(e, r, n, 1, i, o);
                        })(i, l[6], h, r, f, c),
                      e.attachToViewContainerRef(),
                      An(Uo(l), u, e),
                      e
                    );
                  },
                },
                {
                  key: "move",
                  value: function (e, t) {
                    return this.insert(e, t);
                  },
                },
                {
                  key: "indexOf",
                  value: function (e) {
                    var t = Qo(this._lContainer);
                    return null !== t ? t.indexOf(e) : -1;
                  },
                },
                {
                  key: "remove",
                  value: function (e) {
                    var t = this._adjustIndex(e, -1),
                      n = or(this._lContainer, t);
                    n && (Pn(Uo(this._lContainer), t), sr(n[1], n));
                  },
                },
                {
                  key: "detach",
                  value: function (e) {
                    var t = this._adjustIndex(e, -1),
                      n = or(this._lContainer, t);
                    return n && null != Pn(Uo(this._lContainer), t)
                      ? new Io(n)
                      : null;
                  },
                },
                {
                  key: "_adjustIndex",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                    return null == e ? this.length + t : e;
                  },
                },
              ]),
              n
            );
          })(qo);
        function Qo(e) {
          return e[8];
        }
        function Uo(e) {
          return e[8] || (e[8] = []);
        }
        var Zo = {},
          Wo = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e) {
              var r;
              return p(this, n), ((r = t.call(this)).ngModule = e), r;
            }
            return (
              m(n, [
                {
                  key: "resolveComponentFactory",
                  value: function (e) {
                    var t = Xe(e);
                    return new Jo(t, this.ngModule);
                  },
                },
              ]),
              n
            );
          })(ao);
        function Go(e) {
          var t = [];
          for (var n in e)
            e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
          return t;
        }
        var $o = new Cn("SCHEDULER_TOKEN", {
            providedIn: "root",
            factory: function () {
              return Wn;
            },
          }),
          Jo = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r) {
              var i;
              return (
                p(this, n),
                ((i = t.call(this)).componentDef = e),
                (i.ngModule = r),
                (i.componentType = e.type),
                (i.selector = e.selectors.map(Or).join(",")),
                (i.ngContentSelectors = e.ngContentSelectors
                  ? e.ngContentSelectors
                  : []),
                (i.isBoundToModule = !!r),
                i
              );
            }
            return (
              m(n, [
                {
                  key: "inputs",
                  get: function () {
                    return Go(this.componentDef.inputs);
                  },
                },
                {
                  key: "outputs",
                  get: function () {
                    return Go(this.componentDef.outputs);
                  },
                },
                {
                  key: "create",
                  value: function (e, t, n, r) {
                    var i,
                      o,
                      s = (r = r || this.ngModule)
                        ? (function (e, t) {
                            return {
                              get: function (n, r, i) {
                                var o = e.get(n, Zo, i);
                                return o !== Zo || r === Zo
                                  ? o
                                  : t.get(n, r, i);
                              },
                            };
                          })(e, r.injector)
                        : e,
                      a = s.get(fo, vt),
                      u = s.get(vo, null),
                      l = a.createRenderer(null, this.componentDef),
                      c = this.componentDef.selectors[0][0] || "div",
                      h = n
                        ? (function (e, t, n) {
                            if (dt(e))
                              return e.selectRootElement(t, n === Oe.ShadowDom);
                            var r =
                              "string" == typeof t ? e.querySelector(t) : t;
                            return (r.textContent = ""), r;
                          })(l, n, this.componentDef.encapsulation)
                        : rr(
                            a.createRenderer(null, this.componentDef),
                            c,
                            (function (e) {
                              var t = e.toLowerCase();
                              return "svg" === t
                                ? "http://www.w3.org/2000/svg"
                                : "math" === t
                                ? "http://www.w3.org/1998/MathML/"
                                : null;
                            })(c),
                          ),
                      f = this.componentDef.onPush ? 576 : 528,
                      d = {
                        components: [],
                        scheduler: Wn,
                        clean: hi,
                        playerHandler: null,
                        flags: 0,
                      },
                      v = Kr(0, null, null, 1, 0, null, null, null, null, null),
                      p = Fr(null, v, d, f, null, null, a, l, u, s);
                    Ht(p);
                    try {
                      var y = (function (e, t, n, r, i, o) {
                        var s = n[1];
                        n[20] = e;
                        var a = Mr(s, 20, 2, "#host", null),
                          u = (a.mergedAttrs = t.hostAttrs);
                        null !== u &&
                          (pi(a, u, !0),
                          null !== e &&
                            (Xt(i, e, u),
                            null !== a.classes && kr(i, e, a.classes),
                            null !== a.styles && _r(i, e, a.styles)));
                        var l = r.createRenderer(e, t),
                          c = Fr(
                            n,
                            qr(t),
                            null,
                            t.onPush ? 64 : 16,
                            n[20],
                            a,
                            r,
                            l,
                            null,
                            null,
                          );
                        return (
                          s.firstCreatePass &&
                            (vn(cn(a, n), s, t.type),
                            Gr(s, a),
                            Jr(a, n.length, 1)),
                          si(n, c),
                          (n[20] = c)
                        );
                      })(h, this.componentDef, p, a, l);
                      if (h)
                        if (n) Xt(l, h, ["ng-version", po.full]);
                        else {
                          var m = (function (e) {
                              for (
                                var t = [], n = [], r = 1, i = 2;
                                r < e.length;

                              ) {
                                var o = e[r];
                                if ("string" == typeof o)
                                  2 === i
                                    ? "" !== o && t.push(o, e[++r])
                                    : 8 === i && n.push(o);
                                else {
                                  if (!Cr(i)) break;
                                  i = o;
                                }
                                r++;
                              }
                              return { attrs: t, classes: n };
                            })(this.componentDef.selectors[0]),
                            g = m.attrs,
                            _ = m.classes;
                          g && Xt(l, h, g),
                            _ && _.length > 0 && kr(l, h, _.join(" "));
                        }
                      if (((o = mt(v, 20)), void 0 !== t))
                        for (
                          var k = (o.projection = []), b = 0;
                          b < this.ngContentSelectors.length;
                          b++
                        ) {
                          var w = t[b];
                          k.push(null != w ? Array.from(w) : null);
                        }
                      (i = (function (e, t, n, r, i) {
                        var o = n[1],
                          s = (function (e, t, n) {
                            var r = xt();
                            e.firstCreatePass &&
                              (n.providersResolver && n.providersResolver(n),
                              Yr(e, r, t, jr(e, t, 1, null), n));
                            var i = bn(t, e, r.directiveStart, r);
                            zn(i, t);
                            var o = yt(r, t);
                            return o && zn(o, t), i;
                          })(o, n, t);
                        if (
                          (r.components.push(s),
                          (e[8] = s),
                          i &&
                            i.forEach(function (e) {
                              return e(s, t);
                            }),
                          t.contentQueries)
                        ) {
                          var a = xt();
                          t.contentQueries(1, s, a.directiveStart);
                        }
                        var u = xt();
                        return (
                          !o.firstCreatePass ||
                            (null === t.hostBindings && null === t.hostAttrs) ||
                            (Qt(u.index),
                            Zr(n[1], u, 0, u.directiveStart, u.directiveEnd, t),
                            Wr(t, s)),
                          s
                        );
                      })(y, this.componentDef, p, d, [Ii])),
                        Hr(v, p, null);
                    } finally {
                      qt();
                    }
                    return new Yo(this.componentType, i, lo(o, p), p, o);
                  },
                },
              ]),
              n
            );
          })(oo),
          Yo = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r, i, o, s) {
              var a;
              return (
                p(this, n),
                ((a = t.call(this)).location = i),
                (a._rootLView = o),
                (a._tNode = s),
                (a.instance = r),
                (a.hostView = a.changeDetectorRef = new Do(o)),
                (a.componentType = e),
                a
              );
            }
            return (
              m(n, [
                {
                  key: "injector",
                  get: function () {
                    return new Sn(this._tNode, this._rootLView);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.hostView.destroy();
                  },
                },
                {
                  key: "onDestroy",
                  value: function (e) {
                    this.hostView.onDestroy(e);
                  },
                },
              ]),
              n
            );
          })(
            (function () {
              return function e() {
                p(this, e);
              };
            })(),
          ),
          Xo = new Map(),
          es = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r) {
              var i;
              p(this, n),
                ((i = t.call(this))._parent = r),
                (i._bootstrapComponents = []),
                (i.injector = f(i)),
                (i.destroyCbs = []),
                (i.componentFactoryResolver = new Wo(f(i)));
              var o = et(e),
                s = e[ze] || null;
              return (
                s && io(s),
                (i._bootstrapComponents = Gn(o.bootstrap)),
                (i._r3Injector = Ei(
                  e,
                  r,
                  [
                    { provide: Bo, useValue: f(i) },
                    { provide: ao, useValue: i.componentFactoryResolver },
                  ],
                  se(e),
                )),
                i._r3Injector._resolveInjectorDefTypes(),
                (i.instance = i.get(e)),
                i
              );
            }
            return (
              m(n, [
                {
                  key: "get",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : Oi.THROW_IF_NOT_FOUND,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : Te.Default;
                    return e === Oi || e === Bo || e === mi
                      ? this
                      : this._r3Injector.get(e, t, n);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var e = this._r3Injector;
                    !e.destroyed && e.destroy(),
                      this.destroyCbs.forEach(function (e) {
                        return e();
                      }),
                      (this.destroyCbs = null);
                  },
                },
                {
                  key: "onDestroy",
                  value: function (e) {
                    this.destroyCbs.push(e);
                  },
                },
              ]),
              n
            );
          })(Bo),
          ts = (function (e) {
            u(r, e);
            var n = c(r);
            function r(e) {
              var i, o, s;
              return (
                p(this, r),
                ((i = n.call(this)).moduleType = e),
                null !== et(e) &&
                  ((o = e),
                  (s = new Set()),
                  (function e(n) {
                    var r = et(n, !0),
                      i = r.id;
                    null !== i &&
                      ((function (e, t, n) {
                        if (t && t !== n)
                          throw new Error(
                            "Duplicate module registered for "
                              .concat(e, " - ")
                              .concat(se(t), " vs ")
                              .concat(se(t.name)),
                          );
                      })(i, Xo.get(i), n),
                      Xo.set(i, n));
                    var o,
                      a = t(Gn(r.imports));
                    try {
                      for (a.s(); !(o = a.n()).done; ) {
                        var u = o.value;
                        s.has(u) || (s.add(u), e(u));
                      }
                    } catch (l) {
                      a.e(l);
                    } finally {
                      a.f();
                    }
                  })(o)),
                i
              );
            }
            return (
              m(r, [
                {
                  key: "create",
                  value: function (e) {
                    return new es(this.moduleType, e);
                  },
                },
              ]),
              r
            );
          })(
            (function () {
              return function e() {
                p(this, e);
              };
            })(),
          );
        function ns(e) {
          return function (t) {
            setTimeout(e, void 0, t);
          };
        }
        var rs = (function (e) {
            u(n, e);
            var t = c(n);
            function n() {
              var e,
                r =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              return p(this, n), ((e = t.call(this)).__isAsync = r), e;
            }
            return (
              m(n, [
                {
                  key: "emit",
                  value: function (e) {
                    a(v(n.prototype), "next", this).call(this, e);
                  },
                },
                {
                  key: "subscribe",
                  value: function (e, t, r) {
                    var i,
                      o,
                      s,
                      u = e,
                      l =
                        t ||
                        function () {
                          return null;
                        },
                      c = r;
                    if (e && "object" == typeof e) {
                      var h = e;
                      (u =
                        null === (i = h.next) || void 0 === i
                          ? void 0
                          : i.bind(h)),
                        (l =
                          null === (o = h.error) || void 0 === o
                            ? void 0
                            : o.bind(h)),
                        (c =
                          null === (s = h.complete) || void 0 === s
                            ? void 0
                            : s.bind(h));
                    }
                    this.__isAsync &&
                      ((l = ns(l)), u && (u = ns(u)), c && (c = ns(c)));
                    var f = a(v(n.prototype), "subscribe", this).call(this, {
                      next: u,
                      error: l,
                      complete: c,
                    });
                    return e instanceof E && e.add(f), f;
                  },
                },
              ]),
              n
            );
          })(M),
          is = new Cn("Application Initializer"),
          os = (function () {
            var e = (function () {
              function e(t) {
                var n = this;
                p(this, e),
                  (this.appInits = t),
                  (this.resolve = uo),
                  (this.reject = uo),
                  (this.initialized = !1),
                  (this.done = !1),
                  (this.donePromise = new Promise(function (e, t) {
                    (n.resolve = e), (n.reject = t);
                  }));
              }
              return (
                m(e, [
                  {
                    key: "runInitializers",
                    value: function () {
                      var e = this;
                      if (!this.initialized) {
                        var t = [],
                          n = function () {
                            (e.done = !0), e.resolve();
                          };
                        if (this.appInits)
                          for (
                            var r = function (n) {
                                var r = e.appInits[n]();
                                if (Ki(r)) t.push(r);
                                else if (Ui(r)) {
                                  var i = new Promise(function (e, t) {
                                    r.subscribe({ complete: e, error: t });
                                  });
                                  t.push(i);
                                }
                              },
                              i = 0;
                            i < this.appInits.length;
                            i++
                          )
                            r(i);
                        Promise.all(t)
                          .then(function () {
                            n();
                          })
                          .catch(function (t) {
                            e.reject(t);
                          }),
                          0 === t.length && n(),
                          (this.initialized = !0);
                      }
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(is, 8));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          ss = new Cn("AppId"),
          as = {
            provide: ss,
            useFactory: function () {
              return "".concat(us()).concat(us()).concat(us());
            },
            deps: [],
          };
        function us() {
          return String.fromCharCode(97 + Math.floor(25 * Math.random()));
        }
        var ls = new Cn("Platform Initializer"),
          cs = new Cn("Platform ID"),
          hs = new Cn("appBootstrapListener"),
          fs = (function () {
            var e = (function () {
              function e() {
                p(this, e);
              }
              return (
                m(e, [
                  {
                    key: "log",
                    value: function (e) {
                      console.log(e);
                    },
                  },
                  {
                    key: "warn",
                    value: function (e) {
                      console.warn(e);
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          ds = new Cn("LocaleId"),
          vs = new Cn("DefaultCurrencyCode"),
          ps = function e(t, n) {
            p(this, e),
              (this.ngModuleFactory = t),
              (this.componentFactories = n);
          },
          ys = function (e) {
            return new ts(e);
          },
          ms = ys,
          gs = function (e) {
            return Promise.resolve(ys(e));
          },
          _s = function (e) {
            var t = ys(e),
              n = Gn(et(e).declarations).reduce(function (e, t) {
                var n = Xe(t);
                return n && e.push(new Jo(n)), e;
              }, []);
            return new ps(t, n);
          },
          ks = _s,
          bs = function (e) {
            return Promise.resolve(_s(e));
          },
          ws = (function () {
            var e = (function () {
              function e() {
                p(this, e),
                  (this.compileModuleSync = ms),
                  (this.compileModuleAsync = gs),
                  (this.compileModuleAndAllComponentsSync = ks),
                  (this.compileModuleAndAllComponentsAsync = bs);
              }
              return (
                m(e, [
                  { key: "clearCache", value: function () {} },
                  { key: "clearCacheFor", value: function (e) {} },
                  { key: "getModuleId", value: function (e) {} },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          Es = Promise.resolve(0);
        function Ss(e) {
          "undefined" == typeof Zone
            ? Es.then(function () {
                e && e.apply(null, null);
              })
            : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
        }
        var Ts = (function () {
            function e(t) {
              var n,
                r,
                i = t.enableLongStackTrace,
                o = void 0 !== i && i,
                s = t.shouldCoalesceEventChangeDetection,
                a = void 0 !== s && s,
                u = t.shouldCoalesceRunChangeDetection,
                l = void 0 !== u && u;
              if (
                (p(this, e),
                (this.hasPendingMacrotasks = !1),
                (this.hasPendingMicrotasks = !1),
                (this.isStable = !0),
                (this.onUnstable = new rs(!1)),
                (this.onMicrotaskEmpty = new rs(!1)),
                (this.onStable = new rs(!1)),
                (this.onError = new rs(!1)),
                "undefined" == typeof Zone)
              )
                throw new Error(
                  "In this configuration Angular requires Zone.js",
                );
              Zone.assertZonePatched(),
                (this._nesting = 0),
                (this._outer = this._inner = Zone.current),
                Zone.TaskTrackingZoneSpec &&
                  (this._inner = this._inner.fork(
                    new Zone.TaskTrackingZoneSpec(),
                  )),
                o &&
                  Zone.longStackTraceZoneSpec &&
                  (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
                (this.shouldCoalesceEventChangeDetection = !l && a),
                (this.shouldCoalesceRunChangeDetection = l),
                (this.lastRequestAnimationFrameId = -1),
                (this.nativeRequestAnimationFrame = (function () {
                  var e = Fe.requestAnimationFrame,
                    t = Fe.cancelAnimationFrame;
                  if ("undefined" != typeof Zone && e && t) {
                    var n = e[Zone.__symbol__("OriginalDelegate")];
                    n && (e = n);
                    var r = t[Zone.__symbol__("OriginalDelegate")];
                    r && (t = r);
                  }
                  return {
                    nativeRequestAnimationFrame: e,
                    nativeCancelAnimationFrame: t,
                  };
                })().nativeRequestAnimationFrame),
                (r = function () {
                  !(function (e) {
                    e.isCheckStableRunning ||
                      -1 !== e.lastRequestAnimationFrameId ||
                      ((e.lastRequestAnimationFrameId =
                        e.nativeRequestAnimationFrame.call(Fe, function () {
                          e.fakeTopEventTask ||
                            (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                              "fakeTopEventTask",
                              function () {
                                (e.lastRequestAnimationFrameId = -1),
                                  As(e),
                                  (e.isCheckStableRunning = !0),
                                  xs(e),
                                  (e.isCheckStableRunning = !1);
                              },
                              void 0,
                              function () {},
                              function () {},
                            )),
                            e.fakeTopEventTask.invoke();
                        })),
                      As(e));
                  })(n);
                }),
                ((n = this)._inner = n._inner.fork({
                  name: "angular",
                  properties: { isAngularZone: !0 },
                  onInvokeTask: function (e, t, i, o, s, a) {
                    try {
                      return Ps(n), e.invokeTask(i, o, s, a);
                    } finally {
                      ((n.shouldCoalesceEventChangeDetection &&
                        "eventTask" === o.type) ||
                        n.shouldCoalesceRunChangeDetection) &&
                        r(),
                        Os(n);
                    }
                  },
                  onInvoke: function (e, t, i, o, s, a, u) {
                    try {
                      return Ps(n), e.invoke(i, o, s, a, u);
                    } finally {
                      n.shouldCoalesceRunChangeDetection && r(), Os(n);
                    }
                  },
                  onHasTask: function (e, t, r, i) {
                    e.hasTask(r, i),
                      t === r &&
                        ("microTask" == i.change
                          ? ((n._hasPendingMicrotasks = i.microTask),
                            As(n),
                            xs(n))
                          : "macroTask" == i.change &&
                            (n.hasPendingMacrotasks = i.macroTask));
                  },
                  onHandleError: function (e, t, r, i) {
                    return (
                      e.handleError(r, i),
                      n.runOutsideAngular(function () {
                        return n.onError.emit(i);
                      }),
                      !1
                    );
                  },
                }));
            }
            return (
              m(
                e,
                [
                  {
                    key: "run",
                    value: function (e, t, n) {
                      return this._inner.run(e, t, n);
                    },
                  },
                  {
                    key: "runTask",
                    value: function (e, t, n, r) {
                      var i = this._inner,
                        o = i.scheduleEventTask(
                          "NgZoneEvent: " + r,
                          e,
                          Cs,
                          uo,
                          uo,
                        );
                      try {
                        return i.runTask(o, t, n);
                      } finally {
                        i.cancelTask(o);
                      }
                    },
                  },
                  {
                    key: "runGuarded",
                    value: function (e, t, n) {
                      return this._inner.runGuarded(e, t, n);
                    },
                  },
                  {
                    key: "runOutsideAngular",
                    value: function (e) {
                      return this._outer.run(e);
                    },
                  },
                ],
                [
                  {
                    key: "isInAngularZone",
                    value: function () {
                      return !0 === Zone.current.get("isAngularZone");
                    },
                  },
                  {
                    key: "assertInAngularZone",
                    value: function () {
                      if (!e.isInAngularZone())
                        throw new Error(
                          "Expected to be in Angular Zone, but it is not!",
                        );
                    },
                  },
                  {
                    key: "assertNotInAngularZone",
                    value: function () {
                      if (e.isInAngularZone())
                        throw new Error(
                          "Expected to not be in Angular Zone, but it is!",
                        );
                    },
                  },
                ],
              ),
              e
            );
          })(),
          Cs = {};
        function xs(e) {
          if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
            try {
              e._nesting++, e.onMicrotaskEmpty.emit(null);
            } finally {
              if ((e._nesting--, !e.hasPendingMicrotasks))
                try {
                  e.runOutsideAngular(function () {
                    return e.onStable.emit(null);
                  });
                } finally {
                  e.isStable = !0;
                }
            }
        }
        function As(e) {
          e.hasPendingMicrotasks = !!(
            e._hasPendingMicrotasks ||
            ((e.shouldCoalesceEventChangeDetection ||
              e.shouldCoalesceRunChangeDetection) &&
              -1 !== e.lastRequestAnimationFrameId)
          );
        }
        function Ps(e) {
          e._nesting++,
            e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
        }
        function Os(e) {
          e._nesting--, xs(e);
        }
        var Is,
          Ds = (function () {
            function e() {
              p(this, e),
                (this.hasPendingMicrotasks = !1),
                (this.hasPendingMacrotasks = !1),
                (this.isStable = !0),
                (this.onUnstable = new rs()),
                (this.onMicrotaskEmpty = new rs()),
                (this.onStable = new rs()),
                (this.onError = new rs());
            }
            return (
              m(e, [
                {
                  key: "run",
                  value: function (e, t, n) {
                    return e.apply(t, n);
                  },
                },
                {
                  key: "runGuarded",
                  value: function (e, t, n) {
                    return e.apply(t, n);
                  },
                },
                {
                  key: "runOutsideAngular",
                  value: function (e) {
                    return e();
                  },
                },
                {
                  key: "runTask",
                  value: function (e, t, n, r) {
                    return e.apply(t, n);
                  },
                },
              ]),
              e
            );
          })(),
          Ns = (function () {
            var e = (function () {
              function e(t) {
                var n = this;
                p(this, e),
                  (this._ngZone = t),
                  (this._pendingCount = 0),
                  (this._isZoneStable = !0),
                  (this._didWork = !1),
                  (this._callbacks = []),
                  (this.taskTrackingZone = null),
                  this._watchAngularEvents(),
                  t.run(function () {
                    n.taskTrackingZone =
                      "undefined" == typeof Zone
                        ? null
                        : Zone.current.get("TaskTrackingZone");
                  });
              }
              return (
                m(e, [
                  {
                    key: "_watchAngularEvents",
                    value: function () {
                      var e = this;
                      this._ngZone.onUnstable.subscribe({
                        next: function () {
                          (e._didWork = !0), (e._isZoneStable = !1);
                        },
                      }),
                        this._ngZone.runOutsideAngular(function () {
                          e._ngZone.onStable.subscribe({
                            next: function () {
                              Ts.assertNotInAngularZone(),
                                Ss(function () {
                                  (e._isZoneStable = !0),
                                    e._runCallbacksIfReady();
                                });
                            },
                          });
                        });
                    },
                  },
                  {
                    key: "increasePendingRequestCount",
                    value: function () {
                      return (
                        (this._pendingCount += 1),
                        (this._didWork = !0),
                        this._pendingCount
                      );
                    },
                  },
                  {
                    key: "decreasePendingRequestCount",
                    value: function () {
                      if (((this._pendingCount -= 1), this._pendingCount < 0))
                        throw new Error("pending async requests below zero");
                      return this._runCallbacksIfReady(), this._pendingCount;
                    },
                  },
                  {
                    key: "isStable",
                    value: function () {
                      return (
                        this._isZoneStable &&
                        0 === this._pendingCount &&
                        !this._ngZone.hasPendingMacrotasks
                      );
                    },
                  },
                  {
                    key: "_runCallbacksIfReady",
                    value: function () {
                      var e = this;
                      if (this.isStable())
                        Ss(function () {
                          for (; 0 !== e._callbacks.length; ) {
                            var t = e._callbacks.pop();
                            clearTimeout(t.timeoutId), t.doneCb(e._didWork);
                          }
                          e._didWork = !1;
                        });
                      else {
                        var t = this.getPendingTasks();
                        (this._callbacks = this._callbacks.filter(function (e) {
                          return (
                            !e.updateCb ||
                            !e.updateCb(t) ||
                            (clearTimeout(e.timeoutId), !1)
                          );
                        })),
                          (this._didWork = !0);
                      }
                    },
                  },
                  {
                    key: "getPendingTasks",
                    value: function () {
                      return this.taskTrackingZone
                        ? this.taskTrackingZone.macroTasks.map(function (e) {
                            return {
                              source: e.source,
                              creationLocation: e.creationLocation,
                              data: e.data,
                            };
                          })
                        : [];
                    },
                  },
                  {
                    key: "addCallback",
                    value: function (e, t, n) {
                      var r = this,
                        i = -1;
                      t &&
                        t > 0 &&
                        (i = setTimeout(function () {
                          (r._callbacks = r._callbacks.filter(function (e) {
                            return e.timeoutId !== i;
                          })),
                            e(r._didWork, r.getPendingTasks());
                        }, t)),
                        this._callbacks.push({
                          doneCb: e,
                          timeoutId: i,
                          updateCb: n,
                        });
                    },
                  },
                  {
                    key: "whenStable",
                    value: function (e, t, n) {
                      if (n && !this.taskTrackingZone)
                        throw new Error(
                          'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?',
                        );
                      this.addCallback(e, t, n), this._runCallbacksIfReady();
                    },
                  },
                  {
                    key: "getPendingRequestCount",
                    value: function () {
                      return this._pendingCount;
                    },
                  },
                  {
                    key: "findProviders",
                    value: function (e, t, n) {
                      return [];
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(Ts));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          Rs = (function () {
            var e = (function () {
              function e() {
                p(this, e),
                  (this._applications = new Map()),
                  Fs.addToWindow(this);
              }
              return (
                m(e, [
                  {
                    key: "registerApplication",
                    value: function (e, t) {
                      this._applications.set(e, t);
                    },
                  },
                  {
                    key: "unregisterApplication",
                    value: function (e) {
                      this._applications.delete(e);
                    },
                  },
                  {
                    key: "unregisterAllApplications",
                    value: function () {
                      this._applications.clear();
                    },
                  },
                  {
                    key: "getTestability",
                    value: function (e) {
                      return this._applications.get(e) || null;
                    },
                  },
                  {
                    key: "getAllTestabilities",
                    value: function () {
                      return Array.from(this._applications.values());
                    },
                  },
                  {
                    key: "getAllRootElements",
                    value: function () {
                      return Array.from(this._applications.keys());
                    },
                  },
                  {
                    key: "findTestabilityInTree",
                    value: function (e) {
                      var t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1];
                      return Fs.findTestabilityInTree(this, e, t);
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          Fs = new ((function () {
            function e() {
              p(this, e);
            }
            return (
              m(e, [
                { key: "addToWindow", value: function (e) {} },
                {
                  key: "findTestabilityInTree",
                  value: function (e, t, n) {
                    return null;
                  },
                },
              ]),
              e
            );
          })())(),
          Ms = !0,
          js = !1,
          Hs = new Cn("AllowMultipleToken");
        function Vs(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            r = "Platform: ".concat(t),
            i = new Cn(r);
          return function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              o = Ls();
            if (!o || o.injector.get(Hs, !1))
              if (e) e(n.concat(t).concat({ provide: i, useValue: !0 }));
              else {
                var s = n
                  .concat(t)
                  .concat(
                    { provide: i, useValue: !0 },
                    { provide: _i, useValue: "platform" },
                  );
                !(function (e) {
                  if (Is && !Is.destroyed && !Is.injector.get(Hs, !1))
                    throw new Error(
                      "There can be only one platform. Destroy the previous one to create a new one.",
                    );
                  Is = e.get(Bs);
                  var t = e.get(ls, null);
                  t &&
                    t.forEach(function (e) {
                      return e();
                    });
                })(Oi.create({ providers: s, name: r }));
              }
            return (function (e) {
              var t = Ls();
              if (!t) throw new Error("No platform exists!");
              if (!t.injector.get(e, null))
                throw new Error(
                  "A platform with a different configuration has been created. Please destroy it first.",
                );
              return t;
            })(i);
          };
        }
        function Ls() {
          return Is && !Is.destroyed ? Is : null;
        }
        var Bs = (function () {
          var e = (function () {
            function e(t) {
              p(this, e),
                (this._injector = t),
                (this._modules = []),
                (this._destroyListeners = []),
                (this._destroyed = !1);
            }
            return (
              m(e, [
                {
                  key: "bootstrapModuleFactory",
                  value: function (e, t) {
                    var n,
                      r,
                      i = this,
                      o =
                        ((n = t ? t.ngZone : void 0),
                        (r = {
                          ngZoneEventCoalescing:
                            (t && t.ngZoneEventCoalescing) || !1,
                          ngZoneRunCoalescing:
                            (t && t.ngZoneRunCoalescing) || !1,
                        }),
                        "noop" === n
                          ? new Ds()
                          : ("zone.js" === n ? void 0 : n) ||
                            new Ts({
                              enableLongStackTrace: ((js = !0), Ms),
                              shouldCoalesceEventChangeDetection: !!(null == r
                                ? void 0
                                : r.ngZoneEventCoalescing),
                              shouldCoalesceRunChangeDetection: !!(null == r
                                ? void 0
                                : r.ngZoneRunCoalescing),
                            })),
                      s = [{ provide: Ts, useValue: o }];
                    return o.run(function () {
                      var t = Oi.create({
                          providers: s,
                          parent: i.injector,
                          name: e.moduleType.name,
                        }),
                        n = e.create(t),
                        r = n.injector.get(Zn, null);
                      if (!r)
                        throw new Error(
                          "No ErrorHandler. Is platform module (BrowserModule) included?",
                        );
                      return (
                        o.runOutsideAngular(function () {
                          var e = o.onError.subscribe({
                            next: function (e) {
                              r.handleError(e);
                            },
                          });
                          n.onDestroy(function () {
                            Qs(i._modules, n), e.unsubscribe();
                          });
                        }),
                        (function (e, t, r) {
                          try {
                            var o =
                              ((s = n.injector.get(os)).runInitializers(),
                              s.donePromise.then(function () {
                                return (
                                  io(n.injector.get(ds, "en-US") || "en-US"),
                                  i._moduleDoBootstrap(n),
                                  n
                                );
                              }));
                            return Ki(o)
                              ? o.catch(function (n) {
                                  throw (
                                    (t.runOutsideAngular(function () {
                                      return e.handleError(n);
                                    }),
                                    n)
                                  );
                                })
                              : o;
                          } catch (a) {
                            throw (
                              (t.runOutsideAngular(function () {
                                return e.handleError(a);
                              }),
                              a)
                            );
                          }
                          var s;
                        })(r, o)
                      );
                    });
                  },
                },
                {
                  key: "bootstrapModule",
                  value: function (e) {
                    var t = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : [],
                      r = zs({}, n);
                    return (function (e, t, n) {
                      var r = new ts(n);
                      return Promise.resolve(r);
                    })(0, 0, e).then(function (e) {
                      return t.bootstrapModuleFactory(e, r);
                    });
                  },
                },
                {
                  key: "_moduleDoBootstrap",
                  value: function (e) {
                    var t = e.injector.get(Ks);
                    if (e._bootstrapComponents.length > 0)
                      e._bootstrapComponents.forEach(function (e) {
                        return t.bootstrap(e);
                      });
                    else {
                      if (!e.instance.ngDoBootstrap)
                        throw new Error(
                          "The module ".concat(
                            se(e.instance.constructor),
                            ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.',
                          ),
                        );
                      e.instance.ngDoBootstrap(t);
                    }
                    this._modules.push(e);
                  },
                },
                {
                  key: "onDestroy",
                  value: function (e) {
                    this._destroyListeners.push(e);
                  },
                },
                {
                  key: "injector",
                  get: function () {
                    return this._injector;
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    if (this._destroyed)
                      throw new Error(
                        "The platform has already been destroyed!",
                      );
                    this._modules.slice().forEach(function (e) {
                      return e.destroy();
                    }),
                      this._destroyListeners.forEach(function (e) {
                        return e();
                      }),
                      (this._destroyed = !0);
                  },
                },
                {
                  key: "destroyed",
                  get: function () {
                    return this._destroyed;
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Mn(Oi));
            }),
            (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
            e
          );
        })();
        function zs(e, t) {
          return Array.isArray(t)
            ? t.reduce(zs, e)
            : Object.assign(Object.assign({}, e), t);
        }
        var qs,
          Ks =
            (((qs = (function () {
              function e(t, n, r, i, o) {
                var s = this;
                p(this, e),
                  (this._zone = t),
                  (this._injector = n),
                  (this._exceptionHandler = r),
                  (this._componentFactoryResolver = i),
                  (this._initStatus = o),
                  (this._bootstrapListeners = []),
                  (this._views = []),
                  (this._runningTick = !1),
                  (this._stable = !0),
                  (this.componentTypes = []),
                  (this.components = []),
                  (this._onMicrotaskEmptySubscription =
                    this._zone.onMicrotaskEmpty.subscribe({
                      next: function () {
                        s._zone.run(function () {
                          s.tick();
                        });
                      },
                    }));
                var a = new I(function (e) {
                    (s._stable =
                      s._zone.isStable &&
                      !s._zone.hasPendingMacrotasks &&
                      !s._zone.hasPendingMicrotasks),
                      s._zone.runOutsideAngular(function () {
                        e.next(s._stable), e.complete();
                      });
                  }),
                  u = new I(function (e) {
                    var t;
                    s._zone.runOutsideAngular(function () {
                      t = s._zone.onStable.subscribe(function () {
                        Ts.assertNotInAngularZone(),
                          Ss(function () {
                            s._stable ||
                              s._zone.hasPendingMacrotasks ||
                              s._zone.hasPendingMicrotasks ||
                              ((s._stable = !0), e.next(!0));
                          });
                      });
                    });
                    var n = s._zone.onUnstable.subscribe(function () {
                      Ts.assertInAngularZone(),
                        s._stable &&
                          ((s._stable = !1),
                          s._zone.runOutsideAngular(function () {
                            e.next(!1);
                          }));
                    });
                    return function () {
                      t.unsubscribe(), n.unsubscribe();
                    };
                  });
                this.isStable = (function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  var r = Number.POSITIVE_INFINITY,
                    i = null,
                    o = t[t.length - 1];
                  return (
                    H(o)
                      ? ((i = t.pop()),
                        t.length > 1 &&
                          "number" == typeof t[t.length - 1] &&
                          (r = t.pop()))
                      : "number" == typeof o && (r = t.pop()),
                    null === i && 1 === t.length && t[0] instanceof I
                      ? t[0]
                      : (function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : Number.POSITIVE_INFINITY;
                          return W(P, e);
                        })(r)(J(t, i))
                  );
                })(
                  a,
                  u.pipe(function (e) {
                    return Y()(
                      ((t = ie),
                      function (e) {
                        var n;
                        n =
                          "function" == typeof t
                            ? t
                            : function () {
                                return t;
                              };
                        var r = Object.create(e, ne);
                        return (r.source = e), (r.subjectFactory = n), r;
                      })(e),
                    );
                    var t;
                  }),
                );
              }
              return (
                m(e, [
                  {
                    key: "bootstrap",
                    value: function (e, t) {
                      var n,
                        r = this;
                      if (!this._initStatus.done)
                        throw new Error(
                          "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.",
                        );
                      (n =
                        e instanceof oo
                          ? e
                          : this._componentFactoryResolver.resolveComponentFactory(
                              e,
                            )),
                        this.componentTypes.push(n.componentType);
                      var i = n.isBoundToModule
                          ? void 0
                          : this._injector.get(Bo),
                        o = n.create(Oi.NULL, [], t || n.selector, i),
                        s = o.location.nativeElement,
                        a = o.injector.get(Ns, null),
                        u = a && o.injector.get(Rs);
                      return (
                        a && u && u.registerApplication(s, a),
                        o.onDestroy(function () {
                          r.detachView(o.hostView),
                            Qs(r.components, o),
                            u && u.unregisterApplication(s);
                        }),
                        this._loadComponent(o),
                        o
                      );
                    },
                  },
                  {
                    key: "tick",
                    value: function () {
                      var e = this;
                      if (this._runningTick)
                        throw new Error(
                          "ApplicationRef.tick is called recursively",
                        );
                      try {
                        this._runningTick = !0;
                        var n,
                          r = t(this._views);
                        try {
                          for (r.s(); !(n = r.n()).done; )
                            n.value.detectChanges();
                        } catch (i) {
                          r.e(i);
                        } finally {
                          r.f();
                        }
                      } catch (o) {
                        this._zone.runOutsideAngular(function () {
                          return e._exceptionHandler.handleError(o);
                        });
                      } finally {
                        this._runningTick = !1;
                      }
                    },
                  },
                  {
                    key: "attachView",
                    value: function (e) {
                      var t = e;
                      this._views.push(t), t.attachToAppRef(this);
                    },
                  },
                  {
                    key: "detachView",
                    value: function (e) {
                      var t = e;
                      Qs(this._views, t), t.detachFromAppRef();
                    },
                  },
                  {
                    key: "_loadComponent",
                    value: function (e) {
                      this.attachView(e.hostView),
                        this.tick(),
                        this.components.push(e),
                        this._injector
                          .get(hs, [])
                          .concat(this._bootstrapListeners)
                          .forEach(function (t) {
                            return t(e);
                          });
                    },
                  },
                  {
                    key: "ngOnDestroy",
                    value: function () {
                      this._views.slice().forEach(function (e) {
                        return e.destroy();
                      }),
                        this._onMicrotaskEmptySubscription.unsubscribe();
                    },
                  },
                  {
                    key: "viewCount",
                    get: function () {
                      return this._views.length;
                    },
                  },
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || qs)(Mn(Ts), Mn(Oi), Mn(Zn), Mn(ao), Mn(os));
            }),
            (qs.ɵprov = pe({ token: qs, factory: qs.ɵfac })),
            qs);
        function Qs(e, t) {
          var n = e.indexOf(t);
          n > -1 && e.splice(n, 1);
        }
        var Us = Vs(null, "core", [
            { provide: cs, useValue: "unknown" },
            { provide: Bs, deps: [Oi] },
            { provide: Rs, deps: [] },
            { provide: fs, deps: [] },
          ]),
          Zs = [
            { provide: Ks, useClass: Ks, deps: [Ts, Oi, Zn, ao, os] },
            {
              provide: $o,
              deps: [Ts],
              useFactory: function (e) {
                var t = [];
                return (
                  e.onStable.subscribe(function () {
                    for (; t.length; ) t.pop()();
                  }),
                  function (e) {
                    t.push(e);
                  }
                );
              },
            },
            { provide: os, useClass: os, deps: [[new Ln(), is]] },
            { provide: ws, useClass: ws, deps: [] },
            as,
            {
              provide: xo,
              useFactory: function () {
                return Mo;
              },
              deps: [],
            },
            {
              provide: Po,
              useFactory: function () {
                return jo;
              },
              deps: [],
            },
            {
              provide: ds,
              useFactory: function (e) {
                return (
                  io(
                    (e =
                      e ||
                      ("undefined" != typeof $localize && $localize.locale) ||
                      "en-US"),
                  ),
                  e
                );
              },
              deps: [[new Vn(ds), new Ln(), new Bn()]],
            },
            { provide: vs, useValue: "USD" },
          ],
          Ws = (function () {
            var e = function e(t) {
              p(this, e);
            };
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(Ks));
              }),
              (e.ɵmod = $e({ type: e })),
              (e.ɵinj = ye({ providers: Zs })),
              e
            );
          })(),
          Gs = null;
        function $s() {
          return Gs;
        }
        var Js = new Cn("DocumentToken"),
          Ys = (function (e) {
            return (
              (e[(e.Zero = 0)] = "Zero"),
              (e[(e.One = 1)] = "One"),
              (e[(e.Two = 2)] = "Two"),
              (e[(e.Few = 3)] = "Few"),
              (e[(e.Many = 4)] = "Many"),
              (e[(e.Other = 5)] = "Other"),
              e
            );
          })({}),
          Xs = function e() {
            p(this, e);
          },
          ea = (function () {
            var e = (function (e) {
              u(n, e);
              var t = c(n);
              function n(e) {
                var r;
                return p(this, n), ((r = t.call(this)).locale = e), r;
              }
              return (
                m(n, [
                  {
                    key: "getPluralCategory",
                    value: function (e, t) {
                      switch (
                        (function (e) {
                          return (function (e) {
                            var t = (function (e) {
                                return e.toLowerCase().replace(/_/g, "-");
                              })(e),
                              n = no(t);
                            if (n) return n;
                            var r = t.split("-")[0];
                            if ((n = no(r))) return n;
                            if ("en" === r) return eo;
                            throw new Error(
                              'Missing locale data for the locale "'.concat(
                                e,
                                '".',
                              ),
                            );
                          })(e)[ro.PluralCase];
                        })(t || this.locale)(e)
                      ) {
                        case Ys.Zero:
                          return "zero";
                        case Ys.One:
                          return "one";
                        case Ys.Two:
                          return "two";
                        case Ys.Few:
                          return "few";
                        case Ys.Many:
                          return "many";
                        default:
                          return "other";
                      }
                    },
                  },
                ]),
                n
              );
            })(Xs);
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(ds));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })();
        function ta(n, r) {
          r = encodeURIComponent(r);
          var i,
            o = t(n.split(";"));
          try {
            for (o.s(); !(i = o.n()).done; ) {
              var s = i.value,
                a = s.indexOf("="),
                u = e(-1 == a ? [s, ""] : [s.slice(0, a), s.slice(a + 1)], 2),
                l = u[0],
                c = u[1];
              if (l.trim() === r) return decodeURIComponent(c);
            }
          } catch (h) {
            o.e(h);
          } finally {
            o.f();
          }
          return null;
        }
        var na = (function () {
            var e = (function () {
              function e(t, n) {
                p(this, e),
                  (this._viewContainer = t),
                  (this._context = new ra()),
                  (this._thenTemplateRef = null),
                  (this._elseTemplateRef = null),
                  (this._thenViewRef = null),
                  (this._elseViewRef = null),
                  (this._thenTemplateRef = n);
              }
              return (
                m(
                  e,
                  [
                    {
                      key: "ngIf",
                      set: function (e) {
                        (this._context.$implicit = this._context.ngIf = e),
                          this._updateView();
                      },
                    },
                    {
                      key: "ngIfThen",
                      set: function (e) {
                        ia("ngIfThen", e),
                          (this._thenTemplateRef = e),
                          (this._thenViewRef = null),
                          this._updateView();
                      },
                    },
                    {
                      key: "ngIfElse",
                      set: function (e) {
                        ia("ngIfElse", e),
                          (this._elseTemplateRef = e),
                          (this._elseViewRef = null),
                          this._updateView();
                      },
                    },
                    {
                      key: "_updateView",
                      value: function () {
                        this._context.$implicit
                          ? this._thenViewRef ||
                            (this._viewContainer.clear(),
                            (this._elseViewRef = null),
                            this._thenTemplateRef &&
                              (this._thenViewRef =
                                this._viewContainer.createEmbeddedView(
                                  this._thenTemplateRef,
                                  this._context,
                                )))
                          : this._elseViewRef ||
                            (this._viewContainer.clear(),
                            (this._thenViewRef = null),
                            this._elseTemplateRef &&
                              (this._elseViewRef =
                                this._viewContainer.createEmbeddedView(
                                  this._elseTemplateRef,
                                  this._context,
                                )));
                      },
                    },
                  ],
                  [
                    {
                      key: "ngTemplateContextGuard",
                      value: function (e, t) {
                        return !0;
                      },
                    },
                  ],
                ),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Hi(qo), Hi(Vo));
              }),
              (e.ɵdir = Ye({
                type: e,
                selectors: [["", "ngIf", ""]],
                inputs: {
                  ngIf: "ngIf",
                  ngIfThen: "ngIfThen",
                  ngIfElse: "ngIfElse",
                },
              })),
              e
            );
          })(),
          ra = function e() {
            p(this, e), (this.$implicit = null), (this.ngIf = null);
          };
        function ia(e, t) {
          if (t && !t.createEmbeddedView)
            throw new Error(
              ""
                .concat(e, " must be a TemplateRef, but received '")
                .concat(se(t), "'."),
            );
        }
        var oa,
          sa = (function () {
            function e() {
              p(this, e);
            }
            return (
              m(e, [
                {
                  key: "createSubscription",
                  value: function (e, t) {
                    return e.subscribe({
                      next: t,
                      error: function (e) {
                        throw e;
                      },
                    });
                  },
                },
                {
                  key: "dispose",
                  value: function (e) {
                    e.unsubscribe();
                  },
                },
                {
                  key: "onDestroy",
                  value: function (e) {
                    e.unsubscribe();
                  },
                },
              ]),
              e
            );
          })(),
          aa = new ((function () {
            function e() {
              p(this, e);
            }
            return (
              m(e, [
                {
                  key: "createSubscription",
                  value: function (e, t) {
                    return e.then(t, function (e) {
                      throw e;
                    });
                  },
                },
                { key: "dispose", value: function (e) {} },
                { key: "onDestroy", value: function (e) {} },
              ]),
              e
            );
          })())(),
          ua = new sa(),
          la = (function () {
            var e,
              t = (function () {
                function e(t) {
                  p(this, e),
                    (this._ref = t),
                    (this._latestValue = null),
                    (this._subscription = null),
                    (this._obj = null),
                    (this._strategy = null);
                }
                return (
                  m(e, [
                    {
                      key: "ngOnDestroy",
                      value: function () {
                        this._subscription && this._dispose();
                      },
                    },
                    {
                      key: "transform",
                      value: function (e) {
                        return this._obj
                          ? e !== this._obj
                            ? (this._dispose(), this.transform(e))
                            : this._latestValue
                          : (e && this._subscribe(e), this._latestValue);
                      },
                    },
                    {
                      key: "_subscribe",
                      value: function (e) {
                        var t = this;
                        (this._obj = e),
                          (this._strategy = this._selectStrategy(e)),
                          (this._subscription =
                            this._strategy.createSubscription(e, function (n) {
                              return t._updateLatestValue(e, n);
                            }));
                      },
                    },
                    {
                      key: "_selectStrategy",
                      value: function (t) {
                        if (Ki(t)) return aa;
                        if (Qi(t)) return ua;
                        throw Error(
                          "InvalidPipeArgument: '"
                            .concat(t, "' for pipe '")
                            .concat(se(e), "'"),
                        );
                      },
                    },
                    {
                      key: "_dispose",
                      value: function () {
                        this._strategy.dispose(this._subscription),
                          (this._latestValue = null),
                          (this._subscription = null),
                          (this._obj = null);
                      },
                    },
                    {
                      key: "_updateLatestValue",
                      value: function (e, t) {
                        e === this._obj &&
                          ((this._latestValue = t), this._ref.markForCheck());
                      },
                    },
                  ]),
                  e
                );
              })();
            return (
              (t.ɵfac = function (e) {
                return new (e || t)(Hi(Ro, 16));
              }),
              (t.ɵpipe = {
                type: (e = { name: "async", type: t, pure: !1 }).type,
                name: e.name,
                factory: null,
                pure: !1 !== e.pure,
                onDestroy: e.type.prototype.ngOnDestroy || null,
              }),
              t
            );
          })(),
          ca = (function () {
            var e = function e() {
              p(this, e);
            };
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵmod = $e({ type: e })),
              (e.ɵinj = ye({ providers: [{ provide: Xs, useClass: ea }] })),
              e
            );
          })(),
          ha = function e() {
            p(this, e);
          },
          fa = (function (e) {
            u(n, e);
            var t = c(n);
            function n() {
              return p(this, n), t.apply(this, arguments);
            }
            return (
              m(
                n,
                [
                  {
                    key: "onAndCancel",
                    value: function (e, t, n) {
                      return (
                        e.addEventListener(t, n, !1),
                        function () {
                          e.removeEventListener(t, n, !1);
                        }
                      );
                    },
                  },
                  {
                    key: "dispatchEvent",
                    value: function (e, t) {
                      e.dispatchEvent(t);
                    },
                  },
                  {
                    key: "remove",
                    value: function (e) {
                      e.parentNode && e.parentNode.removeChild(e);
                    },
                  },
                  {
                    key: "createElement",
                    value: function (e, t) {
                      return (t = t || this.getDefaultDocument()).createElement(
                        e,
                      );
                    },
                  },
                  {
                    key: "createHtmlDocument",
                    value: function () {
                      return document.implementation.createHTMLDocument(
                        "fakeTitle",
                      );
                    },
                  },
                  {
                    key: "getDefaultDocument",
                    value: function () {
                      return document;
                    },
                  },
                  {
                    key: "isElementNode",
                    value: function (e) {
                      return e.nodeType === Node.ELEMENT_NODE;
                    },
                  },
                  {
                    key: "isShadowRoot",
                    value: function (e) {
                      return e instanceof DocumentFragment;
                    },
                  },
                  {
                    key: "getGlobalEventTarget",
                    value: function (e, t) {
                      return "window" === t
                        ? window
                        : "document" === t
                        ? e
                        : "body" === t
                        ? e.body
                        : null;
                    },
                  },
                  {
                    key: "getBaseHref",
                    value: function (e) {
                      var t = (da = da || document.querySelector("base"))
                        ? da.getAttribute("href")
                        : null;
                      return null == t
                        ? null
                        : (function (e) {
                            (oa =
                              oa || document.createElement("a")).setAttribute(
                              "href",
                              e,
                            );
                            var t = oa.pathname;
                            return "/" === t.charAt(0) ? t : "/".concat(t);
                          })(t);
                    },
                  },
                  {
                    key: "resetBaseElement",
                    value: function () {
                      da = null;
                    },
                  },
                  {
                    key: "getUserAgent",
                    value: function () {
                      return window.navigator.userAgent;
                    },
                  },
                  {
                    key: "getCookie",
                    value: function (e) {
                      return ta(document.cookie, e);
                    },
                  },
                ],
                [
                  {
                    key: "makeCurrent",
                    value: function () {
                      var e;
                      (e = new n()), Gs || (Gs = e);
                    },
                  },
                ],
              ),
              n
            );
          })(
            (function (e) {
              u(n, e);
              var t = c(n);
              function n() {
                var e;
                return (
                  p(this, n),
                  ((e = t.apply(this, arguments)).supportsDOMEvents = !0),
                  e
                );
              }
              return n;
            })(
              (function () {
                return function e() {
                  p(this, e);
                };
              })(),
            ),
          ),
          da = null,
          va = new Cn("TRANSITION_ID"),
          pa = [
            {
              provide: is,
              useFactory: function (e, t, n) {
                return function () {
                  n.get(os).donePromise.then(function () {
                    var n = $s();
                    Array.prototype.slice
                      .apply(t.querySelectorAll("style[ng-transition]"))
                      .filter(function (t) {
                        return t.getAttribute("ng-transition") === e;
                      })
                      .forEach(function (e) {
                        return n.remove(e);
                      });
                  });
                };
              },
              deps: [va, Js, Oi],
              multi: !0,
            },
          ],
          ya = (function () {
            function e() {
              p(this, e);
            }
            return (
              m(
                e,
                [
                  {
                    key: "addToWindow",
                    value: function (e) {
                      (Fe.getAngularTestability = function (t) {
                        var n =
                            !(
                              arguments.length > 1 && void 0 !== arguments[1]
                            ) || arguments[1],
                          r = e.findTestabilityInTree(t, n);
                        if (null == r)
                          throw new Error(
                            "Could not find testability for element.",
                          );
                        return r;
                      }),
                        (Fe.getAllAngularTestabilities = function () {
                          return e.getAllTestabilities();
                        }),
                        (Fe.getAllAngularRootElements = function () {
                          return e.getAllRootElements();
                        }),
                        Fe.frameworkStabilizers ||
                          (Fe.frameworkStabilizers = []),
                        Fe.frameworkStabilizers.push(function (e) {
                          var t = Fe.getAllAngularTestabilities(),
                            n = t.length,
                            r = !1,
                            i = function (t) {
                              (r = r || t), 0 == --n && e(r);
                            };
                          t.forEach(function (e) {
                            e.whenStable(i);
                          });
                        });
                    },
                  },
                  {
                    key: "findTestabilityInTree",
                    value: function (e, t, n) {
                      if (null == t) return null;
                      var r = e.getTestability(t);
                      return null != r
                        ? r
                        : n
                        ? $s().isShadowRoot(t)
                          ? this.findTestabilityInTree(e, t.host, !0)
                          : this.findTestabilityInTree(e, t.parentElement, !0)
                        : null;
                    },
                  },
                ],
                [
                  {
                    key: "init",
                    value: function () {
                      var t;
                      (t = new e()), (Fs = t);
                    },
                  },
                ],
              ),
              e
            );
          })(),
          ma = (function () {
            var e = (function () {
              function e() {
                p(this, e);
              }
              return (
                m(e, [
                  {
                    key: "build",
                    value: function () {
                      return new XMLHttpRequest();
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          ga = new Cn("EventManagerPlugins"),
          _a = (function () {
            var e = (function () {
              function e(t, n) {
                var r = this;
                p(this, e),
                  (this._zone = n),
                  (this._eventNameToPlugin = new Map()),
                  t.forEach(function (e) {
                    return (e.manager = r);
                  }),
                  (this._plugins = t.slice().reverse());
              }
              return (
                m(e, [
                  {
                    key: "addEventListener",
                    value: function (e, t, n) {
                      return this._findPluginFor(t).addEventListener(e, t, n);
                    },
                  },
                  {
                    key: "addGlobalEventListener",
                    value: function (e, t, n) {
                      return this._findPluginFor(t).addGlobalEventListener(
                        e,
                        t,
                        n,
                      );
                    },
                  },
                  {
                    key: "getZone",
                    value: function () {
                      return this._zone;
                    },
                  },
                  {
                    key: "_findPluginFor",
                    value: function (e) {
                      var t = this._eventNameToPlugin.get(e);
                      if (t) return t;
                      for (var n = this._plugins, r = 0; r < n.length; r++) {
                        var i = n[r];
                        if (i.supports(e))
                          return this._eventNameToPlugin.set(e, i), i;
                      }
                      throw new Error(
                        "No event manager plugin found for event ".concat(e),
                      );
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(ga), Mn(Ts));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          ka = (function () {
            function e(t) {
              p(this, e), (this._doc = t);
            }
            return (
              m(e, [
                {
                  key: "addGlobalEventListener",
                  value: function (e, t, n) {
                    var r = $s().getGlobalEventTarget(this._doc, e);
                    if (!r)
                      throw new Error(
                        "Unsupported event target "
                          .concat(r, " for event ")
                          .concat(t),
                      );
                    return this.addEventListener(r, t, n);
                  },
                },
              ]),
              e
            );
          })(),
          ba = (function () {
            var e = (function () {
              function e() {
                p(this, e), (this._stylesSet = new Set());
              }
              return (
                m(e, [
                  {
                    key: "addStyles",
                    value: function (e) {
                      var t = this,
                        n = new Set();
                      e.forEach(function (e) {
                        t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e));
                      }),
                        this.onStylesAdded(n);
                    },
                  },
                  { key: "onStylesAdded", value: function (e) {} },
                  {
                    key: "getAllStyles",
                    value: function () {
                      return Array.from(this._stylesSet);
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          wa = (function () {
            var e = (function (e) {
              u(n, e);
              var t = c(n);
              function n(e) {
                var r;
                return (
                  p(this, n),
                  ((r = t.call(this))._doc = e),
                  (r._hostNodes = new Map()),
                  r._hostNodes.set(e.head, []),
                  r
                );
              }
              return (
                m(n, [
                  {
                    key: "_addStylesToHost",
                    value: function (e, t, n) {
                      var r = this;
                      e.forEach(function (e) {
                        var i = r._doc.createElement("style");
                        (i.textContent = e), n.push(t.appendChild(i));
                      });
                    },
                  },
                  {
                    key: "addHost",
                    value: function (e) {
                      var t = [];
                      this._addStylesToHost(this._stylesSet, e, t),
                        this._hostNodes.set(e, t);
                    },
                  },
                  {
                    key: "removeHost",
                    value: function (e) {
                      var t = this._hostNodes.get(e);
                      t && t.forEach(Ea), this._hostNodes.delete(e);
                    },
                  },
                  {
                    key: "onStylesAdded",
                    value: function (e) {
                      var t = this;
                      this._hostNodes.forEach(function (n, r) {
                        t._addStylesToHost(e, r, n);
                      });
                    },
                  },
                  {
                    key: "ngOnDestroy",
                    value: function () {
                      this._hostNodes.forEach(function (e) {
                        return e.forEach(Ea);
                      });
                    },
                  },
                ]),
                n
              );
            })(ba);
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(Js));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })();
        function Ea(e) {
          $s().remove(e);
        }
        var Sa = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/",
          },
          Ta = /%COMP%/g;
        function Ca(e, t, n) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            Array.isArray(i)
              ? Ca(e, i, n)
              : ((i = i.replace(Ta, e)), n.push(i));
          }
          return n;
        }
        function xa(e) {
          return function (t) {
            if ("__ngUnwrap__" === t) return e;
            !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
          };
        }
        var Aa = (function () {
            var e = (function () {
              function e(t, n, r) {
                p(this, e),
                  (this.eventManager = t),
                  (this.sharedStylesHost = n),
                  (this.appId = r),
                  (this.rendererByCompId = new Map()),
                  (this.defaultRenderer = new Pa(t));
              }
              return (
                m(e, [
                  {
                    key: "createRenderer",
                    value: function (e, t) {
                      if (!e || !t) return this.defaultRenderer;
                      switch (t.encapsulation) {
                        case Oe.Emulated:
                          var n = this.rendererByCompId.get(t.id);
                          return (
                            n ||
                              ((n = new Oa(
                                this.eventManager,
                                this.sharedStylesHost,
                                t,
                                this.appId,
                              )),
                              this.rendererByCompId.set(t.id, n)),
                            n.applyToHost(e),
                            n
                          );
                        case 1:
                        case Oe.ShadowDom:
                          return new Ia(
                            this.eventManager,
                            this.sharedStylesHost,
                            e,
                            t,
                          );
                        default:
                          if (!this.rendererByCompId.has(t.id)) {
                            var r = Ca(t.id, t.styles, []);
                            this.sharedStylesHost.addStyles(r),
                              this.rendererByCompId.set(
                                t.id,
                                this.defaultRenderer,
                              );
                          }
                          return this.defaultRenderer;
                      }
                    },
                  },
                  { key: "begin", value: function () {} },
                  { key: "end", value: function () {} },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(_a), Mn(wa), Mn(ss));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          Pa = (function () {
            function e(t) {
              p(this, e),
                (this.eventManager = t),
                (this.data = Object.create(null));
            }
            return (
              m(e, [
                { key: "destroy", value: function () {} },
                {
                  key: "createElement",
                  value: function (e, t) {
                    return t
                      ? document.createElementNS(Sa[t] || t, e)
                      : document.createElement(e);
                  },
                },
                {
                  key: "createComment",
                  value: function (e) {
                    return document.createComment(e);
                  },
                },
                {
                  key: "createText",
                  value: function (e) {
                    return document.createTextNode(e);
                  },
                },
                {
                  key: "appendChild",
                  value: function (e, t) {
                    e.appendChild(t);
                  },
                },
                {
                  key: "insertBefore",
                  value: function (e, t, n) {
                    e && e.insertBefore(t, n);
                  },
                },
                {
                  key: "removeChild",
                  value: function (e, t) {
                    e && e.removeChild(t);
                  },
                },
                {
                  key: "selectRootElement",
                  value: function (e, t) {
                    var n =
                      "string" == typeof e ? document.querySelector(e) : e;
                    if (!n)
                      throw new Error(
                        'The selector "'.concat(
                          e,
                          '" did not match any elements',
                        ),
                      );
                    return t || (n.textContent = ""), n;
                  },
                },
                {
                  key: "parentNode",
                  value: function (e) {
                    return e.parentNode;
                  },
                },
                {
                  key: "nextSibling",
                  value: function (e) {
                    return e.nextSibling;
                  },
                },
                {
                  key: "setAttribute",
                  value: function (e, t, n, r) {
                    if (r) {
                      t = r + ":" + t;
                      var i = Sa[r];
                      i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n);
                    } else e.setAttribute(t, n);
                  },
                },
                {
                  key: "removeAttribute",
                  value: function (e, t, n) {
                    if (n) {
                      var r = Sa[n];
                      r
                        ? e.removeAttributeNS(r, t)
                        : e.removeAttribute("".concat(n, ":").concat(t));
                    } else e.removeAttribute(t);
                  },
                },
                {
                  key: "addClass",
                  value: function (e, t) {
                    e.classList.add(t);
                  },
                },
                {
                  key: "removeClass",
                  value: function (e, t) {
                    e.classList.remove(t);
                  },
                },
                {
                  key: "setStyle",
                  value: function (e, t, n, r) {
                    r & ($n.DashCase | $n.Important)
                      ? e.style.setProperty(
                          t,
                          n,
                          r & $n.Important ? "important" : "",
                        )
                      : (e.style[t] = n);
                  },
                },
                {
                  key: "removeStyle",
                  value: function (e, t, n) {
                    n & $n.DashCase
                      ? e.style.removeProperty(t)
                      : (e.style[t] = "");
                  },
                },
                {
                  key: "setProperty",
                  value: function (e, t, n) {
                    e[t] = n;
                  },
                },
                {
                  key: "setValue",
                  value: function (e, t) {
                    e.nodeValue = t;
                  },
                },
                {
                  key: "listen",
                  value: function (e, t, n) {
                    return "string" == typeof e
                      ? this.eventManager.addGlobalEventListener(e, t, xa(n))
                      : this.eventManager.addEventListener(e, t, xa(n));
                  },
                },
              ]),
              e
            );
          })(),
          Oa = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r, i, o) {
              var s;
              p(this, n), ((s = t.call(this, e)).component = i);
              var a = Ca(o + "-" + i.id, i.styles, []);
              return (
                r.addStyles(a),
                (s.contentAttr = "_ngcontent-%COMP%".replace(
                  Ta,
                  o + "-" + i.id,
                )),
                (s.hostAttr = "_nghost-%COMP%".replace(Ta, o + "-" + i.id)),
                s
              );
            }
            return (
              m(n, [
                {
                  key: "applyToHost",
                  value: function (e) {
                    a(v(n.prototype), "setAttribute", this).call(
                      this,
                      e,
                      this.hostAttr,
                      "",
                    );
                  },
                },
                {
                  key: "createElement",
                  value: function (e, t) {
                    var r = a(v(n.prototype), "createElement", this).call(
                      this,
                      e,
                      t,
                    );
                    return (
                      a(v(n.prototype), "setAttribute", this).call(
                        this,
                        r,
                        this.contentAttr,
                        "",
                      ),
                      r
                    );
                  },
                },
              ]),
              n
            );
          })(Pa),
          Ia = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r, i, o) {
              var s;
              p(this, n),
                ((s = t.call(this, e)).sharedStylesHost = r),
                (s.hostEl = i),
                (s.shadowRoot = i.attachShadow({ mode: "open" })),
                s.sharedStylesHost.addHost(s.shadowRoot);
              for (var a = Ca(o.id, o.styles, []), u = 0; u < a.length; u++) {
                var l = document.createElement("style");
                (l.textContent = a[u]), s.shadowRoot.appendChild(l);
              }
              return s;
            }
            return (
              m(n, [
                {
                  key: "nodeOrShadowRoot",
                  value: function (e) {
                    return e === this.hostEl ? this.shadowRoot : e;
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.sharedStylesHost.removeHost(this.shadowRoot);
                  },
                },
                {
                  key: "appendChild",
                  value: function (e, t) {
                    return a(v(n.prototype), "appendChild", this).call(
                      this,
                      this.nodeOrShadowRoot(e),
                      t,
                    );
                  },
                },
                {
                  key: "insertBefore",
                  value: function (e, t, r) {
                    return a(v(n.prototype), "insertBefore", this).call(
                      this,
                      this.nodeOrShadowRoot(e),
                      t,
                      r,
                    );
                  },
                },
                {
                  key: "removeChild",
                  value: function (e, t) {
                    return a(v(n.prototype), "removeChild", this).call(
                      this,
                      this.nodeOrShadowRoot(e),
                      t,
                    );
                  },
                },
                {
                  key: "parentNode",
                  value: function (e) {
                    return this.nodeOrShadowRoot(
                      a(v(n.prototype), "parentNode", this).call(
                        this,
                        this.nodeOrShadowRoot(e),
                      ),
                    );
                  },
                },
              ]),
              n
            );
          })(Pa),
          Da = (function () {
            var e = (function (e) {
              u(n, e);
              var t = c(n);
              function n(e) {
                return p(this, n), t.call(this, e);
              }
              return (
                m(n, [
                  {
                    key: "supports",
                    value: function (e) {
                      return !0;
                    },
                  },
                  {
                    key: "addEventListener",
                    value: function (e, t, n) {
                      var r = this;
                      return (
                        e.addEventListener(t, n, !1),
                        function () {
                          return r.removeEventListener(e, t, n);
                        }
                      );
                    },
                  },
                  {
                    key: "removeEventListener",
                    value: function (e, t, n) {
                      return e.removeEventListener(t, n);
                    },
                  },
                ]),
                n
              );
            })(ka);
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(Js));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          Na = ["alt", "control", "meta", "shift"],
          Ra = {
            "\b": "Backspace",
            "\t": "Tab",
            "\x7f": "Delete",
            "\x1b": "Escape",
            Del: "Delete",
            Esc: "Escape",
            Left: "ArrowLeft",
            Right: "ArrowRight",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Menu: "ContextMenu",
            Scroll: "ScrollLock",
            Win: "OS",
          },
          Fa = {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
            E: "5",
            F: "6",
            G: "7",
            H: "8",
            I: "9",
            J: "*",
            K: "+",
            M: "-",
            N: ".",
            O: "/",
            "`": "0",
            "\x90": "NumLock",
          },
          Ma = {
            alt: function (e) {
              return e.altKey;
            },
            control: function (e) {
              return e.ctrlKey;
            },
            meta: function (e) {
              return e.metaKey;
            },
            shift: function (e) {
              return e.shiftKey;
            },
          },
          ja = (function () {
            var e = (function (e) {
              u(n, e);
              var t = c(n);
              function n(e) {
                return p(this, n), t.call(this, e);
              }
              return (
                m(
                  n,
                  [
                    {
                      key: "supports",
                      value: function (e) {
                        return null != n.parseEventName(e);
                      },
                    },
                    {
                      key: "addEventListener",
                      value: function (e, t, r) {
                        var i = n.parseEventName(t),
                          o = n.eventCallback(
                            i.fullKey,
                            r,
                            this.manager.getZone(),
                          );
                        return this.manager
                          .getZone()
                          .runOutsideAngular(function () {
                            return $s().onAndCancel(e, i.domEventName, o);
                          });
                      },
                    },
                  ],
                  [
                    {
                      key: "parseEventName",
                      value: function (e) {
                        var t = e.toLowerCase().split("."),
                          r = t.shift();
                        if (
                          0 === t.length ||
                          ("keydown" !== r && "keyup" !== r)
                        )
                          return null;
                        var i = n._normalizeKey(t.pop()),
                          o = "";
                        if (
                          (Na.forEach(function (e) {
                            var n = t.indexOf(e);
                            n > -1 && (t.splice(n, 1), (o += e + "."));
                          }),
                          (o += i),
                          0 != t.length || 0 === i.length)
                        )
                          return null;
                        var s = {};
                        return (s.domEventName = r), (s.fullKey = o), s;
                      },
                    },
                    {
                      key: "getEventFullKey",
                      value: function (e) {
                        var t = "",
                          n = (function (e) {
                            var t = e.key;
                            if (null == t) {
                              if (null == (t = e.keyIdentifier))
                                return "Unidentified";
                              t.startsWith("U+") &&
                                ((t = String.fromCharCode(
                                  parseInt(t.substring(2), 16),
                                )),
                                3 === e.location &&
                                  Fa.hasOwnProperty(t) &&
                                  (t = Fa[t]));
                            }
                            return Ra[t] || t;
                          })(e);
                        return (
                          " " === (n = n.toLowerCase())
                            ? (n = "space")
                            : "." === n && (n = "dot"),
                          Na.forEach(function (r) {
                            r != n && (0, Ma[r])(e) && (t += r + ".");
                          }),
                          (t += n)
                        );
                      },
                    },
                    {
                      key: "eventCallback",
                      value: function (e, t, r) {
                        return function (i) {
                          n.getEventFullKey(i) === e &&
                            r.runGuarded(function () {
                              return t(i);
                            });
                        };
                      },
                    },
                    {
                      key: "_normalizeKey",
                      value: function (e) {
                        switch (e) {
                          case "esc":
                            return "escape";
                          default:
                            return e;
                        }
                      },
                    },
                  ],
                ),
                n
              );
            })(ka);
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(Js));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          Ha = Vs(Us, "browser", [
            { provide: cs, useValue: "browser" },
            {
              provide: ls,
              useValue: function () {
                fa.makeCurrent(), ya.init();
              },
              multi: !0,
            },
            {
              provide: Js,
              useFactory: function () {
                return (
                  (function (e) {
                    ut = e;
                  })(document),
                  document
                );
              },
              deps: [],
            },
          ]),
          Va = [
            [],
            { provide: _i, useValue: "root" },
            {
              provide: Zn,
              useFactory: function () {
                return new Zn();
              },
              deps: [],
            },
            { provide: ga, useClass: Da, multi: !0, deps: [Js, Ts, cs] },
            { provide: ga, useClass: ja, multi: !0, deps: [Js] },
            [],
            { provide: Aa, useClass: Aa, deps: [_a, wa, ss] },
            { provide: fo, useExisting: Aa },
            { provide: ba, useExisting: wa },
            { provide: wa, useClass: wa, deps: [Js] },
            { provide: Ns, useClass: Ns, deps: [Ts] },
            { provide: _a, useClass: _a, deps: [ga, Ts] },
            { provide: ha, useClass: ma, deps: [] },
            [],
          ],
          La = (function () {
            var e = (function () {
              function e(t) {
                if ((p(this, e), t))
                  throw new Error(
                    "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.",
                  );
              }
              return (
                m(e, null, [
                  {
                    key: "withServerTransition",
                    value: function (t) {
                      return {
                        ngModule: e,
                        providers: [
                          { provide: ss, useValue: t.appId },
                          { provide: va, useExisting: ss },
                          pa,
                        ],
                      };
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(e, 12));
              }),
              (e.ɵmod = $e({ type: e })),
              (e.ɵinj = ye({ providers: Va, imports: [ca, Ws] })),
              e
            );
          })();
        "undefined" != typeof window && window;
        var Ba = (function () {
            function e(t, n) {
              p(this, e), (this.predicate = t), (this.thisArg = n);
            }
            return (
              m(e, [
                {
                  key: "call",
                  value: function (e, t) {
                    return t.subscribe(new za(e, this.predicate, this.thisArg));
                  },
                },
              ]),
              e
            );
          })(),
          za = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r, i) {
              var o;
              return (
                p(this, n),
                ((o = t.call(this, e)).predicate = r),
                (o.thisArg = i),
                (o.count = 0),
                o
              );
            }
            return (
              m(n, [
                {
                  key: "_next",
                  value: function (e) {
                    var t;
                    try {
                      t = this.predicate.call(this.thisArg, e, this.count++);
                    } catch (n) {
                      return void this.destination.error(n);
                    }
                    t && this.destination.next(e);
                  },
                },
              ]),
              n
            );
          })(C),
          qa = function e() {
            p(this, e);
          },
          Ka = function e() {
            p(this, e);
          },
          Qa = (function () {
            function e(t) {
              var n = this;
              p(this, e),
                (this.normalizedNames = new Map()),
                (this.lazyUpdate = null),
                t
                  ? (this.lazyInit =
                      "string" == typeof t
                        ? function () {
                            (n.headers = new Map()),
                              t.split("\n").forEach(function (e) {
                                var t = e.indexOf(":");
                                if (t > 0) {
                                  var r = e.slice(0, t),
                                    i = r.toLowerCase(),
                                    o = e.slice(t + 1).trim();
                                  n.maybeSetNormalizedName(r, i),
                                    n.headers.has(i)
                                      ? n.headers.get(i).push(o)
                                      : n.headers.set(i, [o]);
                                }
                              });
                          }
                        : function () {
                            (n.headers = new Map()),
                              Object.keys(t).forEach(function (e) {
                                var r = t[e],
                                  i = e.toLowerCase();
                                "string" == typeof r && (r = [r]),
                                  r.length > 0 &&
                                    (n.headers.set(i, r),
                                    n.maybeSetNormalizedName(e, i));
                              });
                          })
                  : (this.headers = new Map());
            }
            return (
              m(e, [
                {
                  key: "has",
                  value: function (e) {
                    return this.init(), this.headers.has(e.toLowerCase());
                  },
                },
                {
                  key: "get",
                  value: function (e) {
                    this.init();
                    var t = this.headers.get(e.toLowerCase());
                    return t && t.length > 0 ? t[0] : null;
                  },
                },
                {
                  key: "keys",
                  value: function () {
                    return (
                      this.init(), Array.from(this.normalizedNames.values())
                    );
                  },
                },
                {
                  key: "getAll",
                  value: function (e) {
                    return (
                      this.init(), this.headers.get(e.toLowerCase()) || null
                    );
                  },
                },
                {
                  key: "append",
                  value: function (e, t) {
                    return this.clone({ name: e, value: t, op: "a" });
                  },
                },
                {
                  key: "set",
                  value: function (e, t) {
                    return this.clone({ name: e, value: t, op: "s" });
                  },
                },
                {
                  key: "delete",
                  value: function (e, t) {
                    return this.clone({ name: e, value: t, op: "d" });
                  },
                },
                {
                  key: "maybeSetNormalizedName",
                  value: function (e, t) {
                    this.normalizedNames.has(t) ||
                      this.normalizedNames.set(t, e);
                  },
                },
                {
                  key: "init",
                  value: function () {
                    var t = this;
                    this.lazyInit &&
                      (this.lazyInit instanceof e
                        ? this.copyFrom(this.lazyInit)
                        : this.lazyInit(),
                      (this.lazyInit = null),
                      this.lazyUpdate &&
                        (this.lazyUpdate.forEach(function (e) {
                          return t.applyUpdate(e);
                        }),
                        (this.lazyUpdate = null)));
                  },
                },
                {
                  key: "copyFrom",
                  value: function (e) {
                    var t = this;
                    e.init(),
                      Array.from(e.headers.keys()).forEach(function (n) {
                        t.headers.set(n, e.headers.get(n)),
                          t.normalizedNames.set(n, e.normalizedNames.get(n));
                      });
                  },
                },
                {
                  key: "clone",
                  value: function (t) {
                    var n = new e();
                    return (
                      (n.lazyInit =
                        this.lazyInit && this.lazyInit instanceof e
                          ? this.lazyInit
                          : this),
                      (n.lazyUpdate = (this.lazyUpdate || []).concat([t])),
                      n
                    );
                  },
                },
                {
                  key: "applyUpdate",
                  value: function (e) {
                    var t = e.name.toLowerCase();
                    switch (e.op) {
                      case "a":
                      case "s":
                        var r = e.value;
                        if (("string" == typeof r && (r = [r]), 0 === r.length))
                          return;
                        this.maybeSetNormalizedName(e.name, t);
                        var i =
                          ("a" === e.op ? this.headers.get(t) : void 0) || [];
                        i.push.apply(i, n(r)), this.headers.set(t, i);
                        break;
                      case "d":
                        var o = e.value;
                        if (o) {
                          var s = this.headers.get(t);
                          if (!s) return;
                          0 ===
                          (s = s.filter(function (e) {
                            return -1 === o.indexOf(e);
                          })).length
                            ? (this.headers.delete(t),
                              this.normalizedNames.delete(t))
                            : this.headers.set(t, s);
                        } else
                          this.headers.delete(t),
                            this.normalizedNames.delete(t);
                    }
                  },
                },
                {
                  key: "forEach",
                  value: function (e) {
                    var t = this;
                    this.init(),
                      Array.from(this.normalizedNames.keys()).forEach(
                        function (n) {
                          return e(t.normalizedNames.get(n), t.headers.get(n));
                        },
                      );
                  },
                },
              ]),
              e
            );
          })(),
          Ua = (function () {
            function e() {
              p(this, e);
            }
            return (
              m(e, [
                {
                  key: "encodeKey",
                  value: function (e) {
                    return Za(e);
                  },
                },
                {
                  key: "encodeValue",
                  value: function (e) {
                    return Za(e);
                  },
                },
                {
                  key: "decodeKey",
                  value: function (e) {
                    return decodeURIComponent(e);
                  },
                },
                {
                  key: "decodeValue",
                  value: function (e) {
                    return decodeURIComponent(e);
                  },
                },
              ]),
              e
            );
          })();
        function Za(e) {
          return encodeURIComponent(e)
            .replace(/%40/gi, "@")
            .replace(/%3A/gi, ":")
            .replace(/%24/gi, "$")
            .replace(/%2C/gi, ",")
            .replace(/%3B/gi, ";")
            .replace(/%2B/gi, "+")
            .replace(/%3D/gi, "=")
            .replace(/%3F/gi, "?")
            .replace(/%2F/gi, "/");
        }
        function Wa(e) {
          return "".concat(e);
        }
        var Ga = (function () {
            function t() {
              var n = this,
                r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              if (
                (p(this, t),
                (this.updates = null),
                (this.cloneFrom = null),
                (this.encoder = r.encoder || new Ua()),
                r.fromString)
              ) {
                if (r.fromObject)
                  throw new Error(
                    "Cannot specify both fromString and fromObject.",
                  );
                this.map = (function (t, n) {
                  var r = new Map();
                  return (
                    t.length > 0 &&
                      t
                        .replace(/^\?/, "")
                        .split("&")
                        .forEach(function (t) {
                          var i = t.indexOf("="),
                            o = e(
                              -1 == i
                                ? [n.decodeKey(t), ""]
                                : [
                                    n.decodeKey(t.slice(0, i)),
                                    n.decodeValue(t.slice(i + 1)),
                                  ],
                              2,
                            ),
                            s = o[0],
                            a = o[1],
                            u = r.get(s) || [];
                          u.push(a), r.set(s, u);
                        }),
                    r
                  );
                })(r.fromString, this.encoder);
              } else
                r.fromObject
                  ? ((this.map = new Map()),
                    Object.keys(r.fromObject).forEach(function (e) {
                      var t = r.fromObject[e];
                      n.map.set(e, Array.isArray(t) ? t : [t]);
                    }))
                  : (this.map = null);
            }
            return (
              m(t, [
                {
                  key: "has",
                  value: function (e) {
                    return this.init(), this.map.has(e);
                  },
                },
                {
                  key: "get",
                  value: function (e) {
                    this.init();
                    var t = this.map.get(e);
                    return t ? t[0] : null;
                  },
                },
                {
                  key: "getAll",
                  value: function (e) {
                    return this.init(), this.map.get(e) || null;
                  },
                },
                {
                  key: "keys",
                  value: function () {
                    return this.init(), Array.from(this.map.keys());
                  },
                },
                {
                  key: "append",
                  value: function (e, t) {
                    return this.clone({ param: e, value: t, op: "a" });
                  },
                },
                {
                  key: "appendAll",
                  value: function (e) {
                    var t = [];
                    return (
                      Object.keys(e).forEach(function (n) {
                        var r = e[n];
                        Array.isArray(r)
                          ? r.forEach(function (e) {
                              t.push({ param: n, value: e, op: "a" });
                            })
                          : t.push({ param: n, value: r, op: "a" });
                      }),
                      this.clone(t)
                    );
                  },
                },
                {
                  key: "set",
                  value: function (e, t) {
                    return this.clone({ param: e, value: t, op: "s" });
                  },
                },
                {
                  key: "delete",
                  value: function (e, t) {
                    return this.clone({ param: e, value: t, op: "d" });
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    var e = this;
                    return (
                      this.init(),
                      this.keys()
                        .map(function (t) {
                          var n = e.encoder.encodeKey(t);
                          return e.map
                            .get(t)
                            .map(function (t) {
                              return n + "=" + e.encoder.encodeValue(t);
                            })
                            .join("&");
                        })
                        .filter(function (e) {
                          return "" !== e;
                        })
                        .join("&")
                    );
                  },
                },
                {
                  key: "clone",
                  value: function (e) {
                    var n = new t({ encoder: this.encoder });
                    return (
                      (n.cloneFrom = this.cloneFrom || this),
                      (n.updates = (this.updates || []).concat(e)),
                      n
                    );
                  },
                },
                {
                  key: "init",
                  value: function () {
                    var e = this;
                    null === this.map && (this.map = new Map()),
                      null !== this.cloneFrom &&
                        (this.cloneFrom.init(),
                        this.cloneFrom.keys().forEach(function (t) {
                          return e.map.set(t, e.cloneFrom.map.get(t));
                        }),
                        this.updates.forEach(function (t) {
                          switch (t.op) {
                            case "a":
                            case "s":
                              var n =
                                ("a" === t.op ? e.map.get(t.param) : void 0) ||
                                [];
                              n.push(Wa(t.value)), e.map.set(t.param, n);
                              break;
                            case "d":
                              if (void 0 === t.value) {
                                e.map.delete(t.param);
                                break;
                              }
                              var r = e.map.get(t.param) || [],
                                i = r.indexOf(Wa(t.value));
                              -1 !== i && r.splice(i, 1),
                                r.length > 0
                                  ? e.map.set(t.param, r)
                                  : e.map.delete(t.param);
                          }
                        }),
                        (this.cloneFrom = this.updates = null));
                  },
                },
              ]),
              t
            );
          })(),
          $a = (function () {
            function e() {
              p(this, e), (this.map = new Map());
            }
            return (
              m(e, [
                {
                  key: "set",
                  value: function (e, t) {
                    return this.map.set(e, t), this;
                  },
                },
                {
                  key: "get",
                  value: function (e) {
                    return (
                      this.map.has(e) || this.map.set(e, e.defaultValue()),
                      this.map.get(e)
                    );
                  },
                },
                {
                  key: "delete",
                  value: function (e) {
                    return this.map.delete(e), this;
                  },
                },
                {
                  key: "keys",
                  value: function () {
                    return this.map.keys();
                  },
                },
              ]),
              e
            );
          })();
        function Ja(e) {
          return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer;
        }
        function Ya(e) {
          return "undefined" != typeof Blob && e instanceof Blob;
        }
        function Xa(e) {
          return "undefined" != typeof FormData && e instanceof FormData;
        }
        var eu = (function () {
            function e(t, n, r, i) {
              var o;
              if (
                (p(this, e),
                (this.url = n),
                (this.body = null),
                (this.reportProgress = !1),
                (this.withCredentials = !1),
                (this.responseType = "json"),
                (this.method = t.toUpperCase()),
                (function (e) {
                  switch (e) {
                    case "DELETE":
                    case "GET":
                    case "HEAD":
                    case "OPTIONS":
                    case "JSONP":
                      return !1;
                    default:
                      return !0;
                  }
                })(this.method) || i
                  ? ((this.body = void 0 !== r ? r : null), (o = i))
                  : (o = r),
                o &&
                  ((this.reportProgress = !!o.reportProgress),
                  (this.withCredentials = !!o.withCredentials),
                  o.responseType && (this.responseType = o.responseType),
                  o.headers && (this.headers = o.headers),
                  o.context && (this.context = o.context),
                  o.params && (this.params = o.params)),
                this.headers || (this.headers = new Qa()),
                this.context || (this.context = new $a()),
                this.params)
              ) {
                var s = this.params.toString();
                if (0 === s.length) this.urlWithParams = n;
                else {
                  var a = n.indexOf("?");
                  this.urlWithParams =
                    n + (-1 === a ? "?" : a < n.length - 1 ? "&" : "") + s;
                }
              } else (this.params = new Ga()), (this.urlWithParams = n);
            }
            return (
              m(e, [
                {
                  key: "serializeBody",
                  value: function () {
                    return null === this.body
                      ? null
                      : Ja(this.body) ||
                        Ya(this.body) ||
                        Xa(this.body) ||
                        "string" == typeof this.body
                      ? this.body
                      : this.body instanceof Ga
                      ? this.body.toString()
                      : "object" == typeof this.body ||
                        "boolean" == typeof this.body ||
                        Array.isArray(this.body)
                      ? JSON.stringify(this.body)
                      : this.body.toString();
                  },
                },
                {
                  key: "detectContentTypeHeader",
                  value: function () {
                    return null === this.body || Xa(this.body)
                      ? null
                      : Ya(this.body)
                      ? this.body.type || null
                      : Ja(this.body)
                      ? null
                      : "string" == typeof this.body
                      ? "text/plain"
                      : this.body instanceof Ga
                      ? "application/x-www-form-urlencoded;charset=UTF-8"
                      : "object" == typeof this.body ||
                        "number" == typeof this.body ||
                        "boolean" == typeof this.body
                      ? "application/json"
                      : null;
                  },
                },
                {
                  key: "clone",
                  value: function () {
                    var t,
                      n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      r = n.method || this.method,
                      i = n.url || this.url,
                      o = n.responseType || this.responseType,
                      s = void 0 !== n.body ? n.body : this.body,
                      a =
                        void 0 !== n.withCredentials
                          ? n.withCredentials
                          : this.withCredentials,
                      u =
                        void 0 !== n.reportProgress
                          ? n.reportProgress
                          : this.reportProgress,
                      l = n.headers || this.headers,
                      c = n.params || this.params,
                      h =
                        null !== (t = n.context) && void 0 !== t
                          ? t
                          : this.context;
                    return (
                      void 0 !== n.setHeaders &&
                        (l = Object.keys(n.setHeaders).reduce(function (e, t) {
                          return e.set(t, n.setHeaders[t]);
                        }, l)),
                      n.setParams &&
                        (c = Object.keys(n.setParams).reduce(function (e, t) {
                          return e.set(t, n.setParams[t]);
                        }, c)),
                      new e(r, i, s, {
                        params: c,
                        headers: l,
                        context: h,
                        reportProgress: u,
                        responseType: o,
                        withCredentials: a,
                      })
                    );
                  },
                },
              ]),
              e
            );
          })(),
          tu = (function (e) {
            return (
              (e[(e.Sent = 0)] = "Sent"),
              (e[(e.UploadProgress = 1)] = "UploadProgress"),
              (e[(e.ResponseHeader = 2)] = "ResponseHeader"),
              (e[(e.DownloadProgress = 3)] = "DownloadProgress"),
              (e[(e.Response = 4)] = "Response"),
              (e[(e.User = 5)] = "User"),
              e
            );
          })({}),
          nu = function e(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 200,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "OK";
            p(this, e),
              (this.headers = t.headers || new Qa()),
              (this.status = void 0 !== t.status ? t.status : n),
              (this.statusText = t.statusText || r),
              (this.url = t.url || null),
              (this.ok = this.status >= 200 && this.status < 300);
          },
          ru = (function (e) {
            u(n, e);
            var t = c(n);
            function n() {
              var e,
                r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return (
                p(this, n), ((e = t.call(this, r)).type = tu.ResponseHeader), e
              );
            }
            return (
              m(n, [
                {
                  key: "clone",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return new n({
                      headers: e.headers || this.headers,
                      status: void 0 !== e.status ? e.status : this.status,
                      statusText: e.statusText || this.statusText,
                      url: e.url || this.url || void 0,
                    });
                  },
                },
              ]),
              n
            );
          })(nu),
          iu = (function (e) {
            u(n, e);
            var t = c(n);
            function n() {
              var e,
                r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return (
                p(this, n),
                ((e = t.call(this, r)).type = tu.Response),
                (e.body = void 0 !== r.body ? r.body : null),
                e
              );
            }
            return (
              m(n, [
                {
                  key: "clone",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return new n({
                      body: void 0 !== e.body ? e.body : this.body,
                      headers: e.headers || this.headers,
                      status: void 0 !== e.status ? e.status : this.status,
                      statusText: e.statusText || this.statusText,
                      url: e.url || this.url || void 0,
                    });
                  },
                },
              ]),
              n
            );
          })(nu),
          ou = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e) {
              var r;
              return (
                p(this, n),
                ((r = t.call(this, e, 0, "Unknown Error")).name =
                  "HttpErrorResponse"),
                (r.ok = !1),
                (r.message =
                  r.status >= 200 && r.status < 300
                    ? "Http failure during parsing for ".concat(
                        e.url || "(unknown url)",
                      )
                    : "Http failure response for "
                        .concat(e.url || "(unknown url)", ": ")
                        .concat(e.status, " ")
                        .concat(e.statusText)),
                (r.error = e.error || null),
                r
              );
            }
            return n;
          })(nu);
        function su(e, t) {
          return {
            body: t,
            headers: e.headers,
            context: e.context,
            observe: e.observe,
            params: e.params,
            reportProgress: e.reportProgress,
            responseType: e.responseType,
            withCredentials: e.withCredentials,
          };
        }
        var au = (function () {
            var e = (function () {
              function e(t) {
                p(this, e), (this.handler = t);
              }
              return (
                m(e, [
                  {
                    key: "request",
                    value: function (e, t) {
                      var n,
                        r,
                        i,
                        o = this,
                        s =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                      e instanceof eu
                        ? (n = e)
                        : ((r =
                            s.headers instanceof Qa
                              ? s.headers
                              : new Qa(s.headers)),
                          s.params &&
                            (i =
                              s.params instanceof Ga
                                ? s.params
                                : new Ga({ fromObject: s.params })),
                          (n = new eu(e, t, void 0 !== s.body ? s.body : null, {
                            headers: r,
                            context: s.context,
                            params: i,
                            reportProgress: s.reportProgress,
                            responseType: s.responseType || "json",
                            withCredentials: s.withCredentials,
                          })));
                      var a = (function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        var r = t[t.length - 1];
                        return H(r) ? (t.pop(), Q(t, r)) : J(t);
                      })(n).pipe(
                        W(
                          function (e) {
                            return o.handler.handle(e);
                          },
                          void 0,
                          1,
                        ),
                      );
                      if (e instanceof eu || "events" === s.observe) return a;
                      var u,
                        l = a.pipe(
                          ((u = function (e) {
                            return e instanceof iu;
                          }),
                          function (e) {
                            return e.lift(new Ba(u, void 0));
                          }),
                        );
                      switch (s.observe || "body") {
                        case "body":
                          switch (n.responseType) {
                            case "arraybuffer":
                              return l.pipe(
                                V(function (e) {
                                  if (
                                    null !== e.body &&
                                    !(e.body instanceof ArrayBuffer)
                                  )
                                    throw new Error(
                                      "Response is not an ArrayBuffer.",
                                    );
                                  return e.body;
                                }),
                              );
                            case "blob":
                              return l.pipe(
                                V(function (e) {
                                  if (
                                    null !== e.body &&
                                    !(e.body instanceof Blob)
                                  )
                                    throw new Error("Response is not a Blob.");
                                  return e.body;
                                }),
                              );
                            case "text":
                              return l.pipe(
                                V(function (e) {
                                  if (
                                    null !== e.body &&
                                    "string" != typeof e.body
                                  )
                                    throw new Error(
                                      "Response is not a string.",
                                    );
                                  return e.body;
                                }),
                              );
                            case "json":
                            default:
                              return l.pipe(
                                V(function (e) {
                                  return e.body;
                                }),
                              );
                          }
                        case "response":
                          return l;
                        default:
                          throw new Error(
                            "Unreachable: unhandled observe type ".concat(
                              s.observe,
                              "}",
                            ),
                          );
                      }
                    },
                  },
                  {
                    key: "delete",
                    value: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return this.request("DELETE", e, t);
                    },
                  },
                  {
                    key: "get",
                    value: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return this.request("GET", e, t);
                    },
                  },
                  {
                    key: "head",
                    value: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return this.request("HEAD", e, t);
                    },
                  },
                  {
                    key: "jsonp",
                    value: function (e, t) {
                      return this.request("JSONP", e, {
                        params: new Ga().append(t, "JSONP_CALLBACK"),
                        observe: "body",
                        responseType: "json",
                      });
                    },
                  },
                  {
                    key: "options",
                    value: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return this.request("OPTIONS", e, t);
                    },
                  },
                  {
                    key: "patch",
                    value: function (e, t) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                      return this.request("PATCH", e, su(n, t));
                    },
                  },
                  {
                    key: "post",
                    value: function (e, t) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                      return this.request("POST", e, su(n, t));
                    },
                  },
                  {
                    key: "put",
                    value: function (e, t) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                      return this.request("PUT", e, su(n, t));
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(qa));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          uu = (function () {
            function e(t, n) {
              p(this, e), (this.next = t), (this.interceptor = n);
            }
            return (
              m(e, [
                {
                  key: "handle",
                  value: function (e) {
                    return this.interceptor.intercept(e, this.next);
                  },
                },
              ]),
              e
            );
          })(),
          lu = new Cn("HTTP_INTERCEPTORS"),
          cu = (function () {
            var e = (function () {
              function e() {
                p(this, e);
              }
              return (
                m(e, [
                  {
                    key: "intercept",
                    value: function (e, t) {
                      return t.handle(e);
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          hu = /^\)\]\}',?\n/,
          fu = (function () {
            var e = (function () {
              function e(t) {
                p(this, e), (this.xhrFactory = t);
              }
              return (
                m(e, [
                  {
                    key: "handle",
                    value: function (e) {
                      var t = this;
                      if ("JSONP" === e.method)
                        throw new Error(
                          "Attempted to construct Jsonp request without HttpClientJsonpModule installed.",
                        );
                      return new I(function (n) {
                        var r = t.xhrFactory.build();
                        if (
                          (r.open(e.method, e.urlWithParams),
                          e.withCredentials && (r.withCredentials = !0),
                          e.headers.forEach(function (e, t) {
                            return r.setRequestHeader(e, t.join(","));
                          }),
                          e.headers.has("Accept") ||
                            r.setRequestHeader(
                              "Accept",
                              "application/json, text/plain, */*",
                            ),
                          !e.headers.has("Content-Type"))
                        ) {
                          var i = e.detectContentTypeHeader();
                          null !== i && r.setRequestHeader("Content-Type", i);
                        }
                        if (e.responseType) {
                          var o = e.responseType.toLowerCase();
                          r.responseType = "json" !== o ? o : "text";
                        }
                        var s = e.serializeBody(),
                          a = null,
                          u = function () {
                            if (null !== a) return a;
                            var t = 1223 === r.status ? 204 : r.status,
                              n = r.statusText || "OK",
                              i = new Qa(r.getAllResponseHeaders()),
                              o =
                                (function (e) {
                                  return "responseURL" in e && e.responseURL
                                    ? e.responseURL
                                    : /^X-Request-URL:/m.test(
                                        e.getAllResponseHeaders(),
                                      )
                                    ? e.getResponseHeader("X-Request-URL")
                                    : null;
                                })(r) || e.url;
                            return (a = new ru({
                              headers: i,
                              status: t,
                              statusText: n,
                              url: o,
                            }));
                          },
                          l = function () {
                            var t = u(),
                              i = t.headers,
                              o = t.status,
                              s = t.statusText,
                              a = t.url,
                              l = null;
                            204 !== o &&
                              (l =
                                void 0 === r.response
                                  ? r.responseText
                                  : r.response),
                              0 === o && (o = l ? 200 : 0);
                            var c = o >= 200 && o < 300;
                            if (
                              "json" === e.responseType &&
                              "string" == typeof l
                            ) {
                              var h = l;
                              l = l.replace(hu, "");
                              try {
                                l = "" !== l ? JSON.parse(l) : null;
                              } catch (f) {
                                (l = h),
                                  c && ((c = !1), (l = { error: f, text: l }));
                              }
                            }
                            c
                              ? (n.next(
                                  new iu({
                                    body: l,
                                    headers: i,
                                    status: o,
                                    statusText: s,
                                    url: a || void 0,
                                  }),
                                ),
                                n.complete())
                              : n.error(
                                  new ou({
                                    error: l,
                                    headers: i,
                                    status: o,
                                    statusText: s,
                                    url: a || void 0,
                                  }),
                                );
                          },
                          c = function (e) {
                            var t = u().url,
                              i = new ou({
                                error: e,
                                status: r.status || 0,
                                statusText: r.statusText || "Unknown Error",
                                url: t || void 0,
                              });
                            n.error(i);
                          },
                          h = !1,
                          f = function (t) {
                            h || (n.next(u()), (h = !0));
                            var i = {
                              type: tu.DownloadProgress,
                              loaded: t.loaded,
                            };
                            t.lengthComputable && (i.total = t.total),
                              "text" === e.responseType &&
                                r.responseText &&
                                (i.partialText = r.responseText),
                              n.next(i);
                          },
                          d = function (e) {
                            var t = {
                              type: tu.UploadProgress,
                              loaded: e.loaded,
                            };
                            e.lengthComputable && (t.total = e.total),
                              n.next(t);
                          };
                        return (
                          r.addEventListener("load", l),
                          r.addEventListener("error", c),
                          r.addEventListener("timeout", c),
                          r.addEventListener("abort", c),
                          e.reportProgress &&
                            (r.addEventListener("progress", f),
                            null !== s &&
                              r.upload &&
                              r.upload.addEventListener("progress", d)),
                          r.send(s),
                          n.next({ type: tu.Sent }),
                          function () {
                            r.removeEventListener("error", c),
                              r.removeEventListener("abort", c),
                              r.removeEventListener("load", l),
                              r.removeEventListener("timeout", c),
                              e.reportProgress &&
                                (r.removeEventListener("progress", f),
                                null !== s &&
                                  r.upload &&
                                  r.upload.removeEventListener("progress", d)),
                              r.readyState !== r.DONE && r.abort();
                          }
                        );
                      });
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(ha));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          du = new Cn("XSRF_COOKIE_NAME"),
          vu = new Cn("XSRF_HEADER_NAME"),
          pu = function e() {
            p(this, e);
          },
          yu = (function () {
            var e = (function () {
              function e(t, n, r) {
                p(this, e),
                  (this.doc = t),
                  (this.platform = n),
                  (this.cookieName = r),
                  (this.lastCookieString = ""),
                  (this.lastToken = null),
                  (this.parseCount = 0);
              }
              return (
                m(e, [
                  {
                    key: "getToken",
                    value: function () {
                      if ("server" === this.platform) return null;
                      var e = this.doc.cookie || "";
                      return (
                        e !== this.lastCookieString &&
                          (this.parseCount++,
                          (this.lastToken = ta(e, this.cookieName)),
                          (this.lastCookieString = e)),
                        this.lastToken
                      );
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(Js), Mn(cs), Mn(du));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          mu = (function () {
            var e = (function () {
              function e(t, n) {
                p(this, e), (this.tokenService = t), (this.headerName = n);
              }
              return (
                m(e, [
                  {
                    key: "intercept",
                    value: function (e, t) {
                      var n = e.url.toLowerCase();
                      if (
                        "GET" === e.method ||
                        "HEAD" === e.method ||
                        n.startsWith("http://") ||
                        n.startsWith("https://")
                      )
                        return t.handle(e);
                      var r = this.tokenService.getToken();
                      return (
                        null === r ||
                          e.headers.has(this.headerName) ||
                          (e = e.clone({
                            headers: e.headers.set(this.headerName, r),
                          })),
                        t.handle(e)
                      );
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(pu), Mn(vu));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          gu = (function () {
            var e = (function () {
              function e(t, n) {
                p(this, e),
                  (this.backend = t),
                  (this.injector = n),
                  (this.chain = null);
              }
              return (
                m(e, [
                  {
                    key: "handle",
                    value: function (e) {
                      if (null === this.chain) {
                        var t = this.injector.get(lu, []);
                        this.chain = t.reduceRight(function (e, t) {
                          return new uu(e, t);
                        }, this.backend);
                      }
                      return this.chain.handle(e);
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(Ka), Mn(Oi));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          _u = (function () {
            var e = (function () {
              function e() {
                p(this, e);
              }
              return (
                m(e, null, [
                  {
                    key: "disable",
                    value: function () {
                      return {
                        ngModule: e,
                        providers: [{ provide: mu, useClass: cu }],
                      };
                    },
                  },
                  {
                    key: "withOptions",
                    value: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return {
                        ngModule: e,
                        providers: [
                          t.cookieName
                            ? { provide: du, useValue: t.cookieName }
                            : [],
                          t.headerName
                            ? { provide: vu, useValue: t.headerName }
                            : [],
                        ],
                      };
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵmod = $e({ type: e })),
              (e.ɵinj = ye({
                providers: [
                  mu,
                  { provide: lu, useExisting: mu, multi: !0 },
                  { provide: pu, useClass: yu },
                  { provide: du, useValue: "XSRF-TOKEN" },
                  { provide: vu, useValue: "X-XSRF-TOKEN" },
                ],
              })),
              e
            );
          })(),
          ku = (function () {
            var e = function e() {
              p(this, e);
            };
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵmod = $e({ type: e })),
              (e.ɵinj = ye({
                providers: [
                  au,
                  { provide: qa, useClass: gu },
                  fu,
                  { provide: Ka, useExisting: fu },
                ],
                imports: [
                  [
                    _u.withOptions({
                      cookieName: "XSRF-TOKEN",
                      headerName: "X-XSRF-TOKEN",
                    }),
                  ],
                ],
              })),
              e
            );
          })();
        function bu(e, t, n, r, i, o, s) {
          try {
            var a = e[o](s),
              u = a.value;
          } catch (l) {
            return void n(l);
          }
          a.done ? t(u) : Promise.resolve(u).then(r, i);
        }
        function wu(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, i) {
              var o = e.apply(t, n);
              function s(e) {
                bu(o, r, i, s, a, "next", e);
              }
              function a(e) {
                bu(o, r, i, s, a, "throw", e);
              }
              s(void 0);
            });
          };
        }
        var Eu = function e() {
          p(this, e);
        };
        function Su(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          return { type: 4, styles: t, timings: e };
        }
        function Tu(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          return { type: 2, steps: e, options: t };
        }
        function Cu(e) {
          return { type: 6, styles: e, offset: null };
        }
        function xu(e, t, n) {
          return { type: 0, name: e, styles: t, options: n };
        }
        function Au(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          return { type: 1, expr: e, animation: t, options: n };
        }
        function Pu(e) {
          Promise.resolve(null).then(e);
        }
        var Ou = (function () {
            function e() {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
              p(this, e),
                (this._onDoneFns = []),
                (this._onStartFns = []),
                (this._onDestroyFns = []),
                (this._started = !1),
                (this._destroyed = !1),
                (this._finished = !1),
                (this._position = 0),
                (this.parentPlayer = null),
                (this.totalTime = t + n);
            }
            return (
              m(e, [
                {
                  key: "_onFinish",
                  value: function () {
                    this._finished ||
                      ((this._finished = !0),
                      this._onDoneFns.forEach(function (e) {
                        return e();
                      }),
                      (this._onDoneFns = []));
                  },
                },
                {
                  key: "onStart",
                  value: function (e) {
                    this._onStartFns.push(e);
                  },
                },
                {
                  key: "onDone",
                  value: function (e) {
                    this._onDoneFns.push(e);
                  },
                },
                {
                  key: "onDestroy",
                  value: function (e) {
                    this._onDestroyFns.push(e);
                  },
                },
                {
                  key: "hasStarted",
                  value: function () {
                    return this._started;
                  },
                },
                { key: "init", value: function () {} },
                {
                  key: "play",
                  value: function () {
                    this.hasStarted() ||
                      (this._onStart(), this.triggerMicrotask()),
                      (this._started = !0);
                  },
                },
                {
                  key: "triggerMicrotask",
                  value: function () {
                    var e = this;
                    Pu(function () {
                      return e._onFinish();
                    });
                  },
                },
                {
                  key: "_onStart",
                  value: function () {
                    this._onStartFns.forEach(function (e) {
                      return e();
                    }),
                      (this._onStartFns = []);
                  },
                },
                { key: "pause", value: function () {} },
                { key: "restart", value: function () {} },
                {
                  key: "finish",
                  value: function () {
                    this._onFinish();
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this._destroyed ||
                      ((this._destroyed = !0),
                      this.hasStarted() || this._onStart(),
                      this.finish(),
                      this._onDestroyFns.forEach(function (e) {
                        return e();
                      }),
                      (this._onDestroyFns = []));
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    this._started = !1;
                  },
                },
                {
                  key: "setPosition",
                  value: function (e) {
                    this._position = this.totalTime ? e * this.totalTime : 1;
                  },
                },
                {
                  key: "getPosition",
                  value: function () {
                    return this.totalTime ? this._position / this.totalTime : 1;
                  },
                },
                {
                  key: "triggerCallback",
                  value: function (e) {
                    var t = "start" == e ? this._onStartFns : this._onDoneFns;
                    t.forEach(function (e) {
                      return e();
                    }),
                      (t.length = 0);
                  },
                },
              ]),
              e
            );
          })(),
          Iu = (function () {
            function e(t) {
              var n = this;
              p(this, e),
                (this._onDoneFns = []),
                (this._onStartFns = []),
                (this._finished = !1),
                (this._started = !1),
                (this._destroyed = !1),
                (this._onDestroyFns = []),
                (this.parentPlayer = null),
                (this.totalTime = 0),
                (this.players = t);
              var r = 0,
                i = 0,
                o = 0,
                s = this.players.length;
              0 == s
                ? Pu(function () {
                    return n._onFinish();
                  })
                : this.players.forEach(function (e) {
                    e.onDone(function () {
                      ++r == s && n._onFinish();
                    }),
                      e.onDestroy(function () {
                        ++i == s && n._onDestroy();
                      }),
                      e.onStart(function () {
                        ++o == s && n._onStart();
                      });
                  }),
                (this.totalTime = this.players.reduce(function (e, t) {
                  return Math.max(e, t.totalTime);
                }, 0));
            }
            return (
              m(e, [
                {
                  key: "_onFinish",
                  value: function () {
                    this._finished ||
                      ((this._finished = !0),
                      this._onDoneFns.forEach(function (e) {
                        return e();
                      }),
                      (this._onDoneFns = []));
                  },
                },
                {
                  key: "init",
                  value: function () {
                    this.players.forEach(function (e) {
                      return e.init();
                    });
                  },
                },
                {
                  key: "onStart",
                  value: function (e) {
                    this._onStartFns.push(e);
                  },
                },
                {
                  key: "_onStart",
                  value: function () {
                    this.hasStarted() ||
                      ((this._started = !0),
                      this._onStartFns.forEach(function (e) {
                        return e();
                      }),
                      (this._onStartFns = []));
                  },
                },
                {
                  key: "onDone",
                  value: function (e) {
                    this._onDoneFns.push(e);
                  },
                },
                {
                  key: "onDestroy",
                  value: function (e) {
                    this._onDestroyFns.push(e);
                  },
                },
                {
                  key: "hasStarted",
                  value: function () {
                    return this._started;
                  },
                },
                {
                  key: "play",
                  value: function () {
                    this.parentPlayer || this.init(),
                      this._onStart(),
                      this.players.forEach(function (e) {
                        return e.play();
                      });
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    this.players.forEach(function (e) {
                      return e.pause();
                    });
                  },
                },
                {
                  key: "restart",
                  value: function () {
                    this.players.forEach(function (e) {
                      return e.restart();
                    });
                  },
                },
                {
                  key: "finish",
                  value: function () {
                    this._onFinish(),
                      this.players.forEach(function (e) {
                        return e.finish();
                      });
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this._onDestroy();
                  },
                },
                {
                  key: "_onDestroy",
                  value: function () {
                    this._destroyed ||
                      ((this._destroyed = !0),
                      this._onFinish(),
                      this.players.forEach(function (e) {
                        return e.destroy();
                      }),
                      this._onDestroyFns.forEach(function (e) {
                        return e();
                      }),
                      (this._onDestroyFns = []));
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    this.players.forEach(function (e) {
                      return e.reset();
                    }),
                      (this._destroyed = !1),
                      (this._finished = !1),
                      (this._started = !1);
                  },
                },
                {
                  key: "setPosition",
                  value: function (e) {
                    var t = e * this.totalTime;
                    this.players.forEach(function (e) {
                      var n = e.totalTime ? Math.min(1, t / e.totalTime) : 1;
                      e.setPosition(n);
                    });
                  },
                },
                {
                  key: "getPosition",
                  value: function () {
                    var e = this.players.reduce(function (e, t) {
                      return null === e || t.totalTime > e.totalTime ? t : e;
                    }, null);
                    return null != e ? e.getPosition() : 0;
                  },
                },
                {
                  key: "beforeDestroy",
                  value: function () {
                    this.players.forEach(function (e) {
                      e.beforeDestroy && e.beforeDestroy();
                    });
                  },
                },
                {
                  key: "triggerCallback",
                  value: function (e) {
                    var t = "start" == e ? this._onStartFns : this._onDoneFns;
                    t.forEach(function (e) {
                      return e();
                    }),
                      (t.length = 0);
                  },
                },
              ]),
              e
            );
          })(),
          Du = [
            { id: "en.ahmedali", name: "Ahmed Ali" },
            { id: "en.ahmedraza", name: "Ahmed Raza Khan" },
            { id: "en.arberry", name: "Arberry" },
            { id: "en.asad", name: "Asad" },
            { id: "en.daryabadi", name: "Daryabadi" },
            { id: "en.hilali", name: "Hilali & Khan" },
            { id: "en.pickthall", name: "Pickthall" },
            { id: "en.qaribullah", name: "Qaribullah & Darwish" },
            { id: "en.sahih", name: "Saheeh International" },
            { id: "en.sarwar", name: "Sarwar" },
            { id: "en.yusufali", name: "Yusuf Ali" },
          ],
          Nu = (function () {
            var e = (function () {
              function e(t) {
                p(this, e),
                  (this.httpClient = t),
                  (this.baseUrl = "https://api.alquran.cloud/v1/ayah");
              }
              return (
                m(e, [
                  {
                    key: "getVerse",
                    value: function (e) {
                      var t = this;
                      return wu(
                        regeneratorRuntime.mark(function n() {
                          return regeneratorRuntime.wrap(function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return n.abrupt(
                                    "return",
                                    t.getVerseFromUrl(
                                      "".concat(t.baseUrl, "/").concat(e),
                                    ),
                                  );
                                case 1:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                        }),
                      )();
                    },
                  },
                  {
                    key: "getVerseTranslation",
                    value: function (e, t) {
                      var n = this;
                      return wu(
                        regeneratorRuntime.mark(function r() {
                          return regeneratorRuntime.wrap(function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return r.abrupt(
                                    "return",
                                    n.getVerseFromUrl(
                                      ""
                                        .concat(n.baseUrl, "/")
                                        .concat(e, "/")
                                        .concat(t.id),
                                    ),
                                  );
                                case 1:
                                case "end":
                                  return r.stop();
                              }
                          }, r);
                        }),
                      )();
                    },
                  },
                  {
                    key: "getVerseFromUrl",
                    value: function (e) {
                      var t = this;
                      return wu(
                        regeneratorRuntime.mark(function n() {
                          var r;
                          return regeneratorRuntime.wrap(function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (
                                    (r = {
                                      code: 0,
                                      status: "",
                                      data: {
                                        numberInSurah: 0,
                                        text: "",
                                        surah: { number: 0 },
                                      },
                                    }),
                                    (n.next = 3),
                                    t.httpClient
                                      .get(e)
                                      .toPromise()
                                      .then(function (e) {
                                        return (r = e);
                                      })
                                  );
                                case 3:
                                  return n.abrupt("return", r);
                                case 4:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                        }),
                      )();
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(au));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" })),
              e
            );
          })(),
          Ru = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e) {
              var r;
              return p(this, n), ((r = t.call(this))._value = e), r;
            }
            return (
              m(n, [
                {
                  key: "value",
                  get: function () {
                    return this.getValue();
                  },
                },
                {
                  key: "_subscribe",
                  value: function (e) {
                    var t = a(v(n.prototype), "_subscribe", this).call(this, e);
                    return t && !t.closed && e.next(this._value), t;
                  },
                },
                {
                  key: "getValue",
                  value: function () {
                    if (this.hasError) throw this.thrownError;
                    if (this.closed) throw new N();
                    return this._value;
                  },
                },
                {
                  key: "next",
                  value: function (e) {
                    a(v(n.prototype), "next", this).call(
                      this,
                      (this._value = e),
                    );
                  },
                },
              ]),
              n
            );
          })(M),
          Fu = (function () {
            function e(t, n) {
              p(this, e), (this.compare = t), (this.keySelector = n);
            }
            return (
              m(e, [
                {
                  key: "call",
                  value: function (e, t) {
                    return t.subscribe(
                      new Mu(e, this.compare, this.keySelector),
                    );
                  },
                },
              ]),
              e
            );
          })(),
          Mu = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r, i) {
              var o;
              return (
                p(this, n),
                ((o = t.call(this, e)).keySelector = i),
                (o.hasKey = !1),
                "function" == typeof r && (o.compare = r),
                o
              );
            }
            return (
              m(n, [
                {
                  key: "compare",
                  value: function (e, t) {
                    return e === t;
                  },
                },
                {
                  key: "_next",
                  value: function (e) {
                    var t;
                    try {
                      var n = this.keySelector;
                      t = n ? n(e) : e;
                    } catch (i) {
                      return this.destination.error(i);
                    }
                    var r = !1;
                    if (this.hasKey)
                      try {
                        r = (0, this.compare)(this.key, t);
                      } catch (i) {
                        return this.destination.error(i);
                      }
                    else this.hasKey = !0;
                    r || ((this.key = t), this.destination.next(e));
                  },
                },
              ]),
              n
            );
          })(C),
          ju = new Cn("DARK_MODE_OPTIONS"),
          Hu = {
            darkModeClass: "dark-mode",
            lightModeClass: "light-mode",
            preloadingClass: "dark-mode-preloading",
            storageKey: "dark-mode",
            element: document.body,
          },
          Vu = (function () {
            var e = (function () {
              function e() {
                p(this, e);
              }
              return (
                m(e, [
                  {
                    key: "matchMedia",
                    value: function (e) {
                      return window.matchMedia(e);
                    },
                  },
                  {
                    key: "prefersDarkMode",
                    value: function () {
                      return this.matchMedia("(prefers-color-scheme: dark)")
                        .matches;
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵprov = pe({
                factory: function () {
                  return new e();
                },
                token: e,
                providedIn: "root",
              })),
              e
            );
          })(),
          Lu = (function () {
            var e = (function () {
              function e(t, n, r) {
                p(this, e),
                  (this.rendererFactory = t),
                  (this.mediaQueryService = n),
                  (this.providedOptions = r),
                  (this.options = Object.assign(
                    Object.assign({}, Hu),
                    this.providedOptions || {},
                  )),
                  (this.renderer = this.rendererFactory.createRenderer(
                    null,
                    null,
                  )),
                  (this.darkModeSubject$ = new Ru(
                    this.getInitialDarkModeValue(),
                  )),
                  this.darkModeSubject$.getValue()
                    ? this.enable()
                    : this.disable(),
                  this.removePreloadingClass();
              }
              return (
                m(e, [
                  {
                    key: "darkMode$",
                    get: function () {
                      return this.darkModeSubject$
                        .asObservable()
                        .pipe(function (e) {
                          return e.lift(new Fu(void 0, void 0));
                        });
                    },
                  },
                  {
                    key: "toggle",
                    value: function () {
                      this.darkModeSubject$.getValue()
                        ? this.disable()
                        : this.enable();
                    },
                  },
                  {
                    key: "enable",
                    value: function () {
                      var e = this.options,
                        t = e.element,
                        n = e.darkModeClass,
                        r = e.lightModeClass;
                      this.renderer.removeClass(t, r),
                        this.renderer.addClass(t, n),
                        this.saveDarkModeToStorage(!0),
                        this.darkModeSubject$.next(!0);
                    },
                  },
                  {
                    key: "disable",
                    value: function () {
                      var e = this.options,
                        t = e.element,
                        n = e.darkModeClass,
                        r = e.lightModeClass;
                      this.renderer.removeClass(t, n),
                        this.renderer.addClass(t, r),
                        this.saveDarkModeToStorage(!1),
                        this.darkModeSubject$.next(!1);
                    },
                  },
                  {
                    key: "getInitialDarkModeValue",
                    value: function () {
                      var e = this.getDarkModeFromStorage();
                      return null == e
                        ? this.mediaQueryService.prefersDarkMode()
                        : e;
                    },
                  },
                  {
                    key: "saveDarkModeToStorage",
                    value: function (e) {
                      localStorage.setItem(
                        this.options.storageKey,
                        JSON.stringify({ darkMode: e }),
                      );
                    },
                  },
                  {
                    key: "getDarkModeFromStorage",
                    value: function () {
                      var e,
                        t = localStorage.getItem(this.options.storageKey);
                      if (t)
                        try {
                          return null === (e = JSON.parse(t)) || void 0 === e
                            ? void 0
                            : e.darkMode;
                        } catch (n) {
                          console.error(
                            "Invalid darkMode localStorage item:",
                            t,
                            "falling back to color scheme media query",
                          );
                        }
                      return null;
                    },
                  },
                  {
                    key: "removePreloadingClass",
                    value: function () {
                      var e = this;
                      setTimeout(function () {
                        e.renderer.removeClass(
                          e.options.element,
                          e.options.preloadingClass,
                        );
                      });
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(fo), Mn(Vu), Mn(ju, 8));
              }),
              (e.ɵprov = pe({
                factory: function () {
                  return new e(Mn(fo), Mn(Vu), Mn(ju, 8));
                },
                token: e,
                providedIn: "root",
              })),
              e
            );
          })(),
          Bu = (function () {
            var e = (function () {
              function e(t) {
                p(this, e),
                  (this.darkModeService = t),
                  (this.darkMode$ = this.darkModeService.darkMode$);
              }
              return (
                m(e, [
                  { key: "ngOnInit", value: function () {} },
                  {
                    key: "onToggle",
                    value: function () {
                      this.darkModeService.toggle();
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Hi(Lu));
              }),
              (e.ɵcmp = Ue({
                type: e,
                selectors: [["app-dark-mode-toggle"]],
                decls: 8,
                vars: 3,
                consts: [
                  [1, "theme-switch-wrapper"],
                  [1, "fa-solid", "fa-sun"],
                  ["for", "checkbox", 1, "theme-switch"],
                  [
                    "type",
                    "checkbox",
                    "id",
                    "checkbox",
                    3,
                    "checked",
                    "change",
                  ],
                  [1, "slider", "round"],
                  [1, "fa-solid", "fa-moon"],
                ],
                template: function (e, t) {
                  var n, r, i, o, s, a;
                  1 & e &&
                    (Bi(0, "nav"),
                    Bi(1, "div", 0),
                    qi(2, "i", 1),
                    Bi(3, "label", 2),
                    Bi(4, "input", 3),
                    Zi("change", function () {
                      return t.onToggle();
                    }),
                    (function (e, t) {
                      var n,
                        r = Ct();
                      r.firstCreatePass
                        ? ((n = (function (e, t) {
                            if (t)
                              for (var n = t.length - 1; n >= 0; n--) {
                                var r = t[n];
                                if ("async" === r.name) return r;
                              }
                            throw new he(
                              "302",
                              "The pipe 'async' could not be found!",
                            );
                          })(0, r.pipeRegistry)),
                          (r.data[25] = n),
                          n.onDestroy &&
                            (r.destroyHooks || (r.destroyHooks = [])).push(
                              25,
                              n.onDestroy,
                            ))
                        : (n = r.data[25]);
                      var i = n.factory || (n.factory = at(n.type)),
                        o = Ce(Hi);
                      try {
                        var s = un(!1),
                          a = i();
                        un(s),
                          (function (e, t, n, r) {
                            25 >= e.data.length &&
                              ((e.data[25] = null), (e.blueprint[25] = null)),
                              (t[25] = r);
                          })(r, Tt(), 0, a);
                      } finally {
                        Ce(o);
                      }
                    })(),
                    zi(),
                    qi(6, "div", 4),
                    zi(),
                    qi(7, "i", 5),
                    zi(),
                    zi()),
                    2 & e &&
                      (Dr(4),
                      Vi(
                        "checked",
                        ((n = 5),
                        (r = 1),
                        (i = t.darkMode$),
                        (o = n + 20),
                        (s = Tt()),
                        (a = (function (e, t) {
                          return e[t];
                        })(s, o)),
                        (function (e, t) {
                          return (
                            Ri.isWrapped(t) &&
                              ((t = Ri.unwrap(t)),
                              (e[Et.lFrame.bindingIndex] = Ir)),
                            t
                          );
                        })(
                          s,
                          (function (e, t) {
                            return e[1].data[t].pure;
                          })(s, o)
                            ? (function (e, t, n, r, i, o) {
                                var s = t + n;
                                return ji(e, s, i)
                                  ? (function (e, t, n) {
                                      return (e[t] = n);
                                    })(e, s + 1, o ? r.call(o, i) : r(i))
                                  : (function (e, t) {
                                      var n = e[t];
                                      return n === Ir ? void 0 : n;
                                    })(e, s + 1);
                              })(
                                s,
                                (function () {
                                  var e = Et.lFrame,
                                    t = e.bindingRootIndex;
                                  return (
                                    -1 === t &&
                                      (t = e.bindingRootIndex =
                                        e.tView.bindingStartIndex),
                                    t
                                  );
                                })(),
                                r,
                                a.transform,
                                i,
                                a,
                              )
                            : a.transform(i),
                        )),
                      ));
                },
                pipes: [la],
                styles: [
                  '.theme-switch-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.theme-switch-wrapper[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{margin-left:10px;font-size:1rem}.theme-switch[_ngcontent-%COMP%]{display:inline-block;height:34px;position:relative;width:60px}.theme-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.slider[_ngcontent-%COMP%]{background-color:#ccc;bottom:0;cursor:pointer;left:0;right:0;top:0}.slider[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]:before{position:absolute;transition:.4s}.slider[_ngcontent-%COMP%]:before{background-color:#fff;bottom:4px;content:"";height:26px;left:4px;width:26px}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#66bb6a}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translateX(26px)}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}i[_ngcontent-%COMP%]{font-family:fontAwesome;padding:10px;font-size:1.5rem;font-style:normal}.fa-sun[_ngcontent-%COMP%]{padding-left:0}.fa-moon[_ngcontent-%COMP%]{padding-right:0}',
                ],
              })),
              e
            );
          })();
        function zu(e, t) {
          1 & e && (Bi(0, "div", 3), qi(1, "app-dark-mode-toggle"), zi());
        }
        var qu = (function () {
            var e = (function () {
              function e() {
                p(this, e),
                  (this.logo = { bold: "Random", text: " Quran Verse" }),
                  (this.isOnMobile = !1);
              }
              return (
                m(e, [
                  {
                    key: "ngOnInit",
                    value: function () {
                      this.setMobile();
                    },
                  },
                  {
                    key: "setMobile",
                    value: function () {
                      screen.width <= 600 &&
                        ((this.isOnMobile = !0),
                        (this.logo.bold = "R"),
                        (this.logo.text = "QV"));
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵcmp = Ue({
                type: e,
                selectors: [["app-header"]],
                decls: 21,
                vars: 3,
                consts: [
                  [1, "inner-header"],
                  [1, "logo-container"],
                  [1, "navigation"],
                  [1, "choice"],
                  [
                    "href",
                    "https://github.com/awhumayun/randomquranverse.github.io",
                    "target",
                    "blank",
                  ],
                  ["href", "https://alquran.cloud/", "target", "blank"],
                  ["href", "https://quran.com/", "target", "blank"],
                  ["class", "choice", 4, "ngIf"],
                ],
                template: function (e, t) {
                  1 & e &&
                    (Bi(0, "header"),
                    Bi(1, "div", 0),
                    Bi(2, "div", 1),
                    Bi(3, "h1"),
                    $i(4),
                    Bi(5, "span"),
                    $i(6),
                    zi(),
                    zi(),
                    zi(),
                    Bi(7, "ul", 2),
                    Bi(8, "div", 3),
                    Bi(9, "a", 4),
                    Bi(10, "li"),
                    $i(11, "Code"),
                    zi(),
                    zi(),
                    zi(),
                    Bi(12, "div", 3),
                    Bi(13, "a", 5),
                    Bi(14, "li"),
                    $i(15, "API"),
                    zi(),
                    zi(),
                    zi(),
                    Bi(16, "div", 3),
                    Bi(17, "a", 6),
                    Bi(18, "li"),
                    $i(19, "Quran"),
                    zi(),
                    zi(),
                    zi(),
                    (function (e, t, n, r, i, o, s, a) {
                      var u = Tt(),
                        l = Ct(),
                        c = l.firstCreatePass
                          ? (function (e, t, n, r, i, o, s, a, u) {
                              var l = t.consts,
                                c = Mr(t, 40, 4, "div", kt(l, 7));
                              Ur(t, n, c, kt(l, void 0)), Ut(t, c);
                              var h = (c.tViews = Kr(
                                2,
                                c,
                                r,
                                2,
                                0,
                                t.directiveRegistry,
                                t.pipeRegistry,
                                null,
                                t.schemas,
                                l,
                              ));
                              return (
                                null !== t.queries &&
                                  (t.queries.template(t, c),
                                  (h.queries = t.queries.embeddedTView(c))),
                                c
                              );
                            })(0, l, u, t)
                          : l.data[40];
                      Pt(c, !1);
                      var h = u[11].createComment("");
                      fr(l, u, h, c),
                        zn(h, u),
                        si(u, (u[40] = ni(h, u, h, c))),
                        ot(c) && zr(l, u, c);
                    })(0, zu),
                    zi(),
                    zi(),
                    zi()),
                    2 & e &&
                      (Dr(4),
                      Ji(t.logo.bold),
                      Dr(2),
                      Ji(t.logo.text),
                      Dr(14),
                      Vi("ngIf", !t.isOnMobile));
                },
                directives: [na, Bu],
                styles: [
                  "header[_ngcontent-%COMP%]{width:100vw;min-height:10vh;display:block;margin:-8px;font-family:Rubik,sans-serif}.inner-header[_ngcontent-%COMP%]{width:75%;height:10vh;display:block;margin:0 auto}.logo-container[_ngcontent-%COMP%]{min-height:100%;display:table;float:left}.logo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{min-height:100%;display:table-cell;vertical-align:middle;font-size:2rem;font-weight:700}.logo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:200}.navigation[_ngcontent-%COMP%]{float:right;height:10vh;margin:0}.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px}.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{outline:solid;opacity:.75;transition:all .05s}.choice[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:table-cell;font-size:1rem}.choice[_ngcontent-%COMP%]{height:10vh;vertical-align:middle;padding:0 15px}@media only screen and (max-width:600px){.choice[_ngcontent-%COMP%]{padding:0}}",
                ],
              })),
              e
            );
          })(),
          Ku = (function () {
            var e = (function () {
              function e() {
                p(this, e);
              }
              return m(e, [{ key: "ngOnInit", value: function () {} }]), e;
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵcmp = Ue({
                type: e,
                selectors: [["app-button"]],
                decls: 2,
                vars: 0,
                template: function (e, t) {
                  1 & e &&
                    (Bi(0, "button"), $i(1, "Get Another Random Verse"), zi());
                },
                styles: [
                  "button[_ngcontent-%COMP%]{padding:15px 25px;font-size:24px;cursor:pointer;text-align:center;border:none;border-radius:15px;box-shadow:0 9px #999;font-family:Source Sans Pro,sans-serif}button[_ngcontent-%COMP%]:hover{opacity:.75}button[_ngcontent-%COMP%]:active{filter:brightness(.7);box-shadow:0 5px #666;transform:translateY(4px);opacity:1}",
                ],
              })),
              e
            );
          })(),
          Qu = (function () {
            var e,
              t = (function () {
                function e(t) {
                  p(this, e),
                    (this.verseService = t),
                    (this.numOfVerses = 6236),
                    (this.translation = Du[6]),
                    (this.isNew = !0);
                }
                return (
                  m(e, [
                    {
                      key: "ngOnInit",
                      value: function () {
                        var e = this;
                        return wu(
                          regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (t.next = 2), e.getRandomVerse();
                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          }),
                        )();
                      },
                    },
                    {
                      key: "getRandomVerse",
                      value: function () {
                        var e = this;
                        return wu(
                          regeneratorRuntime.mark(function t() {
                            var n;
                            return regeneratorRuntime.wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (e.isNew = !0),
                                      (n =
                                        Math.floor(
                                          Math.random() * e.numOfVerses,
                                        ) + 1),
                                      (t.next = 4),
                                      e.verseService.getVerse(n)
                                    );
                                  case 4:
                                    return (
                                      (e.verse = t.sent),
                                      (t.next = 7),
                                      e.verseService.getVerseTranslation(
                                        n,
                                        e.translation,
                                      )
                                    );
                                  case 7:
                                    (e.verseTranslation = t.sent),
                                      (e.translationText = "("
                                        .concat(
                                          e.verseTranslation.data.surah.number,
                                          ":",
                                        )
                                        .concat(
                                          e.verseTranslation.data.numberInSurah,
                                          ") ",
                                        )
                                        .concat(e.verseTranslation.data.text)),
                                      (e.isNew = !1);
                                  case 10:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          }),
                        )();
                      },
                    },
                  ]),
                  e
                );
              })();
            return (
              (t.ɵfac = function (e) {
                return new (e || t)(Hi(Nu));
              }),
              (t.ɵcmp = Ue({
                type: t,
                selectors: [["app-root"]],
                decls: 9,
                vars: 3,
                consts: [
                  [1, "text-container"],
                  [1, "translation"],
                  [1, "button-container"],
                  [3, "click"],
                ],
                template: function (e, t) {
                  1 & e &&
                    (qi(0, "app-header"),
                    Bi(1, "body"),
                    Bi(2, "div", 0),
                    Bi(3, "p"),
                    $i(4),
                    zi(),
                    Bi(5, "p", 1),
                    $i(6),
                    zi(),
                    zi(),
                    Bi(7, "div", 2),
                    Bi(8, "app-button", 3),
                    Zi("click", function () {
                      return t.getRandomVerse();
                    }),
                    zi(),
                    zi(),
                    zi()),
                    2 & e &&
                      (Dr(2),
                      Vi("@fade", t.isNew ? "out" : "in"),
                      Dr(2),
                      Ji(t.verse.data.text),
                      Dr(2),
                      Ji(t.translationText));
                },
                directives: [qu, Ku],
                styles: [
                  "*[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;text-decoration:none}body[_ngcontent-%COMP%]{min-height:90vh;margin:8px -8px -8px}.text-container[_ngcontent-%COMP%]{padding:2.5% 10%;text-align:center;font-size:2.5rem;min-height:65vh}.text-container[_ngcontent-%COMP%]   .translation[_ngcontent-%COMP%]{margin-top:2.5%;font-family:Source Sans Pro,sans-serif}.button-container[_ngcontent-%COMP%]{width:100%;display:grid;justify-content:center;margin-bottom:2.5%}@media only screen and (max-width:600px){.text-container[_ngcontent-%COMP%]{font-size:1.25rem}}",
                ],
                data: {
                  animation: [
                    ((e = [
                      xu("out", Cu({ opacity: 0 })),
                      xu("in", Cu({ opacity: 1 })),
                      Au("out => in", [Su("2s")]),
                    ]),
                    { type: 7, name: "fade", definitions: e, options: {} }),
                  ],
                },
              })),
              t
            );
          })();
        function Uu() {
          return "undefined" != typeof window && void 0 !== window.document;
        }
        function Zu() {
          return (
            "undefined" != typeof process &&
            "[object process]" === {}.toString.call(process)
          );
        }
        function Wu(e) {
          switch (e.length) {
            case 0:
              return new Ou();
            case 1:
              return e[0];
            default:
              return new Iu(e);
          }
        }
        function Gu(e, t, n, r) {
          var i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : {},
            o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {},
            s = [],
            a = [],
            u = -1,
            l = null;
          if (
            (r.forEach(function (e) {
              var n = e.offset,
                r = n == u,
                c = (r && l) || {};
              Object.keys(e).forEach(function (n) {
                var r = n,
                  a = e[n];
                if ("offset" !== n)
                  switch (((r = t.normalizePropertyName(r, s)), a)) {
                    case "!":
                      a = i[n];
                      break;
                    case "*":
                      a = o[n];
                      break;
                    default:
                      a = t.normalizeStyleValue(n, r, a, s);
                  }
                c[r] = a;
              }),
                r || a.push(c),
                (l = c),
                (u = n);
            }),
            s.length)
          ) {
            var c = "\n - ";
            throw new Error(
              "Unable to animate due to the following errors:"
                .concat(c)
                .concat(s.join(c)),
            );
          }
          return a;
        }
        function $u(e, t, n, r) {
          switch (t) {
            case "start":
              e.onStart(function () {
                return r(n && Ju(n, "start", e));
              });
              break;
            case "done":
              e.onDone(function () {
                return r(n && Ju(n, "done", e));
              });
              break;
            case "destroy":
              e.onDestroy(function () {
                return r(n && Ju(n, "destroy", e));
              });
          }
        }
        function Ju(e, t, n) {
          var r = n.totalTime,
            i = Yu(
              e.element,
              e.triggerName,
              e.fromState,
              e.toState,
              t || e.phaseName,
              null == r ? e.totalTime : r,
              !!n.disabled,
            ),
            o = e._data;
          return null != o && (i._data = o), i;
        }
        function Yu(e, t, n, r) {
          var i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : "",
            o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : 0,
            s = arguments.length > 6 ? arguments[6] : void 0;
          return {
            element: e,
            triggerName: t,
            fromState: n,
            toState: r,
            phaseName: i,
            totalTime: o,
            disabled: !!s,
          };
        }
        function Xu(e, t, n) {
          var r;
          return (
            e instanceof Map
              ? (r = e.get(t)) || e.set(t, (r = n))
              : (r = e[t]) || (r = e[t] = n),
            r
          );
        }
        function el(e) {
          var t = e.indexOf(":");
          return [e.substring(1, t), e.substr(t + 1)];
        }
        var tl = function (e, t) {
            return !1;
          },
          nl = function (e, t) {
            return !1;
          },
          rl = function (e, t, n) {
            return [];
          },
          il = Zu();
        (il || "undefined" != typeof Element) &&
          ((tl = Uu()
            ? function (e, t) {
                for (; t && t !== document.documentElement; ) {
                  if (t === e) return !0;
                  t = t.parentNode || t.host;
                }
                return !1;
              }
            : function (e, t) {
                return e.contains(t);
              }),
          (nl = (function () {
            if (il || Element.prototype.matches)
              return function (e, t) {
                return e.matches(t);
              };
            var e = Element.prototype,
              t =
                e.matchesSelector ||
                e.mozMatchesSelector ||
                e.msMatchesSelector ||
                e.oMatchesSelector ||
                e.webkitMatchesSelector;
            return t
              ? function (e, n) {
                  return t.apply(e, [n]);
                }
              : nl;
          })()),
          (rl = function (e, t, n) {
            var r = [];
            if (n)
              for (var i = e.querySelectorAll(t), o = 0; o < i.length; o++)
                r.push(i[o]);
            else {
              var s = e.querySelector(t);
              s && r.push(s);
            }
            return r;
          }));
        var ol = null,
          sl = !1;
        function al(e) {
          ol ||
            ((ol =
              ("undefined" != typeof document ? document.body : null) || {}),
            (sl = !!ol.style && "WebkitAppearance" in ol.style));
          var t = !0;
          return (
            ol.style &&
              !(function (e) {
                return "ebkit" == e.substring(1, 6);
              })(e) &&
              !(t = e in ol.style) &&
              sl &&
              (t =
                "Webkit" + e.charAt(0).toUpperCase() + e.substr(1) in ol.style),
            t
          );
        }
        var ul = nl,
          ll = tl,
          cl = rl;
        function hl(e) {
          var t = {};
          return (
            Object.keys(e).forEach(function (n) {
              var r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
              t[r] = e[n];
            }),
            t
          );
        }
        var fl = (function () {
            var e = (function () {
              function e() {
                p(this, e);
              }
              return (
                m(e, [
                  {
                    key: "validateStyleProperty",
                    value: function (e) {
                      return al(e);
                    },
                  },
                  {
                    key: "matchesElement",
                    value: function (e, t) {
                      return ul(e, t);
                    },
                  },
                  {
                    key: "containsElement",
                    value: function (e, t) {
                      return ll(e, t);
                    },
                  },
                  {
                    key: "query",
                    value: function (e, t, n) {
                      return cl(e, t, n);
                    },
                  },
                  {
                    key: "computeStyle",
                    value: function (e, t, n) {
                      return n || "";
                    },
                  },
                  {
                    key: "animate",
                    value: function (e, t, n, r, i) {
                      return new Ou(n, r);
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          dl = (function () {
            var e = function e() {
              p(this, e);
            };
            return (e.NOOP = new fl()), e;
          })();
        function vl(e) {
          if ("number" == typeof e) return e;
          var t = e.match(/^(-?[\.\d]+)(m?s)/);
          return !t || t.length < 2 ? 0 : pl(parseFloat(t[1]), t[2]);
        }
        function pl(e, t) {
          switch (t) {
            case "s":
              return 1e3 * e;
            default:
              return e;
          }
        }
        function yl(e, t, n) {
          return e.hasOwnProperty("duration")
            ? e
            : (function (e, t, n) {
                var r,
                  i = 0,
                  o = "";
                if ("string" == typeof e) {
                  var s = e.match(
                    /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
                  );
                  if (null === s)
                    return (
                      t.push(
                        'The provided timing value "'.concat(
                          e,
                          '" is invalid.',
                        ),
                      ),
                      { duration: 0, delay: 0, easing: "" }
                    );
                  r = pl(parseFloat(s[1]), s[2]);
                  var a = s[3];
                  null != a && (i = pl(parseFloat(a), s[4]));
                  var u = s[5];
                  u && (o = u);
                } else r = e;
                if (!n) {
                  var l = !1,
                    c = t.length;
                  r < 0 &&
                    (t.push(
                      "Duration values below 0 are not allowed for this animation step.",
                    ),
                    (l = !0)),
                    i < 0 &&
                      (t.push(
                        "Delay values below 0 are not allowed for this animation step.",
                      ),
                      (l = !0)),
                    l &&
                      t.splice(
                        c,
                        0,
                        'The provided timing value "'.concat(
                          e,
                          '" is invalid.',
                        ),
                      );
                }
                return { duration: r, delay: i, easing: o };
              })(e, t, n);
        }
        function ml(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (
            Object.keys(e).forEach(function (n) {
              t[n] = e[n];
            }),
            t
          );
        }
        function gl(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (t) for (var r in e) n[r] = e[r];
          else ml(e, n);
          return n;
        }
        function _l(e, t, n) {
          return n ? t + ":" + n + ";" : "";
        }
        function kl(e) {
          for (var t = "", n = 0; n < e.style.length; n++) {
            var r = e.style.item(n);
            t += _l(0, r, e.style.getPropertyValue(r));
          }
          for (var i in e.style)
            e.style.hasOwnProperty(i) &&
              !i.startsWith("_") &&
              (t += _l(
                0,
                i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                e.style[i],
              ));
          e.setAttribute("style", t);
        }
        function bl(e, t, n) {
          e.style &&
            (Object.keys(t).forEach(function (r) {
              var i = Pl(r);
              n && !n.hasOwnProperty(r) && (n[r] = e.style[i]),
                (e.style[i] = t[r]);
            }),
            Zu() && kl(e));
        }
        function wl(e, t) {
          e.style &&
            (Object.keys(t).forEach(function (t) {
              var n = Pl(t);
              e.style[n] = "";
            }),
            Zu() && kl(e));
        }
        function El(e) {
          return Array.isArray(e) ? (1 == e.length ? e[0] : Tu(e)) : e;
        }
        var Sl = new RegExp("{{\\s*(.+?)\\s*}}", "g");
        function Tl(e) {
          var t = [];
          if ("string" == typeof e) {
            for (var n; (n = Sl.exec(e)); ) t.push(n[1]);
            Sl.lastIndex = 0;
          }
          return t;
        }
        function Cl(e, t, n) {
          var r = e.toString(),
            i = r.replace(Sl, function (e, r) {
              var i = t[r];
              return (
                t.hasOwnProperty(r) ||
                  (n.push(
                    "Please provide a value for the animation param ".concat(r),
                  ),
                  (i = "")),
                i.toString()
              );
            });
          return i == r ? e : i;
        }
        function xl(e) {
          for (var t = [], n = e.next(); !n.done; )
            t.push(n.value), (n = e.next());
          return t;
        }
        var Al = /-+([a-z0-9])/g;
        function Pl(e) {
          return e.replace(Al, function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return t[1].toUpperCase();
          });
        }
        function Ol(e, t) {
          return 0 === e || 0 === t;
        }
        function Il(e, t, n) {
          var r = Object.keys(n);
          if (r.length && t.length) {
            var i = t[0],
              o = [];
            if (
              (r.forEach(function (e) {
                i.hasOwnProperty(e) || o.push(e), (i[e] = n[e]);
              }),
              o.length)
            )
              for (
                var s = function () {
                    var n = t[a];
                    o.forEach(function (t) {
                      n[t] = Nl(e, t);
                    });
                  },
                  a = 1;
                a < t.length;
                a++
              )
                s();
          }
          return t;
        }
        function Dl(e, t, n) {
          switch (t.type) {
            case 7:
              return e.visitTrigger(t, n);
            case 0:
              return e.visitState(t, n);
            case 1:
              return e.visitTransition(t, n);
            case 2:
              return e.visitSequence(t, n);
            case 3:
              return e.visitGroup(t, n);
            case 4:
              return e.visitAnimate(t, n);
            case 5:
              return e.visitKeyframes(t, n);
            case 6:
              return e.visitStyle(t, n);
            case 8:
              return e.visitReference(t, n);
            case 9:
              return e.visitAnimateChild(t, n);
            case 10:
              return e.visitAnimateRef(t, n);
            case 11:
              return e.visitQuery(t, n);
            case 12:
              return e.visitStagger(t, n);
            default:
              throw new Error(
                "Unable to resolve animation metadata node #".concat(t.type),
              );
          }
        }
        function Nl(e, t) {
          return window.getComputedStyle(e)[t];
        }
        var Rl = new Set(["true", "1"]),
          Fl = new Set(["false", "0"]);
        function Ml(e, t) {
          var n = Rl.has(e) || Fl.has(e),
            r = Rl.has(t) || Fl.has(t);
          return function (i, o) {
            var s = "*" == e || e == i,
              a = "*" == t || t == o;
            return (
              !s &&
                n &&
                "boolean" == typeof i &&
                (s = i ? Rl.has(e) : Fl.has(e)),
              !a &&
                r &&
                "boolean" == typeof o &&
                (a = o ? Rl.has(t) : Fl.has(t)),
              s && a
            );
          };
        }
        var jl = new RegExp("s*:selfs*,?", "g");
        function Hl(e, t, n) {
          return new Vl(e).build(t, n);
        }
        var Vl = (function () {
            function t(e) {
              p(this, t), (this._driver = e);
            }
            return (
              m(t, [
                {
                  key: "build",
                  value: function (e, t) {
                    var n = new Ll(t);
                    return (
                      this._resetContextStyleTimingState(n), Dl(this, El(e), n)
                    );
                  },
                },
                {
                  key: "_resetContextStyleTimingState",
                  value: function (e) {
                    (e.currentQuerySelector = ""),
                      (e.collectedStyles = {}),
                      (e.collectedStyles[""] = {}),
                      (e.currentTime = 0);
                  },
                },
                {
                  key: "visitTrigger",
                  value: function (e, t) {
                    var n = this,
                      r = (t.queryCount = 0),
                      i = (t.depCount = 0),
                      o = [],
                      s = [];
                    return (
                      "@" == e.name.charAt(0) &&
                        t.errors.push(
                          "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))",
                        ),
                      e.definitions.forEach(function (e) {
                        if ((n._resetContextStyleTimingState(t), 0 == e.type)) {
                          var a = e,
                            u = a.name;
                          u
                            .toString()
                            .split(/\s*,\s*/)
                            .forEach(function (e) {
                              (a.name = e), o.push(n.visitState(a, t));
                            }),
                            (a.name = u);
                        } else if (1 == e.type) {
                          var l = n.visitTransition(e, t);
                          (r += l.queryCount), (i += l.depCount), s.push(l);
                        } else
                          t.errors.push(
                            "only state() and transition() definitions can sit inside of a trigger()",
                          );
                      }),
                      {
                        type: 7,
                        name: e.name,
                        states: o,
                        transitions: s,
                        queryCount: r,
                        depCount: i,
                        options: null,
                      }
                    );
                  },
                },
                {
                  key: "visitState",
                  value: function (e, t) {
                    var n = this.visitStyle(e.styles, t),
                      r = (e.options && e.options.params) || null;
                    if (n.containsDynamicStyles) {
                      var i = new Set(),
                        o = r || {};
                      if (
                        (n.styles.forEach(function (e) {
                          if (Bl(e)) {
                            var t = e;
                            Object.keys(t).forEach(function (e) {
                              Tl(t[e]).forEach(function (e) {
                                o.hasOwnProperty(e) || i.add(e);
                              });
                            });
                          }
                        }),
                        i.size)
                      ) {
                        var s = xl(i.values());
                        t.errors.push(
                          'state("'
                            .concat(
                              e.name,
                              '", ...) must define default values for all the following style substitutions: ',
                            )
                            .concat(s.join(", ")),
                        );
                      }
                    }
                    return {
                      type: 0,
                      name: e.name,
                      style: n,
                      options: r ? { params: r } : null,
                    };
                  },
                },
                {
                  key: "visitTransition",
                  value: function (e, t) {
                    (t.queryCount = 0), (t.depCount = 0);
                    var n,
                      r,
                      i,
                      o = Dl(this, El(e.animation), t);
                    return {
                      type: 1,
                      matchers:
                        ((n = e.expr),
                        (r = t.errors),
                        (i = []),
                        "string" == typeof n
                          ? n.split(/\s*,\s*/).forEach(function (e) {
                              return (function (e, t, n) {
                                if (":" == e[0]) {
                                  var r = (function (e, t) {
                                    switch (e) {
                                      case ":enter":
                                        return "void => *";
                                      case ":leave":
                                        return "* => void";
                                      case ":increment":
                                        return function (e, t) {
                                          return parseFloat(t) > parseFloat(e);
                                        };
                                      case ":decrement":
                                        return function (e, t) {
                                          return parseFloat(t) < parseFloat(e);
                                        };
                                      default:
                                        return (
                                          t.push(
                                            'The transition alias value "'.concat(
                                              e,
                                              '" is not supported',
                                            ),
                                          ),
                                          "* => *"
                                        );
                                    }
                                  })(e, n);
                                  if ("function" == typeof r)
                                    return void t.push(r);
                                  e = r;
                                }
                                var i = e.match(
                                  /^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/,
                                );
                                if (null == i || i.length < 4)
                                  return (
                                    n.push(
                                      'The provided transition expression "'.concat(
                                        e,
                                        '" is not supported',
                                      ),
                                    ),
                                    t
                                  );
                                var o = i[1],
                                  s = i[2],
                                  a = i[3];
                                t.push(Ml(o, a)),
                                  "<" != s[0] ||
                                    ("*" == o && "*" == a) ||
                                    t.push(Ml(a, o));
                              })(e, i, r);
                            })
                          : i.push(n),
                        i),
                      animation: o,
                      queryCount: t.queryCount,
                      depCount: t.depCount,
                      options: zl(e.options),
                    };
                  },
                },
                {
                  key: "visitSequence",
                  value: function (e, t) {
                    var n = this;
                    return {
                      type: 2,
                      steps: e.steps.map(function (e) {
                        return Dl(n, e, t);
                      }),
                      options: zl(e.options),
                    };
                  },
                },
                {
                  key: "visitGroup",
                  value: function (e, t) {
                    var n = this,
                      r = t.currentTime,
                      i = 0,
                      o = e.steps.map(function (e) {
                        t.currentTime = r;
                        var o = Dl(n, e, t);
                        return (i = Math.max(i, t.currentTime)), o;
                      });
                    return (
                      (t.currentTime = i),
                      { type: 3, steps: o, options: zl(e.options) }
                    );
                  },
                },
                {
                  key: "visitAnimate",
                  value: function (e, t) {
                    var n,
                      r = (function (e, t) {
                        var n = null;
                        if (e.hasOwnProperty("duration")) n = e;
                        else if ("number" == typeof e)
                          return ql(yl(e, t).duration, 0, "");
                        var r = e;
                        if (
                          r.split(/\s+/).some(function (e) {
                            return "{" == e.charAt(0) && "{" == e.charAt(1);
                          })
                        ) {
                          var i = ql(0, 0, "");
                          return (i.dynamic = !0), (i.strValue = r), i;
                        }
                        return ql(
                          (n = n || yl(r, t)).duration,
                          n.delay,
                          n.easing,
                        );
                      })(e.timings, t.errors);
                    t.currentAnimateTimings = r;
                    var i = e.styles ? e.styles : Cu({});
                    if (5 == i.type) n = this.visitKeyframes(i, t);
                    else {
                      var o = e.styles,
                        s = !1;
                      if (!o) {
                        s = !0;
                        var a = {};
                        r.easing && (a.easing = r.easing), (o = Cu(a));
                      }
                      t.currentTime += r.duration + r.delay;
                      var u = this.visitStyle(o, t);
                      (u.isEmptyStep = s), (n = u);
                    }
                    return (
                      (t.currentAnimateTimings = null),
                      { type: 4, timings: r, style: n, options: null }
                    );
                  },
                },
                {
                  key: "visitStyle",
                  value: function (e, t) {
                    var n = this._makeStyleAst(e, t);
                    return this._validateStyleAst(n, t), n;
                  },
                },
                {
                  key: "_makeStyleAst",
                  value: function (e, t) {
                    var n = [];
                    Array.isArray(e.styles)
                      ? e.styles.forEach(function (e) {
                          "string" == typeof e
                            ? "*" == e
                              ? n.push(e)
                              : t.errors.push(
                                  "The provided style string value ".concat(
                                    e,
                                    " is not allowed.",
                                  ),
                                )
                            : n.push(e);
                        })
                      : n.push(e.styles);
                    var r = !1,
                      i = null;
                    return (
                      n.forEach(function (e) {
                        if (Bl(e)) {
                          var t = e,
                            n = t.easing;
                          if ((n && ((i = n), delete t.easing), !r))
                            for (var o in t)
                              if (t[o].toString().indexOf("{{") >= 0) {
                                r = !0;
                                break;
                              }
                        }
                      }),
                      {
                        type: 6,
                        styles: n,
                        easing: i,
                        offset: e.offset,
                        containsDynamicStyles: r,
                        options: null,
                      }
                    );
                  },
                },
                {
                  key: "_validateStyleAst",
                  value: function (e, t) {
                    var n = this,
                      r = t.currentAnimateTimings,
                      i = t.currentTime,
                      o = t.currentTime;
                    r && o > 0 && (o -= r.duration + r.delay),
                      e.styles.forEach(function (e) {
                        "string" != typeof e &&
                          Object.keys(e).forEach(function (r) {
                            if (n._driver.validateStyleProperty(r)) {
                              var s,
                                a,
                                u,
                                l,
                                c,
                                h = t.collectedStyles[t.currentQuerySelector],
                                f = h[r],
                                d = !0;
                              f &&
                                (o != i &&
                                  o >= f.startTime &&
                                  i <= f.endTime &&
                                  (t.errors.push(
                                    'The CSS property "'
                                      .concat(
                                        r,
                                        '" that exists between the times of "',
                                      )
                                      .concat(f.startTime, 'ms" and "')
                                      .concat(
                                        f.endTime,
                                        'ms" is also being animated in a parallel animation between the times of "',
                                      )
                                      .concat(o, 'ms" and "')
                                      .concat(i, 'ms"'),
                                  ),
                                  (d = !1)),
                                (o = f.startTime)),
                                d && (h[r] = { startTime: o, endTime: i }),
                                t.options &&
                                  ((s = e[r]),
                                  (a = t.options),
                                  (u = t.errors),
                                  (l = a.params || {}),
                                  (c = Tl(s)).length &&
                                    c.forEach(function (e) {
                                      l.hasOwnProperty(e) ||
                                        u.push(
                                          "Unable to resolve the local animation param ".concat(
                                            e,
                                            " in the given list of values",
                                          ),
                                        );
                                    }));
                            } else
                              t.errors.push(
                                'The provided animation property "'.concat(
                                  r,
                                  '" is not a supported CSS property for animations',
                                ),
                              );
                          });
                      });
                  },
                },
                {
                  key: "visitKeyframes",
                  value: function (e, t) {
                    var n = this,
                      r = { type: 5, styles: [], options: null };
                    if (!t.currentAnimateTimings)
                      return (
                        t.errors.push(
                          "keyframes() must be placed inside of a call to animate()",
                        ),
                        r
                      );
                    var i = 0,
                      o = [],
                      s = !1,
                      a = !1,
                      u = 0,
                      l = e.steps.map(function (e) {
                        var r = n._makeStyleAst(e, t),
                          l =
                            null != r.offset
                              ? r.offset
                              : (function (e) {
                                  if ("string" == typeof e) return null;
                                  var t = null;
                                  if (Array.isArray(e))
                                    e.forEach(function (e) {
                                      if (Bl(e) && e.hasOwnProperty("offset")) {
                                        var n = e;
                                        (t = parseFloat(n.offset)),
                                          delete n.offset;
                                      }
                                    });
                                  else if (
                                    Bl(e) &&
                                    e.hasOwnProperty("offset")
                                  ) {
                                    var n = e;
                                    (t = parseFloat(n.offset)), delete n.offset;
                                  }
                                  return t;
                                })(r.styles),
                          c = 0;
                        return (
                          null != l && (i++, (c = r.offset = l)),
                          (a = a || c < 0 || c > 1),
                          (s = s || c < u),
                          (u = c),
                          o.push(c),
                          r
                        );
                      });
                    a &&
                      t.errors.push(
                        "Please ensure that all keyframe offsets are between 0 and 1",
                      ),
                      s &&
                        t.errors.push(
                          "Please ensure that all keyframe offsets are in order",
                        );
                    var c = e.steps.length,
                      h = 0;
                    i > 0 && i < c
                      ? t.errors.push(
                          "Not all style() steps within the declared keyframes() contain offsets",
                        )
                      : 0 == i && (h = 1 / (c - 1));
                    var f = c - 1,
                      d = t.currentTime,
                      v = t.currentAnimateTimings,
                      p = v.duration;
                    return (
                      l.forEach(function (e, i) {
                        var s = h > 0 ? (i == f ? 1 : h * i) : o[i],
                          a = s * p;
                        (t.currentTime = d + v.delay + a),
                          (v.duration = a),
                          n._validateStyleAst(e, t),
                          (e.offset = s),
                          r.styles.push(e);
                      }),
                      r
                    );
                  },
                },
                {
                  key: "visitReference",
                  value: function (e, t) {
                    return {
                      type: 8,
                      animation: Dl(this, El(e.animation), t),
                      options: zl(e.options),
                    };
                  },
                },
                {
                  key: "visitAnimateChild",
                  value: function (e, t) {
                    return t.depCount++, { type: 9, options: zl(e.options) };
                  },
                },
                {
                  key: "visitAnimateRef",
                  value: function (e, t) {
                    return {
                      type: 10,
                      animation: this.visitReference(e.animation, t),
                      options: zl(e.options),
                    };
                  },
                },
                {
                  key: "visitQuery",
                  value: function (t, n) {
                    var r = n.currentQuerySelector,
                      i = t.options || {};
                    n.queryCount++, (n.currentQuery = t);
                    var o = e(
                        (function (e) {
                          var t = !!e.split(/\s*,\s*/).find(function (e) {
                            return ":self" == e;
                          });
                          return (
                            t && (e = e.replace(jl, "")),
                            [
                              (e = e
                                .replace(/@\*/g, ".ng-trigger")
                                .replace(/@\w+/g, function (e) {
                                  return ".ng-trigger-" + e.substr(1);
                                })
                                .replace(/:animating/g, ".ng-animating")),
                              t,
                            ]
                          );
                        })(t.selector),
                        2,
                      ),
                      s = o[0],
                      a = o[1];
                    (n.currentQuerySelector = r.length ? r + " " + s : s),
                      Xu(n.collectedStyles, n.currentQuerySelector, {});
                    var u = Dl(this, El(t.animation), n);
                    return (
                      (n.currentQuery = null),
                      (n.currentQuerySelector = r),
                      {
                        type: 11,
                        selector: s,
                        limit: i.limit || 0,
                        optional: !!i.optional,
                        includeSelf: a,
                        animation: u,
                        originalSelector: t.selector,
                        options: zl(t.options),
                      }
                    );
                  },
                },
                {
                  key: "visitStagger",
                  value: function (e, t) {
                    t.currentQuery ||
                      t.errors.push(
                        "stagger() can only be used inside of query()",
                      );
                    var n =
                      "full" === e.timings
                        ? { duration: 0, delay: 0, easing: "full" }
                        : yl(e.timings, t.errors, !0);
                    return {
                      type: 12,
                      animation: Dl(this, El(e.animation), t),
                      timings: n,
                      options: null,
                    };
                  },
                },
              ]),
              t
            );
          })(),
          Ll = function e(t) {
            p(this, e),
              (this.errors = t),
              (this.queryCount = 0),
              (this.depCount = 0),
              (this.currentTransition = null),
              (this.currentQuery = null),
              (this.currentQuerySelector = null),
              (this.currentAnimateTimings = null),
              (this.currentTime = 0),
              (this.collectedStyles = {}),
              (this.options = null);
          };
        function Bl(e) {
          return !Array.isArray(e) && "object" == typeof e;
        }
        function zl(e) {
          var t;
          return (
            e
              ? (e = ml(e)).params && (e.params = (t = e.params) ? ml(t) : null)
              : (e = {}),
            e
          );
        }
        function ql(e, t, n) {
          return { duration: e, delay: t, easing: n };
        }
        function Kl(e, t, n, r, i, o) {
          var s =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : null,
            a = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
          return {
            type: 1,
            element: e,
            keyframes: t,
            preStyleProps: n,
            postStyleProps: r,
            duration: i,
            delay: o,
            totalTime: i + o,
            easing: s,
            subTimeline: a,
          };
        }
        var Ql = (function () {
            function e() {
              p(this, e), (this._map = new Map());
            }
            return (
              m(e, [
                {
                  key: "consume",
                  value: function (e) {
                    var t = this._map.get(e);
                    return t ? this._map.delete(e) : (t = []), t;
                  },
                },
                {
                  key: "append",
                  value: function (e, t) {
                    var r,
                      i = this._map.get(e);
                    i || this._map.set(e, (i = [])),
                      (r = i).push.apply(r, n(t));
                  },
                },
                {
                  key: "has",
                  value: function (e) {
                    return this._map.has(e);
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    this._map.clear();
                  },
                },
              ]),
              e
            );
          })(),
          Ul = new RegExp(":enter", "g"),
          Zl = new RegExp(":leave", "g");
        function Wl(e, t, n, r, i) {
          var o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {},
            s =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : {},
            a = arguments.length > 7 ? arguments[7] : void 0,
            u = arguments.length > 8 ? arguments[8] : void 0,
            l =
              arguments.length > 9 && void 0 !== arguments[9]
                ? arguments[9]
                : [];
          return new Gl().buildKeyframes(e, t, n, r, i, o, s, a, u, l);
        }
        var Gl = (function () {
            function e() {
              p(this, e);
            }
            return (
              m(e, [
                {
                  key: "buildKeyframes",
                  value: function (e, t, n, r, i, o, s, a, u) {
                    var l =
                      arguments.length > 9 && void 0 !== arguments[9]
                        ? arguments[9]
                        : [];
                    u = u || new Ql();
                    var c = new Jl(e, t, u, r, i, l, []);
                    (c.options = a),
                      c.currentTimeline.setStyles([o], null, c.errors, a),
                      Dl(this, n, c);
                    var h = c.timelines.filter(function (e) {
                      return e.containsAnimation();
                    });
                    if (h.length && Object.keys(s).length) {
                      var f = h[h.length - 1];
                      f.allowOnlyTimelineStyles() ||
                        f.setStyles([s], null, c.errors, a);
                    }
                    return h.length
                      ? h.map(function (e) {
                          return e.buildKeyframes();
                        })
                      : [Kl(t, [], [], [], 0, 0, "", !1)];
                  },
                },
                { key: "visitTrigger", value: function (e, t) {} },
                { key: "visitState", value: function (e, t) {} },
                { key: "visitTransition", value: function (e, t) {} },
                {
                  key: "visitAnimateChild",
                  value: function (e, t) {
                    var n = t.subInstructions.consume(t.element);
                    if (n) {
                      var r = t.createSubContext(e.options),
                        i = t.currentTimeline.currentTime,
                        o = this._visitSubInstructions(n, r, r.options);
                      i != o && t.transformIntoNewTimeline(o);
                    }
                    t.previousNode = e;
                  },
                },
                {
                  key: "visitAnimateRef",
                  value: function (e, t) {
                    var n = t.createSubContext(e.options);
                    n.transformIntoNewTimeline(),
                      this.visitReference(e.animation, n),
                      t.transformIntoNewTimeline(n.currentTimeline.currentTime),
                      (t.previousNode = e);
                  },
                },
                {
                  key: "_visitSubInstructions",
                  value: function (e, t, n) {
                    var r = t.currentTimeline.currentTime,
                      i = null != n.duration ? vl(n.duration) : null,
                      o = null != n.delay ? vl(n.delay) : null;
                    return (
                      0 !== i &&
                        e.forEach(function (e) {
                          var n = t.appendInstructionToTimeline(e, i, o);
                          r = Math.max(r, n.duration + n.delay);
                        }),
                      r
                    );
                  },
                },
                {
                  key: "visitReference",
                  value: function (e, t) {
                    t.updateOptions(e.options, !0),
                      Dl(this, e.animation, t),
                      (t.previousNode = e);
                  },
                },
                {
                  key: "visitSequence",
                  value: function (e, t) {
                    var n = this,
                      r = t.subContextCount,
                      i = t,
                      o = e.options;
                    if (
                      o &&
                      (o.params || o.delay) &&
                      ((i = t.createSubContext(o)).transformIntoNewTimeline(),
                      null != o.delay)
                    ) {
                      6 == i.previousNode.type &&
                        (i.currentTimeline.snapshotCurrentStyles(),
                        (i.previousNode = $l));
                      var s = vl(o.delay);
                      i.delayNextStep(s);
                    }
                    e.steps.length &&
                      (e.steps.forEach(function (e) {
                        return Dl(n, e, i);
                      }),
                      i.currentTimeline.applyStylesToKeyframe(),
                      i.subContextCount > r && i.transformIntoNewTimeline()),
                      (t.previousNode = e);
                  },
                },
                {
                  key: "visitGroup",
                  value: function (e, t) {
                    var n = this,
                      r = [],
                      i = t.currentTimeline.currentTime,
                      o =
                        e.options && e.options.delay ? vl(e.options.delay) : 0;
                    e.steps.forEach(function (s) {
                      var a = t.createSubContext(e.options);
                      o && a.delayNextStep(o),
                        Dl(n, s, a),
                        (i = Math.max(i, a.currentTimeline.currentTime)),
                        r.push(a.currentTimeline);
                    }),
                      r.forEach(function (e) {
                        return t.currentTimeline.mergeTimelineCollectedStyles(
                          e,
                        );
                      }),
                      t.transformIntoNewTimeline(i),
                      (t.previousNode = e);
                  },
                },
                {
                  key: "_visitTiming",
                  value: function (e, t) {
                    if (e.dynamic) {
                      var n = e.strValue;
                      return yl(
                        t.params ? Cl(n, t.params, t.errors) : n,
                        t.errors,
                      );
                    }
                    return {
                      duration: e.duration,
                      delay: e.delay,
                      easing: e.easing,
                    };
                  },
                },
                {
                  key: "visitAnimate",
                  value: function (e, t) {
                    var n = (t.currentAnimateTimings = this._visitTiming(
                        e.timings,
                        t,
                      )),
                      r = t.currentTimeline;
                    n.delay &&
                      (t.incrementTime(n.delay), r.snapshotCurrentStyles());
                    var i = e.style;
                    5 == i.type
                      ? this.visitKeyframes(i, t)
                      : (t.incrementTime(n.duration),
                        this.visitStyle(i, t),
                        r.applyStylesToKeyframe()),
                      (t.currentAnimateTimings = null),
                      (t.previousNode = e);
                  },
                },
                {
                  key: "visitStyle",
                  value: function (e, t) {
                    var n = t.currentTimeline,
                      r = t.currentAnimateTimings;
                    !r &&
                      n.getCurrentStyleProperties().length &&
                      n.forwardFrame();
                    var i = (r && r.easing) || e.easing;
                    e.isEmptyStep
                      ? n.applyEmptyStep(i)
                      : n.setStyles(e.styles, i, t.errors, t.options),
                      (t.previousNode = e);
                  },
                },
                {
                  key: "visitKeyframes",
                  value: function (e, t) {
                    var n = t.currentAnimateTimings,
                      r = t.currentTimeline.duration,
                      i = n.duration,
                      o = t.createSubContext().currentTimeline;
                    (o.easing = n.easing),
                      e.styles.forEach(function (e) {
                        o.forwardTime((e.offset || 0) * i),
                          o.setStyles(e.styles, e.easing, t.errors, t.options),
                          o.applyStylesToKeyframe();
                      }),
                      t.currentTimeline.mergeTimelineCollectedStyles(o),
                      t.transformIntoNewTimeline(r + i),
                      (t.previousNode = e);
                  },
                },
                {
                  key: "visitQuery",
                  value: function (e, t) {
                    var n = this,
                      r = t.currentTimeline.currentTime,
                      i = e.options || {},
                      o = i.delay ? vl(i.delay) : 0;
                    o &&
                      (6 === t.previousNode.type ||
                        (0 == r &&
                          t.currentTimeline.getCurrentStyleProperties()
                            .length)) &&
                      (t.currentTimeline.snapshotCurrentStyles(),
                      (t.previousNode = $l));
                    var s = r,
                      a = t.invokeQuery(
                        e.selector,
                        e.originalSelector,
                        e.limit,
                        e.includeSelf,
                        !!i.optional,
                        t.errors,
                      );
                    t.currentQueryTotal = a.length;
                    var u = null;
                    a.forEach(function (r, i) {
                      t.currentQueryIndex = i;
                      var a = t.createSubContext(e.options, r);
                      o && a.delayNextStep(o),
                        r === t.element && (u = a.currentTimeline),
                        Dl(n, e.animation, a),
                        a.currentTimeline.applyStylesToKeyframe(),
                        (s = Math.max(s, a.currentTimeline.currentTime));
                    }),
                      (t.currentQueryIndex = 0),
                      (t.currentQueryTotal = 0),
                      t.transformIntoNewTimeline(s),
                      u &&
                        (t.currentTimeline.mergeTimelineCollectedStyles(u),
                        t.currentTimeline.snapshotCurrentStyles()),
                      (t.previousNode = e);
                  },
                },
                {
                  key: "visitStagger",
                  value: function (e, t) {
                    var n = t.parentContext,
                      r = t.currentTimeline,
                      i = e.timings,
                      o = Math.abs(i.duration),
                      s = o * (t.currentQueryTotal - 1),
                      a = o * t.currentQueryIndex;
                    switch (i.duration < 0 ? "reverse" : i.easing) {
                      case "reverse":
                        a = s - a;
                        break;
                      case "full":
                        a = n.currentStaggerTime;
                    }
                    var u = t.currentTimeline;
                    a && u.delayNextStep(a);
                    var l = u.currentTime;
                    Dl(this, e.animation, t),
                      (t.previousNode = e),
                      (n.currentStaggerTime =
                        r.currentTime -
                        l +
                        (r.startTime - n.currentTimeline.startTime));
                  },
                },
              ]),
              e
            );
          })(),
          $l = {},
          Jl = (function () {
            function e(t, n, r, i, o, s, a, u) {
              p(this, e),
                (this._driver = t),
                (this.element = n),
                (this.subInstructions = r),
                (this._enterClassName = i),
                (this._leaveClassName = o),
                (this.errors = s),
                (this.timelines = a),
                (this.parentContext = null),
                (this.currentAnimateTimings = null),
                (this.previousNode = $l),
                (this.subContextCount = 0),
                (this.options = {}),
                (this.currentQueryIndex = 0),
                (this.currentQueryTotal = 0),
                (this.currentStaggerTime = 0),
                (this.currentTimeline = u || new Yl(this._driver, n, 0)),
                a.push(this.currentTimeline);
            }
            return (
              m(e, [
                {
                  key: "params",
                  get: function () {
                    return this.options.params;
                  },
                },
                {
                  key: "updateOptions",
                  value: function (e, t) {
                    var n = this;
                    if (e) {
                      var r = e,
                        i = this.options;
                      null != r.duration && (i.duration = vl(r.duration)),
                        null != r.delay && (i.delay = vl(r.delay));
                      var o = r.params;
                      if (o) {
                        var s = i.params;
                        s || (s = this.options.params = {}),
                          Object.keys(o).forEach(function (e) {
                            (t && s.hasOwnProperty(e)) ||
                              (s[e] = Cl(o[e], s, n.errors));
                          });
                      }
                    }
                  },
                },
                {
                  key: "_copyOptions",
                  value: function () {
                    var e = {};
                    if (this.options) {
                      var t = this.options.params;
                      if (t) {
                        var n = (e.params = {});
                        Object.keys(t).forEach(function (e) {
                          n[e] = t[e];
                        });
                      }
                    }
                    return e;
                  },
                },
                {
                  key: "createSubContext",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      n = arguments.length > 1 ? arguments[1] : void 0,
                      r = arguments.length > 2 ? arguments[2] : void 0,
                      i = n || this.element,
                      o = new e(
                        this._driver,
                        i,
                        this.subInstructions,
                        this._enterClassName,
                        this._leaveClassName,
                        this.errors,
                        this.timelines,
                        this.currentTimeline.fork(i, r || 0),
                      );
                    return (
                      (o.previousNode = this.previousNode),
                      (o.currentAnimateTimings = this.currentAnimateTimings),
                      (o.options = this._copyOptions()),
                      o.updateOptions(t),
                      (o.currentQueryIndex = this.currentQueryIndex),
                      (o.currentQueryTotal = this.currentQueryTotal),
                      (o.parentContext = this),
                      this.subContextCount++,
                      o
                    );
                  },
                },
                {
                  key: "transformIntoNewTimeline",
                  value: function (e) {
                    return (
                      (this.previousNode = $l),
                      (this.currentTimeline = this.currentTimeline.fork(
                        this.element,
                        e,
                      )),
                      this.timelines.push(this.currentTimeline),
                      this.currentTimeline
                    );
                  },
                },
                {
                  key: "appendInstructionToTimeline",
                  value: function (e, t, n) {
                    var r = {
                        duration: null != t ? t : e.duration,
                        delay:
                          this.currentTimeline.currentTime +
                          (null != n ? n : 0) +
                          e.delay,
                        easing: "",
                      },
                      i = new Xl(
                        this._driver,
                        e.element,
                        e.keyframes,
                        e.preStyleProps,
                        e.postStyleProps,
                        r,
                        e.stretchStartingKeyframe,
                      );
                    return this.timelines.push(i), r;
                  },
                },
                {
                  key: "incrementTime",
                  value: function (e) {
                    this.currentTimeline.forwardTime(
                      this.currentTimeline.duration + e,
                    );
                  },
                },
                {
                  key: "delayNextStep",
                  value: function (e) {
                    e > 0 && this.currentTimeline.delayNextStep(e);
                  },
                },
                {
                  key: "invokeQuery",
                  value: function (e, t, r, i, o, s) {
                    var a = [];
                    if ((i && a.push(this.element), e.length > 0)) {
                      e = (e = e.replace(
                        Ul,
                        "." + this._enterClassName,
                      )).replace(Zl, "." + this._leaveClassName);
                      var u = this._driver.query(this.element, e, 1 != r);
                      0 !== r &&
                        (u =
                          r < 0
                            ? u.slice(u.length + r, u.length)
                            : u.slice(0, r)),
                        a.push.apply(a, n(u));
                    }
                    return (
                      o ||
                        0 != a.length ||
                        s.push(
                          '`query("'
                            .concat(
                              t,
                              '")` returned zero elements. (Use `query("',
                            )
                            .concat(
                              t,
                              '", { optional: true })` if you wish to allow this.)',
                            ),
                        ),
                      a
                    );
                  },
                },
              ]),
              e
            );
          })(),
          Yl = (function () {
            function e(t, n, r, i) {
              p(this, e),
                (this._driver = t),
                (this.element = n),
                (this.startTime = r),
                (this._elementTimelineStylesLookup = i),
                (this.duration = 0),
                (this._previousKeyframe = {}),
                (this._currentKeyframe = {}),
                (this._keyframes = new Map()),
                (this._styleSummary = {}),
                (this._pendingStyles = {}),
                (this._backFill = {}),
                (this._currentEmptyStepKeyframe = null),
                this._elementTimelineStylesLookup ||
                  (this._elementTimelineStylesLookup = new Map()),
                (this._localTimelineStyles = Object.create(this._backFill, {})),
                (this._globalTimelineStyles =
                  this._elementTimelineStylesLookup.get(n)),
                this._globalTimelineStyles ||
                  ((this._globalTimelineStyles = this._localTimelineStyles),
                  this._elementTimelineStylesLookup.set(
                    n,
                    this._localTimelineStyles,
                  )),
                this._loadKeyframe();
            }
            return (
              m(e, [
                {
                  key: "containsAnimation",
                  value: function () {
                    switch (this._keyframes.size) {
                      case 0:
                        return !1;
                      case 1:
                        return this.getCurrentStyleProperties().length > 0;
                      default:
                        return !0;
                    }
                  },
                },
                {
                  key: "getCurrentStyleProperties",
                  value: function () {
                    return Object.keys(this._currentKeyframe);
                  },
                },
                {
                  key: "currentTime",
                  get: function () {
                    return this.startTime + this.duration;
                  },
                },
                {
                  key: "delayNextStep",
                  value: function (e) {
                    var t =
                      1 == this._keyframes.size &&
                      Object.keys(this._pendingStyles).length;
                    this.duration || t
                      ? (this.forwardTime(this.currentTime + e),
                        t && this.snapshotCurrentStyles())
                      : (this.startTime += e);
                  },
                },
                {
                  key: "fork",
                  value: function (t, n) {
                    return (
                      this.applyStylesToKeyframe(),
                      new e(
                        this._driver,
                        t,
                        n || this.currentTime,
                        this._elementTimelineStylesLookup,
                      )
                    );
                  },
                },
                {
                  key: "_loadKeyframe",
                  value: function () {
                    this._currentKeyframe &&
                      (this._previousKeyframe = this._currentKeyframe),
                      (this._currentKeyframe = this._keyframes.get(
                        this.duration,
                      )),
                      this._currentKeyframe ||
                        ((this._currentKeyframe = Object.create(
                          this._backFill,
                          {},
                        )),
                        this._keyframes.set(
                          this.duration,
                          this._currentKeyframe,
                        ));
                  },
                },
                {
                  key: "forwardFrame",
                  value: function () {
                    (this.duration += 1), this._loadKeyframe();
                  },
                },
                {
                  key: "forwardTime",
                  value: function (e) {
                    this.applyStylesToKeyframe(),
                      (this.duration = e),
                      this._loadKeyframe();
                  },
                },
                {
                  key: "_updateStyle",
                  value: function (e, t) {
                    (this._localTimelineStyles[e] = t),
                      (this._globalTimelineStyles[e] = t),
                      (this._styleSummary[e] = {
                        time: this.currentTime,
                        value: t,
                      });
                  },
                },
                {
                  key: "allowOnlyTimelineStyles",
                  value: function () {
                    return (
                      this._currentEmptyStepKeyframe !== this._currentKeyframe
                    );
                  },
                },
                {
                  key: "applyEmptyStep",
                  value: function (e) {
                    var t = this;
                    e && (this._previousKeyframe.easing = e),
                      Object.keys(this._globalTimelineStyles).forEach(
                        function (e) {
                          (t._backFill[e] = t._globalTimelineStyles[e] || "*"),
                            (t._currentKeyframe[e] = "*");
                        },
                      ),
                      (this._currentEmptyStepKeyframe = this._currentKeyframe);
                  },
                },
                {
                  key: "setStyles",
                  value: function (e, t, n, r) {
                    var i = this;
                    t && (this._previousKeyframe.easing = t);
                    var o = (r && r.params) || {},
                      s = (function (e, t) {
                        var n,
                          r = {};
                        return (
                          e.forEach(function (e) {
                            "*" === e
                              ? (n = n || Object.keys(t)).forEach(function (e) {
                                  r[e] = "*";
                                })
                              : gl(e, !1, r);
                          }),
                          r
                        );
                      })(e, this._globalTimelineStyles);
                    Object.keys(s).forEach(function (e) {
                      var t = Cl(s[e], o, n);
                      (i._pendingStyles[e] = t),
                        i._localTimelineStyles.hasOwnProperty(e) ||
                          (i._backFill[e] =
                            i._globalTimelineStyles.hasOwnProperty(e)
                              ? i._globalTimelineStyles[e]
                              : "*"),
                        i._updateStyle(e, t);
                    });
                  },
                },
                {
                  key: "applyStylesToKeyframe",
                  value: function () {
                    var e = this,
                      t = this._pendingStyles,
                      n = Object.keys(t);
                    0 != n.length &&
                      ((this._pendingStyles = {}),
                      n.forEach(function (n) {
                        e._currentKeyframe[n] = t[n];
                      }),
                      Object.keys(this._localTimelineStyles).forEach(
                        function (t) {
                          e._currentKeyframe.hasOwnProperty(t) ||
                            (e._currentKeyframe[t] = e._localTimelineStyles[t]);
                        },
                      ));
                  },
                },
                {
                  key: "snapshotCurrentStyles",
                  value: function () {
                    var e = this;
                    Object.keys(this._localTimelineStyles).forEach(
                      function (t) {
                        var n = e._localTimelineStyles[t];
                        (e._pendingStyles[t] = n), e._updateStyle(t, n);
                      },
                    );
                  },
                },
                {
                  key: "getFinalKeyframe",
                  value: function () {
                    return this._keyframes.get(this.duration);
                  },
                },
                {
                  key: "properties",
                  get: function () {
                    var e = [];
                    for (var t in this._currentKeyframe) e.push(t);
                    return e;
                  },
                },
                {
                  key: "mergeTimelineCollectedStyles",
                  value: function (e) {
                    var t = this;
                    Object.keys(e._styleSummary).forEach(function (n) {
                      var r = t._styleSummary[n],
                        i = e._styleSummary[n];
                      (!r || i.time > r.time) && t._updateStyle(n, i.value);
                    });
                  },
                },
                {
                  key: "buildKeyframes",
                  value: function () {
                    var e = this;
                    this.applyStylesToKeyframe();
                    var t = new Set(),
                      n = new Set(),
                      r = 1 === this._keyframes.size && 0 === this.duration,
                      i = [];
                    this._keyframes.forEach(function (o, s) {
                      var a = gl(o, !0);
                      Object.keys(a).forEach(function (e) {
                        var r = a[e];
                        "!" == r ? t.add(e) : "*" == r && n.add(e);
                      }),
                        r || (a.offset = s / e.duration),
                        i.push(a);
                    });
                    var o = t.size ? xl(t.values()) : [],
                      s = n.size ? xl(n.values()) : [];
                    if (r) {
                      var a = i[0],
                        u = ml(a);
                      (a.offset = 0), (u.offset = 1), (i = [a, u]);
                    }
                    return Kl(
                      this.element,
                      i,
                      o,
                      s,
                      this.duration,
                      this.startTime,
                      this.easing,
                      !1,
                    );
                  },
                },
              ]),
              e
            );
          })(),
          Xl = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r, i, o, s, a) {
              var u,
                l =
                  arguments.length > 6 &&
                  void 0 !== arguments[6] &&
                  arguments[6];
              return (
                p(this, n),
                ((u = t.call(this, e, r, a.delay)).element = r),
                (u.keyframes = i),
                (u.preStyleProps = o),
                (u.postStyleProps = s),
                (u._stretchStartingKeyframe = l),
                (u.timings = {
                  duration: a.duration,
                  delay: a.delay,
                  easing: a.easing,
                }),
                u
              );
            }
            return (
              m(n, [
                {
                  key: "containsAnimation",
                  value: function () {
                    return this.keyframes.length > 1;
                  },
                },
                {
                  key: "buildKeyframes",
                  value: function () {
                    var e = this.keyframes,
                      t = this.timings,
                      n = t.delay,
                      r = t.duration,
                      i = t.easing;
                    if (this._stretchStartingKeyframe && n) {
                      var o = [],
                        s = r + n,
                        a = n / s,
                        u = gl(e[0], !1);
                      (u.offset = 0), o.push(u);
                      var l = gl(e[0], !1);
                      (l.offset = ec(a)), o.push(l);
                      for (var c = e.length - 1, h = 1; h <= c; h++) {
                        var f = gl(e[h], !1);
                        (f.offset = ec((n + f.offset * r) / s)), o.push(f);
                      }
                      (r = s), (n = 0), (i = ""), (e = o);
                    }
                    return Kl(
                      this.element,
                      e,
                      this.preStyleProps,
                      this.postStyleProps,
                      r,
                      n,
                      i,
                      !0,
                    );
                  },
                },
              ]),
              n
            );
          })(Yl);
        function ec(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 3,
            n = Math.pow(10, t - 1);
          return Math.round(e * n) / n;
        }
        var tc = function e() {
            p(this, e);
          },
          nc = (function (e) {
            u(n, e);
            var t = c(n);
            function n() {
              return p(this, n), t.apply(this, arguments);
            }
            return (
              m(n, [
                {
                  key: "normalizePropertyName",
                  value: function (e, t) {
                    return Pl(e);
                  },
                },
                {
                  key: "normalizeStyleValue",
                  value: function (e, t, n, r) {
                    var i = "",
                      o = n.toString().trim();
                    if (rc[t] && 0 !== n && "0" !== n)
                      if ("number" == typeof n) i = "px";
                      else {
                        var s = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                        s &&
                          0 == s[1].length &&
                          r.push(
                            "Please provide a CSS unit value for "
                              .concat(e, ":")
                              .concat(n),
                          );
                      }
                    return o + i;
                  },
                },
              ]),
              n
            );
          })(tc),
          rc = (function (e) {
            var t = {};
            return (
              e.forEach(function (e) {
                return (t[e] = !0);
              }),
              t
            );
          })(
            "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(
              ",",
            ),
          );
        function ic(e, t, n, r, i, o, s, a, u, l, c, h, f) {
          return {
            type: 0,
            element: e,
            triggerName: t,
            isRemovalTransition: i,
            fromState: n,
            fromStyles: o,
            toState: r,
            toStyles: s,
            timelines: a,
            queriedElements: u,
            preStyleProps: l,
            postStyleProps: c,
            totalTime: h,
            errors: f,
          };
        }
        var oc = {},
          sc = (function () {
            function e(t, n, r) {
              p(this, e),
                (this._triggerName = t),
                (this.ast = n),
                (this._stateStyles = r);
            }
            return (
              m(e, [
                {
                  key: "match",
                  value: function (e, t, n, r) {
                    return (function (e, t, n, r, i) {
                      return e.some(function (e) {
                        return e(t, n, r, i);
                      });
                    })(this.ast.matchers, e, t, n, r);
                  },
                },
                {
                  key: "buildStyles",
                  value: function (e, t, n) {
                    var r = this._stateStyles["*"],
                      i = this._stateStyles[e],
                      o = r ? r.buildStyles(t, n) : {};
                    return i ? i.buildStyles(t, n) : o;
                  },
                },
                {
                  key: "build",
                  value: function (e, t, n, r, i, o, s, a, u, l) {
                    var c = [],
                      h = (this.ast.options && this.ast.options.params) || oc,
                      f = this.buildStyles(n, (s && s.params) || oc, c),
                      d = (a && a.params) || oc,
                      v = this.buildStyles(r, d, c),
                      p = new Set(),
                      y = new Map(),
                      m = new Map(),
                      g = "void" === r,
                      _ = { params: Object.assign(Object.assign({}, h), d) },
                      k = l
                        ? []
                        : Wl(e, t, this.ast.animation, i, o, f, v, _, u, c),
                      b = 0;
                    if (
                      (k.forEach(function (e) {
                        b = Math.max(e.duration + e.delay, b);
                      }),
                      c.length)
                    )
                      return ic(
                        t,
                        this._triggerName,
                        n,
                        r,
                        g,
                        f,
                        v,
                        [],
                        [],
                        y,
                        m,
                        b,
                        c,
                      );
                    k.forEach(function (e) {
                      var n = e.element,
                        r = Xu(y, n, {});
                      e.preStyleProps.forEach(function (e) {
                        return (r[e] = !0);
                      });
                      var i = Xu(m, n, {});
                      e.postStyleProps.forEach(function (e) {
                        return (i[e] = !0);
                      }),
                        n !== t && p.add(n);
                    });
                    var w = xl(p.values());
                    return ic(
                      t,
                      this._triggerName,
                      n,
                      r,
                      g,
                      f,
                      v,
                      k,
                      w,
                      y,
                      m,
                      b,
                    );
                  },
                },
              ]),
              e
            );
          })(),
          ac = (function () {
            function e(t, n) {
              p(this, e), (this.styles = t), (this.defaultParams = n);
            }
            return (
              m(e, [
                {
                  key: "buildStyles",
                  value: function (e, t) {
                    var n = {},
                      r = ml(this.defaultParams);
                    return (
                      Object.keys(e).forEach(function (t) {
                        var n = e[t];
                        null != n && (r[t] = n);
                      }),
                      this.styles.styles.forEach(function (e) {
                        if ("string" != typeof e) {
                          var i = e;
                          Object.keys(i).forEach(function (e) {
                            var o = i[e];
                            o.length > 1 && (o = Cl(o, r, t)), (n[e] = o);
                          });
                        }
                      }),
                      n
                    );
                  },
                },
              ]),
              e
            );
          })(),
          uc = (function () {
            function e(t, n) {
              var r = this;
              p(this, e),
                (this.name = t),
                (this.ast = n),
                (this.transitionFactories = []),
                (this.states = {}),
                n.states.forEach(function (e) {
                  r.states[e.name] = new ac(
                    e.style,
                    (e.options && e.options.params) || {},
                  );
                }),
                lc(this.states, "true", "1"),
                lc(this.states, "false", "0"),
                n.transitions.forEach(function (e) {
                  r.transitionFactories.push(new sc(t, e, r.states));
                }),
                (this.fallbackTransition = new sc(
                  t,
                  {
                    type: 1,
                    animation: { type: 2, steps: [], options: null },
                    matchers: [
                      function (e, t) {
                        return !0;
                      },
                    ],
                    options: null,
                    queryCount: 0,
                    depCount: 0,
                  },
                  this.states,
                ));
            }
            return (
              m(e, [
                {
                  key: "containsQueries",
                  get: function () {
                    return this.ast.queryCount > 0;
                  },
                },
                {
                  key: "matchTransition",
                  value: function (e, t, n, r) {
                    return (
                      this.transitionFactories.find(function (i) {
                        return i.match(e, t, n, r);
                      }) || null
                    );
                  },
                },
                {
                  key: "matchStyles",
                  value: function (e, t, n) {
                    return this.fallbackTransition.buildStyles(e, t, n);
                  },
                },
              ]),
              e
            );
          })();
        function lc(e, t, n) {
          e.hasOwnProperty(t)
            ? e.hasOwnProperty(n) || (e[n] = e[t])
            : e.hasOwnProperty(n) && (e[t] = e[n]);
        }
        var cc = new Ql(),
          hc = (function () {
            function e(t, n, r) {
              p(this, e),
                (this.bodyNode = t),
                (this._driver = n),
                (this._normalizer = r),
                (this._animations = {}),
                (this._playersById = {}),
                (this.players = []);
            }
            return (
              m(e, [
                {
                  key: "register",
                  value: function (e, t) {
                    var n = [],
                      r = Hl(this._driver, t, n);
                    if (n.length)
                      throw new Error(
                        "Unable to build the animation due to the following errors: ".concat(
                          n.join("\n"),
                        ),
                      );
                    this._animations[e] = r;
                  },
                },
                {
                  key: "_buildPlayer",
                  value: function (e, t, n) {
                    var r = e.element,
                      i = Gu(0, this._normalizer, 0, e.keyframes, t, n);
                    return this._driver.animate(
                      r,
                      i,
                      e.duration,
                      e.delay,
                      e.easing,
                      [],
                      !0,
                    );
                  },
                },
                {
                  key: "create",
                  value: function (e, t) {
                    var n,
                      r = this,
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {},
                      o = [],
                      s = this._animations[e],
                      a = new Map();
                    if (
                      (s
                        ? (n = Wl(
                            this._driver,
                            t,
                            s,
                            "ng-enter",
                            "ng-leave",
                            {},
                            {},
                            i,
                            cc,
                            o,
                          )).forEach(function (e) {
                            var t = Xu(a, e.element, {});
                            e.postStyleProps.forEach(function (e) {
                              return (t[e] = null);
                            });
                          })
                        : (o.push(
                            "The requested animation doesn't exist or has already been destroyed",
                          ),
                          (n = [])),
                      o.length)
                    )
                      throw new Error(
                        "Unable to create the animation due to the following errors: ".concat(
                          o.join("\n"),
                        ),
                      );
                    a.forEach(function (e, t) {
                      Object.keys(e).forEach(function (n) {
                        e[n] = r._driver.computeStyle(t, n, "*");
                      });
                    });
                    var u = Wu(
                      n.map(function (e) {
                        var t = a.get(e.element);
                        return r._buildPlayer(e, {}, t);
                      }),
                    );
                    return (
                      (this._playersById[e] = u),
                      u.onDestroy(function () {
                        return r.destroy(e);
                      }),
                      this.players.push(u),
                      u
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function (e) {
                    var t = this._getPlayer(e);
                    t.destroy(), delete this._playersById[e];
                    var n = this.players.indexOf(t);
                    n >= 0 && this.players.splice(n, 1);
                  },
                },
                {
                  key: "_getPlayer",
                  value: function (e) {
                    var t = this._playersById[e];
                    if (!t)
                      throw new Error(
                        "Unable to find the timeline player referenced by ".concat(
                          e,
                        ),
                      );
                    return t;
                  },
                },
                {
                  key: "listen",
                  value: function (e, t, n, r) {
                    var i = Yu(t, "", "", "");
                    return $u(this._getPlayer(e), n, i, r), function () {};
                  },
                },
                {
                  key: "command",
                  value: function (e, t, n, r) {
                    if ("register" != n)
                      if ("create" != n) {
                        var i = this._getPlayer(e);
                        switch (n) {
                          case "play":
                            i.play();
                            break;
                          case "pause":
                            i.pause();
                            break;
                          case "reset":
                            i.reset();
                            break;
                          case "restart":
                            i.restart();
                            break;
                          case "finish":
                            i.finish();
                            break;
                          case "init":
                            i.init();
                            break;
                          case "setPosition":
                            i.setPosition(parseFloat(r[0]));
                            break;
                          case "destroy":
                            this.destroy(e);
                        }
                      } else this.create(e, t, r[0] || {});
                    else this.register(e, r[0]);
                  },
                },
              ]),
              e
            );
          })(),
          fc = [],
          dc = {
            namespaceId: "",
            setForRemoval: !1,
            setForMove: !1,
            hasAnimation: !1,
            removedBeforeQueried: !1,
          },
          vc = {
            namespaceId: "",
            setForMove: !1,
            setForRemoval: !1,
            hasAnimation: !1,
            removedBeforeQueried: !0,
          },
          pc = (function () {
            function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
              p(this, e), (this.namespaceId = n);
              var r,
                i = t && t.hasOwnProperty("value");
              if (
                ((this.value = null != (r = i ? t.value : t) ? r : null), i)
              ) {
                var o = ml(t);
                delete o.value, (this.options = o);
              } else this.options = {};
              this.options.params || (this.options.params = {});
            }
            return (
              m(e, [
                {
                  key: "params",
                  get: function () {
                    return this.options.params;
                  },
                },
                {
                  key: "absorbOptions",
                  value: function (e) {
                    var t = e.params;
                    if (t) {
                      var n = this.options.params;
                      Object.keys(t).forEach(function (e) {
                        null == n[e] && (n[e] = t[e]);
                      });
                    }
                  },
                },
              ]),
              e
            );
          })(),
          yc = new pc("void"),
          mc = (function () {
            function e(t, n, r) {
              p(this, e),
                (this.id = t),
                (this.hostElement = n),
                (this._engine = r),
                (this.players = []),
                (this._triggers = {}),
                (this._queue = []),
                (this._elementListeners = new Map()),
                (this._hostClassName = "ng-tns-" + t),
                Sc(n, this._hostClassName);
            }
            return (
              m(e, [
                {
                  key: "listen",
                  value: function (e, t, n, r) {
                    var i,
                      o = this;
                    if (!this._triggers.hasOwnProperty(t))
                      throw new Error(
                        'Unable to listen on the animation trigger event "'
                          .concat(n, '" because the animation trigger "')
                          .concat(t, "\" doesn't exist!"),
                      );
                    if (null == n || 0 == n.length)
                      throw new Error(
                        'Unable to listen on the animation trigger "'.concat(
                          t,
                          '" because the provided event is undefined!',
                        ),
                      );
                    if ("start" != (i = n) && "done" != i)
                      throw new Error(
                        'The provided animation trigger event "'
                          .concat(n, '" for the animation trigger "')
                          .concat(t, '" is not supported!'),
                      );
                    var s = Xu(this._elementListeners, e, []),
                      a = { name: t, phase: n, callback: r };
                    s.push(a);
                    var u = Xu(this._engine.statesByElement, e, {});
                    return (
                      u.hasOwnProperty(t) ||
                        (Sc(e, "ng-trigger"),
                        Sc(e, "ng-trigger-" + t),
                        (u[t] = yc)),
                      function () {
                        o._engine.afterFlush(function () {
                          var e = s.indexOf(a);
                          e >= 0 && s.splice(e, 1),
                            o._triggers[t] || delete u[t];
                        });
                      }
                    );
                  },
                },
                {
                  key: "register",
                  value: function (e, t) {
                    return !this._triggers[e] && ((this._triggers[e] = t), !0);
                  },
                },
                {
                  key: "_getTrigger",
                  value: function (e) {
                    var t = this._triggers[e];
                    if (!t)
                      throw new Error(
                        'The provided animation trigger "'.concat(
                          e,
                          '" has not been registered!',
                        ),
                      );
                    return t;
                  },
                },
                {
                  key: "trigger",
                  value: function (e, t, n) {
                    var r = this,
                      i =
                        !(arguments.length > 3 && void 0 !== arguments[3]) ||
                        arguments[3],
                      o = this._getTrigger(t),
                      s = new _c(this.id, t, e),
                      a = this._engine.statesByElement.get(e);
                    a ||
                      (Sc(e, "ng-trigger"),
                      Sc(e, "ng-trigger-" + t),
                      this._engine.statesByElement.set(e, (a = {})));
                    var u = a[t],
                      l = new pc(n, this.id);
                    if (
                      (!(n && n.hasOwnProperty("value")) &&
                        u &&
                        l.absorbOptions(u.options),
                      (a[t] = l),
                      u || (u = yc),
                      "void" === l.value || u.value !== l.value)
                    ) {
                      var c = Xu(this._engine.playersByElement, e, []);
                      c.forEach(function (e) {
                        e.namespaceId == r.id &&
                          e.triggerName == t &&
                          e.queued &&
                          e.destroy();
                      });
                      var h = o.matchTransition(u.value, l.value, e, l.params),
                        f = !1;
                      if (!h) {
                        if (!i) return;
                        (h = o.fallbackTransition), (f = !0);
                      }
                      return (
                        this._engine.totalQueuedPlayers++,
                        this._queue.push({
                          element: e,
                          triggerName: t,
                          transition: h,
                          fromState: u,
                          toState: l,
                          player: s,
                          isFallbackTransition: f,
                        }),
                        f ||
                          (Sc(e, "ng-animate-queued"),
                          s.onStart(function () {
                            Tc(e, "ng-animate-queued");
                          })),
                        s.onDone(function () {
                          var t = r.players.indexOf(s);
                          t >= 0 && r.players.splice(t, 1);
                          var n = r._engine.playersByElement.get(e);
                          if (n) {
                            var i = n.indexOf(s);
                            i >= 0 && n.splice(i, 1);
                          }
                        }),
                        this.players.push(s),
                        c.push(s),
                        s
                      );
                    }
                    if (
                      !(function (e, t) {
                        var n = Object.keys(e),
                          r = Object.keys(t);
                        if (n.length != r.length) return !1;
                        for (var i = 0; i < n.length; i++) {
                          var o = n[i];
                          if (!t.hasOwnProperty(o) || e[o] !== t[o]) return !1;
                        }
                        return !0;
                      })(u.params, l.params)
                    ) {
                      var d = [],
                        v = o.matchStyles(u.value, u.params, d),
                        p = o.matchStyles(l.value, l.params, d);
                      d.length
                        ? this._engine.reportError(d)
                        : this._engine.afterFlush(function () {
                            wl(e, v), bl(e, p);
                          });
                    }
                  },
                },
                {
                  key: "deregister",
                  value: function (e) {
                    var t = this;
                    delete this._triggers[e],
                      this._engine.statesByElement.forEach(function (t, n) {
                        delete t[e];
                      }),
                      this._elementListeners.forEach(function (n, r) {
                        t._elementListeners.set(
                          r,
                          n.filter(function (t) {
                            return t.name != e;
                          }),
                        );
                      });
                  },
                },
                {
                  key: "clearElementCache",
                  value: function (e) {
                    this._engine.statesByElement.delete(e),
                      this._elementListeners.delete(e);
                    var t = this._engine.playersByElement.get(e);
                    t &&
                      (t.forEach(function (e) {
                        return e.destroy();
                      }),
                      this._engine.playersByElement.delete(e));
                  },
                },
                {
                  key: "_signalRemovalForInnerTriggers",
                  value: function (e, t) {
                    var n = this,
                      r = this._engine.driver.query(e, ".ng-trigger", !0);
                    r.forEach(function (e) {
                      if (!e.__ng_removed) {
                        var r = n._engine.fetchNamespacesByElement(e);
                        r.size
                          ? r.forEach(function (n) {
                              return n.triggerLeaveAnimation(e, t, !1, !0);
                            })
                          : n.clearElementCache(e);
                      }
                    }),
                      this._engine.afterFlushAnimationsDone(function () {
                        return r.forEach(function (e) {
                          return n.clearElementCache(e);
                        });
                      });
                  },
                },
                {
                  key: "triggerLeaveAnimation",
                  value: function (e, t, n, r) {
                    var i = this,
                      o = this._engine.statesByElement.get(e);
                    if (o) {
                      var s = [];
                      if (
                        (Object.keys(o).forEach(function (t) {
                          if (i._triggers[t]) {
                            var n = i.trigger(e, t, "void", r);
                            n && s.push(n);
                          }
                        }),
                        s.length)
                      )
                        return (
                          this._engine.markElementAsRemoved(this.id, e, !0, t),
                          n &&
                            Wu(s).onDone(function () {
                              return i._engine.processLeaveNode(e);
                            }),
                          !0
                        );
                    }
                    return !1;
                  },
                },
                {
                  key: "prepareLeaveAnimationListeners",
                  value: function (e) {
                    var t = this,
                      n = this._elementListeners.get(e),
                      r = this._engine.statesByElement.get(e);
                    if (n && r) {
                      var i = new Set();
                      n.forEach(function (n) {
                        var o = n.name;
                        if (!i.has(o)) {
                          i.add(o);
                          var s = t._triggers[o].fallbackTransition,
                            a = r[o] || yc,
                            u = new pc("void"),
                            l = new _c(t.id, o, e);
                          t._engine.totalQueuedPlayers++,
                            t._queue.push({
                              element: e,
                              triggerName: o,
                              transition: s,
                              fromState: a,
                              toState: u,
                              player: l,
                              isFallbackTransition: !0,
                            });
                        }
                      });
                    }
                  },
                },
                {
                  key: "removeNode",
                  value: function (e, t) {
                    var n = this,
                      r = this._engine;
                    if (
                      (e.childElementCount &&
                        this._signalRemovalForInnerTriggers(e, t),
                      !this.triggerLeaveAnimation(e, t, !0))
                    ) {
                      var i = !1;
                      if (r.totalAnimations) {
                        var o = r.players.length
                          ? r.playersByQueriedElement.get(e)
                          : [];
                        if (o && o.length) i = !0;
                        else
                          for (var s = e; (s = s.parentNode); )
                            if (r.statesByElement.get(s)) {
                              i = !0;
                              break;
                            }
                      }
                      if ((this.prepareLeaveAnimationListeners(e), i))
                        r.markElementAsRemoved(this.id, e, !1, t);
                      else {
                        var a = e.__ng_removed;
                        (a && a !== dc) ||
                          (r.afterFlush(function () {
                            return n.clearElementCache(e);
                          }),
                          r.destroyInnerAnimations(e),
                          r._onRemovalComplete(e, t));
                      }
                    }
                  },
                },
                {
                  key: "insertNode",
                  value: function (e, t) {
                    Sc(e, this._hostClassName);
                  },
                },
                {
                  key: "drainQueuedTransitions",
                  value: function (e) {
                    var t = this,
                      n = [];
                    return (
                      this._queue.forEach(function (r) {
                        var i = r.player;
                        if (!i.destroyed) {
                          var o = r.element,
                            s = t._elementListeners.get(o);
                          s &&
                            s.forEach(function (t) {
                              if (t.name == r.triggerName) {
                                var n = Yu(
                                  o,
                                  r.triggerName,
                                  r.fromState.value,
                                  r.toState.value,
                                );
                                (n._data = e),
                                  $u(r.player, t.phase, n, t.callback);
                              }
                            }),
                            i.markedForDestroy
                              ? t._engine.afterFlush(function () {
                                  i.destroy();
                                })
                              : n.push(r);
                        }
                      }),
                      (this._queue = []),
                      n.sort(function (e, n) {
                        var r = e.transition.ast.depCount,
                          i = n.transition.ast.depCount;
                        return 0 == r || 0 == i
                          ? r - i
                          : t._engine.driver.containsElement(
                              e.element,
                              n.element,
                            )
                          ? 1
                          : -1;
                      })
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function (e) {
                    this.players.forEach(function (e) {
                      return e.destroy();
                    }),
                      this._signalRemovalForInnerTriggers(this.hostElement, e);
                  },
                },
                {
                  key: "elementContainsData",
                  value: function (e) {
                    var t = !1;
                    return (
                      this._elementListeners.has(e) && (t = !0),
                      (t =
                        !!this._queue.find(function (t) {
                          return t.element === e;
                        }) || t)
                    );
                  },
                },
              ]),
              e
            );
          })(),
          gc = (function () {
            function e(t, n, r) {
              p(this, e),
                (this.bodyNode = t),
                (this.driver = n),
                (this._normalizer = r),
                (this.players = []),
                (this.newHostElements = new Map()),
                (this.playersByElement = new Map()),
                (this.playersByQueriedElement = new Map()),
                (this.statesByElement = new Map()),
                (this.disabledNodes = new Set()),
                (this.totalAnimations = 0),
                (this.totalQueuedPlayers = 0),
                (this._namespaceLookup = {}),
                (this._namespaceList = []),
                (this._flushFns = []),
                (this._whenQuietFns = []),
                (this.namespacesByHostElement = new Map()),
                (this.collectedEnterElements = []),
                (this.collectedLeaveElements = []),
                (this.onRemovalComplete = function (e, t) {});
            }
            return (
              m(e, [
                {
                  key: "_onRemovalComplete",
                  value: function (e, t) {
                    this.onRemovalComplete(e, t);
                  },
                },
                {
                  key: "queuedPlayers",
                  get: function () {
                    var e = [];
                    return (
                      this._namespaceList.forEach(function (t) {
                        t.players.forEach(function (t) {
                          t.queued && e.push(t);
                        });
                      }),
                      e
                    );
                  },
                },
                {
                  key: "createNamespace",
                  value: function (e, t) {
                    var n = new mc(e, t, this);
                    return (
                      this.bodyNode &&
                      this.driver.containsElement(this.bodyNode, t)
                        ? this._balanceNamespaceList(n, t)
                        : (this.newHostElements.set(t, n),
                          this.collectEnterElement(t)),
                      (this._namespaceLookup[e] = n)
                    );
                  },
                },
                {
                  key: "_balanceNamespaceList",
                  value: function (e, t) {
                    var n = this._namespaceList.length - 1;
                    if (n >= 0) {
                      for (var r = !1, i = n; i >= 0; i--)
                        if (
                          this.driver.containsElement(
                            this._namespaceList[i].hostElement,
                            t,
                          )
                        ) {
                          this._namespaceList.splice(i + 1, 0, e), (r = !0);
                          break;
                        }
                      r || this._namespaceList.splice(0, 0, e);
                    } else this._namespaceList.push(e);
                    return this.namespacesByHostElement.set(t, e), e;
                  },
                },
                {
                  key: "register",
                  value: function (e, t) {
                    var n = this._namespaceLookup[e];
                    return n || (n = this.createNamespace(e, t)), n;
                  },
                },
                {
                  key: "registerTrigger",
                  value: function (e, t, n) {
                    var r = this._namespaceLookup[e];
                    r && r.register(t, n) && this.totalAnimations++;
                  },
                },
                {
                  key: "destroy",
                  value: function (e, t) {
                    var n = this;
                    if (e) {
                      var r = this._fetchNamespace(e);
                      this.afterFlush(function () {
                        n.namespacesByHostElement.delete(r.hostElement),
                          delete n._namespaceLookup[e];
                        var t = n._namespaceList.indexOf(r);
                        t >= 0 && n._namespaceList.splice(t, 1);
                      }),
                        this.afterFlushAnimationsDone(function () {
                          return r.destroy(t);
                        });
                    }
                  },
                },
                {
                  key: "_fetchNamespace",
                  value: function (e) {
                    return this._namespaceLookup[e];
                  },
                },
                {
                  key: "fetchNamespacesByElement",
                  value: function (e) {
                    var t = new Set(),
                      n = this.statesByElement.get(e);
                    if (n)
                      for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                        var o = n[r[i]].namespaceId;
                        if (o) {
                          var s = this._fetchNamespace(o);
                          s && t.add(s);
                        }
                      }
                    return t;
                  },
                },
                {
                  key: "trigger",
                  value: function (e, t, n, r) {
                    if (kc(t)) {
                      var i = this._fetchNamespace(e);
                      if (i) return i.trigger(t, n, r), !0;
                    }
                    return !1;
                  },
                },
                {
                  key: "insertNode",
                  value: function (e, t, n, r) {
                    if (kc(t)) {
                      var i = t.__ng_removed;
                      if (i && i.setForRemoval) {
                        (i.setForRemoval = !1), (i.setForMove = !0);
                        var o = this.collectedLeaveElements.indexOf(t);
                        o >= 0 && this.collectedLeaveElements.splice(o, 1);
                      }
                      if (e) {
                        var s = this._fetchNamespace(e);
                        s && s.insertNode(t, n);
                      }
                      r && this.collectEnterElement(t);
                    }
                  },
                },
                {
                  key: "collectEnterElement",
                  value: function (e) {
                    this.collectedEnterElements.push(e);
                  },
                },
                {
                  key: "markElementAsDisabled",
                  value: function (e, t) {
                    t
                      ? this.disabledNodes.has(e) ||
                        (this.disabledNodes.add(e),
                        Sc(e, "ng-animate-disabled"))
                      : this.disabledNodes.has(e) &&
                        (this.disabledNodes.delete(e),
                        Tc(e, "ng-animate-disabled"));
                  },
                },
                {
                  key: "removeNode",
                  value: function (e, t, n, r) {
                    if (kc(t)) {
                      var i = e ? this._fetchNamespace(e) : null;
                      if (
                        (i
                          ? i.removeNode(t, r)
                          : this.markElementAsRemoved(e, t, !1, r),
                        n)
                      ) {
                        var o = this.namespacesByHostElement.get(t);
                        o && o.id !== e && o.removeNode(t, r);
                      }
                    } else this._onRemovalComplete(t, r);
                  },
                },
                {
                  key: "markElementAsRemoved",
                  value: function (e, t, n, r) {
                    this.collectedLeaveElements.push(t),
                      (t.__ng_removed = {
                        namespaceId: e,
                        setForRemoval: r,
                        hasAnimation: n,
                        removedBeforeQueried: !1,
                      });
                  },
                },
                {
                  key: "listen",
                  value: function (e, t, n, r, i) {
                    return kc(t)
                      ? this._fetchNamespace(e).listen(t, n, r, i)
                      : function () {};
                  },
                },
                {
                  key: "_buildInstruction",
                  value: function (e, t, n, r, i) {
                    return e.transition.build(
                      this.driver,
                      e.element,
                      e.fromState.value,
                      e.toState.value,
                      n,
                      r,
                      e.fromState.options,
                      e.toState.options,
                      t,
                      i,
                    );
                  },
                },
                {
                  key: "destroyInnerAnimations",
                  value: function (e) {
                    var t = this,
                      n = this.driver.query(e, ".ng-trigger", !0);
                    n.forEach(function (e) {
                      return t.destroyActiveAnimationsForElement(e);
                    }),
                      0 != this.playersByQueriedElement.size &&
                        (n = this.driver.query(e, ".ng-animating", !0)).forEach(
                          function (e) {
                            return t.finishActiveQueriedAnimationOnElement(e);
                          },
                        );
                  },
                },
                {
                  key: "destroyActiveAnimationsForElement",
                  value: function (e) {
                    var t = this.playersByElement.get(e);
                    t &&
                      t.forEach(function (e) {
                        e.queued ? (e.markedForDestroy = !0) : e.destroy();
                      });
                  },
                },
                {
                  key: "finishActiveQueriedAnimationOnElement",
                  value: function (e) {
                    var t = this.playersByQueriedElement.get(e);
                    t &&
                      t.forEach(function (e) {
                        return e.finish();
                      });
                  },
                },
                {
                  key: "whenRenderingDone",
                  value: function () {
                    var e = this;
                    return new Promise(function (t) {
                      if (e.players.length)
                        return Wu(e.players).onDone(function () {
                          return t();
                        });
                      t();
                    });
                  },
                },
                {
                  key: "processLeaveNode",
                  value: function (e) {
                    var t = this,
                      n = e.__ng_removed;
                    if (n && n.setForRemoval) {
                      if (((e.__ng_removed = dc), n.namespaceId)) {
                        this.destroyInnerAnimations(e);
                        var r = this._fetchNamespace(n.namespaceId);
                        r && r.clearElementCache(e);
                      }
                      this._onRemovalComplete(e, n.setForRemoval);
                    }
                    this.driver.matchesElement(e, ".ng-animate-disabled") &&
                      this.markElementAsDisabled(e, !1),
                      this.driver
                        .query(e, ".ng-animate-disabled", !0)
                        .forEach(function (e) {
                          t.markElementAsDisabled(e, !1);
                        });
                  },
                },
                {
                  key: "flush",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : -1,
                      n = [];
                    if (
                      (this.newHostElements.size &&
                        (this.newHostElements.forEach(function (t, n) {
                          return e._balanceNamespaceList(t, n);
                        }),
                        this.newHostElements.clear()),
                      this.totalAnimations &&
                        this.collectedEnterElements.length)
                    )
                      for (
                        var r = 0;
                        r < this.collectedEnterElements.length;
                        r++
                      )
                        Sc(this.collectedEnterElements[r], "ng-star-inserted");
                    if (
                      this._namespaceList.length &&
                      (this.totalQueuedPlayers ||
                        this.collectedLeaveElements.length)
                    ) {
                      var i = [];
                      try {
                        n = this._flushAnimations(i, t);
                      } finally {
                        for (var o = 0; o < i.length; o++) i[o]();
                      }
                    } else
                      for (
                        var s = 0;
                        s < this.collectedLeaveElements.length;
                        s++
                      )
                        this.processLeaveNode(this.collectedLeaveElements[s]);
                    if (
                      ((this.totalQueuedPlayers = 0),
                      (this.collectedEnterElements.length = 0),
                      (this.collectedLeaveElements.length = 0),
                      this._flushFns.forEach(function (e) {
                        return e();
                      }),
                      (this._flushFns = []),
                      this._whenQuietFns.length)
                    ) {
                      var a = this._whenQuietFns;
                      (this._whenQuietFns = []),
                        n.length
                          ? Wu(n).onDone(function () {
                              a.forEach(function (e) {
                                return e();
                              });
                            })
                          : a.forEach(function (e) {
                              return e();
                            });
                    }
                  },
                },
                {
                  key: "reportError",
                  value: function (e) {
                    throw new Error(
                      "Unable to process animations due to the following failed trigger transitions\n ".concat(
                        e.join("\n"),
                      ),
                    );
                  },
                },
                {
                  key: "_flushAnimations",
                  value: function (e, t) {
                    var r = this,
                      i = new Ql(),
                      o = [],
                      s = new Map(),
                      a = [],
                      u = new Map(),
                      l = new Map(),
                      c = new Map(),
                      h = new Set();
                    this.disabledNodes.forEach(function (e) {
                      h.add(e);
                      for (
                        var t = r.driver.query(e, ".ng-animate-queued", !0),
                          n = 0;
                        n < t.length;
                        n++
                      )
                        h.add(t[n]);
                    });
                    var f = this.bodyNode,
                      d = Array.from(this.statesByElement.keys()),
                      v = Ec(d, this.collectedEnterElements),
                      p = new Map(),
                      y = 0;
                    v.forEach(function (e, t) {
                      var n = "ng-enter" + y++;
                      p.set(t, n),
                        e.forEach(function (e) {
                          return Sc(e, n);
                        });
                    });
                    for (
                      var m = [], g = new Set(), _ = new Set(), k = 0;
                      k < this.collectedLeaveElements.length;
                      k++
                    ) {
                      var b = this.collectedLeaveElements[k],
                        w = b.__ng_removed;
                      w &&
                        w.setForRemoval &&
                        (m.push(b),
                        g.add(b),
                        w.hasAnimation
                          ? this.driver
                              .query(b, ".ng-star-inserted", !0)
                              .forEach(function (e) {
                                return g.add(e);
                              })
                          : _.add(b));
                    }
                    var E = new Map(),
                      S = Ec(d, Array.from(g));
                    S.forEach(function (e, t) {
                      var n = "ng-leave" + y++;
                      E.set(t, n),
                        e.forEach(function (e) {
                          return Sc(e, n);
                        });
                    }),
                      e.push(function () {
                        v.forEach(function (e, t) {
                          var n = p.get(t);
                          e.forEach(function (e) {
                            return Tc(e, n);
                          });
                        }),
                          S.forEach(function (e, t) {
                            var n = E.get(t);
                            e.forEach(function (e) {
                              return Tc(e, n);
                            });
                          }),
                          m.forEach(function (e) {
                            r.processLeaveNode(e);
                          });
                      });
                    for (
                      var T = [], C = [], x = this._namespaceList.length - 1;
                      x >= 0;
                      x--
                    )
                      this._namespaceList[x]
                        .drainQueuedTransitions(t)
                        .forEach(function (e) {
                          var t = e.player,
                            n = e.element;
                          if ((T.push(t), r.collectedEnterElements.length)) {
                            var s = n.__ng_removed;
                            if (s && s.setForMove) return void t.destroy();
                          }
                          var h = !f || !r.driver.containsElement(f, n),
                            d = E.get(n),
                            v = p.get(n),
                            y = r._buildInstruction(e, i, v, d, h);
                          if (y.errors && y.errors.length) C.push(y);
                          else {
                            if (h)
                              return (
                                t.onStart(function () {
                                  return wl(n, y.fromStyles);
                                }),
                                t.onDestroy(function () {
                                  return bl(n, y.toStyles);
                                }),
                                void o.push(t)
                              );
                            if (e.isFallbackTransition)
                              return (
                                t.onStart(function () {
                                  return wl(n, y.fromStyles);
                                }),
                                t.onDestroy(function () {
                                  return bl(n, y.toStyles);
                                }),
                                void o.push(t)
                              );
                            y.timelines.forEach(function (e) {
                              return (e.stretchStartingKeyframe = !0);
                            }),
                              i.append(n, y.timelines),
                              a.push({ instruction: y, player: t, element: n }),
                              y.queriedElements.forEach(function (e) {
                                return Xu(u, e, []).push(t);
                              }),
                              y.preStyleProps.forEach(function (e, t) {
                                var n = Object.keys(e);
                                if (n.length) {
                                  var r = l.get(t);
                                  r || l.set(t, (r = new Set())),
                                    n.forEach(function (e) {
                                      return r.add(e);
                                    });
                                }
                              }),
                              y.postStyleProps.forEach(function (e, t) {
                                var n = Object.keys(e),
                                  r = c.get(t);
                                r || c.set(t, (r = new Set())),
                                  n.forEach(function (e) {
                                    return r.add(e);
                                  });
                              });
                          }
                        });
                    if (C.length) {
                      var A = [];
                      C.forEach(function (e) {
                        A.push(
                          "@".concat(e.triggerName, " has failed due to:\n"),
                        ),
                          e.errors.forEach(function (e) {
                            return A.push("- ".concat(e, "\n"));
                          });
                      }),
                        T.forEach(function (e) {
                          return e.destroy();
                        }),
                        this.reportError(A);
                    }
                    var P = new Map(),
                      O = new Map();
                    a.forEach(function (e) {
                      var t = e.element;
                      i.has(t) &&
                        (O.set(t, t),
                        r._beforeAnimationBuild(
                          e.player.namespaceId,
                          e.instruction,
                          P,
                        ));
                    }),
                      o.forEach(function (e) {
                        var t = e.element;
                        r._getPreviousPlayers(
                          t,
                          !1,
                          e.namespaceId,
                          e.triggerName,
                          null,
                        ).forEach(function (e) {
                          Xu(P, t, []).push(e), e.destroy();
                        });
                      });
                    var I = m.filter(function (e) {
                        return Ac(e, l, c);
                      }),
                      D = new Map();
                    wc(D, this.driver, _, c, "*").forEach(function (e) {
                      Ac(e, l, c) && I.push(e);
                    });
                    var N = new Map();
                    v.forEach(function (e, t) {
                      wc(N, r.driver, new Set(e), l, "!");
                    }),
                      I.forEach(function (e) {
                        var t = D.get(e),
                          n = N.get(e);
                        D.set(e, Object.assign(Object.assign({}, t), n));
                      });
                    var R = [],
                      F = [],
                      M = {};
                    a.forEach(function (e) {
                      var t = e.element,
                        n = e.player,
                        a = e.instruction;
                      if (i.has(t)) {
                        if (h.has(t))
                          return (
                            n.onDestroy(function () {
                              return bl(t, a.toStyles);
                            }),
                            (n.disabled = !0),
                            n.overrideTotalTime(a.totalTime),
                            void o.push(n)
                          );
                        var u = M;
                        if (O.size > 1) {
                          for (var l = t, c = []; (l = l.parentNode); ) {
                            var f = O.get(l);
                            if (f) {
                              u = f;
                              break;
                            }
                            c.push(l);
                          }
                          c.forEach(function (e) {
                            return O.set(e, u);
                          });
                        }
                        var d = r._buildAnimation(n.namespaceId, a, P, s, N, D);
                        if ((n.setRealPlayer(d), u === M)) R.push(n);
                        else {
                          var v = r.playersByElement.get(u);
                          v && v.length && (n.parentPlayer = Wu(v)), o.push(n);
                        }
                      } else
                        wl(t, a.fromStyles),
                          n.onDestroy(function () {
                            return bl(t, a.toStyles);
                          }),
                          F.push(n),
                          h.has(t) && o.push(n);
                    }),
                      F.forEach(function (e) {
                        var t = s.get(e.element);
                        if (t && t.length) {
                          var n = Wu(t);
                          e.setRealPlayer(n);
                        }
                      }),
                      o.forEach(function (e) {
                        e.parentPlayer
                          ? e.syncPlayerEvents(e.parentPlayer)
                          : e.destroy();
                      });
                    for (var j = 0; j < m.length; j++) {
                      var H = m[j],
                        V = H.__ng_removed;
                      if ((Tc(H, "ng-leave"), !V || !V.hasAnimation)) {
                        var L = [];
                        if (u.size) {
                          var B = u.get(H);
                          B && B.length && L.push.apply(L, n(B));
                          for (
                            var z = this.driver.query(H, ".ng-animating", !0),
                              q = 0;
                            q < z.length;
                            q++
                          ) {
                            var K = u.get(z[q]);
                            K && K.length && L.push.apply(L, n(K));
                          }
                        }
                        var Q = L.filter(function (e) {
                          return !e.destroyed;
                        });
                        Q.length ? Cc(this, H, Q) : this.processLeaveNode(H);
                      }
                    }
                    return (
                      (m.length = 0),
                      R.forEach(function (e) {
                        r.players.push(e),
                          e.onDone(function () {
                            e.destroy();
                            var t = r.players.indexOf(e);
                            r.players.splice(t, 1);
                          }),
                          e.play();
                      }),
                      R
                    );
                  },
                },
                {
                  key: "elementContainsData",
                  value: function (e, t) {
                    var n = !1,
                      r = t.__ng_removed;
                    return (
                      r && r.setForRemoval && (n = !0),
                      this.playersByElement.has(t) && (n = !0),
                      this.playersByQueriedElement.has(t) && (n = !0),
                      this.statesByElement.has(t) && (n = !0),
                      this._fetchNamespace(e).elementContainsData(t) || n
                    );
                  },
                },
                {
                  key: "afterFlush",
                  value: function (e) {
                    this._flushFns.push(e);
                  },
                },
                {
                  key: "afterFlushAnimationsDone",
                  value: function (e) {
                    this._whenQuietFns.push(e);
                  },
                },
                {
                  key: "_getPreviousPlayers",
                  value: function (e, t, n, r, i) {
                    var o = [];
                    if (t) {
                      var s = this.playersByQueriedElement.get(e);
                      s && (o = s);
                    } else {
                      var a = this.playersByElement.get(e);
                      if (a) {
                        var u = !i || "void" == i;
                        a.forEach(function (e) {
                          e.queued || ((u || e.triggerName == r) && o.push(e));
                        });
                      }
                    }
                    return (
                      (n || r) &&
                        (o = o.filter(function (e) {
                          return !(
                            (n && n != e.namespaceId) ||
                            (r && r != e.triggerName)
                          );
                        })),
                      o
                    );
                  },
                },
                {
                  key: "_beforeAnimationBuild",
                  value: function (e, n, r) {
                    var i,
                      o = this,
                      s = n.element,
                      a = n.isRemovalTransition ? void 0 : e,
                      u = n.isRemovalTransition ? void 0 : n.triggerName,
                      l = t(n.timelines);
                    try {
                      var c = function () {
                        var e = i.value.element,
                          t = e !== s,
                          l = Xu(r, e, []);
                        o._getPreviousPlayers(e, t, a, u, n.toState).forEach(
                          function (e) {
                            var t = e.getRealPlayer();
                            t.beforeDestroy && t.beforeDestroy(),
                              e.destroy(),
                              l.push(e);
                          },
                        );
                      };
                      for (l.s(); !(i = l.n()).done; ) c();
                    } catch (h) {
                      l.e(h);
                    } finally {
                      l.f();
                    }
                    wl(s, n.fromStyles);
                  },
                },
                {
                  key: "_buildAnimation",
                  value: function (e, t, n, r, i, o) {
                    var s = this,
                      a = t.triggerName,
                      u = t.element,
                      l = [],
                      c = new Set(),
                      h = new Set(),
                      f = t.timelines.map(function (t) {
                        var f = t.element;
                        c.add(f);
                        var d = f.__ng_removed;
                        if (d && d.removedBeforeQueried)
                          return new Ou(t.duration, t.delay);
                        var v,
                          p,
                          y = f !== u,
                          m = ((v = (n.get(f) || fc).map(function (e) {
                            return e.getRealPlayer();
                          })),
                          (p = []),
                          xc(v, p),
                          p).filter(function (e) {
                            return !!e.element && e.element === f;
                          }),
                          g = i.get(f),
                          _ = o.get(f),
                          k = Gu(0, s._normalizer, 0, t.keyframes, g, _),
                          b = s._buildPlayer(t, k, m);
                        if ((t.subTimeline && r && h.add(f), y)) {
                          var w = new _c(e, a, f);
                          w.setRealPlayer(b), l.push(w);
                        }
                        return b;
                      });
                    l.forEach(function (e) {
                      Xu(s.playersByQueriedElement, e.element, []).push(e),
                        e.onDone(function () {
                          return (function (e, t, n) {
                            var r;
                            if (e instanceof Map) {
                              if ((r = e.get(t))) {
                                if (r.length) {
                                  var i = r.indexOf(n);
                                  r.splice(i, 1);
                                }
                                0 == r.length && e.delete(t);
                              }
                            } else if ((r = e[t])) {
                              if (r.length) {
                                var o = r.indexOf(n);
                                r.splice(o, 1);
                              }
                              0 == r.length && delete e[t];
                            }
                            return r;
                          })(s.playersByQueriedElement, e.element, e);
                        });
                    }),
                      c.forEach(function (e) {
                        return Sc(e, "ng-animating");
                      });
                    var d = Wu(f);
                    return (
                      d.onDestroy(function () {
                        c.forEach(function (e) {
                          return Tc(e, "ng-animating");
                        }),
                          bl(u, t.toStyles);
                      }),
                      h.forEach(function (e) {
                        Xu(r, e, []).push(d);
                      }),
                      d
                    );
                  },
                },
                {
                  key: "_buildPlayer",
                  value: function (e, t, n) {
                    return t.length > 0
                      ? this.driver.animate(
                          e.element,
                          t,
                          e.duration,
                          e.delay,
                          e.easing,
                          n,
                        )
                      : new Ou(e.duration, e.delay);
                  },
                },
              ]),
              e
            );
          })(),
          _c = (function () {
            function e(t, n, r) {
              p(this, e),
                (this.namespaceId = t),
                (this.triggerName = n),
                (this.element = r),
                (this._player = new Ou()),
                (this._containsRealPlayer = !1),
                (this._queuedCallbacks = {}),
                (this.destroyed = !1),
                (this.markedForDestroy = !1),
                (this.disabled = !1),
                (this.queued = !0),
                (this.totalTime = 0);
            }
            return (
              m(e, [
                {
                  key: "setRealPlayer",
                  value: function (e) {
                    var t = this;
                    this._containsRealPlayer ||
                      ((this._player = e),
                      Object.keys(this._queuedCallbacks).forEach(function (n) {
                        t._queuedCallbacks[n].forEach(function (t) {
                          return $u(e, n, void 0, t);
                        });
                      }),
                      (this._queuedCallbacks = {}),
                      (this._containsRealPlayer = !0),
                      this.overrideTotalTime(e.totalTime),
                      (this.queued = !1));
                  },
                },
                {
                  key: "getRealPlayer",
                  value: function () {
                    return this._player;
                  },
                },
                {
                  key: "overrideTotalTime",
                  value: function (e) {
                    this.totalTime = e;
                  },
                },
                {
                  key: "syncPlayerEvents",
                  value: function (e) {
                    var t = this,
                      n = this._player;
                    n.triggerCallback &&
                      e.onStart(function () {
                        return n.triggerCallback("start");
                      }),
                      e.onDone(function () {
                        return t.finish();
                      }),
                      e.onDestroy(function () {
                        return t.destroy();
                      });
                  },
                },
                {
                  key: "_queueEvent",
                  value: function (e, t) {
                    Xu(this._queuedCallbacks, e, []).push(t);
                  },
                },
                {
                  key: "onDone",
                  value: function (e) {
                    this.queued && this._queueEvent("done", e),
                      this._player.onDone(e);
                  },
                },
                {
                  key: "onStart",
                  value: function (e) {
                    this.queued && this._queueEvent("start", e),
                      this._player.onStart(e);
                  },
                },
                {
                  key: "onDestroy",
                  value: function (e) {
                    this.queued && this._queueEvent("destroy", e),
                      this._player.onDestroy(e);
                  },
                },
                {
                  key: "init",
                  value: function () {
                    this._player.init();
                  },
                },
                {
                  key: "hasStarted",
                  value: function () {
                    return !this.queued && this._player.hasStarted();
                  },
                },
                {
                  key: "play",
                  value: function () {
                    !this.queued && this._player.play();
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    !this.queued && this._player.pause();
                  },
                },
                {
                  key: "restart",
                  value: function () {
                    !this.queued && this._player.restart();
                  },
                },
                {
                  key: "finish",
                  value: function () {
                    this._player.finish();
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    (this.destroyed = !0), this._player.destroy();
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    !this.queued && this._player.reset();
                  },
                },
                {
                  key: "setPosition",
                  value: function (e) {
                    this.queued || this._player.setPosition(e);
                  },
                },
                {
                  key: "getPosition",
                  value: function () {
                    return this.queued ? 0 : this._player.getPosition();
                  },
                },
                {
                  key: "triggerCallback",
                  value: function (e) {
                    var t = this._player;
                    t.triggerCallback && t.triggerCallback(e);
                  },
                },
              ]),
              e
            );
          })();
        function kc(e) {
          return e && 1 === e.nodeType;
        }
        function bc(e, t) {
          var n = e.style.display;
          return (e.style.display = null != t ? t : "none"), n;
        }
        function wc(e, t, n, r, i) {
          var o = [];
          n.forEach(function (e) {
            return o.push(bc(e));
          });
          var s = [];
          r.forEach(function (n, r) {
            var o = {};
            n.forEach(function (e) {
              var n = (o[e] = t.computeStyle(r, e, i));
              (n && 0 != n.length) || ((r.__ng_removed = vc), s.push(r));
            }),
              e.set(r, o);
          });
          var a = 0;
          return (
            n.forEach(function (e) {
              return bc(e, o[a++]);
            }),
            s
          );
        }
        function Ec(e, t) {
          var n = new Map();
          if (
            (e.forEach(function (e) {
              return n.set(e, []);
            }),
            0 == t.length)
          )
            return n;
          var r = new Set(t),
            i = new Map();
          function o(e) {
            if (!e) return 1;
            var t = i.get(e);
            if (t) return t;
            var s = e.parentNode;
            return (t = n.has(s) ? s : r.has(s) ? 1 : o(s)), i.set(e, t), t;
          }
          return (
            t.forEach(function (e) {
              var t = o(e);
              1 !== t && n.get(t).push(e);
            }),
            n
          );
        }
        function Sc(e, t) {
          if (e.classList) e.classList.add(t);
          else {
            var n = e.$$classes;
            n || (n = e.$$classes = {}), (n[t] = !0);
          }
        }
        function Tc(e, t) {
          if (e.classList) e.classList.remove(t);
          else {
            var n = e.$$classes;
            n && delete n[t];
          }
        }
        function Cc(e, t, n) {
          Wu(n).onDone(function () {
            return e.processLeaveNode(t);
          });
        }
        function xc(e, t) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r instanceof Iu ? xc(r.players, t) : t.push(r);
          }
        }
        function Ac(e, t, n) {
          var r = n.get(e);
          if (!r) return !1;
          var i = t.get(e);
          return (
            i
              ? r.forEach(function (e) {
                  return i.add(e);
                })
              : t.set(e, r),
            n.delete(e),
            !0
          );
        }
        var Pc = (function () {
          function t(e, n, r) {
            var i = this;
            p(this, t),
              (this.bodyNode = e),
              (this._driver = n),
              (this._triggerCache = {}),
              (this.onRemovalComplete = function (e, t) {}),
              (this._transitionEngine = new gc(e, n, r)),
              (this._timelineEngine = new hc(e, n, r)),
              (this._transitionEngine.onRemovalComplete = function (e, t) {
                return i.onRemovalComplete(e, t);
              });
          }
          return (
            m(t, [
              {
                key: "registerTrigger",
                value: function (e, t, n, r, i) {
                  var o = e + "-" + r,
                    s = this._triggerCache[o];
                  if (!s) {
                    var a = [],
                      u = Hl(this._driver, i, a);
                    if (a.length)
                      throw new Error(
                        'The animation trigger "'
                          .concat(
                            r,
                            '" has failed to build due to the following errors:\n - ',
                          )
                          .concat(a.join("\n - ")),
                      );
                    (s = (function (e, t) {
                      return new uc(e, t);
                    })(r, u)),
                      (this._triggerCache[o] = s);
                  }
                  this._transitionEngine.registerTrigger(t, r, s);
                },
              },
              {
                key: "register",
                value: function (e, t) {
                  this._transitionEngine.register(e, t);
                },
              },
              {
                key: "destroy",
                value: function (e, t) {
                  this._transitionEngine.destroy(e, t);
                },
              },
              {
                key: "onInsert",
                value: function (e, t, n, r) {
                  this._transitionEngine.insertNode(e, t, n, r);
                },
              },
              {
                key: "onRemove",
                value: function (e, t, n, r) {
                  this._transitionEngine.removeNode(e, t, r || !1, n);
                },
              },
              {
                key: "disableAnimations",
                value: function (e, t) {
                  this._transitionEngine.markElementAsDisabled(e, t);
                },
              },
              {
                key: "process",
                value: function (t, n, r, i) {
                  if ("@" == r.charAt(0)) {
                    var o = e(el(r), 2),
                      s = o[0],
                      a = o[1];
                    this._timelineEngine.command(s, n, a, i);
                  } else this._transitionEngine.trigger(t, n, r, i);
                },
              },
              {
                key: "listen",
                value: function (t, n, r, i, o) {
                  if ("@" == r.charAt(0)) {
                    var s = e(el(r), 2),
                      a = s[0],
                      u = s[1];
                    return this._timelineEngine.listen(a, n, u, o);
                  }
                  return this._transitionEngine.listen(t, n, r, i, o);
                },
              },
              {
                key: "flush",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : -1;
                  this._transitionEngine.flush(e);
                },
              },
              {
                key: "players",
                get: function () {
                  return this._transitionEngine.players.concat(
                    this._timelineEngine.players,
                  );
                },
              },
              {
                key: "whenRenderingDone",
                value: function () {
                  return this._transitionEngine.whenRenderingDone();
                },
              },
            ]),
            t
          );
        })();
        function Oc(e, t) {
          var n = null,
            r = null;
          return (
            Array.isArray(t) && t.length
              ? ((n = Dc(t[0])), t.length > 1 && (r = Dc(t[t.length - 1])))
              : t && (n = Dc(t)),
            n || r ? new Ic(e, n, r) : null
          );
        }
        var Ic = (function () {
          var e = (function () {
            function e(t, n, r) {
              p(this, e),
                (this._element = t),
                (this._startStyles = n),
                (this._endStyles = r),
                (this._state = 0);
              var i = e.initialStylesByElement.get(t);
              i || e.initialStylesByElement.set(t, (i = {})),
                (this._initialStyles = i);
            }
            return (
              m(e, [
                {
                  key: "start",
                  value: function () {
                    this._state < 1 &&
                      (this._startStyles &&
                        bl(
                          this._element,
                          this._startStyles,
                          this._initialStyles,
                        ),
                      (this._state = 1));
                  },
                },
                {
                  key: "finish",
                  value: function () {
                    this.start(),
                      this._state < 2 &&
                        (bl(this._element, this._initialStyles),
                        this._endStyles &&
                          (bl(this._element, this._endStyles),
                          (this._endStyles = null)),
                        (this._state = 1));
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.finish(),
                      this._state < 3 &&
                        (e.initialStylesByElement.delete(this._element),
                        this._startStyles &&
                          (wl(this._element, this._startStyles),
                          (this._endStyles = null)),
                        this._endStyles &&
                          (wl(this._element, this._endStyles),
                          (this._endStyles = null)),
                        bl(this._element, this._initialStyles),
                        (this._state = 3));
                  },
                },
              ]),
              e
            );
          })();
          return (e.initialStylesByElement = new WeakMap()), e;
        })();
        function Dc(e) {
          for (var t = null, n = Object.keys(e), r = 0; r < n.length; r++) {
            var i = n[r];
            Nc(i) && ((t = t || {})[i] = e[i]);
          }
          return t;
        }
        function Nc(e) {
          return "display" === e || "position" === e;
        }
        var Rc = (function () {
          function e(t, n, r, i, o, s, a) {
            var u = this;
            p(this, e),
              (this._element = t),
              (this._name = n),
              (this._duration = r),
              (this._delay = i),
              (this._easing = o),
              (this._fillMode = s),
              (this._onDoneFn = a),
              (this._finished = !1),
              (this._destroyed = !1),
              (this._startTime = 0),
              (this._position = 0),
              (this._eventFn = function (e) {
                return u._handleCallback(e);
              });
          }
          return (
            m(e, [
              {
                key: "apply",
                value: function () {
                  var e, t, n;
                  (e = this._element),
                    (t = ""
                      .concat(this._duration, "ms ")
                      .concat(this._easing, " ")
                      .concat(this._delay, "ms 1 normal ")
                      .concat(this._fillMode, " ")
                      .concat(this._name)),
                    (n = Lc(e, "").trim()).length &&
                      ((function (e, t) {
                        for (var n = 0; n < e.length; n++) e.charAt(n);
                      })(n),
                      (t = "".concat(n, ", ").concat(t))),
                    Vc(e, "", t),
                    Hc(this._element, this._eventFn, !1),
                    (this._startTime = Date.now());
                },
              },
              {
                key: "pause",
                value: function () {
                  Fc(this._element, this._name, "paused");
                },
              },
              {
                key: "resume",
                value: function () {
                  Fc(this._element, this._name, "running");
                },
              },
              {
                key: "setPosition",
                value: function (e) {
                  var t = Mc(this._element, this._name);
                  (this._position = e * this._duration),
                    Vc(
                      this._element,
                      "Delay",
                      "-".concat(this._position, "ms"),
                      t,
                    );
                },
              },
              {
                key: "getPosition",
                value: function () {
                  return this._position;
                },
              },
              {
                key: "_handleCallback",
                value: function (e) {
                  var t = e._ngTestManualTimestamp || Date.now(),
                    n = 1e3 * parseFloat(e.elapsedTime.toFixed(3));
                  e.animationName == this._name &&
                    Math.max(t - this._startTime, 0) >= this._delay &&
                    n >= this._duration &&
                    this.finish();
                },
              },
              {
                key: "finish",
                value: function () {
                  this._finished ||
                    ((this._finished = !0),
                    this._onDoneFn(),
                    Hc(this._element, this._eventFn, !0));
                },
              },
              {
                key: "destroy",
                value: function () {
                  var e, t, n, r;
                  this._destroyed ||
                    ((this._destroyed = !0),
                    this.finish(),
                    (e = this._element),
                    (t = this._name),
                    (n = Lc(e, "").split(",")),
                    (r = jc(n, t)) >= 0 &&
                      (n.splice(r, 1), Vc(e, "", n.join(","))));
                },
              },
            ]),
            e
          );
        })();
        function Fc(e, t, n) {
          Vc(e, "PlayState", n, Mc(e, t));
        }
        function Mc(e, t) {
          var n = Lc(e, "");
          return n.indexOf(",") > 0 ? jc(n.split(","), t) : jc([n], t);
        }
        function jc(e, t) {
          for (var n = 0; n < e.length; n++) if (e[n].indexOf(t) >= 0) return n;
          return -1;
        }
        function Hc(e, t, n) {
          n
            ? e.removeEventListener("animationend", t)
            : e.addEventListener("animationend", t);
        }
        function Vc(e, t, n, r) {
          var i = "animation" + t;
          if (null != r) {
            var o = e.style[i];
            if (o.length) {
              var s = o.split(",");
              (s[r] = n), (n = s.join(","));
            }
          }
          e.style[i] = n;
        }
        function Lc(e, t) {
          return e.style["animation" + t] || "";
        }
        var Bc = (function () {
            function e(t, n, r, i, o, s, a, u) {
              p(this, e),
                (this.element = t),
                (this.keyframes = n),
                (this.animationName = r),
                (this._duration = i),
                (this._delay = o),
                (this._finalStyles = a),
                (this._specialStyles = u),
                (this._onDoneFns = []),
                (this._onStartFns = []),
                (this._onDestroyFns = []),
                (this.currentSnapshot = {}),
                (this._state = 0),
                (this.easing = s || "linear"),
                (this.totalTime = i + o),
                this._buildStyler();
            }
            return (
              m(e, [
                {
                  key: "onStart",
                  value: function (e) {
                    this._onStartFns.push(e);
                  },
                },
                {
                  key: "onDone",
                  value: function (e) {
                    this._onDoneFns.push(e);
                  },
                },
                {
                  key: "onDestroy",
                  value: function (e) {
                    this._onDestroyFns.push(e);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.init(),
                      this._state >= 4 ||
                        ((this._state = 4),
                        this._styler.destroy(),
                        this._flushStartFns(),
                        this._flushDoneFns(),
                        this._specialStyles && this._specialStyles.destroy(),
                        this._onDestroyFns.forEach(function (e) {
                          return e();
                        }),
                        (this._onDestroyFns = []));
                  },
                },
                {
                  key: "_flushDoneFns",
                  value: function () {
                    this._onDoneFns.forEach(function (e) {
                      return e();
                    }),
                      (this._onDoneFns = []);
                  },
                },
                {
                  key: "_flushStartFns",
                  value: function () {
                    this._onStartFns.forEach(function (e) {
                      return e();
                    }),
                      (this._onStartFns = []);
                  },
                },
                {
                  key: "finish",
                  value: function () {
                    this.init(),
                      this._state >= 3 ||
                        ((this._state = 3),
                        this._styler.finish(),
                        this._flushStartFns(),
                        this._specialStyles && this._specialStyles.finish(),
                        this._flushDoneFns());
                  },
                },
                {
                  key: "setPosition",
                  value: function (e) {
                    this._styler.setPosition(e);
                  },
                },
                {
                  key: "getPosition",
                  value: function () {
                    return this._styler.getPosition();
                  },
                },
                {
                  key: "hasStarted",
                  value: function () {
                    return this._state >= 2;
                  },
                },
                {
                  key: "init",
                  value: function () {
                    this._state >= 1 ||
                      ((this._state = 1),
                      this._styler.apply(),
                      this._delay && this._styler.pause());
                  },
                },
                {
                  key: "play",
                  value: function () {
                    this.init(),
                      this.hasStarted() ||
                        (this._flushStartFns(),
                        (this._state = 2),
                        this._specialStyles && this._specialStyles.start()),
                      this._styler.resume();
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    this.init(), this._styler.pause();
                  },
                },
                {
                  key: "restart",
                  value: function () {
                    this.reset(), this.play();
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    (this._state = 0),
                      this._styler.destroy(),
                      this._buildStyler(),
                      this._styler.apply();
                  },
                },
                {
                  key: "_buildStyler",
                  value: function () {
                    var e = this;
                    this._styler = new Rc(
                      this.element,
                      this.animationName,
                      this._duration,
                      this._delay,
                      this.easing,
                      "forwards",
                      function () {
                        return e.finish();
                      },
                    );
                  },
                },
                {
                  key: "triggerCallback",
                  value: function (e) {
                    var t = "start" == e ? this._onStartFns : this._onDoneFns;
                    t.forEach(function (e) {
                      return e();
                    }),
                      (t.length = 0);
                  },
                },
                {
                  key: "beforeDestroy",
                  value: function () {
                    var e = this;
                    this.init();
                    var t = {};
                    if (this.hasStarted()) {
                      var n = this._state >= 3;
                      Object.keys(this._finalStyles).forEach(function (r) {
                        "offset" != r &&
                          (t[r] = n ? e._finalStyles[r] : Nl(e.element, r));
                      });
                    }
                    this.currentSnapshot = t;
                  },
                },
              ]),
              e
            );
          })(),
          zc = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r) {
              var i;
              return (
                p(this, n),
                ((i = t.call(this)).element = e),
                (i._startingStyles = {}),
                (i.__initialized = !1),
                (i._styles = hl(r)),
                i
              );
            }
            return (
              m(n, [
                {
                  key: "init",
                  value: function () {
                    var e = this;
                    !this.__initialized &&
                      this._startingStyles &&
                      ((this.__initialized = !0),
                      Object.keys(this._styles).forEach(function (t) {
                        e._startingStyles[t] = e.element.style[t];
                      }),
                      a(v(n.prototype), "init", this).call(this));
                  },
                },
                {
                  key: "play",
                  value: function () {
                    var e = this;
                    this._startingStyles &&
                      (this.init(),
                      Object.keys(this._styles).forEach(function (t) {
                        return e.element.style.setProperty(t, e._styles[t]);
                      }),
                      a(v(n.prototype), "play", this).call(this));
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var e = this;
                    this._startingStyles &&
                      (Object.keys(this._startingStyles).forEach(function (t) {
                        var n = e._startingStyles[t];
                        n
                          ? e.element.style.setProperty(t, n)
                          : e.element.style.removeProperty(t);
                      }),
                      (this._startingStyles = null),
                      a(v(n.prototype), "destroy", this).call(this));
                  },
                },
              ]),
              n
            );
          })(Ou),
          qc = (function () {
            function e() {
              p(this, e), (this._count = 0);
            }
            return (
              m(e, [
                {
                  key: "validateStyleProperty",
                  value: function (e) {
                    return al(e);
                  },
                },
                {
                  key: "matchesElement",
                  value: function (e, t) {
                    return ul(e, t);
                  },
                },
                {
                  key: "containsElement",
                  value: function (e, t) {
                    return ll(e, t);
                  },
                },
                {
                  key: "query",
                  value: function (e, t, n) {
                    return cl(e, t, n);
                  },
                },
                {
                  key: "computeStyle",
                  value: function (e, t, n) {
                    return window.getComputedStyle(e)[t];
                  },
                },
                {
                  key: "buildKeyframeElement",
                  value: function (e, t, n) {
                    n = n.map(function (e) {
                      return hl(e);
                    });
                    var r = "@keyframes ".concat(t, " {\n"),
                      i = "";
                    n.forEach(function (e) {
                      i = " ";
                      var t = parseFloat(e.offset);
                      (r += "".concat(i).concat(100 * t, "% {\n")),
                        (i += " "),
                        Object.keys(e).forEach(function (t) {
                          var n = e[t];
                          switch (t) {
                            case "offset":
                              return;
                            case "easing":
                              return void (
                                n &&
                                (r += ""
                                  .concat(i, "animation-timing-function: ")
                                  .concat(n, ";\n"))
                              );
                            default:
                              return void (r += ""
                                .concat(i)
                                .concat(t, ": ")
                                .concat(n, ";\n"));
                          }
                        }),
                        (r += "".concat(i, "}\n"));
                    }),
                      (r += "}\n");
                    var o = document.createElement("style");
                    return (o.textContent = r), o;
                  },
                },
                {
                  key: "animate",
                  value: function (e, t, n, r, i) {
                    var o =
                        arguments.length > 5 && void 0 !== arguments[5]
                          ? arguments[5]
                          : [],
                      s = o.filter(function (e) {
                        return e instanceof Bc;
                      }),
                      a = {};
                    Ol(n, r) &&
                      s.forEach(function (e) {
                        var t = e.currentSnapshot;
                        Object.keys(t).forEach(function (e) {
                          return (a[e] = t[e]);
                        });
                      });
                    var u = (function (e) {
                      var t = {};
                      return (
                        e &&
                          (Array.isArray(e) ? e : [e]).forEach(function (e) {
                            Object.keys(e).forEach(function (n) {
                              "offset" != n && "easing" != n && (t[n] = e[n]);
                            });
                          }),
                        t
                      );
                    })((t = Il(e, t, a)));
                    if (0 == n) return new zc(e, u);
                    var l = "gen_css_kf_" + this._count++,
                      c = this.buildKeyframeElement(e, l, t);
                    (function (e) {
                      var t,
                        n =
                          null === (t = e.getRootNode) || void 0 === t
                            ? void 0
                            : t.call(e);
                      return "undefined" != typeof ShadowRoot &&
                        n instanceof ShadowRoot
                        ? n
                        : document.head;
                    })(e).appendChild(c);
                    var h = Oc(e, t),
                      f = new Bc(e, t, l, n, r, i, u, h);
                    return (
                      f.onDestroy(function () {
                        var e;
                        (e = c).parentNode.removeChild(e);
                      }),
                      f
                    );
                  },
                },
              ]),
              e
            );
          })(),
          Kc = (function () {
            function e(t, n, r, i) {
              p(this, e),
                (this.element = t),
                (this.keyframes = n),
                (this.options = r),
                (this._specialStyles = i),
                (this._onDoneFns = []),
                (this._onStartFns = []),
                (this._onDestroyFns = []),
                (this._initialized = !1),
                (this._finished = !1),
                (this._started = !1),
                (this._destroyed = !1),
                (this.time = 0),
                (this.parentPlayer = null),
                (this.currentSnapshot = {}),
                (this._duration = r.duration),
                (this._delay = r.delay || 0),
                (this.time = this._duration + this._delay);
            }
            return (
              m(e, [
                {
                  key: "_onFinish",
                  value: function () {
                    this._finished ||
                      ((this._finished = !0),
                      this._onDoneFns.forEach(function (e) {
                        return e();
                      }),
                      (this._onDoneFns = []));
                  },
                },
                {
                  key: "init",
                  value: function () {
                    this._buildPlayer(), this._preparePlayerBeforeStart();
                  },
                },
                {
                  key: "_buildPlayer",
                  value: function () {
                    var e = this;
                    if (!this._initialized) {
                      this._initialized = !0;
                      var t = this.keyframes;
                      (this.domPlayer = this._triggerWebAnimation(
                        this.element,
                        t,
                        this.options,
                      )),
                        (this._finalKeyframe = t.length ? t[t.length - 1] : {}),
                        this.domPlayer.addEventListener("finish", function () {
                          return e._onFinish();
                        });
                    }
                  },
                },
                {
                  key: "_preparePlayerBeforeStart",
                  value: function () {
                    this._delay
                      ? this._resetDomPlayerState()
                      : this.domPlayer.pause();
                  },
                },
                {
                  key: "_triggerWebAnimation",
                  value: function (e, t, n) {
                    return e.animate(t, n);
                  },
                },
                {
                  key: "onStart",
                  value: function (e) {
                    this._onStartFns.push(e);
                  },
                },
                {
                  key: "onDone",
                  value: function (e) {
                    this._onDoneFns.push(e);
                  },
                },
                {
                  key: "onDestroy",
                  value: function (e) {
                    this._onDestroyFns.push(e);
                  },
                },
                {
                  key: "play",
                  value: function () {
                    this._buildPlayer(),
                      this.hasStarted() ||
                        (this._onStartFns.forEach(function (e) {
                          return e();
                        }),
                        (this._onStartFns = []),
                        (this._started = !0),
                        this._specialStyles && this._specialStyles.start()),
                      this.domPlayer.play();
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    this.init(), this.domPlayer.pause();
                  },
                },
                {
                  key: "finish",
                  value: function () {
                    this.init(),
                      this._specialStyles && this._specialStyles.finish(),
                      this._onFinish(),
                      this.domPlayer.finish();
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    this._resetDomPlayerState(),
                      (this._destroyed = !1),
                      (this._finished = !1),
                      (this._started = !1);
                  },
                },
                {
                  key: "_resetDomPlayerState",
                  value: function () {
                    this.domPlayer && this.domPlayer.cancel();
                  },
                },
                {
                  key: "restart",
                  value: function () {
                    this.reset(), this.play();
                  },
                },
                {
                  key: "hasStarted",
                  value: function () {
                    return this._started;
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this._destroyed ||
                      ((this._destroyed = !0),
                      this._resetDomPlayerState(),
                      this._onFinish(),
                      this._specialStyles && this._specialStyles.destroy(),
                      this._onDestroyFns.forEach(function (e) {
                        return e();
                      }),
                      (this._onDestroyFns = []));
                  },
                },
                {
                  key: "setPosition",
                  value: function (e) {
                    void 0 === this.domPlayer && this.init(),
                      (this.domPlayer.currentTime = e * this.time);
                  },
                },
                {
                  key: "getPosition",
                  value: function () {
                    return this.domPlayer.currentTime / this.time;
                  },
                },
                {
                  key: "totalTime",
                  get: function () {
                    return this._delay + this._duration;
                  },
                },
                {
                  key: "beforeDestroy",
                  value: function () {
                    var e = this,
                      t = {};
                    this.hasStarted() &&
                      Object.keys(this._finalKeyframe).forEach(function (n) {
                        "offset" != n &&
                          (t[n] = e._finished
                            ? e._finalKeyframe[n]
                            : Nl(e.element, n));
                      }),
                      (this.currentSnapshot = t);
                  },
                },
                {
                  key: "triggerCallback",
                  value: function (e) {
                    var t = "start" == e ? this._onStartFns : this._onDoneFns;
                    t.forEach(function (e) {
                      return e();
                    }),
                      (t.length = 0);
                  },
                },
              ]),
              e
            );
          })(),
          Qc = (function () {
            function e() {
              p(this, e),
                (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
                  Uc().toString(),
                )),
                (this._cssKeyframesDriver = new qc());
            }
            return (
              m(e, [
                {
                  key: "validateStyleProperty",
                  value: function (e) {
                    return al(e);
                  },
                },
                {
                  key: "matchesElement",
                  value: function (e, t) {
                    return ul(e, t);
                  },
                },
                {
                  key: "containsElement",
                  value: function (e, t) {
                    return ll(e, t);
                  },
                },
                {
                  key: "query",
                  value: function (e, t, n) {
                    return cl(e, t, n);
                  },
                },
                {
                  key: "computeStyle",
                  value: function (e, t, n) {
                    return window.getComputedStyle(e)[t];
                  },
                },
                {
                  key: "overrideWebAnimationsSupport",
                  value: function (e) {
                    this._isNativeImpl = e;
                  },
                },
                {
                  key: "animate",
                  value: function (e, t, n, r, i) {
                    var o =
                        arguments.length > 5 && void 0 !== arguments[5]
                          ? arguments[5]
                          : [],
                      s = arguments.length > 6 ? arguments[6] : void 0;
                    if (!s && !this._isNativeImpl)
                      return this._cssKeyframesDriver.animate(e, t, n, r, i, o);
                    var a = {
                      duration: n,
                      delay: r,
                      fill: 0 == r ? "both" : "forwards",
                    };
                    i && (a.easing = i);
                    var u = {},
                      l = o.filter(function (e) {
                        return e instanceof Kc;
                      });
                    Ol(n, r) &&
                      l.forEach(function (e) {
                        var t = e.currentSnapshot;
                        Object.keys(t).forEach(function (e) {
                          return (u[e] = t[e]);
                        });
                      });
                    var c = Oc(
                      e,
                      (t = Il(
                        e,
                        (t = t.map(function (e) {
                          return gl(e, !1);
                        })),
                        u,
                      )),
                    );
                    return new Kc(e, t, a, c);
                  },
                },
              ]),
              e
            );
          })();
        function Uc() {
          return (Uu() && Element.prototype.animate) || {};
        }
        var Zc = (function () {
            var e = (function (e) {
              u(n, e);
              var t = c(n);
              function n(e, r) {
                var i;
                return (
                  p(this, n),
                  ((i = t.call(this))._nextAnimationId = 0),
                  (i._renderer = e.createRenderer(r.body, {
                    id: "0",
                    encapsulation: Oe.None,
                    styles: [],
                    data: { animation: [] },
                  })),
                  i
                );
              }
              return (
                m(n, [
                  {
                    key: "build",
                    value: function (e) {
                      var t = this._nextAnimationId.toString();
                      this._nextAnimationId++;
                      var n = Array.isArray(e) ? Tu(e) : e;
                      return (
                        $c(this._renderer, null, t, "register", [n]),
                        new Wc(t, this._renderer)
                      );
                    },
                  },
                ]),
                n
              );
            })(Eu);
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(fo), Mn(Js));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          Wc = (function (e) {
            u(n, e);
            var t = c(n);
            function n(e, r) {
              var i;
              return (
                p(this, n), ((i = t.call(this))._id = e), (i._renderer = r), i
              );
            }
            return (
              m(n, [
                {
                  key: "create",
                  value: function (e, t) {
                    return new Gc(this._id, e, t || {}, this._renderer);
                  },
                },
              ]),
              n
            );
          })(
            (function () {
              return function e() {
                p(this, e);
              };
            })(),
          ),
          Gc = (function () {
            function e(t, n, r, i) {
              p(this, e),
                (this.id = t),
                (this.element = n),
                (this._renderer = i),
                (this.parentPlayer = null),
                (this._started = !1),
                (this.totalTime = 0),
                this._command("create", r);
            }
            return (
              m(e, [
                {
                  key: "_listen",
                  value: function (e, t) {
                    return this._renderer.listen(
                      this.element,
                      "@@".concat(this.id, ":").concat(e),
                      t,
                    );
                  },
                },
                {
                  key: "_command",
                  value: function (e) {
                    for (
                      var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    return $c(this._renderer, this.element, this.id, e, n);
                  },
                },
                {
                  key: "onDone",
                  value: function (e) {
                    this._listen("done", e);
                  },
                },
                {
                  key: "onStart",
                  value: function (e) {
                    this._listen("start", e);
                  },
                },
                {
                  key: "onDestroy",
                  value: function (e) {
                    this._listen("destroy", e);
                  },
                },
                {
                  key: "init",
                  value: function () {
                    this._command("init");
                  },
                },
                {
                  key: "hasStarted",
                  value: function () {
                    return this._started;
                  },
                },
                {
                  key: "play",
                  value: function () {
                    this._command("play"), (this._started = !0);
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    this._command("pause");
                  },
                },
                {
                  key: "restart",
                  value: function () {
                    this._command("restart");
                  },
                },
                {
                  key: "finish",
                  value: function () {
                    this._command("finish");
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this._command("destroy");
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    this._command("reset"), (this._started = !1);
                  },
                },
                {
                  key: "setPosition",
                  value: function (e) {
                    this._command("setPosition", e);
                  },
                },
                {
                  key: "getPosition",
                  value: function () {
                    var e, t;
                    return null !==
                      (t =
                        null ===
                          (e = this._renderer.engine.players[+this.id]) ||
                        void 0 === e
                          ? void 0
                          : e.getPosition()) && void 0 !== t
                      ? t
                      : 0;
                  },
                },
              ]),
              e
            );
          })();
        function $c(e, t, n, r, i) {
          return e.setProperty(t, "@@".concat(n, ":").concat(r), i);
        }
        var Jc = (function () {
            var t = (function () {
              function t(e, n, r) {
                p(this, t),
                  (this.delegate = e),
                  (this.engine = n),
                  (this._zone = r),
                  (this._currentId = 0),
                  (this._microtaskId = 1),
                  (this._animationCallbacksBuffer = []),
                  (this._rendererCache = new Map()),
                  (this._cdRecurDepth = 0),
                  (this.promise = Promise.resolve(0)),
                  (n.onRemovalComplete = function (e, t) {
                    t && t.parentNode(e) && t.removeChild(e.parentNode, e);
                  });
              }
              return (
                m(t, [
                  {
                    key: "createRenderer",
                    value: function (e, t) {
                      var n = this,
                        r = this.delegate.createRenderer(e, t);
                      if (!(e && t && t.data && t.data.animation)) {
                        var i = this._rendererCache.get(r);
                        return (
                          i ||
                            ((i = new Yc("", r, this.engine)),
                            this._rendererCache.set(r, i)),
                          i
                        );
                      }
                      var o = t.id,
                        s = t.id + "-" + this._currentId;
                      this._currentId++, this.engine.register(s, e);
                      return (
                        t.data.animation.forEach(function t(r) {
                          Array.isArray(r)
                            ? r.forEach(t)
                            : n.engine.registerTrigger(o, s, e, r.name, r);
                        }),
                        new Xc(this, s, r, this.engine)
                      );
                    },
                  },
                  {
                    key: "begin",
                    value: function () {
                      this._cdRecurDepth++,
                        this.delegate.begin && this.delegate.begin();
                    },
                  },
                  {
                    key: "_scheduleCountTask",
                    value: function () {
                      var e = this;
                      this.promise.then(function () {
                        e._microtaskId++;
                      });
                    },
                  },
                  {
                    key: "scheduleListenerCallback",
                    value: function (t, n, r) {
                      var i = this;
                      t >= 0 && t < this._microtaskId
                        ? this._zone.run(function () {
                            return n(r);
                          })
                        : (0 == this._animationCallbacksBuffer.length &&
                            Promise.resolve(null).then(function () {
                              i._zone.run(function () {
                                i._animationCallbacksBuffer.forEach(
                                  function (t) {
                                    var n = e(t, 2);
                                    (0, n[0])(n[1]);
                                  },
                                ),
                                  (i._animationCallbacksBuffer = []);
                              });
                            }),
                          this._animationCallbacksBuffer.push([n, r]));
                    },
                  },
                  {
                    key: "end",
                    value: function () {
                      var e = this;
                      this._cdRecurDepth--,
                        0 == this._cdRecurDepth &&
                          this._zone.runOutsideAngular(function () {
                            e._scheduleCountTask(),
                              e.engine.flush(e._microtaskId);
                          }),
                        this.delegate.end && this.delegate.end();
                    },
                  },
                  {
                    key: "whenRenderingDone",
                    value: function () {
                      return this.engine.whenRenderingDone();
                    },
                  },
                ]),
                t
              );
            })();
            return (
              (t.ɵfac = function (e) {
                return new (e || t)(Mn(fo), Mn(Pc), Mn(Ts));
              }),
              (t.ɵprov = pe({ token: t, factory: t.ɵfac })),
              t
            );
          })(),
          Yc = (function () {
            function e(t, n, r) {
              p(this, e),
                (this.namespaceId = t),
                (this.delegate = n),
                (this.engine = r),
                (this.destroyNode = this.delegate.destroyNode
                  ? function (e) {
                      return n.destroyNode(e);
                    }
                  : null);
            }
            return (
              m(e, [
                {
                  key: "data",
                  get: function () {
                    return this.delegate.data;
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.engine.destroy(this.namespaceId, this.delegate),
                      this.delegate.destroy();
                  },
                },
                {
                  key: "createElement",
                  value: function (e, t) {
                    return this.delegate.createElement(e, t);
                  },
                },
                {
                  key: "createComment",
                  value: function (e) {
                    return this.delegate.createComment(e);
                  },
                },
                {
                  key: "createText",
                  value: function (e) {
                    return this.delegate.createText(e);
                  },
                },
                {
                  key: "appendChild",
                  value: function (e, t) {
                    this.delegate.appendChild(e, t),
                      this.engine.onInsert(this.namespaceId, t, e, !1);
                  },
                },
                {
                  key: "insertBefore",
                  value: function (e, t, n) {
                    var r =
                      !(arguments.length > 3 && void 0 !== arguments[3]) ||
                      arguments[3];
                    this.delegate.insertBefore(e, t, n),
                      this.engine.onInsert(this.namespaceId, t, e, r);
                  },
                },
                {
                  key: "removeChild",
                  value: function (e, t, n) {
                    this.engine.onRemove(this.namespaceId, t, this.delegate, n);
                  },
                },
                {
                  key: "selectRootElement",
                  value: function (e, t) {
                    return this.delegate.selectRootElement(e, t);
                  },
                },
                {
                  key: "parentNode",
                  value: function (e) {
                    return this.delegate.parentNode(e);
                  },
                },
                {
                  key: "nextSibling",
                  value: function (e) {
                    return this.delegate.nextSibling(e);
                  },
                },
                {
                  key: "setAttribute",
                  value: function (e, t, n, r) {
                    this.delegate.setAttribute(e, t, n, r);
                  },
                },
                {
                  key: "removeAttribute",
                  value: function (e, t, n) {
                    this.delegate.removeAttribute(e, t, n);
                  },
                },
                {
                  key: "addClass",
                  value: function (e, t) {
                    this.delegate.addClass(e, t);
                  },
                },
                {
                  key: "removeClass",
                  value: function (e, t) {
                    this.delegate.removeClass(e, t);
                  },
                },
                {
                  key: "setStyle",
                  value: function (e, t, n, r) {
                    this.delegate.setStyle(e, t, n, r);
                  },
                },
                {
                  key: "removeStyle",
                  value: function (e, t, n) {
                    this.delegate.removeStyle(e, t, n);
                  },
                },
                {
                  key: "setProperty",
                  value: function (e, t, n) {
                    "@" == t.charAt(0) && "@.disabled" == t
                      ? this.disableAnimations(e, !!n)
                      : this.delegate.setProperty(e, t, n);
                  },
                },
                {
                  key: "setValue",
                  value: function (e, t) {
                    this.delegate.setValue(e, t);
                  },
                },
                {
                  key: "listen",
                  value: function (e, t, n) {
                    return this.delegate.listen(e, t, n);
                  },
                },
                {
                  key: "disableAnimations",
                  value: function (e, t) {
                    this.engine.disableAnimations(e, t);
                  },
                },
              ]),
              e
            );
          })(),
          Xc = (function (t) {
            u(r, t);
            var n = c(r);
            function r(e, t, i, o) {
              var s;
              return (
                p(this, r),
                ((s = n.call(this, t, i, o)).factory = e),
                (s.namespaceId = t),
                s
              );
            }
            return (
              m(r, [
                {
                  key: "setProperty",
                  value: function (e, t, n) {
                    "@" == t.charAt(0)
                      ? "." == t.charAt(1) && "@.disabled" == t
                        ? this.disableAnimations(e, (n = void 0 === n || !!n))
                        : this.engine.process(
                            this.namespaceId,
                            e,
                            t.substr(1),
                            n,
                          )
                      : this.delegate.setProperty(e, t, n);
                  },
                },
                {
                  key: "listen",
                  value: function (t, n, r) {
                    var i,
                      o,
                      s = this;
                    if ("@" == n.charAt(0)) {
                      var a,
                        u = (function (e) {
                          switch (e) {
                            case "body":
                              return document.body;
                            case "document":
                              return document;
                            case "window":
                              return window;
                            default:
                              return e;
                          }
                        })(t),
                        l = n.substr(1),
                        c = "";
                      return (
                        "@" != l.charAt(0) &&
                          ((o = (i = l).indexOf(".")),
                          (l = (a = e(
                            [i.substring(0, o), i.substr(o + 1)],
                            2,
                          ))[0]),
                          (c = a[1])),
                        this.engine.listen(
                          this.namespaceId,
                          u,
                          l,
                          c,
                          function (e) {
                            s.factory.scheduleListenerCallback(
                              e._data || -1,
                              r,
                              e,
                            );
                          },
                        )
                      );
                    }
                    return this.delegate.listen(t, n, r);
                  },
                },
              ]),
              r
            );
          })(Yc),
          eh = (function () {
            var e = (function (e) {
              u(n, e);
              var t = c(n);
              function n(e, r, i) {
                return p(this, n), t.call(this, e.body, r, i);
              }
              return (
                m(n, [
                  {
                    key: "ngOnDestroy",
                    value: function () {
                      this.flush();
                    },
                  },
                ]),
                n
              );
            })(Pc);
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Mn(Js), Mn(dl), Mn(tc));
              }),
              (e.ɵprov = pe({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          th = new Cn("AnimationModuleType"),
          nh = [
            { provide: Eu, useClass: Zc },
            {
              provide: tc,
              useFactory: function () {
                return new nc();
              },
            },
            { provide: Pc, useClass: eh },
            {
              provide: fo,
              useFactory: function (e, t, n) {
                return new Jc(e, t, n);
              },
              deps: [Aa, Pc, Ts],
            },
          ],
          rh = [
            {
              provide: dl,
              useFactory: function () {
                return "function" == typeof Uc() ? new Qc() : new qc();
              },
            },
            { provide: th, useValue: "BrowserAnimations" },
          ].concat(nh),
          ih = [
            { provide: dl, useClass: fl },
            { provide: th, useValue: "NoopAnimations" },
          ].concat(nh),
          oh = (function () {
            var e = (function () {
              function e() {
                p(this, e);
              }
              return (
                m(e, null, [
                  {
                    key: "withConfig",
                    value: function (t) {
                      return {
                        ngModule: e,
                        providers: t.disableAnimations ? ih : rh,
                      };
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵmod = $e({ type: e })),
              (e.ɵinj = ye({ providers: rh, imports: [La] })),
              e
            );
          })(),
          sh = (function () {
            var e = function e() {
              p(this, e);
            };
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵmod = $e({ type: e, bootstrap: [Qu] })),
              (e.ɵinj = ye({ providers: [Nu], imports: [[La, ku, oh]] })),
              e
            );
          })();
        (function () {
          if (js)
            throw new Error("Cannot enable prod mode after platform setup.");
          Ms = !1;
        })(),
          Ha()
            .bootstrapModule(sh)
            .catch(function (e) {
              return console.error(e);
            });
      },
    },
    function (e) {
      "use strict";
      e((e.s = 4541));
    },
  ]);
})();
