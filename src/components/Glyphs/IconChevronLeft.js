import React from "react";
import Icon from "../Icon";

export default function ChevronLeft(props) {
  return (
    <Icon {...props} glyphName="ChevronLeft">
      <path
        d="M8.4696699,7.53033007 C8.17677668,7.23743685 8.17677668,6.76256311 8.4696699,6.46966989 C8.76256312,6.17677667 9.23743686,6.17677667 9.53033008,6.46966989 L15.0606602,12 L9.53033008,17.5303301 C9.23743686,17.8232233 8.76256312,17.8232233 8.4696699,17.5303301 C8.17677668,17.2374369 8.17677668,16.7625632 8.4696699,16.4696699 L12.9393398,12 L8.4696699,7.53033007 Z"
        id="ChevronLeft"
         
        fillRule="nonzero"
        transform="translate(11.655330, 12.000000) scale(-1, 1) translate(-11.655330, -12.000000) "
      />
    </Icon>
  );
}

ChevronLeft.displayName = "ChevronLeft";
