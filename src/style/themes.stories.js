import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { storiesOf } from "@storybook/react";
import { keen, keenDark } from "style/theme";
import { spacingScale } from "style/styleFunctions";

import { IconCog, IconChevronRight } from "components/Glyphs";
import Breadcrumbs from "components/Breadcrumbs";
import Button from "components/Button";
import ButtonGroup from "components/ButtonGroup";
import Checkbox from "components/Checkbox";
import Radio from "components/Radio";
import Textarea from "components/Textarea";
import Fieldset from "components/Fieldset";
import Spinner from "components/Spinner";
import TabGroup from "components/TabGroup";
import Tab from "components/Tab";
import Select from "components/Select";

const stories = storiesOf(" Overview|Themes", module);

const DemoCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 80vw;
`;

const DemoCanvas = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_CARD_LG};
  background-color: ${({ theme }) => theme.COLOR_BACKGROUND_DEFAULT};
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  position: relative;
`;

const DemoFieldset = styled(Fieldset)`
  position: relative;
`;

const Space = styled.span`
  display: inline-block;
  height: ${spacingScale(1)};
  width: ${spacingScale(1)};
`;

const BackgroundAreaTwo = styled(Fieldset)`
  background-color: ${({ theme }) => theme.COLOR_BACKGROUND_TWO};
  position: relative;
  overflow: hidden;
`;

const BackgroundAreaThree = styled(Fieldset)`
  background-color: ${({ theme }) => theme.COLOR_BACKGROUND_THREE};
  position: relative;
  overflow: hidden;
`;

const Note = styled.span`
  display: block;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_XS};
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.COLOR_CONTENT_NONESSENTIAL};
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
`;

const DocumentationLink = styled.h2`
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
  padding-bottom: ${spacingScale(2)};
  margin-bottom: ${spacingScale(2)};

  a {
    text-decoration: none;
  }
`;

function DemoContent({ themeName }) {
  return (
    <DemoCanvas>
      <Note>Background level one</Note>
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
      <DemoFieldset>
        <Note>Background level three</Note>
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
      </DemoFieldset>

      <Space />
      <BackgroundAreaTwo>
        <Note>Background level two</Note>
        <ButtonGroup>
          <Button label={"Plain Button"} />
          <Space />
          <Button type={"primary"} label={"Primary Button"} />
        </ButtonGroup>
      </BackgroundAreaTwo>
      <Space />
      <BackgroundAreaThree>
        <Note>Background level three</Note>
        <ButtonGroup>
          <Button label={"Plain Button"} />
          <Space />
          <Button type={"primary"} label={"Primary Button"} />
        </ButtonGroup>
      </BackgroundAreaThree>
      <Space />
    </DemoCanvas>
  );
}

DemoContent.propTypes = {
  themeName: PropTypes.string
};

stories.add(
  "Themes",
  () => (
    <>
      <DocumentationLink>
        <a href="https://github.com/greymatter-io/gm-ui-components#theming">
          Theming the Component Library
          <IconChevronRight />
        </a>
      </DocumentationLink>
      <DemoCols>
        <ThemeProvider theme={keen}>
          <DemoContent themeName="keen" />
        </ThemeProvider>
        <ThemeProvider theme={keenDark}>
          <DemoContent themeName="keenDark" />
        </ThemeProvider>
      </DemoCols>
    </>
  ),
  {
    info: {
      source: false
    }
  }
);
