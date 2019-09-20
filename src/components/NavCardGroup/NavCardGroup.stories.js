import React from "react";

import { boolean } from "@storybook/addon-knobs";

import { IconSummary, IconFunctions, IconThreads, IconHTTP } from "components";

import NavCard from "components/NavCard";
import NavCardGroup from "components/NavCardGroup";

export default { title: "NavCardGroup", component: NavCardGroup };

const mockTabs = [
  {
    path: "/",
    icon: () => <IconSummary size="24px" />,
    title: "Summary",
    details: [{ name: "Uptime", value: "15 Days" }]
  },
  {
    path: "go",
    icon: () => <IconFunctions size="24px" />,
    title: "Functions",
    details: [{ name: "Functions", value: "24" }]
  },
  {
    path: "go",
    icon: () => <IconThreads size="24px" />,
    title: "Threads",
    details: [{ name: "Threads", value: "26" }]
  },
  {
    icon: () => <IconHTTP size="24px" />,
    title: "HTTP",
    details: [{ name: "Error Rate", value: "0.121%" }]
  },
  {
    icon: () => <IconFunctions size="24px" />,
    title: "JVM",
    details: [{ name: "Memory Used", value: "116 MB" }]
  }
];

export const defaultStory = () => {
  return (
    <NavCardGroup useContextTheme={boolean("useContextTheme")}>
      {mockTabs.map(item => {
        return (
          <NavCard
            key={item.title}
            icon={item.icon}
            details={item.details}
            title={item.title}
          />
        );
      })}
    </NavCardGroup>
  );
};

defaultStory.story = {
  name: "Default",

  parameters: {
    info: {
      text:
        "Groups of related NavCards should be displayed in a NavCardGroup. NavCardGroup prefers to use keenDark as its theme, but this can be overridden with `useContextTheme`."
    }
  }
};
