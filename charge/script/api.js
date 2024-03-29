var app_url = 'http://hg.ys138.vip/v1/';

//api.js
! function(e) {
    function n(e, n, t, r) {
        return 'function' == typeof n && (r = t, t = n, n = void 0), {
            url: e,
            data: n,
            fnSuc: t,
            fnErr: r,
        }
    }
    var t = {},
        r = /android/gi.test(navigator.appVersion),
        a = function() {
            var n = e.localStorage;
            return r && (n = os.localStorage()), n
        };
    t.trim = function(e) {
        return String.prototype.trim ? null == e ? "" : String.prototype.trim.call(e) : e.replace(/(^\s*)|(\s*$)/g, "")
    }, t.trimAll = function(e) {
        return e.replace(/\s*/g, "")
    }, t.isElement = function(e) {
        return !(!e || 1 != e.nodeType)
    }, t.isArray = function(e) {
        return Array.isArray ? Array.isArray(e) : e instanceof Array
    }, t.isEmptyObject = function(e) {
        return "{}" === JSON.stringify(e) ? !0 : !1
    }, t.addEvt = function(e, n, r, a) {
        return t.isElement(e) ? (a = a || !1, void(e.addEventListener && e.addEventListener(n, r, a))) : void console.warn("$api.addEvt Function need el param, el param must be DOM Element")
    }, t.rmEvt = function(e, n, r, a) {
        return t.isElement(e) ? (a = a || !1, void(e.removeEventListener && e.removeEventListener(n, r, a))) : void console.warn("$api.rmEvt Function need el param, el param must be DOM Element")
    }, t.one = function(e, n, r, a) {
        if (!t.isElement(e)) return void console.warn("$api.one Function need el param, el param must be DOM Element");
        a = a || !1;
        var i = this,
            o = function() {
                r && r(), i.rmEvt(e, n, o, a)
            };
        i.addEvt(e, n, o, a)
    }, t.dom = function(e, n) {
        if (1 === arguments.length && "string" == typeof arguments[0]) {
            if (document.querySelector) return document.querySelector(arguments[0])
        } else if (2 === arguments.length && e.querySelector) return e.querySelector(n)
    }, t.domAll = function(e, n) {
        if (1 === arguments.length && "string" == typeof arguments[0]) {
            if (document.querySelectorAll) return document.querySelectorAll(arguments[0])
        } else if (2 === arguments.length && e.querySelectorAll) return e.querySelectorAll(n)
    }, t.byId = function(e) {
        return document.getElementById(e)
    }, t.first = function(e, n) {
        return 1 === arguments.length ? t.isElement(e) ? e.children[0] : void console.warn("$api.first Function need el param, el param must be DOM Element") : 2 === arguments.length ? this.dom(e, n + ":first-child") : void 0
    }, t.last = function(e, n) {
        if (1 === arguments.length) {
            if (!t.isElement(e)) return void console.warn("$api.last Function need el param, el param must be DOM Element");
            var r = e.children;
            return r[r.length - 1]
        }
        return 2 === arguments.length ? this.dom(e, n + ":last-child") : void 0
    }, t.eq = function(e, n) {
        return this.dom(e, ":nth-child(" + n + ")")
    }, t.not = function(e, n) {
        return this.domAll(e, ":not(" + n + ")")
    }, t.prev = function(e) {
        if (!t.isElement(e)) return void console.warn("$api.prev Function need el param, el param must be DOM Element");
        var n = e.previousSibling;
        return n.nodeType && 3 === n.nodeType ? n = n.previousSibling : void 0
    }, t.next = function(e) {
        if (!t.isElement(e)) return void console.warn("$api.next Function need el param, el param must be DOM Element");
        var n = e.nextSibling;
        return n.nodeType && 3 === n.nodeType ? n = n.nextSibling : void 0
    }, t.closest = function(e, n) {
        if (!t.isElement(e)) return void console.warn("$api.closest Function need el param, el param must be DOM Element");
        var r, a, i = function(e, n) {
                var t = 0,
                    r = e.length;
                for (t; r > t; t++)
                    if (e[t].isSameNode(n)) return e[t];
                return !1
            },
            o = function(e, n) {
                for (r = t.domAll(e.parentNode, n), a = i(r, e); !a;) {
                    if (e = e.parentNode, null != e && e.nodeType == e.DOCUMENT_NODE) return !1;
                    o(e, n)
                }
                return a
            };
        return o(e, n)
    }, t.contains = function(e, n) {
        var t = !1;
        if (n === e) return t = !0;
        do
            if (n = n.parentNode, n === e) return t = !0;
        while (n === document.body || n === document.documentElement);
        return t
    }, t.remove = function(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }, t.attr = function(e, n, r) {
        return t.isElement(e) ? 2 == arguments.length ? e.getAttribute(n) : 3 == arguments.length ? (e.setAttribute(n, r), e) : void 0 : void console.warn("$api.attr Function need el param, el param must be DOM Element")
    }, t.removeAttr = function(e, n) {
        return t.isElement(e) ? void(2 === arguments.length && e.removeAttribute(n)) : void console.warn("$api.removeAttr Function need el param, el param must be DOM Element")
    }, t.hasCls = function(e, n) {
        return t.isElement(e) ? e.className.indexOf(n) > -1 ? !0 : !1 : void console.warn("$api.hasCls Function need el param, el param must be DOM Element")
    }, t.addCls = function(e, n) {
        if (!t.isElement(e)) return void console.warn("$api.addCls Function need el param, el param must be DOM Element");
        if ("classList" in e) e.classList.add(n);
        else {
            var r = e.className,
                a = r + " " + n;
            e.className = a
        }
        return e
    }, t.removeCls = function(e, n) {
        if (!t.isElement(e)) return void console.warn("$api.removeCls Function need el param, el param must be DOM Element");
        if ("classList" in e) e.classList.remove(n);
        else {
            var r = e.className,
                a = r.replace(n, "");
            e.className = a
        }
        return e
    }, t.toggleCls = function(e, n) {
        return t.isElement(e) ? ("classList" in e ? e.classList.toggle(n) : t.hasCls(e, n) ? t.removeCls(e, n) : t.addCls(e, n), e) : void console.warn("$api.toggleCls Function need el param, el param must be DOM Element")
    }, t.val = function(e, n) {
        if (!t.isElement(e)) return void console.warn("$api.val Function need el param, el param must be DOM Element");
        if (1 === arguments.length) switch (e.tagName) {
            case "SELECT":
                var r = e.options[e.selectedIndex].value;
                return r;
            case "INPUT":
                return e.value;
            case "TEXTAREA":
                return e.value
        }
        if (2 === arguments.length) switch (e.tagName) {
            case "SELECT":
                return e.options[e.selectedIndex].value = n, e;
            case "INPUT":
                return e.value = n, e;
            case "TEXTAREA":
                return e.value = n, e
        }
    }, t.prepend = function(e, n) {
        return t.isElement(e) ? (e.insertAdjacentHTML("afterbegin", n), e) : void console.warn("$api.prepend Function need el param, el param must be DOM Element")
    }, t.append = function(e, n) {
        return t.isElement(e) ? (e.insertAdjacentHTML("beforeend", n), e) : void console.warn("$api.append Function need el param, el param must be DOM Element")
    }, t.before = function(e, n) {
        return t.isElement(e) ? (e.insertAdjacentHTML("beforebegin", n), e) : void console.warn("$api.before Function need el param, el param must be DOM Element")
    }, t.after = function(e, n) {
        return t.isElement(e) ? (e.insertAdjacentHTML("afterend", n), e) : void console.warn("$api.after Function need el param, el param must be DOM Element")
    }, t.html = function(e, n) {
        return t.isElement(e) ? 1 === arguments.length ? e.innerHTML : 2 === arguments.length ? (e.innerHTML = n, e) : void 0 : void console.warn("$api.html Function need el param, el param must be DOM Element")
    }, t.text = function(e, n) {
        return t.isElement(e) ? 1 === arguments.length ? e.textContent : 2 === arguments.length ? (e.textContent = n, e) : void 0 : void console.warn("$api.text Function need el param, el param must be DOM Element")
    }, t.offset = function(e) {
        if (!t.isElement(e)) return void console.warn("$api.offset Function need el param, el param must be DOM Element");
        var n = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
            r = Math.max(document.documentElement.scrollTop, document.body.scrollTop),
            a = e.getBoundingClientRect();
        return {
            l: a.left + n,
            t: a.top + r,
            w: e.offsetWidth,
            h: e.offsetHeight
        }
    }, t.css = function(e, n) {
        return t.isElement(e) ? void("string" == typeof n && n.indexOf(":") > 0 && e.style && (e.style.cssText += ";" + n)) : void console.warn("$api.css Function need el param, el param must be DOM Element")
    }, t.cssVal = function(n, r) {
        if (!t.isElement(n)) return void console.warn("$api.cssVal Function need el param, el param must be DOM Element");
        if (2 === arguments.length) {
            var a = e.getComputedStyle(n, null);
            return a.getPropertyValue(r)
        }
    }, t.jsonToStr = function(e) {
        return "object" == typeof e ? JSON && JSON.stringify(e) : void 0
    }, t.strToJson = function(e) {
        return "string" == typeof e ? JSON && JSON.parse(e) : void 0
    }, t.setStorage = function(e, n) {
        if (2 === arguments.length) {
            var t = n;
            "object" == typeof t ? (t = JSON.stringify(t), t = "obj-" + t) : t = "str-" + t;
            var r = a();
            r && r.setItem(e, t)
        }
    }, t.getStorage = function(e) {
        var n = a();
        if (n) {
            var t = n.getItem(e);
            if (!t) return;
            if (0 === t.indexOf("obj-")) return t = t.slice(4), JSON.parse(t);
            if (0 === t.indexOf("str-")) return t.slice(4)
        }
    }, t.rmStorage = function(e) {
        var n = a();
        n && e && n.removeItem(e)
    }, t.clearStorage = function() {
        var e = a();
        e && e.clear()
    }, t.fixIos7Bar = function(e) {
        if (!t.isElement(e)) return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");
        var n = api.systemType;
        if ("ios" == n) {
            var r = api.systemVersion,
                a = parseInt(r, 10),
                i = api.fullScreen,
                o = api.iOS7StatusBarAppearance;
            a >= 7 && !i && o && (e.style.paddingTop = "20px")
        }
    }, t.fixStatusBar = function(e) {
        if (!t.isElement(e)) return void console.warn("$api.fixStatusBar Function need el param, el param must be DOM Element");
        var n = api.systemType;
        if ("ios" == n) t.fixIos7Bar(e);
        else if ("android" == n) {
            var r = api.systemVersion;
            r = parseFloat(r), r >= 4.4 && (e.style.paddingTop = "25px")
        }
    }, t.toast = function(e, n, t) {
        var r = {},
            a = function(e, n) {
                api.showProgress(e), setTimeout(function() {
                    api.hideProgress()
                }, n)
            };
        if (1 === arguments.length) {
            var t = t || 500;
            "number" == typeof e ? t = e : r.title = e + "", a(r, t)
        } else if (2 === arguments.length) {
            var t = t || 500,
                n = n;
            if ("number" == typeof n) {
                var i = n;
                t = i, n = null
            }
            e && (r.title = e), n && (r.text = n), a(r, t)
        }
        e && (r.title = e), n && (r.text = n), t = t || 500, a(r, t)
    }, t.ajax = function(t, m, r, p) {
        t.headers = {
            token: this.getStorage('token')
        },t.certificate = {
            path: 'widget://charge/image/client.p12',
            password: 'dXF5r6fkwIwojeV3'
        }, t.url && (t.url = app_url + t.url), t.data && (t.data = {
            values: t.data
        });
        t.method = m, api.ajax(t, function(e, n) {
            e ? (e.code === 0 ? r && r(e.data) : p && p(e)) : (console.log(JSON.stringify(t) + JSON.stringify(e) + JSON.stringify(n)));
        })
    }, t.get = function() {
        var e = n.apply(null, arguments);
        t.ajax({
            url: e.url
        }, 'get', e.fnSuc, e.fnErr)
    }, t.post = function() {
        var e = n.apply(null, arguments);
        t.ajax({
            url: e.url,
            data: e.data
        }, 'post', e.fnSuc, e.fnErr)
    }, t.put = function() {
        var e = n.apply(null, arguments);
        t.ajax({
            url: e.url,
            data: e.data
        }, 'put', e.fnSuc, e.fnErr)
    }, t.del = function() {
        var e = n.apply(null, arguments);
        t.ajax({
            url: e.url,
            data: e.data
        }, 'delete', e.fnSuc, e.fnErr)
    }, e.$api = t
}(window);
