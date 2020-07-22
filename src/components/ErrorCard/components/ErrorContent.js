import styled from "styled-components";
import { keen } from "style/theme";


const ErrorContent = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  display: inline-flex;
  flex-basis: 600px;
  flex-flow: row nowrap;
  font-size: ${({ theme }) => theme.FONT_SIZE_PAGE_TITLE};
  justify-content: center;
  margin: 4rem;
  padding: 8rem 4rem;
  padding-top: 8rem;
  padding-bottom: 8rem;
`;

ErrorContent.defaultProps = {
  theme: keen
};

export default ErrorContent;
