const Mode = ({
    title = "Text",
    
}) => {

  return (
    <>
        <div className="inline-flex items-center space-x-2 border p-2  rounded-md hover:bg-gray-200  hover:shadow-lg transition duration-300 ease-in-out hover:cursor-pointer">
        


            
            
            <p className="text-lg font-semibold text-blue-500">{title}</p>

      </div>
    </>
  );
};

export default Mode;
