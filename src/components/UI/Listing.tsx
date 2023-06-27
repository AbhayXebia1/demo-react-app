const Listing = ({
  tableHeaders,
  tableRows,
}: {
  tableHeaders: string[];
  tableRows: any[][];
}) => {
  return (
    <>
      <div
        className={`tw-grid tw-grid-cols-${tableHeaders.length} tw-grid-flow-col tw-gap-x-2 tw-items-center tw-py-2`}
      >
        {tableHeaders.map((header, index) => {
          return (
            <span key={header} className={`tw-col-span-1 tw-flex`}>
              <span className="tw-text-xs tw-font-medium tw-text-black tw-text-center">
                {header}
              </span>
            </span>
          );
        })}
      </div>
      {!!tableRows?.length && (
        <ul className="tw-max-h-[20vh] tw-overflow-y-auto">
          {tableRows.map((rowData) => {
            return (
              <li
                key={rowData[0]}
                className={`tw-grid tw-grid-cols-${tableHeaders.length} tw-grid-flow-col tw-gap-x-2 tw-items-center tw-py-2`}
              >
                {rowData.map((cellValue, index) => {
                  return (
                    <div
                      key={`${cellValue}-${index}`}
                      className={`tw-col-span-1 tw-flex`}
                    >
                      <span className="tw-text-xs tw-text-black tw-text-center">
                        {cellValue || 'N/A'}
                      </span>
                    </div>
                  );
                })}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Listing;
