import React from "react";
import { readableColor } from "polished";
import styled from "styled-components";
import copy from "copy-to-clipboard";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";

import {
  FONT_SIZE_BASE,
  FONT_SIZE_HERO,
  FONT_SIZE_MD,
  FONT_SIZE_LG,
  FONT_SIZE_SM,
  FONT_SIZE_TITLE,
  FONT_SIZE_XS,
  FONT_STACK_BASE,
  FONT_STACK_BRAND,
  FONT_STACK_CODE,
  FONT_WEIGHT_BASE,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_SEMIBOLD,
  COLOR_BACKGROUND_A,
  COLOR_BACKGROUND_B,
  COLOR_BACKGROUND_C,
  COLOR_BRAND_A,
  COLOR_BRAND_B,
  COLOR_INTENT_DANGER,
  COLOR_INTENT_HIGHLIGHT,
  COLOR_INTENT_INFO,
  COLOR_INTENT_SUCCESS,
  COLOR_INTENT_WARNING,
  COLOR_KEYLINE,
  COLOR_KEYLINE_SOLID,
  OPACITY_100,
  OPACITY_70,
  OPACITY_50,
  OPACITY_15,
  RADIUS_05,
  RADIUS_1,
  RADIUS_2,
  RADIUS_3,
  RADIUS_4,
  RADIUS_5,
  RADIUS_6,
  RADIUS_7,
  RADIUS_8
} from "style/styleVariables";
import { spacingScale } from "./styleFunctions";

const stories = storiesOf("Style Variables", module);

const DemoCanvas = styled.div`
`;


const DemoItem = styled.button.attrs({
  title: props => props.demoVarName,
  onClick: props => () => {
    copy('${' + props.demoVarName + '}');
    alert('${' + `${props.demoVarName}} copied to clipboard`);
  }
})`
  box-sizing: border-box;
  background: ${COLOR_BACKGROUND_A};
  border-radius: ${RADIUS_1};
  margin: ${spacingScale(1)};
  width: ${spacingScale(16)};
  font-size: ${FONT_SIZE_SM};
  border: 1px solid #fff;
  padding: 0;
  box-shadow: 0 0 0 1px ${COLOR_KEYLINE};
  transition: all .3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000;
  cursor: pointer;

  &:after {
    content: '${props => props.demoVarName}';
    margin-top: ${spacingScale(1)};
    margin-bottom: ${spacingScale(1)};
    font-family: ${FONT_STACK_BASE};
    font-size: ${FONT_SIZE_SM};
    opacity: ${OPACITY_70};
  }

  &:hover {
    box-shadow: 0 0 0 1.5px ${COLOR_INTENT_HIGHLIGHT};
    transition: all .15s ease;
  }

  &:focus {
    color: #000;
    outline: none;
  }
`;

const DemoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-family: ${FONT_STACK_BASE};
  flex: 0 0 100%;
  line-height: 1.5;
  margin: ${spacingScale(1)};
  box-sizing: border-box;

  &:before { 
    content: '${props => props.name}';
    display: block;
    flex: 0 0 100%;
    margin: ${spacingScale(1)};
    user-select: text;
    font-size: ${FONT_SIZE_HERO};
    font-weight: ${FONT_WEIGHT_SEMIBOLD};
  }

  &:not(:first-of-type) {
    margin-top: calc(${spacingScale(10)} + 10vw);
    padding-top: ${spacingScale(2)};
    border-top: 1.5px solid;
  }
