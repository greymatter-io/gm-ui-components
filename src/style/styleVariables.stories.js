import React from "react";
import { readableColor, transparentize } from "polished";
import styled, { css } from "styled-components";
import copy from "copy-to-clipboard";
import { storiesOf } from "@storybook/react";

import { spacingScale } from "./styleFunctions";

const stories = storiesOf("Overview|Design Tokens", module);

const DemoCanvas = styled.div`
  background-color: ${props => props.theme.COLOR_BACKGROUND_DEFAULT};
  color: ${props => props.theme.COLOR_CONTENT_DEFAULT};
  padding: ${spacingScale(2)};
`;

const DemoItem = styled.button.attrs({
  title: props => props.demoVarName,
  onClick: props => () => {
    copy("${props => props.theme." + props.demoVarName + "}");
  }
})`
  box-sizing: border-box;
  background: ${props => props.theme.COLOR_BACKGROUND_DEFAULT};
  border-radius: ${props => props.theme.CORNER_RADIUS_CARD_SM};
  margin: ${spacingScale(1)};
  width: ${spacingScale(16)};
  font-size: ${props => props.theme.FONT_SIZE_TEXT_SM};
  color: ${props => props.theme.COLOR_CONTENT_DEFAULT};
  border: 1px solid ${props => props.theme.COLOR_BACKGROUND_DEFAULT};
  padding: 0;
  box-shadow: 0 0 0 1px ${props => props.theme.COLOR_KEYLINE_DEFAULT};
  transition: all .3s ease;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  cursor: pointer;
  position: relative;

  ${props =>
    props.isDefault &&
    css`
      /* box-shadow: 0 0 0 1px ${props =>
        props.theme.COLOR_CONTENT_NONESSENTIAL}; */

      &:after {
        font-weight: ${props => props.theme.FONT_WEIGHT_BOLD};
      }
    `}

  &:after {
    content: '${props => props.demoVarName}';
    margin-top: ${spacingScale(1)};
    margin-bottom: ${spacingScale(1)};
    transition: all .5s ease;
    font-family: ${props => props.theme.FONT_STACK_DEFAULT};
    font-size: ${props => props.theme.FONT_SIZE_TEXT_SM};
    opacity: ${props => props.theme.OPACITY_LIGHT};
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1.5px ${props => props.theme.COLOR_INTENT_HIGHLIGHT};
    transition: all .15s ease;

    &:after {
      transition: inherit;
      content: 'Copy to Clipboard';
      opacity: ${props => props.theme.OPACITY_FULL};
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
    color: ${props => props.theme.COLOR_CONTENT_DEFAULT};
  }
`;

