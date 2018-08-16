import React from "react"
import Icon from "../Icon";

export default function SquareThin(props) {
  return (
    <Icon {...props} glyphName="SquareThin">
      <path
        d="M5.5,5 C5.22385763,5 5,5.22385763 5,5.5 L5,18.5 C5,18.7761424 5.22385763,19 5.5,19 L18.5,19 C18.7761424,19 19,18.7761424 19,18.5 L19,5.5 C19,5.22385763 18.7761424,5 18.5,5 L5.5,5 Z M5.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,5.5 C4,4.67157288 4.67157288,4 5.5,4 Z"
        id="B"
         
        fillRule="nonzero"
      />
    </Icon>
  );
}

SquareThin.displayName = "SquareThin";
