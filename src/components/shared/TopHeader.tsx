
type TopHeaderProps = {
  heading: string,
  subHeading: string,
}

const TopHeader = ({heading, subHeading}:TopHeaderProps) => {
  return (
    <header className="flex items-center justify-between p-6  border-b border-gray-400 sticky top-0 z-10">
      <div>
        <h1 className="text-2xl font-bold text-black">
          {heading}
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          {subHeading}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-sm text-right">
          <p className="font-semibold text-white">John Adebayo</p>
          <p className="text-xs text-gray-400">xxxInitiator</p>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
