(window.webpackJsonp = window.webpackJsonp || []).push([
    [69], {
        1675: function(e, t, n) {
            "use strict";
            n.r(t);
            var l = n(7).a.extend({
                    name: "HButtonSimple",
                    props: {
                        disabled: Boolean
                    }
                }),
                o = n(5),
                component = Object(o.a)(l, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("button", {
                        attrs: {
                            disabled: e.disabled
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.$emit("click")
                            }
                        }
                    }, [e._t("default")], 2)
                }), [], !1, null, null, null);
            t.default = component.exports
        }
    }
]);