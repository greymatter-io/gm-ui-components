import styled from "styled-components";

import { Breadcrumbs } from "components/Breadcrumbs";
import { spacingScale } from "style/styleFunctions";

const HeaderBreadcrumbs = styled(Breadcrumbs)`
  color: white;
  padding-left: ${spacingScale(2)};
`;

export default HeaderBreadcrumbs;
