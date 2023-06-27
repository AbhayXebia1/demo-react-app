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

const MENU_CONFIG: {
  [key: string]: {
    label: string;
    icon: any;
    component: React.FC;
    isActive: boolean;
  };
} = {
  gridView: {
    label: 'Grid View',
    icon: GridViewOutlinedIcon,
    component: FallbackComponent,
    isActive: false,
  },
  visualPollution: {
    label: 'Visual Pollution',
    icon: ConstructionOutlinedIcon,
    component: VisualPollutionPage,
    isActive: true,
  },
  municipalityView: {
    label: 'Municipality View',
    icon: LocationCityOutlinedIcon,
    component: FallbackComponent,
    isActive: false,
  },
  trends: {
    label: 'Trends',
    icon: TrendingUpOutlinedIcon,
    component: FallbackComponent,
    isActive: false,
  },
};

function App() {
  const ActiveComponent =
    Object.values(MENU_CONFIG).find((item) => item.isActive)?.component ||
    ErrorComponent;

  return (
    <div className="tw-h-screen tw-w-screen">
      <div className="tw-h-full tw-w-full tw-flex tw-overflow-auto tw-bg-slate-100">
        <SideMenu menuKeys={MENU_KEYS} menuConfig={MENU_CONFIG} />
        <div className="tw-w-full">
          <Header />
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
