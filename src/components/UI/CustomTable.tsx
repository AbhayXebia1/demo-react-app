import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

type tableData = { [key: string]: any }[];
type config = {
  label: string;
  render: (rowData: { [key: string]: any }) => string | number;
}[];

function CustomTable({
  data,
  config,
  keyFn,
}: {
  data: tableData;
  config: config;
  keyFn: Function;
}) {
  const renderedHeaders = config.map((column) => {
    return <TableCell key={column.label}>{column.label}</TableCell>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return <TableCell key={column.label}>{column.render(rowData)}</TableCell>;
    });

    return <TableRow key={keyFn(rowData)}>{renderedCells}</TableRow>;
  });

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>{renderedHeaders}</TableRow>
        </TableHead>
        <TableBody>
          {renderedRows}
          {renderedRows.length === 0 && (
            <TableRow>
              <TableCell colSpan={config.length}>
                No Records to display
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
