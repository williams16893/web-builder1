(window.webpackJsonp = window.webpackJsonp || []).push([
    [4, 99, 107], {
        1136: function(e, t, r) {
            var content = r(1177);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("08ee27ee", content, !0, {
                sourceMap: !1
            })
        },
        1140: function(e, t, r) {
            var content = r(1185);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("fb007f2a", content, !0, {
                sourceMap: !1
            })
        },
        1155: function(e, t, r) {
            "use strict";
            r.r(t);
            r(127);
            var o = r(1),
                d = r(7),
                n = r(0);

            function l(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            const c = ["ghost-white", "white-blue", "primary"];
            var h = d.a.extend({
                    name: "HFeaturesHeader",
                    props: {
                        data: {
                            type: Object
                        },
                        saleCampaign: Boolean
                    },
                    data() {
                        var e, t, r;
                        return {
                            buttonColor: (null === (e = this.data.buttonData) || void 0 === e ? void 0 : e.color) || "primary",
                            buttonDataClickId: (null === (t = this.data.buttonData) || void 0 === t ? void 0 : t.dataClickId) || "hgr-header-cta-get_started",
                            buttonText: this.$t((null === (r = this.data.buttonData) || void 0 === r ? void 0 : r.textSlug) || "components.featuresHeader.buttonText")
                        }
                    },
                    computed: {
                        classes() {
                            return function(e) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source = null != arguments[i] ? arguments[i] : {};
                                    i % 2 ? l(Object(source), !0).forEach((function(t) {
                                        Object(o.a)(e, t, source[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                                    }))
                                }
                                return e
                            }({}, Object(n.f)("h-features-header--bg", this.data.backgroundColor, c))
                        }
                    },
                    methods: {
                        scrollTo() {
                            this.data.buttonData.scrollId && Object(n.z)(this.data.buttonData.scrollId)
                        }
                    }
                }),
                f = h,
                m = (r(1184), r(5)),
                component = Object(m.a)(f, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("header", {
                        staticClass: "h-features-header",
                        class: e.classes,
                        attrs: {
                            dir: e.direction
                        }
                    }, [t("HHeaderTwoColumns", {
                        attrs: {
                            "background-color": e.data.backgroundColor,
                            "sale-campaign": e.saleCampaign
                        },
                        scopedSlots: e._u([{
                            key: "left-column",
                            fn: function() {
                                return [t("div", {
                                    staticClass: "h-features-header__info-wrapper"
                                }, [t("div", {
                                    staticClass: "h-features-header__heading-wrapper"
                                }, [e._t("heading", (function() {
                                    return [t("h1", {
                                        staticClass: "h-features-header__heading"
                                    }, [e._v("\n              " + e._s(e.data.heading) + "\n            ")])]
                                }))], 2), e._v(" "), e.data.description ? t("p", {
                                    staticClass: "h-features-header__description",
                                    domProps: {
                                        innerHTML: e._s(e.data.description)
                                    }
                                }) : e._e(), e._v(" "), e._t("additional-content"), e._v(" "), e.data.buttonData && Object.keys(e.data.buttonData).length ? t("div", {
                                    staticClass: "h-features-header__button-wrapper"
                                }, [t("HButton", {
                                    staticClass: "h-features-header__button",
                                    attrs: {
                                        "data-click-id": e.buttonDataClickId,
                                        color: e.buttonColor,
                                        "router-component": e.data.buttonData.nuxtLink && "NuxtLink",
                                        to: e.data.buttonData.nuxtLink || e.data.buttonData.link
                                    },
                                    on: {
                                        onClick: e.scrollTo
                                    }
                                }, [e._v(e._s(e.buttonText))])], 1) : e._e(), e._v(" "), e._t("features", (function() {
                                    return [e.data.features ? t("div", {
                                        staticClass: "h-features-header__features-list"
                                    }, e._l(e.data.features, (function(r, o) {
                                        return t("span", {
                                            key: `${r}-${o}`,
                                            staticClass: "h-features-header__list-item t-body-3"
                                        }, [t("HIcon", {
                                            staticClass: "h-features-header__list-item-icon",
                                            attrs: {
                                                color: "success",
                                                icon: "ui-icons/ic-check",
                                                size: {
                                                    height: 24,
                                                    width: 12
                                                }
                                            }
                                        }), e._v("\n              " + e._s(r) + "\n            ")], 1)
                                    })), 0) : e._e()]
                                }))], 2)]
                            },
                            proxy: !0
                        }, {
                            key: "right-column",
                            fn: function() {
                                return [t("div", {
                                    staticClass: "h-features-header__image-wrapper"
                                }, [e._t("image-additional-content"), e._v(" "), e._t("image", (function() {
                                    return [t("HImage", {
                                        attrs: {
                                            image: {
                                                src: e.data.imageSrc,
                                                alt: e.$t(e.data.imageAlt)
                                            },
                                            "no-lazy-load": ""
                                        }
                                    })]
                                }))], 2)]
                            },
                            proxy: !0
                        }], null, !0)
                    })], 1)
                }), [], !1, null, "1b25331e", null);
            t.default = component.exports;
            installComponents(component, {
                HButton: r(236).default,
                HIcon: r(80).default,
                HImage: r(165).default,
                HHeaderTwoColumns: r(1183).default
            })
        },
        1176: function(e, t, r) {
            "use strict";
            r(1136)
        },
        1177: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-ed0e3b0e]{display:none}@media(min-width:768px){.desktop-only[data-v-ed0e3b0e]{display:block}.mobile-only[data-v-ed0e3b0e]{display:none}}.h-header-two-cols[data-v-ed0e3b0e]{padding:76px 0 36px;width:100%}@media(min-width:768px){.h-header-two-cols[data-v-ed0e3b0e]{padding:126px 0 80px}}@media(min-width:1025px){.h-header-two-cols[data-v-ed0e3b0e]{padding:164px 0 96px}}.h-header-two-cols__wrapper[data-v-ed0e3b0e]{display:flex;flex-direction:column}@media(min-width:1025px){.h-header-two-cols__wrapper[data-v-ed0e3b0e]{align-items:center;flex-direction:row;justify-content:space-between}}.h-header-two-cols__left-col[data-v-ed0e3b0e]{margin-bottom:32px;width:100%}@media(min-width:768px){.h-header-two-cols__left-col[data-v-ed0e3b0e]{margin-bottom:40px}}@media(min-width:1025px){.h-header-two-cols__left-col[data-v-ed0e3b0e]{margin-bottom:0;max-width:456px;width:40.43%}}.h-header-two-cols__right-col[data-v-ed0e3b0e]{width:100%}@media(min-width:1025px){.h-header-two-cols__right-col[data-v-ed0e3b0e]{max-width:648px;width:57.45%}.h-header-two-cols--sales .h-header-two-cols__left-col[data-v-ed0e3b0e]{max-width:456px;width:40.43%}}@media(min-width:1367px){.h-header-two-cols--sales .h-header-two-cols__left-col[data-v-ed0e3b0e]{width:32.76%}}@media(min-width:1025px){.h-header-two-cols--sales .h-header-two-cols__right-col[data-v-ed0e3b0e]{max-width:616px;width:54.61%}}@media(min-width:1367px){.h-header-two-cols--sales .h-header-two-cols__right-col[data-v-ed0e3b0e]{max-width:762px;width:54.75%}}.h-header-two-cols--bg-ghost-white[data-v-ed0e3b0e]{background-color:#fafbff}.h-header-two-cols--bg-white-blue[data-v-ed0e3b0e]{background-color:#f4f5ff}.h-header-two-cols--bg-primary[data-v-ed0e3b0e]{background-color:#673de6}", ""]), o.locals = {}, e.exports = o
        },
        1183: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1),
                d = r(7),
                n = r(0);

            function l(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function c(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? l(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            const h = ["ghost-white", "white-blue", "primary", "transparent"];
            var f = d.a.extend({
                    name: "HHeaderTwoColumns",
                    props: {
                        backgroundColor: {
                            type: String,
                            default: "ghost-white",
                            validator: Object(n.y)(h)
                        },
                        saleCampaign: Boolean
                    },
                    computed: {
                        classes() {
                            return c(c({}, Object(n.f)("h-header-two-cols--bg", this.backgroundColor, h)), {}, {
                                "h-header-two-cols--sales": this.saleCampaign
                            })
                        }
                    }
                }),
                m = (r(1176), r(5)),
                component = Object(m.a)(f, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-header-two-cols",
                        class: e.classes,
                        attrs: {
                            dir: e.direction
                        }
                    }, [t("div", {
                        staticClass: "h-grid h-grid--cols-m-1 h-grid--cols-t-1",
                        class: {
                            "h-grid--sales": e.saleCampaign
                        }
                    }, [t("div", {
                        staticClass: "h-header-two-cols__wrapper h-grid-item"
                    }, [t("div", {
                        staticClass: "h-header-two-cols__left-col"
                    }, [e._t("left-column")], 2), e._v(" "), t("div", {
                        staticClass: "h-header-two-cols__right-col"
                    }, [e._t("right-column")], 2)])])])
                }), [], !1, null, "ed0e3b0e", null);
            t.default = component.exports
        },
        1184: function(e, t, r) {
            "use strict";
            r(1140)
        },
        1185: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-1b25331e]{display:none}@media(min-width:768px){.desktop-only[data-v-1b25331e]{display:block}.mobile-only[data-v-1b25331e]{display:none}}.h-features-header__info-wrapper[data-v-1b25331e]{text-align:center}@media(min-width:1025px){.h-features-header__info-wrapper[data-v-1b25331e]{text-align:left}}.h-features-header--bg-primary[data-v-1b25331e]{color:#fff}.h-features-header__heading-wrapper[data-v-1b25331e]{margin-bottom:16px}@media(min-width:768px){.h-features-header__heading-wrapper[data-v-1b25331e]{margin-bottom:24px}}@media(min-width:1025px){.h-features-header__heading-wrapper[data-v-1b25331e]{margin-bottom:32px}}.h-features-header__description[data-v-1b25331e]{margin-bottom:32px}@media(min-width:768px){.h-features-header__description[data-v-1b25331e]{margin-bottom:40px}}@media(min-width:1025px){.h-features-header__description[data-v-1b25331e]{margin-bottom:48px}}.h-features-header__button-wrapper[data-v-1b25331e]{display:flex;justify-content:center}@media(min-width:1025px){.h-features-header__button-wrapper[data-v-1b25331e]{justify-content:flex-start}}.h-features-header__button[data-v-1b25331e]{width:100%}@media(min-width:768px){.h-features-header__button[data-v-1b25331e]{margin:0 auto;width:336px}}@media(min-width:1025px){.h-features-header__button[data-v-1b25331e]{margin:0;width:264px}}.h-features-header__features-list[data-v-1b25331e]{align-items:center;display:flex;flex-direction:column;margin-top:24px}@media(min-width:1025px){.h-features-header__features-list[data-v-1b25331e]{align-items:flex-start}}.h-features-header__list-item[data-v-1b25331e]{display:inline-flex;margin-bottom:12px}.h-features-header__list-item[data-v-1b25331e]:last-child{margin-bottom:0}.h-features-header__list-item-icon[data-v-1b25331e]{display:inline-block;margin-right:4px}.h-features-header__image-wrapper[data-v-1b25331e]{position:relative}", ""]), o.locals = {}, e.exports = o
        }
    }
]);