import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  border-collapse: collapse;
  margin: 60px 0;
  background-color: ${props => props.theme.colors.primaryWhite};
  box-shadow: 0px 0.8px 2px 0px rgba(0, 0, 0, 0.75);
  text-align: center;
`;

export const TableHead = styled.thead`
  background-color: ${props => props.theme.colors.blue};
`;

export const TableHeader = styled.th`
  padding: 10px 20px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
`;

export const TableBody = styled.tbody`
  background-color: #f9f9f9;
 
  }
`;

export const TableRow = styled.tr`
  text-transform: capitalize;
`;

export const TableData = styled.td`
  padding: 10px 20px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
`;
