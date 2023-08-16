(window.webpackJsonp = window.webpackJsonp || []).push([
    [68], {
        1674: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(1);

            function o(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function c(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? o(Object(source), !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : o(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var f = r(7).a.extend({
                    name: "HButtonLink",
                    props: {
                        to: {
                            type: [String, Object],
                            default: ""
                        },
                        target: {
                            type: [String, Boolean],
                            default: ""
                        },
                        routerComponent: {
                            type: String,
                            default: "a"
                        }
                    },
                    computed: {
                        componentAttributes() {
                            return c(c({}, "NuxtLink" === this.routerComponent ? {
                                to: this.nuxtTo(this.to)
                            } : {
                                href: this.to
                            }), {}, {
                                target: this.target
                            })
                        }
                    }
                }),
                l = r(5),
                component = Object(l.a)(f, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e(t.routerComponent, t._b({
                        tag: "Component"
                    }, "Component", t.componentAttributes, !1), [t._t("default")], 2)
                }), [], !1, null, null, null);
            e.default = component.exports
        }
    }
]);