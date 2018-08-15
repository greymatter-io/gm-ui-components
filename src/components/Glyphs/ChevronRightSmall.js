import React from "react";
import Icon from "../Icon";

export default function ChevronRightSmall(props) {
  return (
    <Icon {...props} glyphName="ChevronRightSmall">
      <path
        d="M12.9393398,12 L10.4696699,9.53033008 C10.1767767,9.23743686 10.1767767,8.76256312 10.4696699,8.4696699 C10.7625631,8.17677668 11.2374369,8.17677668 11.5303301,8.4696699 L15.0606602,12 L11.5303301,15.5303301 C11.2374369,15.8232233 10.7625631,15.8232233 10.4696699,15.5303301 C10.1767767,15.2374369 10.1767767,14.7625631 10.4696699,14.4696699 L12.9393398,12 Z"
        id="ChevronRightSmall"
        fill="#000000"
        fillRule="nonzero"
      />
    </Icon>
  );
}

ChevronRightSmall.displayName = "ChevronRightSmall";
