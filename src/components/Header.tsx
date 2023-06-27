import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Header: React.FC = () => {
  return (
    <div className="tw-bg-white tw-w-full tw-py-4 tw-px-6">
      <div className="tw-w-full tw-flex tw-justify-between tw-items-center">
        <div className="tw-flex tw-gap-x-4">
          <MenuIcon fontSize="large" />
          <div className="tw-flex tw-items-center">
            <HomeIcon fontSize="large" color="success" />
            <h1 className="tw-text-2xl tw-font-medium">
              Visual pollution hotspots and impact overview
            </h1>
          </div>
        </div>
        <div className="tw-flex tw-gap-x-4">
          <SettingsOutlinedIcon fontSize="large" />
          <NotificationsOutlinedIcon fontSize="large" />
          <AccountCircleOutlinedIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Header;
