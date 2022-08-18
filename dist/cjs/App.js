"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "default", {
    enumerable: !0,
    get: function() {
        return _default;
    }
});
var _jsxRuntime = require("react/jsx-runtime");
require("./App.css");
var _react = require("@emotion/react"), _default = function() {
    var baseClassName = (0, _react.css)("display:block;background-color:red;width:100px;height:100px;", "baseClassName");
    return (0, _jsxRuntime.jsx)("div", {
        className: (0, _react.css)(baseClassName, "label:baseClassName"),
        children: "Test"
    });
};
