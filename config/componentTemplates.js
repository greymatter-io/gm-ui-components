// The following functions are templates used to scaffold out a basic component starter

function componentTemplate(fileName) {
  return `import React from "react";
import { PropTypes } from "prop-types";

${fileName}.propTypes = {};

${fileName}.defaultProps = {};

/**
 * Description of your component
 */
export default function ${fileName}(props) {
  return <div />;
}

${fileName}.displayName = "${fileName}";
`;
}

function indexTemplate(fileName) {
  return `import ${fileName} from "./${fileName}";
export default ${fileName};
`;
}

function testTemplate(fileName) {
  return `import React from "react";
import { shallow } from "enzyme";

import ${fileName} from "./${fileName}";

describe("${fileName}", () => {
  it("matches snapshot", () => {
    const a${fileName} = shallow(<${fileName} />);
    expect(a${fileName}).toMatchSnapshot();
  });
});`;
}

function storyTemplate(fileName) {
  return `import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import ${fileName} from "./${fileName}";

const stories = storiesOf("Components|${fileName}", module);

stories.add(
  "default",
  withInfo("Add component description here")(() => {
    return <${fileName} />;
  })
);
`;
}

module.exports = {
  componentTemplate,
  indexTemplate,
  testTemplate,
  storyTemplate
};
