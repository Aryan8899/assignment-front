import React, { useState,useEffect } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import image from "./image.png"; // Adjust the path based on where your image is located
import {
  MdEmail,
  MdChat,
  MdCalendarToday,
  MdDashboard,
  MdShoppingCart,
  MdPeople,
  MdViewList,
  MdOutlineViewModule,
  MdFormatListNumbered,
  MdCategory,
  MdPieChart,
  MdTableChart,
  MdMap,
  MdSupport,
  MdDocumentScanner,
} from "react-icons/md";

const Sidebar = ({ isOpenSidebar, darkMode, onToggleSidebar}) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(isOpenSidebar || false); // Control sidebar state manually
  const [isHovered, setIsHovered] = useState(false);
  const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);
  const [isFormsOpen, setIsFormsOpen] = useState(false);
  const [isChartsOpen, setIsChartsOpen] = useState(false);
  

  const handleSetActive = (item) => setActiveItem(item);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleEcommerce = () => setIsEcommerceOpen(!isEcommerceOpen);
  const toggleComponents = () => setIsComponentsOpen(!isComponentsOpen);
  const toggleForms = () => setIsFormsOpen(!isFormsOpen);
  const toggleCharts = () => setIsChartsOpen(!isChartsOpen);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
    onToggleSidebar(); // Call the prop function to update the parent state
  }
  
  useEffect(() => {
    setIsOpen(isOpenSidebar);
  }, [isOpenSidebar]);

  return (
    <div
      className={`h-screen shadow-md overflow-y-auto transition-all duration-300 ease-in-out ${
        isOpen || isHovered ? "w-64" : "w-20"
      } ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} lg:block hidden ${
        isOpen ? "block" : "hidden lg:block"
      }`}
      onMouseEnter={() => !isOpen && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="my-2 flex justify-between items-center px-4">
        <div className="flex items-center">
          <img
            className={`transition-all duration-300 ease-in-out ${
              isOpen || isHovered ? "h-10 w-12" : "h-10 w-full"
            }`}
            src={image}
            alt="logo"
          />
          {(isOpenSidebar || isHovered) && (
            <h1 className="ml-2 text-xl font-bold text-black-600">Vuexy</h1>
          )}
        </div>
        <button onClick={toggleSidebar} className="text-purple-600 text-xl">
          {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
        </button>
      </div>

      <ul className="p-4">
        <SidebarItem
          title="Dashboard"
          icon={<MdDashboard />}
          active={activeItem === "Dashboard"}
          onClick={() => handleSetActive("Dashboard")}
          isOpen={isOpen || isHovered}
        />

        <SidebarItem
          title="Layouts"
          icon={<MdViewList />}
          active={activeItem === "Layouts"}
          onClick={() => handleSetActive("Layouts")}
          isOpen={isOpen || isHovered}
        />

        <SidebarItem
          title="Front Pages"
          icon={<MdOutlineViewModule />}
          active={activeItem === "Front Pages"}
          onClick={() => handleSetActive("Front Pages")}
          isOpen={isOpen || isHovered}
        />

        {(isOpen || isHovered) && (
          <div className="text-gray-400 text-sm mt-4 mb-2">APPS & PAGES</div>
        )}

        <SidebarItem
          title="Email"
          icon={<MdEmail />}
          active={activeItem === "Email"}
          onClick={() => handleSetActive("Email")}
          isOpen={isOpen || isHovered}
        />

        <SidebarItem
          title="Chat"
          icon={<MdChat />}
          active={activeItem === "Chat"}
          onClick={() => handleSetActive("Chat")}
          isOpen={isOpen || isHovered}
        />

        <SidebarItem
          title="Calendar"
          icon={<MdCalendarToday />}
          active={activeItem === "Calendar"}
          onClick={() => handleSetActive("Calendar")}
          isOpen={isOpen || isHovered}
        />

        <SidebarItem
          title="Kanban"
          icon={<MdFormatListNumbered />}
          active={activeItem === "Kanban"}
          onClick={() => handleSetActive("Kanban")}
          isOpen={isOpen || isHovered}
        />

        <li
          className="flex items-center py-2 px-4 hover:bg-purple-100 rounded-lg cursor-pointer text-gray-600"
          onClick={toggleEcommerce}
        >
          <span className="mr-3 text-2xl">
            <MdShoppingCart />
          </span>
          {(isOpen || isHovered) && (
            <>
              <span className="flex-1">eCommerce</span>
              <span>{isEcommerceOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
            </>
          )}
        </li>

        {isEcommerceOpen && (isOpen || isHovered) && (
          <ul className="pl-8">
            <SidebarItem
              title="Dashboard"
              icon={<MdDashboard />}
              active={activeItem === "eCommerce Dashboard"}
              onClick={() => handleSetActive("eCommerce Dashboard")}
              isOpen={isOpen || isHovered}
            />
            <SidebarItem
              title="Products"
              icon={<MdShoppingCart />}
              active={activeItem === "Products"}
              onClick={() => handleSetActive("Products")}
              isOpen={isOpen || isHovered}
            />
            <SidebarItem
              title="Order"
              icon={<MdShoppingCart />}
              active={activeItem === "Order"}
              onClick={() => handleSetActive("Order")}
              isOpen={isOpen || isHovered}
            />
            <SidebarItem
              title="Customer"
              icon={<MdPeople />}
              active={activeItem === "Customer"}
              onClick={() => handleSetActive("Customer")}
              isOpen={isOpen || isHovered}
            />
          </ul>
        )}

        {(isOpen || isHovered) && (
          <div className="text-gray-400 text-sm mt-4 mb-2">COMPONENTS</div>
        )}
        <li
          className="flex items-center py-2 px-4 hover:bg-purple-100 rounded-lg cursor-pointer text-gray-600"
          onClick={toggleComponents}
        >
          <span className="mr-3 text-2xl">
            <MdCategory />
          </span>
          {(isOpen || isHovered) && (
            <>
              <span className="flex-1">Components</span>
              <span>
                {isComponentsOpen ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </>
          )}
        </li>

        {isComponentsOpen && (isOpen || isHovered) && (
          <ul className="pl-8">
            <SidebarItem
              title="Cards"
              icon={<MdCategory />}
              active={activeItem === "Cards"}
              onClick={() => handleSetActive("Cards")}
              isOpen={isOpen || isHovered}
            />
            <SidebarItem
              title="User Interface"
              icon={<MdPeople />}
              active={activeItem === "User Interface"}
              onClick={() => handleSetActive("User Interface")}
              isOpen={isOpen || isHovered}
            />
          </ul>
        )}

        {(isOpen || isHovered) && (
          <div className="text-gray-400 text-sm mt-4 mb-2">FORMS & TABLES</div>
        )}
        <li
          className="flex items-center py-2 px-4 hover:bg-purple-100 rounded-lg cursor-pointer text-gray-600"
          onClick={toggleForms}
        >
          <span className="mr-3 text-2xl">
            <MdOutlineViewModule />
          </span>
          {(isOpen || isHovered) && (
            <>
              <span className="flex-1">Forms</span>
              <span>{isFormsOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
            </>
          )}
        </li>

        {isFormsOpen && (isOpen || isHovered) && (
          <ul className="pl-8">
            <SidebarItem
              title="Form Elements"
              icon={<MdOutlineViewModule />}
              active={activeItem === "Form Elements"}
              onClick={() => handleSetActive("Form Elements")}
              isOpen={isOpen || isHovered}
            />
            <SidebarItem
              title="Form Layouts"
              icon={<MdViewList />}
              active={activeItem === "Form Layouts"}
              onClick={() => handleSetActive("Form Layouts")}
              isOpen={isOpen || isHovered}
            />
          </ul>
        )}

        <SidebarItem
          title="Tables"
          icon={<MdTableChart />}
          active={activeItem === "Tables"}
          onClick={() => handleSetActive("Tables")}
          isOpen={isOpen || isHovered}
        />

        {(isOpen || isHovered) && (
          <div className="text-gray-400 text-sm mt-4 mb-2">CHARTS & MAPS</div>
        )}
        <li
          className="flex items-center py-2 px-4 hover:bg-purple-100 rounded-lg cursor-pointer text-gray-600"
          onClick={toggleCharts}
        >
          <span className="mr-3 text-2xl">
            <MdPieChart />
          </span>
          {(isOpen || isHovered) && (
            <>
              <span className="flex-1">Charts</span>
              <span>{isChartsOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
            </>
          )}
        </li>

        {isChartsOpen && (isOpen || isHovered) && (
          <ul className="pl-8">
            <SidebarItem
              title="Apex"
              icon={<MdPieChart />}
              active={activeItem === "Apex"}
              onClick={() => handleSetActive("Apex")}
              isOpen={isOpen || isHovered}
            />
            <SidebarItem
              title="ChartJS"
              icon={<MdPieChart />}
              active={activeItem === "ChartJS"}
              onClick={() => handleSetActive("ChartJS")}
              isOpen={isOpen || isHovered}
            />
          </ul>
        )}

        <SidebarItem
          title="Leaflet Maps"
          icon={<MdMap />}
          active={activeItem === "Leaflet Maps"}
          onClick={() => handleSetActive("Leaflet Maps")}
          isOpen={isOpen || isHovered}
        />

        {(isOpen || isHovered) && (
          <div className="text-gray-400 text-sm mt-4 mb-2">MISC</div>
        )}
        <SidebarItem
          title="Support"
          icon={<MdSupport />}
          active={activeItem === "Support"}
          onClick={() => handleSetActive("Support")}
          isOpen={isOpen || isHovered}
        />
        <SidebarItem
          title="Documentation"
          icon={<MdDocumentScanner />}
          active={activeItem === "Documentation"}
          onClick={() => handleSetActive("Documentation")}
          isOpen={isOpen || isHovered}
        />
      </ul>


      {/* Sidebar content */}
      <div className="p-4">
        <button onClick={onToggleSidebar} className="lg:hidden absolute top-4 right-4 text-purple-600 text-xl">
          <FaAngleLeft />
        </button>
        {/* ... rest of the sidebar content */}
      </div>

    </div>
  );
};

const SidebarItem = ({ title, icon, active, onClick, isOpen }) => {
  return (
    <li
      className={`flex items-center py-2 px-4 hover:bg-purple-100 rounded-lg cursor-pointer ${
        active ? "text-purple-600 font-bold" : "text-gray-600"
      }`}
      onClick={onClick}
    >
      <span className={`mr-3 text-2xl ${!isOpen ? "mx-auto" : ""}`}>{icon}</span>
      {isOpen && (
        <>
          <span className="flex-1">{title}</span>
          {active && (
            <span className="ml-auto h-2 w-2 rounded-full bg-purple-600"></span>
          )}
        </>
      )}
    </li>
  );
};

export default Sidebar;
