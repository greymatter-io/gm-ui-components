import React from "react";
import styled from "styled-components";
import { FONT_SIZE_BASE, FONT_WEIGHT_HEADING, BORDER_RADIUS_BASE, PADDING_BASE, LINE_HEIGHT_BASE, COLOR_HIGHLIGHT, FONT_WEIGHT_BASE } from "../../style/styleVariables";


const LongformText = styled.div`
  line-height: ${LINE_HEIGHT_BASE};
  font-size: ${FONT_SIZE_BASE};

  & > *{
    max-width: 660px;
  }

  & > img,
  & > iframe,
  & > video,
  & > embed {
    max-width: none;
  }

  h1,
  h2, 
  h3,
  h4,
  h5,
  h6 {

  }

  p {

  }

  ol,
  ul {

  }

  li {

  }

  hr {

  }

  strong, b {
    font-weight: ${parseInt(FONT_WEIGHT_BASE, 10) + 200};
  }

  em, i {

  }

  a {
    color: ${COLOR_HIGHLIGHT};

    &:hover {
      opacity: .8;
    }
  }
`;

export default LongformText;