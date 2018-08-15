import React from "react";
import Icon from "../Icon";

export default function ChevronUp(props) {
  return (
    <Icon {...props} glyphName="ChevronUp">
      <path
        d="M13.4393398,11.5 L8.9696699,7.03033007 C8.67677668,6.73743685 8.67677668,6.26256311 8.9696699,5.96966989 C9.26256312,5.67677667 9.73743686,5.67677667 10.0303301,5.96966989 L15.5606602,11.5 L10.0303301,17.0303301 C9.73743686,17.3232233 9.26256312,17.3232233 8.9696699,17.0303301 C8.67677668,16.7374369 8.67677668,16.2625632 8.9696699,15.9696699 L13.4393398,11.5 Z"
        id="ChevronUp"
        fill="#000000"
        fillRule="nonzero"
        transform="translate(12.155330, 11.500000) scale(-1, 1) rotate(-90.000000) translate(-12.155330, -11.500000) "
      />
    </Icon>
  );
}

ChevronUp.displayName = "ChevronUp";
