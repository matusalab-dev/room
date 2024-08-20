const CountBadge = ({ Qty, icon }) => {
  return (
    <span className="relative flex items-center sm:mr-1">
      {icon}
      <sup className="absolute left-5 z-50 m-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-primary-black font-primary text-sm font-medium text-primary-white">
        {Qty}
      </sup>
    </span>
  );
};

export default CountBadge;
