import CategoryCard from "./CategoryCard";

const CategoryCards = ({ title, list }) => {
  return (
    <div className="p-4">
      <div className="font-medium text-lg py-4">{title}</div>
      <div className="flex gap-6 overflow-hidden justify-between relative">
        {list.map((item) => (
          <CategoryCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
