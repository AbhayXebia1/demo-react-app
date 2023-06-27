import orgLogo from '../images/orgLogo.svg';

const SideMenu = ({
  menuKeys,
  menuConfig,
}: {
  menuKeys: string[];
  menuConfig: {
    [key: string]: {
      label: string;
      icon: any;
      component: React.FC;
      isActive: boolean;
    };
  };
}) => {
  return (
    <div className="tw-bg-white tw-w-[6%] tw-min-w-[6rem] tw-border-r-2 tw-border-solid tw-border-r-slate-300">
      <div
        id="logoContainer"
        className="tw-flex tw-justify-center tw-object-contain tw-my-4 tw-mx-2"
      >
        <img src={orgLogo} alt="orgLogo" />
      </div>
      <nav className="tw-flex tw-flex-col tw-gap-6 tw-items-center tw-mt-6">
        {menuKeys.map((key) => {
          const { icon: Icon, isActive } = menuConfig[key];
          return (
            <div
              key={key}
              className={`tw-w-full tw-cursor-pointer tw-flex tw-justify-center ${
                isActive
                  ? 'tw-border-l-4 tw-border-solid tw-border-green-700'
                  : ''
              }`}
            >
              <Icon color={isActive ? 'success' : 'inherit'} fontSize="large" />
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default SideMenu;