`;

const DemoSubSection = DemoSection.extend`
  margin: 0;
  margin-top: ${spacingScale(4)};
  flex: 0 0 100%;

  &:before {
    font-size: ${FONT_SIZE_MD};
    font-weight: ${FONT_WEIGHT_BOLD};
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  &:not(:first-of-type) {
    margin-top: ${spacingScale(6)};
    padding-top: 0;
    border: 0;
  }
`;

const ColorDemo = DemoItem.extend`
  background-image:
    linear-gradient(to bottom, rgba(255,255,255,0) ${spacingScale(7)}, rgba(255,255,255,1) ${spacingScale(7)}, rgba(255,255,255,1)),
    linear-gradient(to right, ${COLOR_BACKGROUND_A} 0%, ${COLOR_BACKGROUND_A} 33%, ${COLOR_BACKGROUND_B} 33%, ${COLOR_BACKGROUND_B} 66%, ${COLOR_BACKGROUND_C} 66%, ${COLOR_BACKGROUND_C} 100%);
  height: ${spacingScale(11)};
  width: ${spacingScale(22)};
  justify-content: stretch;
  align-items: stretch;

  &:before {
    content: '';
    height: ${spacingScale(4)};
    margin: ${spacingScale(1.5)} ${spacingScale(1.5)} 0;
    border-radius: ${RADIUS_05};
    background-color: ${props => props.demoVar};
  }

  &:after {
    opacity: ${OPACITY_70};
    margin: auto ${spacingScale(0.25)} ${spacingScale(1)};
  }
`;

const ColorLineDemo = ColorDemo.extend`
  align-items: stretch;
  background-color: ${COLOR_BACKGROUND_A};

  &:before {
    content: "";
    border-top: 1px solid ${props => props.demoVar};
    background: transparent;
    height: 0;
    margin: ${spacingScale(3.5)} ${spacingScale(1.5)} 0;
  }
`;

const ColorBackgroundDemo = ColorDemo.extend`
  background: ${props => props.demoVar};
  color: ${props => readableColor(props.demoVar)};

  &:before {
    content: none;
  }
`;

const FontDemo = DemoItem.extend`
  font-family: ${props => props.demoVar};
  padding: ${spacingScale(1)} ${spacingScale(1)} 0;
  flex: 1 1 100%;
  align-items: stretch;
  justify-content: flex-start;
  text-align: left;

  &:before {
    content: "The quick brown fox jumps over the lazy dog";
    font-size: ${FONT_SIZE_TITLE};
  }

  &:after {
    margin-bottom: ${spacingScale(1)};
  }
`;

const FontSizeDemo = FontDemo.extend`
  font-family: ${FONT_STACK_BASE};

  &:before {
    font-size: ${props => props.demoVar};
  }
`;

const FontWeightDemo = FontDemo.extend`
  &:before {
    font-size: ${FONT_SIZE_BASE};
    font-weight: ${props => props.demoVar};
  }
`;

const RadiusDemo = DemoItem.extend`
  height: ${spacingScale(14)};

  &:before {
    content: "";
    border: 1px solid ${COLOR_BRAND_A};
    margin: auto ${spacingScale(1)} 0;
    border-width: 1px 1px 0 0;
    height: ${spacingScale(8)};
    width: ${spacingScale(8)};
    border-top-right-radius: ${props => props.demoVar};
  }
`;

const OpacityDemo = DemoItem.extend`
  height: ${spacingScale(12)};
  align-items: stretch;

  &:before {
    content: '';
    flex: 1 1 100%;
    height: ${spacingScale(6)};
    margin: ${spacingScale(1)} ${spacingScale(1)} 0;
    border-radius: ${RADIUS_05};
    background: ${COLOR_BRAND_A};
    opacity: ${props => props.demoVar};
  }
`;

const SpacingDemo = DemoItem.extend`
  height: ${spacingScale(7)};

  &:before {
    content: "";
    height: ${spacingScale(0.5)};
    margin: ${spacingScale(2)} auto ${spacingScale(0)};
    border: 1px solid ${COLOR_BRAND_A};
    border-radius: 0 0 1.5px 1.5px;
    border-top: 0;
    width: ${props => props.demoVar};
  }
`

const DemoDescription = styled.p`
  margin: ${spacingScale(-0.5)} ${spacingScale(1)} ${spacingScale(1.5)};
  font-size: ${FONT_SIZE_BASE};
  font-family: ${FONT_STACK_BASE};
  display: flex;
  flex: 1 0 100%;

  &:after {
    content: '';
    flex: 1 0 calc(100% - 45em);
  }
`;


stories
  .addDecorator(withKnobs)
  .add(
    "Style Variables",
    (() => (
      <DemoCanvas>
        <DemoSection name="Layout">

          <DemoSubSection name="Spacing">
            <DemoDescription>Instead of using pixel values for object sizing attributes, use a multiple of the theme's spacing size. This will help to maintain overall consistency in layout and component sizing.</DemoDescription>
            <SpacingDemo demoVar={spacingScale(0.25)} demoVarName={"spacingScale(0.25)"} />
            <SpacingDemo demoVar={spacingScale(0.5)} demoVarName={"spacingScale(0.5)"} />
            <SpacingDemo demoVar={spacingScale(1)} demoVarName={"spacingScale(1)"} />
            <SpacingDemo demoVar={spacingScale(1.5)} demoVarName={"spacingScale(1.5)"} />
            <SpacingDemo demoVar={spacingScale(2)} demoVarName={"spacingScale(2)"} />
            <SpacingDemo demoVar={spacingScale(3)} demoVarName={"spacingScale(3)"} />
            <SpacingDemo demoVar={spacingScale(4)} demoVarName={"spacingScale(4)"} />
            <SpacingDemo demoVar={spacingScale(5)} demoVarName={"spacingScale(5)"} />
            <SpacingDemo demoVar={spacingScale(6)} demoVarName={"spacingScale(6)"} />
          </DemoSubSection>

          <DemoSubSection name="Opacity">
            <DemoDescription>Stick to the basic palette of opacity values to limit subjective colors across an application. Levels 100, 70, and 50 may be used to lighten text for captions or similar uses, where appropriate.</DemoDescription>
            <OpacityDemo demoVar={OPACITY_100} demoVarName={"OPACITY_100"} />
            <OpacityDemo demoVar={OPACITY_70} demoVarName={"OPACITY_70"} />
            <OpacityDemo demoVar={OPACITY_50} demoVarName={"OPACITY_50"} />
            <OpacityDemo demoVar={OPACITY_15} demoVarName={"OPACITY_15"} />
          </DemoSubSection>

          <DemoSubSection name="Rounding">
            <DemoDescription>Rounding corners can make shapes feel more cohesive and unified. Prefer rounded shapes to pointed shapes. In interfaces with high information density or overall visual complexity, use lower radii to save space, just as you would reduce font or margin size.</DemoDescription>
            <RadiusDemo demoVar={RADIUS_05} demoVarName={"RADIUS_05"} />
            <RadiusDemo demoVar={RADIUS_1} demoVarName={"RADIUS_1"} />
            <RadiusDemo demoVar={RADIUS_2} demoVarName={"RADIUS_2"} />
            <RadiusDemo demoVar={RADIUS_3} demoVarName={"RADIUS_3"} />
            <RadiusDemo demoVar={RADIUS_4} demoVarName={"RADIUS_4"} />
            <RadiusDemo demoVar={RADIUS_5} demoVarName={"RADIUS_5"} />
            <RadiusDemo demoVar={RADIUS_6} demoVarName={"RADIUS_6"} />
            <RadiusDemo demoVar={RADIUS_7} demoVarName={"RADIUS_7"} />
            <RadiusDemo demoVar={RADIUS_8} demoVarName={"RADIUS_8"} />
          </DemoSubSection>
        </DemoSection>

        <DemoSection name="Colors">

          <DemoSubSection name="Brand Colors">
            <DemoDescription>Use Brand colors where the company's visuals need to be represented directly. Consider using only in places where the logo may appear. Avoid using for interaction colors like links and buttons.</DemoDescription>
            <ColorDemo demoVar={COLOR_BRAND_A} demoVarName={"COLOR_BRAND_A"} />
            <ColorDemo demoVar={COLOR_BRAND_B} demoVarName={"COLOR_BRAND_B"} />
          </DemoSubSection>

          <DemoSubSection name="Intent Colors">
            <DemoDescription>Use Intent to hint at interactable elements, or to indicate the type of effect an action could have or has had. Use with links, buttons, notification badges, and the like.</DemoDescription>
            <ColorDemo demoVar={COLOR_INTENT_HIGHLIGHT} demoVarName={"COLOR_INTENT_HIGHLIGHT"} />
            <ColorDemo demoVar={COLOR_INTENT_SUCCESS} demoVarName={"COLOR_INTENT_SUCCESS"} />
            <ColorDemo demoVar={COLOR_INTENT_INFO} demoVarName={"COLOR_INTENT_INFO"} />
            <ColorDemo demoVar={COLOR_INTENT_WARNING} demoVarName={"COLOR_INTENT_WARNING"} />
            <ColorDemo demoVar={COLOR_INTENT_DANGER} demoVarName={"COLOR_INTENT_DANGER"} />
          </DemoSubSection>

          <DemoSubSection name="Border Colors">
            <DemoDescription>Use borders sparingly. Prefer using KEYLINE color, because it will be tinted by the colors underneath it. However, when many layers are required (consider a horizontal toolbar with a KEYLINE shadow, which overlaps a series of vertical file columns using KEYLINE borders), consider using KEYLINE_SOLID to prevent the a distracting accumulation of tints.</DemoDescription>
            <ColorLineDemo demoVar={COLOR_KEYLINE} demoVarName={"COLOR_KEYLINE"} />
            <ColorLineDemo demoVar={COLOR_KEYLINE_SOLID} demoVarName={"COLOR_KEYLINE_SOLID"} />
          </DemoSubSection>

          <DemoSubSection name="Background Colors">
            <DemoDescription>Differences in background color should be used to represent clear divisions in application layout. Prefer visually simple layouts with few color changes.</DemoDescription>
            <ColorBackgroundDemo demoVar={COLOR_BACKGROUND_A} demoVarName={"COLOR_BACKGROUND_A"} />
            <ColorBackgroundDemo demoVar={COLOR_BACKGROUND_B} demoVarName={"COLOR_BACKGROUND_B"} />
            <ColorBackgroundDemo demoVar={COLOR_BACKGROUND_C} demoVarName={"COLOR_BACKGROUND_C"} />
          </DemoSubSection>
        </DemoSection>

        <DemoSection name="Typography">

          <DemoSubSection name="Fonts">
            <DemoDescription>Font Stacks are compositions of Font Groups. All Font Stacks are backed by the operating system default sans-serif Font Group, and may include specialized fonts for more infrequent uses. Use FONT_STACK_BRAND sparingly, and keep it limited to large headings.</DemoDescription>
            <FontDemo demoVar={FONT_STACK_BRAND} demoVarName={"FONT_STACK_BRAND"} />
            <FontDemo demoVar={FONT_STACK_BASE} demoVarName={"FONT_STACK_BASE"} />
            <FontDemo demoVar={FONT_STACK_CODE} demoVarName={"FONT_STACK_CODE"} />
          </DemoSubSection>

          <DemoSubSection name="Font Weights">
            <DemoDescription>When in doubt, use the base weight. Use special weights only where necessary to reinforce visual heirarchy.</DemoDescription>
            <FontWeightDemo demoVar={FONT_WEIGHT_BASE} demoVarName={"FONT_WEIGHT_BASE"} />
            <FontWeightDemo demoVar={FONT_WEIGHT_SEMIBOLD} demoVarName={"FONT_WEIGHT_SEMIBOLD"} />
            <FontWeightDemo demoVar={FONT_WEIGHT_BOLD} demoVarName={"FONT_WEIGHT_BOLD"} />
          </DemoSubSection>

          <DemoSubSection name="Font Sizes">
            <DemoDescription>When in doubt, use the base size. Prefer using horizontal or vertical negative space to differentiate elements, when possible.</DemoDescription>
            <FontSizeDemo demoVar={FONT_SIZE_XS} demoVarName={"FONT_SIZE_XS"} />
            <FontSizeDemo demoVar={FONT_SIZE_SM} demoVarName={"FONT_SIZE_SM"} />
            <FontSizeDemo demoVar={FONT_SIZE_BASE} demoVarName={"FONT_SIZE_BASE"} />
            <FontSizeDemo demoVar={FONT_SIZE_MD} demoVarName={"FONT_SIZE_MD"} />
            <FontSizeDemo demoVar={FONT_SIZE_LG} demoVarName={"FONT_SIZE_LG"} />
            <FontSizeDemo demoVar={FONT_SIZE_TITLE} demoVarName={"FONT_SIZE_TITLE"} />
            <FontSizeDemo demoVar={FONT_SIZE_HERO} demoVarName={"FONT_SIZE_HERO"} />
          </DemoSubSection>
        </DemoSection>

      </DemoCanvas>
    )
    )
  );
