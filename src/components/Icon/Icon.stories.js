import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  select,
  number,
  color,
  text
} from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Icon from ".";
import * as Glyphs from "../Glyphs";

const glyphNames = [
  "IconArrowDown",
  "IconArrowDownSmall",
  "IconArrowLeft",
  "IconArrowLeftSmall",
  "IconArrowRight",
  "IconArrowRightSmall",
  "IconArrowUp",
  "IconArrowUpSmall",
  "IconBars",
  "IconBell",
  "IconBullet",
  "IconCalendar",
  "IconCard",
  "IconCheck",
  "IconChecklist",
  "IconChevronDown",
  "IconChevronDownSmall",
  "IconChevronLeft",
  "IconChevronLeftSmall",
  "IconChevronRight",
  "IconChevronRightSmall",
  "IconChevronUp",
  "IconChevronUpSmall",
  "IconChild",
  "IconCircleThick",
  "IconCircleThin",
  "IconClassConfidential",
  "IconClassSecret",
  "IconClassTopSecret",
  "IconClassUnclassified",
  "IconClose",
  "IconCloud",
  "IconCog",
  "IconCollapse",
  "IconCommentAdd",
  "IconConfiguration",
  "IconCPU",
  "IconCycle",
  "IconDashboards",
  "IconDrive",
  "IconEditGraph",
  "IconEKG",
  "IconEKGMagnifier",
  "IconEllipsisHorizontal",
  "IconEllipsisVertical",
  "IconEntity",
  "IconErrorList",
  "IconExclamation",
  "IconExplorer",
  "IconEye",
  "IconFabric",
  "IconFile",
  "IconFileAudio",
  "IconFileDocument",
  "IconFileDocumentWhite",
  "IconFileDownload",
  "IconFileFind",
  "IconFileGhost",
  "IconFilePhoto",
  "IconFilePresentation",
  "IconFiles",
  "IconFilesFind",
  "IconFileSharedWithMe",
  "IconFileSharedWithOthers",
  "IconFileSpreadsheet",
  "IconFilesSharedWithMe",
  "IconFilesSharedWithOthers",
  "IconFileStar",
  "IconFileText",
  "IconFileVideo",
  "IconFinagle",
  "IconFolder",
  "IconFolderAdd",
  "IconFolderGroup",
  "IconFolderShared",
  "IconFunctions",
  "IconGitHub",
  "IconGlobe",
  "IconGRPC",
  "IconHTTP",
  "IconHTTP2",
  "IconIdle",
  "IconInfo",
  "IconIngressEgress",
  "IconInstances",
  "IconItemsFilter",
  "IconItemsGrid",
  "IconItemsGroup",
  "IconItemsRows",
  "IconItemsSort",
  "IconKey",
  "IconLatency",
  "IconLinkedIn",
  "IconLinkOut",
  "IconList",
  "IconLock",
  "IconMagnifier",
  "IconMediaPause",
  "IconMediaPlay",
  "IconMediaStepBackward",
  "IconMediaStepForward",
  "IconMemory",
  "IconMinus",
  "IconMinusSmall",
  "IconMinusXSmall",
  "IconNegation",
  "IconNLP",
  "IconNoEye",
  "IconNoKey",
  "IconNoLock",
  "IconNoMetrics",
  "IconObjectAdd",
  "IconObjectAudio",
  "IconObjectBase",
  "IconObjectDocument",
  "IconObjectDownload",
  "IconObjectDuplicate",
  "IconObjectExpand",
  "IconObjectGhost",
  "IconObjectMail",
  "IconObjectMove",
  "IconObjectPhoto",
  "IconObjectPlay",
  "IconObjectPresentation",
  "IconObjectSpreadsheet",
  "IconObjectStar",
  "IconObjectsUpload",
  "IconObjectText",
  "IconObjectUpload",
  "IconObjectVideo",
  "IconObservation",
  "IconOnOff",
  "IconParent",
  "IconPencil",
  "IconPencilGraph",
  "IconPencilParagraph",
  "IconPerson",
  "IconPlus",
  "IconPlusSmall",
  "IconPlusXSmall",
  "IconPoll",
  "IconPower",
  "IconRows",
  "IconScale",
  "IconScatterplot",
  "IconService",
  "IconServiceInstance",
  "IconServices",
  "IconShapes",
  "IconSquareThick",
  "IconSquareThin",
  "IconStack",
  "IconStar",
  "IconStarFilled",
  "IconStatePaused",
  "IconStateRunning",
  "IconStateRunningSmall",
  "IconStateStopped",
  "IconStateWarning",
  "IconSummary",
  "IconTape",
  "IconThreads",
  "IconTimer",
  "IconTrash",
  "IconTriangleThick",
  "IconTriangleThin",
  "IconTwitter",
  "IconUnlock",
  "IconUpload",
  "IconUserGroup",
  "IconUserRound",
  "IconUserShare",
  "IconViewCollapse",
  "IconX",
  "IconXSmall",
];

const iconBackgroundNames = [
  "BackgroundCircleSmall",
  "BackgroundSquare",
  "BackgroundSquareBeveled",
  "BackgroundSquareRounded",
  "BackgroundSquareRoundedSmooth",
  "BackgroundSquareSmall",
  "BackgroundTriangle",
  "BackgroundTriangleSmall"
];

storiesOf("Icons", module)
  .addDecorator(withKnobs)
  .add(
    "default",
    withInfo(
      "An Icon component that renders a variety of glyphs (see the gallery for all glyph options)."
    )(() => {
      const IconBell = Glyphs.IconBell;
      return (
        <IconBell
          backgroundStyle={select(
            "backgroundStyle",
            iconBackgroundNames,
            "BackgroundSquareRounded"
          )}
          backgroundColor={color("backgroundColor", "#000")}
          backgroundOpacity={number("backgroundOpacity", 1)}
          borderColor={color("borderColor", "currentColor")}
          borderOpacity={number("borderOpacity", 0.5)}
          borderWidth={number("borderWidth", 1)}
          glyphColor={color("glyphColor", "#fff")}
          size={text("size", "100px")}
        />
      );
    })
  )
  .add(
    "custom glyph",
    withInfo(
      "An Icon component that renders a custom glyph. Simply import { Icon } and wrap your custom svg."
    )(() => {
      return (
        <Icon
          backgroundStyle={select(
            "backgroundStyle",
            iconBackgroundNames,
            "BackgroundSquareRounded"
          )}
          backgroundColor={color("backgroundColor", "#eee")}
          glyphColor={color("glyphColor", "#444")}
          backgroundOpacity={number("backgroundOpacity", 1)}
          size={text("size", "100px")}
          title="Custom Glyph"
        >
          <svg className="svg-icon" viewBox="0 0 20 20">
            <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z" />
          </svg>
        </Icon>
      );
    })
  )
  .add(
    "gallery",
    withInfo(
      "A gallery of all native Glyphs. Import the desired Glyph by name and pass desired props as documented in Icons/default"
    )(() => {
      return (
        <div>
          {glyphNames.map(glyph => {
            let Glyph = Glyphs[glyph];
            return (
              <div
                key={glyph}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span>{glyph}: </span>
                <Icon size={text("size", "100px")}>
                  <Glyph />
                </Icon>
              </div>
            );
          })}
        </div>
      );
    })
  );
