import { css, createGlobalStyle } from "styled-components";
import { keen } from "style/styleVariables";

const NORMALIZE = css`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

  /* Document
   ========================================================================== */

  /**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /* Sections
   ========================================================================== */

  /**
 * Remove the margin in all browsers.
 */

  body {
    margin: 0;
  }

  /**
 * Render the 'main' element consistently in IE.
 */

  main {
    display: block;
  }

  /**
 * Correct the font size and margin on 'h1' elements within 'section' and
 * 'article' contexts in Chrome, Firefox, and Safari.
 */

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  /* Grouping content
   ========================================================================== */

  /**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
   ========================================================================== */

  /**
 * Remove the gray background on active links in IE 10.
 */

  a {
    background-color: transparent;
  }

  /**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

  b,
  strong {
    font-weight: bolder;
  }

  /**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
 * Add the correct font size in all browsers.
 */

  small {
    font-size: 80%;
  }

  /**
 * Prevent 'sub' and 'sup' elements from affecting the line height in
 * all browsers.
 */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
   ========================================================================== */

  /**
 * Remove the border on images inside links in IE 10.
 */

  img {
    border-style: none;
  }

  /* Forms
   ========================================================================== */

  /**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  /**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  /**
 * Correct the inability to style clickable types in iOS and Safari.
 */

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
 * Remove the inner border and padding in Firefox.
 */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
 * Restore the focus styles unset by the previous rule.
 */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
 * Correct the padding in Firefox.
 */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from 'fieldset' elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    'fieldset' elements in all browsers.
 */

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

  progress {
    vertical-align: baseline;
  }

  /**
 * Remove the default vertical scrollbar in IE 10+.
 */

  textarea {
    overflow: auto;
  }

  /**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to 'inherit' in Safari.
 */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* Interactive
   ========================================================================== */

  /*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

  details {
    display: block;
  }

  /*
 * Add the correct display in all browsers.
 */

  summary {
    display: list-item;
  }

  /* Misc
   ========================================================================== */

  /**
 * Add the correct display in IE 10+.
 */

  template {
    display: none;
  }

  /**
 * Add the correct display in IE 10.
 */

  [hidden] {
    display: none;
  }
`;

const CSS_CUSTOM_PROPERTIES = css`
  :root {
    --COLOR_BRAND_A: ${props => props.theme.COLOR_BRAND_A};
    --COLOR_BRAND_B: ${props => props.theme.COLOR_BRAND_B};
    --COLOR_CONTENT: ${props => props.theme.COLOR_CONTENT};

    --COLOR_BACKGROUND_A: ${props => props.theme.COLOR_BACKGROUND_A};
    --COLOR_BACKGROUND_B: ${props => props.theme.COLOR_BACKGROUND_B};
    --COLOR_BACKGROUND_C: ${props => props.theme.COLOR_BACKGROUND_C};

    --COLOR_INTENT_HIGHLIGHT: ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
    --COLOR_INTENT_SUCCESS: ${props => props.theme.COLOR_INTENT_SUCCESS};
    --COLOR_INTENT_DANGER: ${props => props.theme.COLOR_INTENT_DANGER};
    --COLOR_INTENT_WARNING: ${props => props.theme.COLOR_INTENT_WARNING};
    --COLOR_INTENT_INFO: ${props => props.theme.COLOR_INTENT_INFO};

    --COLOR_KEYLINE: ${props => props.theme.COLOR_KEYLINE};
    --COLOR_KEYLINE_SOLID: ${props => props.theme.COLOR_KEYLINE_SOLID};

    --OPACITY_100: ${props => props.theme.OPACITY_100};
    --OPACITY_70: ${props => props.theme.OPACITY_70};
    --OPACITY_50: ${props => props.theme.OPACITY_50};
    --OPACITY_15: ${props => props.theme.OPACITY_15};

    --BORDER_RADIUS_BASE: ${props => props.theme.BORDER_RADIUS_BASE};
    --SPACING_BASE: ${props => props.theme.SPACING_BASE};

    --ZINDEX_TOOLTIP: ${props => props.theme.ZINDEX_TOOLTIP};
    --ZINDEX_STICKY: ${props => props.theme.ZINDEX_STICKY};

    --RADIUS_05: ${props => props.theme.RADIUS_05};
    --RADIUS_1: ${props => props.theme.RADIUS_1};
    --RADIUS_2: ${props => props.theme.RADIUS_2};
    --RADIUS_3: ${props => props.theme.RADIUS_3};
    --RADIUS_4: ${props => props.theme.RADIUS_4};
    --RADIUS_5: ${props => props.theme.RADIUS_5};
    --RADIUS_6: ${props => props.theme.RADIUS_6};
    --RADIUS_7: ${props => props.theme.RADIUS_7};
    --RADIUS_8: ${props => props.theme.RADIUS_8};

    --FONTS_SYSTEM: ${props => props.theme.FONTS_SYSTEM};
    --FONTS_BRAND: ${props => props.theme.FONTS_BRAND};
    --FONTS_CODE: ${props => props.theme.FONTS_CODE};

    --FONT_STACK_BASE: ${props => props.theme.FONT_STACK_BASE};
    --FONT_STACK_BRAND: ${props => props.theme.FONT_STACK_BRAND};
    --FONT_STACK_CODE: ${props => props.theme.FONT_STACK_CODE};

    --FONT_SIZE_HERO: ${props => props.theme.FONT_SIZE_HERO};
    --FONT_SIZE_TITLE: ${props => props.theme.FONT_SIZE_TITLE};
    --FONT_SIZE_LG: ${props => props.theme.FONT_SIZE_LG};
    --FONT_SIZE_MD: ${props => props.theme.FONT_SIZE_MD};
    --FONT_SIZE_BASE: ${props => props.theme.FONT_SIZE_BASE};
    --FONT_SIZE_SM: ${props => props.theme.FONT_SIZE_SM};
    --FONT_SIZE_XS: ${props => props.theme.FONT_SIZE_XS};

    --LINE_HEIGHT_BASE: ${props => props.theme.LINE_HEIGHT_BASE};

    --FONT_WEIGHT_BASE: ${props => props.theme.FONT_WEIGHT_BASE};
    --FONT_WEIGHT_SEMIBOLD: ${props => props.theme.FONT_WEIGHT_SEMIBOLD};
    --FONT_WEIGHT_BOLD: ${props => props.theme.FONT_WEIGHT_BOLD};
  }
`;

const GlobalStyles = createGlobalStyle`

  ${NORMALIZE};

  ${CSS_CUSTOM_PROPERTIES};

  html {
    font-family: ${props => props.theme.FONTS_SYSTEM};
    font-size: ${props => props.theme.FONT_SIZE_BASE};
    color: ${props => props.theme.COLOR_CONTENT};
  }

  hr {
    border: 0;
    opacity: ${props => props.theme.OPACITY_15};
    border-top: 1px solid;
  }

  a:link {
    color: ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

GlobalStyles.defaultProps = {
  theme: keen
};

export default GlobalStyles;
