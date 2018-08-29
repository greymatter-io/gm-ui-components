import styled from "styled-components";
import PropTypes from "prop-types";

const TableColumn = styled.col`
  width: ${props => props.colWidth};
  /* At screen widths smaller than 540px, let the 
  first column span the full width of the table  */
  @media (max-width: 540px) {
    &:not(:first-child) {
      width: 0;
    }
    &:first-child {
      width: 100%;
    }
  }
`;

TableColumn.displayName = "TableColumn";

TableColumn.propTypes = {
  colWidth: PropTypes.string
};

export default TableColumn;
