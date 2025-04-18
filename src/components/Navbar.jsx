import {
  House,
  User,
  SunMoon,
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
  ShareIcon,
  Send,
} from "lucide-react";

const Navbar = () => {
  const navMenu = [
    {
      name: "Dashboard",
      link: "#",
      icon: <House className="w-4 h-4" />,
    },
    {
      name: "Monitoring",
      link: "#",
      icon: <SquareActivity className="w-4 h-4" />,
    },
    {
      name: "Router",
      link: "#",
      icon: <Router className="w-4 h-4" />,
    },
    {
      name: "Hotspot",
      link: "#",
      icon: <Radio className="w-4 h-4" />,
    },
    {
      name: "PPPoE",
      link: "#",
      icon: <Route className="w-4 h-4" />,
    },
    {
      name: "Invoice",
      link: "#",
      icon: <FileClock className="w-4 h-4" />,
    },
    {
      name: "Billing",
      link: "#",
      icon: <CircleDollarSign className="w-4 h-4" />,
    },
    {
      name: "Telegram",
      link: "#",
      icon: <Send className="w-4 h-4" />,
    },
    {
      name: "Accounting",
      link: "#",
      icon: <ScrollText className="w-4 h-4" />,
    },
    {
      name: "WhatsApp",
      link: "#",
      icon: <Phone className="w-4 h-4" />,
    },
    {
      name: "Log",
      link: "#",
      icon: <ClockFading className="w-4 h-4" />,
    },
    {
      name: "Ticket",
      link: "#",
      icon: <Ticket className="w-4 h-4" />,
    },
  ];
  return (
    <nav aria-label="navbar" className="bg-white shadow-sm ">
      <div className="flex justify-between p-4 px-6 items-center">
        <a className="btn btn-ghost text-xl ">Logo</a>
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gray-100 rounded-full cursor-pointer">
            <User />
          </div>
          <span className="leading-4">
            <h3 className="text-sm">USER</h3>
            <p className="text-xs text-gray-500">Role</p>
          </span>
          <span className="px-4">
            <SunMoon />
          </span>
        </div>
      </div>
      <div className="p-3 px-6 bg-gray-100">
        <ul className="flex justify-between">
          {navMenu.map((menu,index) => (
            <li key={index} >
              <a href={menu.link} className="flex items-center gap-1 text-sm">
                <span>{menu.icon}</span>
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
