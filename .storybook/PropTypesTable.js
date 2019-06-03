import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  td,
  th {
    text-align: left;
    border: 1px solid ${props => props.theme.COLOR_KEYLINE_SOLID};
    padding: 4px;
  }
`;

const Required = styled.span`
  color: ${props => props.theme.COLOR_INTENT_DANGER};
`;

const PropTypesTable = ({ propDefinitions }) => {
  const props = propDefinitions.map(
    ({ property, propType = {}, required, defaultValue }) => {
      let type;
      if (propType.name === "enum") {
        type = propType.value.map(val => val.value).join(", \n");
      } else if (propType.name === "union") {
        type = propType.value.map(val => val.name).join(", \n");
      } else {
        type = propType.name;
      }

      return (
        <tr key={property}>
          <td>{property}</td>
          <td>{type}</td>
          <td>{String(defaultValue)}</td>
          <td>
            <Required>{required && "true"}</Required>
          </td>
        </tr>
      );
    }
  );

  return (
    <Table>
      <thead>
        <tr>
          <th>name</th>
          <th>type</th>
          <th>default</th>
          <th>isRequired</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </Table>
  );
};
export default PropTypesTable;
