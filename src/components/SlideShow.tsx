import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

const SlideShow = ({ values }: { values: string[] }) => {
  return (
    <div className="tw-bg-white tw-py-4 tw-px-2 tw-rounded-lg">
      <div className="tw-flex tw-items-center tw-gap-3">
        <PlayCircleFilledOutlinedIcon color="success" />
        <div className="tw-flex tw-flex-col tw-gap-2">
          <div className="tw-w-full tw-border tw-border-solid tw-border-r-slate-300" />
          <div className="tw-w-full tw-flex tw-gap-x-3">
            {values.map((v) => (
              <span key={v} className="tw-text-sm">
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
