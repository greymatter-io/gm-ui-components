const { getProps } = require("@svgr/core");

/* svgr always wraps the glyph in an svg, but we want to 
   use our own custom Icon component as the svg element. */
function stripSVG(code) {
  return code.slice(code.indexOf(">"), code.indexOf("</svg>"));
}

module.exports = (code, config, state) => {
  const props = getProps(config);

  // svgr prepends "Svg" to the beginning of the component name
  const componentName = `${state.componentName.substring(3)}`;

  let result = `
  import React from 'react';
  import Icon from "components/Icon";
  
  export default function ${componentName} (${props}) {
    return (<Icon {...${props}} glyphName="${componentName}">
      ${stripSVG(code)}
      </Icon>);
  }

  ${componentName}.displayName = "${componentName}";`;

  return result;
};
