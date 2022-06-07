! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    var n = [],
        r = n.slice,
        i = n.concat,
        o = n.push,
        s = n.indexOf,
        a = {},
        u = a.toString,
        l = a.hasOwnProperty,
        c = "".trim,
        f = {},
        p = e.document,
        d = "2.1.0",
        h = function(e, t) {
            return new h.fn.init(e, t)
        },
        g = /^-ms-/,
        m = /-([\da-z])/gi,
        v = function(e, t) {
            return t.toUpperCase()
        };

    function y(e) {
        var t = e.length,
            n = h.type(e);
        return "function" !== n && !h.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    h.fn = h.prototype = {
        jquery: d,
        constructor: h,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : r.call(this)
        },
        pushStack: function(e) {
            var t = h.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return h.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(h.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: o,
        sort: n.sort,
        splice: n.splice
    }, h.extend = h.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || h.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (r = e[t]) && (l && r && (h.isPlainObject(r) || (i = h.isArray(r))) ? (i ? (i = !1, o = n && h.isArray(n) ? n : []) : o = n && h.isPlainObject(n) ? n : {}, s[t] = h.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, h.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === h.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            if ("object" !== h.type(e) || e.nodeType || h.isWindow(e)) return !1;
            try {
                if (e.constructor && !l.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            return !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[u.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = h.trim(e)) && (1 === e.indexOf("use strict") ? ((t = p.createElement("script")).text = e, p.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(g, "ms-").replace(m, v)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r = 0,
                i = e.length,
                o = y(e);
            if (n) {
                if (o)
                    for (; i > r && !1 !== t.apply(e[r], n); r++);
                else
                    for (r in e)
                        if (!1 === t.apply(e[r], n)) break
            } else if (o)
                for (; i > r && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : c.call(e)
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (y(Object(e)) ? h.merge(n, "string" == typeof e ? [e] : e) : o.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; o > i; i++) !t(e[i], i) !== s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, o = 0,
                s = e.length,
                a = [];
            if (y(e))
                for (; s > o; o++) null != (r = t(e[o], o, n)) && a.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
            return i.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), h.isFunction(e) ? (i = r.call(arguments, 2), (o = function() {
                return e.apply(t || this, i.concat(r.call(arguments)))
            }).guid = e.guid = e.guid || h.guid++, o) : void 0
        },
        now: Date.now,
        support: f
    }), h.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        a["[object " + t + "]"] = t.toLowerCase()
    });
    var x = function(e) {
        var t, n, r, i, o, s, a, u, l, c, f, p, d, h, g, m, v, y = "sizzle" + -new Date,
            x = e.document,
            b = 0,
            w = 0,
            T = re(),
            C = re(),
            N = re(),
            k = function(e, t) {
                return e === t && (l = !0), 0
            },
            E = "undefined",
            D = 1 << 31,
            j = {}.hasOwnProperty,
            S = [],
            A = S.pop,
            L = S.push,
            q = S.push,
            H = S.slice,
            O = S.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            R = M.replace("w", "w#"),
            W = "\\[" + P + "*(" + M + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + R + ")|)|)" + P + "*\\]",
            $ = ":(" + M + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + W.replace(3, 8) + ")*)|.*)\\)|)",
            B = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            I = new RegExp("^" + P + "*," + P + "*"),
            _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            X = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            z = new RegExp($),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + $),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = /'|\\/g,
            ee = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            te = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            q.apply(S = H.call(x.childNodes), x.childNodes), S[x.childNodes.length].nodeType
        } catch (e) {
            q = {
                apply: S.length ? function(e, t) {
                    L.apply(e, H.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function ne(e, t, r, i) {
            var o, s, a, u, l, p, g, m, b, w;
            if ((t ? t.ownerDocument || t : x) !== f && c(t), r = r || [], !e || "string" != typeof e) return r;
            if (1 !== (u = (t = t || f).nodeType) && 9 !== u) return [];
            if (d && !i) {
                if (o = J.exec(e))
                    if (a = o[1]) {
                        if (9 === u) {
                            if (!(s = t.getElementById(a)) || !s.parentNode) return r;
                            if (s.id === a) return r.push(s), r
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && v(t, s) && s.id === a) return r.push(s), r
                    } else {
                        if (o[2]) return q.apply(r, t.getElementsByTagName(e)), r;
                        if ((a = o[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(r, t.getElementsByClassName(a)), r
                    } if (n.qsa && (!h || !h.test(e))) {
                    if (m = g = y, b = t, w = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                        for (p = de(e), (g = t.getAttribute("id")) ? m = g.replace(Z, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", l = p.length; l--;) p[l] = m + he(p[l]);
                        b = K.test(e) && fe(t.parentNode) || t, w = p.join(",")
                    }
                    if (w) try {
                        return q.apply(r, b.querySelectorAll(w)), r
                    } catch (e) {} finally {
                        g || t.removeAttribute("id")
                    }
                }
            }
            return we(e.replace(B, "$1"), t, r, i)
        }

        function re() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function ie(e) {
            return e[y] = !0, e
        }

        function oe(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function se(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) r.attrHandle[n[i]] = t
        }

        function ae(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ue(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function le(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ce(e) {
            return ie(function(t) {
                return t = +t, ie(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function fe(e) {
            return e && typeof e.getElementsByTagName !== E && e
        }
        for (t in n = ne.support = {}, o = ne.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, c = ne.setDocument = function(e) {
                var t, i = e ? e.ownerDocument || e : x,
                    s = i.defaultView;
                return i !== f && 9 === i.nodeType && i.documentElement ? (f = i, p = i.documentElement, d = !o(i), s && s !== s.top && (s.addEventListener ? s.addEventListener("unload", function() {
                    c()
                }, !1) : s.attachEvent && s.attachEvent("onunload", function() {
                    c()
                })), n.attributes = oe(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = oe(function(e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = Q.test(i.getElementsByClassName) && oe(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), n.getById = oe(function(e) {
                    return p.appendChild(e).id = y, !i.getElementsByName || !i.getElementsByName(y).length
                }), n.getById ? (r.find.ID = function(e, t) {
                    if (typeof t.getElementById !== E && d) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, r.filter.ID = function(e) {
                    var t = e.replace(ee, te);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete r.find.ID, r.filter.ID = function(e) {
                    var t = e.replace(ee, te);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== E && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== E ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== E && d ? t.getElementsByClassName(e) : void 0
                }, g = [], h = [], (n.qsa = Q.test(i.querySelectorAll)) && (oe(function(e) {
                    e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && h.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || h.push("\\[" + P + "*(?:value|" + F + ")"), e.querySelectorAll(":checked").length || h.push(":checked")
                }), oe(function(e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && h.push("name" + P + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
                })), (n.matchesSelector = Q.test(m = p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && oe(function(e) {
                    n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", $)
                }), h = h.length && new RegExp(h.join("|")), g = g.length && new RegExp(g.join("|")), t = Q.test(p.compareDocumentPosition), v = t || Q.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, k = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === i || e.ownerDocument === x && v(x, e) ? -1 : t === i || t.ownerDocument === x && v(x, t) ? 1 : u ? O.call(u, e) - O.call(u, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        a = [e],
                        c = [t];
                    if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : u ? O.call(u, e) - O.call(u, t) : 0;
                    if (o === s) return ae(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) c.unshift(n);
                    for (; a[r] === c[r];) r++;
                    return r ? ae(a[r], c[r]) : a[r] === x ? -1 : c[r] === x ? 1 : 0
                }, i) : f
            }, ne.matches = function(e, t) {
                return ne(e, null, null, t)
            }, ne.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== f && c(e), t = t.replace(X, "='$1']"), !(!n.matchesSelector || !d || g && g.test(t) || h && h.test(t))) try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {}
                return ne(t, f, null, [e]).length > 0
            }, ne.contains = function(e, t) {
                return (e.ownerDocument || e) !== f && c(e), v(e, t)
            }, ne.attr = function(e, t) {
                (e.ownerDocument || e) !== f && c(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !d) : void 0;
                return void 0 !== o ? o : n.attributes || !d ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, ne.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ne.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (l = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(k), l) {
                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                    for (; i--;) e.splice(r[i], 1)
                }
                return u = null, e
            }, i = ne.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = ne.selectors = {
                cacheLength: 50,
                createPseudo: ie,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ee, te), e[3] = (e[4] || e[5] || "").replace(ee, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ne.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ne.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[5] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && z.test(n) && (t = de(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ee, te).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && T(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== E && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = ne.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                x = !u && !a;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? m.firstChild : m.lastChild], s && x) {
                                    for (d = (l = (c = m[y] || (m[y] = {}))[e] || [])[0] === b && l[1], p = l[0] === b && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                                        if (1 === f.nodeType && ++p && f === t) {
                                            c[e] = [b, d, p];
                                            break
                                        }
                                } else if (x && (l = (t[y] || (t[y] = {}))[e]) && l[0] === b) p = l[1];
                                else
                                    for (;
                                        (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (x && ((f[y] || (f[y] = {}))[e] = [b, p]), f !== t)););
                                return (p -= i) === r || p % r == 0 && p / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ne.error("unsupported pseudo: " + e);
                        return i[y] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ie(function(e, n) {
                            for (var r, o = i(e, t), s = o.length; s--;) e[r = O.call(e, o[s])] = !(n[r] = o[s])
                        }) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: ie(function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(B, "$1"));
                        return r[y] ? ie(function(e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: ie(function(e) {
                        return function(t) {
                            return ne(e, t).length > 0
                        }
                    }),
                    contains: ie(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                    }),
                    lang: ie(function(e) {
                        return U.test(e || "") || ne.error("unsupported lang: " + e), e = e.replace(ee, te).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return Y.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ce(function() {
                        return [0]
                    }),
                    last: ce(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ce(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: ce(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: ce(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: ce(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: ce(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = ue(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = le(t);

        function pe() {}

        function de(e, t) {
            var n, i, o, s, a, u, l, c = C[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, u = [], l = r.preFilter; a;) {
                for (s in (!n || (i = I.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), n = !1, (i = _.exec(a)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(B, " ")
                    }), a = a.slice(n.length)), r.filter) !(i = V[s].exec(a)) || l[s] && !(i = l[s](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: s,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ne.error(e) : C(e, u).slice(0)
        }

        function he(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function ge(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = w++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, s) {
                var a, u, l = [b, o];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if ((a = (u = t[y] || (t[y] = {}))[r]) && a[0] === b && a[1] === o) return l[2] = a[2];
                            if (u[r] = l, l[2] = e(t, n, s)) return !0
                        }
            }
        }

        function me(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function ve(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s
        }

        function ye(e, t, n, r, i, o) {
            return r && !r[y] && (r = ye(r)), i && !i[y] && (i = ye(i, o)), ie(function(o, s, a, u) {
                var l, c, f, p = [],
                    d = [],
                    h = s.length,
                    g = o || function(e, t, n) {
                        for (var r = 0, i = t.length; i > r; r++) ne(e, t[r], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !o && t ? g : ve(g, p, e, a, u),
                    v = n ? i || (o ? e : h || r) ? [] : s : m;
                if (n && n(m, v, a, u), r)
                    for (l = ve(v, d), r(l, [], a, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(m[d[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = v.length; c--;)(f = v[c]) && l.push(m[c] = f);
                            i(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (l = i ? O.call(o, f) : p[c]) > -1 && (o[l] = !(s[l] = f))
                    }
                } else v = ve(v === s ? v.splice(h, v.length) : v), i ? i(null, s, v, u) : q.apply(s, v)
            })
        }

        function xe(e) {
            for (var t, n, i, o = e.length, s = r.relative[e[0].type], u = s || r.relative[" "], l = s ? 1 : 0, c = ge(function(e) {
                    return e === t
                }, u, !0), f = ge(function(e) {
                    return O.call(t, e) > -1
                }, u, !0), p = [function(e, n, r) {
                    return !s && (r || n !== a) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r))
                }]; o > l; l++)
                if (n = r.relative[e[l].type]) p = [ge(me(p), n)];
                else {
                    if ((n = r.filter[e[l].type].apply(null, e[l].matches))[y]) {
                        for (i = ++l; o > i && !r.relative[e[i].type]; i++);
                        return ye(l > 1 && me(p), l > 1 && he(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, i > l && xe(e.slice(l, i)), o > i && xe(e = e.slice(i)), o > i && he(e))
                    }
                    p.push(n)
                } return me(p)
        }

        function be(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function(o, s, u, l, c) {
                    var p, d, h, g = 0,
                        m = "0",
                        v = o && [],
                        y = [],
                        x = a,
                        w = o || i && r.find.TAG("*", c),
                        T = b += null == x ? 1 : Math.random() || .1,
                        C = w.length;
                    for (c && (a = s !== f && s); m !== C && null != (p = w[m]); m++) {
                        if (i && p) {
                            for (d = 0; h = e[d++];)
                                if (h(p, s, u)) {
                                    l.push(p);
                                    break
                                } c && (b = T)
                        }
                        n && ((p = !h && p) && g--, o && v.push(p))
                    }
                    if (g += m, n && m !== g) {
                        for (d = 0; h = t[d++];) h(v, y, s, u);
                        if (o) {
                            if (g > 0)
                                for (; m--;) v[m] || y[m] || (y[m] = A.call(l));
                            y = ve(y)
                        }
                        q.apply(l, y), c && !o && y.length > 0 && g + t.length > 1 && ne.uniqueSort(l)
                    }
                    return c && (b = T, a = x), v
                };
            return n ? ie(o) : o
        }

        function we(e, t, i, o) {
            var a, u, l, c, f, p = de(e);
            if (!o && 1 === p.length) {
                if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && n.getById && 9 === t.nodeType && d && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(ee, te), t) || [])[0])) return i;
                    e = e.slice(u.shift().value.length)
                }
                for (a = V.needsContext.test(e) ? 0 : u.length; a-- && (l = u[a], !r.relative[c = l.type]);)
                    if ((f = r.find[c]) && (o = f(l.matches[0].replace(ee, te), K.test(u[0].type) && fe(t.parentNode) || t))) {
                        if (u.splice(a, 1), !(e = o.length && he(u))) return q.apply(i, o), i;
                        break
                    }
            }
            return s(e, p)(o, t, !d, i, K.test(e) && fe(t.parentNode) || t), i
        }
        return pe.prototype = r.filters = r.pseudos, r.setFilters = new pe, s = ne.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = N[e + " "];
            if (!o) {
                for (t || (t = de(e)), n = t.length; n--;)(o = xe(t[n]))[y] ? r.push(o) : i.push(o);
                o = N(e, be(i, r))
            }
            return o
        }, n.sortStable = y.split("").sort(k).join("") === y, n.detectDuplicates = !!l, c(), n.sortDetached = oe(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }), oe(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || se("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && oe(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || se("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), oe(function(e) {
            return null == e.getAttribute("disabled")
        }) || se(F, function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), ne
    }(e);
    h.find = x, h.expr = x.selectors, h.expr[":"] = h.expr.pseudos, h.unique = x.uniqueSort, h.text = x.getText, h.isXMLDoc = x.isXML, h.contains = x.contains;
    var b = h.expr.match.needsContext,
        w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        T = /^.[^:#\[\.,]*$/;

    function C(e, t, n) {
        if (h.isFunction(t)) return h.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return h.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (T.test(t)) return h.filter(t, e, n);
            t = h.filter(t, e)
        }
        return h.grep(e, function(e) {
            return s.call(t, e) >= 0 !== n
        })
    }
    h.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? h.find.matchesSelector(r, e) ? [r] : [] : h.find.matches(e, h.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, h.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(h(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (h.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) h.find(e, i[t], r);
            return (r = this.pushStack(n > 1 ? h.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(C(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(C(this, e || [], !0))
        },
        is: function(e) {
            return !!C(this, "string" == typeof e && b.test(e) ? h(e) : e || [], !1).length
        }
    });
    var N, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (h.fn.init = function(e, t) {
        var n, r;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : k.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || N).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof h ? t[0] : t, h.merge(this, h.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : p, !0)), w.test(n[1]) && h.isPlainObject(t))
                    for (n in t) h.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (r = p.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = p, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : h.isFunction(e) ? void 0 !== N.ready ? N.ready(e) : e(h) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), h.makeArray(e, this))
    }).prototype = h.fn, N = h(p);
    var E = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function j(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    h.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && h(e).is(n)) break;
                    r.push(e)
                } return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), h.fn.extend({
        has: function(e) {
            var t = h(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (h.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = b.test(e) || "string" != typeof e ? h(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && h.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(o.length > 1 ? h.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(h(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(h.unique(h.merge(this.get(), h(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), h.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h.dir(e, "parentNode", n)
        },
        next: function(e) {
            return j(e, "nextSibling")
        },
        prev: function(e) {
            return j(e, "previousSibling")
        },
        nextAll: function(e) {
            return h.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return h.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return h.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return h.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || h.merge([], e.childNodes)
        }
    }, function(e, t) {
        h.fn[e] = function(n, r) {
            var i = h.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = h.filter(r, i)), this.length > 1 && (D[e] || h.unique(i), E.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var S, A = /\S+/g,
        L = {};

    function q() {
        p.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1), h.ready()
    }
    h.Callbacks = function(e) {
        e = "string" == typeof e ? L[e] || function(e) {
            var t = L[e] = {};
            return h.each(e.match(A) || [], function(e, n) {
                t[n] = !0
            }), t
        }(e) : h.extend({}, e);
        var t, n, r, i, o, s, a = [],
            u = !e.once && [],
            l = function(f) {
                for (t = e.memory && f, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++)
                    if (!1 === a[s].apply(f[0], f[1]) && e.stopOnFalse) {
                        t = !1;
                        break
                    } r = !1, a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable())
            },
            c = {
                add: function() {
                    if (a) {
                        var n = a.length;
                        ! function t(n) {
                            h.each(n, function(n, r) {
                                var i = h.type(r);
                                "function" === i ? e.unique && c.has(r) || a.push(r) : r && r.length && "string" !== i && t(r)
                            })
                        }(arguments), r ? o = a.length : t && (i = n, l(t))
                    }
                    return this
                },
                remove: function() {
                    return a && h.each(arguments, function(e, t) {
                        for (var n;
                            (n = h.inArray(t, a, n)) > -1;) a.splice(n, 1), r && (o >= n && o--, s >= n && s--)
                    }), this
                },
                has: function(e) {
                    return e ? h.inArray(e, a) > -1 : !(!a || !a.length)
                },
                empty: function() {
                    return a = [], o = 0, this
                },
                disable: function() {
                    return a = u = t = void 0, this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return u = void 0, t || c.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !a || n && !u || (t = [e, (t = t || []).slice ? t.slice() : t], r ? u.push(t) : l(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return c
    }, h.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", h.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", h.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", h.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return h.Deferred(function(n) {
                            h.each(t, function(t, o) {
                                var s = h.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && h.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? h.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, h.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, i, o = 0,
                s = r.call(arguments),
                a = s.length,
                u = 1 !== a || e && h.isFunction(e.promise) ? a : 0,
                l = 1 === u ? e : h.Deferred(),
                c = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? r.call(arguments) : o, i === t ? l.notifyWith(n, i) : --u || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) s[o] && h.isFunction(s[o].promise) ? s[o].promise().done(c(o, i, s)).fail(l.reject).progress(c(o, n, t)) : --u;
            return u || l.resolveWith(i, s), l.promise()
        }
    }), h.fn.ready = function(e) {
        return h.ready.promise().done(e), this
    }, h.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? h.readyWait++ : h.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --h.readyWait : h.isReady) || (h.isReady = !0, !0 !== e && --h.readyWait > 0 || (S.resolveWith(p, [h]), h.fn.trigger && h(p).trigger("ready").off("ready")))
        }
    }), h.ready.promise = function(t) {
        return S || (S = h.Deferred(), "complete" === p.readyState ? setTimeout(h.ready) : (p.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1))), S.promise(t)
    }, h.ready.promise();
    var H = h.access = function(e, t, n, r, i, o, s) {
        var a = 0,
            u = e.length,
            l = null == n;
        if ("object" === h.type(n))
            for (a in i = !0, n) h.access(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0, h.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                return l.call(h(e), n)
            })), t))
            for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };

    function O() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = h.expando + Math.random()
    }
    h.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, O.uid = 1, O.accepts = h.acceptData, O.prototype = {
        key: function(e) {
            if (!O.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = O.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, h.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (h.isEmptyObject(o)) h.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, h.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e),
                s = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                h.isArray(t) ? r = t.concat(t.map(h.camelCase)) : (i = h.camelCase(t), t in s ? r = [t, i] : r = (r = i) in s ? [r] : r.match(A) || []), n = r.length;
                for (; n--;) delete s[r[n]]
            }
        },
        hasData: function(e) {
            return !h.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var F = new O,
        P = new O,
        M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        R = /([A-Z])/g;

    function W(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(R, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : M.test(n) ? h.parseJSON(n) : n)
                } catch (e) {}
                P.set(e, t, n)
            } else n = void 0;
        return n
    }
    h.extend({
        hasData: function(e) {
            return P.hasData(e) || F.hasData(e)
        },
        data: function(e, t, n) {
            return P.access(e, t, n)
        },
        removeData: function(e, t) {
            P.remove(e, t)
        },
        _data: function(e, t, n) {
            return F.access(e, t, n)
        },
        _removeData: function(e, t) {
            F.remove(e, t)
        }
    }), h.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = P.get(o), 1 === o.nodeType && !F.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) 0 === (r = s[n].name).indexOf("data-") && (r = h.camelCase(r.slice(5)), W(o, r, i[r]));
                    F.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                P.set(this, e)
            }) : H(this, function(t) {
                var n, r = h.camelCase(e);
                if (o && void 0 === t) {
                    if (void 0 !== (n = P.get(o, e))) return n;
                    if (void 0 !== (n = P.get(o, r))) return n;
                    if (void 0 !== (n = W(o, r, void 0))) return n
                } else this.each(function() {
                    var n = P.get(this, r);
                    P.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && P.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                P.remove(this, e)
            })
        }
    }), h.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = F.get(e, t), n && (!r || h.isArray(n) ? r = F.access(e, t, h.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = h.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = h._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                h.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return F.get(e, n) || F.access(e, n, {
                empty: h.Callbacks("once memory").add(function() {
                    F.remove(e, [t + "queue", n])
                })
            })
        }
    }), h.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? h.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = h.queue(this, e, t);
                h._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && h.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                h.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = h.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = F.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        B = ["Top", "Right", "Bottom", "Left"],
        I = function(e, t) {
            return e = t || e, "none" === h.css(e, "display") || !h.contains(e.ownerDocument, e)
        },
        _ = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = p.createDocumentFragment().appendChild(p.createElement("div"));
        e.innerHTML = "<input type='radio' checked='checked' name='t'/>", f.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var X = "undefined";
    f.focusinBubbles = "onfocusin" in e;
    var z = /^key/,
        U = /^(?:mouse|contextmenu)|click/,
        V = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function G() {
        return !0
    }

    function Q() {
        return !1
    }

    function J() {
        try {
            return p.activeElement
        } catch (e) {}
    }
    h.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, g, m, v = F.get(e);
            if (v)
                for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = h.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
                        return typeof h !== X && h.event.triggered !== t.type ? h.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(A) || [""]).length; l--;) d = m = (a = Y.exec(t[l]) || [])[1], g = (a[2] || "").split(".").sort(), d && (f = h.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = h.event.special[d] || {}, c = h.extend({
                    type: d,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && h.expr.match.needsContext.test(i),
                    namespace: g.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, g, s) || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), h.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, g, m, v = F.hasData(e) && F.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(A) || [""]).length; l--;)
                    if (d = m = (a = Y.exec(t[l]) || [])[1], g = (a[2] || "").split(".").sort(), d) {
                        for (f = h.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, g, v.handle) || h.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) h.event.remove(e, d + t[l], n, r, !0);
                h.isEmptyObject(u) && (delete v.handle, F.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, s, a, u, c, f, d, g = [r || p],
                m = l.call(t, "type") ? t.type : t,
                v = l.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || p, 3 !== r.nodeType && 8 !== r.nodeType && !V.test(m + h.event.triggered) && (m.indexOf(".") >= 0 && (v = m.split("."), m = v.shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, (t = t[h.expando] ? t : new h.Event(m, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = v.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : h.makeArray(n, [t]), d = h.event.special[m] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!i && !d.noBubble && !h.isWindow(r)) {
                    for (u = d.delegateType || m, V.test(u + m) || (s = s.parentNode); s; s = s.parentNode) g.push(s), a = s;
                    a === (r.ownerDocument || p) && g.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = g[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : d.bindType || m, (f = (F.get(s, "events") || {})[t.type] && F.get(s, "handle")) && f.apply(s, n), (f = c && s[c]) && f.apply && h.acceptData(s) && (t.result = f.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, i || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), n) || !h.acceptData(r) || c && h.isFunction(r[m]) && !h.isWindow(r) && ((a = r[c]) && (r[c] = null), h.event.triggered = m, r[m](), h.event.triggered = void 0, a && (r[c] = a)), t.result
            }
        },
        dispatch: function(e) {
            e = h.event.fix(e);
            var t, n, i, o, s, a = [],
                u = r.call(arguments),
                l = (F.get(this, "events") || {})[e.type] || [],
                c = h.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = h.event.handlers.call(this, e, l), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (s = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, void 0 !== (i = ((h.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (!0 !== u.disabled || "click" !== e.type) {
                        for (r = [], n = 0; a > n; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? h(i, this).index(u) >= 0 : h.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    } return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || p).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[h.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = U.test(i) ? this.mouseHooks : z.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new h.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = p), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== J() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === J() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && h.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return h.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = h.extend(new h.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? h.event.trigger(i, null, t) : h.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, h.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, h.Event = function(e, t) {
        return this instanceof h.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.getPreventDefault && e.getPreventDefault() ? G : Q) : this.type = e, t && h.extend(this, t), this.timeStamp = e && e.timeStamp || h.now(), void(this[h.expando] = !0)) : new h.Event(e, t)
    }, h.Event.prototype = {
        isDefaultPrevented: Q,
        isPropagationStopped: Q,
        isImmediatePropagationStopped: Q,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = G, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = G, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = G, this.stopPropagation()
        }
    }, h.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        h.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return (!r || r !== this && !h.contains(this, r)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), f.focusinBubbles || h.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            h.event.simulate(t, e.target, h.event.fix(e), !0)
        };
        h.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = F.access(r, t);
                i || r.addEventListener(e, n, !0), F.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = F.access(r, t) - 1;
                i ? F.access(r, t, i) : (r.removeEventListener(e, n, !0), F.remove(r, t))
            }
        }
    }), h.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                for (s in "string" != typeof t && (n = n || t, t = void 0), e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = Q;
            else if (!r) return this;
            return 1 === i && (o = r, (r = function(e) {
                return h().off(e), o.apply(this, arguments)
            }).guid = o.guid || (o.guid = h.guid++)), this.each(function() {
                h.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, h(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = Q), this.each(function() {
                h.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                h.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? h.event.trigger(e, t, n, !0) : void 0
        }
    });
    var K = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Z = /<([\w:]+)/,
        ee = /<|&#?\w+;/,
        te = /<(?:script|style|link)/i,
        ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        re = /^$|\/(?:java|ecma)script/i,
        ie = /^true\/(.*)/,
        oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        se = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ae(e, t) {
        return h.nodeName(e, "table") && h.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ue(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function le(e) {
        var t = ie.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function ce(e, t) {
        for (var n = 0, r = e.length; r > n; n++) F.set(e[n], "globalEval", !t || F.get(t[n], "globalEval"))
    }

    function fe(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (F.hasData(e) && (o = F.access(e), s = F.set(t, o), l = o.events))
                for (i in delete s.handle, s.events = {}, l)
                    for (n = 0, r = l[i].length; r > n; n++) h.event.add(t, i, l[i][n]);
            P.hasData(e) && (a = P.access(e), u = h.extend({}, a), P.set(t, u))
        }
    }

    function pe(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && h.nodeName(e, t) ? h.merge([e], n) : n
    }

    function de(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && _.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, se.th = se.td, h.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = h.contains(e.ownerDocument, e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || h.isXMLDoc(e)))
                for (s = pe(a), r = 0, i = (o = pe(e)).length; i > r; r++) de(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || pe(e), s = s || pe(a), r = 0, i = o.length; i > r; r++) fe(o[r], s[r]);
                else fe(e, a);
            return (s = pe(a, "script")).length > 0 && ce(s, !u && pe(e, "script")), a
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)
                if ((i = e[p]) || 0 === i)
                    if ("object" === h.type(i)) h.merge(f, i.nodeType ? [i] : i);
                    else if (ee.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (Z.exec(i) || ["", ""])[1].toLowerCase(), a = se[s] || se._default, o.innerHTML = a[1] + i.replace(K, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                h.merge(f, o.childNodes), (o = c.firstChild).textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];)
                if ((!r || -1 === h.inArray(i, r)) && (u = h.contains(i.ownerDocument, i), o = pe(c.appendChild(i), "script"), u && ce(o), n))
                    for (l = 0; i = o[l++];) re.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, o, s, a = h.event.special, u = 0; void 0 !== (n = e[u]); u++) {
                if (h.acceptData(n) && ((o = n[F.expando]) && (t = F.cache[o]))) {
                    if ((r = Object.keys(t.events || {})).length)
                        for (s = 0; void 0 !== (i = r[s]); s++) a[i] ? h.event.remove(n, i) : h.removeEvent(n, i, t.handle);
                    F.cache[o] && delete F.cache[o]
                }
                delete P.cache[n[P.expando]]
            }
        }
    }), h.fn.extend({
        text: function(e) {
            return H(this, function(e) {
                return void 0 === e ? h.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ae(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ae(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? h.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || h.cleanData(pe(n)), n.parentNode && (t && h.contains(n.ownerDocument, n) && ce(pe(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (h.cleanData(pe(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return h.clone(this, e, t)
            })
        },
        html: function(e) {
            return H(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !te.test(e) && !se[(Z.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(K, "<$1></$2>");
                    try {
                        for (; r > n; n++) 1 === (t = this[n] || {}).nodeType && (h.cleanData(pe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, h.cleanData(pe(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = i.apply([], e);
            var n, r, o, s, a, u, l = 0,
                c = this.length,
                p = this,
                d = c - 1,
                g = e[0],
                m = h.isFunction(g);
            if (m || c > 1 && "string" == typeof g && !f.checkClone && ne.test(g)) return this.each(function(n) {
                var r = p.eq(n);
                m && (e[0] = g.call(this, n, r.html())), r.domManip(e, t)
            });
            if (c && (r = (n = h.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (s = (o = h.map(pe(n, "script"), ue)).length; c > l; l++) a = n, l !== d && (a = h.clone(a, !0, !0), s && h.merge(o, pe(a, "script"))), t.call(this[l], a, l);
                if (s)
                    for (u = o[o.length - 1].ownerDocument, h.map(o, le), l = 0; s > l; l++) a = o[l], re.test(a.type || "") && !F.access(a, "globalEval") && h.contains(u, a) && (a.src ? h._evalUrl && h._evalUrl(a.src) : h.globalEval(a.textContent.replace(oe, "")))
            }
            return this
        }
    }), h.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        h.fn[e] = function(e) {
            for (var n, r = [], i = h(e), s = i.length - 1, a = 0; s >= a; a++) n = a === s ? this : this.clone(!0), h(i[a])[t](n), o.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var he, ge = {};

    function me(t, n) {
        var r = h(n.createElement(t)).appendTo(n.body),
            i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : h.css(r[0], "display");
        return r.detach(), i
    }

    function ve(e) {
        var t = p,
            n = ge[e];
        return n || ("none" !== (n = me(e, t)) && n || ((t = (he = (he || h("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = me(e, t), he.detach()), ge[e] = n), n
    }
    var ye = /^margin/,
        xe = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
        be = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };

    function we(e, t, n) {
        var r, i, o, s, a = e.style;
        return (n = n || be(e)) && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || h.contains(e.ownerDocument, e) || (s = h.style(e, t)), xe.test(s) && ye.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Te(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        var t, n, r = p.documentElement,
            i = p.createElement("div"),
            o = p.createElement("div");

        function s() {
            o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", r.appendChild(i);
            var s = e.getComputedStyle(o, null);
            t = "1%" !== s.top, n = "4px" === s.width, r.removeChild(i)
        }
        o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === o.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", i.appendChild(o), e.getComputedStyle && h.extend(f, {
            pixelPosition: function() {
                return s(), t
            },
            boxSizingReliable: function() {
                return null == n && s(), n
            },
            reliableMarginRight: function() {
                var t, n = o.appendChild(p.createElement("div"));
                return n.style.cssText = o.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", n.style.marginRight = n.style.width = "0", o.style.width = "1px", r.appendChild(i), t = !parseFloat(e.getComputedStyle(n, null).marginRight), r.removeChild(i), o.innerHTML = "", t
            }
        })
    }(), h.swap = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
        return i
    };
    var Ce = /^(none|table(?!-c[ea]).+)/,
        Ne = new RegExp("^(" + $ + ")(.*)$", "i"),
        ke = new RegExp("^([+-])=(" + $ + ")", "i"),
        Ee = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        De = {
            letterSpacing: 0,
            fontWeight: 400
        },
        je = ["Webkit", "O", "Moz", "ms"];

    function Se(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = je.length; i--;)
            if ((t = je[i] + n) in e) return t;
        return r
    }

    function Ae(e, t, n) {
        var r = Ne.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Le(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += h.css(e, n + B[o], !0, i)), r ? ("content" === n && (s -= h.css(e, "padding" + B[o], !0, i)), "margin" !== n && (s -= h.css(e, "border" + B[o] + "Width", !0, i))) : (s += h.css(e, "padding" + B[o], !0, i), "padding" !== n && (s += h.css(e, "border" + B[o] + "Width", !0, i)));
        return s
    }

    function qe(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = be(e),
            s = "border-box" === h.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if ((0 > (i = we(e, t, o)) || null == i) && (i = e.style[t]), xe.test(i)) return i;
            r = s && (f.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Le(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function He(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)(r = e[s]).style && (o[s] = F.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && I(r) && (o[s] = F.access(r, "olddisplay", ve(r.nodeName)))) : o[s] || (i = I(r), (n && "none" !== n || !i) && F.set(r, "olddisplay", i ? n : h.css(r, "display"))));
        for (s = 0; a > s; s++)(r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function Oe(e, t, n, r, i) {
        return new Oe.prototype.init(e, t, n, r, i)
    }
    h.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = we(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = h.camelCase(t),
                    u = e.style;
                return t = h.cssProps[a] || (h.cssProps[a] = Se(u, a)), s = h.cssHooks[t] || h.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : ("string" === (o = typeof n) && (i = ke.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(h.css(e, t)), o = "number"), void(null != n && n == n && ("number" !== o || h.cssNumber[a] || (n += "px"), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = "", u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = h.camelCase(t);
            return t = h.cssProps[a] || (h.cssProps[a] = Se(e.style, a)), (s = h.cssHooks[t] || h.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = we(e, t, r)), "normal" === i && t in De && (i = De[t]), "" === n || n ? (o = parseFloat(i), !0 === n || h.isNumeric(o) ? o || 0 : i) : i
        }
    }), h.each(["height", "width"], function(e, t) {
        h.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && Ce.test(h.css(e, "display")) ? h.swap(e, Ee, function() {
                    return qe(e, t, r)
                }) : qe(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && be(e);
                return Ae(0, n, r ? Le(e, t, r, "border-box" === h.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), h.cssHooks.marginRight = Te(f.reliableMarginRight, function(e, t) {
        return t ? h.swap(e, {
            display: "inline-block"
        }, we, [e, "marginRight"]) : void 0
    }), h.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        h.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + B[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, ye.test(e) || (h.cssHooks[e + t].set = Ae)
    }), h.fn.extend({
        css: function(e, t) {
            return H(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (h.isArray(t)) {
                    for (r = be(e), i = t.length; i > s; s++) o[t[s]] = h.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? h.style(e, t, n) : h.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return He(this, !0)
        },
        hide: function() {
            return He(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                I(this) ? h(this).show() : h(this).hide()
            })
        }
    }), h.Tween = Oe, Oe.prototype = {
        constructor: Oe,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (h.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Oe.propHooks[this.prop];
            return e && e.get ? e.get(this) : Oe.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Oe.propHooks[this.prop];
            return this.pos = t = this.options.duration ? h.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Oe.propHooks._default.set(this), this
        }
    }, Oe.prototype.init.prototype = Oe.prototype, Oe.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = h.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                h.fx.step[e.prop] ? h.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[h.cssProps[e.prop]] || h.cssHooks[e.prop]) ? h.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Oe.propHooks.scrollTop = Oe.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, h.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, h.fx = Oe.prototype.init, h.fx.step = {};
    var Fe, Pe, Me = /^(?:toggle|show|hide)$/,
        Re = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
        We = /queueHooks$/,
        $e = [function(e, t, n) {
            var r, i, o, s, a, u, l, c = this,
                f = {},
                p = e.style,
                d = e.nodeType && I(e),
                g = F.get(e, "fxshow");
            for (r in n.queue || (null == (a = h._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || u()
                }), a.unqueued++, c.always(function() {
                    c.always(function() {
                        a.unqueued--, h.queue(e, "fx").length || a.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "none" === (l = h.css(e, "display")) && (l = ve(e.nodeName)), "inline" === l && "none" === h.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), t)
                if (i = t[r], Me.exec(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r]) continue;
                        d = !0
                    }
                    f[r] = g && g[r] || h.style(e, r)
                } if (!h.isEmptyObject(f))
                for (r in g ? "hidden" in g && (d = g.hidden) : g = F.access(e, "fxshow", {}), o && (g.hidden = !d), d ? h(e).show() : c.done(function() {
                        h(e).hide()
                    }), c.done(function() {
                        var t;
                        for (t in F.remove(e, "fxshow"), f) h.style(e, t, f[t])
                    }), f) s = Xe(d ? g[r] : 0, r, c), r in g || (g[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }],
        Be = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Re.exec(t),
                    o = i && i[3] || (h.cssNumber[e] ? "" : "px"),
                    s = (h.cssNumber[e] || "px" !== o && +r) && Re.exec(h.css(n.elem, e)),
                    a = 1,
                    u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do {
                        s /= a = a || ".5", h.style(n.elem, e, s + o)
                    } while (a !== (a = n.cur() / r) && 1 !== a && --u)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function Ie() {
        return setTimeout(function() {
            Fe = void 0
        }), Fe = h.now()
    }

    function _e(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) i["margin" + (n = B[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function Xe(e, t, n) {
        for (var r, i = (Be[t] || []).concat(Be["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ze(e, t, n) {
        var r, i, o = 0,
            s = $e.length,
            a = h.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Fe || Ie(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; s > o; o++) l.tweens[o].run(r);
                return a.notifyWith(e, [l, r, n]), 1 > r && s ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: h.extend({}, t),
                opts: h.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Fe || Ie(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = h.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (i = t[r = h.camelCase(n)], o = e[n], h.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = h.cssHooks[r]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); s > o; o++)
            if (r = $e[o].call(l, e, c, l.opts)) return r;
        return h.map(c, Xe, l), h.isFunction(l.opts.start) && l.opts.start.call(e, l), h.fx.timer(h.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    h.Animation = h.extend(ze, {
            tweener: function(e, t) {
                h.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], Be[n] = Be[n] || [], Be[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? $e.unshift(e) : $e.push(e)
            }
        }), h.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? h.extend({}, e) : {
                complete: n || !n && t || h.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !h.isFunction(t) && t
            };
            return r.duration = h.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in h.fx.speeds ? h.fx.speeds[r.duration] : h.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                h.isFunction(r.old) && r.old.call(this), r.queue && h.dequeue(this, r.queue)
            }, r
        }, h.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(I).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = h.isEmptyObject(e),
                    o = h.speed(t, n, r),
                    s = function() {
                        var t = ze(this, h.extend({}, e), o);
                        (i || F.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = h.timers,
                        s = F.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && We.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && h.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = F.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = h.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, h.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), h.each(["toggle", "show", "hide"], function(e, t) {
            var n = h.fn[t];
            h.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_e(t, !0), e, r, i)
            }
        }), h.each({
            slideDown: _e("show"),
            slideUp: _e("hide"),
            slideToggle: _e("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            h.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), h.timers = [], h.fx.tick = function() {
            var e, t = 0,
                n = h.timers;
            for (Fe = h.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || h.fx.stop(), Fe = void 0
        }, h.fx.timer = function(e) {
            h.timers.push(e), e() ? h.fx.start() : h.timers.pop()
        }, h.fx.interval = 13, h.fx.start = function() {
            Pe || (Pe = setInterval(h.fx.tick, h.fx.interval))
        }, h.fx.stop = function() {
            clearInterval(Pe), Pe = null
        }, h.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, h.fn.delay = function(e, t) {
            return e = h.fx && h.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = p.createElement("input"),
                t = p.createElement("select"),
                n = t.appendChild(p.createElement("option"));
            e.type = "checkbox", f.checkOn = "" !== e.value, f.optSelected = n.selected, t.disabled = !0, f.optDisabled = !n.disabled, (e = p.createElement("input")).value = "t", e.type = "radio", f.radioValue = "t" === e.value
        }();
    var Ue, Ve = h.expr.attrHandle;
    h.fn.extend({
        attr: function(e, t) {
            return H(this, h.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                h.removeAttr(this, e)
            })
        }
    }), h.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === X ? h.prop(e, t, n) : (1 === o && h.isXMLDoc(e) || (t = t.toLowerCase(), r = h.attrHooks[t] || (h.expr.match.bool.test(t) ? Ue : void 0)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = h.find.attr(e, t)) ? void 0 : i : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void h.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(A);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = h.propFix[n] || n, h.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!f.radioValue && "radio" === t && h.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Ue = {
        set: function(e, t, n) {
            return !1 === t ? h.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, h.each(h.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Ve[t] || h.find.attr;
        Ve[t] = function(e, t, r) {
            var i, o;
            return r || (o = Ve[t], Ve[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ve[t] = o), i
        }
    });
    var Ye = /^(?:input|select|textarea|button)$/i;
    h.fn.extend({
        prop: function(e, t) {
            return H(this, h.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[h.propFix[e] || e]
            })
        }
    }), h.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !h.isXMLDoc(e)) && (t = h.propFix[t] || t, i = h.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || Ye.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), f.optSelected || (h.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), h.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        h.propFix[this.toLowerCase()] = this
    });
    var Ge = /[\t\r\n\f]/g;
    h.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (h.isFunction(e)) return this.each(function(t) {
                h(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(A) || []; l > u; u++)
                    if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(Ge, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = h.trim(r), n.className !== s && (n.className = s)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (h.isFunction(e)) return this.each(function(t) {
                h(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(A) || []; l > u; u++)
                    if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(Ge, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        s = e ? h.trim(r) : "", n.className !== s && (n.className = s)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(h.isFunction(e) ? function(n) {
                h(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = h(this), o = e.match(A) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === X || "boolean" === n) && (this.className && F.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : F.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ge, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var Qe = /\r/g;
    h.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = h.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, h(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : h.isArray(i) && (i = h.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = h.valHooks[this.type] || h.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = h.valHooks[i.type] || h.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(Qe, "") : null == n ? "" : n : void 0
        }
    }), h.extend({
        valHooks: {
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                        if (!(!(n = r[u]).selected && u !== i || (f.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && h.nodeName(n.parentNode, "optgroup"))) {
                            if (t = h(n).val(), o) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = h.makeArray(t), s = i.length; s--;)((r = i[s]).selected = h.inArray(h(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), h.each(["radio", "checkbox"], function() {
        h.valHooks[this] = {
            set: function(e, t) {
                return h.isArray(t) ? e.checked = h.inArray(h(e).val(), t) >= 0 : void 0
            }
        }, f.checkOn || (h.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        h.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), h.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Je = h.now(),
        Ke = /\?/;
    h.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, h.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && h.error("Invalid XML: " + e), t
    };
    var Ze, et, tt = /#.*$/,
        nt = /([?&])_=[^&]*/,
        rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        it = /^(?:GET|HEAD)$/,
        ot = /^\/\//,
        st = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        at = {},
        ut = {},
        lt = "*/".concat("*");
    try {
        et = location.href
    } catch (e) {
        (et = p.createElement("a")).href = "", et = et.href
    }

    function ct(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(A) || [];
            if (h.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function ft(e, t, n, r) {
        var i = {},
            o = e === ut;

        function s(a) {
            var u;
            return i[a] = !0, h.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), s(l), !1)
            }), u
        }
        return s(t.dataTypes[0]) || !i["*"] && s("*")
    }

    function pt(e, t) {
        var n, r, i = h.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && h.extend(!0, e, r), e
    }
    Ze = st.exec(et.toLowerCase()) || [], h.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: et,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ze[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": lt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": h.parseJSON,
                "text xml": h.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? pt(pt(e, h.ajaxSettings), t) : pt(h.ajaxSettings, e)
        },
        ajaxPrefilter: ct(at),
        ajaxTransport: ct(ut),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, r, i, o, s, a, u, l, c = h.ajaxSetup({}, t),
                f = c.context || c,
                p = c.context && (f.nodeType || f.jquery) ? h(f) : h.event,
                d = h.Deferred(),
                g = h.Callbacks("once memory"),
                m = c.statusCode || {},
                v = {},
                y = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!o)
                                for (o = {}; t = rt.exec(i);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? i : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (c.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return n && n.abort(t), T(0, t), this
                    }
                };
            if (d.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, c.url = ((e || c.url || et) + "").replace(tt, "").replace(ot, Ze[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = h.trim(c.dataType || "*").toLowerCase().match(A) || [""], null == c.crossDomain && (a = st.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Ze[1] && a[2] === Ze[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Ze[3] || ("http:" === Ze[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = h.param(c.data, c.traditional)), ft(at, c, t, w), 2 === x) return w;
            for (l in (u = c.global) && 0 == h.active++ && h.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !it.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Ke.test(r) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = nt.test(r) ? r.replace(nt, "$1_=" + Je++) : r + (Ke.test(r) ? "&" : "?") + "_=" + Je++)), c.ifModified && (h.lastModified[r] && w.setRequestHeader("If-Modified-Since", h.lastModified[r]), h.etag[r] && w.setRequestHeader("If-None-Match", h.etag[r])), (c.data && c.hasContent && !1 !== c.contentType || t.contentType) && w.setRequestHeader("Content-Type", c.contentType), w.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + lt + "; q=0.01" : "") : c.accepts["*"]), c.headers) w.setRequestHeader(l, c.headers[l]);
            if (c.beforeSend && (!1 === c.beforeSend.call(f, w, c) || 2 === x)) return w.abort();
            for (l in b = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[l](c[l]);
            if (n = ft(ut, c, t, w)) {
                w.readyState = 1, u && p.trigger("ajaxSend", [w, c]), c.async && c.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, c.timeout));
                try {
                    x = 1, n.send(v, T)
                } catch (e) {
                    if (!(2 > x)) throw e;
                    T(-1, e)
                }
            } else T(-1, "No Transport");

            function T(e, t, o, a) {
                var l, v, y, b, T, C = t;
                2 !== x && (x = 2, s && clearTimeout(s), n = void 0, i = a || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (b = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            s || (s = i)
                        }
                        o = o || s
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
                }(c, w, o)), b = function(e, t, n, r) {
                    var i, o, s, a, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(s = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                    !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(c, b, w, l), l ? (c.ifModified && ((T = w.getResponseHeader("Last-Modified")) && (h.lastModified[r] = T), (T = w.getResponseHeader("etag")) && (h.etag[r] = T)), 204 === e || "HEAD" === c.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, v = b.data, l = !(y = b.error))) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", l ? d.resolveWith(f, [v, C, w]) : d.rejectWith(f, [w, C, y]), w.statusCode(m), m = void 0, u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [w, c, l ? v : y]), g.fireWith(f, [w, C]), u && (p.trigger("ajaxComplete", [w, c]), --h.active || h.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(e, t, n) {
            return h.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return h.get(e, void 0, t, "script")
        }
    }), h.each(["get", "post"], function(e, t) {
        h[t] = function(e, n, r, i) {
            return h.isFunction(n) && (i = i || r, r = n, n = void 0), h.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), h.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        h.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), h._evalUrl = function(e) {
        return h.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, h.fn.extend({
        wrapAll: function(e) {
            var t;
            return h.isFunction(e) ? this.each(function(t) {
                h(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = h(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(h.isFunction(e) ? function(t) {
                h(this).wrapInner(e.call(this, t))
            } : function() {
                var t = h(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = h.isFunction(e);
            return this.each(function(n) {
                h(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                h.nodeName(this, "body") || h(this).replaceWith(this.childNodes)
            }).end()
        }
    }), h.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, h.expr.filters.visible = function(e) {
        return !h.expr.filters.hidden(e)
    };
    var dt = /%20/g,
        ht = /\[\]$/,
        gt = /\r?\n/g,
        mt = /^(?:submit|button|image|reset|file)$/i,
        vt = /^(?:input|select|textarea|keygen)/i;

    function yt(e, t, n, r) {
        var i;
        if (h.isArray(t)) h.each(t, function(t, i) {
            n || ht.test(e) ? r(e, i) : yt(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== h.type(t)) r(e, t);
        else
            for (i in t) yt(e + "[" + i + "]", t[i], n, r)
    }
    h.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = h.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = h.ajaxSettings && h.ajaxSettings.traditional), h.isArray(e) || e.jquery && !h.isPlainObject(e)) h.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) yt(n, e[n], t, i);
        return r.join("&").replace(dt, "+")
    }, h.fn.extend({
        serialize: function() {
            return h.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = h.prop(this, "elements");
                return e ? h.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !h(this).is(":disabled") && vt.test(this.nodeName) && !mt.test(e) && (this.checked || !_.test(e))
            }).map(function(e, t) {
                var n = h(this).val();
                return null == n ? null : h.isArray(n) ? h.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(gt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(gt, "\r\n")
                }
            }).get()
        }
    }), h.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var xt = 0,
        bt = {},
        wt = {
            0: 200,
            1223: 204
        },
        Tt = h.ajaxSettings.xhr();
    e.ActiveXObject && h(e).on("unload", function() {
        for (var e in bt) bt[e]()
    }), f.cors = !!Tt && "withCredentials" in Tt, f.ajax = Tt = !!Tt, h.ajaxTransport(function(e) {
        var t;
        return f.cors || Tt && !e.crossDomain ? {
            send: function(n, r) {
                var i, o = e.xhr(),
                    s = ++xt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) o[i] = e.xhrFields[i];
                for (i in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete bt[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(wt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = bt[s] = t("abort"), o.send(e.hasContent && e.data || null)
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), h.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return h.globalEval(e), e
            }
        }
    }), h.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), h.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain) return {
            send: function(r, i) {
                t = h("<script>").prop({
                    async: !0,
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                }), p.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Ct = [],
        Nt = /(=)\?(?=&|$)|\?\?/;
    h.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ct.pop() || h.expando + "_" + Je++;
            return this[e] = !0, e
        }
    }), h.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = !1 !== t.jsonp && (Nt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = h.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Nt, "$1" + i) : !1 !== t.jsonp && (t.url += (Ke.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || h.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ct.push(i)), s && h.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), h.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || p;
        var r = w.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = h.buildFragment([e], t, i), i && i.length && h(i).remove(), h.merge([], r.childNodes))
    };
    var kt = h.fn.load;
    h.fn.load = function(e, t, n) {
        if ("string" != typeof e && kt) return kt.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), h.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && h.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? h("<div>").append(h.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, h.expr.filters.animated = function(e) {
        return h.grep(h.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Et = e.document.documentElement;

    function Dt(e) {
        return h.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    h.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l = h.css(e, "position"),
                c = h(e),
                f = {};
            "static" === l && (e.style.position = "relative"), a = c.offset(), o = h.css(e, "top"), u = h.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), h.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, h.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                h.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            return o ? (t = o.documentElement, h.contains(t, r) ? (typeof r.getBoundingClientRect !== X && (i = r.getBoundingClientRect()), n = Dt(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === h.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), h.nodeName(e[0], "html") || (r = e.offset()), r.top += h.css(e[0], "borderTopWidth", !0), r.left += h.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - h.css(n, "marginTop", !0),
                    left: t.left - r.left - h.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Et; e && !h.nodeName(e, "html") && "static" === h.css(e, "position");) e = e.offsetParent;
                return e || Et
            })
        }
    }), h.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        h.fn[t] = function(i) {
            return H(this, function(t, i, o) {
                var s = Dt(t);
                return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), h.each(["top", "left"], function(e, t) {
        h.cssHooks[t] = Te(f.pixelPosition, function(e, n) {
            return n ? (n = we(e, t), xe.test(n) ? h(e).position()[t] + "px" : n) : void 0
        })
    }), h.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        h.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            h.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (!0 === r || !0 === i ? "margin" : "border");
                return H(this, function(t, n, r) {
                    var i;
                    return h.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? h.css(t, n, s) : h.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), h.fn.size = function() {
        return this.length
    }, h.fn.andSelf = h.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return h
    });
    var jt = e.jQuery,
        St = e.$;
    return h.noConflict = function(t) {
        return e.$ === h && (e.$ = St), t && e.jQuery === h && (e.jQuery = jt), h
    }, typeof t === X && (e.jQuery = e.$ = h), h
});