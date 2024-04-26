import { sidebarData, sidebarData2 } from "../constants/SidebarData";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const Sidebar = () => {
  const sidebarMenuData = sidebarData;
  const sidebarMenuData2 = sidebarData2;
  const sidebarStatus = useSelector((state) => state.sidebar.value);

  return (
    <>
      {sidebarStatus===1 && (
        <>
          <div className="sidebar mx-3 ">
            <div className="sidebar__main">
              {sidebarMenuData.map((menu, index) => (
                <div key={index}>
                  {Object.keys(menu).map((key, keyIndex) => (
                    <div key={keyIndex}>
                      <div className="">
                        {key !== "main" && key !== "settings" && (
                          <div className="flex h-10 pl-2 rounded-lg hover:bg-gray-100 font-light">
                            <h2 className="font-bold item-center flex items-center">
                              {key}
                              {key === "You" && (
                                <span>
                                  <MdKeyboardArrowRight className="text-xl" />
                                </span>
                              )}
                            </h2>
                          </div>
                        )}
                        {menu[key].map((item, itemIndex) => (
                          <Link to={item.path} key={itemIndex}>
                            <div className="flex items-center gap-5 h-10 pl-2 rounded-lg hover:bg-gray-100 font-normal text-sm">
                              <div className="">{item.icon}</div>
                              {item.name}
                            </div>
                          </Link>
                        ))}
                        <hr className="my-3" />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </>
      )
      }
      {sidebarStatus===2 && (
        <>
          <div className="sidebar mx-1 ">
            <div className="sidebar__main">
              {sidebarMenuData2.map((menu, index) => (
                <Link to={menu.path} key={index}>
                  <div className="flex flex-col justify-center items-center h-16 w-full p-2 rounded-lg hover:bg-gray-100 font-light cursor-pointer">
                    <span className="font-bold item-center flex">{menu.icon}</span>
                    <p className="text-[10px]">{menu.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
