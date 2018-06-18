import React from "react";
import Icon from "../Icon";

export default function Threads(props) {
  return (
    <Icon {...props} glyphName="Threads">
      <path
        d="M7,7 L19,7 L19,9 L7,9 L7,7 Z M6,11 L18,11 L18,13 L6,13 L6,11 Z M5,15 L17,15 L17,17 L5,17 L5,15 Z"
        id="shape"
      />
    </Icon>
  );
}

Threads.displayName = "Threads";
