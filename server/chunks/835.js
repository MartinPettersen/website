exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 6540:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "container_container__vJwa7"
};


/***/ }),

/***/ 4308:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "layout_container__fbLkO",
	"background": "layout_background__qqb_S",
	"header": "layout_header__kY0Lt"
};


/***/ }),

/***/ 475:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "navbar_navbar__9q1fQ",
	"links": "navbar_links__c7uSB"
};


/***/ }),

/***/ 6835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout.module.css
var layout_module = __webpack_require__(4308);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./components/container.module.css
var container_module = __webpack_require__(6540);
var container_module_default = /*#__PURE__*/__webpack_require__.n(container_module);
;// CONCATENATED MODULE: ./components/container.js



const Contentbox = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (container_module_default()).container,
                children: children
            })
        })
    });
};
/* harmony default export */ const container = (Contentbox);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/navbar.module.css
var navbar_module = __webpack_require__(475);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
;// CONCATENATED MODULE: ./components/navbar.js





const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (navbar_module_default()).navbar,
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "navbar navbar-inverse",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                fluid: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("header", {
                        className: "navbar-header",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "navbar-brand",
                            children: "Portfolio Logo"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: "About"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: "Home"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/layout.js





// return <div className={styles.container}>{children}</div>;
function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (layout_module_default()).background,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(container, {
                children: children
            })
        ]
    });
};


/***/ })

};
;