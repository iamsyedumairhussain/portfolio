const Services = ({ item }) => {
  return (
    <div className={`bg-[#F6EBFE] text-center`}>

      <div className="w-auto h-auto mx-2 sm:mx-4 my-1 xxs:my-2 sm:my-[17px]">
        <div className="p-2 flex items-center justify-center">
          <div
            key={item.id}
            className="h-24 w-24 sm:h-10 sm:w-28 md:h-10 md:w-10 lg:h-8 lg:w-10 flex items-center justify-center"
          >
            <img
              src={item.image}
              alt={`tech-${item.id}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>

        </div>
        <p
          className={`mt-1 text-[8px] xxs:text-[9px] sm:text-[16px] font-normal px-[0.90rem] sm:px-[1rem] text-wrap text-gray-500`}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default Services;
