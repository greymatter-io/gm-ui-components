import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { storiesOf } from "@storybook/react";
import { keen, keenDark } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

import { IconCog } from "components/Glyphs";
import Breadcrumbs from "components/Breadcrumbs";
import Button from "components/Button";
import ButtonGroup from "components/ButtonGroup";
import Checkbox from "components/Form/scenes/Checkbox";
import Radio from "components/Form/scenes/Radio";
import Textarea from "components/Form/scenes/Textarea";
import Fieldset from "components/Form/components/Fieldset";
import Spinner from "components/Spinner";
import TabGroup from "components/TabGroup";
import Tab from "components/Tab";
import Select from "components/Form/scenes/Select";

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

const StyledFieldset = styled(Fieldset)`
  background-color: ${props => props.theme.COLOR_BACKGROUND_B};
`;

const Space = styled.span`
  display: inline-block;
  height: ${spacingScale(1)};
  width: ${spacingScale(1)};
`;

function DemoContent({ themeName }) {
  return (
    <DemoCanvas>
      <Breadcrumbs crumbs={["Overview", "Themes", "Theme"]} />
      <Space />
      <h1>{themeName}</h1>
      <p>
        <IconCog /> Lorem ipsum dolor sit amet. Donec consectetur...
      </p>
      <Space />
      <Spinner orientation={"horizontal"} />
      <Space />
      <TabGroup label="Tab Group">
        <Tab label="Active Tab" active />
        <Tab label="Label" />
        <Tab label="Disabled" disabled />
      </TabGroup>
      <Fieldset>
        <Textarea
          autoFocus={false}
          label="Textarea"
          defaultValue=""
          placeholder="Placeholder Text"
          maxLength={25}
        />
        <Space />
        <Select>
          <optgroup label="Swedish Cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </optgroup>
          <optgroup label="German Cars">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </optgroup>
        </Select>
        <Space />
        <Checkbox labelPosition="right" label={"Checkbox"} />
        <Radio labelPosition="right" label={"Radio"} />
      </Fieldset>

      <Space />
      <StyledFieldset>
        <ButtonGroup>
          <Button label={"Plain Button"} />
          <Space />
          <Button type={"primary"} label={"Primary Button"} />
        </ButtonGroup>
      </StyledFieldset>
      <Space />
    </DemoCanvas>
  );
}

stories.add("Themes", () => (
  <DemoCols>
    <ThemeProvider theme={keen}>
      <DemoContent themeName="keen" />
    </ThemeProvider>
    <ThemeProvider theme={keenDark}>
      <DemoContent themeName="keenDark" />
    </ThemeProvider>
  </DemoCols>
));
