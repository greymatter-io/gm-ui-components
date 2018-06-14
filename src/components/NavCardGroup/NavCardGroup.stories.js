import React from "react";

import { storiesOf } from "@storybook/react";
import { Summary, Functions, Threads, Http, JVM } from "components";

import NavCard from "components/NavCard";
import NavCardGroup from "components/NavCardGroup";

const mockTabs = [
  {
    path: "/",
    icon: () => <Summary size="24px" />,
    title: "Summary",
    details: [{ name: "Uptime", value: "15 Days" }]
  },
  {
    path: "go",
    icon: () => <Functions size="24px" />,
    title: "Functions",
    details: [{ name: "Functions", value: "24" }]
  },
  {
    path: "go",
    icon: () => <Threads size="24px" />,
    title: "Threads",
    details: [{ name: "Threads", value: "26" }]
  },
  {
    icon: () => <Http size="24px" />,
    title: "HTTP",
    details: [{ name: "Error Rate", value: "0.121%" }]
  },
  {
    icon: () => <JVM size="24px" />,
    title: "JVM",
    details: [{ name: "Memory Used", value: "116 MB" }]
  }
];

storiesOf("NavCardGroup", module).add("NavCard with NavCardGroup", () => {
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
});
