import React from "react";

import { storiesOf } from "@storybook/react";
import { IconSummary, IconFunctions, IconThreads, IconHTTP } from "components";

import NavCard from "components/NavCard";
import NavCardGroup from "components/NavCardGroup";

const stories = storiesOf("Components|NavCard", module);

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

stories.add(
  "NavCardGroup",
  () => {
    return (
      <NavCardGroup>
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
  },
  {
    info: {
      text: "Groups of related NavCards should be displayed in a NavCardGroup."
    }
  }
);
