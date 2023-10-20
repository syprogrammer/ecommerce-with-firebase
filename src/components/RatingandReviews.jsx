const RatingsAndReviews = () => {
  return (
    <div className="border ">
      <div className="flex justify-between p-5">
        <span className="text-lg font-medium">Ratings & Reviews</span>
        <button className="shadow-md px-5 py-2">Rate Product</button>
      </div>

      <div className="flex gap-4 p-5">
        <div className="flex flex-col gap-1 w-20">
          <span className="text-2xl">4.1 ★</span>
          <span className="text-gray-500 text-sm">73 Ratings & 4 Reviews</span>
        </div>

        <div className="flex flex-col gap-2 text-xs">
          <div className="flex gap-2 items-center ">
            <span>5 ★</span>
            <div className="bg-gray-400 rounded-full w-36 h-1">
              <div className="w-36 h-full bg-green-700 rounded-full"></div>
            </div>
            <span className="text-gray-500">30</span>
          </div>

          <div className="flex gap-2 items-center ">
            <span>4 ★</span>
            <div className="bg-gray-400 rounded-full w-36 h-1">
              <div className="w-32 h-full bg-green-700 rounded-full"></div>
            </div>
            <span className="text-gray-500">22</span>
          </div>

          <div className="flex gap-2 items-center ">
            <span>3 ★</span>
            <div className="bg-gray-400 rounded-full w-36 h-1">
              <div className="w-28 h-full bg-green-700 rounded-full"></div>
            </div>
            <span className="text-gray-500">15</span>
          </div>

          <div className="flex gap-2 items-center ">
            <span>2 ★</span>
            <div className="bg-gray-400 rounded-full w-36 h-1">
              <div className="w-20 h-full bg-orange-500 rounded-full"></div>
            </div>
            <span className="text-gray-500">10</span>
          </div>

          <div className="flex gap-2 items-center ">
            <span>1 ★</span>
            <div className="bg-gray-400 rounded-full w-36 h-1">
              <div className="w-16 h-full bg-orange-700 rounded-full"></div>
            </div>
            <span className="text-gray-500">5</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-5">
        <div className="flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="rating bg-green-700 flex gap-1 items-center text-white text-sm px-1">
              4.2
              <img src="/staricon.svg" />
            </div>
            <span className="font-medium">Must buy!</span>
          </div>
          <span className="text-sm">it just best</span>
          <div className="flex justify-between text-gray-500 text-xs">
           
            <div className="flex gap-1 items-center w-[80%]">
             <span className="">Kshetra Mohan das</span>
              <img src="/certifiedicon.svg" className="w-4"/>
              Cetified Buyer,Bhubaneswar Aug 2021

            </div>
            <div className="flex items-center gap-3 ">
              <div className="flex items-center gap-1">
                <img src="/likeicon.svg" className="text-gray-500" />
                <span>2</span>
              </div>
              <div className="flex items-center gap-1 pt-1">
                <img src="/dislikeicon.svg" className="-scale-y-100" />
                <span>2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;
