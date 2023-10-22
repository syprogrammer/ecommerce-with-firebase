import CategoryCard from "./CategoryCard";

const CategoryCards = ({ title, list }) => {
  return (
    <div className="p-4">
      <div className="font-medium text-lg py-4">{title}</div>
      <div className="flex gap-3 md:gap-6 flex-wrap overflow-hidden justify-center md:justify-between">
        {list.map((item) => (
          <CategoryCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
