import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { number, color, text, boolean, object } from "@storybook/addon-knobs";

import Icon from ".";
import * as Glyphs from "../Glyphs";
import { spacingScale } from "style/styleFunctions";

const glyphNames = [
  "IconArrowUpRight",
  "IconArrowUpLeft",
  "IconArrowUp",
  "IconArrowLeft",
  "IconArrowRight",
  "IconArrowDown",
  "IconArrowEndUp",
  "IconArrowEndLeft",
  "IconArrowEndRight",
  "IconArrowEndDown",
  "IconArrowStartUp",
  "IconArrowStartLeft",
  "IconArrowStartRight",
  "IconArrowStartDown",
  "IconArrowDownLeft",
  "IconArrowDownRight",
  "IconActivity",
  "IconAlertTriangle",
  "IconBell",
  "IconBookmark",
  "IconBoolean",
  "IconCalendar",
  "IconCheckboxChecked",
  "IconCheckboxIndeterminate",
  "IconCheckboxNegative",
  "IconCheckboxUnchecked",
  "IconCheckcircleChecked",
  "IconCheckcircleUnchecked",
  "IconCheckmark",
  "IconChecklist",
  "IconChevronDown",
  "IconChevronDownDouble",
  "IconChevronUp",
  "IconChevronUpDouble",
  "IconChevronLeft",
  "IconChevronLeftDouble",
  "IconChevronRight",
  "IconChevronRightDouble",
  "IconCircle",
  "IconCloud",
  "IconCog",
  "IconComment",
  "IconConfiguration",
  "IconCPU",
  "IconCycle",
  "IconDashboard",
  "IconDownload",
  "IconDuplicate",
  "IconEdit",
  "IconEntity",
  "IconEkg",
  "IconEkgNo",
  "IconExpand",
  "IconEye",
  "IconEyeNo",
  "IconFile",
  "IconFilter",
  "IconFolder",
  "IconGroup",
  "IconGrid",
  "IconHellip",
  "IconHTTP",
  "IconInbox",
  "IconIngressEgress",
  "IconInfo",
  "IconJson",
  "IconKey",
  "IconLatency",
  "IconList",
  "IconLock",
  "IconMagnifierPlus",
  "IconMagnifier",
  "IconMail",
  "IconMemory",
  "IconMinus",
  "IconMove",
  "IconMoveWorkspace",
  "IconNewFolder",
  "IconNewOrganization",
  "IconNews",
  "IconNewWindow",
  "IconNewWorkspace",
  "IconOrganization",
  "IconOnOff",
  "IconPause",
  "IconPerson",
  "IconPin",
  "IconPlay",
  "IconPlus",
  "IconProject",
  "IconRename",
  "IconReorder",
  "IconSharedFolder",
  "IconShareToPeople",
  "IconSortDescending",
  "IconSquare",
  "IconStar",
  "IconStatusChecked",
  "IconStepForward",
  "IconStepBackward",
  "IconTextCursor",
  "IconTrash",
  "IconTrashX",
  "IconTriangleDown",
  "IconTriangleUp",
  "IconTriangleLeft",
  "IconTriangleRight",
  "IconUnlock",
  "IconVellip",
  "IconVersions",
  "IconWorkspace",
  "IconX"
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
  padding: ${spacingScale(2)};
  flex-direction: row;
`;

const GalleryIconLabel = styled.p`
  opacity: ${props => props.theme.OPACITY_70};
`;

const stories = storiesOf("Components|Icons", module);

stories
  .add(
    "Default",
    () => {
      const IconCog = Glyphs.IconCog;
      return (
        <IconCog
          borderColor={color("borderColor")}
          borderWidth={number("borderWidth")}
          fillColor={color("fillColor")}
          fillOpacity={number("fillOpacity")}
          size={text("size")}
          title={text("title")}
          badge={boolean("badge")}
          badgeColor={color("badgeColor")}
          badgePosition={object("badgePosition", undefined)}
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
    "Custom Glyphs",
    () => {
      return (
        <Icon
          title={text("title", undefined)}
          size={text("size", undefined)}
          borderColor={color("borderColor", undefined)}
          borderWidth={number("borderWidth", undefined)}
          fillColor={color("fillColor", undefined)}
          fillOpacity={number("fillOpacity", undefined)}
          badge={boolean("badge", undefined)}
          badgeColor={color("badgeColor", undefined)}
          badgePosition={object("badgePosition", undefined)}
        >
          <svg className="svg-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="7.4" />
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
  )
  .add("Glyph Gallery", () => {
    return (
      <GalleryIconList fontSize={text("Context font size", "inherit")}>
        {glyphNames.map(glyph => {
          let Glyph = Glyphs[glyph];
          return (
            <GalleryIconDemo key={glyph}>
              <Glyph
                title={glyph}
                size={text("size", undefined)}
                fillColor={color("fillColor", undefined)}
                fillOpacity={number("fillOpacity", undefined)}
                borderColor={color("borderColor", undefined)}
                borderWidth={text("borderWidth", undefined)}
                badge={boolean("badge", undefined)}
                badgeColor={color("badgeColor")}
                badgePosition={object("badgePosition", undefined)}
                disablePixelCorrection={boolean("disablePixelCorrection")}
              />
              <GalleryIconLabel>{glyph}</GalleryIconLabel>
            </GalleryIconDemo>
          );
        })}
      </GalleryIconList>
    );
  });
