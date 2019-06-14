import React from "react";
import { readableColor, transparentize } from "polished";
import styled from "styled-components";
import copy from "copy-to-clipboard";
import { storiesOf } from "@storybook/react";

import { spacingScale } from "./styleFunctions";

const stories = storiesOf(" Overview|Styles", module);

const DemoCanvas = styled.div`
  background-color: ${props => props.theme.COLOR_BACKGROUND_A};
  color: ${props => props.theme.COLOR_CONTENT};
  padding: ${spacingScale(2)};
`;

const DemoItem = styled.button.attrs({
  title: props => props.demoVarName,
  onClick: props => () => {
    copy("${props => props.theme." + props.demoVarName + "}");
  }
})`
  box-sizing: border-box;
  background: ${props => props.theme.COLOR_BACKGROUND_A};
  border-radius: ${props => props.theme.RADIUS_1};
  margin: ${spacingScale(1)};
  width: ${spacingScale(16)};
  font-size: ${props => props.theme.FONT_SIZE_SM};
  color: ${props => props.theme.COLOR_CONTENT};
  border: 1px solid ${props => props.theme.COLOR_BACKGROUND_A};
  padding: 0;
  box-shadow: 0 0 0 1px ${props => props.theme.COLOR_KEYLINE};
  transition: all .3s ease;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  cursor: pointer;
  position: relative;

  &:after {
    content: '${props => props.demoVarName}';
    margin-top: ${spacingScale(1)};
    margin-bottom: ${spacingScale(1)};
    transition: all .5s ease;
    font-family: ${props => props.theme.FONT_STACK_BASE};
    font-size: ${props => props.theme.FONT_SIZE_SM};
    opacity: ${props => props.theme.OPACITY_70};
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1.5px ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
    transition: all .15s ease;

    &:after {
      transition: inherit;
      content: 'Copy to Clipboard';
      opacity: ${props => props.theme.OPACITY_100};
      color: ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
    }

    &:active {
      transition: 0;

      &:after{
        font-weight: ${props => props.theme.FONT_WEIGHT_SEMIBOLD};
        color: ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
      }
    }
  }

  &:focus,
  &:active {
    outline: none;
    color: ${props => props.theme.COLOR_CONTENT};
  }
`;

