(window.webpackJsonp = window.webpackJsonp || []).push([
    [3, 71, 72], {
        1154: function(t, d, e) {
            "use strict";
            e.r(d);
            e(127);
            var r = e(7),
                n = e(0);
            var o = r.a.extend({
                    name: "HCardGridSection",
                    props: {
                        data: {
                            type: Object
                        },
                        numberOfCards: Number,
                        desktopColumns: {
                            type: Number,
                            default: 3
                        },
                        tabletColumns: {
                            type: Number,
                            default: 2
                        },
                        backgroundColor: {
                            type: String,
                            default: "light",
                            validator: Object(n.y)(["light", "ghost-white"])
                        }
                    },
                    computed: {
                        classes() {
                            return [`h-card-grid-section--bg-${this.backgroundColor}`, {
                                "u-generic-color-section": "light" !== this.backgroundColor
                            }]
                        }
                    }
                }),
                c = (e(1318), e(5)),
                component = Object(c.a)(o, (function() {
                    var t = this,
                        d = t._self._c;
                    t._self._setupProxy;
                    return d("section", {
                        staticClass: "h-card-grid u-section-spaces",
                        attrs: {
                            dir: t.direction
                        }
                    }, [d("HSectionOneColumn", {
                        class: t.classes,
                        attrs: {
                            "background-color": t.backgroundColor
                        }
                    }, [t.data && t.data.title ? d("div", {
                        staticClass: "h-card-grid-section__info"
                    }, [d("h2", [t._v(t._s(t.$t(t.data.title)))]), t._v(" "), t.data && t.data.description ? d("p", {
                        staticClass: "h-card-grid-section__text"
                    }, [t._v("\n        " + t._s(t.$t(t.data.description)) + "\n      ")]) : t._e()]) : t._e(), t._v(" "), d("div", {
                        class: `h-card-grid-section__container h-grid h-grid--cols-d-${t.desktopColumns} h-grid--cols-t-${t.tabletColumns} h-grid--cols-m-1`
                    }, [t.numberOfCards ? t._l(t.numberOfCards, (function(e) {
                        return d("HCardGridWrapper", {
                            key: e,
                            scopedSlots: t._u([{
                                key: "card",
                                fn: function() {
                                    return [t._t(`card_${e}`)]
                                },
                                proxy: !0
                            }], null, !0)
                        })
                    })) : t._l(t.data.cards, (function(e, r) {
                        return d("HCardGridWrapper", {
                            key: r,
                            scopedSlots: t._u([{
                                key: "card",
                                fn: function() {
                                    return [t._t("items", null, {
                                        item: e
                                    })]
                                },
                                proxy: !0
                            }], null, !0)
                        })
                    }))], 2)])], 1)
                }), [], !1, null, "01d1ab6e", null);
            d.default = component.exports;
            installComponents(component, {
                HCardGridWrapper: e(1311).default,
                HSectionOneColumn: e(526).default
            })
        },
        1234: function(t, d, e) {
            var content = e(1293);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, e(13).default)("b69b59f0", content, !0, {
                sourceMap: !1
            })
        },
        1257: function(t, d, e) {
            var content = e(1319);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, e(13).default)("d5412048", content, !0, {
                sourceMap: !1
            })
        },
        1292: function(t, d, e) {
            "use strict";
            e(1234)
        },
        1293: function(t, d, e) {
            var r = e(12)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".desktop-only[data-v-250309dc]{display:none}@media(min-width:768px){.desktop-only[data-v-250309dc]{display:block}.mobile-only[data-v-250309dc]{display:none}}.h-card-grid-wrapper[data-v-250309dc]{display:flex;height:100%;justify-content:center;width:100%}", ""]), r.locals = {}, t.exports = r
        },
        1311: function(t, d, e) {
            "use strict";
            e.r(d);
            var r = e(7).a.extend({
                    name: "HCardGridWrapper"
                }),
                n = (e(1292), e(5)),
                component = Object(n.a)(r, (function() {
                    var t = this,
                        d = t._self._c;
                    t._self._setupProxy;
                    return d("div", {
                        staticClass: "h-card-grid-wrapper"
                    }, [t._t("card")], 2)
                }), [], !1, null, "250309dc", null);
            d.default = component.exports
        },
        1318: function(t, d, e) {
            "use strict";
            e(1257)
        },
        1319: function(t, d, e) {
            var r = e(12)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".desktop-only[data-v-01d1ab6e]{display:none}@media(min-width:768px){.desktop-only[data-v-01d1ab6e]{display:block}.mobile-only[data-v-01d1ab6e]{display:none}}.h-card-grid-section__info[data-v-01d1ab6e]{margin-bottom:32px;text-align:center}@media(min-width:768px){.h-card-grid-section__info[data-v-01d1ab6e]{margin-bottom:40px}}@media(min-width:1025px){.h-card-grid-section__info[data-v-01d1ab6e]{margin-bottom:48px}}.h-card-grid-section__text[data-v-01d1ab6e]{margin-top:16px}@media(min-width:768px){.h-card-grid-section__text[data-v-01d1ab6e]{margin-top:24px}}@media(min-width:1025px){.h-card-grid-section__text[data-v-01d1ab6e]{margin-top:32px}}.h-card-grid-section__container[data-v-01d1ab6e]{align-items:center;padding-left:0!important;padding-right:0!important;padding-top:0;row-gap:16px}@media(max-width:767px){.h-card-grid-section__container[data-v-01d1ab6e]{display:flex;flex-direction:column}}@media(min-width:768px){.h-card-grid-section__container[data-v-01d1ab6e]{row-gap:24px}}@media(min-width:1025px){.h-card-grid-section__container[data-v-01d1ab6e]{row-gap:32px}}.h-card-grid-section--bg-ghost-white[data-v-01d1ab6e]{background-color:#fafbff}.h-card-grid-section--bg-light[data-v-01d1ab6e]{background-color:#fff}", ""]), r.locals = {}, t.exports = r
        }
    }
]);