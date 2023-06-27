import { Chart } from 'react-google-charts';

const ChartsSection: React.FC = () => {
  return (
    <div className="tw-bg-white tw-p-4 tw-rounded">
      <div className="tw-w-full tw-grid tw-grid-cols-3">
        <div className="tw-col-span-1 tw-flex tw-flex-col">
          <span className="tw-font-semibold tw-text-sm">Case Type</span>
          <Chart
            chartType="PieChart"
            width="100%"
            height="240px"
            data={[
              ['Case Type', 'value'],
              ['New Case', 15],
              ['Recurring Case', 85],
            ]}
            options={{
              pieHole: 0.8,
              is3D: false,
              slices: {
                0: {
                  color: '#04BB46',
                  textStyle: { color: 'transparent' },
                },
                1: {
                  color: '#A5A5A5',
                  textStyle: { color: 'transparent' },
                },
              },
              legend: {
                position: 'bottom',
                // textStyle: { color: '#000000', fontSize: 12 },
              },
            }}
          />
        </div>
        <div className="tw-col-span-1 tw-flex tw-flex-col tw-pl-2 tw-border-l tw-border-solid tw-border-l-slate-300">
          <span className="tw-font-semibold tw-text-sm">
            Entity Responsible
          </span>
          <Chart
            chartType="PieChart"
            width="100%"
            height="240px"
            data={[
              ['Entity Responsible', 'value'],
              ['Violator', 25],
              ['Contractor', 75],
            ]}
            options={{
              pieHole: 0.8,
              is3D: false,
              slices: {
                0: {
                  color: '#04BB46',
                  textStyle: { color: 'transparent' },
                },
                1: {
                  color: '#000000',
                  textStyle: { color: 'transparent' },
                },
              },
              legend: {
                position: 'bottom',
                // textStyle: { color: '#000000', fontSize: 12 },
              },
            }}
          />
        </div>
        <div className="tw-col-span-1 tw-flex tw-flex-col tw-pl-2 tw-border-l tw-border-solid tw-border-l-slate-300">
          <span className="tw-font-semibold tw-text-sm">
            Top Impactful Elements
          </span>
          <Chart
            chartType="BarChart"
            width="100%"
            height="240px"
            data={[
              ['Impactful Element', 'New Case', 'Recurring Case', 'None'],
              ['Aluminium Cladding', 60, 40, 100 - (60 + 40)],
              ['Graffiti', 30, 25, 100 - (30 + 25)],
              ['Satellite Dish', 20, 15, 100 - (20 + 15)],
            ]}
            options={{
              chartArea: { width: '50%' },
              isStacked: true,
              hAxis: {
                gridlines: {
                  count: 0,
                },
                textPosition: 'none',
              },
              legend: {
                position: 'bottom',
              },
              bar: { groupWidth: '28%' },
              series: {
                0: { color: '#04BB46' },
                1: { color: '#DC3545' },
                2: { color: '#A5A5A5' },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
