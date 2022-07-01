import React from 'react';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".dropdown select {\r\n    width: 200px;\r\n    margin-top: 0.8em;\r\n    margin-bottom: 0.8em;\r\n    text-align: center;\r\n    background-color: #00bc774b;\r\n    border-radius: 2px;\r\n    padding: 0.15em;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  .dropdown select option {\r\n    background-color: white;\r\n  }";
n(css,{});

var Dropdown = function Dropdown(_ref) {
  var label = _ref.label,
      options = _ref.options,
      id = _ref.id,
      handleFormChange = _ref.handleFormChange;
  return /*#__PURE__*/React.createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/React.createElement("label", null, label), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "dropdown-list",
    autoComplete: "country-name",
    id: id,
    onChange: handleFormChange,
    required: true
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement("option", {
      value: option.value,
      key: option.abbreviation
    }, option.name);
  })));
};

export { Dropdown as default };
