function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const componentNameWithIconPrefix = `Icon${componentName.name.replace(
    /^Svg/,
    ""
  )}`;

  const jsxTpl = template.smart({ plugins: ["jsx"] });

  /* svgr always wraps the glyph in an svg, but we want to
   use our own custom Icon component as the svg element. The following code 
   lifts up the `g` element one level, in place of the svg. */
  jsx.openingElement = jsx.children[0].openingElement;
  jsx.closingElement = jsx.children[0].closingElement;
  jsx.children = jsx.children[0].children;
  jsx.selfClosing = false;

  /**
   * Pardon this estoric string replacement. Sketch creates SVGs but the only way it allows adding
   * a name to the elements in the SVG is by applying an id. The ids aren’t always unique, which doesn't
   * conform to the HTML spec, so this replacement converts those ids to classes. We also use the classes
   * for styling.
   */
  jsx.openingElement.attributes = jsx.openingElement.attributes.map(a => {
    if (a.name.name === "id") {
      a.value.value = a.value.value.replace(/.*__/, ""); // "checkbox-checked_svg__checkbox-checked" => "checkbox-checked"
      a.name.name = "className";
    }
    return a;
  });

  const ast = jsxTpl.ast`
  import React from 'react';
  import Icon from "components/Icon";
  
  function ${componentName} (${props}) {
    return React.createElement(Icon, ${props}, ${jsx})
  }
  
  const memoizedIcon = React.memo(${componentName});
  
  export default memoizedIcon;
  `;

  ast.push(
    template.expression(
      `memoizedIcon.displayName = '${componentNameWithIconPrefix}'`
    )()
  );

  return ast;
}
module.exports = template;
