import React from "react";
import Icon from "../Icon";

export default function ChevronUpSmall(props) {
  return (
    <Icon {...props} glyphName="ChevronUpSmall">
      <path
        d="M12.4393398,11.5 L9.96966991,9.03033007 C9.67677669,8.73743685 9.67677669,8.26256312 9.96966991,7.9696699 C10.2625631,7.67677668 10.7374369,7.67677668 11.0303301,7.9696699 L14.5606602,11.5 L11.0303301,15.0303301 C10.7374369,15.3232233 10.2625631,15.3232233 9.96966991,15.0303301 C9.67677669,14.7374369 9.67677669,14.2625631 9.96966991,13.9696699 L12.4393398,11.5 Z"
        id="ChevronUpSmall"
        fill="#000000"
        fillRule="nonzero"
        transform="translate(12.155330, 11.500000) scale(-1, 1) rotate(-90.000000) translate(-12.155330, -11.500000) "
      />
    </Icon>
  );
}

ChevronUpSmall.displayName = "ChevronUpSmall";
