(window.webpackJsonp = window.webpackJsonp || []).push([
    [180, 11, 12, 15, 16, 83, 84, 85, 87, 97, 100, 123, 124, 126, 134, 145, 146, 147, 156, 158, 160, 177], {
        1106: function(t, e, r) {
            var content = r(1125);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("4780a4c8", content, !0, {
                sourceMap: !1
            })
        },
        1111: function(t, e, r) {
            "use strict";
            var n = r(1),
                o = (r(16), r(29), r(8), r(527)),
                d = r.n(o),
                c = r(105),
                l = r(7),
                h = r(0),
                f = r(59);

            function m(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function _(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? m(Object(source), !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            e.a = l.a.extend({
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
                    generateListId(t, e) {
                        return `${this.pageNameDataClickId}-${t}-${e}`
                    },
                    generateListName(t, e) {
                        return `${this.pageNameCapitalized} ${Object(h.C)(e||"")} ${t}`
                    },
                    sendAllGAData({
                        id: t,
                        name: e,
                        slug: r,
                        products: n
                    }) {
                        this.sendImpressionListGA4(t, e, r, n), this.sendImpressionItemGA4(t, e, r, n), this.sendImpressionsGAUniversal(t, r, n), this.sendDetailsGAUniversal(t, r, n)
                    },
                    sendImpressionListGA4(t, e, r, n) {
                        Object(c.event)(new c.ViewItemList(this.getImpressionDataStructure(t, e, r, n)))
                    },
                    sendImpressionItemGA4(t, e, r, n) {
                        Object(c.event)(new c.ViewItem(this.getImpressionDataStructure(t, e, r, n)))
                    },
                    sendImpressionsGAUniversal(t, e, r) {
                        const n = r.map(((r, n) => ({
                            name: r.productSlug,
                            id: r.productSlug,
                            position: n,
                            list: this.generateListId(t, e),
                            price: r.price.purchase
                        })));
                        this.$gtm.push({
                            event: "eec.impressionView",
                            ecommerce: {
                                impressions: n
                            }
                        })
                    },
                    sendDetailsGAUniversal(t, e, r) {
                        const n = r.map((t => ({
                            name: t.productSlug,
                            id: t.productSlug,
                            price: t.price.purchase
                        })));
                        this.$gtm.push({
                            event: "eec.detail",
                            ecommerce: {
                                detail: {
                                    actionField: {
                                        list: this.generateListId(t, e)
                                    },
                                    products: n
                                }
                            }
                        })
                    },
                    getImpressionDataStructure(t, e, r, n) {
                        return n.map(((n, o) => this.createHItemFromProduct(n).setList(this.generateListId(t, r), this.generateListName(e, r), o)))
                    },
                    getCookieData() {
                        const t = [];
                        return ["hasoffers_session", "irclickid", "awc", "rr_wcid", "rr_referralcode"].forEach((e => {
                            const r = this.$cookies.get(e);
                            r && t.push({
                                key: e,
                                value: r.toString()
                            })
                        })), t
                    },
                    getSelectedProductData(t, e, r, n, o) {
                        const d = n.findIndex((({
                            productSlug: t
                        }) => t === o.productSlug));
                        return {
                            selectedGA4Item: this.createHItemFromProduct(o).setList(this.generateListId(t, r), this.generateListName(e, r), d),
                            selectedGAUniversalItem: {
                                name: o.productSlug,
                                id: o.productSlug,
                                price: o.price.purchase,
                                position: d
                            }
                        }
                    },
                    selectProductGA4(t, e, r, n, o) {
                        const d = this.getSelectedProductData(t, e, r, n, o),
                            l = {
                                click: {
                                    actionField: {
                                        list: this.generateListId(t, r)
                                    },
                                    products: [null == d ? void 0 : d.selectedGAUniversalItem]
                                }
                            },
                            h = null == d ? void 0 : d.selectedGA4Item;
                        Object(c.event)(new c.SelectItem([h])), this.$gtm.push({
                            event: "eec.impressionClick",
                            ecommerce: l
                        })
                    },
                    addProductGA4(t, e, r, n, o) {
                        const d = this.getSelectedProductData(t, e, r, n, o),
                            l = {
                                add: {
                                    actionField: {
                                        list: this.generateListId(t, r)
                                    },
                                    products: [null == d ? void 0 : d.selectedGAUniversalItem]
                                }
                            },
                            h = null == d ? void 0 : d.selectedGA4Item;
                        Object(c.event)(new c.AddToCart([h])), this.$gtm.push({
                            event: "eec.add",
                            ecommerce: l
                        })
                    },
                    async addToCart({
                        id: t,
                        name: e,
                        slug: r,
                        products: n,
                        product: o,
                        metadata: d,
                        amplitudeEventName: c
                    }, l = !0) {
                        var m;
                        this.cartLinkError = !1, this.buttonLoading = !o || "number" != typeof o.index || o.index;
                        const v = _(_({}, !!(null === (m = this.$route.query) || void 0 === m ? void 0 : m.hcart_preprod) && {
                                hcartPreprod: !0
                            }), {}, {
                                productSlug: null == o ? void 0 : o.productSlug,
                                metadata: d,
                                period: {
                                    value: null == o ? void 0 : o.price.billingPeriod.period,
                                    unit: null == o ? void 0 : o.price.billingPeriod.periodUnit
                                },
                                coupon: this.$cookies.get("coupon_cookie"),
                                affiliateData: this.getCookieData(),
                                analyticsData: [{
                                    key: "item_list_id",
                                    value: this.generateListId(t, r)
                                }, {
                                    key: "item_list_name",
                                    value: this.generateListName(e, r)
                                }]
                            }),
                            x = this.getSelectedProductData(t, e, r, n, o),
                            w = {
                                name: c || "website.new.offer_chosen",
                                properties: {
                                    productName: x.selectedGA4Item.slug,
                                    productSlug: x.selectedGA4Item.slug,
                                    productGroup: x.selectedGA4Item.category,
                                    productSubGroup: r,
                                    productPeriod: 12 * x.selectedGA4Item.period,
                                    location: x.selectedGA4Item.listId
                                }
                            },
                            y = this.$cookies.get("_ga"),
                            k = this.$cookies.get("rr_referralcode");
                        y && (v.analyticsData.push({
                            key: "_ga",
                            value: y
                        }), w.properties.userGaId = y.toString()), k && (v.rr_referralcode = k.toString()), "compare_table" === t && (v.compareTableSlug = r), ["single_pricing_table", "pricing_table"].includes(t) && (v.pricingTableSlug = r), v.pageName = Object(h.o)(this.$route.name), this.selectProductGA4(t, e, r, n, o);
                        const C = l ? [f.c.addItemToCart(v), f.a.sendAmplitudeEvent(w)] : [f.c.addItemToCart(v)],
                            [
                                [{
                                    cart: O
                                }, P]
                            ] = await Promise.all(C);
                        if (P) return this.cartLinkError = !0, void(this.buttonLoading = !1);
                        this.buttonLoading = !1, this.addProductGA4(t, e, r, n, o), window.location.assign(O.cartUrl)
                    },
                    createHItemFromProduct(t) {
                        var e, r, n;
                        const o = (null === (r = null === (e = t.price) || void 0 === e ? void 0 : e.billingPeriod) || void 0 === r ? void 0 : r.period) ? 12 * t.price.billingPeriod.period : "",
                            c = "" !== o ? "months" : null;
                        return (new d.a).setBrand((null === (n = {
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
                        }) || void 0 === n ? void 0 : n.name) || "").setProduct(t.productSlug).setCategory(t.productCategory).setSubCategory(t.productSubcategory).setPrice(t.price.purchase, null, t.price.renew, t.price.old).setDiscount(t.price.discount).setPeriod(o, c).setQuantity(1).setExtra("currency", this.themeData.currency.code)
                    }
                }
            })
        },
        1119: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(7).a.extend({
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
                o = (r(1124), r(5)),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "h-grid"
                    }, [e("div", {
                        staticClass: "h-payment-terms h-grid-item"
                    }, [e("span", {
                        attrs: {
                            "data-click-id": `hgr-${t.dataClickIdParent}-payment_terms`
                        },
                        on: {
                            click: t.openPopup
                        }
                    }, [t._v("\n      " + t._s(t.$t("components.pricingTable.pricingTerms")) + "\n    ")])]), t._v(" "), t.isPopupOpen ? e("HPopup", {
                        staticClass: "h-payment-terms-popup",
                        scopedSlots: t._u([{
                            key: "text",
                            fn: function() {
                                return [e("div", {
                                    staticClass: "h-payment-terms-popup__content"
                                }, [e("h3", {
                                    staticClass: "h-payment-terms-popup__title"
                                }, [t._v("\n          " + t._s(t.popupTitle) + "\n        ")]), t._v(" "), e("p", {
                                    staticClass: "h-payment-terms-popup__text"
                                }, [t._v("\n          " + t._s(t.popupText) + "\n        ")])])]
                            },
                            proxy: !0
                        }], null, !1, 1570101024),
                        model: {
                            value: t.isPopupOpen,
                            callback: function(e) {
                                t.isPopupOpen = e
                            },
                            expression: "isPopupOpen"
                        }
                    }) : t._e()], 1)
                }), [], !1, null, "f12c5978", null);
            e.default = component.exports;
            installComponents(component, {
                HPopup: r(528).default
            })
        },
        1120: function(t, e, r) {
            "use strict";
            r.r(e);
            r(529);
            var n = r(7).a.extend({
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
                            const t = this.vnodeToString(this.$slots.default).trim();
                            return this.$t(t, this.params)
                        }
                    },
                    methods: {
                        vnodeToString(t) {
                            let e = "";
                            return t && t.forEach((t => {
                                t.text && (e += t.text)
                            })), e
                        }
                    }
                }),
                o = r(5),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e(t.tag, {
                        tag: "Component",
                        domProps: {
                            innerHTML: t._s(t.translatedText)
                        }
                    })
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        1122: function(t, e, r) {
            var content = r(1162);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("277bbcf2", content, !0, {
                sourceMap: !1
            })
        },
        1124: function(t, e, r) {
            "use strict";
            r(1106)
        },
        1125: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".desktop-only[data-v-f12c5978]{display:none}@media(min-width:768px){.desktop-only[data-v-f12c5978]{display:block}.mobile-only[data-v-f12c5978]{display:none}}.h-payment-terms[data-v-f12c5978]{text-align:center}.h-payment-terms span[data-v-f12c5978]{color:#673de6;cursor:pointer;font-weight:700}.h-payment-terms span[data-v-f12c5978]:hover{color:#5025d1}.h-payment-terms-popup[data-v-f12c5978] .h-popup{width:1028px}.h-payment-terms-popup__content[data-v-f12c5978]{display:flex;flex-direction:column;padding-bottom:16px;text-align:center}@media(min-width:768px){.h-payment-terms-popup__content[data-v-f12c5978]{padding-bottom:40px}}@media(min-width:1025px){.h-payment-terms-popup__content[data-v-f12c5978]{padding-bottom:32px}}.h-payment-terms-popup__title[data-v-f12c5978]{margin-bottom:24px}", ""]), n.locals = {}, t.exports = n
        },
        1127: function(t, e, r) {
            var content = r(1171);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("5c0e39da", content, !0, {
                sourceMap: !1
            })
        },
        1135: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return n
            })), r.d(e, "e", (function() {
                return o
            })), r.d(e, "d", (function() {
                return d
            })), r.d(e, "c", (function() {
                return c
            })), r.d(e, "a", (function() {
                return l
            }));
            r(8);
            const n = t => ({
                    "@type": "Organization",
                    name: "Hostinger",
                    legalName: "Hosting Hostinger",
                    foundingDate: "2004",
                    logo: `${t.siteUrl}/logo-400x400.png`,
                    image: `${t.siteUrl}/logo-400x400.png`,
                    url: t.siteUrl,
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: t.streetAddress,
                        addressLocality: t.addressLocality,
                        postalCode: t.postalCode,
                        addressCountry: t.addressCountry
                    },
                    contactPoint: {
                        "@type": "ContactPoint",
                        contactType: "Sales",
                        email: t.email,
                        url: t.contactPage
                    },
                    sameAs: [t.facebook, t.twitter, ...t.youtubeLinks]
                }),
                o = t => ({
                    "@type": "WebSite",
                    name: "Hostinger",
                    url: t.siteUrl,
                    "@id": `${t.siteUrl}#website`,
                    image: {
                        "@type": "ImageObject",
                        url: `${t.siteUrl}/logo-400x400.png`,
                        height: "400",
                        width: "400"
                    },
                    sameAs: [t.facebook, t.twitter, ...t.youtubeLinks]
                }),
                d = t => ({
                    "@type": "WebPage",
                    "@id": `${t.pageUrl}#webpage`,
                    url: t.pageUrl,
                    inLanguage: t.lang,
                    name: t.pageTitle,
                    description: t.pageDescription,
                    isPartOf: {
                        "@id": `${t.siteUrl}#website`
                    },
                    about: {
                        "@id": `${t.siteUrl}#organization`
                    }
                }),
                c = (t, e) => ({
                    "@type": "Service",
                    name: t.productType,
                    description: t.pageDescription,
                    brand: {
                        "@type": "Brand",
                        name: "Hostinger"
                    },
                    offers: e
                }),
                l = t => ({
                    "@type": "FAQPage",
                    mainEntity: t
                })
        },
        1141: function(t, e, r) {
            var content = r(1187);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("15292015", content, !0, {
                sourceMap: !1
            })
        },
        1150: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(7).a.extend({
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
                o = (r(1186), r(5)),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "h-partner-review"
                    }, [e("div", {
                        staticClass: "h-partner-review__header"
                    }, [e("HImage", {
                        staticClass: "h-partner-review__icon",
                        style: t.imageSizeStyle,
                        attrs: {
                            image: t.data.icon
                        }
                    })], 1), t._v(" "), e("div", {
                        staticClass: "h-partner-review__stars"
                    }, t._l(5, (function(t) {
                        return e("HIcon", {
                            key: t,
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
                    })), 1), t._v(" "), e("div", {
                        staticClass: "h-partner-review__rating"
                    }, [e("div", [t._v(t._s(t.$t("components.companyReview.rating")))]), t._v(" "), e("div", [e("b", [t._v(t._s(t.data.rating.stars))])]), t._v(" "), e("div", [t._v("|")]), t._v(" "), e("div", [e("b", [t._v(t._s(t.reviewCount))])]), t._v(" "), e("div", [t._v(t._s(t.$t("components.companyReview.reviews")))])])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                HImage: r(165).default,
                HIcon: r(80).default
            })
        },
        1161: function(t, e, r) {
            "use strict";
            r(1122)
        },
        1162: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".desktop-only[data-v-0ac35494]{display:none}@media(min-width:768px){.desktop-only[data-v-0ac35494]{display:block}.mobile-only[data-v-0ac35494]{display:none}}.h-faq-section__title[data-v-0ac35494]{margin-bottom:32px}.h-faq-section__description[data-v-0ac35494]{margin-bottom:48px}.h-faq-section__description[data-v-0ac35494],.h-faq-section__title[data-v-0ac35494]{text-align:center}.h-faq-section__accordion[data-v-0ac35494]{margin-bottom:12px}@media(min-width:1025px){.h-faq-section__accordion[data-v-0ac35494]{margin-bottom:16px}}.h-faq-section__accordion[data-v-0ac35494]:last-child{margin-bottom:0}.h-faq-section__accordion[data-v-0ac35494] .h-accordion__title-container{border:1px solid #d5dfff;border-radius:4px 4px 0 0;padding:24px 20px}@media(min-width:768px){.h-faq-section__accordion[data-v-0ac35494] .h-accordion__title-container{padding:32px}}.h-faq-section__accordion[data-v-0ac35494] .h-accordion__list{border:1px solid #d5dfff;border-radius:0 0 4px 4px;border-top:0 solid #d5dfff;padding:16px 24px 24px}@media(min-width:768px){.h-faq-section__accordion[data-v-0ac35494] .h-accordion__list{padding:24px 32px 32px}}.h-faq-section__accordion[data-v-0ac35494] .button-link,.h-faq-section__accordion[data-v-0ac35494] ol,.h-faq-section__accordion[data-v-0ac35494] p,.h-faq-section__accordion[data-v-0ac35494] ul{margin-bottom:16px}@media(min-width:768px){.h-faq-section__accordion[data-v-0ac35494] .button-link,.h-faq-section__accordion[data-v-0ac35494] ol,.h-faq-section__accordion[data-v-0ac35494] p,.h-faq-section__accordion[data-v-0ac35494] ul{margin-bottom:24px}}.h-faq-section__accordion[data-v-0ac35494] .button-link:last-child,.h-faq-section__accordion[data-v-0ac35494] ol:last-child,.h-faq-section__accordion[data-v-0ac35494] p:last-child,.h-faq-section__accordion[data-v-0ac35494] ul:last-child{margin-bottom:0}.h-faq-section__accordion[data-v-0ac35494] li{margin-bottom:16px}@media(min-width:768px){.h-faq-section__accordion[data-v-0ac35494] li{margin-bottom:24px}}", ""]), n.locals = {}, t.exports = n
        },
        1165: function(t, e, r) {
            "use strict";
            r.r(e);
            r(127);
            var n = r(7).a.extend({
                    name: "HFaqSection",
                    props: {
                        data: {
                            type: Object,
                            required: !0
                        }
                    }
                }),
                o = (r(1161), r(5)),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("section", {
                        staticClass: "h-faq-section u-section-spaces"
                    }, [e("HSectionOneColumn", [t.data.title ? e("h2", {
                        staticClass: "h-faq-section__title"
                    }, [t._v(t._s(t.data.title))]) : t._e(), t._v(" "), t.data.description ? e("div", {
                        staticClass: "h-faq-section__description"
                    }, [t._v("\n      " + t._s(t.data.description) + "\n    ")]) : t._e(), t._v(" "), t._l(t.data.faqs, (function(r, n) {
                        return e("HAccordion", {
                            key: `faq-section-accordion-${n}`,
                            staticClass: "h-faq-section__accordion",
                            attrs: {
                                "accordion-data": r,
                                "title-data-click-id": `hgr-${t.pageNameDataClickId}-faq_section-item`
                            },
                            scopedSlots: t._u([{
                                key: "title",
                                fn: function() {
                                    return [e("h3", [t._v("\n          " + t._s(r.title) + "\n        ")])]
                                },
                                proxy: !0
                            }], null, !0)
                        })
                    }))], 2)], 1)
                }), [], !1, null, "0ac35494", null);
            e.default = component.exports;
            installComponents(component, {
                HAccordion: r(531).default,
                HSectionOneColumn: r(526).default
            })
        },
        1167: function(t, e, r) {
            var content = r(1196);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("7d3ca856", content, !0, {
                sourceMap: !1
            })
        },
        1168: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(7).a.extend({
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
                        const t = document.getElementById(this.id),
                            e = window.Trustpilot;
                        e && e.loadFromElement(t)
                    }
                }),
                o = r(5),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "h-trust-pilot"
                    }, [e("div", {
                        staticClass: "trustpilot-widget",
                        attrs: {
                            id: t.id,
                            "data-locale": t.data.locale,
                            "data-template-id": t.data.templateId,
                            "data-businessunit-id": t.data.businessunitId,
                            "data-style-height": t.data.height || "140px",
                            "data-style-width": t.data.width || "100%",
                            "data-theme": t.data.theme,
                            "data-stars": t.data.stars,
                            "data-review-languages": t.data.reviewLanguages,
                            "data-tags": t.data.reviewTags
                        }
                    }, [e("a", {
                        staticClass: "h-trust-pilot__link",
                        attrs: {
                            href: t.data.link,
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("\n      Trustpilot\n    ")])])])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        1169: function(t, e, r) {
            "use strict";
            r.r(e);
            r(127);
            var n = r(1),
                o = r(0),
                d = r(7);

            function c(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function l(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? c(Object(source), !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            const h = ["light", "ghost-white", "primary", "white-blue"];
            var f = d.a.extend({
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
                            validator: Object(o.y)(h)
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
                            this.buttonData.scrollToId && Object(o.z)(this.buttonData.scrollToId)
                        }
                    },
                    computed: {
                        classes() {
                            return l(l({}, Object(o.f)("h-text-button-section--bg", this.backgroundColor, h)), {}, {
                                "u-generic-color-section": "light" !== this.backgroundColor
                            })
                        }
                    }
                }),
                m = (r(1170), r(5)),
                component = Object(m.a)(f, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("section", {
                        staticClass: "u-section-spaces"
                    }, [e("HSectionOneColumn", {
                        staticClass: "h-text-button-section",
                        class: t.classes,
                        attrs: {
                            "column-max-width": "824px",
                            "background-color": t.backgroundColor
                        }
                    }, [e("div", {
                        staticClass: "h-text-button-section__container"
                    }, [t.textSlugs.translateTitle ? e("Translate", {
                        staticClass: "h-text-button-section__title",
                        attrs: {
                            tag: t.textSlugs.translateTitle.tag,
                            params: t.textSlugs.translateTitle.params
                        }
                    }, [t._v(t._s(t.textSlugs.title) + "\n      ")]) : e("h2", {
                        staticClass: "h-text-button-section__title"
                    }, [t._v("\n        " + t._s(t.$t(t.textSlugs.title)) + "\n      ")]), t._v(" "), t.textSlugs.description ? e("p", {
                        staticClass: "h-text-button-section__description"
                    }, [t._v("\n        " + t._s(t.$t(t.textSlugs.description)) + "\n      ")]) : t._e(), t._v(" "), e("HButton", {
                        staticClass: "h-text-button-section__btn",
                        attrs: {
                            color: t.buttonData.color || "primary",
                            "router-component": t.buttonData.nuxtLink && "NuxtLink",
                            to: t.buttonData.nuxtLink || t.buttonData.link,
                            "data-click-id": t.buttonData.dataClickId
                        },
                        on: {
                            onClick: t.scrollTo
                        }
                    }, [t._v("\n        " + t._s(t.$t(t.textSlugs.button)) + "\n      ")]), t._v(" "), t.linkData.path ? e("div", {
                        staticClass: "link-wrapper h-text-button-section__link"
                    }, [e("a", {
                        attrs: {
                            target: "_blank",
                            "data-click-id": t.linkData.dataClickId,
                            href: t.linkData.path
                        }
                    }, [t._v(t._s(t.$t(t.textSlugs.link)))])]) : t._e(), t._v(" "), t.features && t.features.length ? e("div", {
                        staticClass: "h-text-button-section__features-list"
                    }, t._l(t.features, (function(r, n) {
                        return e("span", {
                            key: `${r}-${n}`,
                            staticClass: "h-text-button-section__feature-item t-body-3"
                        }, [e("HIcon", {
                            attrs: {
                                color: "success",
                                icon: "ui-icons/ic-check",
                                size: {
                                    height: 24,
                                    width: 16
                                }
                            }
                        }), t._v("\n          " + t._s(t.$t(r)) + "\n        ")], 1)
                    })), 0) : t._e()], 1)])], 1)
                }), [], !1, null, "68a61c03", null);
            e.default = component.exports;
            installComponents(component, {
                Translate: r(1120).default,
                HButton: r(236).default,
                HIcon: r(80).default,
                HSectionOneColumn: r(526).default
            })
        },
        1170: function(t, e, r) {
            "use strict";
            r(1127)
        },
        1171: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".desktop-only[data-v-68a61c03]{display:none}@media(min-width:768px){.desktop-only[data-v-68a61c03]{display:block}.mobile-only[data-v-68a61c03]{display:none}}.h-text-button-section[data-v-68a61c03]{text-align:center}.h-text-button-section__description[data-v-68a61c03]{margin-top:16px}@media(min-width:768px){.h-text-button-section__description[data-v-68a61c03]{margin-top:24px}}@media(min-width:1025px){.h-text-button-section__description[data-v-68a61c03]{margin-top:32px}}.h-text-button-section__btn[data-v-68a61c03]{margin:16px auto auto;max-width:264px}@media(min-width:768px){.h-text-button-section__btn[data-v-68a61c03]{margin-top:24px;max-width:248px}}@media(min-width:1025px){.h-text-button-section__btn[data-v-68a61c03]{margin-top:48px}}.h-text-button-section__link[data-v-68a61c03]{margin-top:16px}@media(min-width:1025px){.h-text-button-section__link[data-v-68a61c03]{margin-top:24px}}.h-text-button-section--bg-primary .h-text-button-section__description[data-v-68a61c03],.h-text-button-section--bg-primary .h-text-button-section__title[data-v-68a61c03]{color:#fff}.h-text-button-section__features-list[data-v-68a61c03]{align-items:flex-start;display:flex;flex-direction:column;margin:16px auto 0;max-width:264px}@media(min-width:768px){.h-text-button-section__features-list[data-v-68a61c03]{max-width:248px}}@media(min-width:1025px){.h-text-button-section__features-list[data-v-68a61c03]{margin-top:24px;max-width:248px}}.h-text-button-section__feature-item[data-v-68a61c03]{display:inline-flex;margin-bottom:12px}.h-text-button-section__feature-item[data-v-68a61c03]:last-child{margin-bottom:0}.h-text-button-section--bg-light[data-v-68a61c03]{background-color:#fff}.h-text-button-section--bg-primary[data-v-68a61c03]{background-color:#673de6}.h-text-button-section--bg-ghost-white[data-v-68a61c03]{background-color:#fafbff}.h-text-button-section--bg-white-blue[data-v-68a61c03]{background-color:#f4f5ff}", ""]), n.locals = {}, t.exports = n
        },
        1173: function(t, e, r) {
            var content = r(1203);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("53e5e159", content, !0, {
                sourceMap: !1
            })
        },
        1178: function(t, e, r) {
            var content = r(1215);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("40ba1bee", content, !0, {
                sourceMap: !1
            })
        },
        1181: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(1150),
                o = r(7).a.extend({
                    name: "HPartnerReviews",
                    components: {
                        HPartnerReviewCard: n.default
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
                d = r(5),
                component = Object(d.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("HCardGridSection", {
                        attrs: {
                            "number-of-cards": t.numberOfCards,
                            "desktop-columns": t.numberOfCards
                        },
                        scopedSlots: t._u([t._l(t.data, (function(r, n, o) {
                            return {
                                key: `card_${o+1}`,
                                fn: function() {
                                    return ["trustpilot" === n ? e("HTrustPilotMini", {
                                        key: n,
                                        attrs: {
                                            data: t.data.trustpilot
                                        }
                                    }) : e("HPartnerReviewCard", {
                                        key: n,
                                        attrs: {
                                            data: t.data[n]
                                        }
                                    })]
                                },
                                proxy: !0
                            }
                        }))], null, !0)
                    })
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                HTrustPilotMini: r(1192).default,
                HPartnerReviewCard: r(1150).default,
                HCardGridSection: r(1154).default
            })
        },
        1186: function(t, e, r) {
            "use strict";
            r(1141)
        },
        1187: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".desktop-only{display:none}@media(min-width:768px){.desktop-only{display:block}.mobile-only{display:none}}.h-partner-review{padding-top:8px}.h-partner-review__header{align-items:center;display:flex;height:24px;margin-bottom:14px}.h-partner-review__stars{margin-bottom:6px}.h-partner-review__stars svg{margin-right:5px}.h-partner-review__rating{display:flex;margin-bottom:9px}.h-partner-review__rating div{color:#1d1e20;font-size:14px;font-weight:400;line-height:1.4;padding-right:3px}.h-partner-review__rating .bold{font-weight:700}", ""]), n.locals = {}, t.exports = n
        },
        1192: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(1),
                o = r(7);

            function d(object, t) {
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
                    i % 2 ? d(Object(source), !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var l = o.a.extend({
                    name: "HTrustPilotMini",
                    props: {
                        data: {
                            type: Object,
                            required: !0
                        }
                    },
                    computed: {
                        formattedData() {
                            return c(c({}, this.data), {}, {
                                width: 235
                            })
                        }
                    }
                }),
                h = r(5),
                component = Object(h.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("HTrustPilot", {
                        attrs: {
                            id: "mini-trustbox",
                            data: t.formattedData
                        }
                    })
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                HTrustPilot: r(1168).default
            })
        },
        1195: function(t, e, r) {
            "use strict";
            r(1167)
        },
        1196: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".desktop-only[data-v-1f4f97be]{display:none}@media(min-width:768px){.desktop-only[data-v-1f4f97be]{display:block}.mobile-only[data-v-1f4f97be]{display:none}}.h-discount-tag[data-v-1f4f97be]{border-radius:20px;display:inline-block;padding:4px 12px}.h-discount-tag-text-gray-light[data-v-1f4f97be]{color:#f2f3f6}.h-discount-tag-bg-gray-light[data-v-1f4f97be]{background-color:#f2f3f6}.h-discount-tag-text-primary-light[data-v-1f4f97be]{color:#ebe4ff}.h-discount-tag-bg-primary-light[data-v-1f4f97be]{background-color:#ebe4ff}.h-discount-tag-text-meteorite-light[data-v-1f4f97be]{color:#d5dfff}.h-discount-tag-bg-meteorite-light[data-v-1f4f97be]{background-color:#d5dfff}.h-discount-tag-text-danger-light[data-v-1f4f97be]{color:#ffe8ef}.h-discount-tag-bg-danger-light[data-v-1f4f97be]{background-color:#ffe8ef}.h-discount-tag-text-success-light[data-v-1f4f97be]{color:#def4f0}.h-discount-tag-bg-success-light[data-v-1f4f97be]{background-color:#def4f0}.h-discount-tag-text-warning-light[data-v-1f4f97be]{color:#fff8e2}.h-discount-tag-bg-warning-light[data-v-1f4f97be]{background-color:#fff8e2}.h-discount-tag-text-manatee[data-v-1f4f97be]{color:#8c93a9}.h-discount-tag-bg-manatee[data-v-1f4f97be]{background-color:#8c93a9}.h-discount-tag-text-spindle[data-v-1f4f97be]{color:#b6bdd3}.h-discount-tag-bg-spindle[data-v-1f4f97be]{background-color:#b6bdd3}.h-discount-tag-text-periwinkle[data-v-1f4f97be]{color:#c5cde9}.h-discount-tag-bg-periwinkle[data-v-1f4f97be]{background-color:#c5cde9}.h-discount-tag-text-ghost-white[data-v-1f4f97be]{color:#fafbff}.h-discount-tag-bg-ghost-white[data-v-1f4f97be]{background-color:#fafbff}.h-discount-tag-text-webhost-primary[data-v-1f4f97be]{color:#ff5c62}.h-discount-tag-bg-webhost-primary[data-v-1f4f97be]{background-color:#ff5c62}.h-discount-tag-text-gray-border[data-v-1f4f97be]{color:#dadce0}.h-discount-tag-bg-gray-border[data-v-1f4f97be]{background-color:#dadce0}.h-discount-tag-text-white-blue[data-v-1f4f97be]{color:#f4f5ff}.h-discount-tag-bg-white-blue[data-v-1f4f97be]{background-color:#f4f5ff}.h-discount-tag-text-gray-dark[data-v-1f4f97be]{color:#36344d}.h-discount-tag-bg-gray-dark[data-v-1f4f97be]{background-color:#36344d}.h-discount-tag-text-primary-dark[data-v-1f4f97be]{color:#5025d1}.h-discount-tag-bg-primary-dark[data-v-1f4f97be]{background-color:#5025d1}.h-discount-tag-text-meteorite-dark[data-v-1f4f97be]{color:#2f1c6a}.h-discount-tag-bg-meteorite-dark[data-v-1f4f97be]{background-color:#2f1c6a}.h-discount-tag-text-danger-dark[data-v-1f4f97be]{color:#d63163}.h-discount-tag-bg-danger-dark[data-v-1f4f97be]{background-color:#d63163}.h-discount-tag-text-success-dark[data-v-1f4f97be]{color:#008361}.h-discount-tag-bg-success-dark[data-v-1f4f97be]{background-color:#008361}.h-discount-tag-text-warning-dark[data-v-1f4f97be]{color:#fea419}.h-discount-tag-bg-warning-dark[data-v-1f4f97be]{background-color:#fea419}", ""]), n.locals = {}, t.exports = n
        },
        1197: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(1),
                o = r(7),
                d = r(0);

            function c(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            const l = ["ghost-white", "white-blue", "primary-dark", "dark"];
            var h = o.a.extend({
                    name: "HFeaturesReviewCard",
                    props: {
                        data: {
                            type: Object,
                            required: !0
                        },
                        backgroundColor: {
                            type: String,
                            default: "ghost-white",
                            validator: Object(d.y)(l)
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
                            return function(t) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source = null != arguments[i] ? arguments[i] : {};
                                    i % 2 ? c(Object(source), !0).forEach((function(e) {
                                        Object(n.a)(t, e, source[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                                    }))
                                }
                                return t
                            }({}, Object(d.f)("h-features-review-card--bg", this.backgroundColor, l))
                        }
                    },
                    methods: {
                        getBottomIconColor() {
                            return ["ghost-white", "white-blue"].includes(this.backgroundColor) ? "primary" : "light"
                        }
                    }
                }),
                f = h,
                m = (r(1202), r(5)),
                component = Object(m.a)(f, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return t.isNiaga ? t._e() : e("div", {
                        staticClass: "h-features-review-card",
                        class: t.classes
                    }, [e("div", [e("HImage", {
                        staticClass: "h-features-review-card__icon",
                        attrs: {
                            image: t.iconData
                        }
                    }), t._v(" "), e("p", {
                        staticClass: "h-features-review-card__text"
                    }, [t._v("\n      " + t._s(t.data.text) + "\n    ")])], 1), t._v(" "), t.iconBottomData ? e("div", {
                        staticClass: "h-features-review-card__bottom-wrapper"
                    }, [e("HImage", {
                        staticClass: "h-features-review-card__bottom-icon",
                        attrs: {
                            image: t.iconBottomData
                        }
                    }), t._v(" "), e("a", {
                        attrs: {
                            href: t.data.link,
                            target: "_blank",
                            rel: "nofollow",
                            "data-click-id": `hgr-${t.pageNameDataClickId}-review_link`
                        }
                    }, [e("HIcon", {
                        attrs: {
                            icon: "ui-icons/ic-arrow-right",
                            color: t.getBottomIconColor()
                        }
                    })], 1)], 1) : t._e()])
                }), [], !1, null, "3177ad9e", null);
            e.default = component.exports;
            installComponents(component, {
                HImage: r(165).default,
                HIcon: r(80).default
            })
        },
        1198: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(1),
                o = r(7),
                d = r(0);

            function c(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function l(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? c(Object(source), !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            const h = ["danger-dark", "primary-dark"],
                f = ["danger-light", "primary-light"];
            var m = o.a.extend({
                    name: "HDiscountTag",
                    props: {
                        color: {
                            type: String,
                            default: "danger-dark",
                            validator: Object(d.y)(h)
                        },
                        backgroundColor: {
                            type: String,
                            default: "danger-light",
                            validator: Object(d.y)(f)
                        }
                    },
                    computed: {
                        classes() {
                            return l(l({}, Object(d.f)("h-discount-tag-text", this.color, h)), Object(d.f)("h-discount-tag-bg", this.backgroundColor, f))
                        }
                    }
                }),
                _ = (r(1195), r(5)),
                component = Object(_.a)(m, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("span", {
                        staticClass: "h-discount-tag t-body-2",
                        class: t.classes,
                        attrs: {
                            dir: t.direction
                        }
                    }, [t._t("default")], 2)
                }), [], !1, null, "1f4f97be", null);
            e.default = component.exports
        },
        1199: function(t, e, r) {
            var content = r(1249);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("630ee056", content, !0, {
                sourceMap: !1
            })
        },
        1200: function(t, e, r) {
            var content = r(1251);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("75f16c9a", content, !0, {
                sourceMap: !1
            })
        },
        1202: function(t, e, r) {
            "use strict";
            r(1173)
        },
        1203: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".desktop-only[data-v-3177ad9e]{display:none}@media(min-width:768px){.desktop-only[data-v-3177ad9e]{display:block}.mobile-only[data-v-3177ad9e]{display:none}}.h-features-review-card[data-v-3177ad9e]{border-radius:4px;display:flex;flex-direction:column;justify-content:space-between;padding:32px}.h-features-review-card__icon[data-v-3177ad9e]{margin-bottom:16px;max-width:224px}.h-features-review-card__bottom-wrapper[data-v-3177ad9e]{align-items:center;display:flex;justify-content:space-between;margin-top:16px}.h-features-review-card__bottom-wrapper a[data-v-3177ad9e]{display:flex}.h-features-review-card__bottom-icon[data-v-3177ad9e]{max-width:152px}.h-features-review-card--bg-dark .h-features-review-card__text[data-v-3177ad9e],.h-features-review-card--bg-primary-dark .h-features-review-card__text[data-v-3177ad9e]{color:#fff}.h-features-review-card--bg-ghost-white[data-v-3177ad9e]{background-color:#fafbff}.h-features-review-card--bg-white-blue[data-v-3177ad9e]{background-color:#f4f5ff}.h-features-review-card--bg-primary-dark[data-v-3177ad9e]{background-color:#5025d1}.h-features-review-card--bg-dark[data-v-3177ad9e]{background-color:#1d1e20}", ""]), n.locals = {}, t.exports = n
        },
        1204: function(t, e, r) {
            var content = r(1266);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("5af86502", content, !0, {
                sourceMap: !1
            })
        },
        1214: function(t, e, r) {
            "use strict";
            r(1178)
        },
        1215: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".desktop-only[data-v-0be99a4e]{display:none}@media(min-width:768px){.desktop-only[data-v-0be99a4e]{display:block}.mobile-only[data-v-0be99a4e]{display:none}}[data-v-0be99a4e] b{font-size:inherit}.h-plan-feature[data-v-0be99a4e]{display:flex;justify-content:space-between}.h-plan-feature[data-v-0be99a4e]:not(:last-child){margin-bottom:12px}.h-plan-feature__content[data-v-0be99a4e]{display:flex;justify-content:flex-start;text-align:left}.h-plan-feature__content svg[data-v-0be99a4e]{flex-shrink:0;margin-right:8px}.h-plan-feature__tooltip[data-v-0be99a4e]{align-items:center;cursor:pointer;display:flex}.h-plan-feature[dir=rtl] .h-plan-feature__content svg[data-v-0be99a4e]{margin-left:8px;margin-right:0}", ""]), n.locals = {}, t.exports = n
        },
        1227: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(7).a.extend({
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
                        getIconName: t => "disabled" === t ? "ui-icons/ic-cross" : "ui-icons/ic-check",
                        getIconColor(t) {
                            switch (t) {
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
                o = (r(1214), r(5)),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "h-plan-feature",
                        attrs: {
                            dir: t.direction
                        }
                    }, [e("div", {
                        staticClass: "h-plan-feature__content"
                    }, [e("HIcon", {
                        attrs: {
                            icon: t.getIconName(t.featureInfo.checkmark),
                            color: t.getIconColor(t.featureInfo.checkmark),
                            size: {
                                height: 24,
                                width: 12
                            }
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "t-body-3 h-plan-feature__content-text",
                        domProps: {
                            innerHTML: t._s(t.featureInfo.feature)
                        }
                    })], 1), t._v(" "), t.featureInfo.tooltip ? e("div", {
                        staticClass: "h-plan-feature__tooltip"
                    }, [e("HIcon", {
                        directives: [{
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: {
                                placement: t.getTooltipPlacement(),
                                content: t.featureInfo.tooltip,
                                boundariesElement: "h-pricing-card__container"
                            },
                            expression: "{\n        placement: getTooltipPlacement(),\n        content: featureInfo.tooltip,\n        boundariesElement: 'h-pricing-card__container',\n      }"
                        }],
                        class: {
                            "u-mirror-x": t.reverseHelpIcon()
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
                    })], 1) : t._e()])
                }), [], !1, null, "0be99a4e", null);
            e.default = component.exports;
            installComponents(component, {
                HIcon: r(80).default
            })
        },
        1235: function(t, e, r) {
            var content = r(1295);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("61e74fe8", content, !0, {
                sourceMap: !1
            })
        },
        1236: function(t, e, r) {
            var content = r(1297);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("9c94d678", content, !0, {
                sourceMap: !1
            })
        },
        1248: function(t, e, r) {
            "use strict";
            r(1199)
        },
        1249: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".desktop-only[data-v-6bd99e6a]{display:none}@media(min-width:768px){.desktop-only[data-v-6bd99e6a]{display:block}.mobile-only[data-v-6bd99e6a]{display:none}}.h-single-pricing-table-section__info[data-v-6bd99e6a]{margin-bottom:32px;text-align:center}@media(min-width:768px){.h-single-pricing-table-section__info[data-v-6bd99e6a]{margin-bottom:40px}}@media(min-width:1025px){.h-single-pricing-table-section__info[data-v-6bd99e6a]{margin-bottom:48px}}.h-single-pricing-table-section__description[data-v-6bd99e6a]{margin-top:16px}@media(min-width:768px){.h-single-pricing-table-section__description[data-v-6bd99e6a]{margin-top:24px}}@media(min-width:1025px){.h-single-pricing-table-section__description[data-v-6bd99e6a]{margin-top:32px}}", ""]), n.locals = {}, t.exports = n
        },
        1250: function(t, e, r) {
            "use strict";
            r(1200)
        },
        1251: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".desktop-only[data-v-5ef5eb70]{display:none}@media(min-width:768px){.desktop-only[data-v-5ef5eb70]{display:block}.mobile-only[data-v-5ef5eb70]{display:none}}.h-single-pricing-table[data-v-5ef5eb70]{border:1px solid #d5dfff;border-radius:4px}.h-single-pricing-table__features[data-v-5ef5eb70]{padding:32px 24px 0}@media(min-width:768px){.h-single-pricing-table__features[data-v-5ef5eb70]{margin-bottom:40px;padding:40px 24px 0}}@media(min-width:1025px){.h-single-pricing-table__features[data-v-5ef5eb70]{margin-bottom:40px;padding:40px 32px 0}}.h-single-pricing-table__expanded-features[data-v-5ef5eb70],.h-single-pricing-table__main-features[data-v-5ef5eb70]{display:grid}.h-single-pricing-table__main-features[data-v-5ef5eb70]{margin-bottom:32px}@media(min-width:768px){.h-single-pricing-table__main-features[data-v-5ef5eb70]{margin-bottom:40px}}.h-single-pricing-table__top-column--features[data-v-5ef5eb70]{display:none;flex-direction:column;justify-content:center}.h-single-pricing-table__top-column--features[data-v-5ef5eb70]:last-child{display:flex}@media(max-width:767px){.h-single-pricing-table__top-column--features[data-v-5ef5eb70]{margin-top:32px}}@media(min-width:768px){.h-single-pricing-table__top-column--features[data-v-5ef5eb70]{margin-left:23px}}@media(min-width:1025px){.h-single-pricing-table__top-column--features[data-v-5ef5eb70]:first-child{display:flex;margin-left:0;margin-right:57px}.h-single-pricing-table__top-column--features[data-v-5ef5eb70]:last-child{margin-left:57px}}@media(max-width:767px){.h-single-pricing-table__top-column--product-info[data-v-5ef5eb70]{border-bottom:1px solid #d5dfff;padding-bottom:32px}}@media(min-width:768px){.h-single-pricing-table__top-column--product-info[data-v-5ef5eb70]{border-right:1px solid #d5dfff;padding-right:24px}}@media(min-width:1025px){.h-single-pricing-table__top-column--product-info[data-v-5ef5eb70]{border-left:1px solid #d5dfff;padding-right:0}}@media(min-width:768px){.h-single-pricing-table__bottom-column[data-v-5ef5eb70]:first-child{border-right:1px solid #d5dfff;padding-right:23px}.h-single-pricing-table__bottom-column[data-v-5ef5eb70]:last-child{margin-left:23px}}@media(min-width:1025px){.h-single-pricing-table__bottom-column[data-v-5ef5eb70]:first-child{border-right:none;margin-right:57px;padding-right:0}.h-single-pricing-table__bottom-column[data-v-5ef5eb70]:nth-child(3n+2){border-left:1px solid #d5dfff;border-right:1px solid #d5dfff;padding:0 32px}.h-single-pricing-table__bottom-column[data-v-5ef5eb70]:last-child{margin-left:57px}}.h-single-pricing-table__see-all-features[data-v-5ef5eb70]{border-top:1px solid #d5dfff;display:flex;justify-content:center;padding:12px 0}@media(min-width:768px){.h-single-pricing-table__see-all-features[data-v-5ef5eb70]{padding:16px 0}}@media(min-width:1025px){.h-single-pricing-table__see-all-features[data-v-5ef5eb70]{padding:24px 0}}.h-single-pricing-table__see-all-features-button[data-v-5ef5eb70]{align-items:center;color:#673de6;cursor:pointer;display:flex;font-weight:700}.h-single-pricing-table__see-all-features-icon[data-v-5ef5eb70]{margin-left:4px;transition:.5s}.h-single-pricing-table__see-all-features-icon--active[data-v-5ef5eb70]{transform:rotate(180deg)}.h-single-pricing-table--all-features-visible .h-single-pricing-table__main-features[data-v-5ef5eb70]{margin-bottom:12px}.h-single-pricing-table--all-features-visible .h-single-pricing-table__expanded-features[data-v-5ef5eb70]{margin-bottom:32px}@media(min-width:768px){.h-single-pricing-table[dir=rtl] .h-single-pricing-table__top-column--features[data-v-5ef5eb70]{margin-left:0;margin-right:23px}}@media(min-width:1025px){.h-single-pricing-table[dir=rtl] .h-single-pricing-table__top-column--features[data-v-5ef5eb70]:first-child{margin-left:57px;margin-right:0}.h-single-pricing-table[dir=rtl] .h-single-pricing-table__top-column--features[data-v-5ef5eb70]:last-child{margin-left:0;margin-right:57px}}@media(min-width:768px){.h-single-pricing-table[dir=rtl] .h-single-pricing-table__top-column--product-info[data-v-5ef5eb70]{border-left:1px solid #d5dfff;border-right:none;padding-left:24px;padding-right:0}}@media(min-width:1025px){.h-single-pricing-table[dir=rtl] .h-single-pricing-table__top-column--product-info[data-v-5ef5eb70]{border-right:1px solid #d5dfff;padding-left:0}}@media(min-width:768px){.h-single-pricing-table[dir=rtl] .h-single-pricing-table__bottom-column[data-v-5ef5eb70]:first-child{border-left:1px solid #d5dfff;border-right:none;padding-left:23px;padding-right:0}.h-single-pricing-table[dir=rtl] .h-single-pricing-table__bottom-column[data-v-5ef5eb70]:last-child{margin-left:0;margin-right:23px}}@media(min-width:1025px){.h-single-pricing-table[dir=rtl] .h-single-pricing-table__bottom-column[data-v-5ef5eb70]:first-child{border-left:none;margin-left:57px;margin-right:0;padding-left:0}.h-single-pricing-table[dir=rtl] .h-single-pricing-table__bottom-column[data-v-5ef5eb70]:last-child{margin-left:0;margin-right:57px}}.h-single-pricing-table[dir=rtl] .h-single-pricing-table__see-all-features-icon[data-v-5ef5eb70]{margin-left:0;margin-right:4px}.h-single-pricing-table__payment-terms[data-v-5ef5eb70]{margin-top:32px}.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70]{color:#fff}.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-plan-feature__content svg,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-plan-feature__tooltip svg,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-single-pricing-table__see-all-features-button svg{fill:#fff}.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-price--text-meteorite-dark .h-price__currency,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-price--text-meteorite-dark .h-price__number,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-price--text-meteorite-dark .h-price__suffix,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-product-info__offer-description,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-single-pricing-table__see-all-features-button{color:#fff}.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-price--text-gray .h-price__currency,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-price--text-gray .h-price__number,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-price--text-gray .h-price__suffix,.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70] .h-product-info__renewal-price{color:#fff;opacity:.8}.h-single-pricing-table--bg-primary-dark[data-v-5ef5eb70]{background-color:#5025d1}", ""]), n.locals = {}, t.exports = n
        },
        1255: function(t, e, r) {
            "use strict";
            r.r(e);
            r(127);
            var n = r(7),
                o = r(0);
            var d = n.a.extend({
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
                            validator: Object(o.y)(["transparent", "primary-dark"])
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
                c = (r(1248), r(5)),
                component = Object(c.a)(d, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "h-single-pricing-table-section u-section-spaces"
                    }, [t.title ? e("div", {
                        staticClass: "h-single-pricing-table-section__info h-grid"
                    }, [e("h2", [t._v(t._s(t.title))]), t._v(" "), t.description ? e("p", {
                        staticClass: "h-single-pricing-table-section__description"
                    }, [t._v("\n      " + t._s(t.description) + "\n    ")]) : t._e()]) : t._e(), t._v(" "), e("HSinglePricingTable", {
                        attrs: {
                            product: t.product,
                            "table-slug": t.tableSlug,
                            "show-sale-offer": t.showSaleOffer,
                            "background-color": t.backgroundColor
                        }
                    }), t._v(" "), t._t("footer")], 2)
                }), [], !1, null, "6bd99e6a", null);
            e.default = component.exports;
            installComponents(component, {
                HSinglePricingTable: r(1256).default
            })
        },
        1256: function(t, e, r) {
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

            function d(t) {
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
            r(8), r(16), r(29);
            var c = r(88),
                l = r.n(c),
                h = r(1111),
                f = r(0);

            function m(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function _(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? m(Object(source), !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            const v = ["transparent", "primary-dark"];
            var x = h.a.extend({
                    name: "HSinglePricingTable",
                    props: {
                        product: {
                            type: Object,
                            required: !0
                        },
                        backgroundColor: {
                            type: String,
                            default: "transparent",
                            validator: Object(f.y)(v)
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
                        let t;
                        const e = () => {
                            const e = document.querySelector(".h-single-pricing-table");
                            e && (t = new IntersectionObserver((t => {
                                t[0].intersectionRatio > 0 && !this.tableVisited && (this.tableVisited = !0, this.sendAllGAData(this.gtmOptions))
                            }), {}), t.observe(e))
                        };
                        setTimeout((() => e()), 2e3);
                        const r = () => {
                            window.innerWidth > 1024 ? this.screen = "desktop" : window.innerWidth > 767 ? this.screen = "tablet" : this.screen = "mobile"
                        };
                        r(), window.addEventListener("resize", l()(r, 100)), this.$once("hook:beforeDestroy", (() => {
                            (null == t ? void 0 : t.disconnect) && t.disconnect(), window.removeEventListener("resize", l()(r, 100))
                        }))
                    },
                    computed: {
                        mainFeaturesPerColumn() {
                            const t = this.product.features.main.length < 10 ? Math.ceil(this.product.features.main.length / 2) : 5;
                            return ["mobile", "tablet"].includes(this.screen) ? [
                                [], this.product.features.main.slice(0, 5)
                            ] : [this.product.features.main.slice(0, t), this.product.features.main.slice(t, 10)]
                        },
                        expandedFeatures() {
                            var t;
                            const e = (null === (t = this.product.features) || void 0 === t ? void 0 : t.expanded) || [];
                            return ["mobile", "tablet"].includes(this.screen) ? [...this.product.features.main.slice(5, this.product.features.main.length), ...e] : [...this.product.features.main.slice(10, this.product.features.main.length), ...e]
                        },
                        expandedFeaturesNumberVisible() {
                            let t = 0;
                            switch (this.screen) {
                                case "mobile":
                                    t = this.expandedFeatures.length;
                                    break;
                                case "tablet":
                                    t = Math.ceil(this.expandedFeatures.length / 2);
                                    break;
                                case "desktop":
                                    t = Math.ceil(this.expandedFeatures.length / 3)
                            }
                            return t
                        },
                        expandedFeaturesPerColumn() {
                            let t = [];
                            const e = [this.expandedFeatures.slice(0, this.expandedFeaturesNumberVisible), this.expandedFeatures.slice(this.expandedFeaturesNumberVisible, 2 * this.expandedFeaturesNumberVisible)];
                            switch (this.screen) {
                                case "mobile":
                                    t = [this.expandedFeatures];
                                    break;
                                case "tablet":
                                    t = [...e];
                                    break;
                                case "desktop":
                                    t = [...e, this.expandedFeatures.slice(2 * this.expandedFeaturesNumberVisible, 3 * this.expandedFeaturesNumberVisible)]
                            }
                            return t
                        },
                        classes() {
                            return _({}, Object(f.f)("h-single-pricing-table--bg", this.backgroundColor, v))
                        },
                        clickIdProductSlug() {
                            return this.product.productSlug.replace(":", "_")
                        },
                        showDiscountTag() {
                            return ["all_in_one_premium", "website_builder", "online_store"].includes(this.tableSlug)
                        }
                    },
                    methods: {
                        updatePriceFontSize(t) {
                            this.pricingFontSize = t
                        },
                        getBtnColor() {
                            return ["primary-dark"].includes(this.backgroundColor) ? "danger" : "primary"
                        },
                        toggleFeaturesList() {
                            this.seeAllFeatures = !this.seeAllFeatures
                        },
                        onAddToCart(t) {
                            this.addToCart(_(_({}, this.gtmOptions), {}, {
                                product: this.product
                            })).finally(t)
                        }
                    }
                }),
                w = (r(1250), r(5)),
                component = Object(w.a)(x, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "h-grid"
                    }, [e("div", {
                        staticClass: "h-single-pricing-table",
                        class: d(d({}, {
                            "h-single-pricing-table--all-features-visible": "mobile" === t.screen && t.seeAllFeatures
                        }), t.classes),
                        attrs: {
                            dir: t.direction
                        }
                    }, [e("div", {
                        staticClass: "h-single-pricing-table__features"
                    }, [e("div", {
                        staticClass: "h-single-pricing-table__main-features h-grid--cols-d-3 h-grid--cols-t-2 h-grid--cols-m-1"
                    }, [e("div", {
                        staticClass: "h-single-pricing-table__top-column h-single-pricing-table__top-column--features h-grid-item"
                    }, t._l(t.mainFeaturesPerColumn[0], (function(t, r) {
                        return e("HPricingCardFeature", {
                            key: `main-feature-${r}`,
                            attrs: {
                                "feature-info": t
                            }
                        })
                    })), 1), t._v(" "), e("HSinglePricingTableProductInfo", {
                        staticClass: "h-single-pricing-table__top-column h-single-pricing-table__top-column--product-info h-grid-item",
                        attrs: {
                            "product-info": t.product,
                            "synced-price-font-size": t.pricingFontSize,
                            "show-discount-tag": t.showDiscountTag,
                            "show-sale-offer": t.showSaleOffer,
                            "button-loading": t.buttonLoading,
                            "cart-link-error": t.cartLinkError,
                            "button-color": t.getBtnColor()
                        },
                        on: {
                            updateFontSize: e => t.updatePriceFontSize(e),
                            addToCart: t.onAddToCart
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "h-single-pricing-table__top-column h-single-pricing-table__top-column--features h-grid-item"
                    }, t._l(t.mainFeaturesPerColumn[1], (function(t, r) {
                        return e("HPricingCardFeature", {
                            key: `main-feature-${r}`,
                            attrs: {
                                "feature-info": t
                            }
                        })
                    })), 1)], 1), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.seeAllFeatures,
                            expression: "seeAllFeatures"
                        }],
                        staticClass: "h-single-pricing-table__expanded-features h-grid--cols-d-3 h-grid--cols-t-2 h-grid--cols-m-1"
                    }, t._l(t.expandedFeaturesPerColumn, (function(r, n) {
                        return e("div", {
                            key: `expanded-features-${n}`,
                            staticClass: "h-single-pricing-table__bottom-column h-grid-item"
                        }, t._l(r, (function(t, r) {
                            return e("HPricingCardFeature", {
                                key: `expanded-feature-${r}`,
                                attrs: {
                                    "feature-info": t
                                }
                            })
                        })), 1)
                    })), 0)]), t._v(" "), t.expandedFeatures.length ? e("div", {
                        staticClass: "h-single-pricing-table__see-all-features"
                    }, [e("div", {
                        staticClass: "h-single-pricing-table__see-all-features-button",
                        attrs: {
                            "data-click-id": `hgr-${t.pageNameDataClickId}-single_pricing_table-toggle_see_all_features-${t.clickIdProductSlug}`
                        },
                        on: {
                            click: t.toggleFeaturesList
                        }
                    }, [t._v("\n        " + t._s(t.seeAllFeatures ? t.$t("components.pricingCard.seeLessFeatures") : t.$t("components.pricingCard.seeAllFeatures")) + "\n        "), e("HIcon", {
                        staticClass: "h-single-pricing-table__see-all-features-icon",
                        class: {
                            "h-single-pricing-table__see-all-features-icon--active": t.seeAllFeatures
                        },
                        attrs: {
                            icon: "ui-icons/ic-arrow-down"
                        }
                    })], 1)]) : t._e()]), t._v(" "), t.showPaymentTerms ? e("HPaymentTerms", {
                        staticClass: "h-single-pricing-table__payment-terms",
                        attrs: {
                            "popup-title": t.$t(t.paymentTermsTranslations.popupTitle),
                            "popup-text": t.$t(t.paymentTermsTranslations.popupText),
                            "data-click-id-parent": "pricing_table"
                        }
                    }) : t._e()], 1)
                }), [], !1, null, "5ef5eb70", null);
            e.default = component.exports;
            installComponents(component, {
                HPricingCardFeature: r(1227).default,
                HSinglePricingTableProductInfo: r(1264).default,
                HIcon: r(80).default,
                HPaymentTerms: r(1119).default
            })
        },
        1258: function(t, e, r) {
            var content = r(1321);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("f261493e", content, !0, {
                sourceMap: !1
            })
        },
        1264: function(t, e, r) {
            "use strict";
            r.r(e);
            r(127), r(16), r(29), r(8);
            var n = r(7),
                o = r(0),
                d = r(60);
            var c = n.a.extend({
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
                            validator: Object(o.y)(["primary", "danger"])
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
                            return Object(o.p)(this.themeData.country.code)
                        },
                        showPriceInfo() {
                            return ["pt_BR", ...d.a.euLocales].includes(this.themeData.language.code)
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
                        getSaleOfferSlug(t, e) {
                            var r;
                            const n = !t.nonZeroFreeHostingMonths,
                                o = null === (r = null == e ? void 0 : e.specialOffer) || void 0 === r ? void 0 : r.freeHostingMonths;
                            return n ? "sales.newYear.salePromoPricingTable0" : `sales.newYear.salePromoPricingTable${o}`
                        }
                    }
                }),
                l = (r(1265), r(5)),
                component = Object(l.a)(c, (function() {
                    var t, e = this,
                        r = e._self._c;
                    e._self._setupProxy;
                    return r("div", {
                        staticClass: "h-product-info",
                        attrs: {
                            dir: e.direction
                        }
                    }, [r("div", {
                        staticClass: "h-product-info__title",
                        class: e.cardTitleTypography
                    }, [e._v("\n    " + e._s(e.productInfo.title) + "\n  ")]), e._v(" "), e.productInfo.description ? r("p", {
                        staticClass: "h-product-info__description t-body-3"
                    }, [e._v("\n    " + e._s(e.productInfo.description) + "\n  ")]) : e._e(), e._v(" "), e.showDiscountTag ? r("div", {
                        staticClass: "h-product-info__discount"
                    }, [r("HPrice", {
                        attrs: {
                            price: e.productInfo.price.old,
                            "typography-classes": e.discountTypography,
                            "country-code": e.countryCode,
                            color: "gray"
                        }
                    }), e._v(" "), r("HDiscountTag", {
                        staticClass: "h-product-info__discount-tag",
                        attrs: {
                            color: "primary-dark",
                            "background-color": "primary-light"
                        }
                    }, [e._v(e._s(e.$t("components.pricingCard.save", {
                        discount: e.productInfo.price.discount
                    })))])], 1) : e._e(), e._v(" "), r("HDynamicSizePrice", {
                        class: e.currentPriceClasses,
                        attrs: {
                            "typography-classes": e.currentPriceTypography,
                            price: e.productInfo.price.purchase,
                            suffix: e.$t("global.perMonth"),
                            "country-code": e.countryCode,
                            color: "meteorite-dark",
                            "static-font-size": e.syncedPriceFontSize
                        },
                        on: {
                            updateFontSize: t => e.$emit("updateFontSize", t)
                        },
                        scopedSlots: e._u([e.showPriceInfo ? {
                            key: "price-info",
                            fn: function() {
                                return [r("p", {
                                    staticClass: "h-product-info__current-price-info t-body-3"
                                }, [e._v("\n        " + e._s(e.$t("global.priceDescription")) + "\n      ")])]
                            },
                            proxy: !0
                        } : null], null, !0)
                    }), e._v(" "), e.showSaleOffer ? r("div", {
                        staticClass: "h-product-info__offer"
                    }, [e.loading || null === (t = e.currentSale.specialOffer) || void 0 === t || !t.freeHostingMonths ? r("HLoaderCircle", {
                        attrs: {
                            "scale-size": .5,
                            color: "primary"
                        }
                    }) : r("p", {
                        staticClass: "h-product-info__offer-description t-body-4"
                    }, [e._v("\n      " + e._s(e.$t(e.getSaleOfferSlug(e.productInfo, e.currentSale))) + "\n    ")])], 1) : e._e(), e._v(" "), e.showEmailDescription ? r("span", {
                        staticClass: "h-product-info__current-price-description t-body-3"
                    }, [e._v(e._s(e.$t("components.pricingCard.pricePerMailbox")))]) : e._e(), e._v(" "), e.cartLinkError ? r("div", {
                        staticClass: "h-product-info__error"
                    }, [e._v("\n    " + e._s(e.$t("components.pricingCard.cartLinkError")) + "\n  ")]) : e._e(), e._v(" "), r("HButton", {
                        key: `single-pt-add-to-cart-${e.addToCartRenderKey}`,
                        staticClass: "h-product-info__add-to-cart",
                        attrs: {
                            "data-click-id": `hgr-${e.pageNameDataClickId}-single_pricing_table-add_to_cart-${e.clickIdProductSlug}`,
                            loading: e.buttonLoading,
                            color: e.buttonColor
                        },
                        on: {
                            "~onClick": function(t) {
                                return e.addToCart.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n    " + e._s(e.$t("components.pricingCard.select")) + "\n  ")]), e._v(" "), e.productInfo.price.renew ? r("div", {
                        staticClass: "h-product-info__renewal-price t-body-3"
                    }, [e.appendWhenYouRenew ? e._e() : [e._v("\n      " + e._s(e.$t("components.pricingCard.whenYouRenew")) + "\n    ")], e._v(" "), r("HPrice", {
                        attrs: {
                            price: e.productInfo.price.renew,
                            "typography-classes": e.renewalPriceTypography,
                            suffix: e.$t("global.perMonth"),
                            "country-code": e.countryCode,
                            color: "gray"
                        }
                    }), e._v(" "), e.appendWhenYouRenew ? [e._v("\n      " + e._s(e.$t("components.pricingCard.whenYouRenew")) + "\n    ")] : e._e()], 2) : e._e()], 1)
                }), [], !1, null, "0453a939", null);
            e.default = component.exports;
            installComponents(component, {
                HPrice: r(1115).default,
                HDiscountTag: r(1198).default,
                HDynamicSizePrice: r(1193).default,
                HLoaderCircle: r(530).default,
                HButton: r(236).default
            })
        },
        1265: function(t, e, r) {
            "use strict";
            r(1204)
        },
        1266: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".desktop-only[data-v-0453a939]{display:none}@media(min-width:768px){.desktop-only[data-v-0453a939]{display:block}.mobile-only[data-v-0453a939]{display:none}}.h-product-info[data-v-0453a939]{align-items:center;display:flex;flex-direction:column;justify-content:center}.h-product-info__title[data-v-0453a939]{text-align:center}.h-product-info__discount[data-v-0453a939]{margin-top:24px}.h-product-info__discount-tag[data-v-0453a939]{margin-left:4px}.h-product-info__current-price[data-v-0453a939]{align-items:center;display:flex;flex-direction:column;margin-top:24px;width:100%}.h-product-info__current-price[data-v-0453a939] .h-price{align-items:baseline}.h-product-info__current-price[data-v-0453a939] .h-price__currency--prepend{margin-right:4px}.h-product-info__current-price[data-v-0453a939] .h-price__currency--append{margin-left:4px}.h-product-info__current-price[data-v-0453a939] .h-price__number{bottom:-1px;position:relative}.h-product-info__current-price-info[data-v-0453a939]{opacity:.8;text-align:center}.h-product-info__current-price-description[data-v-0453a939]{color:#727586}.h-product-info__current-price--with-discount[data-v-0453a939]{margin-top:4px}@media(min-width:768px){.h-product-info__current-price--with-discount[data-v-0453a939]{margin-top:8px}}.h-product-info__add-to-cart[data-v-0453a939]{margin-top:24px;max-width:248px;width:100%}.h-product-info__error[data-v-0453a939]{color:#d63163;margin-top:8px;padding:0 12px;text-align:center}.h-product-info__renewal-price[data-v-0453a939]{color:#727586;margin-top:16px}.h-product-info__offer-description[data-v-0453a939]{color:#673de6}.h-product-info__offer[data-v-0453a939]{margin-top:8px}.h-product-info__offer[data-v-0453a939] .h-circle-loader{align-items:center;display:flex;height:24px;justify-content:center;position:relative}.h-product-info__offer[data-v-0453a939] .h-circle-loader__content{display:inline-flex;margin-left:-1px;position:relative;top:1px}", ""]), n.locals = {}, t.exports = n
        },
        1294: function(t, e, r) {
            "use strict";
            r(1235)
        },
        1295: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".desktop-only[data-v-ed033c38]{display:none}@media(min-width:768px){.desktop-only[data-v-ed033c38]{display:block}.mobile-only[data-v-ed033c38]{display:none}}.h-content-tab[data-v-ed033c38]{cursor:pointer}.h-content-tab h3[data-v-ed033c38]{margin:0}@media(min-width:768px){.h-content-tab[data-v-ed033c38]:not(:nth-last-child(2)){margin-bottom:24px}}@media(min-width:1025px){.h-content-tab[data-v-ed033c38]:not(:nth-last-child(2)){margin-bottom:32px}}.h-content-tab--active h3[data-v-ed033c38],.h-content-tab--active span[data-v-ed033c38]{color:#673de6}", ""]), n.locals = {}, t.exports = n
        },
        1296: function(t, e, r) {
            "use strict";
            r(1236)
        },
        1297: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".desktop-only[data-v-38bf6590]{display:none}@media(min-width:768px){.desktop-only[data-v-38bf6590]{display:block}.mobile-only[data-v-38bf6590]{display:none}}.h-content-tab-card[data-v-38bf6590]{text-align:center}@media(min-width:768px){.h-content-tab-card[data-v-38bf6590]{max-width:336px;opacity:0;position:absolute;text-align:left;text-align:initial;transform:translateX(150%);transition:all .4s ease-in;visibility:hidden;will-change:transform}}@media(min-width:1025px){.h-content-tab-card[data-v-38bf6590]{max-width:552px}}@media(min-width:768px){.h-content-tab-card--bordered[data-v-38bf6590]{border:1px solid #673de6;border-radius:4px;padding:24px}}@media(min-width:1025px){.h-content-tab-card--bordered[data-v-38bf6590]{padding:40px}}@media(max-width:767px){.h-content-tab-card[data-v-38bf6590]:not(:first-child){margin-top:24px}}@media(min-width:768px){.h-content-tab-card[dir=rtl][data-v-38bf6590]:not(.h-content-tab-card--active){transform:translateX(-150%)}}.h-content-tab-card__title[data-v-38bf6590]{margin-bottom:16px}@media(min-width:768px){.h-content-tab-card__title[data-v-38bf6590]{margin-bottom:24px}}.h-content-tab-card[data-v-38bf6590] ul{margin:8px 0;text-align:left;text-align:initial}.h-content-tab-card--active[data-v-38bf6590]{opacity:1;transform:translateX(0);visibility:visible}", ""]), n.locals = {}, t.exports = n
        },
        1312: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(7).a.extend({
                    name: "HContentTab",
                    props: {
                        isActive: Boolean
                    }
                }),
                o = (r(1294), r(5)),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "h-content-tab",
                        class: {
                            "h-content-tab--active": t.isActive
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("click")
                            }
                        }
                    }, [t._t("default")], 2)
                }), [], !1, null, "ed033c38", null);
            e.default = component.exports
        },
        1313: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(7).a.extend({
                    name: "HContentTabCard",
                    props: {
                        isActive: Boolean,
                        isImageOnly: Boolean
                    }
                }),
                o = (r(1296), r(5)),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "h-content-tab-card",
                        class: {
                            "h-content-tab-card--active": t.isActive, "h-content-tab-card--bordered": !t.isImageOnly
                        },
                        attrs: {
                            dir: t.direction
                        }
                    }, [t.isImageOnly ? t._e() : e("p", {
                        staticClass: "t-body-4 h-content-tab-card__title"
                    }, [t._t("header")], 2), t._v(" "), t._t("content")], 2)
                }), [], !1, null, "38bf6590", null);
            e.default = component.exports
        },
        1320: function(t, e, r) {
            "use strict";
            r(1258)
        },
        1321: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".desktop-only[data-v-04435f42]{display:none}@media(min-width:768px){.desktop-only[data-v-04435f42]{display:block}.mobile-only[data-v-04435f42]{display:none}}.h-content-tabs[data-v-04435f42]{overflow:hidden}.h-content-tabs[dir=rtl] .h-content-tabs__active-marker[data-v-04435f42]{left:auto;right:-12px}.h-content-tabs__title-description[data-v-04435f42]{font-size:medium;line-height:24px;margin-top:4px}.h-content-tabs__image-mobile-content[data-v-04435f42]{text-align:left}.h-content-tabs__image-mobile-content p[data-v-04435f42]{margin-top:8px}.h-content-tabs__grid[data-v-04435f42]{padding-top:16px}@media(max-width:767px){.h-content-tabs__grid[data-v-04435f42]{grid-template-columns:repeat(1,1fr);width:100%}}@media(min-width:768px){.h-content-tabs__grid[data-v-04435f42]{width:90%}}.h-content-tabs__active-marker[data-v-04435f42]{background:#673de6;border-radius:30px;left:-16px;position:absolute;top:0;transition:all .4s;width:4px}.h-content-tabs__wrapper[data-v-04435f42]{align-items:center;display:flex;flex-direction:row;justify-content:space-between;position:relative}@media(min-width:768px){.h-content-tabs__tab-wrapper[data-v-04435f42]{align-items:center;display:flex}}@media(min-width:1025px){.h-content-tabs__tab-wrapper[data-v-04435f42]{max-width:536px}}.h-content-tabs__list-wrapper[data-v-04435f42]{position:relative}@media(min-width:768px){.h-content-tabs__tab-content-wrapper[data-v-04435f42]{align-items:center;display:flex;justify-content:center;position:relative}}.h-content-tabs__heading[data-v-04435f42]{margin-bottom:16px;padding-left:16px;padding-right:16px;text-align:center}@media(min-width:768px){.h-content-tabs__heading[data-v-04435f42]{margin-bottom:24px}}@media(min-width:1025px){.h-content-tabs__heading[data-v-04435f42]{margin-bottom:32px}}.h-content-tabs__description[data-v-04435f42]{margin-bottom:16px;padding-left:16px;padding-right:16px;text-align:center}@media(min-width:768px){.h-content-tabs__description[data-v-04435f42]{margin-bottom:24px}}@media(min-width:1025px){.h-content-tabs__description[data-v-04435f42]{margin-bottom:32px}}.h-content-tabs[data-v-04435f42] .h-image{margin-bottom:32px;margin-top:24px}@media(min-width:768px){.h-content-tabs[data-v-04435f42] .h-image{margin:initial}}.h-content-tabs[data-v-04435f42]:last-child .h-image{margin-bottom:0}@media(min-width:768px){.h-content-tabs[data-v-04435f42]:last-child{margin:initial}}", ""]), n.locals = {}, t.exports = n
        },
        1333: function(t, e, r) {
            "use strict";
            r.r(e);
            r(127), r(16), r(29), r(8);
            var n = r(88),
                o = r.n(n),
                d = r(7).a.extend({
                    name: "HContentTabs",
                    props: {
                        data: {
                            type: Object,
                            required: !0
                        }
                    },
                    data: () => ({
                        activeTab: 0,
                        activeMarkerHeight: 0
                    }),
                    mounted() {
                        const t = () => {
                            this.setCardWrapperMinHeight(), this.alignActiveTabIndicator()
                        };
                        window.addEventListener("resize", o()(t, 100)), this.$once("hook:beforeDestroy", (() => {
                            window.removeEventListener("resize", o()(t, 100))
                        })), setTimeout((() => this.setCardWrapperMinHeight()), 100), setTimeout((() => this.alignActiveTabIndicator()), 100)
                    },
                    methods: {
                        async setCardWrapperMinHeight() {
                            const t = this.$refs.cardWrapper,
                                e = await this.measureMaxHeight();
                            t && t.style && (t.style.minHeight = e + 8 + "px")
                        },
                        async measureMaxHeight() {
                            let t = 0;
                            const e = this.$refs.contentTabCard;
                            if (e && e.length)
                                for (const component of e) t < component.$el.offsetHeight && (t = component.$el.offsetHeight);
                            return t
                        },
                        alignActiveTabIndicator() {
                            var t;
                            const e = null === (t = this.$refs.tabsWrapper) || void 0 === t ? void 0 : t.querySelector(".h-content-tab--active"),
                                marker = this.$refs.marker;
                            marker && marker.style && e && (marker.style.top = e.offsetTop + "px", this.activeMarkerHeight = e.offsetHeight)
                        },
                        async changeTab(t) {
                            this.activeTab = t, await this.$nextTick(), this.alignActiveTabIndicator()
                        }
                    }
                }),
                c = d,
                l = (r(1320), r(5)),
                component = Object(l.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "h-content-tabs",
                        attrs: {
                            dir: t.direction
                        }
                    }, [e("h2", {
                        staticClass: "h-content-tabs__heading"
                    }, [t._v("\n    " + t._s(t.data.heading) + "\n  ")]), t._v(" "), t.data.description ? e("p", {
                        staticClass: "h-content-tabs__description"
                    }, [t._v("\n    " + t._s(t.data.description) + "\n  ")]) : t._e(), t._v(" "), e("div", {
                        staticClass: "h-grid h-grid--cols-m-2 h-grid--cols-t-2 h-content-tabs__grid"
                    }, [e("div", {
                        staticClass: "h-content-tabs__tab-wrapper desktop-only"
                    }, [e("div", {
                        ref: "tabsWrapper",
                        staticClass: "h-content-tabs__list-wrapper"
                    }, [t._l(t.data.tabs, (function(r, n) {
                        return e("HContentTab", {
                            key: `${r.title}-${n}`,
                            attrs: {
                                "is-active": n === t.activeTab,
                                "data-click-id": `hgr-content_tab-${r.title.toLowerCase().replace(" ","_")}`
                            },
                            on: {
                                click: function(e) {
                                    return t.changeTab(n)
                                }
                            }
                        }, [e("h3", [t._v("\n            " + t._s(r.title) + "\n          ")]), t._v(" "), r.titleDescription ? e("span", {
                            staticClass: "h-content-tabs__title-description"
                        }, [t._v("\n            " + t._s(r.titleDescription) + "\n          ")]) : t._e()])
                    })), t._v(" "), e("div", {
                        ref: "marker",
                        staticClass: "h-content-tabs__active-marker",
                        style: `height: ${t.activeMarkerHeight}px`
                    })], 2)]), t._v(" "), e("div", {
                        ref: "cardWrapper",
                        staticClass: "h-content-tabs__tab-content-wrapper"
                    }, t._l(t.data.tabs, (function(r, n) {
                        return e("HContentTabCard", {
                            key: `${r.title}-content-${n}`,
                            ref: "contentTabCard",
                            refInFor: !0,
                            attrs: {
                                "is-active": n === t.activeTab,
                                "is-image-only": !!r.contentImage
                            },
                            scopedSlots: t._u([{
                                key: "header",
                                fn: function() {
                                    return [t._v(t._s(r.title))]
                                },
                                proxy: !0
                            }, {
                                key: "content",
                                fn: function() {
                                    return [r.content ? e("p", [t._v(t._s(r.content))]) : r.contentHtml ? e("div", {
                                        domProps: {
                                            innerHTML: t._s(r.contentHtml)
                                        }
                                    }) : r.contentImage ? e("div", [e("div", {
                                        staticClass: "h-content-tabs__image-mobile-content mobile-only"
                                    }, [e("h3", [t._v(t._s(r.title))]), t._v(" "), r.titleDescription ? e("p", [t._v(t._s(r.titleDescription))]) : t._e()]), t._v(" "), e("HImage", {
                                        attrs: {
                                            image: r.contentImage
                                        }
                                    })], 1) : t._e()]
                                },
                                proxy: !0
                            }], null, !0)
                        })
                    })), 1)])])
                }), [], !1, null, "04435f42", null);
            e.default = component.exports;
            installComponents(component, {
                HContentTab: r(1312).default,
                HImage: r(165).default,
                HContentTabCard: r(1313).default
            })
        },
        1338: function(t, e, r) {
            "use strict";
            var n = r(4),
                o = r(59);
            e.a = n.a.extend({
                methods: {
                    sendAmplitudeEvent(t) {
                        const e = this.$cookies.get("_ga");
                        e && (t.properties.userGaId = e.toString()), o.a.sendAmplitudeEvent(t)
                    }
                }
            })
        },
        1498: function(t, e, r) {
            var content = r(1557);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("7589c349", content, !0, {
                sourceMap: !1
            })
        },
        1556: function(t, e, r) {
            "use strict";
            r(1498)
        },
        1557: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".desktop-only[data-v-64940585]{display:none}@media(min-width:768px){.desktop-only[data-v-64940585]{display:block}.mobile-only[data-v-64940585]{display:none}}.website-builder-ai-page[data-v-64940585] .h-header-two-cols{background-color:#2f1c6a}.website-builder-ai-page[data-v-64940585] .h-single-pricing-table-section__info{color:#fff}.website-builder-ai-page[data-v-64940585] .h-payment-terms span,.website-builder-ai-page[data-v-64940585] .h-payment-terms span:hover{color:#fc5185}.website-builder-ai-page[data-v-64940585] .h-features-header__heading-wrapper{margin-bottom:16px}@media(min-width:768px){.website-builder-ai-page[data-v-64940585] .h-features-header__heading-wrapper{margin-bottom:8px}}@media(min-width:1025px){.website-builder-ai-page[data-v-64940585] .h-features-header__heading-wrapper{margin-bottom:24px}}.website-builder-ai-page[data-v-64940585] .h-features-header__description{margin-bottom:16px}@media(min-width:1025px){.website-builder-ai-page[data-v-64940585] .h-features-header__description{margin-bottom:24px}}.website-builder-ai-page[data-v-64940585] .h-features-header__button-wrapper{margin:auto;max-width:264px}@media(min-width:1025px){.website-builder-ai-page[data-v-64940585] .h-features-header__button-wrapper{margin:initial}}.website-builder-ai-page[data-v-64940585] .h-content-tabs__description,.website-builder-ai-page[data-v-64940585] .h-content-tabs__heading{color:#fff}.website-builder-ai-page[data-v-64940585] .h-content-tabs__image-mobile-content{color:#fff}.website-builder-ai-page[data-v-64940585] .h-content-tabs__active-marker{background:#fff}.website-builder-ai-page[data-v-64940585] .h-content-tabs .h-content-tab{color:#8c85ff}.website-builder-ai-page[data-v-64940585] .h-content-tabs .h-content-tab--active h3,.website-builder-ai-page[data-v-64940585] .h-content-tabs .h-content-tab--active span{color:#fff}.website-builder-ai-page .u-section-spaces[data-v-64940585]{background-color:#2f1c6a}.website-builder-ai-page[data-v-64940585] .h-card-grid.u-section-spaces{padding:0}.website-builder-ai-page[data-v-64940585] .h-section-one-col:not(.h-section-one-col--bg-dark){background-color:#2f1c6a;padding-bottom:32px;padding-top:32px}@media(min-width:768px){.website-builder-ai-page[data-v-64940585] .h-section-one-col:not(.h-section-one-col--bg-dark){padding-bottom:40px;padding-top:40px}}@media(min-width:1025px){.website-builder-ai-page[data-v-64940585] .h-section-one-col:not(.h-section-one-col--bg-dark){padding-bottom:48px;padding-top:48px}}.website-builder-ai-page[data-v-64940585] .h-section-one-col:not(.h-section-one-col--bg-dark) .h-partner-review__rating div{color:#fff}.website-builder-ai-page[data-v-64940585] .h-multi-texts-section{padding-bottom:0;padding-top:0}.website-builder-ai-page[data-v-64940585] .h-section-one-col{color:#fff}.website-builder-ai-page[data-v-64940585] .built-in-ai-tools{color:#fc5185;font-weight:700}.website-builder-ai-page[data-v-64940585] .h-features-review-card__bottom-icon{max-width:132px}.website-builder-ai-page-header__list[data-v-64940585]{align-items:center;display:flex;flex-direction:column}@media(min-width:1025px){.website-builder-ai-page-header__list[data-v-64940585]{align-items:flex-start}}.website-builder-ai-page-header__list-item[data-v-64940585]{align-items:center;display:flex;margin-bottom:16px}@media(min-width:768px){.website-builder-ai-page-header__list-item[data-v-64940585]{margin-bottom:24px}}.website-builder-ai-page-header__list-item[data-v-64940585]:last-of-type{margin-bottom:32px}.website-builder-ai-page-header__list-item-icon[data-v-64940585]{display:inline-flex;margin-right:10px}.website-builder-ai-page__trustpilot-reviews-wrapper[data-v-64940585]{row-gap:24px}.website-builder-ai-page__pricing-anchor[data-v-64940585]{display:block;position:relative;top:-32px;visibility:hidden}@media(min-width:768px){.website-builder-ai-page__pricing-anchor[data-v-64940585]{top:-48px}}@media(min-width:1025px){.website-builder-ai-page__pricing-anchor[data-v-64940585]{top:-56px}}.website-builder-ai-page__reviews-wrapper[data-v-64940585]{margin-top:32px;row-gap:24px}@media(min-width:768px){.website-builder-ai-page__reviews-wrapper[data-v-64940585]{margin-top:40px}}@media(min-width:1025px){.website-builder-ai-page__reviews-wrapper[data-v-64940585]{margin-top:48px}}.website-builder-ai-page__reviews-wrapper--users[data-v-64940585]{margin-bottom:32px}@media(min-width:768px){.website-builder-ai-page__reviews-wrapper--users[data-v-64940585]{margin-bottom:40px}}@media(min-width:1025px){.website-builder-ai-page__reviews-wrapper--users[data-v-64940585]{margin-bottom:48px}}[data-v-64940585] .h-accordion__list-body a{color:#fc5185}[data-v-64940585] .h-accordion__list-body a:hover{color:#fff}[data-v-64940585] .h-accordion__icon svg{fill:#fff}[data-v-64940585] .h-accordion--active{background:#5025d1}[data-v-64940585] .h-accordion--active .h-accordion__list-body{color:#fff}[data-v-64940585] .h-multi-texts-section__description,[data-v-64940585] .h-multi-texts-section__text-block,[data-v-64940585] .h-multi-texts-section__title{color:#fff}[data-v-64940585] .h-faq-section{padding-top:0}[data-v-64940585] .h-faq-section .h-section-one-col.h-section-one-col{padding-top:0}", ""]), n.locals = {}, t.exports = n
        },
        1639: function(t, e, r) {
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

            function d(t) {
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
            r(8);
            var c = r(7),
                l = r(1135);
            var h = [{
                    rel: "alternate",
                    hreflang: "x-default",
                    href: "https://www.hostinger.com/ai-website-builder"
                }, {
                    rel: "alternate",
                    hreflang: "en-us",
                    href: "https://www.hostinger.com/ai-website-builder"
                }, {
                    rel: "alternate",
                    hreflang: "en-in",
                    href: "https://www.hostinger.com/ai-website-builder"
                }, {
                    rel: "alternate",
                    hreflang: "en-gb",
                    href: "https://www.hostinger.com/ai-website-builder"
                }],
                f = r(59),
                m = r(1338),
                _ = c.a.extend({
                    name: "WebsiteBuilderAI",
                    mixins: [m.a],
                    head() {
                        return {
                            title: this.$t("head.websiteBuilderAi.title"),
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: this.$t("head.websiteBuilderAi.description")
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: this.$t("head.websiteBuilderAi.title")
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: this.$t("head.websiteBuilderAi.description")
                            }, {
                                hid: "twitter:title",
                                property: "twitter:title",
                                content: this.$t("head.websiteBuilderAi.title")
                            }, {
                                hid: "twitter:description",
                                property: "twitter:description",
                                content: this.$t("head.websiteBuilderAi.description")
                            }],
                            link: [{
                                rel: "preload",
                                href: "/h-assets/images/pages/ai-website-builder/header-image-small-2x.png",
                                as: "image",
                                media: "(max-width: 767px)"
                            }, {
                                rel: "preload",
                                href: "/h-assets/images/pages/ai-website-builder/header-image-2x.png",
                                as: "image",
                                media: "(min-width: 768px)"
                            }, ...this.filterHreflangLinks(h, "en_PK", "pk")]
                        }
                    },
                    jsonld() {
                        const t = this.faqsList.map((t => ({
                                "@type": "Question",
                                name: t.title,
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: t.body
                                }
                            }))),
                            e = {
                                lang: this.language,
                                siteUrl: this.siteUrl,
                                facebook: this.themeData.facebookLink,
                                twitter: this.themeData.twitterLink,
                                youtubeLinks: this.themeData.youtubeLinks,
                                pageUrl: this.siteUrl + this.$route.path,
                                pageTitle: this.$t("head.websiteBuilderAi.title"),
                                pageDescription: this.$t("head.websiteBuilderAi.description")
                            };
                        return {
                            "@context": "http://schema.org",
                            "@graph": [Object(l.e)(e), Object(l.d)(e), Object(l.a)(t)]
                        }
                    },
                    async fetch() {
                        const [{
                            faqs: t
                        }] = await f.g.getFaqsData("ai_website_builder");
                        this.faqsList = t.map((t => ({
                            title: t.question,
                            body: t.answer
                        }))), this.pricingTableData = {
                            websiteBuilderAi: await this.loadPricingTableData("ai_website_builder")
                        }
                    },
                    data: () => ({
                        trustPilotData: {},
                        faqsList: [],
                        pricingTableData: {}
                    }),
                    computed: {
                        pageData() {
                            return {
                                headerData: {
                                    heading: (t = this).$t("pages.websiteBuilderAi.header.heading"),
                                    description: t.$t("pages.websiteBuilderAi.header.description"),
                                    backgroundColor: "primary",
                                    highlightedFeatures: [{
                                        icon: "ui-icons/ic-globe",
                                        text: t.$t("pages.websiteBuilderAi.header.highLightedFeatures.automatedDevelopment")
                                    }, {
                                        icon: "ui-icons/ic-shine",
                                        text: t.$t("pages.websiteBuilderAi.header.highLightedFeatures.aiContent")
                                    }, {
                                        icon: "ui-icons/ic-lock",
                                        text: t.$t("global.features.moneyBackGuarantee")
                                    }],
                                    buttonData: {
                                        color: "danger",
                                        link: t.$t("global.websiteBuilderAiLink") + "?ref=www_ai_builder",
                                        textSlug: t.$t("pages.websiteBuilderAi.header.buttonText")
                                    },
                                    imageSrc: "/h-assets/images/pages/ai-website-builder/header-image-2x.png",
                                    imageAlt: t.$t("pages.websiteBuilderAi.header.heading")
                                },
                                partnerReviewCards: [{
                                    text: t.$t("pages.websiteBuilder.partnerReviewCards.first.text"),
                                    icon: t.$t("pages.websiteBuilderAi.partnerReviewCards.first.icon"),
                                    iconBottom: t.$t("pages.websiteBuilder.partnerReviewCards.first.iconBottom"),
                                    link: t.$t("pages.websiteBuilder.partnerReviewCards.first.link")
                                }, {
                                    text: t.$t("pages.websiteBuilder.partnerReviewCards.second.text"),
                                    icon: t.$t("pages.websiteBuilderAi.partnerReviewCards.second.icon"),
                                    iconBottom: t.$t("pages.websiteBuilder.partnerReviewCards.second.iconBottom"),
                                    link: t.$t("pages.websiteBuilder.partnerReviewCards.second.link")
                                }, {
                                    text: t.$t("pages.websiteBuilder.partnerReviewCards.third.text"),
                                    icon: t.$t("pages.websiteBuilderAi.partnerReviewCards.third.icon"),
                                    iconBottom: t.$t("pages.websiteBuilder.partnerReviewCards.third.iconBottom"),
                                    link: t.$t("pages.websiteBuilder.partnerReviewCards.third.link")
                                }],
                                partnerReviews: {
                                    google: {
                                        icon: {
                                            src: "/h-assets/images/icons/google-light.svg",
                                            width: 74,
                                            height: 24,
                                            alt: "Google"
                                        },
                                        rating: {
                                            stars: "4.8/5",
                                            count: 1237
                                        }
                                    }
                                },
                                contentTabsData: {
                                    heading: t.$t("pages.websiteBuilderAi.contentTabs.heading"),
                                    tabs: [{
                                        title: t.$t("pages.websiteBuilderAi.contentTabs.enterYourBrandName.title"),
                                        titleDescription: t.$t("pages.websiteBuilderAi.contentTabs.enterYourBrandName.titleDescription"),
                                        contentImage: {
                                            src: "/h-assets/images/pages/ai-website-builder/enter-your-brand-name-2x.png",
                                            alt: t.$t("pages.websiteBuilderAi.contentTabs.enterYourBrandName.title")
                                        }
                                    }, {
                                        title: t.$t("pages.websiteBuilderAi.contentTabs.selectWebsiteType.title"),
                                        titleDescription: t.$t("pages.websiteBuilderAi.contentTabs.selectWebsiteType.titleDescription"),
                                        contentImage: {
                                            src: "/h-assets/images/pages/ai-website-builder/select-website-type-2x.png",
                                            alt: t.$t("pages.websiteBuilderAi.contentTabs.selectWebsiteType.title")
                                        }
                                    }, {
                                        title: t.$t("pages.websiteBuilderAi.contentTabs.describeYourBusiness.title"),
                                        titleDescription: t.$t("pages.websiteBuilderAi.contentTabs.describeYourBusiness.titleDescription"),
                                        contentImage: {
                                            src: "/h-assets/images/pages/ai-website-builder/describe-your-business-2x.png",
                                            alt: t.$t("pages.websiteBuilderAi.contentTabs.describeYourBusiness.title")
                                        }
                                    }, {
                                        title: t.$t("pages.websiteBuilderAi.contentTabs.customizeYourWebsite.title"),
                                        titleDescription: t.$t("pages.websiteBuilderAi.contentTabs.customizeYourWebsite.titleDescription"),
                                        contentImage: {
                                            src: "/h-assets/images/pages/ai-website-builder/customize-your-website-2x.png",
                                            alt: t.$t("pages.websiteBuilderAi.contentTabs.customizeYourWebsite.title")
                                        }
                                    }]
                                },
                                doubleColoredSectionData: [{
                                    reverse: !0,
                                    title: "pages.websiteBuilderAi.doubleColoredSection.title",
                                    textBlocks: [{
                                        heading: "pages.websiteBuilderAi.doubleColoredSection.instantWebsiteCreation.heading",
                                        paragraph: "pages.websiteBuilderAi.doubleColoredSection.instantWebsiteCreation.text"
                                    }, {
                                        heading: "pages.websiteBuilderAi.doubleColoredSection.builtInAITools.heading",
                                        paragraph: "pages.websiteBuilderAi.doubleColoredSection.builtInAITools.text"
                                    }, {
                                        heading: "pages.websiteBuilderAi.doubleColoredSection.optimizedForSearchEngines.heading",
                                        paragraph: "pages.websiteBuilderAi.doubleColoredSection.optimizedForSearchEngines.text"
                                    }],
                                    imageData: {
                                        src: "/h-assets/images/pages/logo-maker/double-colored-section-first-2x.png",
                                        alt: "pages.websiteBuilderAi.doubleColoredSection.firstImageAlt"
                                    }
                                }, {
                                    reverse: !1,
                                    textBlocks: [{
                                        heading: "pages.websiteBuilderAi.doubleColoredSection.noCodingSkillsRequired.heading",
                                        paragraph: "pages.websiteBuilderAi.doubleColoredSection.noCodingSkillsRequired.text"
                                    }, {
                                        heading: "pages.websiteBuilderAi.doubleColoredSection.globalCustomerSupport.heading",
                                        paragraph: "pages.websiteBuilderAi.doubleColoredSection.globalCustomerSupport.text",
                                        paragraphParams: {
                                            academyLink: t.themeData.youtubeLinks[1],
                                            tutorialsLink: t.themeData.tutorialsLink
                                        }
                                    }, {
                                        heading: "pages.websiteBuilderAi.doubleColoredSection.eCommerceFeatures.heading",
                                        paragraph: "pages.websiteBuilderAi.doubleColoredSection.eCommerceFeatures.text"
                                    }],
                                    imageData: {
                                        src: "/h-assets/images/pages/logo-maker/double-colored-section-second-2x.png",
                                        alt: "pages.websiteBuilderAi.doubleColoredSection.secondImageAlt"
                                    }
                                }],
                                userReviewCards: [{
                                    text: t.$t("pages.websiteBuilderAi.userReviewCards.first.text"),
                                    icon: t.$t("pages.websiteBuilderAi.userReviewCards.first.icon"),
                                    iconBottom: t.$t("pages.websiteBuilderAi.userReviewCards.first.iconBottom"),
                                    link: t.$t("pages.websiteBuilderAi.userReviewCards.first.link")
                                }, {
                                    text: t.$t("pages.websiteBuilderAi.userReviewCards.second.text"),
                                    icon: t.$t("pages.websiteBuilderAi.userReviewCards.second.icon"),
                                    iconBottom: t.$t("pages.websiteBuilderAi.userReviewCards.second.iconBottom"),
                                    link: t.$t("pages.websiteBuilderAi.userReviewCards.second.link")
                                }, {
                                    text: t.$t("pages.websiteBuilderAi.userReviewCards.third.text"),
                                    icon: t.$t("pages.websiteBuilderAi.userReviewCards.third.icon"),
                                    iconBottom: t.$t("pages.websiteBuilderAi.userReviewCards.third.iconBottom"),
                                    link: t.$t("pages.websiteBuilderAi.userReviewCards.third.link")
                                }],
                                futureIsNow: {
                                    textSlugs: {
                                        title: "pages.websiteBuilderAi.futureIsNow.title",
                                        translateTitle: {
                                            tag: "h2"
                                        },
                                        button: "pages.websiteBuilderAi.futureIsNow.buttonText"
                                    },
                                    buttonData: {
                                        color: "danger",
                                        link: t.$t("global.websiteBuilderAiLink") + "?ref=www_ai_builder"
                                    }
                                },
                                faqsData: {
                                    title: t.$t("pages.websiteBuilderAi.faqs.title"),
                                    description: t.$t("pages.websiteBuilderAi.faqs.description")
                                }
                            };
                            var t
                        }
                    },
                    mounted() {
                        const t = {
                            name: "#pricing" === this.$route.hash ? "website_builder.ai_builder.offer_landing_shown" : "website_builder.ai_builder.ai_landing_page_enter",
                            properties: {
                                brand: this.themeData.name
                            }
                        };
                        this.sendAmplitudeEvent(t)
                    }
                }),
                v = (r(1556), r(5)),
                component = Object(v.a)(_, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "website-builder-ai-page"
                    }, [e("HFeaturesHeader", {
                        attrs: {
                            data: t.pageData.headerData
                        },
                        scopedSlots: t._u([{
                            key: "additional-content",
                            fn: function() {
                                return [e("div", {
                                    staticClass: "website-builder-ai-page-header__list"
                                }, t._l(t.pageData.headerData.highlightedFeatures, (function(r, n) {
                                    return e("span", {
                                        key: `list_item-${n}`,
                                        staticClass: "website-builder-ai-page-header__list-item"
                                    }, [e("HIcon", {
                                        staticClass: "website-builder-ai-page-header__list-item-icon",
                                        attrs: {
                                            color: "danger",
                                            icon: r.icon,
                                            "view-box": "0 0 20 20",
                                            size: {
                                                height: 20,
                                                width: 20
                                            }
                                        }
                                    }), t._v("\n          " + t._s(r.text) + "\n        ")], 1)
                                })), 0)]
                            },
                            proxy: !0
                        }])
                    }), t._v(" "), e("HPartnerReviews", {
                        attrs: {
                            data: d({
                                trustpilot: d(d({}, t.trustPilotData), {}, {
                                    theme: "dark"
                                })
                            }, t.pageData.partnerReviews)
                        }
                    }), t._v(" "), e("section", {
                        staticClass: "u-section-spaces"
                    }, [e("HContentTabs", {
                        attrs: {
                            data: t.pageData.contentTabsData
                        }
                    })], 1), t._v(" "), e("div", {
                        staticClass: "website-builder-ai-page__pricing-anchor",
                        attrs: {
                            id: "pricing"
                        }
                    }), t._v(" "), e("HSinglePricingTableSection", {
                        attrs: {
                            title: t.$t("pages.websiteBuilderAi.pricingTable.heading"),
                            product: t.pricingTableData.websiteBuilderAi.products[0],
                            "table-slug": t.pricingTableData.websiteBuilderAi.slug,
                            "show-sale-offer": "",
                            "background-color": "primary-dark"
                        },
                        scopedSlots: t._u([{
                            key: "footer",
                            fn: function() {
                                return [e("div", {
                                    staticClass: "website-builder-ai-page__reviews-wrapper h-grid h-grid--cols-m-1 h-grid--cols-d-3"
                                }, t._l(t.pageData.partnerReviewCards, (function(t, r) {
                                    return e("HFeaturesReviewCard", {
                                        key: `partner_review_card-${r}`,
                                        staticClass: "h-grid-item",
                                        attrs: {
                                            data: t,
                                            "background-color": "primary-dark"
                                        }
                                    })
                                })), 1)]
                            },
                            proxy: !0
                        }])
                    }), t._v(" "), e("HMultiTextsSection", {
                        attrs: {
                            "background-color": "meteorite-dark",
                            data: t.pageData.doubleColoredSectionData
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "u-section-spaces"
                    }, [e("div", {
                        staticClass: "website-builder-ai-page__trustpilot-reviews-wrapper h-grid h-grid--cols-m-1 h-grid--cols-d-3"
                    }, t._l(t.pageData.userReviewCards, (function(t, r) {
                        return e("HFeaturesReviewCard", {
                            key: `user_review_card-${r}`,
                            staticClass: "h-grid-item",
                            attrs: {
                                "background-color": "primary-dark",
                                data: t
                            }
                        })
                    })), 1)]), t._v(" "), e("HTextButtonSection", {
                        attrs: {
                            "text-slugs": t.pageData.futureIsNow.textSlugs,
                            "button-data": t.pageData.futureIsNow.buttonData
                        }
                    }), t._v(" "), e("HFaqSection", {
                        attrs: {
                            data: d(d({}, t.pageData.faqsData), {}, {
                                faqs: t.faqsList
                            })
                        }
                    })], 1)
                }), [], !1, null, "64940585", null);
            e.default = component.exports;
            installComponents(component, {
                HIcon: r(80).default,
                HFeaturesHeader: r(1155).default,
                HPartnerReviews: r(1181).default,
                HContentTabs: r(1333).default,
                HFeaturesReviewCard: r(1197).default,
                HSinglePricingTableSection: r(1255).default,
                HMultiTextsSection: r(1145).default,
                HTextButtonSection: r(1169).default,
                HFaqSection: r(1165).default
            })
        }
    }
]);