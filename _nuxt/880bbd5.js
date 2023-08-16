(window.webpackJsonp = window.webpackJsonp || []).push([
    [62],
    [function(e, t, n) {
        "use strict";
        n.d(t, "u", (function() {
            return c
        })), n.d(t, "z", (function() {
            return h
        })), n.d(t, "y", (function() {
            return d
        })), n.d(t, "C", (function() {
            return f
        })), n.d(t, "c", (function() {
            return m
        })), n.d(t, "a", (function() {
            return w
        })), n.d(t, "A", (function() {
            return y
        })), n.d(t, "B", (function() {
            return v
        })), n.d(t, "b", (function() {
            return k
        })), n.d(t, "t", (function() {
            return x
        })), n.d(t, "o", (function() {
            return _
        })), n.d(t, "e", (function() {
            return S
        })), n.d(t, "d", (function() {
            return C
        })), n.d(t, "x", (function() {
            return P
        })), n.d(t, "D", (function() {
            return O
        })), n.d(t, "v", (function() {
            return I
        })), n.d(t, "w", (function() {
            return H
        })), n.d(t, "f", (function() {
            return j
        })), n.d(t, "g", (function() {
            return D
        })), n.d(t, "p", (function() {
            return L
        })), n.d(t, "l", (function() {
            return A
        })), n.d(t, "s", (function() {
            return T
        })), n.d(t, "q", (function() {
            return W
        })), n.d(t, "r", (function() {
            return N
        })), n.d(t, "h", (function() {
            return M
        })), n.d(t, "i", (function() {
            return E
        })), n.d(t, "k", (function() {
            return B
        })), n.d(t, "j", (function() {
            return F
        })), n.d(t, "m", (function() {
            return $
        })), n.d(t, "n", (function() {
            return z
        }));
        n(16), n(29), n(8), n(137), n(167);
        var o = n(1033),
            r = n(166),
            l = n.n(r);
        const c = e => "object" == typeof e && null !== e,
            h = e => {
                const t = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                    n = document.getElementById(e);
                n && (t ? Object(o.a)(n, {
                    behavior: "smooth"
                }) : n.scrollIntoView({
                    behavior: "smooth"
                }))
            },
            d = e => t => "" === t || e.includes(t),
            f = e => {
                if (!e) return "";
                return e.replace(/_/g, " ").replace(/(^\w{1})|(\s+\w{1})/g, (e => e.toUpperCase()))
            },
            m = e => e ? e.replace(/(?:^\w|[A-Z]|\b\w)/g, ((e, t) => 0 === t ? e.toLowerCase() : e.toUpperCase())).replace(/[\W_]/g, "") : "",
            w = e => e ? e.replace(/(^[A-Z])/, (([e]) => e.toLowerCase())).replace(/([A-Z])/g, (([e]) => `_${e.toLowerCase()}`)) : "",
            y = e => e ? e.replace(/([_][a-z])/g, (e => e.toUpperCase().replace("_", ""))) : "",
            v = object => {
                if (c(object) && !Array.isArray(object)) {
                    const e = {};
                    return Object.keys(object).forEach((t => {
                        e[y(t)] = v(object[t])
                    })), e
                }
                if (Array.isArray(object)) {
                    const e = [];
                    return object.forEach((t => e.push(v(t)))), e
                }
                return object
            },
            k = object => {
                if (c(object) && !Array.isArray(object)) {
                    const e = {};
                    return Object.keys(object).forEach((t => {
                        const n = w(t);
                        if (n) return e[n] = k(object[t])
                    })), e
                }
                if (Array.isArray(object)) {
                    const e = [];
                    return object.forEach((t => e.push(k(t)))), e
                }
                return object
            },
            x = async e => {
                try {
                    const {
                        data: data
                    } = await e;
                    return [data, null]
                } catch (e) {
                    return [{}, e]
                }
            },
            _ = e => {
                if (!e) return "";
                const t = e.split("_")[0];
                return "index" === t ? "homepage" : t.includes("recommended") ? "recommended" : t
            },
            S = e => e ? e.charAt(0).toUpperCase() + e.slice(1) : "",
            C = e => e ? e.replace(/(^\w|\s\w)/g, (e => e.toUpperCase())) : "",
            P = (object, e) => {
                if (!e) return "";
                if (object[e]) return object[e];
                const t = (e = (e = e.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split(".");
                for (let i = 0, e = t.length; i < e; ++i) {
                    const e = t[i];
                    if (!(e in object)) return;
                    object = object[e]
                }
                return object
            },
            O = e => e ? e.charAt(0).toUpperCase() + e.slice(1) : "",
            I = e => e.replace(/-./g, (e => e[1].toUpperCase())),
            H = e => I(e).replace(/\/./g, (e => e[1].toUpperCase())),
            j = (e, t, n, o = "-") => {
                if (Array.isArray(t)) {
                    const r = {};
                    return t.forEach((element => {
                        n.includes(element) && (r[e + o + element] = !0)
                    })), r
                }
                return n.includes(t) ? {
                    [e + o + t]: !0
                } : {}
            },
            D = (e, t = "px") => {
                if ("" !== e && !isNaN(+(e || "NaN"))) return `${Number(e)}${t}`
            },
            L = e => ["UA", "VN", "GR"].includes(e) ? "t-headline-pt" : "t-h3",
            A = (e, t) => e.navItems.mainSections[t].filter((t => (t => t.includedLocales ? t.includedLocales.includes(e.themeData.language.code) : !t.excludedLocales || !t.excludedLocales.includes(e.themeData.language.code))(t))),
            T = (e, t) => e.navItems.upliftedMainSections[t].filter((t => (t => t.includedLocales ? t.includedLocales.includes(e.themeData.language.code) : !t.excludedLocales || !t.excludedLocales.includes(e.themeData.language.code))(t))),
            W = e => {
                var t, n;
                e = e.toLowerCase();
                const o = new l.a("[^\\p{N}\\p{Mn}\\p{L}- ]", "g"),
                    r = e.split("."),
                    c = r.length > 3 || 3 === r.length && r[1].length > 3,
                    h = (null === (t = r[r.length - 2]) || void 0 === t ? void 0 : t.length) > 3 ? r.length - 2 : r.length - 3 || 1;
                let d = c ? r.slice(h).join(".") : e;
                /^(w)\1+$/.test(d.split(".")[0]) && r.length > 2 && (d = d.split("w.").slice(1).join("w.")), 2 === r.length && /^(w)\1+$/.test(r[0]) && (d = r[1] + ".com"), d = d.replace(/ /g, "");
                const f = d.includes(".") ? null === (n = d.substr(d.indexOf("."))) || void 0 === n ? void 0 : n.replace(/^\./, "") : "";
                return f && (d = d.split("." + f)[0]), d = d.replace(/www\./i, "").replace(/https?\:\/\//i, ""), d = l.a.replace(d, o, ""), [d, f]
            },
            N = (text, e) => e >= text.length ? text : `${text.slice(0,e)}...`,
            M = (e, t, n, o) => {
                const r = "\\d(?=(\\d{3})+" + (t > 0 ? "\\D" : "$") + ")",
                    l = t ? e.toFixed(Math.max(0, ~~t)) : e.toFixed(0) + "";
                return (o ? l.replace(".", o) : l).replace(new RegExp(r, "g"), "$&" + (n || ","))
            },
            E = (e, t) => {
                const n = M(t, e.themeData.currency.decimals, e.themeData.currency.thousandSeparator, e.themeData.currency.decimalSeparator);
                let o = "",
                    r = "";
                return "prepend" === e.themeData.currency.position && (o = e.themeData.currency.symbol), "prepend_with_space" === e.themeData.currency.position && (o = `${e.themeData.currency.symbol} `), "append" === e.themeData.currency.position && (r = e.themeData.currency.symbol), "append_with_space" === e.themeData.currency.position && (r = ` ${e.themeData.currency.symbol}`), `${o}${n}${r}/${e.$t("global.perMonth")}`
            },
            B = e => ["invalid-hash", "user-exists", "invalid-email", "user-already-exists", "user-is-suspended", "password-too-short", "password-too-long"].includes(e) ? e : "general-error",
            F = (e, t) => {
                switch (e) {
                    case "invalid-hash":
                        return {
                            text: t.$t("pages.signup.hashInvalid"),
                            color: "danger"
                        };
                    case "user-exists":
                        return {
                            text: t.$t("pages.signup.userExists"),
                            color: "warning"
                        };
                    case "invalid-email":
                        return {
                            text: t.$t("pages.signup.invalidEmail"),
                            color: "danger"
                        };
                    case "user-already-exists":
                        return {
                            text: t.$t("pages.signup.userAlreadyExists"),
                            color: "danger"
                        };
                    case "user-is-suspended":
                        return {
                            text: t.$t("pages.signup.userIsSuspended"),
                            color: "danger"
                        };
                    case "password-too-short":
                        return {
                            text: t.$t("pages.register.passwordTooShort"),
                            color: "danger"
                        };
                    case "password-too-long":
                        return {
                            text: t.$t("pages.register.passwordTooLong"),
                            color: "danger"
                        };
                    case "general-error":
                        return {
                            text: t.$t("pages.signup.somethingWrong"),
                            color: "danger"
                        };
                    default:
                        return {
                            text: "",
                            color: ""
                        }
                }
            },
            $ = e => {
                switch (e) {
                    case "facebook":
                        return {
                            icon: "social-icons/ic-facebook-round",
                            color: "facebook",
                            viewBox: "-2 -2 24 24"
                        };
                    case "github":
                        return {
                            icon: "social-icons/ic-github",
                            color: "github",
                            iconColor: "light",
                            viewBox: "0 0 20 20"
                        };
                    case "google":
                        return {
                            icon: "ui-icons/ic-google-color",
                            color: "light",
                            type: "outline"
                        };
                    default:
                        return {
                            color: "primary"
                        }
                }
            },
            z = (e, t) => {
                const n = ["rr_referralcode", "utm_campaign"],
                    o = Object.keys(t.$route.query),
                    r = Object.values(t.$route.query);
                let l = e;
                return o.length && o.forEach(((e, t) => {
                    n.includes(e) && (l += `?${e}=${r[t]}`)
                })), l
            }
    }, , , function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return l
        })), n.d(t, "a", (function() {
            return c
        }));
        n(8), n(536), n(108), n(16);
        var o = n(0),
            r = n(60);
        const l = (link, e) => {
                if (e) {
                    const t = new URL(link);
                    t.hostname = e, link = t.toString()
                }
                return link
            },
            c = (e, t, n) => {
                const c = n || e.themeData.language.code,
                    h = "pl_PL" === c && !["hostinger-pro", "domain-checker", "domain-name-search"].includes(t) || ["web-hosting", "wordpress-hosting", "website-builder", "cloud-hosting", "vps-hosting", "online-store", "email-hosting", "logo-maker", "google-workspace"].includes(t),
                    d = ["en_US", "fr_FR", "en_IN", "pt_BR", ...r.a.spanishLocales],
                    f = ["minecraft-server-hosting"].includes(t) && ["en_US", "pt_BR", "en_IN", "fr_FR", "en_GB"].includes(c),
                    m = ["hostinger-pro"].includes(t) && ["en_US", "en_PK", "en_GB", "en_IN", "pt_BR", "fr_FR", "es_ES", "es_CO", "es_MX", "es_AR"].includes(c),
                    w = ["domain-name-search"].includes(t) && ["en_US", "en_PK", "en_IN", "en_GB", "en_PH", "en_MY", "en_JP", "hi_IN", "fr_FR", "pt_BR", "id_ID", "es_AR", "es_ES", "es_MX", "es_CO", "ng_NG"].includes(c),
                    y = ["cyberpanel-vps-hosting"].includes(t) && ["en_US", "en_PK", "pt_BR", "en_IN", "fr_FR", "en_GB", "ng_NG"].includes(c),
                    v = ["website-templates"].includes(t) && ["en_US", "en_PK", "pt_BR", "es_ES", "es_AR", "es_MX", "es_CO", "en_IN", "fr_FR", "en_GB", "id_ID", "de_DE"].includes(c),
                    k = ["brand-guidelines/partners"].includes(t) && d.includes(c),
                    x = ["ecommerce-hosting"].includes(t) && r.a.ecommerceHostingLocales.includes(c),
                    _ = ["partners"].includes(t) && ["en_US", "en_GB", "en_IN", "fr_FR", "pt_BR", "es_ES", "es_MX", "es_CO", "es_AR"].includes(c),
                    S = ["ai-website-builder"].includes(t) && ["en_US", "en_GB", "en_IN"].includes(c),
                    C = ["cpanel-hosting"].includes(t) && ["ng_NG"].includes(c),
                    P = ["cpanel-email-hosting"].includes(t) && ["ng_NG"].includes(c);
                return h || f || m || w || y || S || v || k || _ || x || C || P ? {
                    nuxtLink: `/${t}`,
                    link: `/${e.$t(`routes.${Object(o.w)(t)}`)}`
                } : {
                    link: l(`${e.siteUrl}/${e.$t(`routes.${Object(o.w)(t)}`)}`)
                }
            }
    }, , , , function(e, t, n) {
        "use strict";
        var o = n(1),
            r = (n(16), n(29), n(8), n(4)),
            l = n(59),
            c = n(0),
            h = n(223),
            d = n(60);

        function f(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function m(e) {
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
        t.a = r.a.extend({
            async asyncData({
                app: e,
                payload: t,
                route: n
            }) {
                const o = await Object(h.a)(null == t ? void 0 : t.planCards, n.name, e.context.env.themeData.language.code),
                    r = await Object(h.b)(null == t ? void 0 : t.trustPilotData, n.name);
                return m(m({}, r && {
                    trustPilotData: r
                }), o && {
                    planCardsData: o
                })
            },
            computed: {
                themeData: () => ({
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
                }),
                siteUrl() {
                    var e, t;
                    return null === (t = null === (e = this.themeData) || void 0 === e ? void 0 : e.settings) || void 0 === t ? void 0 : t.baseUrl.slice(0, -1)
                },
                pageName() {
                    return Object(c.o)(this.$route.name)
                },
                pageNameDataClickId() {
                    return this.pageName.replace(/-/g, "_")
                },
                language() {
                    var e;
                    return null === (e = this.themeData) || void 0 === e ? void 0 : e.language.iso
                },
                showKVMProduct() {
                    return d.a.kvmLocales.includes(this.themeData.language.code)
                },
                direction() {
                    var e;
                    return (null === (e = this.themeData) || void 0 === e ? void 0 : e.language.rtl) ? "rtl" : "ltr"
                },
                isNiaga() {
                    var e, t;
                    return "niagahoster" === (null === (e = this.themeData) || void 0 === e ? void 0 : e.themeGroup) || "ng_NG" === (null === (t = this.themeData) || void 0 === t ? void 0 : t.language.code)
                }
            },
            methods: {
                async loadPricingTableData(e) {
                    const [data] = await l.j.getPricingTableData(e);
                    return data
                },
                nuxtTo(link, e = !0) {
                    var t;
                    if (!link) return;
                    const n = link.replace(/^\/|\/$/g, ""),
                        o = e && "/" !== link ? this.localePath(n) : link;
                    return (null === (t = this.$route) || void 0 === t ? void 0 : t.path.replace(/\//g, "")) === (null == o ? void 0 : o.replace(/\//g, "")) ? "#layout" : o
                },
                filterHreflangLinks(e, t, n) {
                    var o;
                    return (null === (o = this.themeData) || void 0 === o ? void 0 : o.language.code) === t || this.isNiaga ? [] : e.filter((link => link.hreflang !== n))
                },
                useNiagaImagePath(data) {
                    const e = {};
                    if (!data || "object" != typeof data) return null;
                    for (const t in data)
                        if (Object.prototype.hasOwnProperty.call(data, t)) {
                            const n = data[t];
                            let o = n;
                            if ("string" == typeof n && n.startsWith("/h-assets/images/")) {
                                const e = n.lastIndexOf("/");
                                o = `${n.substring(0,e)}/niaga/${n.substring(e+1)}`
                            }
                            e[t] = "object" == typeof o && null !== o ? this.useNiagaImagePath(o) : o
                        }
                    return e
                }
            }
        })
    }, , function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return o
        })), n.d(t, "a", (function() {
            return r
        })), n.d(t, "b", (function() {
            return l
        })), n.d(t, "d", (function() {
            return c
        }));
        const o = ["primary", "dark", "black", "success", "warning", "meteorite", "danger", "light", "gray"],
            r = ["primary-dark", "success-dark", "warning-dark", "danger-dark", "gray-dark", "meteorite-dark"],
            l = ["primary-light", "meteorite-light", "success-light", "warning-light", "danger-light", "gray-border", "gray-light", "ghost-white"],
            c = ["facebook", "github"]
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            var o = n(4),
                r = n(42),
                l = n.n(r),
                c = n(0);
            const h = l.a.create({
                    timeout: 1e5,
                    headers: {
                        common: {
                            Accept: "application/json;charset=utf-8",
                            "Content-Type": "text/plain",
                            "X-XSS-Protection": "1; mode=block",
                            "X-Content-Type-Options": "nosniff"
                        }
                    }
                }),
                d = () => {
                    const t = e.env.LOCALE_TOKEN || "www.hostinger.com";
                    return t ? `Bearer ${t}` : null
                },
                f = [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511];
            h.interceptors.request.use((e => (d() || console.warn("No token"), e.headers.common.Authorization = d(), e))), h.interceptors.request.use((e => (e.data && (e.data = Object(c.b)(e.data)), e.params && (e.params = Object(c.b)(e.params)), e))), h.interceptors.response.use((e => Object(c.B)({
                data: e.data.data
            })), (e => {
                var t, n;
                if ("Request canceled" === e.message) return Promise.reject(new Error(e.message));
                f.includes(e.response.status);
                const o = (null === (t = e.response.data) || void 0 === t ? void 0 : t.error) || e,
                    r = e.response.config.hideToastr,
                    l = null === (n = e.response.data) || void 0 === n ? void 0 : n.error,
                    h = Array.isArray(r) ? r.includes(o.message) : r;
                var d;
                return 403 === e.response.status && console.warn("[33m", "Wrong request origin"), 401 === e.response.status && console.warn("Unauthorized"), !h && l && (d = o.message, Array.isArray(d) ? d.forEach((e => {
                    console.warn(e)
                })) : Object(c.u)(d) ? Object.values(d).forEach((e => {
                    Array.isArray(e) ? e.forEach((e => {
                        console.warn(e)
                    })) : console.warn(e)
                })) : console.warn(d)), Promise.reject(o)
            }));
            const m = {
                get: h.get,
                post: h.post,
                put: h.put,
                patch: h.patch,
                delete: h.delete,
                request: h
            };
            o.a.prototype.$http = m, t.a = m
        }).call(this, n(49))
    }, , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        (function(e) {
            var o = n(4),
                r = n(42),
                l = n.n(r),
                c = n(406),
                h = n(0);
            const d = Object(c.setupCache)({
                    maxAge: 18e5
                }),
                f = l.a.create({
                    adapter: d.adapter,
                    timeout: 1e5,
                    headers: {
                        common: {
                            Accept: "application/json;charset=utf-8",
                            "Content-Type": "text/plain",
                            "X-XSS-Protection": "1; mode=block",
                            "X-Content-Type-Options": "nosniff"
                        }
                    }
                }),
                m = () => {
                    const t = e.env.LOCALE_TOKEN || "www.hostinger.com";
                    return t ? `Bearer ${t}` : null
                },
                w = [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511];
            f.interceptors.request.use((e => (m() || console.warn("No token"), e.headers.common.Authorization = m(), e))), f.interceptors.request.use((e => (e.data && (e.data = Object(h.b)(e.data)), e.params && (e.params = Object(h.b)(e.params)), e))), f.interceptors.response.use((e => Object(h.B)({
                data: e.data.data
            })), (e => {
                var t, n;
                if ("Request canceled" === e.message) return Promise.reject(new Error(e.message));
                w.includes(e.response.status);
                const o = (null === (t = e.response.data) || void 0 === t ? void 0 : t.error) || e,
                    r = e.response.config.hideToastr,
                    l = null === (n = e.response.data) || void 0 === n ? void 0 : n.error,
                    c = Array.isArray(r) ? r.includes(o.message) : r;
                var d;
                return 403 === e.response.status && console.warn("[33m", "Wrong request origin"), 401 === e.response.status && console.warn("Unauthorized"), !c && l && (d = o.message, Array.isArray(d) ? d.forEach((e => {
                    console.warn(e)
                })) : Object(h.u)(d) ? Object.values(d).forEach((e => {
                    Array.isArray(e) ? e.forEach((e => {
                        console.warn(e)
                    })) : console.warn(e)
                })) : console.warn(d)), Promise.reject(o)
            }));
            const y = {
                get: f.get,
                post: f.post,
                put: f.put,
                patch: f.patch,
                delete: f.delete,
                request: f
            };
            o.a.prototype.$http = y, t.a = y
        }).call(this, n(49))
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }));
        const o = [{
            countryCode: "AR",
            country: "Argentina",
            enCountry: "Argentina",
            language: "Español",
            languageCode: "es_AR",
            enLanguage: "Spanish",
            direction: "ltr",
            hreflang: "es-ar",
            pageHref: "https://www.hostinger.com.ar",
            stagingHref: "https://hwebsites-frontend-stage-com-ar.hostinger.io",
            alt: "AR",
            src: "/h-assets/images/flag-icons/ar-2x.png"
        }, {
            countryCode: "BR",
            country: "Brasil",
            enCountry: "Brazil",
            language: "Português",
            languageCode: "pt_BR",
            enLanguage: "Portuguese",
            direction: "ltr",
            hreflang: "pt-br",
            pageHref: "https://www.hostinger.com.br",
            stagingHref: "https://hwebsites-frontend-stage-com-br.hostinger.io",
            alt: "BR",
            src: "/h-assets/images/flag-icons/br-2x.png"
        }, {
            countryCode: "CO",
            country: "Colombia",
            enCountry: "Colombia",
            language: "Español",
            languageCode: "es_CO",
            enLanguage: "Spanish",
            direction: "ltr",
            hreflang: "es-co",
            pageHref: "https://www.hostinger.co",
            stagingHref: "https://hwebsites-frontend-stage-co.hostinger.io",
            alt: "CO",
            src: "/h-assets/images/flag-icons/co-2x.png"
        }, {
            countryCode: "CZ",
            country: "Česko",
            enCountry: "Czech Republic",
            language: "Čeština",
            languageCode: "cs_CZ",
            enLanguage: "Czech",
            direction: "ltr",
            hreflang: "cs",
            pageHref: "https://www.hostinger.cz",
            stagingHref: "https://hwebsites-frontend-stage-cz.hostinger.io",
            alt: "CZ",
            src: "/h-assets/images/flag-icons/cz-2x.png"
        }, {
            countryCode: "DK",
            country: "Danmark",
            enCountry: "Denmark",
            language: "Dansk",
            languageCode: "da_DK",
            enLanguage: "Danish",
            direction: "ltr",
            hreflang: "da",
            pageHref: "https://www.hostinger.dk",
            stagingHref: "https://hwebsites-frontend-stage-dk.hostinger.io",
            alt: "DK",
            src: "/h-assets/images/flag-icons/dk-2x.png"
        }, {
            countryCode: "DE",
            country: "Deutschland",
            enCountry: "Germany",
            language: "Deutsch",
            languageCode: "de_DE",
            enLanguage: "German",
            direction: "ltr",
            hreflang: "de",
            pageHref: "https://www.hostinger.de",
            stagingHref: "https://hwebsites-frontend-stage-de.hostinger.io",
            alt: "DE",
            src: "/h-assets/images/flag-icons/de-2x.png"
        }, {
            countryCode: "EE",
            country: "Eesti",
            enCountry: "Estonia",
            language: "Eesti",
            languageCode: "et_EE",
            enLanguage: "Estonian",
            direction: "ltr",
            hreflang: "et",
            pageHref: "https://www.hostinger.ee",
            stagingHref: "https://hwebsites-frontend-stage-ee.hostinger.io",
            alt: "EE",
            src: "/h-assets/images/flag-icons/ee-2x.png"
        }, {
            countryCode: "GR",
            country: "Ελλάδα",
            enCountry: "Greece",
            language: "Ελληνικά",
            languageCode: "el_GR",
            enLanguage: "Greek",
            direction: "ltr",
            hreflang: "el",
            pageHref: "https://www.hostinger.gr",
            stagingHref: "https://hwebsites-frontend-stage-gr.hostinger.io",
            alt: "GR",
            src: "/h-assets/images/flag-icons/gr-2x.png"
        }, {
            countryCode: "ES",
            country: "España",
            enCountry: "Spain",
            language: "Español",
            languageCode: "es_ES",
            enLanguage: "Spanish",
            direction: "ltr",
            hreflang: "es",
            pageHref: "https://www.hostinger.es",
            stagingHref: "https://hwebsites-frontend-stage-es.hostinger.io",
            alt: "ES",
            src: "/h-assets/images/flag-icons/es-2x.png"
        }, {
            countryCode: "FR",
            country: "France",
            enCountry: "France",
            language: "Français",
            languageCode: "fr_FR",
            enLanguage: "French",
            direction: "ltr",
            hreflang: "fr",
            pageHref: "https://www.hostinger.fr",
            stagingHref: "https://hwebsites-frontend-stage-fr.hostinger.io",
            alt: "FR",
            src: "/h-assets/images/flag-icons/fr-2x.png"
        }, {
            countryCode: "HR",
            country: "Hrvatska",
            enCountry: "Croatia",
            language: "Hrvatski",
            languageCode: "hr_HR",
            enLanguage: "Croatian",
            direction: "ltr",
            hreflang: "hr",
            pageHref: "https://www.hostinger.hr",
            stagingHref: "https://hwebsites-frontend-stage-hr.hostinger.io",
            alt: "HR",
            src: "/h-assets/images/flag-icons/hr-2x.png"
        }, {
            countryCode: "IN",
            country: "India",
            enCountry: "India",
            language: "English",
            languageCode: "en_IN",
            enLanguage: "English",
            direction: "ltr",
            hreflang: "en-in",
            pageHref: "https://www.hostinger.in",
            stagingHref: "https://hwebsites-frontend-stage-in.hostinger.io",
            alt: "IN",
            src: "/h-assets/images/flag-icons/in-2x.png"
        }, {
            countryCode: "IN",
            country: "भारत",
            enCountry: "India",
            language: "हिंदी",
            languageCode: "hi_IN",
            enLanguage: "Hindi",
            direction: "ltr",
            hreflang: "hi-in",
            pageHref: "https://hi.hostinger.in",
            stagingHref: "https://hwebsites-frontend-stage-hi-in.hostinger.io",
            alt: "IN",
            src: "/h-assets/images/flag-icons/in-2x.png"
        }, {
            countryCode: "ID",
            country: "Indonesia",
            enCountry: "Indonesia",
            language: "Bahasa Indonesia",
            languageCode: "id_ID",
            enLanguage: "Indonesian",
            direction: "ltr",
            hreflang: "id",
            pageHref: "https://www.hostinger.co.id",
            stagingHref: "https://hwebsites-frontend-stage-co-id.hostinger.io",
            alt: "ID",
            src: "/h-assets/images/flag-icons/id-2x.png"
        }, {
            countryCode: "IT",
            country: "Italia",
            enCountry: "Italy",
            language: "Italiano",
            languageCode: "it_IT",
            enLanguage: "Italian",
            direction: "ltr",
            hreflang: "it",
            pageHref: "https://www.hostinger.it",
            stagingHref: "https://hwebsites-frontend-stage-it.hostinger.io",
            alt: "IT",
            src: "/h-assets/images/flag-icons/it-2x.png"
        }, {
            countryCode: "JP",
            country: "Japan",
            enCountry: "Japan",
            language: "English",
            languageCode: "en_JP",
            enLanguage: "English",
            direction: "ltr",
            hreflang: "en-jp",
            pageHref: "https://www.hostinger.jp",
            stagingHref: "https://hwebsites-frontend-stage-jp.hostinger.io",
            alt: "JP",
            src: "/h-assets/images/flag-icons/jp-2x.png"
        }, {
            countryCode: "LV",
            country: "Latvija",
            enCountry: "Latvia",
            language: "Latviešu",
            languageCode: "lv_LV",
            enLanguage: "Latvian",
            direction: "ltr",
            hreflang: "lv",
            pageHref: "https://www.hostinger.lv",
            stagingHref: "https://hwebsites-frontend-stage-lv.hostinger.io",
            alt: "LV",
            src: "/h-assets/images/flag-icons/lv-2x.png"
        }, {
            countryCode: "LT",
            country: "Lietuva",
            enCountry: "Lithuania",
            language: "Lietuvių",
            languageCode: "lt_LT",
            enLanguage: "Lithuanian",
            direction: "ltr",
            hreflang: "lt",
            pageHref: "https://www.hostinger.lt",
            stagingHref: "https://hwebsites-frontend-stage-lt.hostinger.io",
            alt: "LT",
            src: "/h-assets/images/flag-icons/lt-2x.png"
        }, {
            countryCode: "HU",
            country: "Magyarország",
            enCountry: "Hungary",
            language: "Magyar",
            languageCode: "hu_HU",
            enLanguage: "Hungarian",
            direction: "ltr",
            hreflang: "hu",
            pageHref: "https://www.hostinger.hu",
            stagingHref: "https://hwebsites-frontend-stage-hu.hostinger.io",
            alt: "HU",
            src: "/h-assets/images/flag-icons/hu-2x.png"
        }, {
            countryCode: "MY",
            country: "Malaysia",
            enCountry: "Malaysia",
            language: "English",
            languageCode: "en_MY",
            enLanguage: "English",
            direction: "ltr",
            hreflang: "ms",
            pageHref: "https://www.hostinger.my",
            stagingHref: "https://hwebsites-frontend-stage-my.hostinger.io",
            alt: "MY",
            src: "/h-assets/images/flag-icons/my-2x.png"
        }, {
            countryCode: "MX",
            country: "México",
            enCountry: "Mexico",
            language: "Español",
            languageCode: "es_MX",
            enLanguage: "Spanish",
            direction: "ltr",
            hreflang: "es-mx",
            pageHref: "https://www.hostinger.mx",
            stagingHref: "https://hwebsites-frontend-stage-mx.hostinger.io",
            alt: "MX",
            src: "/h-assets/images/flag-icons/mx-2x.png"
        }, {
            countryCode: "NL",
            country: "Nederland",
            enCountry: "Netherlands",
            language: "Nederlands",
            languageCode: "nl_NL",
            enLanguage: "Dutch",
            direction: "ltr",
            hreflang: "nl",
            pageHref: "https://www.hostinger.nl",
            stagingHref: "https://hwebsites-frontend-stage-nl.hostinger.io",
            alt: "NL",
            src: "/h-assets/images/flag-icons/nl-2x.png"
        }, {
            countryCode: "NO",
            country: "Norge",
            enCountry: "Norway",
            language: "Norsk",
            languageCode: "nb_NO",
            enLanguage: "Norwegian",
            direction: "ltr",
            hreflang: "no",
            pageHref: "https://www.hostinger.no",
            stagingHref: "https://hwebsites-frontend-stage-no.hostinger.io",
            alt: "NO",
            src: "/h-assets/images/flag-icons/no-2x.png"
        }, {
            countryCode: "PK",
            country: "Pakistan",
            enCountry: "Pakistan",
            language: "English",
            languageCode: "en_PK",
            enLanguage: "English",
            direction: "ltr",
            hreflang: "pk",
            pageHref: "https://www.hostinger.pk",
            stagingHref: "https://hwebsites-frontend-stage-pk.hostinger.io",
            alt: "PK",
            src: "/h-assets/images/flag-icons/pk-2x.png"
        }, {
            countryCode: "PH",
            country: "Philippines",
            enCountry: "Philippines",
            language: "English",
            languageCode: "en_PH",
            enLanguage: "English",
            direction: "ltr",
            hreflang: "en-ph",
            pageHref: "https://www.hostinger.ph",
            stagingHref: "https://hwebsites-frontend-stage-ph.hostinger.io",
            alt: "PH",
            src: "/h-assets/images/flag-icons/ph-2x.png"
        }, {
            countryCode: "PL",
            country: "Polska",
            enCountry: "Poland",
            language: "Polski",
            languageCode: "pl_PL",
            enLanguage: "Polish",
            direction: "ltr",
            hreflang: "pl",
            pageHref: "https://www.hostinger.pl",
            stagingHref: "https://hwebsites-frontend-stage-pl.hostinger.io",
            alt: "PL",
            src: "/h-assets/images/flag-icons/pl-2x.png"
        }, {
            countryCode: "PT",
            country: "Portugal",
            enCountry: "Portugal",
            language: "Português",
            languageCode: "pt_PT",
            enLanguage: "Portuguese",
            direction: "ltr",
            hreflang: "pt",
            pageHref: "https://www.hostinger.pt",
            stagingHref: "https://hwebsites-frontend-stage-pt.hostinger.io",
            alt: "PT",
            src: "/h-assets/images/flag-icons/pt-2x.png"
        }, {
            countryCode: "RO",
            country: "Română",
            enCountry: "Romania",
            language: "România",
            languageCode: "ro_RO",
            enLanguage: "Romanian",
            direction: "ltr",
            hreflang: "ro",
            pageHref: "https://www.hostinger.ro",
            stagingHref: "https://hwebsites-frontend-stage-ro.hostinger.io",
            alt: "RO",
            src: "/h-assets/images/flag-icons/ro-2x.png"
        }, {
            countryCode: "RU",
            country: "Россия",
            enCountry: "Russia",
            language: "Русский",
            languageCode: "ru_RU",
            enLanguage: "Russian",
            direction: "ltr",
            hreflang: "ru",
            pageHref: "https://www.hostinger.ru",
            stagingHref: "https://hwebsites-frontend-stage-ru.hostinger.io",
            alt: "RU",
            src: "/h-assets/images/flag-icons/ru-2x.png"
        }, {
            countryCode: "SK",
            country: "Slovensko",
            enCountry: "Slovakia",
            language: "Slovenčina",
            languageCode: "sk_SK",
            enLanguage: "Slovak",
            direction: "ltr",
            hreflang: "cs-sk",
            pageHref: "https://www.hostinger.sk",
            stagingHref: "https://hwebsites-frontend-stage-sk.hostinger.io",
            alt: "SK",
            src: "/h-assets/images/flag-icons/sk-2x.png"
        }, {
            countryCode: "FI",
            country: "Suomi",
            enCountry: "Finland",
            language: "Suomi",
            languageCode: "fi_FI",
            enLanguage: "Finish",
            direction: "ltr",
            hreflang: "fi",
            pageHref: "https://www.hostinger.fi",
            stagingHref: "https://hwebsites-frontend-stage-fi.hostinger.io",
            alt: "FI",
            src: "/h-assets/images/flag-icons/fi-2x.png"
        }, {
            countryCode: "SE",
            country: "Sverige",
            enCountry: "Sweden",
            language: "Svenska",
            languageCode: "sv_SE",
            enLanguage: "Swedish",
            direction: "ltr",
            hreflang: "sv",
            pageHref: "https://www.hostinger.se",
            stagingHref: "https://hwebsites-frontend-stage-se.hostinger.io",
            alt: "SE",
            src: "/h-assets/images/flag-icons/se-2x.png"
        }, {
            countryCode: "TR",
            country: "Türkiye",
            enCountry: "Turkey",
            language: "Türkçe",
            languageCode: "tr_TR",
            enLanguage: "Turkish",
            direction: "ltr",
            hreflang: "tr",
            pageHref: "https://www.hostinger.web.tr",
            stagingHref: "https://hwebsites-frontend-stage-web-tr.hostinger.io",
            alt: "TR",
            src: "/h-assets/images/flag-icons/tr-2x.png"
        }, {
            countryCode: "UA",
            country: "Україна",
            enCountry: "Ukraine",
            language: "Українська",
            languageCode: "uk_UA",
            enLanguage: "Ukrainian",
            direction: "ltr",
            hreflang: "uk-ua",
            pageHref: "https://www.hostinger.com.ua",
            stagingHref: "https://hwebsites-frontend-stage-com-ua.hostinger.io",
            alt: "UA",
            src: "/h-assets/images/flag-icons/ua-2x.png"
        }, {
            countryCode: "GB",
            country: "United Kingdom",
            enCountry: "United Kingdom",
            language: "English",
            languageCode: "en_GB",
            enLanguage: "English",
            direction: "ltr",
            hreflang: "en-gb",
            pageHref: "https://www.hostinger.co.uk",
            stagingHref: "https://hwebsites-frontend-stage-co-uk.hostinger.io",
            alt: "GB",
            src: "/h-assets/images/flag-icons/gb-2x.png"
        }, {
            countryCode: "US",
            country: "United States",
            enCountry: "United States",
            language: "English",
            languageCode: "en_US",
            enLanguage: "English",
            direction: "ltr",
            hreflang: "en-us",
            pageHref: "https://www.hostinger.com",
            stagingHref: "https://hwebsites-frontend-stage-com.hostinger.io",
            alt: "US",
            src: "/h-assets/images/flag-icons/us-2x.png"
        }, {
            countryCode: "VN",
            country: "Việt Nam",
            enCountry: "Vietnam",
            language: "Tiếng Việt",
            languageCode: "vi_VN",
            enLanguage: "Vietnamese",
            direction: "ltr",
            hreflang: "vi",
            pageHref: "https://www.hostinger.vn",
            stagingHref: "https://hwebsites-frontend-stage-vn.hostinger.io",
            alt: "VN",
            src: "/h-assets/images/flag-icons/vn-2x.png"
        }, {
            countryCode: "AE",
            country: "الدول العربية",
            enCountry: "Arabic League",
            language: "العربية",
            languageCode: "ar_AR",
            enLanguage: "Arabic",
            direction: "rtl",
            hreflang: "ar",
            pageHref: "https://www.hostinger.ae",
            stagingHref: "https://hwebsites-frontend-stage-ae.hostinger.io",
            alt: "AE",
            src: "/h-assets/images/flag-icons/ae-2x.png"
        }, {
            countryCode: "IL",
            country: "יִשְׂרָאֵל",
            enCountry: "Israel",
            language: "עברית",
            languageCode: "he_IL",
            enLanguage: "Hebrew",
            direction: "rtl",
            hreflang: "he",
            pageHref: "https://www.hostinger.co.il",
            stagingHref: "https://hwebsites-frontend-stage-co-il.hostinger.io",
            alt: "IL",
            src: "/h-assets/images/flag-icons/il-2x.png"
        }, {
            countryCode: "TH",
            country: "ประเทศไทย",
            enCountry: "Thailand",
            language: "ไทย",
            languageCode: "th_TH",
            enLanguage: "Thai",
            direction: "ltr",
            hreflang: "th",
            pageHref: "https://www.hostinger.in.th",
            stagingHref: "https://hwebsites-frontend-stage-in-th.hostinger.io",
            alt: "TH",
            src: "/h-assets/images/flag-icons/th-2x.png"
        }, {
            countryCode: "KR",
            country: "대한민국",
            enCountry: "South Korea",
            language: "한국어",
            languageCode: "ko_KR",
            enLanguage: "Korean",
            direction: "ltr",
            hreflang: "ko",
            pageHref: "https://www.hostinger.kr",
            stagingHref: "https://hwebsites-frontend-stage-kr.hostinger.io",
            alt: "KR",
            src: "/h-assets/images/flag-icons/kr-2x.png"
        }, {
            countryCode: "CN",
            country: "中国",
            enCountry: "China",
            language: "中文",
            languageCode: "zh_CN",
            enLanguage: "Chinese",
            direction: "ltr",
            hreflang: "zh",
            pageHref: "https://www.hostinger.com.hk",
            stagingHref: "https://hwebsites-frontend-stage-com-hk.hostinger.io",
            alt: "CN",
            src: "/h-assets/images/flag-icons/cn-2x.png"
        }]
    }, function(e, t, n) {
        "use strict";
        n.d(t, "j", (function() {
            return l
        })), n.d(t, "c", (function() {
            return h
        })), n.d(t, "h", (function() {
            return d
        })), n.d(t, "k", (function() {
            return f
        })), n.d(t, "n", (function() {
            return m
        })), n.d(t, "g", (function() {
            return w
        })), n.d(t, "b", (function() {
            return x
        })), n.d(t, "i", (function() {
            return _
        })), n.d(t, "d", (function() {
            return S
        })), n.d(t, "a", (function() {
            return C
        })), n.d(t, "f", (function() {
            return P
        })), n.d(t, "l", (function() {
            return O
        })), n.d(t, "e", (function() {
            return I
        })), n.d(t, "m", (function() {
            return H
        }));
        var o = n(27),
            r = n(0),
            l = {
                url: "https://websites-api.hostinger.com/api",
                async getPricingTableData(e) {
                    return await Object(r.t)(o.a.get(`${this.url}/pricing-table/${e}`))
                }
            },
            c = n(10),
            h = {
                url: "https://websites-api.hostinger.com/api",
                async addItemToCart(e) {
                    return await Object(r.t)(c.a.post(`${this.url}/cart`, e))
                }
            },
            d = {
                url: "https://websites-api.hostinger.com/api",
                async getGdprData() {
                    return await Object(r.t)(o.a.get(`${this.url}/is-gdpr`))
                }
            },
            f = (n(8), {
                url: "https://websites-api.hostinger.com/api/sales",
                async getSaleTimer() {
                    return await Object(r.t)(o.a.get(`${this.url}/timer`))
                },
                async getCurrentRotatingSale() {
                    const e = await Object(r.t)(o.a.get(`${this.url}/current`)),
                        [{
                            sale: t
                        }] = e;
                    return t
                },
                async getCurrentSaleTemplate() {
                    return await Object(r.t)(o.a.get(`${this.url}/current-template`))
                }
            }),
            m = {
                url: "https://websites-api.hostinger.com/api/tutorials-snippet",
                async getTutorialsData(e) {
                    return await Object(r.t)(c.a.get(`${this.url}/${e}`))
                }
            },
            w = {
                url: "https://websites-api.hostinger.com/api/faq",
                async getFaqsData(e) {
                    return await Object(r.t)(c.a.get(`${this.url}/${e}`))
                }
            },
            y = n(42);
        const v = n.n(y).a.create({
            timeout: 1e5,
            headers: {
                common: {
                    "X-Content-Type-Options": "nosniff",
                    "X-Requested-With": "XMLHttpRequest"
                }
            }
        });
        var k = {
                get: v.get,
                post: v.post,
                put: v.put,
                patch: v.patch,
                delete: v.delete,
                request: v
            },
            x = {
                url: "https://websites-api.hostinger.com/api/auth",
                async login(e, t) {
                    return await Object(r.t)(c.a.post(`${this.url}/login`, e, t))
                },
                async resetPassword(e) {
                    return await Object(r.t)(c.a.post(`${this.url}/change-password`, e))
                },
                async validateResetPasswordHash(e) {
                    return await Object(r.t)(c.a.post(`${this.url}/validate-reset-password-hash`, {
                        hash: e
                    }))
                },
                async getOAuthList() {
                    return await Object(r.t)(c.a.get(`${this.url}/oauth-list`))
                },
                checkAuth: async e => await Object(r.t)(k.get(`${e}/auth/check-auth`, {
                    withCredentials: !0
                })),
                async validateDelegateAccess(e) {
                    return await Object(r.t)(c.a.post(`${this.url}/validate-delegate-access`, {
                        delegateAccessHash: e
                    }))
                },
                async signup(e, t) {
                    return await Object(r.t)(c.a.post(`${this.url}/signup`, e, t))
                },
                async sendForgotPasswordData(e) {
                    return await Object(r.t)(c.a.post(`${this.url}/forgot-password`, {
                        email: e
                    }))
                }
            },
            _ = {
                getPaymentMethodsData: async () => await Object(r.t)(o.a.get("https://websites-api.hostinger.com/api/payment-methods")),
                getFooterPaymentMethodsData: async () => await Object(r.t)(o.a.get("https://websites-api.hostinger.com/api/footer-payments"))
            },
            S = {
                url: "https://websites-api.hostinger.com/api",
                async getCompareTableData(e) {
                    return await Object(r.t)(c.a.get(`${this.url}/compare-table/${e}`))
                }
            },
            C = {
                url: "https://websites-api.hostinger.com/api/send-event",
                async sendAmplitudeEvent(e) {
                    return await Object(r.t)(c.a.post(this.url, e))
                }
            },
            P = {
                url: "https://websites-api.hostinger.com/api/domain",
                async getInputCards() {
                    return await Object(r.t)(c.a.get(`${this.url}/input-cards`))
                },
                async getPopularExtensions() {
                    return await Object(r.t)(c.a.get(`${this.url}/popular-extension-cards`))
                },
                async getSingleDomain(data, e) {
                    return await Object(r.t)(c.a.post(`${this.url}/single-domain-search`, data, e))
                },
                async getSearchMoreOptions(data, e) {
                    return await Object(r.t)(c.a.post(`${this.url}/search-more-options`, data, e))
                },
                async getSuggestDomains(data, e) {
                    const [t, n] = await Object(r.t)(c.a.post(`${this.url}/suggest`, data, e));
                    return {
                        searchedDomain: data.rawSearch,
                        data: t,
                        error: n
                    }
                },
                async checkDomainAvailability(data) {
                    return await Object(r.t)(c.a.post(`${this.url}/availability-check`, data))
                }
            },
            O = {
                url: "https://websites-api.hostinger.com/api/available-tlds-by-theme",
                async getAvailableTlds() {
                    return await Object(r.t)(c.a.get(`${this.url}`))
                }
            },
            I = {
                url: "https://websites-api.hostinger.com/api/config",
                async getDomainCaptchaState() {
                    return await Object(r.t)(c.a.get(`${this.url}/domain-captcha-enabled`))
                }
            },
            H = {
                url: "https://websites-api.hostinger.com/api/trustpilot-widget",
                async getTrustPilotWidget(e) {
                    return await Object(r.t)(c.a.get(`${this.url}/${e}`))
                }
            }
    }, function(e, t, n) {
        "use strict";
        t.a = {
            hostingerMailLocales: ["es_AR"],
            englishLocales: ["en_US", "en_PK", "en_IN", "en_GB", "en_PH", "en_MY", "en_JP"],
            euLocales: ["lt_LT", "cs_CZ", "de_DE", "da_DK", "et_EE", "es_ES", "fi_FI", "fr_FR", "el_GR", "hr_HR", "hu_HU", "it_IT", "lv_LV", "nl_NL", "nb_NO", "pl_PL", "pt_PT", "ro_RO", "sv_SE", "sk_SK"],
            ecommerceHostingLocales: ["en_US", "en_PK", "pt_BR", "es_AR", "es_CO", "en_IN", "de_DE", "en_GB", "es_ES", "fr_FR", "es_MX", "it_IT"],
            spanishLocales: ["es_AR", "es_ES", "es_CO", "es_MX"],
            kvmLocales: ["lt_LT", "es_ES", "fr_FR", "en_GB", "uk_UA", "tr_TR", "de_DE", "it_IT", "nl_NL", "pl_PL", "ro_RO", "pt_PT", "el_GR", "cs_CZ", "hu_HU", "sv_SE", "da_DK", "fi_FI", "sk_SK", "nb_NO", "hr_HR", "lv_LV", "et_EE", "hi_IN", "id_ID", "vi_VN", "ar_AR", "he_IL", "en_PH", "en_MY", "ko_KR", "th_TH", "en_JP", "en_IN", "zh_CN"]
        }
    }, , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(1),
            r = (n(8), n(16), n(29), n(7)),
            l = n(0),
            c = n(9);

        function h(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }
        var d = r.a.extend({
                name: "HIcon",
                props: {
                    icon: {
                        type: String,
                        required: !0,
                        validator: e => ["ui-icons", "product-icons", "social-icons", "review-icons", "product-feature-icons", "affiliates", "niagahoster-icons"].includes(e.split("/")[0])
                    },
                    viewBox: {
                        type: String,
                        default: ""
                    },
                    color: {
                        type: String,
                        default: "primary",
                        validator: Object(l.y)([...c.a, ...c.c, ...c.b])
                    },
                    size: {
                        type: Object,
                        default: () => ({
                            height: 24,
                            width: 24
                        })
                    }
                },
                methods: {
                    kebabToCamel: l.v,
                    toTitleCase: l.D
                },
                computed: {
                    currentIcon() {
                        const [section, e] = this.icon.split("/");
                        return () => n(830)(`./${section}/${this.kebabToCamel(this.toTitleCase(e))}.vue`)
                    },
                    iconSize() {
                        const {
                            height: e,
                            width: t
                        } = this.size;
                        return {
                            height: e,
                            width: t
                        }
                    },
                    iconSizeStyle() {
                        return `width: ${this.iconSize.width}px; height: ${this.iconSize.height}px;`
                    },
                    classes() {
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
                        }({}, Object(l.f)("h-icon", this.color, [...c.c, ...c.a, ...c.b]))
                    },
                    ariaLabel() {
                        const e = this.icon.split("/")[1];
                        return null == e ? void 0 : e.replace("ic-", "")
                    }
                }
            }),
            f = d,
            m = (n(831), n(5)),
            component = Object(m.a)(f, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("svg", {
                    class: e.classes,
                    style: e.iconSizeStyle,
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: e.viewBox || `0 0 ${e.size.width} ${e.size.height}`,
                        "aria-label": e.ariaLabel,
                        role: "presentation"
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("click")
                        }
                    }
                }, [t("g", [t(e.currentIcon, {
                    tag: "Component"
                })], 1)])
            }), [], !1, null, "165629f9", null);
        t.default = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        var o = n(338),
            r = n(339),
            l = n(340),
            c = n(341),
            h = n(342),
            d = n(343),
            f = n(344),
            m = n(345),
            w = n(346),
            y = n(347),
            v = n(348),
            k = n(349),
            x = n(350),
            _ = n(351),
            S = n(352),
            C = n(353),
            P = n(354),
            O = n(355),
            I = n(356),
            H = n(357),
            j = n(358),
            D = n(359);
        t.a = {
            homepage: o.a,
            "web-hosting": r.a,
            "wordpress-hosting": c.a,
            "email-hosting": h.a,
            "buy-hosting": d.a,
            "google-workspace": m.a,
            "vps-hosting": w.a,
            "cloud-hosting": f.a,
            "free-ssl-certificate": v.a,
            "minecraft-server-hosting": k.a,
            "brand-guidelines-partners": [{
                rel: "alternate",
                hreflang: "x-default",
                href: "https://www.hostinger.com/brand-guidelines/partners"
            }, {
                rel: "alternate",
                hreflang: "pk",
                href: "https://www.hostinger.pk/brand-guidelines/partners"
            }, {
                rel: "alternate",
                hreflang: "en-us",
                href: "https://www.hostinger.com/brand-guidelines/partners"
            }, {
                rel: "alternate",
                hreflang: "pt-br",
                href: "https://www.hostinger.com.br/brand-guidelines/partners"
            }, {
                rel: "alternate",
                hreflang: "en-in",
                href: "https://www.hostinger.in/brand-guidelines/partners"
            }, {
                rel: "alternate",
                hreflang: "es-ar",
                href: "https://www.hostinger.com.ar/brand-guidelines/partners"
            }, {
                rel: "alternate",
                hreflang: "es",
                href: "https://www.hostinger.es/brand-guidelines/partners"
            }, {
                rel: "alternate",
                hreflang: "es-co",
                href: "https://www.hostinger.co/brand-guidelines/partners"
            }, {
                rel: "alternate",
                hreflang: "es-mx",
                href: "https://www.hostinger.mx/brand-guidelines/partners"
            }],
            partners: H.a,
            "cyberpanel-vps-hosting": x.a,
            payments: y.a,
            "domain-name-search": l.a,
            "cheap-web-hosting": _.a,
            "hostinger-pro": S.a,
            "website-builder": C.a,
            "website-templates": j.a,
            technology: P.a,
            "ecommerce-hosting": O.a,
            "online-store": I.a,
            "logo-maker": D.a
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        (function(e) {
            n(8);
            var o = n(285),
                r = n.n(o),
                l = n(161),
                c = n(59);
            t.a = l.a.extend({
                name: "DefaultLayout",
                head() {
                    const t = {
                        title: this.title,
                        meta: [{
                            hid: "description",
                            name: "description",
                            content: this.$t("head.base.description")
                        }, {
                            hid: "author",
                            name: "author",
                            content: this.$t(this.isNiaga ? "head.niagahoster.site" : "head.base.author")
                        }, {
                            hid: "dcterms.type",
                            name: "dcterms.type",
                            content: this.$t("head.base.dctermsType")
                        }, {
                            hid: "og:title",
                            property: "og:title",
                            content: this.title
                        }, {
                            hid: "og:description",
                            property: "og:description",
                            content: this.$t("head.base.description")
                        }, {
                            hid: "og:url",
                            property: "og:url",
                            content: this.siteUrl + this.$route.path
                        }, {
                            hid: "og:image",
                            property: "og:image",
                            content: this.isNiaga ? `${this.siteUrl}/og-image-niagahoster.png` : `${this.siteUrl}/og-image.png`
                        }, {
                            hid: "twitter:title",
                            property: "twitter:title",
                            content: this.title
                        }, {
                            hid: "twitter:description",
                            property: "twitter:description",
                            content: this.$t("head.base.description")
                        }],
                        link: [{
                            rel: "canonical",
                            href: this.siteUrl + this.$route.path
                        }, {
                            rel: "preconnect",
                            href: e.env.HWEBSITES_API
                        }, {
                            rel: "preconnect",
                            href: "https://www.googletagmanager.com"
                        }, {
                            rel: "preconnect",
                            href: "https://www.googleoptimize.com"
                        }]
                    };
                    if ("PK" === this.themeData.country.code) {
                        const e = {
                            name: "robots",
                            property: "robots",
                            content: "noindex, nofollow"
                        };
                        t.meta.push(e)
                    }
                    if (this.isNiaga) {
                        const e = [{
                            name: "robots",
                            property: "robots",
                            content: this.$t("head.niagahoster.robots")
                        }, {
                            hid: "fb:app_id",
                            property: "fb:app_id",
                            content: this.$t("head.niagahoster.fbApp")
                        }, {
                            hid: "apple-mobile-web-app-title",
                            name: "apple-mobile-web-app-title",
                            content: this.$t("head.niagahoster.appleMobile")
                        }, {
                            hid: "theme-color",
                            name: "theme-color",
                            content: this.$t("head.niagahoster.themeColor")
                        }, {
                            hid: "og:site_name",
                            property: "og:site_name",
                            content: this.$t("head.niagahoster.site")
                        }, {
                            hid: "twitter:creator",
                            property: "twitter:creator",
                            content: this.$t("head.niagahoster.author")
                        }, {
                            hid: "twitter:site",
                            property: "twitter:site",
                            content: this.$t("head.niagahoster.author")
                        }, {
                            hid: "twitter:image",
                            property: "twitter:image",
                            content: `${this.siteUrl}/og-image-niagahoster.png`
                        }];
                        t.meta.push(...e)
                    }
                    return t
                },
                provide() {
                    return {
                        getCurrentSale: () => this.currentSale,
                        getCurrentSaleTemplate: () => this.currentSaleTemplate,
                        reverseHelpIcon: () => "AE" === this.themeData.country.code
                    }
                },
                data: () => ({
                    navStickyPosition: 0,
                    currentSale: {},
                    currentSaleTemplate: ""
                }),
                async fetch() {
                    const [data] = await c.k.getCurrentSaleTemplate();
                    this.currentSaleTemplate = data.template || ""
                },
                async created() {
                    this.currentSale = await c.k.getCurrentRotatingSale()
                },
                mounted() {
                    (() => {
                        this.$route.query.coupon_cookie && (this.$cookies.set("coupon_cookie", this.$route.query.coupon_cookie, {
                            maxAge: 2592e3
                        }), this.$gtm.push({
                            event: "coupon_cookie"
                        }))
                    })(), r()(this.pageName, this.themeData.language.code)
                },
                computed: {
                    title() {
                        return ["GB"].includes(this.themeData.country.code) ? this.$t("head.base.titleWithPrice", {
                            price: 1.99,
                            currency: this.themeData.currency.symbol
                        }) : this.$t("head.base.title")
                    },
                    solidBackgroundColorClass() {
                        return [{
                            "layout--full-black": ["hostinger-pro", "partners"].includes(this.pageName)
                        }, {
                            "layout--full-meteorite-dark": ["logo-maker", "ai-website-builder"].includes(this.pageName)
                        }]
                    }
                }
            })
        }).call(this, n(49))
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            var o = n(161);
            t.a = o.a.extend({
                name: "LoginLayout",
                head() {
                    return {
                        title: this.$t("head.base.title"),
                        meta: [{
                            hid: "description",
                            name: "description",
                            content: this.$t("head.base.description")
                        }, {
                            hid: "author",
                            name: "author",
                            content: this.$t("head.base.author")
                        }, {
                            hid: "dcterms.type",
                            name: "dcterms.type",
                            content: this.$t("head.base.dctermsType")
                        }, {
                            hid: "og:title",
                            property: "og:title",
                            content: this.$t("head.base.title")
                        }, {
                            hid: "og:description",
                            property: "og:description",
                            content: this.$t("head.base.description")
                        }, {
                            hid: "og:url",
                            property: "og:url",
                            content: this.siteUrl + this.$route.path
                        }, {
                            hid: "og:image",
                            property: "og:image",
                            content: `${this.siteUrl}/og-image.png`
                        }, {
                            hid: "twitter:title",
                            property: "twitter:title",
                            content: this.$t("head.base.title")
                        }, {
                            hid: "twitter:description",
                            property: "twitter:description",
                            content: this.$t("head.base.description")
                        }],
                        link: [{
                            rel: "canonical",
                            href: this.siteUrl + this.$route.path
                        }, {
                            rel: "preconnect",
                            href: e.env.HWEBSITES_API
                        }, {
                            rel: "preconnect",
                            href: "https://www.googletagmanager.com"
                        }]
                    }
                }
            })
        }).call(this, n(49))
    }, function(e, t, n) {
        "use strict";
        n(16), n(29);
        var o = n(7),
            r = n(0);
        t.a = o.a.extend({
            watch: {
                async $route(e) {
                    if ("#layout" === e.hash) {
                        Object(r.z)("layout"), await this.$nextTick();
                        try {
                            await this.$router.replace(e.path.split("#layout"))
                        } catch (e) {}
                    }
                }
            }
        })
    }, , , , function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(7).a.extend({
                name: "HImage",
                props: {
                    image: {
                        type: Object,
                        required: !0,
                        validator: e => {
                            const t = Object.keys(e);
                            return t.includes("src") && t.includes("alt")
                        }
                    },
                    noLazyLoad: Boolean
                }
            }),
            r = n(5),
            component = Object(r.a)(o, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "h-image"
                }, [e.image.src.startsWith("/h-assets/") && !e.image.src.endsWith(".svg") ? t("NuxtImg", {
                    attrs: {
                        src: e.image.src,
                        alt: e.image.alt,
                        format: "webp",
                        loading: e.noLazyLoad ? "eager" : "lazy"
                    }
                }) : t("img", {
                    attrs: {
                        src: e.image.src,
                        alt: e.image.alt,
                        loading: e.noLazyLoad ? "eager" : "lazy"
                    }
                })], 1)
            }), [], !1, null, null, null);
        t.default = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(1),
            r = (n(8), n(7)),
            l = n(9),
            c = n(0);

        function h(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function d(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? h(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var f = r.a.extend({
                name: "NiagaLogo",
                props: {
                    color: {
                        type: String,
                        default: "dark",
                        validator: Object(c.y)([...l.c, ...l.a])
                    },
                    link: {
                        type: [String, Object],
                        default: "/"
                    },
                    size: {
                        type: Object,
                        default: () => ({
                            height: 30,
                            width: 192
                        })
                    }
                },
                computed: {
                    classes() {
                        return d({}, Object(c.f)("niaga-logo", this.color, l.c))
                    },
                    linkAttributes() {
                        return d({}, Object(c.u)(this.link) ? {
                            to: this.nuxtTo(this.link.to),
                            target: this.link.target
                        } : {
                            to: this.nuxtTo(this.link)
                        })
                    }
                }
            }),
            m = (n(844), n(5)),
            component = Object(m.a)(f, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("NuxtLink", e._b({
                    staticClass: "niaga-logo",
                    class: e.classes,
                    attrs: {
                        "aria-label": "homepage link"
                    }
                }, "NuxtLink", e.linkAttributes, !1), [t("HIcon", {
                    attrs: {
                        icon: "ui-icons/ic-niaga-hoster-logo",
                        color: e.color,
                        size: e.size
                    }
                })], 1)
            }), [], !1, null, "685fa348", null);
        t.default = component.exports;
        installComponents(component, {
            HIcon: n(80).default
        })
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(1),
            r = (n(8), n(7)),
            l = n(9),
            c = n(0);

        function h(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function d(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? h(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var f = r.a.extend({
                name: "HLogo",
                props: {
                    color: {
                        type: String,
                        default: "dark",
                        validator: Object(c.y)([...l.c, ...l.a])
                    },
                    link: {
                        type: [String, Object],
                        default: "/"
                    },
                    size: {
                        type: Object,
                        default: () => ({
                            height: 30,
                            width: 147
                        })
                    }
                },
                computed: {
                    classes() {
                        return d(d({}, Object(c.f)("h-logo", this.color, l.c)), {}, {
                            rtl: "rtl" === this.direction
                        })
                    },
                    linkAttributes() {
                        return d({}, Object(c.u)(this.link) ? {
                            to: this.nuxtTo(this.link.to),
                            target: this.link.target
                        } : {
                            to: this.nuxtTo(this.link)
                        })
                    }
                }
            }),
            m = (n(846), n(5)),
            component = Object(m.a)(f, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("NuxtLink", e._b({
                    staticClass: "h-logo",
                    class: e.classes,
                    attrs: {
                        "aria-label": "homepage link"
                    }
                }, "NuxtLink", e.linkAttributes, !1), [t("HIcon", {
                    attrs: {
                        icon: "ui-icons/ic-hostinger-logo",
                        color: e.color,
                        size: e.size
                    }
                })], 1)
            }), [], !1, null, "143655f6", null);
        t.default = component.exports;
        installComponents(component, {
            HIcon: n(80).default
        })
    }, , , , function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return k
            })), n.d(t, "b", (function() {
                return x
            }));
            var o = n(1),
                r = (n(8), n(335), n(10), n(27)),
                l = n(0),
                c = (n(407), n(817), n(60));

            function h(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function d(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? h(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            const f = [{
                    page: "homepage",
                    trustPilot: "mini_widget"
                }, {
                    page: "web-hosting",
                    planCards: !0,
                    trustPilot: "all"
                }, {
                    page: "wordpress-hosting",
                    planCards: !0,
                    trustPilot: "all"
                }, {
                    page: "cheap-web-hosting",
                    planCards: !0
                }, {
                    page: "cyberpanel-vps-hosting",
                    planCards: !0
                }, {
                    page: "payments",
                    planCards: !0
                }, {
                    page: "email-hosting",
                    planCards: !0
                }, {
                    page: "not-found",
                    planCards: !0
                }, {
                    page: "ecommerce-hosting",
                    trustPilot: "carousel_widget"
                }, {
                    page: "domain-name-search",
                    planCards: !0
                }, {
                    page: "hostinger-pro",
                    trustPilot: "mini_widget"
                }, {
                    page: "website-builder",
                    trustPilot: "mini_widget"
                }, {
                    page: "online-store",
                    trustPilot: "mini_widget"
                }, {
                    page: "cloud-hosting",
                    trustPilot: "mini_widget"
                }, {
                    page: "logo-maker",
                    trustPilot: "mini_widget"
                }, {
                    page: "ai-website-builder",
                    formattedPageName: "ai-website-builder",
                    trustPilot: "mini_widget"
                }, {
                    page: "partners",
                    trustPilot: "mini_widget"
                }],
                m = f.filter((e => e.trustPilot)).map((e => e.formattedPageName || e.page)),
                w = ["shared", "cloud", "vps", "kvm", "wordpress", "domain", "hostinger_email_hosting"],
                y = ["mini_widget", "carousel_widget"],
                v = async t => {
                    const n = {},
                        o = [...w];
                    c.a.hostingerMailLocales.includes(t) && o.push("hostinger_mail");
                    for (const t of o) {
                        const {
                            data: data
                        } = ["hostinger_email_hosting"].includes(t) ? await r.a.get(`${e.env.HWEBSITES_API}/api/best-product-offer/pricing-table/${t}`) : await r.a.get(`${e.env.HWEBSITES_API}/api/best-product-offer/subcategory/${t}`);
                        n[Object(l.A)(t)] = data
                    }
                    return n
                },
                k = async (e, t, n) => {
                    var o;
                    if (!(null === (o = f.filter((e => e.planCards))) || void 0 === o ? void 0 : o.map((e => e.page))).includes(Object(l.o)(t))) return null;
                    if (e) return e;
                    let r = {};
                    return r = await v(n), d({}, r)
                },
                x = async (t, n) => {
                    var o;
                    if (!m.includes(Object(l.o)(n))) return null;
                    if (t) return t;
                    const c = null === (o = f.find((e => e.page === Object(l.o)(n) || e.formattedPageName === Object(l.o)(n)))) || void 0 === o ? void 0 : o.trustPilot;
                    if ("all" === c) {
                        const t = {};
                        for (const n of y) {
                            const {
                                data: data
                            } = await r.a.get(`${e.env.HWEBSITES_API}/api/trustpilot-widget/${n}`);
                            t[Object(l.A)(n)] = data
                        }
                        return d({}, t)
                    }
                    const {
                        data: data
                    } = await r.a.get(`${e.env.HWEBSITES_API}/api/trustpilot-widget/${c}`);
                    return d({}, data)
                }
        }).call(this, n(49))
    }, function(e) {
        e.exports = JSON.parse('{"whyUs":{"title":"Why Us - Web Hosting At Hostinger","description":"At Hostinger you get fast & reliable web hosting. Customer Support is at your service 24/7. 99,9% uptime guaranteed. We\'re trusted by 29 million people. Join us!"}}')
    }, , , , function(e, t, n) {
        "use strict";
        console.log = () => {}, console.warn = () => {}, console.info = () => {}
    }, function(e, t, n) {
        "use strict";
        var o = n(4),
            r = n(513),
            l = n.n(r);
        o.a.use(l.a)
    }, function(e, t, n) {
        "use strict";
        n(16), n(29);
        t.a = e => {
            const t = e => {
                    const t = e || null === e ? e : 2592e3;
                    return {
                        domain: window.location.host.includes("localhost") ? "localhost" : `.${window.location.host.replace(/^[^.]+\./g,"").split("/")[0].split(":")[0]}`,
                        path: "/",
                        maxAge: t,
                        secure: !window.location.host.includes("localhost")
                    }
                },
                n = t => {
                    t.forEach((t => {
                        e.app.$cookies.remove(t)
                    }))
                },
                o = e => {
                    switch (e) {
                        case "REFERRALCODE":
                            return "rr_referralcode";
                        case "RR_WCID":
                            return "rr_wcid";
                        case "session":
                            return "hasoffers_session";
                        default:
                            return e
                    }
                };
            window.onNuxtReady((() => {
                (() => {
                    const r = Object.keys(e.query),
                        l = Object.values(e.query),
                        c = 60 * ((null == e ? void 0 : e.query.RR_WCID_TTL) || 0) * 60 * 24;
                    r.forEach(((r, h) => {
                        if (e.app.$cookies.get(o(r)) !== l[h]) switch (r) {
                            case "utm_source":
                                e.app.$cookies.set("utm_source", l[h], t());
                                break;
                            case "utm_campaign":
                                e.app.$cookies.set("utm_campaign", l[h], t());
                                break;
                            case "utm_medium":
                                e.app.$cookies.set("utm_medium", l[h], t());
                                break;
                            case "000user_id":
                                e.app.$cookies.set("000user_id", l[h], t(86400));
                                break;
                            case "cs-campaign":
                                e.app.$cookies.set("cs-campaign", l[h], t(null));
                                break;
                            case "session":
                                e.app.$cookies.set("hasoffers_session", l[h], t(5184e3)), n(["irclickid", "rr_referralcode", "rr_wcid", "awc"]);
                                break;
                            case "irclickid":
                                e.app.$cookies.set("irclickid", l[h], t()), n(["hasoffers_session", "rr_referralcode", "rr_wcid", "awc"]);
                                break;
                            case "awc":
                                e.app.$cookies.set("awc", l[h], t(31536e3)), n(["hasoffers_session", "rr_referralcode", "rr_wcid", "irclickid"]);
                                break;
                            case "RR_WCID":
                                e.app.$cookies.set("rr_wcid", l[h], t(c || 5184e3)), n(["hasoffers_session", "irclickid", "awc"]);
                                break;
                            case "REFERRALCODE":
                                e.app.$cookies.set("rr_referralcode", l[h], t(c || 5184e3)), n(["hasoffers_session", "irclickid", "awc"])
                        }
                    }))
                })()
            }))
        }
    }, function(e, t, n) {
        "use strict";
        var o = n(4),
            r = n(168);
        window.onNuxtReady((() => (() => {
            const e = r.b;
            e.options.defaultTrigger = "hover focus click", e.options.defaultClass = "t-body-3", o.a.directive("tooltip", r.b)
        })()))
    }, , function(e, t, n) {
        "use strict";
        var o = n(1),
            r = (n(8), n(105));

        function l(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }
        t.a = ({
            app: e
        }) => {
            var t;
            window.onNuxtReady((() => {
                var e;
                const t = (null === (e = {
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
                }) || void 0 === e ? void 0 : e.name) || window.location.hostname;
                Object(r.init)(), Object(r.setHostname)(t)
            })), null === (t = e.router) || void 0 === t || t.afterEach((e => {
                {
                    const t = function(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? l(Object(source), !0).forEach((function(t) {
                                Object(o.a)(e, t, source[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                            }))
                        }
                        return e
                    }({}, [...e.matched].pop()).instances;
                    if (t) {
                        const n = setInterval((() => {
                            var o;
                            if (t.default) {
                                clearInterval(n);
                                const title = (null === (o = t.default.$metaInfo) || void 0 === o ? void 0 : o.title) || document.title;
                                Object(r.event)(new r.PageView(title, e.fullPath))
                            }
                        }), 500)
                    }
                }
            }))
        }
    }, function(e, t, n) {
        "use strict";
        var o = n(519),
            r = n.n(o);
        t.a = (e, t) => {
            t("lottie", r.a)
        }
    }, function(e, t, n) {
        "use strict";
        var o = n(1),
            r = n(408),
            l = n(409),
            c = n(410),
            h = n(411),
            d = n(412),
            f = n(413),
            m = n(414),
            w = n(415),
            y = n(416),
            v = n(417),
            k = n(418),
            x = n(419),
            _ = n(420),
            S = n(421),
            C = n(422),
            P = n(423),
            O = n(424),
            I = n(425),
            H = n(426),
            j = n(224),
            D = n(427),
            L = n(428),
            A = n(429),
            T = n(430),
            W = n(431),
            N = n(432),
            M = n(433),
            E = n(434),
            B = n(435),
            F = n(436),
            $ = n(437),
            z = n(438);

        function R(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function U(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? R(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : R(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var head = U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U({}, r), l), c), h), d), f), m), w), y), v), k), x), _), C), S), P), O), I), j), D), H), L), T), W), j), N), B), A), E), M), F), $), z);

        function G(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }
        var Y = function(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? G(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : G(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }({}, n(439)),
            V = n(440),
            footer = n(441),
            J = n(442),
            K = n(443),
            Q = n(444),
            X = n(445),
            Z = n(446),
            ee = n(447),
            te = n(448),
            ae = n(449),
            ne = n(450),
            oe = n(451),
            ie = n(452),
            re = n(453),
            se = n(454),
            le = n(455),
            ce = n(456),
            he = n(457),
            de = n(458),
            ue = n(459);

        function ge(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function pe(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ge(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : ge(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var fe = pe(pe(pe(pe(pe(pe(pe(pe(pe(pe(pe(pe(pe(pe(pe(pe(pe(pe(pe(pe({}, ne), V), footer), X), Z), J), K), ce), Q), ee), te), ae), oe), ie), re), se), le), he), de), ue),
            me = n(460),
            we = n(461);

        function be(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function ye(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? be(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : be(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var ve = ye(ye({}, me), we),
            ke = n(462),
            xe = n(463),
            _e = n(464),
            Se = n(465),
            Ce = n(466),
            Pe = n(467),
            Oe = n(468),
            Ie = n(469),
            He = n(470),
            je = n(471),
            De = n(472),
            Le = n(473),
            Ae = n(474),
            Te = n(475),
            We = n(476),
            Ne = n(477),
            Me = n(478),
            Ee = n(479),
            Be = n(480),
            Fe = n(481),
            $e = n(482),
            ze = n(483),
            Re = n(484),
            Ue = n(485),
            Ge = n(486),
            qe = n(487),
            Ye = n(488),
            Ve = n(489),
            Je = n(490),
            Ke = n(491),
            Qe = n(492),
            Xe = n(493),
            Ze = n(494),
            et = n(495),
            tt = n(496),
            at = n(497),
            nt = n(498),
            ot = n(499);

        function it(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function st(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? it(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : it(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var lt = st(st(st(st(st(st({}, Ze), et), tt), nt), at), ot),
            ct = n(500),
            ht = n(501);

        function ut(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function gt(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ut(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : ut(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var pt = gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt(gt({}, ke), xe), _e), Se), Ce), Pe), Oe), Ie), He), je), We), De), Le), Ae), Te), Ne), $e), Me), Ee), Be), Fe), ze), Re), Ue), Ge), qe), Ye), Ve), Je), Ke), Qe), Xe), ct), ht), {}, {
            recommended: gt({}, lt)
        });

        function ft(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }
        var mt = function(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? ft(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : ft(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }({}, n(502)),
            wt = n(503),
            bt = n(504);
        t.a = {
            head: head,
            global: Y,
            components: fe,
            form: ve,
            pages: pt,
            sales: mt,
            routes: wt,
            wwwRoutes: bt
        }
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(1);

        function r(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }
        n(8);
        var l = n(7),
            c = n(9),
            h = n(0);

        function d(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function f(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        const m = ["outline", "text"];
        var w = l.a.extend({
                name: "HButton",
                props: {
                    id: {
                        type: String,
                        default: ""
                    },
                    to: {
                        type: [Object, String, Boolean],
                        default: !1
                    },
                    target: {
                        type: [String, Boolean],
                        default: !1
                    },
                    color: {
                        type: String,
                        default: "primary",
                        validator: Object(h.y)([...c.c, ...c.d])
                    },
                    type: {
                        type: String,
                        default: "",
                        validator: Object(h.y)(m)
                    },
                    routerComponent: {
                        type: String,
                        default: "a"
                    },
                    disabled: Boolean,
                    loading: Boolean,
                    noHover: Boolean
                },
                computed: {
                    getButtonType() {
                        return this.to && !this.disabled ? "HButtonLink" : "HButtonSimple"
                    },
                    buttonClass() {
                        return [{
                            "h-button--no-hover": this.noHover
                        }, f(f(f({}, Object(h.f)("h-button", this.color, [...c.c, ...c.d])), Object(h.f)("h-button", this.type, m)), {}, {
                            "h-button--disabled": this.disabled,
                            "h-button--loading": this.loading
                        })]
                    }
                },
                methods: {
                    clickButton() {
                        this.disabled || this.$emit("onClick")
                    }
                }
            }),
            y = (n(837), n(5)),
            component = Object(y.a)(w, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t(e.getButtonType, e._b({
                    tag: "Component",
                    staticClass: "h-button",
                    class: e.buttonClass,
                    attrs: {
                        id: e.id,
                        loading: e.loading,
                        disabled: e.disabled,
                        "router-component": e.routerComponent,
                        target: e.target,
                        to: e.to,
                        dir: e.direction
                    },
                    on: {
                        click: e.clickButton
                    }
                }, "Component", function(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? r(Object(source), !0).forEach((function(t) {
                            Object(o.a)(e, t, source[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : r(Object(source)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }))
                    }
                    return e
                }({}, e.$attrs), !1), [e.loading ? e._e() : e._t("prepend-icon"), e._v(" "), e._t("default"), e._v(" "), e.loading ? e._t("loading", (function() {
                    return [t("HLoaderCircle", e._b({
                        attrs: {
                            "scale-size": .8,
                            position: ["centered", "absolute"]
                        }
                    }, "HLoaderCircle", {
                        color: e.color,
                        type: e.type
                    }, !1))]
                })) : e._e(), e._v(" "), e.loading ? e._e() : e._t("append-icon")], 2)
            }), [], !1, null, "e6f19700", null);
        t.default = component.exports;
        installComponents(component, {
            HLoaderCircle: n(530).default
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
        e.exports = (e, t) => {
            const n = {
                "web-hosting": ["lt_LT"],
                "website-builder": ["lt_LT"],
                "cloud-hosting": ["lt_LT"],
                "wordpress-hosting": ["lt_LT"],
                "vps-hosting": ["lt_LT"],
                pricing: ["lt_LT"],
                homepage: ["lt_LT"],
                partners: ["en_US", "en_IN", "en_GB"]
            };
            if (!n[e] || !n[e].includes(t)) return;
            const o = "e5dnas5h";
            window.intercomSettings = {
                app_id: o
            };
            const r = window.Intercom;
            if ("function" == typeof r) r("reattach_activator"), r("update", window.intercomSettings);
            else {
                const i = function() {
                    i.c(arguments)
                };
                i.q = [], i.c = function(e) {
                    i.q.push(e)
                }, window.Intercom = i;
                const s = document.createElement("script");
                s.type = "text/javascript", s.async = !0, s.src = `https://widget.intercom.io/widget/${o}`;
                const e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(s, e)
            }
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        var content = n(819);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("6bd17e8c", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        "use strict";
        n(137), n(16), n(29);
        var o = n(7),
            r = n(58);
        n(3);
        t.a = o.a.extend({
            methods: {
                getCookiesQuery() {
                    return Object.keys(this.cookieQueryKeys).reduce(((e, t) => {
                        const n = this.$cookies.get(t);
                        return n ? `${e}${this.cookieQueryKeys[t]}=${n}&` : e
                    }), "?").slice(0, -1)
                },
                goToPage(e) {
                    var t;
                    const n = r.a.find((t => t.languageCode === e));
                    if (!n) return;
                    const o = this.getCookiesQuery();
                    let l = (null === (t = this.currentPageHreflangLinks.find((e => e.hreflang === n.hreflang))) || void 0 === t ? void 0 : t.href) || n.pageHref;
                    window.open(l + o, "_self")
                }
            }
        })
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/"
        }, {
            rel: "alternate",
            hreflang: "uk-ua",
            href: "https://www.hostinger.com.ua/"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/hosting-web"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/hospedagem-de-sites"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/hosting-web"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/webhotel-danmark"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/webhosting"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/veebimajutus"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/hosting-web"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/hebergement-web"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/web-hostings"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/hostingas"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/webtarhely"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/hosting-web"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/webhosting"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/webhotell"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/hosting-www"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/hospedagem-barata"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/gazduire-web"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/hostingpalvelu"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/webbhotell"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/hosting"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/filoksenia-istoselidas"
        }, {
            rel: "alternate",
            hreflang: "uk-ua",
            href: "https://www.hostinger.com.ua/hosting"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/istidafa-web"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/web-hosting"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/web-hosting"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/domain-name-search"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/domain-name-search"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/domain-name-search"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/registrar-dominio"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/registro-de-dominio"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/comprar-dominio"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/tjek-domaene"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/domain-check"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/domeeni-registreerimine"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/comprar-dominio"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/nom-de-domaine-disponible"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/provjera-domene"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/domain-checker"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/domain-name-search"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/domain-murah"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/verifica-dominio"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/domenu-registracija"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/domenai"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/domain-kereso"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/domain-checker"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/dominios"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/domeinnaam-checken"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/domenesok"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/domain-checker"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/sprawdz-wolne-domeny"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/verificar-dominio"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/verificare-domeniu"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/overenie-domeny"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/domain-haku"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/domansok"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/domain-sorgulama"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/domain-name-search"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/ten-mien"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/vyhledavac-domen"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/elegktis-domain"
        }, {
            rel: "alternate",
            hreflang: "uk-ua",
            href: "https://www.hostinger.com.ua/kupyty-domen"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/domain-checker"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/fahis-nitak"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/domain-checker"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/yuming-jianchaqi"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/domain-checker"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/domain-checker"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/hosting-wordpress"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/hospedagem-wordpress"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/hosting-wordpress"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/bedste-wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/parim-wordpress-veebimajutus"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/hosting-wordpress"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/hebergement-wordpress"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/najbolji-wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/best-wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/wordpress-hostingas"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/legjobb-wordpress-tarhely"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/hosting-wordpress"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/beste-wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/beste-wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/best-wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/alojamento-wordpress"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/gazduire-wordpress"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/nejlepsi-wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/paras-wordpress-webhotelli"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/hosting/wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/nejlepsi-wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/kaluteri-filoksenia-wordpress"
        }, {
            rel: "alternate",
            hreflang: "uk-ua",
            href: "https://www.hostinger.com.ua/wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/best-wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/afdal-istidafa-wordpress"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/best-wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/best-wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/best-wordpress-hosting"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/best-wordpress-hosting"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/business-email"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/business-email"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/business-email"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/correo-corporativo"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/email-profissional"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/correo-corporativo"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/mailhotel-danmark"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/email-hosting"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/emaili-majutus"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/correo-profesional"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/messagerie-professionnelle"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/email-hosting"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/email-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/business-email"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/email-hosting"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/hosting-email"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/epasta-hostings"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/email-hostingas"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/email-szolgaltatas"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/email-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/correo-empresarial"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/email-hosting"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/epost-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/email-hosting"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/email-owanie"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/email-profissional"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/gazduire-email"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/vlastny-mail"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/sahkoposti"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/email-hosting"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/email-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/business-email"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/email-doanh-nghiep"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/email-hosting"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/filoksenia-email"
        }, {
            rel: "alternate",
            hreflang: "uk-ua",
            href: "https://www.hostinger.com.ua/hosting-poshty"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/email-hosting"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/istidafat-barid"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/email-hosting"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/email-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/email-hosting"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/email-hosting"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/buy-hosting"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/buy-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/buy-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/comprar-hosting"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/comprar-hospedagem"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/comprar-hosting"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/koeb-hosting"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/kaufen-hosting"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/osta-hosting"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/comprar-hosting"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/acheter-un-hebergement-web"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/kupi-hosting"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/buy-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/buy-hosting"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/beli-hosting"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/acquista-hosting"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/pirkt-hostingu"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/pirkti-hostinga"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/tarhely-vasarlas"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/buy-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/comprar-hosting"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/koop-hosting"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/kjope-webhotell"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/buy-hosting"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/kup-hosting"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/comprar-alojamento"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/cumpara-gazduire"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/kupit-hosting"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/osta-webhotelli"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/kop-webbhotell"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/hosting/hosting-satin-al"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/buy-hosting"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/thue-hosting"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/koupit-hosting"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/agoraste-hosting"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/buy-hosting"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/chirae-istdafa"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/buy-hosting"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/goumaizhuji"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/buy-hosting"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/buy-hosting"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/hospedagem-cloud"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/pilvemajutus"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/hebergement-cloud"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/makonhostings"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/cloud-hostingas"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/felho-tarhely"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/cloud-server"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/hosting-w-chmurze"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/alojamento-cloud"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/gazduire-cloud"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/cloud-webhotelli"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/hosting/bulut-sunucu"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/filoksenia-cloud"
        }, {
            rel: "alternate",
            hreflang: "uk-ua",
            href: "https://www.hostinger.com.ua/khmarnyi-hosting"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/istidafa-sahabia"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/cloud-hosting"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/cloud-hosting"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "uk-ua",
            href: "https://www.hostinger.com.ua/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/google-workspace"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/google-workspace"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/vps-argentina"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/servidor-vps"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/vps-servidor-web"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/vps-server"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/vps-server"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/servidor-vps"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/vps"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/hosting-vps"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/vps-serveris"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/vps-serveriai"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/vps-berles"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/vps-malaysia"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/alojamento-vps"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/gazduire-vps"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/vps-virtuaalipalvelin"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/vps-servrar"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/vps"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/filoksenia-vps"
        }, {
            rel: "alternate",
            hreflang: "uk-ua",
            href: "https://www.hostinger.com.ua/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/istidafa-VPS"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/vps-hosting"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/payments"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/payments"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/payments"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/pagos"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/pagamentos"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/pagos"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/betalinger"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/Zahlungen"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/maksed"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/formas-de-pago"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/methodes-paiement"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/naplata"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/payments"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/payment-methods"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/metode-pembayaran"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/pagamenti"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/maksajumi"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/mokejimai"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/fizetesi-modok"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/payment-options"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/pagos-en-linea"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/betalingen"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/betalinger"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/payments"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/platnosci"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/metodos-de-pagamento"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/metode-plata"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/platby"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/maksu"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/betalningar"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/odeme"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/payment-methods"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/thanh-toan"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/platby"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/pliromes"
        }, {
            rel: "alternate",
            hreflang: "uk-ua",
            href: "https://www.hostinger.com.ua/sposob-oplaty"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/payments"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/madfouaat"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/payments"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/payments"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/payments"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/payments"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            href: "https://www.hostinger.com/free-ssl-certificate",
            hreflang: "x-default"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.com/free-ssl-certificate",
            hreflang: "en-us"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.co.uk/free-ssl-certificate",
            hreflang: "en-gb"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.com.br/certificado-ssl-gratis",
            hreflang: "pt-br"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.hu/ingyenes-ssl-tanusitvany",
            hreflang: "hu"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.nl/gratis-ssl-certificaat",
            hreflang: "nl"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.ph/free-ssl-certificate",
            hreflang: "en-ph"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.in/free-ssl-certificate",
            hreflang: "en-in"
        }, {
            rel: "alternate",
            href: "https://hi.hostinger.in/free-ssl-certificate",
            hreflang: "hi-in"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.es/certificado-ssl-gratis",
            hreflang: "es"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.ee/tasuta-ssl-sertifikaat",
            hreflang: "et"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.lv/bezmaksas-ssl-sertifikats",
            hreflang: "lv"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.com.hk/free-ssl-certificate",
            hreflang: "zh"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.hr/besplatni-ssl-certifikat",
            hreflang: "hr"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.no/gratis-ssl-sertifikat",
            hreflang: "no"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.fi/ilmainen-ssl",
            hreflang: "fi"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.dk/gratis-ssl-certifikat",
            hreflang: "da"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.se/gratis-ssl-certifikat",
            hreflang: "sv"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.cz/ssl-certifikat-zdarma",
            hreflang: "cs"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.sk/ssl-certifikat-zadarmo",
            hreflang: "cs-sk"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.gr/dwrean-pistopoiitiko-SSL",
            hreflang: "el"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.jp/free-ssl-certificate",
            hreflang: "en-jp"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.de/kostenloses-ssl-zertifikat",
            hreflang: "de"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.pt/certificado-ssl-gratis",
            hreflang: "pt"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.web.tr/ucretsiz-ssl",
            hreflang: "tr"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.in.th/free-ssl-certificate",
            hreflang: "th"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.vn/chung-chi-SSL-mien-phi",
            hreflang: "vi"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.kr/free-ssl-certificate",
            hreflang: "ko"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.my/free-ssl-certificate",
            hreflang: "ms"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.ae/chahadat-ssl-majjania",
            hreflang: "ar"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.pl/darmowy-certyfikat-ssl",
            hreflang: "pl"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.it/certificato-ssl-gratuito",
            hreflang: "it"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.fr/certificat-ssl-gratuit",
            hreflang: "fr"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.ro/certificat-ssl-gratuit",
            hreflang: "ro"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.co/certificado-ssl-gratis",
            hreflang: "es-co"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.mx/certificado-ssl-gratis",
            hreflang: "es-mx"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.com.ar/certificado-ssl-gratis",
            hreflang: "es-ar"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.com.ua/bezkoshtovnyi-ssl-sertyfikat",
            hreflang: "uk-ua"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.lt/nemokamas-ssl-sertifikatas",
            hreflang: "lt"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.co.il/free-ssl-certificate",
            hreflang: "he"
        }, {
            rel: "alternate",
            href: "https://www.hostinger.co.id/ssl-gratis",
            hreflang: "id"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/servidores-de-minecraft"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/minecraft-server-hosting-dansk"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/hebergement-serveur-minecraft"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/hosting-minecraft"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/minecraft-serveru-hostings"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/minecraft-hostingas"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/minecraft-szerver-berles"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/hosting-serwerow-minecraft"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/minecraft-servers"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/gazduire-servere-minecraft"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/minecraft-servery"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/minecraft-server-kiralama"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "uk-ua",
            href: "https://www.hostinger.com.ua/hosting-dlia-majnkraft"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/minecraft-kaifu-zhuji"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/minecraft-server-hosting"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/minecraft-server-hosting"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/hospedagem-vps-cyberpanel"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/hosting-cyberpanel"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/alojamento-cyberpanel-vps"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/hebergement-vps-cyberpanel"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/hosting-cyberpanel"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/hosting-cyberpanel"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/hosting-cyberpanel"
        }, {
            rel: "alternate",
            hreflang: "uk-ua",
            href: "https://www.hostinger.com.ua/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/cyberpanel-vps-hostingas"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/cyberpanel-vps-hosting"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/cyberpanel-vps-hosting"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/cheap-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/cheap-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/cheap-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/hosting-barato"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/hospedagem-de-site-barata"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/hosting-barato"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/billigt-webhotel"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/gunstiges-webhosting"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/odav-veebimajutus"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/hosting-barato"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/hebergement-web-pas-cher"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/povoljni-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/cheap-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/cheap-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/hosting-murah"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/hosting-economico"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/lets-hostings"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/pigus-web-hostingas"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/olcso-tarhely"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/cheap-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/hosting-barato"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/goedkope-webhosting"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/billig-webhotell"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/cheap-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/tani-hosting"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/alojamento-web-barato"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/gazduire-ieftina"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/lacny-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/edullinen-webhotelli"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/billigt-webbhotell"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/hosting/ekonomik-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/cheap-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/hosting-gia-re"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/levny-webhosting"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/fthino-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/cheap-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/istidafat-web-rakhiss"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/cheap-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/cheap-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/cheap-web-hosting"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/cheap-web-hosting"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/hostinger-pro"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/hostinger-pro"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/hostinger-pro"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/hostinger-pro"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/hostinger-pro"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/hostinger-pro"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/hostinger-pro"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/hostinger-pro"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/hostinger-pro"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/hostinger-pro"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/hostinger-pro"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/website-builder"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/website-builder"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/website-builder"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/creador-de-paginas-web"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/criador-de-sites"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/creador-de-paginas-web"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/lav-din-egen-hjemmeside"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/website-erstellen"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/kodulehe-tegemine"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/creador-de-paginas-web"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/createur-de-sites-internet"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/izrada-web-stranica"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/website-builder"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/website-builder"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/website-builder"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/creare-sito-web"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/majas-lapas-izveide"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/svetaines-kurimas"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/weboldal-keszites"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/website-builder"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/creador-de-paginas-web"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/website-maken"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/nettsidebygger"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/website-builder"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/kreator-stron"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/criador-de-sites"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/creare-site"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/tvorba-web-stranok"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/kotisivukone"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/website-builder"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/site-kur"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/website-builder"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/tao-website"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/website-builder"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/kataskeuastis-istoselidas"
        }, {
            rel: "alternate",
            hreflang: "uk-ua",
            href: "https://www.hostinger.com.ua/stvoryty-sait"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/website-builder"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/monchii-almawakii"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/website-builder"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/website-builder"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/website-builder"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/website-builder"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/technology"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/technology"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/technology"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/technology"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/tecnologia"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/technologia"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/technologie"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/technology"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/technology"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/technology"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/tecnologia"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/tehnoloogia"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/tehnologija"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/technology"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/tehnologija"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/teknologi"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/tekniikka"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/teknologi"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/teknologi"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/technologie"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/technologia"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/texnologia"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/technology"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/technologie"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/tecnologia"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/teknoloji"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/technology"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/cong-nghe-web"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/technology"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/technology"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/technology"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/technologia"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/tecnologia"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/la-technologie"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/tehnologie"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/tecnologia"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/tecnologia"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/tecnologia"
        }, {
            rel: "alternate",
            hreflang: "uk-ua",
            href: "https://www.hostinger.com.ua/technologija"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/technologijos"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/technology"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/teknologi"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/ecommerce-hosting"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/ecommerce-hosting"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/ecommerce-hosting"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/hosting-ecommerce"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/hospedagem-de-loja-virtual"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/hosting-ecommerce"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/ecommerce-hosting"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/hosting-ecommerce"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/hebergement-ecommerce"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/ecommerce-hosting"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/hosting-ecommerce"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/hosting-ecommerce"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/hosting-ecommerce"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/ecommerce-hosting"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/tienda-online"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/loja-virtual"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/crear-tienda-online"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/tvorba-e-shopu"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/webshop"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/onlineshop-erstellen"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/e-pood"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/online-katastima"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/tienda-online"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/boutique-en-ligne"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/online-trgovina"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/online-store"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/online-store"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/toko-online"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/negozio-online"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/online-store"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/tiessaistes-veikals"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/elektronine-parduotuve"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/webaruhaz"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/online-store"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/tienda-en-linea"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/webshop"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/nettbutikk"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/online-store"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/sklep-internetowy"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/loja-online"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/magazin-online"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/internetovy-obchod"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/nettikauppa"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/onlinebutik"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/sanal-magaza"
        }, {
            rel: "alternate",
            hreflang: "uk-ua",
            href: "https://www.hostinger.com.ua/stvoryty-internet-mahazyn"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/online-store"
        }, {
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/online-store"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/online-store"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/online-store"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/kinh-doanh-online"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/matjar-online"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/online-store"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/online-store"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/online-store"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/online-store"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/partners"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/partners"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/partners"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/partners"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/socios"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/socios"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/socios"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/socios"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/partenaires"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/parceiros"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/website-templates"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/website-templates"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/website-templates"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/plantillas-web"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/templates-de-sites"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/plantillas-web"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/website-vorlagen"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/plantillas-web"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/modele-de-site-web"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/website-templates"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/template-website"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/plantillas-web"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/website-templates"
        }]
    }, function(e, t, n) {
        "use strict";
        t.a = [{
            rel: "alternate",
            hreflang: "x-default",
            href: "https://www.hostinger.com/logo-maker"
        }, {
            rel: "alternate",
            hreflang: "pk",
            href: "https://www.hostinger.pk/logo-maker"
        }, {
            rel: "alternate",
            hreflang: "en-us",
            href: "https://www.hostinger.com/logo-maker"
        }, {
            rel: "alternate",
            hreflang: "es-ar",
            href: "https://www.hostinger.com.ar/creador-de-logos"
        }, {
            rel: "alternate",
            hreflang: "pt-br",
            href: "https://www.hostinger.com.br/criador-de-logo"
        }, {
            rel: "alternate",
            hreflang: "es-co",
            href: "https://www.hostinger.co/creador-de-logos"
        }, {
            rel: "alternate",
            hreflang: "da",
            href: "https://www.hostinger.dk/logoskaber"
        }, {
            rel: "alternate",
            hreflang: "de",
            href: "https://www.hostinger.de/logo-erstellen"
        }, {
            rel: "alternate",
            hreflang: "et",
            href: "https://www.hostinger.ee/logo-tegemine"
        }, {
            rel: "alternate",
            hreflang: "es",
            href: "https://www.hostinger.es/creador-de-logos"
        }, {
            rel: "alternate",
            hreflang: "fr",
            href: "https://www.hostinger.fr/createur-de-logo"
        }, {
            rel: "alternate",
            hreflang: "hr",
            href: "https://www.hostinger.hr/izrada-logotipa"
        }, {
            rel: "alternate",
            hreflang: "hi-in",
            href: "https://hi.hostinger.in/logo-maker"
        }, {
            rel: "alternate",
            hreflang: "en-in",
            href: "https://www.hostinger.in/logo-maker"
        }, {
            rel: "alternate",
            hreflang: "id",
            href: "https://www.hostinger.co.id/logo-maker"
        }, {
            rel: "alternate",
            hreflang: "it",
            href: "https://www.hostinger.it/creatore-di-loghi"
        }, {
            rel: "alternate",
            hreflang: "lv",
            href: "https://www.hostinger.lv/logo-veidotajs"
        }, {
            rel: "alternate",
            hreflang: "lt",
            href: "https://www.hostinger.lt/logotipo-kurimas"
        }, {
            rel: "alternate",
            hreflang: "hu",
            href: "https://www.hostinger.hu/logo-keszito"
        }, {
            rel: "alternate",
            hreflang: "ms",
            href: "https://www.hostinger.my/logo-maker"
        }, {
            rel: "alternate",
            hreflang: "es-mx",
            href: "https://www.hostinger.mx/creador-de-logos"
        }, {
            rel: "alternate",
            hreflang: "nl",
            href: "https://www.hostinger.nl/logo-maker"
        }, {
            rel: "alternate",
            hreflang: "no",
            href: "https://www.hostinger.no/logooppretter"
        }, {
            rel: "alternate",
            hreflang: "en-ph",
            href: "https://www.hostinger.ph/logo-maker"
        }, {
            rel: "alternate",
            hreflang: "pl",
            href: "https://www.hostinger.pl/kreator-logo"
        }, {
            rel: "alternate",
            hreflang: "pt",
            href: "https://www.hostinger.pt/criador-de-logo"
        }, {
            rel: "alternate",
            hreflang: "ro",
            href: "https://www.hostinger.ro/creare-logo"
        }, {
            rel: "alternate",
            hreflang: "cs-sk",
            href: "https://www.hostinger.sk/tvorba-loga"
        }, {
            rel: "alternate",
            hreflang: "fi",
            href: "https://www.hostinger.fi/logo-generaattori"
        }, {
            rel: "alternate",
            hreflang: "sv",
            href: "https://www.hostinger.se/logotyptillverkare"
        }, {
            rel: "alternate",
            hreflang: "tr",
            href: "https://www.hostinger.web.tr/logo-yapma"
        }, {
            rel: "alternate",
            hreflang: "en-gb",
            href: "https://www.hostinger.co.uk/logo-maker"
        }, {
            rel: "alternate",
            hreflang: "vi",
            href: "https://www.hostinger.vn/tao-logo"
        }, {
            rel: "alternate",
            hreflang: "cs",
            href: "https://www.hostinger.cz/logo-maker"
        }, {
            rel: "alternate",
            hreflang: "el",
            href: "https://www.hostinger.gr/dimiourgia-logotypou"
        }, {
            rel: "alternate",
            hreflang: "uk-ua",
            href: "https://www.hostinger.com.ua/konstruktor-logo"
        }, {
            rel: "alternate",
            hreflang: "he",
            href: "https://www.hostinger.co.il/logo-design"
        }, {
            rel: "alternate",
            hreflang: "ar",
            href: "https://www.hostinger.ae/logo-maker"
        }, {
            rel: "alternate",
            hreflang: "th",
            href: "https://www.hostinger.in.th/logo-maker"
        }, {
            rel: "alternate",
            hreflang: "zh",
            href: "https://www.hostinger.com.hk/logo-maker"
        }, {
            rel: "alternate",
            hreflang: "en-jp",
            href: "https://www.hostinger.jp/logo-maker"
        }, {
            rel: "alternate",
            hreflang: "ko",
            href: "https://www.hostinger.kr/logo-maker"
        }]
    }, function(e, t, n) {
        var content = n(827);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("b08a38ae", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(829);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("3a0ba98a", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(832);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("40d15130", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(834);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("ac8c6652", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(836);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("1be5ca22", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(838);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("63eae60a", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(841);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("8ab58f68", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(843);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("6b05b961", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(845);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("184a12bb", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(847);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("eded45a0", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(849);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("1929005d", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(851);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("7437c072", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(854);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("4ce5e102", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(856);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("683e1c34", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(858);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("b78dfd66", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(860);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("a78543d4", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(862);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("670d500c", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(864);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("32edabc6", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(866);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("300fdfed", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(868);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("415cfe62", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(870);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("f176f6ac", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(872);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("396808ac", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n.r(t);
        n(127), n(8);
        var o = n(7),
            r = n(59),
            l = n(3);
        const c = [{
            title: "mandatoryCookies",
            description: "mandatoryCookiesDescription",
            checked: !0,
            disabled: !0
        }, {
            title: "statisticsCookies",
            description: "statisticsCookiesDescription",
            checked: !1,
            disabled: !1
        }, {
            title: "marketingCookies",
            description: "marketingCookiesDescription",
            checked: !1,
            disabled: !1
        }];
        var h = o.a.extend({
                name: "HCookieConsent",
                data: () => ({
                    show: !1,
                    showCookieSettings: !1,
                    cookieSelections: c,
                    selectedValues: []
                }),
                created() {
                    this.checkCookieStatus()
                },
                methods: {
                    async checkCookieStatus() {
                        if (this.$cookies.get("cookie_consent")) return;
                        const [{
                            isGdpr: e
                        }] = await r.h.getGdprData();
                        this.show = e, this.show || this.acceptAllCookies()
                    },
                    acceptAllCookies() {
                        this.selectedValues = ["statistics", "advertising"], this.acceptSelectedCookies()
                    },
                    declineCookies() {
                        this.selectedValues = [], this.acceptSelectedCookies()
                    },
                    acceptSelectedCookies() {
                        this.$cookies.set("cookie_consent", this.selectedValues, {
                            maxAge: 0 === this.selectedValues.length ? 172800 : 31536e3
                        }), this.$gtm.push({
                            event: "cookie_consent"
                        }), this.show = !1, this.enableScroll()
                    },
                    toggleSettingsSelection() {
                        this.showCookieSettings ? this.enableScroll() : this.disableScroll(), this.showCookieSettings = !this.showCookieSettings
                    },
                    disableScroll() {
                        document.getElementsByTagName("html")[0].style.overflow = "hidden"
                    },
                    enableScroll() {
                        document.getElementsByTagName("html")[0].style.overflow = "initial"
                    },
                    toggleSwitchSelections(e) {
                        const {
                            name: t,
                            value: n
                        } = e;
                        n && !this.selectedValues.includes(t) && this.selectedValues.push(t), !n && this.selectedValues.includes(t) && this.selectedValues.splice(this.selectedValues.indexOf(t), 1)
                    }
                },
                computed: {
                    cookieConsentPolicyLink() {
                        return Object(l.b)(`${this.siteUrl}${this.$t("wwwRoutes.cookiePolicy")}`)
                    }
                }
            }),
            d = (n(861), n(5)),
            component = Object(d.a)(h, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return e.show ? t("Transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t("div", {
                    staticClass: "h-cookie-consent",
                    attrs: {
                        dir: e.direction
                    }
                }, [t("HSectionOneColumn", {
                    attrs: {
                        "background-color": "light"
                    }
                }, [t("div", {
                    staticClass: "h-cookie-consent__main-settings"
                }, [t("h3", {
                    staticClass: "h-cookie-consent__title"
                }, [e._v("\n          " + e._s(e.$t("components.cookieConsent.careAboutPrivacyTitle")) + "\n        ")]), e._v(" "), t("p", {
                    staticClass: "h-cookie-consent__description t-body-3"
                }, [e._v("\n          " + e._s(e.$t("components.cookieConsent.careAboutPrivacyDescription")) + "\n          "), t("a", {
                    staticClass: "t-body-2",
                    attrs: {
                        href: e.cookieConsentPolicyLink,
                        target: "_blank",
                        "data-click-id": "hgr-cookie_consent-cookie_policy_btn"
                    }
                }, [e._v("\n            " + e._s(e.$t("components.cookieConsent.cookiePolicy")) + ".\n          ")])]), e._v(" "), t("div", {
                    staticClass: "h-cookie-consent__main-btn-wrapper"
                }, [t("HButton", {
                    staticClass: "h-cookie-consent__main-btn",
                    attrs: {
                        "data-click-id": "hgr-cookie_consent-decline_btn",
                        type: "outline",
                        color: "primary"
                    },
                    on: {
                        onClick: e.declineCookies
                    }
                }, [e._v("\n            " + e._s(e.$t("components.cookieConsent.declineCookies")) + "\n          ")]), e._v(" "), t("HButton", {
                    staticClass: "h-cookie-consent__main-btn",
                    attrs: {
                        "data-click-id": "hgr-cookie_consent-settings_btn",
                        type: "outline",
                        color: "primary"
                    },
                    on: {
                        onClick: e.toggleSettingsSelection
                    }
                }, [e._v("\n            " + e._s(e.$t("components.cookieConsent.settings")) + "\n          ")]), e._v(" "), t("HButton", {
                    staticClass: "h-cookie-consent__main-btn",
                    attrs: {
                        "data-click-id": "hgr-cookie_consent-accept_all_btn"
                    },
                    on: {
                        onClick: e.acceptAllCookies
                    }
                }, [e._v("\n            " + e._s(e.$t("components.cookieConsent.acceptCookies")) + "\n          ")])], 1)]), e._v(" "), e.showCookieSettings ? t("HPopup", {
                    staticClass: "h-cookie-consent__settings",
                    on: {
                        onClose: e.enableScroll
                    },
                    model: {
                        value: e.showCookieSettings,
                        callback: function(t) {
                            e.showCookieSettings = t
                        },
                        expression: "showCookieSettings"
                    }
                }, [t("div", {
                    staticClass: "h-cookie-consent__settings-wrapper"
                }, [t("div", {
                    staticClass: "h-cookie-consent__settings-top-container"
                }, [t("div", {
                    staticClass: "h-cookie-consent__settings-text-container"
                }, [t("h3", {
                    staticClass: "h-cookie-consent__title"
                }, [e._v("\n                " + e._s(e.$t("components.cookieConsent.cookieSettings")) + "\n              ")]), e._v(" "), t("p", {
                    staticClass: "h-cookie-consent__description t-body-3"
                }, [e._v("\n                " + e._s(e.$t("components.cookieConsent.cookieSettingsDescription")) + "\n                "), t("a", {
                    staticClass: "t-body-2",
                    attrs: {
                        href: e.cookieConsentPolicyLink,
                        target: "_blank",
                        "data-click-id": "hgr-cookie_consent-settings-cookie_policy_btn"
                    }
                }, [e._v("\n                  " + e._s(e.$t("components.cookieConsent.cookiePolicy")) + ".")])])])]), e._v(" "), t("div", {
                    staticClass: "h-cookie-consent__settings-btn-container"
                }, [t("HButton", {
                    staticClass: "h-cookie-consent__settings-btn h-cookie-consent__settings-btn--accept-selected",
                    attrs: {
                        "data-click-id": "hgr-cookie_consent-settings-confirm_btn",
                        "no-hover": "",
                        type: "text"
                    },
                    on: {
                        onClick: e.acceptSelectedCookies
                    }
                }, [e._v("\n              " + e._s(e.$t("components.cookieConsent.acceptSelected")) + "\n            ")]), e._v(" "), t("HButton", {
                    staticClass: "h-cookie-consent__settings-btn",
                    attrs: {
                        "data-click-id": "hgr-cookie_consent-settings-confirm_all_btn"
                    },
                    on: {
                        onClick: e.acceptAllCookies
                    }
                }, [e._v(e._s(e.$t("components.cookieConsent.acceptAll")))])], 1), e._v(" "), e._l(e.cookieSelections, (function(n, o) {
                    return t("HCookieSelection", {
                        key: `${n.title}-${o}`,
                        attrs: {
                            checked: n.checked,
                            disabled: n.disabled,
                            title: n.title,
                            description: n.description
                        },
                        on: {
                            toggle: e.toggleSwitchSelections
                        }
                    })
                }))], 2)]) : e._e()], 1)], 1)]) : e._e()
            }), [], !1, null, "667ab879", null);
        t.default = component.exports;
        installComponents(component, {
            HButton: n(236).default,
            HCookieSelection: n(1031).default,
            HPopup: n(528).default,
            HSectionOneColumn: n(526).default
        })
    }, , , , function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return c
            }));
            var o = n(10),
                r = n(235);
            const l = (e, t) => ({
                    default: r.a,
                    [e]: t
                }),
                c = async t => {
                    t.language.code;
                    const {
                        data: {
                            translations: n
                        }
                    } = await o.a.get(`${e.env.HWEBSITES_API}/api/translations`);
                    return {
                        locales: {
                            code: t.language.code,
                            iso: t.language.iso
                        },
                        defaultLocale: t.language.code,
                        messages: l(t.language.code, n)
                    }
                }
        }).call(this, n(49))
    }, function(e) {
        e.exports = JSON.parse('{"base":{"title":"The Hosting Platform Made For You - Go Online With Hostinger","titleWithPrice":"The Hosting Platform Made For You - Go Online for {price} {currency}/mo","description":"Choose your web hosting solution and make the perfect website! From shared hosting and domains to VPS - we have all you need for online success.","descriptionWithPercentage":"Save up to {percentage}% off on your hosting plan and build the perfect website. Fast, secure solution and 24/7 support. Everything you need for your online sucsess.","author":"Hostinger","dctermsType":"Service"}}')
    }, function(e) {
        e.exports = JSON.parse('{"webHosting":{"title":"Best Web Hosting - unlimited web hosting & free domain for website","description":"{currentYear} Best Web Hosting with free domain & unlimited web hosting features. Start website using best website hosting with unlimited web hosting cheap plan."}}')
    }, function(e) {
        e.exports = JSON.parse('{"wordpressHosting":{"title":"WordPress Hosting | Fast and Easy to Use","description":"Hostinger offers managed WordPress hosting plans optimized for the best possible performance. Buy fast and secure hosting for your website."}}')
    }, function(e) {
        e.exports = JSON.parse('{"emailHosting":{"title":"Professional email based on your domain - Save {discount}% today","description":"Get professional email hosting services and create mailboxes that match your domain name. Boost the trust of your brand and promote it with every sent email!"}}')
    }, function(e) {
        e.exports = JSON.parse('{"buyHosting":{"title":"Buy Hosting Packages Designed for Success - Hostinger","description":"Web hosting with all you need to run a successful online business - easy WordPress installation, around the clock support, and fast server infrastructure."}}')
    }, function(e) {
        e.exports = JSON.parse('{"vpsHosting":{"title":"Best VPS hosting - cheap VPS hosting with virtual server space","description":"Best VPS hosting: get best Linux VPS hosting web server on the cheap! Virtual server space, SSH & live chat support - all with cheap VPS hosting!"}}')
    }, function(e) {
        e.exports = JSON.parse('{"cloudHosting":{"title":"Cloud Hosting | 99.9% Uptime | Only Now Starting from {lowestPrice}","description":"Get the power of a dedicated server without the technical struggle and succeed online! Cloud hosting is here to end your search for speed and reliability."}}')
    }, function(e) {
        e.exports = JSON.parse('{"googleWorkspace":{"title":"Google Workspace: Business Email and Collaboration Tools","description":"Start using Google Workspace to improve your creativeness & communication within teams over the world."}}')
    }, function(e) {
        e.exports = JSON.parse('{"payments":{"title":"Payment Methods at Hostinger","description":"Available payment methods"}}')
    }, function(e) {
        e.exports = JSON.parse('{"minecraftServerHosting":{"title":"Minecraft Server Hosting - Full Root Access - Instant Setup","description":"Powerful Minecraft server hosting with full control over the servers. Get full root access, dedicated IPV4/IPV6 addresses, and ultra-low latency with Hostinger."}}')
    }, function(e) {
        e.exports = JSON.parse('{"sslCertificate":{"title":"Get Free SSL Certificate | Secure Your Website","description":"Get free SSL from Hostinger and secure your website. We provide SSL for free with all our hosting plans and will renew it automatically for you."}}')
    }, function(e) {
        e.exports = JSON.parse('{"cheapWebHosting":{"title":"Cheap Web Hosting - Affordable Hosting Plan Is Now {discount}% Off","description":"Get a cheap and reliable web hosting plan for a quick and easy start online. We offer high speed and 99.99% uptime guarantee at an affordable price."}}')
    }, function(e) {
        e.exports = JSON.parse('{"cyberpanelVpsHosting":{"title":"CyberPanel VPS - VPS with Fast & Reliable Control Panel","description":"CyberPanel VPS hosting that comes with an auto-installed control panel. Do everything faster while enjoying security and high reliability."}}')
    }, function(e) {
        e.exports = JSON.parse('{"websiteBuilderAi":{"title":"AI Website Builder – Create Stunning Sites Instantly","description":"Choose a website type, describe your website details, and Hostinger AI Website Builder will generate unique content in minutes – it’s that easy!"}}')
    }, function(e) {
        e.exports = JSON.parse('{"login":{"title":"Log in to Hostinger","description":"Log in to Hostinger"}}')
    }, function(e) {
        e.exports = JSON.parse('{"register":{"title":"Register to Hostinger","description":"Register to Hostinger"}}')
    }, function(e) {
        e.exports = JSON.parse('{"signup":{"title":"Sign up to Hostinger","description":"Sign up to Hostinger"}}')
    }, function(e) {
        e.exports = JSON.parse('{"errorPage":{"title":"404 Page not found","description":"Application Error"}}')
    }, function(e) {
        e.exports = JSON.parse('{"technology":{"title":"Next Generation Web Hosting Technology | Hostinger","description":"Find out what makes our web hosting platform the best place for your website."}}')
    }, function(e) {
        e.exports = JSON.parse('{"domainNameSearch":{"title":"Domain Name Search & Registration | Domain Checker Tool","description":"Domain name search and registration made easy. Enter your preferred name in our domain checker tool, check its availability, buy it and register it in minutes."}}')
    }, function(e) {
        e.exports = JSON.parse('{"websiteBuilder":{"title":"Website Builder – Create a Website With a Drag-And-Drop Editor","description":"Build a professional website with our drag-and-drop website builder. Choose from hundreds of website design templates and get started today!"}}')
    }, function(e) {
        e.exports = JSON.parse('{"websiteTemplates":{"title":"Website Templates - Customizable Web Themes Built for Success","description":"Choose and customize your favorite website template and launch your website today. Designer-made and fully mobile responsive."}}')
    }, function(e) {
        e.exports = JSON.parse('{"ecommerceHosting":{"title":"Ecommerce Hosting | Launch Your Online Store in Minutes","description":"Get your online business off the ground with ecommerce hosting. Top cart performance, security, and conversions guaranteed! It\'s easy with Hostinger."}}')
    }, function(e) {
        e.exports = JSON.parse('{"hostingerPro":{"title":"Hostinger Professional Web Hosting – Scale Your Business","description":"With Hostinger professional web hosting, you can take your projects to the next level. Get a scalable solution for all your websites."}}')
    }, function(e) {
        e.exports = JSON.parse('{"brandGuidelines":{"title":"Hostinger Brand Integration Guidelines","description":"The Hostinger brand is all about helping users build success online. Check out the do\'s and don\'ts of featuring Hostinger in your content."}}')
    }, function(e) {
        e.exports = JSON.parse('{"partners":{"title":"Hostinger Partner Program","description":"Manage your clients\' projects and earn recurring commissions"}}')
    }, function(e) {
        e.exports = JSON.parse('{"logoMaker":{"title":"AI Logo Maker by Hostinger – Create a Logo In Minutes","description":"Hostinger AI Logo Maker generates free logo designs you can use on your website, social profiles, and printed media. Make a logo for your business today."}}')
    }, function(e) {
        e.exports = JSON.parse('{"onlineStore":{"title":"Launch an Online Store | Get an eCommerce Website Fast","description":"Zyro makes eCommerce website building easy. Launch, manage, and grow your online store with a lot of Premium features– it\'s simple and quick too."}}')
    }, function(e) {
        e.exports = JSON.parse('{"cpanelHosting":{"title":"Web Hosting Indonesia | Garansi 30 Hari Uang Kembali","description":"Dapatkan web hosting Indonesia unlimited yang cepat dan aman untuk website. Gratis domain &amp; SSL. Beli sekarang, garansi uang kembali."}}')
    }, function(e) {
        e.exports = JSON.parse('{"cpanelEmailHosting":{"title":"Bisnis Makin Profesional dengan cPanel Email Hosting","description":"Tingkatkan kredibilitas bisnis Anda dengan menggunakan alamat email profesional. Nikmati layanan email hosting terbaik dengan segala kemudahan dari cPanel."}}')
    }, function(e) {
        e.exports = JSON.parse('{"niagahoster":{"robots":"index, follow","fbApp":"483393106484614","appleMobile":"Segera online bersama Niagahoster","themeColor":"#007dff","site":"Niagahoster","author":"@Niagahoster"}}')
    }, function(e) {
        e.exports = JSON.parse('{"perMonth":"mo","perYear":"year","perYearShortName":"yr","perMonthShortName":"mo","success":"Success!","features":{"moneyBackGuarantee":"30-day money-back guarantee","dedicatedResourcesTooltip":"Our cloud plans offer powerful dedicated resources and are optimized for efficiency and speed that guarantees a top performance of your websites. Every single resource is used and managed exclusively by you.","dedicatedIpTooltip":"Each Cloud hosting plan includes a free dedicated IP that is not shared with other users on the same hosting environment. Thus you are safe from having your site being affected from IP blacklist due to other webmasters’ actions.","freeDomain":"Free Domain","freeDomainTooltip":"After signing up for a 12, 24, or 48-month hosting plan, you get a free domain for one year. Choose from {freeDomainList} domains. After the first year, your domain will renew at the regular rate. Contact Customer Support to get information on the regular rate for your particular domain. Please note that you won\'t be able to transfer newly registered domains to another registrar during the first {numberOfDays} days of the registration period.","customerSupport":"24/7 Customer Support"},"priceDescription":"When ordering for 48 months; VAT not included","tutorialsLink":"https://www.hostinger.com/tutorials","blogLink":"https://www.hostinger.com/blog","knowledgeBaseLink":"https://support.hostinger.com/en","aiLogoMakerLink":"https://logo.hostinger.com?ref=hostinger-landing","websiteBuilderAiLink":"https://builder.hostinger.com/ai-builder","rating":"rating","hPanelProUrl":"https://hpanel.hostinger.com/hostinger-pro/clients-list","hPanelProUrlStaging":"https://hpanel-stage.hostinger.io/hostinger-pro/clients-list","websiteTemplateUrls":{"dossenbach":"https://templates.hostinger.com/preview/dossenbach","poveda":"https://templates.hostinger.com/preview/poveda","niqvistlite":"https://templates.hostinger.com/preview/niqvistlite","torinlite":"https://templates.hostinger.com/preview/torinlite","adelina":"https://templates.hostinger.com/preview/adelina","brooke":"https://templates.hostinger.com/preview/brooke","blick":"https://templates.hostinger.com/preview/blick","ramus":"https://templates.hostinger.com/preview/ramus","elisha":"https://templates.hostinger.com/preview/elisha","goodnews":"https://templates.hostinger.com/preview/goodnews","feyerlite":"https://templates.hostinger.com/preview/feyerlite","kristinelite":"https://templates.hostinger.com/preview/kristinelite","presson":"https://templates.hostinger.com/preview/presson","granvillelite":"https://templates.hostinger.com/preview/granvillelite","blackmore":"https://templates.hostinger.com/preview/blackmore","devine":"https://templates.hostinger.com/preview/devine","shawlite":"https://templates.hostinger.com/preview/shawlite","anderslite":"https://templates.hostinger.com/preview/anderslite","gaonlite":"https://templates.hostinger.com/preview/gaonlite","oving":"https://templates.hostinger.com/preview/oving","isla":"https://templates.hostinger.com/preview/isla","eugenie":"https://templates.hostinger.com/preview/eugenie","munklite":"https://templates.hostinger.com/preview/munklite","mischa":"https://templates.hostinger.com/preview/mischa","eren":"https://templates.hostinger.com/preview/eren","navy":"https://templates.hostinger.com/preview/navy","midhurstlite":"https://templates.hostinger.com/preview/midhurstlite","mercado":"https://templates.hostinger.com/preview/mercado"}}')
    }, function(e) {
        e.exports = JSON.parse('{"navigation":{"menuItems":{"wordpressHosting":"WordPress","websiteBuilder":"Website Builder","hosting":"Hosting","proHosting":"Pro","vps":"VPS","email":"Email","domain":"Domain","domains":"Domains","pricing":"Pricing"},"submenuItemNames":{"webHosting":"Web Hosting","websiteBuilder":"Website Builder","cloudHosting":"Cloud Hosting","wordpressHosting":"WordPress Hosting","vpsHosting":"VPS Hosting","minecraftHosting":"Minecraft Hosting","cyberPanelHosting":"CyberPanel VPS Hosting","agencyHosting":"Hosting for Agencies","partnerProgram":"Partner Program","hostingerProB":"Hosting for Professionals","googleWorkspace":"Google Workspace Email Hosting","titanEmail":"Titan Email Hosting","hostingerEmail":"Hostinger Email Hosting","domainChecker":"Domain Checker","whois":"WHOIS Database","domainTransfer":"Domain Transfer"},"submenuItemDescriptions":{"webHosting":"For small to medium websites.","websiteBuilder":"Create your website with ease.","cloudHosting":"For large scale projects.","wordpressHosting":"Optimized solutions for WordPress hosting.","vpsHosting":"Dedicated resources to scale.","minecraftHosting":"Share your Minecraft experience.","cyberPanelHosting":"Control panel with Open/LiteSpeed Webserver.","agencyHosting":"Made with developer business in mind.","partnerProgram":"Manage your clients and earn commissions.","hostingerPro":"Manage websites for your clients.","googleWorkspace":"Get custom email and 30GB of storage.","titanEmail":"Promote your business with every outreach.","hostingerEmail":"Promote your business with every outreach.","domainChecker":"Find the perfect domain name.","whois":"Lookup tool to find WHOIS information.","domainTransfer":"Want to transfer domain to Hostinger?"},"goBackTitle":"Back","loginLinkTitle":"Log in","cartLinkTitle":"Cart"}}')
    }, function(e) {
        e.exports = JSON.parse('{"footer":{"ourMissionFirst":"We are a web hosting provider on a mission to bring success to everyone who goes online.","ourMissionSecond":"We do it by constantly improving server technology, providing professional support, and making the web hosting experience seamless.","addMore":"Add more","paypal":"Paypal","mastercard":"Mastercard","maestro":"Maestro","visa":"Visa","bitcoin":"Bitcoin","discoverNetwork":"Discover Network","americanExpress":"American Express","andMore":"And More","hosting":"hosting","webHosting":"Best Web Hosting","professionalWebHosting":"Professional Web Hosting","vpsHosting":"Best VPS Hosting","minecraftHosting":"Minecraft Server Hosting","cyberPanelHosting":"CyberPanel VPS Hosting","cloudHosting":"Cloud Hosting","wordpressHosting":"Cheap WordPress Hosting","emailHosting":"Email Hosting","cmsHosting":"CMS Hosting","eCommerceHosting":"Ecommerce Hosting","onlineStores":"Online Stores","cheapWebHosting":"Cheap Web Hosting","freeWebsiteHosting":"Free Website Hosting","websiteBuilder":"Website Builder","websiteBuilderAi":"AI Website Builder","websiteTemplates":"Website Templates","buyHosting":"Buy Hosting","domains":"domains","domainChecker":"Domain Checker","domainTransfer":"Domain Transfer","freeDomain":"Free Domain","aiDomain":".ai Domain","comDomain":".com Domain","inDomain":".in Domain","ioDomain":".io Domain","netDomain":".net Domain","techDomain":".tech Domain","xyzDomain":"XYZ Domain","99centDomains":"99 Cent Domains","freeSslCertificate":"Free SSL Certificate","cheapSslCertificate":"Cheap SSL Certificate","domainPricing":"Domain Pricing","whoisChecker":"WHOIS Checker","information":"information","systemStatus":"System Status","affiliateProgram":"Affiliate Program","reviews":"Reviews","paymentMethods":"Payment Methods","wallOfFame":"Wall of Fame","pricing":"Pricing","sitemap":"Sitemap","legal":"legal","privacyPolicy":"Privacy Policy","termsOfService":"Terms of Service","registrarInformation":"Registrar Information","company":"company","aboutHostinger":"About Hostinger","contactUs":"Contact Us","ourTechnology":"Our Technology","career":"Career","help":"help","reportAbuse":"Report Abuse","knowledgeBase":"Knowledge Base","tutorials":"Tutorials","blog":"Blog","copyright":"{copyrightSign} 2004-{currentYear} {domain} - Premium Web Hosting, Cloud, VPS & Domain Registration Services.","copyrightPrices":"Prices are listed without VAT","websiteMigration":"Migrate to Hostinger","roadmap":"Roadmap","agencyHosting":"Hosting for Agencies","newsroom":"Newsroom","studentDiscount":"Student Discount","migrationTerms":"Terms of migration","logoMaker":"Logo Maker"}}')
    }, function(e) {
        e.exports = JSON.parse('{"moneyBackGuarantee":{"title":"30 day money-back guarantee","description":"If you\'re not 100% satisfied with Hostinger, we\'ll refund your payment. No hassle, no risk.","buttonText":"Get Started","linkText":"Learn More"}}')
    }, function(e) {
        e.exports = JSON.parse('{"pricingCard":{"productBadge":"Most popular","save":"SAVE {discount}%","select":"Add to cart","whenYouRenew":"when you renew","seeAllFeatures":"See all features","seeLessFeatures":"See less features","cartLinkError":"Unexpected error, please try again later","pricePerMailbox":"price per mail box","startNow":"Start Now","renewsAt":"renews at","promo":"PROMO","sale":"SALE","register":"Register","domainRegisterTooltip":"*1st year with a 2 or more years registration"}}')
    }, function(e) {
        e.exports = JSON.parse('{"pricingTable":{"sharedHostingTitle":"Choose Your Web Hosting Plan","wordpressHostingGroupedTitle":"Choose the Best WordPress Hosting Plan for Your Site","wordpressHostingGroupedDescription":"Hosting built for WordPress with seamless support of all other platforms. Get top-notch performance for your website, no matter the framework.","cloudHostingGroupedTitle":"Choose Your Cloud Hosting Plan","cloudHostingTitle":"Choose Your Cloud Hosting Plan","emailHostingTitle":"Choose your Email plan","minecraftHostingTitle":"Choose Your Minecraft Server Hosting Plan","emailHostingOtherLocalesTitle":"Choose an Email Hosting Plan","domainTitle":"Choose From the Most Popular Domain Extensions","vpsHostingTitle":"Choose Your VPS Hosting Plan","cyberpanelVpsHostingTitle":"Choose Your VPS Hosting Plan","cloudHostingGroupedDescription":"Every Cloud Hosting plan comes with a free domain name and SSL certificate.","sharedHosting":"Web Hosting","wordpressHosting":"WordPress Hosting","pricingTerms":"Payment terms","termsPopupTitle":"PAYMENT TERMS","termsPopupText":"The plans shall be pre-paid, not divided in installments. The amount presented represents the product\'s total price split by the number of months your plan will be live.","hostingerProTitle":"Web Hosting for Professionals","hostingerProDescription":"Not sure which plan to choose? <a href=\'https://calendly.com/hostingerkonsultacija/hostinger-consultation-1\' target=\'_blank\'>Consult with our team</a> and we will find the best option for you.<br>Explore the <a href=\'https://www.hostinger.com/tutorials/hpanel-demo\' target=\'_blank\'>demo version</a> to test our hPanel.","phoneConsultationText":"Not sure what plan best fits your needs? Call us on {phoneNumber} and we will help you choose.","cpanelEmailHostingTitle":"Pilih Paket Email Hosting cPanel Sesuai Kebutuhan Bisnis Anda","cpanelEmailHostingDescription":"Dapatkan beragam fitur menarik untuk mempermudah aktivitas penerimaan & pengiriman email  di bisnis Anda!","cpanelHostingGroupedTitle":"Pilih Paket cPanel Hosting Sesuai Kebutuhan Anda"}}')
    }, function(e) {
        e.exports = JSON.parse('{"cookieConsent":{"careAboutPrivacyTitle":"We Care About Your Privacy","careAboutPrivacyDescription":"We use cookies, to ensure that we give you the best experience on our website, to enable essential services and functionality on our site and to collect data on how visitors interact with our site and services. By clicking Accept, you agree to our use of all the cookies for advertising, analytics and support. For more information, please read our","cookieSettings":"Cookie Settings","cookiePolicy":"Cookie Policy","cookieSettingsDescription":"You may accept all cookies or choose specific categories, such as statistics or marketing. Mandatory cookies are always active since these cookies enable core functionality such as security, network management and provide you with access to features such as your profile and purchases, member-only resources, and other areas of the website. You may disable these by changing your browser settings, but this may affect how the website functions. For more information, please read our","acceptCookies":"Accept","declineCookies":"Decline","settings":"Settings","acceptAll":"Accept All","acceptSelected":"Accept Selected","mandatoryCookies":"Mandatory Cookies","mandatoryCookiesDescription":"They are necessary to ensure the proper functioning of the website.","statisticsCookies":"Statistics cookies","statisticsCookiesDescription":"They are important for us to improve the website\'s functionality and structure, based on how the website is using data.","marketingCookies":"Marketing cookies","marketingCookiesDescription":"They are used to collect information to provide advertising or content for a particular browser by creating different target groups."}}')
    }, function(e) {
        e.exports = JSON.parse('{"cookieSelection":{"mandatoryCookies":"Mandatory Cookies","mandatoryCookiesDescription":"They are necessary to ensure the proper functioning of the website.","alwaysActive":"Always active","statisticsCookies":"Statistics cookies","statisticsCookiesDescription":"They are important for us to improve the website\'s functionality and structure, based on how the website is using data.","marketingCookies":"Marketing cookies","marketingCookiesDescription":"They are used to collect information to provide advertising or content for a particular browser by creating different target groups."}}')
    }, function(e) {
        e.exports = JSON.parse('{"featuresHeader":{"buttonText":"Start Now"}}')
    }, function(e) {
        e.exports = JSON.parse('{"compareTable":{"planFeatures":"Plan Features","select":"Select"}}')
    }, function(e) {
        e.exports = JSON.parse('{"trustSignals":{"wordpress":"Wordpress","litespeed":"Litespeed","cloudflare":"Cloudflare"}}')
    }, function(e) {
        e.exports = JSON.parse('{"localeMenu":{"inputPlaceHolder":"Search for a country","title":"Choose your country"}}')
    }, function(e) {
        e.exports = JSON.parse('{"planCards":{"priceFrom":"from","title":"Are you looking for something else?","cloudTitle":"Cloud Hosting","cloudDescription":"For large scale projects","vpsTitle":"VPS Hosting","vpsDescription":"Build the project your way","wordpressTitle":"WordPress Hosting","wordpressDescription":"Perfect for personal websites","domainsTitle":"Domains","domainsDescription":"Find your unique domain","emailTitle":"Email Hosting","emailDescription":"Email hosting for your projects","webHostingDescription":"Optimized for small and medium businesses","webHostingTitle":"Web Hosting"}}')
    }, function(e) {
        e.exports = JSON.parse('{"paymentOptionsCards":{"title":"Payment Options","description":"We accept a variety of credit and debit cards, e-wallets, and a wide range of cryptocurrencies."}}')
    }, function(e) {
        e.exports = JSON.parse('{"clientReviews":{"fullStoryText":"Read the full story","moreStoriesText":"Browse more client stories"}}')
    }, function(e) {
        e.exports = JSON.parse('{"companyReview":{"rating":"Rating:","reviews":"reviews"}}')
    }, function(e) {
        e.exports = JSON.parse('{"domainFinder":{"pageLoading":"Checking, please wait","inputPlaceholder":"Enter your desired domain name","searchButtonText":"Search","showMore":"Show more","moreOptions":"More options","allEndings":"All endings","results":"Results","promo":"PROMO","sale":"SALE","idnNotSupported":"Sorry! IDN is not supported for this domain extension. Try another one!","invalidTld":"{tld} domains aren’t available to register, but feel free to choose from plenty of other great domains below.","domainRegisterTooltip":"*1st year with a 2 or more years registration","searchErrorTitle":"Sorry, something went wrong on our end","searchErrorDescription":"Our developers have been notified and will try to fix this as soon as possible.","searchErrorAgain":"Please try again"}}')
    }, function(e) {
        e.exports = JSON.parse('{"domainSearch":{"title":"Find the perfect domain name","text":"Enter domain name of your choice and pick any extension name on the next step (choose between {domainsList} and many more)","inputPlaceHolder":"Enter your desired domain name","searchButton":"Search"}}')
    }, function(e) {
        e.exports = JSON.parse('{"foundDomainCards":{"promo":"PROMO","sale":"SALE","addToCart":"Add to Cart","allEndings":"All endings","discount":"Save {discount}%","domainTaken":"Sorry, this domain is already taken","notAvailable":"Domains aren’t available to register, but feel free to choose from plenty of other great domains below.","serverError":"Server error: please try to press \'Add to cart\' again.","privacyTooltip":"Domain privacy protection hides your personal information. It helps to avoid spam and keeps your data safe from the public.","domainInFocusTooltip":"Domain privacy protection hides your personal information. It helps to avoid spam and keeps your data safe from the public.","promoCardTooltip":"Premium domains are high-value domains that have the potential to become popular web addresses with strong branding opportunities.","domainIsAvailable":"Domain is available!","domainIsTaken":"Domain is taken","domainInFocus":"Domain in focus"}}')
    }, function(e) {
        e.exports = JSON.parse('{"productFeatureList":{"sslCertificate":"Free SSL Certificate","accessManagement":"Access Management","liteSpeedWp":"LiteSpeed WordPress Module","phpVersionControl":"PHP Version Control","ecommerceOptimization":"eCommerce Optimization","wpInstallation":"1-Click WordPress Installation","wpCliSsh":"WP-CLI and SSH Access ","freeMigration":"Free Migration","customerSupport":"24/7/365 Customer Support","gitIntegration":"Git Integration","regularBackups":"Regular Backups","multilingualChat":"Multilingual 24/7 chat and email service","automaticWpUpdates":"Automatic WordPress Updates","weeklyBackups":"Free weekly backups ","uptimeGuarantee":"99.9% Uptime Guarantee","optimizedForWordpress":"Optimized for WordPress","ddosProtection":"DDoS Protection","professionalEmail":"Professional Email Address","unlimitedBandwidth":"Unlimited Bandwidth","freeDomain":"Free Domain","cloudflareCdn":"Cloudflare CDN","premiumFeatures":"Premium features for less","freeEmail":"Free email ","moneyBack":"30-day money-back guarantee","fastServers":"Extremely fast servers - server response time is 43 milliseconds","ssdStorage":"100 GB SSD storage","unmeteredTraffic":"Unmetered traffic (unlimited GB)","smoothOnboarding":"Smooth onboarding/migration","extraSecurity":"Extra security with 2-Factor authentication","phpSpeedBoost":"PHP Speed Boost","autoScriptInstaller":"Auto Script Installer","unlimitedSslCertificates":"Unlimited free SSL certificates"}}')
    }, function(e) {
        e.exports = JSON.parse('{"affiliatesHeader":{"recommendedBy":"Recommended by"}}')
    }, function(e) {
        e.exports = JSON.parse('{"errors":{"fieldIsRequired":"This field is required","invalidPassword":"Password must contain at least one number, one symbol, one uppercase, and lowercase, only latin letters, and 8 to 50 characters","invalidEmail":"Invalid email format","passwordsDoNotMatch":"Passwords do not match","passwordDoesNotMeetRequirements":"Password does not meet the requirements","invalidName":"Entered Name is invalid. Please try again."}}')
    }, function(e) {
        e.exports = JSON.parse('{"rules":{"oneNumber":"One number","oneSymbol":"One symbol","oneLowercase":"One lowercase letter","oneUppercase":"One uppercase letter","numberOfChars":"Use 8-50 characters","latinOnly":"Only Latin letters","passwordsMatch":"Passwords match"}}')
    }, function(e) {
        e.exports = JSON.parse('{"homepage":{"header":{"heading":"Fast and Secure Web Hosting","descriptionPreload":"Up to {discount}% OFF Web Hosting Plans + ","descriptionSSL":"Up to {discount}% OFF Web Hosting Plans + Free SSL.","descriptionSSLDDoS":"Up to {discount}% OFF Web Hosting Plans + Free SSL & DDoS protection.","timer":{"title":"The deal ends in:","seconds":"seconds","minutes":"minutes","hours":"hours","days":"days"},"buttonText":"Start Now","priceBadgeText":"Plans from","pricePeriod":"mo"},"pricingTable":{"heading":"All-In-One Web Hosting","description":"We prepared the best web hosting plan for you to start. You will be able to adjust plans as you go - our custom-built algorithm will provide suggestions based on your usage."},"hostingPlansListSection":{"title":"Our services include:","freeSslCertificate":"Free SSL","accessManagement":"Access Management","eCommerceOptimization":"eCommerce Optimization","freeMigration":"Free Migration","regularBackups":"Backups","ddosProtection":"DDoS Protection","phpSpeedBoost":"PHP Speed Boost","liteSpeedWordPressModule":"LiteSpeed WordPress Module","oneClickWordPressInstallation":"One-Click WordPress Installation","customerSupport":"24/7/365 Customer Support","autoScriptInstaller":"Auto Script Installer","uptimeGuarantee":"99.9% Uptime Guarantee"},"easyToSetUp":{"overline":"SIMPLE AND INTUITIVE","heading":"Easy to setup","description":"Getting your website live is as simple as a click of a button. Everything you need - provided in a clear way.","link":"Learn more","imageAlt":"Easy setup"},"simplyFast":{"overline":"PERFORMANCE AND SPEED","heading":"Simply fast websites","description":"Website speed can slow or grow your business. Delight your visitors with a lightning fast website.","link":"Learn more","imageAlt":"Fast websites"},"wordpressEasy":{"overline":"GREAT WORDPRESS EXPERIENCE","heading":"WordPress made easy","description":"Start your website with an automatic 1-click WordPress installation. The backend is powered by LiteSpeed caching and advanced optimization to ensure your websites are fast, reliable and secure.","link":"Learn more","imageAlt":"WordPress made easy"},"chatSupport":{"overline":"PROFESSIONAL AND HANDS-ON","heading":"24/7/365 Chat Support","description":"Our team of experts will solve technical issues to get your websites up and running. Anytime.","link":"Contact us","imageAlt":"24/7/365 chat support"},"scalability":{"overline":"FLEXIBLE AND SCALABLE","heading":"From micro to large-scale","description":"Different projects require different technologies. Pick a plan that matches your current needs, then upgrade and scale as your website grows.","link":"See all products","imageAlt":"From micro to large scale"},"userFriendlyControlPanel":{"title":"User-Friendly Control Panel","easeOfUse":{"subtitle":"Ease of Use","description":"Hostinger Panel is extremely user-friendly and can be used by those with little experience in website development."},"powerful":{"subtitle":"Exceptional Speed","description":"A wide variety of tools to satisfy advanced user and website developer needs."},"wordpressOptimized":{"subtitle":"WordPress Optimized","description":"Get more speed, better SEO, visitor retention and conversions with our custom-built WP optimization stack and LiteSpeed cache."}},"clientReviews":{"cristianReview":"I chose Hostinger mainly because of the options to expand the project as much as needed in terms of servers and data processing.","cristianRole":"Digital Entrepreneur"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"homepageUplift":{"header":{"heading":"Everything You Need to Create a Website","description":"Join <span class=\\"number-of-customers-counter\\">{numberOfCustomers}</span> website owners who are building their businesses online.","buttonText":"Get Started"},"pricingBanner":{"title":"Web Hosting","description":"We have prepared an all-in-one website hosting plan which has everything you need for a high performance website."},"allInOneWebsite":{"heading":"All-in-one Website Solution","featuresList":{"first":"Manage up to {numberOfWebsites} websites.","second":"Register a personal domain name for free.","secondTooltip":"After signing up for a 12, 24, or 48-month hosting plan, you get a free domain for one year. Choose from {freeDomainList} domains. After the first year, your domain will renew at the regular rate. Contact Customer Support to get information on the regular rate for your particular domain. Please note that you won\'t be able to transfer newly registered domains to another registrar during the first {numberOfDays} days of the registration period.","third":"Set up a professional business email address.","thirdTooltip":"Create up to {numberOfEmails} domain-based email addresses and forwarders at no-cost. This feature comes with a friendly webmail interface and a separate email service storage limit of {storageLimit} per mailbox.","fourth":"Optimize your workflow with managed WordPress hosting.","fifth":"Launch websites quickly with our Website Builder."},"reviewCards":{"first":{"text":"Easy to use, intuitive and fluid interface, support always willing to assist in problems that may appear.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/5b4570739d2def0af465dc12"},"second":{"text":"Easy to use platform. Very good and fast support. Highly recommended.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/5dc1619160485808b81afed3"},"third":{"text":"Even though I am a newbie in this world it has been very easy for me to understand and manage my site.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/5c23cebb9d37800a10574303"}}},"maximizeWebsiteSpeed":{"heading":"Maximize Website Speed","featuresList":{"first":"Maximize performance with LiteSpeed Web Server technology.","second":"Enjoy optimized performance with advanced cache solutions.","third":"Host your website in any of our server locations: USA, United Kingdom, Brazil, Singapore, Lithuania, India, and the Netherlands."},"reviewCards":{"first":{"text":"Speed test results of our Hostinger US test site came back with a worldwide average of a blazing fast 143 ms, which ranks them as one of our A+ top tier hosts!","icon":"bitcatcha-dark","iconBottom":"-","link":"-"},"second":{"text":"If you have a small business website, an online store, or a growing blog, your website can easily handle sudden traffic spikes.","icon":"wpbeginner-dark","iconBottom":"-","link":"-"},"third":{"text":"The average loading time of my fully-fledged landing page was a phenomenal 1.56s, and uptime over a few months of testing was upwards of 99.99%, exactly as promised.","icon":"website-planet-dark","iconBottom":"-","link":"-"}}},"customerSupport":{"heading":"Our Team is Here to Help You 24/7/365","featuresList":{"first":"Receive help from our agents anytime via live chat support.","second":"Follow step-by-step video walkthroughs and guides.","third":"Access a vast knowledgebase of in-depth tutorials."},"reviewCards":{"first":{"text":"One of the best customer service you can find. Instant support. Patient, detailed and very hands-on support. I am a fan!","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/61e9c6aea16c1e751f6face9"},"second":{"text":"The best support in the industry. Amazing. Never fails to impress. Keep it up.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/6249a678c7628b203ba129e4"},"third":{"text":"Support is fast and good. A company that still puts the customer first!","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/5f2cf1e51a5a69073c6e7c20"}}},"joinWebsiteOwners":{"title":"Join {numberOfOwners} Website Owners","buttonText":"Get Started"},"advancedSecurityFeatures":{"heading":"Advanced Security Features","featuresList":{"first":"Get unlimited SSL security certificates to encrypt your websites’ traffic.","second":"Protect your website from DDoS attacks with Cloudflare protected nameservers.","third":"Secure your files with automatic backups.","fourth":"Ensure your website is online with our 99.9% uptime guarantee."},"reviewCards":{"first":{"text":"Hostinger proved itself a reliable web hosting service. In fact, our test site didn\'t go down once during the 14-day observation period.","icon":"pcmag-light","iconBottom":"-","link":"-"},"second":{"text":"Plans include SSL certificates and all servers have an advanced security module to protect your data.","icon":"cnet-light","iconBottom":"-","link":"-"},"third":{"text":"With DDoS protection, auto-updates, automatic website backups, and other security measures, you can rest assured that your website is secured.","icon":"sfgate-light","iconBottom":"-","link":"-"}}},"freeMigration":{"heading":"Free Migration","featuresList":{"first":"Transfer your website using our free automatic website migration tool.","second":"Our agents will guide you in every step of the way.","third":"Your website will be transferred within 24 hours."},"reviewCards":{"first":{"text":"I have migrated to Hostinger few months ago. I am extremely satisfied with the hosting, and with their support.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/602fe4bcf85d7509d8de4809"},"second":{"text":"Migrated over a website and email from another provider. Hostinger\'s UI is easy to use and the support was quick, friendly, and very helpful.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/5f91e788798e6f04a41b107c"},"third":{"text":"Very positive experience as a new customer. I migrated my website hosting and the support was amazing and very responsive.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/5d8baee23585c70688f43f7d"}}},"clientReviews":{"title":"Featured Client Stories","first":{"text":"Hostinger impressed me with amazing customer experience and effortless migration from my previous hosting provider.","link":"https://www.hostinger.com/blog/jakes-migration-experience","image":"jake","name":"Jake Sinclair","role":"Brand Designer"},"second":{"text":"Support matters to me the most. Your specialists were always there to help me immediately.","link":"https://www.hostinger.com/blog/why-mohamed-chose-hostinger","image":"mohamed","name":"Mohamed Yassen Sattar","role":"Graphic and Web Designer"},"third":{"text":"I was looking for a hosting company that is very intuitive for beginners and very well-configured for good performance.","link":"https://www.hostinger.com/blog/how-jhon-scaled-his-minecraft-business","image":"jhon","name":"Jhon Ortega","role":"Entrepreneur"},"buttonLink":"https://www.hostinger.com/blog/client-stories"},"serverLocations":{"heading":"Data Centers All Around the World","description":"Our web hosting, WordPress hosting, and cloud hosting plans offer server locations in: USA, United Kingdom, France, India, Singapore, Brazil, Lithuania, and the Netherlands."}}}')
    }, function(e) {
        e.exports = JSON.parse('{"webHosting":{"cloudHostingFeatures":{"heading":"Need more power? Try cloud hosting","imageAlt":"Try Cloud Hosting","buttonText":"See all plans"},"header":{"heading":"Web Hosting for Your New Website","description":"Plus a free domain, SSL certificate, and DDoS protection with annual plans.","imageAlt":"Webhosting","features":{"customerSupport":"24/7/365 customer support","sslCertificates":"SSL certificates included"}},"trustPilot":{"title":"Hosting Services Trusted by Thousands","description":"Don’t just take our word for it. We’re the web hosting provider of choice for thousands of happy customers."},"doubleColoredSection":{"liveSupport":{"heading":"24/7/365 Live Support","text":"Worried you won’t get help when you most need it? You shouldn\'t be. Our professional and hands-on support team of real human beings is ready to help 24/7/365."},"topWebsites":{"heading":"Top-Performing Websites with Top Tech","text":"Don’t let poor speed scores bring your website down. From HTTP/3 to self-healing infrastructure, full SSD servers, and unlimited bandwidth, you can offer your visitors the fastest browsing experience.","linkText":"Learn more"},"migrate":{"heading":"Migrate with Ease, for Free","text":"We’re all about your success, not the other way around – meaning that we won’t charge you a penny for migrating your website to Hostinger. On top of that, we’ll take care of the process for you, so you can focus on the things that matter."},"wordpress":{"heading":"Everything You Need for WordPress","text":"Let your WordPress website shine. Get the best results with LiteSpeed-powered servers and custom-built advanced WordPress optimization tools."},"security":{"heading":"We Take Security Seriously","text":"Don’t leave your website vulnerable to cyber attacks. Instead, get in-house developed WAF with Premium and Business web hosting plans and keep your website safe."},"noExpirience":{"heading":"No Experience Required","text":"With Hostinger, you don’t need to be a pro to get started. Thanks to the easy-to-use control panel and intuitive interface, you will be able to launch your website within minutes. Worried about a language barrier? Don’t be – our hPanel is localized for 17 languages."},"firstImageAlt":"Best service and support","secondImageAlt":"Everything for WordPress and security"},"contentTabs":{"heading":"Get the Resources You Need","unmatchedPerformance":{"title":"Unmatched Performance","content":"We take the performance of your website seriously. That’s why we use innovative technologies to power up your website, from HTTP/3 and IPv6 to LiteSpeed web servers and CDN. All Premium and Business plans also come with unmetered bandwidth, meaning that you don’t need to worry about your website’s performance."},"totalSecurity":{"title":"Total Security","content":"The security of your web server is our utmost priority. Thanks to CloudLinux and LVE containerized environment, complete DDoS protection, automated website backups, auto-updates, in-house developed WAF, and other security measures, you can rest assured that your website is secured. Plus, you get a free SSL certificate with all Premium and Business web hosting plans for added site security."},"completeControl":{"title":"Complete Control","content":"With Hostinger, you don’t need to compromise your code or website. So whether you want to experiment with multiple PHP versions or look for ways to optimize your databases, the chances are that we’ve got your back. We offer tools like SSH, WP-CLI, PHP version control, Git integration, MySQL manager, and more to keep you in the driver’s seat."},"globalDataCenters":{"title":"Global Data Centers","contentHtml":"<p>Looking for a hosting partner with data centers in your area? We’ve got you covered. We have data centers in:</p><ul><li>Europe (United Kingdom, France, the Netherlands, Lithuania)</li><li>Asia (Singapore, India)</li><li>North America (the USA)</li><li>South America (Brazil)</li></ul><p>We also offer easy data center location change as self-service. Change your data center location once a month to make your website load faster for your visitors.</p>"},"managedWordpress":{"title":"Managed WordPress","content":"You don’t necessarily need WordPress hosting to enjoy and manage your WordPress site. With one-click WordPress installation, managed auto-updates, and trained expert support, your WordPress website is in good hands. We make managing your WordPress website as easy as it can be."},"wordpressStaging":{"title":"WordPress Staging","content":"Managed WordPress support is just the beginning. With Hostinger, you have access to WordPress production site staging. So you can make a copy of your website, try out different changes to your layout, content, and everything else in-between, and publish your changes only when you are ready."}},"faqs":{"title":"Shared Web Hosting FAQs","description":"Find answers to frequently asked questions about shared website hosting"},"compareTable":{"heading":"Compare All Web Hosting Plans"},"otherHostingOptions":{"title":"Other Hosting Options Available to You","wordpressHosting":"Wordpress hosting","eCommerceHosting":"Ecommerce hosting","phpHosting":"PHP hosting","joomlaHosting":"Joomla hosting","wooCommerceHosting":"WooCommerce hosting","cloudHosting":"Cloud hosting","prestaShopHosting":"PrestaShop hosting","drupalHosting":"Drupal hosting"},"serverLocations":{"heading":"Data Centers All Around the World","description":"We offer server locations in: USA, United Kingdom, France, India, Singapore, Brazil, Lithuania, and the Netherlands."}}}')
    }, function(e) {
        e.exports = JSON.parse('{"wordpressHosting":{"header":{"heading":"Speed up Your Website with Fast WordPress Hosting","description":"Drive more traffic and conversions with our reliable hosting service. Get a guaranteed 99.9% uptime, speed-optimization features, and industry-leading security.","imageAlt":"Sprinter"},"trustPilot":{"title":"Join Thousands of Satisfied Website Owners","description":"We’re pleased to be a top-rated web hosting provider on TrustPilot. See what our clients have to say about our hosting services."},"maxProtectionSection":{"heading":"Maximum Website Protection","imageAlt":"Maximum Website Protection","featuresList":{"first":"Our automatic malware scanner detects and removes malicious files.","second":"Safeguard your website in all areas with an advanced web application firewall.","third":"DDoS mitigation prevents your site from crashing by keeping malicious traffic at bay."},"reviewCards":{"first":{"text":"Hostinger proved itself a reliable web hosting service. In fact, our test site didn\'t go down once during the 14-day observation period.","icon":"pcmag-dark","iconBottom":"-","link":"-"},"second":{"text":"Plans include SSL certificates and all servers have an advanced security module to protect your data.","icon":"cnet-dark","iconBottom":"-","link":"-"},"third":{"text":"With DDoS protection, auto-updates, automatic website backups, and other security measures, you can rest assured that your website is secured.","icon":"sfgate-dark","iconBottom":"-","link":"-"}}},"madeEasySection":{"heading":"WordPress Made Easy","description":"Build your perfect WordPress website in no time.","imageAlt":"WordPress Made Easy","featuresList":{"first":"Set up WordPress in one click with our auto-installer.","second":"Customize your website with our top-rated theme and plugin recommendations.","third":"Get step-by-step guidance to build your website with Hostinger WordPress plugin."},"reviewCards":{"first":{"text":"The panel is very intuitive. Installing WordPress is very simple, as well as creating subdomains, managing files, and activating SSL.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/63b957902338b6d417b293dc"},"second":{"text":"I can manage all the things I need from just one place, and how easy it\'s to configure everything. I moved all my websites to Hostinger.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/643ecae8a2bfe01fc094ffa3"},"third":{"text":"Even if you are not tech-savvy, Hostinger control panel is easy to navigate and makes managing your website a breeze.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/6422d3041f08d0d084915097"}}},"introListSection":{"title":"All-Inclusive WordPress Hosting","subtitle":"Get all the tools you need to run your WordPress website in one place.","uptimeGuarantee":{"heading":"99.9% Uptime Guarantee","paragraph":"Keep your site operational at all times – Hostinger offers a 99.9% uptime guarantee."},"wpCliAndSsh":{"heading":"WP-CLI and SSH","paragraph":"Manage your website from anywhere with WP-CLI, SSH, and SFTP."},"accessManagement":{"heading":"Access Management","paragraph":"Working with clients? Share and manage access with ease."},"professionalEmailAddress":{"heading":"Professional Email Address","paragraph":"Create up to 100 domain-based email addresses – completely free."},"freeSsl":{"heading":"Free SSL","paragraph":"Running multiple websites? You’ll get unlimited free SSL certificates to keep them all safe."},"contentDeliveryNetwork":{"heading":"Content Delivery Network","paragraph":"Boost your website\'s speed scores by up to 40% with Hostinger CDN.","badgeText":"Beta"}},"customerFullSupportSection":{"heading":"24/7 World-Class WordPress Support","description":"Ran into trouble? Contact our Customer Success team any time via live chat.","imageAlt":"24/7 World-Class WordPress Support","featuresList":{"first":"Receive professional WordPress support from our Customer Success agents.","second":"Get immediate help – our median response time is less than 3 minutes.","third":"Our specialists are available round-the-clock and speak multiple languages."},"reviewCards":{"first":{"text":"They are the best when it comes to ease of use and definitely the best immediate support you receive compared to others.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/6438cc1c746ca7dfea090728"},"second":{"text":"Hostinger has been the best web hosting provider I\'ve used. What sets it apart is its exceptional customer support.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/64354796520b4a84cd0df059"},"third":{"text":"Hostinger’s hosting and website management software are excellent. These are only surpassed by the quality of their support.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/users/6452f9ac04f7880012c9cba9"}}},"clientReviews":{"title":"Trusted by WordPress Site Owners Across the Globe","first":{"text":"If the customer comes to us, they usually want us to give them the best solution. When that happens, 99% of the time, we build a WordPress site for them on Hostinger.","link":"https://www.hostinger.com/blog/rsnl-creative","image":"dino-v","name":"Dino Valdez","role":"RSNL Creative"},"second":{"text":"Hostinger has been super reliable. We’ve pulled big sales off of the back of the website, and consistent reliability has been key. It helped us put a lot of traffic through the site. I don’t think there’s ever been downtime.","link":"https://www.hostinger.com/blog/sureshot-brewing","image":"james","name":"James Leaver","role":"Sureshot Brewing"},"third":{"text":"We saw immediate security improvements after moving to Hostinger, which convinced us to migrate all of our clients.","link":"https://www.hostinger.com/blog/coletivo-estudio","image":"douglas","name":"Douglas Souza","role":"Coletivo Estúdio"}},"managedHostingSection":{"heading":"Managed WordPress Hosting","description":"Make the most out of WordPress with our feature-rich hosting.","imageAlt":"Managed WordPress Hosting","featuresList":{"first":"Make changes to your website safely with the one-click staging tool.","second":"Automatic WordPress updates keep your site secure at all times.","third":"Protect your data with automatic backups.","forth":"Get a complete toolkit – WP-CLI, SSH access, Git integration, and PHP version control."},"reviewCards":{"first":{"text":"I\'ve been a web developer for 20 years. I trust Hostinger to host my clients\' websites. It\'s so easy to set up and deploy websites on their control panel.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/users/6401324c0122b000125e5acd"},"second":{"text":"Never had an issue, the dashboard is top-notch. I use Hostinger for my digital marketing agency, with 100+ clients hosted on their servers.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/users/644aced772c55b0013168b90"},"third":{"text":"The fast speed, control panel, and anti-malware are excellent. The service is great, with many features that other companies don’t offer.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/63c597982338b6d417bbe282"}}},"joinWebsiteOwners":{"title":"Join {numberOfOwners} Website Owners","buttonText":"Get Started"},"aiToolsSection":{"heading":"Launch Your Site Fast With WordPress AI Tools","imageAlt":"Launch Your Site Fast With WordPress AI Tools","featuresList":{"first":"<b>Easy to use.</b> Generate unique website content by just describing what you need.","second":"<b>Save money.</b> No need to hire a copywriter to get your WordPress site live.","third":"<b>Save time.</b> Say goodbye to writer’s block – our AI is always having a good writing day.","forth":"<b>AI Images.</b> Don’t waste time searching for the best images for your site."},"badgeText":"Coming soon"},"lightningFastSection":{"heading":"Lightning-Fast Performance","description":"Faster load times mean better user experience, better search engine optimization, and higher conversion rates.","imageAlt":"Lightning-Fast Performance","badgeText":"Beta","featuresList":{"first":"Boost your site performance with LiteSpeed web servers and the LSCWP Cache plugin.","second":"Our in-house CDN ensures fast loading times, no matter the visitor’s location.","third":"Enable Object Cache and decrease website response time by up to 3x.","forth":"IPv6 and HTTP/3 provide low latency and fast data transfer. "},"reviewCards":{"first":{"text":"Speed test results of our Hostinger US test site came back with a worldwide average of a blazing fast 143 ms, which ranks them as one of our A+ top tier hosts!","icon":"bitcatcha-dark","iconBottom":"-","link":"-"},"second":{"text":"If you have a small business website, an online store, or a growing blog, your website can easily handle sudden traffic spikes.","icon":"wpbeginner-dark","iconBottom":"-","link":"-"},"third":{"text":"The average loading time of my fully-fledged landing page was a phenomenal 1.56s, and uptime over a few months of testing was upwards of 99.99%, exactly as promised.","icon":"website-planet-dark","iconBottom":"-","link":"-"}}},"freeMigration":{"heading":"Free WordPress Website Migration","description":"Hosting a WordPress site elsewhere? We’ve got you covered.","linkText":"Migrate Now","featuresList":{"first":"It only takes one click – send us a migration request, and we’ll move your website.","second":"Our dedicated migration team will ensure a smooth transfer from start to finish.","third":"Your website will be migrated in less than 24 hours."}},"forWpCommunity":{"heading":"Hostinger for the WordPress Community","description":"Hostinger is a proud participant in WordPress Five for the Future. Our team is happy to contribute 5% of its resources to make WordPress a better platform for all.","imageAlt":"Hostinger for the WordPress Community"},"tutorials":{"title":"Master WordPress with Our Tutorials","description":"From website creation and hosting account management to site optimization, our tutorials will show you how to make the most of WordPress."},"faqs":{"title":"WordPress Hosting FAQs","description":"Find answers to frequently asked questions about WordPress Hosting"},"compareTable":{"heading":"Compare All WordPress Hosting Plans"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"emailHosting":{"header":{"heading":"Professional Email Hosting","description":"Look professional, build trust, and strengthen your brand with a custom email from Titan"},"stepsSection":{"title":"Everything for your email needs, at your fingertips","headingFirst":"Choose Your Email Hosting Service","descriptionFirst":"Pick between Business Email service for {productPriceBusiness}/user or Enterprise Email service for {productPriceEnterprise}/user.","headingSecond":"Proceed to the Checkout","descriptionSecond":"Enter your payment details, and get redirected to the management area to create your first custom email address.","headingThird":"Start Emailing","descriptionThird":"Follow the final steps to set up your business email account and start sending emails."},"faqs":{"title":"Email Hosting FAQs","description":"Find answers to frequently asked questions about Email Hosting"},"imageSections":{"knowYourRecipient":{"heading":"Know when your recipient opens your emails","description":"Don\'t lose sleep wondering if your prospect read that crucial quote. Get notified the moment your email gets opened with Read Receipts."},"everyEmail":{"heading":"Don\'t reinvent the wheel for every email","description":"Save time by saving your frequently sent responses as Email Templates for easy access."},"followUp":{"heading":"Follow-up on time, every time","description":"Never drop the ball midway through a conversation with Follow-up Reminders that let you circle back on important emails at the right time, every time."},"writeNowSendLater":{"heading":"Write now, send later","description":"With Send Later, give your messages the attention they deserve by making sure they\'re sent at the optimal time for your recipient."},"sendAsAlias":{"heading":"Send as alias","description":"Reply to emails coming to your email alias using the alias identity and not necessarily from your actual email address."},"collaboration":{"heading":"Take collaboration to the next level","description":"Schedule your meetings, start video calls and manage your contacts with Titan\'s powerful built-in calendar and contacts apps."},"existingEmails":{"heading":"Import your existing email and contacts","description":"Move the messages and email addresses sitting in your old accounts to seamlessly transition to your new business email."},"security":{"heading":"Never stress security","description":"Get peace of mind with Titan\'s advanced security measures to protect your accounts from spam, malware, ransomware, phishing attacks and more."},"effectiveBusiness":{"heading":"Stay up and running with Titan","description":"Titan offers a guaranteed service uptime, zero data loss and 24/7 support."},"customDkim":{"heading":"Custom DKIM","description":"Get an additional layer of security that signs your email and ensures your recipient that you\'re the legitimate and verified sender i.e the actual owner of the domain from which the email is sent."}}}}')
    }, function(e) {
        e.exports = JSON.parse('{"emailHostingOtherLocales":{"header":{"heading":"Get Professional Email Hosting for Your Business","description":"An email address that matches your custom domain will make your brand look more credible."},"stepsSection":{"title":"It Only Takes a Few Clicks to Set It Up","choseEmailHostingPlan":{"title":"Choose an Email Hosting Plan","description":"Running a new business? Go with the <strong>{productPriceStarter}</strong> Business Starter plan. If you need more resources, the <strong>{productPricePremium}</strong> Business Premium plan is perfect. Note that prices are per mailbox."},"proceedToCheckout":{"title":"Proceed to Checkout","description":"Select the number of mailboxes and subscription period. Once you’ve completed the payment process, you will arrive at your hosting account dashboard."},"configureYourEmailHosting":{"title":"Configure Your Email Hosting","description":"Finally, create an email account, set up the DNS settings, and sync your email to other devices. All that’s left to do is to send your emails."}},"doubleColoredSection":{"professionalEmailAddressForYourBusiness":{"heading":"Professional Email Address for Your Business","text":"For small business owners, your email doubles as your online identity and marketing communication channel. Show professionalism with a domain-based business email address. Make your brand look instantly credible and win the trust of potential customers."},"securePrivateAndAdFreeEmails":{"heading":"Secure, Private, and Ad-Free Emails","text":"Unlike with free personal email services, your data is safe with us. Get industry-leading security measures to protect your email from unauthorized parties. Our servers have advanced protection to prevent spam, malware, and phishing attacks."},"999UptimeGuaranteeAnd247CustomerSupport":{"heading":"99.9% Uptime Guarantee and 24/7 Customer Support","text":"Our email hosting service provides unmatched uptime and comes with automated email backups for data loss prevention and disaster recovery. If you need assistance, our 24/7 global support team is always ready to help."},"plentyOfStorageToScaleYourBusiness":{"heading":"Plenty of Storage to Scale Your Business","text":"If you want to grow your business, you need the resources to do it. Our hosted email service offers up to 30 GB of storage space – tons of room to receive and deliver emails. You can send 5000 emails/day and set up to 50 automatic forwarding rules to redirect messages to other email accounts."},"manageYourEmailAccountsFromAnywhere":{"heading":"Manage Your Email Accounts From Anywhere","text":"Whether you’re sending emails from a desktop or a mobile phone, we’ve got you covered. Our email hosting service lets you connect your mail server to iOS or Android mobile devices and email clients like Thunderbird and Outlook."},"quickAndEasySetup":{"heading":"Quick and Easy Setup","text":"Our dashboard and email interface come with an intuitive design, so users of any skill level can use our email hosting services. Plus, our automatic configuration feature makes it easy to set up your account on different devices and mail clients – no need to know about IMAP, POP3, or SMTP."}},"switchToHostingerEmail":{"title":"Switch to Hostinger Email Hosting Today","description":"Our handy Email Import tool makes it quick and easy to move your emails from your current email provider.","buttonText":"Migrate Your Emails Now"},"emailFeaturesSection":{"title":"Professional Email Hosting Features","userFriendlyManagement":{"title":"User-Friendly Management","description":"Hostinger Email comes with an intuitive control panel. It includes everything you need to manage your email accounts – from device configuration to DNS settings. You can also try our easy-to-use webmail client to send emails, organize mailboxes and emails, and add new contacts."},"autoConfiguration":{"title":"Auto-Configuration","description":"Our email servers support IMAP, POP3, and SMTP by default, so you can configure your email hosting with third-party mail clients, such as Apple Mail, Outlook, Thunderbird, or any other email app on your desktop or mobile device. Automatic configuration will make setting up these apps easier."},"automaticEmailFunctions":{"title":"Automatic Email Functions","description":"Make email communications simpler with automation. If you often receive emails outside of office hours, set up auto-replies to let clients know when you’ll return. Redirect incoming messages to multiple accounts using email forwarding and aliases and enable catch-alls to capture emails sent to misspelled email addresses."},"advancedEmailMessagingSecurity":{"title":"Advanced Email Messaging Security","description":"Our email platform supports DKIM, DMARC, and SPF to prevent malicious parties from abusing your outbound email traffic. We also implement carrier-grade content filters against spam and viruses and internal protection for emails sent between accounts within the same domain."},"detailedAccessActionAndDeliveryLogs":{"title":"Detailed Access, Action, and Delivery Logs","description":"The Access and Action Logs in hPanel let you track what happens in your email accounts and monitor them for suspicious activities. Get information about when and where accounts were accessed from, what actions were taken during those sessions, and what emails were sent and received."}},"faqs":{"title":"Email Hosting FAQs","description":"Find answers to frequently asked questions about Email Hosting."}}}')
    }, function(e) {
        e.exports = JSON.parse('{"buyHosting":{"header":{"heading":"Buy Hosting You Can Rely on From Day One","description":"Get affordable web hosting package designed to help you start and run a successful website – regardless of your experience.","buttonText":"Buy Web Hosting"},"fastestWebHosting":{"heading":"Fastest Web Hosting","description":"Speed is one of the core variables for every online business. It affects everything – from the satisfaction of your site visitors to your SEO ranking. Thanks to Hostinger’s modern infrastructure and top-quality network, we can offer the fastest web hosting in its price range."},"freeDomainAndCertificate":{"heading":"Free Domain Name & SSL Certificate","description":"Enjoy free domain name and build your brand from day one. Get an SSL certificate and encrypt the data exchanged between your site and its visitors. And the best is, you don’t have to spend a penny on that – just buy hosting, choose domain name, and enjoy the new site."},"domainBasedEmail":{"heading":"Domain-Based Email","description":"No more taken email names – you decide what your email handle will look like. And by sending them from @yourdomain.com you make your correspondence look a lot more professional and trustworthy, what can help you acquire new customers for your products and services."},"customerSupport":{"heading":"24/7/365 Customer Support","description":"Need help with your new hosting? Want to migrate your old site? Now it doesn’t matter if you’re an early bird or a night owl - just shoot us a message at any time of the day or night. Our team members are waiting to assist you around the clock."},"wordPressOptimized":{"heading":"WordPress - Optimized Hosting","description":"Did you know that an estimated 1 in 3 sites is built on WordPress? It’s no surprise – in the end, it’s one of the most beginner-friendly content management systems with thousands of themes and plugins to choose from. And it runs even better on one of Hostinger packages!"},"websiteBuilder":{"heading":"Website Builder","description":"Build a website with no coding skills with our free drag-and-drop website builder. Just put the selected elements on the site, edit them using a convenient menu and enjoy the result. It doesn’t get any easier than that!"},"cmsListSection":{"title":"Buy Hosting That Makes Building Any Website Easy","subTitle":"From Blogs to business websites and e-commerce stores. Thanks to the integration with top website management systems, you can easily create any site you need – even if you’ve never developed one before. And it takes less than 5 minutes to get started.","wordpress":{"title":"WordPress","text":"The world’s most popular CMS which can be used to build any site you can imagine. Thanks to the community of thousands of enthusiastic developers, it’s hard to find a feature which cannot be added to the site using one of its great plugins."},"magento":{"title":"Magento","text":"One of the most trusted open-source e-commerce platforms. Build beautiful and fast online store and manage an inventory of tens, hundreds, or even thousands of products easily. Sky is the limit!"},"drupal":{"title":"Drupal","text":"Free open-source content management system used by government sites, NGOs, and universities around the world. While advanced, it requires no programming skills to get started and build a powerful website."},"joomla":{"title":"Joomla","text":"Used by start-ups and big businesses alike, Joomla is mostly popular for its great flexibility thanks to the smart extension system which covers templates, modules, components and plugins."},"prestashop":{"title":"PrestaShop","text":"An open-source e-commerce platform powering over half a million online stores worldwide. Just like other content management systems, it comes with multiple addons and themes which you can install to enhance your store."},"woocommerce":{"title":"WooCommerce","text":"The most advanced WordPress e-commerce solution. Sell products and services on your personal blog or create a professional store from scratch. Choose from thousands of WooCommerce-focused themes and plugins."}},"cheapWebHosting":{"heading":"Today high quality web hosting can be cheap & we have proved it.","description":"Hostinger helps smart people to save a lot by providing exceptionally cheap web hosting with ultimate quality, premium web hosting features & fanatically dedicated live chat support. No matter where you are on your web building journey, you need to know that it’s possible to save smart today! Here are only few of the many features that make Hostinger a pioneer of affordable, premium & inexpensive web hosting."},"faqs":{"title":"Domain Checker FAQs","description":"Find answers to frequently asked questions about Domain Checker."}}}')
    }, function(e) {
        e.exports = JSON.parse('{"vpsHosting":{"header":{"heading":"Be in Full Control With VPS Hosting","description":"Get the power, flexibility and speed you need with our virtual private server hosting."},"tutorials":{"title":"VPS Tutorials You Might Like","description":"Find all the information you need in one place with our VPS tutorials."},"faqs":{"title":"VPS Hosting FAQs","description":"Find answers to frequently asked questions about our VPS Hosting plans."},"tabsSection":{"overline":"Operational system templates","heading":"Instant OS Deployment for Your VPS Hosting","centOS":{"operatingSystem":{"title":"CentOS Operating System","description":"Lightweight, fast and reliable - these are the core tenets of CentOS. It is one of the best enterprise-level operating systems offering speed and stability without impacting security. Inspired by Red Hat Enterprise Linux, CentOS is also a formidable option for VPS hosting."},"operatingSystemVersion":{"title":"CentOS Server Versions","description":{"centOs764bit":"CentOS 7 64bit","centOs764bitMin":"CentOS 7 64bit minimal","centOs764bitCentOsPanel":"CentOS 7 64bit with CentOS Panel","centOs764bitCyberPanel":"CentOS 7 64bit with Cyber Panel","centOs764bitDirectAdmin":"CentOS 7 64bit with DirectAdmin","centOs764bitVestaCp":"CentOS 7 64bit with VestaCP control panel","centOs764bitWebmin":"CentOS 7 64bit with Webmin","centOs764bitWebminVirtualminLamp":"CentOS 7 64bit with Webmin/Virtualmin/LAMP","centOs764bitWebuzo":"CentOS 7 64bit with Webuzo control panel","centOs764bitCpanelWhm":"CentOS 7 64bit with cPanel and WHM","centOs764bitCpanelWhmTooltip":"Requires a license purchased additionally.","centOs764bitPleskOnyx":"CentOS 7 64bit with Plesk Onyx","centOs764bitPleskOnyxTooltip":"Requires a license purchased additionally."}}},"ubuntu":{"operatingSystem":{"title":"Ubuntu Operating System","description":"Ubuntu is one of the most popular OS picks for VPS web hosting. The open-source nature of Ubuntu makes it a perfect tool for users that want a flexible and stable hosting environment. This OS is ideal for any online project that demands high speed, security, and a customizable stack."},"operatingSystemVersion":{"title":"Ubuntu Server Versions","description":{"ubuntu140464bit":"Ubuntu 14.04 64bit","ubuntu160464bit":"Ubuntu 16.04 64bit","ubuntu160464bitMin":"Ubuntu 16.04 64bit minimal","ubuntu160464bitLxde":"Ubuntu 16.04 64bit with LXDE Desktop","ubuntu160464bitWebuzo":"Ubuntu 16.04 64bit with Webuzo control panel","ubuntu180464bit":"Ubuntu 18.04 64bit","ubuntu180464bitMin":"Ubuntu 18.04 64bit minimal","ubuntu180464bitVestaCp":"Ubuntu 18.04 64bit with VestaCP control panel","ubuntu180464bitWebmin":"Ubuntu 18.04 64bit with Webmin","ubuntu180464bitWebminVirtualminLamp":"Ubuntu 18.04 64bit with Webmin/Virtualmin/LAMP","ubuntu180464bitPleskOnyx":"Ubuntu 18.04 64bit with Plesk Onyx","ubuntu180464bitPleskOnyxTooltip":"Requires a license purchased additionally.","ubuntu180464bitHestiaCp":"Ubuntu 18.04 64bit with HestiaCP","ubuntu200464bit":"Ubuntu 20.04 64bit","ubuntu220464bit":"Ubuntu 22.04 64bit","ubuntu220464bitNodeJsOpenLiteSpeed":"Ubuntu 22.04 64bit with Node.js and OpenLiteSpeed","ubuntu220464bitDjangoOpenLiteSpeed":"Ubuntu 22.04 64bit with Django and OpenLiteSpeed","ubuntu220464bitRailsOpenLiteSpeed":"Ubuntu 22.04 64bit with Rails and OpenLiteSpeed","ubuntu220464bitWordPressOpenLiteSpeed":"Ubuntu 22.04 64bit with WordPress and OpenLiteSpeed","ubuntu220464bitJoomlaOpenLiteSpeed":"Ubuntu 22.04 64bit with Joomla and OpenLiteSpeed","ubuntu220464bitDrupalOpenLiteSpeed":"Ubuntu 22.04 64bit with Drupal and OpenLiteSpeed"}}},"debian":{"operatingSystem":{"title":"Debian Operating System","description":"Stability and speed - the main advantages of having Debian as your web server OS. Significant speed benefits, bug tracking systems, and multiple architectures make it flexible and reliable. Easy upgrades, strict security, and a top-notch packaging system make it convenient."},"operatingSystemVersion":{"title":"Debian Server Versions","description":{"debian964BitVestaCP":"Debian 9 64bit with VestaCP control panel","debian964BitMin":"Debian 9 64bit minimal","debian964BitWebmin":"Debian 9 64bit with Webmin","debian964BitWebminVirtualminLamp":"Debian 9 64bit with Webmin/Virtualmin/LAMP","debian1064Bit":"Debian 10 64bit","debian1064BitHostingerGamePanel":"Debian 10 64bit with Hostinger Game Panel","debian1164Bit":"Debian 11 64bit","debian1164BitHestiaCP":"Debian 11 64bit with HestiaCP"}}},"tabs":{"centOS":"CentOS","ubuntu":"Ubuntu","debian":"Debian"}},"introductionListSection":{"title":"VPS Hosting That Gives You More Power","fullControlAndFlexibility":{"heading":"Full Control and Flexibility","paragraph":"Enjoy the flexibility of VPS hosting and have full control over your operating system. The full root access lets you configure the server environment to your needs and decide how you dedicate your resources, no matter if you’re looking to host one large website or multiple smaller sites."},"increasedPerformance":{"heading":"Increased Performance","paragraph":"All of the resources are yours only, including the CPU, RAM, and disk space. No need to worry about other people’s site traffic affecting your website’s performance. VPS hosting is powerful and stable, which is why it’s recommended as the top option for hosting websites and online apps. "},"simpleToScale":{"heading":"Simple to Scale","paragraph":"If you need to upgrade your server environment because you require more resources, simply choose a different VPS plan. No need to transfer files or be at risk of any downtime, just upgrade the plan through your VPS control panel. "},"multipleDataceners":{"heading":"Multiple Datacenters","paragraph":"We have data centers in Lithuania, Singapore, the United States, the United Kingdom, and the Netherlands. This ensures maximum reliability and the lowest possible latency regardless of where you’re based. Choose a data center that’s closest to your target audience’s location and enjoy unmatched hosting services. "},"security":{"heading":"Security","paragraph":"Your virtual server will be kept secure by BitNinja’s full-stack server protection and the built-in advanced DDoS protection. The automated backups and live snapshots will let you restore your site immediately if it ever goes down, and a dedicated IP for your VPS server would further enhance security in general."},"easyToManage":{"heading":"Easy to Manage","paragraph":"All our VPS plans come with a user-friendly control panel for easy VPS server management. Keep track of all your resources live through the dashboard, and make necessary adjustments as you go. "}},"compareTable":{"heading":"Simple, Fast, and Reliable VPS Hosting Plans","note":"*All our VPS plans are based on OVZ virtualization technology."},"imageSection":{"overline":"VPS Features","title":"Our VPS Hosting Infrastructure","ssdAndProcessingPower":{"heading":"SSD and Processing Power","paragraph":"All of our VPS servers come with the latest Intel Xeon processors, terabytes of NVMe SSD disk space, and 512 GB of RAM per server. This provides you with enough processing power for any type of medium or large-scale online project."},"100MbpsNetwork":{"heading":"100 Mb/s Network","paragraph":"Enjoy impressively fast website loading times and a 99.99% server uptime guarantee. Let your visitors enjoy a smooth user experience without worrying about unexpected downtimes.  "},"aiPoweredFirewall":{"heading":"AI Powered Firewall","paragraph":"Our AI firewall utilizes advanced machine learning techniques to analyze network traffic and block malicious activity in real time, providing an extra layer of security for your virtual private server."},"fullRootAccess":{"heading":"Full Root Access","paragraph":"Have complete control over your hosting environment by taking advantage of the full root access. Customize your VPS server to your liking and track all resources in real-time. "},"dedicatedIPv6":{"heading":"Dedicated IPv6 ","paragraph":"With our native /64 IPv6 block infrastructure you will avoid latency, networking issues, and blacklisting. Keep your connections secure and efficient, whilst using the latest IP technologies. "},"backupsAndSnapshots":{"heading":"Backups and Snapshots","paragraph":"Rest assured that your website can be restored within minutes thanks to automated backups and manual live snapshots. "}}}}')
    }, function(e) {
        e.exports = JSON.parse('{"cloudHosting":{"header":{"heading":"Cloud Web Hosting","description":"The power of cloud computing with the simplicity of shared hosting."},"tutorials":{"title":"Cloud Hosting Tutorials to Get You Started","description":"Find all the information you need in one place. Answers to your questions are only a click away."},"faqs":{"title":"Cloud Hosting FAQs","description":"Find answers to frequently asked questions about cloud web hosting."},"serverLocations":{"overline":"What locations for data centers are available?","heading":"Discover Our Cloud Servers Around the World","description":"We offer server locations in: USA, United Kingdom, France, India, Singapore, Brazil, Lithuania, and the Netherlands."},"servicesSection":{"overline":"Why Choose Cloud Hosting?","title":"The Perfect Environment For Your Success","roomForGrowth":{"title":"Room for Growth","description":"With Cloud Hosting, you can start small and grow big. Get more power as your website expands by having all the resources at your fingertips."},"4xMoreSpeed":{"title":"4x More Speed","description":"Decrease website loading time and improve user experience. Take advantage of our high-speed CPU, a large amount of RAM, and utilize the data centers tactfully placed around the world."},"fullyManaged":{"title":"Fully Managed","description":"Have expert support available 24/7, helping you every step of the way. Focus all efforts on making the most out of your project while we handle the technical issues."}},"coloredSection":{"title":"Faster. Stronger. Dedicated.","description":"Our team of experts will take care of the backend so that you could focus on growing your projects.","guaranteedUptime":{"heading":"Guaranteed 99.9% Uptime","paragraph":"Get near-perfect server uptime and 24/7 monitoring with your web hosting services. Never worry about your website being down again."},"superiorPerformance":{"heading":"Superior Performance","paragraph":"Take full advantage of the speed and power with HTTP/3 and dedicated IP address. No technical knowledge is required."},"powerfulControlPanel":{"heading":"Powerful Control Panel","paragraph":"Enjoy the intuitive control panel that is optimized for all skill levels. Find your way around quickly and easily."}},"simplicityMeetsPerformance":{"title":"Simplicity Meets Performance","dedicatedResources":{"heading":"Dedicated Resources","paragraph":"Cloud hosting plans run on isolated virtual instances. You’ll have total control of all resources and limits through a custom control panel that comes with every Cloud plan."},"instantSetup":{"heading":"Instant Setup","paragraph":"Our Cloud Hosting features instant activation so your project can be up and running in no time at all."},"topLevelDataBackups":{"heading":"Top-level Data Backups","paragraph":"Safety always comes first. Automated daily backups will ensure that your files and databases are safe and sound."},"easyDataCenterChange":{"heading":"Easy Data Center Change","paragraph":"Change your data center location in just a few clicks. No downtime guaranteed."},"integratedCaching":{"heading":"Integrated Caching","paragraph":"Make your projects ultra-quick with an in-built cache manager. Remember, fast websites and high search engine ranking are closely related."},"freeSSL":{"heading":"Free SSL","paragraph":"Build visitor trust with the free SSL certificate included in your web hosting plan."}},"compareTable":{"heading":"Compare All Cloud Hosting Plans"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"googleWorkspace":{"header":{"heading":"Google Workspace: Everything you need to get anything done","description":"It’s the best way to create, communicate, and collaborate. Familiar tools; fewer distractions; more time to make things happen."},"pricingTable":{"heading":"Get Your Google Workspace Plan Now"},"faqs":{"title":"Google Workspace FAQs","description":"Find answers to frequently asked questions about Google Workspace"},"imageSections":{"gmailForBusiness":{"heading":"Get Gmail for Business","description":"Leverage new admin controls, no ads and your own personalized professional addresses. Swap @gmail.com with sales@examples.com."},"stayConntected":{"heading":"Stay Connected With Your Team From Anywhere","description":"Meet safely with your team from anywhere, using the premium video conferencing built on Google’s robust infrastructure."},"workFasterSmarter":{"heading":"Work Faster, Work Smarter","description":"Collaborate on files in real time, set up meetings in a few clicks, and get deadlines and calendar notifications. Google Workspace centralizes every tool you need to be productive."},"protectFromThreats":{"heading":"Designed To Protect You From Threats","description":"Gmail’s machine learning models block 99.9% of spam, phishing and malware threats reaching your inbox, making Google Workspace safe and secure."},"buttonText":"Start now"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"payments":{"header":{"heading":"Payment Methods","description":"You can purchase our services using a wide range of payment methods."},"faqs":{"title":"Payments FAQs","description":"Find answers to frequently asked questions about payment methods."}}}')
    }, function(e) {
        e.exports = JSON.parse('{"minecraftServerHosting":{"header":{"heading":"Fully Customizable Minecraft Server Hosting","description":"Have full control over your game server with a VPS pre-configured for Minecraft hosting."},"featuresSection":{"title":"Minecraft Server Hosting Features","easySetup":{"title":"Easy setup","description":"The onboarding process takes less than five minutes, so you can be back at Minecraft in no time. Simply pick a plan, finish the registration, and launch your game server."},"dedicatedAddresses":{"title":"Dedicated IPv4/IPv6 addresses","description":"With a dedicated IP address, you can secure your Minecraft game server and protect it from DDoS attacks. Plus, get direct and easier access to your server files via FTP."},"automatedBackups":{"title":"Automated backups","description":"Never worry about losing your progress. If anything happens, you can restore your most recent backup from the control panel in seconds and continue building your world."},"multipleServerTypes":{"title":"Multiple Minecraft Server types","description":"All plans include countless server versions for different kinds of Minecraft players. Ranging from Official, Forge, to Spigot, you can easily switch between server types using our Game Panel."},"modPacksPlugins":{"title":"Install Modpacks and plugins","description":"With our plugin and mod automatic installers, you can customize the gameplay to your liking. The full file access also lets you add third-party plugins and mods manually."},"ssdHighClockCpu":{"title":"Fast SSD and high-clock speed CPUs","description":"Our VPS uses premium hardware to create fast and lag-free servers, with terabytes of SSD storage and industry-standard Intel Xeon Processors."}},"faqs":{"title":"Minecraft Server Hosting FAQs","description":"Get answers to frequently asked questions about our game server hosting."},"featuresWithImages":{"easySetup":{"heading":"Easy Setup with Game Panel","paragraph":"Whether you’re a new or experienced Minecraft host, our game control panel makes server management easy. Enjoy a user-friendly interface and full root access to configure the server however you like."},"topLevelDataBackups":{"heading":"Top-level Enterprise Data Backups","paragraph":"Lost your progress due to an accident? No need to start from scratch. Thanks to our RAID-10 technology and automated backups, you can save your data and restore it in seconds from the VPS Hosting’s control panel."},"unlimitedPluginsAndModes":{"heading":"Unlimited Plugins and Mods","paragraph":"Each plan comes with one-click installers for pre-selected plugins and mods to ease the installation process. It’s also possible to install plugins and mods from third-party sources via the File Manager or FTP/SSH."},"ultraLowLatency":{"heading":"Ultra-low Latency","paragraph":"Hostinger has multiple servers across the globe, so you can pick the one closest to you to ensure low latency and great pings for your players. The shorter the distance, the faster the server will perform – the smoother the gaming experience."}}}}')
    }, function(e) {
        e.exports = JSON.parse('{"sslCertificate":{"singleColoredSection":{"title":"The Difference Between Free and Paid SSL Certificates","copy1":"At Hostinger, our free SSL certificate is as secure as the paid ones. We use a domain-validated certificate compliant with Payment Card Industry Data Security Standard (PCI DSS), so it’s a standard SSL that is excellent for protecting all types of websites.","copy2":"Regarding security levels, there’s no difference between free and paid SSL certificates. Both provide strong encryption for securely connecting your site and its visitors.","copy3":"They also display essential indicators to show that the website is risk-free – the HTTPS prefix and padlock icon on the address bar of major browsers.","copy4":"We also renew all certificates automatically and free of charge, providing more convenience for our users and helping them save money."},"header":{"heading":"Get a Free SSL Certificate and Secure Your Site Now","description":"Protect your website and visitors by offering secure and encrypted connections. Build brand trust and improve your search engine rankings with our free SSL Certificate – available for all hosting plans."},"faqs":{"title":"SSL Certificates FAQs","description":"Find answers to frequently asked questions about our SSL certificates and plans."},"whyYouNeedSsl":{"title":"Why Do You Need an SSL Certificate?","secureWebsite":{"heading":"Secure Your Website","paragraph":"Adding an SSL certificate to the site, you protect all private information shared between you and the visitors from unauthorized users. Also, our SSL certificates use 256-bit encryption, the industry standard for data protection."},"complyStandards":{"heading":"Comply With PCI DSS Standards","paragraph":"Online businesses that accept transactions and deal with visitors’ credentials must comply with PCI Security Standards, which include SSL protection. Without this security feature, the website would put its visitors at risk and fail to meet the regulations."},"buildTrust":{"heading":"Build Trust","paragraph":"Enabling SSL protection, your site’s URL will start with HTTPS, and the address bar will also display a padlock icon. These elements show visitors that your website uses SSL and is risk-free, so they know their credentials and transaction details are safe."},"increaseRanking":{"heading":"Increase Your Ranking on Google","paragraph":"An SSL certificate provides an additional layer of security and adds the HTTPS prefix to the site’s URL, which the search engine considers vital parts of a good page experience. That’s why Google is most likely to place SSL-certified websites higher on search results, increasing their visibility and organic traffic."}},"pricingTable":{"title":"Free SSL Certificates With All Our Plans","description":"Purchase one of our hosting plans and receive an SSL certificate for free."},"stepsSection":{"title":"How SSL Certificates Work","cards":{"establishingAConnection":{"title":"Establishing a Connection","description":"Websites will get a public and private key after successfully acquiring or purchasing an SSL certificate. When users access the website, their browser will request its SSL certificate and public key to verify if it’s trustworthy."},"dataEncryption":{"title":"Data Encryption","description":"If it’s successful, the browser will generate two symmetric keys and send one of them to the web server using the public key. Once the server receives the key, it will use its private key to decrypt it. The browser and server can now form a secure connection to transfer information."},"visualIndicators":{"title":"Visual Indicators","description":"A website with a successful SSL installation will have multiple indicators on the address bar – a padlock icon and an HTTPS prefix on the website’s URL. Depending on the type of certificate, site owners can also display a site seal to increase trustworthiness."}}}}}')
    }, function(e) {
        e.exports = JSON.parse('{"cheapWebHosting":{"header":{"heading":"Cheap Website Hosting","description":"Reliable web hosting services at an affordable price."},"pricingTable":{"heading":"All-In-One Affordable Hosting","description":"Low price does not mean low quality. Our cheap web hosting plan includes all the features for your easy start online."},"whyChooseHostinger":{"title":"Why Choose Hostinger as Your Cheap Web Hosting Provider?","technicalSupport":{"heading":"Technical Support 24/7","paragraph":"No matter what aspect of web hosting you may need help with, our customer support team will be by your side to help you learn, grow, and develop your own success. Go with our cheap web hosting services and get professional technical support."},"greatService":{"heading":"Low Price for a Great Service","paragraph":"Reliable shared web hosting for a price that’s hard to beat. Host your website with Hostinger and don’t worry about unpleasant surprises, like hidden fees or bad service."},"easySetupAndControls":{"heading":"Easy Setup and Controls","paragraph":"Our hPanel uses an intuitive design that helps you find your way around quickly and easily. It lets you perform more complex tasks, like creating an FTP account or setting up an email, in no time. You can also use the Autoinstaller to setup WordPress in a matter of minutes."},"highSpeedAndUptimeGuarantee":{"heading":"High Speed and Uptime Guarantee","paragraph":"Having multiple datacenters worldwide lets us provide you with fast loading speed and a 99.99% uptime guarantee. Even with our cheapest plan, you’ll get enough server resources to ensure a smooth user experience and truly low latency."},"hugeResources":{"heading":"Huge Resources for a Great Start","paragraph":"Get 50GB of SSD space, plenty of bandwidth, support of PHP, MySQL, FTP, a domain-based email account, a free SSL certificate, and all the advanced tools you need for a fully-functional website."}},"achieveMore":{"title":"Achieve More With a Small Investment","text":"Begin your online journey today. Learn, create and grow.","perfectForWordPress":{"heading":"Perfect for WordPress","description":"All of our shared hosting plans are optimized for WordPress websites. Each hosting plan comes with a handy 1-click WordPress installer for quick and easy setup. Included WordPress site-building wizard will help you create a WordPress site with ease, while the LiteSpeed web server will ensure it loads fast."},"buildTrustAndReputation":{"heading":"Build Trust and Reputation","description":"Every web hosting plan comes with a free SSL certificate to provide secure connections between your visitors and your site. This does not only keep you and your visitors safe, it also builds credibility and reputation for your brand."},"greatStart":{"heading":"A Great Start is Half the Work","description":"Get ahead with our cheapest plan by gaining access to a feature-rich environment. Our Shared web hosting control panel is intuitive and easy to use, making it easy for you to learn, experiment, and realize your ideas."}},"haveQuestions":{"title":"Have questions?","description":"Our team of customer success specialists is ready to answer any questions you may have, 24/7. Simply drop us a message any time and we’ll help you with whatever it is that you need.","buttonText":"Let’s Chat!"},"planCards":{"title":"Cheap Web Hosting is Not Enough?","text":"Pick web hosting service that fits your project the best."},"faqs":{"title":"Cheap Web Hosting FAQs","description":"Find answers to frequently asked questions about cheap hosting."}}}')
    }, function(e) {
        e.exports = JSON.parse('{"forgotPassword":{"heading":"Forgot password","inputPlaceHolder":"Email","sendButton":"Send reset email","backToLogin":"Back to log in form","sentMessage":"A password reset email will be issued if this user is registered and not using social login.","tiredOfResettingPassword":"Tired of resetting passwords? <a href=\'{nordPassUrl}\' target=\'_blank\' rel=\'noopener noreferrer nofollow\' data-click-id=\'hgr-forgot_password-try_nordpass_button\'>Try NordPass</a>. It’s free"}}')
    }, function(e) {
        e.exports = JSON.parse('{"cyberpanelVpsHosting":{"header":{"heading":"CyberPanel VPS Hosting: The Ultimate Web Hosting Control Panel","description":"Powered by LiteSpeed, CyberPanel empowers users to perform tasks in a faster, more secure and efficient way."},"compareTable":{"heading":"Simple. Fast. Reliable.","note":"Need something different? Check out our <a href=\'{link}\' target=\'_blank\' rel=\'noopener noreferrer nofollow\' data-click-id=\'hgr-cyberpanel_vps_hosting-compare_table-vps_plans\'>VPS Plans</a>."},"cyberpanelFeatures":{"title":"CyberPanel Features","liteSpeedCache":{"title":"LSCache","description":"LiteSpeed Cache offers a built-in module with plugins for dynamic content building. Speed up your WordPress, Joomla, Drupal, MediaWiki, and more."},"git":{"title":"GIT Deployment","description":"Connect your Github and GitLab repos and deploy code in a few clicks via GIT webhooks."},"autoInstaller":{"title":"Auto Installer","description":"What does it take to install WordPress (with LSCache), Joomla and Prestashop on CyberPanel? One click."},"multiCache":{"title":"Multi-object Caching Support","description":"Object caching integration made simple. With CyberPanel you can Integrate objects such as Redis, Memcached, or LiteSpeed Memcached (LSMCD)."},"easyBackup":{"title":"Easy backup and restore","description":"You can backup and/or restore from Google Drive, AWS S3, remote SFTP or local machine in one click."},"quicSupport":{"title":"HTTP/3 & QUIC Support","description":"The latest HTTP protocol ensures better performance for fetching multiple objects at the same time, fast connections, retransmission of lost packets and lowest latency."}},"imageSectionsTop":{"wordpressStaging":{"heading":"WordPress Staging","description":"Avoid unnecessary risks associated with testing on your live site. Experiment, test and change things on staging before pushing it live."},"intuitiveSetup":{"heading":"Intuitive Setup","description":"Server management is easy and effortless. By utilizing OpenLiteSpeed for the webserver, you have access to all the LiteSpeed features."},"webBasedTerminal":{"heading":"Web Based Terminal & Command Line Interface","description":"For those that like to work in a terminal, the CyberPanel affords you the luxury of a command line interface. That allows you to replicate the work you do in the control panel via CLI. With Web Based Terminal, you can access your VPS SSH server and perform tasks from your browser with ease."}},"technologiesUsed":{"title":"Technologies used","openLiteSpeed":{"title":"OpenLiteSpeed","description":"OpenLiteSpeed/LiteSpeed Web server"},"pureFtpd":{"title":"Pure-FTPD","description":"Pure-FTPD file transfer server"},"mariaDb":{"title":"MariaDB","description":"MariaDB database server"},"git":{"title":"GIT","description":"GIT version control system"}},"imageSectionsBottom":{"dockerManager":{"heading":"Docker Manager","description":"Docker manager simplifies Docker Container and image management. Search and pull images from Docker Hub or create Containers from available/pulled images in a few clicks."},"embeddedSecurity":{"heading":"Embedded Security","description":"CyberPanel comes with SpamAssassin to stop email spam and a default FirewallD installation for a heightened sense of protection and security."}},"serverLocations":{"heading":"Servers around the globe","description":"Enjoy lowest latency and unmatched reliability as we deploy in globally connected Tier-3 datacenters.","serverLocations":{"heading":"Servers around the globe","description":"Enjoy lowest latency and unmatched reliability as we deploy in globally connected Tier-3 datacenters."}},"faqs":{"title":"CyberPanel VPS Hosting FAQs","description":"Find answers to frequently asked questions about CyberPanel VPS Hosting"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"login":{"processing":"Processing...","login":"Log in","or":"or","email":"Email","password":"Password","incorrectDetails":"Seems like the details that you entered are not correct. If you registered through social login, please use social login when logging in.","forgotPassword":"Forgot Password?","continueTo":"Continue to","backToLogin":"Back to login page","notYetMember":"Not a member yet? <a href={link} rel=\'noopener noreferrer nofollow\' data-click-id=\'hgr-login-page-choose-plan-button\'>Choose the plan</a> and get started now!","processingFailed":"Processing Failed","serverError":"Server error: please try to return to login page."}}')
    }, function(e) {
        e.exports = JSON.parse('{"register":{"register":"Register","passwordTooShort":"The password must be at least 8 characters.","passwordTooLong":"The password must not be greater than 50 characters.","alreadyHaveAccount":"Already have an account? <a href={link} rel=\'noopener noreferrer nofollow\' data-click-id=\'hgr-register-page-login-here-button\'>Log in here</a>."}}')
    }, function(e) {
        e.exports = JSON.parse('{"resetPassword":{"resetPassword":"Reset Password","processing":"Processing...","login":"Log in","submit":"Submit","confirmPassword":"Repeat Password","password":"Your new Password","hashInvalid":"Your hash key is invalid. Please check the link sent to your email.","leakedPassword":"The given new password has appeared in a data leak. Please choose a different new password.","oldPassword":"New password cannot be the same as the old password. Please enter new password and try again.","somethingWrong":"Something went wrong","backToForgotPassword":"Back to Forgot Password","successMessage":"Password was changed successfully. You will be redirected to login page in {seconds} seconds.","returnToLogin":"Return to Login"}}')
    }, function(e) {
        e.exports = JSON.parse('{"signup":{"title":"Sign up","name":"Name","email":"Email","password":"Password","passwordConfirmation":"Confirm Password","hashInvalid":"Access manager link has expired.","userExists":"User already exists, redirect to login page.","invalidEmail":"Entered email is invalid. Please use Google or any other trustable email address.","userAlreadyExists":"Such user already exists. Please login with existing credentials.","userIsSuspended":"Such user is suspended. If you have any questions in regards of it please contact our Support Team. Thank you!","invalidName":"Entered Name is invalid. Please try again.","somethingWrong":"Something went wrong."}}')
    }, function(e) {
        e.exports = JSON.parse('{"errorPage":{"header":{"heading":"Oops, you found our 404 page","description":"This is not a fault, just an accident that was not intentional. However, we doubt that this is the page you\'re looking for and we apologize profusely for it.","buttonText":"Go to homepage"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"domainNameSearch":{"header":{"title":"Use Domain Checker to Search for Available Domains","description":"Simply type your desired domain name and instantly find out if it\'s available.","alreadyHaveDomain":"Already have a domain?","privacyFreeProtection":"A free privacy protection is included with every eligible domain","transferIt":"Transfer it","privacyTooltip":"Personal ‘Whois’ data kept safe with Domain Privacy – FREE for life.","registrationCondition":"*1st year with a 2 or more years registration"},"searchErrors":{"minLength":"Domain name should consist of at least {minChars} characters","maxLength":"Domain name has more than {maxChars} characters","invalidName":"Invalid domain name"},"introductionListSection":{"title":"6 Tips for Finding the Perfect Domain Name","keepItShort":{"heading":"Keep It Short","paragraph":"While there is no minimum length for a domain name, the best ones use only 2-3 words. A website name with more words is harder to read and won\'t stand out."},"lessIsMore":{"heading":"Less is More","paragraph":"Avoid hyphens, numbers, slang, and words with multiple spellings in your domains. Complex elements like these make your website address much harder to spell and remember."},"includeYourBrandName":{"heading":"Include Your Brand Name","paragraph":"A great domain name for your website or online store should include your brand name or target keywords for your niche. A search result with a keyword in the site name will offer better brand recognition and increase traffic to your website."},"performDomainSearch":{"heading":"Perform a Domain Name Search","paragraph":"Before you choose your perfect domain name, you should check to make sure that it isn’t already trademarked by another company that owns the copyright."},"thinkLocally":{"heading":"Think Locally","paragraph":"While many people favor .com domains, it could be in your best interest to go with a country-specific domain like .co.uk, or .de. Especially if you target a particular country."},"checkAvailabilityActFast":{"heading":"Check Availability and Act Fast","paragraph":"The best website name gets taken quickly. Don’t miss out on your dream name, use the web domain checker to search domain names today and begin the domain registration process."}},"imageSections":{"privacyTakenCare":{"heading":"Your Privacy is Taken Care Of","description":{"projectPersonalData":"Protect your personal data with Hostinger. Our domain privacy protection service will keep your personal information hidden from spammers.","whenRegisterDomain":"Usually, when you register a domain name, your personal information is available on public databases such as WHOIS.","keepYouSafe":"To keep you safe, we’ll replace your personal data with generic site information for maximum security."},"buttonText":"Search domain availability"},"transferToday":{"heading":"Got a Domain Name Already? Transfer It to Hostinger Today","description":"You can easily use your existing website domain name with Hostinger by transferring it from your current provider – it only takes a few clicks.","buttonText":"Transfer your domain"},"getFreeDomain":{"heading":"Get Free Domain Name with Hosting","description":"Most of Hostinger\'s web hosting packages include free domains with all the most popular extensions. Aside from the generic top-level ones like .com, .net, co.uk, .org, and many more, Hostinger also provides a huge variety of domain extensions for free.","buttonText":"Search domain availability"}},"doubleColoredSection":{"futureOnline":{"heading":"The Future Is .online","text":"Get a web address for your site that lets the world know you’re always online. "},"buildOnlineBrand":{"heading":"Build an online brand","text":"It’s not just domain names that make your brand stand out, your domain extension should also let visitors know what you’re about. Register a .online web address and let people know that you’re creating a modern website or tech-driven company ready for the next generation."},"affordableAvailableUnique":{"heading":"Affordable, available, unique","text":"A <a href=\'https://www.hostinger.com/tld/online-domain\' target=\'_blank\'>.online domain name</a> is a new top-level domain name for your site which communicates that your brand is not tied to a specific region but is ready for a global audience. What’s more, since it is a new extension, you’re much more likely to find an available domain name that isn\'t already registered to another company or a specific domain name that would be too expensive."},"xyzAlwaysAvailable":{"heading":".xyz Domain Names Are Always Available","text":"Try a different extension to make sure that your specific domain name is always available."},"standFromCrowd":{"heading":"Stand out from the crowd","text":"The right domain names are not always the most expensive or popular ones. The main concern when choosing domain names is to make sure that they will stand out on the Internet. A <a href=\'https://www.hostinger.com/tld/xyz-domain\' target=\'_blank\'>.xyz domain</a> will almost always be available and it’s memorable too."},"domainsGreatPrice":{"heading":"Dream domains at a great price","text":"Use our domain search tool to check if your dream domain is available with a .xyz extension. Simply enter the domain you’re looking for in the search bar above and you could be the registered owner of that domain for a great price today."},"firstImageAlt":"The Future Is .online","secondImageAlt":".xyz Domain Names Are Always Available"},"servicesSection":{"title":"Why Register Domain Names with Hostinger?","description":"Hostinger offers fast and affordable domain registration with instant activation and dedicated live support.","liveTechnicalSupport":{"title":"24/7 live technical support","text":"Our live customer support team is here for you any time of the day or night. We’ve made our domain name search and domain registration process as easy as possible but we all need a helping hand sometimes. Just contact us and we will explain it all to you."},"trustedDomainRegistrar":{"title":"Trusted domain registrar","text":"Hostinger is trusted as a domain registrar and web host by millions of people worldwide. We are an ICANN accredited domain registrar.  "},"instantSetup":{"title":"Instant Setup and Easy Control","text":"Once you’ve found the right domain for your site it’s time to get it registered and link it to your website. Luckily for you, Hostinger will guide you through every single step with just a few clicks. There’s no technical knowledge required."}},"tldsSection":{"title":"Explore the possibilities and choose the best TLD for your website","buyTld":"Buy .{tld} Domain","viewMore":"View more","viewLess":"View less"},"faqs":{"title":"Domain Checker FAQs","description":"Find answers to frequently asked questions about Domain Checker"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"websiteBuilder":{"header":{"overline":"Hostinger Website Builder","heading":"Create a Website with Ease","description":"No coding skills required. Easily create a website, optimized for speed and performance.","imageAlt":"Website Builder","features":{"freeDomain":"Free Domain","freeDomainTooltip":"After signing up for a 12, 24, or 48-month hosting plan, you get a free domain for one year. Choose from {freeDomainList} domains. After the first year, your domain will renew at the regular rate. Contact Customer Support to get information on the regular rate for your particular domain. Please note that you won\'t be able to transfer newly registered domains to another registrar during the first {numberOfDays} days of the registration period.","customerSupport":"24/7 Customer Support"},"buttonText":"Get Started"},"pricingTable":{"heading":"All-In-One Website Solution","description":"Create a business, eCommerce, blog, or personal website. We have included everything you’ll need in our web hosting & website builder package."},"partnerReviewCards":{"first":{"text":"You don’t have to worry about learning complex features. You can build your website faster since most of the work is already done for you.","icon":"techradar-dark","iconBottom":"-","link":"-"},"second":{"text":"Excellent interface and some unique and powerful design tools that give you a lot of control over how your online presence looks and functions.","icon":"pcmag-dark","iconBottom":"-","link":"-"},"third":{"text":"No coding or design skills are needed, the builder will do all of the hard work for you. It’s apparent just when you first open the platform – everything is presented in a clean and minimalistic fashion.","icon":"mybest-dark","iconBottom":"-","link":"-"}},"easeOfUse":{"heading":"Enjoy Real Ease of Use","featuresList":{"first":"Intuitive drag and drop website creator","second":"Automatic responsive design to fit any screen size","third":"100+ fully-customizable, designer-made templates"}},"growYourTraffic":{"heading":"Grow Your Traffic","featuresList":{"first":"Boost Google rankings and traffic with AI-powered SEO tools","second":"Integrate marketing tools like Google Analytics and Hotjar","third":"Predict user behaviour with our AI heat map tool"}},"sellOnline":{"heading":"Sell Online with eCommerce","featuresList":{"first":"Easily manage inventory, orders, and appointments","second":"Sell up to 500 products, all without transaction fees","third":"Accept 20+ payment options worldwide."}},"customerSupport":{"heading":"At Your Service 24/7","featuresList":{"first":"Receive help from our agents anytime via live chat support.","second":"Follow step-by-step video walkthroughs and guides.","third":"Access a vast knowledgebase of in-depth tutorials."}},"advancedSecurityFeatures":{"heading":"Advanced Security Features","featuresList":{"first":"Free unlimited SSL security certificates encrypt website traffic and protect sensitive data.","second":"Cloudflare protected nameservers to safeguard from DDoS attacks.","third":"Secure your files with automatic backups.","fourth":"Ensure your website is online with our 99.9% uptime guarantee."}},"powerOfAI":{"heading":"Harness the Power of AI","featuresList":{"first":"Ask AI to build a fully-designed website for you","second":"Create a logo in seconds with our AI logo maker","third":"Generate website copy that converts with our AI writer tool"}},"userReviewCards":{"first":{"text":"Hostinger\'s drag-and-drop website builder makes it easy to create a website, even if you\'ve never done it before.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/633060a0c17abd5d3c391af0"},"second":{"text":"Im designing my website and have all i need, and its really easy and simple to do it with the dashboard and builder, im just grateful that i was able to do what i wanted to do for a long time.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/63250a1e7f7a8621ee5ddf01"},"third":{"text":"Hostinger is an excellent web hosting service that offers speed, stable uptime, professional customer support and many powerful tools, including a terrific website builder, for bloggers and small businesses.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/62de6c404c35e69ec518f5ae"}},"stepsSection":{"title":"Create a professional website in 4 easy steps","description":"Building your own website is easier than you think. Follow these steps with the help of Hostinger website builder to launch a site in minutes.","chooseThePerfectTemplate":{"title":"Choose the design","description":"Pick a pre-made or AI generated template."},"customizeYourDesign":{"title":"Customize it","description":"Use our drag-and-drop interface to add a personal touch."},"publishYourWebsite":{"title":"Publish your website","description":"When you’re happy with your website, introduce it to the world."},"attractTraffic":{"title":"Attract traffic","description":"Use our AI-powered SEO tools to grow your audience. "}},"tabsSection":{"heading":"100+ Fully Customizable Templates","tabs":{"popularTemplates":"Popular templates","website":"Website","onlineStore":"Online store","portfolio":"Portfolio","landingPage":"Landing page","blog":"Blog"}},"highlightedFeaturesSection":{"overline":"Want a personalized experience?","heading":"Let AI build a website for you","featuresList":{"first":"Powered by ChatGPT","second":"Takes 30 seconds to build a site","third":"Personalized images and content ","fourth":"Fully customizable design"},"buttonText":"Start Building"},"imageSection":{"heading":"Create Your Own Website Today","imageAlt":"Your Business Online","buttonText":"Start Now"},"faqs":{"title":"FAQs about Website Builder","description":"Find answers to frequently asked questions about our website creator."}}}')
    }, function(e) {
        e.exports = JSON.parse('{"websiteBuilderAi":{"header":{"heading":"Build Your Dream Website in Minutes With AI Website Builder","description":"Ready, set, publish – create your website in a flash with Hostinger AI Website Builder. Tell us what you need, and our AI will do the rest.","buttonText":"Try for Free","highLightedFeatures":{"automatedDevelopment":"Automated Website Development","aiContent":"AI-Powered Content Creation","webHostingIncluded":"Web Hosting Included"}},"pricingTable":{"heading":"Your Dream Website Builder Plan"},"contentTabs":{"heading":"Build a Professional Website in 4 Steps","enterYourBrandName":{"title":"1. Enter Your Brand Name","titleDescription":"Tell us your brand or company name."},"selectWebsiteType":{"title":"2. Select the Website Type","titleDescription":"Pick a website type that suits your needs best. Choices include an online store, a portfolio, a blog, and more."},"describeYourBusiness":{"title":"3. Describe Your Business","titleDescription":"Provide a summary of your brand to get an AI-generated website made specifically for you."},"customizeYourWebsite":{"title":"4. Customize Your Website","titleDescription":"Your site is now ready! Use our drag-and-drop editor and AI tools to customize it further."}},"partnerReviewCards":{"first":{"icon":"techradar-light"},"second":{"icon":"pcmag-light"},"third":{"icon":"mybest-light"}},"doubleColoredSection":{"title":"Leverage the Power of Artificial Intelligence","instantWebsiteCreation":{"heading":"Instant Website Creation","text":"Save time – powered by an advanced machine learning algorithm, our AI builder will generate a custom site based on your description. Not a writer? No problem – use our AI content creation tools to produce unique, SEO-friendly website copy and launch your site in no time."},"builtInAITools":{"heading":"Built-in AI Tools","text":"Access our suite of AI tools to elevate your website with little effort. Use our <span class=\'built-in-ai-tools\'>AI Logo Maker</span> to create a bespoke logo, the AI Writer to generate content, and our AI Heatmap to analyze visitor behavior."},"optimizedForSearchEngines":{"heading":"Optimized for Search Engines","text":"Beat the competition on Google with our SEO tools, designed to help you intuitively optimize your web pages for search engines. Thanks to lightning-fast loading times, you can ensure the best user experience for your audience, at all times."},"noCodingSkillsRequired":{"heading":"No Coding Skills Required","text":"Hostinger AI Website Generator lets you build as many web pages as you need without coding a single line. Simply enter your business details to get a full-fledged website, and customize all the design elements using a drag-and-drop editor."},"globalCustomerSupport":{"heading":"24/7 Global Customer Support","text":"If you run into trouble, our Customer Success agents are ready to help you around the clock. We also have video guides on <a href=\'{academyLink}\' rel=\'noopener noreferrer nofollow\' data-click-id=\'hgr-website-builder-ai-page-academy-link\'>Hostinger Academy</a> and a library of <a href=\'{tutorialsLink}\' rel=\'noopener noreferrer nofollow\' data-click-id=\'hgr-website-builder-ai-page-tutorials-link\'>in-depth tutorials</a>."},"eCommerceFeatures":{"heading":"Intuitive eCommerce Features","text":"Get all the tools you need to sell online. You can display up to 500 products, manage your inventory and orders, accept payments, and more. Running a service business? Enable appointment bookings in a few clicks."},"firstImageAlt":"Instant Website Creation","secondImageAlt":"No Coding Skills Required"},"userReviewCards":{"first":{"text":"Hostinger\'s drag-and-drop website builder makes it easy to create a website, even if you\'ve never done it before.","icon":"trustpilot-light","iconBottom":"rating-primary-dark","link":"https://www.trustpilot.com/reviews/633060a0c17abd5d3c391af0"},"second":{"text":"Im designing my website and have all i need, and its really easy and simple to do it with the dashboard and builder, im just grateful that i was able to do what i wanted to do for a long time.","icon":"trustpilot-light","iconBottom":"rating-primary-dark","link":"https://www.trustpilot.com/reviews/63250a1e7f7a8621ee5ddf01"},"third":{"text":"Hostinger is an excellent web hosting service that offers speed, stable uptime, professional customer support and many powerful tools, including a terrific website builder, for bloggers and small businesses.","icon":"trustpilot-light","iconBottom":"rating-primary-dark","link":"https://www.trustpilot.com/reviews/62de6c404c35e69ec518f5ae"}},"futureIsNow":{"title":"The Future Is Now – Try Our AI Website Builder","buttonText":"Try for Free"},"faqs":{"title":"AI Website Builder FAQs","description":"Find answers to commonly asked questions about Hostinger’s AI website generator."}}}')
    }, function(e) {
        e.exports = JSON.parse('{"ecommerceHosting":{"header":{"heading":"eCommerce Hosting","description":"Give your online store the best possible foundation with reliable eCommerce hosting."},"trustPilot":{"title":"eCommerce Hosting Services Trusted by Thousands","description":"Don\'t just take our word for it. We\'re the best host of choice for thousands of happy customers."},"offersSection":{"title":"What the Right Web Hosting Solution Offers","description":"Why choose Hostinger as your eCommerce web hosting provider?","speedMeansSales":{"title":"Speed means sales","description":"Fast eCommerce sites keep visitors engaged, supercharging your conversion rate and boosting sales."},"safeAndSecure":{"title":"Safe and secure","description":"Stop worrying about security – with your free SSL certificate and in-house built firewall, your website is secure."},"straightforwardSetup":{"title":"Straightforward set up","description":"Launch your eCommerce store in no time, with access to our easy to use hPanel and 24/7 live support."},"simpleInstallation":{"title":"Simple Installation","description":"Our Auto Installer takes the hard work out of getting your WordPress site online. In just a few clicks and a couple of minutes, your site will be up and running. "}},"hostingPlansListSection":{"title":"All Cloud Hosting Plans Include:","freeSslCertificate":"Unlimited Free SSL","accessManagement":"Access Management","liteSpeedServers":"LiteSpeed servers","phpVersionControl":"PHP Version Control","unlimitedBandwidth":"Unlimited Bandwidth","ddosProtection":"DDoS Protection","wpCliAndSsh":"WP-CLI and SSH Access","freeMigration":"Free Migration","customerSupport":"24/7 Customer Support","gitIntegration":"Git Integration","dailyBackups":"Daily Backups","uptimeGuarantee":"99.9% Uptime Guarantee","freeDomain":"Free Domain","moneyBackGuarantee":"30-day money-back guarantee","professionalEmailAddress":"Professional Email Address"},"doubleColoredSection":{"title":"Choose a Platform That’s Best for You","wooCommerceHosting":{"heading":"WooCommerce Hosting","text":"WooCommerce is an open-source eCommerce plugin for your WordPress website – the world\'s most popular CMS. The platform helps you quickly and easily set up an online shop. Pair that with reliable Hostinger WordPress hosting plans for a store that’s designed for growth. No extensive coding knowledge needed!","linkText":"Learn more"},"prestaShopHosting":{"heading":"PrestaShop Hosting","text":"Another open-source option, PrestaShop features an intuitive admin area, a flexible cart, and eCommerce focused features. Its highlights include an extensive tutorial collection and a handy add-on marketplace.","linkText":"Learn more"},"openCartHosting":{"heading":"OpenCart Hosting","text":"OpenCart is a beginner-friendly eCommerce platform that uses a module system. Similar to drag-and-drop eCommerce website builders, this system enables first-time users to create their stores with ease."},"custombuiltStore":{"heading":"Custom-Built Store","text":"Feeling creative or need features you can’t find elsewhere? You can always host your custom-built store with Hostinger. Whether you’re able to create your own PHP-based site or need the help of a developer, we’ll support you with robust hosting."},"firstImageAlt":"eCommerce Platforms","secondImageAlt":"Custom-Built Store"},"faqs":{"title":"eCommerce Hosting FAQs","description":"Find answers to frequently asked questions about eCommerce hosting."}}}')
    }, function(e) {
        e.exports = JSON.parse('{"hostingerPro":{"header":{"heading":"Scale Your Business With Professional Web Hosting","description":"Everything in one place. A scalable solution for all your websites.","buttonText":"See Pricing"},"joinPartnerProgram":{"heading":"Join Our Partner Program","description":"Manage your clients\' projects and earn recurring commissions.","featuresList":{"first":"Up to 50% commissions","second":"Simple and secure access management","third":"Dedicated dashboard to manage all projects in one place"},"buttonText":"Join Now"},"fullyManagedWordPress":{"heading":"Managed WordPress","featuresList":{"first":"Automatic updates.","second":"WordPress staging tool.","third":"WordPress Pro features.","thirdTooltip":"WordPress developers can leverage different tools to improve productivity and have more freedom over their WordPress sites -- like WP-CLI, PHP version control, SSH access, Git integration, and MySQL database manager."},"reviewCards":{"first":{"text":"I’ve used more that 10 Hosting solutions in the past 15 years, nothing compares to the quality and speed of Hostinger.","icon":"trustpilot-light","link":"https://www.trustpilot.com/reviews/62d1db238000af4a88417a99","iconBottom":"rating"},"second":{"text":"The UI for managing sites, WordPress, SSL and other features is very user friendly. Support responds quickly. Great Service!","icon":"trustpilot-light","link":"https://www.trustpilot.com/reviews/631f4f7e6a3e1ed2c3d0bea8","iconBottom":"rating"},"third":{"text":"I have used several companies providing a host for a WordPress website and when I needed another, I found Hostinger to be the most competitive and all-round provider.","icon":"trustpilot-light","link":"https://www.trustpilot.com/reviews/632d83d1e619801c6a5fc657","iconBottom":"rating"}}},"maximumPerformance":{"heading":"Optimized for Maximum Performance","featuresList":{"first":"Maximize website speed with LiteSpeed Web Server technology.","second":"Optimize performance with advanced LSCWP cache.","third":"Ensure performance with dedicated resources and IP address.","fourth":"Stay ahead with HTTP/3, IPv6 and other latest features."},"reviewCards":{"first":{"text":"Speed test results of our Hostinger US test site came back with a worldwide average of a blazing fast 143 ms, which ranks them as one of our A+ top tier hosts!","icon":"bitcatcha-light","link":"-","iconBottom":"-"},"second":{"text":"If you have a small business website, an online store, or a growing blog, your website can easily handle sudden traffic spikes.","icon":"wpbeginner-light","link":"-","iconBottom":"-"},"third":{"text":"The average loading time of my fully-fledged landing page was a phenomenal 1.56s, and uptime over a few months of testing was upwards of 99.99%, exactly as promised.","icon":"website-planet-light","link":"-","iconBottom":"-"}}},"manageWithEase":{"heading":"Launch Fast, Manage With Ease","featuresList":{"first":"Manage all your services in one place with our all-in-one dashboard.","second":"Launch projects in just a few clicks with hPanel.","third":"Manage access for your team and clients."},"reviewCards":{"first":{"text":"I own 5 websites, and I have tried a couple of web hosting providers before. Now I have been running all my websites from Hostinger for more than 4 years.","icon":"g2-light","link":"https://www.g2.com/products/hostinger-web-hosting/reviews/hostinger-web-hosting-review-5198769","iconBottom":"rating"},"second":{"text":"I am hosting my site with Hostinger and I was up and running in less than 30 minutes.","icon":"g2-light","link":"https://www.g2.com/products/hostinger-web-hosting/reviews/hostinger-web-hosting-review-4652999","iconBottom":"rating"},"third":{"text":"The easy usage of the hosting platform and how it helps me manage my data, especially my emails and web files.","icon":"g2-light","link":"https://www.g2.com/products/hostinger-web-hosting/reviews/hostinger-web-hosting-review-6493086","iconBottom":"rating"}}},"freeWebsiteMigration":{"heading":"Free Website Migration","featuresList":{"first":"Easily transfer existing websites with our free automatic website migration tool.","second":"Our dedicated team of support agents will guide you every step of the way.","third":"Your websites will be transferred within 24 hours."},"reviewCards":{"first":{"text":"I have migrated to Hostinger few months ago. I am extremely satisfied with the hosting, and with their support.","icon":"trustpilot-light","link":"https://www.trustpilot.com/reviews/602fe4bcf85d7509d8de4809","iconBottom":"rating"},"second":{"text":"Migrated over a website and email from another provider. Hostinger\'s UI is easy to use and the support was quick, friendly, and very helpful.","icon":"trustpilot-light","link":"https://www.trustpilot.com/reviews/5f91e788798e6f04a41b107c","iconBottom":"rating"},"third":{"text":"Very positive experience as a new customer. I migrated my website hosting and the support was amazing and very responsive.","icon":"trustpilot-light","link":"https://www.trustpilot.com/reviews/5d8baee23585c70688f43f7d","iconBottom":"rating"}}},"joinWebsiteOwners":{"title":"Join {numberOfOwners} Website Owners","buttonText":"Get Started"},"customerSupport":{"heading":"Our Team Is Here to Help You 24/7","featuresList":{"first":"Receive help from our agents anytime via live chat support.","second":"Follow step-by-step video walkthroughs and guides.","third":"Access a vast knowledgebase of in-depth tutorials."},"reviewCards":{"first":{"text":"One of the best customer service you can find. Instant support. Patient, detailed and very hands-on support. I am a fan!","icon":"trustpilot-light","link":"https://www.trustpilot.com/reviews/61e9c6aea16c1e751f6face9","iconBottom":"rating"},"second":{"text":"The best support in the industry. Amazing. Never fails to impress. Keep it up.","icon":"trustpilot-light","link":"https://www.trustpilot.com/reviews/6249a678c7628b203ba129e4","iconBottom":"rating"},"third":{"text":"Support is fast and good. A company that still puts the customer first!","icon":"trustpilot-light","link":"https://www.trustpilot.com/reviews/5f2cf1e51a5a69073c6e7c20","iconBottom":"rating"}}},"advancedSecurityFeatures":{"heading":"Advanced Security Features","featuresList":{"first":"Free unlimited SSL security certificates encrypt website traffic and protect sensitive data.","second":"Cloudflare protected nameservers to safeguard from DDoS attacks.","third":"Secure your files with automatic backups.","fourth":"Ensure your website is online with our 99.9% uptime guarantee."},"reviewCards":{"first":{"text":"Hostinger proved itself a reliable web hosting service. In fact, our test site didn\'t go down once during the 14-day observation period.","icon":"pcmag-light","link":"-","iconBottom":"-"},"second":{"text":"Plans include SSL certificates and all servers have an advanced security module to protect your data.","icon":"cnet-light","link":"-","iconBottom":"-"},"third":{"text":"With DDoS protection, auto-updates, automatic website backups, and other security measures, you can rest assured that your website is secured.","icon":"sfgate-light","link":"-","iconBottom":"-"}}},"serverLocations":{"heading":"Data Centers All Around the World","description":"We offer server locations in: USA, United Kingdom, France, India, Singapore, Brazil, Lithuania, and the Netherlands."},"clientReviews":{"title":"Featured Client Stories","first":{"text":"I really enjoy the UI, it’s very intuitive. A web hosting platform has a lot of settings and functions to be aware of. I like how Hostinger arranges all that information. At this point, I am very familiar with Hostinger, and I can set up a client project and take it off the ground in 30 minutes.","link":"https://www.hostinger.com/blog/rsnl-creative","image":"dino","name":"Dino Valdez","role":"RSNL Creative"},"second":{"text":"When I was with the previous provider, I felt their problems began affecting my day job. I was getting calls from furious clients during the daytime, and I needed to jump in and try to understand what was happening. Now, I don’t hear a thing because everything is running smoothly.","link":"https://www.hostinger.com/blog/cwb-consultancy","image":"chris","name":"Chris W. Balmer","role":"CWB Consultancy"},"third":{"text":"You can find good website speed anywhere, but the support matters to me the most. Hostinger specialists were always there to help me immediately whenever I struggled to migrate my customers’ domains or access the backend of my website.","link":"https://www.hostinger.com/blog/why-mohamed-chose-hostinger","image":"mohamed-d","name":"Mohamed Yassen Sattar","role":"Designbymys"},"buttonLink":"https://www.hostinger.com/blog/client-stories"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"technology":{"header":{"heading":"Designed for Your Growth","description":"Making Hostinger stronger and faster, we can’t simply rely on the latest technology. That’s why our greatest strength is the team of teams who work together towards implementing it."},"features":{"speed":{"title":"Speed","description":"Response time {time} ms."},"support":{"title":"Support","description":"Live chat 24/7."},"efficiency":{"title":"Efficiency","description":"The best price/quality ratio."},"simplicity":{"title":"Simplicity","description":"{number} of 10 find our hPanel smooth and intuitive."}},"imageSections":{"allDataSecured":{"overline":"data centers","heading":"All Data - Secured","description":"We protect your websites with multiple levels of fail-safes, RAID-10, daily or weekly backups. All of our {number} data centers are distributed globally to keep your websites fast in every country. Your visitors will enjoy the lowest latency and unmatched reliability as we deploy in globally connected Tier-3 datacenters.","secondaryHeading":"Plans include:","secondaryDescription":"In-house built hPanel, Access Manager, LiteSpeed web server, free SSL, in-house developed WAF."},"maximumEfficiency":{"overline":"infrastructure","heading":"Maximum Efficiency","description":"Safety, fast performance, and stability are equally important. We strive to maintain 99.99% uptime for your website. Our servers are operating on CloudLinux – the leading OS for hosting providers. We are renewing our systems on a regular basis, shielding servers from DDoS attacks, and improving their speed with the newest LiteSpeed technologies.","secondaryHeading":"Plans include:","secondaryDescription":"Daily Backups, CloudLinux, LVE containers for Account Isolation, Wanguard realtime anti-DDoS protection on Switches, full SSD servers."},"smoothControl":{"overline":"hpanel","heading":"Built For Smooth Control","description":"We are proud of our in-house-developed hPanel. Since its birth in 2011, we fine-tune every aspect of our product to deliver a hosting experience that is intuitive for beginners and straightforward for professionals. hPanel is translated into {number} languages and has an in-house WordPress migration service for fast auto migrations."},"focusedOnSuccess":{"overline":"support","heading":"Focused on Success","description":"We believe that showing how to solve a problem is the best way to guide customers towards success. Our technical team is here 24/7 to navigate you through any pain you experience while working on your website."}},"tutorials":{"title":"Latest Blog Issues"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"brandGuidelines":{"partners":{"header":{"heading":"Brand Integration Guidelines","description":"Here’s everything you need to know about integrating the Hostinger brand into your content."},"tipsAndIdeas":{"title":"Tips & Ideas for Great Content","description":"You’re the expert in your field and know best what inspires your audience. Here are a few topic ideas:","title1":"Topic Ideas","htmlContent1":"<li>Design a personal branding portfolio</li><li>Create an online shop</li><li>Build a side hustle </li><li>Promote a worthy cause on a blog</li><li>Establish a community of like-minded people</li>","title2":"The Benefits of Using WordPress with Hostinger","htmlContent2":"<li>Open-source solutions, with thousands of plugins and themes available and no limits on design and functionality</li><li>No coding skills required</li><li>Scaling opportunities</li><li>SEO-friendly</li><li>No commissions from user’s sales</li><li>No commitments – users can switch between hosting providers</li>","title3":"The Benefits of Using Website Builder With Hostinger","htmlContent3":"<li>Free with all hosting plans</li><li>No coding skills needed</li><li>Designer made templates</li><li>Intuitive, flexible, and easy-to-use drag-and-drop editor</li><li>All-in-one website-building solution - Hosting, Domain, Builder</li><li>AI Toolkit including a logo maker, content writing tool, and a heatmap</li><li>eCommerce tools come at no additional cost</li>"},"guidanceOnContent":{"title":"Guidance on Content","integrateHostinger":{"title":"Integrate Hostinger organically.","description":"Choose a relevant video topic and thematically link to Hostinger in the beginning."},"createWebsite":{"title":"Create a Website.","description":"Demonstrate how you can deploy a website hassle-free."},"callToAction":{"title":"Use a solid CALL TO ACTION.","description":"Inspire the audience to launch their own websites online."},"promoCode":{"title":"Mention your unique URL & PROMO-CODE.","description":"(1) show in the video, (2) add a clickable URL in the description above the show line, and (3) in the pinned comment."},"irrelevantTopics":{"title":"Irrelevant Topics.","description":"Please don’t use irrelevant video topics, ad rolls, or sponsorship shout-outs."},"sensitiveContent":{"title":"Sensitive Content.","description":"Please don’t associate Hostinger with sensitive, adult, political, offensive, or unlawful content."}},"whatMakesUsSpecial":{"title":"What Makes Our All-In-One Hosting Service Special","premiumFeaturesForLess":"Premium features for less","unlimitedFreeSSL":"Unlimited free SSL certificates","freeDomain":"Free domain","freeEmail":"Free email","optimizedForWP":"Optimized for WordPress","unmeteredTraffic":"Unmetered traffic (unlimited GB)","ssdStorage":"{value} GB SSD storage","weeklyBackups":"Free weekly backups","multilingualChatEmail":"Multilingual 24/7 chat and email service","uptimeGuarantee":"99.9% uptime guarantee","extremelyFastServers":"Extremely fast servers - server response time is 43 milliseconds","smoothOnboarding":"Smooth onboarding/migration","oneClickAutoInstaller":"1-click auto-installer for 100+ apps","twoFactorAuth":"Extra security with 2-Factor authentication"},"brandCollaborations":{"title":"Examples of Brand Collaborations","description":"Examples from content creators who nailed it.","networkChuck":{"title":"Network Chuck","description":"Resume Website"},"freeCodeCamp":{"title":"Free Code Camp","description":"eCommerce Website"},"santrelMedia":{"title":"Santrel Media","description":"Affiliate Marketing Website"},"jsMastery":{"title":"JavaScript Mastery","description":"Web 3.0 Blockchain App"}},"aboutHostinger":{"title":"About Hostinger","singleColoredSection":{"title":"Three. Two. Online","copy1":"Hostinger is recognized as the fastest-growing web hosting company. Today more than one million users reap the benefits of advanced hosting infrastructure for fast-loading small-medium websites.","copy2":"Our ambition to create the best web hosting experience led to building our native hosting panel – hPanel.","copy3":"To make your websites even faster and more reliable, we offer multiple data center locations, including the UK, Lithuania, the Netherlands, France, Brazil, India, and the USA. We also expand that list every year.","linkText":"Check out Hostinger Roadmap"}},"whatToPayAttention":{"title":"What to Pay Attention To","slogan":{"heading":"Slogan","text":"Three. Two. Online. We use it as our brand element that finishes our videos or goes next to our logo. We don’t use it as a headline or a CTA text."},"weAreHostinger":{"heading":"We are Hostin/ŋ/er, not Hostin/j/er.","text":"Hostinger is pronounced with /ŋ/ like in hosting, not /dʒɚ/ as in Avenger. Here’s an epic example of how NOT to say our name.","linkText":"Check the example"},"resources":{"heading":"Resources","text":"All general assets such as logos, fonts, icons, illustrations, and other editable files can be found here.","linkText":"Go to General Assets"},"approvalProcess":{"heading":"Approval Process","text":"Preparation for the release takes two business days. Please send us your content beforehand."}}}}}')
    }, function(e) {
        e.exports = JSON.parse('{"onlineStore":{"header":{"heading":"Start Selling Today With a Professional Online Store","description":"Create a successful eCommerce business with an intuitive and feature-rich online store builder.","imageAlt":"Online Store","buttonText":"Get Started"},"pricingTable":{"heading":"Use the All-in-One Online Store Solution","description":"Create an eCommerce, business, blog, or personal website with online store functionality with ease. We offer everything you need in our website builder and web hosting package."},"partnerReviewCards":{"first":{"text":"You don’t have to worry about learning complex features. You can build your website faster since most of the work is already done for you.","icon":"techradar-dark","iconBottom":"-","link":"-"},"second":{"text":"Excellent interface and some unique and powerful design tools that give you a lot of control over how your online presence looks and functions.","icon":"pcmag-dark","iconBottom":"-","link":"-"},"third":{"text":"No coding or design skills are needed, the builder will do all of the hard work for you. It’s apparent just when you first open the platform – everything is presented in a clean and minimalistic fashion.","icon":"mybest-dark","iconBottom":"-","link":"-"}},"fullyFunctionalStore":{"heading":"Fully-Functional eCommerce Store","featuresList":{"first":"Save time with easy inventory and order management.","second":"Sell anything you want – from physical to digital products and services.","third":"Show you know your target audience by accepting 20+ payment options worldwide."}},"flawlessCustomerExperience":{"heading":"A Flawless Customer Experience","featuresList":{"first":"Track your sales campaigns easier with discounts and promo codes.","second":"Don’t let them abandon any carts with the seamless checkout experience.","third":"Go the extra mile by allowing website visitors to book appointments with your team."}},"startSelling":{"heading":"Beginner-Friendly eCommerce","featuresList":{"first":"No coding required - use our intuitive drag-and-drop store editor instead.","second":"Make buying easy with automatic, responsive designs to fit any screen, no matter the size.","third":"Look the part – our eCommerce templates are designer-made, so you can start off on the right foot."}},"newCustomers":{"heading":"Attract New Customers","featuresList":{"first":"Be the first thing they see on search engines with the built-in SEO tools.","second":"Advertise in the right places - integrate tools like Facebook Messenger with ease.","third":"Don’t risk losing potential visitors due to long loading times – get a store with unbeatable speeds."}},"ourTeamIsHereToHelp":{"heading":"Our Team Is Here to Help You 24/7","featuresList":{"first":"Stuck? Not for long – get help from our agents anytime via live chat, directly from the editor.","second":"Feeling adventurous? Follow along with our step-by-step video walkthroughs and guides.","third":"Grow your store and learn new skills with our in-depth tutorials."}},"advancedSecurity":{"heading":"Advanced Security Features","featuresList":{"first":"Build trust and keep your files safe with free unlimited SSL security certificates for traffic encryption.","second":"Don’t let bot traffic overwhelm your store – our Cloudflare-protected nameservers safeguard you from DDoS attacks.","third":"Worried something got lost? No need – automatic backups help you secure your files.","fourth":"Be truly open for business 24/7 with our 99.9% uptime guarantee."}},"stepsSection":{"title":"How to Start an Online Store With Confidence","description":"Get your online store built and published with just a few straightforward steps.","chooseThePerfectTemplate":{"title":"Choose the Template","description":"Explore dozens of designer-made templates for a professional eCommerce website or start building from scratch."},"customizeYourDesign":{"title":"Customize Your Website","description":"Create a unique look and feel for your site with our intuitive drag-and-drop builder. Add your own content and edit any element."},"publishYourWebsite":{"title":"Add Your Products","description":"Quickly create and manage listings for physical or digital products and services, including easy editing of product descriptions and shipping methods."},"attractTraffic":{"title":"Hit Publish","description":"Start selling in just a few clicks. Once you’re happy with your design, take your online business live and start building a strong online presence."}},"tabsSection":{"heading":"Professionally-Designed eCommerce Website Templates","description":"Pick a pixel-perfect website template for your online store, and start selling in style. All of our eCommerce templates are built by professionals, and are fully customizable, so you can have the freedom to promote your brand, your way.","tabs":{"websiteTemplates":"Website templates"}},"userReviewCards":{"title":"Read Customer Reviews","description":"Find out why users think Hostinger offers the best website builder.","first":{"text":"I wanted to have my website and create it myself. Designing my website with Hostinger’s builder, I had all I needed, and it was really easy to do.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/63250a1e7f7a8621ee5ddf01"},"second":{"text":"Hostinger\'s drag-and-drop website builder makes it easy to create a website, even if you\'ve never done it before.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/633060a0c17abd5d3c391af0"},"third":{"text":"I recommend Hostinger to everyone who wants to start a small or big-level venture. My line for Hostinger – “One-stop solution for website development.”","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/users/60675de17aa793001b70cca8"}},"faqs":{"title":"FAQs About Hostinger’s Online Store Builder","description":"Get in-depth answers to all your pressing eCommerce website builder questions."}}}')
    }, function(e) {
        e.exports = JSON.parse('{"websiteTemplates":{"header":{"heading":"Website Templates Built for Success","description":"Customize any designer-made template with the intuitive drag-and-drop builder and get online in minutes.","imageAlt":"Website Templates","features":{"freeDomain":"Free Domain","freeDomainTooltip":"After signing up for a 12, 24, or 48-month hosting plan, you get a free domain for one year. Choose from {freeDomainList} domains. After the first year, your domain will renew at the regular rate. Contact Customer Support to get information on the regular rate for your particular domain. Please note that you won\'t be able to transfer newly registered domains to another registrar during the first {numberOfDays} days of the registration period.","customerSupport":"24/7 Customer Support"},"buttonText":"Get Started"},"popularTemplates":{"heading":"Check Out Our Most Popular Templates","website":"Website","onlineStore":"Online Store","portfolioCV":"Portfolio&CV","landingPage":"Landing Page","blog":"Blog"},"imageSection":{"heading":"Looking For More? Register To Choose From 100+ Templates","imageAlt":"Your Business Online","buttonText":"Register"},"faqs":{"title":"FAQs About Website Templates","description":"Here you’ll find the answers to some of the most common questions about website templates."}}}')
    }, function(e) {
        e.exports = JSON.parse('{"logoMaker":{"header":{"heading":"Get Unique AI-Made Logos Instantly With Hostinger Logo Maker","description":"Sit back and relax – let our AI create a bespoke logo for your brand in a matter of minutes. Boost your brand recognition with a professional logo design.","buttonText":"Create Your Logo Now"},"contentTabs":{"heading":"Create Your Own Logo in 4 Steps","description":"With Hostinger Logo Maker, you can design professional-looking logos in just a few minutes.","tellUsYourBrandName":{"title":"1. Tell Us Your Brand Name","titleDescription":"Start by entering your company name and your slogan."},"describeIdealLogo":{"title":"2. Describe the Ideal Logo","titleDescription":"Tell the online logo generator what needs to be in your custom logo design."},"chooseDesign":{"title":"3. Choose a Design","titleDescription":"Pick your favorite logo from the AI-generated logo styles and adjust it to your liking."},"downloadYourLogo":{"title":"4. Download Your Logo","titleDescription":"Download the high-resolution logo files and start using your logo."}},"doubleColoredSection":{"title":"A Logo Maker That Works Like a Professional Designer","description":"Hostinger Logo Maker is all you need to create your dream logo. Get your brand online fast - no need to hire a designer.","uniqueLogoDesigns":{"heading":"Get Unique Logo Designs","text":"Leave a strong impression on your audience with an original logo. No matter how out-of-the-box your idea is, our AI tool will create a cutting-edge design never seen anywhere else."},"unlimitedLogoDesigns":{"heading":"Get Unlimited Logo Designs","text":"Leave the manual labor to our AI. Whether you\'re using the design for a personal or commercial project, the logo creator will generate dozens of styles to choose from."},"zeroDesignSkillsNeeded":{"heading":"Zero Design Skills Needed","text":"Hostinger Logo Maker makes logo creation process seamless and intuitive. Simply enter your business details, fill out the logo description, and choose your new company logo."},"beautifulLogosInMinutes":{"heading":"Make Beautiful Logos In Minutes","text":"Skip the headache of hiring a designer and get straight to work. In just a few clicks, you\'ll have a custom logo ready to use on websites, branded business cards, social profiles, and more."},"firstImageAlt":"Get Unique Logo Designs","secondImageAlt":"Zero Design Skills Needed"},"professionalLook":{"title":"Give Your Brand the Professional Look It Deserves","buttonText":"Design Your Logo"},"faqs":{"title":"FAQs About Hostinger AI Logo Maker","description":"Find answers to frequently asked questions about our AI logo maker."}}}')
    }, function(e) {
        e.exports = JSON.parse('{"partners":{"header":{"heading":"Join Our Partner Program","description":"Manage your clients\' projects and earn recurring commissions.","buttonText":"Join Now","features":{"commissions":"Up to 20% commissions","simpleAndSecure":"Simple and secure access management","dedicatedDashboard":"Dedicated dashboard to manage all projects in one place"}},"commissions":{"heading":"Earn Recurring Commissions","featuresList":{"first":"Earn commissions from every client you bring.","second":"Get up to 20% commissions per sale.","third":"Earn recurring commissions when your clients renew their services."}},"oneDashboard":{"heading":"Manage All Clients in One Dashboard","featuresList":{"first":"View all clients and their services in one dashboard.","second":"Save time with bulk management. (coming soon)","third":"Monitor performance via client reporting tools. (coming soon)","fourth":"Use our invoicing & billing system. (coming soon)"}},"accessManagement":{"heading":"Simple and Secure Access Management","featuresList":{"first":"Share access to selected services with your clients and team members.","second":"Securely and quickly access your clients’ websites and products.","third":"Set up all services for your client and transfer the invoice for payment."}},"getStartedToday":{"title":"Get Started Today","description":"Become a Hostingger Partner to develop projects for your clients and scale your business","buttonText":"Join Now"},"automaticMigration":{"heading":"Free Automatic Website Migration","featuresList":{"first":"Easily transfer your websites with our free automatic website migration tool.","second":"Our dedicated team will assist you in every step of the way.","third":"Your websites will be transferred within 24 hours."}},"managedWordpress":{"heading":"Managed WordPress Hosting","featuresList":{"first":"Generate website performance reports to track your progress.","second":"Secure your website with automatic malware detection.","third":"Stay ahead of the crowd with auto-updates. (coming soon)"}},"letUsTakeCareOfBackend":{"heading":"Let Us Take Care of the Backend","featuresList":{"first":"Maximize performance with LiteSpeed Web Servers.","second":"Reach out to our 24/7 Support - always available for you and your clients.","third":"Rest assured that your projects are online with our 99.9% uptime guarantee.","fourth":"Keep your files secure with automated backups."},"reviewCards":{"first":{"text":"Speed test results of our Hostinger US test site came back with a worldwide average of a blazing fast 143 ms, which ranks them as one of our A+ top tier hosts!","icon":"bitcatcha-light"},"second":{"text":"If you have a small business website, an online store, or a growing blog, your website can easily handle sudden traffic spikes.","icon":"wpbeginner-light"},"third":{"text":"The average loading time of my fully-fledged landing page was a phenomenal 1.56s, and uptime over a few months of testing was upwards of 99.99%, exactly as promised.","icon":"website-planet-light"}}},"clientReviews":{"title":"Featured Client Stories","first":{"text":"I really enjoy the UI, it’s very intuitive. A web hosting platform has a lot of settings and functions to be aware of. I like how Hostinger arranges all that information. At this point, I am very familiar with Hostinger, and I can set up a client project and take it off the ground in 30 minutes.","link":"https://www.hostinger.com/blog/rsnl-creative","image":"dino","name":"Dino Valdez","role":"RSNL Creative"},"second":{"text":"When I was with the previous provider, I felt their problems began affecting my day job. I was getting calls from furious clients during the daytime, and I needed to jump in and try to understand what was happening. Now, I don’t hear a thing because everything is running smoothly.","link":"https://www.hostinger.com/blog/cwb-consultancy","image":"chris","name":"Chris W. Balmer","role":"CWB Consultancy"},"third":{"text":"You can find good website speed anywhere, but the support matters to me the most. Hostinger specialists were always there to help me immediately whenever I struggled to migrate my customers’ domains or access the backend of my website.","link":"https://www.hostinger.com/blog/why-mohamed-chose-hostinger","image":"mohamed-d","name":"Mohamed Yassen Sattar","role":"Designbymys"},"buttonLink":"https://www.hostinger.com/blog/client-stories"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"homepageUplift":{"header":{"heading":"Everything You Need to Create a Website","description":"Join <span class=\\"number-of-customers-counter\\">{numberOfCustomers}</span> website owners who are building their businesses online.","buttonText":"Get Started"},"pricingBanner":{"title":"Web Hosting","description":"We have prepared an all-in-one website hosting plan which has everything you need for a high performance website."},"allInOneWebsite":{"heading":"All-in-one Website Solution","featuresList":{"first":"Manage up to {numberOfWebsites} websites.","second":"Register a personal domain name for free.","secondTooltip":"After signing up for a 12, 24, or 48-month hosting plan, you get a free domain for one year. Choose from {freeDomainList} domains. After the first year, your domain will renew at the regular rate. Contact Customer Support to get information on the regular rate for your particular domain. Please note that you won\'t be able to transfer newly registered domains to another registrar during the first {numberOfDays} days of the registration period.","third":"Set up a professional business email address.","thirdTooltip":"Create up to {numberOfEmails} domain-based email addresses and forwarders at no-cost. This feature comes with a friendly webmail interface and a separate email service storage limit of {storageLimit} per mailbox.","fourth":"Optimize your workflow with managed WordPress hosting.","fifth":"Launch websites quickly with our Website Builder."},"reviewCards":{"first":{"text":"Easy to use, intuitive and fluid interface, support always willing to assist in problems that may appear.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/5b4570739d2def0af465dc12"},"second":{"text":"Easy to use platform. Very good and fast support. Highly recommended.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/5dc1619160485808b81afed3"},"third":{"text":"Even though I am a newbie in this world it has been very easy for me to understand and manage my site.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/5c23cebb9d37800a10574303"}}},"maximizeWebsiteSpeed":{"heading":"Maximize Website Speed","featuresList":{"first":"Maximize performance with LiteSpeed Web Server technology.","second":"Enjoy optimized performance with advanced cache solutions.","third":"Host your website in any of our server locations: USA, United Kingdom, Brazil, Singapore, Lithuania, India, and the Netherlands."},"reviewCards":{"first":{"text":"Speed test results of our Hostinger US test site came back with a worldwide average of a blazing fast 143 ms, which ranks them as one of our A+ top tier hosts!","icon":"bitcatcha-dark","iconBottom":"-","link":"-"},"second":{"text":"If you have a small business website, an online store, or a growing blog, your website can easily handle sudden traffic spikes.","icon":"wpbeginner-dark","iconBottom":"-","link":"-"},"third":{"text":"The average loading time of my fully-fledged landing page was a phenomenal 1.56s, and uptime over a few months of testing was upwards of 99.99%, exactly as promised.","icon":"website-planet-dark","iconBottom":"-","link":"-"}}},"customerSupport":{"heading":"Our Team is Here to Help You 24/7/365","featuresList":{"first":"Receive help from our agents anytime via live chat support.","second":"Follow step-by-step video walkthroughs and guides.","third":"Access a vast knowledgebase of in-depth tutorials."},"reviewCards":{"first":{"text":"One of the best customer service you can find. Instant support. Patient, detailed and very hands-on support. I am a fan!","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/61e9c6aea16c1e751f6face9"},"second":{"text":"The best support in the industry. Amazing. Never fails to impress. Keep it up.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/6249a678c7628b203ba129e4"},"third":{"text":"Support is fast and good. A company that still puts the customer first!","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/5f2cf1e51a5a69073c6e7c20"}}},"joinWebsiteOwners":{"title":"Join {numberOfOwners} Website Owners","buttonText":"Get Started"},"advancedSecurityFeatures":{"heading":"Advanced Security Features","featuresList":{"first":"Get unlimited SSL security certificates to encrypt your websites’ traffic.","second":"Protect your website from DDoS attacks with Cloudflare protected nameservers.","third":"Secure your files with automatic backups.","fourth":"Ensure your website is online with our 99.9% uptime guarantee."},"reviewCards":{"first":{"text":"Hostinger proved itself a reliable web hosting service. In fact, our test site didn\'t go down once during the 14-day observation period.","icon":"pcmag-light","iconBottom":"-","link":"-"},"second":{"text":"Plans include SSL certificates and all servers have an advanced security module to protect your data.","icon":"cnet-light","iconBottom":"-","link":"-"},"third":{"text":"With DDoS protection, auto-updates, automatic website backups, and other security measures, you can rest assured that your website is secured.","icon":"sfgate-light","iconBottom":"-","link":"-"}}},"freeMigration":{"heading":"Free Migration","featuresList":{"first":"Transfer your website using our free automatic website migration tool.","second":"Our agents will guide you in every step of the way.","third":"Your website will be transferred within 24 hours."},"reviewCards":{"first":{"text":"I have migrated to Hostinger few months ago. I am extremely satisfied with the hosting, and with their support.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/602fe4bcf85d7509d8de4809"},"second":{"text":"Migrated over a website and email from another provider. Hostinger\'s UI is easy to use and the support was quick, friendly, and very helpful.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/5f91e788798e6f04a41b107c"},"third":{"text":"Very positive experience as a new customer. I migrated my website hosting and the support was amazing and very responsive.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/5d8baee23585c70688f43f7d"}}},"clientReviews":{"title":"Featured Client Stories","first":{"text":"Hostinger impressed me with amazing customer experience and effortless migration from my previous hosting provider.","link":"https://www.hostinger.com/blog/jakes-migration-experience","image":"jake","name":"Jake Sinclair","role":"Brand Designer"},"second":{"text":"Support matters to me the most. Your specialists were always there to help me immediately.","link":"https://www.hostinger.com/blog/why-mohamed-chose-hostinger","image":"mohamed","name":"Mohamed Yassen Sattar","role":"Graphic and Web Designer"},"third":{"text":"I was looking for a hosting company that is very intuitive for beginners and very well-configured for good performance.","link":"https://www.hostinger.com/blog/how-jhon-scaled-his-minecraft-business","image":"jhon","name":"Jhon Ortega","role":"Entrepreneur"},"buttonLink":"https://www.hostinger.com/blog/client-stories"},"serverLocations":{"heading":"Data Centers All Around the World","description":"Our web hosting, WordPress hosting, and cloud hosting plans offer server locations in: USA, United Kingdom, France, India, Singapore, Brazil, Lithuania, and the Netherlands."},"stickyCtaABTest":{"buttonText":"Claim Deal"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"webHosting":{"cloudHostingFeatures":{"heading":"Need more power? Try cloud hosting","imageAlt":"Try Cloud Hosting","buttonText":"See all plans"},"header":{"heading":"Web Hosting Built for Speed","description":"Plus a free domain, SSL certificate, and DDoS protection with annual plans.","imageAlt":"Webhosting","features":{"customerSupport":"24/7/365 customer support","sslCertificates":"SSL certificates included"}},"trustPilot":{"title":"Hosting Services Trusted by Thousands","description":"Don’t just take our word for it. We’re the web hosting provider of choice for thousands of happy customers."},"doubleColoredSection":{"liveSupport":{"heading":"24/7/365 Live Support","text":"Worried you won’t get help when you most need it? You shouldn\'t be. Our professional and hands-on support team of real human beings is ready to help 24/7/365."},"topWebsites":{"heading":"Top-Performing Websites with Top Tech","text":"Don’t let poor speed scores bring your website down. From HTTP/3 to self-healing infrastructure, full SSD servers, and unlimited bandwidth, you can offer your visitors the fastest browsing experience.","linkText":"Learn more"},"migrate":{"heading":"Migrate with Ease, for Free","text":"We’re all about your success, not the other way around – meaning that we won’t charge you a penny for migrating your website to Hostinger. On top of that, we’ll take care of the process for you, so you can focus on the things that matter."},"wordpress":{"heading":"Everything You Need for WordPress","text":"Let your WordPress website shine. Get the best results with LiteSpeed-powered servers and custom-built advanced WordPress optimization tools."},"security":{"heading":"We Take Security Seriously","text":"Don’t leave your website vulnerable to cyber attacks. Instead, get in-house developed WAF with Premium and Business web hosting plans and keep your website safe."},"noExpirience":{"heading":"No Experience Required","text":"With Hostinger, you don’t need to be a pro to get started. Thanks to the easy-to-use control panel and intuitive interface, you will be able to launch your website within minutes. Worried about a language barrier? Don’t be – our hPanel is localized for 17 languages."},"firstImageAlt":"Best service and support","secondImageAlt":"Everything for WordPress and security"},"contentTabs":{"heading":"Get the Resources You Need","unmatchedPerformance":{"title":"Unmatched Performance","content":"We take the performance of your website seriously. That’s why we use innovative technologies to power up your website, from HTTP/3 and IPv6 to LiteSpeed web servers and CDN. All Premium and Business plans also come with unmetered bandwidth, meaning that you don’t need to worry about your website’s performance."},"totalSecurity":{"title":"Total Security","content":"The security of your web server is our utmost priority. Thanks to CloudLinux and LVE containerized environment, complete DDoS protection, automated website backups, auto-updates, in-house developed WAF, and other security measures, you can rest assured that your website is secured. Plus, you get a free SSL certificate with all Premium and Business web hosting plans for added site security."},"completeControl":{"title":"Complete Control","content":"With Hostinger, you don’t need to compromise your code or website. So whether you want to experiment with multiple PHP versions or look for ways to optimize your databases, the chances are that we’ve got your back. We offer tools like SSH, WP-CLI, PHP version control, Git integration, MySQL manager, and more to keep you in the driver’s seat."},"globalDataCenters":{"title":"Global Data Centers","contentHtml":"<p>Looking for a hosting partner with data centers in your area? We’ve got you covered. We have data centers in:</p><ul><li>Europe (United Kingdom, France, the Netherlands, Lithuania)</li><li>Asia (Singapore, India)</li><li>North America (the USA)</li><li>South America (Brazil)</li></ul><p>We also offer easy data center location change as self-service. Change your data center location once a month to make your website load faster for your visitors.</p>"},"managedWordpress":{"title":"Managed WordPress","content":"You don’t necessarily need WordPress hosting to enjoy and manage your WordPress site. With one-click WordPress installation, managed auto-updates, and trained expert support, your WordPress website is in good hands. We make managing your WordPress website as easy as it can be."},"wordpressStaging":{"title":"WordPress Staging","content":"Managed WordPress support is just the beginning. With Hostinger, you have access to WordPress production site staging. So you can make a copy of your website, try out different changes to your layout, content, and everything else in-between, and publish your changes only when you are ready."}},"faqs":{"title":"Shared Web Hosting FAQs","description":"Find answers to frequently asked questions about shared website hosting"},"compareTable":{"heading":"Compare All Web Hosting Plans"},"otherHostingOptions":{"title":"Other Hosting Options Available to You","wordpressHosting":"Wordpress hosting","eCommerceHosting":"Ecommerce hosting","phpHosting":"PHP hosting","joomlaHosting":"Joomla hosting","wooCommerceHosting":"WooCommerce hosting","cloudHosting":"Cloud hosting","prestaShopHosting":"PrestaShop hosting","drupalHosting":"Drupal hosting"},"serverLocations":{"heading":"Data Centers All Around the World","description":"We offer server locations in: USA, United Kingdom, France, India, Singapore, Brazil, Lithuania, and the Netherlands."}}}')
    }, function(e) {
        e.exports = JSON.parse('{"wordpressHosting":{"header":{"heading":"WordPress Hosting Built for Speed","description":"Drive more traffic and conversions with our reliable hosting service. Get a guaranteed 99.9% uptime, speed-optimization features, and industry-leading security.","imageAlt":"Sprinter"},"trustPilot":{"title":"Join Thousands of Satisfied Website Owners","description":"We’re pleased to be a top-rated web hosting provider on TrustPilot. See what our clients have to say about our hosting services."},"doubleColoredSection":{"title":"Why WordPress Hosting with Hostinger?","fastPerformance":{"heading":"Lightning-Fast Performance","text":"Faster load times mean better user experience, better search engine optimization, and higher conversion rates. Our WordPress hosting service uses LiteSpeed servers and includes the LSCWP cache plugin to improve your website performance."},"inclusiveService":{"heading":"All-Inclusive WordPress Hosting Service","text":"Our managed WordPress hosting comes with ready-to-use features, so you can start building your website in no time. Enjoy our 1-click installer, user-friendly control panel, and automatic WordPress updates. Plus, get pre-installed performance WordPress plugins and marketing tools to grow your online presence."},"wordpressSupport":{"heading":"24/7/365 WordPress Support","text":"Our customer support is always reachable via live chat, no matter what problem you’re facing or the time zone you’re in. We also offer a comprehensive knowledge base and WordPress tutorials managed by our in-house WordPress experts to help you succeed online."},"securityMeasures":{"heading":"Top-Notch Security Measures","text":"With Hostinger, your WordPress site will be in the safest hands. Get an in-house developed web application firewall, free SSL certificate, and anti-DDoS protection to protect your website from all sorts of cyber attacks. Higher-tier WordPress hosting plans also include automated daily backups, so you will never lose your data."},"firstImageAlt":"Lightning-Fast Performance","secondImageAlt":"24/7/365 WordPress Support"},"reviewSection":{"title":"Don’t just take our word for it","description":"Hostinger has over 14,000 reviews and a 4.9 out of 5-star rating on Google.","reviewButtonText":"Check out our Google Reviews page.","reviewButtonLink":"https://www.google.com/maps/place/Hostinger/@54.9027298,23.8949167,17z/data=!3m1!4b1!4m7!3m6!1s0x46e7225cae2f6937:0x70088eb784a6697c!8m2!3d54.9027298!4d23.8971054!9m1!1b1","cardReviewLink":"Read more","reviewSantu":"Hostinger is a well-rounded web host that features high-quality customer service and uptime.","reviewCheryl":"Every time I open a chat to request help, I get fast, friendly, efficient service. They make everything easy. I\'ve tried other hosting services, and Hostinger is among the best.","reviewFrancis":"It has got everything we need to run a site, good servers, reliable supports and above all great price."},"introductionListSection":{"title":"We’re a WordPress-Focused Hosting Company","optimizedTechnology":{"heading":"Optimized Technology","paragraph":"Our WordPress hosting is powered by LiteSpeed – the fastest web server in the industry. Combined with the LiteSpeed Cache, your WordPress websites will perform 4x faster than on regular WordPress Hosting. We also use HTTP/3 and IPv6 for better performance."},"wpStagingTool":{"heading":"WordPress Staging Tool","paragraph":"Want to test new features on your WordPress websites? Our user-friendly staging tool lets you do precisely that with zero risk. Create a duplicate version in a click and make any changes necessary – all without affecting the live site."},"automaticWpUpdates":{"heading":"Automatic WordPress Updates","paragraph":"Your WordPress software needs to be up-to-date to keep cyber threats at bay. That’s why we offer automatic core and security patch updates whenever WordPress releases updates to the content management system."},"oneClickWpInstaller":{"heading":"1-Click WordPress Installer","paragraph":"After completing the payment process, you can install WordPress in one click and get to building your website right away. We’ll take care of the back end for you – no need for any technical configuration on your part."},"automatedBackups":{"heading":"Automated Backups","paragraph":"All of our hosting services include automated weekly or daily backups, so all your WordPress site files will be safe. You can restore a previous version of your website in just a few clicks."},"wpProFeatures":{"heading":"WordPress Pro Features","paragraph":"WordPress developers can leverage different tools to improve productivity and have more freedom over their WordPress sites – like WP-CLI, PHP version control, SSH access, Git integration, and MySQL database manager."}},"customerSupportSection":{"heading":"World-Class Customer Support","description":"Our global customer success team is available round-the-clock, all-year-round. Gone are the days of long waiting hours and support tickets.","imageAlt":"World-Class Customer Support"},"hostingPlansListSection":{"title":"All WordPress Hosting Plans include:","freeSslCertificate":"Free SSL Certificate","accessManagement":"Access Management","liteSpeedWordPressModule":"LiteSpeed WordPress Module","phpVersionControl":"PHP Version Control","eCommerceOptimization":"eCommerce Optimization","1clickWordPressInstallation":"1-Click WordPress Installation","wpCliAndSshAccess":"WP-CLI and SSH Access","freeMigration":"Free Migration","customerSupport":"24/7/365 Customer Support","gitIntegration":"Git Integration","regularBackups":"Regular Backups","uptimeGuarantee":"99.9% Uptime Guarantee","automaticWordPressUpdates":"Automatic WordPress Updates","ddosProtection":"DDoS Protection","professionalEmailAddress":"Professional Email Address"},"wpPoweredWebsites":{"heading":"Hostinger for WordPress-powered websites","description":"We are proud WordPress community members and contributors to the Five for the Future pledge. Take advantage of Hostinger’s fast and free WordPress auto-migration tool. Join a community of millions of creators worldwide making money with WordPress-powered websites.","linkText":"We pledge to Five for the Future"},"websiteMigration":{"overline":"Easy website migration","heading":"Hosting a WordPress Website Elsewhere?","description":"All WordPress hosting plans come with a fully-automated and user-friendly migration tool so you can move your website with ease. Or, have our dedicated WordPress team do it for you, free of charge!","buttonText":"Migrate your site today","buttonLink":"https://support.hostinger.com/en/articles/4455931-how-can-i-migrate-website-to-hostinger","imageAlt":"Easy website migration"},"tutorials":{"title":"Master WordPress with Our Tutorials","description":"From website creation and hosting account management to site optimization, our tutorials will show you how to make the most of WordPress."},"faqs":{"title":"WordPress Hosting FAQs","description":"Find answers to frequently asked questions about WordPress Hosting"},"compareTable":{"heading":"Compare All WordPress Hosting Plans"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"cloudHosting":{"header":{"heading":"Cloud Hosting for Increased Performance","description":"The power of cloud computing with the simplicity of shared hosting."},"tutorials":{"title":"Cloud Hosting Tutorials to Get You Started","description":"Find all the information you need in one place. Answers to your questions are only a click away."},"faqs":{"title":"Cloud Hosting FAQs","description":"Find answers to frequently asked questions about cloud web hosting."},"serverLocations":{"overline":"What locations for data centers are available?","heading":"Discover Our Cloud Servers Around the World","description":"We offer server locations in: USA, United Kingdom, France, India, Singapore, Brazil, Lithuania, and the Netherlands."},"servicesSection":{"overline":"Why Choose Cloud Hosting?","title":"The Perfect Environment For Your Success","roomForGrowth":{"title":"Room for Growth","description":"With Cloud Hosting, you can start small and grow big. Get more power as your website expands by having all the resources at your fingertips."},"4xMoreSpeed":{"title":"4x More Speed","description":"Decrease website loading time and improve user experience. Take advantage of our high-speed CPU, a large amount of RAM, and utilize the data centers tactfully placed around the world."},"fullyManaged":{"title":"Fully Managed","description":"Have expert support available 24/7, helping you every step of the way. Focus all efforts on making the most out of your project while we handle the technical issues."}},"coloredSection":{"title":"Faster. Stronger. Dedicated.","description":"Our team of experts will take care of the backend so that you could focus on growing your projects.","guaranteedUptime":{"heading":"Guaranteed 99.9% Uptime","paragraph":"Get near-perfect server uptime and 24/7 monitoring with your web hosting services. Never worry about your website being down again."},"superiorPerformance":{"heading":"Superior Performance","paragraph":"Take full advantage of the speed and power with HTTP/3 and dedicated IP address. No technical knowledge is required."},"powerfulControlPanel":{"heading":"Powerful Control Panel","paragraph":"Enjoy the intuitive control panel that is optimized for all skill levels. Find your way around quickly and easily."}},"simplicityMeetsPerformance":{"title":"Simplicity Meets Performance","dedicatedResources":{"heading":"Dedicated Resources","paragraph":"Cloud hosting plans run on isolated virtual instances. You’ll have total control of all resources and limits through a custom control panel that comes with every Cloud plan."},"instantSetup":{"heading":"Instant Setup","paragraph":"Our Cloud Hosting features instant activation so your project can be up and running in no time at all."},"topLevelDataBackups":{"heading":"Top-level Data Backups","paragraph":"Safety always comes first. Automated daily backups will ensure that your files and databases are safe and sound."},"easyDataCenterChange":{"heading":"Easy Data Center Change","paragraph":"Change your data center location in just a few clicks. No downtime guaranteed."},"integratedCaching":{"heading":"Integrated Caching","paragraph":"Make your projects ultra-quick with an in-built cache manager. Remember, fast websites and high search engine ranking are closely related."},"freeSSL":{"heading":"Free SSL","paragraph":"Build visitor trust with the free SSL certificate included in your web hosting plan."}},"compareTable":{"heading":"Compare All Cloud Hosting Plans"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"websiteBuilder":{"header":{"overline":"Hostinger Website Builder","heading":"Create a Website with Ease","description":"No coding skills required. Easily create a website, optimized for speed and performance.","imageAlt":"Website Builder","features":{"freeDomain":"Free Domain","freeDomainTooltip":"After signing up for a 12, 24, or 48-month hosting plan, you get a free domain for one year. Choose from {freeDomainList} domains. After the first year, your domain will renew at the regular rate. Contact Customer Support to get information on the regular rate for your particular domain. Please note that you won\'t be able to transfer newly registered domains to another registrar during the first {numberOfDays} days of the registration period.","customerSupport":"24/7 Customer Support"},"buttonText":"Get Started"},"pricingTable":{"heading":"All-In-One Website Solution","description":"Create a business, eCommerce, blog, or personal website. We have included everything you’ll need in our web hosting & website builder package."},"partnerReviewCards":{"first":{"text":"You don’t have to worry about learning complex features. You can build your website faster since most of the work is already done for you.","icon":"techradar-dark","iconBottom":"-","link":"-"},"second":{"text":"Excellent interface and some unique and powerful design tools that give you a lot of control over how your online presence looks and functions.","icon":"pcmag-dark","iconBottom":"-","link":"-"},"third":{"text":"No coding or design skills are needed, the builder will do all of the hard work for you. It’s apparent just when you first open the platform – everything is presented in a clean and minimalistic fashion.","icon":"mybest-dark","iconBottom":"-","link":"-"}},"easeOfUse":{"heading":"Enjoy Real Ease of Use","featuresList":{"first":"Intuitive drag and drop website creator","second":"Automatic responsive design to fit any screen size","third":"100+ fully-customizable, designer-made templates"}},"growYourTraffic":{"heading":"Grow Your Traffic","featuresList":{"first":"Boost Google rankings and traffic with AI-powered SEO tools","second":"Integrate marketing tools like Google Analytics and Hotjar","third":"Predict user behaviour with our AI heat map tool"}},"sellOnline":{"heading":"Sell Online with eCommerce","featuresList":{"first":"Easily manage inventory, orders, and appointments","second":"Sell up to 500 products, all without transaction fees","third":"Accept 20+ payment options worldwide."}},"customerSupport":{"heading":"At Your Service 24/7","featuresList":{"first":"Receive help from our agents anytime via live chat support.","second":"Follow step-by-step video walkthroughs and guides.","third":"Access a vast knowledgebase of in-depth tutorials."}},"advancedSecurityFeatures":{"heading":"Advanced Security Features","featuresList":{"first":"Free unlimited SSL security certificates encrypt website traffic and protect sensitive data.","second":"Cloudflare protected nameservers to safeguard from DDoS attacks.","third":"Secure your files with automatic backups.","fourth":"Ensure your website is online with our 99.9% uptime guarantee."}},"powerOfAI":{"heading":"Harness the Power of AI","featuresList":{"first":"Ask AI to build a fully-designed website for you","second":"Create a logo in seconds with our AI logo maker","third":"Generate website copy that converts with our AI writer tool"}},"userReviewCards":{"first":{"text":"Hostinger\'s drag-and-drop website builder makes it easy to create a website, even if you\'ve never done it before.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/633060a0c17abd5d3c391af0"},"second":{"text":"Im designing my website and have all i need, and its really easy and simple to do it with the dashboard and builder, im just grateful that i was able to do what i wanted to do for a long time.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/63250a1e7f7a8621ee5ddf01"},"third":{"text":"Hostinger is an excellent web hosting service that offers speed, stable uptime, professional customer support and many powerful tools, including a terrific website builder, for bloggers and small businesses.","icon":"trustpilot-dark","iconBottom":"rating","link":"https://www.trustpilot.com/reviews/62de6c404c35e69ec518f5ae"}},"stepsSection":{"title":"Create a professional website in 4 easy steps","description":"Building your own website is easier than you think. Follow these steps with the help of Hostinger website builder to launch a site in minutes.","chooseThePerfectTemplate":{"title":"Choose the design","description":"Pick a pre-made or AI generated template."},"customizeYourDesign":{"title":"Customize it","description":"Use our drag-and-drop interface to add a personal touch."},"publishYourWebsite":{"title":"Publish your website","description":"When you’re happy with your website, introduce it to the world."},"attractTraffic":{"title":"Attract traffic","description":"Use our AI-powered SEO tools to grow your audience. "}},"tabsSection":{"heading":"100+ Fully Customizable Templates","tabs":{"popularTemplates":"Popular templates","website":"Website","onlineStore":"Online store","portfolio":"Portfolio","landingPage":"Landing page","blog":"Blog"}},"highlightedFeaturesSection":{"overline":"Want a personalized experience?","heading":"Let AI build a website for you","featuresList":{"first":"Powered by ChatGPT","second":"Takes 30 seconds to build a site","third":"Personalized images and content ","fourth":"Fully customizable design"},"buttonText":"Start Building"},"imageSection":{"heading":"Create Your Own Website Today","imageAlt":"Your Business Online","buttonText":"Start Now"},"imageSectionAbTest":{"heading":"Preview a demo version","description":"Try a free demo version of the Website Builder and build your website in minutes.","buttonText":"Try for Free"},"faqs":{"title":"FAQs about Website Builder","description":"Find answers to frequently asked questions about our website creator."}}}')
    }, function(e) {
        e.exports = JSON.parse('{"tabsSection":{"heading":"Discover pixel-perfect templates","description":"Our talented web designers have created website themes for all kinds of business niches. These templates feature the latest design trends and features. You just need to add your own images and content.","tabs":{"popularTemplates":"Popular templates","website":"Website","onlineStore":"Online store","portfolio":"Portfolio","landingPage":"Landing page","blog":"Blog"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"cpanelHosting":{"header":{"heading":"Kelola Website Makin Mudah dengan cPanel Hosting Terbaik","buttonText":"Dapatkan Sekarang","features":{"bestServer":"Kualitas server terbaik untuk akses website kencang","bestSecurity":"Fitur keamanan terbaik untuk cegah serangan siber","cPanelSupport":"Dukungan cPanel untuk kemudahan pengelolaan website","uptime99":"Website online 24/7 berkat uptime rate 99,9%"}},"cmsFramework":{"heading":"Telah Dioptimasi untuk Berbagai CMS dan Framework"},"compareTable":{"heading":"Fitur cPanel Hosting Terlengkap untuk Website Apapun"},"webHosting":{"heading":"cPanel Hosting Terbaik di Indonesia Kini Dalam Genggaman Anda","description":"Nikmati performa website optimal, lengkap dengan berbagai fitur penting di cPanel. Selain itu, tim CS Niagahoster siap memecahkan masalah website Anda kapanpun Anda butuhkan!","imageAlt":"cPanel Hosting Terbaik"},"servicesSection":{"liteSpeedEnterprise":{"title":"LiteSpeed Web Cache Manager","description":"Fitur ini dapat membatasi waktu loading sekaligus mengelola cache website Anda. Sehingga, akses website Anda akan jadi lebih cepat."},"wordpressManagement":{"title":"Dashboard WordPress Management","description":"Kelola website WordPress Anda secara praktis hanya melalui satu dashboard."},"imunify360":{"title":"Sistem Keamanan Terbaik (Imunify360)","description":"Lindungi website Anda dengan Imunify360. Teknologi ini dapat mengamankan website Anda dari serangan DDoS dan Malware."},"support":{"title":"Bantuan Teknis 24/7","description":"Tim CS Niagahoster siap memberikan bantuan teknis apabila website Anda mengalami masalah."},"freeDomainSsl":{"title":"Gratis Domain dan SSL","description":"cPanel hosting Niagahoster sudah dilengkapi nama domain gratis dan juga SSL gratis untuk meningkatkan keamanan website Anda."},"autoInstaller":{"title":"Auto Installer","description":"Install website WordPress Anda hanya dengan satu klik! Konfigurasi website pun bisa dilakukan dengan mudah di control panel."}},"customerSupport":{"heading":"Dukungan 24/7 dan Fasilitas Kelas Online untuk Anda","featuresList":{"first":"<strong>Fleksibel</strong><br/>Anda bisa mengakses kelas online Niagahoster melalui berbagai macam perangkat, kapan dan di mana saja.","second":"<strong>Aplikatif</strong><br/>Materi disajikan secara rinci dan terstruktur, lengkap dengan contoh kasus berikut penggunaannya secara nyata.","third":"<strong>Terpercaya</strong><br/>Niagahoster selalu menghadirkan mentor yang mumpuni dan menyediakan forum tanya jawab untuk berdiskusi."}},"introductionListSection":{"title":"Website Lebih Aman dengan Imunify360","imunify360":{"heading":"Perlindungan Menyeluruh","paragraph":"Fitur Firewall Imunify360 mampu mendeteksi ancaman keamanan dan melindungi website secara menyeluruh dengan teknologi AI terbaru."},"automaticMalwareDetection":{"heading":"Hindari Ancaman Malware","paragraph":"Cegah serangan malware dengan menggunakan tool pendeteksi malware, karantina malware, dan juga perlindungan cPanel website."},"ipDetection":{"heading":"Deteksi Pembobolan Website","paragraph":"Imunify360 akan mendeteksi alamat IP yang melakukan aktivitas mencurigakan di website Anda, kemudian memberikan notifikasi kepada Anda."},"automaticDefenseSystem":{"heading":"Sistem Pertahanan Otomatis","paragraph":"Identifikasi ancaman keamanan secara real time dan blokir potensi ancaman terhadap website secara langsung."},"patchManagement":{"heading":"Manajemen Patch","paragraph":"Update kernel server tanpa perlu melakukan reboot. Sehingga kinerja server Anda akan semakin meningkat."},"reputationManagement":{"heading":"Manajemen Reputasi","paragraph":"Reputation Management akan memberitahu Anda jika website Anda masuk ke dalam blacklist Google atau Spamhaus Black List (SBL) secara cepat dan akurat."}},"transferWebHosting":{"heading":"Pindah ke cPanel Hosting yang Aman, Stabil, dan Mudah Dikelola","description":"Anda bisa pindah ke layanan hosting kami secara praktis dan juga gratis. Jadi, tunggu apa lagi? Dapatkan berbagai manfaat cPanel hosting Niagahoster sekarang juga!","imageAlt":"Transfer cPanel Hosting","buttonText":"Ambil Penawaran"},"moneyBackGuarantee":{"overline":"Jaminan Layanan Terbaik","heading":"Garansi 30 Hari Uang Kembali","description":"Tidak puas dengan layanan hosting website Niagahoster?Beritahukan keluhan Anda dalam kurun waktu 30 hari setelah aktivasi dengan jaminan uang kembali.","imageAlt":"Garansi 30 Hari Uang Kembali"},"faqs":{"title":"Pertanyaan Seputar cPanel Hosting Niagahoster","description":"Berikut adalah jawaban FAQ terkait cPanel Hosting Niagahoster:"},"getStartedNow":{"title":"Awali kesuksesan Anda bersama Niagahoster!","description":"Kini tidak lagi sulit mewujudkan website impian. Performa hebat, keamanan ekstra, dan layanan dukungan teknis yang bisa diandalkan - semua dengan harga terjangkau!","buttonText":"Mulai Sekarang"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"cpanelEmailHosting":{"header":{"heading":"Bisnis Makin Profesional dengan cPanel Email Hosting","description":"Tingkatkan kredibilitas bisnis Anda dengan menggunakan alamat email profesional. Nikmati layanan email hosting terbaik dengan segala kemudahan dari cPanel."},"pricingTableSection":{"heading":"Pilih Paket Email Hosting cPanel Sesuai Kebutuhan Bisnis Anda","description":"Dapatkan beragam fitur menarik untuk mempermudah aktivitas penerimaan & pengiriman email  di bisnis Anda!"},"transferSection":{"heading":"Ingin Pindah ke Layanan Email dengan cPanel di Niagahoster? Prosesnya Mudah dan Gratis!","description":"Hubungi tim CS Niagahoster untuk mendapatkan bantuan transfer secara gratis. Jadi, Anda tak perlu khawatir soal masalah teknis atau kehilangan data saat melakukan migrasi data email. Prosesnya praktis, dan Anda pun bisa segera merasakan layanan hosting email terbaik.","buttonText":"Mulai Sekarang"},"compareSection":{"heading":"Email Gratis vs cPanel Email Niagahoster"},"trustSection":{"heading":"Tingkatkan Kepercayaan Pelanggan dengan Menampilkan Nama Bisnis Anda di Alamat Email","description":"Bisnis dengan alamat email profesional akan terlihat jauh lebih kredibel dibanding bisnis yang menggunakan alamat email gratis. Jangan buat pelanggan Anda ragu, segera tampilkan domain bisnis Anda di alamat email!","buttonText":"Mulai Sekarang"},"benefitsSection":{"heading":"Manfaat Email Hosting dengan cPanel untuk Bisnis Anda","description":"Dapatkan berbagai keuntungan dengan menggunakan alamat email profesional di Niagahoster.","safeBusiness":{"heading":"Bisnis Aman dan Terpercaya","contents":{"credibility":{"title":"Meningkatkan Kredibilitas","description":"Dengan menggunakan email hosting, bisnis Anda akan lebih mudah untuk mendapat kepercayaan pelanggan."},"professional":{"title":"Menampilkan Kesan Profesional","description":"Email profesional tidak hanya menarik dan kredibel dari sudut pandang pelanggan, tapi juga calon mitra bisnis Anda."},"collaboration":{"title":"Mempermudah Kolaborasi","description":"Aktivitas bisnis bisa menjadi lebih lancar dan kolaborasi antar tim dapat berjalan dengan baik berkat ekosistem email yang terpusat"},"virus":{"title":"Bebas dari Virus","description":"SpamExperts akan melindungi email bisnis Anda dari ancaman virus, phishing, malware dan juga spam."},"privacy":{"title":"Privasi Data Terlindungi","description":"Pastikan privasi Anda tetap terlindungi. Email hosting Niagahoster menjamin bahwa data email Anda tidak akan digunakan pihak lain untuk mengirim iklan atau spam."},"manage":{"title":"Kelola Email secara Bebas","description":"Server email Hosting Niagahoster digunakan khusus untuk keperluan email. Jadi, performanya tidak akan terpengaruh oleh server web hosting."}}},"easyToManage":{"heading":"Kelola Email Semakin Mudah","contents":{"controlPanel":{"title":"Control Panel yang Praktis","description":"Proses pengelolaan email di cPanel memudahkan Anda untuk mengatur konfigurasi email."},"mailClient":{"title":"Mail Client Bervariasi","description":"Anda bisa menggunakan Roundcube atau Horde untuk mengelola email bisnis Anda."},"weeklyBackup":{"title":"Fitur Backup Mingguan","description":"Setiap minggu, data email Anda akan di-backup otomatis. Sehingga Anda bisa terhindar dari risiko kehilangan data."},"outboundMailChannel":{"title":"Outbound MailChannels","description":"Email yang Anda kirim akan terhindar dari kotak spam & blacklist, alias mendarat dengan sempurna di inbox penerima."},"spam":{"title":"Bebas dari Spam","description":"Kotak email Anda terbebas dari berbagai spam mail dan iklan-iklan yang tak diinginkan."},"moreEmail":{"title":"Sebar Lebih Banyak Email","description":"Dalam sekali kirim, Anda bisa langsung menjangkau hingga 50 penerima sekaligus!"},"largeAttachment":{"title":"Lampirkan File Besar","description":"Anda bisa melampirkan file dengan ukuran hingga 30 MB. Sehingga, proses pengiriman email kini jadi lebih fleksibel."},"higerEmailLimit":{"title":"Batas Pengiriman Email Tinggi","description":"Setiap harinya, Anda bisa mengirim hingga 9600 email, atau 400 email per jam."}}},"bestServiceGuarantee":{"heading":"Jaminan Layanan Terbaik","contents":{"prices":{"title":"Harga Terjangkau","description":"Tak perlu keluarkan banyak biaya, Anda sudah bisa dapatkan paket email hosting mulai dari Rp80 ribu per bulan!"},"support":{"title":"Bantuan Teknis 24/7","description":"Silakan hubungi tim CS Niagahoster kapan pun Anda butuh. Kami akan berikan solusi yang cepat dan praktis untuk Anda!"},"uptimeRate":{"title":"Uptime Rate 99,9%","description":"Tak perlu lagi khawatir server down. Sebab, data center terbaik akan membantu Anda mengakses email bisnis kapan saja."},"moneyBackGuarantee":{"title":"Jaminan Uang Kembali","description":"Email hosting Niagahoster menyediakan garansi uang kembali yang berlaku 30 hari sejak pembelian."}}}},"dataPrivacy":{"heading":"Data Anda Dijamin Aman dan Bebas Virus","description":"Pastikan data email bisnis Anda terlindungi dari berbagai ancaman virus, malware, dan spam. Dengan fitur unggulan seperti SpamExperts, kotak email Anda akan jadi jauh lebih aman dan terhindar dari serangan siber.","buttonText":"Mulai Sekarang"},"otherProduct":{"heading":"Rekomendasi Produk Lainnya dari Niagahoster"},"faqs":{"heading":"FAQ Seputar Layanan Email Hosting cPanel di Niagahoster"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"newYear":{"heading":"Everything You Need to Create a Website","buttonText":"Claim Deal","salePromo2":"+ 2 Months Free","salePromo3":"+ 3 Months Free","salePromoPricingTable0":"0 months FREE","salePromoPricingTable2":"+2 months FREE","salePromoPricingTable3":"+3 months FREE","homepage":{"heading":"You’re the Next Big Thing","overline":"Up to <span class=\'header__overline-discount\'>{discount}%</span> off Hosting","headingBrConsumerMonth":"It\'s Consumer\'s Month","overlineBrConsumerMonth":"Hosting with {discount}% OFF","headingInMarchSale":"Summer Sale Markdown","overlineInMarchSale":"Up to <span class=\'header__overline-discount\'>{discount}%</span> off Hosting"},"websiteBuilder":{"heading":"Drag & Drop Website Builder <span class=\'danger\'>Powered by AI</span>","overline":"Up to <span class=\'header__overline-discount\'>{discount}%</span> off <h1 class=\'t-headline-pt\'>Website Builder</h1>","description":"Create a beautiful website in minutes. No design or coding skills needed."},"webHosting":{"heading":"You’re the Next Big Thing","overline":"Up to <span class=\'header__overline-discount\'>{discount}%</span> off <h1 class=\'t-headline-pt\'>Web Hosting</h1>","headingBrConsumerMonth":"It\'s Consumer\'s Month","overlineBrConsumerMonth":"Web hosting with {discount}% OFF","headingInMarchSale":"Summer Sale Markdown","overlineInMarchSale":"Up to <span class=\'header__overline-discount\'>{discount}%</span> off <h1 class=\'t-headline-pt\'>Web Hosting</h1>"},"wordpressHosting":{"heading":"Speed Up Your Success","overline":"Up to <span class=\'header__overline-discount\'>{discount}%</span> off <h1 class=\'t-headline-pt\'>WordPress Hosting</h1>","headingInMarchSale":"Summer Sale Markdown","overlineInMarchSale":"Up to <span class=\'header__overline-discount\'>{discount}%</span> off <h1 class=\'t-headline-pt\'>WordPress Hosting</h1>"},"cloudHosting":{"heading":"Prepare for Ultimate Growth","overline":"Up to <span class=\'header__overline-discount\'>{discount}%</span> off <h1 class=\'t-headline-pt\'>Cloud Hosting</h1>","dedicatedIp":"Dedicated IP","dedicatedResources":"Dedicated Resources"}}}')
    }, function(e) {
        e.exports = JSON.parse('{"webHosting":"web-hosting","wordpressHosting":"wordpress-hosting","emailHosting":"email-hosting","buyHosting":"buy-hosting","vpsHosting":"vps-hosting","googleWorkspace":"google-workspace","cloudHosting":"cloud-hosting","payments":"payments","minecraftServerHosting":"minecraft-server-hosting","freeSslCertificate":"free-ssl-certificate","cheapWebHosting":"cheap-web-hosting","cyberpanelVpsHosting":"cyberpanel-vps-hosting","technology":"technology","cpanelLogin":"cpanel-login","cpanelSignup":"cpanel-signup","forgotPassword":"forgot-password","resetPassword":"reset-password","delegateAccess":"delegate-access","domainNameSearch":"domain-name-search","websiteBuilder":"website-builder","websiteBuilderAi":"ai-website-builder","websiteTemplates":"website-templates","hostingerPro":"hostinger-pro","ecommerceHosting":"ecommerce-hosting","onlineStore":"online-store","brandGuidelinesPartners":"brand-guidelines/partners","logoMaker":"logo-maker","recommended":"recommended","register":"register","transferHosting":"transfer-hosting","partners":"partners"}')
    }, function(e) {
        e.exports = JSON.parse('{"cart":"/cart","domainChecker":"/domain-checker","domainTransfer":"/transfer-domain","whois":"/whois","cmsHosting":"/cms-hosting","eCommerceHosting":"/ecommerce-hosting","freeWebsiteHosting":"/free-hosting","onlineStores":"/online-store","websiteBuilder":"/website-builder","freeDomain":"/free-domain","agencyDomain":"/tld/agency-domain","aiDomain":"/tld/ai-domain","appDomain":"/tld/app-domain","asiaDomain":"/tld/asia-domain","atDomain":"/tld/at-domain","bizDomain":"/tld/biz-domain","blogDomain":"/tld/blog-domain","caDomain":"/tld/ca-domain","ccDomain":"/tld/cc-domain","chDomain":"/tld/ch-domain","cloudDomain":"/tld/cloud-domain","clubDomain":"/tld/club-domain","coDomain":"/tld/co-domain","coUkDomain":"/tld/co-uk-domain","comDomain":"/tld/com-domain","comAuDomain":"/tld/com-au-domain","comBrDomain":"/tld/com-br-domain","deDomain":"/tld/de-domain","devDomain":"/tld/dev-domain","esDomain":"/tld/es-domain","euDomain":"/tld/eu-domain","frDomain":"/tld/fr-domain","icuDomain":"/tld/icu-domain","idDomain":"/tld/id-domain","inDomain":"/tld/in-domain","infoDomain":"/tld/info-domain","ioDomain":"/tld/io-domain","itDomain":"/tld/it-domain","lifeDomain":"/tld/life-domain","linkDomain":"/tld/link-domain","ltDomain":"/tld/lt-domain","meDomain":"/tld/me-domain","mxDomain":"/tld/mx-domain","netDomain":"/tld/net-domain","nlDomain":"/tld/nl-domain","onlineDomain":"/tld/online-domain","orgDomain":"/tld/org-domain","plDomain":"/tld/pl-domain","proDomain":"/tld/pro-domain","seDomain":"/tld/se-domain","shopDomain":"/tld/shop-domain","siteDomain":"/tld/site-domain","spaceDomain":"/tld/space-domain","storeDomain":"/tld/store-domain","studioDomain":"/tld/studio-domain","techDomain":"/tld/tech-domain","usDomain":"/tld/us-domain","vcDomain":"/tld/vc-domain","tvDomain":"/tld/tv-domain","xyzDomain":"/tld/xyz-domain","99centDomains":"/cheap-domain-names","domainPricing":"/tld","affiliateProgram":"/affiliates","wallOfFame":"/wall-of-fame","reviews":"/reviews","pricing":"/pricing","sitemap":"/sitemap","privacyPolicy":"/privacy-policy","termsOfService":"/universal-terms-of-service-agreement","registrarInformation":"/registrar-information","aboutHostinger":"/about","reportAbuse":"/report-abuse","refundPolicy":"/refund-policy","contacts":"/contacts","technology":"/technology","cookiePolicy":"/cookie-policy","websiteMigration":"/website-migration","career":"/career","newsroom":"/newsroom","studentDiscount":"/student-discount","agencyHosting":"/agency-hosting","migrationTerms":"/migracao","affiliatesAssets":"/affiliates/assets","prestashopHosting":"/prestashop-hosting","woocommerceHosting":"/woocommerce-hosting","phpHosting":"/php-hosting","joomlaHosting":"/joomla-hosting","drupalHosting":"/drupal-hosting"}')
    }, function(e, t, n) {
        "use strict";
        n(8);
        const o = ["ChunkLoadError"];
        t.a = () => ({
            beforeSend: e => {
                const t = e.message || "",
                    n = (e => {
                        var t, n;
                        return (null === (n = null === (t = null == e ? void 0 : e.exception) || void 0 === t ? void 0 : t.values) || void 0 === n ? void 0 : n.map((({
                            type: e
                        }) => e || ""))) || []
                    })(e);
                return (e => e.some((e => o.includes(e))))([t, ...n]) ? null : e
            }
        })
    }, , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n.r(t);
        n(8);
        var o = n(7),
            r = n(59),
            l = n(3),
            c = o.a.extend({
                name: "HPaymentMethods",
                data: () => ({
                    paymentMethods: {}
                }),
                async fetch() {
                    const [data] = await r.i.getFooterPaymentMethodsData();
                    this.paymentMethods = data
                },
                methods: {
                    getPaymentIconData: e => ({
                        src: e.image.default,
                        alt: e.slug
                    })
                },
                computed: {
                    andMoreLink() {
                        return Object(l.a)(this, "payments")
                    }
                }
            }),
            h = (n(848), n(5)),
            component = Object(h.a)(c, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "h-payment-methods"
                }, [e._l(e.paymentMethods, (function(n) {
                    return t("HImage", {
                        key: n.slug,
                        staticClass: "h-payment-methods__icon",
                        attrs: {
                            image: e.getPaymentIconData(n)
                        }
                    })
                })), e._v(" "), t(e.andMoreLink.nuxtLink ? "NuxtLink" : "a", {
                    tag: "Component",
                    staticClass: "h-payment-methods__more-btn",
                    attrs: {
                        "data-click-id": "hgr-footer-payment_methods-more_button",
                        href: e.andMoreLink.link,
                        to: e.nuxtTo(e.andMoreLink.nuxtLink)
                    }
                }, [e._v("\n    " + e._s(e.$t("components.footer.andMore")) + "\n  ")])], 2)
            }), [], !1, null, "787552a1", null);
        t.default = component.exports;
        installComponents(component, {
            HImage: n(165).default
        })
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(7).a.extend({
                name: "HSocialIcons",
                computed: {
                    socialIconData() {
                        return [{
                            title: "linkedin",
                            name: "social-icons/ic-linked-in",
                            link: this.themeData.linkedinLink
                        }, {
                            title: "facebook",
                            name: "social-icons/ic-facebook",
                            link: this.themeData.facebookLink
                        }, {
                            title: "instagram",
                            name: "social-icons/ic-instagram",
                            link: this.themeData.instagramLink
                        }, {
                            title: "twitter",
                            name: "social-icons/ic-twitter",
                            link: this.themeData.twitterLink
                        }, {
                            title: "vkontakte",
                            name: "social-icons/ic-vkontakte",
                            link: this.themeData.vkLink
                        }, {
                            title: "youtube",
                            name: "social-icons/ic-youtube",
                            link: this.themeData.youtubeLinks[1] || this.themeData.youtubeLinks[0]
                        }]
                    },
                    socialIcons() {
                        return ["UA"].includes(this.themeData.country.code) ? this.socialIconData : this.socialIconData.filter((e => "vkontakte" !== e.title))
                    }
                }
            }),
            r = (n(850), n(5)),
            component = Object(r.a)(o, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "h-social-icons"
                }, e._l(e.socialIcons, (function(e) {
                    return t("HSocialIcon", {
                        key: e.title,
                        staticClass: "h-social-icons--icon",
                        attrs: {
                            "data-click-id": `hgr-footer-social_icons-${e.title}`,
                            icon: e.name,
                            link: e.link
                        }
                    })
                })), 1)
            }), [], !1, null, "5cb2758d", null);
        t.default = component.exports;
        installComponents(component, {
            HSocialIcon: n(1029).default
        })
    }, function(e, t, n) {
        "use strict";
        var o = n(159).a,
            r = (n(818), n(5)),
            component = Object(r.a)(o, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "layout layout--default",
                    class: e.solidBackgroundColorClass,
                    attrs: {
                        id: "layout"
                    }
                }, [t("HNavigation", {
                    attrs: {
                        "sticky-at-y-position": e.navStickyPosition
                    }
                }), e._v(" "), t("HHiddenLanguageSelector"), e._v(" "), t("main", [t("Nuxt")], 1), e._v(" "), t("HFooter"), e._v(" "), t("HCookieConsent")], 1)
            }), [], !1, null, null, null);
        t.a = component.exports;
        installComponents(component, {
            HNavigation: n(1022).default,
            HHiddenLanguageSelector: n(1028).default,
            HFooter: n(1024).default,
            HCookieConsent: n(403).default
        })
    }, function(e, t, n) {
        "use strict";
        var o = n(160).a,
            r = (n(871), n(5)),
            component = Object(r.a)(o, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "layout layout--login",
                    attrs: {
                        id: "layout"
                    }
                }, [e.isNiaga ? t("NiagaLogo", {
                    staticClass: "h-nav__logo",
                    attrs: {
                        "data-click-id": `hgr-niaga-${e.pageNameDataClickId}-logo`,
                        color: "primary"
                    }
                }) : t("HLogo", {
                    staticClass: "h-nav__logo",
                    attrs: {
                        "data-click-id": `hgr-${e.pageNameDataClickId}-logo`,
                        color: "dark"
                    }
                }), e._v(" "), t("main", [t("Nuxt")], 1), e._v(" "), t("HCookieConsent")], 1)
            }), [], !1, null, null, null);
        t.a = component.exports;
        installComponents(component, {
            NiagaLogo: n(218).default,
            HLogo: n(219).default,
            HCookieConsent: n(403).default
        })
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(1),
            r = n(7),
            l = n(0);

        function c(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }
        const h = ["light", "dark", "ghost-white", "primary", "white-blue"];
        var d = r.a.extend({
                name: "HSectionOneColumn",
                props: {
                    backgroundColor: {
                        type: String,
                        default: "light",
                        validator: Object(l.y)(h)
                    },
                    columnMaxWidth: {
                        type: String,
                        default: ""
                    }
                },
                computed: {
                    classes() {
                        return function(e) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = null != arguments[i] ? arguments[i] : {};
                                i % 2 ? c(Object(source), !0).forEach((function(t) {
                                    Object(o.a)(e, t, source[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                                }))
                            }
                            return e
                        }({}, Object(l.f)("h-section-one-col--bg", this.backgroundColor, h))
                    }
                }
            }),
            f = d,
            m = (n(869), n(5)),
            component = Object(m.a)(f, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "h-section-one-col",
                    class: e.classes,
                    attrs: {
                        dir: e.direction
                    }
                }, [t("div", {
                    staticClass: "h-section-one-col__content h-grid h-grid--cols-m-1 h-grid--cols-t-1",
                    class: {
                        "h-section-one-col__content--max-width": !0
                    },
                    style: {
                        maxWidth: e.columnMaxWidth
                    }
                }, [t("div", {
                    staticClass: "h-grid-item"
                }, [e._t("default")], 2)])])
            }), [], !1, null, "48f10e42", null);
        t.default = component.exports
    }, , function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(1),
            r = (n(8), n(7)),
            l = n(9),
            c = n(0);

        function h(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }
        var d = r.a.extend({
                name: "HPopup",
                props: {
                    value: Boolean,
                    closeButtonColor: {
                        type: String,
                        default: "meteorite-dark",
                        validator: Object(c.y)([...l.a, ...l.c, ...l.b])
                    },
                    salePopup: Boolean,
                    backgroundColor: {
                        type: String,
                        default: "light",
                        validator: Object(c.y)([...l.a, ...l.c, ...l.b])
                    }
                },
                computed: {
                    open: {
                        get() {
                            return this.value
                        },
                        set(e) {
                            this.$emit("input", e)
                        }
                    },
                    hPopupClasses() {
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
                        }({
                            "h-popup--sale": this.salePopup,
                            [this.direction]: !0
                        }, Object(c.f)("h-popup", this.backgroundColor, [...l.a, ...l.c, ...l.b], "--"))
                    }
                },
                watch: {
                    open(e) {
                        const t = document.getElementsByTagName("html")[0];
                        e ? t.classList.add("u-noscroll") : t.classList.remove("u-noscroll")
                    }
                },
                methods: {
                    close() {
                        this.open = !1, this.$emit("onClose")
                    }
                }
            }),
            f = d,
            m = (n(867), n(5)),
            component = Object(m.a)(f, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return e.open ? t("div", {
                    staticClass: "h-popup__wrapper",
                    attrs: {
                        dir: e.direction
                    }
                }, [t("div", {
                    staticClass: "h-popup__overlay",
                    on: {
                        click: e.close
                    }
                }), e._v(" "), t("div", {
                    ref: "hPopup",
                    staticClass: "h-popup",
                    class: e.hPopupClasses
                }, [t("div", {
                    staticClass: "h-popup__close-wrapper"
                }, [e._t("close", (function() {
                    return [t("a", {
                        staticClass: "h-popup__close",
                        attrs: {
                            href: "#close",
                            "aria-label": "Close",
                            role: "button"
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.close.apply(null, arguments)
                            }
                        }
                    }, [t("HIcon", {
                        attrs: {
                            icon: "ui-icons/ic-close",
                            color: e.closeButtonColor
                        }
                    })], 1)]
                }), {
                    close: e.close
                })], 2), e._v(" "), e._t("default"), e._v(" "), e.$slots.default ? e._e() : [t("div", {
                    staticClass: "h-popup__content"
                }, [t("div", {
                    staticClass: "h-popup__text"
                }, [e._t("text")], 2), e._v(" "), e.$slots.image ? t("div", {
                    staticClass: "h-popup__image"
                }, [e._t("image")], 2) : e._e()])]], 2)]) : e._e()
            }), [], !1, null, "79825a34", null);
        t.default = component.exports;
        installComponents(component, {
            HIcon: n(80).default
        })
    }, , function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(1);

        function r(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function l(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? r(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : r(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        n(8);
        var c = n(7),
            h = n(0),
            d = n(9);

        function f(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }
        const m = ["outline", "text"],
            w = ["centered", "absolute", "absolute-right"];
        var y = c.a.extend({
                name: "HLoaderCircle",
                props: {
                    status: {
                        type: String,
                        default: "loading",
                        validator: Object(h.y)(["loading", "success", "danger"])
                    },
                    color: {
                        type: String,
                        default: "primary",
                        validator: Object(h.y)(d.c)
                    },
                    type: {
                        type: String,
                        default: "",
                        validator: Object(h.y)(m)
                    },
                    title: {
                        type: String,
                        default: ""
                    },
                    message: {
                        type: String,
                        default: ""
                    },
                    scaleSize: {
                        type: Number,
                        default: 1
                    },
                    position: {
                        type: [String, Array],
                        default: "",
                        validator: e => "" === e || (Array.isArray(e) ? e.every((element => w.includes(element))) : w.includes(e))
                    }
                },
                methods: {
                    toTitleCase: h.D
                },
                computed: {
                    loaderData() {
                        return {
                            loading: {
                                svgClass: "circular"
                            },
                            success: {
                                svgClass: "checkmark",
                                circleClass: "checkmark__circle"
                            },
                            danger: {
                                svgClass: "crossmark",
                                circleClass: "crossmark__circle"
                            }
                        }[this.status]
                    },
                    currentIcon() {
                        return () => n(839)(`./Ic${this.toTitleCase(this.status)}.vue`)
                    },
                    circleStyle() {
                        let style = `transform: scale(${this.scaleSize});`;
                        return this.title && (style = `${style} margin-bottom: ${14*this.scaleSize}px`), style
                    },
                    hasColor() {
                        return d.c.includes(this.color)
                    },
                    classes() {
                        return function(e) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = null != arguments[i] ? arguments[i] : {};
                                i % 2 ? f(Object(source), !0).forEach((function(t) {
                                    Object(o.a)(e, t, source[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                                }))
                            }
                            return e
                        }({}, Object(h.f)("h-circle-loader__content", this.position, w, "--"))
                    },
                    colorClasses() {
                        return {
                            "h-circle-loader__content--light": this.hasColor && !m.includes(this.type),
                            "h-circle-loader__content--primary": "primary" === this.color || !this.hasColor || "text" === this.type && this.hasColor || "outline" === this.type && this.hasColor,
                            "h-circle-loader__content--danger": "text" !== this.type && "danger" === this.color || "outline" === this.type && "danger" === this.color,
                            "h-circle-loader__content--dark": "text" === this.type && "dark" === this.color || "outline" === this.type && "dark" === this.color,
                            "h-circle-loader__content--success": this.$props.type && "success" === this.color
                        }
                    }
                }
            }),
            v = y,
            k = (n(840), n(5)),
            component = Object(k.a)(v, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "h-circle-loader"
                }, [t("div", {
                    staticClass: "h-circle-loader__content",
                    class: l(l({}, e.classes), e.colorClasses),
                    style: e.circleStyle
                }, [t("svg", {
                    class: `${e.loaderData.svgClass} icon-wrapper`
                }, [t("circle", {
                    staticClass: "full-circle",
                    class: `${e.loaderData.circleClass?e.loaderData.circleClass:""}`,
                    attrs: {
                        cx: "25",
                        cy: "25",
                        "stroke-width": "3",
                        fill: "none",
                        r: "20"
                    }
                }), e._v(" "), t(e.currentIcon, {
                    tag: "Component"
                })], 1)]), e._v(" "), e.title ? t("h3", {
                    staticClass: "h-circle-loader__title"
                }, [e._v(e._s(e.title))]) : e._e(), e._v(" "), e.message ? t("p", {
                    staticClass: "h-circle-loader__message t-body-3"
                }, [e._v("\n    " + e._s(e.message) + "\n  ")]) : e._e()])
            }), [], !1, null, null, null);
        t.default = component.exports
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(7).a.extend({
                props: {
                    open: Boolean,
                    controlled: Boolean,
                    accordionData: {
                        type: [Object, Array],
                        required: !0
                    },
                    titleDataClickId: {
                        type: String,
                        default: ""
                    }
                },
                data: () => ({
                    isOpen: !1
                }),
                computed: {
                    accordionIconClass() {
                        return {
                            "h-accordion__icon--active": this.isAccordionOpen
                        }
                    },
                    titleContainerClass() {
                        return {
                            "h-accordion__title-container--rtl": "rtl" === this.direction
                        }
                    },
                    isAccordionOpen() {
                        return this.controlled ? this.open : this.isOpen
                    }
                },
                methods: {
                    toggle() {
                        this.isOpen = !this.isOpen
                    }
                }
            }),
            r = (n(859), n(5)),
            component = Object(r.a)(o, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return e.accordionData ? t("div", {
                    staticClass: "h-accordion",
                    class: {
                        "h-accordion--active": e.isOpen
                    },
                    attrs: {
                        dir: e.direction
                    }
                }, [t("div", {
                    staticClass: "h-accordion__title-container",
                    class: e.titleContainerClass,
                    attrs: {
                        "data-click-id": e.titleDataClickId
                    },
                    on: {
                        click: e.toggle
                    }
                }, [e.$slots.title ? e._t("title") : Array.isArray(e.accordionData) ? e._e() : t("span", [e._v(e._s(e.accordionData.title))]), e._v(" "), t("span", {
                    staticClass: "h-accordion__icon",
                    class: e.accordionIconClass
                }, [t("HIcon", {
                    attrs: {
                        icon: "ui-icons/ic-arrow-down",
                        color: "meteorite-dark"
                    }
                })], 1)], 2), e._v(" "), t("Transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isAccordionOpen,
                        expression: "isAccordionOpen"
                    }],
                    staticClass: "h-accordion__list"
                }, [Array.isArray(e.accordionData) ? e._l(e.accordionData, (function(option, n) {
                    return t("span", {
                        key: `${option}-${n}`,
                        staticClass: "h-accordion__item"
                    }, [e._t(`option-${n}`, (function() {
                        return [e._v(e._s(option))]
                    }), {
                        value: option
                    })], 2)
                })) : t("span", {
                    staticClass: "h-accordion__list-body",
                    domProps: {
                        innerHTML: e._s(e.accordionData.body)
                    }
                })], 2)])], 1) : e._e()
            }), [], !1, null, "45852a21", null);
        t.default = component.exports;
        installComponents(component, {
            HIcon: n(80).default
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        n(583), e.exports = n(584)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        var content = n(628);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("1adb391c", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, 'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-weight:100;margin:0;padding:0;-webkit-text-decoration:none;text-decoration:none;vertical-align:baseline}html{line-height:1;scroll-behavior:smooth}*,:after,:before{box-sizing:inherit}body{box-sizing:border-box;font-size:100%;margin:0;overflow-x:hidden}@media(min-width:1025px){body ::-webkit-scrollbar{background-color:#fff;width:6px}body ::-webkit-scrollbar-track{background-color:#fff;border-radius:4px}body ::-webkit-scrollbar-thumb{background-color:#dadce0;border-radius:4px}}div{-webkit-tap-highlight-color:rgba(0,0,0,0)}table{border-collapse:collapse;border-spacing:0}caption,td,th{font-weight:400;text-align:left;vertical-align:middle}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}b,strong{font-weight:700}em,i{font-style:italic}u{-webkit-text-decoration:underline;text-decoration:underline}a img{border:none}a,button{border:0;border-radius:0;cursor:pointer;outline:none;padding:0}a{color:inherit}input{border-radius:0;outline:none}img,video{height:auto;max-width:100%}article,aside,details,figcaption,figure,footer,header,hgroup,img,main,menu,nav,section,summary,video{display:block}body.rtl{direction:rtl}html{font-family:"DM Sans",sans-serif;font-size:100%}body{color:#2f1c6a;font-family:inherit;font-size:16px;font-weight:400;line-height:24px}.t-body-2,.t-body-4,.t-body-uppercase,.t-button,.t-h1,.t-h2,.t-h3,.t-h4,.t-h5,.t-header-currency,.t-header-currency-long,.t-headline-pt,.t-overline,.t-price-header,.t-price-pt,a,b,h1,h2,h3,h4,h5,strong{font-weight:700}.t-price-header{font-size:56px;line-height:64px}@media(min-width:768px){.t-price-header{font-size:68px;line-height:88px}}@media(min-width:1025px){.t-price-header{font-size:80px}}.t-headline-pt{font-size:18px;line-height:24px}@media(min-width:1025px){.t-headline-pt{font-size:20px;line-height:32px}}.t-price-pt{font-size:40px;line-height:64px}@media(min-width:768px){.t-price-pt{font-size:48px}}@media(min-width:1025px){.t-price-pt{font-size:56px}}.t-header-currency{font-size:36px;line-height:56px}@media(min-width:768px){.t-header-currency{font-size:40px}}@media(min-width:1025px){.t-header-currency{font-size:48px}}.t-overline{font-size:12px;line-height:16px}.t-header-currency-long{font-size:28px;line-height:56px}@media(min-width:768px){.t-header-currency-long{font-size:32px}}@media(min-width:1025px){.t-header-currency-long{font-size:36px}}.t-h1,h1{font-size:32px;line-height:40px}@media(min-width:768px){.t-h1,h1{line-height:48px}}@media(min-width:1025px){.t-h1,h1{font-size:40px}}.t-h2,h2{font-size:24px;line-height:32px}@media(min-width:768px){.t-h2,h2{font-size:28px;line-height:40px}}@media(min-width:1025px){.t-h2,h2{font-size:36px}}.t-h3,.t-h4,.t-h5,h3,h4,h5{font-size:18px;line-height:24px}@media(min-width:768px){.t-h3,.t-h4,.t-h5,h3,h4,h5{font-size:20px;line-height:32px}}@media(min-width:1025px){.t-h3,.t-h4,.t-h5,h3,h4,h5{font-size:24px}}.t-body-uppercase{letter-spacing:1px;text-transform:uppercase}.t-body-large{font-size:20px;line-height:34px}.t-body-4{font-size:18px;line-height:24px}.t-body-2,.t-body-3,.t-body-strikethrough{font-size:14px}.t-price-strikethrough{font-size:12px;font-weight:400;line-height:14px}.t-button{font-size:16px}.t-body-strikethrough,.t-price-strikethrough{text-decoration-line:line-through}button,input{font-family:"DM Sans",sans-serif;font-size:16px}button{font-weight:700}a{color:#673de6;display:inline-block}@media(min-width:1025px){a:hover{color:#5025d1}}a.danger{color:#fc5185}@media(min-width:1025px){a.danger:hover{color:#d63163}}ul{list-style:none}ul li{padding-left:24px;position:relative}ul li:before{content:"•";left:8px;position:absolute}ol{padding-left:22px}ol li{padding-left:2px}body.lang-ar-AE *,body.lang-el-GR *,body.lang-he-IL *,body.lang-hi-IN *,body.lang-ko-KR *,body.lang-ru-RU *,body.lang-th-TH *,body.lang-uk-UA *,body.lang-vi-VN *,body.lang-zh-HK *{font-family:"Noto Sans",sans-serif}body.rtl ul li{padding-right:24px}body.rtl ul li:before{right:8px}body.rtl ol{padding-right:22px}body.rtl ol li{padding-right:2px}.u-section-spaces{padding-bottom:32px;padding-top:32px}@media(min-width:768px){.u-section-spaces{padding-bottom:40px;padding-top:40px}}@media(min-width:1025px){.u-section-spaces{padding-bottom:48px;padding-top:48px}}.u-generic-color-section{padding-bottom:64px;padding-top:64px}@media(min-width:768px){.u-generic-color-section{padding-bottom:80px;padding-top:80px}}@media(min-width:1025px){.u-generic-color-section{padding-bottom:96px;padding-top:96px}.u-generic-color-section--full-height-image{padding-bottom:0!important;padding-top:0!important}}@media(min-width:768px){.u-only-mobile{display:none!important}}@media(min-width:1025px){.u-only-mob-tab{display:none!important}}.u-only-tablet{display:none!important}@media(min-width:768px){.u-only-tablet{display:inline!important;display:initial!important}}@media(min-width:1025px){.u-only-tablet{display:none!important}}@media(max-width:767px){.u-only-tab-desk{display:none!important}}.u-only-desktop{display:none!important}@media(min-width:1025px){.u-only-desktop{display:inline!important;display:initial!important}}.u-noscroll{overflow:hidden!important}.u-height-100vh{height:100vh!important}.u-mirror-x{transform:scaleX(-1)}.h-grid{grid-column-gap:16px;-moz-column-gap:16px;column-gap:16px;display:grid;margin-left:auto;margin-right:auto;max-width:540px;padding-left:16px;padding-right:16px;width:100%}@media(max-width:767px){.h-grid--cols-m-1{grid-template-columns:1fr}}@media(max-width:767px)and (max-width:767px){.h-grid--cols-m-1 .h-grid-item-m--centered,.h-grid--cols-m-1 .h-grid-item-m--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(max-width:767px)and (min-width:768px)and (max-width:1024px){.h-grid--cols-m-1 .h-grid-item-t--centered,.h-grid--cols-m-1 .h-grid-item-t--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(max-width:767px)and (min-width:1025px){.h-grid--cols-m-1 .h-grid-item-d--centered,.h-grid--cols-m-1 .h-grid-item-d--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(max-width:767px){.h-grid--cols-m-2{grid-template-columns:repeat(2,1fr)}}@media(max-width:767px)and (max-width:767px){.h-grid--cols-m-2 .h-grid-item-m--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(max-width:767px)and (min-width:768px)and (max-width:1024px){.h-grid--cols-m-2 .h-grid-item-t--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(max-width:767px)and (min-width:1025px){.h-grid--cols-m-2 .h-grid-item-d--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(max-width:767px){.h-grid--cols-m-3{grid-template-columns:repeat(3,1fr)}}@media(max-width:767px)and (max-width:767px){.h-grid--cols-m-3 .h-grid-item-m--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(max-width:767px)and (min-width:768px)and (max-width:1024px){.h-grid--cols-m-3 .h-grid-item-t--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(max-width:767px)and (min-width:1025px){.h-grid--cols-m-3 .h-grid-item-d--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(max-width:767px){.h-grid--cols-m-4{grid-template-columns:repeat(4,1fr)}}@media(max-width:767px)and (max-width:767px){.h-grid--cols-m-4 .h-grid-item-m--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(max-width:767px)and (min-width:768px)and (max-width:1024px){.h-grid--cols-m-4 .h-grid-item-t--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(max-width:767px)and (min-width:1025px){.h-grid--cols-m-4 .h-grid-item-d--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:768px){.h-grid{max-width:768px;padding-left:40px;padding-right:40px}.h-grid--cols-t-1{grid-template-columns:1fr}}@media(min-width:768px)and (max-width:767px){.h-grid--cols-t-1 .h-grid-item-m--centered,.h-grid--cols-t-1 .h-grid-item-m--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:768px)and (min-width:768px)and (max-width:1024px){.h-grid--cols-t-1 .h-grid-item-t--centered,.h-grid--cols-t-1 .h-grid-item-t--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:768px)and (min-width:1025px){.h-grid--cols-t-1 .h-grid-item-d--centered,.h-grid--cols-t-1 .h-grid-item-d--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:768px){.h-grid--cols-t-2{grid-template-columns:repeat(2,1fr)}}@media(min-width:768px)and (max-width:767px){.h-grid--cols-t-2 .h-grid-item-m--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:768px)and (min-width:768px)and (max-width:1024px){.h-grid--cols-t-2 .h-grid-item-t--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:768px)and (min-width:1025px){.h-grid--cols-t-2 .h-grid-item-d--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:768px){.h-grid--cols-t-4{grid-template-columns:repeat(4,1fr)}}@media(min-width:768px)and (max-width:767px){.h-grid--cols-t-4 .h-grid-item-m--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:768px)and (min-width:768px)and (max-width:1024px){.h-grid--cols-t-4 .h-grid-item-t--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:768px)and (min-width:1025px){.h-grid--cols-t-4 .h-grid-item-d--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:768px){.h-grid--cols-t-5{grid-template-columns:repeat(5,1fr)}}@media(min-width:768px)and (max-width:767px){.h-grid--cols-t-5 .h-grid-item-m--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:768px)and (min-width:768px)and (max-width:1024px){.h-grid--cols-t-5 .h-grid-item-t--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:768px)and (min-width:1025px){.h-grid--cols-t-5 .h-grid-item-d--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:768px){.h-grid--cols-t-8{grid-template-columns:repeat(8,1fr)}}@media(min-width:768px)and (max-width:767px){.h-grid--cols-t-8 .h-grid-item-m--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:768px)and (min-width:768px)and (max-width:1024px){.h-grid--cols-t-8 .h-grid-item-t--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:768px)and (min-width:1025px){.h-grid--cols-t-8 .h-grid-item-d--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px){.h-grid{-moz-column-gap:24px;column-gap:24px;max-width:1208px}.h-grid--cols-d-1{grid-template-columns:1fr}}@media(min-width:1025px)and (max-width:767px){.h-grid--cols-d-1 .h-grid-item-m--centered,.h-grid--cols-d-1 .h-grid-item-m--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px)and (min-width:768px)and (max-width:1024px){.h-grid--cols-d-1 .h-grid-item-t--centered,.h-grid--cols-d-1 .h-grid-item-t--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px)and (min-width:1025px){.h-grid--cols-d-1 .h-grid-item-d--centered,.h-grid--cols-d-1 .h-grid-item-d--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px){.h-grid--cols-d-2{grid-template-columns:repeat(2,1fr)}}@media(min-width:1025px)and (max-width:767px){.h-grid--cols-d-2 .h-grid-item-m--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px)and (min-width:768px)and (max-width:1024px){.h-grid--cols-d-2 .h-grid-item-t--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px)and (min-width:1025px){.h-grid--cols-d-2 .h-grid-item-d--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px){.h-grid--cols-d-3{grid-template-columns:repeat(3,1fr)}}@media(min-width:1025px)and (max-width:767px){.h-grid--cols-d-3 .h-grid-item-m--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px)and (min-width:768px)and (max-width:1024px){.h-grid--cols-d-3 .h-grid-item-t--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px)and (min-width:1025px){.h-grid--cols-d-3 .h-grid-item-d--centered:nth-child(2n):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px){.h-grid--cols-d-4{grid-template-columns:repeat(4,1fr)}}@media(min-width:1025px)and (max-width:767px){.h-grid--cols-d-4 .h-grid-item-m--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px)and (min-width:768px)and (max-width:1024px){.h-grid--cols-d-4 .h-grid-item-t--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px)and (min-width:1025px){.h-grid--cols-d-4 .h-grid-item-d--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px){.h-grid--cols-d-6{grid-template-columns:repeat(6,1fr)}}@media(min-width:1025px)and (max-width:767px){.h-grid--cols-d-6 .h-grid-item-m--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px)and (min-width:768px)and (max-width:1024px){.h-grid--cols-d-6 .h-grid-item-t--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px)and (min-width:1025px){.h-grid--cols-d-6 .h-grid-item-d--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px){.h-grid--cols-d-12{grid-template-columns:repeat(12,1fr)}}@media(min-width:1025px)and (max-width:767px){.h-grid--cols-d-12 .h-grid-item-m--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px)and (min-width:768px)and (max-width:1024px){.h-grid--cols-d-12 .h-grid-item-t--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1025px)and (min-width:1025px){.h-grid--cols-d-12 .h-grid-item-d--centered:nth-child(odd):last-child{display:flex;grid-column:1/-1;justify-content:center}}@media(min-width:1367px){.h-grid--sales{max-width:1472px;padding-left:80px;padding-right:80px}}@media(min-width:1551px){.h-grid--sales{padding-left:40px;padding-right:40px}}.h-grid-item{grid-column:span 1}.h-grid-item--span-2{grid-column:span 2}.h-grid-item--span-3{grid-column:span 3}.h-grid-item--span-4{grid-column:span 4}.h-grid-item--span-5{grid-column:span 5}.h-grid-item--span-6{grid-column:span 6}.h-grid-item--span-7{grid-column:span 7}.h-grid-item--span-8{grid-column:span 8}.h-grid-item--span-9{grid-column:span 9}.h-grid-item--span-10{grid-column:span 10}.h-grid-item--span-11{grid-column:span 11}.h-grid-item--span-12{grid-column:span 12}.h-image{background-repeat:no-repeat;background-size:cover;display:block}.h-form-field,.h-image,.h-image img{width:100%}.h-form-field.ltr .h-form-field__element--has-icon{padding-right:44px}.h-form-field.ltr .h-form-field__icon{right:16px}.h-form-field.rtl .h-form-field__element--has-icon{padding-left:44px}.h-form-field.rtl .h-form-field__icon{left:16px}.h-form-field__wrapper{flex-grow:1;position:relative}.h-form-field__icon{display:inline-flex;pointer-events:none;position:absolute;top:12px;z-index:1}.h-form-field__element{background-color:#fff;border:1px solid #dadce0;border-radius:4px;color:#36344d;display:block;line-height:20px;outline:none;padding:13px 16px;width:100%}.h-form-field__element::-moz-placeholder{color:#727586}.h-form-field__element::placeholder{color:#727586}.h-form-field__element--has-label::-moz-placeholder{opacity:0;-moz-transition:opacity .15s ease;transition:opacity .15s ease}.h-form-field__element--has-label::placeholder{opacity:0;transition:opacity .15s ease}.h-form-field__element--focused{border:2px solid #673de6;padding:12px 16px}.h-form-field__element--focused::-moz-placeholder{opacity:1}.h-form-field__element--focused::placeholder{opacity:1}.h-form-field__element--hovered{border:1px solid #5025d1;box-shadow:0 0 4px #673de6}.h-form-field__element--disabled{cursor:not-allowed}.h-form-field__element--error{border:2px solid #d63163;padding:12px 16px}.desktop-only{display:none}@media(min-width:768px){.desktop-only{display:block}.mobile-only{display:none}}.tooltip{display:block;z-index:98}.tooltip .tooltip-inner{background:#2f1c6a;border-radius:4px;color:#fff;font-size:inherit;max-width:200px;padding:16px}@media(min-width:1025px){.tooltip .tooltip-inner{max-width:240px;padding:24px}}.tooltip[x-placement^=top]{margin-bottom:5px}.tooltip[x-placement^=bottom]{margin-top:5px}.tooltip[x-placement^=right]{margin-left:5px}.tooltip[x-placement^=left]{margin-right:5px}.tooltip[aria-hidden=true]{opacity:0;transition:opacity .15s,visibility .15s;visibility:hidden}.tooltip[aria-hidden=vertical]{opacity:1;transition:opacity .15s;visibility:visible}', ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        var content = n(630);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(13).default)("a9db3c9c", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, '@font-face{font-display:swap;font-family:"DM Sans";font-style:normal;font-weight:400;src:url(/h-assets/fonts/DM_Sans-400-latin-ext1.woff2) format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:"DM Sans";font-style:normal;font-weight:400;src:url(/h-assets/fonts/DM_Sans-400-latin2.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:"DM Sans";font-style:normal;font-weight:700;src:url(/h-assets/fonts/DM_Sans-700-latin-ext3.woff2) format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:"DM Sans";font-style:normal;font-weight:700;src:url(/h-assets/fonts/DM_Sans-700-latin4.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:400;src:url(/h-assets/fonts/Noto_Sans-400-cyrillic-ext5.woff2) format("woff2");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:400;src:url(/h-assets/fonts/Noto_Sans-400-cyrillic6.woff2) format("woff2");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:400;src:url(/h-assets/fonts/Noto_Sans-400-devanagari7.woff2) format("woff2");unicode-range:u+0900-097f,u+1cd0-1cf6,u+1cf8-1cf9,u+200c-200d,u+20a8,u+20b9,u+25cc,u+a830-a839,u+a8e0-a8fb}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:400;src:url(/h-assets/fonts/Noto_Sans-400-greek-ext8.woff2) format("woff2");unicode-range:u+1f??}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:400;src:url(/h-assets/fonts/Noto_Sans-400-greek9.woff2) format("woff2");unicode-range:u+0370-03ff}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:400;src:url(/h-assets/fonts/Noto_Sans-400-vietnamese10.woff2) format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:400;src:url(/h-assets/fonts/Noto_Sans-400-latin-ext11.woff2) format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:400;src:url(/h-assets/fonts/Noto_Sans-400-latin12.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:700;src:url(/h-assets/fonts/Noto_Sans-700-cyrillic-ext13.woff2) format("woff2");unicode-range:u+0460-052f,u+1c80-1c88,u+20b4,u+2de0-2dff,u+a640-a69f,u+fe2e-fe2f}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:700;src:url(/h-assets/fonts/Noto_Sans-700-cyrillic14.woff2) format("woff2");unicode-range:u+0301,u+0400-045f,u+0490-0491,u+04b0-04b1,u+2116}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:700;src:url(/h-assets/fonts/Noto_Sans-700-devanagari15.woff2) format("woff2");unicode-range:u+0900-097f,u+1cd0-1cf6,u+1cf8-1cf9,u+200c-200d,u+20a8,u+20b9,u+25cc,u+a830-a839,u+a8e0-a8fb}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:700;src:url(/h-assets/fonts/Noto_Sans-700-greek-ext16.woff2) format("woff2");unicode-range:u+1f??}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:700;src:url(/h-assets/fonts/Noto_Sans-700-greek17.woff2) format("woff2");unicode-range:u+0370-03ff}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:700;src:url(/h-assets/fonts/Noto_Sans-700-vietnamese18.woff2) format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:700;src:url(/h-assets/fonts/Noto_Sans-700-latin-ext19.woff2) format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:"Noto Sans";font-style:normal;font-weight:700;src:url(/h-assets/fonts/Noto_Sans-700-latin20.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}', ""]), o.locals = {}, e.exports = o
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        const o = n(335);
        e.exports = async (content, e) => {
            const t = "apiData";
            o.existsSync(t) || o.mkdirSync(t), await o.writeFileSync(`apiData/${e}.json`, content, (e => {
                if (e) throw e
            }))
        }
    }, function(e, t, n) {
        "use strict";
        n(336)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only{display:none}@media(min-width:768px){.desktop-only{display:block}.mobile-only{display:none}}#layout.layout--full-black{background-color:#000}#layout.layout--full-black #tp-widget-wrapper .tp-star__canvas{fill:transparent}#layout.layout--full-black .h-footer{background-color:#000;color:#fff}#layout.layout--full-black .h-footer .h-payment-methods__more-btn,#layout.layout--full-black .h-footer__sections--item,#layout.layout--full-black .h-footer__sections--title{color:#fff}#layout.layout--full-black .h-footer svg{fill:#fff}#layout.layout--full-meteorite-dark{background-color:#2f1c6a}#layout.layout--full-meteorite-dark #tp-widget-wrapper .tp-star__canvas{fill:transparent}#layout.layout--full-meteorite-dark .h-footer{background-color:#2f1c6a;color:#fff}#layout.layout--full-meteorite-dark .h-footer__sections--item,#layout.layout--full-meteorite-dark .h-footer__sections--title{color:#fff}#layout.layout--full-meteorite-dark .h-footer .h-payment-methods__more-btn{color:#fc5185}#layout.layout--full-meteorite-dark .h-footer svg{fill:#fff}.tooltip-inner{background-color:#5025d1!important}", ""]), o.locals = {}, e.exports = o
    }, , , , , , , function(e, t, n) {
        "use strict";
        n(360)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-6b52e836]{display:none}@media(min-width:768px){.desktop-only[data-v-6b52e836]{display:block}.mobile-only[data-v-6b52e836]{display:none}}.h-navigation__menu-item[data-v-6b52e836]{align-items:center;display:flex;padding:12px}@media(min-width:1025px){.h-navigation__menu-item[data-v-6b52e836]:hover{opacity:.7}}@media(min-width:1367px){.h-navigation__menu-item[data-v-6b52e836]{margin-right:8px}}.h-navigation__menu-item--active[data-v-6b52e836]{opacity:.7}.h-navigation__menu-item--active .h-navigation__menu-item--icon[data-v-6b52e836]{transform:rotate(180deg)}@media(min-width:1025px){.h-navigation__menu-item-title[data-v-6b52e836]{margin-right:4px}}.h-navigation__menu-item-title--light[data-v-6b52e836]{color:#fff}.h-navigation__menu-item-title--dark[data-v-6b52e836]{color:#1d1e20}.h-navigation__menu-item-icon[data-v-6b52e836]{align-items:center;display:flex;transition:transform .3s ease}.h-navigation__menu-item-icon--opened[data-v-6b52e836]{transform:rotate(180deg)}.h-navigation__menu-item-sub-item[data-v-6b52e836]:not(:last-child){margin-bottom:20px}.h-navigation__menu-link[data-v-6b52e836]{display:inline-block;padding:12px}@media(min-width:1025px){.h-navigation__menu-link[data-v-6b52e836]{margin-right:4px}}@media(min-width:1367px){.h-navigation__menu-link[data-v-6b52e836]{margin-right:12px}}.h-navigation__menu-link a[data-v-6b52e836]{font-weight:300}@media(min-width:1025px){.h-navigation__menu-link a[data-v-6b52e836]:hover{opacity:.7}}.h-navigation__login[data-v-6b52e836]{display:inline-block}@media(min-width:1025px){.h-navigation__login[data-v-6b52e836]:hover{opacity:.7}}.h-navigation__cart[data-v-6b52e836]{align-items:center;display:flex}@media(min-width:1025px){.h-navigation__cart[data-v-6b52e836]:hover{opacity:.7}}@media(min-width:1367px){.h-navigation__cart[data-v-6b52e836]{margin-left:8px}}.h-navigation__cart__title[data-v-6b52e836]{font-weight:700;margin-left:4px}@media(min-width:1367px){.h-navigation.rtl .h-navigation__menu-item[data-v-6b52e836]{margin-left:8px;margin-right:0}}@media(min-width:1025px){.h-navigation.rtl .h-navigation__menu-item-title[data-v-6b52e836]{margin-left:4px;margin-right:0}}@media(min-width:1367px){.h-navigation.rtl .h-navigation__menu-link[data-v-6b52e836]{margin-left:12px;margin-right:0}.h-navigation.rtl .h-navigation__cart[data-v-6b52e836]{margin-left:0;margin-right:8px}}.h-navigation.rtl .h-navigation__cart__title[data-v-6b52e836]{margin-left:0;margin-right:4px}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(361)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-445808f4]{display:none}@media(min-width:768px){.desktop-only[data-v-445808f4]{display:block}.mobile-only[data-v-445808f4]{display:none}}.h-language-selector[data-v-445808f4]{align-items:center;cursor:pointer;display:flex}.h-language-selector--desktop[data-v-445808f4]{display:none}@media(min-width:1025px){.h-language-selector--desktop[data-v-445808f4]{display:flex}}.h-language-selector__flag[data-v-445808f4]{display:flex;height:20px;width:32px}.h-language-selector__lang[data-v-445808f4]{font-weight:700;margin-left:4px}.h-language-selector__lang[data-v-445808f4]:hover{opacity:.7}.h-language-selector__lang--light[data-v-445808f4]{color:#fff}.h-language-selector__lang--dark[data-v-445808f4]{color:#1d1e20}.h-language-selector__lang.rtl[data-v-445808f4]{margin-left:0;margin-right:4px}.h-language-selector__menu[data-v-445808f4]{display:none}@media(min-width:1025px){.h-language-selector__menu[data-v-445808f4]{background:#fff;display:block;height:calc(100vh - 88px);left:0;overflow-y:scroll;position:fixed;top:88px;width:100%;z-index:999999}}@media(min-width:1600px){.h-language-selector__menu[data-v-445808f4] .h-locale-selector{position:relative;top:50%;transform:translateY(-50%)}}@media(min-width:2560px){.h-language-selector__menu[data-v-445808f4] .h-locale-selector{top:142px;transform:none}}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        var map = {
            "./affiliates/IcQuotes.vue": [1034, 217],
            "./niagahoster-icons/IcAttachment.vue": [1035, 218],
            "./niagahoster-icons/IcBackup.vue": [1036, 219],
            "./niagahoster-icons/IcBestPrice.vue": [1037, 220],
            "./niagahoster-icons/IcCpanel.vue": [1038, 221],
            "./niagahoster-icons/IcCustomerTrust.vue": [1039, 222],
            "./niagahoster-icons/IcEmailBusiness.vue": [1040, 223],
            "./niagahoster-icons/IcEmailManager.vue": [1041, 224],
            "./niagahoster-icons/IcEmailSafe.vue": [1042, 225],
            "./niagahoster-icons/IcEnvelope.vue": [1043, 226],
            "./niagahoster-icons/IcEnvelopeOpen.vue": [1044, 227],
            "./niagahoster-icons/IcHeadphone.vue": [1045, 228],
            "./niagahoster-icons/IcMalwareProtection.vue": [1046, 229],
            "./niagahoster-icons/IcMoneyBack.vue": [1047, 230],
            "./niagahoster-icons/IcNetworkRedundant.vue": [1048, 231],
            "./niagahoster-icons/IcPaperPlaneTilt.vue": [1049, 232],
            "./niagahoster-icons/IcPrivacy.vue": [1050, 233],
            "./niagahoster-icons/IcProfessional.vue": [1051, 234],
            "./product-feature-icons/IcAccessManagement.vue": [1052, 235],
            "./product-feature-icons/IcBackups.vue": [1053, 236],
            "./product-feature-icons/IcCloudflareCdn.vue": [1054, 237],
            "./product-feature-icons/IcCustomerSupport.vue": [1055, 238],
            "./product-feature-icons/IcDdosProtection.vue": [1056, 239],
            "./product-feature-icons/IcEcommerceOptimization.vue": [1057, 240],
            "./product-feature-icons/IcExtraSecurity.vue": [1058, 241],
            "./product-feature-icons/IcFastServers.vue": [1059, 242],
            "./product-feature-icons/IcFreeDomain.vue": [1060, 243],
            "./product-feature-icons/IcFreeEmail.vue": [1061, 244],
            "./product-feature-icons/IcFreeMigration.vue": [1062, 245],
            "./product-feature-icons/IcGitIntegration.vue": [1063, 246],
            "./product-feature-icons/IcLiteSpeedWp.vue": [1064, 247],
            "./product-feature-icons/IcMoneyBack.vue": [1065, 248],
            "./product-feature-icons/IcPhpVersionControl.vue": [1066, 249],
            "./product-feature-icons/IcPremiumFeatures.vue": [1067, 250],
            "./product-feature-icons/IcProfessionalEmail.vue": [1068, 251],
            "./product-feature-icons/IcSmoothOnboarding.vue": [1069, 252],
            "./product-feature-icons/IcSsdStorage.vue": [1070, 253],
            "./product-feature-icons/IcSslCertificate.vue": [1071, 254],
            "./product-feature-icons/IcUnlimitedBandwidth.vue": [1072, 255],
            "./product-feature-icons/IcUnmeteredTraffic.vue": [1073, 256],
            "./product-feature-icons/IcUptimeGuarantee.vue": [1074, 257],
            "./product-feature-icons/IcWordpress.vue": [1075, 258],
            "./product-feature-icons/IcWpCliSsh.vue": [1076, 259],
            "./product-feature-icons/IcWpInstallation.vue": [1077, 260],
            "./product-icons/IcAgenciesHosting.vue": [1078, 261],
            "./product-icons/IcCloud.vue": [1079, 262],
            "./product-icons/IcCpanel.vue": [1080, 263],
            "./product-icons/IcCyberPanel.vue": [1081, 264],
            "./product-icons/IcDomainChecker.vue": [1082, 265],
            "./product-icons/IcDomainTransfer.vue": [1083, 266],
            "./product-icons/IcEmail.vue": [1084, 267],
            "./product-icons/IcGoogleWorkspace.vue": [1085, 268],
            "./product-icons/IcHostingerPro.vue": [1086, 269],
            "./product-icons/IcMinecraft.vue": [1087, 270],
            "./product-icons/IcPartnerProgram.vue": [1088, 271],
            "./product-icons/IcShared.vue": [1089, 272],
            "./product-icons/IcSslCertificate.vue": [1090, 273],
            "./product-icons/IcTitanEmail.vue": [1091, 274],
            "./product-icons/IcVps.vue": [1092, 275],
            "./product-icons/IcWebsiteBuilder.vue": [1093, 276],
            "./product-icons/IcWhois.vue": [1094, 277],
            "./product-icons/IcWindowsVps.vue": [1095, 278],
            "./product-icons/IcWordpress.vue": [1096, 279],
            "./review-icons/IcQuotes.vue": [1097, 280],
            "./review-icons/IcStar.vue": [1098, 281],
            "./social-icons/IcFacebook.vue": [537, 17],
            "./social-icons/IcFacebookRound.vue": [538, 18],
            "./social-icons/IcGithub.vue": [539, 19],
            "./social-icons/IcInstagram.vue": [540, 20],
            "./social-icons/IcLinkedIn.vue": [541, 21],
            "./social-icons/IcTwitter.vue": [542, 22],
            "./social-icons/IcVkontakte.vue": [543, 23],
            "./social-icons/IcYoutube.vue": [544, 24],
            "./ui-icons/IcArrowDown.vue": [545, 25],
            "./ui-icons/IcArrowDropDown.vue": [546, 26],
            "./ui-icons/IcArrowDropUp.vue": [547, 27],
            "./ui-icons/IcArrowLeft.vue": [548, 28],
            "./ui-icons/IcArrowRight.vue": [549, 29],
            "./ui-icons/IcArrowUp.vue": [550, 30],
            "./ui-icons/IcBurger.vue": [551, 31],
            "./ui-icons/IcCancel.vue": [552, 32],
            "./ui-icons/IcCheck.vue": [553, 33],
            "./ui-icons/IcCheckCircle.vue": [554, 34],
            "./ui-icons/IcCircledCheck.vue": [555, 35],
            "./ui-icons/IcClose.vue": [556, 36],
            "./ui-icons/IcCross.vue": [557, 37],
            "./ui-icons/IcDanger.vue": [558, 38],
            "./ui-icons/IcError.vue": [559, 39],
            "./ui-icons/IcExclamation.vue": [560, 40],
            "./ui-icons/IcFreeSsl.vue": [561, 41],
            "./ui-icons/IcGlobe.vue": [562, 42],
            "./ui-icons/IcGoogleColor.vue": [563, 43],
            "./ui-icons/IcHeadset.vue": [564, 44],
            "./ui-icons/IcHelp.vue": [565, 45],
            "./ui-icons/IcHostingerLogo.vue": [566, 46],
            "./ui-icons/IcIp.vue": [567, 47],
            "./ui-icons/IcLoading.vue": [568, 48],
            "./ui-icons/IcLock.vue": [569, 49],
            "./ui-icons/IcMeter.vue": [570, 50],
            "./ui-icons/IcNiagaHosterLogo.vue": [571, 51],
            "./ui-icons/IcQuestion.vue": [572, 52],
            "./ui-icons/IcResources.vue": [573, 53],
            "./ui-icons/IcSearch.vue": [574, 54],
            "./ui-icons/IcSecurity.vue": [575, 55],
            "./ui-icons/IcShield.vue": [576, 56],
            "./ui-icons/IcShine.vue": [577, 57],
            "./ui-icons/IcShoppingCart.vue": [578, 58],
            "./ui-icons/IcSuccess.vue": [579, 59],
            "./ui-icons/IcVisibility.vue": [580, 60],
            "./ui-icons/IcVisibilityOff.vue": [581, 61]
        };

        function o(e) {
            if (!n.o(map, e)) return Promise.resolve().then((function() {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }));
            var t = map[e],
                o = t[0];
            return n.e(t[1]).then((function() {
                return n(o)
            }))
        }
        o.keys = function() {
            return Object.keys(map)
        }, o.id = 830, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(362)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-165629f9]{display:none}@media(min-width:768px){.desktop-only[data-v-165629f9]{display:block}.mobile-only[data-v-165629f9]{display:none}}.h-icon-dark[data-v-165629f9]{fill:#1d1e20}.h-icon-light[data-v-165629f9]{fill:#fff}.h-icon-gray[data-v-165629f9]{fill:#727586}.h-icon-primary[data-v-165629f9]{fill:#673de6}.h-icon-primary-hoster-blue[data-v-165629f9]{fill:#007aff}.h-icon-meteorite[data-v-165629f9]{fill:#8c85ff}.h-icon-danger[data-v-165629f9]{fill:#fc5185}.h-icon-success[data-v-165629f9]{fill:#00b090}.h-icon-warning[data-v-165629f9]{fill:#ffcd35}.h-icon-gray-dark[data-v-165629f9]{fill:#36344d}.h-icon-primary-dark[data-v-165629f9]{fill:#5025d1}.h-icon-meteorite-dark[data-v-165629f9]{fill:#2f1c6a}.h-icon-danger-dark[data-v-165629f9]{fill:#d63163}.h-icon-success-dark[data-v-165629f9]{fill:#008361}.h-icon-warning-dark[data-v-165629f9]{fill:#fea419}.h-icon-gray-light[data-v-165629f9]{fill:#f2f3f6}.h-icon-primary-light[data-v-165629f9]{fill:#ebe4ff}.h-icon-meteorite-light[data-v-165629f9]{fill:#d5dfff}.h-icon-danger-light[data-v-165629f9]{fill:#ffe8ef}.h-icon-success-light[data-v-165629f9]{fill:#def4f0}.h-icon-warning-light[data-v-165629f9]{fill:#fff8e2}.h-icon-manatee[data-v-165629f9]{fill:#8c93a9}.h-icon-spindle[data-v-165629f9]{fill:#b6bdd3}.h-icon-periwinkle[data-v-165629f9]{fill:#c5cde9}.h-icon-ghost-white[data-v-165629f9]{fill:#fafbff}.h-icon-webhost-primary[data-v-165629f9]{fill:#ff5c62}.h-icon-gray-border[data-v-165629f9]{fill:#dadce0}.h-icon-white-blue[data-v-165629f9]{fill:#f4f5ff}.h-icon-facebook[data-v-165629f9]{fill:#1877f2}.h-icon-github[data-v-165629f9]{fill:#2f363d}.h-icon-black[data-v-165629f9]{fill:#000}.h-icon-light-opacity-20[data-v-165629f9]{fill:hsla(0,0%,100%,.2)}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(363)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-417cded2]{display:none}@media(min-width:768px){.desktop-only[data-v-417cded2]{display:block}.mobile-only[data-v-417cded2]{display:none}}.h-nav-subitem[data-v-417cded2]{align-items:center;color:#2f1c6a;cursor:pointer;display:flex;flex-direction:row;transition:all .2s ease-in-out}.h-nav-subitem__icon[data-v-417cded2]{margin-right:8px}.h-nav-subitem__text-container[data-v-417cded2]{display:flex;flex-direction:column;text-align:left;width:308px}.h-nav-subitem__text[data-v-417cded2],.h-nav-subitem__text[data-v-417cded2]:hover{color:#2f1c6a}.h-nav-subitem[data-v-417cded2]:hover{transform:scale(1.05)}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(364)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-293a984d]{display:none}@media(min-width:768px){.desktop-only[data-v-293a984d]{display:block}.mobile-only[data-v-293a984d]{display:none}}.h-dropdown[data-v-293a984d]{outline-style:none}.h-dropdown[data-v-293a984d],.h-dropdown__activator[data-v-293a984d]{display:inline-block;position:relative}.h-dropdown__activator[data-v-293a984d]{cursor:pointer}.h-dropdown__content[data-v-293a984d]{background:#fff;border-radius:4px;box-shadow:0 0 15px rgba(0,0,0,.15);padding:24px;position:absolute}.h-dropdown__content--hidden[data-v-293a984d]{opacity:0;visibility:hidden}.h-dropdown__content-triangle[data-v-293a984d]{background:#fff;border-radius:4px 0;box-shadow:-5px -5px 5px rgba(0,0,0,.03);height:16px;left:50%;position:absolute;top:0;transform:rotate(45deg) translateX(-50%);width:16px}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(365)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, '.desktop-only[data-v-e6f19700]{display:none}@media(min-width:768px){.desktop-only[data-v-e6f19700]{display:block}.mobile-only[data-v-e6f19700]{display:none}}.h-button[data-v-e6f19700]{align-items:center;background-color:#673de6;border:none;border-radius:4px;color:#fff;cursor:pointer;display:flex;justify-content:center;line-height:1;min-height:48px;padding:12px 16px;position:relative;text-align:center;transition:.3s ease-in-out;transition-property:color,width,background-color;width:100%}.h-button[data-v-e6f19700]:active,.h-button[data-v-e6f19700]:focus(.h-button--disabled){background-color:#5025d1;color:#fff}.h-button[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text){box-shadow:0 1px 8px rgba(0,0,0,.16)}.h-button--disabled[data-v-e6f19700]{background:#727586;border:2px solid #727586;color:#fff;cursor:not-allowed;opacity:1}.h-button--disabled[data-v-e6f19700]:active,.h-button--disabled[data-v-e6f19700]:focus{box-shadow:none;outline:none}@media(min-width:1025px){.h-button--disabled[data-v-e6f19700]:not(.h-button--no-hover):hover{box-shadow:none;outline:none}}.h-button--disabled.h-button-text[data-v-e6f19700]{background:transparent;border:none;color:#727586!important}.h-button--disabled.h-button-outline[data-v-e6f19700]{background:transparent!important;border:2px solid #dadce0!important;color:#727586!important}.h-button--disabled.h-button-outline[data-v-e6f19700]:active,.h-button--disabled.h-button-outline[data-v-e6f19700]:focus,.h-button--disabled.h-button-text[data-v-e6f19700]:active,.h-button--disabled.h-button-text[data-v-e6f19700]:focus{background:transparent!important}@media(min-width:1025px){.h-button--disabled.h-button-outline[data-v-e6f19700]:not(.h-button--no-hover):hover,.h-button--disabled.h-button-text[data-v-e6f19700]:not(.h-button--no-hover):hover{background:transparent!important}}.h-button--loading[data-v-e6f19700]{color:transparent!important;cursor:not-allowed}.h-button-icon[data-v-e6f19700]{background:transparent;font-weight:700;padding:0}.h-button-dark[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled){background-color:#1d1e20}.h-button-dark[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):active,.h-button-dark[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):focus{color:#fff}@media(min-width:1025px){.h-button-dark[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):not(.h-button--no-hover):hover{color:#fff}}.h-button-light[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled){background-color:#fff}.h-button-light[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):active,.h-button-light[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):focus{color:#fff}@media(min-width:1025px){.h-button-light[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):not(.h-button--no-hover):hover{color:#fff}}.h-button-gray[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled){background-color:#727586}.h-button-gray[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):active,.h-button-gray[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):focus{background-color:#36344d;color:#fff}@media(min-width:1025px){.h-button-gray[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):not(.h-button--no-hover):hover{background-color:#36344d;color:#fff}}.h-button-primary[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled){background-color:#673de6}.h-button-primary[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):active,.h-button-primary[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):focus{background-color:#5025d1;color:#fff}@media(min-width:1025px){.h-button-primary[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):not(.h-button--no-hover):hover{background-color:#5025d1;color:#fff}}.h-button-primary-hoster-blue[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled){background-color:#007aff}.h-button-primary-hoster-blue[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):active,.h-button-primary-hoster-blue[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):focus{color:#fff}@media(min-width:1025px){.h-button-primary-hoster-blue[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):not(.h-button--no-hover):hover{color:#fff}}.h-button-meteorite[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled){background-color:#8c85ff}.h-button-meteorite[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):active,.h-button-meteorite[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):focus{background-color:#2f1c6a;color:#fff}@media(min-width:1025px){.h-button-meteorite[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):not(.h-button--no-hover):hover{background-color:#2f1c6a;color:#fff}}.h-button-danger[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled){background-color:#fc5185}.h-button-danger[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):active,.h-button-danger[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):focus{background-color:#d63163;color:#fff}@media(min-width:1025px){.h-button-danger[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):not(.h-button--no-hover):hover{background-color:#d63163;color:#fff}}.h-button-success[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled){background-color:#00b090}.h-button-success[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):active,.h-button-success[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):focus{background-color:#008361;color:#fff}@media(min-width:1025px){.h-button-success[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):not(.h-button--no-hover):hover{background-color:#008361;color:#fff}}.h-button-warning[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled){background-color:#ffcd35}.h-button-warning[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):active,.h-button-warning[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):focus{background-color:#fea419;color:#fff}@media(min-width:1025px){.h-button-warning[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):not(.h-button--no-hover):hover{background-color:#fea419;color:#fff}}.h-button-facebook[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled){background-color:#1877f2}.h-button-facebook[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):active,.h-button-facebook[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):focus{color:#fff}@media(min-width:1025px){.h-button-facebook[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):not(.h-button--no-hover):hover{color:#fff}}.h-button-github[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled){background-color:#2f363d}.h-button-github[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):active,.h-button-github[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):focus{color:#fff}@media(min-width:1025px){.h-button-github[data-v-e6f19700]:not(.h-button-outline):not(.h-button-text):not(.h-button--disabled):not(.h-button--no-hover):hover{color:#fff}}.h-button-dark.h-button-outline[data-v-e6f19700]{border:2px solid #1d1e20;font-weight:700}.h-button-dark.h-button-outline[data-v-e6f19700],.h-button-dark.h-button-text[data-v-e6f19700]{background:transparent;color:#1d1e20;font-weight:700}.h-button-light.h-button-outline[data-v-e6f19700]{border:1px solid #dadce0;font-weight:700}.h-button-light.h-button-outline[data-v-e6f19700],.h-button-light.h-button-text[data-v-e6f19700]{background:transparent;color:#fff;font-weight:700}.h-button-gray.h-button-outline[data-v-e6f19700]{border:2px solid #727586;font-weight:700}.h-button-gray.h-button-outline[data-v-e6f19700],.h-button-gray.h-button-text[data-v-e6f19700]{background:transparent;color:#727586;font-weight:700}.h-button-gray.h-button-outline[data-v-e6f19700]:active,.h-button-gray.h-button-text[data-v-e6f19700]:active{background:#f2f3f6}@media(min-width:1025px){.h-button-gray.h-button-outline[data-v-e6f19700]:not(.h-button--no-hover):hover,.h-button-gray.h-button-text[data-v-e6f19700]:not(.h-button--no-hover):hover{background:#f2f3f6}}.h-button-primary.h-button-outline[data-v-e6f19700]{border:2px solid #673de6;font-weight:700}.h-button-primary.h-button-outline[data-v-e6f19700],.h-button-primary.h-button-text[data-v-e6f19700]{background:transparent;color:#673de6;font-weight:700}.h-button-primary.h-button-outline[data-v-e6f19700]:active,.h-button-primary.h-button-text[data-v-e6f19700]:active{background:#ebe4ff}@media(min-width:1025px){.h-button-primary.h-button-outline[data-v-e6f19700]:not(.h-button--no-hover):hover,.h-button-primary.h-button-text[data-v-e6f19700]:not(.h-button--no-hover):hover{background:#ebe4ff}}.h-button-primary-hoster-blue.h-button-outline[data-v-e6f19700]{border:2px solid #007aff;font-weight:700}.h-button-primary-hoster-blue.h-button-outline[data-v-e6f19700],.h-button-primary-hoster-blue.h-button-text[data-v-e6f19700]{background:transparent;color:#007aff;font-weight:700}.h-button-meteorite.h-button-outline[data-v-e6f19700]{border:2px solid #8c85ff;font-weight:700}.h-button-meteorite.h-button-outline[data-v-e6f19700],.h-button-meteorite.h-button-text[data-v-e6f19700]{background:transparent;color:#8c85ff;font-weight:700}.h-button-meteorite.h-button-outline[data-v-e6f19700]:active,.h-button-meteorite.h-button-text[data-v-e6f19700]:active{background:#d5dfff}@media(min-width:1025px){.h-button-meteorite.h-button-outline[data-v-e6f19700]:not(.h-button--no-hover):hover,.h-button-meteorite.h-button-text[data-v-e6f19700]:not(.h-button--no-hover):hover{background:#d5dfff}}.h-button-danger.h-button-outline[data-v-e6f19700]{border:2px solid #fc5185;font-weight:700}.h-button-danger.h-button-outline[data-v-e6f19700],.h-button-danger.h-button-text[data-v-e6f19700]{background:transparent;color:#fc5185;font-weight:700}.h-button-danger.h-button-outline[data-v-e6f19700]:active,.h-button-danger.h-button-text[data-v-e6f19700]:active{background:#ffe8ef}@media(min-width:1025px){.h-button-danger.h-button-outline[data-v-e6f19700]:not(.h-button--no-hover):hover,.h-button-danger.h-button-text[data-v-e6f19700]:not(.h-button--no-hover):hover{background:#ffe8ef}}.h-button-success.h-button-outline[data-v-e6f19700]{border:2px solid #00b090;font-weight:700}.h-button-success.h-button-outline[data-v-e6f19700],.h-button-success.h-button-text[data-v-e6f19700]{background:transparent;color:#00b090;font-weight:700}.h-button-success.h-button-outline[data-v-e6f19700]:active,.h-button-success.h-button-text[data-v-e6f19700]:active{background:#def4f0}@media(min-width:1025px){.h-button-success.h-button-outline[data-v-e6f19700]:not(.h-button--no-hover):hover,.h-button-success.h-button-text[data-v-e6f19700]:not(.h-button--no-hover):hover{background:#def4f0}}.h-button-warning.h-button-outline[data-v-e6f19700]{border:2px solid #ffcd35;font-weight:700}.h-button-warning.h-button-outline[data-v-e6f19700],.h-button-warning.h-button-text[data-v-e6f19700]{background:transparent;color:#1d1e20;font-weight:700}.h-button-warning.h-button-outline[data-v-e6f19700]:active,.h-button-warning.h-button-text[data-v-e6f19700]:active{background:#fff8e2}@media(min-width:1025px){.h-button-warning.h-button-outline[data-v-e6f19700]:not(.h-button--no-hover):hover,.h-button-warning.h-button-text[data-v-e6f19700]:not(.h-button--no-hover):hover{background:#fff8e2}}.h-button-facebook.h-button-outline[data-v-e6f19700]{border:2px solid #1877f2;font-weight:700}.h-button-facebook.h-button-outline[data-v-e6f19700],.h-button-facebook.h-button-text[data-v-e6f19700]{background:transparent;color:#1877f2;font-weight:700}.h-button-github.h-button-outline[data-v-e6f19700]{border:2px solid #2f363d;font-weight:700}.h-button-github.h-button-outline[data-v-e6f19700],.h-button-github.h-button-text[data-v-e6f19700]{background:transparent;color:#1d1e20;font-weight:700}.h-button-icon--dark[data-v-e6f19700],.h-button-icon--dark[data-v-e6f19700]:active,.h-button-icon--dark[data-v-e6f19700]:focus{color:"dark"}@media(min-width:1025px){.h-button-icon--dark[data-v-e6f19700]:not(.h-button--no-hover):hover{color:"dark"}}.h-button-icon--light[data-v-e6f19700],.h-button-icon--light[data-v-e6f19700]:active,.h-button-icon--light[data-v-e6f19700]:focus{color:"light"}@media(min-width:1025px){.h-button-icon--light[data-v-e6f19700]:not(.h-button--no-hover):hover{color:"light"}}.h-button-icon--gray[data-v-e6f19700],.h-button-icon--gray[data-v-e6f19700]:active,.h-button-icon--gray[data-v-e6f19700]:focus{color:"gray"}@media(min-width:1025px){.h-button-icon--gray[data-v-e6f19700]:not(.h-button--no-hover):hover{color:"gray"}}.h-button-icon--primary[data-v-e6f19700],.h-button-icon--primary[data-v-e6f19700]:active,.h-button-icon--primary[data-v-e6f19700]:focus{color:"primary"}@media(min-width:1025px){.h-button-icon--primary[data-v-e6f19700]:not(.h-button--no-hover):hover{color:"primary"}}.h-button-icon--primary-hoster-blue[data-v-e6f19700],.h-button-icon--primary-hoster-blue[data-v-e6f19700]:active,.h-button-icon--primary-hoster-blue[data-v-e6f19700]:focus{color:"primary-hoster-blue"}@media(min-width:1025px){.h-button-icon--primary-hoster-blue[data-v-e6f19700]:not(.h-button--no-hover):hover{color:"primary-hoster-blue"}}.h-button-icon--meteorite[data-v-e6f19700],.h-button-icon--meteorite[data-v-e6f19700]:active,.h-button-icon--meteorite[data-v-e6f19700]:focus{color:"meteorite"}@media(min-width:1025px){.h-button-icon--meteorite[data-v-e6f19700]:not(.h-button--no-hover):hover{color:"meteorite"}}.h-button-icon--danger[data-v-e6f19700],.h-button-icon--danger[data-v-e6f19700]:active,.h-button-icon--danger[data-v-e6f19700]:focus{color:"danger"}@media(min-width:1025px){.h-button-icon--danger[data-v-e6f19700]:not(.h-button--no-hover):hover{color:"danger"}}.h-button-icon--success[data-v-e6f19700],.h-button-icon--success[data-v-e6f19700]:active,.h-button-icon--success[data-v-e6f19700]:focus{color:"success"}@media(min-width:1025px){.h-button-icon--success[data-v-e6f19700]:not(.h-button--no-hover):hover{color:"success"}}.h-button-icon--warning[data-v-e6f19700],.h-button-icon--warning[data-v-e6f19700]:active,.h-button-icon--warning[data-v-e6f19700]:focus{color:"warning"}@media(min-width:1025px){.h-button-icon--warning[data-v-e6f19700]:not(.h-button--no-hover):hover{color:"warning"}}.h-button-icon--facebook[data-v-e6f19700],.h-button-icon--facebook[data-v-e6f19700]:active,.h-button-icon--facebook[data-v-e6f19700]:focus{color:"facebook"}@media(min-width:1025px){.h-button-icon--facebook[data-v-e6f19700]:not(.h-button--no-hover):hover{color:"facebook"}}.h-button-icon--github[data-v-e6f19700],.h-button-icon--github[data-v-e6f19700]:active,.h-button-icon--github[data-v-e6f19700]:focus{color:"github"}@media(min-width:1025px){.h-button-icon--github[data-v-e6f19700]:not(.h-button--no-hover):hover{color:"github"}}', ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        var map = {
            "./IcArrowDown.vue": [545, 25],
            "./IcArrowDropDown.vue": [546, 26],
            "./IcArrowDropUp.vue": [547, 27],
            "./IcArrowLeft.vue": [548, 28],
            "./IcArrowRight.vue": [549, 29],
            "./IcArrowUp.vue": [550, 30],
            "./IcBurger.vue": [551, 31],
            "./IcCancel.vue": [552, 32],
            "./IcCheck.vue": [553, 33],
            "./IcCheckCircle.vue": [554, 34],
            "./IcCircledCheck.vue": [555, 35],
            "./IcClose.vue": [556, 36],
            "./IcCross.vue": [557, 37],
            "./IcDanger.vue": [558, 38],
            "./IcError.vue": [559, 39],
            "./IcExclamation.vue": [560, 40],
            "./IcFreeSsl.vue": [561, 41],
            "./IcGlobe.vue": [562, 42],
            "./IcGoogleColor.vue": [563, 43],
            "./IcHeadset.vue": [564, 44],
            "./IcHelp.vue": [565, 45],
            "./IcHostingerLogo.vue": [566, 46],
            "./IcIp.vue": [567, 47],
            "./IcLoading.vue": [568, 48],
            "./IcLock.vue": [569, 49],
            "./IcMeter.vue": [570, 50],
            "./IcNiagaHosterLogo.vue": [571, 51],
            "./IcQuestion.vue": [572, 52],
            "./IcResources.vue": [573, 53],
            "./IcSearch.vue": [574, 54],
            "./IcSecurity.vue": [575, 55],
            "./IcShield.vue": [576, 56],
            "./IcShine.vue": [577, 57],
            "./IcShoppingCart.vue": [578, 58],
            "./IcSuccess.vue": [579, 59],
            "./IcVisibility.vue": [580, 60],
            "./IcVisibilityOff.vue": [581, 61]
        };

        function o(e) {
            if (!n.o(map, e)) return Promise.resolve().then((function() {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }));
            var t = map[e],
                o = t[0];
            return n.e(t[1]).then((function() {
                return n(o)
            }))
        }
        o.keys = function() {
            return Object.keys(map)
        }, o.id = 839, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(366)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only{display:none}@media(min-width:768px){.desktop-only{display:block}.mobile-only{display:none}}.h-circle-loader__content .full-circle{stroke-dasharray:200,200;stroke:#ebe4ff}.h-circle-loader__content .checkmark,.h-circle-loader__content .checkmark__circle{stroke:#00b090}.h-circle-loader__content .checkmark__check{stroke-dasharray:48;stroke-dashoffset:48;stroke-width:3;animation:stroke .5s cubic-bezier(.65,0,.45,1) 1s forwards}@keyframes stroke{to{stroke-dashoffset:0}}.h-circle-loader__content .crossmark{stroke:#fc5185}.h-circle-loader__content .crossmark__cross-wrapper{animation:rotation 1.5s ease-in-out 1.5s forwards;transform-origin:center}.h-circle-loader__content .crossmark__cross-wrapper :first-child{animation:stroke .5s linear 1s forwards}.h-circle-loader__content .crossmark__cross-wrapper :nth-child(2){animation:stroke .5s linear 1.25s forwards}@keyframes rotation{0%{transform:rotate(0deg)}20%{transform:rotate(-15deg)}40%{transform:rotate(15deg)}60%{transform:rotate(-15deg)}80%{transform:rotate(15deg)}to{transform:rotate(0deg)}}.h-circle-loader__content .crossmark__circle{stroke:#fc5185}.h-circle-loader__content .crossmark__cross{stroke-dasharray:48;stroke-dashoffset:48;stroke-width:3}.h-circle-loader__content .circular{animation:rotate 2s linear infinite;height:50px;width:50px}.h-circle-loader__content .icon-wrapper{height:50px;width:50px}.h-circle-loader__content .path{stroke-dasharray:1,200;stroke-dashoffset:0;stroke:#673de6;animation:dash 1.5s ease-in-out infinite,color 6s ease-in-out infinite}@keyframes rotate{to{transform:rotate(1turn)}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}.h-circle-loader__content--dark .path{stroke:#1d1e20}.h-circle-loader__content--light .path{stroke:#fff}.h-circle-loader__content--gray .path{stroke:#727586}.h-circle-loader__content--primary .path{stroke:#673de6}.h-circle-loader__content--primary-hoster-blue .path{stroke:#007aff}.h-circle-loader__content--meteorite .path{stroke:#8c85ff}.h-circle-loader__content--danger .path{stroke:#fc5185}.h-circle-loader__content--success .path{stroke:#00b090}.h-circle-loader__content--warning .path{stroke:#ffcd35}.h-circle-loader__content--absolute{left:50%;margin-left:-25px!important;margin-top:-25px!important;position:absolute;top:50%}.h-circle-loader__content--absolute-right{left:auto;right:0}.h-circle-loader__content--centered{display:block;margin:auto;text-align:center}.h-circle-loader__title{text-align:center}.h-circle-loader__message{color:#727586;text-align:center}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(367)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, '.desktop-only[data-v-83686de8]{display:none}@media(min-width:768px){.desktop-only[data-v-83686de8]{display:block}.mobile-only[data-v-83686de8]{display:none}}.h-nav[data-v-83686de8]{align-items:flex-start;background:transparent;display:flex;max-width:100%;position:absolute;width:100vw;z-index:99}.h-nav__main-menu-wrapper[data-v-83686de8]{align-items:center;display:flex;margin:0 auto;max-width:1920px;min-height:56px;padding:10px 16px;position:relative;width:100%}@media(min-width:768px){.h-nav__main-menu-wrapper[data-v-83686de8]{min-height:62px;padding:16px 20px}}@media(min-width:1025px){.h-nav__main-menu-wrapper[data-v-83686de8]{min-height:88px;padding:20px 40px}}.h-nav__start[data-v-83686de8]{align-items:center;display:flex;flex-grow:1}@media(max-width:767px){.h-nav__logo[data-v-83686de8]{width:118px}}.h-nav__menu[data-v-83686de8]{display:none}@media(min-width:1025px){.h-nav__menu[data-v-83686de8]{align-items:center;background:transparent;display:flex;height:auto;overflow:visible;overflow:initial;padding-left:16px;position:relative;text-align:right}.h-nav__menu--end-spacing[data-v-83686de8]{padding-right:16px}}.h-nav__mobile-menu[data-v-83686de8]{display:none;padding:0 16px}.h-nav__mobile-menu--open[data-v-83686de8]{background:#fff;bottom:0;display:block;height:100%;left:0;overflow:scroll;position:fixed;right:0;top:56px}@media(min-width:768px){.h-nav__mobile-menu--open[data-v-83686de8]{top:62px}}@media(min-width:1025px){.h-nav__mobile-menu[data-v-83686de8]{display:none}}.h-nav__end-menu[data-v-83686de8]{align-items:center;display:flex}.h-nav__mobile-menu-burger[data-v-83686de8]{cursor:pointer;display:inline-block}@media(min-width:1025px){.h-nav__mobile-menu-burger[data-v-83686de8]{display:none}}.h-nav--full-h[data-v-83686de8]{min-height:100vh}.h-nav--active[data-v-83686de8],.h-nav--sticky[data-v-83686de8]{background:#fff}.h-nav--sticky[data-v-83686de8]{box-shadow:0 4px 10px rgba(0,0,0,.1);left:0;position:fixed;top:0}.h-nav--active[data-v-83686de8]:after{bottom:0;box-shadow:0 6px 8px rgba(0,0,0,.08);content:"";height:8px;left:0;position:absolute;right:0;z-index:1000000}.h-nav.ltr .h-nav__end-menu[data-v-83686de8]>:not(:last-child){margin-right:16px}@media(min-width:1025px){.h-nav.ltr .h-nav__end-menu[data-v-83686de8]>:not(:last-child){margin-right:0}}.h-nav.ltr .h-nav__currency-selector[data-v-83686de8],.h-nav.ltr .h-nav__locale-selector[data-v-83686de8],.h-nav.ltr .h-nav__logo[data-v-83686de8]{margin-right:16px}@media(min-width:1025px){.h-nav.ltr .h-nav__currency-selector[data-v-83686de8],.h-nav.ltr .h-nav__locale-selector[data-v-83686de8],.h-nav.ltr .h-nav__logo[data-v-83686de8]{margin-right:24px}}.h-nav.rtl .h-nav__end-menu[data-v-83686de8]>:not(:last-child){margin-left:16px}@media(min-width:1025px){.h-nav.rtl .h-nav__end-menu[data-v-83686de8]>:not(:last-child){margin-left:0}}.h-nav.rtl .h-nav__currency-selector[data-v-83686de8],.h-nav.rtl .h-nav__locale-selector[data-v-83686de8],.h-nav.rtl .h-nav__logo[data-v-83686de8]{margin-left:24px}.h-nav--dark[data-v-83686de8],.h-nav--dark *[data-v-83686de8],.h-nav--dark[data-v-83686de8] :hover,.h-nav--dark.h-nav--sticky[data-v-83686de8],.h-nav--dark.h-nav--sticky *[data-v-83686de8],.h-nav--dark.h-nav--sticky[data-v-83686de8] :hover,.h-nav--dark.h-nav--sticky[data-v-83686de8]:hover,.h-nav--dark[data-v-83686de8]:hover{color:#1d1e20}.h-nav--light[data-v-83686de8],.h-nav--light *[data-v-83686de8],.h-nav--light[data-v-83686de8] :hover,.h-nav--light[data-v-83686de8]:hover{color:#fff}.h-nav--light.h-nav--sticky[data-v-83686de8],.h-nav--light.h-nav--sticky *[data-v-83686de8]{color:#1d1e20}.h-nav--light.h-nav--sticky[data-v-83686de8] :hover,.h-nav--light.h-nav--sticky[data-v-83686de8]:hover{color:#fff}.h-nav--gray[data-v-83686de8],.h-nav--gray *[data-v-83686de8],.h-nav--gray[data-v-83686de8] :hover,.h-nav--gray[data-v-83686de8]:hover{color:#727586}.h-nav--gray.h-nav--sticky[data-v-83686de8],.h-nav--gray.h-nav--sticky *[data-v-83686de8]{color:#1d1e20}.h-nav--gray.h-nav--sticky[data-v-83686de8] :hover,.h-nav--gray.h-nav--sticky[data-v-83686de8]:hover{color:#727586}.h-nav--primary[data-v-83686de8],.h-nav--primary *[data-v-83686de8],.h-nav--primary[data-v-83686de8] :hover,.h-nav--primary[data-v-83686de8]:hover{color:#673de6}.h-nav--primary.h-nav--sticky[data-v-83686de8],.h-nav--primary.h-nav--sticky *[data-v-83686de8]{color:#1d1e20}.h-nav--primary.h-nav--sticky[data-v-83686de8] :hover,.h-nav--primary.h-nav--sticky[data-v-83686de8]:hover{color:#673de6}.h-nav--primary-hoster-blue[data-v-83686de8],.h-nav--primary-hoster-blue *[data-v-83686de8],.h-nav--primary-hoster-blue[data-v-83686de8] :hover,.h-nav--primary-hoster-blue[data-v-83686de8]:hover{color:#007aff}.h-nav--primary-hoster-blue.h-nav--sticky[data-v-83686de8],.h-nav--primary-hoster-blue.h-nav--sticky *[data-v-83686de8]{color:#1d1e20}.h-nav--primary-hoster-blue.h-nav--sticky[data-v-83686de8] :hover,.h-nav--primary-hoster-blue.h-nav--sticky[data-v-83686de8]:hover{color:#007aff}.h-nav--meteorite[data-v-83686de8],.h-nav--meteorite *[data-v-83686de8],.h-nav--meteorite[data-v-83686de8] :hover,.h-nav--meteorite[data-v-83686de8]:hover{color:#8c85ff}.h-nav--meteorite.h-nav--sticky[data-v-83686de8],.h-nav--meteorite.h-nav--sticky *[data-v-83686de8]{color:#1d1e20}.h-nav--meteorite.h-nav--sticky[data-v-83686de8] :hover,.h-nav--meteorite.h-nav--sticky[data-v-83686de8]:hover{color:#8c85ff}.h-nav--danger[data-v-83686de8],.h-nav--danger *[data-v-83686de8],.h-nav--danger[data-v-83686de8] :hover,.h-nav--danger[data-v-83686de8]:hover{color:#fc5185}.h-nav--danger.h-nav--sticky[data-v-83686de8],.h-nav--danger.h-nav--sticky *[data-v-83686de8]{color:#1d1e20}.h-nav--danger.h-nav--sticky[data-v-83686de8] :hover,.h-nav--danger.h-nav--sticky[data-v-83686de8]:hover{color:#fc5185}.h-nav--success[data-v-83686de8],.h-nav--success *[data-v-83686de8],.h-nav--success[data-v-83686de8] :hover,.h-nav--success[data-v-83686de8]:hover{color:#00b090}.h-nav--success.h-nav--sticky[data-v-83686de8],.h-nav--success.h-nav--sticky *[data-v-83686de8]{color:#1d1e20}.h-nav--success.h-nav--sticky[data-v-83686de8] :hover,.h-nav--success.h-nav--sticky[data-v-83686de8]:hover{color:#00b090}.h-nav--warning[data-v-83686de8],.h-nav--warning *[data-v-83686de8],.h-nav--warning[data-v-83686de8] :hover,.h-nav--warning[data-v-83686de8]:hover{color:#ffcd35}.h-nav--warning.h-nav--sticky[data-v-83686de8],.h-nav--warning.h-nav--sticky *[data-v-83686de8]{color:#1d1e20}.h-nav--warning.h-nav--sticky[data-v-83686de8] :hover,.h-nav--warning.h-nav--sticky[data-v-83686de8]:hover{color:#ffcd35}', ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(368)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-685fa348]{display:none}@media(min-width:768px){.desktop-only[data-v-685fa348]{display:block}.mobile-only[data-v-685fa348]{display:none}}.niaga-logo[data-v-685fa348]{display:inline-flex}.niaga-logo-dark[data-v-685fa348]{fill:#1d1e20}.niaga-logo-light[data-v-685fa348]{fill:#fff}.niaga-logo-gray[data-v-685fa348]{fill:#727586}.niaga-logo-primary[data-v-685fa348]{fill:#673de6}.niaga-logo-primary-hoster-blue[data-v-685fa348]{fill:#007aff}.niaga-logo-meteorite[data-v-685fa348]{fill:#8c85ff}.niaga-logo-danger[data-v-685fa348]{fill:#fc5185}.niaga-logo-success[data-v-685fa348]{fill:#00b090}.niaga-logo-warning[data-v-685fa348]{fill:#ffcd35}.niaga-logo-gray-dark[data-v-685fa348]{fill:#36344d}.niaga-logo-primary-dark[data-v-685fa348]{fill:#5025d1}.niaga-logo-meteorite-dark[data-v-685fa348]{fill:#2f1c6a}.niaga-logo-danger-dark[data-v-685fa348]{fill:#d63163}.niaga-logo-success-dark[data-v-685fa348]{fill:#008361}.niaga-logo-warning-dark[data-v-685fa348]{fill:#fea419}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(369)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-143655f6]{display:none}@media(min-width:768px){.desktop-only[data-v-143655f6]{display:block}.mobile-only[data-v-143655f6]{display:none}}.h-logo[data-v-143655f6]{display:inline-flex}.h-logo-dark[data-v-143655f6]{fill:#1d1e20}.h-logo-light[data-v-143655f6]{fill:#fff}.h-logo-gray[data-v-143655f6]{fill:#727586}.h-logo-primary[data-v-143655f6]{fill:#673de6}.h-logo-primary-hoster-blue[data-v-143655f6]{fill:#007aff}.h-logo-meteorite[data-v-143655f6]{fill:#8c85ff}.h-logo-danger[data-v-143655f6]{fill:#fc5185}.h-logo-success[data-v-143655f6]{fill:#00b090}.h-logo-warning[data-v-143655f6]{fill:#ffcd35}.h-logo-gray-dark[data-v-143655f6]{fill:#36344d}.h-logo-primary-dark[data-v-143655f6]{fill:#5025d1}.h-logo-meteorite-dark[data-v-143655f6]{fill:#2f1c6a}.h-logo-danger-dark[data-v-143655f6]{fill:#d63163}.h-logo-success-dark[data-v-143655f6]{fill:#008361}.h-logo-warning-dark[data-v-143655f6]{fill:#fea419}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(370)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-787552a1]{display:none}@media(min-width:768px){.desktop-only[data-v-787552a1]{display:block}.mobile-only[data-v-787552a1]{display:none}}.h-payment-methods[data-v-787552a1]{display:flex;flex-wrap:wrap;margin-bottom:24px}@media(min-width:768px){.h-payment-methods[data-v-787552a1]{margin-bottom:40px}}@media(min-width:1025px){.h-payment-methods[data-v-787552a1]{margin-bottom:24px}}.h-payment-methods__icon[data-v-787552a1]{height:40px;margin-bottom:8px;margin-right:8px;width:60px}.h-payment-methods__more-btn[data-v-787552a1]{align-self:center;color:#673de6;cursor:pointer;font-weight:700;margin-bottom:8px;transition:all .3s ease-in-out}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(371)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-5cb2758d]{display:none}@media(min-width:768px){.desktop-only[data-v-5cb2758d]{display:block}.mobile-only[data-v-5cb2758d]{display:none}}.h-social-icons[data-v-5cb2758d]{display:flex;justify-content:space-between;margin:16px 0 24px}@media(min-width:768px){.h-social-icons[data-v-5cb2758d]{justify-content:flex-start;margin-top:0}}@media(min-width:1025px){.h-social-icons[data-v-5cb2758d]{justify-content:flex-end}}.h-social-icons--icon[data-v-5cb2758d]{align-items:center;display:flex;min-height:24px;transition:.3s ease-in-out}@media(min-width:768px){.h-social-icons--icon[data-v-5cb2758d]{margin-right:40px}}@media(min-width:1025px){.h-social-icons--icon[data-v-5cb2758d]{margin:0 5px}.h-social-icons--icon[data-v-5cb2758d]:hover{opacity:.7}}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        var map = {
            "./IcFacebook.vue": [537, 17],
            "./IcFacebookRound.vue": [538, 18],
            "./IcGithub.vue": [539, 19],
            "./IcInstagram.vue": [540, 20],
            "./IcLinkedIn.vue": [541, 21],
            "./IcTwitter.vue": [542, 22],
            "./IcVkontakte.vue": [543, 23],
            "./IcYoutube.vue": [544, 24]
        };

        function o(e) {
            if (!n.o(map, e)) return Promise.resolve().then((function() {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }));
            var t = map[e],
                o = t[0];
            return n.e(t[1]).then((function() {
                return n(o)
            }))
        }
        o.keys = function() {
            return Object.keys(map)
        }, o.id = 852, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(372)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-ad40b096]{display:none}@media(min-width:768px){.desktop-only[data-v-ad40b096]{display:block}.mobile-only[data-v-ad40b096]{display:none}}.h-social-icon[data-v-ad40b096]{display:inline-flex;height:24px;width:24px}@media(min-width:1025px){.h-social-icon[data-v-ad40b096]{height:18px;width:18px}}.h-social-icon-dark[data-v-ad40b096]{fill:#1d1e20}.h-social-icon-light[data-v-ad40b096]{fill:#fff}.h-social-icon-gray[data-v-ad40b096]{fill:#727586}.h-social-icon-primary[data-v-ad40b096]{fill:#673de6}.h-social-icon-primary-hoster-blue[data-v-ad40b096]{fill:#007aff}.h-social-icon-meteorite[data-v-ad40b096]{fill:#8c85ff}.h-social-icon-danger[data-v-ad40b096]{fill:#fc5185}.h-social-icon-success[data-v-ad40b096]{fill:#00b090}.h-social-icon-warning[data-v-ad40b096]{fill:#ffcd35}.h-social-icon-meteorite-dark[data-v-ad40b096]{fill:#2f1c6a}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(373)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-1069e94a]{display:none}@media(min-width:768px){.desktop-only[data-v-1069e94a]{display:block}.mobile-only[data-v-1069e94a]{display:none}}.h-footer[data-v-1069e94a]{align-items:center;background-color:#f4f5ff;display:flex;flex-direction:column;justify-content:space-between;margin-top:32px}@media(min-width:768px){.h-footer[data-v-1069e94a]{margin-top:40px}}@media(min-width:1025px){.h-footer[data-v-1069e94a]{margin-top:48px}}.h-footer a[data-v-1069e94a]{color:#2f1c6a;font-weight:400;padding-right:8px;transition:all .3s ease-in-out}@media(min-width:1025px){.h-footer a[data-v-1069e94a]:hover{color:#5025d1}}.h-footer__wrapper[data-v-1069e94a]{padding-top:16px;width:100%}@media(min-width:600px){.h-footer__wrapper[data-v-1069e94a]{padding-top:48px}}@media(min-width:1025px){.h-footer__wrapper[data-v-1069e94a]{padding-top:56px}}.h-footer__content[data-v-1069e94a]{display:flex;flex-direction:column}@media(min-width:1200px){.h-footer__content[data-v-1069e94a]{flex-direction:row}}.h-footer__copyright[data-v-1069e94a]{border-top:1px solid #d5dfff;display:flex;flex-direction:column;justify-content:space-between;padding:24px 0 16px}@media(min-width:1000px){.h-footer__copyright[data-v-1069e94a]{flex-direction:row}}@media(min-width:768px){.h-footer__copyright[data-v-1069e94a]{padding:24px 0}}@media(min-width:1025px){.h-footer__copyright[data-v-1069e94a]{padding:24px 60px}}.h-footer__copyright--text[data-v-1069e94a]{margin-bottom:8px}@media(min-width:1000px){.h-footer__copyright--text[data-v-1069e94a]{margin-bottom:0}}.h-footer__copyright--text[data-v-1069e94a]:last-child{margin-bottom:0}@media(min-width:1025px){.h-footer__logo-section-container[data-v-1069e94a]{margin-right:12px}}.h-footer__logo-section[data-v-1069e94a]{display:flex;flex-direction:column}@media(min-width:1200px){.h-footer__logo-section[data-v-1069e94a]{max-width:360px}}.h-footer__logo-text[data-v-1069e94a]{margin:8px 0 24px}@media(min-width:1025px){.h-footer__logo-text[data-v-1069e94a]{margin:24px 0}}.h-footer__sections[data-v-1069e94a]{display:flex;flex-direction:column;flex-wrap:wrap}@media(min-width:550px){.h-footer__sections[data-v-1069e94a]{max-height:850px}}@media(min-width:768px){.h-footer__sections[data-v-1069e94a]{max-height:630px}}@media(min-width:1200px){.h-footer__sections[data-v-1069e94a]{margin-bottom:24px;width:800px}}@media(min-width:550px){.h-footer__sections--section[data-v-1069e94a]{margin-bottom:8px;width:176px}}@media(min-width:768px){.h-footer__sections--section[data-v-1069e94a]{margin-bottom:24px}}@media(min-width:1200px){.h-footer__sections--section[data-v-1069e94a]{margin:0 12px 24px;width:168px}}.h-footer__sections--item[data-v-1069e94a]{cursor:pointer;display:block}.h-footer__sections--item-margin[data-v-1069e94a]{margin-bottom:8px}.h-footer__sections--title[data-v-1069e94a]{color:#2f1c6a;display:block;text-transform:uppercase}@media(min-width:768px){.h-footer__sections--title[data-v-1069e94a]{margin-bottom:8px}}.h-footer--mobile[data-v-1069e94a]{display:inline;display:initial}@media(min-width:550px){.h-footer--mobile[data-v-1069e94a]{display:none}}.h-footer--desktop[data-v-1069e94a]{display:none}@media(min-width:550px){.h-footer--desktop[data-v-1069e94a]{display:inline;display:initial}}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(374)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only{display:none}@media(min-width:768px){.desktop-only{display:block}.mobile-only{display:none}}.h-award-badges{-moz-column-gap:30px;column-gap:30px;display:flex;margin-bottom:24px}@media(min-width:768px){.h-award-badges{margin-bottom:40px}}@media(min-width:1025px){.h-award-badges{margin-bottom:24px}}.h-award-badges__ra{min-height:53px;min-width:138px}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(375)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-45852a21]{display:none}@media(min-width:768px){.desktop-only[data-v-45852a21]{display:block}.mobile-only[data-v-45852a21]{display:none}}.fade-enter-active[data-v-45852a21],.fade-leave-active[data-v-45852a21]{overflow:hidden;transition:all .3s}.fade-enter[data-v-45852a21],.fade-leave-to[data-v-45852a21]{opacity:0}.h-accordion__title-container[data-v-45852a21]{align-items:center;cursor:pointer;display:flex;justify-content:space-between;padding:8px 0}.h-accordion__list[data-v-45852a21]{padding:8px 0}.h-accordion__list-body[data-v-45852a21]{color:#727586}.h-accordion__item[data-v-45852a21]{display:block}.h-accordion__icon[data-v-45852a21]{align-items:center;display:flex;margin-left:8px;transition:.5s}.h-accordion__icon--active[data-v-45852a21]{transform:rotate(180deg)}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(376)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-667ab879]{display:none}@media(min-width:768px){.desktop-only[data-v-667ab879]{display:block}.mobile-only[data-v-667ab879]{display:none}}.fade-enter-active[data-v-667ab879],.fade-leave-active[data-v-667ab879]{transition:opacity .5s}.fade-enter[data-v-667ab879],.fade-leave-to[data-v-667ab879]{opacity:0}.h-cookie-consent[data-v-667ab879]{background-color:#fff;bottom:0;box-shadow:0 -10px 20px rgba(0,0,0,.1);left:0;overflow:auto;padding:48px 0;position:fixed;width:100%;z-index:1000}@media(max-width:767px){.h-cookie-consent[data-v-667ab879]{padding:32px 16px}}@media(max-height:760px)and (max-width:1025px){.h-cookie-consent[data-v-667ab879]{height:100%}}@media(min-width:768px){.h-cookie-consent__main-btn-wrapper[data-v-667ab879]{display:flex}.h-cookie-consent__main-btn[data-v-667ab879]{max-width:248px}}.h-cookie-consent__main-btn[data-v-667ab879]:not(:last-child){margin-bottom:16px;margin-right:0}@media(min-width:768px){.h-cookie-consent__main-btn[data-v-667ab879]:not(:last-child){margin-bottom:0;margin-right:16px}}@media(min-width:1025px){.h-cookie-consent__main-btn[data-v-667ab879]{max-width:264px}}.h-cookie-consent__settings[data-v-667ab879] .h-popup{width:1192px}.h-cookie-consent__settings-wrapper[data-v-667ab879]{padding:16px}@media(min-width:768px){.h-cookie-consent__settings-wrapper[data-v-667ab879]{padding:16px 40px 40px}}@media(min-width:1025px){.h-cookie-consent__settings-wrapper[data-v-667ab879]{padding:16px 32px 32px}}.h-cookie-consent__settings-top-container[data-v-667ab879]{display:flex;flex-direction:column}@media(min-width:768px){.h-cookie-consent__settings-top-container[data-v-667ab879]{align-items:center;flex-direction:row}}.h-cookie-consent__settings-btn-container[data-v-667ab879]{margin-bottom:32px}@media(min-width:768px){.h-cookie-consent__settings-btn-container[data-v-667ab879]{display:flex}.h-cookie-consent__settings-btn[data-v-667ab879]{max-width:248px}}@media(min-width:1025px){.h-cookie-consent__settings-btn[data-v-667ab879]{max-width:264px}}.h-cookie-consent__settings-btn--accept-selected[data-v-667ab879]{justify-content:center;margin-bottom:4px;padding-left:0}@media(min-width:768px){.h-cookie-consent__settings-btn--accept-selected[data-v-667ab879]{justify-content:start;margin-bottom:0;white-space:nowrap;width:auto}}[data-v-667ab879] .h-cookie-consent__settings-btn--accept-selected.h-button-text{background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial}.h-cookie-consent__title[data-v-667ab879]{margin-bottom:16px}.h-cookie-consent__description[data-v-667ab879]{margin-bottom:24px}a[data-v-667ab879]{color:#2f1c6a;display:inline}.h-cookie-selection[data-v-667ab879]{max-width:680px}.h-cookie-selection[data-v-667ab879]:last-child{border-bottom:none;margin-bottom:16px}@media(min-width:768px){.h-cookie-selection[data-v-667ab879]:last-child{margin-bottom:32px}}@media(min-width:1025px){.h-cookie-selection[data-v-667ab879]:last-child{margin-bottom:24px}}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(377)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-6ae544f0]{display:none}@media(min-width:768px){.desktop-only[data-v-6ae544f0]{display:block}.mobile-only[data-v-6ae544f0]{display:none}}.h-cookie-selection[data-v-6ae544f0]{border-bottom:1px solid #d5dfff}@media(max-width:767px){.h-cookie-selection__title[data-v-6ae544f0]{margin-top:11px;max-width:calc(100% - 45px)}}.h-cookie-selection__container[data-v-6ae544f0]{display:flex;justify-content:space-between;width:100%}.h-cookie-selection__text-container[data-v-6ae544f0]{display:flex;flex-direction:column;flex-grow:1;padding-bottom:8px}.h-cookie-selection__switch-wrapper[data-v-6ae544f0]{flex-shrink:0;position:relative}@media(min-width:768px){.h-cookie-selection__switch-wrapper[data-v-6ae544f0]{align-items:center;display:inline-flex;flex-direction:row;margin-left:40px;width:145px}}@media(max-width:767px){.h-cookie-selection__switch-wrapper .h-switch[data-v-6ae544f0]{position:absolute;top:20px}.h-cookie-selection__switch-wrapper .h-switch--ltr[data-v-6ae544f0]{right:0}.h-cookie-selection__switch-wrapper .h-switch--rtl[data-v-6ae544f0]{left:0}}.h-cookie-selection__switch-label[data-v-6ae544f0]{display:none}@media(min-width:768px){.h-cookie-selection__switch-label[data-v-6ae544f0]{display:block;margin-left:8px;width:100px}}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(378)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-cedc109c]{display:none}@media(min-width:768px){.desktop-only[data-v-cedc109c]{display:block}.mobile-only[data-v-cedc109c]{display:none}}.h-switch[data-v-cedc109c]{flex-direction:row}.h-switch[data-v-cedc109c],.h-switch__switch[data-v-cedc109c]{align-items:center;display:inline-flex}.h-switch__switch[data-v-cedc109c]{background:#727586;border-radius:50px;cursor:pointer;height:12px;margin:0 8px;position:relative;transition:background .4s;width:21px}.h-switch__label[data-v-cedc109c]{margin-right:8px}.h-switch__input[data-v-cedc109c]{cursor:pointer;opacity:0;position:absolute}.h-switch__box[data-v-cedc109c]{background:#fff;border-radius:50%;box-shadow:0 1px 4px rgba(29,30,32,.26);cursor:pointer;display:block;height:18px;margin:0 -7px;transition:transform .3s,box-shadow .2s;width:18px}.h-switch:hover .h-switch__box[data-v-cedc109c],.h-switch__box[data-v-cedc109c]:hover,.h-switch__input:hover~.h-switch__box[data-v-cedc109c]{box-shadow:0 0 2px 6px rgba(29,30,32,.1)}.h-switch:active .h-switch__box[data-v-cedc109c],.h-switch__box[data-v-cedc109c]:active,.h-switch__input:active~.h-switch__box[data-v-cedc109c]{box-shadow:0 0 2px 6px rgba(29,30,32,.3)}.h-switch__input:checked~.h-switch__box--ltr[data-v-cedc109c]{transform:translateX(100%)}.h-switch__input:checked~.h-switch__box--rtl[data-v-cedc109c]{transform:translateX(-100%)}.h-switch__input:checked~.h-switch__box[data-v-cedc109c]:hover,.h-switch__input:hover:checked~.h-switch__box[data-v-cedc109c]{box-shadow:0 0 2px 6px rgba(0,176,144,.1)}.h-switch__input:active:checked~.h-switch__box[data-v-cedc109c],.h-switch__input:checked~.h-switch__box[data-v-cedc109c]:active{box-shadow:0 0 2px 6px rgba(0,176,144,.3)}.h-switch--on[data-v-cedc109c]{background:#00b090}.h-switch--disabled .h-switch__box[data-v-cedc109c]:active,.h-switch--disabled .h-switch__box[data-v-cedc109c]:hover,.h-switch--disabled:active .h-switch__box[data-v-cedc109c],.h-switch--disabled:hover .h-switch__box[data-v-cedc109c]{box-shadow:0 1px 4px rgba(29,30,32,.26)!important}.h-switch--disabled[data-v-cedc109c]{background:#dadce0}.h-switch--on.h-switch--disabled[data-v-cedc109c]{background:#def4f0}.h-switch--sm[data-v-cedc109c]{height:10px;margin:0 5px;width:17px}.h-switch--sm .h-switch__box[data-v-cedc109c]{height:14px;margin:0 -5px;width:14px}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(379)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-79825a34]{display:none}@media(min-width:768px){.desktop-only[data-v-79825a34]{display:block}.mobile-only[data-v-79825a34]{display:none}}.h-popup[data-v-79825a34]{border-radius:4px;left:50%;max-height:calc(100vh - 32px);max-width:calc(100vw - 32px);overflow:hidden;overflow-y:auto;position:absolute;top:50%;transform:translate(-50%,-50%)}.h-popup--sale .h-popup__close-wrapper[data-v-79825a34]{position:absolute;right:0;top:0}.h-popup__wrapper[data-v-79825a34]{bottom:0;left:0;position:fixed;right:0;top:0;z-index:100}.h-popup__overlay[data-v-79825a34]{background:rgba(54,52,77,.8);bottom:0;left:0;position:absolute;right:0;top:0}.h-popup__close-wrapper[data-v-79825a34]{display:flex;justify-content:flex-end}.h-popup__close[data-v-79825a34]{display:block;height:24px;margin-right:16px;margin-top:16px;position:relative;text-align:right;width:24px}@media(min-width:768px){.h-popup__close[data-v-79825a34]{margin-right:40px;margin-top:40px}}@media(min-width:1025px){.h-popup__close[data-v-79825a34]{margin-right:32px;margin-top:32px}}.h-popup__content[data-v-79825a34]{align-items:center;display:flex;height:100%;justify-content:space-between;width:100%}.h-popup__text[data-v-79825a34]{flex-grow:1;height:100%;padding:20px 16px 16px}@media(min-width:768px){.h-popup__text[data-v-79825a34]{padding:40px}}@media(min-width:1025px){.h-popup__text[data-v-79825a34]{padding:32px}}.h-popup__image[data-v-79825a34]{background:#f2f3f6;display:none;height:100%}@media(min-width:768px){.h-popup__image[data-v-79825a34]{display:block;max-width:40%;min-width:360px}}.h-popup--dark[data-v-79825a34]{background:#1d1e20}.h-popup--light[data-v-79825a34]{background:#fff}.h-popup--gray[data-v-79825a34]{background:#727586}.h-popup--primary[data-v-79825a34]{background:#673de6}.h-popup--primary-hoster-blue[data-v-79825a34]{background:#007aff}.h-popup--meteorite[data-v-79825a34]{background:#8c85ff}.h-popup--danger[data-v-79825a34]{background:#fc5185}.h-popup--success[data-v-79825a34]{background:#00b090}.h-popup--warning[data-v-79825a34]{background:#ffcd35}.h-popup--gray-dark[data-v-79825a34]{background:#36344d}.h-popup--primary-dark[data-v-79825a34]{background:#5025d1}.h-popup--meteorite-dark[data-v-79825a34]{background:#2f1c6a}.h-popup--danger-dark[data-v-79825a34]{background:#d63163}.h-popup--success-dark[data-v-79825a34]{background:#008361}.h-popup--warning-dark[data-v-79825a34]{background:#fea419}.h-popup--gray-light[data-v-79825a34]{background:#f2f3f6}.h-popup--primary-light[data-v-79825a34]{background:#ebe4ff}.h-popup--meteorite-light[data-v-79825a34]{background:#d5dfff}.h-popup--danger-light[data-v-79825a34]{background:#ffe8ef}.h-popup--success-light[data-v-79825a34]{background:#def4f0}.h-popup--warning-light[data-v-79825a34]{background:#fff8e2}.h-popup--manatee[data-v-79825a34]{background:#8c93a9}.h-popup--spindle[data-v-79825a34]{background:#b6bdd3}.h-popup--periwinkle[data-v-79825a34]{background:#c5cde9}.h-popup--ghost-white[data-v-79825a34]{background:#fafbff}.h-popup--webhost-primary[data-v-79825a34]{background:#ff5c62}.h-popup--gray-border[data-v-79825a34]{background:#dadce0}.h-popup--white-blue[data-v-79825a34]{background:#f4f5ff}.h-popup--facebook[data-v-79825a34]{background:#1877f2}.h-popup--github[data-v-79825a34]{background:#2f363d}.h-popup--black[data-v-79825a34]{background:#000}.h-popup--light-opacity-20[data-v-79825a34]{background:hsla(0,0%,100%,.2)}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(380)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only[data-v-48f10e42]{display:none}@media(min-width:768px){.desktop-only[data-v-48f10e42]{display:block}.mobile-only[data-v-48f10e42]{display:none}}.h-section-one-col--bg-gray-light[data-v-48f10e42]{background-color:#f2f3f6}.h-section-one-col--bg-primary-light[data-v-48f10e42]{background-color:#ebe4ff}.h-section-one-col--bg-meteorite-light[data-v-48f10e42]{background-color:#d5dfff}.h-section-one-col--bg-danger-light[data-v-48f10e42]{background-color:#ffe8ef}.h-section-one-col--bg-success-light[data-v-48f10e42]{background-color:#def4f0}.h-section-one-col--bg-warning-light[data-v-48f10e42]{background-color:#fff8e2}.h-section-one-col--bg-manatee[data-v-48f10e42]{background-color:#8c93a9}.h-section-one-col--bg-spindle[data-v-48f10e42]{background-color:#b6bdd3}.h-section-one-col--bg-periwinkle[data-v-48f10e42]{background-color:#c5cde9}.h-section-one-col--bg-ghost-white[data-v-48f10e42]{background-color:#fafbff}.h-section-one-col--bg-webhost-primary[data-v-48f10e42]{background-color:#ff5c62}.h-section-one-col--bg-gray-border[data-v-48f10e42]{background-color:#dadce0}.h-section-one-col--bg-white-blue[data-v-48f10e42]{background-color:#f4f5ff}.h-section-one-col--bg-dark[data-v-48f10e42]{background-color:#1d1e20}.h-section-one-col--bg-light[data-v-48f10e42]{background-color:#fff}.h-section-one-col--bg-gray[data-v-48f10e42]{background-color:#727586}.h-section-one-col--bg-primary[data-v-48f10e42]{background-color:#673de6}.h-section-one-col--bg-primary-hoster-blue[data-v-48f10e42]{background-color:#007aff}.h-section-one-col--bg-meteorite[data-v-48f10e42]{background-color:#8c85ff}.h-section-one-col--bg-danger[data-v-48f10e42]{background-color:#fc5185}.h-section-one-col--bg-success[data-v-48f10e42]{background-color:#00b090}.h-section-one-col--bg-warning[data-v-48f10e42]{background-color:#ffcd35}", ""]), o.locals = {}, e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(381)
    }, function(e, t, n) {
        var o = n(12)((function(i) {
            return i[1]
        }));
        o.push([e.i, ".desktop-only{display:none}@media(min-width:768px){.desktop-only{display:block}.mobile-only{display:none}}.layout--login .h-nav__logo{left:16px;position:absolute;top:10px;z-index:20}@media(max-width:767px){.layout--login .h-nav__logo{width:118px}}@media(min-width:768px){.layout--login .h-nav__logo{left:40px;top:16px}}@media(min-width:1025px){.layout--login .h-nav__logo{top:30px}}", ""]), o.locals = {}, e.exports = o
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n.r(t);
        n(127);
        var o = n(1),
            r = (n(8), n(3));

        function l(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
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
        var h = n(58),
            d = n(337),
            f = n(103),
            m = n(0);

        function w(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function y(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? w(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : w(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        const v = h.a.map((e => y(y({}, e), {}, {
                disabled: !1
            }))),
            k = ["payments", "not-found", "website-builder", "technology", "why-us", "online-store", "website-templates"];
        var x = d.a.extend({
                name: "HNavigation",
                props: {
                    stickyAtYPosition: {
                        type: Number,
                        default: 0
                    }
                },
                inject: ["getCurrentSale", "getCurrentSaleTemplate"],
                data: () => ({
                    countriesData: v,
                    sticky: !1,
                    localeMenuOpened: !1,
                    mobileMenuOpened: !1,
                    options: {
                        hosting: !1,
                        email: !1,
                        domain: !1
                    },
                    cookieQueryKeys: {
                        hasoffers_session: "session",
                        irclickid: "irclickid",
                        awc: "awc",
                        rr_wcid: "RR_WCID",
                        rr_referralcode: "REFERRALCODE"
                    }
                }),
                computed: {
                    currentSale() {
                        return this.getCurrentSale()
                    },
                    currentSaleTemplate() {
                        return this.getCurrentSaleTemplate()
                    },
                    navItems() {
                        return e = this, {
                            mainSections: {
                                hosting: [c(c({
                                    icon: "shared",
                                    name: "components.navigation.submenuItemNames.webHosting",
                                    description: "components.navigation.submenuItemDescriptions.webHosting"
                                }, Object(r.a)(e, "web-hosting")), {}, {
                                    dataClickIdName: "shared_hosting"
                                }), c(c({
                                    icon: "websiteBuilder",
                                    name: "components.navigation.submenuItemNames.websiteBuilder",
                                    description: "components.navigation.submenuItemDescriptions.websiteBuilder"
                                }, Object(r.a)(e, "website-builder")), {}, {
                                    dataClickIdName: "website_builder"
                                }), c(c({
                                    icon: "cloud",
                                    name: "components.navigation.submenuItemNames.cloudHosting",
                                    description: "components.navigation.submenuItemDescriptions.cloudHosting"
                                }, Object(r.a)(e, "cloud-hosting")), {}, {
                                    dataClickIdName: "cloud_hosting"
                                }), c(c({
                                    icon: "wordpress",
                                    name: "components.navigation.submenuItemNames.wordpressHosting",
                                    description: "components.navigation.submenuItemDescriptions.wordpressHosting"
                                }, Object(r.a)(e, "wordpress-hosting")), {}, {
                                    dataClickIdName: "wordpress_hosting"
                                }), c(c({
                                    icon: "hostingerPro",
                                    name: "components.navigation.submenuItemNames.hostingerProB",
                                    description: "components.navigation.submenuItemDescriptions.hostingerPro"
                                }, Object(r.a)(e, "hostinger-pro")), {}, {
                                    dataClickIdName: "agency_hosting",
                                    includedLocales: ["en_US", "en_PK", "en_GB", "en_IN", "pt_BR", "fr_FR", "es_ES", "es_CO", "es_MX", "es_AR"],
                                    class: "ab-test-hostinger-pro-original"
                                })],
                                vps: [c(c({
                                    icon: "vps",
                                    name: "components.navigation.submenuItemNames.vpsHosting",
                                    description: "components.navigation.submenuItemDescriptions.vpsHosting"
                                }, Object(r.a)(e, "vps-hosting")), {}, {
                                    dataClickIdName: "vps_hosting"
                                }), c(c({
                                    icon: "cyberPanel",
                                    name: "components.navigation.submenuItemNames.cyberPanelHosting",
                                    description: "components.navigation.submenuItemDescriptions.cyberPanelHosting"
                                }, Object(r.a)(e, "cyberpanel-vps-hosting")), {}, {
                                    dataClickIdName: "cyberpanel_vps_hosting"
                                }), c(c({
                                    icon: "minecraft",
                                    name: "components.navigation.submenuItemNames.minecraftHosting",
                                    description: "components.navigation.submenuItemDescriptions.minecraftHosting"
                                }, Object(r.a)(e, "minecraft-server-hosting")), {}, {
                                    dataClickIdName: "minecraft_hosting",
                                    excludedLocales: ["hi_IN"]
                                })],
                                email: [c(c({
                                    icon: "googleWorkspace",
                                    name: "components.navigation.submenuItemNames.googleWorkspace",
                                    description: "components.navigation.submenuItemDescriptions.googleWorkspace"
                                }, Object(r.a)(e, "google-workspace")), {}, {
                                    dataClickIdName: "google_workspace_email_hosting"
                                }), c(c({
                                    icon: "titanEmail",
                                    name: "components.navigation.submenuItemNames.titanEmail",
                                    description: "components.navigation.submenuItemDescriptions.titanEmail"
                                }, Object(r.a)(e, "email-hosting")), {}, {
                                    dataClickIdName: "titan_email_hosting",
                                    includedLocales: ["en_US", "pl_PL"]
                                }), c(c({
                                    icon: "email",
                                    name: "components.navigation.submenuItemNames.hostingerEmail",
                                    description: "components.navigation.submenuItemDescriptions.hostingerEmail"
                                }, Object(r.a)(e, "email-hosting")), {}, {
                                    dataClickIdName: "hostinger_email_hosting",
                                    excludedLocales: ["en_US", "pl_PL"]
                                })],
                                domain: [c(c({
                                    icon: "domainChecker",
                                    name: "components.navigation.submenuItemNames.domainChecker",
                                    description: "components.navigation.submenuItemDescriptions.domainChecker"
                                }, Object(r.a)(e, "domain-name-search")), {}, {
                                    dataClickIdName: "domain_name_search"
                                }), {
                                    icon: "whois",
                                    name: "components.navigation.submenuItemNames.whois",
                                    description: "components.navigation.submenuItemDescriptions.whois",
                                    link: Object(r.b)(`${e.siteUrl}${e.$t("wwwRoutes.whois")}`),
                                    dataClickIdName: "whois_database",
                                    excludedLocales: ["hi_IN"]
                                }, {
                                    icon: "domainTransfer",
                                    name: "components.navigation.submenuItemNames.domainTransfer",
                                    description: "components.navigation.submenuItemDescriptions.domainTransfer",
                                    link: Object(r.b)(`${e.siteUrl}${e.$t("wwwRoutes.domainTransfer")}`),
                                    dataClickIdName: "domain_transfer"
                                }]
                            },
                            upliftedMainSections: {
                                wordpressHosting: Object(r.a)(e, "wordpress-hosting"),
                                websiteBuilder: Object(r.a)(e, "website-builder"),
                                hosting: [c(c({
                                    icon: "shared",
                                    name: "components.navigation.submenuItemNames.webHosting",
                                    description: "components.navigation.submenuItemDescriptions.webHosting"
                                }, Object(r.a)(e, "web-hosting")), {}, {
                                    dataClickIdName: "shared_hosting"
                                }), c(c({
                                    icon: "cloud",
                                    name: "components.navigation.submenuItemNames.cloudHosting",
                                    description: "components.navigation.submenuItemDescriptions.cloudHosting"
                                }, Object(r.a)(e, "cloud-hosting")), {}, {
                                    dataClickIdName: "cloud_hosting"
                                }), c(c({
                                    icon: "vps",
                                    name: "components.navigation.submenuItemNames.vpsHosting",
                                    description: "components.navigation.submenuItemDescriptions.vpsHosting"
                                }, Object(r.a)(e, "vps-hosting")), {}, {
                                    dataClickIdName: "vps_hosting"
                                }), c(c({
                                    icon: "titanEmail",
                                    name: "components.navigation.submenuItemNames.titanEmail",
                                    description: "components.navigation.submenuItemDescriptions.titanEmail"
                                }, Object(r.a)(e, "email-hosting")), {}, {
                                    dataClickIdName: "titan_email_hosting",
                                    includedLocales: ["pl_PL", "en_US"]
                                }), c(c({
                                    icon: "email",
                                    name: "components.navigation.submenuItemNames.hostingerEmail",
                                    description: "components.navigation.submenuItemDescriptions.hostingerEmail"
                                }, Object(r.a)(e, "email-hosting")), {}, {
                                    dataClickIdName: "hostinger_email_hosting",
                                    excludedLocales: ["pl_PL", "en_US"]
                                })],
                                proHosting: [c(c({
                                    icon: "partnerProgram",
                                    name: "components.navigation.submenuItemNames.partnerProgram",
                                    description: "components.navigation.submenuItemDescriptions.partnerProgram"
                                }, Object(r.a)(e, "partners")), {}, {
                                    dataClickIdName: "partners"
                                }), c(c({
                                    icon: "hostingerPro",
                                    name: "components.navigation.submenuItemNames.hostingerProB",
                                    description: "components.navigation.submenuItemDescriptions.hostingerPro"
                                }, Object(r.a)(e, "hostinger-pro")), {}, {
                                    dataClickIdName: "agency_hosting",
                                    includedLocales: ["en_US", "en_PK", "en_GB", "en_IN", "pt_BR", "fr_FR", "es_ES", "es_CO", "es_MX", "es_AR"]
                                })],
                                domains: Object(r.a)(e, "domain-name-search")
                            },
                            titles: {
                                hosting: "components.navigation.menuItems.hosting",
                                email: "components.navigation.menuItems.email",
                                domain: "components.navigation.menuItems.domain",
                                pricing: "components.navigation.menuItems.pricing"
                            },
                            loginLink: Object(r.a)(e, "cpanel-login"),
                            cartLink: Object(r.b)(`${e.siteUrl}${e.$t("wwwRoutes.cart")}`)
                        };
                        var e
                    },
                    navItemColor() {
                        return this.sticky || this.localeMenuOpened || this.isPageWithLightHeader ? "dark" : "light"
                    },
                    navMenuItemKeys() {
                        return Object.keys(this.navItems.mainSections)
                    },
                    upliftedNavMenuItemKeys() {
                        return Object.keys(this.navItems.upliftedMainSections)
                    },
                    currentPageHreflangLinks() {
                        return f.a[this.pageName] || f.a.homepage
                    },
                    isPageWithLightHeader() {
                        let e = ["homepage", "web-hosting", "website-builder", "wordpress-hosting", "cloud-hosting"];
                        return ["BR", "AR", "MX", "CO"].includes(this.themeData.country.code) && "consumermonth2023" === this.currentSaleTemplate ? e = ["website-builder", "wordpress-hosting", "cloud-hosting"] : ["en_IN", "hi_IN"].includes(this.themeData.language.code) && "marchSaleIndia2023" === this.currentSaleTemplate && (e = ["website-builder", "cloud-hosting"]), !this.isNiaga && [...k, ...e].includes(this.pageName)
                    }
                },
                watch: {
                    $route() {
                        Object.keys(this.options).forEach((e => this.options[e] = !1)), this.localeMenuOpened && this.toggleLocaleSelector()
                    }
                },
                methods: {
                    camelToSnake: m.a,
                    getNavSubItems(e) {
                        return Object(m.l)(this, e)
                    },
                    getUpliftedNavSubItems(e) {
                        return Object(m.s)(this, e)
                    },
                    isTopMenuUplift() {
                        return ["en_US", "en_IN", "en_GB", "pt_BR", "fr_FR", "es_ES", "es_MX", "es_CO", "es_AR"].includes(this.themeData.language.code)
                    },
                    togglePageScroll() {
                        const e = document.getElementsByTagName("html")[0];
                        this.localeMenuOpened ? e.classList.add("u-noscroll") : e.classList.remove("u-noscroll")
                    },
                    toggleLocaleSelector() {
                        this.localeMenuOpened = !this.localeMenuOpened, this.togglePageScroll()
                    },
                    setStickyValue(e) {
                        this.sticky = e
                    },
                    setLocalMenuState(e) {
                        this.localeMenuOpened = e
                    },
                    toggleMobileMenu() {
                        this.mobileMenuOpened = !this.mobileMenuOpened
                    },
                    navMenuItemClass: e => ["h-navigation__menu-item", {
                        "h-navigation__menu-item--active": e
                    }]
                }
            }),
            _ = (n(826), n(5)),
            component = Object(_.a)(x, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("HNav", {
                    staticClass: "h-navigation",
                    attrs: {
                        "show-cart-link": !1,
                        active: e.localeMenuOpened,
                        "dark-items": e.isPageWithLightHeader,
                        "sticky-at-y-position": e.stickyAtYPosition
                    },
                    on: {
                        sticky: e.setStickyValue,
                        menuToggle: e.toggleMobileMenu
                    },
                    scopedSlots: e._u([e.isNiaga ? null : {
                        key: "locale-selector",
                        fn: function() {
                            return [t("HLanguageSelector", {
                                attrs: {
                                    "language-code": e.themeData.language.code,
                                    color: e.navItemColor
                                },
                                on: {
                                    onClick: e.toggleLocaleSelector
                                }
                            }, [e.localeMenuOpened ? t("LazyHLocaleMenu", {
                                attrs: {
                                    title: e.$t("components.localeMenu.title"),
                                    "input-placeholder": e.$t("components.localeMenu.inputPlaceHolder"),
                                    "locales-data": e.countriesData
                                },
                                on: {
                                    selectedCountry: e.goToPage,
                                    toggleMenu: e.toggleLocaleSelector
                                }
                            }) : e._e()], 1)]
                        },
                        proxy: !0
                    }, {
                        key: "mobile-menu",
                        fn: function() {
                            return [e.mobileMenuOpened ? t("LazyHMobileMenu", {
                                attrs: {
                                    "is-open": e.mobileMenuOpened,
                                    "nav-items": e.navItems,
                                    "language-code": e.themeData.language.code,
                                    "cookie-query-keys": e.cookieQueryKeys,
                                    "current-page-hreflang-links": e.currentPageHreflangLinks
                                }
                            }) : e._e()]
                        },
                        proxy: !0
                    }, {
                        key: "cart-link",
                        fn: function({
                            color: n
                        }) {
                            return [t("a", {
                                staticClass: "h-navigation__cart",
                                attrs: {
                                    "data-click-id": "hgr-navigation-menu-cart",
                                    href: e.navItems.cartLink,
                                    "aria-label": "shopping cart link"
                                }
                            }, [t("HIcon", {
                                attrs: {
                                    icon: "ui-icons/ic-shopping-cart",
                                    color: n
                                }
                            }), e._v(" "), t("span", {
                                staticClass: "h-navigation__cart__title u-only-tab-desk"
                            }, [e._v(e._s(e.$t("components.navigation.cartLinkTitle")))])], 1)]
                        }
                    }], null, !0)
                }, [e._v(" "), e.isTopMenuUplift() ? t("div", [e._l(e.upliftedNavMenuItemKeys, (function(n, o) {
                    return [Array.isArray(e.navItems.upliftedMainSections[n]) ? t("HDropdown", {
                        key: n,
                        scopedSlots: e._u([{
                            key: "activator",
                            fn: function({
                                toggle: o
                            }) {
                                return [t("div", e._g({
                                    class: e.navMenuItemClass(e.options[n]),
                                    attrs: {
                                        "data-click-id": `hgr-navigation-menu-${n}`
                                    }
                                }, e.localeMenuOpened ? {
                                    click: e.toggleLocaleSelector
                                } : {
                                    mousedown: o
                                }), [t("span", {
                                    staticClass: "h-navigation__menu-item-title",
                                    class: `h-navigation__menu-item-title--${e.navItemColor}`
                                }, [e._v(e._s(e.$t(`components.navigation.menuItems.${n}`)))]), e._v(" "), t("span", {
                                    staticClass: "h-navigation__menu-item-icon",
                                    class: {
                                        "h-navigation__menu-item-icon--opened": e.options[n]
                                    }
                                }, [t("HIcon", {
                                    attrs: {
                                        icon: "ui-icons/ic-arrow-down",
                                        color: e.navItemColor
                                    }
                                })], 1)])]
                            }
                        }], null, !0),
                        model: {
                            value: e.options[n],
                            callback: function(t) {
                                e.$set(e.options, n, t)
                            },
                            expression: "options[navMenuItemTitle]"
                        }
                    }, [e._v(" "), e._l(e.getUpliftedNavSubItems(n), (function(n) {
                        return t("HNavSubItem", {
                            key: n.name,
                            staticClass: "h-navigation__menu-item-sub-item",
                            class: n.class,
                            attrs: {
                                id: `hgr-navigation-menu_dropdown-${n.dataClickIdName}`,
                                "data-click-id": `hgr-navigation-menu_dropdown-${n.dataClickIdName}`,
                                title: e.$t(n.name),
                                description: e.$t(n.description),
                                link: n.link,
                                "nuxt-link": n.nuxtLink,
                                "nav-item": n.icon
                            }
                        })
                    }))], 2) : t("div", {
                        key: `${n}-${o}`,
                        staticClass: "h-navigation__menu-link"
                    }, [t("a", {
                        attrs: {
                            href: e.navItems.upliftedMainSections[n].link,
                            "data-click-id": `hgr-navigation-menu-${e.camelToSnake(n)}`
                        }
                    }, [e._v(e._s(e.$t(`components.navigation.menuItems.${n}`)))])])]
                }))], 2) : t("div", [e._l(e.navMenuItemKeys, (function(n, o) {
                    return [Array.isArray(e.navItems.mainSections[n]) ? t("HDropdown", {
                        key: n,
                        scopedSlots: e._u([{
                            key: "activator",
                            fn: function({
                                toggle: o
                            }) {
                                return [t("div", e._g({
                                    class: e.navMenuItemClass(e.options[n]),
                                    attrs: {
                                        "data-click-id": `hgr-navigation-menu-${n}`
                                    }
                                }, e.localeMenuOpened ? {
                                    click: e.toggleLocaleSelector
                                } : {
                                    mousedown: o
                                }), [t("span", {
                                    staticClass: "h-navigation__menu-item-title",
                                    class: `h-navigation__menu-item-title--${e.navItemColor}`
                                }, [e._v(e._s(e.$t(`components.navigation.menuItems.${n}`)))]), e._v(" "), t("span", {
                                    staticClass: "h-navigation__menu-item-icon",
                                    class: {
                                        "h-navigation__menu-item-icon--opened": e.options[n]
                                    }
                                }, [t("HIcon", {
                                    attrs: {
                                        icon: "ui-icons/ic-arrow-down",
                                        color: e.navItemColor
                                    }
                                })], 1)])]
                            }
                        }], null, !0),
                        model: {
                            value: e.options[n],
                            callback: function(t) {
                                e.$set(e.options, n, t)
                            },
                            expression: "options[navMenuItemTitle]"
                        }
                    }, [e._v(" "), e._l(e.getNavSubItems(n), (function(n) {
                        return t("HNavSubItem", {
                            key: n.name,
                            staticClass: "h-navigation__menu-item-sub-item",
                            class: n.class,
                            attrs: {
                                id: `hgr-navigation-menu_dropdown-${n.dataClickIdName}`,
                                "data-click-id": `hgr-navigation-menu_dropdown-${n.dataClickIdName}`,
                                title: e.$t(n.name),
                                description: e.$t(n.description),
                                link: n.link,
                                "nuxt-link": n.nuxtLink,
                                "nav-item": n.icon
                            }
                        })
                    }))], 2) : t("div", {
                        key: `${n}-${o}`,
                        staticClass: "h-navigation__menu-link"
                    }, [t("a", {
                        attrs: {
                            href: e.navItems.mainSections[n].link,
                            "data-click-id": `hgr-navigation-menu-${n}`
                        }
                    }, [e._v(e._s(e.$t(`components.navigation.menuItems.${n}`)))])])]
                }))], 2), e._v(" "), t("div", {
                    staticClass: "h-navigation__login"
                }, [t("HButton", {
                    attrs: {
                        "data-click-id": "hgr-navigation-menu-login",
                        type: "outline",
                        color: e.navItemColor,
                        "router-component": e.navItems.loginLink.nuxtLink && "NuxtLink",
                        to: e.navItems.loginLink.nuxtLink || e.navItems.loginLink.link
                    }
                }, [e._v(e._s(e.$t("components.navigation.loginLinkTitle")))])], 1)])
            }), [], !1, null, "6b52e836", null);
        t.default = component.exports;
        installComponents(component, {
            HLanguageSelector: n(1025).default,
            HIcon: n(80).default,
            HNavSubItem: n(1023).default,
            HDropdown: n(1026).default,
            HButton: n(236).default,
            HNav: n(1027).default
        })
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        n(127);
        var o = n(7);
        const r = {
            vps: {
                icon: "ic-vps"
            },
            cloud: {
                icon: "ic-cloud"
            },
            cpanel: {
                icon: "ic-cpanel"
            },
            cyberPanel: {
                icon: "ic-cyber-panel"
            },
            domainChecker: {
                icon: "ic-domain-checker"
            },
            domainTransfer: {
                icon: "ic-domain-transfer"
            },
            googleWorkspace: {
                icon: "ic-google-workspace"
            },
            shared: {
                icon: "ic-shared"
            },
            email: {
                icon: "ic-email"
            },
            titanEmail: {
                icon: "ic-titan-email",
                color: "dark"
            },
            whois: {
                icon: "ic-whois"
            },
            windowsVps: {
                icon: "ic-windows-vps"
            },
            wordpress: {
                icon: "ic-wordpress"
            },
            minecraft: {
                icon: "ic-minecraft"
            },
            hostingerPro: {
                icon: "ic-hostinger-pro"
            },
            partnerProgram: {
                icon: "ic-partner-program"
            },
            websiteBuilder: {
                icon: "ic-website-builder"
            }
        };
        var l = o.a.extend({
                name: "HNavSubItem",
                props: {
                    title: {
                        type: String,
                        required: !0
                    },
                    description: {
                        type: String,
                        required: !0
                    },
                    link: {
                        type: String,
                        default: void 0
                    },
                    nuxtLink: {
                        type: String,
                        default: void 0
                    },
                    navItem: {
                        type: String,
                        required: !0
                    }
                },
                computed: {
                    hIconProps() {
                        const {
                            icon: e,
                            color: t
                        } = r[this.navItem];
                        return {
                            icon: `product-icons/${e}`,
                            size: {
                                height: 44,
                                width: 44
                            },
                            color: t
                        }
                    }
                },
                methods: {
                    onNavSubItemClick() {
                        this.nuxtLink ? this.$router.push(this.nuxtTo(this.nuxtLink)) : window.open(this.link, "_self")
                    }
                }
            }),
            c = (n(833), n(5)),
            component = Object(c.a)(l, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "h-nav-subitem",
                    on: {
                        click: e.onNavSubItemClick
                    }
                }, [t("HIcon", e._b({
                    staticClass: "h-nav-subitem__icon"
                }, "HIcon", e.hIconProps, !1)), e._v(" "), t("div", {
                    staticClass: "h-nav-subitem__text-container"
                }, [e.title ? t(e.nuxtLink ? "NuxtLink" : "a", {
                    tag: "Component",
                    staticClass: "h-nav-subitem__text t-body-4",
                    attrs: {
                        href: e.link,
                        to: e.nuxtTo(e.nuxtLink),
                        event: ""
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault()
                        }
                    }
                }, [e._v("\n      " + e._s(e.title) + "\n    ")]) : e._e(), e._v(" "), e.description ? t("span", {
                    staticClass: "h-nav-subitem__text t-body-3"
                }, [e._v("\n      " + e._s(e.description) + "\n    ")]) : e._e()], 1)], 1)
            }), [], !1, null, "417cded2", null);
        t.default = component.exports;
        installComponents(component, {
            HIcon: n(80).default
        })
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        n(16), n(29);
        var o = n(522),
            r = n(523),
            l = n(7),
            c = n(1),
            h = n(3),
            d = n(60);

        function f(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function m(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? f(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var w = l.a.extend({
                name: "HFooter",
                components: {
                    HPaymentMethods: o.default,
                    HSocialIcons: r.default
                },
                methods: {
                    getLinkBottomMargin: (e, section) => ({
                        "h-footer__sections--item-margin": e !== section.length - 1
                    }),
                    getSlotName: e => `option-${e}`,
                    showFooterLink(e) {
                        return e.includedLocales ? e.includedLocales.includes(this.themeData.language.code) : !e.excludedLocales || !e.excludedLocales.includes(this.themeData.language.code)
                    },
                    sanitizeBrandName: e => e.replace("www.", ""),
                    getSectionItems(e) {
                        return this.footerSections[e].filter((e => this.showFooterLink(e)))
                    }
                },
                computed: {
                    showAwardBadges() {
                        return "BR" === this.themeData.country.code
                    },
                    footerSections() {
                        return e = this, {
                            hosting: [m(m({
                                name: "components.footer.webHosting"
                            }, Object(h.a)(e, "web-hosting")), {}, {
                                dataClickIdName: "web_hosting"
                            }), m(m({
                                name: "components.footer.professionalWebHosting"
                            }, Object(h.a)(e, "hostinger-pro")), {}, {
                                dataClickIdName: "professional_web_hosting",
                                includedLocales: ["en_US", "en_PK", "en_GB", "en_IN", "pt_BR", "fr_FR", "es_ES", "es_CO", "es_MX", "es_AR"]
                            }), m(m({
                                name: "components.footer.vpsHosting"
                            }, Object(h.a)(e, "vps-hosting")), {}, {
                                dataClickIdName: "vps_hosting"
                            }), m(m({
                                name: "components.footer.minecraftHosting"
                            }, Object(h.a)(e, "minecraft-server-hosting")), {}, {
                                dataClickIdName: "minecraft_hosting",
                                excludedLocales: ["hi_IN"]
                            }), m(m({
                                name: "components.footer.cyberPanelHosting"
                            }, Object(h.a)(e, "cyberpanel-vps-hosting")), {}, {
                                dataClickIdName: "cyberpanel_vps_hosting"
                            }), m(m({
                                name: "components.footer.cloudHosting"
                            }, Object(h.a)(e, "cloud-hosting")), {}, {
                                dataClickIdName: "cloud_hosting"
                            }), m(m({
                                name: "components.footer.wordpressHosting"
                            }, Object(h.a)(e, "wordpress-hosting")), {}, {
                                dataClickIdName: "wordpress_hosting"
                            }), m(m({
                                name: "components.footer.emailHosting"
                            }, Object(h.a)(e, "email-hosting")), {}, {
                                dataClickIdName: "email_hosting"
                            }), {
                                name: "components.footer.cmsHosting",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.cmsHosting")}`),
                                dataClickIdName: "cms_hosting",
                                excludedLocales: ["hi_IN"]
                            }, m(m({
                                name: "components.footer.eCommerceHosting"
                            }, Object(h.a)(e, "ecommerce-hosting")), {}, {
                                dataClickIdName: "ecommerce_hosting",
                                includedLocales: d.a.ecommerceHostingLocales
                            }), {
                                name: "components.footer.freeWebsiteHosting",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.freeWebsiteHosting")}`),
                                dataClickIdName: "free_hosting"
                            }, m(m({
                                name: "components.footer.onlineStores"
                            }, Object(h.a)(e, "online-store")), {}, {
                                dataClickIdName: "online_stores",
                                excludedLocales: ["hi_IN"]
                            }), m(m({
                                name: "components.footer.websiteBuilder"
                            }, Object(h.a)(e, "website-builder")), {}, {
                                dataClickIdName: "website_builder"
                            }), m(m({
                                name: "components.footer.websiteBuilderAi"
                            }, Object(h.a)(e, "ai-website-builder")), {}, {
                                dataClickIdName: "website_builder_ai",
                                includedLocales: ["en_US", "en_GB", "en_IN"]
                            }), m(m({
                                name: "components.footer.logoMaker"
                            }, Object(h.a)(e, "logo-maker")), {}, {
                                dataClickIdName: "logo_maker"
                            }), m(m({
                                name: "components.footer.websiteTemplates"
                            }, Object(h.a)(e, "website-templates")), {}, {
                                dataClickIdName: "website_templates",
                                includedLocales: ["en_US", "en_PK", "pt_BR", "es_ES", "es_AR", "es_MX", "es_CO", "en_IN", "fr_FR", "en_GB", "id_ID", "de_DE"]
                            }), m(m({
                                name: "components.footer.buyHosting"
                            }, Object(h.a)(e, "buy-hosting")), {}, {
                                dataClickIdName: "buy_hosting",
                                excludedLocales: ["uk_UA", "hi_IN"]
                            }), m(m({
                                name: "components.footer.cheapWebHosting"
                            }, Object(h.a)(e, "cheap-web-hosting")), {}, {
                                dataClickIdName: "cheap_web_hosting",
                                includedLocales: ["id_ID"]
                            })],
                            domains: [m(m({
                                name: "components.footer.domainChecker"
                            }, Object(h.a)(e, "domain-name-search")), {}, {
                                dataClickIdName: "domain-name-search"
                            }), {
                                name: "components.footer.domainTransfer",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.domainTransfer")}`),
                                dataClickIdName: "domain_transfer"
                            }, {
                                name: "components.footer.freeDomain",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.freeDomain")}`),
                                dataClickIdName: "free_domain"
                            }, {
                                name: "components.footer.xyzDomain",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.xyzDomain")}`),
                                dataClickIdName: "xyz_domain",
                                excludedLocales: ["hi_IN", "en_IN"]
                            }, {
                                name: "components.footer.99centDomains",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.99centDomains")}`),
                                dataClickIdName: "99_cent_domain",
                                excludedLocales: ["id_ID", "hi_IN", "tr_TR"]
                            }, {
                                name: "components.footer.domainPricing",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.domainPricing")}`),
                                dataClickIdName: "domain_pricing",
                                excludedLocales: ["hi_IN"]
                            }, {
                                name: "components.footer.whoisChecker",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.whois")}`),
                                dataClickIdName: "whois_checker",
                                excludedLocales: ["hi_IN"]
                            }, m(m({
                                name: "components.footer.freeSslCertificate"
                            }, Object(h.a)(e, "free-ssl-certificate")), {}, {
                                dataClickIdName: "free_ssl_certificate"
                            }), {
                                name: "components.footer.inDomain",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.inDomain")}`),
                                dataClickIdName: "in_domain",
                                includedLocales: ["en_IN"]
                            }, {
                                name: "components.footer.comDomain",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.comDomain")}`),
                                dataClickIdName: "com_domain",
                                includedLocales: ["en_IN"]
                            }, {
                                name: "components.footer.ioDomain",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.ioDomain")}`),
                                dataClickIdName: "io_domain",
                                includedLocales: ["en_IN"]
                            }, {
                                name: "components.footer.netDomain",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.netDomain")}`),
                                dataClickIdName: "net_domain",
                                includedLocales: ["en_IN"]
                            }, {
                                name: "components.footer.aiDomain",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.aiDomain")}`),
                                dataClickIdName: "ai_domain",
                                includedLocales: ["en_IN"]
                            }, {
                                name: "components.footer.techDomain",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.techDomain")}`),
                                dataClickIdName: "tech_domain",
                                includedLocales: ["en_IN"]
                            }],
                            information: [{
                                name: "components.footer.websiteMigration",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.websiteMigration")}`),
                                dataClickIdName: "website_migration"
                            }, {
                                name: "components.footer.systemStatus",
                                link: "https://statuspage.hostinger.com/",
                                dataClickIdName: "system_status"
                            }, {
                                name: "components.footer.affiliateProgram",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.affiliateProgram")}`),
                                dataClickIdName: "affiliate_program"
                            }, m(m({
                                name: "components.footer.paymentMethods"
                            }, Object(h.a)(e, "payments")), {}, {
                                dataClickIdName: "payment_methods",
                                excludedLocales: ["hi_IN"]
                            }), {
                                name: "components.footer.migrationTerms",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.migrationTerms")}`),
                                dataClickIdName: "migration_terms",
                                includedLocales: ["pt_BR"]
                            }, {
                                name: "components.footer.wallOfFame",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.wallOfFame")}`),
                                dataClickIdName: "wall_of_fame"
                            }, {
                                name: "components.footer.reviews",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.reviews")}`),
                                dataClickIdName: "reviews"
                            }, {
                                name: "components.footer.pricing",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.pricing")}`),
                                dataClickIdName: "pricing",
                                excludedLocales: ["hi_IN"]
                            }, {
                                name: "components.footer.sitemap",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.sitemap")}`),
                                dataClickIdName: "sitemap",
                                excludedLocales: ["hi_IN"]
                            }],
                            legal: [{
                                name: "components.footer.privacyPolicy",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.privacyPolicy")}`),
                                dataClickIdName: "privacy_policy"
                            }, {
                                name: "components.footer.termsOfService",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.termsOfService")}`),
                                dataClickIdName: "terms_of_service"
                            }, {
                                name: "components.footer.registrarInformation",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.registrarInformation")}`),
                                dataClickIdName: "registrar_information",
                                includedLocales: ["de_DE"]
                            }],
                            company: [{
                                name: "components.footer.aboutHostinger",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.aboutHostinger")}`),
                                dataClickIdName: "about"
                            }, m(m({
                                name: "components.footer.ourTechnology"
                            }, Object(h.a)(e, "technology")), {}, {
                                dataClickIdName: "our_technology"
                            }), {
                                name: "components.footer.career",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.career")}`),
                                dataClickIdName: "career",
                                includedLocales: ["en_US", "pt_BR", "lt_LT"]
                            }, {
                                name: "components.footer.newsroom",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.newsroom")}`),
                                dataClickIdName: "newsroom",
                                includedLocales: ["en_US"]
                            }, {
                                name: "components.footer.roadmap",
                                link: "https://roadmap.hostinger.com/",
                                dataClickIdName: "roadmap"
                            }, {
                                name: "components.footer.contactUs",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.contacts")}`),
                                dataClickIdName: "contact_us",
                                excludedLocales: ["hi_IN"]
                            }, {
                                name: "components.footer.blog",
                                link: e.themeData.blogLink,
                                dataClickIdName: "blog"
                            }, {
                                name: "components.footer.studentDiscount",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.studentDiscount")}`),
                                dataClickIdName: "student_discount",
                                includedLocales: ["en_US", "en_GB"]
                            }],
                            help: [{
                                name: "components.footer.tutorials",
                                link: e.themeData.tutorialsLink,
                                dataClickIdName: "tutorials"
                            }, {
                                name: "components.footer.knowledgeBase",
                                link: e.$t("global.knowledgeBaseLink"),
                                dataClickIdName: "knowledge_base"
                            }, {
                                name: "components.footer.reportAbuse",
                                link: Object(h.b)(`${e.siteUrl}${e.$t("wwwRoutes.reportAbuse")}`),
                                dataClickIdName: "report_abuse",
                                excludedLocales: ["hi_IN"]
                            }]
                        };
                        var e
                    }
                }
            }),
            y = (n(855), n(5)),
            component = Object(y.a)(w, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("footer", {
                    staticClass: "h-footer t-body-3",
                    attrs: {
                        dir: e.direction
                    }
                }, [t("div", {
                    staticClass: "h-footer__wrapper"
                }, [t("div", {
                    staticClass: "h-grid h-grid--cols-m-1 h-grid--cols-t-1"
                }, [t("div", {
                    staticClass: "h-footer__content"
                }, [t("div", {
                    staticClass: "h-footer__logo-section-container"
                }, [t("div", {
                    staticClass: "h-footer__logo-section"
                }, [e.isNiaga ? t("NiagaLogo", {
                    attrs: {
                        color: "primary",
                        "data-click-id": "hgr-niaga-footer-logo"
                    }
                }) : t("HLogo", {
                    attrs: {
                        color: "meteorite-dark",
                        "data-click-id": "hgr-footer-logo"
                    }
                }), e._v(" "), t("div", {
                    staticClass: "h-footer__logo-text"
                }, [t("p", {
                    staticClass: "t-body-3"
                }, [e._v("\n                " + e._s(e.$t("components.footer.ourMissionFirst")) + "\n              ")]), e._v(" "), t("p", {
                    staticClass: "t-body-3"
                }, [e._v("\n                " + e._s(e.$t("components.footer.ourMissionSecond")) + "\n              ")])]), e._v(" "), t("HPaymentMethods"), e._v(" "), e.showAwardBadges ? t("HAwardBadges") : e._e()], 1)]), e._v(" "), t("div", {
                    staticClass: "h-footer__sections"
                }, e._l(Object.keys(e.footerSections), (function(n, o) {
                    return t("div", {
                        key: `${n}-${o}`,
                        staticClass: "h-footer__sections--section"
                    }, [t("span", {
                        staticClass: "h-footer--desktop"
                    }, [t("span", {
                        staticClass: "h-footer__sections--title t-body-4"
                    }, [e._v("\n                " + e._s(e.$t(`components.footer.${n}`)) + "\n              ")]), e._v(" "), e._l(e.getSectionItems(n), (function(o, r) {
                        return [t(o.nuxtLink ? "NuxtLink" : "a", {
                            key: `${o}-${r}`,
                            tag: "Component",
                            staticClass: "h-footer__sections--item t-body-3",
                            class: e.getLinkBottomMargin(r, e.footerSections[n]),
                            attrs: {
                                "data-click-id": `hgr-footer_menu-${o.dataClickIdName}`,
                                href: o.link,
                                to: e.nuxtTo(o.nuxtLink)
                            }
                        }, [e._v("\n                  " + e._s(e.$t(o.name)) + "\n                ")])]
                    }))], 2), e._v(" "), t("HAccordion", {
                        staticClass: "h-footer--mobile",
                        attrs: {
                            "accordion-data": e.getSectionItems(n)
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [t("span", {
                                    staticClass: "h-footer__sections--title t-body-4"
                                }, [e._v("\n                  " + e._s(e.$t(`components.footer.${n}`)) + "\n                ")])]
                            },
                            proxy: !0
                        }, e._l(e.getSectionItems(n), (function(o, r) {
                            return {
                                key: e.getSlotName(r),
                                fn: function() {
                                    return [t(o.nuxtLink ? "NuxtLink" : "a", {
                                        key: `${o}-${r}`,
                                        tag: "Component",
                                        staticClass: "h-footer__sections--item t-body-3",
                                        class: e.getLinkBottomMargin(r, e.footerSections[n]),
                                        attrs: {
                                            "data-click-id": `hgr-footer_menu-${o.dataClickIdName}`,
                                            href: o.link,
                                            to: e.nuxtTo(o.nuxtLink)
                                        }
                                    }, [e._v("\n                  " + e._s(e.$t(o.name)) + "\n                ")])]
                                },
                                proxy: !0
                            }
                        }))], null, !0)
                    })], 1)
                })), 0)]), e._v(" "), t("HSocialIcons"), e._v(" "), t("div", {
                    staticClass: "h-footer__copyright"
                }, [t("span", {
                    staticClass: "h-footer__copyright--text t-body-3"
                }, [e._v("\n          " + e._s(e.$t("components.footer.copyright", {
                    domain: e.sanitizeBrandName(e.themeData.name),
                    copyrightSign: "©",
                    currentYear: (new Date).getFullYear()
                })) + "\n        ")]), e._v(" "), t("span", {
                    staticClass: "h-footer__copyright--text t-body-3"
                }, [e._v("\n          " + e._s(e.$t("components.footer.copyrightPrices")) + "\n        ")])])], 1)])])
            }), [], !1, null, "1069e94a", null);
        t.default = component.exports;
        installComponents(component, {
            NiagaLogo: n(218).default,
            HLogo: n(219).default,
            HAwardBadges: n(1030).default,
            HAccordion: n(531).default
        })
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(1),
            r = n(7),
            l = n(58),
            c = n(0);

        function h(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function d(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? h(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        const f = l.a.map((({
            languageCode: e
        }) => e));
        var m = r.a.extend({
                name: "HLanguageSelector",
                props: {
                    color: {
                        type: String,
                        default: "dark",
                        validator: Object(c.y)(["light", "dark"])
                    },
                    languageCode: {
                        type: String,
                        default: "en_US",
                        validator: Object(c.y)(f)
                    }
                },
                computed: {
                    country() {
                        var e;
                        return null !== (e = l.a.find((e => e.languageCode === this.languageCode))) && void 0 !== e ? e : l.a[0]
                    },
                    langSelectorClasses() {
                        return ["h-language-selector__lang", `h-language-selector__lang--${this.color}`, {
                            rtl: "rtl" === this.direction
                        }]
                    },
                    flagImage() {
                        return d(d({}, this.country), {}, {
                            width: 32,
                            height: 20
                        })
                    }
                }
            }),
            w = (n(828), n(5)),
            component = Object(w.a)(m, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("div", [t("div", {
                    staticClass: "h-language-selector h-language-selector--desktop",
                    attrs: {
                        "data-click-id": "hgr-navigation-toggle_locale_selector"
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("onClick")
                        }
                    }
                }, [t("HImage", {
                    staticClass: "h-language-selector__flag",
                    attrs: {
                        image: e.flagImage,
                        "no-lazy-load": ""
                    }
                }), e._v(" "), t("span", {
                    class: e.langSelectorClasses
                }, [e._v(e._s(e.country.language))])], 1), e._v(" "), e.$slots.default ? t("div", {
                    staticClass: "h-language-selector__menu"
                }, [e._t("default")], 2) : e._e()])
            }), [], !1, null, "445808f4", null);
        t.default = component.exports;
        installComponents(component, {
            HImage: n(165).default
        })
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(1),
            r = n(88),
            l = n.n(r),
            c = n(7),
            h = n(0);

        function d(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function f(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var m = c.a.extend({
                name: "HDropdown",
                props: {
                    value: Boolean,
                    openOnHover: Boolean,
                    offsetY: {
                        type: Number,
                        default: 0
                    },
                    closeDelay: {
                        type: Number,
                        default: 100
                    }
                },
                data: () => ({
                    focused: !1,
                    dropdownArrowTopHeight: 8,
                    closingTimeout: 0,
                    dimensions: {
                        activator: {
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            width: 0,
                            height: 0,
                            offsetTop: 0,
                            scrollHeight: 0,
                            offsetLeft: 0
                        },
                        content: {
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            width: 0,
                            height: 0,
                            offsetTop: 0,
                            scrollHeight: 0
                        }
                    },
                    pageWidth: 0
                }),
                computed: {
                    opened: {
                        get() {
                            return this.value
                        },
                        set(e) {
                            this.$emit("input", e)
                        }
                    },
                    contentStyle() {
                        return {
                            left: Object(h.g)(this.calculatedLeft) || "0",
                            marginTop: `${this.offsetY+this.dropdownArrowTopHeight}px`
                        }
                    },
                    triangleStyle() {
                        return {
                            left: this.calculatedTriangleLeft
                        }
                    },
                    calculatedTriangleLeft() {
                        return Object(h.g)(this.dimensions.activator.width / 2 - this.calculatedLeft) || "0"
                    },
                    calculateTriangleTop() {
                        return Object(h.g)(this.dimensions.content.top) || "0"
                    },
                    calculatedLeft() {
                        const e = this.dimensions.content.width;
                        return this.calcXOverflow(this.calcLeftAuto(), e)
                    }
                },
                mounted() {
                    this.updateDimensions(), window.addEventListener("resize", l()(this.updateDimensions, 100))
                },
                destroyed() {
                    window.removeEventListener("resize", l()(this.updateDimensions, 100))
                },
                methods: {
                    toggle() {
                        this.opened ? this.focused || this.close() : this.open()
                    },
                    onMouseEnter() {
                        this.openOnHover && (clearTimeout(this.closingTimeout), this.open())
                    },
                    onMouseLeave() {
                        this.openOnHover && (this.closingTimeout = window.setTimeout((() => this.close()), this.closeDelay))
                    },
                    onFocus() {
                        this.focused = !this.opened, this.open(), setTimeout((() => this.focused = !1), 100)
                    },
                    close() {
                        this.focused = !1, this.opened = !1
                    },
                    open() {
                        this.opened = !0
                    },
                    calcLeftAuto() {
                        if (this.dimensions.content.width <= 0) return 0;
                        return -1 * (this.dimensions.content.width - this.dimensions.activator.width) / 2
                    },
                    calcXOverflow(e, t) {
                        const n = this.dimensions.activator.left + e + t - this.pageWidth + 12;
                        return e = n > 0 ? e - n : e, this.dimensions.activator.left + e > 12 ? e + this.getOffsetLeft() : 0
                    },
                    getOffsetLeft: () => window.pageXOffset || document.documentElement.scrollLeft,
                    getRoundedBoundedClientRect(e) {
                        const rect = e.getBoundingClientRect();
                        return {
                            top: Math.round(rect.top),
                            left: Math.round(rect.left),
                            bottom: Math.round(rect.bottom),
                            right: Math.round(rect.right),
                            width: Math.round(rect.width),
                            height: Math.round(rect.height)
                        }
                    },
                    updateDimensions() {
                        this.pageWidth = document.documentElement.clientWidth;
                        const e = this.$refs.activator;
                        e && (this.$set(this.dimensions, "activator", f(f({}, this.getRoundedBoundedClientRect(e)), {}, {
                            offsetLeft: e.offsetLeft,
                            offsetTop: 0,
                            scrollHeight: 0
                        })), this.sneakPeek((() => {
                            if (this.$refs.content) {
                                const content = this.$refs.content;
                                if (!content) return;
                                this.$set(this.dimensions, "content", f(f({}, this.getRoundedBoundedClientRect(content)), {}, {
                                    offsetTop: 0,
                                    scrollHeight: 0
                                }))
                            }
                        })))
                    },
                    sneakPeek(e) {
                        requestAnimationFrame((() => {
                            const t = this.$refs.content;
                            t && "none" === t.style.display ? (t.style.display = "block", e(), t.style.display = "none") : e()
                        }))
                    }
                }
            }),
            w = (n(835), n(5)),
            component = Object(w.a)(m, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    ref: "hdropdown",
                    staticClass: "h-dropdown",
                    attrs: {
                        tabindex: "0"
                    },
                    on: {
                        mouseenter: e.onMouseEnter,
                        mouseleave: e.onMouseLeave,
                        focus: e.onFocus,
                        focusout: e.close
                    }
                }, [t("div", {
                    ref: "activator",
                    staticClass: "h-dropdown__activator",
                    attrs: {
                        "aria-haspopup": "true"
                    }
                }, [e._t("activator", null, {
                    toggle: e.toggle
                })], 2), e._v(" "), t("div", {
                    ref: "content",
                    staticClass: "h-dropdown__content",
                    class: {
                        "h-dropdown__content--hidden": !e.opened || !e.$slots.default
                    },
                    style: e.contentStyle,
                    attrs: {
                        "aria-hidden": !e.opened
                    }
                }, [t("div", {
                    staticClass: "h-dropdown__content-triangle",
                    style: e.triangleStyle
                }), e._v(" "), e._t("default")], 2)])
            }), [], !1, null, "293a984d", null);
        t.default = component.exports
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(1),
            r = n(88),
            l = n.n(r),
            c = n(7),
            h = n(0),
            d = n(9);

        function f(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }
        var m = c.a.extend({
                name: "HNav",
                props: {
                    background: {
                        type: String,
                        default: ""
                    },
                    color: {
                        type: String,
                        default: "light",
                        validator: Object(h.y)(d.c)
                    },
                    showCartLink: {
                        type: Boolean,
                        default: !0
                    },
                    active: Boolean,
                    darkItems: Boolean,
                    stickyAtYPosition: {
                        type: Number,
                        default: 0
                    }
                },
                data: () => ({
                    mobileMenuOpened: !1,
                    sticky: !1
                }),
                computed: {
                    headerContentColor() {
                        return this.sticky || this.mobileMenuOpened || this.active || this.darkItems ? this.isNiaga ? "primary" : "dark" : this.color
                    },
                    style() {
                        return this.background ? `background: ${this.background}` : null
                    },
                    classes() {
                        return function(e) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = null != arguments[i] ? arguments[i] : {};
                                i % 2 ? f(Object(source), !0).forEach((function(t) {
                                    Object(o.a)(e, t, source[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                                }))
                            }
                            return e
                        }({
                            [this.direction]: !0,
                            "h-nav--full-h": this.mobileMenuOpened,
                            "h-nav--sticky": this.sticky || this.mobileMenuOpened || this.active,
                            "h-nav--active": this.active || this.mobileMenuOpened
                        }, Object(h.f)("h-nav", this.headerContentColor, d.c, "--"))
                    },
                    mobileMenuClasses() {
                        return {
                            "h-nav__mobile-menu--open": this.mobileMenuOpened
                        }
                    },
                    mobileMenuIcon() {
                        return this.mobileMenuOpened ? "ui-icons/ic-close" : "ui-icons/ic-burger"
                    }
                },
                watch: {
                    $route() {
                        this.mobileMenuOpened && this.toggleMobileMenu()
                    }
                },
                mounted() {
                    const e = () => {
                            const e = this.sticky;
                            this.sticky = window.scrollY > this.stickyAtYPosition, this.sticky !== e && this.$emit("sticky", this.sticky)
                        },
                        t = () => {
                            const e = document.documentElement.clientWidth;
                            this.mobileMenuOpened && e > 1024 && this.toggleMobileMenu()
                        };
                    window.addEventListener("scroll", e), window.addEventListener("resize", l()(t, 100)), this.$once("hook:beforeDestroy", (() => {
                        window.removeEventListener("scroll", e), window.removeEventListener("resize", l()(t, 100))
                    })), e()
                },
                methods: {
                    toggleMobileMenu() {
                        this.mobileMenuOpened = !this.mobileMenuOpened, this.$emit("menuToggle", this.mobileMenuOpened);
                        document.getElementsByTagName("html")[0].style.overflow = this.mobileMenuOpened ? "hidden" : "initial"
                    }
                }
            }),
            w = m,
            y = (n(842), n(5)),
            component = Object(y.a)(w, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("nav", {
                    staticClass: "h-nav",
                    class: e.classes,
                    style: e.style,
                    attrs: {
                        role: "navigation",
                        dir: e.direction
                    }
                }, [t("div", {
                    staticClass: "h-nav__main-menu-wrapper"
                }, [t("div", {
                    staticClass: "h-nav__start"
                }, [e._t("logo", (function() {
                    return [e.isNiaga ? t("NiagaLogo", {
                        staticClass: "h-nav__logo",
                        attrs: {
                            "data-click-id": "hgr-niaga-navigation-logo",
                            color: e.headerContentColor
                        }
                    }) : t("HLogo", {
                        staticClass: "h-nav__logo",
                        attrs: {
                            "data-click-id": "hgr-navigation-logo",
                            color: e.headerContentColor
                        }
                    })]
                }), {
                    color: e.headerContentColor
                }), e._v(" "), e.$slots["locale-selector"] ? t("div", {
                    staticClass: "h-nav__locale-selector"
                }, [e._t("locale-selector", null, {
                    color: e.headerContentColor
                })], 2) : e._e(), e._v(" "), e.$slots["currency-selector"] ? t("div", {
                    staticClass: "h-nav__currency-selector"
                }, [e._t("currency-selector", null, {
                    color: e.headerContentColor
                })], 2) : e._e()], 2), e._v(" "), e.$slots.default ? t("div", {
                    staticClass: "h-nav__menu",
                    class: {
                        "h-nav__menu--end-spacing": e.showCartLink
                    }
                }, [e._t("default")], 2) : e._e(), e._v(" "), e.$slots["mobile-menu"] ? t("div", {
                    staticClass: "h-nav__mobile-menu",
                    class: e.mobileMenuClasses
                }, [e._t("mobile-menu")], 2) : e._e(), e._v(" "), t("div", {
                    staticClass: "h-nav__end-menu"
                }, [e.showCartLink ? e._t("cart-link", (function() {
                    return [t("HIcon", {
                        attrs: {
                            icon: "ui-icons/ic-shopping-cart",
                            color: e.headerContentColor
                        }
                    })]
                }), {
                    color: e.headerContentColor
                }) : e._e(), e._v(" "), e.$slots.default ? t("HIcon", {
                    staticClass: "h-nav__mobile-menu-burger",
                    attrs: {
                        icon: e.mobileMenuIcon,
                        color: e.headerContentColor
                    },
                    on: {
                        click: e.toggleMobileMenu
                    }
                }) : e._e()], 2)])])
            }), [], !1, null, "83686de8", null);
        t.default = component.exports;
        installComponents(component, {
            NiagaLogo: n(218).default,
            HLogo: n(219).default,
            HIcon: n(80).default
        })
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(7),
            r = n(58),
            l = n(103),
            c = o.a.extend({
                name: "HHiddenLanguageSelector",
                data: () => ({
                    countries: r.a
                }),
                computed: {
                    currentPageLink() {
                        return l.a[this.pageName] || l.a.homepage
                    },
                    filteredCountries() {
                        return this.countries.filter((e => "en_PK" !== e.languageCode))
                    }
                },
                methods: {
                    getPageLink(e) {
                        var t;
                        return (null === (t = this.currentPageLink.find((t => t.hreflang === e.hreflang))) || void 0 === t ? void 0 : t.href) || e.pageHref
                    }
                }
            }),
            h = n(5),
            component = Object(h.a)(c, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticStyle: {
                        display: "none"
                    }
                }, e._l(e.filteredCountries, (function(n) {
                    return t("a", {
                        key: n.languageCode,
                        attrs: {
                            href: e.getPageLink(n)
                        }
                    }, [e._v("\n    " + e._s(n.country) + " - " + e._s(n.language) + "\n  ")])
                })), 0)
            }), [], !1, null, null, null);
        t.default = component.exports
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(1),
            r = (n(8), n(16), n(29), n(7)),
            l = n(0),
            c = n(9);

        function h(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function d(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? h(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var f = r.a.extend({
                name: "HSocialIcon",
                props: {
                    icon: {
                        type: String,
                        required: !0,
                        validator: e => ["social-icons"].includes(e.split("/")[0])
                    },
                    color: {
                        type: String,
                        default: "meteorite-dark",
                        validator: Object(l.y)([...c.c, ...c.a])
                    },
                    link: {
                        type: [String, Object],
                        default: ""
                    },
                    viewBox: {
                        type: String,
                        default: "0 0 18 18"
                    }
                },
                computed: {
                    classes() {
                        return d({}, Object(l.f)("h-social-icon", this.color, [...c.c, ...c.a]))
                    },
                    linkAttributes() {
                        if (!this.link) return null;
                        return d({}, Object(l.u)(this.link) ? {
                            href: this.link.to,
                            target: this.link.target
                        } : {
                            href: this.link
                        })
                    },
                    ariaLabel() {
                        const e = this.icon.split("/")[1];
                        return null == e ? void 0 : e.replace("ic-", "")
                    },
                    currentIcon() {
                        const e = this.icon.split("/")[1];
                        return () => n(852)(`./${this.kebabToCamel(this.toTitleCase(e))}.vue`)
                    }
                },
                methods: {
                    kebabToCamel: l.v,
                    toTitleCase: l.D,
                    onClick() {
                        this.$emit("onClick")
                    }
                }
            }),
            m = (n(853), n(5)),
            component = Object(m.a)(f, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("a", e._b({
                    class: e.classes,
                    attrs: {
                        "aria-label": e.ariaLabel,
                        rel: "noopener noreferrer nofollow",
                        target: "_blank"
                    },
                    on: {
                        click: e.onClick
                    }
                }, "a", e.linkAttributes, !1), [t("svg", {
                    staticClass: "h-social-icon",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: e.viewBox,
                        role: "presentation"
                    }
                }, [t(e.currentIcon, {
                    tag: "Component"
                })], 1)])
            }), [], !1, null, "ad40b096", null);
        t.default = component.exports
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var o = {
                name: "HAwardBadges",
                data: () => ({
                    raAwardImage: {
                        src: "/h-assets/images/pages/homepage/reclame-badge-br-2x.png",
                        alt: "Reclame Aqui"
                    },
                    raAwardLink: "https://www.reclameaqui.com.br/empresa/hostinger/?utm_source=referral&utm_medium=embbed&utm_campaign=reputacao&utm_term=horizontal",
                    b2bAwardImage: {
                        src: "/h-assets/images/footer/b2b-award.svg",
                        alt: "B2B Awards 2021"
                    }
                })
            },
            r = (n(857), n(5)),
            component = Object(r.a)(o, (function() {
                var e = this,
                    t = e._self._c;
                return t("div", {
                    staticClass: "h-award-badges"
                }, [t("a", {
                    staticClass: "h-award-badges__ra",
                    attrs: {
                        href: e.raAwardLink,
                        target: "_blank",
                        "data-click-id": "hgr-footer-trust_badge"
                    }
                }, [t("HImage", {
                    attrs: {
                        image: e.raAwardImage
                    }
                })], 1), e._v(" "), t("div", {
                    staticClass: "h-award-badges__b2b"
                }, [t("HImage", {
                    attrs: {
                        image: e.b2bAwardImage
                    }
                })], 1)])
            }), [], !1, null, null, null);
        t.default = component.exports;
        installComponents(component, {
            HImage: n(165).default
        })
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        n(127);
        var o = n(7).a.extend({
                name: "HCookieSelection",
                props: {
                    title: {
                        type: String,
                        required: !0
                    },
                    description: {
                        type: String,
                        default: ""
                    },
                    checked: {
                        type: Boolean,
                        default: !1
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    }
                },
                data() {
                    return {
                        switchValue: this.checked
                    }
                },
                methods: {
                    getDataClickId(e) {
                        switch (e) {
                            case "marketingCookies":
                                return "hgr-cookie_consent-settings-advertising_switch";
                            case "statisticsCookies":
                                return "hgr-cookie_consent-settings-statistics_switch";
                            default:
                                return ""
                        }
                    },
                    getCookieName(e) {
                        switch (e) {
                            case "marketingCookies":
                                return "advertising";
                            case "statisticsCookies":
                                return "statistics";
                            default:
                                return e.toLowerCase()
                        }
                    },
                    onChange(e) {
                        this.switchValue = e, this.$emit("toggle", {
                            name: this.getCookieName(this.title),
                            value: e
                        })
                    }
                }
            }),
            r = (n(863), n(5)),
            component = Object(r.a)(o, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("div", {
                    staticClass: "h-cookie-selection"
                }, [t("div", {
                    staticClass: "h-cookie-selection__container"
                }, [t("div", {
                    staticClass: "h-cookie-selection__text-container"
                }, [t("h2", {
                    staticClass: "h-cookie-selection__title t-body-4"
                }, [e._v("\n        " + e._s(e.$t(`components.cookieSelection.${e.title}`)) + "\n      ")]), e._v(" "), e.description ? t("p", {
                    staticClass: "h-cookie-selection__description t-body-3"
                }, [e._v("\n        " + e._s(e.$t(`components.cookieSelection.${e.description}`)) + "\n      ")]) : e._e()]), e._v(" "), t("div", {
                    staticClass: "h-cookie-selection__switch-wrapper"
                }, [t("HSwitch", {
                    class: `h-switch--${e.direction}`,
                    attrs: {
                        value: e.switchValue,
                        size: "sm",
                        disabled: e.disabled,
                        "data-click-id": e.getDataClickId(e.title)
                    },
                    on: {
                        change: e.onChange
                    }
                }), e._v(" "), e.disabled ? t("span", {
                    staticClass: "h-cookie-selection__switch-label"
                }, [e._v(e._s(e.$t("components.cookieSelection.alwaysActive")))]) : e._e()], 1)])])
            }), [], !1, null, "6ae544f0", null);
        t.default = component.exports;
        installComponents(component, {
            HSwitch: n(1032).default
        })
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(1),
            r = n(7),
            l = n(0);

        function c(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function h(e) {
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
        const d = ["md", "sm"];
        var f = r.a.extend({
                name: "HSwitch",
                props: {
                    value: {
                        type: Boolean,
                        required: !0
                    },
                    disabled: Boolean,
                    size: {
                        type: String,
                        default: "md",
                        validator: Object(l.y)(d)
                    },
                    label: {
                        type: String,
                        default: ""
                    }
                },
                computed: {
                    valueModel: {
                        get() {
                            return this.value
                        },
                        set(e) {
                            this.$emit("change", e)
                        }
                    },
                    switchClasses() {
                        return h(h({}, Object(l.f)("h-switch", this.size, d, "--")), {}, {
                            "h-switch--on": !!this.value,
                            "h-switch--disabled": this.disabled
                        })
                    }
                }
            }),
            m = (n(865), n(5)),
            component = Object(m.a)(f, (function() {
                var e = this,
                    t = e._self._c;
                e._self._setupProxy;
                return t("span", {
                    staticClass: "h-switch"
                }, [t("label", {
                    staticClass: "h-switch__switch",
                    class: e.switchClasses
                }, [t("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.valueModel,
                        expression: "valueModel"
                    }],
                    staticClass: "h-switch__input",
                    attrs: {
                        type: "checkbox",
                        disabled: e.disabled,
                        "aria-label": e.label
                    },
                    domProps: {
                        checked: e.value,
                        checked: Array.isArray(e.valueModel) ? e._i(e.valueModel, null) > -1 : e.valueModel
                    },
                    on: {
                        change: function(t) {
                            var n = e.valueModel,
                                o = t.target,
                                r = !!o.checked;
                            if (Array.isArray(n)) {
                                var l = e._i(n, null);
                                o.checked ? l < 0 && (e.valueModel = n.concat([null])) : l > -1 && (e.valueModel = n.slice(0, l).concat(n.slice(l + 1)))
                            } else e.valueModel = r
                        }
                    }
                }), e._v(" "), t("span", {
                    staticClass: "h-switch__box",
                    class: `h-switch__box--${e.direction}`
                })]), e._v(" "), t("span", {
                    staticClass: "h-switch__label"
                }, [e._v(e._s(e.label))])])
            }), [], !1, null, "cedc109c", null);
        t.default = component.exports
    }],
    [
        [582, 215, 63, 216]
    ]
]);