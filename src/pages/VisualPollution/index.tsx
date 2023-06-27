import { useState } from 'react';

import SlideShow from '../../components/SlideShow';
import CustomSelect from '../../components/UI/CustomSelect';
import PriorityFilter from '../../components/PriorityFilter';

import ChartsSection from './ChartsSection';
import TableSection from './TableSection';
import MapChart from './MapChart';

const dropdownMenuItems = ['building', 'construction', 'graffiti'];

const VisualPollutionPage: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState(dropdownMenuItems[0]);
  const [content, setContent] = useState('');
  console.log(content);

  return (
    <div className="tw-h-full tw-w-full tw-p-5">
      <div className="tw-grid tw-grid-cols-2 tw-gap-3">
        <div className="tw-col-span-1 tw-flex tw-flex-col tw-gap-3">
          <div className="tw-flex tw-justify-between tw-items-center">
            <h2 className="tw-text-xl">Case distribution by VP Element</h2>
            <SlideShow values={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']} />
          </div>
          <div className="tw-bg-white tw-p-4 tw-rounded tw-grow">
            <div>
              <MapChart setTooltipContent={setContent} />
            </div>
          </div>
        </div>
        <div className="tw-col-span-1 tw-flex tw-flex-col tw-gap-3">
          <div className="tw-flex tw-justify-between tw-items-center">
            <PriorityFilter
              currentValues={{
                total: 10,
                highPriority: 3,
                medPriority: 4,
                lowPriority: 3,
              }}
              previousValues={{
                total: 20,
                highPriority: 10,
                medPriority: 4,
                lowPriority: 6,
              }}
            />
            <CustomSelect
              menuItems={dropdownMenuItems.map((v) => ({ label: v, value: v }))}
              selectedValue={selectedValue}
              handleSelection={(v: string) => setSelectedValue(v)}
            />
          </div>
          <ChartsSection />
          <div className="tw-bg-white tw-p-4 tw-rounded">
            <span className="tw-font-semibold tw-text-sm">
              Case Prioritisation
            </span>
            <div className="tw-py-2">
              <TableSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualPollutionPage;
