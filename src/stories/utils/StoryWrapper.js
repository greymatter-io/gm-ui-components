import React from "react";
import styled from "styled-components";

const StoryWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function Wrapper(storyFn) {
  return <StoryWrapper>{storyFn()}</StoryWrapper>;
}
