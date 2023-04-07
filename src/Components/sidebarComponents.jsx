import data from "../codeData";

function SidebarComponents({ setState }) {
  let sidebarItems = [];

  function getKeyNames() {
    data.forEach((item) => {
      let keyName = Object.keys(item)[0];
      sidebarItems.push(keyName);
      sidebarItems.sort();
    });
    return sidebarItems;
  }
  getKeyNames();

  const handleClick = (item) => {
    const arr = data.filter((e) => Object.keys(e)[0] === item);
    const filteredData = arr[0][item];
    setState(filteredData);
  };

  return (
    <div className="flex lg:flex-col justify-center items-center text-white h-[6vh] lg:h-auto w-max lg:w-auto">
      {sidebarItems.map((item, index) => {
        return (
          <button
            onClick={() => handleClick(item)}
            key={index}
            id={item}
            className="cursor-pointer hover hover:bg-rose-700 focus:bg-rose-700 lg:py-2 px-2 lg:w-full lg:border-b-2 border-gray-500 border-r-2 lg:border-r-0 text-center font-[Lato]"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default SidebarComponents;
