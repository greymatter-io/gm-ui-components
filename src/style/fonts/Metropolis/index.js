import { injectGlobal } from "styled-components";
import GMMetropolisRegular from "./Metropolis-Regular.otf";
import GMMetropolisRegularItalic from "./Metropolis-RegularItalic.otf";
import GMMetropolisMedium from "./Metropolis-Medium.otf";
import GMMetropolisMediumItalic from "./Metropolis-MediumItalic.otf";
import GMMetropolisSemiBold from "./Metropolis-SemiBold.otf";
import GMMetropolisSemiBoldItalic from "./Metropolis-SemiBoldItalic.otf";
import GMMetropolisBold from "./Metropolis-Bold.otf";
import GMMetropolisBoldItalic from "./Metropolis-BoldItalic.otf";
import GMMetropolisExtraBold from "./Metropolis-ExtraBold.otf";
import GMMetropolisExtraBoldItalic from "./Metropolis-ExtraBoldItalic.otf";
import GMMetropolisBlack from "./Metropolis-Black.otf";
import GMMetropolisBlackItalic from "./Metropolis-BlackItalic.otf";
import GMMetropolisLight from "./Metropolis-Light.otf";
import GMMetropolisLightItalic from "./Metropolis-LightItalic.otf";
import GMMetropolisExtraLight from "./Metropolis-ExtraLight.otf";
import GMMetropolisExtraLightItalic from "./Metropolis-ExtraLightItalic.otf";
import GMMetropolisThin from "./Metropolis-Thin.otf";
import GMMetropolisThinItalic from "./Metropolis-ThinItalic.otf";

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
