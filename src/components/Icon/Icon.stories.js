import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { number, color, text } from "@storybook/addon-knobs";

import Icon from ".";
import * as Glyphs from "../Glyphs";
import { spacingScale } from "style/styleFunctions";

const glyphNames = [
  "ArrowUpRight",
  "ArrowUpLeft",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight",
  "ArrowDown",
  "ArrowEndUp",
  "ArrowEndLeft",
  "ArrowEndRight",
  "ArrowEndDown",
  "ArrowStartUp",
  "ArrowStartLeft",
  "ArrowStartRight",
  "ArrowStartDown",
  "ArrowDownLeft",
  "ArrowDownRight",
  "Activity",
  "AlertTriangle",
  "Bookmark",
  "Boolean",
  "Calendar",
  "CheckboxChecked",
  "CheckboxIndeterminate",
  "CheckboxNegative",
  "CheckboxUnchecked",
  "CheckcircleChecked",
  "CheckcircleUnchecked",
  "Checkmark",
  "Checklist",
  "ChevronDown",
  "ChevronDownDouble",
  "ChevronUp",
  "ChevronUpDouble",
  "ChevronLeft",
  "ChevronLeftDouble",
  "ChevronRight",
  "ChevronRightDouble",
  "Circle",
  "Cloud",
  "Cog",
  "Comment",
  "Configuration",
  "CPU",
  "Cycle",
  "Dashboard",
  "Download",
  "Duplicate",
  "Edit",
  "Entity",
  "Ekg",
  "EkgNo",
  "Expand",
  "Eye",
  "EyeNo",
  "File",
  "Filter",
  "Folder",
  "Group",
  "Grid",
  "Hellip",
  "HTTP",
  "Inbox",
  "IngressEgress",
  "Info",
  "Json",
  "Key",
  "Latency",
  "List",
  "Lock",
  "MagnifierPlus",
  "Magnifier",
  "Mail",
  "Memory",
  "Minus",
  "Move",
  "MoveWorkspace",
  "NewFolder",
  "NewOrganization",
  "News",
  "NewWindow",
  "NewWorkspace",
  "Organization",
  "OnOff",
  "Pause",
  "Person",
  "Pin",
  "Play",
  "Plus",
  "Project",
  "Rename",
  "Reorder",
  "SharedFolder",
  "ShareToPeople",
  "SortDescending",
  "Square",
  "Star",
  "StatusChecked",
  "StepForward",
  "StepBackward",
  "TextCursor",
  "Trash",
  "TrashX",
  "TriangleDown",
  "TriangleUp",
  "TriangleLeft",
  "TriangleRight",
  "Unlock",
  "Vellip",
  "Versions",
  "Workspace",
  "X"
];

const GalleryIconList = styled.ul`
  margin: 0;
  font-family: ${props => props.theme.FONT_STACK_BASE};
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  border: 1px solid ${props => props.theme.COLOR_KEYLINE_SOLID};
  border-width: 0 1px 1px 0;
  font-size: ${props => props.fontSize};
`;

const GalleryIconDemo = styled.li`
  border: 1px solid ${props => props.theme.COLOR_KEYLINE_SOLID};
  background-color: ${props => props.theme.COLOR_BACKGROUND_A};
  box-shadow: 1px 1px 0 0 ${props => props.theme.COLOR_KEYLINE_SOLID};
  border-width: 1px 0 0 1px;
  flex: 1 0 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${spacingScale(2)};
`;

const GalleryIconLabel = styled.p`
  margin: ${spacingScale(1)};
  font-size: ${props => props.theme.FONT_SIZE_SM};
  opacity: ${props => props.theme.OPACITY_70};
`;

const stories = storiesOf("Components|Icons", module);

stories
  .add(
    "Default",
    () => {
      const Cog = Glyphs.Cog;
      return (
        <Cog
          borderColor={color("borderColor")}
          borderWidth={number("borderWidth")}
          fillColor={color("fillColor")}
          fillOpacity={number("fillOpacity")}
          size={text("size")}
          title={text("title")}
        />
      );
    },
    {
      info: {
        text:
          "An Icon component that renders a variety of glyphs (see the gallery for all glyph options)."
      }
    }
  )
  .add(
    "Icon with Custom Glyph",
    () => {
      return (
        <Icon title="Custom Glyph">
          <svg className="svg-icon" viewBox="0 0 24 24">
            <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z" />
          </svg>
        </Icon>
      );
    },
    {
      info: {
        text:
          "An Icon component that renders a custom glyph. Simply import { Icon } and wrap your custom svg."
      }
    }
  );
// .add("Glyph Gallery", () => {
//   return (
//     <GalleryIconList fontSize={text("Context font size", "inherit")}>
//       {glyphNames.map(glyph => {
//         let Glyph = Glyphs[glyph];
//         return (
//           <GalleryIconDemo key={glyph}>
//             <Glyph
//               size={text("size")}
//               fillColor={color("fillColor")}
//               fillOpacity={number("fillOpacity")}
//               borderColor={color("borderColor")}
//               borderWidth={text("borderWidth")}
//             />
//             <GalleryIconLabel>{glyph}</GalleryIconLabel>
//           </GalleryIconDemo>
//         );
//       })}
//     </GalleryIconList>
//   );
// })
