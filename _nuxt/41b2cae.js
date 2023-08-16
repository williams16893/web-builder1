(window.webpackJsonp = window.webpackJsonp || []).push([
    [198, 4, 5, 6, 8, 10, 11, 15, 16, 73, 74, 75, 77, 78, 86, 87, 95, 96, 99, 100, 101, 107, 110, 111, 112, 122, 123, 124, 126, 129, 134, 135, 137, 138, 140, 141, 144, 145, 146, 147, 152, 156, 158, 160, 161, 167, 168, 177], {
        1105: function(e, t, r) {
            var content = r(1118);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("d59bdef8", content, !0, {
                sourceMap: !1
            })
        },
        1106: function(e, t, r) {
            var content = r(1125);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("4780a4c8", content, !0, {
                sourceMap: !1
            })
        },
        1107: function(e, t, r) {
            var content = r(1130);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("5627f6a6", content, !0, {
                sourceMap: !1
            })
        },
        1108: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1),
                n = r(7),
                c = r(0);

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
            const d = ["light", "ghost-white", "primary", "transparent"];
            var h = n.a.extend({
                    name: "HSectionTwoColumns",
                    props: {
                        backgroundColor: {
                            type: String,
                            default: "light",
                            validator: Object(c.y)(d)
                        },
                        reverse: Boolean,
                        tabletScaling: {
                            type: String,
                            default: "horizontal",
                            validator: Object(c.y)(["horizontal", "vertical"])
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
                            }({}, Object(c.f)("h-section-two-cols--bg", this.backgroundColor, d))
                        },
                        wrapperClasses() {
                            return [`h-section-two-cols__wrapper--${this.tabletScaling}`, {
                                "h-section-two-cols__wrapper--reverse": this.reverse
                            }]
                        }
                    }
                }),
                m = h,
                f = (r(1117), r(5)),
                component = Object(f.a)(m, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-section-two-cols",
                        class: e.classes,
                        attrs: {
                            dir: e.direction
                        }
                    }, [t("div", {
                        staticClass: "h-grid h-grid--cols-m-1 h-grid--cols-t-1"
                    }, [e.$slots.header ? t("div", {
                        staticClass: "h-section-two-cols__header"
                    }, [e._t("header")], 2) : e._e(), e._v(" "), t("div", {
                        staticClass: "h-section-two-cols__wrapper h-grid-item",
                        class: e.wrapperClasses
                    }, [t("div", {
                        staticClass: "h-section-two-cols__left-col"
                    }, [e._t("left-column")], 2), e._v(" "), t("div", {
                        staticClass: "h-section-two-cols__right-col"
                    }, [e._t("right-column")], 2)]), e._v(" "), e.$slots["bottom-row"] ? t("div", {
                        staticClass: "h-section-two-cols__bottom-row"
                    }, [e._t("bottom-row")], 2) : e._e()])])
                }), [], !1, null, "677323dc", null);
            t.default = component.exports
        },
        1109: function(e, t, r) {
            var content = r(1132);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("06f1a84d", content, !0, {
                sourceMap: !1
            })
        },
        1110: function(e, t, r) {
            var content = r(1134);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("8b7fda2e", content, !0, {
                sourceMap: !1
            })
        },
        1111: function(e, t, r) {
            "use strict";
            var o = r(1),
                n = (r(16), r(29), r(8), r(527)),
                c = r.n(n),
                l = r(105),
                d = r(7),
                h = r(0),
                m = r(59);

            function f(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function v(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? f(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            t.a = d.a.extend({
                data: () => ({
                    buttonLoading: !1,
                    cartLinkError: !1
                }),
                computed: {
                    pageNameCapitalized() {
                        return Object(h.d)(this.pageName.replace(/-/g, " "))
                    }
                },
                methods: {
                    generateListId(e, t) {
                        return `${this.pageNameDataClickId}-${e}-${t}`
                    },
                    generateListName(e, t) {
                        return `${this.pageNameCapitalized} ${Object(h.C)(t||"")} ${e}`
                    },
                    sendAllGAData({
                        id: e,
                        name: t,
                        slug: r,
                        products: o
                    }) {
                        this.sendImpressionListGA4(e, t, r, o), this.sendImpressionItemGA4(e, t, r, o), this.sendImpressionsGAUniversal(e, r, o), this.sendDetailsGAUniversal(e, r, o)
                    },
                    sendImpressionListGA4(e, t, r, o) {
                        Object(l.event)(new l.ViewItemList(this.getImpressionDataStructure(e, t, r, o)))
                    },
                    sendImpressionItemGA4(e, t, r, o) {
                        Object(l.event)(new l.ViewItem(this.getImpressionDataStructure(e, t, r, o)))
                    },
                    sendImpressionsGAUniversal(e, t, r) {
                        const o = r.map(((r, o) => ({
                            name: r.productSlug,
                            id: r.productSlug,
                            position: o,
                            list: this.generateListId(e, t),
                            price: r.price.purchase
                        })));
                        this.$gtm.push({
                            event: "eec.impressionView",
                            ecommerce: {
                                impressions: o
                            }
                        })
                    },
                    sendDetailsGAUniversal(e, t, r) {
                        const o = r.map((e => ({
                            name: e.productSlug,
                            id: e.productSlug,
                            price: e.price.purchase
                        })));
                        this.$gtm.push({
                            event: "eec.detail",
                            ecommerce: {
                                detail: {
                                    actionField: {
                                        list: this.generateListId(e, t)
                                    },
                                    products: o
                                }
                            }
                        })
                    },
                    getImpressionDataStructure(e, t, r, o) {
                        return o.map(((o, n) => this.createHItemFromProduct(o).setList(this.generateListId(e, r), this.generateListName(t, r), n)))
                    },
                    getCookieData() {
                        const e = [];
                        return ["hasoffers_session", "irclickid", "awc", "rr_wcid", "rr_referralcode"].forEach((t => {
                            const r = this.$cookies.get(t);
                            r && e.push({
                                key: t,
                                value: r.toString()
                            })
                        })), e
                    },
                    getSelectedProductData(e, t, r, o, n) {
                        const c = o.findIndex((({
                            productSlug: e
                        }) => e === n.productSlug));
                        return {
                            selectedGA4Item: this.createHItemFromProduct(n).setList(this.generateListId(e, r), this.generateListName(t, r), c),
                            selectedGAUniversalItem: {
                                name: n.productSlug,
                                id: n.productSlug,
                                price: n.price.purchase,
                                position: c
                            }
                        }
                    },
                    selectProductGA4(e, t, r, o, n) {
                        const c = this.getSelectedProductData(e, t, r, o, n),
                            d = {
                                click: {
                                    actionField: {
                                        list: this.generateListId(e, r)
                                    },
                                    products: [null == c ? void 0 : c.selectedGAUniversalItem]
                                }
                            },
                            h = null == c ? void 0 : c.selectedGA4Item;
                        Object(l.event)(new l.SelectItem([h])), this.$gtm.push({
                            event: "eec.impressionClick",
                            ecommerce: d
                        })
                    },
                    addProductGA4(e, t, r, o, n) {
                        const c = this.getSelectedProductData(e, t, r, o, n),
                            d = {
                                add: {
                                    actionField: {
                                        list: this.generateListId(e, r)
                                    },
                                    products: [null == c ? void 0 : c.selectedGAUniversalItem]
                                }
                            },
                            h = null == c ? void 0 : c.selectedGA4Item;
                        Object(l.event)(new l.AddToCart([h])), this.$gtm.push({
                            event: "eec.add",
                            ecommerce: d
                        })
                    },
                    async addToCart({
                        id: e,
                        name: t,
                        slug: r,
                        products: o,
                        product: n,
                        metadata: c,
                        amplitudeEventName: l
                    }, d = !0) {
                        var f;
                        this.cartLinkError = !1, this.buttonLoading = !n || "number" != typeof n.index || n.index;
                        const _ = v(v({}, !!(null === (f = this.$route.query) || void 0 === f ? void 0 : f.hcart_preprod) && {
                                hcartPreprod: !0
                            }), {}, {
                                productSlug: null == n ? void 0 : n.productSlug,
                                metadata: c,
                                period: {
                                    value: null == n ? void 0 : n.price.billingPeriod.period,
                                    unit: null == n ? void 0 : n.price.billingPeriod.periodUnit
                                },
                                coupon: this.$cookies.get("coupon_cookie"),
                                affiliateData: this.getCookieData(),
                                analyticsData: [{
                                    key: "item_list_id",
                                    value: this.generateListId(e, r)
                                }, {
                                    key: "item_list_name",
                                    value: this.generateListName(t, r)
                                }]
                            }),
                            y = this.getSelectedProductData(e, t, r, o, n),
                            w = {
                                name: l || "website.new.offer_chosen",
                                properties: {
                                    productName: y.selectedGA4Item.slug,
                                    productSlug: y.selectedGA4Item.slug,
                                    productGroup: y.selectedGA4Item.category,
                                    productSubGroup: r,
                                    productPeriod: 12 * y.selectedGA4Item.period,
                                    location: y.selectedGA4Item.listId
                                }
                            },
                            x = this.$cookies.get("_ga"),
                            k = this.$cookies.get("rr_referralcode");
                        x && (_.analyticsData.push({
                            key: "_ga",
                            value: x
                        }), w.properties.userGaId = x.toString()), k && (_.rr_referralcode = k.toString()), "compare_table" === e && (_.compareTableSlug = r), ["single_pricing_table", "pricing_table"].includes(e) && (_.pricingTableSlug = r), _.pageName = Object(h.o)(this.$route.name), this.selectProductGA4(e, t, r, o, n);
                        const C = d ? [m.c.addItemToCart(_), m.a.sendAmplitudeEvent(w)] : [m.c.addItemToCart(_)],
                            [
                                [{
                                    cart: O
                                }, S]
                            ] = await Promise.all(C);
                        if (S) return this.cartLinkError = !0, void(this.buttonLoading = !1);
                        this.buttonLoading = !1, this.addProductGA4(e, t, r, o, n), window.location.assign(O.cartUrl)
                    },
                    createHItemFromProduct(e) {
                        var t, r, o;
                        const n = (null === (r = null === (t = e.price) || void 0 === t ? void 0 : t.billingPeriod) || void 0 === r ? void 0 : r.period) ? 12 * e.price.billingPeriod.period : "",
                            l = "" !== n ? "months" : null;
                        return (new c.a).setBrand((null === (o = {
                            id: 1,
                            name: "www.hostinger.com",
                            themeGroup: "hostinger",
                            currency: {
                                id: 1,
                                code: "USD",
                                symbol: "$",
                                position: "prepend",
                                decimals: 2,
                                thousandSeparator: ",",
                                decimalSeparator: "."
                            },
                            language: {
                                code: "en_US",
                                iso: "en-US",
                                name: "English (United States)",
                                native: "English",
                                rtl: !1
                            },
                            country: {
                                code: "US",
                                name: "United States",
                                native: "United States"
                            },
                            googleOptimizeConfig: {
                                googleOptimizeEnabled: !0,
                                googleOptimizeCode: "GTM-T2H8FBC"
                            },
                            settings: {
                                baseUrl: "https://www.hostinger.com/"
                            },
                            brandName: "Hostinger",
                            facebookAppId: "1767459963500120",
                            facebookLink: "https://www.facebook.com/Hostinger",
                            twitterLink: "https://twitter.com/Hostinger",
                            instagramLink: "https://www.instagram.com/hostinger_global",
                            vkLink: "https://vk.com/hostinger",
                            linkedinLink: "https://www.linkedin.com/company/hostinger-international",
                            blogLink: "https://www.hostinger.com/blog/",
                            blogLinkSupport: "https://www.hostinger.com/blog/scaling-happiness",
                            tutorialsLink: "https://www.hostinger.com/tutorials/",
                            youtubeLinks: ["https://www.youtube.com/c/Hostinger?sub_confirmation=1", "https://www.youtube.com/c/HostingerAcademy?sub_confirmation=1"],
                            twitterUsername: "hostingercom",
                            contactEmail: "support@hostinger.com",
                            streetAddress: "61 Lordou Vironos Street",
                            addressLocality: "Larnaca",
                            postalCode: "6023",
                            addressCountry: "CYP",
                            membersUrl: "https://cpanel.hostinger.com",
                            pwaData: {
                                siteName: "Go Online With Hostinger",
                                siteShortName: "Hostinger",
                                siteDescription: "Choose Hostinger and make the perfect website. From Shared Hosting and Domains to VPS and Cloud plans. We have all you need for online success."
                            }
                        }) || void 0 === o ? void 0 : o.name) || "").setProduct(e.productSlug).setCategory(e.productCategory).setSubCategory(e.productSubcategory).setPrice(e.price.purchase, null, e.price.renew, e.price.old).setDiscount(e.price.discount).setPeriod(n, l).setQuantity(1).setExtra("currency", this.themeData.currency.code)
                    }
                }
            })
        },
        1112: function(e, t, r) {
            var content = r(1138);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("794f550a", content, !0, {
                sourceMap: !1
            })
        },
        1113: function(e, t, r) {
            var content = r(1143);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("1c62b9fc", content, !0, {
                sourceMap: !1
            })
        },
        1114: function(e, t, r) {
            var content = r(1149);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("e8f08a12", content, !0, {
                sourceMap: !1
            })
        },
        1115: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1),
                n = r(7),
                c = r(0);

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
            const d = ["light", "gray", "meteorite-dark"];
            var h = n.a.extend({
                    name: "HPrice",
                    props: {
                        price: {
                            type: Number,
                            default: null
                        },
                        showAsterisk: Boolean,
                        showCurrencyCode: Boolean,
                        suffix: {
                            type: String,
                            default: ""
                        },
                        color: {
                            type: String,
                            default: "meteorite-dark",
                            validator: Object(c.y)(d)
                        },
                        typographyClasses: {
                            type: Object,
                            default: () => ({})
                        }
                    },
                    computed: {
                        currency() {
                            var e;
                            return null === (e = this.themeData) || void 0 === e ? void 0 : e.currency
                        },
                        prependCurrency() {
                            return this.currency ? ["prepend", "prepend_with_space"].includes(this.currency.position) : null
                        },
                        prependWithSpaceCurrency() {
                            return this.currency ? "prepend_with_space" === this.currency.position : null
                        },
                        appendWithSpaceCurrency() {
                            return this.currency ? "append_with_space" === this.currency.position : null
                        },
                        currencyShown() {
                            return this.currency ? this.showCurrencyCode ? this.currency.code : this.currency.symbol : ""
                        },
                        formatedPrice() {
                            return this.currency ? null === this.price ? "*.**" : Object(c.h)(this.price, this.currency.decimals, this.currency.thousandSeparator, this.currency.decimalSeparator) : ""
                        },
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
                            }({}, Object(c.f)("h-price--text", this.color, d))
                        },
                        prependCurrencyClasses() {
                            return [this.typographyClasses.currency, {
                                "h-price__currency--prepend": this.prependWithSpaceCurrency
                            }]
                        },
                        appendCurrencyClasses() {
                            return [this.typographyClasses.currency, {
                                "h-price__currency--append": this.appendWithSpaceCurrency
                            }]
                        }
                    }
                }),
                m = h,
                f = (r(1131), r(5)),
                component = Object(f.a)(m, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("span", {
                        staticClass: "h-price",
                        class: e.classes,
                        attrs: {
                            dir: e.direction
                        }
                    }, [e.showAsterisk ? t("span", {
                        staticClass: "h-price__asterisk"
                    }, [e._v("*")]) : e._e(), e._v(" "), e.prependCurrency ? t("span", {
                        staticClass: "h-price__currency",
                        class: e.prependCurrencyClasses
                    }, [e._v("\n    " + e._s(e.currencyShown) + "\n  ")]) : e._e(), e._v(" "), t("span", {
                        staticClass: "h-price__number",
                        class: e.typographyClasses.number
                    }, [e._v("\n    " + e._s(e.formatedPrice) + "\n  ")]), e._v(" "), null === e.prependCurrency || e.prependCurrency ? e._e() : t("span", {
                        staticClass: "h-price__currency",
                        class: e.appendCurrencyClasses
                    }, [e._v("\n    " + e._s(e.currencyShown) + "\n  ")]), e._v(" "), e.suffix ? t("span", {
                        staticClass: "h-price__suffix",
                        class: e.typographyClasses.suffix
                    }, [e._v("\n    /" + e._s(e.suffix) + "\n  ")]) : e._e()])
                }), [], !1, null, "e9c9949c", null);
            t.default = component.exports
        },
        1116: function(e, t, r) {
            var content = r(1153);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("170f5a2f", content, !0, {
                sourceMap: !1
            })
        },
        1117: function(e, t, r) {
            "use strict";
            r(1105)
        },
        1118: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-677323dc]{display:none}@media(min-width:768px){.desktop-only[data-v-677323dc]{display:block}.mobile-only[data-v-677323dc]{display:none}}.h-section-two-cols[data-v-677323dc]{width:100%}.h-section-two-cols__header[data-v-677323dc]{margin-bottom:32px}@media(min-width:768px){.h-section-two-cols__header[data-v-677323dc]{margin-bottom:40px}}@media(min-width:1025px){.h-section-two-cols__header[data-v-677323dc]{margin-bottom:48px}}.h-section-two-cols__wrapper[data-v-677323dc]{display:flex;flex-direction:column}@media(min-width:768px){.h-section-two-cols__wrapper--horizontal[data-v-677323dc]{align-items:center;flex-direction:row;justify-content:space-between}}@media(min-width:768px)and (max-width:1024px){.h-section-two-cols__wrapper--vertical .h-section-two-cols__left-col[data-v-677323dc],.h-section-two-cols__wrapper--vertical .h-section-two-cols__right-col[data-v-677323dc]{max-width:100%;width:100%}.h-section-two-cols__wrapper--vertical .h-section-two-cols__left-col[data-v-677323dc]{margin-bottom:32px}}@media(min-width:768px){.h-section-two-cols__wrapper--reverse[data-v-677323dc]:not(.h-section-two-cols__wrapper--vertical){flex-direction:row-reverse}}@media(min-width:1025px){.h-section-two-cols__wrapper[data-v-677323dc]{align-items:center;flex-direction:row;justify-content:space-between}.h-section-two-cols__wrapper--reverse[data-v-677323dc]{flex-direction:row-reverse}}.h-section-two-cols__left-col[data-v-677323dc]{margin-bottom:24px;width:100%}@media(min-width:768px){.h-section-two-cols__left-col[data-v-677323dc]{margin-bottom:0;max-width:456px;width:48.8373%}}@media(min-width:1025px){.h-section-two-cols__left-col[data-v-677323dc]{width:40.43%}}.h-section-two-cols__right-col[data-v-677323dc]{width:100%}@media(min-width:768px){.h-section-two-cols__right-col[data-v-677323dc]{max-width:552px;width:48.8373%}}@media(min-width:1025px){.h-section-two-cols__right-col[data-v-677323dc]{width:48.94%}}.h-section-two-cols__bottom-row[data-v-677323dc]{margin-top:24px}@media(min-width:768px){.h-section-two-cols__bottom-row[data-v-677323dc]{margin-top:32px}}@media(min-width:1025px){.h-section-two-cols__bottom-row[data-v-677323dc]{margin-top:40px}}.h-section-two-cols--bg-gray-light[data-v-677323dc]{background-color:#f2f3f6}.h-section-two-cols--bg-primary-light[data-v-677323dc]{background-color:#ebe4ff}.h-section-two-cols--bg-meteorite-light[data-v-677323dc]{background-color:#d5dfff}.h-section-two-cols--bg-danger-light[data-v-677323dc]{background-color:#ffe8ef}.h-section-two-cols--bg-success-light[data-v-677323dc]{background-color:#def4f0}.h-section-two-cols--bg-warning-light[data-v-677323dc]{background-color:#fff8e2}.h-section-two-cols--bg-manatee[data-v-677323dc]{background-color:#8c93a9}.h-section-two-cols--bg-spindle[data-v-677323dc]{background-color:#b6bdd3}.h-section-two-cols--bg-periwinkle[data-v-677323dc]{background-color:#c5cde9}.h-section-two-cols--bg-ghost-white[data-v-677323dc]{background-color:#fafbff}.h-section-two-cols--bg-webhost-primary[data-v-677323dc]{background-color:#ff5c62}.h-section-two-cols--bg-gray-border[data-v-677323dc]{background-color:#dadce0}.h-section-two-cols--bg-white-blue[data-v-677323dc]{background-color:#f4f5ff}.h-section-two-cols--bg-dark[data-v-677323dc]{background-color:#1d1e20}.h-section-two-cols--bg-light[data-v-677323dc]{background-color:#fff}.h-section-two-cols--bg-gray[data-v-677323dc]{background-color:#727586}.h-section-two-cols--bg-primary[data-v-677323dc]{background-color:#673de6}.h-section-two-cols--bg-primary-hoster-blue[data-v-677323dc]{background-color:#007aff}.h-section-two-cols--bg-meteorite[data-v-677323dc]{background-color:#8c85ff}.h-section-two-cols--bg-danger[data-v-677323dc]{background-color:#fc5185}.h-section-two-cols--bg-success[data-v-677323dc]{background-color:#00b090}.h-section-two-cols--bg-warning[data-v-677323dc]{background-color:#ffcd35}", ""]), o.locals = {}, e.exports = o
        },
        1119: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(7).a.extend({
                    name: "HPaymentTerms",
                    props: {
                        popupTitle: {
                            type: String,
                            required: !0
                        },
                        popupText: {
                            type: String,
                            required: !0
                        },
                        dataClickIdParent: {
                            type: String,
                            required: !0
                        }
                    },
                    data: () => ({
                        isPopupOpen: !1
                    }),
                    methods: {
                        openPopup() {
                            this.isPopupOpen = !this.isPopupOpen
                        }
                    }
                }),
                n = (r(1124), r(5)),
                component = Object(n.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-grid"
                    }, [t("div", {
                        staticClass: "h-payment-terms h-grid-item"
                    }, [t("span", {
                        attrs: {
                            "data-click-id": `hgr-${e.dataClickIdParent}-payment_terms`
                        },
                        on: {
                            click: e.openPopup
                        }
                    }, [e._v("\n      " + e._s(e.$t("components.pricingTable.pricingTerms")) + "\n    ")])]), e._v(" "), e.isPopupOpen ? t("HPopup", {
                        staticClass: "h-payment-terms-popup",
                        scopedSlots: e._u([{
                            key: "text",
                            fn: function() {
                                return [t("div", {
                                    staticClass: "h-payment-terms-popup__content"
                                }, [t("h3", {
                                    staticClass: "h-payment-terms-popup__title"
                                }, [e._v("\n          " + e._s(e.popupTitle) + "\n        ")]), e._v(" "), t("p", {
                                    staticClass: "h-payment-terms-popup__text"
                                }, [e._v("\n          " + e._s(e.popupText) + "\n        ")])])]
                            },
                            proxy: !0
                        }], null, !1, 1570101024),
                        model: {
                            value: e.isPopupOpen,
                            callback: function(t) {
                                e.isPopupOpen = t
                            },
                            expression: "isPopupOpen"
                        }
                    }) : e._e()], 1)
                }), [], !1, null, "f12c5978", null);
            t.default = component.exports;
            installComponents(component, {
                HPopup: r(528).default
            })
        },
        1120: function(e, t, r) {
            "use strict";
            r.r(t);
            r(529);
            var o = r(7).a.extend({
                    name: "Translate",
                    props: {
                        tag: {
                            type: String,
                            default: "span"
                        },
                        params: {
                            type: Object,
                            default: () => ({})
                        }
                    },
                    computed: {
                        translatedText() {
                            if (!this.$slots.default) return;
                            const e = this.vnodeToString(this.$slots.default).trim();
                            return this.$t(e, this.params)
                        }
                    },
                    methods: {
                        vnodeToString(e) {
                            let t = "";
                            return e && e.forEach((e => {
                                e.text && (t += e.text)
                            })), t
                        }
                    }
                }),
                n = r(5),
                component = Object(n.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t(e.tag, {
                        tag: "Component",
                        domProps: {
                            innerHTML: e._s(e.translatedText)
                        }
                    })
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        1121: function(e, t, r) {
            var content = r(1160);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("4af8ee06", content, !0, {
                sourceMap: !1
            })
        },
        1123: function(e, t, r) {
            var content = r(1164);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("65b49008", content, !0, {
                sourceMap: !1
            })
        },
        1124: function(e, t, r) {
            "use strict";
            r(1106)
        },
        1125: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-f12c5978]{display:none}@media(min-width:768px){.desktop-only[data-v-f12c5978]{display:block}.mobile-only[data-v-f12c5978]{display:none}}.h-payment-terms[data-v-f12c5978]{text-align:center}.h-payment-terms span[data-v-f12c5978]{color:#673de6;cursor:pointer;font-weight:700}.h-payment-terms span[data-v-f12c5978]:hover{color:#5025d1}.h-payment-terms-popup[data-v-f12c5978] .h-popup{width:1028px}.h-payment-terms-popup__content[data-v-f12c5978]{display:flex;flex-direction:column;padding-bottom:16px;text-align:center}@media(min-width:768px){.h-payment-terms-popup__content[data-v-f12c5978]{padding-bottom:40px}}@media(min-width:1025px){.h-payment-terms-popup__content[data-v-f12c5978]{padding-bottom:32px}}.h-payment-terms-popup__title[data-v-f12c5978]{margin-bottom:24px}", ""]), o.locals = {}, e.exports = o
        },
        1126: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(7),
                n = r(0);
            var c = o.a.extend({
                    name: "HSwitcher",
                    props: {
                        disabled: Boolean,
                        value: {
                            type: String,
                            required: !0
                        },
                        options: {
                            type: Array,
                            required: !0
                        },
                        optionsClickIds: {
                            type: Array,
                            default: () => []
                        },
                        type: {
                            type: String,
                            default: "default",
                            validator: Object(n.y)(["default", "tabsOnly"])
                        }
                    },
                    data: () => ({
                        line: {
                            width: 0,
                            left: 0
                        }
                    }),
                    computed: {
                        selected: {
                            get() {
                                return this.value
                            },
                            set(e) {
                                this.$emit("input", e)
                            }
                        }
                    },
                    mounted() {
                        window.innerWidth > 600 && setTimeout((() => {
                            this.slidingBarReset()
                        }), 100)
                    },
                    methods: {
                        getSelectedTab() {
                            const e = this.$refs["selected-tab"];
                            return null == e ? void 0 : e[0]
                        },
                        slidingBar(e) {
                            const t = e.target;
                            this.animateLine(t)
                        },
                        slidingBarReset() {
                            const e = this.getSelectedTab();
                            e && this.animateLine(e)
                        },
                        animateLine(element) {
                            const e = this.$refs.tabs;
                            if (!element || !e) return;
                            const t = element.getBoundingClientRect(),
                                r = e.getBoundingClientRect();
                            this.line.width = t.width, this.line.left = t.left - r.left
                        },
                        selectTab(option) {
                            this.disabled || (this.selected = option)
                        }
                    }
                }),
                l = (r(1133), r(5)),
                component = Object(l.a)(c, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-switcher",
                        class: e.direction
                    }, [t("HSelectField", {
                        staticClass: "h-switcher__select",
                        class: [{
                            mobile: "default" === e.type
                        }, {
                            hidden: "tabsOnly" === e.type
                        }],
                        attrs: {
                            id: "h-switcher-select",
                            options: e.options,
                            "options-click-ids": e.optionsClickIds
                        },
                        scopedSlots: e._u([e._l(e.options, (function(option, t) {
                            return {
                                key: `option-${t}`,
                                fn: function() {
                                    return [e._t(`option-${t}`, (function() {
                                        return [e._v("\n        " + e._s(option) + "\n      ")]
                                    }), {
                                        value: option
                                    })]
                                },
                                proxy: !0
                            }
                        }))], null, !0),
                        model: {
                            value: e.selected,
                            callback: function(t) {
                                e.selected = t
                            },
                            expression: "selected"
                        }
                    }), e._v(" "), t("div", {
                        ref: "tabs",
                        staticClass: "h-switcher__tabs",
                        class: {
                            desktop: "default" === e.type
                        },
                        attrs: {
                            role: "listbox",
                            "aria-label": "tabs list",
                            dir: e.direction
                        }
                    }, [e._l(e.options, (function(option, r) {
                        return t("span", {
                            key: `${option}-${r}`,
                            ref: option === e.selected && "selected-tab",
                            refInFor: !0,
                            staticClass: "t-body-2",
                            class: [{
                                selected: option === e.selected
                            }, {
                                disabled: e.disabled
                            }],
                            attrs: {
                                role: "option",
                                "data-click-id": e.optionsClickIds[r],
                                "aria-selected": option === e.selected
                            },
                            on: {
                                mouseenter: e.slidingBar,
                                mouseleave: e.slidingBarReset,
                                click: function(t) {
                                    return e.selectTab(option)
                                }
                            }
                        }, [e._t(`option-${r}`, (function() {
                            return [e._v(e._s(option))]
                        }), {
                            value: option
                        })], 2)
                    })), e._v(" "), e.disabled ? e._e() : t("div", {
                        staticClass: "h-switcher__line",
                        style: `width: ${e.line.width}px; transform: translateX(${e.line.left}px)`
                    })], 2)], 1)
                }), [], !1, null, "1db6a147", null);
            t.default = component.exports;
            installComponents(component, {
                HSelectField: r(1128).default
            })
        },
        1127: function(e, t, r) {
            var content = r(1171);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("5c0e39da", content, !0, {
                sourceMap: !1
            })
        },
        1128: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1158).a.extend({
                    name: "HSelectField",
                    props: {
                        options: {
                            type: Array,
                            default: () => []
                        },
                        optionsClickIds: {
                            type: Array,
                            default: () => []
                        },
                        disabledOptions: {
                            type: Array,
                            default: () => []
                        }
                    },
                    computed: {
                        icon() {
                            return this.focused ? "ui-icons/ic-arrow-drop-up" : "ui-icons/ic-arrow-drop-down"
                        }
                    },
                    methods: {
                        optionClasses(option) {
                            return {
                                selected: this.value === option,
                                disabled: this.disabledOptions.includes(option)
                            }
                        },
                        async changeValue(option) {
                            this.$emit("input", option), await this.$nextTick(), this.touched && this.validate()
                        },
                        onClick() {
                            this.focused = !this.focused, this.focused && this.$emit("onFocus")
                        }
                    }
                }),
                n = (r(1129), r(5)),
                component = Object(n.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-form-field h-form-field--select",
                        class: e.direction,
                        attrs: {
                            dir: e.direction
                        }
                    }, [t("div", {
                        staticClass: "h-form-field__wrapper"
                    }, [t("HLabel", {
                        attrs: {
                            id: `${e.id}-label`,
                            label: e.label,
                            "for-attr": e.id,
                            value: e.valueModel,
                            focused: e.focused,
                            disabled: e.disabled,
                            error: !!e.error
                        }
                    }), e._v(" "), t("HIcon", {
                        staticClass: "h-form-field__icon",
                        attrs: {
                            icon: e.icon,
                            color: "gray"
                        }
                    }), e._v(" "), t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.valueModel,
                            expression: "valueModel"
                        }],
                        staticClass: "h-form-field__element",
                        class: e.classes,
                        attrs: {
                            id: e.id,
                            type: "text",
                            readonly: "",
                            disabled: e.disabled,
                            "aria-label": e.label,
                            "aria-labelledby": `${e.id}-label`
                        },
                        domProps: {
                            value: e.valueModel
                        },
                        on: {
                            mouseenter: function(t) {
                                e.hovered = !0
                            },
                            mouseleave: function(t) {
                                e.hovered = !1
                            },
                            blur: e.onBlur,
                            click: e.onClick,
                            input: function(t) {
                                t.target.composing || (e.valueModel = t.target.value)
                            }
                        }
                    }), e._v(" "), t("div", {
                        staticClass: "h-form-field__box"
                    }, [t("div", {
                        staticClass: "h-form-field__options",
                        attrs: {
                            role: "listbox",
                            "aria-labelledby": `${e.id}-label`
                        }
                    }, [e._l(e.options, (function(option, r) {
                        return t("span", {
                            key: `${option}-${r}`,
                            class: e.optionClasses(option),
                            attrs: {
                                role: "option",
                                "data-click-id": e.optionsClickIds[r],
                                "aria-selected": option === e.valueModel
                            },
                            on: {
                                mousedown: function(t) {
                                    return e.changeValue(option)
                                }
                            }
                        }, [e._t(`option-${r}`, (function() {
                            return [e._v(e._s(option))]
                        }), {
                            value: option
                        })], 2)
                    })), e._v(" "), e.options.length ? e._e() : t("span", {
                        staticClass: "disabled"
                    }, [e._t("no-options", (function() {
                        return [e._v("No options")]
                    }))], 2)], 2)])], 1), e._v(" "), t("HFormMessage", {
                        attrs: {
                            message: e.errorMessage,
                            type: "error"
                        }
                    })], 1)
                }), [], !1, null, "e08a9898", null);
            t.default = component.exports;
            installComponents(component, {
                HLabel: r(1156).default,
                HIcon: r(80).default,
                HFormMessage: r(1157).default
            })
        },
        1129: function(e, t, r) {
            "use strict";
            r(1107)
        },
        1130: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-e08a9898]{display:none}@media(min-width:768px){.desktop-only[data-v-e08a9898]{display:block}.mobile-only[data-v-e08a9898]{display:none}}.h-form-field__element[data-v-e08a9898]:not(.h-form-field__element--disabled){cursor:pointer}.h-form-field__element--focused+.h-form-field__box[data-v-e08a9898]{height:auto;opacity:1}.h-form-field__box[data-v-e08a9898]{align-items:flex-start;background:#fff;border-radius:4px;box-shadow:0 0 12px rgba(29,30,32,.16);display:flex;flex-direction:column;height:0;left:0;opacity:0;overflow:hidden;position:absolute;top:100%;transition:opacity .3s ease;width:100%;z-index:3}.h-form-field__options[data-v-e08a9898]{max-height:256px;overflow:auto;padding:8px 0;width:100%}.h-form-field__options span[data-v-e08a9898]{color:#36344d;cursor:pointer;display:block;padding:12px 16px;white-space:nowrap}.h-form-field__options span[data-v-e08a9898]:hover{background:linear-gradient(0deg,hsla(220,9%,87%,.24),hsla(220,9%,87%,.24))}.h-form-field__options span.selected[data-v-e08a9898]{background:linear-gradient(0deg,rgba(103,61,230,.08),rgba(103,61,230,.08));color:#673de6}.h-form-field__options span.disabled[data-v-e08a9898]{background:transparent;color:#727586;pointer-events:none}", ""]), o.locals = {}, e.exports = o
        },
        1131: function(e, t, r) {
            "use strict";
            r(1109)
        },
        1132: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-e9c9949c]{display:none}@media(min-width:768px){.desktop-only[data-v-e9c9949c]{display:block}.mobile-only[data-v-e9c9949c]{display:none}}.h-price[data-v-e9c9949c]{display:inline-flex}.h-price__currency--prepend[data-v-e9c9949c]{margin-right:4px}.h-price__currency--append[data-v-e9c9949c]{margin-left:4px}.h-price[dir=rtl] .h-price__currency--prepend[data-v-e9c9949c]{margin-left:4px;margin-right:0}.h-price[dir=rtl] .h-price__currency--append[data-v-e9c9949c]{margin-left:0;margin-right:4px}.h-price--text-dark .h-price__currency[data-v-e9c9949c],.h-price--text-dark .h-price__number[data-v-e9c9949c],.h-price--text-dark .h-price__suffix[data-v-e9c9949c]{color:#1d1e20}.h-price--text-light .h-price__currency[data-v-e9c9949c],.h-price--text-light .h-price__number[data-v-e9c9949c],.h-price--text-light .h-price__suffix[data-v-e9c9949c]{color:#fff}.h-price--text-gray .h-price__currency[data-v-e9c9949c],.h-price--text-gray .h-price__number[data-v-e9c9949c],.h-price--text-gray .h-price__suffix[data-v-e9c9949c]{color:#727586}.h-price--text-primary .h-price__currency[data-v-e9c9949c],.h-price--text-primary .h-price__number[data-v-e9c9949c],.h-price--text-primary .h-price__suffix[data-v-e9c9949c]{color:#673de6}.h-price--text-primary-hoster-blue .h-price__currency[data-v-e9c9949c],.h-price--text-primary-hoster-blue .h-price__number[data-v-e9c9949c],.h-price--text-primary-hoster-blue .h-price__suffix[data-v-e9c9949c]{color:#007aff}.h-price--text-meteorite .h-price__currency[data-v-e9c9949c],.h-price--text-meteorite .h-price__number[data-v-e9c9949c],.h-price--text-meteorite .h-price__suffix[data-v-e9c9949c]{color:#8c85ff}.h-price--text-danger .h-price__currency[data-v-e9c9949c],.h-price--text-danger .h-price__number[data-v-e9c9949c],.h-price--text-danger .h-price__suffix[data-v-e9c9949c]{color:#fc5185}.h-price--text-success .h-price__currency[data-v-e9c9949c],.h-price--text-success .h-price__number[data-v-e9c9949c],.h-price--text-success .h-price__suffix[data-v-e9c9949c]{color:#00b090}.h-price--text-warning .h-price__currency[data-v-e9c9949c],.h-price--text-warning .h-price__number[data-v-e9c9949c],.h-price--text-warning .h-price__suffix[data-v-e9c9949c]{color:#ffcd35}.h-price--text-meteorite-dark .h-price__currency[data-v-e9c9949c],.h-price--text-meteorite-dark .h-price__number[data-v-e9c9949c],.h-price--text-meteorite-dark .h-price__suffix[data-v-e9c9949c]{color:#2f1c6a}", ""]), o.locals = {}, e.exports = o
        },
        1133: function(e, t, r) {
            "use strict";
            r(1110)
        },
        1134: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-1db6a147]{display:none}@media(min-width:768px){.desktop-only[data-v-1db6a147]{display:block}.mobile-only[data-v-1db6a147]{display:none}}.h-switcher[data-v-1db6a147]{display:flex;justify-content:center}.h-switcher__tabs[data-v-1db6a147]{align-items:center;display:inline-flex;position:relative}.h-switcher__tabs span[data-v-1db6a147]{border-bottom:1px solid #dadce0;color:#727586;display:flex;padding:16px 24px 15px}.h-switcher__tabs span[data-v-1db6a147]:hover:not(.disabled){color:#673de6;cursor:pointer}.h-switcher__tabs span.selected[data-v-1db6a147]:not(.disabled){border-bottom:2px solid #673de6;color:#673de6;padding-bottom:14px}.h-switcher__line[data-v-1db6a147]{background:#673de6;bottom:0;height:1px;left:0;position:absolute;transition:transform .3s,width .3s ease-in-out}.desktop[data-v-1db6a147]{display:none}@media(min-width:1025px){.desktop[data-v-1db6a147]{display:inline-flex}}.mobile[data-v-1db6a147]{display:inline-flex}@media(min-width:1025px){.mobile[data-v-1db6a147]{display:none}}.disabled[data-v-1db6a147]{cursor:not-allowed}.hidden[data-v-1db6a147]{display:none}", ""]), o.locals = {}, e.exports = o
        },
        1135: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return o
            })), r.d(t, "e", (function() {
                return n
            })), r.d(t, "d", (function() {
                return c
            })), r.d(t, "c", (function() {
                return l
            })), r.d(t, "a", (function() {
                return d
            }));
            r(8);
            const o = e => ({
                    "@type": "Organization",
                    name: "Hostinger",
                    legalName: "Hosting Hostinger",
                    foundingDate: "2004",
                    logo: `${e.siteUrl}/logo-400x400.png`,
                    image: `${e.siteUrl}/logo-400x400.png`,
                    url: e.siteUrl,
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: e.streetAddress,
                        addressLocality: e.addressLocality,
                        postalCode: e.postalCode,
                        addressCountry: e.addressCountry
                    },
                    contactPoint: {
                        "@type": "ContactPoint",
                        contactType: "Sales",
                        email: e.email,
                        url: e.contactPage
                    },
                    sameAs: [e.facebook, e.twitter, ...e.youtubeLinks]
                }),
                n = e => ({
                    "@type": "WebSite",
                    name: "Hostinger",
                    url: e.siteUrl,
                    "@id": `${e.siteUrl}#website`,
                    image: {
                        "@type": "ImageObject",
                        url: `${e.siteUrl}/logo-400x400.png`,
                        height: "400",
                        width: "400"
                    },
                    sameAs: [e.facebook, e.twitter, ...e.youtubeLinks]
                }),
                c = e => ({
                    "@type": "WebPage",
                    "@id": `${e.pageUrl}#webpage`,
                    url: e.pageUrl,
                    inLanguage: e.lang,
                    name: e.pageTitle,
                    description: e.pageDescription,
                    isPartOf: {
                        "@id": `${e.siteUrl}#website`
                    },
                    about: {
                        "@id": `${e.siteUrl}#organization`
                    }
                }),
                l = (e, t) => ({
                    "@type": "Service",
                    name: e.productType,
                    description: e.pageDescription,
                    brand: {
                        "@type": "Brand",
                        name: "Hostinger"
                    },
                    offers: t
                }),
                d = e => ({
                    "@type": "FAQPage",
                    mainEntity: e
                })
        },
        1136: function(e, t, r) {
            var content = r(1177);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("08ee27ee", content, !0, {
                sourceMap: !1
            })
        },
        1137: function(e, t, r) {
            "use strict";
            r(1112)
        },
        1138: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-60e2379b]{display:none}@media(min-width:768px){.desktop-only[data-v-60e2379b]{display:block}.mobile-only[data-v-60e2379b]{display:none}}.h-carousel-card-wrapper[data-v-60e2379b]{position:relative;transition:all 1.5s ease}.h-carousel-card-wrapper__gradient[data-v-60e2379b]{border-radius:4px;height:100%;opacity:0;position:absolute;transition:1.5s ease-in-out;width:100%;z-index:2}.h-carousel-card-wrapper__gradient--left[data-v-60e2379b]{background:linear-gradient(270deg,hsla(0,0%,100%,.3),#fff);left:0;opacity:1}.h-carousel-card-wrapper__gradient--right[data-v-60e2379b]{background:linear-gradient(90deg,hsla(0,0%,100%,.3),#fff);opacity:1;right:0}.h-carousel-card-wrapper[data-v-60e2379b]:first-child{margin-left:0}.h-carousel-card-wrapper[data-v-60e2379b]:last-child{margin-right:0}", ""]), o.locals = {}, e.exports = o
        },
        1139: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(7).a.extend({
                    name: "HCarouselCardWrapper",
                    props: {
                        type: {
                            type: String,
                            default: "default"
                        },
                        screenMode: {
                            type: String,
                            default: ""
                        },
                        index: {
                            type: Number,
                            default: 0
                        },
                        currentCardIndex: {
                            type: Number,
                            default: 0
                        },
                        paginationFactor: {
                            type: Number,
                            default: 0
                        },
                        cardsGap: {
                            type: Number,
                            default: 0
                        },
                        isCarouselVisible: Boolean,
                        desktopView: Boolean,
                        cardsData: {
                            type: Array,
                            default: () => []
                        }
                    },
                    computed: {
                        displayGradient() {
                            return this.isCarouselVisible && this.currentCardIndex !== this.index && "singleCard" !== this.type
                        },
                        gradientClass() {
                            return [{
                                "h-carousel-card-wrapper__gradient--left": this.index <= this.currentCardIndex - 1
                            }, {
                                "h-carousel-card-wrapper__gradient--right": this.index >= this.currentCardIndex + 1
                            }]
                        }
                    },
                    methods: {
                        getCardWrapperMargin(e) {
                            return "multiLine" !== this.type || this.desktopView ? e === this.cardsData.length - 1 || "multiLine" === this.type ? "margin:0" : `margin-inline-end: ${this.cardsGap}px` : `margin: ${this.cardsGap/2}px`
                        }
                    }
                }),
                n = (r(1137), r(5)),
                component = Object(n.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-carousel-card-wrapper",
                        style: e.getCardWrapperMargin(e.index)
                    }, [t("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.displayGradient,
                            expression: "displayGradient"
                        }],
                        staticClass: "h-carousel-card-wrapper__gradient",
                        class: e.gradientClass
                    }), e._v(" "), t("div", {
                        staticClass: "h-carousel-card-wrapper__card"
                    }, [e._t("card")], 2)])
                }), [], !1, null, "60e2379b", null);
            t.default = component.exports
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
        1141: function(e, t, r) {
            var content = r(1187);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("15292015", content, !0, {
                sourceMap: !1
            })
        },
        1142: function(e, t, r) {
            "use strict";
            r(1113)
        },
        1143: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-d6cd1e16]{display:none}@media(min-width:768px){.desktop-only[data-v-d6cd1e16]{display:block}.mobile-only[data-v-d6cd1e16]{display:none}}.h-carousel-track[data-v-d6cd1e16]{display:flex;flex-direction:column}.h-carousel-track--reverse[data-v-d6cd1e16]{flex-direction:column-reverse}.h-carousel-track__container[data-v-d6cd1e16]{align-items:center;display:flex;justify-content:center;position:relative}.h-carousel-track__single-card-container[data-v-d6cd1e16]{display:flex;justify-content:center;position:relative;width:100%}.h-carousel-track__cards-container[data-v-d6cd1e16]{display:flex;transition:all 1.5s ease}.h-carousel-track__cards-container--grid[data-v-d6cd1e16]{display:grid}.h-carousel-track__cards-container--wider-grid[data-v-d6cd1e16]{display:grid;max-width:1512px!important;padding-left:0;padding-right:0}.h-carousel-track__nav-container--top[data-v-d6cd1e16]{top:180px;transform:scale(2)}@media(min-width:768px){.h-carousel-track__nav-container--top[data-v-d6cd1e16]{top:230px}}@media(min-width:1025px){.h-carousel-track__nav-container--top[data-v-d6cd1e16]{top:250px}}.h-carousel-track__nav-container--middle[data-v-d6cd1e16]{top:48%}.h-carousel-track__nav-container--left[data-v-d6cd1e16],.h-carousel-track__nav-container--right[data-v-d6cd1e16]{align-items:center;cursor:pointer;display:flex;height:20px;justify-content:center;position:absolute;transform:scale(3);width:20px;z-index:2}@media(max-width:500px){.h-carousel-track__nav-container--left[data-v-d6cd1e16],.h-carousel-track__nav-container--right[data-v-d6cd1e16]{height:16px;width:16px}}.h-carousel-track__nav-container--left[data-v-d6cd1e16]{left:10%}@media(min-width:700px){.h-carousel-track__nav-container--left[data-v-d6cd1e16]{left:12%}}.h-carousel-track__nav-container--right[data-v-d6cd1e16]{right:10%}@media(min-width:700px){.h-carousel-track__nav-container--right[data-v-d6cd1e16]{right:12%}}.h-carousel-track__nav-container--left-outside[data-v-d6cd1e16]{left:0}.h-carousel-track__nav-container--right-outside[data-v-d6cd1e16]{right:0}.h-carousel-track__overflow-container[data-v-d6cd1e16]{overflow:hidden}.h-carousel-track__overflow-container--single[data-v-d6cd1e16]{display:flex;justify-content:center}.h-carousel-track__indicator-container[data-v-d6cd1e16]{display:flex;justify-content:center;margin-bottom:24px}@media(min-width:768px){.h-carousel-track__indicator-container[data-v-d6cd1e16]{margin-bottom:30px}}.h-carousel-track__indicator-container--bottom[data-v-d6cd1e16]{margin-bottom:0;margin-top:24px}@media(min-width:768px){.h-carousel-track__indicator-container--bottom[data-v-d6cd1e16]{margin-top:32px}}.h-carousel-track__indicator-item[data-v-d6cd1e16]{background-color:#fff;border:1px solid #8c85ff;border-radius:50%;cursor:pointer;display:inline-block;height:12px;margin:0 8px;transition:.3s ease-in-out;width:12px}.h-carousel-track__indicator-item--active[data-v-d6cd1e16]{background-color:#8c85ff}", ""]), o.locals = {}, e.exports = o
        },
        1144: function(e, t, r) {
            var content = r(1189);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("cb604d96", content, !0, {
                sourceMap: !1
            })
        },
        1145: function(e, t, r) {
            "use strict";
            r.r(t);
            r(127);
            var o = r(1),
                n = r(7),
                c = r(0);

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

            function d(e) {
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
                            validator: Object(c.y)(h)
                        }
                    },
                    computed: {
                        classes() {
                            return d(d({}, Object(c.f)("h-multi-texts-section--bg", this.backgroundColor, h)), {}, {
                                "h-multi-texts-section--with-gap": this.data.length > 1,
                                "u-generic-color-section": "light" !== this.backgroundColor
                            })
                        }
                    },
                    methods: {
                        getReverseItem(e) {
                            const t = this.data[e];
                            return t.reverse || !!(e % 2 && void 0 === t.reverse)
                        }
                    }
                }),
                f = (r(1159), r(5)),
                component = Object(f.a)(m, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        staticClass: "u-section-spaces"
                    }, [t("div", {
                        staticClass: "h-multi-texts-section",
                        class: e.classes,
                        attrs: {
                            dir: e.direction
                        }
                    }, e._l(e.data, (function(r, o) {
                        return t("HSectionTwoColumns", {
                            key: `section-${o}`,
                            attrs: {
                                "background-color": "transparent",
                                "tablet-scaling": "vertical",
                                reverse: e.getReverseItem(o)
                            },
                            scopedSlots: e._u([r.title ? {
                                key: "header",
                                fn: function() {
                                    return [r.overline ? t("div", {
                                        staticClass: "h-multi-texts-section__overline t-body-uppercase"
                                    }, [e._v("\n          " + e._s(e.$t(r.overline)) + "\n        ")]) : e._e(), e._v(" "), r.title ? t("h2", {
                                        staticClass: "h-multi-texts-section__title"
                                    }, [e._v("\n          " + e._s(e.$t(r.title)) + "\n        ")]) : e._e(), e._v(" "), r.description ? t("p", {
                                        staticClass: "h-multi-texts-section__description"
                                    }, [e._v("\n          " + e._s(e.$t(r.description)) + "\n        ")]) : e._e()]
                                },
                                proxy: !0
                            } : null, {
                                key: "left-column",
                                fn: function() {
                                    return [e._t("left-column", (function() {
                                        return e._l(r.textBlocks, (function(r, o) {
                                            return t("div", {
                                                key: `block-${o}`,
                                                staticClass: "h-multi-texts-section__text-block"
                                            }, [r.title ? t("h2", {
                                                staticClass: "h-multi-texts-section__block-title"
                                            }, [e._v("\n              " + e._s(e.$t(r.title)) + "\n            ")]) : e._e(), e._v(" "), r.heading ? t("h3", [e._v("\n              " + e._s(e.$t(r.heading)) + "\n            ")]) : e._e(), e._v(" "), r.paragraph ? t("p", {
                                                domProps: {
                                                    innerHTML: e._s(e.$t(r.paragraph, r.paragraphParams))
                                                }
                                            }) : e._e(), e._v(" "), r.linkText && (r.link || r.nuxtLink) ? t(r.nuxtLink ? "NuxtLink" : "a", {
                                                tag: "Component",
                                                attrs: {
                                                    href: r.link,
                                                    to: e.nuxtTo(r.nuxtLink),
                                                    "data-click-id": r.linkDataClickId,
                                                    target: "_blank"
                                                }
                                            }, [e._v("\n              " + e._s(e.$t(r.linkText)) + "\n            ")]) : e._e(), e._v(" "), e._t(`additional-content-${o}`)], 2)
                                        }))
                                    }))]
                                },
                                proxy: !0
                            }, {
                                key: "right-column",
                                fn: function() {
                                    return [t("HImage", {
                                        attrs: {
                                            image: r.imageData
                                        }
                                    })]
                                },
                                proxy: !0
                            }, {
                                key: "bottom-row",
                                fn: function() {
                                    return [e._t("bottom-row")]
                                },
                                proxy: !0
                            }], null, !0)
                        })
                    })), 1)])
                }), [], !1, null, "6be4864f", null);
            t.default = component.exports;
            installComponents(component, {
                HImage: r(165).default,
                HSectionTwoColumns: r(1108).default
            })
        },
        1146: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1),
                n = (r(127), r(8), r(1111)),
                c = r(0);

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

            function d(e) {
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
            var h = n.a.extend({
                    name: "HPricingTable",
                    props: {
                        type: {
                            type: String,
                            default: "default",
                            validator: Object(c.y)(["singleCard", "multiLine", "default"])
                        },
                        planCard: {
                            type: String,
                            default: "HPricingCard",
                            validator: Object(c.y)(["HPricingCard", "HVpsPricingCard", "HDomainCard"])
                        },
                        plans: {
                            type: Object,
                            required: !0
                        },
                        title: {
                            type: String,
                            default: ""
                        },
                        description: {
                            type: String,
                            default: ""
                        },
                        showPaymentTerms: {
                            type: Boolean,
                            default: !0
                        },
                        paymentTermsTranslations: {
                            type: Object,
                            default: () => ({
                                popupTitle: "components.pricingTable.termsPopupTitle",
                                popupText: "components.pricingTable.termsPopupText"
                            })
                        },
                        defaultDescription: Boolean,
                        showSaleOffer: Boolean
                    },
                    data: () => ({
                        isMobileView: !1,
                        seeAllFeatures: !1,
                        cardWidth: 328,
                        switcherValue: "",
                        pricingCardFontSizes: {},
                        selectedCard: {},
                        visitedTables: []
                    }),
                    provide() {
                        return {
                            getDesktopColumnCount: () => this.desktopColumnCount
                        }
                    },
                    computed: {
                        desktopColumnCount() {
                            return this.products.length % 3 == 1 || this.products.length % 4 == 0 ? 4 : 2 === this.products.length ? 2 : 3
                        },
                        pricingTableDescription() {
                            return this.defaultDescription ? this.defaultTableDescription : this.description
                        },
                        startingIndex() {
                            const e = this.products.findIndex((e => e.product.isPopular));
                            return e > 0 ? e : this.isMobileView ? 0 : 1
                        },
                        isEmailTable() {
                            const e = Object.keys(this.plans);
                            return e.includes("emailHosting") || e.includes("emailHostingOtherLocales")
                        },
                        multiplePlans() {
                            return Object.keys(this.plans).length > 1
                        },
                        switcherOptions() {
                            var e;
                            return null === (e = Object.keys(this.plans)) || void 0 === e ? void 0 : e.map((e => this.$t(`components.pricingTable.${e}`)))
                        },
                        tableTitle() {
                            const e = Object.keys(this.plans).find((e => this.$t(`components.pricingTable.${e}`) === this.switcherValue));
                            return this.$t("components.pricingTable." + (e + "Title"))
                        },
                        defaultTableDescription() {
                            const e = Object.keys(this.plans).find((e => this.$t(`components.pricingTable.${e}`) === this.switcherValue));
                            return this.$t("components.pricingTable." + (e + "Description"))
                        },
                        switcherOptionsClickIds() {
                            var e;
                            return null === (e = Object.values(this.plans)) || void 0 === e ? void 0 : e.map((({
                                slug: e
                            }) => `hgr-${this.pageNameDataClickId}-pricing_table-toggle-${e}`))
                        },
                        selectedPlan() {
                            return this.multiplePlans && this.switcherValue === this.switcherOptions[1] ? this.plans[Object.keys(this.plans)[1]] : this.plans[Object.keys(this.plans)[0]]
                        },
                        selectedCardIndex() {
                            return this.selectedPlan ? this.selectedPlan.products.findIndex((e => e.productSlug === this.selectedCard.productSlug && e.price.billingPeriod.period === this.selectedCard.price.billingPeriod.period && e.price.purchase === this.selectedCard.price.purchase)) : 0
                        },
                        products() {
                            var e, t;
                            return null === (t = null === (e = this.selectedPlan) || void 0 === e ? void 0 : e.products) || void 0 === t ? void 0 : t.map(((e, t) => {
                                var r;
                                return {
                                    product: d(d({}, e), {}, {
                                        index: t,
                                        tableSlug: null === (r = this.selectedPlan) || void 0 === r ? void 0 : r.slug
                                    }),
                                    fontSize: this.syncedPriceFontSize
                                }
                            }))
                        },
                        syncedPriceFontSize() {
                            const e = Object.values(this.pricingCardFontSizes);
                            return e.length ? Math.min(...e) : 0
                        },
                        gtmOptions() {
                            var e, t, r;
                            return {
                                id: "pricing_table",
                                name: "Pricing Table",
                                slug: null === (e = this.selectedPlan) || void 0 === e ? void 0 : e.slug,
                                products: null === (r = null === (t = this.selectedPlan) || void 0 === t ? void 0 : t.products) || void 0 === r ? void 0 : r.map((e => e))
                            }
                        }
                    },
                    created() {
                        this.switcherValue = this.switcherOptions[0]
                    },
                    mounted() {
                        let e;
                        const t = () => {
                            const t = document.querySelector(".h-pricing-table");
                            t && (e = new IntersectionObserver((e => {
                                e[0].intersectionRatio > 0 && !this.visitedTables.includes(this.switcherOptions[0]) && (this.visitedTables.push(this.switcherOptions[0]), this.sendAllGAData(this.gtmOptions))
                            }), {
                                threshold: .3
                            }), e.observe(t))
                        };
                        setTimeout((() => t()), 2e3), this.initializeCardWidth(), window.addEventListener("resize", this.initializeCardWidth), this.$once("hook:beforeDestroy", (() => {
                            (null == e ? void 0 : e.disconnect) && e.disconnect(), window.removeEventListener("resize", this.initializeCardWidth)
                        }))
                    },
                    methods: {
                        initializeCardWidth() {
                            const e = 4 === this.desktopColumnCount && window.innerWidth > 1024 && window.innerWidth < 1525;
                            this.isMobileView = window.innerWidth < 768, this.cardWidth = window.innerWidth > 768 ? e ? 260 : 360 : 328
                        },
                        onAddToCart(data) {
                            this.selectedCard = data.product, this.addToCart(d(d({}, this.gtmOptions), {}, {
                                product: data.product
                            })).finally(data.callback)
                        },
                        onTabSwitch(e) {
                            this.initializeCardWidth(), this.visitedTables.includes(e) || (this.visitedTables.push(e), this.sendAllGAData(this.gtmOptions))
                        },
                        updatePriceFontSize(data, e) {
                            this.$set(this.pricingCardFontSizes, e, data)
                        }
                    }
                }),
                m = (r(1152), r(5)),
                component = Object(m.a)(h, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        staticClass: "h-pricing-table u-section-spaces"
                    }, [e.multiplePlans ? t("div", {
                        staticClass: "h-pricing-table__switcher h-grid"
                    }, [t("HSwitcher", {
                        key: `${e.switcherValue}-switcher`,
                        attrs: {
                            options: e.switcherOptions,
                            "options-click-ids": e.switcherOptionsClickIds
                        },
                        on: {
                            input: e.onTabSwitch
                        },
                        model: {
                            value: e.switcherValue,
                            callback: function(t) {
                                e.switcherValue = t
                            },
                            expression: "switcherValue"
                        }
                    })], 1) : e._e(), e._v(" "), e.switcherValue ? [t("div", {
                        staticClass: "h-pricing-table__info h-grid"
                    }, [t("h2", [e._v(e._s(e.$t(e.title) || e.tableTitle))]), e._v(" "), e.pricingTableDescription ? t("p", {
                        staticClass: "h-pricing-table__description",
                        domProps: {
                            innerHTML: e._s(e.pricingTableDescription)
                        }
                    }) : e._e()]), e._v(" "), t("HCarousel", {
                        key: `${e.switcherValue}-carousel`,
                        staticClass: "h-pricing-table__carousel",
                        attrs: {
                            id: "h-pricing-table-carousel",
                            type: e.type,
                            "cards-data": e.products,
                            "card-width": e.cardWidth,
                            "starting-index": e.startingIndex,
                            "originate-from": "pricing_table"
                        },
                        scopedSlots: e._u([{
                            key: "items",
                            fn: function({
                                item: r
                            }) {
                                return [t(e.planCard, {
                                    key: `${e.switcherValue}-pricingCard`,
                                    tag: "Component",
                                    attrs: {
                                        narrow: e.cardWidth < 328,
                                        "product-info": r.product,
                                        index: e.selectedCardIndex,
                                        type: e.isEmailTable ? "email" : "default",
                                        "is-features-open": e.seeAllFeatures,
                                        "switcher-value": e.switcherValue,
                                        "synced-price-font-size": r.fontSize,
                                        "button-loading": e.buttonLoading === r.product.index,
                                        "cart-link-error": e.cartLinkError,
                                        "show-sale-offer": e.showSaleOffer
                                    },
                                    on: {
                                        selectCard: t => e.$emit("selectCard", t),
                                        updateFontSize: data => e.updatePriceFontSize(data, r.product.planName),
                                        addToCart: e.onAddToCart,
                                        toggleFeaturesList: function(t) {
                                            e.seeAllFeatures = !e.seeAllFeatures
                                        }
                                    }
                                })]
                            }
                        }], null, !1, 3468977596)
                    })] : e._e(), e._v(" "), e.showPaymentTerms ? t("HPaymentTerms", {
                        staticClass: "h-pricing-table__payment-terms",
                        attrs: {
                            "popup-title": e.$t(e.paymentTermsTranslations.popupTitle),
                            "popup-text": e.$t(e.paymentTermsTranslations.popupText),
                            "data-click-id-parent": "pricing_table"
                        }
                    }) : e._e()], 2)
                }), [], !1, null, "178b13f2", null);
            t.default = component.exports;
            installComponents(component, {
                HSwitcher: r(1126).default,
                HCarousel: r(1151).default,
                HPaymentTerms: r(1119).default
            })
        },
        1147: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(7).a.extend({
                    name: "HCarouselTrack",
                    inject: {
                        getDesktopColumnCount: {
                            default: 3
                        }
                    },
                    props: {
                        type: {
                            type: String,
                            default: "default"
                        },
                        indicator: {
                            type: String,
                            default: "top"
                        },
                        startingIndex: {
                            type: Number,
                            default: 0
                        },
                        navButtonPosition: {
                            type: String,
                            default: "middle"
                        },
                        screenMode: {
                            type: String,
                            default: ""
                        },
                        cardsGap: {
                            type: Number,
                            default: 0
                        },
                        paginationFactor: {
                            type: Number,
                            default: 0
                        },
                        cardsData: {
                            type: Array,
                            default: () => []
                        },
                        originateFrom: {
                            type: String,
                            default: ""
                        }
                    },
                    data: () => ({
                        currentOffset: 0,
                        currentCardIndex: 0
                    }),
                    computed: {
                        columnCount() {
                            return this.getDesktopColumnCount()
                        },
                        isSingleCardType() {
                            return "singleCard" === this.type
                        },
                        carouselTrackClass() {
                            return "top" === this.indicator ? "h-carousel-track" : "h-carousel-track h-carousel-track--reverse"
                        },
                        indicatorClass() {
                            return "top" === this.indicator ? "h-carousel-track__indicator-container" : "h-carousel-track__indicator-container h-carousel-track__indicator-container--bottom"
                        },
                        containerClass() {
                            return this.isSingleCardType ? "h-carousel-track__single-card-container" : "h-carousel-track__container"
                        },
                        isCarouselVisible() {
                            return "tablet" === this.screenMode || "mobile" === this.screenMode
                        },
                        isDesktopView() {
                            return "desktop" === this.screenMode
                        },
                        showNavigateRight() {
                            return this.isSingleCardType ? this.getSingleCardTypeNav(this.atEndOfList) : !this.atEndOfList && Boolean(this.paginationFactor) && "tablet" === this.screenMode
                        },
                        showNavigateLeft() {
                            return this.isSingleCardType ? this.getSingleCardTypeNav(this.atHeadOfList) : !this.atHeadOfList && Boolean(this.paginationFactor) && "tablet" === this.screenMode
                        },
                        iconSize: () => ({
                            height: 12,
                            width: 12
                        }),
                        initialCardMargin() {
                            return this.cardsData.length > 1 && this.isCarouselVisible ? Math.round(1.5 * this.paginationFactor) : 0
                        },
                        carouselContainerClass() {
                            return [{
                                "h-carousel-track__overflow-container--single": 1 === this.cardsData.length
                            }, {
                                "h-carousel-track__overflow-container": this.isCarouselVisible || this.isSingleCardType
                            }]
                        },
                        translateStyle() {
                            return "desktop" !== this.screenMode || this.isSingleCardType ? {
                                transform: "translateX(" + this.currentOffset + "px)"
                            } : null
                        },
                        marginRightStyle() {
                            return this.isSingleCardType ? "" : `margin-right: ${this.initialCardMargin}px`
                        },
                        carouselWidthStyle() {
                            return this.paginationFactor ? this.isSingleCardType ? `width: ${2*this.paginationFactor}px` : "desktop" === this.screenMode ? "" : `width: ${5*this.paginationFactor}px` : "width: 100%"
                        },
                        stepSize() {
                            const e = (null === window || void 0 === window ? void 0 : window.outerWidth) > 768 && window.outerWidth < 1025 ? 1.8 : 2;
                            return this.isSingleCardType ? 2 * this.paginationFactor : e * (this.paginationFactor + this.cardsGap / e)
                        },
                        atEndOfList() {
                            return "rtl" === this.direction ? 0 === this.currentCardIndex : this.currentCardIndex === this.cardsData.length - 1
                        },
                        atHeadOfList() {
                            return "ltr" === this.direction ? 0 === this.currentCardIndex : this.currentCardIndex === this.cardsData.length - 1
                        }
                    },
                    watch: {
                        startingIndex(e) {
                            this.selectCard(e)
                        },
                        paginationFactor: {
                            handler() {
                                this.startingIndex && this.selectCard(this.startingIndex), this.currentOffset && this.stepSize && (this.currentOffset = Math.sign(this.currentOffset) * this.stepSize * this.currentCardIndex)
                            },
                            immediate: !0
                        }
                    },
                    methods: {
                        getCardContainerClass() {
                            return [{
                                "h-grid h-grid--cols-m-1 h-grid--cols-t-2": "multiLine" === this.type
                            }, {
                                "h-carousel-track__cards-container--grid h-grid--cols-d-3": this.isDesktopView && 3 === this.columnCount
                            }, {
                                "h-carousel-track__cards-container--wider-grid h-grid--cols-d-4": this.isDesktopView && 4 === this.columnCount
                            }, {
                                "h-carousel-track__cards-container": !0
                            }]
                        },
                        getSingleCardTypeNav(e) {
                            return this.isSingleCardType && "desktop" === this.screenMode && !e
                        },
                        checkIsSwipeEvent(e) {
                            return 1 !== e.changedTouches.length || !["tablet", "mobile"].includes(this.screenMode)
                        },
                        checkIsHorizontalSwipe: (e, t, r, o) => Math.abs(o - r) > Math.abs(70) || Math.abs(t - e) < Math.abs(35),
                        touchStart(e) {
                            if (this.checkIsSwipeEvent(e)) return;
                            const t = e.changedTouches[0].clientX,
                                r = e.changedTouches[0].clientY;
                            addEventListener("touchend", (e => this.touchEnd(e, t, r)), {
                                once: !0
                            })
                        },
                        touchEnd(e, t, r) {
                            if (this.checkIsSwipeEvent(e)) return;
                            const o = e.changedTouches[0].clientX,
                                n = e.changedTouches[0].clientY;
                            this.checkIsHorizontalSwipe(t, o, r, n) || (t < o && !this.atHeadOfList ? this.moveCarousel(-1) : t > o && !this.atEndOfList && this.moveCarousel(1))
                        },
                        getNavModifierClass(e) {
                            return ["middle" === this.navButtonPosition ? "h-carousel-track__nav-container--middle" : "h-carousel-track__nav-container--top", {
                                [`h-carousel-track__nav-container--${e}-outside`]: this.isSingleCardType
                            }]
                        },
                        selectCard(e) {
                            this.currentCardIndex = e, this.currentOffset = "rtl" === this.direction ? this.stepSize * e : -this.stepSize * e
                        },
                        getInidicatorClass(e) {
                            return {
                                "h-carousel-track__indicator-item--active": e === this.currentCardIndex
                            }
                        },
                        moveCarousel(e) {
                            if (1 === e && !this.atEndOfList) return this.currentOffset -= this.stepSize, void(this.currentCardIndex = "rtl" === this.direction ? this.currentCardIndex - 1 : this.currentCardIndex + 1);
                            this.currentOffset += this.stepSize, this.currentCardIndex = "rtl" === this.direction ? this.currentCardIndex + 1 : this.currentCardIndex - 1
                        }
                    }
                }),
                n = (r(1142), r(5)),
                component = Object(n.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        class: e.carouselTrackClass
                    }, [e.isDesktopView && !e.isSingleCardType || "none" === e.indicator ? e._e() : t("div", {
                        class: e.indicatorClass
                    }, e._l(e.cardsData, (function(r, o) {
                        return t("span", {
                            key: `${r}-${o}`,
                            staticClass: "h-carousel-track__indicator-item",
                            class: e.getInidicatorClass(o),
                            on: {
                                click: function(t) {
                                    return e.selectCard(o)
                                }
                            }
                        })
                    })), 0), e._v(" "), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showNavigateLeft,
                            expression: "showNavigateLeft"
                        }],
                        staticClass: "h-carousel-track__nav-container h-carousel-track__nav-container--left",
                        class: e.getNavModifierClass("left"),
                        attrs: {
                            "data-click-id": `hgr-${e.originateFrom}-carousel-left`
                        },
                        on: {
                            click: function(t) {
                                return e.moveCarousel(-1)
                            }
                        }
                    }, [t("HIcon", {
                        attrs: {
                            icon: "ui-icons/ic-arrow-left",
                            color: "meteorite-dark",
                            "view-box": "0 0 24 24",
                            size: e.iconSize
                        }
                    })], 1), e._v(" "), t("div", {
                        class: e.containerClass
                    }, [t("div", {
                        class: e.containerClass,
                        style: e.carouselWidthStyle
                    }, [t("div", {
                        class: e.carouselContainerClass,
                        on: {
                            touchstart: e.touchStart
                        }
                    }, [t("div", {
                        class: e.getCardContainerClass(),
                        style: e.translateStyle
                    }, [e.isDesktopView || "multiLine" === e.type ? e._e() : t("div", {
                        style: e.marginRightStyle
                    }), e._v(" "), e._l(e.cardsData, (function(r, o) {
                        return t("HCarouselCardWrapper", {
                            key: `${r}-${o}`,
                            attrs: {
                                "cards-data": e.cardsData,
                                index: o,
                                "current-card-index": e.currentCardIndex,
                                "pagination-factor": e.paginationFactor,
                                "cards-gap": e.cardsGap,
                                "screen-mode": e.screenMode,
                                "desktop-view": e.isDesktopView,
                                type: e.type,
                                "is-carousel-visible": e.isCarouselVisible
                            },
                            scopedSlots: e._u([{
                                key: "card",
                                fn: function() {
                                    return [e._t("items", null, {
                                        item: r
                                    })]
                                },
                                proxy: !0
                            }], null, !0)
                        })
                    }))], 2)])])]), e._v(" "), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showNavigateRight,
                            expression: "showNavigateRight"
                        }],
                        staticClass: "h-carousel-track__nav-container h-carousel-track__nav-container--right",
                        class: e.getNavModifierClass("right"),
                        attrs: {
                            "data-click-id": `hgr-${e.originateFrom}-carousel-right`
                        },
                        on: {
                            click: function(t) {
                                return e.moveCarousel(1)
                            }
                        }
                    }, [t("HIcon", {
                        attrs: {
                            icon: "ui-icons/ic-arrow-right",
                            color: "meteorite-dark",
                            size: e.iconSize,
                            "view-box": "0 0 24 24"
                        }
                    })], 1)])
                }), [], !1, null, "d6cd1e16", null);
            t.default = component.exports;
            installComponents(component, {
                HIcon: r(80).default,
                HCarouselCardWrapper: r(1139).default
            })
        },
        1148: function(e, t, r) {
            "use strict";
            r(1114)
        },
        1149: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-37c536f6]{display:none}@media(min-width:768px){.desktop-only[data-v-37c536f6]{display:block}.mobile-only[data-v-37c536f6]{display:none}}.h-carousel__wrapper[data-v-37c536f6]{align-items:center;display:flex;justify-content:center;overflow:hidden;padding-bottom:8px;position:relative}", ""]), o.locals = {}, e.exports = o
        },
        1150: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(7).a.extend({
                    name: "HPartnerReviewCard",
                    props: {
                        data: {
                            type: Object,
                            required: !0
                        }
                    },
                    computed: {
                        reviewCount() {
                            return (new Intl.NumberFormat).format(this.data.rating.count)
                        },
                        imageSizeStyle() {
                            return `width: ${this.data.icon.width}px; height: ${this.data.icon.height}px;`
                        }
                    }
                }),
                n = (r(1186), r(5)),
                component = Object(n.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-partner-review"
                    }, [t("div", {
                        staticClass: "h-partner-review__header"
                    }, [t("HImage", {
                        staticClass: "h-partner-review__icon",
                        style: e.imageSizeStyle,
                        attrs: {
                            image: e.data.icon
                        }
                    })], 1), e._v(" "), t("div", {
                        staticClass: "h-partner-review__stars"
                    }, e._l(5, (function(e) {
                        return t("HIcon", {
                            key: e,
                            attrs: {
                                icon: "review-icons/ic-star",
                                color: "success",
                                viewBox: "0 0 24 24",
                                size: {
                                    height: 30,
                                    width: 30
                                }
                            }
                        })
                    })), 1), e._v(" "), t("div", {
                        staticClass: "h-partner-review__rating"
                    }, [t("div", [e._v(e._s(e.$t("components.companyReview.rating")))]), e._v(" "), t("div", [t("b", [e._v(e._s(e.data.rating.stars))])]), e._v(" "), t("div", [e._v("|")]), e._v(" "), t("div", [t("b", [e._v(e._s(e.reviewCount))])]), e._v(" "), t("div", [e._v(e._s(e.$t("components.companyReview.reviews")))])])])
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                HImage: r(165).default,
                HIcon: r(80).default
            })
        },
        1151: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(88),
                n = r.n(o),
                c = r(7),
                l = r(0);
            var d = c.a.extend({
                    name: "HCarousel",
                    props: {
                        id: {
                            type: String,
                            default: ""
                        },
                        type: {
                            type: String,
                            default: "default",
                            validator: Object(l.y)(["singleCard", "multiLine", "default"])
                        },
                        startingIndex: {
                            type: Number,
                            default: 0
                        },
                        indicator: {
                            type: String,
                            default: "top",
                            validator: Object(l.y)(["top", "bottom", "none"])
                        },
                        navButtonPosition: {
                            type: String,
                            default: "middle",
                            validator: Object(l.y)(["top", "middle"])
                        },
                        cardWidth: {
                            type: Number,
                            default: 0
                        },
                        cardsData: {
                            type: Array,
                            required: !0
                        },
                        originateFrom: {
                            type: String,
                            default: ""
                        }
                    },
                    data: () => ({
                        carouselType: "default",
                        paginationFactor: 0,
                        screenMode: "tablet"
                    }),
                    computed: {
                        cardsGap() {
                            return "singleCard" === this.type ? 0 : this.paginationFactor / 7.5
                        }
                    },
                    mounted() {
                        this.cardsData.length && (this.initializeCarousel(), window.addEventListener("resize", n()(this.initializeCarousel, 100)), this.$once("hook:beforeDestroy", (() => {
                            window.removeEventListener("resize", n()(this.initializeCarousel, 100))
                        })))
                    },
                    watch: {
                        cardWidth() {
                            this.initializeCarousel()
                        }
                    },
                    methods: {
                        initializeCarousel() {
                            const e = this.id ? document.querySelectorAll(`#${this.id} .h-carousel-card-wrapper__card`)[0] : document.querySelector(".h-carousel-card-wrapper__card"),
                                t = this.cardWidth || (null == e ? void 0 : e.offsetWidth);
                            if (t) {
                                const e = window.outerWidth || window.innerWidth;
                                this.paginationFactor = t / 2, this.setScreenMode(t, e)
                            }
                        },
                        setScreenMode(e, t) {
                            const r = e * this.cardsData.length + this.cardsGap * (this.cardsData.length - 1),
                                o = "singleCard" === this.type,
                                n = r < t - 200,
                                c = "multiLine" === this.type && t > 1024,
                                l = 4 === this.cardsData.length && t > 1024,
                                d = o && t > 1024;
                            this.carouselType = c ? "multiLine" : o ? "singleCard" : "default", this.screenMode = n || c || d || l ? "desktop" : t < 768 ? "mobile" : "tablet"
                        }
                    }
                }),
                h = (r(1148), r(5)),
                component = Object(h.a)(d, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-carousel",
                        attrs: {
                            id: e.id
                        }
                    }, [e.cardsData.length ? t("div", {
                        staticClass: "h-carousel__wrapper"
                    }, [t("HCarouselTrack", {
                        attrs: {
                            "pagination-factor": e.paginationFactor,
                            "cards-data": e.cardsData,
                            "screen-mode": e.screenMode,
                            "cards-gap": e.cardsGap,
                            indicator: e.indicator,
                            "starting-index": e.startingIndex,
                            type: e.carouselType,
                            "nav-button-position": e.navButtonPosition,
                            "originate-from": e.originateFrom
                        },
                        scopedSlots: e._u([{
                            key: "items",
                            fn: function({
                                item: t
                            }) {
                                return [e._t("items", null, {
                                    item: t
                                })]
                            }
                        }], null, !0)
                    })], 1) : e._e()])
                }), [], !1, null, "37c536f6", null);
            t.default = component.exports;
            installComponents(component, {
                HCarouselTrack: r(1147).default
            })
        },
        1152: function(e, t, r) {
            "use strict";
            r(1116)
        },
        1153: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-178b13f2]{display:none}@media(min-width:768px){.desktop-only[data-v-178b13f2]{display:block}.mobile-only[data-v-178b13f2]{display:none}}.h-pricing-table[data-v-178b13f2]{text-align:center}.h-pricing-table__switcher[data-v-178b13f2]{margin-bottom:32px}@media(min-width:768px){.h-pricing-table__switcher[data-v-178b13f2]{margin-bottom:40px}}@media(min-width:1025px){.h-pricing-table__switcher[data-v-178b13f2]{margin-bottom:48px}}.h-pricing-table__info[data-v-178b13f2]{margin-bottom:32px;text-align:center}@media(min-width:768px){.h-pricing-table__info[data-v-178b13f2]{margin-bottom:40px}}@media(min-width:1025px){.h-pricing-table__info[data-v-178b13f2]{margin-bottom:48px}}.h-pricing-table__description[data-v-178b13f2]{margin-top:16px}@media(min-width:768px){.h-pricing-table__description[data-v-178b13f2]{margin-top:24px}}@media(min-width:1025px){.h-pricing-table__description[data-v-178b13f2]{margin-top:32px}.h-pricing-table__payment-terms[data-v-178b13f2]{margin-top:24px}}", ""]), o.locals = {}, e.exports = o
        },
        1155: function(e, t, r) {
            "use strict";
            r.r(t);
            r(127);
            var o = r(1),
                n = r(7),
                c = r(0);

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
            const d = ["ghost-white", "white-blue", "primary"];
            var h = n.a.extend({
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
                            }({}, Object(c.f)("h-features-header--bg", this.data.backgroundColor, d))
                        }
                    },
                    methods: {
                        scrollTo() {
                            this.data.buttonData.scrollId && Object(c.z)(this.data.buttonData.scrollId)
                        }
                    }
                }),
                m = h,
                f = (r(1184), r(5)),
                component = Object(f.a)(m, (function() {
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
        1159: function(e, t, r) {
            "use strict";
            r(1121)
        },
        1160: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-6be4864f]{display:none}@media(min-width:768px){.desktop-only[data-v-6be4864f]{display:block}.mobile-only[data-v-6be4864f]{display:none}}.h-multi-texts-section[data-v-6be4864f]{display:grid}.h-multi-texts-section__overline[data-v-6be4864f]{color:#727586;margin-bottom:24px;text-align:center}.h-multi-texts-section__title[data-v-6be4864f]{text-align:center}.h-multi-texts-section__block-title[data-v-6be4864f]{margin-bottom:24px}.h-multi-texts-section__description[data-v-6be4864f]{margin-top:16px;text-align:center}@media(min-width:768px){.h-multi-texts-section__description[data-v-6be4864f]{margin-top:24px}}@media(min-width:1025px){.h-multi-texts-section__description[data-v-6be4864f]{margin-top:32px}}.h-multi-texts-section__text-block[data-v-6be4864f]{margin-bottom:24px;text-align:center}@media(min-width:768px){.h-multi-texts-section__text-block[data-v-6be4864f]{margin-bottom:32px}}@media(min-width:1025px){.h-multi-texts-section__text-block[data-v-6be4864f]{margin-bottom:40px;text-align:left;text-align:initial}}.h-multi-texts-section__text-block[data-v-6be4864f]:last-child{margin-bottom:0}.h-multi-texts-section__text-block h2[data-v-6be4864f]{margin-bottom:16px}@media(min-width:768px){.h-multi-texts-section__text-block h2[data-v-6be4864f]{margin-bottom:24px}}@media(min-width:1025px){.h-multi-texts-section__text-block h2[data-v-6be4864f]{margin-bottom:32px}}.h-multi-texts-section__text-block h3[data-v-6be4864f]{margin-bottom:16px}@media(min-width:768px){.h-multi-texts-section__text-block h3[data-v-6be4864f]{margin-bottom:24px}}.h-multi-texts-section__text-block a[data-v-6be4864f]{margin-top:24px;text-decoration-line:underline}.h-multi-texts-section--with-gap[data-v-6be4864f]{row-gap:64px}@media(min-width:768px){.h-multi-texts-section--with-gap[data-v-6be4864f]{row-gap:80px}}@media(min-width:1025px){.h-multi-texts-section--with-gap[data-v-6be4864f]{row-gap:96px}}.h-multi-texts-section--bg-primary[data-v-6be4864f]{background-color:#673de6}.h-multi-texts-section--bg-meteorite-dark[data-v-6be4864f]{background-color:#2f1c6a}.h-multi-texts-section--bg-meteorite-dark .h-multi-texts-section__description[data-v-6be4864f],.h-multi-texts-section--bg-meteorite-dark .h-multi-texts-section__text-block[data-v-6be4864f],.h-multi-texts-section--bg-meteorite-dark .h-multi-texts-section__title[data-v-6be4864f],.h-multi-texts-section--bg-primary .h-multi-texts-section__description[data-v-6be4864f],.h-multi-texts-section--bg-primary .h-multi-texts-section__text-block[data-v-6be4864f],.h-multi-texts-section--bg-primary .h-multi-texts-section__title[data-v-6be4864f]{color:#fff}.h-multi-texts-section--bg-meteorite-dark[data-v-6be4864f] a,.h-multi-texts-section--bg-primary[data-v-6be4864f] a{color:#fff;-webkit-text-decoration:underline;text-decoration:underline}.h-multi-texts-section--bg-white-blue[data-v-6be4864f]{background-color:#f4f5ff}.h-multi-texts-section--bg-ghost-white[data-v-6be4864f]{background-color:#fafbff}.h-multi-texts-section--bg-light[data-v-6be4864f]{background-color:#fff}.h-multi-texts-section--bg-light .h-multi-texts-section__text-block p[data-v-6be4864f],.h-multi-texts-section--bg-white-blue .h-multi-texts-section__text-block p[data-v-6be4864f]{color:#727586}", ""]), o.locals = {}, e.exports = o
        },
        1163: function(e, t, r) {
            "use strict";
            r(1123)
        },
        1164: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-48774c2e]{display:none}@media(min-width:768px){.desktop-only[data-v-48774c2e]{display:block}.mobile-only[data-v-48774c2e]{display:none}}.h-image-section-two-cols--with-padding[data-v-48774c2e]{padding:64px 0}@media(min-width:768px){.h-image-section-two-cols--with-padding[data-v-48774c2e]{padding:80px 0}}@media(min-width:1025px){.h-image-section-two-cols--with-padding[data-v-48774c2e]{padding:0}}.h-image-section-two-cols__overline[data-v-48774c2e]{color:#727586;display:inline-block;margin-bottom:24px}.h-image-section-two-cols__secondary-heading[data-v-48774c2e]{margin-top:24px}@media(min-width:768px){.h-image-section-two-cols__secondary-heading[data-v-48774c2e]{margin-top:16px}}@media(min-width:1025px){.h-image-section-two-cols__secondary-heading[data-v-48774c2e]{margin-top:24px}}.h-image-section-two-cols__description[data-v-48774c2e]{margin-top:16px}@media(min-width:768px){.h-image-section-two-cols__description[data-v-48774c2e]{margin-top:24px}}@media(min-width:1025px){.h-image-section-two-cols__description[data-v-48774c2e]{margin-top:32px}}.h-image-section-two-cols__secondary-description[data-v-48774c2e]{margin-top:8px}.h-image-section-two-cols p[data-v-48774c2e]{color:#727586}.h-image-section-two-cols__link-wrapper[data-v-48774c2e]{margin-top:32px}@media(min-width:768px){.h-image-section-two-cols__link-wrapper[data-v-48774c2e]{margin-top:40px}}@media(min-width:1025px){.h-image-section-two-cols__link-wrapper[data-v-48774c2e]{margin-top:24px}.h-image-section-two-cols__link-wrapper[data-v-48774c2e] .h-button{margin-top:48px}}.h-image-section-two-cols--bg-primary h2[data-v-48774c2e],.h-image-section-two-cols--bg-primary p[data-v-48774c2e],.h-image-section-two-cols--bg-primary__overline[data-v-48774c2e]{color:#fff}.h-image-section-two-cols--bg-ghost-white[data-v-48774c2e]{background-color:#fafbff}.h-image-section-two-cols--bg-light[data-v-48774c2e]{background-color:#fff}.h-image-section-two-cols--bg-primary[data-v-48774c2e]{background-color:#673de6}", ""]), o.locals = {}, e.exports = o
        },
        1166: function(e, t, r) {
            "use strict";
            r.r(t);
            r(127);
            var o = r(1),
                n = r(7),
                c = r(0);

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

            function d(e) {
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
            const h = ["light", "ghost-white", "primary"];
            var m = n.a.extend({
                    name: "HImageSectionTwoCols",
                    props: {
                        section: {
                            type: Object
                        }
                    },
                    data() {
                        return {
                            image: {
                                src: this.section.imageSrc,
                                alt: this.$t(this.section.imageAlt)
                            }
                        }
                    },
                    computed: {
                        classes() {
                            return d(d({}, Object(c.f)("h-image-section-two-cols--bg", this.section.sectionBackgroundColor, h)), {}, {
                                "h-image-section-two-cols--with-padding": this.section.sectionBackgroundColor && "light" !== this.section.sectionBackgroundColor
                            })
                        }
                    }
                }),
                f = (r(1163), r(5)),
                component = Object(f.a)(m, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "u-section-spaces"
                    }, [t("HSectionTwoColumns", {
                        staticClass: "h-image-section-two-cols",
                        class: e.classes,
                        attrs: {
                            reverse: e.section.reverse,
                            "background-color": e.section.sectionBackgroundColor
                        },
                        scopedSlots: e._u([{
                            key: "left-column",
                            fn: function() {
                                return [e.section.overline ? t("span", {
                                    staticClass: "h-image-section-two-cols__overline t-body-uppercase"
                                }, [e._v("\n        " + e._s(e.$t(e.section.overline)) + "\n      ")]) : e._e(), e._v(" "), t("h2", {
                                    staticClass: "h-image-section-two-cols__heading"
                                }, [e._v("\n        " + e._s(e.$t(e.section.heading)) + "\n      ")]), e._v(" "), Array.isArray(e.section.description) ? e._l(e.section.description, (function(r, o) {
                                    return t("p", {
                                        key: o,
                                        staticClass: "h-image-section-two-cols__description"
                                    }, [e._v("\n          " + e._s(e.$t(r)) + "\n        ")])
                                })) : e.section.description ? t("p", {
                                    staticClass: "h-image-section-two-cols__description"
                                }, [e._v("\n        " + e._s(e.$t(e.section.description)) + "\n      ")]) : e._e(), e._v(" "), e.section.secondaryParagraph ? [t("h3", {
                                    staticClass: "h-image-section-two-cols__secondary-heading t-button"
                                }, [e._v("\n          " + e._s(e.$t(e.section.secondaryParagraph.heading)) + "\n        ")]), e._v(" "), t("p", {
                                    staticClass: "h-image-section-two-cols__secondary-description"
                                }, [e._v("\n          " + e._s(e.$t(e.section.secondaryParagraph.description)) + "\n        ")])] : e._e(), e._v(" "), e.$slots.button ? t("div", {
                                    staticClass: "h-image-section-two-cols__link-wrapper"
                                }, [e._t("button")], 2) : e._e()]
                            },
                            proxy: !0
                        }, {
                            key: "right-column",
                            fn: function() {
                                return [t("HImage", {
                                    staticClass: "h-image-section-two-cols__image",
                                    attrs: {
                                        image: e.image
                                    }
                                })]
                            },
                            proxy: !0
                        }], null, !0)
                    })], 1)
                }), [], !1, null, "48774c2e", null);
            t.default = component.exports;
            installComponents(component, {
                HImage: r(165).default,
                HSectionTwoColumns: r(1108).default
            })
        },
        1167: function(e, t, r) {
            var content = r(1196);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("7d3ca856", content, !0, {
                sourceMap: !1
            })
        },
        1168: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(7).a.extend({
                    name: "HTrustPilot",
                    props: {
                        id: {
                            type: String,
                            required: !0
                        },
                        data: {
                            type: Object,
                            required: !0
                        }
                    },
                    mounted() {
                        const script = document.createElement("script");
                        script.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js", document.head.appendChild(script);
                        const e = document.getElementById(this.id),
                            t = window.Trustpilot;
                        t && t.loadFromElement(e)
                    }
                }),
                n = r(5),
                component = Object(n.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-trust-pilot"
                    }, [t("div", {
                        staticClass: "trustpilot-widget",
                        attrs: {
                            id: e.id,
                            "data-locale": e.data.locale,
                            "data-template-id": e.data.templateId,
                            "data-businessunit-id": e.data.businessunitId,
                            "data-style-height": e.data.height || "140px",
                            "data-style-width": e.data.width || "100%",
                            "data-theme": e.data.theme,
                            "data-stars": e.data.stars,
                            "data-review-languages": e.data.reviewLanguages,
                            "data-tags": e.data.reviewTags
                        }
                    }, [t("a", {
                        staticClass: "h-trust-pilot__link",
                        attrs: {
                            href: e.data.link,
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [e._v("\n      Trustpilot\n    ")])])])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        1169: function(e, t, r) {
            "use strict";
            r.r(t);
            r(127);
            var o = r(1),
                n = r(0),
                c = r(7);

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

            function d(e) {
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
            const h = ["light", "ghost-white", "primary", "white-blue"];
            var m = c.a.extend({
                    name: "HTextButtonSection",
                    props: {
                        textSlugs: {
                            type: Object,
                            default: () => ({
                                title: "",
                                description: "",
                                button: "",
                                link: ""
                            })
                        },
                        backgroundColor: {
                            type: String,
                            default: "light",
                            validator: Object(n.y)(h)
                        },
                        buttonData: {
                            type: Object,
                            default: () => ({
                                color: "",
                                dataClickId: "",
                                scrollToId: "",
                                link: "",
                                nuxtLink: ""
                            })
                        },
                        linkData: {
                            type: Object,
                            default: () => ({
                                path: "",
                                dataClickId: ""
                            })
                        },
                        features: {
                            type: Array,
                            default: void 0
                        }
                    },
                    methods: {
                        scrollTo() {
                            this.buttonData.scrollToId && Object(n.z)(this.buttonData.scrollToId)
                        }
                    },
                    computed: {
                        classes() {
                            return d(d({}, Object(n.f)("h-text-button-section--bg", this.backgroundColor, h)), {}, {
                                "u-generic-color-section": "light" !== this.backgroundColor
                            })
                        }
                    }
                }),
                f = (r(1170), r(5)),
                component = Object(f.a)(m, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        staticClass: "u-section-spaces"
                    }, [t("HSectionOneColumn", {
                        staticClass: "h-text-button-section",
                        class: e.classes,
                        attrs: {
                            "column-max-width": "824px",
                            "background-color": e.backgroundColor
                        }
                    }, [t("div", {
                        staticClass: "h-text-button-section__container"
                    }, [e.textSlugs.translateTitle ? t("Translate", {
                        staticClass: "h-text-button-section__title",
                        attrs: {
                            tag: e.textSlugs.translateTitle.tag,
                            params: e.textSlugs.translateTitle.params
                        }
                    }, [e._v(e._s(e.textSlugs.title) + "\n      ")]) : t("h2", {
                        staticClass: "h-text-button-section__title"
                    }, [e._v("\n        " + e._s(e.$t(e.textSlugs.title)) + "\n      ")]), e._v(" "), e.textSlugs.description ? t("p", {
                        staticClass: "h-text-button-section__description"
                    }, [e._v("\n        " + e._s(e.$t(e.textSlugs.description)) + "\n      ")]) : e._e(), e._v(" "), t("HButton", {
                        staticClass: "h-text-button-section__btn",
                        attrs: {
                            color: e.buttonData.color || "primary",
                            "router-component": e.buttonData.nuxtLink && "NuxtLink",
                            to: e.buttonData.nuxtLink || e.buttonData.link,
                            "data-click-id": e.buttonData.dataClickId
                        },
                        on: {
                            onClick: e.scrollTo
                        }
                    }, [e._v("\n        " + e._s(e.$t(e.textSlugs.button)) + "\n      ")]), e._v(" "), e.linkData.path ? t("div", {
                        staticClass: "link-wrapper h-text-button-section__link"
                    }, [t("a", {
                        attrs: {
                            target: "_blank",
                            "data-click-id": e.linkData.dataClickId,
                            href: e.linkData.path
                        }
                    }, [e._v(e._s(e.$t(e.textSlugs.link)))])]) : e._e(), e._v(" "), e.features && e.features.length ? t("div", {
                        staticClass: "h-text-button-section__features-list"
                    }, e._l(e.features, (function(r, o) {
                        return t("span", {
                            key: `${r}-${o}`,
                            staticClass: "h-text-button-section__feature-item t-body-3"
                        }, [t("HIcon", {
                            attrs: {
                                color: "success",
                                icon: "ui-icons/ic-check",
                                size: {
                                    height: 24,
                                    width: 16
                                }
                            }
                        }), e._v("\n          " + e._s(e.$t(r)) + "\n        ")], 1)
                    })), 0) : e._e()], 1)])], 1)
                }), [], !1, null, "68a61c03", null);
            t.default = component.exports;
            installComponents(component, {
                Translate: r(1120).default,
                HButton: r(236).default,
                HIcon: r(80).default,
                HSectionOneColumn: r(526).default
            })
        },
        1170: function(e, t, r) {
            "use strict";
            r(1127)
        },
        1171: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-68a61c03]{display:none}@media(min-width:768px){.desktop-only[data-v-68a61c03]{display:block}.mobile-only[data-v-68a61c03]{display:none}}.h-text-button-section[data-v-68a61c03]{text-align:center}.h-text-button-section__description[data-v-68a61c03]{margin-top:16px}@media(min-width:768px){.h-text-button-section__description[data-v-68a61c03]{margin-top:24px}}@media(min-width:1025px){.h-text-button-section__description[data-v-68a61c03]{margin-top:32px}}.h-text-button-section__btn[data-v-68a61c03]{margin:16px auto auto;max-width:264px}@media(min-width:768px){.h-text-button-section__btn[data-v-68a61c03]{margin-top:24px;max-width:248px}}@media(min-width:1025px){.h-text-button-section__btn[data-v-68a61c03]{margin-top:48px}}.h-text-button-section__link[data-v-68a61c03]{margin-top:16px}@media(min-width:1025px){.h-text-button-section__link[data-v-68a61c03]{margin-top:24px}}.h-text-button-section--bg-primary .h-text-button-section__description[data-v-68a61c03],.h-text-button-section--bg-primary .h-text-button-section__title[data-v-68a61c03]{color:#fff}.h-text-button-section__features-list[data-v-68a61c03]{align-items:flex-start;display:flex;flex-direction:column;margin:16px auto 0;max-width:264px}@media(min-width:768px){.h-text-button-section__features-list[data-v-68a61c03]{max-width:248px}}@media(min-width:1025px){.h-text-button-section__features-list[data-v-68a61c03]{margin-top:24px;max-width:248px}}.h-text-button-section__feature-item[data-v-68a61c03]{display:inline-flex;margin-bottom:12px}.h-text-button-section__feature-item[data-v-68a61c03]:last-child{margin-bottom:0}.h-text-button-section--bg-light[data-v-68a61c03]{background-color:#fff}.h-text-button-section--bg-primary[data-v-68a61c03]{background-color:#673de6}.h-text-button-section--bg-ghost-white[data-v-68a61c03]{background-color:#fafbff}.h-text-button-section--bg-white-blue[data-v-68a61c03]{background-color:#f4f5ff}", ""]), o.locals = {}, e.exports = o
        },
        1172: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return o
            })), r.d(t, "b", (function() {
                return n
            })), r.d(t, "a", (function() {
                return c
            }));
            const o = "1,597,691",
                n = "20000000-ffff-ffff-ffff-000000000002",
                c = {
                    US: ".net, .xyz, .com, .online, .link, .shop, .live, .digital, .tech, .space, .website, .email, .fun, .click, .site, .uno, .in, .host, .store, .press, .me, .help",
                    JP: ".net, .xyz, .info, .com, .online, .shop, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    MY: ".net, .xyz, .info, .com, .online, .shop, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    PH: ".net, .xyz, .info, .com, .online, .shop, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .help, .me, .press",
                    GB: ".co.uk, .online, .net, .xyz, .info, .shop, .com, .org.uk, .tech, .site, .website, .space, .uno, .fun, .pw, .icu, .host, .link, .click, .press, .store, .help, .me",
                    IN: ".co.in, .org.in, .xyz, .net, .in, .shop, .online, .com, .info, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .help, .me, .press",
                    AR: ".net, .xyz, .info, .com, .online, .shop, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    BR: ".xyz, .info, .com.br, .online, .shop, .com, .net.br, .tech, .live, .digital, .link, .email, .click, .site, .space, .website, .store, .uno, .host, .fun, .press, .me, .help",
                    DE: ".eu, .de, .net, .xyz, .com.de, .shop, .com, .online, .live, .digital, .link, .email, .click, .tech, .site, .space, .website, .store, .uno, .host, .fun, .press, .help, .me",
                    ES: ".es, .online, .info, .xyz, .net, .shop, .com, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .help, .press, .me",
                    LT: ".eu, .net, .xyz, .info, .com, .shop, .online, .lt, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    FR: ".eu, .net, .online, .fr, .xyz, .shop, .com, .live, .digital, .tech, .email, .site, .space, .website, .store, .uno, .host, .fun, .press, .org, .me",
                    NL: ".eu, .xyz, .net, .info, .com, .shop, .online, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .be, .nl, .help, .me, .press",
                    IT: ".eu, .it, .xyz, .net, .com, .shop, .online, .live, .digital, .link, .email, .click, .tech, .site, .space, .website, .store, .uno, .host, .fun, .press, .help, .me",
                    MX: ".net, .online, .info, .xyz, .com, .shop, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    AE: ".net, .xyz, .info, .com, .online, .shop, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    CO: ".net, .info, .xyz, .com, .com.co, .shop, .online, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    ID: ".my.id, .net, .sch.id, .or.id, .xyz, .shop, .info, .ac.id, .com, .online, .web.id, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    PL: ".com.pl, .net.pl, .pl, .eu, .xyz, .shop, .net, .com, .online, .live, .digital, .link, .email, .click, .tech, .site, .space, .website, .store, .uno, .host, .fun, .press, .help, .me",
                    RO: ".eu, .net, .xyz, .info, .com, .shop, .online, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    VN: ".net, .xyz, .info, .com, .online, .shop, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    UA: ".net, .xyz, .info, .com, .online, .shop, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    PT: ".eu, .net, .xyz, .info, .com, .shop, .online, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    DK: ".eu, .net, .xyz, .info, .com, .shop, .online, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    EE: ".eu, .net, .xyz, .com, .info, .shop, .online, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    FI: ".eu, .net, .xyz, .info, .com, .shop, .online, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    GR: ".eu, .net, .xyz, .info, .com, .shop, .online, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    LV: ".eu, .net, .xyz, .com, .info, .shop, .online, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    SK: ".eu, .net, .xyz, .info, .com, .shop, .online, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    CN: ".net, .xyz, .info, .com, .online, .shop, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    NO: ".net, .xyz, .info, .com, .online, .shop, .eu, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    SE: ".eu, .net, .xyz, .info, .com, .shop, .se, .online, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    CZ: ".eu, .net, .xyz, .info, .com, .shop, .online, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    HR: ".net, .xyz, .info, .com, .online, .shop, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    HU: ".eu, .xyz, .net, .info, .com, .shop, .online, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    TH: ".net, .xyz, .info, .com, .online, .shop, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    KR: ".net, .xyz, .info, .com, .online, .shop, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    IL: ".net, .xyz, .info, .com, .online, .shop, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me",
                    TR: ".net, .xyz, .info, .com, .online, .shop, .tech, .site, .store, .website, .space, .icu, .uno, .fun, .pw, .host, .link, .click, .press, .help, .me"
                }
        },
        1173: function(e, t, r) {
            var content = r(1203);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("53e5e159", content, !0, {
                sourceMap: !1
            })
        },
        1175: function(e, t, r) {
            var content = r(1209);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("22bb5c4b", content, !0, {
                sourceMap: !1
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
        1178: function(e, t, r) {
            var content = r(1215);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("40ba1bee", content, !0, {
                sourceMap: !1
            })
        },
        1179: function(e, t, r) {
            var content = r(1217);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("8fe31478", content, !0, {
                sourceMap: !1
            })
        },
        1181: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1150),
                n = r(7).a.extend({
                    name: "HPartnerReviews",
                    components: {
                        HPartnerReviewCard: o.default
                    },
                    props: {
                        data: {
                            type: Object
                        }
                    },
                    computed: {
                        numberOfCards() {
                            return Object.keys(this.data).length
                        }
                    }
                }),
                c = r(5),
                component = Object(c.a)(n, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("HCardGridSection", {
                        attrs: {
                            "number-of-cards": e.numberOfCards,
                            "desktop-columns": e.numberOfCards
                        },
                        scopedSlots: e._u([e._l(e.data, (function(r, o, n) {
                            return {
                                key: `card_${n+1}`,
                                fn: function() {
                                    return ["trustpilot" === o ? t("HTrustPilotMini", {
                                        key: o,
                                        attrs: {
                                            data: e.data.trustpilot
                                        }
                                    }) : t("HPartnerReviewCard", {
                                        key: o,
                                        attrs: {
                                            data: e.data[o]
                                        }
                                    })]
                                },
                                proxy: !0
                            }
                        }))], null, !0)
                    })
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                HTrustPilotMini: r(1192).default,
                HPartnerReviewCard: r(1150).default,
                HCardGridSection: r(1154).default
            })
        },
        1182: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(7).a.extend({
                    name: "HSimpleBadge"
                }),
                n = (r(1188), r(5)),
                component = Object(n.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("span", {
                        staticClass: "h-simple-badge t-h3",
                        attrs: {
                            dir: e.direction
                        }
                    }, [e._t("default")], 2)
                }), [], !1, null, "30c80915", null);
            t.default = component.exports
        },
        1183: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1),
                n = r(7),
                c = r(0);

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

            function d(e) {
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
            var m = n.a.extend({
                    name: "HHeaderTwoColumns",
                    props: {
                        backgroundColor: {
                            type: String,
                            default: "ghost-white",
                            validator: Object(c.y)(h)
                        },
                        saleCampaign: Boolean
                    },
                    computed: {
                        classes() {
                            return d(d({}, Object(c.f)("h-header-two-cols--bg", this.backgroundColor, h)), {}, {
                                "h-header-two-cols--sales": this.saleCampaign
                            })
                        }
                    }
                }),
                f = (r(1176), r(5)),
                component = Object(f.a)(m, (function() {
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
        },
        1186: function(e, t, r) {
            "use strict";
            r(1141)
        },
        1187: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only{display:none}@media(min-width:768px){.desktop-only{display:block}.mobile-only{display:none}}.h-partner-review{padding-top:8px}.h-partner-review__header{align-items:center;display:flex;height:24px;margin-bottom:14px}.h-partner-review__stars{margin-bottom:6px}.h-partner-review__stars svg{margin-right:5px}.h-partner-review__rating{display:flex;margin-bottom:9px}.h-partner-review__rating div{color:#1d1e20;font-size:14px;font-weight:400;line-height:1.4;padding-right:3px}.h-partner-review__rating .bold{font-weight:700}", ""]), o.locals = {}, e.exports = o
        },
        1188: function(e, t, r) {
            "use strict";
            r(1144)
        },
        1189: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-30c80915]{display:none}@media(min-width:768px){.desktop-only[data-v-30c80915]{display:block}.mobile-only[data-v-30c80915]{display:none}}.h-simple-badge[data-v-30c80915]{align-items:center;border:1px solid #8c85ff;border-radius:4px;color:#8c85ff;display:inline-flex;font-size:12px;height:24px;padding:4px 8px;text-transform:uppercase;width:-moz-fit-content;width:fit-content}", ""]), o.locals = {}, e.exports = o
        },
        1190: function(e, t, r) {
            var content = r(1230);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("14cf0c78", content, !0, {
                sourceMap: !1
            })
        },
        1191: function(e, t, r) {
            var content = r(1232);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("52153e57", content, !0, {
                sourceMap: !1
            })
        },
        1192: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1),
                n = r(7);

            function c(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function l(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? c(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var d = n.a.extend({
                    name: "HTrustPilotMini",
                    props: {
                        data: {
                            type: Object,
                            required: !0
                        }
                    },
                    computed: {
                        formattedData() {
                            return l(l({}, this.data), {}, {
                                width: 235
                            })
                        }
                    }
                }),
                h = r(5),
                component = Object(h.a)(d, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("HTrustPilot", {
                        attrs: {
                            id: "mini-trustbox",
                            data: e.formattedData
                        }
                    })
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                HTrustPilot: r(1168).default
            })
        },
        1193: function(e, t, r) {
            "use strict";
            r.r(t);
            r(8), r(16), r(29);
            var o = r(88),
                n = r.n(o),
                c = r(7).a.extend({
                    name: "HDynamicSizePrice",
                    props: {
                        staticFontSize: {
                            type: Number,
                            default: 0
                        },
                        minFontSize: {
                            type: Number,
                            default: 10
                        }
                    },
                    data: () => ({
                        maxFontSize: 48,
                        fontSize: 48,
                        calculatingDynamicPricing: !1,
                        currencyFontSizeCoefficient: .6,
                        suffixFontSizeCoefficient: .6
                    }),
                    computed: {
                        style() {
                            return `font-size: ${this.calculatingDynamicPricing?this.dynamicFontSize:Math.max(this.staticFontSize||this.dynamicFontSize,this.minFontSize)}px`
                        },
                        dynamicFontSize() {
                            return Math.min(this.fontSize, this.maxFontSize || 100)
                        }
                    },
                    async mounted() {
                        await this.formatPrice(), window.addEventListener("resize", n()(this.formatPrice, 100)), this.$once("hook:beforeDestroy", (() => {
                            window.removeEventListener("resize", n()(this.formatPrice, 100))
                        }))
                    },
                    methods: {
                        formatPrice() {
                            if (this.calculatingDynamicPricing) return;
                            this.calculatingDynamicPricing = !0;
                            const {
                                price: e,
                                container: t,
                                child: r
                            } = this.getPricingElements();
                            if (!r || !t || !e) return;
                            (this.bigEnough(r, t) || this.smallEnough(r, t)) && this.$emit("updateFontSize", this.maxFontSize), this.calculateOriginalFontSize(), this.fontSize = this.staticFontSize || this.fontSize;
                            const o = Promise.all([this.minimizeFontSize(r, t), this.maximizeFontSize(r, t)]);
                            return o.then((() => {
                                this.$emit("updateFontSize", Math.max(Math.min(this.fontSize, this.maxFontSize), this.minFontSize)), this.calculatingDynamicPricing = !1
                            })), o
                        },
                        calculateOriginalFontSize() {
                            var e, t;
                            const {
                                price: r,
                                container: o,
                                currency: n,
                                suffix: c
                            } = this.getPricingElements();
                            o.classList.remove("ready"), n.style.removeProperty("font-size"), c.style.removeProperty("font-size");
                            const l = getComputedStyle(r),
                                d = parseInt(null == l ? void 0 : l.fontSize.replace("px", ""));
                            this.maxFontSize = this.fontSize = d;
                            const h = parseFloat(null === (e = getComputedStyle(n)) || void 0 === e ? void 0 : e.fontSize.replace("px", ""));
                            this.currencyFontSizeCoefficient = h / this.fontSize, n.style.fontSize = `${this.currencyFontSizeCoefficient}em`;
                            const m = parseFloat(null === (t = getComputedStyle(c)) || void 0 === t ? void 0 : t.fontSize.replace("px", ""));
                            this.suffixFontSizeCoefficient = m / this.fontSize, c.style.fontSize = `${this.suffixFontSizeCoefficient}em`, o.classList.add("ready")
                        },
                        bigEnough(e, t) {
                            return e.clientWidth + 8 > t.clientWidth || this.fontSize >= this.maxFontSize || this.fontSize >= this.staticFontSize
                        },
                        smallEnough(e, t) {
                            return e.clientWidth < t.clientWidth || this.fontSize < this.minFontSize
                        },
                        maximizeFontSize(e, t) {
                            return new Promise((r => {
                                const o = setInterval((() => {
                                    if (this.bigEnough(e, t)) return clearInterval(o), void r(!0);
                                    this.fontSize++
                                }), 0)
                            }))
                        },
                        minimizeFontSize(e, t) {
                            return new Promise((r => {
                                const o = setInterval((() => {
                                    if (this.smallEnough(e, t)) return clearInterval(o), void r(!0);
                                    this.fontSize--
                                }), 0)
                            }))
                        },
                        getPricingElements() {
                            const e = this.$refs.container;
                            let t;
                            try {
                                t = null == e ? void 0 : e.children[0]
                            } catch (r) {
                                t = null == e ? void 0 : e.querySelector(".h-price")
                            }
                            const r = null == t ? void 0 : t.querySelector(".h-price__number"),
                                o = null == t ? void 0 : t.querySelector(".h-price__currency"),
                                n = null == t ? void 0 : t.querySelector(".h-price__suffix");
                            return {
                                container: e,
                                child: t,
                                price: r,
                                currency: o,
                                suffix: n
                            }
                        }
                    }
                }),
                l = (r(1216), r(5)),
                component = Object(l.a)(c, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        ref: "container",
                        staticClass: "h-dynamic-size-price",
                        style: e.style
                    }, [e._t("default", (function() {
                        return [t("HPrice", e._b({}, "HPrice", e.$attrs, !1))]
                    })), e._v(" "), e._t("price-info")], 2)
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                HPrice: r(1115).default
            })
        },
        1194: function(e, t, r) {
            var content = r(1239);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("42cf10f8", content, !0, {
                sourceMap: !1
            })
        },
        1195: function(e, t, r) {
            "use strict";
            r(1167)
        },
        1196: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-1f4f97be]{display:none}@media(min-width:768px){.desktop-only[data-v-1f4f97be]{display:block}.mobile-only[data-v-1f4f97be]{display:none}}.h-discount-tag[data-v-1f4f97be]{border-radius:20px;display:inline-block;padding:4px 12px}.h-discount-tag-text-gray-light[data-v-1f4f97be]{color:#f2f3f6}.h-discount-tag-bg-gray-light[data-v-1f4f97be]{background-color:#f2f3f6}.h-discount-tag-text-primary-light[data-v-1f4f97be]{color:#ebe4ff}.h-discount-tag-bg-primary-light[data-v-1f4f97be]{background-color:#ebe4ff}.h-discount-tag-text-meteorite-light[data-v-1f4f97be]{color:#d5dfff}.h-discount-tag-bg-meteorite-light[data-v-1f4f97be]{background-color:#d5dfff}.h-discount-tag-text-danger-light[data-v-1f4f97be]{color:#ffe8ef}.h-discount-tag-bg-danger-light[data-v-1f4f97be]{background-color:#ffe8ef}.h-discount-tag-text-success-light[data-v-1f4f97be]{color:#def4f0}.h-discount-tag-bg-success-light[data-v-1f4f97be]{background-color:#def4f0}.h-discount-tag-text-warning-light[data-v-1f4f97be]{color:#fff8e2}.h-discount-tag-bg-warning-light[data-v-1f4f97be]{background-color:#fff8e2}.h-discount-tag-text-manatee[data-v-1f4f97be]{color:#8c93a9}.h-discount-tag-bg-manatee[data-v-1f4f97be]{background-color:#8c93a9}.h-discount-tag-text-spindle[data-v-1f4f97be]{color:#b6bdd3}.h-discount-tag-bg-spindle[data-v-1f4f97be]{background-color:#b6bdd3}.h-discount-tag-text-periwinkle[data-v-1f4f97be]{color:#c5cde9}.h-discount-tag-bg-periwinkle[data-v-1f4f97be]{background-color:#c5cde9}.h-discount-tag-text-ghost-white[data-v-1f4f97be]{color:#fafbff}.h-discount-tag-bg-ghost-white[data-v-1f4f97be]{background-color:#fafbff}.h-discount-tag-text-webhost-primary[data-v-1f4f97be]{color:#ff5c62}.h-discount-tag-bg-webhost-primary[data-v-1f4f97be]{background-color:#ff5c62}.h-discount-tag-text-gray-border[data-v-1f4f97be]{color:#dadce0}.h-discount-tag-bg-gray-border[data-v-1f4f97be]{background-color:#dadce0}.h-discount-tag-text-white-blue[data-v-1f4f97be]{color:#f4f5ff}.h-discount-tag-bg-white-blue[data-v-1f4f97be]{background-color:#f4f5ff}.h-discount-tag-text-gray-dark[data-v-1f4f97be]{color:#36344d}.h-discount-tag-bg-gray-dark[data-v-1f4f97be]{background-color:#36344d}.h-discount-tag-text-primary-dark[data-v-1f4f97be]{color:#5025d1}.h-discount-tag-bg-primary-dark[data-v-1f4f97be]{background-color:#5025d1}.h-discount-tag-text-meteorite-dark[data-v-1f4f97be]{color:#2f1c6a}.h-discount-tag-bg-meteorite-dark[data-v-1f4f97be]{background-color:#2f1c6a}.h-discount-tag-text-danger-dark[data-v-1f4f97be]{color:#d63163}.h-discount-tag-bg-danger-dark[data-v-1f4f97be]{background-color:#d63163}.h-discount-tag-text-success-dark[data-v-1f4f97be]{color:#008361}.h-discount-tag-bg-success-dark[data-v-1f4f97be]{background-color:#008361}.h-discount-tag-text-warning-dark[data-v-1f4f97be]{color:#fea419}.h-discount-tag-bg-warning-dark[data-v-1f4f97be]{background-color:#fea419}", ""]), o.locals = {}, e.exports = o
        },
        1197: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1),
                n = r(7),
                c = r(0);

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
            const d = ["ghost-white", "white-blue", "primary-dark", "dark"];
            var h = n.a.extend({
                    name: "HFeaturesReviewCard",
                    props: {
                        data: {
                            type: Object,
                            required: !0
                        },
                        backgroundColor: {
                            type: String,
                            default: "ghost-white",
                            validator: Object(c.y)(d)
                        }
                    },
                    data() {
                        return {
                            iconData: {
                                src: `/h-assets/images/icons/${this.data.icon}-2x.png`,
                                alt: this.data.icon
                            },
                            iconBottomData: this.data.iconBottom && "-" !== this.data.iconBottom ? {
                                src: `/h-assets/images/icons/${this.data.iconBottom}-2x.png`,
                                alt: this.data.iconBottom
                            } : null
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
                            }({}, Object(c.f)("h-features-review-card--bg", this.backgroundColor, d))
                        }
                    },
                    methods: {
                        getBottomIconColor() {
                            return ["ghost-white", "white-blue"].includes(this.backgroundColor) ? "primary" : "light"
                        }
                    }
                }),
                m = h,
                f = (r(1202), r(5)),
                component = Object(f.a)(m, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return e.isNiaga ? e._e() : t("div", {
                        staticClass: "h-features-review-card",
                        class: e.classes
                    }, [t("div", [t("HImage", {
                        staticClass: "h-features-review-card__icon",
                        attrs: {
                            image: e.iconData
                        }
                    }), e._v(" "), t("p", {
                        staticClass: "h-features-review-card__text"
                    }, [e._v("\n      " + e._s(e.data.text) + "\n    ")])], 1), e._v(" "), e.iconBottomData ? t("div", {
                        staticClass: "h-features-review-card__bottom-wrapper"
                    }, [t("HImage", {
                        staticClass: "h-features-review-card__bottom-icon",
                        attrs: {
                            image: e.iconBottomData
                        }
                    }), e._v(" "), t("a", {
                        attrs: {
                            href: e.data.link,
                            target: "_blank",
                            rel: "nofollow",
                            "data-click-id": `hgr-${e.pageNameDataClickId}-review_link`
                        }
                    }, [t("HIcon", {
                        attrs: {
                            icon: "ui-icons/ic-arrow-right",
                            color: e.getBottomIconColor()
                        }
                    })], 1)], 1) : e._e()])
                }), [], !1, null, "3177ad9e", null);
            t.default = component.exports;
            installComponents(component, {
                HImage: r(165).default,
                HIcon: r(80).default
            })
        },
        1198: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1),
                n = r(7),
                c = r(0);

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

            function d(e) {
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
            const h = ["danger-dark", "primary-dark"],
                m = ["danger-light", "primary-light"];
            var f = n.a.extend({
                    name: "HDiscountTag",
                    props: {
                        color: {
                            type: String,
                            default: "danger-dark",
                            validator: Object(c.y)(h)
                        },
                        backgroundColor: {
                            type: String,
                            default: "danger-light",
                            validator: Object(c.y)(m)
                        }
                    },
                    computed: {
                        classes() {
                            return d(d({}, Object(c.f)("h-discount-tag-text", this.color, h)), Object(c.f)("h-discount-tag-bg", this.backgroundColor, m))
                        }
                    }
                }),
                v = (r(1195), r(5)),
                component = Object(v.a)(f, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("span", {
                        staticClass: "h-discount-tag t-body-2",
                        class: e.classes,
                        attrs: {
                            dir: e.direction
                        }
                    }, [e._t("default")], 2)
                }), [], !1, null, "1f4f97be", null);
            t.default = component.exports
        },
        1199: function(e, t, r) {
            var content = r(1249);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("630ee056", content, !0, {
                sourceMap: !1
            })
        },
        1200: function(e, t, r) {
            var content = r(1251);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("75f16c9a", content, !0, {
                sourceMap: !1
            })
        },
        1202: function(e, t, r) {
            "use strict";
            r(1173)
        },
        1203: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-3177ad9e]{display:none}@media(min-width:768px){.desktop-only[data-v-3177ad9e]{display:block}.mobile-only[data-v-3177ad9e]{display:none}}.h-features-review-card[data-v-3177ad9e]{border-radius:4px;display:flex;flex-direction:column;justify-content:space-between;padding:32px}.h-features-review-card__icon[data-v-3177ad9e]{margin-bottom:16px;max-width:224px}.h-features-review-card__bottom-wrapper[data-v-3177ad9e]{align-items:center;display:flex;justify-content:space-between;margin-top:16px}.h-features-review-card__bottom-wrapper a[data-v-3177ad9e]{display:flex}.h-features-review-card__bottom-icon[data-v-3177ad9e]{max-width:152px}.h-features-review-card--bg-dark .h-features-review-card__text[data-v-3177ad9e],.h-features-review-card--bg-primary-dark .h-features-review-card__text[data-v-3177ad9e]{color:#fff}.h-features-review-card--bg-ghost-white[data-v-3177ad9e]{background-color:#fafbff}.h-features-review-card--bg-white-blue[data-v-3177ad9e]{background-color:#f4f5ff}.h-features-review-card--bg-primary-dark[data-v-3177ad9e]{background-color:#5025d1}.h-features-review-card--bg-dark[data-v-3177ad9e]{background-color:#1d1e20}", ""]), o.locals = {}, e.exports = o
        },
        1204: function(e, t, r) {
            var content = r(1266);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("5af86502", content, !0, {
                sourceMap: !1
            })
        },
        1208: function(e, t, r) {
            "use strict";
            r(1175)
        },
        1209: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-5c7d0600]{display:none}@media(min-width:768px){.desktop-only[data-v-5c7d0600]{display:block}.mobile-only[data-v-5c7d0600]{display:none}}.h-form-field__icon .visibility-icon[data-v-5c7d0600]{cursor:pointer;pointer-events:auto}", ""]), o.locals = {}, e.exports = o
        },
        1210: function(e, t, r) {
            var content = r(1271);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("150b21fb", content, !0, {
                sourceMap: !1
            })
        },
        1211: function(e, t, r) {
            var content = r(1273);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("37a2d0c9", content, !0, {
                sourceMap: !1
            })
        },
        1213: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1);

            function n(object, e) {
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
                    i % 2 ? n(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : n(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var l = r(1158).a.extend({
                    name: "HInputField",
                    props: {
                        type: {
                            type: String,
                            default: "text"
                        },
                        placeholder: {
                            type: String,
                            default: ""
                        },
                        maxlength: {
                            type: Number,
                            default: void 0
                        },
                        helperText: {
                            type: String,
                            default: ""
                        }
                    },
                    data() {
                        return {
                            inputType: this.type,
                            isPassword: "password" === this.type,
                            activePasswordIcon: "ui-icons/ic-visibility"
                        }
                    },
                    computed: {
                        inputFieldClasses() {
                            return c(c({}, this.classes), {
                                "h-form-field__element--has-icon": "password" === this.type
                            })
                        },
                        visibilityIcon() {
                            return this.isPassword ? this.activePasswordIcon : ""
                        },
                        formMessage() {
                            return this.error ? this.errorMessage : this.helperText
                        },
                        formMessageType() {
                            return this.error ? "error" : ""
                        }
                    },
                    methods: {
                        iconClicked() {
                            if (this.isPassword) {
                                if ("password" === this.inputType) return this.inputType = "text", void(this.activePasswordIcon = "ui-icons/ic-visibility-off");
                                this.inputType = "password", this.activePasswordIcon = "ui-icons/ic-visibility"
                            }
                        }
                    }
                }),
                d = (r(1208), r(5)),
                component = Object(d.a)(l, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-form-field h-form-field--input",
                        class: e.direction,
                        attrs: {
                            dir: e.direction
                        }
                    }, [t("div", {
                        staticClass: "h-form-field__wrapper"
                    }, [t("HLabel", {
                        attrs: {
                            id: `${e.id}-label`,
                            label: e.label,
                            "for-attr": e.id,
                            value: e.valueModel,
                            focused: e.focused,
                            disabled: e.disabled,
                            error: !!e.error
                        }
                    }), e._v(" "), t("div", {
                        staticClass: "h-form-field__icon"
                    }, [e._t("icon", (function() {
                        return [e.visibilityIcon ? t("HIcon", {
                            staticClass: "visibility-icon",
                            attrs: {
                                icon: e.visibilityIcon,
                                color: "gray"
                            },
                            nativeOn: {
                                click: function(t) {
                                    return e.iconClicked.apply(null, arguments)
                                }
                            }
                        }) : e._e()]
                    }))], 2), e._v(" "), "checkbox" === e.inputType ? t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.valueModel,
                            expression: "valueModel"
                        }],
                        staticClass: "h-form-field__element",
                        class: e.inputFieldClasses,
                        attrs: {
                            id: e.id,
                            placeholder: e.placeholder,
                            maxlength: e.maxlength,
                            readonly: e.readonly,
                            disabled: e.disabled,
                            "aria-label": e.label,
                            "aria-labelledby": `${e.id}-label`,
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(e.valueModel) ? e._i(e.valueModel, null) > -1 : e.valueModel
                        },
                        on: {
                            mouseenter: function(t) {
                                e.hovered = !0
                            },
                            mouseleave: function(t) {
                                e.hovered = !1
                            },
                            focus: e.onFocus,
                            blur: e.onBlur,
                            change: function(t) {
                                var r = e.valueModel,
                                    o = t.target,
                                    n = !!o.checked;
                                if (Array.isArray(r)) {
                                    var c = e._i(r, null);
                                    o.checked ? c < 0 && (e.valueModel = r.concat([null])) : c > -1 && (e.valueModel = r.slice(0, c).concat(r.slice(c + 1)))
                                } else e.valueModel = n
                            }
                        }
                    }) : "radio" === e.inputType ? t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.valueModel,
                            expression: "valueModel"
                        }],
                        staticClass: "h-form-field__element",
                        class: e.inputFieldClasses,
                        attrs: {
                            id: e.id,
                            placeholder: e.placeholder,
                            maxlength: e.maxlength,
                            readonly: e.readonly,
                            disabled: e.disabled,
                            "aria-label": e.label,
                            "aria-labelledby": `${e.id}-label`,
                            type: "radio"
                        },
                        domProps: {
                            checked: e._q(e.valueModel, null)
                        },
                        on: {
                            mouseenter: function(t) {
                                e.hovered = !0
                            },
                            mouseleave: function(t) {
                                e.hovered = !1
                            },
                            focus: e.onFocus,
                            blur: e.onBlur,
                            change: function(t) {
                                e.valueModel = null
                            }
                        }
                    }) : t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.valueModel,
                            expression: "valueModel"
                        }],
                        staticClass: "h-form-field__element",
                        class: e.inputFieldClasses,
                        attrs: {
                            id: e.id,
                            placeholder: e.placeholder,
                            maxlength: e.maxlength,
                            readonly: e.readonly,
                            disabled: e.disabled,
                            "aria-label": e.label,
                            "aria-labelledby": `${e.id}-label`,
                            type: e.inputType
                        },
                        domProps: {
                            value: e.valueModel
                        },
                        on: {
                            mouseenter: function(t) {
                                e.hovered = !0
                            },
                            mouseleave: function(t) {
                                e.hovered = !1
                            },
                            focus: e.onFocus,
                            blur: e.onBlur,
                            input: function(t) {
                                t.target.composing || (e.valueModel = t.target.value)
                            }
                        }
                    })], 1), e._v(" "), e.displayError ? t("HFormMessage", {
                        attrs: {
                            message: e.formMessage,
                            type: e.formMessageType
                        }
                    }) : e._e(), e._v(" "), e._t("stepsValidator", (function() {
                        return [e.stepsValidator ? t("HStepsValidator", {
                            attrs: {
                                value: e.valueModel,
                                steps: e.stepsValidator
                            }
                        }) : e._e()]
                    }))], 2)
                }), [], !1, null, "5c7d0600", null);
            t.default = component.exports;
            installComponents(component, {
                HLabel: r(1156).default,
                HIcon: r(80).default,
                HFormMessage: r(1157).default,
                HStepsValidator: r(1245).default
            })
        },
        1214: function(e, t, r) {
            "use strict";
            r(1178)
        },
        1215: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-0be99a4e]{display:none}@media(min-width:768px){.desktop-only[data-v-0be99a4e]{display:block}.mobile-only[data-v-0be99a4e]{display:none}}[data-v-0be99a4e] b{font-size:inherit}.h-plan-feature[data-v-0be99a4e]{display:flex;justify-content:space-between}.h-plan-feature[data-v-0be99a4e]:not(:last-child){margin-bottom:12px}.h-plan-feature__content[data-v-0be99a4e]{display:flex;justify-content:flex-start;text-align:left}.h-plan-feature__content svg[data-v-0be99a4e]{flex-shrink:0;margin-right:8px}.h-plan-feature__tooltip[data-v-0be99a4e]{align-items:center;cursor:pointer;display:flex}.h-plan-feature[dir=rtl] .h-plan-feature__content svg[data-v-0be99a4e]{margin-left:8px;margin-right:0}", ""]), o.locals = {}, e.exports = o
        },
        1216: function(e, t, r) {
            "use strict";
            r(1179)
        },
        1217: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only{display:none}@media(min-width:768px){.desktop-only{display:block}.mobile-only{display:none}}.h-dynamic-size-price{font-size:48px}.h-dynamic-size-price .h-price{align-items:baseline;font-size:inherit}.h-dynamic-size-price.ready .h-price-block{font-size:1em}.h-dynamic-size-price.ready .h-price__currency{font-size:.6em}.h-dynamic-size-price.ready .h-price__number{font-size:1em}.h-dynamic-size-price.ready .h-price__suffix{font-size:.6em}", ""]), o.locals = {}, e.exports = o
        },
        1221: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(7).a.extend({
                    name: "HClientReviewCard",
                    props: {
                        data: {
                            type: Object,
                            required: !0
                        }
                    },
                    computed: {
                        authorImage() {
                            var e, t;
                            return (null === (t = null === (e = this.data) || void 0 === e ? void 0 : e.author) || void 0 === t ? void 0 : t.image) ? {
                                src: `/h-assets/images/client-stories/${this.data.author.image}-2x.png`,
                                alt: this.data.author.name
                            } : null
                        }
                    },
                    methods: {
                        getIconSizing: e => ({
                            viewBox: e.viewBox || "0 0 24 24",
                            height: e.height || 30,
                            width: e.width || 30
                        })
                    }
                }),
                n = (r(1272), r(5)),
                component = Object(n.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-review-card",
                        attrs: {
                            dir: e.direction
                        }
                    }, [t("div", {
                        staticClass: "h-review-card__top"
                    }, [t("div", {
                        staticClass: "h-review-card__icons-wrapper"
                    }, e._l(e.data.icons, (function(r, o) {
                        return t("HIcon", {
                            key: `h-review-icon-${o}`,
                            staticClass: "h-review-card__icon",
                            attrs: {
                                color: r.color,
                                icon: r.name,
                                "view-box": e.getIconSizing(r).viewBox,
                                size: {
                                    height: e.getIconSizing(r).height,
                                    width: e.getIconSizing(r).width
                                }
                            }
                        })
                    })), 1), e._v(" "), e.data.reviewHtml ? t("span", {
                        staticClass: "t-body-3 h-review-card__body",
                        domProps: {
                            innerHTML: e._s(e.data.reviewHtml)
                        }
                    }) : e._e(), e._v(" "), e.data.review ? t("p", {
                        staticClass: "t-body-3 h-review-card__body"
                    }, [e._v("\n      " + e._s(e.data.review) + "\n    ")]) : e._e(), e._v(" "), e.data.link ? t("a", {
                        staticClass: "t-button h-review-card__link",
                        attrs: {
                            href: e.data.link,
                            target: e.data.linkTarget,
                            rel: "noopener noreferrer nofollow"
                        }
                    }, [e._v(e._s(e.$t("components.clientReviews.fullStoryText")))]) : e._e()]), e._v(" "), t("div", {
                        staticClass: "h-review-card__bottom"
                    }, [e.authorImage ? t("div", {
                        staticClass: "h-review-card__bottom-left"
                    }, [t("HImage", {
                        attrs: {
                            image: e.authorImage
                        }
                    })], 1) : e._e(), e._v(" "), t("div", {
                        staticClass: "h-review-card__bottom-right"
                    }, [t("div", {
                        staticClass: "t-body-4"
                    }, [e._v("\n        " + e._s(e.data.author.name) + "\n      ")]), e._v(" "), t("div", {
                        staticClass: "t-body-3"
                    }, [e._v("\n        " + e._s(e.data.author.role || e.data.author.date) + "\n      ")])])])])
                }), [], !1, null, "6f4d1fa8", null);
            t.default = component.exports;
            installComponents(component, {
                HIcon: r(80).default,
                HImage: r(165).default
            })
        },
        1223: function(e, t, r) {
            var content = r(1280);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("a18e7ca8", content, !0, {
                sourceMap: !1
            })
        },
        1225: function(e, t, r) {
            var content = r(1284);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("5cf8cd8e", content, !0, {
                sourceMap: !1
            })
        },
        1227: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(7).a.extend({
                    name: "HPricingCardFeature",
                    inject: ["reverseHelpIcon"],
                    props: {
                        featureInfo: {
                            type: Object,
                            required: !0
                        }
                    },
                    methods: {
                        getTooltipPlacement() {
                            return "rtl" === this.direction ? "bottom-end" : "bottom-start"
                        },
                        getIconName: e => "disabled" === e ? "ui-icons/ic-cross" : "ui-icons/ic-check",
                        getIconColor(e) {
                            switch (e) {
                                case "limited":
                                    return "warning";
                                case "disabled":
                                    return "danger";
                                default:
                                    return "success"
                            }
                        }
                    }
                }),
                n = (r(1214), r(5)),
                component = Object(n.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-plan-feature",
                        attrs: {
                            dir: e.direction
                        }
                    }, [t("div", {
                        staticClass: "h-plan-feature__content"
                    }, [t("HIcon", {
                        attrs: {
                            icon: e.getIconName(e.featureInfo.checkmark),
                            color: e.getIconColor(e.featureInfo.checkmark),
                            size: {
                                height: 24,
                                width: 12
                            }
                        }
                    }), e._v(" "), t("div", {
                        staticClass: "t-body-3 h-plan-feature__content-text",
                        domProps: {
                            innerHTML: e._s(e.featureInfo.feature)
                        }
                    })], 1), e._v(" "), e.featureInfo.tooltip ? t("div", {
                        staticClass: "h-plan-feature__tooltip"
                    }, [t("HIcon", {
                        directives: [{
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: {
                                placement: e.getTooltipPlacement(),
                                content: e.featureInfo.tooltip,
                                boundariesElement: "h-pricing-card__container"
                            },
                            expression: "{\n        placement: getTooltipPlacement(),\n        content: featureInfo.tooltip,\n        boundariesElement: 'h-pricing-card__container',\n      }"
                        }],
                        class: {
                            "u-mirror-x": e.reverseHelpIcon()
                        },
                        attrs: {
                            icon: "ui-icons/ic-help",
                            color: "meteorite-dark",
                            "view-box": "0 0 24 24",
                            size: {
                                height: 20,
                                width: 20
                            }
                        }
                    })], 1) : e._e()])
                }), [], !1, null, "0be99a4e", null);
            t.default = component.exports;
            installComponents(component, {
                HIcon: r(80).default
            })
        },
        1228: function(e, t, r) {
            "use strict";
            r.r(t);
            r(127);
            var o = r(7).a.extend({
                    name: "HImageSectionOneCol",
                    props: {
                        section: {
                            type: Object
                        }
                    },
                    data() {
                        return {
                            image: {
                                src: this.section.imageSrc,
                                alt: this.$t(this.section.imageAlt)
                            }
                        }
                    },
                    computed: {
                        classes() {
                            var e;
                            return ["h-image-section-one-col", {
                                "h-image-section-one-col--with-padding": (null === (e = this.section) || void 0 === e ? void 0 : e.sectionBackgroundColor) && !["transparent", ""].includes(this.section.sectionBackgroundColor)
                            }]
                        }
                    }
                }),
                n = (r(1229), r(5)),
                component = Object(n.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        staticClass: "u-section-spaces"
                    }, [t("HSectionOneColumn", {
                        class: e.classes,
                        attrs: {
                            "background-color": e.section.sectionBackgroundColor
                        }
                    }, [e.section.overline ? t("span", {
                        staticClass: "h-image-section-one-col__overline t-body-uppercase"
                    }, [e._v("\n      " + e._s(e.$t(e.section.overline)) + "\n    ")]) : e._e(), e._v(" "), t("h2", [e._v(e._s(e.$t(e.section.heading)))]), e._v(" "), e.section.description ? t("p", [e._v(e._s(e.$t(e.section.description)))]) : e._e(), e._v(" "), t("HImage", {
                        staticClass: "h-image-section-one-col__image",
                        attrs: {
                            image: e.image
                        }
                    })], 1)], 1)
                }), [], !1, null, "8b2ece86", null);
            t.default = component.exports;
            installComponents(component, {
                HImage: r(165).default,
                HSectionOneColumn: r(526).default
            })
        },
        1229: function(e, t, r) {
            "use strict";
            r(1190)
        },
        1230: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-8b2ece86]{display:none}@media(min-width:768px){.desktop-only[data-v-8b2ece86]{display:block}.mobile-only[data-v-8b2ece86]{display:none}}.h-image-section-one-col[data-v-8b2ece86]{text-align:center}.h-image-section-one-col--with-padding[data-v-8b2ece86]{padding:64px 0}@media(min-width:768px){.h-image-section-one-col--with-padding[data-v-8b2ece86]{padding:80px 0}}@media(min-width:1025px){.h-image-section-one-col--with-padding[data-v-8b2ece86]{padding:96px 0}}.h-image-section-one-col__overline[data-v-8b2ece86]{color:#727586;display:block;margin-bottom:24px}.h-image-section-one-col p[data-v-8b2ece86]{margin-top:16px}@media(min-width:768px){.h-image-section-one-col p[data-v-8b2ece86]{margin-top:24px}}@media(min-width:1025px){.h-image-section-one-col p[data-v-8b2ece86]{margin-top:32px}}.h-image-section-one-col__image[data-v-8b2ece86]{margin-top:32px}@media(min-width:768px){.h-image-section-one-col__image[data-v-8b2ece86]{margin-top:40px}}@media(min-width:1025px){.h-image-section-one-col__image[data-v-8b2ece86]{margin-top:48px}}", ""]), o.locals = {}, e.exports = o
        },
        1231: function(e, t, r) {
            "use strict";
            r(1191)
        },
        1232: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-36ccdca2]{display:none}@media(min-width:768px){.desktop-only[data-v-36ccdca2]{display:block}.mobile-only[data-v-36ccdca2]{display:none}}.h-features-reviews-section__overline[data-v-36ccdca2]{color:#727586;display:inline-block;margin-bottom:24px}.h-features-reviews-section__description[data-v-36ccdca2]{margin-bottom:24px}@media(min-width:1025px){.h-features-reviews-section__description[data-v-36ccdca2]{margin-top:8px}}.h-features-reviews-section h2[data-v-36ccdca2]{margin-bottom:24px}@media(min-width:1025px){.h-features-reviews-section h2[data-v-36ccdca2]{margin-bottom:32px}}.h-features-reviews-section__features-wrapper[data-v-36ccdca2]{display:flex;margin-bottom:16px}@media(min-width:768px){.h-features-reviews-section__features-wrapper[data-v-36ccdca2]{margin-bottom:24px}}.h-features-reviews-section__features-wrapper[data-v-36ccdca2]:last-child{margin-bottom:0}.h-features-reviews-section__link-wrapper[data-v-36ccdca2]{margin-top:32px}@media(max-width:767px){.h-features-reviews-section__link-wrapper[data-v-36ccdca2] .h-button{margin-left:auto;margin-right:auto}}@media(min-width:768px){.h-features-reviews-section__link-wrapper[data-v-36ccdca2]{margin-top:40px;width:264px}}@media(min-width:1025px){.h-features-reviews-section__link-wrapper[data-v-36ccdca2]{margin-top:24px}.h-features-reviews-section__link-wrapper[data-v-36ccdca2] .h-button{margin-top:48px}}.h-features-reviews-section__feature-text[data-v-36ccdca2]{color:#727586;margin-left:8px}.h-features-reviews-section__feature-badge[data-v-36ccdca2]{display:flex!important;margin-top:4px}.h-features-reviews-section__feature-tooltip-icon[data-v-36ccdca2]{cursor:pointer;margin-left:8px}.h-features-reviews-section__feature-check-icon[data-v-36ccdca2],.h-features-reviews-section__feature-tooltip-icon[data-v-36ccdca2]{flex-shrink:0}.h-features-reviews-section__reviews-wrapper[data-v-36ccdca2]{padding:0;row-gap:16px}@media(min-width:768px){.h-features-reviews-section__reviews-wrapper[data-v-36ccdca2]{row-gap:24px}}.h-features-reviews-section--bg-meteorite-dark .h-features-reviews-section__feature-text[data-v-36ccdca2],.h-features-reviews-section--bg-meteorite-dark h2[data-v-36ccdca2],.h-features-reviews-section--bg-primary .h-features-reviews-section__feature-text[data-v-36ccdca2],.h-features-reviews-section--bg-primary h2[data-v-36ccdca2]{color:#fff}.h-features-reviews-section--bg-meteorite-dark .h-features-reviews-section__overline[data-v-36ccdca2]{color:#dadce0;opacity:.6}", ""]), o.locals = {}, e.exports = o
        },
        1233: function(e, t, r) {
            "use strict";
            r.r(t);
            r(127);
            var o = r(1),
                n = r(7),
                c = r(0);

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
            const d = ["light", "black", "ghost-white", "primary", "meteorite-dark"];
            var h = n.a.extend({
                    name: "HFeaturesReviewsSection",
                    inject: ["reverseHelpIcon"],
                    props: {
                        data: {
                            type: Object,
                            required: !0
                        },
                        backgroundColor: {
                            type: String,
                            default: "light",
                            validator: Object(c.y)(d)
                        },
                        cardBackgroundColor: {
                            type: String,
                            default: "ghost-white",
                            validator: Object(c.y)(["ghost-white", "white-blue", "primary-dark", "meteorite-dark", "dark", "black"])
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
                            }({}, Object(c.f)("h-features-reviews-section--bg", this.backgroundColor, d))
                        },
                        isBackgroundDark() {
                            return "primary" === this.backgroundColor
                        }
                    },
                    methods: {
                        getFeatureIconColor(e) {
                            return e.badgeText ? "meteorite" : this.isBackgroundDark ? "light" : "success"
                        }
                    }
                }),
                m = h,
                f = (r(1231), r(5)),
                component = Object(f.a)(m, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("HMultiTextsSection", {
                        staticClass: "h-features-reviews-section",
                        class: e.classes,
                        attrs: {
                            data: [e.data],
                            "background-color": e.backgroundColor
                        },
                        scopedSlots: e._u([{
                            key: "left-column",
                            fn: function() {
                                return [e.data.overline ? t("span", {
                                    staticClass: "h-features-reviews-section__overline t-body-uppercase"
                                }, [e._v("\n      " + e._s(e.data.overline) + "\n    ")]) : e._e(), e._v(" "), t("h2", [e._v(e._s(e.data.heading))]), e._v(" "), e.data.description ? t("p", {
                                    staticClass: "h-features-reviews-section__description"
                                }, [e._v("\n      " + e._s(e.data.description) + "\n    ")]) : e._e(), e._v(" "), e._l(e.data.featuresList, (function(r, o) {
                                    return t("div", {
                                        key: `feature-${o}`,
                                        staticClass: "h-features-reviews-section__features-wrapper"
                                    }, [t("HIcon", {
                                        staticClass: "h-features-reviews-section__feature-check-icon",
                                        attrs: {
                                            icon: "ui-icons/ic-check",
                                            color: e.getFeatureIconColor(r),
                                            size: {
                                                height: 24,
                                                width: 12
                                            }
                                        }
                                    }), e._v(" "), t("div", {
                                        staticClass: "h-features-reviews-section__feature-text"
                                    }, [t("p", {
                                        domProps: {
                                            innerHTML: e._s(r.text)
                                        }
                                    }), e._v(" "), r.badgeText ? t("HSimpleBadge", {
                                        staticClass: "h-features-reviews-section__feature-badge"
                                    }, [e._v("\n          " + e._s(r.badgeText) + "\n        ")]) : e._e()], 1), e._v(" "), r.tooltip ? t("HIcon", {
                                        directives: [{
                                            name: "tooltip",
                                            rawName: "v-tooltip.bottom-start",
                                            value: {
                                                content: r.tooltip,
                                                boundariesElement: "h-features-reviews-section"
                                            },
                                            expression: "{\n          content: feature.tooltip,\n          boundariesElement: 'h-features-reviews-section',\n        }",
                                            modifiers: {
                                                "bottom-start": !0
                                            }
                                        }],
                                        staticClass: "h-features-reviews-section__feature-tooltip-icon",
                                        class: {
                                            "u-mirror-x": e.reverseHelpIcon()
                                        },
                                        attrs: {
                                            icon: "ui-icons/ic-help",
                                            color: e.isBackgroundDark ? "light" : "gray",
                                            "view-box": "0 0 24 24",
                                            size: {
                                                height: 24,
                                                width: 20
                                            }
                                        }
                                    }) : e._e()], 1)
                                })), e._v(" "), e.$slots.button ? t("div", {
                                    staticClass: "h-features-reviews-section__link-wrapper"
                                }, [e._t("button")], 2) : e._e()]
                            },
                            proxy: !0
                        }, e.data.reviewCards ? {
                            key: "bottom-row",
                            fn: function() {
                                return [t("div", {
                                    staticClass: "h-features-reviews-section__reviews-wrapper h-grid h-grid--cols-m-1 h-grid--cols-d-3"
                                }, e._l(e.data.reviewCards, (function(r, o) {
                                    return t("HFeaturesReviewCard", {
                                        key: `review_card-${o}`,
                                        staticClass: "h-grid-item",
                                        attrs: {
                                            data: r,
                                            "background-color": e.cardBackgroundColor
                                        }
                                    })
                                })), 1)]
                            },
                            proxy: !0
                        } : null], null, !0)
                    })
                }), [], !1, null, "36ccdca2", null);
            t.default = component.exports;
            installComponents(component, {
                HIcon: r(80).default,
                HSimpleBadge: r(1182).default,
                HFeaturesReviewCard: r(1197).default,
                HMultiTextsSection: r(1145).default
            })
        },
        1237: function(e, t, r) {
            var content = r(1299);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("77ae7045", content, !0, {
                sourceMap: !1
            })
        },
        1238: function(e, t, r) {
            "use strict";
            r(1194)
        },
        1239: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-f77e4ca6]{display:none}@media(min-width:768px){.desktop-only[data-v-f77e4ca6]{display:block}.mobile-only[data-v-f77e4ca6]{display:none}}.h-countdown__sections-wrapper[data-v-f77e4ca6]{display:inline-flex}.h-countdown-card--dark[data-v-f77e4ca6],.h-countdown-card--dark>*[data-v-f77e4ca6],.h-countdown-text--dark[data-v-f77e4ca6],.h-countdown-text--dark>*[data-v-f77e4ca6]{color:#1d1e20}.h-countdown-card--light[data-v-f77e4ca6],.h-countdown-card--light>*[data-v-f77e4ca6],.h-countdown-text--light[data-v-f77e4ca6],.h-countdown-text--light>*[data-v-f77e4ca6]{color:#fff}.h-countdown-card--gray[data-v-f77e4ca6],.h-countdown-card--gray>*[data-v-f77e4ca6],.h-countdown-text--gray[data-v-f77e4ca6],.h-countdown-text--gray>*[data-v-f77e4ca6]{color:#727586}.h-countdown-card--primary[data-v-f77e4ca6],.h-countdown-card--primary>*[data-v-f77e4ca6],.h-countdown-text--primary[data-v-f77e4ca6],.h-countdown-text--primary>*[data-v-f77e4ca6]{color:#673de6}.h-countdown-card--primary-hoster-blue[data-v-f77e4ca6],.h-countdown-card--primary-hoster-blue>*[data-v-f77e4ca6],.h-countdown-text--primary-hoster-blue[data-v-f77e4ca6],.h-countdown-text--primary-hoster-blue>*[data-v-f77e4ca6]{color:#007aff}.h-countdown-card--meteorite[data-v-f77e4ca6],.h-countdown-card--meteorite>*[data-v-f77e4ca6],.h-countdown-text--meteorite[data-v-f77e4ca6],.h-countdown-text--meteorite>*[data-v-f77e4ca6]{color:#8c85ff}.h-countdown-card--danger[data-v-f77e4ca6],.h-countdown-card--danger>*[data-v-f77e4ca6],.h-countdown-text--danger[data-v-f77e4ca6],.h-countdown-text--danger>*[data-v-f77e4ca6]{color:#fc5185}.h-countdown-card--success[data-v-f77e4ca6],.h-countdown-card--success>*[data-v-f77e4ca6],.h-countdown-text--success[data-v-f77e4ca6],.h-countdown-text--success>*[data-v-f77e4ca6]{color:#00b090}.h-countdown-card--warning[data-v-f77e4ca6],.h-countdown-card--warning>*[data-v-f77e4ca6],.h-countdown-text--warning[data-v-f77e4ca6],.h-countdown-text--warning>*[data-v-f77e4ca6]{color:#ffcd35}.h-countdown-card--meteorite-dark[data-v-f77e4ca6],.h-countdown-card--meteorite-dark>*[data-v-f77e4ca6],.h-countdown-text--meteorite-dark[data-v-f77e4ca6],.h-countdown-text--meteorite-dark>*[data-v-f77e4ca6]{color:#2f1c6a}.h-countdown__title[data-v-f77e4ca6]{margin-bottom:8px}.h-countdown__section[data-v-f77e4ca6]{display:inline-flex}.h-countdown__section:last-child>.h-countdown__colon[data-v-f77e4ca6]{display:none}.h-countdown__value[data-v-f77e4ca6]{align-items:center;display:flex;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none}.h-countdown__card[data-v-f77e4ca6]{align-items:center;background:#fff;border:1px solid #d5dfff;border-radius:6px;display:flex;font-size:24px;font-weight:500;height:64px;justify-content:center;width:64px}.h-countdown__colon[data-v-f77e4ca6]{font-size:18px;margin:16px 4px 0;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(min-width:1367px){.h-countdown__colon[data-v-f77e4ca6]{margin:16px 8px 0}}", ""]), o.locals = {}, e.exports = o
        },
        1243: function(e, t, r) {
            var content = r(1307);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("00780283", content, !0, {
                sourceMap: !1
            })
        },
        1245: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(7).a.extend({
                    name: "HStepsValidator",
                    props: {
                        value: {
                            type: String,
                            default: ""
                        },
                        steps: {
                            type: Array,
                            required: !0
                        }
                    }
                }),
                n = (r(1279), r(5)),
                component = Object(n.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-steps-validator"
                    }, e._l(e.steps, (function(r, o) {
                        return t("div", {
                            key: o,
                            staticClass: "h-steps-validator__step"
                        }, [t("HValidatorStep", {
                            key: `validator-step-${o}`,
                            attrs: {
                                value: e.value,
                                validator: r
                            }
                        })], 1)
                    })), 0)
                }), [], !1, null, "3962d4b7", null);
            t.default = component.exports;
            installComponents(component, {
                HValidatorStep: r(1276).default
            })
        },
        1246: function(e, t, r) {
            "use strict";
            r.r(t);
            r(16), r(29);
            var o = r(7);
            var n = o.a.extend({
                    name: "HCountdown",
                    props: {
                        date: {
                            type: [String, Number],
                            required: !0
                        },
                        textColor: {
                            type: String,
                            default: "meteorite-dark"
                        },
                        cardColor: {
                            type: String,
                            default: "meteorite-dark"
                        },
                        periods: {
                            type: Object,
                            default: () => ({
                                days: "days",
                                hours: "hours",
                                minutes: "minutes",
                                seconds: "seconds"
                            })
                        },
                        utcFormat: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: () => ({
                        now: Math.trunc((new Date).getTime() / 1e3)
                    }),
                    computed: {
                        dateInMs() {
                            if ("number" == typeof this.date) return Math.trunc(this.date / 1e3);
                            const e = this.date || "1970-1-1 0:00",
                                t = this.utcFormat ? e + " GMT" : e;
                            return Math.trunc(Date.parse(t.replace(/-/g, "/")) / 1e3)
                        },
                        seconds() {
                            const e = (this.dateInMs - this.now) % 60;
                            return this.formatValue(e)
                        },
                        minutes() {
                            const e = Math.trunc((this.dateInMs - this.now) / 60) % 60;
                            return this.formatValue(e)
                        },
                        hours() {
                            const e = Math.trunc((this.dateInMs - this.now) / 60 / 60) % 24;
                            return this.formatValue(e)
                        },
                        days() {
                            const e = Math.trunc((this.dateInMs - this.now) / 60 / 60 / 24);
                            return this.formatValue(e)
                        },
                        timePeriods() {
                            return [{
                                name: this.periods.days,
                                value: this.days
                            }, {
                                name: this.periods.hours,
                                value: this.hours
                            }, {
                                name: this.periods.minutes,
                                value: this.minutes
                            }, {
                                name: this.periods.seconds,
                                value: this.seconds
                            }]
                        }
                    },
                    mounted() {
                        const e = setInterval((() => {
                            this.now = Math.trunc((new Date).getTime() / 1e3)
                        }), 1e3);
                        this.$once("hook:beforeDestroy", (() => {
                            clearInterval(e)
                        }))
                    },
                    methods: {
                        formatValue(e) {
                            const t = e.toString();
                            return this.date ? e < 0 ? "00" : t.length <= 1 ? `0${e}` : t : "-"
                        }
                    }
                }),
                c = (r(1238), r(5)),
                component = Object(c.a)(n, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-countdown",
                        attrs: {
                            dir: e.direction
                        }
                    }, [e.$slots.default ? t("div", {
                        class: [`h-countdown__title h-countdown-text--${e.textColor}`]
                    }, [e._t("default")], 2) : e._e(), e._v(" "), t("div", {
                        staticClass: "h-countdown__sections-wrapper"
                    }, e._l(e.timePeriods, (function(r, o) {
                        return t("div", {
                            key: o,
                            staticClass: "h-countdown__section"
                        }, [t("div", {
                            staticClass: "h-countdown__value"
                        }, [t("div", {
                            class: `h-countdown__card h-countdown-card--${e.cardColor}`
                        }, [e._v("\n          " + e._s(r.value) + "\n        ")]), e._v(" "), t("span", {
                            class: `t-body-3 h-countdown__card-name h-countdown-text--${e.textColor}`
                        }, [e._v("\n          " + e._s(r.name) + "\n        ")])]), e._v(" "), t("span", {
                            class: `h-countdown__colon h-countdown-text--${e.textColor}`
                        }, [e._v("\n        :\n      ")])])
                    })), 0)])
                }), [], !1, null, "f77e4ca6", null);
            t.default = component.exports
        },
        1248: function(e, t, r) {
            "use strict";
            r(1199)
        },
        1249: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-6bd99e6a]{display:none}@media(min-width:768px){.desktop-only[data-v-6bd99e6a]{display:block}.mobile-only[data-v-6bd99e6a]{display:none}}.h-single-pricing-table-section__info[data-v-6bd99e6a]{margin-bottom:32px;text-align:center}@media(min-width:768px){.h-single-pricing-table-section__info[data-v-6bd99e6a]{margin-bottom:40px}}@media(min-width:1025px){.h-single-pricing-table-section__info[data-v-6bd99e6a]{margin-bottom:48px}}.h-single-pricing-table-section__description[data-v-6bd99e6a]{margin-top:16px}@media(min-width:768px){.h-single-pricing-table-section__description[data-v-6bd99e6a]{margin-top:24px}}@media(min-width:1025px){.h-single-pricing-table-section__description[data-v-6bd99e6a]{margin-top:32px}}", ""]), o.locals = {}, e.exports = o
        },
        1250: function(e, t, r) {
            "use strict";
            r(1200)
        },
        1251: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-5ef5eb70]{display:none}@media(min-width:768px){.desktop-only[data-v-5ef5eb70]{display:block}.mobile-only[data-v-5ef5eb70]{display:none}}.h-single-pricing-table[data-v-5ef5eb70]{border:1px solid #d5dfff;border-radius:4px}.h-single-pricing-table__features[data-v-5ef5eb70]{padding:32px 24px 0}@media(min-width:768px){.h-single-pricing-table__features[data-v-5ef5eb70]{margin-bottom:40px;padding:40px 24px 0}}@media(min-width:1025px){.h-single-pricing-table__features[data-v-5ef5eb70]{margin-bottom:40px;padding:40px 32px 0}}.h-single-pricing-table__expanded-features[data-v-5ef5eb70],.h-single-pricing-table__main-features[data-v-5ef5eb70]{display:grid}.h-single-pricing-table__main-features[data-v-5ef5eb70]{margin-bottom:32px}@media(min-width:768px){.h-single-pricing-table__main-features[data-v-5ef5eb70]{margin-bottom:40px}}.h-single-pricing-table__top-column--features[data-v-5ef5eb70]{display:none;flex-direction:column;justify-content:center}.h-single-pricing-table__top-column--features[data-v-5ef5eb70]:last-child{display:flex}@media(max-width:767px){.h-single-pricing-table__top-column--features[data-v-5ef5eb70]{margin-top:32px}}@media(min-width:768px){.h-single-pricing-table__top-column--features[data-v-5ef5eb70]{margin-left:23px}}@media(min-width:1025px){.h-single-pricing-table__top-column--features[data-v-5ef5eb70]:first-child{display:flex;margin-left:0;margin-right:57px}.h-single-pricing-table__top-column--features[data-v-5ef5eb70]:last-child{margin-left:57px}}@media(max-width:767px){.h-single-pricing-table__top-column--product-info[data-v-5ef5eb70]{border-bottom:1px solid #d5dfff;padding-bottom:32px}}@media(min-width:768px){.h-single-pricing-table__top-column--product-info[data-v-5ef5eb70]{border-right:1px solid #d5dfff;padding-right:24px}}@media(min-width:1025px){.h-single-pricing-table__top-column--product-info[data-v-5ef5eb70]{border-left:1px solid #d5dfff;padding-right:0}}@media(min-width:768px){.h-single-pricing-table__bottom-column[data-v-5ef5eb70]:first-child{border-right:1px solid #d5dfff;padding-right:23px}.h-single-pricing-table__bottom-column[data-v-5ef5eb70]:last-child{margin-left:23px}}@media(min-width:1025px){.h-single-pricing-table__bottom-column[data-v-5ef5eb70]:first-child{border-right:none;margin-right:57px;padding-right:0}.h-single-pricing-table__bottom-column[data-v-5ef5eb70]:nth-child(3n+2){border-left:1px solid #d5dfff;border-right:1px solid #d5dfff;padding:0 32px}.h-single-pricing-table__bottom-column[data-v-5ef5eb70]:last-child{margin-left:57px}}.h-single-pricing-table__see-all-features[data-v-5ef5eb70]{border-top:1px solid #d5dfff;display:flex;justify-content:center;padding:12px 0}@media(min-width:768px){.h-single-pricing-table__see-all-features[data-v-5ef5eb70]{padding:16px 0}}@media(min-width:1025px){.h-single-pricing-table__see-all-features[data-v-5ef5eb70]{padding:24px 0}}.h-single-pricing-table__see-all-features-button[data-v-5ef5eb70]{align-items:center;color:#673de6;cursor:pointer;display:flex;font-weight:700}.h-single-pricing-table__see-all-features-icon[data-v-5ef5eb70]{margin-left:4px;transition:.5s}.h-single-pricing-table__see-all-features-icon--active[data-v-5ef5eb70]{transform:rotate(180deg)}.h-single-pricing-table--all-features-visible .h-single-pricing-table__main-features[data-v-5ef5eb70]{margin-bottom:12px}.h-single-pricing-table--all-features-visible .h-single-pricing-table__expanded-features[data-v-5ef5eb70]{margin-bottom:32px}@media(min-width:768px){.h-single-pricing-table[dir=rtl] .h-single-pricing-table__top-column--features[data-v-5ef5eb70]{margin-left:0;margin-right:23px}}@media(min-width:1025px){.h-single-pricing-table[dir=rtl] .h-single-pricing-table__top-column--features[data-v-5ef5eb70]:first-child{margin-left:57px;margin-right:0}.h-single-pricing-table[dir=rtl] .h-single-pricing-table__top-column--features[data-v-5ef5eb70]:last-child{margin-left:0;margin-right:57px}}@media(min-width:768px){.h-single-pricing-table[dir=rtl] .h-single-pricing-table__top-column--product-info[data-v-5ef5eb70]{border-left:1px solid #d5dfff;border-right:none;padding-left:24px;padding-right:0}}@media(min-width:1025px){.h-single-pricing-table[dir=rtl] .h-single-pricing-table__top-column--product-info[data-v-5ef5eb70]{border-right:1px solid #d5dfff;padding-left:0}}@media(min-width:768px){.h-single-pricing-table[dir=rtl] .h-single-pricing-table__bottom-column[data-v-5ef5eb70]:first-child{border-left:1px solid #d5dfff;border-right:none;padding-left:23px;padding-right:0}.h-single-pricing-table[dir=rtl] .h-single-pricing-table__bottom-column[data-v-5ef5eb70]:last-child{margin-left:0;margin-right:23px}}@media(min-width:1025px){.h-single-pricing-table[dir=rtl] .h-single-pricing-table__bottom-column[data-v-5ef5eb70]:first-child{border-left:none;margin-left:57px;margin-right:0;padding-left:0}.h-single-pricing-table[dir=rtl] .h-single-pricing-table__bottom-column[data-v-5ef5eb70]:last-child{margin-left:0;margin-right:57px}}.h-single-pricing-table[dir=rtl] .h-single-pricing-table__see-all-features-icon[data-v-5ef5eb70]{margin-left:0;margin-right:4px}.h-single-pricing-table__payment-terms[data-v-5ef5eb70]{margin-top:32px}.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70]{color:#fff}.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-plan-feature__content svg,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-plan-feature__tooltip svg,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-single-pricing-table__see-all-features-button svg{fill:#fff}.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-price--text-meteorite-dark .h-price__currency,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-price--text-meteorite-dark .h-price__number,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-price--text-meteorite-dark .h-price__suffix,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-product-info__offer-description,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-single-pricing-table__see-all-features-button{color:#fff}.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-price--text-gray .h-price__currency,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-price--text-gray .h-price__number,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-price--text-gray .h-price__suffix,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-product-info__renewal-price{color:#fff;opacity:.8}.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70]{background-color:#5025d1}", ""]), o.locals = {}, e.exports = o
        },
        1254: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1);

            function n(object, e) {
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
                    i % 2 ? n(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : n(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var l = r(7).a.extend({
                    name: "HProductFeatureItem",
                    props: {
                        name: {
                            type: String,
                            required: !0,
                            validator: e => [{
                                name: "sslCertificate",
                                icon: "product-feature-icons/ic-ssl-certificate"
                            }, {
                                name: "unlimitedSslCertificates",
                                icon: "product-feature-icons/ic-ssl-certificate"
                            }, {
                                name: "accessManagement",
                                icon: "product-feature-icons/ic-access-management"
                            }, {
                                name: "liteSpeedWp",
                                icon: "product-feature-icons/ic-lite-speed-wp"
                            }, {
                                name: "phpVersionControl",
                                icon: "product-feature-icons/ic-php-version-control"
                            }, {
                                name: "phpSpeedBoost",
                                icon: "product-feature-icons/ic-php-version-control"
                            }, {
                                name: "ecommerceOptimization",
                                icon: "product-feature-icons/ic-ecommerce-optimization"
                            }, {
                                name: "wpInstallation",
                                icon: "product-feature-icons/ic-wp-installation"
                            }, {
                                name: "wpCliSsh",
                                icon: "product-feature-icons/ic-wp-cli-ssh"
                            }, {
                                name: "freeMigration",
                                icon: "product-feature-icons/ic-free-migration"
                            }, {
                                name: "customerSupport",
                                icon: "product-feature-icons/ic-customer-support"
                            }, {
                                name: "gitIntegration",
                                icon: "product-feature-icons/ic-git-integration"
                            }, {
                                name: "regularBackups",
                                icon: "product-feature-icons/ic-backups"
                            }, {
                                name: "multilingualChat",
                                icon: "product-feature-icons/ic-customer-support"
                            }, {
                                name: "automaticWpUpdates",
                                icon: "product-feature-icons/ic-wordpress"
                            }, {
                                name: "weeklyBackups",
                                icon: "product-feature-icons/ic-backups"
                            }, {
                                name: "uptimeGuarantee",
                                icon: "product-feature-icons/ic-uptime-guarantee"
                            }, {
                                name: "optimizedForWordpress",
                                icon: "product-feature-icons/ic-wordpress"
                            }, {
                                name: "ddosProtection",
                                icon: "product-feature-icons/ic-ddos-protection"
                            }, {
                                name: "professionalEmail",
                                icon: "product-feature-icons/ic-professional-email"
                            }, {
                                name: "autoScriptInstaller",
                                icon: "product-feature-icons/ic-professional-email"
                            }, {
                                name: "unlimitedBandwidth",
                                icon: "product-feature-icons/ic-unlimited-bandwidth"
                            }, {
                                name: "freeDomain",
                                icon: "product-feature-icons/ic-free-domain"
                            }, {
                                name: "cloudflareCdn",
                                icon: "product-feature-icons/ic-cloudflare-cdn"
                            }, {
                                name: "premiumFeatures",
                                icon: "product-feature-icons/ic-premium-features"
                            }, {
                                name: "freeEmail",
                                icon: "product-feature-icons/ic-free-email"
                            }, {
                                name: "moneyBack",
                                icon: "product-feature-icons/ic-money-back"
                            }, {
                                name: "fastServers",
                                icon: "product-feature-icons/ic-fast-servers"
                            }, {
                                name: "ssdStorage",
                                icon: "product-feature-icons/ic-ssd-storage"
                            }, {
                                name: "unmeteredTraffic",
                                icon: "product-feature-icons/ic-unmetered-traffic"
                            }, {
                                name: "smoothOnboarding",
                                icon: "product-feature-icons/ic-smooth-onboarding"
                            }, {
                                name: "extraSecurity",
                                icon: "product-feature-icons/ic-extra-security"
                            }].map((e => e.name)).includes(e)
                        }
                    },
                    computed: {
                        data() {
                            const e = [{
                                name: "sslCertificate",
                                icon: "product-feature-icons/ic-ssl-certificate"
                            }, {
                                name: "unlimitedSslCertificates",
                                icon: "product-feature-icons/ic-ssl-certificate"
                            }, {
                                name: "accessManagement",
                                icon: "product-feature-icons/ic-access-management"
                            }, {
                                name: "liteSpeedWp",
                                icon: "product-feature-icons/ic-lite-speed-wp"
                            }, {
                                name: "phpVersionControl",
                                icon: "product-feature-icons/ic-php-version-control"
                            }, {
                                name: "phpSpeedBoost",
                                icon: "product-feature-icons/ic-php-version-control"
                            }, {
                                name: "ecommerceOptimization",
                                icon: "product-feature-icons/ic-ecommerce-optimization"
                            }, {
                                name: "wpInstallation",
                                icon: "product-feature-icons/ic-wp-installation"
                            }, {
                                name: "wpCliSsh",
                                icon: "product-feature-icons/ic-wp-cli-ssh"
                            }, {
                                name: "freeMigration",
                                icon: "product-feature-icons/ic-free-migration"
                            }, {
                                name: "customerSupport",
                                icon: "product-feature-icons/ic-customer-support"
                            }, {
                                name: "gitIntegration",
                                icon: "product-feature-icons/ic-git-integration"
                            }, {
                                name: "regularBackups",
                                icon: "product-feature-icons/ic-backups"
                            }, {
                                name: "multilingualChat",
                                icon: "product-feature-icons/ic-customer-support"
                            }, {
                                name: "automaticWpUpdates",
                                icon: "product-feature-icons/ic-wordpress"
                            }, {
                                name: "weeklyBackups",
                                icon: "product-feature-icons/ic-backups"
                            }, {
                                name: "uptimeGuarantee",
                                icon: "product-feature-icons/ic-uptime-guarantee"
                            }, {
                                name: "optimizedForWordpress",
                                icon: "product-feature-icons/ic-wordpress"
                            }, {
                                name: "ddosProtection",
                                icon: "product-feature-icons/ic-ddos-protection"
                            }, {
                                name: "professionalEmail",
                                icon: "product-feature-icons/ic-professional-email"
                            }, {
                                name: "autoScriptInstaller",
                                icon: "product-feature-icons/ic-professional-email"
                            }, {
                                name: "unlimitedBandwidth",
                                icon: "product-feature-icons/ic-unlimited-bandwidth"
                            }, {
                                name: "freeDomain",
                                icon: "product-feature-icons/ic-free-domain"
                            }, {
                                name: "cloudflareCdn",
                                icon: "product-feature-icons/ic-cloudflare-cdn"
                            }, {
                                name: "premiumFeatures",
                                icon: "product-feature-icons/ic-premium-features"
                            }, {
                                name: "freeEmail",
                                icon: "product-feature-icons/ic-free-email"
                            }, {
                                name: "moneyBack",
                                icon: "product-feature-icons/ic-money-back"
                            }, {
                                name: "fastServers",
                                icon: "product-feature-icons/ic-fast-servers"
                            }, {
                                name: "ssdStorage",
                                icon: "product-feature-icons/ic-ssd-storage"
                            }, {
                                name: "unmeteredTraffic",
                                icon: "product-feature-icons/ic-unmetered-traffic"
                            }, {
                                name: "smoothOnboarding",
                                icon: "product-feature-icons/ic-smooth-onboarding"
                            }, {
                                name: "extraSecurity",
                                icon: "product-feature-icons/ic-extra-security"
                            }].find((e => e.name === this.name));
                            if (!e) throw new Error(`Icon for '${this.name}' feature not found`);
                            return c(c({}, e), {}, {
                                value: `components.productFeatureList.${null==e?void 0:e.name}`
                            })
                        }
                    }
                }),
                d = (r(1306), r(5)),
                component = Object(d.a)(l, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-product-feature-list-item",
                        attrs: {
                            dir: e.direction
                        }
                    }, [t("HIcon", {
                        staticClass: "h-product-feature-list-item__icon",
                        attrs: {
                            icon: e.data.icon,
                            size: {
                                height: 40,
                                width: 40
                            }
                        }
                    }), e._v(" "), t("span", {
                        staticClass: "t-body-4"
                    }, [e._v(e._s(e.$t(e.data.value)))])], 1)
                }), [], !1, null, "9d4f98c2", null);
            t.default = component.exports;
            installComponents(component, {
                HIcon: r(80).default
            })
        },
        1255: function(e, t, r) {
            "use strict";
            r.r(t);
            r(127);
            var o = r(7),
                n = r(0);
            var c = o.a.extend({
                    name: "HSinglePricingTableSection",
                    props: {
                        title: {
                            type: String,
                            default: ""
                        },
                        description: {
                            type: String,
                            default: ""
                        },
                        backgroundColor: {
                            type: String,
                            default: "transparent",
                            validator: Object(n.y)(["transparent", "primary-dark"])
                        },
                        product: {
                            type: Object,
                            required: !0
                        },
                        tableSlug: {
                            type: String,
                            default: ""
                        },
                        showSaleOffer: Boolean
                    }
                }),
                l = (r(1248), r(5)),
                component = Object(l.a)(c, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-single-pricing-table-section u-section-spaces"
                    }, [e.title ? t("div", {
                        staticClass: "h-single-pricing-table-section__info h-grid"
                    }, [t("h2", [e._v(e._s(e.title))]), e._v(" "), e.description ? t("p", {
                        staticClass: "h-single-pricing-table-section__description"
                    }, [e._v("\n      " + e._s(e.description) + "\n    ")]) : e._e()]) : e._e(), e._v(" "), t("HSinglePricingTable", {
                        attrs: {
                            product: e.product,
                            "table-slug": e.tableSlug,
                            "show-sale-offer": e.showSaleOffer,
                            "background-color": e.backgroundColor
                        }
                    }), e._v(" "), e._t("footer")], 2)
                }), [], !1, null, "6bd99e6a", null);
            t.default = component.exports;
            installComponents(component, {
                HSinglePricingTable: r(1256).default
            })
        },
        1256: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1);

            function n(object, e) {
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
                    i % 2 ? n(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : n(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            r(8), r(16), r(29);
            var l = r(88),
                d = r.n(l),
                h = r(1111),
                m = r(0);

            function f(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function v(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? f(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            const _ = ["transparent", "primary-dark"];
            var y = h.a.extend({
                    name: "HSinglePricingTable",
                    props: {
                        product: {
                            type: Object,
                            required: !0
                        },
                        backgroundColor: {
                            type: String,
                            default: "transparent",
                            validator: Object(m.y)(_)
                        },
                        showPaymentTerms: {
                            type: Boolean,
                            default: !0
                        },
                        paymentTermsTranslations: {
                            type: Object,
                            default: () => ({
                                popupTitle: "components.pricingTable.termsPopupTitle",
                                popupText: "components.pricingTable.termsPopupText"
                            })
                        },
                        tableSlug: {
                            type: String,
                            default: ""
                        },
                        showSaleOffer: Boolean
                    },
                    data() {
                        return {
                            screen: "mobile",
                            pricingFontSize: 48,
                            seeAllFeatures: !1,
                            tableVisited: !1,
                            gtmOptions: {
                                id: "single_pricing_table",
                                name: "Single Pricing Table",
                                slug: this.tableSlug,
                                products: [this.product]
                            }
                        }
                    },
                    mounted() {
                        let e;
                        const t = () => {
                            const t = document.querySelector(".h-single-pricing-table");
                            t && (e = new IntersectionObserver((e => {
                                e[0].intersectionRatio > 0 && !this.tableVisited && (this.tableVisited = !0, this.sendAllGAData(this.gtmOptions))
                            }), {}), e.observe(t))
                        };
                        setTimeout((() => t()), 2e3);
                        const r = () => {
                            window.innerWidth > 1024 ? this.screen = "desktop" : window.innerWidth > 767 ? this.screen = "tablet" : this.screen = "mobile"
                        };
                        r(), window.addEventListener("resize", d()(r, 100)), this.$once("hook:beforeDestroy", (() => {
                            (null == e ? void 0 : e.disconnect) && e.disconnect(), window.removeEventListener("resize", d()(r, 100))
                        }))
                    },
                    computed: {
                        mainFeaturesPerColumn() {
                            const e = this.product.features.main.length < 10 ? Math.ceil(this.product.features.main.length / 2) : 5;
                            return ["mobile", "tablet"].includes(this.screen) ? [
                                [], this.product.features.main.slice(0, 5)
                            ] : [this.product.features.main.slice(0, e), this.product.features.main.slice(e, 10)]
                        },
                        expandedFeatures() {
                            var e;
                            const t = (null === (e = this.product.features) || void 0 === e ? void 0 : e.expanded) || [];
                            return ["mobile", "tablet"].includes(this.screen) ? [...this.product.features.main.slice(5, this.product.features.main.length), ...t] : [...this.product.features.main.slice(10, this.product.features.main.length), ...t]
                        },
                        expandedFeaturesNumberVisible() {
                            let e = 0;
                            switch (this.screen) {
                                case "mobile":
                                    e = this.expandedFeatures.length;
                                    break;
                                case "tablet":
                                    e = Math.ceil(this.expandedFeatures.length / 2);
                                    break;
                                case "desktop":
                                    e = Math.ceil(this.expandedFeatures.length / 3)
                            }
                            return e
                        },
                        expandedFeaturesPerColumn() {
                            let e = [];
                            const t = [this.expandedFeatures.slice(0, this.expandedFeaturesNumberVisible), this.expandedFeatures.slice(this.expandedFeaturesNumberVisible, 2 * this.expandedFeaturesNumberVisible)];
                            switch (this.screen) {
                                case "mobile":
                                    e = [this.expandedFeatures];
                                    break;
                                case "tablet":
                                    e = [...t];
                                    break;
                                case "desktop":
                                    e = [...t, this.expandedFeatures.slice(2 * this.expandedFeaturesNumberVisible, 3 * this.expandedFeaturesNumberVisible)]
                            }
                            return e
                        },
                        classes() {
                            return v({}, Object(m.f)("h-single-pricing-table--bg", this.backgroundColor, _))
                        },
                        clickIdProductSlug() {
                            return this.product.productSlug.replace(":", "_")
                        },
                        showDiscountTag() {
                            return ["all_in_one_premium", "website_builder", "online_store"].includes(this.tableSlug)
                        }
                    },
                    methods: {
                        updatePriceFontSize(e) {
                            this.pricingFontSize = e
                        },
                        getBtnColor() {
                            return ["primary-dark"].includes(this.backgroundColor) ? "danger" : "primary"
                        },
                        toggleFeaturesList() {
                            this.seeAllFeatures = !this.seeAllFeatures
                        },
                        onAddToCart(e) {
                            this.addToCart(v(v({}, this.gtmOptions), {}, {
                                product: this.product
                            })).finally(e)
                        }
                    }
                }),
                w = (r(1250), r(5)),
                component = Object(w.a)(y, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-grid"
                    }, [t("div", {
                        staticClass: "h-single-pricing-table",
                        class: c(c({}, {
                            "h-single-pricing-table--all-features-visible": "mobile" === e.screen && e.seeAllFeatures
                        }), e.classes),
                        attrs: {
                            dir: e.direction
                        }
                    }, [t("div", {
                        staticClass: "h-single-pricing-table__features"
                    }, [t("div", {
                        staticClass: "h-single-pricing-table__main-features h-grid--cols-d-3 h-grid--cols-t-2 h-grid--cols-m-1"
                    }, [t("div", {
                        staticClass: "h-single-pricing-table__top-column h-single-pricing-table__top-column--features h-grid-item"
                    }, e._l(e.mainFeaturesPerColumn[0], (function(e, r) {
                        return t("HPricingCardFeature", {
                            key: `main-feature-${r}`,
                            attrs: {
                                "feature-info": e
                            }
                        })
                    })), 1), e._v(" "), t("HSinglePricingTableProductInfo", {
                        staticClass: "h-single-pricing-table__top-column h-single-pricing-table__top-column--product-info h-grid-item",
                        attrs: {
                            "product-info": e.product,
                            "synced-price-font-size": e.pricingFontSize,
                            "show-discount-tag": e.showDiscountTag,
                            "show-sale-offer": e.showSaleOffer,
                            "button-loading": e.buttonLoading,
                            "cart-link-error": e.cartLinkError,
                            "button-color": e.getBtnColor()
                        },
                        on: {
                            updateFontSize: t => e.updatePriceFontSize(t),
                            addToCart: e.onAddToCart
                        }
                    }), e._v(" "), t("div", {
                        staticClass: "h-single-pricing-table__top-column h-single-pricing-table__top-column--features h-grid-item"
                    }, e._l(e.mainFeaturesPerColumn[1], (function(e, r) {
                        return t("HPricingCardFeature", {
                            key: `main-feature-${r}`,
                            attrs: {
                                "feature-info": e
                            }
                        })
                    })), 1)], 1), e._v(" "), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.seeAllFeatures,
                            expression: "seeAllFeatures"
                        }],
                        staticClass: "h-single-pricing-table__expanded-features h-grid--cols-d-3 h-grid--cols-t-2 h-grid--cols-m-1"
                    }, e._l(e.expandedFeaturesPerColumn, (function(r, o) {
                        return t("div", {
                            key: `expanded-features-${o}`,
                            staticClass: "h-single-pricing-table__bottom-column h-grid-item"
                        }, e._l(r, (function(e, r) {
                            return t("HPricingCardFeature", {
                                key: `expanded-feature-${r}`,
                                attrs: {
                                    "feature-info": e
                                }
                            })
                        })), 1)
                    })), 0)]), e._v(" "), e.expandedFeatures.length ? t("div", {
                        staticClass: "h-single-pricing-table__see-all-features"
                    }, [t("div", {
                        staticClass: "h-single-pricing-table__see-all-features-button",
                        attrs: {
                            "data-click-id": `hgr-${e.pageNameDataClickId}-single_pricing_table-toggle_see_all_features-${e.clickIdProductSlug}`
                        },
                        on: {
                            click: e.toggleFeaturesList
                        }
                    }, [e._v("\n        " + e._s(e.seeAllFeatures ? e.$t("components.pricingCard.seeLessFeatures") : e.$t("components.pricingCard.seeAllFeatures")) + "\n        "), t("HIcon", {
                        staticClass: "h-single-pricing-table__see-all-features-icon",
                        class: {
                            "h-single-pricing-table__see-all-features-icon--active": e.seeAllFeatures
                        },
                        attrs: {
                            icon: "ui-icons/ic-arrow-down"
                        }
                    })], 1)]) : e._e()]), e._v(" "), e.showPaymentTerms ? t("HPaymentTerms", {
                        staticClass: "h-single-pricing-table__payment-terms",
                        attrs: {
                            "popup-title": e.$t(e.paymentTermsTranslations.popupTitle),
                            "popup-text": e.$t(e.paymentTermsTranslations.popupText),
                            "data-click-id-parent": "pricing_table"
                        }
                    }) : e._e()], 1)
                }), [], !1, null, "5ef5eb70", null);
            t.default = component.exports;
            installComponents(component, {
                HPricingCardFeature: r(1227).default,
                HSinglePricingTableProductInfo: r(1264).default,
                HIcon: r(80).default,
                HPaymentTerms: r(1119).default
            })
        },
        1262: function(e, t, r) {
            var content = r(1329);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("37ace2bf", content, !0, {
                sourceMap: !1
            })
        },
        1264: function(e, t, r) {
            "use strict";
            r.r(t);
            r(127), r(16), r(29), r(8);
            var o = r(7),
                n = r(0),
                c = r(60);
            var l = o.a.extend({
                    name: "HSinglePricingTableProductInfo",
                    inject: ["getCurrentSale"],
                    props: {
                        productInfo: {
                            type: Object,
                            required: !0
                        },
                        syncedPriceFontSize: {
                            type: Number,
                            default: 0
                        },
                        buttonColor: {
                            type: String,
                            default: "primary",
                            validator: Object(n.y)(["primary", "danger"])
                        },
                        showDiscountTag: Boolean,
                        showSaleOffer: Boolean,
                        buttonLoading: Boolean,
                        cartLinkError: Boolean
                    },
                    data: () => ({
                        currentPriceTypography: {
                            currency: "t-body-large",
                            number: "t-header-currency",
                            suffix: "t-body-large"
                        },
                        renewalPriceTypography: {
                            number: "t-body-3",
                            currency: "t-body-3",
                            suffix: "t-body-3"
                        },
                        discountTypography: {
                            number: "t-body-strikethrough",
                            currency: "t-body-strikethrough",
                            suffix: "t-body-strikethrough"
                        },
                        addToCartRenderKey: 0,
                        loading: !0
                    }),
                    computed: {
                        countryCode() {
                            return this.themeData.country.code
                        },
                        clickIdProductSlug() {
                            return this.productInfo.productSlug.replace(":", "_")
                        },
                        showEmailDescription() {
                            return ["google-workspace"].includes(this.pageName)
                        },
                        currentPriceClasses() {
                            return ["h-product-info__current-price", {
                                "h-product-info__current-price--with-discount": this.showDiscountTag
                            }]
                        },
                        appendWhenYouRenew() {
                            return !["DE"].includes(this.themeData.country.code)
                        },
                        cardTitleTypography() {
                            return Object(n.p)(this.themeData.country.code)
                        },
                        showPriceInfo() {
                            return ["pt_BR", ...c.a.euLocales].includes(this.themeData.language.code)
                        },
                        currentSale() {
                            return this.getCurrentSale()
                        }
                    },
                    mounted() {
                        setTimeout((() => {
                            this.loading = !1
                        }), 500)
                    },
                    methods: {
                        addToCart() {
                            this.$emit("addToCart", (() => this.addToCartRenderKey++))
                        },
                        getSaleOfferSlug(e, t) {
                            var r;
                            const o = !e.nonZeroFreeHostingMonths,
                                n = null === (r = null == t ? void 0 : t.specialOffer) || void 0 === r ? void 0 : r.freeHostingMonths;
                            return o ? "sales.newYear.salePromoPricingTable0" : `sales.newYear.salePromoPricingTable${n}`
                        }
                    }
                }),
                d = (r(1265), r(5)),
                component = Object(d.a)(l, (function() {
                    var e, t = this,
                        r = t._self._c;
                    t._self._setupProxy;
                    return r("div", {
                        staticClass: "h-product-info",
                        attrs: {
                            dir: t.direction
                        }
                    }, [r("div", {
                        staticClass: "h-product-info__title",
                        class: t.cardTitleTypography
                    }, [t._v("\n    " + t._s(t.productInfo.title) + "\n  ")]), t._v(" "), t.productInfo.description ? r("p", {
                        staticClass: "h-product-info__description t-body-3"
                    }, [t._v("\n    " + t._s(t.productInfo.description) + "\n  ")]) : t._e(), t._v(" "), t.showDiscountTag ? r("div", {
                        staticClass: "h-product-info__discount"
                    }, [r("HPrice", {
                        attrs: {
                            price: t.productInfo.price.old,
                            "typography-classes": t.discountTypography,
                            "country-code": t.countryCode,
                            color: "gray"
                        }
                    }), t._v(" "), r("HDiscountTag", {
                        staticClass: "h-product-info__discount-tag",
                        attrs: {
                            color: "primary-dark",
                            "background-color": "primary-light"
                        }
                    }, [t._v(t._s(t.$t("components.pricingCard.save", {
                        discount: t.productInfo.price.discount
                    })))])], 1) : t._e(), t._v(" "), r("HDynamicSizePrice", {
                        class: t.currentPriceClasses,
                        attrs: {
                            "typography-classes": t.currentPriceTypography,
                            price: t.productInfo.price.purchase,
                            suffix: t.$t("global.perMonth"),
                            "country-code": t.countryCode,
                            color: "meteorite-dark",
                            "static-font-size": t.syncedPriceFontSize
                        },
                        on: {
                            updateFontSize: e => t.$emit("updateFontSize", e)
                        },
                        scopedSlots: t._u([t.showPriceInfo ? {
                            key: "price-info",
                            fn: function() {
                                return [r("p", {
                                    staticClass: "h-product-info__current-price-info t-body-3"
                                }, [t._v("\n        " + t._s(t.$t("global.priceDescription")) + "\n      ")])]
                            },
                            proxy: !0
                        } : null], null, !0)
                    }), t._v(" "), t.showSaleOffer ? r("div", {
                        staticClass: "h-product-info__offer"
                    }, [t.loading || null === (e = t.currentSale.specialOffer) || void 0 === e || !e.freeHostingMonths ? r("HLoaderCircle", {
                        attrs: {
                            "scale-size": .5,
                            color: "primary"
                        }
                    }) : r("p", {
                        staticClass: "h-product-info__offer-description t-body-4"
                    }, [t._v("\n      " + t._s(t.$t(t.getSaleOfferSlug(t.productInfo, t.currentSale))) + "\n    ")])], 1) : t._e(), t._v(" "), t.showEmailDescription ? r("span", {
                        staticClass: "h-product-info__current-price-description t-body-3"
                    }, [t._v(t._s(t.$t("components.pricingCard.pricePerMailbox")))]) : t._e(), t._v(" "), t.cartLinkError ? r("div", {
                        staticClass: "h-product-info__error"
                    }, [t._v("\n    " + t._s(t.$t("components.pricingCard.cartLinkError")) + "\n  ")]) : t._e(), t._v(" "), r("HButton", {
                        key: `single-pt-add-to-cart-${t.addToCartRenderKey}`,
                        staticClass: "h-product-info__add-to-cart",
                        attrs: {
                            "data-click-id": `hgr-${t.pageNameDataClickId}-single_pricing_table-add_to_cart-${t.clickIdProductSlug}`,
                            loading: t.buttonLoading,
                            color: t.buttonColor
                        },
                        on: {
                            "~onClick": function(e) {
                                return t.addToCart.apply(null, arguments)
                            }
                        }
                    }, [t._v("\n    " + t._s(t.$t("components.pricingCard.select")) + "\n  ")]), t._v(" "), t.productInfo.price.renew ? r("div", {
                        staticClass: "h-product-info__renewal-price t-body-3"
                    }, [t.appendWhenYouRenew ? t._e() : [t._v("\n      " + t._s(t.$t("components.pricingCard.whenYouRenew")) + "\n    ")], t._v(" "), r("HPrice", {
                        attrs: {
                            price: t.productInfo.price.renew,
                            "typography-classes": t.renewalPriceTypography,
                            suffix: t.$t("global.perMonth"),
                            "country-code": t.countryCode,
                            color: "gray"
                        }
                    }), t._v(" "), t.appendWhenYouRenew ? [t._v("\n      " + t._s(t.$t("components.pricingCard.whenYouRenew")) + "\n    ")] : t._e()], 2) : t._e()], 1)
                }), [], !1, null, "0453a939", null);
            t.default = component.exports;
            installComponents(component, {
                HPrice: r(1115).default,
                HDiscountTag: r(1198).default,
                HDynamicSizePrice: r(1193).default,
                HLoaderCircle: r(530).default,
                HButton: r(236).default
            })
        },
        1265: function(e, t, r) {
            "use strict";
            r(1204)
        },
        1266: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-0453a939]{display:none}@media(min-width:768px){.desktop-only[data-v-0453a939]{display:block}.mobile-only[data-v-0453a939]{display:none}}.h-product-info[data-v-0453a939]{align-items:center;display:flex;flex-direction:column;justify-content:center}.h-product-info__title[data-v-0453a939]{text-align:center}.h-product-info__discount[data-v-0453a939]{margin-top:24px}.h-product-info__discount-tag[data-v-0453a939]{margin-left:4px}.h-product-info__current-price[data-v-0453a939]{align-items:center;display:flex;flex-direction:column;margin-top:24px;width:100%}.h-product-info__current-price[data-v-0453a939] .h-price{align-items:baseline}.h-product-info__current-price[data-v-0453a939] .h-price__currency--prepend{margin-right:4px}.h-product-info__current-price[data-v-0453a939] .h-price__currency--append{margin-left:4px}.h-product-info__current-price[data-v-0453a939] .h-price__number{bottom:-1px;position:relative}.h-product-info__current-price-info[data-v-0453a939]{opacity:.8;text-align:center}.h-product-info__current-price-description[data-v-0453a939]{color:#727586}.h-product-info__current-price--with-discount[data-v-0453a939]{margin-top:4px}@media(min-width:768px){.h-product-info__current-price--with-discount[data-v-0453a939]{margin-top:8px}}.h-product-info__add-to-cart[data-v-0453a939]{margin-top:24px;max-width:248px;width:100%}.h-product-info__error[data-v-0453a939]{color:#d63163;margin-top:8px;padding:0 12px;text-align:center}.h-product-info__renewal-price[data-v-0453a939]{color:#727586;margin-top:16px}.h-product-info__offer-description[data-v-0453a939]{color:#673de6}.h-product-info__offer[data-v-0453a939]{margin-top:8px}.h-product-info__offer[data-v-0453a939] .h-circle-loader{align-items:center;display:flex;height:24px;justify-content:center;position:relative}.h-product-info__offer[data-v-0453a939] .h-circle-loader__content{display:inline-flex;margin-left:-1px;position:relative;top:1px}", ""]), o.locals = {}, e.exports = o
        },
        1270: function(e, t, r) {
            "use strict";
            r(1210)
        },
        1271: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-0fae47b7]{display:none}@media(min-width:768px){.desktop-only[data-v-0fae47b7]{display:block}.mobile-only[data-v-0fae47b7]{display:none}}.h-validator-step[data-v-0fae47b7]{display:flex;margin-top:16px}.h-validator-step__icon-wrapper[data-v-0fae47b7]{display:flex;flex-shrink:0;height:20px;width:20px}.h-validator-step__icon-wrapper--invalid-state[data-v-0fae47b7]{background-color:#dadce0;border-radius:50%;height:100%;width:100%}.h-validator-step__text[data-v-0fae47b7]{color:#727586;margin:0 8px 0 4px}", ""]), o.locals = {}, e.exports = o
        },
        1272: function(e, t, r) {
            "use strict";
            r(1211)
        },
        1273: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-6f4d1fa8]{display:none}@media(min-width:768px){.desktop-only[data-v-6f4d1fa8]{display:block}.mobile-only[data-v-6f4d1fa8]{display:none}}.h-review-card[data-v-6f4d1fa8]{background-color:#fff;border:1px solid #d5dfff;border-radius:6px;display:flex;flex-direction:column;height:100%;min-height:230px;position:relative;width:100%}.h-review-card__top[data-v-6f4d1fa8]{display:flex;flex:1 0 auto;flex-direction:column;padding:48px 32px;width:100%}.h-review-card__icon[data-v-6f4d1fa8]{padding-right:6px}.h-review-card__body[data-v-6f4d1fa8]{color:#2f1c6a;padding-top:18px}@media(min-width:1025px){.h-review-card__body[data-v-6f4d1fa8]{flex:1 0 auto;min-height:115px}}.h-review-card__link[data-v-6f4d1fa8]{padding-top:20px}.h-review-card__bottom[data-v-6f4d1fa8]{background-color:#f4f5ff;border-radius:0 0 6px 6px;border-top:1px solid #d5dfff;display:flex;padding:20px 32px}@media(min-width:768px){.h-review-card__bottom[data-v-6f4d1fa8]{padding:24px 32px}}@media(min-width:1025px){.h-review-card__bottom[data-v-6f4d1fa8]{flex:0 0 auto}}.h-review-card__bottom-left[data-v-6f4d1fa8]{border-radius:100px;height:64px;margin-right:11px;min-width:64px;overflow:hidden;width:64px}.h-review-card__bottom-right[data-v-6f4d1fa8]{display:flex;flex-direction:column;justify-content:space-between;padding:7px 0;row-gap:4px}@media(min-width:1025px){.h-review-card__bottom-right[data-v-6f4d1fa8]{height:64px;justify-content:center}}", ""]), o.locals = {}, e.exports = o
        },
        1276: function(e, t, r) {
            "use strict";
            r.r(t);
            r(8);
            var o = r(1267),
                n = r(7).a.extend({
                    name: "HStepsValidator",
                    props: {
                        value: {
                            type: String,
                            default: ""
                        },
                        validator: {
                            type: Object,
                            required: !0
                        }
                    },
                    computed: {
                        isValid: {
                            get() {
                                return !!this.value && this.validate()
                            }
                        }
                    },
                    methods: {
                        validate() {
                            if (o.a[this.validator.rule]) {
                                const e = this.validator.additionalArgs ? [this.value, ...this.validator.additionalArgs] : [this.value];
                                return o.a[this.validator.rule](...e)
                            }
                            return !1
                        }
                    }
                }),
                c = (r(1270), r(5)),
                component = Object(c.a)(n, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-validator-step"
                    }, [t("div", {
                        staticClass: "h-validator-step__icon-wrapper"
                    }, [e.isValid ? t("HIcon", {
                        attrs: {
                            icon: "ui-icons/ic-check-circle",
                            size: {
                                height: 20,
                                width: 20
                            }
                        }
                    }) : t("i", {
                        staticClass: "h-validator-step__icon-wrapper--invalid-state"
                    })], 1), e._v(" "), t("p", {
                        staticClass: "t-body-3 h-validator-step__text"
                    }, [e._v(e._s(e.validator.message))])])
                }), [], !1, null, "0fae47b7", null);
            t.default = component.exports;
            installComponents(component, {
                HIcon: r(80).default
            })
        },
        1279: function(e, t, r) {
            "use strict";
            r(1223)
        },
        1280: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-3962d4b7]{display:none}@media(min-width:768px){.desktop-only[data-v-3962d4b7]{display:block}.mobile-only[data-v-3962d4b7]{display:none}}.h-steps-validator[data-v-3962d4b7]{display:flex;flex-wrap:wrap;width:100%}.h-steps-validator__step[data-v-3962d4b7]{width:50%}", ""]), o.locals = {}, e.exports = o
        },
        1283: function(e, t, r) {
            "use strict";
            r(1225)
        },
        1284: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-2e820377]{display:none}@media(min-width:768px){.desktop-only[data-v-2e820377]{display:block}.mobile-only[data-v-2e820377]{display:none}}.h-client-reviews-section__grid[data-v-2e820377]{padding-top:0}.h-client-reviews-section__footer[data-v-2e820377]{display:flex;justify-content:center}[data-v-2e820377] .h-client-reviews-section__button.h-button{width:100%}@media(min-width:768px){[data-v-2e820377] .h-client-reviews-section__button.h-button{width:360px}}", ""]), o.locals = {}, e.exports = o
        },
        1287: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1221),
                n = r(7).a.extend({
                    name: "HClientReviews",
                    components: {
                        HClientReviewCard: o.default
                    },
                    props: {
                        data: {
                            type: Object
                        }
                    },
                    computed: {
                        buttonTextSlug() {
                            var e;
                            return (null === (e = this.data.buttonData) || void 0 === e ? void 0 : e.textSlug) || "components.clientReviews.moreStoriesText"
                        }
                    }
                }),
                c = (r(1283), r(5)),
                component = Object(c.a)(n, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-client-reviews-section u-section-spaces"
                    }, [t("HCardGridSection", {
                        staticClass: "h-client-reviews-section__grid",
                        attrs: {
                            data: e.data,
                            "tablet-columns": 1
                        },
                        scopedSlots: e._u([{
                            key: "items",
                            fn: function({
                                item: e
                            }) {
                                return [t("HClientReviewCard", {
                                    attrs: {
                                        data: e
                                    }
                                })]
                            }
                        }])
                    }), e._v(" "), e.data.buttonData ? t("div", {
                        staticClass: "h-client-reviews-section__footer h-grid"
                    }, [t("HButton", {
                        staticClass: "h-client-reviews-section__button",
                        attrs: {
                            "data-click-id": e.data.buttonData.dataClickId,
                            type: e.data.buttonData.type,
                            color: e.data.buttonData.color,
                            rel: "noopener noreferrer nofollow",
                            to: e.data.buttonData.link,
                            target: e.data.buttonData.linkTarget
                        }
                    }, [e._v(e._s(e.$t(e.buttonTextSlug)))])], 1) : e._e()], 1)
                }), [], !1, null, "2e820377", null);
            t.default = component.exports;
            installComponents(component, {
                HClientReviewCard: r(1221).default,
                HCardGridSection: r(1154).default,
                HButton: r(236).default
            })
        },
        1291: function(e, t, r) {
            "use strict";
            r(127), r(8);
            var o = r(7),
                n = r(59),
                c = r(0),
                l = r(1172),
                d = o.a.extend({
                    name: "Header",
                    props: {
                        currentSale: {
                            type: Object,
                            required: !0
                        },
                        currentSaleTemplate: {
                            type: String,
                            required: !0
                        },
                        priceData: {
                            type: Object,
                            required: !0
                        }
                    },
                    async created() {
                        const [{
                            timeLeftMilliseconds: e
                        }] = await n.k.getSaleTimer();
                        this.timerDate = e + Date.now()
                    },
                    mounted() {
                        setTimeout((() => {
                            this.loading = !1
                        }), 500)
                    },
                    data() {
                        return {
                            loading: !0,
                            pricingFontSize: 80,
                            priceTypography: {
                                currency: "t-body-large",
                                number: "t-header-currency",
                                suffix: "t-body-large"
                            },
                            timerDate: 0,
                            countdownPeriods: {
                                days: this.$t("pages.homepage.header.timer.days"),
                                hours: this.$t("pages.homepage.header.timer.hours"),
                                minutes: this.$t("pages.homepage.header.timer.minutes"),
                                seconds: this.$t("pages.homepage.header.timer.seconds")
                            }
                        }
                    },
                    methods: {
                        updatePriceFontSize(e) {
                            this.pricingFontSize = e
                        }
                    },
                    computed: {
                        isHomepage() {
                            return "homepage" === this.pageName
                        },
                        isWebsiteBuilder() {
                            return "website-builder" === this.pageName
                        },
                        isConsumerMonthSale() {
                            return "consumermonth2023" === this.currentSaleTemplate && ["homepage", "web-hosting"].includes(this.pageName)
                        },
                        isMarchSaleIndia() {
                            return "marchSaleIndia2023" === this.currentSaleTemplate && ["homepage", "web-hosting", "wordpress-hosting"].includes(this.pageName)
                        },
                        headerClasses() {
                            return [{
                                "header--dark": this.isConsumerMonthSale || this.isMarchSaleIndia || this.isNiaga
                            }]
                        },
                        consumerMonthSaleImageSuffix() {
                            return "BR" === this.themeData.country.code ? "-br-consumer-month" : ["AR", "MX"].includes(this.themeData.country.code) ? "-ar-mx-consumer-month" : ["IN"].includes(this.themeData.country.code) ? "-in-march-sale" : "-co-consumer-month"
                        },
                        highlightColor() {
                            return this.isConsumerMonthSale || this.isMarchSaleIndia || this.isNiaga ? "light" : "meteorite-dark"
                        },
                        iconColor() {
                            return this.isConsumerMonthSale || this.isMarchSaleIndia || this.isNiaga ? "light" : "primary"
                        },
                        headerData() {
                            const e = this,
                                t = e.isHomepage && ["ar_AR", "en_JP", "vi_VN", "zh_CN", "tr_TR", "id_ID", "en_PK"].includes(this.themeData.language.code) ? "-ae" : this.isNiaga ? "-ng" : "",
                                r = e.isConsumerMonthSale ? e.consumerMonthSaleImageSuffix : e.isMarchSaleIndia ? "-in-march-sale" : "",
                                o = e.isConsumerMonthSale ? "-br-consumer-month" : e.isMarchSaleIndia ? "-in-march-sale" : "",
                                n = "cloud-hosting" === this.pageName ? {
                                    features: [{
                                        icon: "ui-icons/ic-ip",
                                        text: this.$t("sales.newYear.cloudHosting.dedicatedIp"),
                                        tooltip: this.$t("global.features.dedicatedIpTooltip")
                                    }, {
                                        icon: "ui-icons/ic-resources",
                                        text: this.$t("sales.newYear.cloudHosting.dedicatedResources"),
                                        tooltip: this.$t("global.features.dedicatedResourcesTooltip")
                                    }]
                                } : "website-builder" === this.pageName ? {
                                    description: this.$t("sales.newYear.websiteBuilder.description")
                                } : {
                                    features: [{
                                        icon: "ui-icons/ic-globe",
                                        text: this.$t("global.features.freeDomain"),
                                        tooltip: this.$t("global.features.freeDomainTooltip", {
                                            freeDomainList: l.a[this.themeData.country.code] || l.a.US,
                                            numberOfDays: "60"
                                        })
                                    }, {
                                        icon: "ui-icons/ic-headset",
                                        text: this.$t("global.features.customerSupport")
                                    }]
                                };
                            return {
                                heading: this.$t(`sales.newYear.${Object(c.v)(this.pageName)}.heading${Object(c.v)(o)}`),
                                overline: this.$t(`sales.newYear.${Object(c.v)(this.pageName)}.overline${Object(c.v)(o)}`, {
                                    discount: this.priceData.discount
                                }),
                                backgroundColor: e.isConsumerMonthSale || e.isMarchSaleIndia || this.isNiaga ? "primary" : "transparent",
                                buttonData: {
                                    scrollId: "pricing",
                                    color: e.isConsumerMonthSale || e.isMarchSaleIndia || this.isNiaga ? "danger" : "primary",
                                    textSlug: "sales.newYear.buttonText"
                                },
                                additionalContent: n,
                                features: [{
                                    icon: "ui-icons/ic-shield",
                                    text: this.$t("global.features.moneyBackGuarantee")
                                }],
                                imageSrc: `/h-assets/images/sales/february/${this.pageName}-hero${t}${r}-2x.png`,
                                imageAlt: e.isMarchSaleIndia ? this.$t(`sales.newYear.${Object(c.v)(this.pageName)}.heading${Object(c.v)(o)}`) : this.$t("sales.newYear.heading")
                            }
                        },
                        tooltipPosition() {
                            return "rtl" === this.direction ? "left-start" : "right-start"
                        }
                    }
                }),
                h = (r(1298), r(5)),
                component = Object(h.a)(d, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("HFeaturesHeader", {
                        staticClass: "header",
                        class: e.headerClasses,
                        attrs: {
                            data: e.headerData,
                            "sale-campaign": ""
                        },
                        scopedSlots: e._u([{
                            key: "heading",
                            fn: function() {
                                return [e.isHomepage || e.isWebsiteBuilder ? e._e() : t("div", {
                                    staticClass: "header__overline t-headline-pt",
                                    domProps: {
                                        innerHTML: e._s(e.headerData.overline)
                                    }
                                }), e._v(" "), e.isHomepage ? t("h1", {
                                    staticClass: "t-h2"
                                }, [e._v("\n      " + e._s(e.headerData.heading) + "\n    ")]) : t("h2", {
                                    domProps: {
                                        innerHTML: e._s(e.headerData.heading)
                                    }
                                }), e._v(" "), e.isHomepage || e.isWebsiteBuilder ? t("div", {
                                    staticClass: "header__overline header__overline--homepage t-headline-pt",
                                    domProps: {
                                        innerHTML: e._s(e.headerData.overline)
                                    }
                                }) : e._e()]
                            },
                            proxy: !0
                        }, {
                            key: "additional-content",
                            fn: function() {
                                var r;
                                return [t("div", {
                                    staticClass: "header__list"
                                }, [e._l(e.headerData.additionalContent.features, (function(r, o) {
                                    return t("span", {
                                        key: `list_item-${o}`,
                                        staticClass: "header__list-item"
                                    }, [t("HIcon", {
                                        staticClass: "header__list-item-icon",
                                        attrs: {
                                            color: e.iconColor,
                                            icon: r.icon,
                                            "view-box": "0 0 20 20",
                                            size: {
                                                height: 20,
                                                width: 20
                                            }
                                        }
                                    }), e._v("\n        " + e._s(r.text) + "\n        "), r.tooltip ? t("HIcon", {
                                        directives: [{
                                            name: "tooltip",
                                            rawName: "v-tooltip",
                                            value: {
                                                placement: e.tooltipPosition,
                                                content: r.tooltip,
                                                boundariesElement: "header__list"
                                            },
                                            expression: "{\n            placement: tooltipPosition,\n            content: feature.tooltip,\n            boundariesElement: 'header__list',\n          }"
                                        }],
                                        staticClass: "header__list-item-tooltip-icon",
                                        attrs: {
                                            icon: "ui-icons/ic-help",
                                            "view-box": "0 0 24 24",
                                            size: {
                                                height: 24,
                                                width: 20
                                            },
                                            color: e.highlightColor
                                        }
                                    }) : e._e()], 1)
                                })), e._v(" "), e.headerData.additionalContent.description ? t("span", {
                                    staticClass: "header__list-item"
                                }, [e._v("\n        " + e._s(e.headerData.additionalContent.description) + "\n      ")]) : e._e()], 2), e._v(" "), t("div", {
                                    staticClass: "header__price-wrapper"
                                }, [t("HDynamicSizePrice", {
                                    attrs: {
                                        "typography-classes": e.priceTypography,
                                        price: e.priceData.purchase,
                                        suffix: e.$t("global.perMonth"),
                                        "country-code": e.themeData.country.code,
                                        color: e.highlightColor,
                                        "static-font-size": e.pricingFontSize
                                    },
                                    on: {
                                        updateFontSize: t => e.updatePriceFontSize(t)
                                    }
                                })], 1), e._v(" "), t("div", [e.loading || null === (r = e.currentSale.specialOffer) || void 0 === r || !r.freeHostingMonths ? t("HLoaderCircle", {
                                    attrs: {
                                        "scale-size": .5
                                    }
                                }) : t("p", {
                                    staticClass: "t-headline-pt"
                                }, [e._v("\n        " + e._s(e.$t(`sales.newYear.salePromo${e.currentSale.specialOffer.freeHostingMonths}`)) + "\n      ")]), e._v(" "), t("HCountdown", {
                                    staticClass: "header__timer",
                                    attrs: {
                                        date: e.timerDate,
                                        periods: e.countdownPeriods
                                    }
                                })], 1)]
                            },
                            proxy: !0
                        }, {
                            key: "features",
                            fn: function() {
                                return [t("div", {
                                    staticClass: "header__features-list"
                                }, e._l(e.headerData.features, (function(r, o) {
                                    return t("span", {
                                        key: `feature_item-${o}`,
                                        staticClass: "header__features-list-item"
                                    }, [t("HIcon", {
                                        staticClass: "header__features-list-item-icon",
                                        attrs: {
                                            color: e.iconColor,
                                            icon: r.icon,
                                            "view-box": "0 0 20 20",
                                            size: {
                                                height: 20,
                                                width: 20
                                            }
                                        }
                                    }), e._v("\n        " + e._s(r.text) + "\n      ")], 1)
                                })), 0)]
                            },
                            proxy: !0
                        }, {
                            key: "image",
                            fn: function() {
                                return [e._t("image")]
                            },
                            proxy: !0
                        }], null, !0)
                    })
                }), [], !1, null, "4737bf7c", null);
            t.a = component.exports;
            installComponents(component, {
                HIcon: r(80).default,
                HDynamicSizePrice: r(1193).default,
                HLoaderCircle: r(530).default,
                HCountdown: r(1246).default,
                HFeaturesHeader: r(1155).default
            })
        },
        1298: function(e, t, r) {
            "use strict";
            r(1237)
        },
        1299: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-4737bf7c]{display:none}@media(min-width:768px){.desktop-only[data-v-4737bf7c]{display:block}.mobile-only[data-v-4737bf7c]{display:none}}.header--dark[data-v-4737bf7c] .h-countdown__colon{color:#fff}.header--dark[data-v-4737bf7c] .h-countdown__card{border:none!important}.header--dark[data-v-4737bf7c] .h-countdown__card{background:hsla(0,0%,100%,.1);color:#fff}.header--dark[data-v-4737bf7c] .h-countdown__card-name{display:none}.header--dark[data-v-4737bf7c] .header__overline-discount{color:#fff}.header[data-v-4737bf7c] .h-features-header__heading-wrapper{margin-bottom:16px}@media(min-width:1025px){.header[data-v-4737bf7c] .h-features-header__heading-wrapper{margin-bottom:24px}}.header[data-v-4737bf7c] .h-features-header__button{width:291px}@media(min-width:1367px){.header[data-v-4737bf7c] .h-features-header__button{width:315px}}.header[data-v-4737bf7c] .h-header-two-cols__left-col{margin-bottom:24px}@media(min-width:1025px){.header[data-v-4737bf7c] .h-header-two-cols__left-col{margin-bottom:0}}.header[data-v-4737bf7c] .h-countdown__card{border:1px solid #2f1c6a}.header[data-v-4737bf7c] .h-countdown__card-name{display:none}.header[data-v-4737bf7c] .h-circle-loader{align-items:center;display:flex;height:24px;justify-content:center;position:relative}@media(min-width:1025px){.header[data-v-4737bf7c] .h-circle-loader{align-items:normal;height:32px;justify-content:normal}}.header[data-v-4737bf7c] .h-circle-loader__content{display:inline-flex;margin-left:-1px;position:relative;top:1px}@media(min-width:1025px){.header[data-v-4737bf7c] .h-circle-loader__content{margin-left:-14px;top:-4px}}.header__overline[data-v-4737bf7c]{margin-bottom:8px}.header__overline--homepage[data-v-4737bf7c]{margin-bottom:0;margin-top:8px}[data-v-4737bf7c] .header__overline-discount{color:#673de6;font-weight:700}.header__overline[data-v-4737bf7c] h1{display:inline}.header__list[data-v-4737bf7c]{align-items:center;display:flex;flex-direction:column}@media(min-width:1025px){.header__list[data-v-4737bf7c]{align-items:flex-start}}.header__list-item[data-v-4737bf7c]{align-items:center;display:flex;margin-bottom:8px}.header__list-item[data-v-4737bf7c]:last-of-type{margin-bottom:16px}@media(min-width:1025px){.header__list-item[data-v-4737bf7c]:last-of-type{margin-bottom:24px}}.header__list-item-icon[data-v-4737bf7c]{display:inline-flex;margin-right:10px}.header__list-item-tooltip-icon[data-v-4737bf7c]{cursor:pointer;margin-left:10px}.header__price-wrapper[data-v-4737bf7c]{margin-bottom:8px}.header__timer[data-v-4737bf7c]{margin-bottom:24px;margin-top:16px}@media(min-width:1025px){.header__timer[data-v-4737bf7c]{margin-top:24px}}.header__features-list[data-v-4737bf7c]{align-items:center;display:flex;flex-direction:column;margin-top:12px}@media(min-width:1025px){.header__features-list[data-v-4737bf7c]{align-items:flex-start}}.header__features-list-item[data-v-4737bf7c]{align-items:center;display:flex}.header__features-list-item-icon[data-v-4737bf7c]{display:inline-flex;margin-right:4px}", ""]), o.locals = {}, e.exports = o
        },
        1306: function(e, t, r) {
            "use strict";
            r(1243)
        },
        1307: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-9d4f98c2]{display:none}@media(min-width:768px){.desktop-only[data-v-9d4f98c2]{display:block}.mobile-only[data-v-9d4f98c2]{display:none}}.h-product-feature-list-item[data-v-9d4f98c2]{align-items:center;display:flex}.h-product-feature-list-item__icon[data-v-9d4f98c2]{flex-shrink:0;margin-right:8px}", ""]), o.locals = {}, e.exports = o
        },
        1328: function(e, t, r) {
            "use strict";
            r(1262)
        },
        1329: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-e66fb30c]{display:none}@media(min-width:768px){.desktop-only[data-v-e66fb30c]{display:block}.mobile-only[data-v-e66fb30c]{display:none}}.h-product-feature-list h2[data-v-e66fb30c]{text-align:center}.h-product-feature-list p[data-v-e66fb30c]{margin-top:16px}@media(min-width:768px){.h-product-feature-list p[data-v-e66fb30c]{margin-top:24px}}@media(min-width:1025px){.h-product-feature-list p[data-v-e66fb30c]{margin-top:32px}}.h-product-feature-list__wrapper[data-v-e66fb30c]{margin-top:32px;row-gap:16px}@media(min-width:768px){.h-product-feature-list__wrapper[data-v-e66fb30c]{margin-top:40px;row-gap:24px}}@media(min-width:1025px){.h-product-feature-list__wrapper[data-v-e66fb30c]{margin-top:48px}}", ""]), o.locals = {}, e.exports = o
        },
        1336: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1254),
                n = r(7).a.extend({
                    name: "HProductFeatureList",
                    components: {
                        HProductFeatureItem: o.default
                    },
                    props: {
                        data: {
                            type: Object,
                            required: !0
                        }
                    }
                }),
                c = (r(1328), r(5)),
                component = Object(c.a)(n, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        staticClass: "h-product-feature-list u-section-spaces",
                        attrs: {
                            dir: e.direction
                        }
                    }, [t("div", {
                        staticClass: "h-grid"
                    }, [t("h2", [e._v(e._s(e.data.title))]), e._v(" "), e.data.subTitle ? t("p", [e._v(e._s(e.data.subTitle))]) : e._e()]), e._v(" "), t("div", {
                        staticClass: "h-product-feature-list__wrapper h-grid h-grid--cols-m-1 h-grid--cols-t-2 h-grid--cols-d-3"
                    }, e._l(e.data.items, (function(e, r) {
                        return t("HProductFeatureItem", {
                            key: `icon-text-item-${r}`,
                            staticClass: "h-grid-item",
                            attrs: {
                                name: e
                            }
                        })
                    })), 1)])
                }), [], !1, null, "e66fb30c", null);
            t.default = component.exports;
            installComponents(component, {
                HProductFeatureItem: r(1254).default
            })
        },
        1343: function(e, t, r) {
            var content = r(1371);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("2737e5f2", content, !0, {
                sourceMap: !1
            })
        },
        1361: function(e, t, r) {
            var content = r(1423);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("2d556338", content, !0, {
                sourceMap: !1
            })
        },
        1370: function(e, t, r) {
            "use strict";
            r(1343)
        },
        1371: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-4b752cb7]{display:none}@media(min-width:768px){.desktop-only[data-v-4b752cb7]{display:block}.mobile-only[data-v-4b752cb7]{display:none}}.h-domain-search__text[data-v-4b752cb7],.h-domain-search__title[data-v-4b752cb7]{text-align:center}.h-domain-search__title[data-v-4b752cb7]{margin-bottom:16px}@media(min-width:768px){.h-domain-search__title[data-v-4b752cb7]{margin-bottom:24px}}@media(min-width:1025px){.h-domain-search__title[data-v-4b752cb7]{margin-bottom:32px}}.h-domain-search__text[data-v-4b752cb7]{margin-bottom:32px}@media(min-width:768px){.h-domain-search__text[data-v-4b752cb7]{margin-bottom:40px}}@media(min-width:1025px){.h-domain-search__text[data-v-4b752cb7]{margin-bottom:48px}}.h-domain-search__search-btn[data-v-4b752cb7]{display:flex;flex:3;height:48px}@media(min-width:768px){.h-domain-search__search-btn[data-v-4b752cb7]{flex:1;margin-left:24px}}.h-domain-search__input[data-v-4b752cb7]{flex:1;margin-bottom:16px}@media(min-width:768px){.h-domain-search__input[data-v-4b752cb7]{flex:3;margin-bottom:0}.h-domain-search__input[data-v-4b752cb7] .h-form-message{position:absolute}}.h-domain-search__input-container[data-v-4b752cb7]{display:flex;flex-direction:column}@media(min-width:768px){.h-domain-search__input-container[data-v-4b752cb7]{flex-direction:row}.h-domain-search.rtl .h-domain-search__search-btn[data-v-4b752cb7]{margin-left:0;margin-right:24px}}.h-domain-search-font-light[data-v-4b752cb7]{color:#fff}.h-domain-search-font-dark[data-v-4b752cb7]{color:#1d1e20}.h-domain-search-font-meteorite-dark[data-v-4b752cb7]{color:#2f1c6a}", ""]), o.locals = {}, e.exports = o
        },
        1377: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1),
                n = (r(8), r(16), r(29), r(7)),
                c = r(0),
                l = r(3),
                d = r(9);

            function h(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            const m = ["light", "dark", "meteorite-dark"];
            var f = n.a.extend({
                    name: "HDomainSearch",
                    props: {
                        translations: {
                            type: Object,
                            default: () => ({
                                title: "components.domainSearch.title",
                                text: "components.domainSearch.text",
                                errorMessage: "form.errors.fieldIsRequired",
                                inputPlaceHolder: "components.domainSearch.inputPlaceHolder",
                                searchButton: "components.domainSearch.searchButton"
                            })
                        },
                        fontColor: {
                            type: String,
                            default: "meteorite-dark",
                            validator: Object(c.y)(m)
                        },
                        backgroundColor: {
                            type: String,
                            default: "ghost-white",
                            validator: Object(c.y)(["light", "ghost-white", "primary", "white-blue"])
                        },
                        buttonColor: {
                            type: String,
                            default: "primary",
                            validator: Object(c.y)([...d.c])
                        }
                    },
                    data: () => ({
                        inputValue: "",
                        validate: !1,
                        domainsListPerLocale: {
                            ar: ".com, .net, .online, .live, .store, .info",
                            br: ".com.br, .com, .online, .live, .store, .info",
                            co: ".com, .online, .com.co, .co, .org, .tech",
                            cz: ".cz, .com, .online, .live, .store, .info",
                            dk: ".dk, .com, .online, .live, .store, .info",
                            de: ".com, .de, .online, .live, .store, .info",
                            ee: ".com, .eu, .online, .live, .store, .info",
                            gr: ".gr, .com, .online, .live, .store, .info",
                            es: ".com, .es, .online, .live, .store, .info",
                            fr: ".fr, .com, .online, .live, .store, .info",
                            hr: ".com, .eu, .online, .live, .store, .info",
                            in: ".in, .com, .online, .live, .store, .info",
                            id: ".com, .id, .online, .live, .store, .info",
                            it: ".it, .com, .online, .live, .store, .info",
                            jp: ".com, .net, .online, .live, .store, .info",
                            lv: ".lv, .com, .online, .live, .store, .info",
                            lt: ".lt, .com, .online, .live, .store, .info",
                            hu: ".com, .net, .online, .live, .store, .info",
                            my: ".com, .net, .online, .live, .store, .info",
                            mx: ".mx, .com, .online, .live, .store, .info",
                            nl: ".com, .nl, .online, .live, .store, .info",
                            no: ".com, .net, .online, .live, .store, .info",
                            ph: ".com, .net, .online, .live, .store, .info",
                            pl: ".pl, .com, .online, .live, .store, .info",
                            pt: ".pt, .com, .online, .live, .store, .info",
                            ro: ".com, .net, .online, .live, .store, .info",
                            ru: "",
                            sk: ".com, .net, .online, .live, .store, .info",
                            fi: ".com, .net, .online, .live, .store, .info",
                            se: ".se, .com, .online, .live, .store, .info",
                            tr: ".com, .net, .online, .live, .store, .info",
                            ua: ".com, .net, .online, .live, .store, .info",
                            gb: ".co.uk, .com, .online, .live, .store, .info",
                            us: "",
                            vn: ".com, .net, .online, .live, .store, .info",
                            ae: ".com, .net, .online, .live, .store, .info",
                            il: ".com, .net, .online, .live, .store, .info",
                            th: ".com, .net, .online, .live, .store, .info",
                            kr: ".com, .net, .online, .live, .store, .info",
                            cn: ".com, .xyz, .online, .live, .store, .info"
                        }
                    }),
                    methods: {
                        async onSearch() {
                            if (!this.$refs.domainSearch) return;
                            this.validate = !0, await this.$nextTick(), this.$refs.domainSearch.validate();
                            let e = this.inputValue;
                            e && (e = e.replace(/www\./i, ""), e = e.replace(/^\-+/, ""), e = e.replace(/https?\:\/\//i, ""), this.inputValue = e, this.redirectToLink(e))
                        },
                        redirectToLink(e) {
                            const t = Object(l.a)(this, "domain-name-search").nuxtLink;
                            if (t) return this.$router.push({
                                path: t,
                                query: {
                                    domain: e
                                }
                            });
                            window.location.href = Object(l.b)(`${this.siteUrl}${this.$t("wwwRoutes.domainChecker")}?domain=${e}`)
                        },
                        getDomainsList() {
                            return this.domainsListPerLocale[this.themeData.country.code.toLowerCase()]
                        }
                    },
                    computed: {
                        fontClass() {
                            return function(e) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source = null != arguments[i] ? arguments[i] : {};
                                    i % 2 ? h(Object(source), !0).forEach((function(t) {
                                        Object(o.a)(e, t, source[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                                    }))
                                }
                                return e
                            }({}, Object(c.f)("h-domain-search-font", this.fontColor, m))
                        }
                    }
                }),
                v = f,
                _ = (r(1370), r(5)),
                component = Object(_.a)(v, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        staticClass: "h-domain-search u-section-spaces",
                        class: e.direction
                    }, [t("HSectionOneColumn", {
                        staticClass: "u-generic-color-section",
                        attrs: {
                            "background-color": e.backgroundColor,
                            "column-max-width": "1016px"
                        }
                    }, [t("div", {
                        staticClass: "h-domain-search__container"
                    }, [t("h2", {
                        staticClass: "h-domain-search__title t-h1",
                        class: e.fontClass
                    }, [e._v("\n        " + e._s(e.$t(e.translations.title)) + "\n      ")]), e._v(" "), t("p", {
                        staticClass: "h-domain-search__text",
                        class: e.fontClass
                    }, [e._v("\n        " + e._s(e.$t(e.translations.text, {
                        domainsList: e.getDomainsList()
                    })) + "\n      ")]), e._v(" "), t("form", {
                        staticClass: "h-domain-search__input-container"
                    }, [t("div", {
                        staticClass: "h-domain-search__input"
                    }, [t("HInputField", {
                        ref: "domainSearch",
                        attrs: {
                            id: "h-domain-search-input",
                            "validation-rules": [{
                                name: e.validate ? "required" : "",
                                errorMessage: e.$t(e.translations.errorMessage)
                            }],
                            placeholder: e.$t(e.translations.inputPlaceHolder)
                        },
                        model: {
                            value: e.inputValue,
                            callback: function(t) {
                                e.inputValue = t
                            },
                            expression: "inputValue"
                        }
                    })], 1), e._v(" "), t("HButton", {
                        staticClass: "h-domain-search__search-btn",
                        attrs: {
                            "data-click-id": `hgr-${e.pageNameDataClickId}-domain_search-search_button`,
                            color: e.buttonColor
                        },
                        on: {
                            onClick: e.onSearch
                        }
                    }, [e._v("\n          " + e._s(e.$t(e.translations.searchButton)) + "\n        ")])], 1)])])], 1)
                }), [], !1, null, "4b752cb7", null);
            t.default = component.exports;
            installComponents(component, {
                HInputField: r(1213).default,
                HButton: r(236).default,
                HSectionOneColumn: r(526).default
            })
        },
        1421: function(e, t, r) {
            var content = r(1484);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("f570211a", content, !0, {
                sourceMap: !1
            })
        },
        1422: function(e, t, r) {
            "use strict";
            r(1361)
        },
        1423: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-a1196c4e]{display:none}@media(min-width:768px){.desktop-only[data-v-a1196c4e]{display:block}.mobile-only[data-v-a1196c4e]{display:none}}.h-trust-signals[data-v-a1196c4e]{display:flex;justify-content:flex-start;margin:0 16px;overflow-x:auto}@media(min-width:768px){.h-trust-signals[data-v-a1196c4e]{justify-content:center;margin:0 auto}}@media(min-width:1025px){.h-trust-signals[data-v-a1196c4e]{margin:0 auto}}.h-trust-signals[data-v-a1196c4e]::-webkit-scrollbar{display:none!important}.h-trust-signals__icon[data-v-a1196c4e]{flex-shrink:0;margin-right:24px;width:168px}.h-trust-signals__icon[data-v-a1196c4e]:last-of-type{margin-right:0}.h-trust-signals__icon--cloudflare[data-v-a1196c4e]{width:228px}", ""]), o.locals = {}, e.exports = o
        },
        1424: function(e, t, r) {
            var content = r(1488);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("37ceb598", content, !0, {
                sourceMap: !1
            })
        },
        1441: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(7).a.extend({
                    name: "HTrustSignals",
                    data: () => ({
                        trustSignalIcons: ["wordpress", "litespeed", "cloudflare"]
                    }),
                    methods: {
                        getTrustSignalImageData(e) {
                            return {
                                src: `/h-assets/images/trust-signals/${e}-2x.png`,
                                alt: this.$t(`components.trustSignals.${e}`)
                            }
                        }
                    }
                }),
                n = (r(1422), r(5)),
                component = Object(n.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "h-trust-signals u-section-spaces",
                        attrs: {
                            dir: e.direction
                        }
                    }, e._l(e.trustSignalIcons, (function(r) {
                        return t("HImage", {
                            key: r,
                            staticClass: "h-trust-signals__icon",
                            class: `h-trust-signals__icon--${r}`,
                            attrs: {
                                image: e.getTrustSignalImageData(r)
                            }
                        })
                    })), 1)
                }), [], !1, null, "a1196c4e", null);
            t.default = component.exports;
            installComponents(component, {
                HImage: r(165).default
            })
        },
        1483: function(e, t, r) {
            "use strict";
            r(1421)
        },
        1484: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-5d34e93f]{display:none}@media(min-width:768px){.desktop-only[data-v-5d34e93f]{display:block}.mobile-only[data-v-5d34e93f]{display:none}}.homepage__reclame-aqui-badge[data-v-5d34e93f]{display:inline-block;margin-bottom:24px;width:113px}@media(min-width:1025px){.homepage__reclame-aqui-badge[data-v-5d34e93f]{margin-bottom:32px;width:141px}}.homepage[data-v-5d34e93f] .h-features-header__description{height:72px}@media(min-width:768px){.homepage[data-v-5d34e93f] .h-features-header__description{height:48px}}.homepage__timer[data-v-5d34e93f]{color:#2f1c6a;margin-bottom:24px}.homepage__timer-title[data-v-5d34e93f]{text-align:center}@media(min-width:1025px){.homepage__timer-title[data-v-5d34e93f]{text-align:left}}.homepage__price[data-v-5d34e93f]{display:inline-flex;flex-direction:column;position:absolute;top:50%;transform:translateY(-52%);z-index:1}@media(min-width:768px){.homepage__price[data-v-5d34e93f]{transform:translateY(-27%)}}@media(min-width:1025px){.homepage__price[data-v-5d34e93f]{transform:translateY(-41%)}}.homepage__price-badge[data-v-5d34e93f]{align-self:flex-start;margin-bottom:12px}@media(min-width:768px){.homepage__price-badge[data-v-5d34e93f]{margin-bottom:16px}}@media(min-width:1025px){.homepage__price-badge[data-v-5d34e93f]{margin-bottom:20px}}.homepage__pricing-anchor[data-v-5d34e93f]{display:block;position:relative;top:-32px;visibility:hidden}@media(min-width:768px){.homepage__pricing-anchor[data-v-5d34e93f]{top:-48px}}@media(min-width:1025px){.homepage__pricing-anchor[data-v-5d34e93f]{top:-56px}}", ""]), o.locals = {}, e.exports = o
        },
        1485: function(e, t, r) {
            r(1486)
        },
        1486: function(e, t, r) {
            "use strict";
            var o = r(11),
                n = r(24),
                c = r(14),
                l = r(106),
                d = r(15),
                h = r(107),
                m = r(534),
                f = r(52),
                v = r(130),
                _ = r(535),
                y = r(533),
                w = r(23),
                x = r(51),
                k = w("replace"),
                C = TypeError,
                O = c("".indexOf),
                S = c("".replace),
                P = c("".slice),
                j = Math.max,
                $ = function(e, t, r) {
                    return r > e.length ? -1 : "" === t ? r : O(e, t, r)
                };
            o({
                target: "String",
                proto: !0
            }, {
                replaceAll: function(e, t) {
                    var r, o, c, w, D, T, I, H, z, M = l(this),
                        F = 0,
                        L = 0,
                        U = "";
                    if (!h(e)) {
                        if ((r = m(e)) && (o = f(l(_(e))), !~O(o, "g"))) throw C("`.replaceAll` does not allow non-global regexes");
                        if (c = v(e, k)) return n(c, e, M, t);
                        if (x && r) return S(f(M), e, t)
                    }
                    for (w = f(M), D = f(e), (T = d(t)) || (t = f(t)), I = D.length, H = j(1, I), F = $(w, D, 0); - 1 !== F;) z = T ? f(t(D, F, w)) : y(D, w, F, [], void 0, t), U += P(w, L, F) + z, L = F + I, F = $(w, D, F + H);
                    return L < w.length && (U += P(w, L)), U
                }
            })
        },
        1487: function(e, t, r) {
            "use strict";
            r(1424)
        },
        1488: function(e, t, r) {
            var o = r(12)((function(i) {
                return i[1]
            }));
            o.push([e.i, ".desktop-only[data-v-939d5354]{display:none}@media(min-width:768px){.desktop-only[data-v-939d5354]{display:block}.mobile-only[data-v-939d5354]{display:none}}.homepage__pricing-anchor[data-v-939d5354]{display:block;position:relative;top:-32px;visibility:hidden}@media(min-width:768px){.homepage__pricing-anchor[data-v-939d5354]{top:-48px}}@media(min-width:1025px){.homepage__pricing-anchor[data-v-939d5354]{top:-56px}}.homepage[data-v-939d5354] .number-of-customers-counter{display:inline-block;text-align:center;width:77px}", ""]), o.locals = {}, e.exports = o
        },
        1496: function(e, t, r) {
            "use strict";
            r.r(t);
            r(8);
            var o = r(7),
                n = r(59),
                c = r(1),
                l = r(3);

            function d(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function h(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? d(Object(source), !0).forEach((function(t) {
                        Object(c.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var m = r(1291),
                f = o.a.extend({
                    name: "Homepage",
                    components: {
                        Header: m.a
                    },
                    props: {
                        currentSale: {
                            type: Object,
                            required: !0
                        },
                        currentSaleTemplate: {
                            type: String,
                            required: !0
                        },
                        pricingTableData: {
                            type: Object,
                            required: !0
                        },
                        allInOnePremium: {
                            type: Object,
                            required: !0
                        }
                    },
                    async created() {
                        const [{
                            timeLeftMilliseconds: e
                        }] = await n.k.getSaleTimer();
                        this.timerDate = e + Date.now()
                    },
                    data() {
                        return {
                            timerDate: 0,
                            countdownPeriods: {
                                days: this.$t("pages.homepage.header.timer.days"),
                                hours: this.$t("pages.homepage.header.timer.hours"),
                                minutes: this.$t("pages.homepage.header.timer.minutes"),
                                seconds: this.$t("pages.homepage.header.timer.seconds")
                            }
                        }
                    },
                    computed: {
                        pageData() {
                            return {
                                headerData: {
                                    backgroundColor: "primary",
                                    buttonData: {
                                        scrollId: "pricing",
                                        color: "danger",
                                        textSlug: "pages.homepage.header.buttonText"
                                    },
                                    imageSrc: "/h-assets/images/pages/homepage/header-image-2x.png",
                                    imageAlt: (e = this).$t("pages.homepage.header.heading")
                                },
                                hostingPlansListSection: {
                                    title: e.$t("pages.homepage.hostingPlansListSection.title"),
                                    items: ["sslCertificate", "accessManagement", "ecommerceOptimization", "freeMigration", "regularBackups", "ddosProtection", "phpSpeedBoost", "liteSpeedWp", "wpInstallation", "customerSupport", "autoScriptInstaller", "uptimeGuarantee"]
                                },
                                imageCopySections: {
                                    easyToSetUp: {
                                        overline: "pages.homepage.easyToSetUp.overline",
                                        heading: "pages.homepage.easyToSetUp.heading",
                                        description: "pages.homepage.easyToSetUp.description",
                                        linkText: "pages.homepage.easyToSetUp.link",
                                        link: Object(l.b)(`${e.siteUrl}${e.$t("wwwRoutes.technology")}`),
                                        dataClickId: "hgr-homepage-simple_intuitive_section-learn_more_button",
                                        imageSrc: "/h-assets/images/pages/homepage/easy-to-setup-2x.png",
                                        imageAlt: "pages.homepage.easyToSetUp.imageAlt"
                                    },
                                    simplyFast: {
                                        reverse: !0,
                                        overline: "pages.homepage.simplyFast.overline",
                                        heading: "pages.homepage.simplyFast.heading",
                                        description: "pages.homepage.simplyFast.description",
                                        linkText: "pages.homepage.simplyFast.link",
                                        link: Object(l.b)(`${e.siteUrl}${e.$t("wwwRoutes.technology")}`),
                                        dataClickId: "hgr-homepage-performance_speed_section-learn_more_button",
                                        imageSrc: "/h-assets/images/pages/homepage/simply-fast-2x.png",
                                        imageAlt: "pages.homepage.simplyFast.imageAlt"
                                    },
                                    wordpressEasy: h(h({
                                        overline: "pages.homepage.wordpressEasy.overline",
                                        heading: "pages.homepage.wordpressEasy.heading",
                                        description: "pages.homepage.wordpressEasy.description",
                                        linkText: "pages.homepage.wordpressEasy.link"
                                    }, Object(l.a)(e, "wordpress-hosting")), {}, {
                                        dataClickId: "hgr-homepage-wordpress_experience_section-learn_more_button",
                                        imageSrc: "/h-assets/images/pages/homepage/wordpress-easy-2x.png",
                                        imageAlt: "pages.homepage.wordpressEasy.imageAlt"
                                    }),
                                    chatSupport: {
                                        reverse: !0,
                                        overline: "pages.homepage.chatSupport.overline",
                                        heading: "pages.homepage.chatSupport.heading",
                                        description: "pages.homepage.chatSupport.description",
                                        linkText: "pages.homepage.chatSupport.link",
                                        link: Object(l.b)(`${e.siteUrl}${e.$t("wwwRoutes.contacts")}`),
                                        dataClickId: "hgr-homepage-professional_support_section-learn_more_button",
                                        imageSrc: "/h-assets/images/pages/homepage/chat-support-2x.png",
                                        imageAlt: "pages.homepage.chatSupport.imageAlt"
                                    },
                                    scalability: {
                                        overline: "pages.homepage.scalability.overline",
                                        heading: "pages.homepage.scalability.heading",
                                        description: "pages.homepage.scalability.description",
                                        linkText: "pages.homepage.scalability.link",
                                        link: Object(l.b)(`${e.siteUrl}${e.$t("wwwRoutes.pricing")}`),
                                        dataClickId: "hgr-homepage-flexible_scalable_section-learn_more_button",
                                        imageSrc: "/h-assets/images/pages/homepage/scalability-2x.png",
                                        imageAlt: "pages.homepage.scalability.imageAlt"
                                    }
                                },
                                userFriendlyControlPanel: [{
                                    title: "pages.homepage.userFriendlyControlPanel.title",
                                    textBlocks: [{
                                        heading: "pages.homepage.userFriendlyControlPanel.easeOfUse.subtitle",
                                        paragraph: "pages.homepage.userFriendlyControlPanel.easeOfUse.description"
                                    }, {
                                        heading: "pages.homepage.userFriendlyControlPanel.powerful.subtitle",
                                        paragraph: "pages.homepage.userFriendlyControlPanel.powerful.description"
                                    }, {
                                        heading: "pages.homepage.userFriendlyControlPanel.wordpressOptimized.subtitle",
                                        paragraph: "pages.homepage.userFriendlyControlPanel.wordpressOptimized.description"
                                    }],
                                    imageData: {
                                        src: "/h-assets/images/pages/homepage/user-friendly-control-panel-2x.png",
                                        alt: "pages.homepage.userFriendlyControlPanel.title"
                                    }
                                }],
                                clientReviews: {
                                    title: "pages.homepageUplift.clientReviews.title",
                                    cards: [{
                                        icons: [{
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }],
                                        review: e.$t("pages.homepageUplift.clientReviews.jakeReview"),
                                        link: "https://www.hostinger.es/blog/experiencia-de-migracion-de-jake-en-hostinger",
                                        author: {
                                            image: "jake",
                                            name: "Jake Sinclair",
                                            role: e.$t("pages.homepageUplift.clientReviews.jakeRole")
                                        }
                                    }, {
                                        icons: [{
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }],
                                        review: e.$t("pages.homepage.clientReviews.cristianReview"),
                                        link: "https://www.hostinger.es/blog/ucav-redefiniendo-la-educacion-para-la-era-digital",
                                        author: {
                                            image: "cristian",
                                            name: "Cristian Jair Hernández Ferreyra",
                                            role: e.$t("pages.homepage.clientReviews.cristianRole")
                                        }
                                    }, {
                                        icons: [{
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }],
                                        review: e.$t("pages.homepageUplift.clientReviews.jhonReview"),
                                        link: "https://www.hostinger.es/blog/como-jhon-hizo-crecer-su-negocio-de-minecraft-con-hostinger",
                                        author: {
                                            image: "jhon",
                                            name: "Jhon Ortega",
                                            role: e.$t("pages.homepageUplift.clientReviews.jhonRole")
                                        }
                                    }],
                                    buttonData: {
                                        type: "outline",
                                        dataClickId: `hgr-${e.pageNameDataClickId}-client_review_section-show_more`,
                                        link: "https://www.hostinger.es/blog/historias-de-clientes"
                                    }
                                },
                                moneyBackGuarantee: {
                                    textSlugs: {
                                        title: "components.moneyBackGuarantee.title",
                                        description: "components.moneyBackGuarantee.description",
                                        button: "components.moneyBackGuarantee.buttonText",
                                        link: "components.moneyBackGuarantee.linkText"
                                    },
                                    buttonData: {
                                        dataClickId: `hgr-${e.pageNameDataClickId}-thirty_day_money_back_section-get_started_button`,
                                        scrollToId: "pricing"
                                    },
                                    linkData: {
                                        path: Object(l.b)(`${e.siteUrl}${e.$t("wwwRoutes.refundPolicy")}`),
                                        dataClickId: `hgr-${e.pageNameDataClickId}-thirty_day_money_back_section-learn_more_button`
                                    }
                                }
                            };
                            var e
                        },
                        price() {
                            var e, t;
                            return (null === (t = null === (e = this.promotedPlan) || void 0 === e ? void 0 : e.price) || void 0 === t ? void 0 : t.purchase) || 1.99
                        },
                        discount() {
                            var e, t;
                            return (null === (t = null === (e = this.promotedPlan) || void 0 === e ? void 0 : e.price) || void 0 === t ? void 0 : t.discount) || 80
                        },
                        headerDescription() {
                            const e = this;
                            let t = "pages.homepage.header.descriptionSSL";
                            return "ssl_ddos" === e.currentSale.offer && (t = "pages.homepage.header.descriptionSSLDDoS"), e.$t(t, {
                                discount: e.discount
                            })
                        },
                        showReclameAquiBadge() {
                            return ["BR"].includes(this.themeData.country.code)
                        },
                        reclameAquiBadge: () => ({
                            src: "/h-assets/images/pages/homepage/reclame-badge-br-2x.png",
                            alt: "Reclame AQUI"
                        }),
                        showSinglePlanPricingTable() {
                            return ["ES", "BR", "IN"].includes(this.themeData.country.code)
                        },
                        showSingleTabPricingTable() {
                            return ["FR", "GB", "AR", "IT", "NL", "MY", "PT", "LT"].includes(this.themeData.country.code)
                        },
                        showClientReviews() {
                            return ["ES", "AR", "MX"].includes(this.themeData.country.code)
                        },
                        sharedHostingOnlyPricingtableData() {
                            return {
                                sharedHosting: this.pricingTableData.sharedHosting
                            }
                        },
                        promotedPlan() {
                            return this.showSinglePlanPricingTable && this.allInOnePremium.products[0] || {}
                        }
                    }
                }),
                v = (r(1483), r(5)),
                component = Object(v.a)(f, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "homepage"
                    }, [t("Header", {
                        attrs: {
                            "current-sale": e.currentSale,
                            "current-sale-template": e.currentSaleTemplate,
                            "price-data": e.pricingTableData.sharedHosting.products[1].price
                        }
                    }), e._v(" "), t("HTrustSignals"), e._v(" "), t("div", {
                        staticClass: "homepage__pricing-anchor",
                        attrs: {
                            id: "pricing"
                        }
                    }), e._v(" "), e.showSinglePlanPricingTable ? [t("HSinglePricingTableSection", {
                        attrs: {
                            title: e.$t("pages.homepage.pricingTable.heading"),
                            description: e.$t("pages.homepage.pricingTable.description"),
                            product: e.allInOnePremium.products[0],
                            "table-slug": e.allInOnePremium.slug,
                            "show-sale-offer": ""
                        }
                    }), e._v(" "), t("HProductFeatureList", {
                        attrs: {
                            data: e.pageData.hostingPlansListSection
                        }
                    })] : e.showSingleTabPricingTable ? t("HPricingTable", {
                        attrs: {
                            plans: e.sharedHostingOnlyPricingtableData,
                            "show-sale-offer": ""
                        }
                    }) : t("HPricingTable", {
                        attrs: {
                            plans: e.pricingTableData,
                            "show-sale-offer": ""
                        }
                    }), e._v(" "), t("HDomainSearch"), e._v(" "), e._l(e.pageData.imageCopySections, (function(section, r) {
                        return t("HImageSectionTwoCols", {
                            key: r,
                            attrs: {
                                section: section
                            },
                            scopedSlots: e._u([{
                                key: "button",
                                fn: function() {
                                    return [t(section.nuxtLink ? "NuxtLink" : "a", {
                                        tag: "Component",
                                        attrs: {
                                            "data-click-id": section.dataClickId,
                                            href: section.link,
                                            to: e.nuxtTo(section.nuxtLink)
                                        }
                                    }, [e._v("\n        " + e._s(e.$t(e.isNiaga ? "" : section.linkText)) + "\n      ")])]
                                },
                                proxy: !0
                            }], null, !0)
                        })
                    })), e._v(" "), t("HMultiTextsSection", {
                        attrs: {
                            data: e.pageData.userFriendlyControlPanel,
                            "background-color": "light"
                        }
                    }), e._v(" "), e.showClientReviews ? t("HClientReviews", {
                        attrs: {
                            data: e.pageData.clientReviews
                        }
                    }) : e._e(), e._v(" "), t("HTextButtonSection", {
                        attrs: {
                            "text-slugs": e.pageData.moneyBackGuarantee.textSlugs,
                            "button-data": e.pageData.moneyBackGuarantee.buttonData,
                            "link-data": e.pageData.moneyBackGuarantee.linkData
                        }
                    })], 2)
                }), [], !1, null, "5d34e93f", null);
            t.default = component.exports;
            installComponents(component, {
                HTrustSignals: r(1441).default,
                HSinglePricingTableSection: r(1255).default,
                HProductFeatureList: r(1336).default,
                HPricingTable: r(1146).default,
                HDomainSearch: r(1377).default,
                HImageSectionTwoCols: r(1166).default,
                HMultiTextsSection: r(1145).default,
                HClientReviews: r(1287).default,
                HTextButtonSection: r(1169).default
            })
        },
        1497: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(1);

            function n(object, e) {
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
                    i % 2 ? n(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : n(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            r(16), r(29), r(1485);
            var l = r(7),
                d = r(1172),
                h = r(1291),
                m = l.a.extend({
                    name: "HomepageUplift",
                    components: {
                        Header: h.a
                    },
                    props: {
                        currentSale: {
                            type: Object,
                            required: !0
                        },
                        currentSaleTemplate: {
                            type: String,
                            required: !0
                        },
                        trustpilotData: {
                            type: Object,
                            required: !0
                        },
                        pricingTableDataNewFeatures: {
                            type: Object,
                            required: !0
                        },
                        pricingTableDataSharedAndCloud: {
                            type: Object,
                            required: !0
                        }
                    },
                    data: () => ({
                        numberOfCustomers: (new Intl.NumberFormat).format(1e6)
                    }),
                    computed: {
                        pageData() {
                            return {
                                headerData: {
                                    heading: (e = this).$t("pages.homepageUplift.header.heading"),
                                    description: e.$t("pages.homepageUplift.header.description", {
                                        numberOfCustomers: e.numberOfCustomers
                                    }),
                                    backgroundColor: "primary",
                                    features: [e.$t("global.features.moneyBackGuarantee")],
                                    buttonData: {
                                        scrollId: "pricing",
                                        color: "danger",
                                        textSlug: "pages.homepageUplift.header.buttonText"
                                    },
                                    imageSrc: "/h-assets/images/pages/homepage-uplift/header-image-2x.png",
                                    imageAlt: e.$t("pages.homepageUplift.header.heading")
                                },
                                partnerReviews: {
                                    google: {
                                        icon: {
                                            src: "/h-assets/images/icons/google-dark.svg",
                                            width: 74,
                                            height: 24,
                                            alt: "Google"
                                        },
                                        rating: {
                                            stars: "4.8/5",
                                            count: 1237
                                        }
                                    },
                                    hostadvice: {
                                        icon: {
                                            src: "/h-assets/images/icons/hostadvice-dark.svg",
                                            width: 131,
                                            height: 24,
                                            alt: "HostAdvice"
                                        },
                                        rating: {
                                            stars: "4.5/5",
                                            count: 2416
                                        }
                                    },
                                    wpbeginner: {
                                        icon: {
                                            src: "/h-assets/images/icons/wpbeginner-dark.svg",
                                            width: 160,
                                            height: 30,
                                            alt: "WpBeginner"
                                        },
                                        rating: {
                                            stars: "4.7",
                                            count: 874
                                        }
                                    }
                                },
                                pricingBanner: {
                                    title: e.$t("pages.homepageUplift.pricingBanner.title"),
                                    description: e.$t("pages.homepageUplift.pricingBanner.description")
                                },
                                allInOneWebsite: {
                                    heading: e.$t("pages.homepageUplift.allInOneWebsite.heading"),
                                    featuresList: [{
                                        text: e.$t("pages.homepageUplift.allInOneWebsite.featuresList.first", {
                                            numberOfWebsites: "100"
                                        })
                                    }, {
                                        text: e.$t("pages.homepageUplift.allInOneWebsite.featuresList.second"),
                                        tooltip: e.$t("pages.homepageUplift.allInOneWebsite.featuresList.secondTooltip", {
                                            freeDomainList: d.a[e.themeData.country.code] || d.a.US,
                                            numberOfDays: "60"
                                        })
                                    }, {
                                        text: e.$t("pages.homepageUplift.allInOneWebsite.featuresList.third"),
                                        tooltip: e.$t("pages.homepageUplift.allInOneWebsite.featuresList.thirdTooltip", {
                                            numberOfEmails: "100",
                                            storageLimit: "1GB"
                                        })
                                    }, {
                                        text: e.$t("pages.homepageUplift.allInOneWebsite.featuresList.fourth")
                                    }, {
                                        text: e.$t("pages.homepageUplift.allInOneWebsite.featuresList.fifth")
                                    }],
                                    imageData: {
                                        src: "/h-assets/images/pages/homepage-uplift/all-in-one-website-2x.png",
                                        alt: e.$t("pages.homepageUplift.allInOneWebsite.heading")
                                    },
                                    reviewCards: [{
                                        text: e.$t("pages.homepageUplift.allInOneWebsite.reviewCards.first.text"),
                                        icon: e.$t("pages.homepageUplift.allInOneWebsite.reviewCards.first.icon"),
                                        iconBottom: e.$t("pages.homepageUplift.allInOneWebsite.reviewCards.first.iconBottom"),
                                        link: e.$t("pages.homepageUplift.allInOneWebsite.reviewCards.first.link")
                                    }, {
                                        text: e.$t("pages.homepageUplift.allInOneWebsite.reviewCards.second.text"),
                                        icon: e.$t("pages.homepageUplift.allInOneWebsite.reviewCards.second.icon"),
                                        iconBottom: e.$t("pages.homepageUplift.allInOneWebsite.reviewCards.second.iconBottom"),
                                        link: e.$t("pages.homepageUplift.allInOneWebsite.reviewCards.second.link")
                                    }, {
                                        text: e.$t("pages.homepageUplift.allInOneWebsite.reviewCards.third.text"),
                                        icon: e.$t("pages.homepageUplift.allInOneWebsite.reviewCards.third.icon"),
                                        iconBottom: e.$t("pages.homepageUplift.allInOneWebsite.reviewCards.third.iconBottom"),
                                        link: e.$t("pages.homepageUplift.allInOneWebsite.reviewCards.third.link")
                                    }]
                                },
                                maximizeWebsiteSpeed: {
                                    reverse: !0,
                                    heading: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.heading"),
                                    featuresList: [{
                                        text: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.featuresList.first")
                                    }, {
                                        text: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.featuresList.second")
                                    }, {
                                        text: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.featuresList.third")
                                    }],
                                    imageData: {
                                        src: "/h-assets/images/pages/homepage-uplift/maximize-website-speed-2x.png",
                                        alt: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.heading")
                                    },
                                    reviewCards: [{
                                        text: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.reviewCards.first.text"),
                                        icon: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.reviewCards.first.icon"),
                                        iconBottom: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.reviewCards.first.iconBottom"),
                                        link: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.reviewCards.first.link")
                                    }, {
                                        text: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.reviewCards.second.text"),
                                        icon: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.reviewCards.second.icon"),
                                        iconBottom: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.reviewCards.second.iconBottom"),
                                        link: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.reviewCards.second.link")
                                    }, {
                                        text: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.reviewCards.third.text"),
                                        icon: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.reviewCards.third.icon"),
                                        iconBottom: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.reviewCards.third.iconBottom"),
                                        link: e.$t("pages.homepageUplift.maximizeWebsiteSpeed.reviewCards.third.link")
                                    }]
                                },
                                customerSupport: {
                                    heading: e.$t("pages.homepageUplift.customerSupport.heading"),
                                    featuresList: [{
                                        text: e.$t("pages.homepageUplift.customerSupport.featuresList.first")
                                    }, {
                                        text: e.$t("pages.homepageUplift.customerSupport.featuresList.second")
                                    }, {
                                        text: e.$t("pages.homepageUplift.customerSupport.featuresList.third")
                                    }],
                                    imageData: {
                                        src: "/h-assets/images/pages/homepage-uplift/customer-support-2x.png",
                                        alt: e.$t("pages.homepageUplift.customerSupport.heading")
                                    },
                                    reviewCards: [{
                                        text: e.$t("pages.homepageUplift.customerSupport.reviewCards.first.text"),
                                        icon: e.$t("pages.homepageUplift.customerSupport.reviewCards.first.icon"),
                                        iconBottom: e.$t("pages.homepageUplift.customerSupport.reviewCards.first.iconBottom"),
                                        link: e.$t("pages.homepageUplift.customerSupport.reviewCards.first.link")
                                    }, {
                                        text: e.$t("pages.homepageUplift.customerSupport.reviewCards.second.text"),
                                        icon: e.$t("pages.homepageUplift.customerSupport.reviewCards.second.icon"),
                                        iconBottom: e.$t("pages.homepageUplift.customerSupport.reviewCards.second.iconBottom"),
                                        link: e.$t("pages.homepageUplift.customerSupport.reviewCards.second.link")
                                    }, {
                                        text: e.$t("pages.homepageUplift.customerSupport.reviewCards.third.text"),
                                        icon: e.$t("pages.homepageUplift.customerSupport.reviewCards.third.icon"),
                                        iconBottom: e.$t("pages.homepageUplift.customerSupport.reviewCards.third.iconBottom"),
                                        link: e.$t("pages.homepageUplift.customerSupport.reviewCards.third.link")
                                    }]
                                },
                                joinWebsiteOwners: {
                                    textSlugs: {
                                        title: "pages.homepageUplift.joinWebsiteOwners.title",
                                        translateTitle: {
                                            tag: "h2",
                                            params: {
                                                numberOfOwners: d.c
                                            }
                                        },
                                        button: "pages.homepageUplift.joinWebsiteOwners.buttonText"
                                    },
                                    buttonData: {
                                        dataClickId: `hgr-${e.pageNameDataClickId}-join_website_owners_section-get_started_button`,
                                        scrollToId: "pricing"
                                    },
                                    features: ["global.features.moneyBackGuarantee"]
                                },
                                advancedSecurityFeatures: {
                                    reverse: !0,
                                    heading: e.$t("pages.homepageUplift.advancedSecurityFeatures.heading"),
                                    featuresList: [{
                                        text: e.$t("pages.homepageUplift.advancedSecurityFeatures.featuresList.first")
                                    }, {
                                        text: e.$t("pages.homepageUplift.advancedSecurityFeatures.featuresList.second")
                                    }, {
                                        text: e.$t("pages.homepageUplift.advancedSecurityFeatures.featuresList.third")
                                    }, {
                                        text: e.$t("pages.homepageUplift.advancedSecurityFeatures.featuresList.fourth")
                                    }],
                                    imageData: {
                                        src: "/h-assets/images/pages/homepage-uplift/advanced-security-features-2x.png",
                                        alt: e.$t("pages.homepageUplift.advancedSecurityFeatures.heading")
                                    },
                                    reviewCards: [{
                                        text: e.$t("pages.homepageUplift.advancedSecurityFeatures.reviewCards.first.text"),
                                        icon: e.$t("pages.homepageUplift.advancedSecurityFeatures.reviewCards.first.icon"),
                                        iconBottom: e.$t("pages.homepageUplift.advancedSecurityFeatures.reviewCards.first.iconBottom"),
                                        link: e.$t("pages.homepageUplift.advancedSecurityFeatures.reviewCards.first.link")
                                    }, {
                                        text: e.$t("pages.homepageUplift.advancedSecurityFeatures.reviewCards.second.text"),
                                        icon: e.$t("pages.homepageUplift.advancedSecurityFeatures.reviewCards.second.icon"),
                                        iconBottom: e.$t("pages.homepageUplift.advancedSecurityFeatures.reviewCards.second.iconBottom"),
                                        link: e.$t("pages.homepageUplift.advancedSecurityFeatures.reviewCards.second.link")
                                    }, {
                                        text: e.$t("pages.homepageUplift.advancedSecurityFeatures.reviewCards.third.text"),
                                        icon: e.$t("pages.homepageUplift.advancedSecurityFeatures.reviewCards.third.icon"),
                                        iconBottom: e.$t("pages.homepageUplift.advancedSecurityFeatures.reviewCards.third.iconBottom"),
                                        link: e.$t("pages.homepageUplift.advancedSecurityFeatures.reviewCards.third.link")
                                    }]
                                },
                                freeMigration: {
                                    heading: e.$t("pages.homepageUplift.freeMigration.heading"),
                                    featuresList: [{
                                        text: e.$t("pages.homepageUplift.freeMigration.featuresList.first")
                                    }, {
                                        text: e.$t("pages.homepageUplift.freeMigration.featuresList.second")
                                    }, {
                                        text: e.$t("pages.homepageUplift.freeMigration.featuresList.third")
                                    }],
                                    imageData: {
                                        src: "/h-assets/images/pages/homepage-uplift/free-migration-2x.png",
                                        alt: e.$t("pages.homepageUplift.freeMigration.heading")
                                    },
                                    reviewCards: [{
                                        text: e.$t("pages.homepageUplift.freeMigration.reviewCards.first.text"),
                                        icon: e.$t("pages.homepageUplift.freeMigration.reviewCards.first.icon"),
                                        iconBottom: e.$t("pages.homepageUplift.freeMigration.reviewCards.first.iconBottom"),
                                        link: e.$t("pages.homepageUplift.freeMigration.reviewCards.first.link")
                                    }, {
                                        text: e.$t("pages.homepageUplift.freeMigration.reviewCards.second.text"),
                                        icon: e.$t("pages.homepageUplift.freeMigration.reviewCards.second.icon"),
                                        iconBottom: e.$t("pages.homepageUplift.freeMigration.reviewCards.second.iconBottom"),
                                        link: e.$t("pages.homepageUplift.freeMigration.reviewCards.second.link")
                                    }, {
                                        text: e.$t("pages.homepageUplift.freeMigration.reviewCards.third.text"),
                                        icon: e.$t("pages.homepageUplift.freeMigration.reviewCards.third.icon"),
                                        iconBottom: e.$t("pages.homepageUplift.freeMigration.reviewCards.third.iconBottom"),
                                        link: e.$t("pages.homepageUplift.freeMigration.reviewCards.third.link")
                                    }]
                                },
                                clientReviews: {
                                    title: "pages.homepageUplift.clientReviews.title",
                                    cards: [{
                                        icons: [{
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }],
                                        review: e.$t("pages.homepageUplift.clientReviews.first.text"),
                                        link: e.$t("pages.homepageUplift.clientReviews.first.link"),
                                        author: {
                                            image: e.$t("pages.homepageUplift.clientReviews.first.image"),
                                            name: e.$t("pages.homepageUplift.clientReviews.first.name"),
                                            role: e.$t("pages.homepageUplift.clientReviews.first.role")
                                        }
                                    }, {
                                        icons: [{
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }],
                                        review: e.$t("pages.homepageUplift.clientReviews.second.text"),
                                        link: e.$t("pages.homepageUplift.clientReviews.second.link"),
                                        author: {
                                            image: e.$t("pages.homepageUplift.clientReviews.second.image"),
                                            name: e.$t("pages.homepageUplift.clientReviews.second.name"),
                                            role: e.$t("pages.homepageUplift.clientReviews.second.role")
                                        }
                                    }, {
                                        icons: [{
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }, {
                                            name: "review-icons/ic-star",
                                            color: "primary"
                                        }],
                                        review: e.$t("pages.homepageUplift.clientReviews.third.text"),
                                        link: e.$t("pages.homepageUplift.clientReviews.third.link"),
                                        author: {
                                            image: e.$t("pages.homepageUplift.clientReviews.third.image"),
                                            name: e.$t("pages.homepageUplift.clientReviews.third.name"),
                                            role: e.$t("pages.homepageUplift.clientReviews.third.role")
                                        }
                                    }],
                                    buttonData: {
                                        type: "outline",
                                        dataClickId: `hgr-${e.pageNameDataClickId}-client_review_section-show_more`,
                                        link: e.$t("pages.homepageUplift.clientReviews.buttonLink")
                                    }
                                },
                                serverLocationsData: {
                                    sectionBackgroundColor: "ghost-white",
                                    heading: "pages.homepageUplift.serverLocations.heading",
                                    description: "pages.homepageUplift.serverLocations.description",
                                    imageSrc: "/h-assets/images/server-locations/web-hosting/image-2x.png",
                                    imageAlt: "pages.homepageUplift.serverLocations.heading"
                                }
                            };
                            var e
                        },
                        isPricingTableNewFeaturesTestActive() {
                            return "en_US" === this.themeData.language.code
                        }
                    },
                    mounted() {
                        setTimeout((() => {
                            this.increaseCounterFromTo({
                                from: this.numberOfCustomers,
                                to: d.c,
                                interval: 1400
                            })
                        }), 500)
                    },
                    methods: {
                        increaseCounterFromTo({
                            from: e,
                            to: t,
                            interval: r
                        }) {
                            let o = parseInt(e.replaceAll(",", ""));
                            const n = parseInt(t.replaceAll(",", "")),
                                c = Math.ceil((n - o) / r * 50),
                                l = setInterval((() => {
                                    this.$set(this, "numberOfCustomers", (new Intl.NumberFormat).format(o)), o += c, o >= n && (this.$set(this, "numberOfCustomers", (new Intl.NumberFormat).format(n)), clearInterval(l))
                                }), 50)
                        }
                    }
                }),
                f = (r(1487), r(5)),
                component = Object(f.a)(m, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "homepage"
                    }, [t("Header", {
                        attrs: {
                            "current-sale": e.currentSale,
                            "current-sale-template": e.currentSaleTemplate,
                            "price-data": e.pricingTableDataSharedAndCloud.sharedAndCloudGrouped.products[0].price
                        }
                    }), e._v(" "), e.isNiaga ? e._e() : t("HPartnerReviews", {
                        attrs: {
                            data: c({
                                trustpilot: e.trustpilotData
                            }, e.pageData.partnerReviews)
                        }
                    }), e._v(" "), t("div", {
                        staticClass: "homepage__pricing-anchor",
                        attrs: {
                            id: "pricing"
                        }
                    }), e._v(" "), t("HPricingTable", {
                        staticClass: "pricing-table-homepage-ab-original",
                        attrs: {
                            plans: e.pricingTableDataSharedAndCloud,
                            title: "components.pricingTable.sharedHostingTitle",
                            "show-sale-offer": ""
                        }
                    }), e._v(" "), e.isPricingTableNewFeaturesTestActive ? t("HPricingTable", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }],
                        staticClass: "pricing-table-homepage-ab-tested",
                        attrs: {
                            plans: e.pricingTableDataNewFeatures,
                            title: "components.pricingTable.sharedHostingTitle",
                            "show-sale-offer": ""
                        }
                    }) : e._e(), e._v(" "), t("HImageSectionOneCol", {
                        attrs: {
                            section: e.pageData.serverLocationsData
                        }
                    }), e._v(" "), t("HFeaturesReviewsSection", {
                        attrs: {
                            data: e.pageData.allInOneWebsite
                        }
                    }), e._v(" "), t("HFeaturesReviewsSection", {
                        attrs: {
                            data: e.pageData.maximizeWebsiteSpeed,
                            "background-color": "ghost-white",
                            "card-background-color": "white-blue"
                        }
                    }), e._v(" "), t("HFeaturesReviewsSection", {
                        attrs: {
                            data: e.pageData.customerSupport
                        }
                    }), e._v(" "), t("HTextButtonSection", {
                        attrs: {
                            "text-slugs": e.pageData.joinWebsiteOwners.textSlugs,
                            "button-data": e.pageData.joinWebsiteOwners.buttonData,
                            features: e.pageData.joinWebsiteOwners.features
                        }
                    }), e._v(" "), t("HFeaturesReviewsSection", {
                        attrs: {
                            data: e.pageData.advancedSecurityFeatures,
                            "background-color": "primary",
                            "card-background-color": "primary-dark"
                        }
                    }), e._v(" "), t("HFeaturesReviewsSection", {
                        attrs: {
                            data: e.pageData.freeMigration
                        }
                    }), e._v(" "), t("HClientReviews", {
                        attrs: {
                            data: e.pageData.clientReviews
                        }
                    }), e._v(" "), t("HTextButtonSection", {
                        attrs: {
                            "text-slugs": e.pageData.joinWebsiteOwners.textSlugs,
                            "button-data": e.pageData.joinWebsiteOwners.buttonData,
                            features: e.pageData.joinWebsiteOwners.features
                        }
                    })], 1)
                }), [], !1, null, "939d5354", null);
            t.default = component.exports;
            installComponents(component, {
                HPartnerReviews: r(1181).default,
                HPricingTable: r(1146).default,
                HImageSectionOneCol: r(1228).default,
                HFeaturesReviewsSection: r(1233).default,
                HTextButtonSection: r(1169).default,
                HClientReviews: r(1287).default
            })
        },
        1673: function(e, t, r) {
            "use strict";
            r.r(t);
            r(127), r(8);
            var o = r(7),
                n = r(1135),
                c = r(338),
                l = r(3),
                d = r(1496),
                h = r(1497),
                m = o.a.extend({
                    name: "IndexPage",
                    components: {
                        Homepage: d.default,
                        HomepageUplift: h.default
                    },
                    async fetch() {
                        this.allInOnePremium = await this.loadPricingTableData("all_in_one_premium"), this.pricingTableData.sharedHosting = await this.loadPricingTableData("shared_hosting"), this.pricingTableDataSharedAndCloud.sharedAndCloudGrouped = await this.loadPricingTableData("shared_and_cloud_grouped"), this.pricingTableDataNewFeatures.sharedAndCloudGrouped = await this.loadPricingTableData("shared_and_cloud_grouped_new")
                    },
                    head() {
                        return {
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: this.description
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: this.description
                            }, {
                                hid: "twitter:description",
                                property: "twitter:description",
                                content: this.description
                            }],
                            link: [{
                                rel: "preload",
                                href: this.preloadImageLinks.small,
                                as: "image",
                                media: "(max-width: 767px)"
                            }, {
                                rel: "preload",
                                href: this.preloadImageLinks.regular,
                                as: "image",
                                media: "(min-width: 768px)"
                            }, ...this.filterHreflangLinks(c.a, "en_PK", "pk")]
                        }
                    },
                    jsonld() {
                        const e = (this.isHomepageUplift ? [this.pricingTableData.sharedHosting.products[1]] : [...this.pricingTableData.sharedHosting.products]).map((e => ({
                                "@type": "AggregateOffer",
                                name: e.title,
                                priceCurrency: this.themeData.currency.code,
                                lowPrice: e.price.purchase
                            }))),
                            t = {
                                lang: this.language,
                                siteUrl: this.siteUrl,
                                streetAddress: this.themeData.streetAddress,
                                addressLocality: this.themeData.addressLocality,
                                postalCode: this.themeData.postalCode,
                                addressCountry: this.themeData.addressCountry,
                                email: this.themeData.contactEmail,
                                contactPage: this.contactPage,
                                facebook: this.themeData.facebookLink,
                                twitter: this.themeData.twitterLink,
                                youtubeLinks: this.themeData.youtubeLinks,
                                pageUrl: this.siteUrl + this.$route.path,
                                pageTitle: this.$t("head.base.title"),
                                pageDescription: this.$t("head.base.description"),
                                productType: "Web Hosting"
                            };
                        return {
                            "@context": "http://schema.org",
                            "@graph": [Object(n.b)(t), Object(n.e)(t), Object(n.d)(t), Object(n.c)(t, e)]
                        }
                    },
                    inject: ["getCurrentSale", "getCurrentSaleTemplate"],
                    data: () => ({
                        trustPilotData: {},
                        pricingTableData: {},
                        pricingTableDataSharedAndCloud: {},
                        pricingTableDataNewFeatures: {},
                        allInOnePremium: {}
                    }),
                    computed: {
                        contactPage() {
                            return Object(l.b)(`${this.siteUrl}${this.$t("wwwRoutes.refundPolicy")}`)
                        },
                        description() {
                            return ["BR"].includes(this.themeData.country.code) ? this.$t("head.base.descriptionWithPercentage", {
                                percentage: this.allInOnePremium.products[0].price.discount
                            }) : this.$t("head.base.description")
                        },
                        saleImageSuffix() {
                            return ["ar_AR", "en_JP", "vi_VN", "zh_CN", "tr_TR", "id_ID", "en_PK"].includes(this.themeData.language.code) ? "-ae" : "consumermonth2023" === this.currentSaleTemplate ? this.marchSaleLocaleImageSuffix : ""
                        },
                        marchSaleLocaleImageSuffix() {
                            return "BR" === this.themeData.country.code ? "-br-consumer-month" : ["AR", "MX"].includes(this.themeData.country.code) ? "-ar-mx-consumer-month" : "-co-consumer-month"
                        },
                        preloadImageLinks() {
                            return "marchSaleIndia2023" === this.currentSaleTemplate ? {
                                small: `/h-assets/images/sales/february/${this.pageName}-hero-in-march-sale-small-2x.png`,
                                regular: `/h-assets/images/sales/february/${this.pageName}-hero-in-march-sale-2x.png`
                            } : "romualdFonsSale2023" === this.currentSaleTemplate ? {
                                small: `/h-assets/images/sales/february/${this.pageName}-hero-romuald-fons-sale-small-2x.png`,
                                regular: `/h-assets/images/sales/february/${this.pageName}-hero-romuald-fons-sale-2x.png`
                            } : {
                                small: `/h-assets/images/sales/february/${this.pageName}-hero${this.saleImageSuffix}-small-2x.png`,
                                regular: `/h-assets/images/sales/february/${this.pageName}-hero${this.saleImageSuffix}-2x.png`
                            }
                        },
                        isHomepageUplift() {
                            return "ng_NG" !== this.themeData.language.code
                        },
                        currentSale() {
                            return this.getCurrentSale()
                        },
                        currentSaleTemplate() {
                            return this.getCurrentSaleTemplate()
                        }
                    }
                }),
                f = r(5),
                component = Object(f.a)(m, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return e.isHomepageUplift ? t("HomepageUplift", {
                        attrs: {
                            "current-sale": e.currentSale,
                            "current-sale-template": e.currentSaleTemplate,
                            "trustpilot-data": e.trustPilotData,
                            "pricing-table-data-shared-and-cloud": e.pricingTableDataSharedAndCloud,
                            "pricing-table-data-new-features": e.pricingTableDataNewFeatures
                        }
                    }) : t("Homepage", {
                        attrs: {
                            "current-sale": e.currentSale,
                            "current-sale-template": e.currentSaleTemplate,
                            "pricing-table-data": e.pricingTableData,
                            "all-in-one-premium": e.allInOnePremium
                        }
                    })
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                HomepageUplift: r(1497).default,
                Homepage: r(1496).default
            })
        }
    }
]);