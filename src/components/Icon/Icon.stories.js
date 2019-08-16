import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { number, color, text, boolean, object } from "@storybook/addon-knobs";

import Icon from ".";
import * as Glyphs from "../Glyphs";
import { spacingScale } from "style/styleFunctions";

const glyphNames = [
  "IconActivity",
  "IconAlertTriangle",
  "IconArrowDown",
  "IconArrowDownLeft",
  "IconArrowDownRight",
  "IconArrowEndDown",
  "IconArrowEndLeft",
  "IconArrowEndRight",
  "IconArrowEndUp",
  "IconArrowLeft",
  "IconArrowRight",
  "IconArrowStartDown",
  "IconArrowStartLeft",
  "IconArrowStartRight",
  "IconArrowStartUp",
  "IconArrowUp",
  "IconArrowUpLeft",
  "IconArrowUpRight",
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
  "IconChecklist",
  "IconCheckmark",
  "IconChevronDown",
  "IconChevronDownDouble",
  "IconChevronLeft",
  "IconChevronLeftDouble",
  "IconChevronRight",
  "IconChevronRightDouble",
  "IconChevronUp",
  "IconChevronUpDouble",
  "IconCircle",
  "IconNegation",
  "IconLinkedIn",
  "IconTwitter",
  "IconCloud",
  "IconCog",
  "IconComment",
  "IconConfiguration",
  "IconCopyToWorkspace",
  "IconCPU",
  "IconCycle",
  "IconDashboard",
  "IconThreads",
  "IconDocument",
  "IconDownload",
  "IconDuplicate",
  "IconGlobe",
  "IconFunctions",
  "IconEdit",
  "IconEkg",
  "IconGitHub",
  "IconEkgNo",
  "IconEntity",
  "IconExpand",
  "IconEye",
  "IconEyeNo",
  "IconFile",
  "IconFilter",
  "IconFolder",
  "IconGrid",
  "IconGroup",
  "IconHellip",
  "IconHTTP",
  "IconInbox",
  "IconInfo",
  "IconIngressEgress",
  "IconJson",
  "IconKey",
  "IconLatency",
  "IconList",
  "IconLock",
  "IconMagnifier",
  "IconMagnifierPlus",
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
  "IconOnOff",
  "IconOrganization",
  "IconPause",
  "IconPerson",
  "IconPin",
  "IconPlaceholder",
  "IconPlay",
  "IconPlus",
  "IconProject",
  "IconProjectB",
  "IconRename",
  "IconReorder",
  "IconSharedFolder",
  "IconShareToPeople",
  "IconSlideshow",
  "IconSortDescending",
  "IconSpreadsheet",
  "IconSquare",
  "IconStar",
  "IconStatusChecked",
  "IconStepBackward",
  "IconStepForward",
  "IconSummary",
  "IconTextCursor",
  "IconTrash",
  "IconTrashX",
  "IconTriangleDown",
  "IconTriangleLeft",
  "IconTriangleRight",
  "IconTriangleUp",
  "IconUnlock",
  "IconVellip",
  "IconVersions",
  "IconWorkspace",
  "IconX"
];

const GalleryIconList = styled.ul`
  box-sizing: border-box;
  width: 90vw;
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  font-size: ${props => props.fontSize};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14em, 1fr));
  grid-gap: ${spacingScale(2)};
`;

const GalleryIconDemo = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const GalleryIconLabel = styled.p`
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
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
          hasBadge={boolean("hasBadge")}
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
          hasBadge={boolean("hasBadge", undefined)}
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
                hasBadge={boolean("hasBadge", undefined)}
                badgeColor={color("badgeColor")}
                badgePosition={object("badgePosition", undefined)}
              />
              <GalleryIconLabel>{glyph}</GalleryIconLabel>
            </GalleryIconDemo>
          );
        })}
      </GalleryIconList>
    );
  });
