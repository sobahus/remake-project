import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "../ui/menubar";
  import {
    House,
    SquareActivity,
    Router,
    CircleDollarSign,
    Radio,
    ScrollText,
    FileClock,
    Ticket,
    ClockFading,
    Phone,
    Route,
    Send,
    Menu,
  } from "lucide-react";
  
  const MenuNavbar = () => {
    const navMenu = [
      { name: "Dashboard", link: "#", icon: <House className="w-4 h-4" /> },
      { name: "Monitoring", link: "#", icon: <SquareActivity className="w-4 h-4" /> },
      { name: "Router", link: "#", icon: <Router className="w-4 h-4" /> },
      { name: "Hotspot", link: "#", icon: <Radio className="w-4 h-4" /> },
      { name: "PPPoE", link: "#", icon: <Route className="w-4 h-4" /> },
      { name: "Invoice", link: "#", icon: <FileClock className="w-4 h-4" /> },
      { name: "Billing", link: "#", icon: <CircleDollarSign className="w-4 h-4" /> },
      { name: "Telegram", link: "#", icon: <Send className="w-4 h-4" /> },
      { name: "Accounting", link: "#", icon: <ScrollText className="w-4 h-4" /> },
      { name: "WhatsApp", link: "#", icon: <Phone className="w-4 h-4" /> },
      { name: "Log", link: "#", icon: <ClockFading className="w-4 h-4" /> },
      { name: "Ticket", link: "#", icon: <Ticket className="w-4 h-4" /> },
    ];
  
    return (
      <div className="w-full px-4 py-2 border-none md:border-t-1 lg:border-t-1">
        {/* Mobile View: Hamburger Menu */}
        <div className="sm:hidden flex justify-between items-center">
          <Menubar className="border-none">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer p-2 hover:bg-gray-100 rounded-md">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Menu</span>
              </MenubarTrigger>
              <MenubarContent className="max-h-[80vh] overflow-y-auto">
                {navMenu.map((menu, index) => (
                  <MenubarItem 
                    key={index} 
                    className="flex items-center gap-3 px-4 py-2"
                    asChild
                  >
                    <a href={menu.link}>
                      {menu.icon}
                      <span>{menu.name}</span>
                    </a>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
  
        {/* Tablet View: Compact Menu */}
        <div className="hidden sm:flex lg:hidden justify-center">
          <div className="flex flex-wrap justify-center gap-2 ">
            {navMenu.map((menu, index) => (
              <a
                key={index}
                href={menu.link}
                className="flex flex-wrap items-center gap-1 hover:bg-gray-100 rounded-md transition text-xs"
                title={menu.name}
              >
                <div className="p-1">{menu.icon}</div>
                <span className="truncate w-full">{menu.name}</span>
              </a>
            ))}
          </div>
        </div>
  
        {/* Desktop View: Full Menu */}
        <div className="hidden lg:flex justify-center">
          <div className="flex flex-wrap gap-4">
            {navMenu.map((menu, index) => (
              <a
                key={index}
                href={menu.link}
                className="flex items-center gap-1 px-2 py-2 hover:bg-gray-100 rounded-md transition text-sm"
              >
                {menu.icon}
                <span>{menu.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default MenuNavbar;