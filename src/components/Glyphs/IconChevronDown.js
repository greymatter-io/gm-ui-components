import React from "react";
import Icon from "../Icon";

export default function ChevronDown(props) {
  return (
    <Icon {...props} glyphName="ChevronDown">
      <path
        d="M13.4393398,12.5 L8.9696699,8.03033007 C8.67677668,7.73743685 8.67677668,7.26256311 8.9696699,6.96966989 C9.26256312,6.67677667 9.73743686,6.67677667 10.0303301,6.96966989 L15.5606602,12.5 L10.0303301,18.0303301 C9.73743686,18.3232233 9.26256312,18.3232233 8.9696699,18.0303301 C8.67677668,17.7374369 8.67677668,17.2625632 8.9696699,16.9696699 L13.4393398,12.5 Z"
        id="ChevronDown"
         
        fillRule="nonzero"
        transform="translate(12.155330, 12.500000) scale(-1, 1) rotate(90.000000) translate(-12.155330, -12.500000) "
      />
    </Icon>
  );
}

ChevronDown.displayName = "ChevronDown";