const DemoSection = styled.div.attrs({
  id: props => props.name
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-family: ${props => props.theme.FONT_STACK_BASE};
  flex: 0 0 100%;
  line-height: 1.5;
  margin-top: calc(${spacingScale(2)});
  padding-top: ${spacingScale(4)};
  box-sizing: border-box;
  background-color: ${props => props.theme.COLOR_BACKGROUND_A};
  color: ${props => props.theme.COLOR_CONTENT};

  &:before { 
    content: '${props => props.name}';
    display: block;
    flex: 0 0 100%;
    margin: ${spacingScale(1)};
    user-select: text;
    font-size: ${props => props.theme.FONT_SIZE_HERO};
    font-weight: ${props => props.theme.FONT_WEIGHT_SEMIBOLD};
  }

  &:not(:first-of-type) {
    margin-top: calc(${spacingScale(8)});
    padding-top: ${spacingScale(4)};
  }
`;

const DemoSubSection = styled(DemoSection)`
  margin: 0;
  margin-top: ${spacingScale(4)};
  padding-top: 0;
  flex: 0 0 100%;

  &:before {
    font-size: ${props => props.theme.FONT_SIZE_MD};
    font-weight: ${props => props.theme.FONT_WEIGHT_SEMIBOLD};
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  &:not(:first-of-type) {
    margin-top: ${spacingScale(4)};
    padding-top: 0;
    border: 0;
  }
`;

const ColorDemo = styled(DemoItem)`
  background-image: linear-gradient(
      to bottom,
      ${props => transparentize(1, props.theme.COLOR_BACKGROUND_A)}
        ${spacingScale(7)},
      ${props => props.theme.COLOR_BACKGROUND_A} ${spacingScale(7)},
      ${props => props.theme.COLOR_BACKGROUND_A}
    ),
    linear-gradient(
      to right,
      ${props => props.theme.COLOR_BACKGROUND_A} 0%,
      ${props => props.theme.COLOR_BACKGROUND_A} 33%,
      ${props => props.theme.COLOR_BACKGROUND_B} 33%,
      ${props => props.theme.COLOR_BACKGROUND_B} 66%,
      ${props => props.theme.COLOR_BACKGROUND_C} 66%,
      ${props => props.theme.COLOR_BACKGROUND_C} 100%
    );
  height: ${spacingScale(11)};
  width: ${spacingScale(22)};
  justify-content: space-between;
  align-items: stretch;

  &:before {
    content: "";
    height: ${spacingScale(4)};
    margin: ${spacingScale(1.5)} 0 0;
    border-radius: ${props => props.theme.RADIUS_05};
    background-color: ${props => props.demoVar};
    position: absolute;
    top: 0;
    left: ${spacingScale(1.5)};
    right: ${spacingScale(1.5)};
  }

  &:after {
    opacity: ${props => props.theme.OPACITY_70};
    margin: auto ${spacingScale(0.25)} ${spacingScale(1)};
    position: absolute;
    bottom: 0;
    left: ${spacingScale(0.25)};
    right: ${spacingScale(0.25)};
  }
`;

const ColorLineDemo = styled(ColorDemo)`
  align-items: stretch;
  background-color: ${props => props.theme.COLOR_BACKGROUND_A};

  &:before {
    content: "";
    border-top: 1px solid ${props => props.demoVar};
    background: transparent;
    height: 0;
    margin: ${spacingScale(3.5)} ${spacingScale(1.5)} 0;
  }
`;

const ColorBackgroundDemoA = styled(ColorDemo)`
  background: ${props => props.theme.COLOR_BACKGROUND_A};
  color: ${props => readableColor(props.theme.COLOR_BACKGROUND_A)};

  &:before {
    content: none;
  }
`;
const ColorBackgroundDemoB = styled(ColorDemo)`
  background: ${props => props.theme.COLOR_BACKGROUND_B};
  color: ${props => readableColor(props.theme.COLOR_BACKGROUND_B)};

  &:before {
    content: none;
  }
`;
const ColorBackgroundDemoC = styled(ColorDemo)`
  background: ${props => props.theme.COLOR_BACKGROUND_C};
  color: ${props => readableColor(props.theme.COLOR_BACKGROUND_C)};

  &:before {
    content: none;
  }
`;

const FontDemo = styled(DemoItem)`
  font-family: ${props => props.demoVar};
  padding: ${spacingScale(1)} ${spacingScale(1)} 0;
  flex: 1 1 100%;
  align-items: stretch;
  justify-content: flex-start;
  text-align: left;

  &:before {
    content: "The quick brown fox jumps over the lazy dog";
    font-size: ${props => props.theme.FONT_SIZE_TITLE};
  }

  &:after {
    margin-bottom: ${spacingScale(1)};
  }
`;

const FontSizeDemo = styled(FontDemo)`
  font-family: ${props => props.theme.FONT_STACK_BASE};

  &:before {
    font-size: ${props => props.demoVar};
  }
`;

const FontWeightDemo = styled(FontDemo)`
  &:before {
    font-size: ${props => props.theme.FONT_SIZE_BASE};
    font-weight: ${props => props.demoVar};
  }
`;

const RadiusDemo = styled(DemoItem)`
  height: ${spacingScale(14)};

  &:before {
    content: "";
    border: 1px solid ${props => props.theme.COLOR_BRAND_A};
    margin: auto auto 0;
    border-width: 1px 1px 0 0;
    height: ${spacingScale(8)};
    width: ${spacingScale(8)};
    border-top-right-radius: ${props => props.demoVar};
  }
`;

const OpacityDemo = styled(DemoItem)`
  height: ${spacingScale(12)};
  align-items: stretch;

  &:before {
    content: "";
    flex: 1 1 ${spacingScale(7)};
    height: ${spacingScale(7)};
    margin: ${spacingScale(1)} ${spacingScale(1)} 0;
    border-radius: ${props => props.theme.RADIUS_05};
    background: ${props => props.theme.COLOR_BRAND_A};
    opacity: ${props => props.demoVar};
  }
`;

const SpacingDemo = styled(DemoItem)`
  height: ${spacingScale(7)};

  &:before {
    content: "";
    height: ${spacingScale(0.5)};
    margin: ${spacingScale(2)} auto ${spacingScale(0)};
    border: 1px solid ${props => props.theme.COLOR_BRAND_A};
    border-radius: 0 0 1.5px 1.5px;
    border-top: 0;
    width: ${props => props.demoVar};
  }
`;

const DemoDescription = styled.p`
  margin: ${spacingScale(-0.5)} ${spacingScale(1)} ${spacingScale(1.5)};
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  font-family: ${props => props.theme.FONT_STACK_BASE};
  display: flex;
  flex: 1 0 100%;

  &:after {
    content: "";
    flex: 1 0 calc(100% - 45em);
  }
`;

const DemoHeading = styled.h1`
  font-family: ${props => props.theme.FONT_STACK_BASE};
  margin: ${spacingScale(4)} ${spacingScale(1)} ${spacingScale(1)};
`;

const DemoNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  margin: ${spacingScale(5)} 0 ${spacingScale(2)};
  height: ${spacingScale(5)};
  background-color: ${props => props.theme.COLOR_BACKGROUND_A};
  box-shadow: 0 1px 0 0 ${props => props.theme.COLOR_KEYLINE};
  z-index: ${props => props.theme.ZINDEX_STICKY};
  position: sticky;
  top: 0;
`;

const DemoNavigationItem = styled.a.attrs({ target: "_self" })`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.FONT_STACK_BASE};
  font-size: ${props => props.theme.FONT_SIZE_BASE};
  color: ${props => props.theme.COLOR_CONTENT};
  font-weight: ${props => props.theme.FONT_WEIGHT_SEMIBOLD};
  flex: 1 1 100%;
  text-decoration: none;

  &:before {
    content: "";
    margin-right: ${spacingScale(1)};
    color: ${props => props.theme.COLOR_BRAND_A};
  }

  &[href="#Layout"] {
    &:before {
      width: ${spacingScale(2)};
      height: ${spacingScale(2)};
      border-radius: 1.5px;
      border: 1px solid ${props => props.theme.COLOR_BACKGROUND_A};
      box-shadow: 0 0 0 2px, inset 0 0 0 1px;
    }
  }

  &[href="#Color"] {
    &:before {
      content: "";
      border-radius: ${props => props.theme.RADIUS_8};
      height: ${spacingScale(2)};
      width: ${spacingScale(2)};
      position: relative;
      right: ${spacingScale(0.5)};
      bottom: ${spacingScale(0.5)};
      background-color: ${props => props.theme.COLOR_BRAND_A};
      box-shadow: ${spacingScale(0.5)} ${spacingScale(0.5)} 0
          ${props =>
            transparentize(
              1 - props.theme.OPACITY_70,
              props.theme.COLOR_BRAND_A
            )},
        ${spacingScale(1)} ${spacingScale(1)} 0
          ${props =>
            transparentize(
              1 - props.theme.OPACITY_50,
              props.theme.COLOR_BRAND_A
            )};
    }
  }

  &[href="#Typography"] {
    &:before {
      content: "Aa";
      transform: scale(1.15);
      font-weight: ${props => props.theme.FONT_WEIGHT_BASE};
      font-size: ${props => props.theme.FONT_SIZE_LG};
    }
  }
`;

stories.add("Styles", () => (
  <DemoCanvas>
    <DemoHeading>Style Variables</DemoHeading>
    <DemoDescription>
      <p>
        Use themed style variables instead of hardcoding pixel and color values.
        You can import these variables like any other library component:
        <code>
          <pre>{"color: ${props => props.theme.COLOR_INTENT_HIGHLIGHT}"}</pre>
        </code>
        Style variables are also exposed to the browser as CSS Custom
        Properties:
        <code>
          <pre>{"opacity: var(--OPACITY_70)"}</pre>
        </code>
      </p>
    </DemoDescription>

    <DemoNavigation>
      <DemoNavigationItem href="#Layout">Layout</DemoNavigationItem>
      <DemoNavigationItem href="#Color">Color</DemoNavigationItem>
      <DemoNavigationItem href="#Typography">Typography</DemoNavigationItem>
    </DemoNavigation>

    <DemoSection name="Layout">
      <DemoSubSection name="Spacing">
        <DemoDescription>
          Instead of using pixel values for object sizing attributes, use a
          multiple of the theme's spacing size. This will help to maintain
          overall consistency in layout and component sizing.
        </DemoDescription>
        <SpacingDemo
          demoVar={spacingScale(0.25)}
          demoVarName={"spacingScale(0.25)"}
        />
        <SpacingDemo
          demoVar={spacingScale(0.5)}
          demoVarName={"spacingScale(0.5)"}
        />
        <SpacingDemo
          demoVar={spacingScale(1)}
          demoVarName={"spacingScale(1)"}
        />
        <SpacingDemo
          demoVar={spacingScale(1.5)}
          demoVarName={"spacingScale(1.5)"}
        />
        <SpacingDemo
          demoVar={spacingScale(2)}
          demoVarName={"spacingScale(2)"}
        />
        <SpacingDemo
          demoVar={spacingScale(3)}
          demoVarName={"spacingScale(3)"}
        />
        <SpacingDemo
          demoVar={spacingScale(4)}
          demoVarName={"spacingScale(4)"}
        />
        <SpacingDemo
          demoVar={spacingScale(5)}
          demoVarName={"spacingScale(5)"}
        />
        <SpacingDemo
          demoVar={spacingScale(6)}
          demoVarName={"spacingScale(6)"}
        />
      </DemoSubSection>

      <DemoSubSection name="Rounding">
        <DemoDescription>
          Rounding corners can make shapes feel more cohesive and unified.
          Prefer rounded shapes to pointed shapes. In interfaces with high
          information density or overall visual complexity, use smaller radii to
          save space, just as you would reduce font or margin size.
        </DemoDescription>
        <RadiusDemo
          demoVar={props => props.theme.RADIUS_05}
          demoVarName={"RADIUS_05"}
        />
        <RadiusDemo
          demoVar={props => props.theme.RADIUS_1}
          demoVarName={"RADIUS_1"}
        />
        <RadiusDemo
          demoVar={props => props.theme.RADIUS_2}
          demoVarName={"RADIUS_2"}
        />
        <RadiusDemo
          demoVar={props => props.theme.RADIUS_3}
          demoVarName={"RADIUS_3"}
        />
        <RadiusDemo
          demoVar={props => props.theme.RADIUS_4}
          demoVarName={"RADIUS_4"}
        />
        <RadiusDemo
          demoVar={props => props.theme.RADIUS_5}
          demoVarName={"RADIUS_5"}
        />
        <RadiusDemo
          demoVar={props => props.theme.RADIUS_6}
          demoVarName={"RADIUS_6"}
        />
        <RadiusDemo
          demoVar={props => props.theme.RADIUS_7}
          demoVarName={"RADIUS_7"}
        />
        <RadiusDemo
          demoVar={props => props.theme.RADIUS_8}
          demoVarName={"RADIUS_8"}
        />
      </DemoSubSection>
    </DemoSection>

    <DemoSection name="Color">
      <DemoSubSection name="Intent Colors">
        <DemoDescription>
          Use Intent colors to hint at interactable elements, or to indicate the
          type of effect an action could have or has had. Use with links,
          buttons, notification badges, and the like.
        </DemoDescription>
        <ColorDemo
          demoVar={props => props.theme.COLOR_INTENT_HIGHLIGHT}
          demoVarName={"COLOR_INTENT_HIGHLIGHT"}
        />
        <ColorDemo
          demoVar={props => props.theme.COLOR_INTENT_SUCCESS}
          demoVarName={"COLOR_INTENT_SUCCESS"}
        />
        <ColorDemo
          demoVar={props => props.theme.COLOR_INTENT_INFO}
          demoVarName={"COLOR_INTENT_INFO"}
        />
        <ColorDemo
          demoVar={props => props.theme.COLOR_INTENT_WARNING}
          demoVarName={"COLOR_INTENT_WARNING"}
        />
        <ColorDemo
          demoVar={props => props.theme.COLOR_INTENT_DANGER}
          demoVarName={"COLOR_INTENT_DANGER"}
        />
      </DemoSubSection>

      <DemoSubSection name="Border Colors">
        <DemoDescription>
          Use borders sparingly. Prefer using keyline color, because it will be
          tinted by the colors underneath it. However, when many layers are
          required (consider a horizontal toolbar with a shadow, above a series
          of vertical file columns using borders), consider using KEYLINE_SOLID
          to prevent the distracting accumulation of tints. Consider
          implementing borders using the spread attribute of a box shadow.
        </DemoDescription>
        <ColorLineDemo
          demoVar={props => props.theme.COLOR_KEYLINE}
          demoVarName={"COLOR_KEYLINE"}
        />
        <ColorLineDemo
          demoVar={props => props.theme.COLOR_KEYLINE_SOLID}
          demoVarName={"COLOR_KEYLINE_SOLID"}
        />
      </DemoSubSection>

      <DemoSubSection name="Background Colors">
        <DemoDescription>
          Differences in background color should be used to represent clear
          divisions in application layout. Prefer visually simple layouts with
          few color changes. Too many backgrounds can make an interface feel
          blocky and incoherent.
        </DemoDescription>
        <ColorBackgroundDemoA
          demoVar={props => props.theme.COLOR_BACKGROUND_A}
          demoVarName={"COLOR_BACKGROUND_A"}
        />
        <ColorBackgroundDemoB
          demoVar={props => props.theme.COLOR_BACKGROUND_B}
          demoVarName={"COLOR_BACKGROUND_B"}
        />
        <ColorBackgroundDemoC
          demoVar={props => props.theme.COLOR_BACKGROUND_C}
          demoVarName={"COLOR_BACKGROUND_C"}
        />
      </DemoSubSection>

      <DemoSubSection name="Brand Colors">
        <DemoDescription>
          Use Brand colors where the company's visual style needs to be
          represented directly. Consider using only in places where the logo may
          appear. Avoid using for interaction colors like links and buttons.
        </DemoDescription>
        <ColorDemo
          demoVar={props => props.theme.COLOR_BRAND_A}
          demoVarName={"COLOR_BRAND_A"}
        />
        <ColorDemo
          demoVar={props => props.theme.COLOR_BRAND_B}
          demoVarName={"COLOR_BRAND_B"}
        />
      </DemoSubSection>

      <DemoSubSection name="Opacity">
        <DemoDescription>
          Stick to the basic palette of opacity values to limit subjective
          colors across an application. Levels 100, 70, and 50 may be used to
          lighten text for captions or similar uses, where appropriate.
        </DemoDescription>
        <OpacityDemo
          demoVar={props => props.theme.OPACITY_100}
          demoVarName={"OPACITY_100"}
        />
        <OpacityDemo
          demoVar={props => props.theme.OPACITY_70}
          demoVarName={"OPACITY_70"}
        />
        <OpacityDemo
          demoVar={props => props.theme.OPACITY_50}
          demoVarName={"OPACITY_50"}
        />
        <OpacityDemo
          demoVar={props => props.theme.OPACITY_15}
          demoVarName={"OPACITY_15"}
        />
      </DemoSubSection>
    </DemoSection>

    <DemoSection name="Typography">
      <DemoSubSection name="Font Sizes">
        <DemoDescription>
          When in doubt, use the base size. Prefer using horizontal or vertical
          negative space to differentiate elements, when possible.
        </DemoDescription>
        <FontSizeDemo
          demoVar={props => props.theme.FONT_SIZE_XS}
          demoVarName={"FONT_SIZE_XS"}
        />
        <FontSizeDemo
          demoVar={props => props.theme.FONT_SIZE_SM}
          demoVarName={"FONT_SIZE_SM"}
        />
        <FontSizeDemo
          demoVar={props => props.theme.FONT_SIZE_BASE}
          demoVarName={"FONT_SIZE_BASE"}
        />
        <FontSizeDemo
          demoVar={props => props.theme.FONT_SIZE_MD}
          demoVarName={"FONT_SIZE_MD"}
        />
        <FontSizeDemo
          demoVar={props => props.theme.FONT_SIZE_LG}
          demoVarName={"FONT_SIZE_LG"}
        />
        <FontSizeDemo
          demoVar={props => props.theme.FONT_SIZE_TITLE}
          demoVarName={"FONT_SIZE_TITLE"}
        />
        <FontSizeDemo
          demoVar={props => props.theme.FONT_SIZE_HERO}
          demoVarName={"FONT_SIZE_HERO"}
        />
      </DemoSubSection>

      <DemoSubSection name="Font Weights">
        <DemoDescription>
          When in doubt, use the base weight. Use special weights only where
          necessary to reinforce visual heirarchy.
        </DemoDescription>
        <FontWeightDemo
          demoVar={props => props.theme.FONT_WEIGHT_BASE}
          demoVarName={"FONT_WEIGHT_BASE"}
        />
        <FontWeightDemo
          demoVar={props => props.theme.FONT_WEIGHT_SEMIBOLD}
          demoVarName={"FONT_WEIGHT_SEMIBOLD"}
        />
        <FontWeightDemo
          demoVar={props => props.theme.FONT_WEIGHT_BOLD}
          demoVarName={"FONT_WEIGHT_BOLD"}
        />
      </DemoSubSection>

      <DemoSubSection name="Fonts">
        <DemoDescription>
          Font Stacks are compositions of Font Groups. All Font Stacks are
          backed by the operating system default sans-serif Font Group, and may
          include specialized fonts. Use FONT_STACK_BRAND sparingly, and keep it
          limited to large headings.
        </DemoDescription>
        <FontDemo
          demoVar={props => props.theme.FONT_STACK_BRAND}
          demoVarName={"FONT_STACK_BRAND"}
        />
        <FontDemo
          demoVar={props => props.theme.FONT_STACK_BASE}
          demoVarName={"FONT_STACK_BASE"}
        />
        <FontDemo
          demoVar={props => props.theme.FONT_STACK_CODE}
          demoVarName={"FONT_STACK_CODE"}
        />
      </DemoSubSection>
    </DemoSection>
  </DemoCanvas>
));
