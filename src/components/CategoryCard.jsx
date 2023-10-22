const CategoryCard = ({ imgsrc, title, subtitle }) => {
  return (
    <div className="cursor-pointer border px-2 h-[220px] shrink-0 w-[140px] flex flex-col items-center p-2 justify-between">
      <img src={imgsrc} className="max-h-[120px] my-auto" />
      <div className="flex flex-col items-center">
        <span className="text-xs text-center"> {title}</span>
        <span className="text-xs font-medium">{subtitle}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
