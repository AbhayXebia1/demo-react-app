import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type values = {
  total: number;
  highPriority: number;
  medPriority: number;
  lowPriority: number;
};

const PriorityFilter = ({
  currentValues,
  previousValues,
}: {
  currentValues: values;
  previousValues: values;
}) => {
  return (
    <div className="tw-bg-white tw-py-2 tw-px-2 tw-rounded-lg">
      <div className="tw-flex tw-items-center tw-gap-3">
        <div className="tw-flex tw-items-center tw-gap-1">
          <OfflineBoltIcon color="success" />
          <div className="tw-flex tw-flex-col">
            <span className="tw-text-sm">Total Cases</span>
            <div className="tw-flex">
              <span className="tw-text-black tw-font-semibold tw-text-sm">
                {currentValues.total}
              </span>
              <span className="tw-text-xs">
                {currentValues.total - previousValues.total > 0 ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                )}
                {`${Math.abs(
                  currentValues.total - previousValues.total
                )} vs.PM`}
              </span>
            </div>
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-pl-1 tw-border-l tw-border-solid tw-border-l-slate-300">
          <span className="tw-text-sm">High Priority</span>
          <div className="tw-flex tw-items-center">
            <span className="tw-text-red-500 tw-font-semibold tw-text-sm">
              {currentValues.highPriority}
            </span>
            <span className="tw-text-xs">
              {currentValues.highPriority - previousValues.highPriority > 0 ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
              {`${Math.abs(
                currentValues.highPriority - previousValues.highPriority
              )} vs.PM`}
            </span>
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-pl-1 tw-border-l tw-border-solid tw-border-l-slate-300">
          <span className="tw-text-sm">Med. Priority</span>
          <div className="tw-flex tw-items-center">
            <span className="tw-text-yellow-500 tw-font-semibold tw-text-sm">
              {currentValues.medPriority}
            </span>
            <span className="tw-text-xs">
              {currentValues.medPriority - previousValues.medPriority > 0 ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
              {`${Math.abs(
                currentValues.medPriority - previousValues.medPriority
              )} vs.PM`}
            </span>
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-pl-1 tw-border-l tw-border-solid tw-border-l-slate-300">
          <span className="tw-text-sm">Low Priority</span>
          <div className="tw-flex tw-items-center">
            <span className="tw-text-green-500 tw-font-semibold tw-text-sm">
              {currentValues.lowPriority}
            </span>
            <span className="tw-text-xs">
              {currentValues.lowPriority - previousValues.lowPriority > 0 ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
              {`${Math.abs(
                currentValues.lowPriority - previousValues.lowPriority
              )} vs.PM`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriorityFilter;
