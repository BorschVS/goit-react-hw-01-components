import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableData,
  TableHeader,
} from './TransactionHistory.styled';

export const TransactionsHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </TableHead>
      {transactions.map(({ id, type, amount, currency }) => {
        return (
          <TableBody key={id}>
            <TableRow>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          </TableBody>
        );
      })}
    </Table>
  );
};
