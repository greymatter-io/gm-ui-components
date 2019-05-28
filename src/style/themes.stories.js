import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { storiesOf } from "@storybook/react";
import { keen, keenDark } from "style/styleVariables";

import Breadcrumbs from "components/Breadcrumbs";
import Button from "components/Button";
import ButtonGroup from "components/ButtonGroup";
import Checkbox from "components/Form/scenes/Checkbox";
import Textarea from "components/Form/scenes/Textarea";
import Fieldset from "components/Form/components/Fieldset";
import Spinner from "components/Spinner";

const stories = storiesOf(" Overview|Themes", module);

const DemoCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 80vw;
`;

const DemoCanvas = styled.div`
  padding: 1rem;
  background-color: ${props => props.theme.COLOR_BACKGROUND_A};
  color: ${props => props.theme.COLOR_CONTENT};
`;

const Space = styled.div`
  height: 1rem;
`;

const DemoContent = (
  <DemoCanvas>
    <Breadcrumbs crumbs={["Overview", "Themes", "Theme"]} />
    <h1>Theme</h1>
    <p>Lorem ipsum dolor sit amet. Donec consectetur...</p>
    <Space />
    <Spinner orientation={"horizontal"} />
    <Space />
    <Fieldset>
      <Textarea
        autoFocus={false}
        label="Textarea"
        defaultValue=""
        placeholder="Placeholder Text"
        maxLength={25}
      />
      <Space />
      <Checkbox labelPosition="right" label={"Checkbox"} />
    </Fieldset>
    <Space />
    <ButtonGroup>
      <Button label={"Plain Button"} />
      <Button type={"primary"} label={"Primary Button"} />
    </ButtonGroup>
  </DemoCanvas>
);

stories.add("Themes", () => (
  <DemoCols>
    <ThemeProvider theme={keen}>{DemoContent}</ThemeProvider>
    <ThemeProvider theme={keenDark}>{DemoContent}</ThemeProvider>
  </DemoCols>
));
