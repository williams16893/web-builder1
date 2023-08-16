(window.webpackJsonp = window.webpackJsonp || []).push([
    [8, 122, 140], {
        1105: function(t, e, o) {
            var content = o(1118);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(13).default)("d59bdef8", content, !0, {
                sourceMap: !1
            })
        },
        1108: function(t, e, o) {
            "use strict";
            o.r(e);
            var c = o(1),
                n = o(7),
                r = o(0);

            function l(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, o)
                }
                return e
            }
            const d = ["light", "ghost-white", "primary", "transparent"];
            var h = n.a.extend({
                    name: "HSectionTwoColumns",
                    props: {
                        backgroundColor: {
                            type: String,
                            default: "light",
                            validator: Object(r.y)(d)
                        },
                        reverse: Boolean,
                        tabletScaling: {
                            type: String,
                            default: "horizontal",
                            validator: Object(r.y)(["horizontal", "vertical"])
                        }
                    },
                    computed: {
                        classes() {
                            return function(t) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source = null != arguments[i] ? arguments[i] : {};
                                    i % 2 ? l(Object(source), !0).forEach((function(e) {
                                        Object(c.a)(t, e, source[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                                    }))
                                }
                                return t
                            }({}, Object(r.f)("h-section-two-cols--bg", this.backgroundColor, d))
                        },
                        wrapperClasses() {
                            return [`h-section-two-cols__wrapper--${this.tabletScaling}`, {
                                "h-section-two-cols__wrapper--reverse": this.reverse
                            }]
                        }
                    }
                }),
                m = h,
                f = (o(1117), o(5)),
                component = Object(f.a)(m, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "h-section-two-cols",
                        class: t.classes,
                        attrs: {
                            dir: t.direction
                        }
                    }, [e("div", {
                        staticClass: "h-grid h-grid--cols-m-1 h-grid--cols-t-1"
                    }, [t.$slots.header ? e("div", {
                        staticClass: "h-section-two-cols__header"
                    }, [t._t("header")], 2) : t._e(), t._v(" "), e("div", {
                        staticClass: "h-section-two-cols__wrapper h-grid-item",
                        class: t.wrapperClasses
                    }, [e("div", {
                        staticClass: "h-section-two-cols__left-col"
                    }, [t._t("left-column")], 2), t._v(" "), e("div", {
                        staticClass: "h-section-two-cols__right-col"
                    }, [t._t("right-column")], 2)]), t._v(" "), t.$slots["bottom-row"] ? e("div", {
                        staticClass: "h-section-two-cols__bottom-row"
                    }, [t._t("bottom-row")], 2) : t._e()])])
                }), [], !1, null, "677323dc", null);
            e.default = component.exports
        },
        1117: function(t, e, o) {
            "use strict";
            o(1105)
        },
        1118: function(t, e, o) {
            var c = o(12)((function(i) {
                return i[1]
            }));
            c.push([t.i, ".desktop-only[data-v-677323dc]{display:none}@media(min-width:768px){.desktop-only[data-v-677323dc]{display:block}.mobile-only[data-v-677323dc]{display:none}}.h-section-two-cols[data-v-677323dc]{width:100%}.h-section-two-cols__header[data-v-677323dc]{margin-bottom:32px}@media(min-width:768px){.h-section-two-cols__header[data-v-677323dc]{margin-bottom:40px}}@media(min-width:1025px){.h-section-two-cols__header[data-v-677323dc]{margin-bottom:48px}}.h-section-two-cols__wrapper[data-v-677323dc]{display:flex;flex-direction:column}@media(min-width:768px){.h-section-two-cols__wrapper--horizontal[data-v-677323dc]{align-items:center;flex-direction:row;justify-content:space-between}}@media(min-width:768px)and (max-width:1024px){.h-section-two-cols__wrapper--vertical .h-section-two-cols__left-col[data-v-677323dc],.h-section-two-cols__wrapper--vertical .h-section-two-cols__right-col[data-v-677323dc]{max-width:100%;width:100%}.h-section-two-cols__wrapper--vertical .h-section-two-cols__left-col[data-v-677323dc]{margin-bottom:32px}}@media(min-width:768px){.h-section-two-cols__wrapper--reverse[data-v-677323dc]:not(.h-section-two-cols__wrapper--vertical){flex-direction:row-reverse}}@media(min-width:1025px){.h-section-two-cols__wrapper[data-v-677323dc]{align-items:center;flex-direction:row;justify-content:space-between}.h-section-two-cols__wrapper--reverse[data-v-677323dc]{flex-direction:row-reverse}}.h-section-two-cols__left-col[data-v-677323dc]{margin-bottom:24px;width:100%}@media(min-width:768px){.h-section-two-cols__left-col[data-v-677323dc]{margin-bottom:0;max-width:456px;width:48.8373%}}@media(min-width:1025px){.h-section-two-cols__left-col[data-v-677323dc]{width:40.43%}}.h-section-two-cols__right-col[data-v-677323dc]{width:100%}@media(min-width:768px){.h-section-two-cols__right-col[data-v-677323dc]{max-width:552px;width:48.8373%}}@media(min-width:1025px){.h-section-two-cols__right-col[data-v-677323dc]{width:48.94%}}.h-section-two-cols__bottom-row[data-v-677323dc]{margin-top:24px}@media(min-width:768px){.h-section-two-cols__bottom-row[data-v-677323dc]{margin-top:32px}}@media(min-width:1025px){.h-section-two-cols__bottom-row[data-v-677323dc]{margin-top:40px}}.h-section-two-cols--bg-gray-light[data-v-677323dc]{background-color:#f2f3f6}.h-section-two-cols--bg-primary-light[data-v-677323dc]{background-color:#ebe4ff}.h-section-two-cols--bg-meteorite-light[data-v-677323dc]{background-color:#d5dfff}.h-section-two-cols--bg-danger-light[data-v-677323dc]{background-color:#ffe8ef}.h-section-two-cols--bg-success-light[data-v-677323dc]{background-color:#def4f0}.h-section-two-cols--bg-warning-light[data-v-677323dc]{background-color:#fff8e2}.h-section-two-cols--bg-manatee[data-v-677323dc]{background-color:#8c93a9}.h-section-two-cols--bg-spindle[data-v-677323dc]{background-color:#b6bdd3}.h-section-two-cols--bg-periwinkle[data-v-677323dc]{background-color:#c5cde9}.h-section-two-cols--bg-ghost-white[data-v-677323dc]{background-color:#fafbff}.h-section-two-cols--bg-webhost-primary[data-v-677323dc]{background-color:#ff5c62}.h-section-two-cols--bg-gray-border[data-v-677323dc]{background-color:#dadce0}.h-section-two-cols--bg-white-blue[data-v-677323dc]{background-color:#f4f5ff}.h-section-two-cols--bg-dark[data-v-677323dc]{background-color:#1d1e20}.h-section-two-cols--bg-light[data-v-677323dc]{background-color:#fff}.h-section-two-cols--bg-gray[data-v-677323dc]{background-color:#727586}.h-section-two-cols--bg-primary[data-v-677323dc]{background-color:#673de6}.h-section-two-cols--bg-primary-hoster-blue[data-v-677323dc]{background-color:#007aff}.h-section-two-cols--bg-meteorite[data-v-677323dc]{background-color:#8c85ff}.h-section-two-cols--bg-danger[data-v-677323dc]{background-color:#fc5185}.h-section-two-cols--bg-success[data-v-677323dc]{background-color:#00b090}.h-section-two-cols--bg-warning[data-v-677323dc]{background-color:#ffcd35}", ""]), c.locals = {}, t.exports = c
        },
        1121: function(t, e, o) {
            var content = o(1160);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(13).default)("4af8ee06", content, !0, {
                sourceMap: !1
            })
        },
        1145: function(t, e, o) {
            "use strict";
            o.r(e);
            o(127);
            var c = o(1),
                n = o(7),
                r = o(0);

            function l(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, o)
                }
                return e
            }

            function d(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? l(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            const h = ["light", "black", "primary", "white-blue", "ghost-white", "meteorite-dark"];
            var m = n.a.extend({
                    name: "HMultiTextsSection",
                    props: {
                        data: {
                            type: Array,
                            required: !0
                        },
                        backgroundColor: {
                            type: String,
                            default: "primary",
                            validator: Object(r.y)(h)
                        }
                    },
                    computed: {
                        classes() {
                            return d(d({}, Object(r.f)("h-multi-texts-section--bg", this.backgroundColor, h)), {}, {
                                "h-multi-texts-section--with-gap": this.data.length > 1,
                                "u-generic-color-section": "light" !== this.backgroundColor
                            })
                        }
                    },
                    methods: {
                        getReverseItem(t) {
                            const e = this.data[t];
                            return e.reverse || !!(t % 2 && void 0 === e.reverse)
                        }
                    }
                }),
                f = (o(1159), o(5)),
                component = Object(f.a)(m, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("section", {
                        staticClass: "u-section-spaces"
                    }, [e("div", {
                        staticClass: "h-multi-texts-section",
                        class: t.classes,
                        attrs: {
                            dir: t.direction
                        }
                    }, t._l(t.data, (function(o, c) {
                        return e("HSectionTwoColumns", {
                            key: `section-${c}`,
                            attrs: {
                                "background-color": "transparent",
                                "tablet-scaling": "vertical",
                                reverse: t.getReverseItem(c)
                            },
                            scopedSlots: t._u([o.title ? {
                                key: "header",
                                fn: function() {
                                    return [o.overline ? e("div", {
                                        staticClass: "h-multi-texts-section__overline t-body-uppercase"
                                    }, [t._v("\n          " + t._s(t.$t(o.overline)) + "\n        ")]) : t._e(), t._v(" "), o.title ? e("h2", {
                                        staticClass: "h-multi-texts-section__title"
                                    }, [t._v("\n          " + t._s(t.$t(o.title)) + "\n        ")]) : t._e(), t._v(" "), o.description ? e("p", {
                                        staticClass: "h-multi-texts-section__description"
                                    }, [t._v("\n          " + t._s(t.$t(o.description)) + "\n        ")]) : t._e()]
                                },
                                proxy: !0
                            } : null, {
                                key: "left-column",
                                fn: function() {
                                    return [t._t("left-column", (function() {
                                        return t._l(o.textBlocks, (function(o, c) {
                                            return e("div", {
                                                key: `block-${c}`,
                                                staticClass: "h-multi-texts-section__text-block"
                                            }, [o.title ? e("h2", {
                                                staticClass: "h-multi-texts-section__block-title"
                                            }, [t._v("\n              " + t._s(t.$t(o.title)) + "\n            ")]) : t._e(), t._v(" "), o.heading ? e("h3", [t._v("\n              " + t._s(t.$t(o.heading)) + "\n            ")]) : t._e(), t._v(" "), o.paragraph ? e("p", {
                                                domProps: {
                                                    innerHTML: t._s(t.$t(o.paragraph, o.paragraphParams))
                                                }
                                            }) : t._e(), t._v(" "), o.linkText && (o.link || o.nuxtLink) ? e(o.nuxtLink ? "NuxtLink" : "a", {
                                                tag: "Component",
                                                attrs: {
                                                    href: o.link,
                                                    to: t.nuxtTo(o.nuxtLink),
                                                    "data-click-id": o.linkDataClickId,
                                                    target: "_blank"
                                                }
                                            }, [t._v("\n              " + t._s(t.$t(o.linkText)) + "\n            ")]) : t._e(), t._v(" "), t._t(`additional-content-${c}`)], 2)
                                        }))
                                    }))]
                                },
                                proxy: !0
                            }, {
                                key: "right-column",
                                fn: function() {
                                    return [e("HImage", {
                                        attrs: {
                                            image: o.imageData
                                        }
                                    })]
                                },
                                proxy: !0
                            }, {
                                key: "bottom-row",
                                fn: function() {
                                    return [t._t("bottom-row")]
                                },
                                proxy: !0
                            }], null, !0)
                        })
                    })), 1)])
                }), [], !1, null, "6be4864f", null);
            e.default = component.exports;
            installComponents(component, {
                HImage: o(165).default,
                HSectionTwoColumns: o(1108).default
            })
        },
        1159: function(t, e, o) {
            "use strict";
            o(1121)
        },
        1160: function(t, e, o) {
            var c = o(12)((function(i) {
                return i[1]
            }));
            c.push([t.i, ".desktop-only[data-v-6be4864f]{display:none}@media(min-width:768px){.desktop-only[data-v-6be4864f]{display:block}.mobile-only[data-v-6be4864f]{display:none}}.h-multi-texts-section[data-v-6be4864f]{display:grid}.h-multi-texts-section__overline[data-v-6be4864f]{color:#727586;margin-bottom:24px;text-align:center}.h-multi-texts-section__title[data-v-6be4864f]{text-align:center}.h-multi-texts-section__block-title[data-v-6be4864f]{margin-bottom:24px}.h-multi-texts-section__description[data-v-6be4864f]{margin-top:16px;text-align:center}@media(min-width:768px){.h-multi-texts-section__description[data-v-6be4864f]{margin-top:24px}}@media(min-width:1025px){.h-multi-texts-section__description[data-v-6be4864f]{margin-top:32px}}.h-multi-texts-section__text-block[data-v-6be4864f]{margin-bottom:24px;text-align:center}@media(min-width:768px){.h-multi-texts-section__text-block[data-v-6be4864f]{margin-bottom:32px}}@media(min-width:1025px){.h-multi-texts-section__text-block[data-v-6be4864f]{margin-bottom:40px;text-align:left;text-align:initial}}.h-multi-texts-section__text-block[data-v-6be4864f]:last-child{margin-bottom:0}.h-multi-texts-section__text-block h2[data-v-6be4864f]{margin-bottom:16px}@media(min-width:768px){.h-multi-texts-section__text-block h2[data-v-6be4864f]{margin-bottom:24px}}@media(min-width:1025px){.h-multi-texts-section__text-block h2[data-v-6be4864f]{margin-bottom:32px}}.h-multi-texts-section__text-block h3[data-v-6be4864f]{margin-bottom:16px}@media(min-width:768px){.h-multi-texts-section__text-block h3[data-v-6be4864f]{margin-bottom:24px}}.h-multi-texts-section__text-block a[data-v-6be4864f]{margin-top:24px;text-decoration-line:underline}.h-multi-texts-section--with-gap[data-v-6be4864f]{row-gap:64px}@media(min-width:768px){.h-multi-texts-section--with-gap[data-v-6be4864f]{row-gap:80px}}@media(min-width:1025px){.h-multi-texts-section--with-gap[data-v-6be4864f]{row-gap:96px}}.h-multi-texts-section--bg-primary[data-v-6be4864f]{background-color:#673de6}.h-multi-texts-section--bg-meteorite-dark[data-v-6be4864f]{background-color:#2f1c6a}.h-multi-texts-section--bg-meteorite-dark .h-multi-texts-section__description[data-v-6be4864f],.h-multi-texts-section--bg-meteorite-dark .h-multi-texts-section__text-block[data-v-6be4864f],.h-multi-texts-section--bg-meteorite-dark .h-multi-texts-section__title[data-v-6be4864f],.h-multi-texts-section--bg-primary .h-multi-texts-section__description[data-v-6be4864f],.h-multi-texts-section--bg-primary .h-multi-texts-section__text-block[data-v-6be4864f],.h-multi-texts-section--bg-primary .h-multi-texts-section__title[data-v-6be4864f]{color:#fff}.h-multi-texts-section--bg-meteorite-dark[data-v-6be4864f] a,.h-multi-texts-section--bg-primary[data-v-6be4864f] a{color:#fff;-webkit-text-decoration:underline;text-decoration:underline}.h-multi-texts-section--bg-white-blue[data-v-6be4864f]{background-color:#f4f5ff}.h-multi-texts-section--bg-ghost-white[data-v-6be4864f]{background-color:#fafbff}.h-multi-texts-section--bg-light[data-v-6be4864f]{background-color:#fff}.h-multi-texts-section--bg-light .h-multi-texts-section__text-block p[data-v-6be4864f],.h-multi-texts-section--bg-white-blue .h-multi-texts-section__text-block p[data-v-6be4864f]{color:#727586}", ""]), c.locals = {}, t.exports = c
        }
    }
]);