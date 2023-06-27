import CustomTable from '../../components/UI/CustomTable';

const tableRows = [
  ['1800', 'Aluminium Cladding', 'Contractor', 20, 'High', 'High'],
  ['1805', 'Aluminium Cladding', 'Contractor', 10, 'High', 'High'],
  ['1810', 'Aluminium Cladding', 'Contractor', 20, 'High', 'High'],
  ['1820', 'Aluminium Cladding', 'Contractor', 30, 'High', 'High'],
  ['1830', 'Aluminium Cladding', 'Contractor', 10, 'High', 'High'],
  ['1840', 'Graffiti', 'Violator', 9, 'High', 'High'],
];

const TableSection: React.FC = () => {
  type columnHeader = { key: string; label: string };
  const tableHeaders: columnHeader[] = [
    { key: 'caseId', label: 'Case ID' },
    { key: 'visPE', label: 'Visual Pollution Element' },
    { key: 'entity', label: 'Entity Responsible' },
    { key: 'openFor', label: 'Open For' },
    { key: 'riskStatus', label: 'Risk Status' },
    { key: 'recurrenceRate', label: 'Recurrence Rate' },
  ];
  const config = tableHeaders.map((columnHeader) => {
    return {
      label: columnHeader.label,
      render: (rowData: { [key: string]: any }) =>
        rowData[columnHeader.key] || 'NA',
    };
  });
  const keyFn = (rowData: { [key: string]: any }): string => {
    return rowData.caseId;
  };

  const tableData = tableRows.map((rowData) => {
    const transformedRowData: { [key: string]: any } = {};
    tableHeaders.forEach((columnHeader, index) => {
      transformedRowData[columnHeader.key] = rowData[index];
    });
    return transformedRowData;
  });

  return <CustomTable keyFn={keyFn} data={tableData} config={config} />;
};

export default TableSection;
