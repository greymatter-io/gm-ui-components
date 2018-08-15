import React from "react";
import Icon from "../Icon";

export default function Exclamation(props) {
  return (
    <Icon {...props} glyphName="Exclamation">
      <path
        d="M5.99999997,7.06066015 C5.70710675,6.76776693 5.70710675,6.2928932 5.99999997,5.99999997 C6.2928932,5.70710675 6.76776693,5.70710675 7.06066015,5.99999997 L18,16.9393398 C18.2928932,17.232233 18.2928932,17.7071068 18,18 C17.7071068,18.2928932 17.232233,18.2928932 16.9393398,18 L5.99999997,7.06066015 Z"
        fillRule="nonzero"
      />
    </Icon>
  );
}

Exclamation.displayName = "Exclamation";
