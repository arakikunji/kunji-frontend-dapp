type StrategyInformationTabProps = {
  title: string;
};

const StrategyInformationTab = ({
  title,
  children,
}: React.PropsWithChildren<StrategyInformationTabProps>) => {
  return (
    <div className="flex flex-col space-y-6 rounded-3xl bg-gradient-custom-90.76deg p-8">
      <p className="text-2xl font-bold leading-8 text-white">{title}</p>
      <p>{children}</p>
    </div>
  );
};

export default StrategyInformationTab;
