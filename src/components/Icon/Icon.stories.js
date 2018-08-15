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
  "ArrowDown",
  "ArrowDownSmall",
  "ArrowLeft",
  "ArrowLeftSmall",
  "ArrowRight",
  "ArrowRightSmall",
  "ArrowUp",
  "ArrowUpSmall",
  "Bars",
  "Bell",
  "Bullet",
  "CPU",
  "Calendar",
  "Card",
  "Check",
  "Checklist",
  "ChevronDown",
  "ChevronDownSmall",
  "ChevronLeft",
  "ChevronLeftSmall",
  "ChevronRight",
  "ChevronRightSmall",
  "ChevronUp",
  "ChevronUpSmall",
  "Child",
  "CircleThick",
  "CircleThin",
  "Close",
  "Cloud",
  "Cog",
  "Collapse",
  "CommentAdd",
  "Confidential",
  "Configuration",
  "Cycle",
  "Dashboards",
  "FileDocumentWhite",
  "Drive",
  "EKG",
  "EKGMagnifier",
  "EditGraph",
  "EllipsisHorizontal",
  "EllipsisVertical",
  "Entity",
  "ErrorList",
  "Exclamation",
  "Explorer",
  "Eye",
  "Fabric",
  "File",
  "FileAudio",
  "FileDocument",
  "FileDownload",
  "FileFind",
  "FileGhost",
  "FilePhoto",
  "FilePresentation",
  "FileSharedWithMe",
  "FileSharedWithOthers",
  "FileSpreadsheet",
  "FileStar",
  "FileText",
  "FileVideo",
  "Files",
  "FilesFind",
  "FilesSharedWithMe",
  "FilesSharedWithOthers",
  "Finagle",
  "Folder",
  "FolderAdd",
  "FolderGroup",
  "FolderShared",
  "Functions",
  "GRPC",
  "GitHub",
  "Globe",
  "HTTP2",
  "HTTP",
  "Idle",
  "Info",
  "IngressEgress",
  "Instances",
  "ItemsFilter",
  "ItemsGrid",
  "ItemsGroup",
  "ItemsRows",
  "ItemsSort",
  "JVM",
  "Key",
  "Latency",
  "LinkOut",
  "LinkedIn",
  "List",
  "Lock",
  "Magnifier",
  "Memory",
  "Minus",
  "MinusSmall",
  "MinusXSmall",
  "NLP",
  "Negation",
  "NoEye",
  "NoKey",
  "NoLock",
  "NoMetrics",
  "ObjectBase",
  "ObjectAdd",
  "ObjectAudio",
  "ObjectDocument",
  "ObjectDownload",
  "ObjectDuplicate",
  "ObjectExpand",
  "ObjectGhost",
  "ObjectMail",
  "ObjectMove",
  "ObjectPhoto",
  "ObjectPlay",
  "ObjectPresentation",
  "ObjectSpreadsheet",
  "ObjectStar",
  "ObjectText",
  "ObjectUpload",
  "ObjectVideo",
  "ObjectsUpload",
  "Observation",
  "OnOff",
  "Parent",
  "Pause",
  "Paused",
  "Pencil",
  "PencilGraph",
  "PencilParagraph",
  "Person",
  "Play",
  "Plus",
  "PlusSmall",
  "PlusXSmall",
  "Poll",
  "Power",
  "Rows",
  "Running",
  "RunningSmall",
  "Scale",
  "Scatterplot",
  "Secret",
  "Service",
  "ServiceInstance",
  "Services",
  "Shapes",
  "SquareThick",
  "SquareThin",
  "Stack",
  "Star",
  "StarFilled",
  "StepBackward",
  "StepForward",
  "Stopped",
  "Summary",
  "Tape",
  "Threads",
  "Timer",
  "TopSecret",
  "Trash",
  "TriangleThick",
  "TriangleThin",
  "Twitter",
  "Unclassified",
  "Unlock",
  "Upload",
  "UserGroup",
  "UserRound",
  "UserShare",
  "ViewCollapse",
  "Warning",
  "X",
  "XSmall"
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
      const Bell = Glyphs.Bell;
      return (
        <Bell
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
