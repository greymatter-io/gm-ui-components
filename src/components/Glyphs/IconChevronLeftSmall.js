import React from "react";
import Icon from "../Icon";

export default function ChevronLeftSmall(props) {
  return (
    <Icon {...props} glyphName="ChevronLeftSmall">
      <path
        d="M11.9393398,12 L9.4696699,9.53033008 C9.17677668,9.23743686 9.17677668,8.76256312 9.4696699,8.4696699 C9.76256312,8.17677668 10.2374369,8.17677668 10.5303301,8.4696699 L14.0606602,12 L10.5303301,15.5303301 C10.2374369,15.8232233 9.76256312,15.8232233 9.4696699,15.5303301 C9.17677668,15.2374369 9.17677668,14.7625631 9.4696699,14.4696699 L11.9393398,12 Z"
        id="Small"
         
        fillRule="nonzero"
        transform="translate(11.655330, 12.000000) scale(-1, 1) translate(-11.655330, -12.000000) "
      />
    </Icon>
  );
}

ChevronLeftSmall.displayName = "ChevronLeftSmall";
