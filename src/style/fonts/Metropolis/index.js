import { injectGlobal } from "styled-components";
import GMMetropolisRegular from "./Metropolis-Regular.ttf";
import GMMetropolisRegularItalic from "./Metropolis-RegularItalic.ttf";
import GMMetropolisMedium from "./Metropolis-Medium.ttf";
import GMMetropolisMediumItalic from "./Metropolis-MediumItalic.ttf";
import GMMetropolisSemiBold from "./Metropolis-SemiBold.ttf";
import GMMetropolisSemiBoldItalic from "./Metropolis-SemiBoldItalic.ttf";
import GMMetropolisBold from "./Metropolis-Bold.ttf";
import GMMetropolisBoldItalic from "./Metropolis-BoldItalic.ttf";
import GMMetropolisExtraBold from "./Metropolis-ExtraBold.ttf";
import GMMetropolisExtraBoldItalic from "./Metropolis-ExtraBoldItalic.ttf";
import GMMetropolisBlack from "./Metropolis-Black.ttf";
import GMMetropolisBlackItalic from "./Metropolis-BlackItalic.ttf";
import GMMetropolisLight from "./Metropolis-Light.ttf";
import GMMetropolisLightItalic from "./Metropolis-LightItalic.ttf";
import GMMetropolisExtraLight from "./Metropolis-ExtraLight.ttf";
import GMMetropolisExtraLightItalic from "./Metropolis-ExtraLightItalic.ttf";
import GMMetropolisThin from "./Metropolis-Thin.ttf";
import GMMetropolisThinItalic from "./Metropolis-ThinItalic.ttf";

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: normal;
  font-weight: 400;
  src: url(${GMMetropolisRegular});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: italic;
  font-weight: 400;
  src: url(${GMMetropolisRegularItalic});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: normal;
  font-weight: 500;
  src: url(${GMMetropolisMedium});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: italic;
  font-weight: 500;
  src: url(${GMMetropolisMediumItalic});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: normal;
  font-weight: 600;
  src: url(${GMMetropolisSemiBold});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: italic;
  font-weight: 600;
  src: url(${GMMetropolisSemiBoldItalic});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: normal;
  font-weight: 700;
  src: url(${GMMetropolisBold});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: italic;
  font-weight: 700;
  src: url(${GMMetropolisBoldItalic});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: normal;
  font-weight: 800;
  src: url(${GMMetropolisExtraBold});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: italic;
  font-weight: 800;
  src: url(${GMMetropolisExtraBoldItalic});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: normal;
  font-weight: 900;
  src: url(${GMMetropolisBlack});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: italic;
  font-weight: 900;
  src: url(${GMMetropolisBlackItalic});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: normal;
  font-weight: 300;
  src: url(${GMMetropolisLight});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: italic;
  font-weight: 300;
  src: url(${GMMetropolisLightItalic});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: normal;
  font-weight: 200;
  src: url(${GMMetropolisExtraLight});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: italic;
  font-weight: 200;
  src: url(${GMMetropolisExtraLightItalic});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: normal;
  font-weight: 100;
  src: url(${GMMetropolisThin});
}
`;

injectGlobal`
@font-face {
  font-family: "GMMetropolis";
  font-style: italic;
  font-weight: 100;
  src: url(${GMMetropolisThinItalic});
}
`;
