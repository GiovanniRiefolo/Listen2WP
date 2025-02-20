/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script */ "./src/script.js");
/* harmony import */ var _icons_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons-library */ "./src/icons-library.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */






/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */




/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    textColor = '#000000',
    backgroundColor = '#ffffff',
    borderRadius = '12px',
    borderColor = '#ffffff',
    borderStyle = 'solid',
    borderWidth = '0px',
    padding = {
      top: '8px',
      right: '16px',
      bottom: '8px',
      left: '16px'
    },
    columnGap = {
      right: '0px',
      left: '0px'
    },
    playText = 'Play',
    pauseText = 'Pause',
    resumeText = 'Resume',
    stopText = 'Stop',
    playIcon = "",
    pauseIcon = "",
    resumeIcon = "",
    stopIcon = ""
  } = attributes;
  const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [iconType, setIconType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const openModal = type => {
    setOpen(true);
    setIconType(type);
  };
  const closeModal = () => {
    setOpen(false);
    setIconType('');
  };
  const applyChoice = icon => {
    switch (iconType) {
      case 'playIcon':
        setAttributes({
          playIcon: icon
        });
        break;
      case 'pauseIcon':
        setAttributes({
          pauseIcon: icon
        });
        break;
      case 'resumeIcon':
        setAttributes({
          resumeIcon: icon
        });
        break;
      case 'stopIcon':
        setAttributes({
          stopIcon: icon
        });
        break;
      default:
        break;
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
      title: "Select icon",
      onRequestClose: closeModal,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "wp-block-rdev-l2wp__icon-grid",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
          onClick: () => applyChoice(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons_library__WEBPACK_IMPORTED_MODULE_6__.PlayIconNormalFilled, {})),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons_library__WEBPACK_IMPORTED_MODULE_6__.PlayIconNormalFilled, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
          onClick: () => applyChoice(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons_library__WEBPACK_IMPORTED_MODULE_6__.PlayIconNormalOutlined, {})),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons_library__WEBPACK_IMPORTED_MODULE_6__.PlayIconNormalOutlined, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
          onClick: () => applyChoice(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons_library__WEBPACK_IMPORTED_MODULE_6__.PlayIconRoundedFilled, {})),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons_library__WEBPACK_IMPORTED_MODULE_6__.PlayIconRoundedFilled, {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
          onClick: () => applyChoice(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons_library__WEBPACK_IMPORTED_MODULE_6__.PlayIconRoundedOutlined, {})),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons_library__WEBPACK_IMPORTED_MODULE_6__.PlayIconRoundedOutlined, {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        variant: "secondary",
        onClick: closeModal,
        children: "Close"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      group: "styles",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Colors', 'l2wp-dev'),
        initialOpen: true,
        colorSettings: [{
          value: textColor,
          onChange: color => setAttributes({
            textColor: color
          }),
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text', 'l2wp-dev')
        }, {
          value: backgroundColor,
          onChange: color => setAttributes({
            backgroundColor: color
          }),
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background', 'l2wp-dev')
        }],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ContrastChecker, {
          textColor: textColor,
          backgroundColor: backgroundColor
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Borders', 'l2wp-dev'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'l2wp-dev'),
          value: borderRadius,
          onChange: newRadius => setAttributes({
            borderRadius: newRadius
          }),
          units: [{
            value: 'px',
            label: 'px',
            default: 0
          }, {
            value: '%',
            label: '%',
            default: 0
          }, {
            value: 'em',
            label: 'em',
            default: 0
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBorderControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'l2wp-dev'),
          value: {
            style: borderStyle,
            width: borderWidth,
            color: borderColor
          },
          onChange: newBorder => {
            setAttributes({
              borderStyle: newBorder.style,
              borderWidth: newBorder.width,
              borderColor: newBorder.color
            });
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'l2wp-dev'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'l2wp-dev'),
          values: padding,
          splitOnAxis: true,
          onChange: newPadding => setAttributes({
            padding: newPadding
          }),
          units: [{
            value: 'px',
            label: 'px',
            default: 0
          }, {
            value: '%',
            label: '%',
            default: 0
          }, {
            value: 'em',
            label: 'em',
            default: 0
          }]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dimensions', 'l2wp-dev'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block Spaces', 'l2wp-dev'),
          values: columnGap,
          splitOnAxis: true,
          onChange: newGap => {
            console.log(newGap);
            setAttributes({
              columnGap: newGap
            });
            console.log(columnGap);
          },
          sides: "horizontal",
          units: [{
            value: 'px',
            label: 'px',
            default: 0
          }, {
            value: '%',
            label: '%',
            default: 0
          }, {
            value: 'em',
            label: 'em',
            default: 0
          }]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      group: "settings",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content', 'l2wp-dev'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          style: {
            display: 'flex',
            gap: '8px',
            flexFlow: 'row nowrap',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: "Play Text",
            value: playText,
            onChange: value => setAttributes({
              playText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: "secondary",
            size: "compact",
            onClick: () => openModal('playIcon'),
            children: "Open Library"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          style: {
            display: 'flex',
            gap: '8px',
            flexFlow: 'row nowrap',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: "Pause Text",
            value: pauseText,
            onChange: value => setAttributes({
              pauseText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: "secondary",
            size: "compact",
            onClick: () => openModal('pauseIcon'),
            children: "Open Library"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          style: {
            display: 'flex',
            gap: '8px',
            flexFlow: 'row nowrap',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: "Resume Text",
            value: resumeText,
            onChange: value => setAttributes({
              resumeText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: "secondary",
            size: "compact",
            onClick: () => openModal('resumeIcon'),
            children: "Open Library"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          style: {
            display: 'flex',
            gap: '8px',
            flexFlow: 'row nowrap',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: "Stop Text",
            value: stopText,
            onChange: value => setAttributes({
              stopText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: "secondary",
            size: "compact",
            onClick: () => openModal('stopIcon'),
            children: "Open Library"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "wp-block-rdev-l2wp__buttons",
        style: {
          columnGap: columnGap.left
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
          id: "l2wp-play-button",
          style: {
            display: 'flex',
            backgroundColor,
            color: textColor,
            borderColor,
            borderRadius,
            borderStyle,
            borderWidth,
            padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
          },
          onClick: _script__WEBPACK_IMPORTED_MODULE_5__.playUtterance,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "icon",
            style: {
              "--icon-fill": textColor ? textColor : '#000',
              "--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
            },
            children: playIcon && playIcon
          }), playText]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
          id: "l2wp-pause-button",
          style: {
            display: 'flex',
            backgroundColor,
            color: textColor,
            borderColor,
            borderRadius,
            borderStyle,
            borderWidth,
            padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
          },
          onClick: _script__WEBPACK_IMPORTED_MODULE_5__.pauseUtterance,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "icon",
            style: {
              "--icon-fill": textColor ? textColor : '#000',
              "--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
            },
            children: pauseIcon && pauseIcon
          }), pauseText]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
          id: "l2wp-resume-button",
          style: {
            display: 'flex',
            backgroundColor,
            color: textColor,
            borderColor,
            borderRadius,
            borderStyle,
            borderWidth,
            padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
          },
          onClick: _script__WEBPACK_IMPORTED_MODULE_5__.resumeUtterance,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "icon",
            style: {
              "--icon-fill": textColor ? textColor : '#000',
              "--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
            },
            children: resumeIcon && resumeIcon
          }), resumeText]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
          id: "l2wp-cancel-button",
          style: {
            display: 'flex',
            backgroundColor,
            color: textColor,
            borderColor,
            borderRadius,
            borderStyle,
            borderWidth,
            padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
          },
          onClick: _script__WEBPACK_IMPORTED_MODULE_5__.cancelUtterance,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "icon",
            style: {
              "--icon-fill": textColor ? textColor : '#000',
              "--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
            },
            children: stopIcon && stopIcon
          }), stopText]
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/icons-library.js":
/*!******************************!*\
  !*** ./src/icons-library.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayIconNormalFilled: () => (/* binding */ PlayIconNormalFilled),
/* harmony export */   PlayIconNormalOutlined: () => (/* binding */ PlayIconNormalOutlined),
/* harmony export */   PlayIconRoundedFilled: () => (/* binding */ PlayIconRoundedFilled),
/* harmony export */   PlayIconRoundedOutlined: () => (/* binding */ PlayIconRoundedOutlined)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PlayIconNormalFilled = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 120 120",
    style: {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: '2'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      id: "Play---fill---normal",
      x: "0",
      y: "0",
      width: "120",
      height: "120",
      style: {
        fill: 'none'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M16.652,13.415c-0,-1.467 0.803,-2.816 2.091,-3.516c1.289,-0.699 2.858,-0.638 4.088,0.161c15.259,9.91 54.515,35.405 68.646,44.582c1.136,0.738 1.821,2 1.821,3.355c0,1.354 -0.685,2.617 -1.821,3.354c-14.131,9.178 -53.387,34.672 -68.646,44.583c-1.23,0.798 -2.799,0.86 -4.088,0.16c-1.288,-0.7 -2.091,-2.049 -2.091,-3.515c-0,-19.102 -0,-70.063 -0,-89.164Z"
    })]
  });
};
const PlayIconNormalOutlined = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 120 120",
    style: {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: '2'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      id: "Play---outline---normal",
      x: "0",
      y: "0",
      width: "120",
      height: "120",
      style: {
        fill: 'none'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M16.652,13.415c-0,-1.467 0.803,-2.816 2.091,-3.516c1.289,-0.699 2.858,-0.638 4.088,0.161l68.646,44.582c1.136,0.738 1.821,2 1.821,3.355c0,1.354 -0.685,2.617 -1.821,3.354l-68.646,44.583c-1.23,0.798 -2.799,0.86 -4.088,0.16c-1.288,-0.7 -2.091,-2.049 -2.091,-3.515l-0,-89.164Zm4,-0l-0,89.164l68.646,-44.582l-68.646,-44.582Z"
    })]
  });
};
const PlayIconRoundedFilled = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 120 120",
    style: {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: '2'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      id: "Play---fill---rounded",
      x: "0",
      y: "0",
      width: "120",
      height: "120",
      style: {
        fill: 'none'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M20.005,17.951c-0,-4.677 2.718,-8.928 6.963,-10.892c4.246,-1.963 9.245,-1.28 12.809,1.75c15.623,13.28 36.832,31.31 49.463,42.048c2.682,2.28 4.228,5.623 4.228,9.143c-0,3.52 -1.546,6.863 -4.228,9.143c-12.631,10.738 -33.84,28.768 -49.463,42.048c-3.564,3.03 -8.563,3.713 -12.809,1.75c-4.245,-1.964 -6.963,-6.215 -6.963,-10.892c-0,-24.15 -0,-59.948 -0,-84.098Z"
    })]
  });
};
const PlayIconRoundedOutlined = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 120 120",
    style: {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: '2'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      id: "Play---outline---rounded",
      x: "0",
      y: "0",
      width: "120",
      height: "120",
      style: {
        fill: 'none'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M20.005,17.951c-0,-4.677 2.718,-8.928 6.963,-10.892c4.246,-1.963 9.245,-1.28 12.809,1.75l49.463,42.048c2.682,2.28 4.228,5.623 4.228,9.143c-0,3.52 -1.546,6.863 -4.228,9.143l-49.463,42.048c-3.564,3.03 -8.563,3.713 -12.809,1.75c-4.245,-1.964 -6.963,-6.215 -6.963,-10.892l-0,-84.098Zm4,0l-0,84.098c-0,3.118 1.812,5.952 4.642,7.261c2.831,1.309 6.164,0.854 8.539,-1.166l49.463,-42.049c1.788,-1.52 2.819,-3.748 2.819,-6.095c-0,-2.347 -1.031,-4.575 -2.819,-6.095l-49.463,-42.049c-2.375,-2.02 -5.708,-2.475 -8.539,-1.166c-2.83,1.309 -4.642,4.143 -4.642,7.261Z"
    })]
  });
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  icon: {
    src: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
        d: "M192 416c0-17.7-14.3-32-32-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H309.3c-6.9 0-13.7 2.2-19.2 6.4L192 464V416zM64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h64 32v32 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM192 128c-8.8 0-16 7.2-16 16s7.2 16 16 16h48V272c0 8.8 7.2 16 16 16s16-7.2 16-16V160h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H256 192z"
      })
    })
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save({
  attributes
}) {
  const {
    textColor = '#000000',
    backgroundColor = '#ffffff',
    borderRadius = '12px',
    borderColor = '#ffffff',
    borderStyle = 'solid',
    borderWidth = '0px',
    padding = {
      top: '8px',
      right: '16px',
      bottom: '8px',
      left: '16px'
    },
    columnGap = {
      right: '0px',
      left: '0px'
    },
    playText = 'Play',
    pauseText = 'Pause',
    resumeText = 'Resume',
    stopText = 'Stop'
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "wp-block-rdev-l2wp__buttons",
      style: {
        columnGap: columnGap.left
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
        id: "l2wp-play-button",
        style: {
          display: 'flex',
          backgroundColor,
          color: textColor,
          borderColor,
          borderRadius,
          borderStyle,
          borderWidth,
          padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "icon",
          style: {
            "--icon-fill": textColor ? textColor : '#000',
            "--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
          },
          children: attributes.playIcon && attributes.playIcon
        }), playText]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
        id: "l2wp-pause-button",
        style: {
          display: 'flex',
          backgroundColor,
          color: textColor,
          borderColor,
          borderRadius,
          borderStyle,
          borderWidth,
          padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "icon",
          style: {
            "--icon-fill": textColor ? textColor : '#000',
            "--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
          },
          children: attributes.pauseIcon && pickIcon(attributes.pauseIcon)
        }), pauseText]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
        id: "l2wp-resume-button",
        style: {
          display: 'flex',
          backgroundColor,
          color: textColor,
          borderColor,
          borderRadius,
          borderStyle,
          borderWidth,
          padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "icon",
          style: {
            "--icon-fill": textColor ? textColor : '#000',
            "--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
          },
          children: attributes.resumeIcon && pickIcon(attributes.resumeIcon)
        }), resumeText]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
        id: "l2wp-cancel-button",
        style: {
          display: 'flex',
          backgroundColor,
          color: textColor,
          borderColor,
          borderRadius,
          borderStyle,
          borderWidth,
          padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "icon",
          style: {
            "--icon-fill": textColor ? textColor : '#000',
            "--icon-size": attributes.fontSize ? attributes.fontSize : "14px"
          },
          children: attributes.stopIcon && pickIcon(attributes.stopIcon)
        }), stopText]
      })]
    })
  });
}

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelUtterance: () => (/* binding */ cancelUtterance),
/* harmony export */   pauseUtterance: () => (/* binding */ pauseUtterance),
/* harmony export */   playUtterance: () => (/* binding */ playUtterance),
/* harmony export */   resumeUtterance: () => (/* binding */ resumeUtterance)
/* harmony export */ });
let synthesis;
let utterance;
if ('speechSynthesis' in window) {
  synthesis = window.speechSynthesis;
  utterance = new SpeechSynthesisUtterance();
} else {
  console.log('Text-to-speech not supported.');
}
const getContent = () => {
  console.log('test');
  const article = document.querySelector('.entry-content');
  if (article) {
    const content = article.querySelectorAll(':scope > :not(.wp-block-rdev-l2wp)');
    console.log(content);
    const toRead = [];
    content.forEach(element => toRead.push(element.innerText || element.textContent));
    return toRead.join(' ');
  } else {
    console.log('Can\'t find anything to read');
    return 'Non riesco a leggere il contenuto';
  }
};
const playUtterance = () => {
  utterance.text = getContent();
  console.log(utterance.text);
  if (synthesis && utterance) {
    synthesis.speak(utterance);
  }
};
const pauseUtterance = () => {
  if (synthesis) {
    synthesis.pause();
  } else {
    console.log('synthesis not defined');
  }
};
const resumeUtterance = () => {
  if (synthesis) {
    synthesis.resume();
  } else {
    console.log('synthesis not defined');
  }
};
const cancelUtterance = () => {
  if (synthesis) {
    synthesis.cancel();
  } else {
    console.log('synthesis not defined');
  }
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"rdev/l2wp","version":"0.1.0","title":"Text to speech","category":"accessibility","icon":"<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 512 512\'><!--!Font Awesome Pro 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d=\'M160 512l48-32 96-64H464h48V368 48 0H464 48 0V48 368v48H48h64 48v38.3V464v48zM277.4 376.1L208 422.3V416 368H160 48V48H464V368H304 289.5l-12.1 8.1zM168 112H144v48h24 64V296v24h48V296 160h64 24V112H344 256 168z\'/></svg>","description":"Text 2 speech block","example":{},"supports":{"html":false,"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true}},"textdomain":"l2wp-dev","attributes":{"buttonColor":{"type":"string","default":"#FFFFFF"},"textColor":{"type":"string","default":"#000000"},"backgroundColor":{"type":"string","default":"#FFFFFF"},"borderRadius":{"type":"string","default":"12px"},"borderColor":{"type":"string","default":"#ffffff"},"borderStyle":{"type":"string","default":"solid"},"borderWidth":{"type":"string","default":"0px"},"playText":{"type":"string","default":"Play"},"resumeText":{"type":"string","default":"Resume"},"pauseText":{"type":"string","default":"Pause"},"stopText":{"type":"string","default":"Stop"},"playIcon":{"type":"string","default":""},"pauseIcon":{"type":"string","default":""},"resumeIcon":{"type":"string","default":""},"stopIcon":{"type":"string","default":""},"fontFamily":{"type":"string","default":"sans-serif"},"fontWeight":{"type":"string","default":"normal"},"fontSize":{"type":"string","default":""},"columnGap":{"type":"object","default":{"right":"0px","left":"0px"}},"padding":{"type":"object","default":{"top":"8px","right":"16px","bottom":"8px","left":"16px"}},"style":{"type":"object","default":{"typography":{"lineHeight":"1.2","fontSize":"","fontFamily":"system-sans-serif","fontWeight":"normal"}}}},"editorScript":"file:./index.js","viewScript":"file:./view.js","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkl2wp_dev"] = self["webpackChunkl2wp_dev"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map