const DemoSection = styled.div.attrs({
  id: props => props.name
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-family: ${props => props.theme.FONT_STACK_DEFAULT};
  flex: 0 0 100%;
  line-height: 1.5;
  margin-top: calc(${spacingScale(2)});
  padding-top: ${spacingScale(4)};
  box-sizing: border-box;
  background-color: ${props => props.theme.COLOR_BACKGROUND_DEFAULT};
  color: ${props => props.theme.COLOR_CONTENT_DEFAULT};

  &:before { 
    content: '${props => props.name}';
    display: block;
    flex: 0 0 100%;
    margin: ${spacingScale(1)};
    user-select: text;
    font-size: ${props => props.theme.FONT_SIZE_PAGE_TITLE};
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
    font-size: ${props => props.theme.FONT_SIZE_TEXT_LG};
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
      ${props => transparentize(1, props.theme.COLOR_BACKGROUND_DEFAULT)},
      ${props => transparentize(1, props.theme.COLOR_BACKGROUND_DEFAULT)},
      ${props => props.theme.COLOR_BACKGROUND_DEFAULT}
    ),
    linear-gradient(
      to right,
      ${props => props.theme.COLOR_BACKGROUND_DEFAULT} 0%,
      ${props => props.theme.COLOR_BACKGROUND_DEFAULT} 33%,
      ${props => props.theme.COLOR_BACKGROUND_TWO} 33%,
      ${props => props.theme.COLOR_BACKGROUND_TWO} 66%,
      ${props => props.theme.COLOR_BACKGROUND_THREE} 66%,
      ${props => props.theme.COLOR_BACKGROUND_THREE} 100%
    );
  height: ${spacingScale(11)};
  width: ${spacingScale(26)};
  justify-content: space-between;
  align-items: stretch;

  &:before {
    content: "";
    height: ${spacingScale(4)};
    margin: ${spacingScale(1.5)} 0 0;
    border-radius: ${props => props.theme.CORNER_RADIUS_SHARP};
    background-color: ${props => props.demoVar};
    position: absolute;
    top: 0;
    left: ${spacingScale(1.5)};
    right: ${spacingScale(1.5)};
  }

  &:after {
    opacity: ${props => props.theme.OPACITY_LIGHT};
    margin: auto ${spacingScale(0.25)} ${spacingScale(1)};
    position: absolute;
    bottom: 0;
    left: ${spacingScale(0.25)};
    right: ${spacingScale(0.25)};
  }
`;

const ColorLineDemo = styled(ColorDemo)`
  align-items: stretch;
  background-color: ${props => props.theme.COLOR_BACKGROUND_DEFAULT};

  &:before {
    content: "";
    border-top: 1px solid ${props => props.demoVar};
    background: transparent;
    height: 0;
    margin: ${spacingScale(3.5)} ${spacingScale(1.5)} 0;
  }
`;

const ColorTextDemo = styled(DemoItem)`
  align-items: stretch;
  width: ${spacingScale(26)};
  background-color: ${props => props.theme.COLOR_BACKGROUND_DEFAULT};

  &:before {
    content: "Grey Matter";
    font-size: ${props => props.theme.FONT_SIZE_TEXT_LG};
    color: ${props => props.demoVar};
    margin: ${spacingScale(2)};
  }
`;

const ColorBackgroundDemoA = styled(ColorDemo)`
  background: ${props => props.theme.COLOR_BACKGROUND_DEFAULT};
  color: ${props => readableColor(props.theme.COLOR_BACKGROUND_DEFAULT)};

  &:before {
    content: none;
  }
`;
const ColorBackgroundDemoB = styled(ColorDemo)`
  background: ${props => props.theme.COLOR_BACKGROUND_TWO};
  color: ${props => readableColor(props.theme.COLOR_BACKGROUND_TWO)};

  &:before {
    content: none;
  }
`;
const ColorBackgroundDemoC = styled(ColorDemo)`
  background: ${props => props.theme.COLOR_BACKGROUND_THREE};
  color: ${props => readableColor(props.theme.COLOR_BACKGROUND_THREE)};

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
    font-size: ${props => props.theme.FONT_SIZE_HEADING_DEFAULT};
  }

  &:after {
    margin-bottom: ${spacingScale(1)};
  }
`;

const FontSizeDemo = styled(FontDemo)`
  font-family: ${props => props.theme.FONT_STACK_DEFAULT};

  &:before {
    font-size: ${props => props.demoVar};
  }
`;

const FontWeightDemo = styled(FontDemo)`
  &:before {
    font-size: ${props => props.theme.FONT_SIZE_TEXT_DEFAULT};
    font-weight: ${props => props.demoVar};
  }
`;

const LineHeightDemo = styled(FontDemo)`
  &:before {
    font-size: ${props => props.theme.FONT_SIZE_TEXT_DEFAULT};
    line-height: ${props => props.demoVar};
    max-width: 35ch;
    content: "Introducing the world’s first hybrid cloud intelligent mesh
Flexibly optimize your cloud, enhance customer digital experience, gain critical business intelligence, and cut ops costs with Grey Matter.";
  }
`;

const RadiusDemo = styled(DemoItem)`
  height: ${spacingScale(14)};
  width: ${spacingScale(26)};

  &:before {
    content: "";
    border: 1px solid ${props => props.theme.COLOR_BRAND_PRIMARY};
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
    border-radius: ${props => props.theme.CORNER_RADIUS_SHARP};
    background: ${props => props.theme.COLOR_BRAND_PRIMARY};
    opacity: ${props => props.demoVar};
  }
`;

const SpacingDemo = styled(DemoItem)`
  height: ${spacingScale(7)};

  &:before {
    content: "";
    height: ${spacingScale(0.5)};
    margin: ${spacingScale(2)} auto ${spacingScale(0)};
    border: 1px solid ${props => props.theme.COLOR_BRAND_PRIMARY};
    border-radius: 0 0 1.5px 1.5px;
    border-top: 0;
    width: ${props => props.demoVar};
  }
`;

const DemoDescription = styled.p`
  margin: ${spacingScale(-0.5)} ${spacingScale(1)} ${spacingScale(1.5)};
  font-size: ${props => props.theme.FONT_SIZE_TEXT_DEFAULT};
  font-family: ${props => props.theme.FONT_STACK_DEFAULT};
  display: flex;
  flex: 1 0 100%;

  &:after {
    content: "";
    flex: 1 0 calc(100% - 45em);
  }
`;

const DemoHeading = styled.h1`
  font-family: ${props => props.theme.FONT_STACK_DEFAULT};
  margin: ${spacingScale(4)} ${spacingScale(1)} ${spacingScale(1)};
`;

const DemoNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  margin: ${spacingScale(5)} 0 ${spacingScale(2)};
  height: ${spacingScale(5)};
  background-color: ${props => props.theme.COLOR_BACKGROUND_DEFAULT};
  box-shadow: 0 1px 0 0 ${props => props.theme.COLOR_KEYLINE_DEFAULT};
  z-index: ${props => props.theme.ZINDEX_STICKY};
  position: sticky;
  top: 0;
`;

const DemoNavigationItem = styled.a.attrs({ target: "_self" })`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.FONT_STACK_DEFAULT};
  font-size: ${props => props.theme.FONT_SIZE_TEXT_DEFAULT};
  color: ${props => props.theme.COLOR_CONTENT_DEFAULT};
  font-weight: ${props => props.theme.FONT_WEIGHT_SEMIBOLD};
  flex: 1 1 100%;
  text-decoration: none;

  &:before {
    content: "";
    margin-right: ${spacingScale(1)};
    color: ${props => props.theme.COLOR_BRAND_PRIMARY};
  }

  &[href="#Layout"] {
    &:before {
      width: ${spacingScale(2)};
      height: ${spacingScale(2)};
      border-radius: 1.5px;
      border: 1px solid ${props => props.theme.COLOR_BACKGROUND_DEFAULT};
      box-shadow: 0 0 0 2px, inset 0 0 0 1px;
    }
  }

  &[href="#Color"] {
    &:before {
      content: "";
      border-radius: ${props => props.theme.CORNER_RADIUS_SHARP};
      height: ${spacingScale(2)};
      width: ${spacingScale(2)};
      position: relative;
      right: ${spacingScale(0.5)};
      bottom: ${spacingScale(0.5)};
      background-color: ${props => props.theme.COLOR_BRAND_PRIMARY};
      box-shadow: ${spacingScale(0.5)} ${spacingScale(0.5)} 0
          ${props =>
            transparentize(
              1 - props.theme.OPACITY_LIGHT,
              props.theme.COLOR_BRAND_PRIMARY
            )},
        ${spacingScale(1)} ${spacingScale(1)} 0
          ${props =>
            transparentize(
              1 - props.theme.OPACITY_LIGHTER,
              props.theme.COLOR_BRAND_PRIMARY
            )};
    }
  }

  &[href="#Typography"] {
    &:before {
      content: "Aa";
      transform: scale(1.15);
      font-weight: ${props => props.theme.FONT_WEIGHT_DEFAULT};
      font-size: ${props => props.theme.FONT_SIZE_TEXT_XL};
    }
  }
`;

stories.add(
  "Design Tokens",
  () => (
    <DemoCanvas>
      <DemoHeading>Design Tokens</DemoHeading>
      <DemoDescription>
        <p>
          Use themed style tokens instead of hardcoding pixel and color values.
          You can import these variables like any other library component:
          <code>
            <pre>{"color: ${props => props.theme.COLOR_INTENT_HIGHLIGHT}"}</pre>
          </code>
          Style variables are also exposed to the browser as CSS Custom
          Properties:
          <code>
            <pre>{"opacity: var(--OPACITY_LIGHT)"}</pre>
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
            information density or overall visual complexity, use smaller radii
            to save space, just as you would reduce font or margin size.
          </DemoDescription>
          <RadiusDemo
            demoVar={props => props.theme.CORNER_RADIUS_SHARP}
            demoVarName={"CORNER_RADIUS_SHARP"}
          />
          <RadiusDemo
            demoVar={props => props.theme.CORNER_RADIUS_INPUT}
            demoVarName={"CORNER_RADIUS_INPUT"}
          />
          <RadiusDemo
            demoVar={props => props.theme.CORNER_RADIUS_CARD_SM}
            demoVarName={"CORNER_RADIUS_CARD_SM"}
          />
          <RadiusDemo
            demoVar={props => props.theme.CORNER_RADIUS_CARD_DEFAULT}
            demoVarName={"CORNER_RADIUS_CARD_DEFAULT"}
            isDefault
          />
          <RadiusDemo
            demoVar={props => props.theme.CORNER_RADIUS_CARD_LG}
            demoVarName={"CORNER_RADIUS_CARD_LG"}
          />
          <RadiusDemo
            demoVar={props => props.theme.CORNER_RADIUS_MAX}
            demoVarName={"CORNER_RADIUS_MAX"}
          />
        </DemoSubSection>
      </DemoSection>

      <DemoSection name="Color">
        <DemoSubSection name="Intent Colors">
          <DemoDescription>
            Use Intent colors to hint at interactable elements, or to indicate
            the type of effect an action could have or has had. Use with links,
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
            Use borders sparingly. Prefer using keyline color, because it will
            be tinted by the colors underneath it. However, when many layers are
            required (consider a horizontal toolbar with a shadow, above a
            series of vertical file columns using borders), consider using
            KEYLINE_SOLID to prevent the distracting accumulation of tints.
            Consider implementing borders using the spread attribute of a box
            shadow.
          </DemoDescription>
          <ColorLineDemo
            demoVar={props => props.theme.COLOR_KEYLINE_DEFAULT}
            demoVarName={"COLOR_KEYLINE_DEFAULT"}
            isDefault
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
            demoVar={props => props.theme.COLOR_BACKGROUND_DEFAULT}
            demoVarName={"COLOR_BACKGROUND_DEFAULT"}
            isDefault
          />
          <ColorBackgroundDemoB
            demoVar={props => props.theme.COLOR_BACKGROUND_TWO}
            demoVarName={"COLOR_BACKGROUND_TWO"}
          />
          <ColorBackgroundDemoC
            demoVar={props => props.theme.COLOR_BACKGROUND_THREE}
            demoVarName={"COLOR_BACKGROUND_THREE"}
          />
        </DemoSubSection>

        <DemoSubSection name="Content Colors">
          <DemoDescription>
            Use content colors to express the importance of text.
          </DemoDescription>
          <ColorTextDemo
            demoVar={props => props.theme.COLOR_CONTENT_DEFAULT}
            demoVarName={"COLOR_CONTENT_DEFAULT"}
            isDefault
          />
          <ColorTextDemo
            demoVar={props => props.theme.COLOR_CONTENT_CONTRAST}
            demoVarName={"COLOR_CONTENT_CONTRAST"}
          />
          <ColorTextDemo
            demoVar={props => props.theme.COLOR_CONTENT_MUTED}
            demoVarName={"COLOR_CONTENT_MUTED"}
          />
          <ColorTextDemo
            demoVar={props => props.theme.COLOR_CONTENT_NONESSENTIAL}
            demoVarName={"COLOR_CONTENT_NONESSENTIAL"}
          />
        </DemoSubSection>

        <DemoSubSection name="Brand Colors">
          <DemoDescription>
            Use Brand colors where the company's visual style needs to be
            represented directly. Consider using only in places where the logo
            may appear. Avoid using for interaction colors like links and
            buttons.
          </DemoDescription>
          <ColorDemo
            demoVar={props => props.theme.COLOR_BRAND_PRIMARY}
            demoVarName={"COLOR_BRAND_PRIMARY"}
          />
          <ColorDemo
            demoVar={props => props.theme.COLOR_BRAND_SECONDARY}
            demoVarName={"COLOR_BRAND_SECONDARY"}
          />
        </DemoSubSection>

        <DemoSubSection name="Opacity">
          <DemoDescription>
            Stick to the basic palette of opacity values to limit subjective
            colors across an application. Levels 100, 70, and 50 may be used to
            lighten text for captions or similar uses, where appropriate.
          </DemoDescription>
          <OpacityDemo
            demoVar={props => props.theme.OPACITY_FULL}
            demoVarName={"OPACITY_FULL"}
          />
          <OpacityDemo
            demoVar={props => props.theme.OPACITY_LIGHT}
            demoVarName={"OPACITY_LIGHT"}
          />
          <OpacityDemo
            demoVar={props => props.theme.OPACITY_LIGHTER}
            demoVarName={"OPACITY_LIGHTER"}
          />
          <OpacityDemo
            demoVar={props => props.theme.OPACITY_LIGHTEST}
            demoVarName={"OPACITY_LIGHTEST"}
          />
        </DemoSubSection>
      </DemoSection>

      <DemoSection name="Typography">
        <DemoSubSection name="Text Font Sizes">
          <DemoDescription>
            When in doubt, use the base size. Prefer using negative space and
            color to create relationships elements, when possible.
          </DemoDescription>
          <FontSizeDemo
            demoVar={props => props.theme.FONT_SIZE_TEXT_XS}
            demoVarName={"FONT_SIZE_TEXT_XS"}
          />
          <FontSizeDemo
            demoVar={props => props.theme.FONT_SIZE_TEXT_SM}
            demoVarName={"FONT_SIZE_TEXT_SM"}
          />
          <FontSizeDemo
            demoVar={props => props.theme.FONT_SIZE_TEXT_DEFAULT}
            demoVarName={"FONT_SIZE_TEXT_DEFAULT"}
            isDefault
          />
          <FontSizeDemo
            demoVar={props => props.theme.FONT_SIZE_TEXT_LG}
            demoVarName={"FONT_SIZE_TEXT_LG"}
          />
          <FontSizeDemo
            demoVar={props => props.theme.FONT_SIZE_TEXT_XL}
            demoVarName={"FONT_SIZE_TEXT_XL"}
          />
        </DemoSubSection>
        <DemoSubSection name="Heading Font Sizes">
          <FontSizeDemo
            demoVar={props => props.theme.FONT_SIZE_HEADING_SM}
            demoVarName={"FONT_SIZE_HEADING_SM"}
          />
          <FontSizeDemo
            demoVar={props => props.theme.FONT_SIZE_HEADING_DEFAULT}
            demoVarName={"FONT_SIZE_HEADING_DEFAULT"}
            isDefault
          />
          <FontSizeDemo
            demoVar={props => props.theme.FONT_SIZE_HEADING_LG}
            demoVarName={"FONT_SIZE_HEADING_LG"}
          />
        </DemoSubSection>
        <DemoSubSection name="Subheading Font Sizes">
          <FontSizeDemo
            demoVar={props => props.theme.FONT_SIZE_SUBHEADING_SM}
            demoVarName={"FONT_SIZE_SUBHEADING_SM"}
          />
          <FontSizeDemo
            demoVar={props => props.theme.FONT_SIZE_SUBHEADING_DEFAULT}
            demoVarName={"FONT_SIZE_SUBHEADING_DEFAULT"}
            isDefault
          />
          <FontSizeDemo
            demoVar={props => props.theme.FONT_SIZE_SUBHEADING_LG}
            demoVarName={"FONT_SIZE_SUBHEADING_LG"}
          />
        </DemoSubSection>
        <DemoSubSection name="Item Title Font Sizes">
          <FontSizeDemo
            demoVar={props => props.theme.FONT_SIZE_ITEM_TITLE_SM}
            demoVarName={"FONT_SIZE_ITEM_TITLE_SM"}
          />
          <FontSizeDemo
            demoVar={props => props.theme.FONT_SIZE_ITEM_TITLE_DEFAULT}
            demoVarName={"FONT_SIZE_HEADING_DEFAULT"}
            isDefault
          />
          <FontSizeDemo
            demoVar={props => props.theme.FONT_SIZE_ITEM_TITLE_LG}
            demoVarName={"FONT_SIZE_ITEM_TITLE_LG"}
          />
        </DemoSubSection>
        <DemoSubSection name="Page Title Font Size">
          <FontSizeDemo
            demoVar={props => props.theme.FONT_SIZE_PAGE_TITLE}
            demoVarName={"FONT_SIZE_PAGE_TITLE"}
          />
        </DemoSubSection>

        <DemoSubSection name="Font Weights">
          <DemoDescription>
            When in doubt, use the base weight. Use special weights only where
            necessary to reinforce visual heirarchy.
          </DemoDescription>
          <FontWeightDemo
            demoVar={props => props.theme.FONT_WEIGHT_DEFAULT}
            demoVarName={"FONT_WEIGHT_DEFAULT"}
            isDefault
          />
          <FontWeightDemo
            demoVar={props => props.theme.FONT_WEIGHT_MEDIUM}
            demoVarName={"FONT_WEIGHT_MEDIUM"}
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
            backed by the operating system default sans-serif Font Group, and
            may include specialized fonts. Use FONT_STACK_BRAND sparingly, and
            keep it limited to large headings.
          </DemoDescription>
          <FontDemo
            demoVar={props => props.theme.FONT_STACK_BRAND}
            demoVarName={"FONT_STACK_BRAND"}
          />
          <FontDemo
            demoVar={props => props.theme.FONT_STACK_DEFAULT}
            demoVarName={"FONT_STACK_DEFAULT"}
            isDefault
          />
          <FontDemo
            demoVar={props => props.theme.FONT_STACK_CODE}
            demoVarName={"FONT_STACK_CODE"}
          />
        </DemoSubSection>

        <DemoSubSection name="Line Heights">
          <DemoDescription>
            Running text should prefer a looser line-height. Item labels and
            most UI text should stick to default and tight height.
          </DemoDescription>
          <LineHeightDemo
            demoVar={props => props.theme.LINE_HEIGHT_LOOSE}
            demoVarName={"LINE_HEIGHT_LOOSE"}
          />
          <LineHeightDemo
            demoVar={props => props.theme.LINE_HEIGHT_DEFAULT}
            demoVarName={"LINE_HEIGHT_DEFAULT"}
            isDefault
          />
          <LineHeightDemo
            demoVar={props => props.theme.LINE_HEIGHT_TIGHT}
            demoVarName={"LINE_HEIGHT_TIGHT"}
          />
        </DemoSubSection>
      </DemoSection>
    </DemoCanvas>
  ),
  {
    info: {
      header: false,
      source: false,
      propTablesExclude: [
        ColorBackgroundDemoA,
        ColorBackgroundDemoB,
        ColorBackgroundDemoC,
        ColorDemo,
        ColorLineDemo,
        ColorTextDemo,
        DemoCanvas,
        DemoDescription,
        DemoHeading,
        DemoNavigation,
        DemoNavigationItem,
        DemoSection,
        DemoSubSection,
        FontDemo,
        FontSizeDemo,
        FontWeightDemo,
        LineHeightDemo,
        OpacityDemo,
        RadiusDemo,
        SpacingDemo
      ]
    }
  }
);
