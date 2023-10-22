const headerItems = [
  {
    title: "Grocery",
    src: "/grocery.png",
  },
  {
    title: "Mobiles",
    src: "/catmobile.png",
  },
  {
    title: "Fashion",
    src: "/catfashion.png",
  },
  {
    title: "Electronics",
    src: "/catelectronic.png",
  },
  {
    title: "Home & Furniture",
    src: "/cathomeandfurniture.jpg",
  },
  {
    title: "Appliance",
    src: "/catappliances.png",
  },
  {
    title: "Travel",
    src: "/cattravel.png",
  },
  {
    title: "Beauty Toys & More",
    src: "/catbeautyandtoys.png",
  },
];

const Header = () => {
  return (
    <div className="flex flex-wrap justify-evenly py-2">
      {headerItems.map((headeritem) => (
        <div key={headeritem.title} 
        className="flex flex-col items-center p-1">
          <img src={headeritem.src} className="w-10" />
          <span className=" text-xs md:text-sm w-20 text-center font-medium">{headeritem.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Header;
