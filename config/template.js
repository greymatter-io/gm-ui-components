const { getProps } = require("@svgr/core");

/* This file exports a template used by webpack to create React components from our 
svg files. The template is based on svgr docs and modified for our use case: 
https://github.com/smooth-code/svgr/blob/master/packages/core/src/templates/reactDomTemplate.js */
module.exports = (code, config, state) => {
  const props = getProps(config);

  // svgr prepends "Svg" to the beginning of the component name
  const componentName = `${state.componentName.substring(3)}`;

  let result = `
  import React from 'react';
  import Icon from "components/Icon";
  
 function ${componentName} (${props}) {
    return (<Icon {...${props}} glyphName="${componentName}">
      ${stripSVG(code)}
      </Icon>);
  }
  
  ${componentName}.displayName = "Icon${componentName}";
  
  export default React.memo(${componentName});
  `;

  return result;
};

/* svgr always wraps the glyph in an svg, but we want to 
   use our own custom Icon component as the svg element. */
function stripSVG(code) {
  return (
    code
      .slice(code.indexOf(">"), code.indexOf("</svg>"))
      /**
       * Pardon this estoric string replacement. Sketch creates SVGs but the only way it allows adding
       * a name to the elements in the SVG is by applying an id. The ids aren’t always unique, which doesn't
       * conform to the HTML spec, so this replacement converts those ids to classes. We also use the classes
       * for styling.
       */
      .replace(/id=/g, "className=")
      .replace(/fill="([^"]*)"/g, "")
  ); // Strip out any hard coded fills https://regexr.com/41skv
}
