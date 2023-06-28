import { useState } from 'react';

import SideMenu from './components/SideMenu';
import Header from './components/Header';
import VisualPollutionPage from './pages/VisualPollution';

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';

const FallbackComponent: React.FC = () => (
  <div>The requested page does not exist</div>
);

const ErrorComponent: React.FC = () => <div>An error occurred!</div>;

const MENU_KEYS: string[] = [
  'gridView',
  'visualPollution',
  'municipalityView',
  'trends',
];
const DEFAULT_ACTIVE_COMPONENT_KEY = 'visualPollution';

const MENU_CONFIG: {
  [key: string]: {
    label: string;
    icon: any;
    component: React.FC;
  };
} = {
  gridView: {
    label: 'Grid View',
    icon: GridViewOutlinedIcon,
    component: FallbackComponent,
  },
  visualPollution: {
    label: 'Visual Pollution',
    icon: ConstructionOutlinedIcon,
    component: VisualPollutionPage,
  },
  municipalityView: {
    label: 'Municipality View',
    icon: LocationCityOutlinedIcon,
    component: FallbackComponent,
  },
  trends: {
    label: 'Trends',
    icon: TrendingUpOutlinedIcon,
    component: FallbackComponent,
  },
};

function App() {
  const [activeComponentKey, setActiveComponentKey] = useState(
    DEFAULT_ACTIVE_COMPONENT_KEY
  );

  const ActiveComponent =
    MENU_CONFIG[activeComponentKey]?.component || ErrorComponent;

  return (
    <div className="tw-h-screen tw-w-screen">
      <div className="tw-h-full tw-w-full tw-flex tw-overflow-auto tw-bg-slate-100">
        <SideMenu
          menuKeys={MENU_KEYS}
          menuConfig={MENU_CONFIG}
          activeComponentKey={activeComponentKey}
          pageSelectionHandler={(key: string) => setActiveComponentKey(key)}
        />
        <div className="tw-w-full tw-flex tw-flex-col">
          <Header />
          <div className="tw-p-5 tw-grow">
            <ActiveComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
