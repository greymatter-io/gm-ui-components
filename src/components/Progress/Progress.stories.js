import React from "react";
import { storiesOf } from "@storybook/react";
import { number, select, boolean, text } from "@storybook/addon-knobs";
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12em, 1fr));
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
`;

import Progress from "./Progress";

const CustomProgress = styled(Progress)`
  font-size: 10em;
  background-color: #00b42b;
  border: 0;
  color: #fff;
  --circle-width: 2px;
`;

const stories = storiesOf("Components|Progress", module);

stories.add(
  "Default",
  () => {
    return (
      <Progress
        value={number("value", 0.5)}
        max={number("max", 1)}
        shape={select('shape', ['bar', 'pie', 'circle'], 'bar')}
        reverse={boolean('reverse', false)}
      />
    );
  },
  {
    info: {
      text:
        "Progress takes the browser's default progress element and extends it with additional states and styles, particularly the 'Pie' alternate shape. Mind the provided CSS Variables: --circle - width, --fill- color, etc."
    }
  }
).add(
  "Pie",
  () => {
    return (
      <Progress
        value={text("value", 0.35)}
        shape={select('shape', ['bar', 'pie', 'circle'], 'pie')}
      />
    );
  },
).add(
  "Circle",
  () => {
    return (
      <Progress
        value={text("value", 0.35)}
        shape={select('shape', ['bar', 'pie', 'circle'], 'circle')}
      />
    );
  },
).add(
  "Variations",
  () => {
    return (
      <Grid>
        <Progress value={0.3} />
        <Progress value={0.3} style={{ border: 0, color: "#00b42b", width: '10em', height: '0.5em' }} />
        <Progress />
        <Progress style={{ border: 0, color: "#00b42b", width: '10em', height: '0.5em' }} />
        <Progress value={0.39} shape='pie' style={{ fontSize: '10em' }} />
        <Progress shape='circle' style={{
          fontSize: '10em',
          color: 'rebeccapurple',
          '--circle-width': '8px'
        }} />
        <Progress
          shape='circle'
          style={{
            fontSize: '10em',
            backgroundColor: 'rgba(0,0,0,0.08)',
            border: 'none',
            '--fill-color': '#007aff',
            '--circle-width': '4px'
          }}
        />
        <Progress
          shape='pie'
          style={{
            fontSize: '10em',
            backgroundColor: 'rgba(0,0,0,0.08)',
            border: 'none',
            '--fill-color': '#007aff',
            '--circle-width': '4px'
          }}
        />
        <CustomProgress shape="circle" />
      </Grid>
    );
  },
);
