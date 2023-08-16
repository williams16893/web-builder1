(window.webpackJsonp = window.webpackJsonp || []).push([
    [5, 96, 129], {
        1109: function(e, t, r) {
            var content = r(1132);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("06f1a84d", content, !0, {
                sourceMap: !1
            })
        },
        1115: function(e, t, r) {
            "use strict";
            r.r(t);
            var c = r(1),
                n = r(7),
                o = r(0);

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
            const l = ["light", "gray", "meteorite-dark"];
            var d = n.a.extend({
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
                            validator: Object(o.y)(l)
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
                            return this.currency ? null === this.price ? "*.**" : Object(o.h)(this.price, this.currency.decimals, this.currency.thousandSeparator, this.currency.decimalSeparator) : ""
                        },
                        classes() {
                            return function(e) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source = null != arguments[i] ? arguments[i] : {};
                                    i % 2 ? h(Object(source), !0).forEach((function(t) {
                                        Object(c.a)(e, t, source[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                                    }))
                                }
                                return e
                            }({}, Object(o.f)("h-price--text", this.color, l))
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
                f = d,
                y = (r(1131), r(5)),
                component = Object(y.a)(f, (function() {
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
        1131: function(e, t, r) {
            "use strict";
            r(1109)
        },
        1132: function(e, t, r) {
            var c = r(12)((function(i) {
                return i[1]
            }));
            c.push([e.i, ".desktop-only[data-v-e9c9949c]{display:none}@media(min-width:768px){.desktop-only[data-v-e9c9949c]{display:block}.mobile-only[data-v-e9c9949c]{display:none}}.h-price[data-v-e9c9949c]{display:inline-flex}.h-price__currency--prepend[data-v-e9c9949c]{margin-right:4px}.h-price__currency--append[data-v-e9c9949c]{margin-left:4px}.h-price[dir=rtl] .h-price__currency--prepend[data-v-e9c9949c]{margin-left:4px;margin-right:0}.h-price[dir=rtl] .h-price__currency--append[data-v-e9c9949c]{margin-left:0;margin-right:4px}.h-price--text-dark .h-price__currency[data-v-e9c9949c],.h-price--text-dark .h-price__number[data-v-e9c9949c],.h-price--text-dark .h-price__suffix[data-v-e9c9949c]{color:#1d1e20}.h-price--text-light .h-price__currency[data-v-e9c9949c],.h-price--text-light .h-price__number[data-v-e9c9949c],.h-price--text-light .h-price__suffix[data-v-e9c9949c]{color:#fff}.h-price--text-gray .h-price__currency[data-v-e9c9949c],.h-price--text-gray .h-price__number[data-v-e9c9949c],.h-price--text-gray .h-price__suffix[data-v-e9c9949c]{color:#727586}.h-price--text-primary .h-price__currency[data-v-e9c9949c],.h-price--text-primary .h-price__number[data-v-e9c9949c],.h-price--text-primary .h-price__suffix[data-v-e9c9949c]{color:#673de6}.h-price--text-primary-hoster-blue .h-price__currency[data-v-e9c9949c],.h-price--text-primary-hoster-blue .h-price__number[data-v-e9c9949c],.h-price--text-primary-hoster-blue .h-price__suffix[data-v-e9c9949c]{color:#007aff}.h-price--text-meteorite .h-price__currency[data-v-e9c9949c],.h-price--text-meteorite .h-price__number[data-v-e9c9949c],.h-price--text-meteorite .h-price__suffix[data-v-e9c9949c]{color:#8c85ff}.h-price--text-danger .h-price__currency[data-v-e9c9949c],.h-price--text-danger .h-price__number[data-v-e9c9949c],.h-price--text-danger .h-price__suffix[data-v-e9c9949c]{color:#fc5185}.h-price--text-success .h-price__currency[data-v-e9c9949c],.h-price--text-success .h-price__number[data-v-e9c9949c],.h-price--text-success .h-price__suffix[data-v-e9c9949c]{color:#00b090}.h-price--text-warning .h-price__currency[data-v-e9c9949c],.h-price--text-warning .h-price__number[data-v-e9c9949c],.h-price--text-warning .h-price__suffix[data-v-e9c9949c]{color:#ffcd35}.h-price--text-meteorite-dark .h-price__currency[data-v-e9c9949c],.h-price--text-meteorite-dark .h-price__number[data-v-e9c9949c],.h-price--text-meteorite-dark .h-price__suffix[data-v-e9c9949c]{color:#2f1c6a}", ""]), c.locals = {}, e.exports = c
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
        1193: function(e, t, r) {
            "use strict";
            r.r(t);
            r(8), r(16), r(29);
            var c = r(88),
                n = r.n(c),
                o = r(7).a.extend({
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
                            const c = Promise.all([this.minimizeFontSize(r, t), this.maximizeFontSize(r, t)]);
                            return c.then((() => {
                                this.$emit("updateFontSize", Math.max(Math.min(this.fontSize, this.maxFontSize), this.minFontSize)), this.calculatingDynamicPricing = !1
                            })), c
                        },
                        calculateOriginalFontSize() {
                            var e, t;
                            const {
                                price: r,
                                container: c,
                                currency: n,
                                suffix: o
                            } = this.getPricingElements();
                            c.classList.remove("ready"), n.style.removeProperty("font-size"), o.style.removeProperty("font-size");
                            const h = getComputedStyle(r),
                                l = parseInt(null == h ? void 0 : h.fontSize.replace("px", ""));
                            this.maxFontSize = this.fontSize = l;
                            const d = parseFloat(null === (e = getComputedStyle(n)) || void 0 === e ? void 0 : e.fontSize.replace("px", ""));
                            this.currencyFontSizeCoefficient = d / this.fontSize, n.style.fontSize = `${this.currencyFontSizeCoefficient}em`;
                            const f = parseFloat(null === (t = getComputedStyle(o)) || void 0 === t ? void 0 : t.fontSize.replace("px", ""));
                            this.suffixFontSizeCoefficient = f / this.fontSize, o.style.fontSize = `${this.suffixFontSizeCoefficient}em`, c.classList.add("ready")
                        },
                        bigEnough(e, t) {
                            return e.clientWidth + 8 > t.clientWidth || this.fontSize >= this.maxFontSize || this.fontSize >= this.staticFontSize
                        },
                        smallEnough(e, t) {
                            return e.clientWidth < t.clientWidth || this.fontSize < this.minFontSize
                        },
                        maximizeFontSize(e, t) {
                            return new Promise((r => {
                                const c = setInterval((() => {
                                    if (this.bigEnough(e, t)) return clearInterval(c), void r(!0);
                                    this.fontSize++
                                }), 0)
                            }))
                        },
                        minimizeFontSize(e, t) {
                            return new Promise((r => {
                                const c = setInterval((() => {
                                    if (this.smallEnough(e, t)) return clearInterval(c), void r(!0);
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
                                c = null == t ? void 0 : t.querySelector(".h-price__currency"),
                                n = null == t ? void 0 : t.querySelector(".h-price__suffix");
                            return {
                                container: e,
                                child: t,
                                price: r,
                                currency: c,
                                suffix: n
                            }
                        }
                    }
                }),
                h = (r(1216), r(5)),
                component = Object(h.a)(o, (function() {
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
        1216: function(e, t, r) {
            "use strict";
            r(1179)
        },
        1217: function(e, t, r) {
            var c = r(12)((function(i) {
                return i[1]
            }));
            c.push([e.i, ".desktop-only{display:none}@media(min-width:768px){.desktop-only{display:block}.mobile-only{display:none}}.h-dynamic-size-price{font-size:48px}.h-dynamic-size-price .h-price{align-items:baseline;font-size:inherit}.h-dynamic-size-price.ready .h-price-block{font-size:1em}.h-dynamic-size-price.ready .h-price__currency{font-size:.6em}.h-dynamic-size-price.ready .h-price__number{font-size:1em}.h-dynamic-size-price.ready .h-price__suffix{font-size:.6em}", ""]), c.locals = {}, e.exports = c
        }
    }
]);